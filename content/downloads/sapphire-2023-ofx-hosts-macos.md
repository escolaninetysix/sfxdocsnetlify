{
  "date": "2022-12-21T00:00:00-05:00",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-ofx/SapphireOFXInstall-2023.01.dmg",
  "host": "OFX",
  "host_products": "Autodesk Flame, Davinci Resolve, Fusion, Nuke, Vegas Pro Studio, Filmlight Baselight, Toonboom Harmony, Grass Valley Rio, Edius ProAutodesk Flame, Davinci Resolve, Fusion, Nuke, Filmlight Baselight, Toonboom Harmony, Grass Valley Rio, Edius Pro",
  "platform": "Mac 64-Bit",
  "product": "Sapphire 2023",
  "log_file_path": "/Library/Application Support/BorisFX/SapphireOFX/sapphire.log",
  "require_login": true,
  "title": "Sapphire 2023 for OFX macOS",
  "upgrade_topic": "com.genarts.sapphire-ofx-install",
  "version": 16.01,
  "key_path_code": "config/Sapphire.dylib",
  "release_notes": "https://borisfx.com/release-notes/sapphire-2023-0-1-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire,bundlea-bcc-mocha-sapphire-r1,bundleadobe-bcc-mocha-sapphire-r1,bundleadobe-bcc-sapphire-r1,bundleadobe-mocha-sapphire-r1,bundleadobeofx-bcc-mocha-sapphire-r1,bundleadobeofx-bcc-sapphire-r1,bundleao-bcc-mocha-sapphire-r1,bundleao-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bundleofx-bcc-mocha-sapphire-r1,bundleofx-bcc-sapphire-r1,bundleofx-mocha-sapphire-r1,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only",
    "api": "ofx",
    "version": "20221109"
  },
  "license_names": "bundlea-bcc-mocha-sapphire-r1,bundleadobe-bcc-mocha-sapphire-r1,bundleadobe-bcc-sapphire-r1,bundleadobe-mocha-sapphire-r1,bundleadobeofx-bcc-mocha-sapphire-r1,bundleadobeofx-bcc-sapphire-r1,bundleao-bcc-mocha-sapphire-r1,bundleao-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bundleofx-bcc-mocha-sapphire-r1,bundleofx-bcc-sapphire-r1,bundleofx-mocha-sapphire-r1,sapphire_ae_avx_ofx_sparks_121f,sapphire_ae_avx_ofx_sparks_124,sapphire_ae_ofx_sparks_102,sapphire_ae_ofx_sparks_102f,sapphire_ae_ofx_sparks_128,sapphire_ae_ofx_sparks_avx_103f,sapphire_ae_ofx_sparks_avx_104,sapphire_ae_ofx_sparks_avx_104f,sapphire_ae_ofx_sparks_avx_106,sapphire_ae_ofx_sparks_avx_107,sapphire_ofx_133,sapphire_ofx_XXX,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only",
  "app_mgr_tags": "bfx-suite current"
}
### What’s New in Sapphire 2023

**New Effects**

* UltraGrain

* PrismLens

* DissolveUltraGlow

**New Features**

* Mocha Improvements

* Metal Support for Aurora

* Metal Support for Median

* New LensFlares

* New UltraGlow presets

**New Known Issues**

* Premiere: On the first run after Sapphire's installed, the preset browser may not shut down correctly.

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


**New Compatibility Notes**

* Sapphire 2022 has been updated to use CUDA 11 in order to support NVIDIA's latest Ampere cards. (RTX A4000, A5000, and A6000). As a result some cards from 2012 are no longer supported. Sapphire 2022 works with CUDA compute capability 3.5 and higher.

* LensFlare: A bug was fixed in Sapphire 2022 in LensFlare, where the saturdation parameter inside the plugin didn't apply correctly to all elements. Fixing this means that some elements will look different in 2022 if saturation is set to a value different than 1.0.

* ParallaxStrips and StripSlide: These effects may look different from older versions due to a change in the position calculations.

* FilmDamage: Stamps in FilmDamage were upside down in OFX-compatible hosts when compared to Adobe Products and Media Composer. A parameter called flip_stamps_vertically was added to allow for projects to be both backwards compatible and compatible between hosts. When opening an old project, it will look the same as it did in a prior version. If compatibility between host products is desired in an old project, change the value in flip_stamps_vertically on the OFX host to get a result that matches Adobe and Avid products. New projects will match between hosts by default.

* LensFlare: In previous versions of Sapphire, the saturation parameter did not affect texture elements. This has been fixed with Sapphire 2022, however this means that texture elements in old projects will look different if the project had a saturation value different from 1.0.

### What’s New in Sapphire 2023.01

* Mac: Dongle licenses now work on M1 Macs.

* GradientMulti: Added Metal support and fixed a CUDA memory issue.

* Shape: Added GPU support.
