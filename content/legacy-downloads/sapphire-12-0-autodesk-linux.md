{
   "date": "2019-12-11T04:00:00.000Z",
   "description": "Sapphire visual effect plug-ins",
   "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-sparks/borisfx-sapphire-sparks2019-2019.060-1.0.x86_64.rpm",
   "host": "Autodesk",
   "platform": "Linux 64-Bit .rpm",
   "product": "Sapphire",
   "log_file_path": "/usr/discreet/sparks/sapphire12/s_log.text",
   "require_login": true,
   "title": "Boris Sapphire 2019 for Autodesk Linux (RPM)",
   "upgrade_topic": "genarts-sapphire-sparks12-12.",
  "version": 12.06,
   "release_notes": "https://borisfx.com/release-notes/sapphire-2019-0-6-release-notes/",
   "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
   "license_identity": { "productline": "Sapphire", "feature": "sapphire", "api": "sparks", "version": "20181031" },
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
On your Linux workstation, become root and use the rpm shell command to download (201Mb) and run the appropriate installer:

To test out a Spark, select 'Effects' and then 'Sparks' and click on any Spark button while holding down the 'Control' and 'Alt' keys. You should find the plug-ins in /usr/discreet/sparks/sapphire_12. Select a Spark and the name should now appear on the button. Click again on the button to initialize the Spark. Select the source and destination clips and the Spark interface window should be displayed.

For on-line help, click on the the Help button on the "Crop/Help" page while using any plug-in, or go to the RedHat start menu and select GenArts Sapphire12 Autodesk -> Sapphire Online Help (HTML) or (PDF).

**Installation notes:**

* Sapphire v9, v10, v11 and v12 can all be on your system at the same time, and you can continue using v9 and v10 as usual even after installing v12. However, please be aware that the names of the sparks are the same in all of the versions, which can lead to some confusion, and sometimes the older version may continue to be used unintentionally.
* Setup files saved with Sapphire v9 and v10 will not load into v12, but we have provided an update_setups utility to automatically convert setup files from v9, v10 and v11 to v12. For more information check the on-line doc after you install the software.

**Burn installation notes:**

* If you are installing on many remote Burn nodes it may be helpful to set the SAPPHIRE_SILENT environment variable to 1 before running the installer.
* Note that you need to run the installer on each machine. It will not work if you just copy the files from one machine to another.
* Make sure you are running Sapphire version 12.0 or greater on any Autodesk systems that might render with Burn. To check the version number, load any spark and the version should be printed out in the shell window where your Autodesk application was started.
* If you made any custom modifications in the s_config.text or s_lensflares.text files you should make the same changes on each Burn workstation.
* On Burn, S_Feedback often gives incorrect results because the frames can be rendered on different machines in non-sequential order. Batch trees with S_Feedback should be processed locally.
* We do not currently support Burn on Red Hat 8. If you are still running RH8 and can not upgrade to Red Hat Enterprise, please let us know.

<hr>

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see https://www.gnu.org/licenses/lgpl-2.1.html for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

### What's New In Sapphire 2019.06:
* Windows: Fixed the cancel button in the 'Starting Mocha' dialog.
* EdgeRays: Fixed a crash when "Rays Res" is set to anything other than Full.
* Added environment variables to the Sapphire Preset Browser to set non-standard search locations for presets: SAPPHIRE_LOAD_PRESET_PATH and SAPPHIRE_SAVE_PRESET_PATH.

### What's New In Sapphire 2019.05:
* Fixed crop in S_PanAndZoom.
* Improved the stability of nodelocked licenses.
* Fixed a slowdown in the first frame on some offline machines.

### What's New In Sapphire 2019.04:
* Improved stability of Sapphire when using the GPU Fixed S_Effect and S_Transition in Burn, Flare, and Flame Assist

### What's New In Sapphire 2019.03
* Fixed a slowdown when Sapphire is first applied on some offline systems using activation-keys

### What’s New in Sapphire 2019.02 for Autodesk
* Fixed mocha tracking on fields
* Minor installer improvements
* Improved proxy server support for installing and removing licenses
* Mocha Improvements:
    + Stability improvements
    + Memory usage improvements
    + Fixed a crash when the Mocha cache directory is missing
    + Fixed a crash opening certain old sapphire v11 mocha projects
* Minor speed improvements in the Preset Browser, Builder and Flare Editor
* Minor preset improvements

### What's New In Sapphire 2019.01
<br>
#### New Effect- PixelSort (Stylize Category)
+ S_PixelSort is a damage effect that sorts the pixels in the image along different patterns of lines. There are three modes: "Linear" sorts along parallel lines, "Radial" sorts along lines radiating from a controllable center point, and "Circular" sorts along concentric circles. PixelSort sorts the pixels based on the relative values of the pixels that are over or under the specified threshold.

#### New Effect- WhipLash (Transition Category)
+ S_WhipLash is a new transition that is an enhanced, modern 2D version of Swish3D. It pans between frames of the transition input clips while applying motion blur as well as allowing the RGB channels to be split for a chromatic aberration look.


#### LensFlare Improvements
+ More than 25 new, high-quality LensFlare presets added.
+ New workflow with the preset browser embedded in the Flare Designer -- provides a live preview while browsing flare presets.
+ New controls and features on the Gradient controls inside the Flare Designer.
+ New "Components" - special complex elements to make creating advanced flares easier.
+ New MultiStreak element.
+ Several new controls for MultiStreak and MultiSpot.
 
#### Builder Improvements (After Effects, Premiere, Resolve, and Avid Only)
+ New Animated Shape node.
+ New Builder Presets for S_Effect and S_Transition including "Hand-drawn" transitions. 

#### GPU improvements
+ Optimized performance for Nvidia CUDA cards in Blackmagic Resolve and Adobe Premiere Pro CC.

#### Mocha Improvements
+ **Mocha Essentials UI** - Mocha now offers a set of UI workspace options to let you choose the UI experience that best suits the task at hand. It opens up by default in the new Essentials mode which presents a simpler UI layout - perfect for standard tracking tasks. The original Mocha UI with all the bells and whistles is still available by choosing the Classic workspace from the menu on the top along with Roto and Big Picture workspaces.
+ **Mocha Magnetic and Freehand Drawing Tools** - New Magnetic spline tools will automatically snap to contours in the image making it vastly quicker to roto complex objects. The new Freehand drawing tools also allow freehand tracing of masks for quick loose masking.
+ **Mocha Primitive Shape Tools** - New Circular and Rectangular tools for simple creation of primitive shape masks.
+ **Mocha UI Enhancements** - Full support for High DPI monitors on windows and improved Retina support on Mac along with numerous additional UI enhancements.
