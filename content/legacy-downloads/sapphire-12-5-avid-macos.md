{
  "date": "2019-12-20T04:00:00.000Z",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-avid/SapphireAVXInstall-2019.53.dmg",
  "host": "Avid",
  "platform": "Mac 64-Bit",
  "product": "Sapphire",
  "log_file_path": "/Applications/GenArtsSapphireAVX/config/s_log.text",
  "require_login": true,
  "title": "Boris Sapphire 2019.53 for Avid macOS",
  "upgrade_topic": "com.genarts.sapphire-avx2-install",
  "version": 12.53,
  "key_path_code": "config/sapphire-avx2.dylib",
  "release_notes": "https://borisfx.com/release-notes/sapphire-2019-5-3-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire,bundleavid-bcc-mocha-sapphire-r1,bundleavid-bcc-sapphire-r1,bundleavid-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1",
    "api": "avx",
    "version": "20190605"
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
