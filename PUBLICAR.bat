@echo off
chcp 65001 >nul
title VoleyMind - Publicar online
color 0B

echo.
echo ========================================
echo    PUBLICANDO VOLEYMIND ONLINE...
echo ========================================
echo.

cd /d "%~dp0"

echo [1/3] Agregando cambios...
git add .

echo [2/3] Guardando version...
git commit -m "Actualizacion %date% %time%"

echo [3/3] Subiendo a internet...
git push origin main

echo.
echo ========================================
echo    LISTO! Tu web se actualizo online.
echo    https://ignacioverdi.github.io/Voleymind/
echo ========================================
echo.
echo Espera 1-2 minutos y recarga la pagina.
echo.
pause
