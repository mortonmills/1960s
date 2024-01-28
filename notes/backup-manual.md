# BACKUP

---
## STARTUP
```bash
#!/bin/bash


redshift -O 2000

sudo rfkill block bluetooth
#sudo rfkill unblock bluetooth
chromium-browser %U

```

## BACKUP
```bash
#!/bin/bash
sudo add-apt-repository ppa:dobey/redshift-daily && sudo apt-get update && sudo apt-get install redshift vlc code git gh gtypist vim emacs ghex libreoffice audacity audacious inkscape gimp simplescreenrecorder kolourpaint
# reaper frescobaldi midieditor catfish-file search mousepad pandoc stacer

# make desktop same as home
# setup synaptic touchpad
# https://help.ubuntu.com/community/SynapticsTouchpad
# change keyboard layout to chromebook

# nvm, https://github.com/nvm-sh/nvm
# node and npm, https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
# npm i zx nodemon jsdoc zx -g
# kapeli offline docs
# jsdoc and type inference

# USEFUL COMMANDS
# convert -resize 120 *.png -set filename:f '%t' '%[filename:f].jpg'

```


## MAIN
- github
  - to switch users on github
    ```
    eval "$(ssh-agent -s)"
    ```
- google chromebook
- microsoft onedrive
- microsoft outlook
- cli
- google chromium
  - change downloads location to desktop in
  `chrome://settings/system`

  - Javascript control address here
  `chrome://settings/content/javascript`

  - Making chromium display size smaller. 
    - This was the default command for the launcher:   
      ```chromium-browser %U```
    - To make smaller use this command:     
    - `chromium-browser --force-device-scale-factor=1.25 %U`
    - You will want to right click and open properties, go down to bottom and select edit this item.
    - Then go to the command area put in the command.
    - https://superuser.com/questions/1116767/chrome-ui-size-zoom-levels-in-ubuntu-16-04/1120078#1120078
  - disabled tab hover cards at this address:
  - `chrome://flags/#tab-hover-cards`
  - import bookmarks into chromium

- linux galliumos
  - desktop icon size smaller
  - change desktop background to dark color
  - turned off screen saver in gallium

---

## MISC
- redshift
  - install redshift:
    - https://github.com/jonls/redshift#latest-builds-from-master-branch
    - copy the code for installing ppa here:
      ```bash
      sudo add-apt-repository ppa:dobey/redshift-daily
      ```    
    - after the ppa is added, install redshift:
      ```bash
      sudo apt-get install redshift
      ```
  - adjust preferences:
    ```
    redshift -O 2000
    ``` 
  - (note: that is an -O as in Orange not 0 (zero))
    ```bash 
    redshift -O numberhere
    ``` 
  - the lower the number the redder(more red?) your screen will be.
  
---

## DEV
- libreoffice
- vs code
- git
  - install git
    ```
    sudo apt-get install git
    ```
  - upload ssh key
- gtypist
- vim
- vscode
- ghex
- emac

---

## MUSIC
- playonlinux + mixcraft
- midi editor
- audacity
- audacious (midi player)
  - audacious wasn't playing midi files
    - https://askubuntu.com/questions/801069/audacious-how-to-play-midi-files/801070
  - installed fluidsoundfont

---

## GRAPHICS
- VLC player
- inkscape (vector)
  - install inkscape
  - changing default inkscape template, loading in landscape view.
    - /home/username/.config/inkscape/
    - name must be default.svg
- gimp (raster)
- simplescreenrecorder
- kolourpaint
---




