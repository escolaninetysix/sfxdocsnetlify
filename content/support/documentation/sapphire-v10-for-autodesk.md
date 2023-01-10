{
  "date": "2017-07-20T16:08:44Z",
  "description": "Installation Instructions for Sapphire v10 for Autodesk",
  "title": "Sapphire v10 for Autodesk"
}
Note: Before updating to v7.02 or later, please refer to the release notes for possible compatibility implications with the effect formerly known as Technicolor. See 'What's New' below for details.

[INSTALL INSTRUCTIONS - MAC](#mac)
[INSTALL INSTRUCTIONS - LINUX](#linux)

<hr>

**INSTALL INSTRUCTIONS - MAC**
<a name="mac"></a>

**To Download and install:**

1. Make sure you have one or more of the following Autodesk products on Mac:
   Smoke	2010 or greater | Flame	2016 or greater
2. Quit Smoke or other host applications that may be running.
3. [Download the 10.1 Mac installer (198Mb)](/legacy-downloads/?&product=Sapphire "Sapphire v10 Mac installer").
4. Run the installer. When it asks for your passphrase, enter your Mac user login password, and follow the instructions given by the installer.
5. Restart your host product, and the new plug-ins should appear in your effects menu.

To test out a Spark, select 'Effects' and then 'Sparks' and click on any Spark button while holding down the 'Control' and'Alt' keys. You should find the plug-ins in /usr/discreet/sparks/sapphire_10. Select a Spark and the name should now appear on the button. Click again on the button to initialize the Spark. Select the source and destination clipsand the Spark interface window should be displayed.

To view on-line documentation after you install the software, go to the /Applications/GenArtsSapphireSparks10 folder and double click on Online Help.html or Online Help.pdf. You can also click on the "About" box while using any plug-in.

**Installation notes:**

* Sapphire v9 and v10 can both be on your system at the same time, and you can continue using v9 as usual even after installing v10. However, please be aware that the names of the sparks are the same in both versions, which can lead to some confusion, and sometimes the older version may continue to be used unintentionally.
* Setup files saved with Sapphire v9 will not load into v10, but we have provided an update_setups utility to automatically convert setup files from v9 to v10. For more information check the on-line doc after you install the software.

**New in v10.1:**

* Preset Browser: Added the ability to specify whether the thumbnails use static images or dynamic rendering.

<hr>

**INSTALL INSTRUCTIONS - LINUX**
<a name="linux"></a>

**To Download and install:**

Make sure you have one or more of the following Autodesk products on Linux:
Flint  	2012 or greater, 64-bit
Flame  	2012 or greater, 64-bit
Inferno  	2012 or greater, 64-bit
Smoke  	2012 or greater, 64-bit
Burn  	2012 or greater, 64-bit
On your Linux workstation, become root and use the rpm shell command to download (201Mb) and run the appropriate installer:

For 64bit systems on RHEL 4 or greater, type:
rpm -Uvh http://files.genarts.com/sapphire/genarts-sapphire-sparks10-10.100-1.x86_64.rpm
or download the rpm file and install it locally.

For older systems, use Sapphire V4:
For 64bit systems on RHEL 3 (pre-2007) type:
rpm -Uvh http://files.genarts.com/sapphire/SapphireSparks4-4.070-1.x86_64.rpm
For 32bit systems on RHEL 4 (Flint 2007 or Burn 32bits only) type:
rpm -Uvh http://files.genarts.com/sapphire/SapphireSparks4-4.061-1.i386.rpm
For 32bit systems on RHEL 3 (older versions of Flint, Smoke, or Burn) type:
rpm -Uvh http://files.genarts.com/sapphire/SapphireSparks4-4.060-1.i386.rpm
If you are reinstalling the same version, use rpm -Uvh --force instead of rpm -Uvh above.

To test out a Spark, select 'Effects' and then 'Sparks' and click on any Spark button while holding down the 'Control' and 'Alt' keys. You should find the plug-ins in /usr/discreet/sparks/sapphire_10. Select a Spark and the name should now appear on the button. Click again on the button to initialize the Spark. Select the source and destination clips and the Spark interface window should be displayed.

For on-line help, click on the the Help button on the "Crop/Help" page while using any plug-in, or go to the RedHat start menu and select GenArts Sapphire10 Autodesk -> Sapphire Online Help (HTML) or (PDF).

**Installation notes:**

* Sapphire v9 and v10 can both be on your system at the same time, and you can continue using v9 as usual even after installing v10. However, please be aware that the names of the sparks are the same in both versions, which can lead to some confusion, and sometimes the older version may continue to be used unintentionally.
* Setup files saved with Sapphire v9 will not load into v10, but we have provided an update_setups utility to automatically convert setup files from v9to v10. For more information check the on-line doc after you install the software.

**Burn installation notes:**

* If you are installing on many remote Burn nodes it may be helpful to set the SAPPHIRE_SILENT environment variable to 1 before running the installer.
* Note that you need to run the installer on each machine. It will not work if you just copy the files from one machine to another.
* Make sure you are running Sapphire version 10.0 or greater on any Autodesk systems that might render with Burn. To check the version number, load any spark and the version should be printed out in the shell window where your Autodesk application was started.
* If you made any custom modifications in the s_config.text or s_lensflares.text files you should make the same changes on each Burn workstation.
* On Burn, S_Feedback often gives incorrect results because the frames can be rendered on different machines in non-sequential order. Batch trees with S_Feedback should be processed locally.
* We do not currently support Burn on Red Hat 8. If you are still running RH8 and can not upgrade to Red Hat Enterprise, please let us know.

**New in v10.1:**
Preset Browser: Added the ability to specify whether the thumbnails use static images or dynamic rendering.

<hr>

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see http://www.gnu.org/licenses/lgpl-2.1.html for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/qt-everywhere-opensource-src-4.7.2.tar.gz).
