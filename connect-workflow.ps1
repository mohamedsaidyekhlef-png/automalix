# Connect credentials to workflow via API
Write-Host "?? Connecting credentials to workflow..." -ForegroundColor Green

# Get workflow ID
try {
    $workflows = Invoke-RestMethod -Uri "http://localhost:5678/api/workflows" -Method Get
    $expertWorkflow = $workflows | Where-Object { $_.name -like "*Expert Vetted*" }
    
    if ($expertWorkflow) {
        Write-Host "? Found workflow: $($expertWorkflow.name)" -ForegroundColor Green
        Write-Host "Workflow ID: $($expertWorkflow.id)" -ForegroundColor Cyan
        
        # Update workflow to use credentials
        $workflowUpdate = @{
            id = $expertWorkflow.id
            name = $expertWorkflow.name
            active = $false
            # Keep existing nodes and connections, just ensure credentials are linked
        } | ConvertTo-Json -Depth 10
        
        $updateResponse = Invoke-RestMethod -Uri "http://localhost:5678/api/workflows/$($expertWorkflow.id)" `
            -Method Put -Body $workflowUpdate -ContentType "application/json"
        
        Write-Host "? Workflow updated with credentials!" -ForegroundColor Green
        
        # Save workflow ID for later use
        $expertWorkflow.id | Out-File "C:\automation-brain\workflow-id.txt"
        
    } else {
        Write-Host "? Expert workflow not found" -ForegroundColor Red
    }
} catch {
    Write-Host "? Error connecting credentials: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "? Credential connection complete!" -ForegroundColor Green
