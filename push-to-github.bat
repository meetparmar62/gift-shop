@echo off
echo ========================================
echo  Git Setup for S N Gift Admin Panel
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed!
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo [Step 1/6] Initializing Git repository...
git init
echo.

echo [Step 2/6] Adding all files...
git add .
echo.

echo [Step 3/6] Creating first commit...
git commit -m "Initial commit: Complete admin panel with analytics

Features:
- Admin panel with authentication
- Product, Category, Features, Reviews management
- Instagram gallery manager
- Contact info editor
- Enhanced dashboard analytics
- Price range analysis
- Category distribution charts
- Review analytics
- Business metrics
- Keyboard shortcut access
- Dynamic website integration
- Complete documentation"
echo.

echo [Step 4/6] Setting default branch...
git branch -M main
echo.

echo [Step 5/6] Connecting to GitHub remote...
git remote add origin https://github.com/meetparmar62/gift-shop.git
echo.

echo [Step 6/6] Pushing to GitHub...
echo.
echo NOTE: You will be asked for GitHub credentials
echo Username: meetparmar62
echo Password: Your GitHub password or Personal Access Token
echo.
git push -u origin main

echo.
echo ========================================
echo  SUCCESS! Repository pushed to GitHub
echo ========================================
echo.
echo Visit: https://github.com/meetparmar62/gift-shop
echo.
pause
