{
  "date": "2022-03-31T00:00:00-05:00",
  "description": "Sapphire visual effect plug-ins",
  "download_url": "https://cdn.borisfx.com/borisfx/store/sapphire-avid/sapphire-avx-install-2022.04.exe",
  "tracking_url":"https://go.pardot.com/l/272832/2021-11-17/xlqg8v",
  "host": "Avid",
  "host_products": "Media Composer",
  "platform": "Windows 64-Bit",
  "product": "Sapphire",
  "log_file_path": "<env:ProgramData>/GenArts/SapphireAVX/sapphire.log",
  "require_login": true,
  "title": "Sapphire 2022 for Avid Windows",
  "upgrade_topic": "GenArts Sapphire Plug-ins for Avid AVX_v6_is1",
  "version": 15.04,
  "key_path_code": "./",
  "release_notes": "https://borisfx.com/release-notes/sapphire-2022-0-4-release-notes/",
  "webstore_page": "https://borisfx.com/store/?collection=sapphire&product=sapphire",
  "license_identity": {
    "productline": "Sapphire",
    "feature": "sapphire,bundleav-bcc-mocha-sapphire-r1,bundleavid-bcc-mocha-sapphire-r1,bundleavid-bcc-sapphire-r1,bundleavid-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only",
    "api": "avx",
    "version": "20211117"
  },
  "license_names": "bundleav-bcc-mocha-sapphire-r1,bundleavid-bcc-mocha-sapphire-r1,bundleavid-bcc-sapphire-r1,bundleavid-mocha-sapphire-r1,bundlemu-bcc-mocha-sapphire-r1,bundlemu-mocha-sapphire-r1,bundlemultihost-bcc-mocha-sapphire-r1,bundlemultihost-bcc-sapphire-r1,bundlemultihost-mocha-sapphire-r1,sapphire_ae_avx_ofx_sparks_121f,sapphire_ae_avx_ofx_sparks_122,sapphire_ae_ofx_sparks_avx_103f,sapphire_ae_ofx_sparks_avx_104,sapphire_ae_ofx_sparks_avx_104f,sapphire_ae_ofx_sparks_avx_105,sapphire_avx_132,sapphire_avx_135,sapphire_avx_136f,bu-bcc-mocha-sapphire-silhouette,bcc-mocha-sapphire-sfx-optics,bfxsuite,borisfx-play-only",
  "app_mgr_tags": "bfx-suite current"
}
### What’s New in Sapphire 2022

**AVX Notes**
  
* Sapphire 2022 AVX for Windows adds support for NVIDIA's Ampere cards to the main build, which required us to upgrade CUDA versions from v10 to v11. This move requires us to offer two different AVX Builds of Sapphire 2022 to not completely drop support for older versions of Media Composer which do not support CUDA 11. 

* Avid 2021 and up - Sapphire-avx-install-2022.0.exe: This Sapphire installer requires a minimum CUDA driver of 460.82 for best NVIDIA GPU support.  Avid recommends the NVIDIA 461.72 driver for Media Composer 2021.9.  This build is required for any NVIDIA Ampere card.  It also requires a CUDA card with a minimum CUDA compute capability of 3.5. On machines where the driver or NVIDIA CUDA card is older than required, Sapphire will render using the CPU.

* Avid 2020 and prior- Sapphire-avx-install-2022.0-cuda10.exe: This Sapphire installer requires a minimum driver version of 418.96 for NVIDIA GPU support and is compatible with Media Composer 2018.12, 2019.12, and 2020.12.  Avid has certified 443.66 for Media Composer 2020.12 as well as 441.28 for both 2019.12 and 2018.12.  This build supports CUDA cards with a minimum CUDA compute capability of 3.0 and a maximum CUDA compute capability of 7.5. On machines where the driver or NVIDIA CUDA card is older than required, Sapphire will render using the CPU.


* For full Media Composer driver requirements please refer to Avid's website: https://avid.secure.force.com/pkb/articles/en_US/compatibility/en267087

* To find the CUDA compute capability of your NVIDIA card, see this wiki entry: https://en.wikipedia.org/wiki/CUDA#GPUs_supported

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

* Fixed a crash when warping images larger than 16k pixels on Macs.

* Fixed the preset list under the "New" button in Sapphire's Preset Browser.

### What’s New in Sapphire 2022.02

* Flare Designer: Improved the look of disabled sliders in the Flare Designer.

* Mocha: Updated Mocha libraries to improve stability.

* Presets: Fixed an intercompatibility bug between presets containing ColorFuse or ColorFuseLooks.

* Preset Browser: Improved handling of presets with errors.

