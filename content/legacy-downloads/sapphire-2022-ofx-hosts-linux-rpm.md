{
  "date": "2022-03-31T00:00:00-05:00",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-ofx/SapphireOFX-2022.040-1.0.x86_64.rpm",
  "tracking_url":"https://go.pardot.com/l/272832/2021-11-17/xlqg94",
  "host": "OFX",
  "host_products": "Autodesk Flame, Davinci Resolve, Fusion, Nuke, Filmlight Baselight, Toonboom Harmony, Grass Valley Rio, Edius ProAutodesk Flame, Davinci Resolve, Fusion, Nuke, Vegas Pro Studio, Filmlight Baselight, Toonboom Harmony, Grass Valley Rio, Edius Pro",
  "platform": "Linux 64-Bit .rpm",
  "product": "Sapphire",
  "log_file_path": "/usr/genarts/sapphireofx/sapphire.log",
  "require_login": true,
  "title": "Sapphire 2022 for OFX Linux (RPM)",
  "upgrade_topic": "SapphireOFX-15.",
  "version": 15.04,
  "release_notes": "https://borisfx.com/release-notes/sapphire-2022-0-4-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire,bundlea-bcc-mocha-sapphire-r1,bundleadobe-bcc-mocha-sapphire-r1,bundleadobe-bcc-sapphire-r1,bundleadobe-mocha-sapphire-r1,bundleadobeofx-bcc-mocha-sapphire-r1,bundleadobeofx-bcc-sapphire-r1,bundleao-bcc-mocha-sapphire-r1,bundleao-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bundleofx-bcc-mocha-sapphire-r1,bundleofx-bcc-sapphire-r1,bundleofx-mocha-sapphire-r1,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only",
    "api": "ofx",
    "version": "20211117"
  },
  "license_names": "bundlea-bcc-mocha-sapphire-r1,bundleadobe-bcc-mocha-sapphire-r1,bundleadobe-bcc-sapphire-r1,bundleadobe-mocha-sapphire-r1,bundleadobeofx-bcc-mocha-sapphire-r1,bundleadobeofx-bcc-sapphire-r1,bundleao-bcc-mocha-sapphire-r1,bundleao-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bundleofx-bcc-mocha-sapphire-r1,bundleofx-bcc-sapphire-r1,bundleofx-mocha-sapphire-r1,sapphire_ae_avx_ofx_sparks_121f,sapphire_ae_avx_ofx_sparks_124,sapphire_ae_ofx_sparks_102,sapphire_ae_ofx_sparks_102f,sapphire_ae_ofx_sparks_128,sapphire_ae_ofx_sparks_avx_103f,sapphire_ae_ofx_sparks_avx_104,sapphire_ae_ofx_sparks_avx_104f,sapphire_ae_ofx_sparks_avx_106,sapphire_ae_ofx_sparks_avx_107,sapphire_ofx_133,sapphire_ofx_XXX,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only",
  "app_mgr_tags": "bfx-suite current"
}
**OFX Notes**

**New Features (specific to OFX)

* Support for NVIDIA Ampere cards (eg. A4000, A5000, A6000).

*  Windows required driver: 460.82.

* (OFX Only)  Linux required driver: 450.102.04.  (EDITED FROM 5 minutes ago)

* (OFX Only)Flame: In conjunction with Flame 2022, there is now a context menu option called "Convert Sapphire Sparks -> Sapphire OFX". This can be run on individual nodes, batch setups, or sapphire effects on the timeline. It does best on Sapphire Sparks 2019.5, but will make a best effort to convert nodes as far back as Sapphire Sparks 11. Note, there are some minor differences between Sparks and OFX so check the OFX node once its been generated. Some of the conversion features work in Flmae 2021.


**New Known Issues

* Resolve: The first time Sapphire is used after it's been installed, no Sapphire related dialogs will pop up. This includes the Help Dialog, the Preset Browser, and the ColorFuse LUT chooser. If Resolve is relaunched, the dialogs all work as normal.

* UltraZapMocha: Sometimes, a straight line will apear in the zap. To fix this, add an additional control point in mocha in the part of the mocha spline that corresponds to that straight segment. Adjust the control point until the straight line segment goes away.

### What’s New in Sapphire 2022

**New Effects**

* ColorFuse: A new effect that allows artists to get a stylized look by combining up to three LUTs.

**New Features**

* Photoshop Support: Sapphire 2022 adds new host compatibility to its lineup with support for Adobe Photoshop, available with any new or upgrade license. Featuring over 270 filters and thousands of cross-platform presets, Sapphire for Photoshop brings the power of post productionâ€™s most loved filters to new artists, letting them create effects unachievable with native filters, and enabling a more streamlined workflow through the different design stages of production and between various teams and software.

* Sapphire Effect Designer: New tool inside Builder for getting stylized looks with S_ColorFuseLooks.

* UltraZap: UltraZap now supports Zaps along Mocha Splines in a mode called UltraZapMocha.

* Support for NVIDIA Ampere cards (eg. A4000, A5000, A6000).
  Windows required driver: 460.82.

* UltraGlow: Improved Alpha support for UltraGlow.

**LensFlare Improvements**

* High Priority Elements: LensFlare now has a new parameter called "Performance". Elements can now be labelled "Priority Elements". When the performance parameter is set in the S_LensFlare plugin, non-priority elements will be skipped for a faster render.

* When animating elements in the Flare Designer, elements can now have a minimum size and brightness set.

* Performance and UI improvements in Sapphire Effect Builder, Sapphire Flare Designer, and Sapphire Preset Browser.

* OpenColorIO version 2.

* New Presets for a variety of effects.

* New LensFlares.

**New Known Issues**

* In After Effects, 2022, the Preset Browser, Flare Designer, and Effect Builder may play back slowly on the first use. To resolve, return to the host and allow After Effects to finish caching the timeline.

* UltraZapMocha: Sometimes, a straight line will apear in the zap. To fix this, add an additional control point in mocha in the part of the mocha spline that corresponds to that straight segment. Adjust the control point until the straight line segment goes away.

**New Compatibility Notes**

* Sapphire 2022 has been updated to use CUDA 11 in order to support NVIDIA's latest Ampere cards. (RTX A4000, A5000, and A6000). As a result some cards from 2012 are no longer supported. Sapphire 2022 works with CUDA compute capability 3.5 and higher.

* LensFlare: A bug was fixed in Sapphire 2022 in LensFlare, where the saturdation parameter inside the plugin didn't apply correctly to all elements. Fixing this means that some elements will look different in 2022 if saturation is set to a value different than 1.0.

* ParallaxStrips and StripSlide: These effects may look different from older versions due to a change in the position calculations.

### What’s New in Sapphire 2022.01

* Improved render speeds in ColorFuse presets in the preset browser.

* Fixed a crash when the "Show Mocha Only" parameter was selected.

* Improve Sapphire's ability to find the CUDA libraries on Windows and Linux.

* Fixed a crash in Resolve attempting to render on multiple Metal GPUs.

* Fixed a crash when warping images larger than 16k pixels on Macs.

* Fixed the preset list under the "New" button in Sapphire's Preset Browser.

### What’s New in Sapphire 2022.02

* Flare Designer: Improved the look of disabled sliders in the Flare Designer.

* Mocha: Updated Mocha libraries to improve stability.

* Presets: Fixed an intercompatibility bug between presets containing ColorFuse or ColorFuseLooks.

* Preset Browser: Improved handling of presets with errors.

