{
  "date": "2019-12-20T04:00:00.000Z",
   "description": "Sapphire visual effect plug-ins",
   "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-avid/sapphire-avx-install-2019.53.exe",
   "host": "Avid",
   "platform": "Windows 64-Bit",
  "product": "Sapphire",
   "log_file_path": "<env:ProgramData>/GenArts/SapphireAVX/s_log.text",
   "require_login": true,
   "title": "Boris Sapphire 2019.53 for Avid Windows",
   "upgrade_topic": "GenArts Sapphire Plug-ins for Avid AVX_v6_is1",
   "version": 12.53,
   "key_path_code": "./",
   "release_notes": "https://borisfx.com/release-notes/sapphire-2019-5-3-release-notes/",
   "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
   "license_identity": { "productline": "Sapphire", "feature": "sapphire,bundleavid-bcc-mocha-sapphire-r1,bundleavid-bcc-sapphire-r1,bundleavid-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1", "api": "avx", "version": "20190605" },
   "license_names": "sapphire_ae_ofx_sparks_avx_104,sapphire_avx_135"
}
### Install Instructions Windows

<a name="windows"></a>
**To Download and install:**

1. Make sure you have one or more of the following Avid products on Windows:

<table border="0" cellpadding="0" cellspacing="0">

<tbody>

<tr>

<td>Media Composer  </td>

<td>any version</td>

</tr>

<tr>

<td>Media Composer Meridien  </td>

<td>v9 or greater</td>

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

</tbody>

</table>

1. Quit your Avid software if it is running. If you have an older version of Sapphire v1 - v10 you do _not_ need to un-install it. The new installation will just replace it without removing any existing serial number.

* Download and run the installer.

  Either run the program from its current location, or save it to disk and then execute it from wherever you saved it. Follow the instructions given by the installer.

Sapphire v12 should load all old sequences saved with older Sapphire versions, including v1 - v11.

Sapphire 12 is an <small>AVX</small>2 plug-in. Avid has deprecated support for the old <small>AVX</small>1 interface, but <small>AVX</small>2 plug-ins can read old sequences saved with <small>AVX</small>1 plug-ins.

When you restart your Avid software, the new version v12 plug-ins should appear in the Effect Palette in the **Sapphire** categories.

For on-line help installed locally on your workstation, go to: **Start** -> **Programs** -> **GenArts Sapphire <small>AVX</small>** -> **Online Help**. A "Help" dialog is also provided when using a plug-in, which gives information about that plug-in currently being used.

---

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [https://www.gnu.org/licenses/lgpl-2.1.html](https://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://files.genarts.com/qt-everywhere-opensource-src-4.7.2.tar.gz).

<hr>

### What's New In Sapphire 2019.53:
* Windows: Fixed the cancel button in the "Plugin is starting the <App>" dialog.
* ParallaxStrips: Fixed a crash with certain parameter values when running on the GPU.
* EdgeRays: Fixed a crash when "Rays Res" is set to anything other than Full.
* Mocha on macOS: To close Mocha, press command-q shortcut key or select Quit from File menu.
* Effect Builder: Fixed the "Show Checkerboard" setting.
* Mac OS: Fixed a bug where the "Deactivate License" dialog wasn't showing up during uninstall on Mac OS 10.13 and 10.14.
* Mac OS: Fixed a warning that the certificate has expired during install.
* Licensing: Improved license activation and deactivation where licensing one machine would deactivate another on certain network configurations.
* Preset Browser: Improve response time when the "Static Thumbnail" checkbox is changed (in S_Effect and S_LemsFlare).
* Flare Designer, Preset Browser, and Effect Builder: Improve timeline behavior.
* Flare Designer, Preset Browser, and Effect Builder: Remove Show/Hide Menu.
* Flare Designer and Effect Builder: Fixed the save button.

### What's New In Sapphire 2019.52:
* Removed a one-pixel wide black border in the preview panes for the Sapphire Preset Browser.
