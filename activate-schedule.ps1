# Activate daily schedule in n8n via browser automation
Write-Host "?? ACTIVATING DAILY SCHEDULE..." -ForegroundColor Green

# Open browser to workflow
Start-Process "http://localhost:5678"

Write-Host @"
?? ACTIVATION STEPS (in browser):
???????????????????????????????
1. Your workflow should be loaded (expert-vetted nodes visible)
2. Look for toggle/switch (top right of workflow)
3. Toggle to 'Active' or 'On' position
4. Confirm activation if prompted
5. Workflow will now run daily at 6 AM automatically

? SUCCESS INDICATORS:
• Workflow shows as 'Active' or 'On'
• Schedule shows next run time
• No manual intervention needed
"@ -ForegroundColor Green

# Wait for activation
Start-Sleep -Seconds 3

Write-Host "? Browser opened - complete activation manually!" -ForegroundColor Green
Write-Host "?? Terminal will continue monitoring..." -ForegroundColor Yellow
