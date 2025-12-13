# Add credentials to n8n via API
Write-Host "?? Adding credentials to Automation Brain™..." -ForegroundColor Green

# Function to add credential via n8n API
function Add-N8NCredential {
    param(
        [string]$Name,
        [string]$Type,
        [hashtable]$Data
    )
    
    $payload = @{
        name = $Name
        type = $Type
        data = $Data
    } | ConvertTo-Json -Depth 5
    
    try {
        $response = Invoke-RestMethod -Uri "http://localhost:5678/api/credentials" `
            -Method Post -Body $payload -ContentType "application/json"
        Write-Host "? Added credential: $Name" -ForegroundColor Green
        return $response
    } catch {
        Write-Host "? Failed to add $Name : $($_.Exception.Message)" -ForegroundColor Red
        return $null
    }
}

# Add OpenAI credential
$openaiData = @{
    apiKey = "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"
}

Add-N8NCredential -Name "openai-credentials" -Type "openAiApi" -Data $openaiData

# Add GitHub credential
$githubData = @{
    name = "Authorization"
    value = "Bearer ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}

Add-N8NCredential -Name "github-token-credentials" -Type "httpHeaderAuth" -Data $githubData

# Add Gumroad credential
$gumroadData = @{
    name = "Authorization"
    value = "Bearer gum_0000000000000000000000000000000000000000000000000000"
}

Add-N8NCredential -Name "gumroad-api-credentials" -Type "httpHeaderAuth" -Data $gumroadData

Write-Host "? All credentials added successfully!" -ForegroundColor Green
