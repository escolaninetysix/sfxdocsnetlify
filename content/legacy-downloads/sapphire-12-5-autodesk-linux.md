{
  "date": "2019-12-20T04:00:00.000Z",
   "description": "Sapphire visual effect plug-ins",
   "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-sparks/borisfx-sapphire-sparks2019.5-2019.530-1.0.x86_64.rpm",
   "host": "Autodesk",
   "platform": "Linux 64-Bit .rpm",
  "product": "Sapphire",
   "log_file_path": "/usr/discreet/sparks/sapphire12/s_log.text",
   "require_login": true,
   "title": "Boris Sapphire 2019.53 for Autodesk Linux (RPM)",
   "upgrade_topic": "genarts-sapphire-sparks12-12.",
   "version": 12.53,
   "release_notes": "https://borisfx.com/release-notes/sapphire-2019-5-3-release-notes/",
   "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
   "license_identity": { "productline": "Sapphire", "feature": "sapphire,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1", "api": "sparks", "version": "20190605" },
   "license_names": "sapphire_ae_ofx_sparks_avx_104,sapphire_sparks_162"
}
Note: Before updating to v7.02 or later, please refer to the release notes for possible compatibility implications with the effect formerly known as Technicolor. See 'What's New' below for details.

<hr>

**To Download and install:**

Make sure you have one or more of the following Autodesk products on Linux:
Flint  	2012 or greater, 64-bit
Flame  	2012 or greater, 64-bit
Inferno  	2012 or greater, 64-bit
Smoke  	2012 or greater, 64-bit
Burn  	2012 or greater, 64-bit
On your Linux workstation, become root and use the rpm shell command to download (256Mb) and run the appropriate installer:

To test out a Spark, select 'Effects' and then 'Sparks' and click on any Spark button while holding down the 'Control' and 'Alt' keys. You should find the plug-ins in /usr/discreet/sparks/sapphire_12. Select a Spark and the name should now appear on the button. Click again on the button to initialize the Spark. Select the source and destination clips and the Spark interface window should be displayed.

For on-line help, click on the the Help button on the "Crop/Help" page while using any plug-in, or go to the RedHat start menu and select GenArts Sapphire12 Autodesk -> Sapphire Online Help (HTML) or (PDF).

**Installation notes:**

* Sapphire v9, v10, v11 and v12 can all be on your system at the same time, and you can continue using v9, v10 and v11 as usual even after installing v12. However, please be aware that the names of the sparks are the same in all of the versions, which can lead to some confusion, and sometimes the older version may continue to be used unintentionally.
* Setup files saved with Sapphire v9, v10 and v11 will not load into v12, but we have provided an update_setups utility to automatically convert setup files from v9, v10 and v11 to v12. For more information check the on-line doc after you install the software.

**Burn installation notes:**

* If you are installing on many remote Burn nodes it may be helpful to set the SAPPHIRE_SILENT environment variable to 1 before running the installer.
* Note that you need to run the installer on each machine. It will not work if you just copy the files from one machine to another.
* Make sure you are running Sapphire version 12.0 or greater on any Autodesk systems that might render with Burn. To check the version number, load any spark and the version should be printed out in the shell window where your Autodesk application was started.
* If you made any custom modifications in the s_config.text or s_lensflares.text files you should make the same changes on each Burn workstation.
* On Burn, S_Feedback often gives incorrect results because the frames can be rendered on different machines in non-sequential order. Batch trees with S_Feedback should be processed locally.
* We do not currently support Burn on Red Hat 8. If you are still running RH8 and can not upgrade to Red Hat Enterprise, please let us know.

<hr>

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see https://www.gnu.org/licenses/lgpl-2.1.html for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

### What's New In Sapphire 2019.53:
* Flame: Crash when S_Retime was inserted after a BurnInMetadata node was fixed.
* Windows: Fixed the cancel button in the "Plugin is starting the <App>" dialog.
* ParallaxStrips: Fixed a crash with certain parameter values when running on the GPU.
* EdgeRays: Fixed a crash when "Rays Res" is set to anything other than Full.
* Mocha on macOS: To close Mocha, press command-q shortcut key or select Quit from File menu.
* Effect Builder: Fixed the "Show Checkerboard" setting.
* Preset Browser: Fixed an issue where the preset browser won't launch on large footage.  For now the preset browser will use sample footage when the input clip is too large.
* Mac OS: Fixed a bug where the "Deactivate License" dialog wasn't showing up during uninstall on Mac OS 10.13 and 10.14.
* Mac OS: Fixed a warning that the certificate has expired during install.
* Licensing: Improved license activation and deactivation where licensing one machine would deactivate another on certain network configurations.
* Preset Browser: Improve response time when the "Static Thumbnail" checkbox is changed (in S_Effect and S_LemsFlare).
* Flare Designer, Preset Browser, and Effect Builder: Improve timeline behavior.
* Flare Designer, Preset Browser, and Effect Builder: Remove Show/Hide Menu.
* Flare Designer and Effect Builder: Fixed the save button.

### What's New In Sapphire 2019.52:
* Removed a one-pixel wide black border in the preview panes for the Sapphire Preset Browser.
