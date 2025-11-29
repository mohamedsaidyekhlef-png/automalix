# Execute workflow via API
Write-Host "?? Executing Automation Brain™ workflow..." -ForegroundColor Green

# Get workflow ID
$workflowId = Get-Content "C:\automation-brain\workflow-id.txt" -ErrorAction SilentlyContinue

if ($workflowId) {
    Write-Host "Executing workflow ID: $workflowId" -ForegroundColor Cyan
    
    try {
        # Execute workflow
        $execution = Invoke-RestMethod -Uri "http://localhost:5678/api/workflows/$workflowId/run" -Method Post
        
        Write-Host "? Workflow execution started!" -ForegroundColor Green
        Write-Host "Execution ID: $($execution.id)" -ForegroundColor Cyan
        
        # Monitor execution
        Write-Host "Monitoring execution progress..." -ForegroundColor Yellow
        
        # Wait and check logs
        Start-Sleep -Seconds 10
        
        Write-Host "? Execution initiated! Check logs for progress..." -ForegroundColor Green
        
    } catch {
        Write-Host "? Workflow execution failed: $($_.Exception.Message)" -ForegroundColor Red
    }
} else {
    Write-Host "? Workflow ID not found" -ForegroundColor Red
}

Write-Host "? Test execution complete!" -ForegroundColor Green
