{
  "date": "2020-01-31T05:00:00.000Z",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-ofx/sapphireofx_2020.020-1.0_amd64.deb",
  "host": "OFX",
  "platform": "Linux 64-Bit .deb",
  "product": "Sapphire",
  "log_file_path": "/usr/genarts/sapphireofx/s_log.text",
  "require_login": true,
  "title": "Boris Sapphire 2020.02 for OFX Linux (Debian)",
  "version": 13.02,
  "release_notes": "https://borisfx.com/release-notes/sapphire-2020-0-2-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire,bundlea-bcc-mocha-sapphire-r1,bundleadobe-bcc-mocha-sapphire-r1,bundleadobe-bcc-sapphire-r1,bundleadobe-mocha-sapphire-r1,bundleadobeofx-bcc-mocha-sapphire-r1,bundleadobeofx-bcc-sapphire-r1,bundleadobeofx-mocha-sapphire-r1,bundleao-bcc-mocha-sapphire-r1,bundleao-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bundleofx-bcc-mocha-sapphire-r1,bundleofx-bcc-sapphire-r1,bundleofx-mocha-sapphire-r1,bu-bcc-mocha-sapphire-silhouette",
    "api": "ofx",
    "version": "20190925"
  },
  "license_names": "bundlea-bcc-mocha-sapphire-r1,bundleadobe-bcc-mocha-sapphire-r1,bundleadobe-bcc-sapphire-r1,bundleadobe-mocha-sapphire-r1,bundleadobeofx-bcc-mocha-sapphire-r1,bundleadobeofx-bcc-sapphire-r1,bundleadobeofx-mocha-sapphire-r1,bundleao-bcc-mocha-sapphire-r1,bundleao-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bundleofx-bcc-mocha-sapphire-r1,bundleofx-bcc-sapphire-r1,bundleofx-mocha-sapphire-r1,sapphire_ae_avx_ofx_sparks_121f,sapphire_ae_avx_ofx_sparks_124,sapphire_ae_ofx_sparks_102,sapphire_ae_ofx_sparks_102f,sapphire_ae_ofx_sparks_128,sapphire_ae_ofx_sparks_avx_103f,sapphire_ae_ofx_sparks_avx_104,sapphire_ae_ofx_sparks_avx_104f,sapphire_ae_ofx_sparks_avx_106,sapphire_ae_ofx_sparks_avx_107,sapphire_ofx_133,sapphire_ofx_XXX,bu-bcc-mocha-sapphire-silhouette"
}
**To Download and install:**

1. Make sure you have one or more of the following OFX compatible host products on Linux:

   <table border="0" cellpadding="0" cellspacing="0">

   <tbody>

   <tr>

   <td style="width: 368px;"><span style="line-height: 20.7999992370605px;">Resolve</span></td>

   <td style="width: 484px;"><span style="line-height: 20.7999992370605px;">12.5 or greater</span></td>

   </tr>

   <tr>

   <td style="width: 368px;">Autodesk Flame</td>

   <td style="width: 484px;">2017 or greater</td>

   </tr>

   <tr>

   <td style="width: 368px;">Nuke</td>

   <td style="width: 484px;">11 or greater</td>

   </tr>

   <tr>

   <td style="width: 368px;">ToonBoom Harmony</td>

   <td style="width: 484px;">12 or greater</td>

   </tr>

   </tbody>

   <tr>

   <td style="width: 368px;"><span style="line-height: 20.7999992370605px;">Fusion Studio</span></td>

   <td style="width: 484px;"><span style="line-height: 20.7999992370605px;">8 or greater</span></td>

   </tr>

   </tbody>

   </table>
2. Quit any host applications that may be running.
   If you previously installed an older version of Sapphire Plug-ins, the new installation will just replace it. You should not need to uninstall it first.
3. For Red Hat or similar: become root and use the rpm shell command to download (207Mb) and run the installer or download the RPM installer file and install it locally.

   For Ubuntu: first make sure you have 'libjpeg62', and 'libglade2-0' packages installed.
   Then download the DEB installer file (324MB), become root, and type the command:
   dpkg -i --force-architecture  sapphireofx_2020.020-1.0_amd64.deb for 64 bit
4. <span style="line-height: 20px;">Restart your host product, and the new plug-ins should appear in your effects menu.</span>

To view on-line documentation after you install the software, go to the RedHat or Ubuntu start menu and select GenArts Sapphire OFX -> Sapphire Online Help (HTML) or (PDF). You can also click on the "Help" button while using any plug-in.

<hr>

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [https://www.gnu.org/licenses/lgpl-2.1.html](https://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

<hr>

### What's New In Sapphire 2020.02
* Vegas: Updated s_config to identify vegas by its new OFX ID: com.vegascreativesoftware.vegas
* Nuke: Fixed a deadlock in S_Zap when adjusting parameters.
* RackDefocus, Convolve, Glare, Flashbulbs: Fixed a slowdown in these effects when run on the CPU with certain parameter settings.
* Licensing: Improved license activation and deactivation where licensing one machine would deactivate another on certain network configurations.
* Preset Browser: Fixed an issue where the preset browser won't launch on large footage. For now the preset browser will use sample footage when the input clip is too large.
* Minor License Tool UI improvements.
* Fixed the s_config flag: rlm_no_promote_render_lics.


### What's New In Sapphire 2020.01
* S_FreeLens: Enlarged widgets for easier selection.
* ParallaxStrips: Fixed a crash with certain parameter values when running on the GPU.
* Windows: Fixed the cancel button in the "Plugin is starting the <App>" dialog.
* Flame: Crash when S_Retime was inserted after a BurnInMetadata node was fixed.
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

* Mocha: The command-q shortcut key doesn't immediately respond when trying to close Mocha.  If the key is held down for 1-2 seconds, it will correctly close Mocha.

* Mocha: The Mocha UI does not correctly locate the default OCIO config file shipped with Sapphire.  To use the default OCIO config file shipped with Sapphire, use the OCIO environment variable to locate said the config file.

* Resolve: Point widgets may respond slowly in Premiere after a Mocha point track has been created.

* Flame: Effects with an internal animation such as MuzzleFlash of Zap may not animate correctly on a constant node. The workaround is to generate a constant clip.

* Flame: Retime may crash when placed directly after a BurnInMetadata node.

* Baselight: Sapphire 2020 does not yet work with Baselight on Centos 6.4.

