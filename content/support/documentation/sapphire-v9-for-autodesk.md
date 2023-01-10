{
   "date": "2017-08-10T11:17:13+00:00",
   "description": "Sapphire v9 for Autodesk",
   "title": "Sapphire v9 for Autodesk"
}

### Install Instructions

[INSTALL INSTRUCTIONS - MAC](#mac)  

[INSTALL INSTRUCTIONS - LINUX](#linux)

### Mac Installer(s)

<a name="mac"></a>  

**To Download and install:**

1.  Make sure you have one or more of the following Autodesk products on Mac:

    <table border="1" cellpadding="0" cellspacing="0">

    <tbody>

    <tr>

    <td>Smoke</td>

    <td>2010 or greater</td>

    </tr>

    <tr>

    <td>Flame</td>

    <td>2016 or greater</td>

    </tr>

    </tbody>

    </table>

2.  Quit Smoke or other host applications that may be running.
3.  **[Download the 9.03 Mac installer](https://cdn.borisfx.com/borisfx/store/SapphireSparkInstall-9.03.dmg)** (150Mb).
4.  Run the installer. When it asks for your passphrase, enter your Mac user login password, and follow the instructions given by the installer.
5.  Restart your host product, and the new plug-ins should appear in your effects menu.

<div>To test out a Spark, select 'Effects' and then 'Sparks' and click on any Spark button while holding down the 'Control' and'Alt' keys. You should find the plug-ins in /usr/discreet/sparks/sapphire_9\. Select a Spark and the name should now appear on the button. Click again on the button to initialize the Spark. Select the source and destination clipsand the Spark interface window should be displayed.</div>

<div>To view on-line documentation after you install the software, go to the /Applications/GenArtsSapphireSparks8 folder and double click on Online Help.html or Online Help.pdf. You can also click on the "About" box while using any plug-in.</div>

**Installation notes:**

*   Sapphire v8 and v9 can both be on your system at the same time, and you can continue using v8 as usual even after installing v9\. However, please be aware that the names of the sparks are the same in both versions, which can lead to some confusion, and sometimes the older version may continue to be used unintentionally.
*   Setup files saved with Sapphire v8 will not load into v9, but we have provided an update_setups utility to automatically convert setup files from v8 to v9\. For more information check the on-line [doc](https://borisfx.com/support/documentation/sapphire-v9-for-autodesk/) after you install the software.

**New in 9.03:**

*   Fixed a crash in BokehLights with size set to zero and color fringing turned on.
*   Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
*   Fixed a memory leak in LensFlare, NightSky, and BokehLights when rendering on the GPU.
*   Added support for CentOS 7.2.
*   Removed erroneous warnings about a missing Reprise directory.
*   Fixed a crash in background renders with no license.
*   Licenses can now be activated off-line using command line tools.
*   When activating licenses offline, support can now see which machines are activated.
*   Put the name of the license in use in the help dialog to help debug floating licenses with multiple licenses.
*   Fixed a bug that prevented the help buttons from working on some Flame setups.
*   Fixed a bug that sometimes caused the "More Help" button in the help dialog to open the wrong documentation.

**New in 9.02:**

*   Fixed a bug that could cause multiple Preset Browsers to start.
*   Changed watermark to improve free trial experience.
*   Fixed a bug that sometimes caused the hotspot to be positioned incorrectly in the Flare Editor.
*   Silenced occasional irrelevant warnings when launching the Preset Browser.
*   Fixed a bug that prevented some v8 presets from loading correctly in v9.
*   Fixed a bug that caused Grunge to not render a stamp after its relative density was lowered to zero and then raised again.
*   Fixed a crash when certain clips were used as the Centers input of WarpDrops.
*   Fixed a bug that made Star Saturation in NightSky ineffective.
*   Improved Aurora documentation.
*   Fixed another bug that stopped the Flare Editor from opening on systems set to use some non-English languages.

**New in 9.01:**

*   Fixed occasional problems starting the Preset Browser and Flare Editor.
*   Fixed a bug that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a rendering bug and improved performance in Gamma.
*   Added new presets.

* * *

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

* * *

### Linux Installer(s)

**To Download and install:**

<a name="linux"></a>  

1.  Make sure you have one or more of the following Autodesk products on Linux:  

    <table border="0" cellpadding="0" cellspacing="0">

    <tbody>

    <tr>

    <td>Flint  </td>

    <td>2012 or greater, 64-bit</td>

    </tr>

    <tr>

    <td>Flame  </td>

    <td>2012 or greater, 64-bit</td>

    </tr>

    <tr>

    <td>Inferno  </td>

    <td>2012 or greater, 64-bit</td>

    </tr>

    <tr>

    <td>Smoke  </td>

    <td>2012 or greater, 64-bit</td>

    </tr>

    <tr>

    <td>Burn  </td>

    <td>2012 or greater, 64-bit</td>

    </tr>

    </tbody>

    </table>

    On your Linux workstation, become root and use the rpm shell command to download (121Mb) and run the appropriate installer:

2.  **For 64bit systems on RHEL 4 or greater,** type:  
         <tt>rpm -Uvh https://cdn.borisfx.com/borisfx/store/genarts-sapphire-sparks9-9.030-1.x86_64.rpm</tt>  
         or [download](https://cdn.borisfx.com/borisfx/store/genarts-sapphire-sparks9-9.030-1.x86_64.rpm) the rpm file and install it locally.  

    **For older systems, use Sapphire V4:**  
         For 64bit systems on RHEL 3 (pre-2007) type:  
             <tt>rpm -Uvh https://cdn.borisfx.com/borisfx/store/SapphireSparks4-4.070-1.x86_64.rpm</tt>  
         For 32bit systems on RHEL 4 (Flint 2007 or Burn 32bits only) type:  
             <tt>rpm -Uvh https://cdn.borisfx.com/borisfx/store/SapphireSparks4-4.061-1.i386.rpm</tt>  
         For 32bit systems on RHEL 3 (older versions of Flint, Smoke, or Burn) type:  
             <tt>rpm -Uvh https://cdn.borisfx.com/borisfx/store/SapphireSparks4-4.060-1.i386.rpm</tt>  

    If you are reinstalling the same version, use <tt>rpm -Uvh --force</tt> instead of <tt>rpm -Uvh</tt> above.

To test out a Spark, select 'Effects' and then 'Sparks' and click on any Spark button while holding down the 'Control' and 'Alt' keys. You should find the plug-ins in /usr/discreet/sparks/sapphire_9\. Select a Spark and the name should now appear on the button. Click again on the button to initialize the Spark. Select the source and destination clips and the Spark interface window should be displayed.

For on-line help, click on the the Help button on the "Crop/Help" page while using any plug-in, or go to the RedHat start menu and select GenArts Sapphire8 Autodesk -> Sapphire Online Help (HTML) or (PDF).

**Installation notes:**

*   Sapphire v7 and v8 can both be on your system at the same time, and you can continue using v7 as usual even after installing v9\. However, please be aware that the names of the sparks are the same in both versions, which can lead to some confusion, and sometimes the older version may continue to be used unintentionally.
*   Setup files saved with Sapphire v7 will not load into v8, but we have provided an update_setups utility to automatically convert setup files from v8 to v9\. For more information check the on-line [doc](https://borisfx.com/support/documentation/sapphire-v9-for-autodesk) after you install the software.

**Burn installation notes:**

*   If you are installing on many remote Burn nodes it may be helpful to set the SAPPHIRE_SILENT environment variable to 1 before running the installer.
*   Note that you need to run the installer on each machine. It will not work if you just copy the files from one machine to another.
*   Make sure you are running Sapphire version 9.03 or greater on any Autodesk systems that might render with Burn. To check the version number, load any spark and the version should be printed out in the shell window where your Autodesk application was started.
*   If you made any custom modifications in the s_config.text or s_lensflares.text files you should make the same changes on each Burn workstation.
*   On Burn, S_Feedback often gives incorrect results because the frames can be rendered on different machines in non-sequential order. Batch trees with S_Feedback should be processed locally.
*   We do not currently support Burn on Red Hat 8\. If you are still running RH8 and can not upgrade to Red Hat Enterprise, please let us know.

**New in 9.03:**

*   Fixed a crash in BokehLights with size set to zero and color fringing turned on.
*   Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
*   Fixed a memory leak in LensFlare, NightSky, and BokehLights when rendering on the GPU.
*   Added support for CentOS 7.2.
*   Removed erroneous warnings about a missing Reprise directory.
*   Fixed a crash in background renders with no license.
*   Licenses can now be activated off-line using command line tools.
*   When activating licenses offline, support can now see which machines are activated.
*   Put the name of the license in use in the help dialog to help debug floating licenses with multiple licenses.
*   Fixed a bug that prevented the help buttons from working on some Flame setups.
*   Fixed a bug that sometimes caused the "More Help" button in the help dialog to open the wrong documentation.
*   Removed popup messages from installer. All messages are now shown in the terminal.

**New in 9.02:**

*   Changed watermark to improve free trial experience.
*   Fixed a bug that sometimes caused the hotspot to be positioned incorrectly in the Flare Editor.
*   Silenced occasional irrelevant warnings when launching the Preset Browser.
*   Fixed a bug that prevented some v8 presets from loading correctly in v9.
*   Fixed a bug that caused Grunge to not render a stamp after its relative density was lowered to zero and then raised again.
*   Fixed a crash when certain clips were used as the Centers input of WarpDrops.
*   Fixed a bug that made Star Saturation in NightSky ineffective.
*   Improved Aurora documentation.
*   Fixed another bug that stopped the Flare Editor from opening on systems set to use some non-English languages.

**New in 9.01:**

*   Fixed occasional problems starting the Preset Browser and Flare Editor.
*   Fixed a bug that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a rendering bug and improved performance in Gamma.
*   Added new presets.

* * *

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).
