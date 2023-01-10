{
  "title": "Continuum 2022 (v15.0.3) for Adobe AE/Premiere - Release Notes",
  "date": "2022-02-24T17:04:00-05:00",
  "description": "Continuum 2022 (v15.0.3) for Adobe After Effects / Premiere Pro - Release Notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2022 (15.0.3) for Adobe After Effects and Adobe Premiere Pro - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2022 (v15.0.3) is a maintenance update to Continuum 2022 versions 15.0.0 and 15.0.1 and is a free update for licensed users of Continuum 2022.  It includes several important fixes and feature enhancements (see below).  For a full list of what's new between Continuum 2022 and the previous Continuum 2021.5 major release, please refer to the initial 2022 release notes:

[Continuum 2022 (v15.0.1) for Adobe Release Notes](/release-notes/continuum-2022-v15.0.1-for-adobe-ae-premiere-release-notes/)
[Continuum 2022 (v15.0.0) for Adobe Release Notes](/release-notes/continuum-2022-v15.0.0-for-adobe-ae-premiere-release-notes/)

<span style="font-size: 1rem;"> </span>

**Feature Enhancements in 2022 (v15.0.3) Update for Adobe:**

* Particle Illusion and Particle Illusion Dissolve
  * Faster Preview and Rendering - Quicker refreshes and faster render, especially when jumping/scrubbing forward in longer projects with high particle counts.
  * Improved Memory Efficiency - More efficient use of caching memory.
  * Native ARM64/M1 support for Particle Illusion UI.  (The host plugin already supported native Apple silicon, but now the PI UI also supports running natively.)
  * Faster ProRes rendering from the PI UI
  * Particle Illusion Dissolve - the transition version now supports the new Tint Color and Tint Strength native plugin parameters (previously available only in the normal effect version).

<span style="font-size: 1rem;"> </span>

**Fixes and Polish in Continuum 2022 (v15.0.3) Update for Adobe:**

* Adobe Hosts - Mocha tracking incorrect when host is set to downsampled resolution
* Premiere - Image flipping after GPU errors - especially common on multi-GPU hardware configurations
* Improved GPU selection on multi-GPU systems to optimize performance and minimize GPU errors
* BCC+ Improved GPU Logging
* Latest Mocha integration (in line with Mocha Pro 9.0.2) including fix for OCIO config error
* BCC+ Smear Blur - Apply Mix param behavior was backwards.  This fix may equire resetting the mix param in previously saved projects in some hosts.
* Default edge treatment changed from Repeat to Reflect in newly added BCC+ filters (Blur, Channel Blur, Channel Blur YUV, Directional Blur, Smear Blur, Prism).  This change might affect existing projects in some hosts.
* BCC+ Rays - Windows-only - GPU error leading to fallback to slower CPU processing
* BCC Motion Blur - crash when Pixelchooser set to Clock Wipe shape
* BCC Fast Film Glow, Fast Film Process, and related filters - GPU failure for some blur settings leading to CPU fallback / lower performance
* BCC Title Studio and Extruded EPS - hang with certain EPS files
* Particle Illusion - Sluggish UI on some window configurations when Stage window zoom is set to Fit
* Particle Illusion - Emission Angle incorrect when emitter Angle is changed
* Particle Illusion - Some particle properties could change from one render to another for projects using deflectors
* Particle Illusion - Improved handling of stretch/scale when applying presets or opening projects on media of different frame aspects (e.g. presets created in landscape projects which were then applied to portrait clips.)
* Particle Illusion - Incorrect particle stretch in projects with non-square pixel aspect ratios
* Particle Illusion - Saved library scene does not display Force/Fluid set up until UI is refreshed.
* Particle Illusion - Saving super emitter as library scene could crash.
* Particle Illusion - Preview incorrect for many emitters with non-default angle
* Particle Illusion - Deflectors don't work when their start frame is not 1
* Particle Illusion - Improved H264 export on mac
* Particle Illusion - preview background image uses last scene thumbnail, not BorisFX logo
* Particle Illusion - Fix 8k support in PI UI and back in host.  (8k does still require GPUs with large memory)

<span style="font-size: 1rem;"> </span>

**Continuum 2022 v15.0.3 (BCC 15.0.3) for Adobe After Effects and Adobe Premiere Pro was released on 2/24/2022.**

<span style="font-size: 1rem;"> </span>

**Continuum 2022 v15.0.3 for Adobe supports the following Adobe host applications:**

macOSX 10.14, 10.15, 11.x, 12.0 (as appropriate for the host version in use).  Note, Continuum 2022 supports running natively on M1/ARM64 native chipsets for Premiere Pro versions which themselves support running natively on M1/ARM64.  After Effect does not itself run natively on M1/ARM64 at the time of this release.  Note that Title Studio does not support loading/rendering C4D models when running natively on M1/ARM64.

* Adobe After Effects and Premiere Pro CC 2019, 2020, 2021, 2022 (up to versions released at time of Continuum release)

Windows 10 x64, Windows 11:

* Adobe After Effects and Premiere Pro CC 2019, 2020, 2021, 2022 (up to versions released at time of Continuum release)

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2022 v15.0.3 for Adobe - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Title Studio does not support loading/rendering C4D models when running natively on M1/ARM64
* The Render Legacy Motion Tracker option was removed to conform to host architecture changes.  Projects saved in much older versions of Continuum that used the old legacy motion tracker will no longer use the legacy track data.  Any such old projects will need to re-track the motion in the current Mocha-based Motion Tracker implementation.  This does NOT affect projects where the tracking was done with Mocha.
* Particle Illusion Grid force objects "direction variation" is now more correct and thus renders differently than before
* Particle Illusion 3D Deflectors didn't correctly deflect in 3D which changes the look of existing projects
* BCC+ filters with Affect Alpha will now have Affect Alpha set to 100 always and this parameter will be hidden as this is almost universally the desired approach.
* BCC+ Lens Flare and related filters have improved handling in regions of soft alpha channels which changes the look of existing projects
* Particle Illusion Fluids projects created in 15.0.0 may look significantly different in 15.0.1 due to fixes in the fluid geometry which yield more natural fluid motion and particle disbursement
* Older Super Pro dongles are no longer supported on Mac.  Please discuss dongle replacement with BorisFX Support.
* Particle Illusion - Improved handling of stretch/scale when applying presets or opening projects on media of different frame aspects can change the relative scale of some existing projects.
* Particle Illusion - Fixes for particle stretch in projects with non-square pixel aspect ratios can change the look of some existing projects.
* BCC+ Smear Blur - Apply Mix param was backwards.  This fix may equire resetting the mix param in previously saved projects using apply modes in some hosts.
* Default edge treatment changed from Repeat to Reflect in newly added BCC+ filters (Blur, Channel Blur, Channel Blur YUV, Directional Blur, Smear Blur, Prism).  This change might require resetting the Edge Mode in some hosts.
* Particle Illusion native host Tint Amount parameter was changed to default to 50 instead of 100 which might change the look in some hosts
* Particle Illusion fix for rotation direction in fluids might change the particle patterns in some projects.

<span style="font-size: 1rem;"> </span>

**Continuum 2022 v15.0.3 for Adobe - Known Issues and Limitations:**

* CO-1298 - Mocha PixelChooser splines can render distorted or in the wrong location in filters that use "Avoid Clipping" or similar mechanisms to expand the source layer dimensions.  As a workaround the layer expansion should be done prior to the effect in a precomp.
* CO-2296 - The Hide Disabled Parameters preference exposes host-side UI refresh issues in AE and Premiere.  We are working with Adobe to resolve these issues.  As a workaround the Hide Disabled Parameters preference can be disabled to revert to "graying out" parameters instead of hiding them.
* CO-2344 - Title Studio - projects with Cinema 4D files that reference host tracks as textures can cause slow or stalled refreshes in Premiere.
* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-6682 - Optical Stabilizer does not stabilize correctly on trimmed clips in Premiere
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8475 - Particle Illusion - PI layer Sync with Ae 3D lost when using Y Rotation keyframes
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8858 - Particle Illusion - Ae does not refresh renders if PI is using mask / text via mask picker menu and the mask on an alternate layer is changed. (Change a param or purge cache to force refresh.)
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha

<div id="ext-gen9245"> </div>