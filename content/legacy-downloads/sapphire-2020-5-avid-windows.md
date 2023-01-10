{
  "date": "2020-12-10T05:00:00.000Z",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-avid/sapphire-avx-install-2020.53.exe",
  "host": "Avid",
  "platform": "Windows 64-Bit",
  "product": "Sapphire",
  "log_file_path": "<env:ProgramData>/GenArts/SapphireAVX/s_log.text",
  "require_login": true,
  "title": "Boris Sapphire 2020.53 for Avid Windows",
  "upgrade_topic": "GenArts Sapphire Plug-ins for Avid AVX_v6_is1",
  "version": 13.53,
  "key_path_code": "./",
  "release_notes": "https://borisfx.com/release-notes/sapphire-2020-5-3-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": { "productline": "Sapphire", "feature": "sapphire,bundleav-bcc-mocha-sapphire-r1,bundleavid-bcc-mocha-sapphire-r1,bundleavid-bcc-sapphire-r1,bundleavid-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics", "api": "avx", "version": "20200413" },
  "license_names": "bundleav-bcc-mocha-sapphire-r1,bundleavid-bcc-mocha-sapphire-r1,bundleavid-bcc-sapphire-r1,bundleavid-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,sapphire_ae_avx_ofx_sparks_121f,sapphire_ae_avx_ofx_sparks_122,sapphire_ae_ofx_sparks_avx_103f,sapphire_ae_ofx_sparks_avx_104,sapphire_ae_ofx_sparks_avx_104f,sapphire_ae_ofx_sparks_avx_105,sapphire_avx_132,sapphire_avx_135,sapphire_avx_136f,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics"
}
### Install Instructions Windows

<a name="windows"></a>
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

1. Quit your Avid software if it is running. If you have an older version of Sapphire v1 - v12 you do _not_ need to un-install it. The new installation will just replace it without removing any existing serial number.

* Download and run the installer.

  Either run the program from its current location, or save it to disk and then execute it from wherever you saved it. Follow the instructions given by the installer.

Sapphire v13 should load all old sequences saved with older Sapphire versions, including v1 - v12.

Sapphire 13 is an <small>AVX</small>2 plug-in. Avid has deprecated support for the old <small>AVX</small>1 interface, but <small>AVX</small>2 plug-ins can read old sequences saved with <small>AVX</small>1 plug-ins.

When you restart your Avid software, the new version v13 plug-ins should appear in the Effect Palette in the **Sapphire** categories.

For on-line help installed locally on your workstation, go to: **Start** -> **Programs** -> **GenArts Sapphire <small>AVX</small>** -> **Online Help**. A "Help" dialog is also provided when using a plug-in, which gives information about that plug-in currently being used.

---

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [https://www.gnu.org/licenses/lgpl-2.1.html](https://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://files.genarts.com/qt-everywhere-opensource-src-4.7.2.tar.gz).

<hr>


### What’s New in Sapphire 2020.53

* Sapphire on VMs: Prevent Sapphire from using virtual GPU RAM and crashing the VM.
* Windows Licensing: Performance improvement when using activation keys on Windows.  This particularly affects thumbnail render speed in the Sapphire Preset Browser.
* Mac OS and Logging: Fixed a bug that sometimes prevented s_log from being written on Mac OS.
* Licensing: Add support for bfxsuite subscription license.
