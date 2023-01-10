{
  "date": "2021-06-25T04:00:00.000Z",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-avid/SapphireAVXInstall-2021.51.dmg",
  "tracking_url":"https://go.pardot.com/l/272832/2021-08-01/pstj3m",
  "host": "Avid",
  "host_products": "Media Composer",
  "platform": "Mac 64-Bit",
  "product": "Sapphire",
  "log_file_path": "/Applications/GenArtsSapphireAVX/config/s_log.text",
  "require_login": true,
  "title": "Sapphire 2021.51 for Avid macOS",
  "upgrade_topic": "com.genarts.sapphire-avx2-install",
  "version": 14.51,
  "key_path_code": "config/sapphire-avx2.dylib",
  "release_notes": "https://borisfx.com/release-notes/sapphire-2021-5-1-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire,bundleav-bcc-mocha-sapphire-r1,bundleavid-bcc-mocha-sapphire-r1,bundleavid-bcc-sapphire-r1,bundleavid-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only",
    "api": "avx",
    "version": "20210428"
  },
  "license_names": "bundleav-bcc-mocha-sapphire-r1,bundleavid-bcc-mocha-sapphire-r1,bundleavid-bcc-sapphire-r1,bundleavid-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,sapphire_ae_avx_ofx_sparks_121f,sapphire_ae_avx_ofx_sparks_122,sapphire_ae_ofx_sparks_avx_103f,sapphire_ae_ofx_sparks_avx_104,sapphire_ae_ofx_sparks_avx_104f,sapphire_ae_ofx_sparks_avx_105,sapphire_avx_132,sapphire_avx_135,sapphire_avx_136f,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only",
  "app_mgr_tags": "bfx-suite current"
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

1. Make sure you are running Mac OS X 10.13 or greater.
2. Quit your Avid software if it is running. If you have an older version of Sapphire v6 through v14.0 you do _not_ need to un-install it. The new installation will just replace it without removing any existing serial number.
3. Download and run the installer.

Follow the instructions given by the installer. When it asks for your username and password, just enter your Mac user login password.

Sapphire v14.5 should load all old sequences saved with older Sapphire versions, including v1 - v14.0.

Sapphire 14.5 is an <small>AVX</small>2 plug-in. Avid has deprecated support for the old <small>AVX</small>1 interface, but <small>AVX</small>2 plug-ins can read old sequences saved with <small>AVX</small>1 plug-ins.

When you restart your Avid software, the new version v14.5 plug-ins should appear in the Effect Palette in the **Sapphire** categories. You can simply use these effects just as you would any other effect.

For on-line help installed locally on your workstation, go to the Applications folder, double click on **GenArtsSapphire<small>AVX</small>** and select the online documentation. A "Help" dialog is also provided when using a plug-in, which gives information about that plug-in currently being used.

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

* S_PanAndZoom: Reduced amount of disk storage used in saved projects.

