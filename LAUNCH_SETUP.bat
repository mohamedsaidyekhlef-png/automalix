@echo off
echo ?? AUTOMATION BRAIN? SETUP LAUNCHER
echo ====================================
echo.

:: Open n8n in browser
echo Opening n8n in your browser...
start http://localhost:5678

:: Open your GitHub repo
echo Opening your GitHub repository...
start https://github.com/mohamedsaidyekhlef-png/automalix

:: Open your Gumroad
echo Opening your Gumroad dashboard...
start https://gumroad.com/mohamedsaidyekhlef-png

:: Open Vercel dashboard
echo Opening Vercel dashboard...
start https://vercel.com/dashboard

:: Show instructions
echo.
echo ?? SETUP INSTRUCTIONS:
echo =====================
echo 1. Follow the instructions in: C:\automation-brain\SETUP_INSTRUCTIONS.txt
echo 2. Import the workflow: C:\automation-brain\workflows\expert-vetted-automation-factory.json
echo 3. Add the 3 credentials as described
echo 4. Test with "Execute Workflow"
echo.
echo ?? Files to use:
echo ? Workflow: C:\automation-brain\workflows\expert-vetted-automation-factory.json
echo ? Instructions: C:\automation-brain\SETUP_INSTRUCTIONS.txt
echo ? Config: C:\automation-brain\config.js
echo.
echo ?? After setup, your system will:
echo ? Generate expert-vetted templates daily
echo ? Auto-deploy to GitHub ? Vercel
echo ? Auto-list on Gumroad
echo ? Create professional marketing content
echo.
echo Press any key to show detailed instructions...
pause > nul

:: Open instructions file
notepad C:\automation-brain\SETUP_INSTRUCTIONS.txt
