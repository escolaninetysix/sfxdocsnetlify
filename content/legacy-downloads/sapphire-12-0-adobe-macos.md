{
  "date": "2019-12-11T04:00:00.000Z",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-adobe/SapphireAEInstall-2019.06.dmg",
  "host": "Adobe",
  "platform": "Mac 64-Bit",
  "product": "Sapphire",
  "log_file_path": "/Applications/GenArtsSapphireAE/config/s_log.text",
  "require_login": true,
  "title": "Boris Sapphire 2019 for Adobe macOS",
  "upgrade_topic": "com.genarts.sapphire-ae-install",
  "version": 12.06,
  "key_path_code": "config/libsapphire-ae.dylib",
  "release_notes": "https://borisfx.com/release-notes/sapphire-2019-0-6-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire",
    "api": "ae",
    "version": "20181031"
  },
  "license_names": "sapphire_ae_ofx_sparks_avx_104,sapphire_ae_ofx_sparks_102"
}
The installer below is for use with all AE compatible products including After Effects and Premiere Pro.

**To Download and install:**

1. Make sure you have one or more AE plug-in compatible applications on a Mac with an Intel CPU and MacOS 10.8 or greater.
2. If you have an older version of Sapphire Plug-ins, the new installation will replace it, and you do not need to un-install it first.
3. Quit AE or other host applications that may be running.
4. Download the installer.
5. Run the installer. When it asks for your passphrase, enter your macOS user login password, and follow the instructions given by the installer.
6. Restart your host product, and the new plug-ins should appear in your effects menu.

To view on-line documentation after you install the software, go to the /Applications/GenArtsSapphireAE folder and double click on Online Help.html or Online Help.pdf. You can also click on the "About" box while using any plug-in.

In general, you can load projects saved with older Sapphire effects and they should automatically convert to use Sapphire v12. Please visit the support page for more info on this.

If you already installed Sapphire v12 and want to go back to an older version you should first uninstall v12.

<br>
<hr>
This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see https://www.gnu.org/licenses/lgpl-2.1.html for more details. The source code for Qt is available here.

### What's New In Sapphire 2019.06:
* Windows: Fixed the cancel button in the 'Starting Mocha' dialog.
* EdgeRays: Fixed a crash when "Rays Res" is set to anything other than Full.
* Premiere: Fixed a warning when Sapphire is applied to a clip with a non-standard frame rate.
* Added environment variables to the Sapphire Preset Browser to set non-standard search locations for presets: SAPPHIRE_LOAD_PRESET_PATH and SAPPHIRE_SAVE_PRESET_PATH.
* Premiere: Removed the "Follow Path" option in S_Zap on Premiere.  This mode only works on After Effects.

### What's New In Sapphire 2019.05:
* Fixed crop in S_PanAndZoom.
* Improved the stability of nodelocked licenses.
* Fixed a slowdown in the first frame on some offline machines.

### What's New In Sapphire 2019.04:
* Improved stability of Sapphire when using the GPU Fixed S_Effect and S_Transition in Burn, Flare, and Flame Assist

### What's New In Sapphire 2019.03
* Fixed a slowdown when Sapphire is first applied on some offline systems using activation-keys

### What’s New in Sapphire 2019.02 for Adobe

* Fixed a crash that occurred when ctrl-z was pressed on machines with certain hardware configurations
* Fixed Premiere GPU suite integration on MacOS
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
