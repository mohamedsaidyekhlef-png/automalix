# Final activation and monitoring
Write-Host "?? FINAL AUTOMATION BRAIN™ ACTIVATION" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green

# 1. Check current status
Write-Host "`n?? CURRENT STATUS:" -ForegroundColor Yellow
docker-compose ps

# 2. Start monitoring
Write-Host "`n?? STARTING MONITORING..." -ForegroundColor Yellow
Start-Job -Name "AutomationBrainMonitor" -ScriptBlock {
    param($path)
    Set-Location $path
    while ($true) {
        Write-Host "`n?? MONITORING..." -ForegroundColor Green
        docker-compose logs --tail=10
        Start-Sleep -Seconds 10
    }
} -ArgumentList "C:\automation-brain"

# 3. Instructions for manual steps
Write-Host "`n? MONITORING STARTED!" -ForegroundColor Green
Write-Host "`n?? NEXT STEPS (Manual via Browser):" -ForegroundColor Cyan
Write-Host "1. Go to: http://localhost:5678" -ForegroundColor White
Write-Host "2. Add 3 credentials (see BROWSER_STEPS.txt)" -ForegroundColor White
Write-Host "3. Connect credentials to HTTP nodes" -ForegroundColor White
Write-Host "4. Click 'Execute Workflow' to test" -ForegroundColor White
Write-Host "5. Toggle to 'Active' for daily runs" -ForegroundColor White

Write-Host "`n?? HELPFUL FILES:" -ForegroundColor Yellow
Write-Host "• Steps: C:\automation-brain\BROWSER_STEPS.txt" -ForegroundColor Gray
Write-Host "• Execution: C:\automation-brain\EXECUTION_STEPS.txt" -ForegroundColor Gray
Write-Host "• Monitoring: This terminal window" -ForegroundColor Gray

Write-Host "`n?? YOUR AUTOMATION BRAIN™ IS READY!" -ForegroundColor Green
Write-Host "Complete the manual steps above to activate expert-vetted template generation!" -ForegroundColor White
