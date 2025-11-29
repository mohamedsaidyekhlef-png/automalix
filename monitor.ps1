# Automation Brain Monitoring Dashboard
while ($true) {
    Clear-Host
    Write-Host "?? AUTOMATION BRAIN™ MONITORING DASHBOARD" -ForegroundColor Green
    Write-Host "=========================================" -ForegroundColor Green
    Write-Host "Last updated: $(Get-Date)" -ForegroundColor Cyan
    
    # Check container status
    Write-Host "`n?? CONTAINER STATUS:" -ForegroundColor Yellow
    docker-compose ps
    
    # Check recent logs
    Write-Host "`n?? RECENT ACTIVITY:" -ForegroundColor Yellow
    docker-compose logs --tail=10
    
    # Check if workflow is active (manual check needed)
    Write-Host "`n?? WORKFLOW STATUS:" -ForegroundColor Yellow
    Write-Host "Check manually at: http://localhost:5678" -ForegroundColor Cyan
    
    Write-Host "`n?? WHAT TO MONITOR:" -ForegroundColor White
    Write-Host "• New files in GitHub: https://github.com/mohamedsaidyekhlef-png/automalix" -ForegroundColor Gray
    Write-Host "• New products on Gumroad: https://gumroad.com/mohamedsaidyekhlef-png" -ForegroundColor Gray
    Write-Host "• Vercel deployments: https://vercel.com/dashboard" -ForegroundColor Gray
    
    Write-Host "`n? Refreshing in 30 seconds..." -ForegroundColor DarkGray
    Start-Sleep -Seconds 30
}
