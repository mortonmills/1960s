#!/bin/bash


redshift -O 2000

sudo rfkill block bluetooth
#sudo rfkill unblock bluetooth
chromium-browser %U



# USEFUL COMMANDS
# sudo add-apt-repository ppa:dobey/redshift-daily && sudo apt-get update && sudo apt-get install redshift vlc code git gh gtypist vim emacs ghex libreoffice audacity audacious inkscape gimp simplescreenrecorder 
# convert -resize 120 *.png -set filename:f '%t' '%[filename:f].jpg'
