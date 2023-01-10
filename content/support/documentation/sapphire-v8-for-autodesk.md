{
   "date": "2017-08-15T10:35:25+00:00",
   "description": "Sapphire v8 Installation Instructions for Autodesk",
   "title": "Sapphire v8 for Autodesk"
}

[INSTALL INSTRUCTIONS - MAC](#mac)  
[INSTALL INSTRUCTIONS - LINUX](#linux)  

### Installation Instructions - Mac

<a name="mac"></a>

**To Download and install:**

1.  Make sure you have one or more of the following Autodesk products on Mac:

   Smoke - 2010 or greater

2.  Quit Smoke or other host applications that may be running.
3.  **[Download the 8.15 Mac installer](https://cdn.borisfx.com/borisfx/store/SapphireSparkInstall-8.15.dmg)** (150Mb).
4.  Run the installer. When it asks for your passphrase, enter your Mac user login password, and follow the instructions given by the installer.
5.  Restart your host product, and the new plug-ins should appear in your effects menu.

<div>To test out a Spark, select 'Effects' and then 'Sparks' and click on any Spark button while holding down the 'Control' and'Alt' keys. You should find the plug-ins in /usr/discreet/sparks/sapphire_8\. Select a Spark and the name should now appear on the button. Click again on the button to initialize the Spark. Select the source and destination clipsand the Spark interface window should be displayed.</div>

<div>To view on-line documentation after you install the software, go to the /Applications/GenArtsSapphireSparks8 folder and double click on Online Help.html or Online Help.pdf. You can also click on the "About" box while using any plug-in.</div>

**Installation notes:**

*   Sapphire v7 and v8 can both be on your system at the same time, and you can continue using v7 as usual even after installing v7\. However, please be aware that the names of the sparks are the same in both versions, which can lead to some confusion, and sometimes the older version may continue to be used unintentionally.
*   Setup files saved with Sapphire v7 will not load into v8, but we have provided an update_setups utility to automatically convert setup files from v7 to v8\. For more information check the on-line [doc](file:/usr/discreet/sparks/sapphire_8/docs/general-info.html#update-setups) after you install the software.

**New in 8.15:**

*   Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
*   Fixed a bug that prevented the help buttons from working on some Flame setups.
*   Removed erroneous warnings about a missing Reprise directory.
*   Licenses can now be activated off-line using command line tools.
*   When activating licenses offline, support can now see which machines are activated.
*   Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.
*   Fixed a bug that could cause multiple Preset Browsers to start.

**New in 8.14:**

*   Silenced occasional irrelevant warnings when launching the Preset Browser.
*   Fixed another bug that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a rare problem starting the Preset Browser and Flare Editor.

**New in 8.13:**

*   Fixed occasional problems starting the Preset Browser and Flare Editor.
*   Fixed a bug that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a bug that could cause the Flare Editor to hang when drawing element indicators.
*   Improved some license tool error messages.

**New in 8.12:**

*   ZapTo and ZapFrom: Fixed bolt pattern when using GPU.
*   Fixed Show:Skin option in Beauty.
*   Discourage Smoke and Flare from using floating licenses for Flame unless necessary.
*   Glint: fixed artifacts in the upper-left corner.
*   Preset Browser: Fixed incorrect result count when searching.
*   Fixed artifacts in BlurMotion, Rays, and EdgeRays when rendering on GPU.

**New in 8.11:**

*   Fixed a bug in FilmRoll that sometimes made transparent areas opaque.
*   Fixed a bug that could create world-writeable files in the user's home directory.
*   Fixed a crash in the Preset Browser when switching to 'Sample Only' mode
*   Fixed a bug that caused some parameters to not appear in documentation.

**New in 8.1:**

*   Fixed an error in ZapFrom when Show: Edges is used with motion blur.
*   Flare Designer: fixed a crash when creating Texture elements.
*   Fixed an erroneous warning about missing directories on machines running a free trial or floating license.
*   OSX: Fixed a bug that prevented 7 and 8 from using the same license.
*   Added new presets.

**New in 8.01:**

*   Add the name of the preset's effect to the description in the Preset Browser. (Useful for Sparks with a popup containing multiple effects).
*   Fixed thumbnail rendering in the Preset Browser for Sparks with multiple effects.
*   Fixed a bug in saving presets from sparks with a popup with multiple effects. In Sapphire 8, user saved presets would not show in the PresetBrowser. Old presets still won't be visible but all new presets will work correctly.
*   Fixed the Effect filters in the PresetBrowser for some Sparks.
*   Fixed a bug with some effects where loading a preset did not set the effect popup menu correctly.
*   Reduced intensity of some Swish3D presets to speed up renders and avoid Windows GPU driver issues.
*   Fixed license activation problems on Mac.
*   VintageColor2Strip: improved results when Red Filter or Bluegreen Filter is set to black.
*   Fixed a bug where LensFlare and Glare effects would lose their settings when rendered on the timeline in Flame.
*   Improved consistency of default values of point parameters with different aspect-ratio projects.
*   GradientMulti now handles pixel aspect ratio correctly.
*   BleachBypass: Fixed incorrect renders when GrainAmpRed was set to zero.
*   Caustics: fixed artifacts at the edge of the image when using a custom Bumps pattern.

* * *

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](https://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

### Installation Instructions - Linux

<a name="linux">

**To Download and install:**

</a>

<a name="linux">*Make sure you have one or more of the following Autodesk products on Linux:  

Make sure you have one or more of the following Autodesk products on Linux:
Flint  - 2012 or greater, 64-bit <br>
Flame  - 2012 or greater, 64-bit <br>
Inferno - 2012 or greater, 64-bit <br>
Smoke -	2012 or greater, 64-bit <br>
Burn  - 2012 or greater, 64-bit <br>
On your Linux workstation, become root and use the rpm shell command to download (121Mb) and run the appropriate installer:

On your Linux workstation, become root and use the rpm shell command to download (121Mb) and run the appropriate installer:

2.  <a name="linux">**For 64bit systems on RHEL 4 or greater,** type:  
         <tt>rpm -Uvh https://cdn.borisfx.com/borisfx/store/genarts-sapphire-sparks8-8.150-1.x86_64.rpm</tt>  
         or</a> [download](https://cdn.borisfx.com/borisfx/store/genarts-sapphire-sparks8-8.150-1.x86_64.rpm) the rpm file and install it locally.  

    **For older systems, use Sapphire V4:**  
         For 64bit systems on RHEL 3 (pre-2007) type:  
             <tt>rpm -Uvh http://files.genarts.com/sapphire/SapphireSparks4-4.070-1.x86_64.rpm</tt>  
         For 32bit systems on RHEL 4 (Flint 2007 or Burn 32bits only) type:  
             <tt>rpm -Uvh http://files.genarts.com/sapphire/SapphireSparks4-4.061-1.i386.rpm</tt>  
         For 32bit systems on RHEL 3 (older versions of Flint, Smoke, or Burn) type:  
             <tt>rpm -Uvh http://files.genarts.com/sapphire/SapphireSparks4-4.060-1.i386.rpm</tt>  

    If you are reinstalling the same version, use <tt>rpm -Uvh --force</tt> instead of <tt>rpm -Uvh</tt> above.

To test out a Spark, select 'Effects' and then 'Sparks' and click on any Spark button while holding down the 'Control' and 'Alt' keys. You should find the plug-ins in /usr/discreet/sparks/sapphire_8\. Select a Spark and the name should now appear on the button. Click again on the button to initialize the Spark. Select the source and destination clips and the Spark interface window should be displayed.

For on-line help, click on the the Help button on the "Crop/Help" page while using any plug-in, or go to the RedHat start menu and select GenArts Sapphire8 Autodesk -> Sapphire Online Help (HTML) or (PDF).

**Installation notes:**

*   Sapphire v7 and v8 can both be on your system at the same time, and you can continue using v7 as usual even after installing v8\. However, please be aware that the names of the sparks are the same in both versions, which can lead to some confusion, and sometimes the older version may continue to be used unintentionally.
*   Setup files saved with Sapphire v7 will not load into v8, but we have provided an update_setups utility to automatically convert setup files from v7 to v8\. For more information check the on-line [doc](file:/usr/discreet/sparks/sapphire_8/docs/general-info.html#update-setups) after you install the software.

**Burn installation notes:**

*   If you are installing on many remote Burn nodes it may be helpful to set the SAPPHIRE_SILENT environment variable to 1 before running the installer.
*   Note that you need to run the installer on each machine. It will not work if you just copy the files from one machine to another.
*   Make sure you are running Sapphire version 8.15 or greater on any Autodesk systems that might render with Burn. To check the version number, load any spark and the version should be printed out in the shell window where your Autodesk application was started.
*   If you made any custom modifications in the s_config.text or s_lensflares.text files you should make the same changes on each Burn workstation.
*   On Burn, S_Feedback often gives incorrect results because the frames can be rendered on different machines in non-sequential order. Batch trees with S_Feedback should be processed locally.
*   We do not currently support Burn on Red Hat 8\. If you are still running RH8 and can not upgrade to Red Hat Enterprise, please let us know.

**New in 8.15:**

*   Updated CUDA to fix a family of GPU rendering bugs. This may require users with older drivers to update.
*   Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
*   Fixed a bug that prevented the help buttons from working on some Flame setups.
*   Removed erroneous warnings about a missing Reprise directory.
*   Licenses can now be activated off-line using command line tools.
*   When activating licenses offline, support can now see which machines are activated.
*   Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.
*   Fixed a bug that could cause multiple Preset Browsers to start.

**New in 8.14:**

*   Silenced occasional irrelevant warnings when launching the Preset Browser.
*   Fixed another bug that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a rare problem starting the Preset Browser and Flare Editor.

**New in 8.13:**

*   Fixed occasional problems starting the Preset Browser and Flare Editor.
*   Fixed a bug that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a bug that could cause the Flare Editor to hang when drawing element indicators.
*   Improved some license tool error messages.

**New in 8.12:**

*   ZapTo and ZapFrom: Fixed bolt pattern when using GPU.
*   Fixed Show:Skin option in Beauty.
*   Discourage Smoke and Flare from using floating licenses for Flame unless necessary.
*   Glint: fixed artifacts in the upper-left corner.
*   Preset Browser: Fixed incorrect result count when searching.
*   Fixed artifacts in BlurMotion, Rays, and EdgeRays when rendering on GPU.

**New in 8.11:**

*   Fixed a crash in license installer on some versions of CentOS.
*   Fixed a bug in FilmRoll that sometimes made transparent areas opaque.
*   Fixed a bug that could create world-writeable files in the user's home directory.
*   Fixed a crash in the Preset Browser when switching to 'Sample Only' mode
*   Fixed a bug that caused some parameters to not appear in documentation.

**New in 8.1:**

*   Fixed an error in ZapFrom when Show: Edges is used with motion blur.
*   Flare Designer: fixed a crash when creating Texture elements.
*   Fixed an erroneous warning about missing directories on machines running a free trial or floating license.
*   OSX: Fixed a bug that prevented 7 and 8 from using the same license.
*   Added new presets.

**New in 8.01:**

*   Add the name of the preset's effect to the description in the Preset Browser. (Useful for Sparks with a popup containing multiple effects).
*   Fixed thumbnail rendering in the Preset Browser for Sparks with multiple effects.
*   Fixed a bug in saving presets from sparks with a popup with multiple effects. In Sapphire 8, user saved presets would not show in the PresetBrowser. Old presets still won't be visible but all new presets will work correctly.
*   Fixed the Effect filters in the PresetBrowser for some Sparks.
*   Fixed a bug with some effects where loading a preset did not set the effect popup menu correctly.
*   Reduced intensity of some Swish3D presets to speed up renders and avoid Windows GPU driver issues.
*   Fixed license activation problems on Mac.
*   VintageColor2Strip: improved results when Red Filter or Bluegreen Filter is set to black.
*   Fixed a bug where LensFlare and Glare effects would lose their settings when rendered on the timeline in Flame.
*   Improved consistency of default values of point parameters with different aspect-ratio projects.
*   GradientMulti now handles pixel aspect ratio correctly.
*   BleachBypass: Fixed incorrect renders when GrainAmpRed was set to zero.
*   Caustics: fixed artifacts at the edge of the image when using a custom Bumps pattern.

* * *

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).
