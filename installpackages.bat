@echo off
color A
echo The programm will install all necessary packages on your computer, 
:choice
set /P c=Are you sure you want to continue[Y/N]?
if /I "%c%" EQU "Y" goto :somewhere_else
if /I "%c%" EQU "N" goto :somewhere
goto :choice


:somewhere

echo "Goodbye!"
pause 
exit

:somewhere_else
color 4
echo installing packages...
npm install discord.js
echo installed discord.js succesfully!
pause
exit
