@echo off
echo ?? Setting up Automation Brain? credentials...

:: Create credentials via n8n API
echo Setting up credentials via n8n API...

:: Wait for n8n to be ready
timeout /t 10 /nobreak > nul

:: Create OpenAI credential
curl -X POST http://localhost:5678/api/credentials ^
  -H "Content-Type: application/json" ^
  -H "X-N8N-API-KEY: n8n-api-key" ^
  -d '{
    "name": "openai-credentials",
    "type": "openAiApi",
    "data": {
      "apiKey": "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"
    }
  }'

:: Create GitHub credential  
curl -X POST http://localhost:5678/api/credentials ^
  -H "Content-Type: application/json" ^
  -H "X-N8N-API-KEY: n8n-api-key" ^
  -d '{
    "name": "github-token-credentials",
    "type": "httpHeaderAuth",
    "data": {
      "name": "Authorization",
      "value": "Bearer ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
  }'

:: Create Gumroad credential
curl -X POST http://localhost:5678/api/credentials ^
  -H "Content-Type: application/json" ^
  -H "X-N8N-API-KEY: n8n-api-key" ^
  -d '{
    "name": "gumroad-api-credentials",
    "type": "httpHeaderAuth",
    "data": {
      "name": "Authorization",
      "value": "Bearer gum_0000000000000000000000000000000000000000000000000000"
    }
  }'

echo ? Credentials setup complete!
pause
