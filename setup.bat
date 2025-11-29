@echo off
echo =======================================
echo  Automation Brain? - Windows Setup
echo =======================================
echo.

:: Check if Docker is running
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ? Docker is not running!
    echo Please start Docker Desktop first.
    echo.
    echo 1. Start Docker Desktop from Start Menu
    echo 2. Wait for Docker to be fully started
    echo 3. Run this script again
    pause
    exit /b 1
)

echo ? Docker is running!

:: Navigate to project directory
cd /d C:\automation-brain

:: Pull latest images
echo ?? Pulling Docker images...
docker-compose pull

:: Start services
echo ?? Starting services...
docker-compose up -d

:: Wait for services to start
echo ? Waiting for services to initialize...
timeout /t 60 /nobreak > nul

:: Check service health
echo ?? Checking service health...
docker-compose ps

:: Test connections
echo ?? Testing connections...
docker exec automation-brain-postgres pg_isready -U automation_user && echo ? PostgreSQL: Ready
docker exec automation-brain-redis redis-cli ping && echo ? Redis: Ready
docker exec automation-brain-n8n wget -q --spider http://localhost:5678 && echo ? n8n: Ready

echo.
echo =======================================
echo  ?? Automation Brain? is Running!
echo =======================================
echo.
echo Access URLs:
echo   ?? n8n: http://localhost:5678
echo   ?? Adminer: http://localhost:8080
echo.
echo Credentials:
echo   ?? Username: admin
echo   ?? Password: your_secure_password_2024
echo.
echo Database:
echo   ???  PostgreSQL: localhost:5432
echo   ?? Redis: localhost:6379
echo.
echo ?? Next steps:
echo   1. Open http://localhost:5678 in your browser
echo   2. Log in with admin/your_secure_password_2024
echo   3. Set up your API credentials
echo   4. Import the automation workflow
echo.
pause
