# Browser Automation for n8n Setup
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName Microsoft.VisualBasic

Write-Host "?? Starting Browser Automation for n8n Setup..." -ForegroundColor Green

# Open n8n in default browser
Start-Process "http://localhost:5678"
Write-Host "? Opened n8n in browser" -ForegroundColor Green

# Wait for page to load
Start-Sleep -Seconds 5

# Create step-by-step browser instructions
$instructions = @"
?? BROWSER AUTOMATION STEPS:
???????????????????????????????

STEP 1: ADD CREDENTIALS
???????????????????????????????
1. Click 'Credentials' in left sidebar
2. Click 'Add Credential' button
3. Add these 3 credentials:

CREDENTIAL 1: OpenAI
- Name: openai-credentials
- Type: OpenAI  
- API Key: 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

CREDENTIAL 2: GitHub
- Name: github-token-credentials
- Type: HTTP Header Auth
- Name: Authorization
- Value: Bearer ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

CREDENTIAL 3: Gumroad
- Name: gumroad-api-credentials
- Type: HTTP Header Auth  
- Name: Authorization
- Value: Bearer gum_0000000000000000000000000000000000000000000000000000

STEP 2: CONNECT CREDENTIALS TO WORKFLOW
???????????????????????????????
1. Your workflow should already be loaded (nodes visible)
2. Click on each HTTP Request node (GitHub and Gumroad)
3. In node settings, select appropriate credential from dropdown
4. GitHub node ? github-token-credentials
5. Gumroad node ? gumroad-api-credentials

STEP 3: TEST WORKFLOW
???????????????????????????????
1. Click 'Execute Workflow' (top right)
2. Watch the magic happen!
3. Monitor progress in terminal logs

STEP 4: ACTIVATE DAILY SCHEDULE
???????????????????????????????
1. Toggle workflow to 'Active' (top right switch)
2. It will run daily at 6 AM automatically
"@

# Save instructions
$instructions | Out-File -FilePath "C:\automation-brain\BROWSER_STEPS.txt" -Encoding UTF8

# Open instructions in notepad
Start-Process "notepad.exe" "C:\automation-brain\BROWSER_STEPS.txt"

Write-Host "? Browser automation instructions created!" -ForegroundColor Green
Write-Host "?? Follow the steps in the notepad window that opened" -ForegroundColor Yellow
Write-Host "?? Focus on the browser window and complete the steps" -ForegroundColor Cyan
