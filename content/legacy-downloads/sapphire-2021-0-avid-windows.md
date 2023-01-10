{
  "date": "2021-03-29T05:00:00.000Z",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-avid/sapphire-avx-install-2021.02.exe",
  "host": "Avid",
  "platform": "Windows 64-Bit",
  "product": "Sapphire",
  "log_file_path": "<env:ProgramData>/GenArts/SapphireAVX/s_log.text",
  "require_login": true,
  "title": "Boris Sapphire 2021.02 for Avid Windows",
  "upgrade_topic": "GenArts Sapphire Plug-ins for Avid AVX_v6_is1",
  "version": 14.02,
  "key_path_code": "./",
  "release_notes": "https://borisfx.com/release-notes/sapphire-2021-0-2-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire,bundleav-bcc-mocha-sapphire-r1,bundleavid-bcc-mocha-sapphire-r1,bundleavid-bcc-sapphire-r1,bundleavid-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only",
    "api": "avx",
    "version": "20200930" },
    "license_names": "bundleav-bcc-mocha-sapphire-r1,bundleavid-bcc-mocha-sapphire-r1,bundleavid-bcc-sapphire-r1,bundleavid-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,sapphire_ae_avx_ofx_sparks_121f,sapphire_ae_avx_ofx_sparks_122,sapphire_ae_ofx_sparks_avx_103f,sapphire_ae_ofx_sparks_avx_104,sapphire_ae_ofx_sparks_avx_104f,sapphire_ae_ofx_sparks_avx_105,sapphire_avx_132,sapphire_avx_135,sapphire_avx_136f,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only"
}
**To Download and install:**

1. Make sure you have one or more of the following Avid products on Windows:

<table border="0" cellpadding="0" cellspacing="0">

<tbody>

<tr>

<td>Media Composer  </td>

<td>8.0 or greater</td>

</tr>

</tbody>

</table>

1. Quit your Avid software if it is running. If you have an older version of Sapphire v1 - v13 you do _not_ need to un-install it. The new installation will just replace it without removing any existing serial number.

* Download and run the installer.

  Either run the program from its current location, or save it to disk and then execute it from wherever you saved it. Follow the instructions given by the installer.

Sapphire v14 should load all old sequences saved with older Sapphire versions, including v1 - v13.

Sapphire 14 is an <small>AVX</small>2 plug-in. Avid has deprecated support for the old <small>AVX</small>1 interface, but <small>AVX</small>2 plug-ins can read old sequences saved with <small>AVX</small>1 plug-ins.

When you restart your Avid software, the new version v14 plug-ins should appear in the Effect Palette in the **Sapphire** categories.

For on-line help installed locally on your workstation, go to: **Start** -> **Programs** -> **GenArts Sapphire <small>AVX</small>** -> **Online Help**. A "Help" dialog is also provided when using a plug-in, which gives information about that plug-in currently being used.

---

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [https://www.gnu.org/licenses/lgpl-2.1.html](https://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://files.genarts.com/qt-everywhere-opensource-src-4.7.2.tar.gz)

<hr>


### What’s New in Sapphire 2021


**New Effects**

* S_UltraGlow - Brand new effect for Sapphire 2021, S_UltraGlow total revamp of the classic S_Glow with control over the hotspot of the glow as well as the falloff.

* S_UltraZap - Brand new effect for Sapphire 2021, S_UltraZap improves upon the classic S_Zap with the ability to animate Zap along a spline and looping behavior as well as improved color controls and a new workflow.


**New Features**

* Metal for Mac OS. Over 60 effects have improved speed from an all new metal implementation

* Improved LensFlare Designer:

* Lens Flare ability to offset elements off axis.

* Reactive speed for elements..

* Performance and stability improvements.

* Improved Mocha:

* Adjust track.


**Known Issues**

* Preset Browser: Some presets may preview incorrectly in UltraGlow and UltraZap.

* Preset Browser: UltraZap, UltraGlow, and S_Effect may have cropped thumbnails in the preset browser.

* Windows: start menu icons are generic icons instead of BorisFX/Sapphire icons.

* UltraZap: On an open spline zap may do unexpected things when mixing vary-endpoint and looping parameters.

* UltraZap: On an open spline zap may do unexpected things when mixing vary-endpoint and looping parameters.

* S_Effect on Mac OS: CSI Zoomed Magnification preset intermittently fails to load.

* S_ZComp: The preset browser can't open unless an input is connected to the DepthB input.

* If the Preset Browser is launched multiple times in rapid succession inside the Sapphire Effect Builder, selection may not work in the preset browser. If this happens close the Preset Browser and re-open it.

* Mocha: The Mocha UI does not correctly locate the default OCIO config file shipped with Sapphire. To use the default OCIO config file shipped with Sapphire, use the OCIO environment variable to locate said the config file.
