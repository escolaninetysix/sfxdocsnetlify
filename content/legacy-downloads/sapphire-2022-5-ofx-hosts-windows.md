{
  "date": "2022-10-19T00:00:00-04:00",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-ofx/sapphire-ofx-install-2022.54.exe",
  "tracking_url": "https://go.pardot.com/l/272832/2022-05-26/24fr5q2",
  "host": "OFX",
  "host_products": "Autodesk Flame, Davinci Resolve, Fusion, Nuke, Vegas Pro Studio, Filmlight Baselight, Toonboom Harmony, Grass Valley Rio, Edius ProAutodesk Flame, Davinci Resolve, Fusion, Nuke, Vegas Pro Studio, Filmlight Baselight, Toonboom Harmony, Grass Valley Rio, Edius Pro",
  "platform": "Windows 64-Bit",
  "product": "Sapphire",
  "log_file_path": "<env:ProgramData>/GenArts/SapphireOFX/sapphire.log",
  "require_login": true,
  "title": "Sapphire 2022.5 for OFX Windows",
  "upgrade_topic": "GenArts Sapphire Plug-ins for OFX_is1",
  "version": 15.54,
  "key_path_code": "./",
  "release_notes": "https://borisfx.com/release-notes/sapphire-2022-5-4-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire,bundlea-bcc-mocha-sapphire-r1,bundleadobe-bcc-mocha-sapphire-r1,bundleadobe-bcc-sapphire-r1,bundleadobe-mocha-sapphire-r1,bundleadobeofx-bcc-mocha-sapphire-r1,bundleadobeofx-bcc-sapphire-r1,bundleao-bcc-mocha-sapphire-r1,bundleao-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bundleofx-bcc-mocha-sapphire-r1,bundleofx-bcc-sapphire-r1,bundleofx-mocha-sapphire-r1,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only",
    "api": "ofx",
    "version": "20220518"
  },
  "license_names": "bundlea-bcc-mocha-sapphire-r1,bundleadobe-bcc-mocha-sapphire-r1,bundleadobe-bcc-sapphire-r1,bundleadobe-mocha-sapphire-r1,bundleadobeofx-bcc-mocha-sapphire-r1,bundleadobeofx-bcc-sapphire-r1,bundleao-bcc-mocha-sapphire-r1,bundleao-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bundleofx-bcc-mocha-sapphire-r1,bundleofx-bcc-sapphire-r1,bundleofx-mocha-sapphire-r1,sapphire_ae_avx_ofx_sparks_121f,sapphire_ae_avx_ofx_sparks_124,sapphire_ae_ofx_sparks_102,sapphire_ae_ofx_sparks_102f,sapphire_ae_ofx_sparks_128,sapphire_ae_ofx_sparks_avx_103f,sapphire_ae_ofx_sparks_avx_104,sapphire_ae_ofx_sparks_avx_104f,sapphire_ae_ofx_sparks_avx_106,sapphire_ae_ofx_sparks_avx_107,sapphire_ofx_133,sapphire_ofx_XXX,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only",
  "app_mgr_tags": "bfx-suite current"
}
### What???s New in Sapphire 2022.5

**New Features**

* Wigets inside Sapphire's Effect Designer.

* New LUTs for S_ColorFuse.

* OpenColorIO version 2.1.1.

* Mocha Improvements.

* New Presets for a variety of effects.

* New LensFlares.

**Known Issues**

* Not all S_UltraZap presets are visible in S_Effect.

* In After Effects, 2022, the Preset Browser, Flare Designer, and Effect Builder may play back slowly on the first use. To resolve, return to the host and allow After Effects to finish caching the timeline.

* UltraZapMocha: Sometimes, a straight line will apear in the zap. To fix this, add an additional control point in mocha in the part of the mocha spline that corresponds to that straight segment. Adjust the control point until the straight line segment goes away.

* Sometimes Mocha tracks slowly. If this happens, close mocha, re-open mocha, then play through the clip inside mocha. After the clip is cached in mocha, tracking will proceed smoothly. Sometimes if the clip is tracking slowly an "unable to track" error will also pop up.

* If Sapphire 2021.5 OFX is installed at the same time as 2021.0 (either AE or AVX), lensflare presets may not show up inside 2021.0. To fix this, all Sapphire plugins installed on a single machine should be 2021.5. If the second installation of Sapphire cannot be upgraded to 2021.5, the Sapphire 2021.0 plugins may be re-installed to restore the 2021.0 compatible LensFlare presets.

* Dongle Licenses are not currently supported on Mac M1 machines.

* Mac OS, Big Sur: if you open mocha and then open the preset browser, the preset browser will fail and generate an error. If this happens, the host will have to be restarted to fix the preset browser.

* UltraZap: On an open spline zap may do unexpected things when mixing vary-endpoint and looping parameters.

* S_ZComp: The preset browser can't open unless an input is connected to the DepthB input.

* Premiere: The new shadow on LensFlare elements may be squished in Premiere if applied to interlaced footage.

* Premiere: Point widgets may respond slowly in Premiere after a Mocha point track has been created.

* Mocha: The Mocha UI does not correctly locate the default OCIO config file shipped with Sapphire. To use the default OCIO config file shipped with Sapphire, use the OCIO environment variable to locate said the config file.
