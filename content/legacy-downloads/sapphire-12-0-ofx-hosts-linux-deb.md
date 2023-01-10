{
  "date": "2019-12-11T04:00:00.000Z",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-ofx/sapphireofx_2019.060-1.0_amd64.deb",
  "host": "OFX",
  "platform": "Linux 64-Bit .deb",
  "product": "Sapphire",
  "log_file_path": "/usr/genarts/sapphireofx/s_log.text",
  "require_login": true,
  "title": "Boris Sapphire 2019 for OFX Linux (Debian)",
  "version": 12.06,
  "release_notes": "https://borisfx.com/release-notes/sapphire-2019-0-6-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire",
    "api": "ofx",
    "version": "20181031"
  },
  "license_names": "sapphire_ae_ofx_sparks_avx_104,sapphire_ae_ofx_sparks_102"
}
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

   <td style="width: 484px;">4.3 and 4.4 only</td>

   </tr>

   <tr>

   <td style="width: 368px;">Mistika</td>

   <td style="width: 484px;">6.5.35 or greater</td>

   </tr>

   </tbody>

   </table>
2. Quit any host applications that may be running.
   If you previously installed an older version of Sapphire Plug-ins, the new installation will just replace it. You should not need to uninstall it first.
3. For Red Hat or similar: become root and use the rpm shell command to download (207Mb) and run the installer or download the RPM installer file and install it locally.

   For Ubuntu: first make sure you have 'libjpeg62', and 'libglade2-0' packages installed.
   Then download the DEB installer file (207Mb), become root, and type the command:
   dpkg -i --force-architecture sapphireofx_2019.050-1.0_amd64.deb for 64 bit
4. <span style="line-height: 20px;">Restart your host product, and the new plug-ins should appear in your effects menu.</span>

To view on-line documentation after you install the software, go to the RedHat or Ubuntu start menu and select GenArts Sapphire OFX -> Sapphire Online Help (HTML) or (PDF). You can also click on the "Help" button while using any plug-in.

<hr>

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [https://www.gnu.org/licenses/lgpl-2.1.html](https://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

<hr>

### What's New In Sapphire 2019.06:
* Windows: Fixed the cancel button in the 'Starting Mocha' dialog.
* EdgeRays: Fixed a crash when "Rays Res" is set to anything other than Full.
* Added environment variables to the Sapphire Preset Browser to set non-standard search locations for presets: SAPPHIRE_LOAD_PRESET_PATH and SAPPHIRE_SAVE_PRESET_PATH.
* Flame: Fixed a crash when S_Retime is used downstream of a BurnInMetadata node.

### What's New In Sapphire 2019.05:
* Fixed crop in S_PanAndZoom.
* Improved the stability of nodelocked licenses.
* Fixed a slowdown in the first frame on some offline machines.

### What's New In Sapphire 2019.04:
* Improved stability of Sapphire when using the GPU Fixed S_Effect and S_Transition in Burn, Flare, and Flame Assist

### What's New In Sapphire 2019.03
* Fixed a slowdown when Sapphire is first applied on some offline systems using activation-keys

### What’s New in Sapphire 2019.02 for OFX Hosts

* Minor installer improvements
* Improved proxy server support for installing and removing licenses
* Mocha Improvements:
** Stability improvements
** Memory usage improvements
** Fixed a crash when the Mocha cache directory is missing
** Fixed a crash opening certain old sapphire v11 mocha projects
* Minor speed improvements in the Preset Browser, Builder and Flare Editor
* Minor preset improvements

Baselight:
* Baselight 5 support
* Fixed a bug where the Preset Browser and Flare Editor sometimes failed to launch
* Fixed thumbnails in the Preset Browser
* Fixed saving presets on Baselight.  User saved presets will now be saved inside: /usr/fl/sapphire/

Fusion:
* Fixed a crash in S_PixelSort on Fusion

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
