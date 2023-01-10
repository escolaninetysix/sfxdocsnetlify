{
   "date": "2017-08-07T12:06:17+00:00",
   "description": "Installation Instructions for Monsters v5 Autodesk Linux from Boris FX / GenArts",
   "title": "Monsters v5 Autodesk Linux"
}

**INSTALL INSTRUCTIONS**

**Pre-requisites**
Please ensure that your Autodesk/Discreet software is an appropriate version.

The Monsters are intended for use with:

**32 bit versions:**
Flame 9.0 - 9.4
Flint 9.0 - 9.4
Smoke 6.5 - 6.9
Burn 2.0 or higher

**64 bit versions:**
Flame 9.5+ (e.g. Flame 2009)
Flint 9.5+ (e.g. Flint 2009)
Smoke 7.0+ (e.g. Smoke 2009)
Burn 2.0 or higherer.

A full installation of the Monsters will require about 200MBytes free space on the /usr filesystem. You will also need at least 200MBytes of additional free space for temporary storage during installation (i.e. to unpack the compressed TAR file containing the distribution).

Downloads currently available for linux are:

<span style="font-size: 1rem;"><a href="https://cdn.borisfx.com/borisfx/store/monsters/monsters_linux_v5.0_discreet/V5.0_32bits/s6-mon-discreet-linux-v50-706.tar.gz">Download Monsters V5.0 for Autodesk/Discreet Linux 32bits(63 Mb)&nbsp;</a></span>

<span style="font-size: 1rem;"><a href="https://cdn.borisfx.com/borisfx/store/monsters/monsters_linux_v5.0_discreet/V5.0_64bits/s6-mon-discreet64-linux-v50-706.tar.gz">Download Monsters V5.0 for Autodesk/Discreet Linux 64bits(69 Mb)</a></span>

Downloads currently available for linux burn are:

[Download Monsters V5.0 for Autodesk/Discreet burn 32bits(46 Mb) ](https://cdn.borisfx.com/borisfx/store/monsters/monsters_burn_v5.0_discreet/V5.0_32bits/s6-mon-burn-linux-v50-706.tar.gz)

[Download Monsters V5.0 for Autodesk/Discreet burn 64bits(46 Mb)](https://cdn.borisfx.com/borisfx/store/monsters/monsters_burn_v5.0_discreet/V5.0_64bits/s6-mon-burn64-linux-v50-706.tar.gz)

Downloads currently available for irix are:

[Download Monsters V5.0 for Autodesk/Discreet Irix 32bits(63 Mb) ](https://cdn.borisfx.com/borisfx/store/monsters/monsters_v5.0_discreet/V5.0_32bits/s6-mon-discreet32-irix-v50.704.tar.gz)

[Download Monsters V5.0 for Autodesk/Discreet Irix 64bits(69 Mb)](https://cdn.borisfx.com/borisfx/store/monsters/monsters_v5.0_discreet/V5.0_64bits/s6-mon-discreet64-irix-v50.703.tar.gz)

*Chose the appropriate version for your hardware.*

**Installation on linux**

* Create a temporary directory on your linux machine. e.g. your_prompt> mkdir /var/tmp/downloads

* Download your selected version to this directory on your linux machine.

* <span style="font-size: 1rem;">Go to the temporary directory on your machine.&nbsp;</span><span style="font-size: 1rem;">e.g. your_prompt&gt; cd /var/tmp/downloads</span>

* <span style="font-size: 1rem;">Unpack the distribution file.&nbsp;</span><span style="font-size: 1rem;">e.g. your_prompt&gt; tar xvzf s6-mon-linux-v50-706.tar.gz</span>

* <span style="font-size: 1rem;">Become 'su' if you have not already done so.&nbsp;</span><span style="font-size: 1rem;">your_prompt&gt; su&nbsp;<br></span><span style="font-size: 1rem;">Password: enter your root password</span>

* Start the installation procedure: root_prompt> cd s6discreetlinux?706 root_prompt> ./install_s6

* You will be asked if you are ready to read the License Agreement. Respond y[enter] or n[enter]. Installation will end at this point if you choose n[enter].

* After reading the License Agreement you will be asked if you accept it or not. Choose y[enter] or n[enter]. Installation will end at this point if you choose n[enter].

* Everything needed will then be automatically installed. (There are five RPM packages and two other components all of these are required and there are no options to worry about).

**Installation on burn**

* Create a temporary directory on your burn machine. e.g. your_prompt> mkdir /var/tmp/downloads

* Download your selected version of burn to this directory on your burn machine.

* Go to the temporary directory on your burn machine. e.g. your_prompt> cd /var/tmp/downloads

* Unpack the distribution file. e.g. your_prompt> tar xvzf s6-mon-burn-linux-v50-706.tar.gz

* Become 'su' if you have not already done so. your_prompt> su Password: enter your root password

* Start the installation procedure: root_prompt> cd s6burnlinux?706 root_prompt> ./install_s6

* You will be asked if you are ready to read the License Agreement. Respond y[enter] or n[enter]. Installation will end at this point if you choose n[enter].

* After reading the License Agreement you will be asked if you accept it or not. Choose y[enter] or n[enter]. Installation will end at this point if you choose n[enter].

* Everything needed will then be automatically installed. (There are four RPM packages and one other component - all of these are required and there are no options to worry about).

**Installation on irix**

* Create a temporary directory on your linux machine. e.g. your_prompt> mkdir /var/tmp/downloads
* Download your selected version to this directory on your linux machine.
* Go to the temporary directory on your machine. e.g. your_prompt> cd /var/tmp/downloads
* Unpack the distribution file. your_prompt> gzip -d s6-mon-discreet32-irix-v50.704.tar.gz your_prompt> tar xvf s6-mon-discreet32-irix-v50.704.tar
* Become 'su' if you have not already done so. your_prompt> su Password: enter your root password
* Start the installation procedure: root_prompt> ./install_s6
* Read the SpeedSix License agreement (presented in a dialog box). Press the Accept or Decline button. Installation will end at this point if you press Decline.
* A dialog box will pop up informing you that swmgr is about to start. Press the OK button to continue. The swmgr GUI will then appear, set up to install the Monsters.
* Press the Start button to install everything automatically, or the Customize Installation button to see the components of the Monsters release. In this case, press Start when you are ready to install (perhaps after deselecting some components).
* When installation is complete, you will be presented with a dialog by swmgr asking if you wish to continue installing, or exit now. Choose the exit option by pressing the Exit button.
* swmgr will exit; possibly after a (potentially long) delay while it re-quickstarts whatever ELF binaries it thinks it needs to.
