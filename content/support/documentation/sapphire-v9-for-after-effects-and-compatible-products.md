{
   "date": "2017-08-10T09:58:58+00:00",
   "description": "Sapphire v9 for After Effects and Compatible Products",
   "title": "Sapphire v9 for After Effects and Compatible Products"
}

### Install Instructions

[INSTALL INSTRUCTIONS - WINDOWS](#windows)

[INSTALL INSTRUCTIONS - MAC](#mac)

<hr>

### Window Installer(s)

<a name="windows"></a>The installer below is for use with all AE compatible products including After Effects and Premiere Pro. For Fusion, please use the OFX version instead.

**To Download and install:**

1. Make sure you have one or more AE plug-in compatible applications on Windows.

If you have an older version of Sapphire Plug-ins, the new installation will replace it, and you do not need to un-install it first.

1. Quit AE or other host applications that may be running.

1. **[Download the 9.03 Windows installer](https://cdn.borisfx.com/borisfx/store/sapphire-ae-install-9.03.exe)** (90 Mb).

Either run the installer program from its current location, or save it to disk and then execute it from wherever you saved it. Follow the instructions given by the installer.

1. Restart your host application, and the new plug-ins should appear in your effects menu.

**New in 9.03:**

* Temporarily disabled Expand Borders/Soft Borders in Premiere to fix a conflict with the HDR support introduced in Sapphire 9.02. This fixes rendering errors in effects such as Blur, Glow, and DropShadow. We are working on an improved fix that will reintroduce Expand Borders. Effects with Expand Borders/Soft Borders turned on may render slightly differently.

* Improved loading of old v6 projects containing ZFogLinear and ZFogExponential when Z Near and Z Far were set their default values.

* Fixed a crash in BokehLights with size set to zero and color fringing turned on.

* Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.

* Fixed a memory leak in LensFlare, NightSky, and BokehLights when rendering on the GPU.

* Fixed a bug that caused some presets for multi-effect plugins to be saved with the wrong effect.

* Fixed a bug that caused interlaced frames to look squashed in the Preset Browser.

* Fixed a bug that displayed an error message when opening the Preset Browser on an adjustment layer.

* Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.

* Fixed a few bugs that could hang AE CC 2015.

* Removed erroneous warnings about a missing Reprise directory.

* Fixed a crash in background renders with no license.

* Licenses can now be activated off-line using command line tools.

* When activating licenses offline, support can now see which machines are activated.

* Put the name of the license in use in the help dialog to help debug floating licenses with multiple licenses.

* Fixed a bug that sometimes caused the "More Help" button in the help dialog to open the wrong documentation.

* Removed uninstall shortcut from Windows 10 Start Menu due to unpredictable behavior, please use Add/Remove Programs in the Control Panel instead.

* Fixed a bug that sometimes caused point params to shift when using S_Effect.

**New in 9.021:**

* Fixed a hang in Premiere CC 2015 when rendering on the GPU.

**New in 9.02:**

* Fixed a bug that could cause multiple Preset Browsers to start.

* Changed watermark to improve free trial experience.

* Fixed a bug that sometimes caused the hotspot to be positioned incorrectly in the Flare Editor.

* Fixed a bug that prevented some v8 presets from loading correctly in v9.

* Fixed a bug that caused FreezeFrame and ReverseEdits to fail with "error: Unknown checkout id (78 :: 7)".

* Enable HDR (32-bit float) processing in Adobe Premiere.

* Fixed a bug that caused Grunge to not render a stamp after its relative density was lowered to zero and then raised again.

* Fixed a crash when certain clips were used as the Centers input of WarpDrops.

* Fixed a bug that made Star Saturation in NightSky ineffective.

* Improved Aurora documentation.

* Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.

**New in 9.01:**

* Fixed occasional problems starting the Preset Browser, Flare Editor, and Builder.

* Fixed a bug that caused some background renders to be incorrect.

* Fixed a rendering bug and improved performance in Gamma.

* Added new presets.

To view on-line documentation after you install the software, go to Start -> All Programs -> GenArts Sapphire AE -> Online Help (HTML) or (PDF). You can also click on the "About" box while using any plug-in.

In general, you can load projects saved with Sapphire v1 or v2 or v6 or v7 or v8 effects and they should automatically convert to use Sapphire v9. Please visit the support page for [more info](http://www.genarts.com/support/faqs/support-sapphire-after-effects-and-compatible-products#v1compat) on this.

If you require Sapphire v1 you can use the [version 1.10 installer](http://www.genarts.com/sapphire/sapphire-ae-install-1.10.exe). If you require Sapphire v2 you can use the [version 2.093 installer](http://www.genarts.com/sapphire/sapphire-ae-install-2.093.exe). If you already installed Sapphire v9 and want to go back to an earlier version you should first uninstall v9.

<hr> 

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar).

### Mac Installer(s)

<a name="mac"></a>

The installer below is for use with all AE compatible products including After Effects and Premiere Pro.

For Final Cut Pro or Motion, please use the FxPlug version instead.

**To Download and install:**

1. Make sure you have one or more AE plug-in compatible applications on a Mac with an Intel CPU and MacOS 10.5 or greater.

If you have an older version of Sapphire Plug-ins, the new installation will replace it, and you do not need to un-install it first.

1. Quit AE or other host applications that may be running.

1. **[Download the 9.03 Mac installer for 10.6 and above](https://cdn.borisfx.com/borisfx/store/SapphireAEInstall-9.03.dmg)** (162 Mb)

1. Run the installer. When it asks for your passphrase, enter your Mac user login password, and follow the instructions given by the installer.

1. Restart your host product, and the new plug-ins should appear in your effects menu.

To view on-line documentation after you install the software, go to the /Applications/GenArtsSapphireAE folder and double click on Online Help.html or Online Help.pdf. You can also click on the "About" box while using any plug-in.

In general, you can load projects saved with Sapphire v1 or v2 or v5 or v6 or v7 effects and they should automatically convert to use Sapphire v9. Please visit the support page for [more info](http://support.genarts.com/#v1compat) on this.

If you require Sapphire v1 you can use the [version 1.10 installer](https://cdn.borisfx.com/borisfx/store/SapphireAEInstall-1.100.dmg). If you require Sapphire v2 you can use the [version 2.093 installer](https://cdn.borisfx.com/borisfx/store/SapphireAEInstall-2.093.dmg). If you already installed Sapphire v9 and want to go back to an older version you should first uninstall v9.

**New in 9.03:**

* Temporarily disabled Expand Borders/Soft Borders in Premiere to fix a conflict with the HDR support introduced in Sapphire 9.02. This fixes rendering errors in effects such as Blur, Glow, and DropShadow. We are working on an improved fix that will reintroduce Expand Borders. Effects with Expand Borders/Soft Borders turned on may render slightly differently.

* Improved loading of old v6 projects containing ZFogLinear and ZFogExponential when Z Near and Z Far were set their default values.

* Fixed a crash in BokehLights with size set to zero and color fringing turned on.

* Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.

* Fixed a memory leak in LensFlare, NightSky, and BokehLights when rendering on the GPU.

* Fixed a bug that caused some presets for multi-effect plugins to be saved with the wrong effect.

* Fixed a bug that caused interlaced frames to look squashed in the Preset Browser.

* Fixed a bug that displayed an error message when opening the Preset Browser on an adjustment layer.

* Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.

* Fixed a few bugs that could hang AE CC 2015.

* Removed erroneous warnings about a missing Reprise directory.

* Fixed a crash in background renders with no license.

* Licenses can now be activated off-line using command line tools.

* When activating licenses offline, support can now see which machines are activated.

* Put the name of the license in use in the help dialog to help debug floating licenses with multiple licenses.

* Fixed a bug that sometimes caused the "More Help" button in the help dialog to open the wrong documentation.

* Fixed a bug that sometimes caused point params to shift when using S_Effect.

**New in 9.021:**

* Fixed a hang in Premiere CC 2015 when rendering on the GPU.

**New in 9.02:**

* Fixed a bug that could cause multiple Preset Browsers to start.

* Changed watermark to improve free trial experience.

* Fixed a bug that sometimes caused the hotspot to be positioned incorrectly in the Flare Editor.

* Fixed a bug that prevented some v8 presets from loading correctly in v9.

* Fixed a bug that caused FreezeFrame and ReverseEdits to fail with "error: Unknown checkout id (78 :: 7)".

* Enable HDR (32-bit float) processing in Adobe Premiere.

* Fixed a bug that caused Grunge to not render a stamp after its relative density was lowered to zero and then raised again.

* Fixed a crash when certain clips were used as the Centers input of WarpDrops.

* Fixed a bug that made Star Saturation in NightSky ineffective.

* Improved Aurora documentation.

* Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.

**New in 9.01:**

* Fixed occasional problems starting the Preset Browser, Flare Editor, and Builder.

* Fixed a bug that caused some background renders to be incorrect.

* Fixed a rendering bug and improved performance in Gamma.

* Added new presets.

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar).
