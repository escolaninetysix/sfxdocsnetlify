{
   "date": "2017-08-04T15:01:31+00:00",
   "description": "Monsters v5 Linux Installers from Boris FX (GenArts)",
   "title": "Monsters v5 Linux Installers"
}

**INSTALL INSTRUCTIONS**

You can download and use a fully functional copy of the Monsters Companion Pack. A protective watermark will be applied to the results unless you have a license.

**Pre-requisites**

Please ensure that your Autodesk/Discreet software is an appropriate version.

The Companion Pack is intended for use with:

**32 bit versions**
Flame 9.0 - 9.4
Flint 9.0 - 9.4
Smoke 6.5 - 6.9
Burn 2.0 or higher

**64 bit versions**
Flame 9.5+ (e.g. Flame 2009)
Flint 9.5+ (e.g. Flint 2009)
Smoke 7.0+ (e.g. Smoke 2009)
Burn 2.0 or higher

Downloads for **linux** currently available are: 

<a href="https://cdn.borisfx.com/borisfx/store/monsters/Companion32_V5.0.900_linux.tar.gz">Download for Autodesk/Discreet linux 32bits</a>(26 Mb)
<a href="https://cdn.borisfx.com/borisfx/store/monsters/Companion64_V5.0.900_linux.tar.gz">Download for Autodesk/Discreet linux 64bits</a>(26 Mb)

Downloads for **burn on linux** currently available are:

[Download for Autodesk/Discreet burn 32bits(](https://cdn.borisfx.com/borisfx/store/monsters/Companion32_V5.0.900_burn.tar.gz)26 Mb)
<a href="https://cdn.borisfx.com/borisfx/store/monsters/Companion64_V5.0.900_linux.tar.gz">Download for Autodesk/Discreet burn 64bits</a>(26 Mb)

Downloads for **irix** currently available are:

[Download for Autodesk/Discreet irix 32bits](https://cdn.borisfx.com/borisfx/store/monsters/Companion32_V5.0.900_irix.tar.gz)(30 Mb)
<a href="https://cdn.borisfx.com/borisfx/store/monsters/Companion64_V5.0.900_irix.tar.gz">Download for Autodesk/Discreet irix 64bits</a>(42 Mb)


**Installation for both linux and burn on linux**

1. Create a temporary directory on your linux machine.
e.g. your_prompt> mkdir /var/tmp/downloads
2. Download your selected version to this directory on your linux machine.
3. Go to the temporary directory on your machine.
e.g. your_prompt> cd /var/tmp/downloads
4. Unpack the distribution file.
e.g. your_prompt> tar xvzf Companion32_V5.0.900_burn.tar.gz
5. Become 'su' if you have not already done so.
your_prompt> su
Password: enter your root password
6. Start the installation procedure by going to the directory created when unpacking the distribution tar file:
e.g. root_prompt> cd *companion*
root_prompt> ./install_s6
7. You will be asked if you are ready to read the License Agreement. Respond y[enter] or n[enter].
Installation will end at this point if you choose n[enter].
8. After reading the License Agreement you will be asked if you accept it or not. Choose y[enter] or n[enter].
Installation will end at this point if you choose n[enter].
9. Everything needed will then be automatically installed. (There are no options to worry about).


**Installation on irix**

1. Create a temporary directory on your irix machine.
e.g. your_prompt> mkdir /var/tmp/downloads
2. Download your selected version to this directory on your irix machine.
3. Go to the temporary directory on your machine.
e.g. your_prompt> cd /var/tmp/downloads
4. Unpack the distribution file.
your_prompt> gzip -d Companion32_V5.0.900_irix.tar.gz
your_prompt> tar xvf Companion32_V5.0.900_irix.tar
5. Become 'su' if you have not already done so.
your_prompt> su
Password: enter your root password
6. Start the installation procedure:
root_prompt> ./install_s6
7. Read the SpeedSix License agreement (presented in a dialog box). Press the Accept or Decline button. Installation will end at this point if you press Decline.
8. A dialog box will pop up informing you that swmgr is about to start. Press the OK button to continue. The swmgr GUI will then appear, set up to install the Raptors.
9. Press the Start button to install everything automatically, or the Customize Installation button to see the components of the Companion Pack Release. In this case, press Start when you are ready to install.
10. When installation is complete, you will be presented with a dialog by swmgr asking if you wish to continue installing, or exit now. Choose the exit option by pressing the Exit button.
11. swmgr will exit - possibly after a (potentially long) delay while it re-quickstarts whatever ELF binaries it thinks it needs to.
