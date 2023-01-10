{
   "date": "2017-08-10T11:55:46Z",
   "description": "Sapphire v9 for Avid",
   "title": "Sapphire v9 for Avid"
}

*Before updating to v7.02 or later, please refer to the release notes for possible compatibility implications with the effect formerly known as Technicolor. See 'What's New' below for details.*

[INSTALL INSTRUCTIONS - WINDOWS](#windows)

[INSTALL INSTRUCTIONS - MAC](#mac)

### Installation Instructions - Windows

<a name="windows"></a>

**To Download and install:**

1. Make sure you have one or more of the following Avid products on Windows:

<table border="0" cellpadding="0" cellspacing="0">
<tbody>
<tr>
<td>Media Composer &nbsp;</td>
<td>any version</td>
</tr>
<tr>
<td>Media Composer Meridien &nbsp;</td>
<td>v9 or greater</td>
</tr>
<tr>
<td>Symphony</td>
<td>any version</td>
</tr>
<tr>
<td>Xpress Pro</td>
<td>any version</td>
</tr>
<tr>
<td>Xpress DV</td>
<td>any version</td>
</tr>
<tr>
<td>Xpress</td>
<td>v2 or greater</td>
</tr>
<tr>
<td>Newscutter</td>
<td>v3 or greater</td>
</tr>
</tbody>
</table>

1. Quit your Avid software if it is running. If you have an older version of Sapphire v1 - v8 you do *not* need to un-install it. The new installation will just replace it without removing any existing serial number.

1. Download and run the v9 installer:

**[Download Sapphire 9.03 for Avid products on Windows 32 or 64 (109 Mb)](https://cdn.borisfx.com/borisfx/store/sapphire-avx-install-9.03.exe)**

Either run the program from its current location, or save it to disk and then execute it from wherever you saved it. Follow the instructions given by the installer.

Sapphire v9 should load all old sequences saved with older Sapphire versions, including v1 - v8.

Sapphire 9 is an <small>AVX</small>2 plug-in. Avid has deprecated support for the old <small>AVX</small>1 interface, but <small>AVX</small>2 plug-ins can read old sequences saved with <small>AVX</small>1 plug-ins.

When you restart your Avid software, the new version v9 plug-ins should appear in the Effect Palette in the **Sapphire** categories.

For on-line help installed locally on your workstation, go to: **Start** -> **Programs** -> **GenArts Sapphire <small>AVX</small>** -> **Online Help**. A "Help" dialog is also provided when using a plug-in, which gives information about that plug-in currently being used.

**New in 9.03:**

* Fixed a bug that caused BokehLights to be twice as bright on fields in green/green mode. Note that this changes renders; double the brightness parameter to regain the previous look.

* Fixed a crash in BokehLights with size set to zero and color fringing turned on.

* Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.

* Fixed a memory leak in LensFlare, NightSky, and BokehLights when rendering on the GPU.

* Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.

* Removed erroneous warnings about a missing Reprise directory.

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

* Fixed a bug that caused point params to be set incorrectly when loading a preset in an interlaced Media Composer project in green/green mode.

* Fixed a bug that caused Grunge to not render a stamp after its relative density was lowered to zero and then raised again.

* Fixed a crash when certain clips were used as the Centers input of WarpDrops.

* Fixed a bug that made Star Saturation in NightSky ineffective.

* Improved Aurora documentation.

* Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.

**New in 9.01:**

* Fixed occasional problems starting the Preset Browser, Flare Editor, and Builder.

* Fixed a bug that caused PanAndZoom to not load some JPEG images.

* Fixed a rendering bug and improved performance in Gamma.

* Added new presets.

<hr>

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

<hr>

### Installation Instructions - Mac

<a name="mac"></a>

**Version 9.03 is now available!**

**To Download and install:**

1. Make sure you have one or more of the following Avid products:

<table border="0" cellpadding="0" cellspacing="0">
<tbody>
<tr>
<td>Media Composer &nbsp;</td>
<td>2.0 or greater</td>
</tr>
<tr>
<td>Symphony</td>
<td>1.0 or greater</td>
</tr>
<tr>
<td>Xpress Pro</td>
<td>5.0 or greater</td>
</tr>
</tbody>
</table>

1. Make sure you are running Mac OS X 10.5 or greater.

1. Quit your Avid software if it is running. If you have an older version of Sapphire v6 or v7 or v8 you do *not* need to un-install it. The new installation will just replace it without removing any existing serial number.

1. Download and run the installer:

**[Download Sapphire 9.03 for Mac OS X (152Mb)](http://files.genarts.com/sapphire/SapphireAVXInstall-9.03.dmg)**

Follow the instructions given by the installer. When it asks for your username and password, just enter your Mac user login password.

Sapphire v9 should load all old sequences saved with older Sapphire versions, including v1 - v8.

Sapphire 9 is an <small>AVX</small>2 plug-in. Avid has deprecated support for the old <small>AVX</small>1 interface, but <small>AVX</small>2 plug-ins can read old sequences saved with <small>AVX</small>1 plug-ins.

When you restart your Avid software, the new version v9 plug-ins should appear in the Effect Palette in the **Sapphire** categories. You can simply use these effects just as you would any other effect.

For on-line help installed locally on your workstation, go to the Applications folder, double click on **GenArtsSapphire<small>AVX</small>** and select the online documentation. A "Help" dialog is also provided when using a plug-in, which gives information about that plug-in currently being used.

**New in 9.03:**

* Fixed a bug that caused BokehLights to be twice as bright on fields in green/green mode. Note that this changes renders; double the brightness parameter to regain the previous look.

* Fixed a crash in BokehLights with size set to zero and color fringing turned on.

* Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.

* Fixed a memory leak in LensFlare, NightSky, and BokehLights when rendering on the GPU.

* Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.

* Removed erroneous warnings about a missing Reprise directory.

* Licenses can now be activated off-line using command line tools.

* When activating licenses offline, support can now see which machines are activated.

* Put the name of the license in use in the help dialog to help debug floating licenses with multiple licenses.

* Fixed a bug that sometimes caused the "More Help" button in the help dialog to open the wrong documentation.

**New in 9.02:**

* Fixed a bug that could cause multiple Preset Browsers to start.

* Changed watermark to improve free trial experience.

* Fixed a bug that sometimes caused the hotspot to be positioned incorrectly in the Flare Editor.

* Fixed a bug that prevented some v8 presets from loading correctly in v9.

* Fixed a bug that caused point params to be set incorrectly when loading a preset in an interlaced Media Composer project in green/green mode.

* Fixed a bug that caused Grunge to not render a stamp after its relative density was lowered to zero and then raised again.

* Fixed a crash when certain clips were used as the Centers input of WarpDrops.

* Fixed a bug that made Star Saturation in NightSky ineffective.

* Improved Aurora documentation.

* Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.

**New in 9.01:**

* Fixed occasional problems starting the Preset Browser, Flare Editor, and Builder.

* Fixed a bug that caused PanAndZoom to not load some JPEG images.

* Fixed a rendering bug and improved performance in Gamma.

* Added new presets.

<hr>

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).
