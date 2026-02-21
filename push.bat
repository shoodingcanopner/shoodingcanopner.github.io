@echo off
cd /d "C:\Users\shinj\shoodingcanopner.github.io"
git add .
git commit -m "update: %date% %time%"
git push
echo.
echo 배포 완료! 2-3분 후 사이트에 반영됩니다.
pause