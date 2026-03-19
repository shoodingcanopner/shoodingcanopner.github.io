@echo off
cd /d "C:\Users\user\shoodingcanopner.github.io"
git add .
git commit -m "update: %date% %time%"
git push
echo.
echo  Pushing has been completed. The blog will be fixed in 2-3 minutes.
pause