{
  "date": "2019-12-20T04:00:00.000Z",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-sparks/SapphireSparkInstall-2019.53.dmg",
  "host": "Autodesk",
  "platform": "Mac 64-Bit",
  "product": "Sapphire",
  "log_file_path": "/Applications/GenArtsSapphireSparks12/config/s_log.text",
  "require_login": true,
  "title": "Boris Sapphire 2019.53 for Autodesk macOS",
  "upgrade_topic": "com.genarts.sapphire-spark-12-install",
  "version": 12.53,
  "key_path_code": "config/libsapphire_spark_x86_64_1200.dylib",
  "release_notes": "https://borisfx.com/release-notes/sapphire-2019-5-3-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1",
    "api": "sparks",
    "version": "20190605"
  },
  "license_names": "sapphire_ae_ofx_sparks_avx_104,sapphire_sparks_162"
}
Note: Before updating to v7.02 or later, please refer to the release notes for possible compatibility implications with the effect formerly known as Technicolor. See 'What's New' below for details.

<hr>

**To Download and install:**

1. Make sure you have one or more of the following Autodesk products on Mac:
   Smoke	2010 or greater | Flame	2016 or greater
2. Quit Smoke or other host applications that may be running.
3. Download the Mac installer.
4. Run the installer. When it asks for your passphrase, enter your Mac user login password, and follow the instructions given by the installer.
5. Restart your host product, and the new plug-ins should appear in your effects menu.

To test out a Spark, select 'Effects' and then 'Sparks' and click on any Spark button while holding down the 'Control' and'Alt' keys. You should find the plug-ins in /usr/discreet/sparks/sapphire_12. Select a Spark and the name should now appear on the button. Click again on the button to initialize the Spark. Select the source and destination clipsand the Spark interface window should be displayed.

To view on-line documentation after you install the software, go to the /Applications/GenArtsSapphireSparks12 folder and double click on Online Help.html or Online Help.pdf. You can also click on the "About" box while using any plug-in.

**Installation notes:**

* Sapphire v9, v10, v11 and v12 can all be on your system at the same time, and you can continue using v9 and v10 as usual even after installing v12. However, please be aware that the names of the sparks are the same in all of the versions, which can lead to some confusion, and sometimes the older version may continue to be used unintentionally.
* Setup files saved with Sapphire v9, v10 and v11 will not load into v12, but we have provided an update_setups utility to automatically convert setup files from v9, v10 and v11 to v12. For more information check the on-line doc after you install the software.

<hr>

This software may use the Qt user interface framework. Qt is distributed under the terms of the Lesser GNU Public License (LGPL), Version 2.1; see https://www.gnu.org/licenses/lgpl-2.1.html for more details. The source code for Qt is available [here](https://cdn.borisfx.com/borisfx/qt-everywhere-opensource-src-4.7.2.tar.gz).

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
