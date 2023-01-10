{
  "title": "Continuum 2022 (v15.0.0) for OFX release notes",
  "date": "2021-11-17T00:01:00-05:00",
  "description": "Continuum 2022 (v15.0.0) for OFX release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2022 (v15.0.0) for OFX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2022 for OFX (Summary of major changes since Continuum 2021.5):**

**_Particle Illusion Enhancements:_**

* Fluid Dynamics
  * Apply fluid dynamics as a Force object in any Particle Illusion scene for a vast new range of organic motion possibilities.
* Host Performance Re-architecture
  * We've rearchitected host plugin rendering in Particle Illusion to _dramatically_ increase the performance when rendering in the hosts.  Host previews/renders now playback at roughly the same rate as particles have traditionally played while inside the PI UI.  Heavy projects including those with Fluid Dynamics or lots of particles should see the biggest boost, especially on longer timelines.
* Particle Illusion Scene Library
  * You can now save entire scenes as Particle Illusion emitter library entries.  In the past a library could include just a single emitter, but now you can include not only multiple emitters, but also multiple forces including fluids and more.  Nearly all project settings can now be saved into an emitter library template entry for easy sharing and instant reuse.
* New 2022.0 Emitter Library

**_7 New/Ported Fully GPU Accelerated BCC+ Effects:_**

* BCC+Beauty Studio
  * 100% GPU'd version of the original for fast, high quality skin correction with built in Mocha masking
* BCC+Blur
  * Fast, simple, yet tunable blurring with great GPU performance
* BCC+Channel Blur
  * Create subtle or highly stylized color separations with per-channel tunable blur amounts and great GPU performance
* BCC+Channel Blur YUV
  * Control independent blur amounts for the luminance and color channels in YUV color space, both for subtle image restoration / noise suppression work and for more stylized washed out / degraded color looks with great GPU performance
* BCC+Directional Blur
  * Blur along any direction with unique control over the perpendicular blur amount, plus the ability to dial in each channel separately.  Includes a full set of blur quality tuning controls and excellent GPU performance with no slowdown for larger blur amounts.
* BCC+Smear Blur
  * New blur filter with looks ranging from fast standard geometric motion blurs to unique smeary/trippy/dreamy looks available by decoupling the motion transforms in non-standard and mixed ways.  100% GPU'd for excellent performance and silky smooth quality despite large non-uniform blur ranges.
* BCC+Prism
  * Faster, higher quality, and more functional "BCC+" version of the original BCC Prism filter for stylized prismatic color separation combined with geometric/smeary blurs.  100% GPU'd for excellent performance and silky smooth quality despite large non-uniform blur ranges.

<span style="font-size: 1rem;"> </span>

**PixelChooser including Mocha Masking added to all BCC+ filters**

* BCC+ filters now include a redesigned, 100% GPU'd version of the PixelChooser including brand new support for Mocha planar mask tracking in BCC+.

**Mix With Original Slider in BCC+**

* BCC+ filters now include a global Mix with Original slider at the bottom for quickly dialing back overall effect intensity.

**FX Editor Enhancements**

* UI Look and Feel Update - flatter, cleaner, more efficient use of space
* Customized Workspaces with Save/Load controls for optimized layouts across a variety of scenarios.
* OCIO2 support
* New alpha preview control mode for choosing between previewing Over Black, Over Gray, Over White, Over Checkerboard, or Straight RGB.
* Improved reliability of restoring window layout from previous session

**New Presets for BCC+Film Stocks**

* 60 new "movie look" presets for BCC+Film Stocks based on iconic film looks.

**New Gobos for BCC+Lights**

* 50 new Glass style gobos in BCC+Lights

**Mocha for Continuum Update**

* Update to Mocha 2022 era builds:
  * Dope Sheet enhancements (slide all keyframes, zooming tools, huge performance improvements)
  * RGB channel selection for tracking and in the viewport
  * OCIO V2
  * Quick stabilise mode now supports alternate layers as the motion source
  * Conformance with VFX Platform CY2021 (https://vfxplatform.com/)
  * Miscellaneous tweaks, bug fixes, and performance enhancements

**Apple Silicon "M1" arm64 support**

* Run BCC plugins natively on newer Apple Silicon / M1 arm64 architectures for those hosts that actually support running natively.

**BCC+ Alpha Handling**

* Improved handling for numerous BCC+ filters when applied to transparency or soft alpha regions including BCC+ Lens Flare, BCC+ Glow, BCC+ Rays, and others.

**Improved BCC+ Vignette Defaults**

* The BCC+ Vignette defaults have been adjusted for a more typical default starting look.

**BCC+Transform HUD Widgets in OFX**

* BCC+Transform now includes an on-screen HUD overlay widget for easier control in hosts that support overlays.

**_Other Fixes and Polish in Continuum 2022 v15.0.0 for OFX:_:**

* License tool updates
* BCC+ OFX - Fix channel swapping in OFX hosts that use 8 bit RGBA format
* BCC+Vignette - fix incorrect colors in some presets
* BCC+Transform - Fixed premult fringe
* BCC+Camera Shake - Fixed premult fringe
* BCC+Rack Focus - Fixed premult fringe
* BCC+Depth of Field - Fixed premult fringe
* BCC+Split Field - Fixed premult fringe
* Optical Stabilizer - shorten menu text to be more readable in some hosts
* Mac Registration Dialog in installer can fail on certain unicode entries
* BCC+ Rays, Glows, Flares - improvements to alpha handling in some alpha regions and simplification of alpha controls.
* Title Studio - Gimbal widgets erratic when dragging
* Title Studio - Crash when creating spline shapes if guides present
* Title Studio - Guide Positioning is slow - not smoothly interactive
* Particle Illusion - Emission angle in 3D is inconsistent with the way it works in 2D
* Particle Illusion - Faster performance for 3D Box Grid Force objects
* Particle Illusion - Can't duplicate node via Edit->Duplicate or Ctrl+D
* Particle Illusion - New Render Completion sound
* Particle Illusion - Cache indicator doesn't show when first emitter is disabled
* Particle Illusion - Render from within PI UI crashes when project FPS is too high
* Particle Illusion - Changing value of one emitter's parameter can change another emitter's parameter too
* Particle Illusion - Import shape (sprite) does not work using "Apply to Current Emitter"
* Particle Illusion - Changing view (Render, World, Top, etc.) causes unnecessary particle recalculation
* Particle Illusion - Improved performance with high Motion Blur count
* Particle Illusion - Deflectors don't correctly deflect in 3D
* Particle Illusion - Grid force objects "direction variation" not correct in 3D
* Particle Illusion - Adjust default camera DOF parameters to have more visible result

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.0) (BCC 15.0.0) for OFX was released on 11/17/2021.**

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.0) for OFX (OpenFX) officially supports the following host applications:**

_Note that Continuum OFX may work to varying degrees in other OFX hosts, but at this time it is only officially supported in Resolve, Vegas Pro, and Nuke.  Note that official Resolve support does not yet include the embedded Fusion page within Resolve.  Note that the Apple App Store version of Resolve is not fully supported and direct downloads of Resolve from the Blackmagic Design site should be used instead._

macOS 10.14, 10.15, 11.x, 12.0  (as appropriate for the host version in use):    Note, Continuum 2022 v15.0.0 supports running natively on M1/ARM64 native chipsets for Resolve host versions which themselves support running natively on M1/ARM64.  Note the Particle Illusion custom UI runs in Rosetta emulation mode while the rest of Continuum including Particle Illusion rendering will run natively in native host enviroments.  Note that Title Studio does not support loading/rendering C4D models when running natively on M1/ARM64.  \[Up to host versions released at time of Continuum release\]:

* DaVinci Resolve Studio and DaVinci Resolve 15.x, 16.x, 17.x
* Nuke 12, 13

Windows 10 x64 and Windows 11 \[Up to host versions released at time of Continuum release\]:

* DaVinci Resolve Studio and DaVinci Resolve 15.x, 16.x, 17.x
* 15, 16, 17, 18, 19 (Magix)
* Nuke 12, 13 (4k monitor support on windows requires Nuke 12.1 or higher)

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.0) for OFX - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Due to technical difficulties with newer versions of Resolve on macOS, the 3D Objects category of filters (including Title Studio) is disabled in Resolve on macOS.  We are working with Resolve engineering on a solution.
* Title Studio does not support loading/rendering C4D models when running natively on M1/ARM64
* The Render Legacy Motion Tracker option was removed to conform to host architecture changes.  Projects saved in much older versions of Continuum that used the old legacy motion tracker will no longer use the legacy track data.  Any such old projects will need to re-track the motion in the current Mocha-based Motion Tracker implementation.  This does NOT affect projects where the tracking was done with Mocha.
* PI Grid force objects "direction variation" is now more correct and thus renders differently than before
* PI 3D Deflectors didn't correctly deflect in 3D which changes the look of existing projects
* BCC+ filters with Affect Alpha will now have Affect Alpha set to 100 always and this parameter will be hidden as this is almost universally the desired approach.
* BCC+ Vignette default settings improvements mean that some older projects may render with modified values for opacity, aspect, softness, or blur in Resolve.

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.0) for OFX - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8678 - Particle Illusion - Layer widget disappears and particles do not render on stage for some high resolution projects at 5k+
* CO-9244 - 3D Objects category of filters including Title Studio are disabled on macOS Resolve due to technical difficulties with that host.
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9390 - BCC+Composite reverts to CPU if Transform Scale X param is scrubbed
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-9783	- Particle Illusion - Fluids preload not being calculated when Scene added to project, but it then renders correctly after forcing a refresh by touching any parameter
* CO-9511 - BCC+ Vignette renders differently between CPU and GPU on mixed sized clips in Vegas
* CO-9789	- Nuke only: Some presets not applying correctly when the y param is set to 200

<div id="ext-gen9245"> </div>