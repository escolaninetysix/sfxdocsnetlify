{
  "title": "Sapphire 2022.54 release notes",
  "date": "2022-11-17T00:00:00-05:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Sapphire"
  ]
}

### What’s New in Sapphire 2022.5

**New Features**

* Widgets inside Sapphire's Effect Designer.

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

### What’s New in Sapphire 2022.54

* Fixed an artifact rendering all warps and distorts on CPU when the wrap mode is set to None.

* LensFlare: Fixed a crash when rendering 0 pixel flares.

* Linux: Fixed some issues with the code that locates presets for the Preset Browser.

* Fixed a crash in Aurora.


### What’s New in Sapphire 2022.53

* AE: Improved stability when returning large presets from the Preset Browser and Effect Editor to After Effects and Premiere.

* AE: Improved GPU stability and error handling.

* Avid: Fixed an issue with the crop and transform parameters when running on the CPU.

* Avid: Improved stability when returning large presets from the Preset Browser and Effect Editor to Media Composer.

* OFX: Improved stability when returning large presets from the Preset Browser and Effect Editor to the OFX host.

* Resolve: Improved GPU stability and error handling, particularly on systems with mutliple GPUs.

* Photoshop: Improved stability when returning large presets from the Preset Browser and Effect Editor to Photoshop.


### What’s New in Sapphire 2022.52

* Mac: Fixed a Metal error when effects like HyperPush need textures larger than 8k DCI.

* Mocha: Fixed a potential hang on M1 machines with Mocha.

* Mac: Added Metal GPU acceleration to Luna.

* AE: FieldRemove, FilmEffect, RepairFrames, Retime, ReverseClip, ReverseEdits: Fixed rendering with fields. 

* Avid: FieldRemove, FilmEffect, RepairFrames, Retime, ReverseClip, ReverseEdits: Fixed rendering with fields. 

* Avid: On-screen widgets for node parameter adjustment are now available in Effect Builder for Avid.

* OFX Mac: Fixed a Metal error in LensFlare that could occur when rendering with multiple discrete GPUs.

* OFX Resolve: Fixed an intermittent crash on many GPU systems when writing the logfile.


### What’s New in Sapphire 2022.51

* Mac: Fixed the "Activate License.app" in the installation directory.

* Mac: Fixed an issue where installing 2022.5 over 2022 would leave some files from 2022 behind.

* Fixed a sporadic error about set_pixels in Sapphire's Effect Builder.

* Vegas: Fixed an issue in S_Effect where Vegas wouldn't update when a new preset was loaded or when the user returned from the Effect Designer.

* Photoshop: The Affects Alpha value in UltraGlow, LensFlare, etc. is now respected in Photoshop.

* PS Builder: When adding a node to an effect, most of its parameters will be unpublished by default.
