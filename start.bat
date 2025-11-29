@echo off
echo ?? Starting Automation Brain?...
cd /d C:\automation-brain

:: Check if Docker is running
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo ? Docker Desktop is not running!
    echo Starting Docker Desktop...
    start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
    echo Waiting for Docker to start...
    timeout /t 30 /nobreak > nul
)

:: Start services
docker-compose up -d

:: Wait for startup
echo ? Starting services...
timeout /t 45 /nobreak > nul

:: Open browser
start http://localhost:5678

echo ? Automation Brain? is running!
echo Open http://localhost:5678 in your browser
echo Username: admin
echo Password: your_secure_password_2024
