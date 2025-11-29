# n8n Automation Setup Script
$n8nUrl = "http://localhost:5678"
$workflowFile = "C:\automation-brain\workflows\expert-vetted-automation-factory.json"

Write-Host "?? Setting up Automation Brain™ via n8n API..." -ForegroundColor Green

# Wait for n8n to be ready
Write-Host "Waiting for n8n to initialize..." -ForegroundColor Yellow
Start-Sleep -Seconds 15

# Check if n8n is responding
try {
    $response = Invoke-RestMethod -Uri "$n8nUrl/healthz" -Method Get
    Write-Host "? n8n is ready!" -ForegroundColor Green
} catch {
    Write-Host "? n8n not ready yet, waiting..." -ForegroundColor Red
    Start-Sleep -Seconds 10
}

# Import workflow directly
Write-Host "Importing expert workflow..." -ForegroundColor Yellow

$workflowContent = Get-Content $workflowFile -Raw
$workflowJson = $workflowContent | ConvertFrom-Json
$workflowJson.name = "Automation Brain™ - Expert Vetted Factory"

# Create workflow via API
$workflowPayload = @{
    name = $workflowJson.name
    nodes = $workflowJson.nodes
    connections = $workflowJson.connections
    active = $false
    settings = $workflowJson.settings
} | ConvertTo-Json -Depth 10

try {
    $workflowResponse = Invoke-RestMethod -Uri "$n8nUrl/api/workflows" -Method Post `
        -Body $workflowPayload -ContentType "application/json"
    
    Write-Host "? Workflow imported successfully!" -ForegroundColor Green
    Write-Host "Workflow ID: $($workflowResponse.id)" -ForegroundColor Cyan
    
    # Save workflow ID for later use
    $workflowResponse.id | Out-File "C:\automation-brain\workflow-id.txt"
    
} catch {
    Write-Host "? Failed to import workflow: $($_.Exception.Message)" -ForegroundColor Red
}

# Setup credentials via API
Write-Host "Setting up credentials..." -ForegroundColor Yellow

# OpenAI Credential
$openaiPayload = @{
    name = "openai-credentials"
    type = "openAiApi"
    data = @{
        apiKey = "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"
    }
} | ConvertTo-Json

try {
    Invoke-RestMethod -Uri "$n8nUrl/api/credentials" -Method Post `
        -Body $openaiPayload -ContentType "application/json"
    Write-Host "? OpenAI credential created!" -ForegroundColor Green
} catch {
    Write-Host "? OpenAI credential failed: $($_.Exception.Message)" -ForegroundColor Red
}

# GitHub Credential
$githubPayload = @{
    name = "github-token-credentials"
    type = "httpHeaderAuth"
    data = @{
        name = "Authorization"
        value = "Bearer ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
} | ConvertTo-Json

try {
    Invoke-RestMethod -Uri "$n8nUrl/api/credentials" -Method Post `
        -Body $githubPayload -ContentType "application/json"
    Write-Host "? GitHub credential created!" -ForegroundColor Green
} catch {
    Write-Host "? GitHub credential failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Gumroad Credential
$gumroadPayload = @{
    name = "gumroad-api-credentials"
    type = "httpHeaderAuth"
    data = @{
        name = "Authorization"
        value = "Bearer gum_0000000000000000000000000000000000000000000000000000"
    }
} | ConvertTo-Json

try {
    Invoke-RestMethod -Uri "$n8nUrl/api/credentials" -Method Post `
        -Body $gumroadPayload -ContentType "application/json"
    Write-Host "? Gumroad credential created!" -ForegroundColor Green
} catch {
    Write-Host "? Gumroad credential failed: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "?? Setup complete! Your Automation Brain™ is ready!" -ForegroundColor Green
Write-Host "Next: Test the workflow by running it manually in n8n" -ForegroundColor Yellow
