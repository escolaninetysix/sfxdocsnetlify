{
  "date": "2017-08-10T12:17:31Z",
  "description": "Sapphire V9 For Resolve, Nuke, Vegas, Fusion Studio, Scratch, And Other OFX Products",
  "title": "Sapphire V9 For Resolve, Nuke, Vegas, Fusion Studio, Scratch, And Other OFX Products"
}
### Install Instructions

​
<p><a href=#windows>INSTALL INSTRUCTIONS - WINDOWS</a></p>

<p><a href=#mac>INSTALL INSTRUCTIONS - MAC</a><br />

<p><a href=#linux>INSTALL INSTRUCTIONS - LINUX</a></p>

### Windows Installer(s)

<a name="windows"></a>

**To Download and install:**

1. Make sure you have one or more of the following OFX compatible host products on Windows:

   <table border="0" cellpadding="0" cellspacing="0">

   <tbody>

   <tr>

   <td style="width: 442px;">Resolve</td>

   <td style="width: 614px;">10 or greater</td>

   </tr>

   <tr>

   <td style="width: 442px;">Nuke</td>

   <td style="width: 614px;">6.3v8 or greater</td>

   </tr>

   <tr>

   <td style="width: 442px;">China Digital Video</td>

   <td style="width: 614px;">DX or EX</td>

   </tr>

   <tr>

   <td style="width: 442px;"><span style="line-height: 20.7999992370605px;">Vegas Pro</span></td>

   <td style="width: 614px;"><span style="line-height: 20.7999992370605px;">12 or greater</span></td>

   </tr>

   <tr>

   <td style="width: 442px;"><span style="line-height: 20.7999992370605px;">Fusion Studio</span></td>

   <td style="width: 614px;"><span style="line-height: 20.7999992370605px;">7 or greater</span></td>

   </tr>

   <tr>

   <td style="width: 442px;"><span style="line-height: 20.7999992370605px;">SCRATCH</span></td>

   <td style="width: 614px;"><span style="line-height: 20.7999992370605px;">6.0 or greater</span></td>

   </tr>

   <tr>

   <td style="width: 442px;">Mamba FX</td>

   <td style="width: 614px;">any version</td>

   </tr>

   <tr>

   <td style="width: 442px;">Nucoda/Phoenix (Film Master etc.)</td>

   <td style="width: 614px;">2011.2.058 or greater</td>

   </tr>

   <tr>

   <td style="width: 442px;">Pablo Rio</td>

   <td style="width: 614px;">2.1 rev4</td>

   </tr>

   </tbody>

   </table>
   * \*\*Attention Vegas Users: \*\*If you are upgrading from Sapphire v6.0, please see the release notes below before upgrading to Sapphire v9.03 to avoid hanging Vegas.
2. Quit any host applications that may be running.  
   If you previously installed an older version of Sapphire Plug-ins, the new installation will just replace it. You should not need to uninstall it first.
3. Download the [**9.03 Windows installer**](https://cdn.borisfx.com/borisfx/store/sapphire-ofx-install-9.03.exe) (105 Mb).  
   Either run the installer program from its current location, or save it to disk and then execute it from wherever you saved it. Follow the instructions given by the installer. This installer is for Windows 64-bit.
4. Restart your host application, and the new plug-ins should appear in your effects menu.

To view on-line documentation after you install the software, go to Start -> All Programs -> GenArts Sapphire OFX -> Online Help (HTML) or (PDF). You can also click on the "Help" button while using any plug-in.

If you are on Baselight and get a watermark with your installer-provided free trial, please request a trial RLM license by sending your company info, product details and Ethernet ID via the [support form](/support/open-a-case/ "support form")

**New in 9.03:**

* Improved loading of old v6 projects containing ZFogLinear and ZFogExponential when Z Near and Z Far were set their default values
* Fixed a crash in BokehLights with size set to zero and color fringing turned on.
* Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
* Fixed a bug that prevented MatteOps from rendering with certain parameters set.
* Fixed a memory leak in LensFlare, NightSky, and BokehLights when rendering on the GPU.
* Correctly install all S_Effect and S_Transition presets for Resolve.
* Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.
* Removed erroneous warnings about a missing Reprise directory.
* Fixed a crash in background renders with no license.
* Licenses can now be activated off-line using command line tools.
* When activating licenses offline, support can now see which machines are activated.
* Put the name of the license in use in the help dialog to help debug floating licenses with multiple licenses.
* Fixed a bug that sometimes caused the "More Help" button in the help dialog to open the wrong documentation.
* Removed uninstall shortcut from Windows 10 Start Menu due to unpredictable behavior, please use Add/Remove Programs in the Control Panel instead.

**New in 9.02:**

* Fixed a bug that could cause multiple Preset Browsers to start.
* Changed watermark to improve free trial experience.
* Fixed a bug that sometimes caused the hotspot to be positioned incorrectly in the Flare Editor.
* Fixed a bug that prevented some v8 presets from loading correctly in v9.
* Fixed a bug that caused Grunge to not render a stamp after its relative density was lowered to zero and then raised again.
* Fixed a crash when certain clips were used as the Centers input of WarpDrops.
* Fixed a bug where CutToDissolve could render black frames in Catalyst and other GPU-accelerated hosts.
* Fixed a bug that made Star Saturation in NightSky ineffective.
* Improved Aurora documentation.
* Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.

**New in 9.01:**

* Added S_Effect and S_Transition support for Black Magic DaVinci Resolve.
* Fixed occasional problems starting the Preset Browser and Flare Editor.
* Fixed a rendering bug and improved performance in Gamma.
* Added new presets.

---

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

​

### Mac Installer(s)

<a name="mac"></a>

### Install Instructions

**To Download and install:**

1. Make sure you have one or more of the following OFX compatible host products on Mac:

   <table border="0" cellpadding="0" cellspacing="0">

   <tbody>

   <tr>

   <td style="width: 355px;"><span style="line-height: 20.7999992370605px;">Resolve</span></td>

   <td style="width: 388px;"><span style="line-height: 20.7999992370605px;">10 or greater</span></td>

   </tr>

   <tr>

   <td style="width: 355px;">Nuke</td>

   <td style="width: 388px;">6.3v8 or greater</td>

   </tr>

   <tr>

   <td style="width: 355px;">Baselight   </td>

   <td style="width: 388px;">4.3 or greater</td>

   </tr>

   </tbody>

   </table>
2. Quit any host applications that may be running.  
   If you previously installed an older version of Sapphire Plug-ins, the new installation will just replace it. You should not need to uninstall it first.
3. Download the [**9.03 Mac installer**](https://cdn.borisfx.com/borisfx/store/SapphireOFXInstall-9.03.dmg) (144 Mb).  
   This includes Universal 32 and 64 bit binaries for Mac Intel hardware.
4. Run the installer. When it asks for your passphrase, enter your Mac user login password, and follow the instructions given by the installer.
5. Restart your host product, and the new plug-ins should appear in your effects menu.

To view on-line documentation after you install the software, go to the /Applications/GenArtsSapphireOFX folder and double click on Online Help.html or Online Help.pdf. You can also click on the "Help" button while using any plug-in.

**New in 9.03:**

* Improved loading of old v6 projects containing ZFogLinear and ZFogExponential when Z Near and Z Far were set their default values
* Fixed a crash in BokehLights with size set to zero and color fringing turned on.
* Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
* Fixed a bug that prevented MatteOps from rendering with certain parameters set.
* Fixed a memory leak in LensFlare, NightSky, and BokehLights when rendering on the GPU.
* Correctly install all S_Effect and S_Transition presets for Resolve.
* Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.
* Removed erroneous warnings about a missing Reprise directory.
* Fixed a crash in background renders with no license.
* Licenses can now be activated off-line using command line tools.
* When activating licenses offline, support can now see which machines are activated.
* Put the name of the license in use in the help dialog to help debug floating licenses with multiple licenses.
* Fixed a bug that sometimes caused the "More Help" button in the help dialog to open the wrong documentation.

**New in 9.02:**

* Fixed a bug that could cause multiple Preset Browsers to start.
* Changed watermark to improve free trial experience.
* Fixed a bug that sometimes caused the hotspot to be positioned incorrectly in the Flare Editor.
* Fixed a bug that prevented some v8 presets from loading correctly in v9.
* Fixed a bug that caused Grunge to not render a stamp after its relative density was lowered to zero and then raised again.
* Fixed a crash when certain clips were used as the Centers input of WarpDrops.
* Fixed a bug where CutToDissolve could render black frames in Catalyst and other GPU-accelerated hosts.
* Fixed a bug that made Star Saturation in NightSky ineffective.
* Improved Aurora documentation.
* Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.
* Fixed a crash caused by opening the Sapphire Help dialog in Catalyst.

**New in 9.01:**

* Added S_Effect and S_Transition support for Black Magic DaVinci Resolve.
* Fixed occasional problems starting the Preset Browser and Flare Editor.
* Fixed a rendering bug and improved performance in Gamma.
* Added new presets.

---

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

### Linux Installer(s)

<a name="linux"></a>

### Install Instructions

**To Download and install:**

1. Make sure you have one or more of the following OFX compatible host products on Linux:

   <table border="0" cellpadding="0" cellspacing="0">

   <tbody>

   <tr>

   <td style="width: 368px;"><span style="line-height: 20.7999992370605px;">Resolve</span></td>

   <td style="width: 484px;"><span style="line-height: 20.7999992370605px;">10 or greater</span></td>

   </tr>

   <tr>

   <td style="width: 368px;">Nuke</td>

   <td style="width: 484px;">6.3v8 or greater</td>

   </tr>

   <tr>

   <td style="width: 368px;"><span style="line-height: 20.7999992370605px;">Fusion Studio</span></td>

   <td style="width: 484px;"><span style="line-height: 20.7999992370605px;">7 or greater</span></td>

   </tr>

   <tr>

   <td style="width: 368px;">Baselight   </td>

   <td style="width: 484px;">4.3 or greater</td>

   </tr>

   <tr>

   <td style="width: 368px;">Mistika</td>

   <td style="width: 484px;">6.5.35 or greater</td>

   </tr>

   </tbody>

   </table>
2. Quit any host applications that may be running.  
   If you previously installed an older version of Sapphire Plug-ins, the new installation will just replace it. You should not need to uninstall it first.
3. For Red Hat or similar: become root and use the rpm shell command to download (58Mb) and run the installer:  
   <span style="font-family: monospace; ">rpm -Uvh https://cdn.borisfx.com/borisfx/store/SapphireOFX-9.030-1.x86_64.rpm for 64 bit</span>  
   or download the RPM installer file and install it locally.

   For Ubuntu: first make sure you have 'libjpeg62', and 'libglade2-0' packages installed  
   Then download the DEB installer file (58Mb), become root, and type the command:  
   dpkg -i --force-architecture sapphireofx_9.030-1_amd64.deb for 64 bit
4. <span style="line-height: 20px;">Restart your host product, and the new plug-ins should appear in your effects menu.</span>

To view on-line documentation after you install the software, go to the RedHat or Ubuntu start menu and select GenArts Sapphire OFX -> Sapphire Online Help (HTML) or (PDF). You can also click on the "Help" button while using any plug-in.

**New in 9.03:**

* Improved loading of old v6 projects containing ZFogLinear and ZFogExponential when Z Near and Z Far were set their default values
* Fixed a crash in BokehLights with size set to zero and color fringing turned on.
* Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
* Fixed a bug that prevented MatteOps from rendering with certain parameters set.
* Fixed a memory leak in LensFlare, NightSky, and BokehLights when rendering on the GPU.
* Correctly install all S_Effect and S_Transition presets for Resolve.
* Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.
* Removed erroneous warnings about a missing Reprise directory.
* Fixed a crash in background renders with no license.
* Licenses can now be activated off-line using command line tools.
* When activating licenses offline, support can now see which machines are activated.
* Put the name of the license in use in the help dialog to help debug floating licenses with multiple licenses.
* Fixed a bug that sometimes caused the "More Help" button in the help dialog to open the wrong documentation.
* Removed popup messages from installer. All messages are now shown in the terminal.

**New in 9.02:**

* Changed watermark to improve free trial experience.
* Fixed a bug that sometimes caused the hotspot to be positioned incorrectly in the Flare Editor.
* Fixed a bug that prevented some v8 presets from loading correctly in v9.
* Fixed a bug that caused Grunge to not render a stamp after its relative density was lowered to zero and then raised again.
* Fixed a crash when certain clips were used as the Centers input of WarpDrops.
* Fixed a bug where CutToDissolve could render black frames in Catalyst and other GPU-accelerated hosts.
* Fixed a bug that made Star Saturation in NightSky ineffective.
* Improved Aurora documentation.
* Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.

**New in 9.01:**

* Added S_Effect and S_Transition support for Black Magic DaVinci Resolve.
* Fixed occasional problems starting the Preset Browser and Flare Editor.
* Fixed a rendering bug and improved performance in Gamma.
* Added new presets.

---

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).
