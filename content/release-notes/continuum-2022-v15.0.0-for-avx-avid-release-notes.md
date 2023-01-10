{
  "title": "Continuum 2022 (v15.0.0) for AVX - Avid - Release Notes",
  "date": "2021-11-17T00:02:00-05:00",
  "description": "Continuum 2022 (v15.0.0) for AVX - Avid Media Composer - Release Notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2022 (v15.0.0) for Avid AVX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2022 for AVX - Avid Media Composer (Summary of major changes since Continuum 2021.5):**

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

**BCC+ Alpha Handling**

* Improved handling for numerous BCC+ filters when applied to transparency or soft alpha regions including BCC+ Lens Flare, BCC+ Glow, BCC+ Rays, and others.

**Improved BCC+ Vignette Defaults**

* The BCC+ Vignette defaults have been adjusted for a more typical default starting look.

**_Other Fixes and Polish in Continuum 2022 v15.0.0 for AVX - Avid Media Composer:_:**

* License tool updates
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
* Avid - Unexpected render slowdown after using Mocha in certain OGL effects (even if mocha not enabled on that clip)
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

**Continuum 2022 (v15.0.0) (BCC 15.0.0) for Avid AVX was released on 11/17/2021.**

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.0) for Avid AVX supports the following host applications:**

Macintosh:

* Avid Media Composer 2018.x, 2019.x, 2020.x, 2021.x (up to Avid versions released at time of Continuum release) and running macOS 10.14, 10.15, 11.x, 12.0 (as appropriate for the host version in use).  _(Intel chipsets only.  M1 / ARM chipsets are not supported by the Avid host at the time of this release.)_

Windows:

* Avid Media Composer 2018.x, 2019.x, 2020.x, 2021.x (up to Avid versions released at time of Continuum release) and running Windows 10 or Windows 11

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.0) for AVX - Avid - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* The Render Legacy Motion Tracker option was removed to conform to host architecture changes.  Projects saved in much older versions of Continuum that used the old legacy motion tracker will no longer use the legacy track data.  Any such old projects will need to re-track the motion in the current Mocha-based Motion Tracker implementation.  This does NOT affect projects where the tracking was done with Mocha.
* PI Grid force objects "direction variation" is now more correct and thus renders differently than before
* PI 3D Deflectors didn't correctly deflect in 3D which changes the look of existing projects
* BCC+ filters with Affect Alpha will now have Affect Alpha set to 100 always and this parameter will be hidden as this is almost universally the desired approach.
* BCC+ Vignette default settings improvements mean that some older projects may render with modified values for opacity, aspect, softness, or blur in Avid

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.0) for AVX - Avid - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8678 - Particle Illusion - Layer widget disappears and particles do not render on stage for some high resolution projects at 5k+
* CO-8824 - BCC+ filters in Avid don't support Avid's 16bit mode and will render in 8 bit under the hood
* CO-8820 - Mocha PixelChooser data modified when loading presets in Avid even when pref is set to not change PixelChooser/Mocha data
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-9783	- Particle Illusion - Fluids preload not being calculated when Scene added to project, but it then renders correctly after forcing a refresh by touching any parameter

<div id="ext-gen9245"> </div>