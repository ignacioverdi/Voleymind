@echo off
chcp 65001 >nul
title VoleyMind - Conectar con GitHub (una sola vez)
color 0E

echo.
echo ============================================
echo    CONECTANDO ESTA CARPETA CON GITHUB
echo    (esto se hace una sola vez)
echo ============================================
echo.

cd /d "%~dp0"

echo [1/6] Iniciando git...
git init

echo [2/6] Agregando archivos...
git add .

echo [3/6] Guardando version...
git commit -m "Version demo VoleyMind"

echo [4/6] Configurando rama principal...
git branch -M main

echo [5/6] Conectando con tu repositorio...
git remote remove origin 2>nul
git remote add origin https://github.com/ignacioverdi/Voleymind.git

echo [6/6] Subiendo a internet (puede pedir login)...
git push -u origin main --force

echo.
echo ============================================
echo    LISTO! Carpeta conectada.
echo    De ahora en mas usa PUBLICAR.bat
echo ============================================
echo.
pause
