{
  "date": "2021-06-25T04:00:00.000Z",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-adobe/sapphire-ae-install-2021.51.exe",
  "tracking_url":"https://go.pardot.com/l/272832/2021-08-01/pstj1c",
  "host": "Adobe",
  "host_products": "After Effects, Premiere Pro",
  "platform": "Windows 64-Bit",
  "product": "Sapphire",
  "log_file_path": "<env:ProgramData>/GenArts/SapphireAE/s_log.text",
  "require_login": true,
  "title": "Sapphire 2021.51 for Adobe Windows",
  "upgrade_topic": "GenArts Sapphire AE_is1",
  "version": 14.51,
  "key_path_code": "./",
  "release_notes": "https://borisfx.com/release-notes/sapphire-2021-5-1-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire,bundlea-bcc-mocha-sapphire-r1,bundleadobe-bcc-mocha-sapphire-r1,bundleadobe-bcc-sapphire-r1,bundleadobe-mocha-sapphire-r1,bundleadobeofx-bcc-mocha-sapphire-r1,bundleadobeofx-bcc-sapphire-r1,bundleao-bcc-mocha-sapphire-r1,bundleao-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only",
    "api": "ae",
    "version": "20210428"
  },
  "license_names": "bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only,bu-bcc-mocha-sapphire-silhouette,bundlea-bcc-mocha-sapphire-r1,bundleadobe-bcc-mocha-sapphire-r1,bundleadobe-bcc-sapphire-r1,bundleadobe-mocha-sapphire-r1,bundleadobeofx-bcc-mocha-sapphire-r1,bundleadobeofx-bcc-sapphire-r1,bundleao-bcc-mocha-sapphire-r1,bundleao-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,sapphire_ae_105,sapphire_ae_avx_ofx_sparks_121f,sapphire_ae_avx_ofx_sparks_123,sapphire_ae_ofx_sparks_102,sapphire_ae_ofx_sparks_102f,sapphire_ae_ofx_sparks_128,sapphire_ae_ofx_sparks_avx_103f,sapphire_ae_ofx_sparks_avx_104,sapphire_ae_ofx_sparks_avx_104f,sapphire_ae_ofx_sparks_avx_105,sapphire_ae_ofx_sparks_avx_106",
  "app_mgr_tags": "bfx-suite current"
}
<hr>

The installer below is for use with all AE compatible products including After Effects and Premiere Pro.

For Fusion, please use the OFX version instead.

<span style="font-size: 1rem;">To Download and install:</span>

1. Make sure you have one or more AE plug-in compatible applications on Windows.
2. If you have an older version of Sapphire Plug-ins, the new installation will replace it, and you do not need to un-install it first.
3. Quit AE or other host applications that may be running.
4. Download the Windows installer.
5. Either run the installer program from its current location, or save it to disk and then execute it from wherever you saved it. Follow the instructions given by the installer.
6. Restart your host application, and the new plug-ins should appear in your effects menu.

To view on-line documentation after you install the software, go to Start -> All Programs -> GenArts Sapphire AE -> Online Help (HTML) or (PDF). You can also click on the "About" box while using any plug-in.

In general, you can load projects saved with older versions of Sapphire effects and they should automatically convert to use Sapphire v14.5. Please visit the support page for more info on this.

If you already installed Sapphire v14.5 and want to go back to an earlier version you should first uninstall v14.5.

---

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [https://www.gnu.org/licenses/lgpl-2.1.html](https://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz)

<hr>


### What’s New in Sapphire 2021.5

**New Features**

* Support for new After Effects Multi-Frame Rendering pipeline on most Sapphire Effects.

* Native support for Mac M1 machines in Premiere Beta.

* Improved Rays and EdgeRays: These effects now have parameters allowing the rays to be blurred before they are combined with the background.

* Performance Improvements and Bug Fixes in Preset Browser, Sapphire Effect Builder, and Flare Designer.

* New LensFlares.

* LensFlare: Improved flare consistency between thumbnails and the Flare Designer.

* Improved Mocha: Improved Dope Sheet.

### What’s New in Sapphire 2021.5.1

* Builder: Fix a bug in S_Transition where the preset browser only displayed a single frame when launched from within the Transition Builder UI.

* Builder and LensFlare: Show presets from 2021 and 2021.5 in the "New" tab.

* Fixed a bug that prevented certain subscription licenses from updating.

* Added an environment variable to control the subscription license check. By default, subscription checks happen on GUI nodes and do not happen on render nodes.

* Adobe and OFX: Render Node: To turn on subscription license checks for render nodes, set the environment variable SAPPHIRE_SUBSCRIPTION_CHECK to 1.

* Adobe and OFX: GUI Node: To turn off the subscription license check for GUI nodes, either set the environment variable SAPPHIRE_SUBSCRIPTION_CHECK to 0 or set enable_subscription_checks to 0 in s_config.text.

* Added GPU status to the LensFlare Designer About Dialog.

* S_DissolveLensFlare: Fixed a crash with certain parameter combinations when blur-motion was enabled.

* Fixed a bug where the installer opened twice on Mac M1 machines.

* Fixed a performance issue in noise generation within effects on Mac M1 machines. Eg. S_Clouds, S_DissolveBubble, and others.
