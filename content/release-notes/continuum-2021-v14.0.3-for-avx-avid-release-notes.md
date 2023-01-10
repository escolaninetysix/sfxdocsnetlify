{
  "title": "Continuum 2021 (v14.0.3) for AVX - Avid - Release Notes",
  "date": "2021-05-05T17:00:00-04:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2021 (14.0.3) for Avid AVX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2021 (v14.0.3) is a maintenance update to Continuum 2021 (v14.0.0 and v14.0.1) and is free to licensed users of Continuum 2021.  It includes several important fixes and enhancements (see below).  For a full list of what's new between Continuum 2021 and the previous Continuum 2020.5 major release please refer to the initial 2021 release notes here:

[Continuum 2021 (v14.0.0) for AVX - Avid - Release Notes](/release-notes/continuum-2021-v14.0.0-for-avx-avid-release-notes/)
[Continuum 2021 (v14.0.1) for AVX - Avid - Release Notes](/release-notes/continuum-2021-v14.0.1-for-avx-avid-release-notes/)

<span style="font-size: 1rem;"> </span>

**Fixes and Polish in 2021 (v14.0.3) Update for AVX:**

* Errors and or unexpected watermarking on certain Windows systems due to GPU init failure.
* Incorrectly enabled or disabled params in Avid UI where params that should have been hidden were sometimes visible
* Particle Illusion - Failures to fully launch the Particle Illusion UI and/or crashing/hanging upon first adding an emitter to the stage in certain scenarios where Particle Illusion had been used previously with a different set of emitters.
* Particle Illusion - Graph View - Couldn't drag params from min or max values easily
* Particle Illusion - Line widget gets moved unexpected in PI UI after adding emitter
* Particle Illusion Render - Warning message given if exporting at less than full resolution.
* Particle Illusion Render - Start can be larger than End
* Particle Illusion Render - Choosing Full range does not ignore the Start/End field
* Particle Illusion - DOF still affects emitter even when camera model is set to none
* Particle Illusion: DOF always blurring particle -nothing fully in focus
* Particle Illusion - Some emitters don't animate when applied on Mac
* Title Studio: Creating new styles category crashes host on Mac
* Title Studio - UVW mapping checkbox moved to the top of the Texture Composite parameter controls
* Title Studio - Shape Level Drop Shadow crops composite window
* Title Studio - Composite Window zooms out when resolution set to Quarter
* Title Studio - Hand tool causes unexpected z-scale issues with comp window when camera orbit is adjusted
* Title Studio - Resolution changes position of non centered composite video

<span style="font-size: 1rem;"> </span>

**Continuum 2021 (v14.0.3) (BCC 14.0.3) for Avid AVX was released on 5/5/2021.**

<span style="font-size: 1rem;"> </span>

**Continuum 2021 (v14.0.3) for Avid AVX supports the following host applications:**

Macintosh:

* Avid Media Composer 8.x, 2018.x, 2019.x, 2020.x, 2021.x (up to Avid versions released at time of Continuum release) and running macOS 10.13, 10.14, 10.15, 11.0 (as appropriate for the host version in use).  _(Intel chipsets only.  M1 / ARM chipsets are not supported in this version.)_

Windows:

* Avid Media Composer 8.x, 2018.x, 2019.x, 2020.x, 2021.x (up to Avid versions released at time of Continuum release) and running Windows 7 Professional (64-bit) and Windows 10 (as appropriate for the host version in use).

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2021 v14.0.3 for AVX - Avid - New BCC+ Filter Integration Notes:**

You will notice several differences between the new BCC+ filters and the existing BCC effects in the 2021 cycle.  Several standard Continuum features and workflow metaphors have not yet been added to the new filters.  We will continue to refine the integration in future versions:

* The new filters do not support the PixelChooser, Mocha Masking and Tracking, Compare Mode, Beat Reactor, or Head Up Display widgets.
* The new filters use the new FX Editor preset browser, while the old filters will continue to use the original FX Browser.
* The new filters do all preset loading/saving from within the FX Editor.  There are no native host controls for loading/saving/browsing presets.
* The new filters do not appear in the standalone FX Browser filter
* The new filters do not support applying to Title Mattes in Avid and they do not support several of the standard Continuum AVX UI metaphors such as Safe Levels and Bypass.

<span style="font-size: 1rem;"> </span>

**Continuum 2021 (v14.0.3) for AVX - Avid - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Fixes to the Particle Illusion layer order may affect the look of old projects if they contained multiple layers inside the Particle Illusion UI (not common).  Layers cannot be reordered at this time.
* Fixes to the Particle Illusion Particle Type handling may slightly affect the look of old projects, particularly if they used multiple Particle Type instances.  The exact randomization pattern may be different, but the overall look and feel should remain the same.
* Fixes to the Particle Illusion Depth of Field performance and quality may affect the look of previous 3D projects that used Depth of Field.  In particular the blur amount might need to be tweaked to achieve a closer match to the previous result.
* Fixes to the Particle Illusion Turbulence when combined with Deflectors/Forces may affect the locations of particles in some projects.
* Fixes to levels in 32bit float renders (in the BCC+ filters only) can cause shifts in levels compared to V14.0.0 results.

<span style="font-size: 1rem;"> </span>

**Continuum 2021 (v14.0.3) for AVX - Avid - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8319 - Particle Illusion - Missing top window bar to minimize or maximize when reopened on secondary monitor in some circumstances.
* CO-8319 - Particle Illusion - Missing top window bar to minimize or maximize when reopened on secondary monitor in some circumstances.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8608	- Particle Illusion - DOF sometimes produces more blur than is expected
* CO-8606	- The old Multi-Filter parameter options appear in UI when "Apply to Title-Matte" is checked in new effects, but these params should only appear when opening legacy timelines.
* CO-8678 - Particle Illusion - Layer widget disappears and particles do not render on stage for some high resolution projects at 5k+
* CO-8659 - Particle Illusion - Window - Cannot edit text for Export Range field values etc. if Render window is opened from File menu unless other elements are edited first.  Workaround: - opening the Render dialog from the Render button in the Stage view does not have this issue.
* CO-8699 - Emitters with "Single Particle" causes deflector "break particles" to trigger long delays

<div id="ext-gen9245"> </div>