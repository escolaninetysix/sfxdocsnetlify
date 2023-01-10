{
   "date": "2017-08-15T13:23:21+00:00",
   "description": "Sapphire v8 Installation Instructions for Adobe After Effects",
   "title": "Sapphire v8 for Adobe After Effects"
}

[INSTALL INSTRUCTIONS - WINDOWS](#windows)  
[INSTALL INSTRUCTIONS - MAC](#mac)  

### Installation Instructions - Windows

<a name="windows"></a>

The installer below is for use with all AE compatible products including After Effects and Premiere Pro.

**To Download and install:**

1.  Make sure you have one or more AE plug-in compatible applications on Windows.  
    If you have an older version of Sapphire Plug-ins, the new installation will replace it, and you do not need to un-install it first.
2.  Quit AE or other host applications that may be running.
3.  **[Download the 8.15 Windows installer](https://cdn.borisfx.com/borisfx/store/sapphire-ae-install-8.15.exe)** (105 Mb).  
    Either run the installer program from its current location, or save it to disk and then execute it from wherever you saved it. Follow the instructions given by the installer.
4.  Restart your host application, and the new plug-ins should appear in your effects menu.

To view on-line documentation after you install the software, go to Start -> All Programs -> GenArts Sapphire AE -> Online Help (HTML) or (PDF). You can also click on the "About" box while using any plug-in.

In general, you can load projects saved with Sapphire v1 or v2 or v5 or v6 or v7 effects and they should automatically convert to use Sapphire v8\. Please visit the support page for [more info](http://www.genarts.com/support/faqs/support-sapphire-after-effects-and-compatible-products#v1compat) on this.

If you require Sapphire v1 you can use the [version 1.10 installer](https://cdn.borisfx.com/borisfx/store/sapphire-ae-install-1.10.exe). If you require Sapphire v2 you can use the [version 2.093 installer](https://cdn.borisfx.com/borisfx/store/sapphire-ae-install-2.093.exe).

**New in 8.15:**

*   Fixed a hang in Premiere CC 2015 when rendering on the GPU
*   Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
*   Removed erroneous warnings about a missing Reprise directory.
*   Licenses can now be activated off-line using command line tools.
*   When activating licenses offline, support can now see which machines are activated.
*   Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.
*   Fixed a bug that could cause multiple Preset Browsers to start.

**New in 8.14:**

*   Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a rare problem starting the Preset Browser, Flare Editor, and Builder.

**New in 8.13:**

*   Fixed occasional problems starting the Preset Browser, Flare Editor, and Builder.
*   Fixed a bug that caused background renders to be incorrect.
*   Added Windows 10 support.
*   Fixed a bug that caused S_Transition previews in the Preset Browser to only render on the first clip.
*   Fixed a bug that caused Preset Browser preview images to not include upstream effects in AE CC 2015.
*   Fixed a bug that could cause the Flare Editor to hang when drawing element indicators.
*   Improved some license tool error messages.
*   Improved performance of the Tilt-Shift preset for S_Effect.

**New in 8.12:**

*   Fix a memory leak in FilmEffect and other time based effects.
*   ZapTo and ZapFrom: Fixed bolt pattern when using GPU.
*   Discourage AE and other hosts from using floating licenses for Flame unless necessary.
*   Glint: fixed artifacts in the upper-left corner.
*   When using Matte from Path option, handle feathering correctly at reduced resolution.
*   Preset Browser: Fixed incorrect result count when searching.
*   Prevent crash when saving Zap preset in Follow Path mode.
*   Fixed artifacts in BlurMotion, Rays, and EdgeRays when rendering on GPU.

**New in 8.11:**

*   Added support for After Effects CC 2015.
*   Fixed a bug in FilmRoll that sometimes made transparent areas opaque.
*   Fixed a bug that caused the license-tool to hang if the hard drive had been restored from backup.
*   Fixed free background render licenses.
*   Fixed a rare crash when returning to After Effects from Builder.
*   Improved reliability of Preset Browser preview images from Premiere.
*   Fixed a crash in the Preset Browser when switching to 'Sample Only' mode
*   Fixed a bug that caused some parameters to not appear in documentation.

**New in 8.1:**

*   Builder Improvements
    1.  When launched from S_Transition, Builder now has two frames of lead-in and lead-out on either side of the transition.
    2.  The preview area in Builder now supports pan and zoom.
    3.  Effect nodes in Builder now have a Save Preset button.
    4.  The search box in Chooser now knows how to search over the plugins, in addition to the presets.
    5.  Builder has a new menu option, Node->Insert Node from Preset.
    6.  Builder has a new menu option, Node->Insert S_Effect.
    7.  Builder has a new menu option, Node->Add Sticky Notes.
    8.  Builder now has the ability to save sticky notes within Builder Effects.
    9.  Builder now has two options in the View menu that affect the way alpha is handled in the preview.
    10.  The Transition Node in Builder now has a custom dialog for choosing the transition.
*   Fixed a rare bug on Windows that would cause the After Effects's and Premiere Pro's window to close when exiting the Preset Browser.
*   Fixed a bug that caused some Builder effects to lose settings when edited.
*   Fixed a bug in S_Effect where dragging a parameter could set it to a large negative value.
*   Fixed an error in ZapFrom when Show: Edges is used with motion blur.
*   Fixed a bug that caused Preset Browser handshake errors on some non-English Windows installations.
*   Fixed a bug in LightLeak where element positions were flipped vertically.
*   Flare Designer: fixed a crash when creating Texture elements.
*   LensFlare 3D: Fixed a bug that prevented the occlusion layer parameters from showing in After Effects.
*   Fixed an erroneous warning about missing directories on machines running a free trial or floating license.
*   OSX: Fixed a bug that prevented Sapphire 7 and Sapphire 8 from using the same license.
*   Added new S_Effects, S_Transitions, Lensflare, and single effect presets.

**New in 8.01:**

*   After updating to this release, S_Effect instances containing Beauty, LightLeak, Grunge, or others may have a color parameter reset.
*   Fixed a bug in S_Effect that could corrupt AE projects on some machines.
*   Reduced intensity of some Swish3D presets to speed up renders and avoid Windows GPU driver issues.
*   Builder: fixed a bug where saved presets sometimes did not show up in the Preset Browser.
*   Fixed license activation problems on Mac.
*   VintageColor2Strip: improved results when Red Filter or Bluegreen Filter is set to black.
*   Fixed a memory leak in Builder.
*   FlickerMchMatteColor: fixed Set Hold Level button for certain types of match inputs.
*   GradientMulti now handles pixel aspect ratio correctly.
*   BleachBypass: Fixed incorrect renders when GrainAmpRed was set to zero.
*   Caustics: fixed artifacts at the edge of the image when using a custom Bumps pattern.

* * *

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

### Installation Instructions - Mac

<a name="mac"></a>

The installer below is for use with all AE compatible products including After Effects and Premiere Pro.

**To Download and install:**

1.  Make sure you have one or more AE plug-in compatible applications on a Mac with an Intel CPU and MacOS 10.5 or greater.  
    If you have an older version of Sapphire Plug-ins, the new installation will replace it, and you do not need to un-install it first.
2.  Quit AE or other host applications that may be running.
3.  **[Download the 8.15 Mac installer for 10.6 and above](https://cdn.borisfx.com/borisfx/store/SapphireAEInstall-8.15.dmg)** (150 Mb)
4.  Run the installer. When it asks for your passphrase, enter your Mac user login password, and follow the instructions given by the installer.
5.  Restart your host product, and the new plug-ins should appear in your effects menu.

To view on-line documentation after you install the software, go to the /Applications/GenArtsSapphireAE folder and double click on Online Help.html or Online Help.pdf. You can also click on the "About" box while using any plug-in.

In general, you can load projects saved with Sapphire v1 or v2 or v5 or v6 or v7 effects and they should automatically convert to use Sapphire v8\. Please visit the support page for [more info](http://www.genarts.com/support/faqs/support-sapphire-after-effects-and-compatible-products#v1compat) on this.

If you require Sapphire v1 you can use the [version 1.10 installer](https://cdn.borisfx.com/borisfx/store/SapphireAEInstall-1.100.dmg). If you require Sapphire v2 you can use the [version 2.093 installer](https://cdn.borisfx.com/borisfx/store/SapphireAEInstall-2.093.dmg). If you already installed Sapphire v8 and want to go back to an older version you should first uninstall v8.

*   Fixed a hang in Premiere CC 2015 when rendering on the GPU
*   Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
*   Removed erroneous warnings about a missing Reprise directory.
*   Licenses can now be activated off-line using command line tools.
*   When activating licenses offline, support can now see which machines are activated.
*   Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.
*   Fixed a bug that could cause multiple Preset Browsers to start.

**New in 8.14:**

*   Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a rare problem starting the Preset Browser, Flare Editor, and Builder.

**New in 8.13:**

*   Fixed occasional problems starting the Preset Browser, Flare Editor, and Builder.
*   Fixed a bug that caused background renders to be incorrect.
*   Added Windows 10 support.
*   Fixed a bug that caused S_Transition previews in the Preset Browser to only render on the first clip.
*   Fixed a bug that caused Preset Browser preview images to not include upstream effects in AE CC 2015.
*   Fixed a bug that could cause the Flare Editor to hang when drawing element indicators.
*   Improved some license tool error messages.
*   Improved performance of the Tilt-Shift preset for S_Effect.

**New in 8.12:**

*   Fix a memory leak in FilmEffect and other time based effects.
*   ZapTo and ZapFrom: Fixed bolt pattern when using GPU.
*   Discourage AE and other hosts from using floating licenses for Flame unless necessary.
*   Glint: fixed artifacts in the upper-left corner.
*   When using Matte from Path option, handle feathering correctly at reduced resolution.
*   Preset Browser: Fixed incorrect result count when searching.
*   Prevent crash when saving Zap preset in Follow Path mode.
*   Fixed artifacts in BlurMotion, Rays, and EdgeRays when rendering on GPU.

**New in 8.11:**

*   Added support for After Effects CC 2015.
*   Fixed a bug in FilmRoll that sometimes made transparent areas opaque.
*   Fixed free background render licenses.
*   Fixed a rare crash when returning to After Effects from Builder.
*   Fixed a bug that could create world-writeable files in the user's home directory.
*   Improved reliability of Preset Browser preview images from Premiere.
*   Fixed a crash in the Preset Browser when switching to 'Sample Only' mode
*   Fixed a bug that caused some parameters to not appear in documentation.

**New in 8.1:**

*   Builder Improvements
    1.  When launched from S_Transition, Builder now has two frames of lead-in and lead-out on either side of the transition.
    2.  The preview area in Builder now supports pan and zoom.
    3.  Effect nodes in Builder now have a Save Preset button.
    4.  The search box in Chooser now knows how to search over the plugins, in addition to the presets.
    5.  Builder has a new menu option, Node->Insert Node from Preset.
    6.  Builder has a new menu option, Node->Insert S_Effect.
    7.  Builder has a new menu option, Node->Add Sticky Notes.
    8.  Builder now has the ability to save sticky notes within Builder Effects.
    9.  Builder now has two options in the View menu that affect the way alpha is handled in the preview.
    10.  The Transition Node in Builder now has a custom dialog for choosing the transition.
*   Fixed a rare bug on Windows that would cause the After Effects's and Premiere Pro's window to close when exiting the Preset Browser.
*   Fixed a bug that caused some Builder effects to lose settings when edited.
*   Fixed a bug in S_Effect where dragging a parameter could set it to a large negative value.
*   Fixed an error in ZapFrom when Show: Edges is used with motion blur.
*   Fixed a bug that caused Preset Browser handshake errors on some non-English Windows installations.
*   Fixed a bug in LightLeak where element positions were flipped vertically.
*   Flare Designer: fixed a crash when creating Texture elements.
*   LensFlare 3D: Fixed a bug that prevented the occlusion layer parameters from showing in After Effects.
*   Fixed an erroneous warning about missing directories on machines running a free trial or floating license.
*   OSX: Fixed a bug that prevented Sapphire 7 and Sapphire 8 from using the same license.
*   Added new S_Effects, S_Transitions, Lensflare, and single effect presets.

**New in 8.01:**

*   After updating to this release, S_Effect instances containing Beauty, LightLeak, Grunge, or others may have a color parameter reset.
*   Fixed a bug in S_Effect that could corrupt AE projects on some machines.
*   Reduced intensity of some Swish3D presets to speed up renders and avoid Windows GPU driver issues.
*   Builder: fixed a bug where saved presets sometimes did not show up in the Preset Browser.
*   Fixed license activation problems on Mac.
*   VintageColor2Strip: improved results when Red Filter or Bluegreen Filter is set to black.
*   Fixed a memory leak in Builder.
*   FlickerMchMatteColor: fixed Set Hold Level button for certain types of match inputs.
*   GradientMulti now handles pixel aspect ratio correctly.
*   BleachBypass: Fixed incorrect renders when GrainAmpRed was set to zero.
*   Caustics: fixed artifacts at the edge of the image when using a custom Bumps pattern.

* * *

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).
