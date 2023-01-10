{
  "date": "2019-12-11T04:00:00.000Z",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-avid/SapphireAVXInstall-2019.06.dmg",
  "host": "Avid",
  "platform": "Mac 64-Bit",
  "product": "Sapphire",
  "log_file_path": "/Applications/GenArtsSapphireAVX/config/s_log.text",
  "require_login": true,
  "title": "Boris Sapphire 2019 for Avid macOS",
  "upgrade_topic": "com.genarts.sapphire-avx2-install",
  "version": 12.06,
  "key_path_code": "config/sapphire-avx2.dylib",
  "release_notes": "https://borisfx.com/release-notes/sapphire-2019-0-6-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire",
    "api": "avx",
    "version": "20181031"
  },
  "license_names": "sapphire_ae_ofx_sparks_avx_104,sapphire_avx_135"
}
**To Download and install:**

1. Make sure you have one or more of the following Avid products:

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

1. Make sure you are running Mac OS X 10.8 or greater.
2. Quit your Avid software if it is running. If you have an older version of Sapphire v6 or v7 or v8 or v9 or v10 you do _not_ need to un-install it. The new installation will just replace it without removing any existing serial number.
3. Download and run the installer.

Follow the instructions given by the installer. When it asks for your username and password, just enter your Mac user login password.

Sapphire v12 should load all old sequences saved with older Sapphire versions, including v1 - v11.

Sapphire 12 is an <small>AVX</small>2 plug-in. Avid has deprecated support for the old <small>AVX</small>1 interface, but <small>AVX</small>2 plug-ins can read old sequences saved with <small>AVX</small>1 plug-ins.

When you restart your Avid software, the new version v10 plug-ins should appear in the Effect Palette in the **Sapphire** categories. You can simply use these effects just as you would any other effect.

For on-line help installed locally on your workstation, go to the Applications folder, double click on **GenArtsSapphire<small>AVX</small>** and select the online documentation. A "Help" dialog is also provided when using a plug-in, which gives information about that plug-in currently being used.

---

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [https://www.gnu.org/licenses/lgpl-2.1.html](https://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available \[here\] (https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

<hr>

### What's New In Sapphire 2019.06:
* Windows: Fixed the cancel button in the 'Starting Mocha' dialog.
* EdgeRays: Fixed a crash when "Rays Res" is set to anything other than Full.
* Added environment variables to the Sapphire Preset Browser to set non-standard search locations for presets: SAPPHIRE_LOAD_PRESET_PATH and SAPPHIRE_SAVE_PRESET_PATH.

### What's New In Sapphire 2019.05:
* Fixed crop in S_PanAndZoom.
* Improved the stability of nodelocked licenses.
* Fixed a slowdown in the first frame on some offline machines.

### What's New In Sapphire 2019.04:
* Improved stability of Sapphire when using the GPU Fixed S_Effect and S_Transition in Burn, Flare, and Flame Assist

### What's New In Sapphire 2019.03
* Fixed a slowdown when Sapphire is first applied on some offline systems using activation-keys

### What’s New in Sapphire 2019.02 for Avid

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
