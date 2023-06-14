# BACKUP

---

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

    - You will want to right click and open properties, go down to bottom and select edit this item.
    - Then go to the command area put in the command.
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

---




