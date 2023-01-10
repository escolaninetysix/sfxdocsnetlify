{
  "title": "Sapphire 2022.01 release notes",
  "date": "2021-12-18T00:00:00-05:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Sapphire"
  ]
}


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

Adobe, Avid, OFX:

* Improved render speeds in ColorFuse presets in the preset browser.

* Fixed a crash when the "Show Mocha Only" parameter was selected.

* Improve Sapphire's ability to find the CUDA libraries on Windows and Linux.

* Fixed a crash when warping images larger than 16k pixels on Macs.

* Fixed the preset list under the "New" button in Sapphire's Preset Browser.

OFX:

* Fixed a crash in Resolve attempting to render on multiple Metal GPUs.

Photoshop:

* Improved render speeds in ColorFuse presets in the preset browser.

* Improve Sapphire's ability to find the CUDA libraries on Windows and Linux.

* Fixed a crash when warping images larger than 16k pixels on Macs.

