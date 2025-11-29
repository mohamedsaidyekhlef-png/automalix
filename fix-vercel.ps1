# Fix Vercel deployment
Write-Host "?? Fixing Vercel deployment..." -ForegroundColor Yellow

# Test Vercel connection
try {
    $vercelTest = Invoke-RestMethod -Uri "https://api.vercel.com/v6/deployments" -Headers @{Authorization = "Bearer cEgUPGSgUbdb4JxkN0EmrAZ3"} -Method Get
    Write-Host "? Vercel API connection successful" -ForegroundColor Green
} catch {
    Write-Host "? Vercel API test failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Create proper Vercel deployment trigger
$vercelDeploy = @{
    name = "expert-template-deployment"
    project = "automalix"
    target = "production"
    gitSource = @{
        type = "github"
        repo = "mohamedsaidyekhlef-png/automalix"
        ref = "main"
    }
} | ConvertTo-Json -Depth 3

try {
    # Use the deploy hook we have
    $deployResponse = Invoke-RestMethod -Uri "https://api.vercel.com/v1/integrations/deploy-hook/6Wf8Z5K2nL9x3Hb4Vc7NmA1XyZp2Cd5E8Fj3Lu6Qp9RmKa4NvB2" `
        -Method Post -ContentType "application/json"
    
    Write-Host "? Vercel deployment triggered successfully!" -ForegroundColor Green
    Write-Host "Deployment initiated" -ForegroundColor Cyan
    
} catch {
    Write-Host "? Vercel deployment failed: $($_.Exception.Message)" -ForegroundColor Red
    
    # Alternative: Trigger via GitHub push
    Write-Host "Trying GitHub-based deployment..." -ForegroundColor Yellow
}
