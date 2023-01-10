{
   "date": "2017-08-15T10:19:48+00:00",
   "description": "Sapphire v8 Installation Instructions for Avid",
   "title": "Sapphire v8 for Avid"
}

[INSTALL INSTRUCTIONS - WINDOWS](#windows) <br>
[INSTALL INSTRUCTIONS - MAC](#mac)  

### Installation Instructions - Windows

<a name="windows"></a>

**To Download and install:**

1.  Make sure you have one or more of the following Avid products on Windows:

    <table border="0" cellpadding="0" cellspacing="0">

    <tbody>

    <tr>

    <td>Media Composer  </td>

    <td>any version</td>

    </tr>

    <tr>

    <td>Media Composer Meridien  </td>

    <td>v8 or greater</td>

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

    <tr>

    <td>DS or DS Nitris</td>

    <td>10.2.1 or greater (please update your DS if you have DS 10.2)</td>

    </tr>

    </tbody>

    </table>

2.  Quit your Avid software if it is running. If you have an older version of Sapphire 8 or 7 or 6 you do _not_ need to un-install it. The new installation will just replace it without removing any existing serial number.
3.  Do not use Sapphire v8 on DS 10.2; please update your DS to 10.2.1 or later first since it has improved AVX2 compatibility. 10.5 or later is recommended for best results.
4.  Download and run the v8 installer:  
    **[Download Sapphire 8.15 for Avid products on Windows 32 or 64 (109 Mb)](https://cdn.borisfx.com/borisfx/store/sapphire-avx-install-8.15.exe)**

    Either run the program from its current location, or save it to disk and then execute it from wherever you saved it. Follow the instructions given by the installer.

     Sapphire v8 should load all old sequences saved with older Sapphire versions, including v1 - v7.
     
    Sapphire 8 is an <small>AVX</small>2 plug-in. Avid has deprecated support for the old <small>AVX</small>1 interface, but <small>AVX</small>2 plug-ins can read old sequences saved with <small>AVX</small>1 plug-ins.
    
     When you restart your Avid software, the new version v8 plug-ins should appear in the Effect Palette in the **Sapphire** categories. On DS, you should find the new effect presets in the **DS Presets/Sapphire** folders. You can simply use these effects just as you would any other effect.
    
    For on-line help installed locally on your workstation, go to: **Start** -> **Programs** -> **GenArts Sapphire <small>AVX</small>** -> **Online Help**. A "Help" dialog is also provided when using a plug-in, which gives information about that plug-in currently being used.

**New in 8.15:**

*   Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
*   Removed erroneous warnings about a missing Reprise directory.
*   Licenses can now be activated off-line using command line tools.
*   When activating licenses offline, support can now see which machines are activated.
*   Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.
*   Fixed a bug that could cause multiple Preset Browsers to start.

**New in 8.14:**

*   Fixed a bug that caused point params to be set incorrectly when loading a preset in an interlaced Media Composer project in green/green mode.
*   Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a rare problem starting the Preset Browser, Flare Editor, and Builder.

**New in 8.13:**

*   Fixed occasional problems starting the Preset Browser, Flare Editor, and Builder.
*   Fixed a bug that caused PanAndZoom to not load some JPEG images.
*   Added Windows 10 support.
*   Fixed a bug that caused S_Transition previews in the Preset Browser to only render on the first clip.
*   Fixed a bug that could cause the Flare Editor to hang when drawing element indicators.
*   Improved some license tool error messages.
*   Improved performance of the Tilt-Shift preset for S_Effect.

**New in 8.12:**

*   ZapTo and ZapFrom: Fixed bolt pattern when using GPU.
*   Discourage Media Composer and other hosts from using floating licenses for Flame unless necessary.
*   Glint: Fixed artifacts in the upper-left corner.
*   Preset Browser: Fixed incorrect result count when searching.
*   Fixed artifacts in BlurMotion, Rays, and EdgeRays when rendering on GPU.

**New in 8.11:**

*   Fixed a bug in FilmRoll that sometimes made transparent areas opaque.
*   Fixed a bug that caused the license-tool to hang if the hard drive had been restored from backup.
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
*   Fixed a rare bug on Windows that would cause the Avid Media Composer's window to close when exiting the Preset Browser.
*   Fixed a bug that caused some Builder effects to lose settings when edited.
*   Fixed a memory leak in Crop/Transform.
*   Fixed an error in ZapFrom when Show: Edges is used with motion blur.
*   Fixed a bug that caused Preset Browser handshake errors on some non-English Windows installations.
*   Flare Designer: fixed a crash when creating Texture elements.
*   Fixed an erroneous warning about missing directories on machines running a free trial or floating license.
*   OSX: Fixed a bug that prevented 7 and 8 from using the same license.
*   Added new S_Effects, S_Transitions, Lensflare, and single effect presets.

**New in 8.01:**

*   Prevent crashes on Windows when GPU renders take too long.
*   Reduced intensity of some Swish3D presets to speed up renders and avoid Windows GPU driver issues.
*   Builder: fixed a bug where saved presets sometimes did not show up in the Preset Browser.
*   Fixed license activation problems on Mac.
*   VintageColor2Strip: improved results when Red Filter or Bluegreen Filter is set to black.
*   Fixed a memory leak in Builder.
*   Resetting point parameters to their defaults now works correctly.
*   GradientMulti now handles pixel aspect ratio correctly.
*   Streaks: setting Mask Type to Alpha now works correctly.
*   BleachBypass: Fixed incorrect renders when GrainAmpRed was set to zero.
*   Caustics: fixed artifacts at the edge of the image when using a custom Bumps pattern.

* * *

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

### Installation Instructions - Mac

<a name="mac"></a>

**Version 8.15 is now available!**

**To Download and install:**

1.  Make sure you have one or more of the following Avid products:

    <table border="0" cellpadding="0" cellspacing="0">

    <tbody>

    <tr>

    <td>Media Composer  </td>

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

2.  Make sure you are running Mac OS X 10.5 or greater.
3.  Quit your Avid software if it is running. If you have an older version of Sapphire 6 or 7 or v8 you do _not_ need to un-install it. The new installation will just replace it without removing any existing serial number.
4.  Download and run the installer:  
    **[Download Sapphire 8.15 for Mac OS X (152Mb)](https://cdn.borisfx.com/borisfx/store/SapphireAVXInstall-8.15.dmg)**

    Follow the instructions given by the installer. When it asks for your username and password, just enter your Mac user login password.

    > Sapphire v8 should load all old sequences saved with older Sapphire versions, including v1 - v7.
    > 
    > Sapphire 8 is an <small>AVX</small>2 plug-in. Avid has deprecated support for the old <small>AVX</small>1 interface, but <small>AVX</small>2 plug-ins can read old sequences saved with <small>AVX</small>1 plug-ins.
    > 
    > When you restart your Avid software, the new version v8 plug-ins should appear in the Effect Palette in the **Sapphire** categories. You can simply use these effects just as you would any other effect.
    > 
    > For on-line help installed locally on your workstation, go to the Applications folder, double click on **GenArtsSapphire<small>AVX</small>** and select the online documentation. A "Help" dialog is also provided when using a plug-in, which gives information about that plug-in currently being used.

**New in 8.15:**

*   Fixed a bug where S_Grain would go from color to monochrome after 524,000+ frames.
*   Removed erroneous warnings about a missing Reprise directory.
*   Licenses can now be activated off-line using command line tools.
*   When activating licenses offline, support can now see which machines are activated.
*   Fixed a bug in Effect Builder where moving a node to a disconnected edge does not work correctly.
*   Fixed a bug that could cause multiple Preset Browsers to start.

**New in 8.14:**

*   Fixed a bug that caused point params to be set incorrectly when loading a preset in an interlaced Media Composer project in green/green mode.
*   Fixed a few issues that stopped the Flare Editor from opening on systems set to use some non-English languages.
*   Fixed a rare problem starting the Preset Browser, Flare Editor, and Builder.

**New in 8.13:**

*   Fixed occasional problems starting the Preset Browser, Flare Editor, and Builder.
*   Fixed a bug that caused PanAndZoom to not load some JPEG images.
*   Fixed a bug that caused S_Transition previews in the Preset Browser to only render on the first clip.
*   Fixed a bug that could cause the Flare Editor to hang when drawing element indicators.
*   Improved some license tool error messages.
*   Improved performance of the Tilt-Shift preset for S_Effect.

**New in 8.12:**

*   ZapTo and ZapFrom: Fixed bolt pattern when using GPU.
*   Discourage Media Composer and other hosts from using floating licenses for Flame unless necessary.
*   Glint: Fixed artifacts in the upper-left corner.
*   Preset Browser: Fixed incorrect result count when searching.
*   Fixed artifacts in BlurMotion, Rays, and EdgeRays when rendering on GPU.

**New in 8.11:**

*   Fixed a bug in FilmRoll that sometimes made transparent areas opaque.
*   Fixed a bug that could create world-writeable files in the user's home directory.
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
*   Fixed a rare bug on Windows that would cause the Avid Media Composer's window to close when exiting the Preset Browser.
*   Fixed a bug that caused some Builder effects to lose settings when edited.
*   Fixed a memory leak in Crop/Transform.
*   Fixed an error in ZapFrom when Show: Edges is used with motion blur.
*   Fixed a bug that caused Preset Browser handshake errors on some non-English Windows installations.
*   Flare Designer: fixed a crash when creating Texture elements.
*   Fixed an erroneous warning about missing directories on machines running a free trial or floating license.
*   OSX: Fixed a bug that prevented 7 and 8 from using the same license.
*   Added new S_Effects, S_Transitions, Lensflare, and single effect presets.

**New in 8.01:**

*   Prevent crashes on Windows when GPU renders take too long.
*   Reduced intensity of some Swish3D presets to speed up renders and avoid Windows GPU driver issues.
*   Builder: fixed a bug where saved presets sometimes did not show up in the Preset Browser.
*   Fixed license activation problems on Mac.
*   VintageColor2Strip: improved results when Red Filter or Bluegreen Filter is set to black.
*   Fixed a memory leak in Builder.
*   Resetting point parameters to their defaults now works correctly.
*   GradientMulti now handles pixel aspect ratio correctly.
*   Streaks: setting Mask Type to Alpha now works correctly.
*   BleachBypass: Fixed incorrect renders when GrainAmpRed was set to zero.
*   Caustics: fixed artifacts at the edge of the image when using a custom Bumps pattern.

* * *

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [http://www.gnu.org/licenses/lgpl-2.1.html](http://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store//qt-everywhere-opensource-src-4.7.2.tar.gz).
