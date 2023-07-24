#!/bin/bash

redshift -O 2000

sudo rfkill block bluetooth
#sudo rfkill unblock bluetooth
chromium-browser %U