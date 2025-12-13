# Manual n8n Setup Script - Direct Browser Automation
Write-Host "?? Setting up Automation Brain™ manually..." -ForegroundColor Green

# Check n8n status
Write-Host "Checking n8n status..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:5678" -Method Get -TimeoutSec 10
    if ($response.StatusCode -eq 200) {
        Write-Host "? n8n is running!" -ForegroundColor Green
        
        # Open n8n in browser
        Write-Host "Opening n8n in browser..." -ForegroundColor Yellow
        Start-Process "http://localhost:5678"
        
        Write-Host "?? Manual steps required:" -ForegroundColor Cyan
        Write-Host "1. Click 'New' to create workflow" -ForegroundColor White
        Write-Host "2. Click 'Import' and select:" -ForegroundColor White
        Write-Host "   C:\automation-brain\workflows\expert-vetted-automation-factory.json" -ForegroundColor Yellow
        Write-Host "3. Save as: 'Automation Brain™ - Expert Vetted Factory'" -ForegroundColor White
        Write-Host "4. Go to Credentials ? Add Credential" -ForegroundColor White
        Write-Host "5. Add these 3 credentials:" -ForegroundColor White
        
        Write-Host "`n?? CREDENTIALS TO ADD:" -ForegroundColor Green
        Write-Host "OpenAI: Name='openai-credentials', Type='OpenAI', Key='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'" -ForegroundColor Yellow
        Write-Host "GitHub: Name='github-token-credentials', Type='HTTP Header Auth', Value='Bearer ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'" -ForegroundColor Yellow
        Write-Host "Gumroad: Name='gumroad-api-credentials', Type='HTTP Header Auth', Value='Bearer gum_0000000000000000000000000000000000000000000000000000'" -ForegroundColor Yellow
        
        Write-Host "`n? After adding credentials, test the workflow!" -ForegroundColor Green
        Write-Host "Click 'Execute Workflow' to test" -ForegroundColor White
        
    } else {
        Write-Host "? n8n not responding properly" -ForegroundColor Red
    }
} catch {
    Write-Host "? Cannot connect to n8n: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Make sure n8n is running: docker-compose ps" -ForegroundColor Yellow
}

Write-Host "`n?? I'll also create a step-by-step guide for you..." -ForegroundColor Green
