{
  "date": "2020-01-31T05:00:00.000Z",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-avid/SapphireAVXInstall-2020.02.dmg",
  "host": "Avid",
  "platform": "Mac 64-Bit",
  "product": "Sapphire",
  "log_file_path": "/Applications/GenArtsSapphireAVX/config/s_log.text",
  "require_login": true,
  "title": "Boris Sapphire 2020.02 for Avid macOS",
  "upgrade_topic": "com.genarts.sapphire-avx2-install",
  "version": 13.02,
  "key_path_code": "config/sapphire-avx2.dylib",
  "release_notes": "https://borisfx.com/release-notes/sapphire-2020-0-2-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire,bundleav-bcc-mocha-sapphire-r1,bundleavid-bcc-mocha-sapphire-r1,bundleavid-bcc-sapphire-r1,bundleavid-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bu-bcc-mocha-sapphire-silhouette",
    "api": "avx",
    "version": "20190925"
  },
  "license_names": "bundleav-bcc-mocha-sapphire-r1,bundleavid-bcc-mocha-sapphire-r1,bundleavid-bcc-sapphire-r1,bundleavid-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,sapphire_ae_avx_ofx_sparks_121f,sapphire_ae_avx_ofx_sparks_122,sapphire_ae_ofx_sparks_avx_103f,sapphire_ae_ofx_sparks_avx_104,sapphire_ae_ofx_sparks_avx_104f,sapphire_ae_ofx_sparks_avx_105,sapphire_avx_132,sapphire_avx_135,sapphire_avx_136f,bu-bcc-mocha-sapphire-silhouette"
}
**To Download and install:**

1. Make sure you have one or more of the following Avid products:

<table border="0" cellpadding="0" cellspacing="0">

<tbody>

<tr>

<td>Media Composer  </td>

<td>8.0 or greater</td>

</tr>

</tbody>

</table>

1. Make sure you are running Mac OS X 10.12 or greater.
2. Quit your Avid software if it is running. If you have an older version of Sapphire v6, v7, v8, v9, v10, v11, or v12 you do _not_ need to un-install it. The new installation will just replace it without removing any existing serial number.
3. Download and run the installer.

Follow the instructions given by the installer. When it asks for your username and password, just enter your Mac user login password.

Sapphire v13 should load all old sequences saved with older Sapphire versions, including v1 - v12.

Sapphire 13 is an <small>AVX</small>2 plug-in. Avid has deprecated support for the old <small>AVX</small>1 interface, but <small>AVX</small>2 plug-ins can read old sequences saved with <small>AVX</small>1 plug-ins.

When you restart your Avid software, the new version v13 plug-ins should appear in the Effect Palette in the **Sapphire** categories. You can simply use these effects just as you would any other effect.

For on-line help installed locally on your workstation, go to the Applications folder, double click on **GenArtsSapphire<small>AVX</small>** and select the online documentation. A "Help" dialog is also provided when using a plug-in, which gives information about that plug-in currently being used.

---

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [https://www.gnu.org/licenses/lgpl-2.1.html](https://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available \[here\] (https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

<hr>

### What's New In Sapphire 2020.02
* RackDefocus, Convolve, Glare, Flashbulbs: Fixed a slowdown in these effects when run on the CPU with certain parameter settings.
* Licensing: Improved license activation and deactivation where licensing one machine would deactivate another on certain network configurations.
* Preset Browser: Fixed an issue where the preset browser won't launch on large footage. For now the preset browser will use sample footage when the input clip is too large.
* Minor License Tool UI improvements.


### What's New In Sapphire 2020.01
* S_FreeLens: Enlarged widgets for easier selection.
* ParallaxStrips: Fixed a crash with certain parameter values when running on the GPU.
* Windows: Fixed the cancel button in the "Plugin is starting the <App>" dialog.
* Miscellaneous improvements in the Sapphire Preset Browser.
* Sapphire Flare Designer: Favorites now update without restarting the Flare Designer.
* Mocha: Mocha now uses a default OCIO config file if the OCIO environment variable isn't set.
* Mocha: Reduced flickering when tracking on interlaced footage.
* Mocha on macOS: To close Mocha, press command-q shortcut key or select Quit from File menu.
* Licensing: Improved license activation and deactivation where licensing one machine would deactivate another on certain network configurations.

### What’s New in Sapphire 2020


**New Effect and Transitions**

* S_FreeLens- Brand new effect for Sapphire 2020, S_FreeLens emulates the look achieved by shooting with a lens detached from the camera body.

* S_OCIOTransform- New for Sapphire 2020, OCIOTransform brings OpenColorIO support directly into the host.


**New Features**

* In Sapphire 2020, Mocha point parameter tracking has been added to LensFlare, Rays, EdgeRays, Luna, Grunge, Spotlight, Aurora, Zap, MuzzleFlash, and FreeLens.

* Performance improvements have been added to various effects including EdgeRays, WhipLash, and SwishPan.

* Various performance improvements in the Preset Browser.

* Compare Mode has been added to the Sapphire Preset Browser, Sapphire Flare Designer, and Sapphire Effect and Transition Builder.

* OpenColorIO support has been added the Sapphire Preset Browser, Sapphire Flare Designer, and Sapphire Effect and Transition Builder.

* Improved Mocha: Area brush for quick masking.

**Known Issues**

* If the Preset Browser is launched multiple times in rapid succession inside the Sapphire Effect Builder, selection may not work in the preset browser.  If this happens close the Preset Browser and re-open it.

* Mocha on Mac OS: The command-q shortcut key doesn't immediately respond when trying to close Mocha. If the key is held down for 1-2 seconds, it will correctly close Mocha.

* Mocha: The Mocha UI does not correctly locate the default OCIO config file shipped with Sapphire. To use the default OCIO config file shipped with Sapphire, use the OCIO environment variable to locate said the config file.

* LensFlareAutoTrack: green/green and yellow/yellow mode will give different results if hotspot_shift is set to a non-zero value on interlaced footage.

* Mocha: Mocha point tracking widget starts in the wrong place in green/green mode on interlaced footage.

