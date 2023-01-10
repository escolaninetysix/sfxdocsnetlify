{
  "date": "2019-12-20T04:00:00.000Z",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-ofx/SapphireOFX-2019.530-1.0.x86_64.rpm",
  "host": "OFX",
  "platform": "Linux 64-Bit .rpm",
  "product": "Sapphire",
  "log_file_path": "/usr/genarts/sapphireofx/s_log.text",
  "require_login": true,
  "title": "Boris Sapphire 2019.53 for OFX Linux (RPM)",
  "upgrade_topic": "SapphireOFX-12.",
  "version": 12.53,
  "release_notes": "https://borisfx.com/release-notes/sapphire-2019-5-3-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire,bundleadobe-bcc-mocha-sapphire-r1,bundleadobe-bcc-sapphire-r1,bundleadobe-mocha-sapphire-r1,bundleadobeofx-bcc-mocha-sapphire-r1,bundleadobeofx-bcc-sapphire-r1,bundleadobeofx-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bundleofx-bcc-mocha-sapphire-r1,bundleofx-bcc-sapphire-r1,bundleofx-mocha-sapphire-r1",
    "api": "ofx",
    "version": "20190605"
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
3. For Red Hat or similar: become root and use the rpm shell command to download (207Mb) and run the installer:
   <span style="font-family: monospace; ">rpm -Uvh https://cdn.borisfx.com/borisfx/store/sapphire-ofx/SapphireOFX-2019.530-1.0.x86_64.rpm for 64 bit</span>
   or download the RPM installer file and install it locally.

   For Ubuntu: first make sure you have 'libjpeg62', and 'libglade2-0' packages installed.
   Then download the DEB installer file (207Mb), become root, and type the command:
   dpkg -i --force-architecture SapphireOFX-2019.530-1.0.x86_64.rpm for 64 bit
4. <span style="line-height: 20px;">Restart your host product, and the new plug-ins should appear in your effects menu.</span>

To view on-line documentation after you install the software, go to the RedHat or Ubuntu start menu and select GenArts Sapphire OFX -> Sapphire Online Help (HTML) or (PDF). You can also click on the "Help" button while using any plug-in.

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see [https://www.gnu.org/licenses/lgpl-2.1.html](https://www.gnu.org/licenses/lgpl-2.1.html) for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/store/qt-everywhere-opensource-src-4.7.2.tar.gz).

<hr>

### What's New In Sapphire 2019.53:
* Flame: Crash when S_Retime was inserted after a BurnInMetadata node was fixed.
* Windows: Fixed the cancel button in the "Plugin is starting the <App>" dialog.
* ParallaxStrips: Fixed a crash with certain parameter values when running on the GPU.
* EdgeRays: Fixed a crash when "Rays Res" is set to anything other than Full.
* Mocha on macOS: To close Mocha, press command-q shortcut key or select Quit from File menu.
* Effect Builder: Fixed the "Show Checkerboard" setting.
* Preset Browser: Fixed an issue where the preset browser won't launch on large footage.  For now the preset browser will use sample footage when the input clip is too large.
* Mac OS: Fixed a bug where the "Deactivate License" dialog wasn't showing up during uninstall on Mac OS 10.13 and 10.14.
* Mac OS: Fixed a warning that the certificate has expired during install.
* Licensing: Improved license activation and deactivation where licensing one machine would deactivate another on certain network configurations.
* Preset Browser: Improve response time when the "Static Thumbnail" checkbox is changed (in S_Effect and S_LemsFlare).
* Flare Designer, Preset Browser, and Effect Builder: Improve timeline behavior.
* Flare Designer, Preset Browser, and Effect Builder: Remove Show/Hide Menu.
* Flare Designer and Effect Builder: Fixed the save button.

### What's New In Sapphire 2019.52:
* Removed a one-pixel wide black border in the preview panes for the Sapphire Preset Browser.
