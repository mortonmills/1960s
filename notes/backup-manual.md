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
# https://askubuntu.com/a/222333
    # - Create a new folder that you want to use as your folder.

    # For example, type mkdir ~/Desktop in a terminal (Ctrl+Alt+T to open one) to create a folder named Desktop in your home directory.

    # - Edit your configuration.

    # - Edit the file ~/.config/user-dirs.dirs. You can do this by opening a terminal, then enter:

    # gedit ~/.config/user-dirs.dirs

    # - Change the entry for XDG_DESKTOP_DIR to your new desktop folder, or add it, if the entry does not exist. After your edit, the file should look like this:

    # XDG_DESKTOP_DIR="$HOME/Desktop"  
    # XDG_DOWNLOAD_DIR="$HOME/Download"  
    # XDG_TEMPLATES_DIR="$HOME/Templates"  
    # XDG_PUBLICSHARE_DIR="$HOME/Public"  
    # XDG_DOCUMENTS_DIR="$HOME/Documents"  
    # XDG_MUSIC_DIR="$HOME/Music"  
    # XDG_PICTURES_DIR="$HOME/Pictures"  
    # XDG_VIDEOS_DIR="$HOME/Videos"

    # Log out and then log in again and your desktop should show the specified folder.




# setup synaptic touchpad
# https://help.ubuntu.com/community/SynapticsTouchpad
# for persisting changes on restart
# https://askubuntu.com/a/20308

# persistant changes for triple tap for middle mouse button click
# open and add file if not already at this location
# /etc/X11/xorg.conf.d/70-synaptics.conf
# then add this line
# synclient TapButton3=2
# for more information see these links

# https://wiki.archlinux.org/title/Libinput#Button_re-mapping
# https://wiki.archlinux.org/title/Touchpad_Synaptics

# https://askubuntu.com/questions/130393/how-to-configure-the-touchpad-middle-click/288787#288787
# https://askubuntu.com/questions/130393/how-to-configure-the-touchpad-middle-click
# https://unix.stackexchange.com/questions/567974/how-to-make-3-finger-tap-on-touchpad-act-as-middle-mouse-button-for-debian-10-c


# change keyboard layout to chromebook
# https://github.com/rgvxsthi/Braswell-EDGAR-Linux-Fixes





# in GNOME add dash to panel, merges dock with open applications
# first download gnome extension manager
# `sudo apt install gnome-shell-extension-manager`

# once downloaded, open extension manager
# then browse "dash to panel"
# change order to from "Popularity" to either "Downloads" or "Recent"
# download "Dash to Panel" extension

# after that is downloaded, make sure it is enabled in the extension manager
# then open gnome extensions (different than gnome extension manager)
# here find the "dash to panel "extension and change settings if desired

# also can add gnome tweaks for customization options
# `sudo apt install gnome-tweaks`

# https://github.com/home-sweet-gnome/dash-to-panel/wiki/Enable-and-Customize#customize-it
# https://github.com/home-sweet-gnome/dash-to-panel


# addded a 2nd gnome extension to prevent the "window is ready" pop-ups 
# extension is called NoAnnoyance v2, install from gnome extensions 


# setup git client
# https://docs.github.com/en/authentication/connecting-to-github-with-ssh


# sound doesn't work
# https://itsfoss.com/fix-sound-ubuntu-1304-quick-tip/
# ```
# sudo alsa force-reload

# ``` 

# getting loud steady beep when watching audio
# set alsa base debug fixed problem
# https://forums.linuxmint.com/viewtopic.php?t=386118

# screen is black after waking from suspend, screensaver also causes to freeze
# possible solution is to install xscreensaver and will fix
# sudo apt-get install xscreensaver
# https://unix.stackexchange.com/questions/442057/ubuntu-18-04-wont-wake-after-screen-lock-and-blank-suspend-sleep
# https://askubuntu.com/questions/1032633/screen-remains-blank-after-wake-up-from-suspend


# turn brightness up and down make keyboard shortcut
# https://discourse.gnome.org/t/screen-brightness-with-keyboard-shorcuts-osd/9005/2



# setup github with ssh
# https://docs.github.com/en/authentication/connecting-to-github-with-ssh

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


