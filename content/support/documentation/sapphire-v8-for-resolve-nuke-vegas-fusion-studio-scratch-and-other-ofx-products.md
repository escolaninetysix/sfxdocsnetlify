{
   "date": "2017-08-15T09:03:46+00:00",
   "description": "Sapphire Installation Instructions v8 for Resolve, Nuke, Vegas, Fusion Studio, SCRATCH, and other OFX Products",
   "title": "Sapphire v8 for Resolve, Nuke, Vegas, Fusion Studio, SCRATCH, and other OFX Products"
}

[INSTALL INSTRUCTIONS - WINDOWS](#windows)

[INSTALL INSTRUCTIONS - MAC](#mac)

[INSTALL INSTRUCTIONS - LINUX](#linux)





### Installation Instructions - Windows
<a name="windows"></a>
**To Download and install:**

1.  Make sure you have one or more of the following OFX compatible host products on Windows:

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

    *   **Attention Vegas Users: **If you are upgrading from Sapphire v6.0, please see the release notes below before upgrading to Sapphire v8.15 to avoid hanging Vegas.
2.  Quit any host applications that may be running.  
    If you previously installed an older version of Sapphire Plug-ins, the new installation will just replace it. You should not need to uninstall it first.
3.  Download the **[8.15 Windows installer](https:///cdn.borisfx.com/borisfx/store/sapphire-ofx-install-8.15.exe)** (105 Mb).  
    Either run the installer program from its current location, or save it to disk and then execute it from wherever you saved it. Follow the instructions given by the installer. This installer is for both Windows 32 and Windows 64.
4.  Restart your host application, and the new plug-ins should appear in your effects menu.

To view on-line documentation after you install the software, go to Start -> All Programs -> GenArts Sapphire OFX -> Online Help (HTML) or (PDF). You can also click on the "Help" button while using any plug-in.

If you are on Baselight and get a watermark with your installer-provided free trial, please request a trial RLM license by sending your company info, product details and Ethernet ID via the [support form](/support/open-a-case/)

**New in 8.15:**

*   Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
*   Fixed a bug that prevented MatteOps from rendering with certain parameters set.
*   Removed erroneous warnings about a missing Reprise directory.
*   Licenses can now be activated off-line using command line tools.
*   When activating licenses offline, support can now see which machines are activated.
*   Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.
*   Fixed a bug that could cause multiple Preset Browsers to start.

**New in 8.14:**

*   Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a rare problem starting the Preset Browser and Flare Editor.

**New in 8.13:**

*   Fixed occasional problems starting the Preset Browser and Flare Editor.
*   Added Windows 10 support.
*   Added support for Sony Catalyst Edit.
*   Fixed a bug that could cause the Flare Editor to hang when drawing element indicators.
*   Improved some license tool error messages.
*   Added an environment variable, SAPPHIRE_FORCE_NCPUS, to restrict the number of cores Sapphire uses during render.
*   Added an option to fail rather than watermark render when no license is available.

**New in 8.12:**

*   ZapTo and ZapFrom: Fixed bolt pattern when using GPU.
*   Discourage OFX hosts from using floating licenses for Flame unless necessary.
*   Glint: fixed artifacts in the upper-left corner.
*   Preset Browser: Fixed incorrect result count when searching.
*   Fixed artifacts in BlurMotion, Rays, and EdgeRays when rendering on GPU.

**New in 8.11:**

*   Fixed a bug in FilmRoll that sometimes made transparent areas opaque.
*   Fixed a bug that caused the license-tool to hang if the hard drive had been restored from backup.
*   Fixed a crash in the Preset Browser when switching to 'Sample Only' mode
*   Fixed a bug that caused some parameters to not appear in documentation.

**New in 8.1:**

*   Fixed a rare bug on Windows that would cause the ofx compatible host's window to close when exiting the Preset Browser.
*   Fixed an error in ZapFrom when Show: Edges is used with motion blur.
*   Fixed a bug that caused Preset Browser handshake errors on some non-English Windows installations.
*   Flare Designer: fixed a crash when creating Texture elements.
*   Fixed an erroneous warning about missing directories on machines running a free trial or floating license.
*   OSX: Fixed a bug that prevented 7 and 8 from using the same license.
*   Added new presets.

**New in 8.01:**

*   Reduced intensity of some Swish3D presets to speed up renders and avoid Windows GPU driver issues.
*   Fixed license activation problems on Mac.
*   VintageColor2Strip: improved results when Red Filter or Bluegreen Filter is set to black.
*   GradientMulti now handles pixel aspect ratio correctly.
*   Streaks: setting Mask Type to Alpha now works correctly.
*   BleachBypass: Fixed incorrect renders when GrainAmpRed was set to zero.
*   Caustics: fixed artifacts at the edge of the image when using a custom Bumps pattern.

* * *

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https:///cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

### Install Instructions - Mac
<a name="mac"></a>
**To Download and install:**

1.  Make sure you have one or more of the following OFX compatible host products on Mac:

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

2.  Quit any host applications that may be running.  
    If you previously installed an older version of Sapphire Plug-ins, the new installation will just replace it. You should not need to uninstall it first.
3.  Download the **[8.15 Mac installer](https:///cdn.borisfx.com/borisfx/store/SapphireOFXInstall-8.15.dmg)** (144 Mb).  
    This includes Universal 32 and 64 bit binaries for Mac Intel hardware.
4.  Run the installer. When it asks for your passphrase, enter your Mac user login password, and follow the instructions given by the installer.
5.  Restart your host product, and the new plug-ins should appear in your effects menu.

To view on-line documentation after you install the software, go to the /Applications/GenArtsSapphireOFX folder and double click on Online Help.html or Online Help.pdf. You can also click on the "Help" button while using any plug-in.

**New in 8.15:**

*   Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
*   Fixed a bug that prevented MatteOps from rendering with certain parameters set.
*   Removed erroneous warnings about a missing Reprise directory.
*   Licenses can now be activated off-line using command line tools.
*   When activating licenses offline, support can now see which machines are activated.
*   Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.
*   Fixed a bug that could cause multiple Preset Browsers to start.

**New in 8.14:**

*   Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a crash caused by opening the Sapphire Help dialog in Catalyst.
*   Fixed a rare problem starting the Preset Browser and Flare Editor.

**New in 8.13:**

*   Fixed occasional problems starting the Preset Browser and Flare Editor.
*   Added support for Sony Catalyst Edit.
*   Fixed a bug that could cause the Flare Editor to hang when drawing element indicators.
*   Improved some license tool error messages.
*   Added an environment variable, SAPPHIRE_FORCE_NCPUS, to restrict the number of cores Sapphire uses during render.
*   Added an option to fail rather than watermark render when no license is available.

**New in 8.12:**

*   ZapTo and ZapFrom: Fixed bolt pattern when using GPU.
*   Discourage OFX hosts from using floating licenses for Flame unless necessary.
*   Glint: fixed artifacts in the upper-left corner.
*   Preset Browser: Fixed incorrect result count when searching.
*   Fixed artifacts in BlurMotion, Rays, and EdgeRays when rendering on GPU.

**New in 8.11:**

*   Fixed a bug in FilmRoll that sometimes made transparent areas opaque.
*   Fixed a bug that could create world-writeable files in the user's home directory.
*   Fixed a crash in the Preset Browser when switching to 'Sample Only' mode
*   Fixed a bug that caused some parameters to not appear in documentation.

**New in 8.1:**

*   Fixed a rare bug on Windows that would cause the ofx compatible host's window to close when exiting the Preset Browser.
*   Fixed an error in ZapFrom when Show: Edges is used with motion blur.
*   Fixed a bug that caused Preset Browser handshake errors on some non-English Windows installations.
*   Flare Designer: fixed a crash when creating Texture elements.
*   Fixed an erroneous warning about missing directories on machines running a free trial or floating license.
*   OSX: Fixed a bug that prevented 7 and 8 from using the same license.
*   Added new presets.

**New in 8.01:**

*   Reduced intensity of some Swish3D presets to speed up renders and avoid Windows GPU driver issues.
*   Fixed license activation problems on Mac.
*   VintageColor2Strip: improved results when Red Filter or Bluegreen Filter is set to black.
*   GradientMulti now handles pixel aspect ratio correctly.
*   Streaks: setting Mask Type to Alpha now works correctly.
*   BleachBypass: Fixed incorrect renders when GrainAmpRed was set to zero.
*   Caustics: fixed artifacts at the edge of the image when using a custom Bumps pattern.

* * *

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https:///cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

### Installation Instructions - Linux
<a name="linux"></a>
**To Download and install:**

[Download Sapphire v8 for OFX compatible Linux 64-bit installer (.rpm, 64 bits)](http://files.genarts.com/sapphire/SapphireOFX-8.150-1.x86_64.rpm)

[Download Sapphire v8 for OFX compatible Linux 64-bit installer (Debian/Ubuntu) (.deb, 64 bits)](http://files.genarts.com/sapphire/sapphireofx_8.150-1_amd64.deb)

1.  Make sure you have one or more of the following OFX compatible host products on Linux:

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

2.  Quit any host applications that may be running.  
    If you previously installed an older version of Sapphire Plug-ins, the new installation will just replace it. You should not need to uninstall it first.
3.  For Red Hat or similar: become root and use the rpm shell command to download (58Mb) and run the installer:  
    <span style="font-family: monospace; ">rpm -Uvh https:///cdn.borisfx.com/borisfx/store/SapphireOFX-8.150-1.x86_64.rpm for 64 bit</span>  
    or download the RPM installer file and install it locally.

    For Ubuntu: first make sure you have 'libjpeg62', and 'libglade2-0' packages installed  
    Then download the DEB installer file (58Mb), become root, and type the command:  
    dpkg -i --force-architecture sapphireofx_8.150-1_amd64.deb for 64 bit

4.  <span style="line-height: 20px;">Restart your host product, and the new plug-ins should appear in your effects menu.</span>

To view on-line documentation after you install the software, go to the RedHat or Ubuntu start menu and select GenArts Sapphire OFX -> Sapphire Online Help (HTML) or (PDF). You can also click on the "Help" button while using any plug-in.

**New in 8.15:**

*   Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
*   Fixed a bug that prevented MatteOps from rendering with certain parameters set.
*   Removed erroneous warnings about a missing Reprise directory.
*   Licenses can now be activated off-line using command line tools.
*   When activating licenses offline, support can now see which machines are activated.
*   Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.
*   Fixed a bug that could cause multiple Preset Browsers to start.

**New in 8.14:**

*   Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a rare problem starting the Preset Browser and Flare Editor.

**New in 8.13:**

*   Fixed occasional problems starting the Preset Browser and Flare Editor.
*   Fixed a bug that could cause the Flare Editor to hang when drawing element indicators.
*   Improved some license tool error messages.
*   Added an environment variable, SAPPHIRE_FORCE_NCPUS, to restrict the number of cores Sapphire uses during render.
*   Added an option to fail rather than watermark render when no license is available.

**New in 8.12:**

*   ZapTo and ZapFrom: Fixed bolt pattern when using GPU.
*   Discourage OFX hosts from using floating licenses for Flame unless necessary.
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

*   Fixed a rare bug on Windows that would cause the ofx compatible host's window to close when exiting the Preset Browser.
*   Fixed an error in ZapFrom when Show: Edges is used with motion blur.
*   Fixed a bug that caused Preset Browser handshake errors on some non-English Windows installations.
*   Flare Designer: fixed a crash when creating Texture elements.
*   Fixed an erroneous warning about missing directories on machines running a free trial or floating license.
*   OSX: Fixed a bug that prevented 7 and 8 from using the same license.
*   Added new presets.

**New in 8.01:**

*   Reduced intensity of some Swish3D presets to speed up renders and avoid Windows GPU driver issues.
*   Fixed license activation problems on Mac.
*   VintageColor2Strip: improved results when Red Filter or Bluegreen Filter is set to black.
*   GradientMulti now handles pixel aspect ratio correctly.
*   Streaks: setting Mask Type to Alpha now works correctly.
*   BleachBypass: Fixed incorrect renders when GrainAmpRed was set to zero.
*   Caustics: fixed artifacts at the edge of the image when using a custom Bumps pattern.

* * *

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https:///cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).
**To Download and install:**

1.

1.

1.

1. Restart your host application, and the new plug-ins should appear in your effects menu.

To view on-line documentation after you install the software, go to Start -> All Programs -> GenArts Sapphire OFX -> Online Help (HTML) or (PDF). You can also click on the "Help" button while using any plug-in.

If you are on Baselight and get a watermark with your installer-provided free trial, please request a trial RLM license by sending your company info, product details and Ethernet ID via the [support form](/support/open-a-case/)

**New in 8.15:**

* Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.

* Fixed a bug that prevented MatteOps from rendering with certain parameters set.

* Removed erroneous warnings about a missing Reprise directory.

* Licenses can now be activated off-line using command line tools.

* When activating licenses offline, support can now see which machines are activated.

* Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.

* Fixed a bug that could cause multiple Preset Browsers to start.

**New in 8.14:**

* Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.

* Fixed a rare problem starting the Preset Browser and Flare Editor.

**New in 8.13:**

* Fixed occasional problems starting the Preset Browser and Flare Editor.

* Added Windows 10 support.

* Added support for Sony Catalyst Edit.

* Fixed a bug that could cause the Flare Editor to hang when drawing element indicators.

* Improved some license tool error messages.

* Added an environment variable, SAPPHIRE_FORCE_NCPUS, to restrict the number of cores Sapphire uses during render.

* Added an option to fail rather than watermark render when no license is available.

**New in 8.12:**

* ZapTo and ZapFrom: Fixed bolt pattern when using GPU.

* Discourage OFX hosts from using floating licenses for Flame unless necessary.

* Glint: fixed artifacts in the upper-left corner.

* Preset Browser: Fixed incorrect result count when searching.

* Fixed artifacts in BlurMotion, Rays, and EdgeRays when rendering on GPU.

**New in 8.11:**

* Fixed a bug in FilmRoll that sometimes made transparent areas opaque.

* Fixed a bug that caused the license-tool to hang if the hard drive had been restored from backup.

* Fixed a crash in the Preset Browser when switching to 'Sample Only' mode

* Fixed a bug that caused some parameters to not appear in documentation.

**New in 8.1:**

* Fixed a rare bug on Windows that would cause the ofx compatible host's window to close when exiting the Preset Browser.

* Fixed an error in ZapFrom when Show: Edges is used with motion blur.

* Fixed a bug that caused Preset Browser handshake errors on some non-English Windows installations.

* Flare Designer: fixed a crash when creating Texture elements.

* Fixed an erroneous warning about missing directories on machines running a free trial or floating license.

* OSX: Fixed a bug that prevented 7 and 8 from using the same license.

* Added new presets.

**New in 8.01:**

* Reduced intensity of some Swish3D presets to speed up renders and avoid Windows GPU driver issues.

* Fixed license activation problems on Mac.

* VintageColor2Strip: improved results when Red Filter or Bluegreen Filter is set to black.

* GradientMulti now handles pixel aspect ratio correctly.

* Streaks: setting Mask Type to Alpha now works correctly.

* BleachBypass: Fixed incorrect renders when GrainAmpRed was set to zero.

* Caustics: fixed artifacts at the edge of the image when using a custom Bumps pattern.

<hr>

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https:///cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

### Installation Instructions - Mac

<a name="mac"></a>
**To Download and install:**

1.

1.

1.

1. Run the installer. When it asks for your passphrase, enter your Mac user login password, and follow the instructions given by the installer.

1. Restart your host product, and the new plug-ins should appear in your effects menu.

To view on-line documentation after you install the software, go to the /Applications/GenArtsSapphireOFX folder and double click on Online Help.html or Online Help.pdf. You can also click on the "Help" button while using any plug-in.

**New in 8.15:**

* Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.

* Fixed a bug that prevented MatteOps from rendering with certain parameters set.

* Removed erroneous warnings about a missing Reprise directory.

* Licenses can now be activated off-line using command line tools.

* When activating licenses offline, support can now see which machines are activated.

* Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.

* Fixed a bug that could cause multiple Preset Browsers to start.

**New in 8.14:**

* Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.

* Fixed a crash caused by opening the Sapphire Help dialog in Catalyst.

* Fixed a rare problem starting the Preset Browser and Flare Editor.

**New in 8.13:**

* Fixed occasional problems starting the Preset Browser and Flare Editor.

* Added support for Sony Catalyst Edit.

* Fixed a bug that could cause the Flare Editor to hang when drawing element indicators.

* Improved some license tool error messages.

* Added an environment variable, SAPPHIRE_FORCE_NCPUS, to restrict the number of cores Sapphire uses during render.

* Added an option to fail rather than watermark render when no license is available.

**New in 8.12:**

* ZapTo and ZapFrom: Fixed bolt pattern when using GPU.

* Discourage OFX hosts from using floating licenses for Flame unless necessary.

* Glint: fixed artifacts in the upper-left corner.

* Preset Browser: Fixed incorrect result count when searching.

* Fixed artifacts in BlurMotion, Rays, and EdgeRays when rendering on GPU.

**New in 8.11:**

* Fixed a bug in FilmRoll that sometimes made transparent areas opaque.

* Fixed a bug that could create world-writeable files in the user's home directory.

* Fixed a crash in the Preset Browser when switching to 'Sample Only' mode

* Fixed a bug that caused some parameters to not appear in documentation.

**New in 8.1:**

* Fixed a rare bug on Windows that would cause the ofx compatible host's window to close when exiting the Preset Browser.

* Fixed an error in ZapFrom when Show: Edges is used with motion blur.

* Fixed a bug that caused Preset Browser handshake errors on some non-English Windows installations.

* Flare Designer: fixed a crash when creating Texture elements.

* Fixed an erroneous warning about missing directories on machines running a free trial or floating license.

* OSX: Fixed a bug that prevented 7 and 8 from using the same license.

* Added new presets.

**New in 8.01:**

* Reduced intensity of some Swish3D presets to speed up renders and avoid Windows GPU driver issues.

* Fixed license activation problems on Mac.

* VintageColor2Strip: improved results when Red Filter or Bluegreen Filter is set to black.

* GradientMulti now handles pixel aspect ratio correctly.

* Streaks: setting Mask Type to Alpha now works correctly.

* BleachBypass: Fixed incorrect renders when GrainAmpRed was set to zero.

* Caustics: fixed artifacts at the edge of the image when using a custom Bumps pattern.

<hr>

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https:///cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

### Installation Instructions - Linux

<a name="linux"></a>
**To Download and install:**

Download [Sapphire v8 for OFX compatible Linux 64-bit installer (.rpm, 64 bits)](http://files.genarts.com/sapphire/SapphireOFX-8.150-1.x86_64.rpm)

Download[ Sapphire v8 for OFX compatible Linux 64-bit installer (Debian/Ubuntu) (.deb, 64 bits)](http://files.genarts.com/sapphire/sapphireofx_8.150-1_amd64.deb)

1.

1.

1.

1. <span style="line-height: 20px;">Restart your host product, and the new plug-ins should appear in your effects menu.</span>

To view on-line documentation after you install the software, go to the RedHat or Ubuntu start menu and select GenArts Sapphire OFX -> Sapphire Online Help (HTML) or (PDF). You can also click on the "Help" button while using any plug-in.

**New in 8.15:**

* Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.

* Fixed a bug that prevented MatteOps from rendering with certain parameters set.

* Removed erroneous warnings about a missing Reprise directory.

* Licenses can now be activated off-line using command line tools.

* When activating licenses offline, support can now see which machines are activated.

* Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.

* Fixed a bug that could cause multiple Preset Browsers to start.

**New in 8.14:**

* Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.

* Fixed a rare problem starting the Preset Browser and Flare Editor.

**New in 8.13:**

* Fixed occasional problems starting the Preset Browser and Flare Editor.

* Fixed a bug that could cause the Flare Editor to hang when drawing element indicators.

* Improved some license tool error messages.

* Added an environment variable, SAPPHIRE_FORCE_NCPUS, to restrict the number of cores Sapphire uses during render.

* Added an option to fail rather than watermark render when no license is available.

**New in 8.12:**

* ZapTo and ZapFrom: Fixed bolt pattern when using GPU.

* Discourage OFX hosts from using floating licenses for Flame unless necessary.

* Glint: fixed artifacts in the upper-left corner.

* Preset Browser: Fixed incorrect result count when searching.

* Fixed artifacts in BlurMotion, Rays, and EdgeRays when rendering on GPU.

**New in 8.11:**

* Fixed a crash in license installer on some versions of CentOS.

* Fixed a bug in FilmRoll that sometimes made transparent areas opaque.

* Fixed a bug that could create world-writeable files in the user's home directory.

* Fixed a crash in the Preset Browser when switching to 'Sample Only' mode

* Fixed a bug that caused some parameters to not appear in documentation.

**New in 8.1:**

* Fixed a rare bug on Windows that would cause the ofx compatible host's window to close when exiting the Preset Browser.

* Fixed an error in ZapFrom when Show: Edges is used with motion blur.

* Fixed a bug that caused Preset Browser handshake errors on some non-English Windows installations.

* Flare Designer: fixed a crash when creating Texture elements.

* Fixed an erroneous warning about missing directories on machines running a free trial or floating license.

* OSX: Fixed a bug that prevented 7 and 8 from using the same license.

* Added new presets.

**New in 8.01:**

* Reduced intensity of some Swish3D presets to speed up renders and avoid Windows GPU driver issues.

* Fixed license activation problems on Mac.

* VintageColor2Strip: improved results when Red Filter or Bluegreen Filter is set to black.

* GradientMulti now handles pixel aspect ratio correctly.

* Streaks: setting Mask Type to Alpha now works correctly.

* BleachBypass: Fixed incorrect renders when GrainAmpRed was set to zero.

* Caustics: fixed artifacts at the edge of the image when using a custom Bumps pattern.

<hr>

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https:///cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).
