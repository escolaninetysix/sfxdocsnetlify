{
  "title": "Continuum 2022 (v15.0.1) for AVX - Avid - Release Notes",
  "date": "2021-12-22T17:02:00-05:00",
  "description": "Continuum 2022 (v15.0.1) for AVX - Avid Media Composer - Release Notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2022 (v15.0.1) for Avid AVX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2022 (v15.0.1) is a maintenance update to Continuum 2022 (v15.0.0) and is a free update for licensed users of Continuum 2022.  It includes several important fixes and feature enhancements (see below).  For a full list of what's new between Continuum 2022 and the previous Continuum 2021.5 major release, please refer to the initial 2022 release notes:

[Continuum 2022 (v15.0.0) for AVX Release Notes](/release-notes/continuum-2022-v15.0.0-for-avx-avid-release-notes/)

<span style="font-size: 1rem;"> </span>

**Feature Enhancements in 2022 (v15.0.1) Update for Avid AVX:**

* Particle Illusion Tint Controls
  * Tint Color and Tint Amount controls are now available inside the Composite group in the host plugin controls for easily adjusting the colors of the overall PI scene right in the native UI.
* Particle Illusion Fluid Animation Improvements
  * Fluid animation has been improved with more natural flow and particle disbursement.

<span style="font-size: 1rem;"> </span>

**Fixes and Polish in Continuum 2022 (v15.0.1) Update for Avid AVX:**

* BCC+ Lens Flare and related light filters - Improved alpha handling in soft alpha regions
* Title Studio / 3D Objects - Mac only - Isolated crash on launch with certain prefs settings.
* Title Studio - Host crashes when editing text created by text tool
* Mac Installer - Application Install Folder - Unification with other Boris FX products
* Licensing - Numerous Unit license tweaks/fixes including Art Looks unit license filter pruning wrong in Adobe host
* Licensing - Sentinel dongles are now working on Mac.  (Note, older Super Pro dongles are no longer supported on mac.  Please discuss replacement with Support.)
* Particle Illusion - Lines ignore host-side Opacity parameter value
* Particle Illusion - Dragging CTI while effect is building the cache in the PI UI could causes sporadic discontinuities
* Particle Illusion - "Emit in 3D" is no longer automatically checked for emitters in 3D projects
* Particle Illusion - Adding an emitter doesn't automatically select the emitter
* Particle Illusion - Fix spurious warning statement in log
* Particle Illusion - Fix for starting up without timeline panel on certain windows multi-monitor setups
* Particle Illusion - World View changes/distorts when camera position animated
* Particle Illusion - Particles of Super Emitters not affected by fluids
* Particle Illusion - Possible fix for MPG export errors on certain machines when rendering from PI UI
* Particle Illusion - Fluid Dynamics Performance tweaks
* Particle Illusion - Change project settings blur items so always displayed (not dependent on state of "enable" setting)
* Particle Illusion - Object selection in stage does not always apply in node and controls view
* Particle Illusion - "Save" menu item should be disabled if project is unchanged
* Particle Illusion - Memory usage creeps up over time
* Particle Illusion - On Fluids projects with motion blur, sporadic crashing when adjusting the number of motion blur frames
* Particle Illusion - Fluids - Free Emitters created by Super Emitters were not affected by fluids.
* Particle Illusion - New Noise slider in fluids to spread out clumped particles when desired
* Particle Illusion - Scene thumbs not drawing with correct brightness in emitter library preview pane
* Particle Illusion - Motion blur settings shown in project settings dialog do not always match what is actually used
* Particle Illusion - Any 3D view besides "Render View" uses significantly more CPU time
* Particle Illusion - When renaming Scenes Library Emitters the "+" is added to the name a second time
* Particle Illusion - After adding a scene to a project, all object nodes are selected
* Particle Illusion - Circle emitters emission inaccurate in 3D projects
* Particle Illusion - Layer widget disappears and particles do not render on stage in PI UI for resolutions above (5005 x X)

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.1) (BCC 15.0.1) for Avid AVX was released on 12/22/21.**

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.1) for Avid AVX supports the following host applications:**

Macintosh:

* Avid Media Composer 2018.x, 2019.x, 2020.x, 2021.x (up to Avid versions released at time of Continuum release) and running macOS 10.14, 10.15, 11.x, 12.0 (as appropriate for the host version in use).  _(Intel chipsets only.  M1 / ARM chipsets are not natively supported by the Avid host at the time of this release.)_

Windows:

* Avid Media Composer 2018.x, 2019.x, 2020.x, 2021.x (up to Avid versions released at time of Continuum release) and running Windows 10 or Windows 11

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.1) for AVX - Avid - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* The Render Legacy Motion Tracker option was removed to conform to host architecture changes.  Projects saved in much older versions of Continuum that used the old legacy motion tracker will no longer use the legacy track data.  Any such old projects will need to re-track the motion in the current Mocha-based Motion Tracker implementation.  This does NOT affect projects where the tracking was done with Mocha.
* PI Grid force objects "direction variation" is now more correct and thus renders differently than before
* PI 3D Deflectors didn't correctly deflect in 3D which changes the look of existing projects
* BCC+ filters with Affect Alpha will now have Affect Alpha set to 100 always and this parameter will be hidden as this is almost universally the desired approach.
* BCC+ Vignette default settings improvements mean that some older projects may render with modified values for opacity, aspect, softness, or blur in Avid
* BCC+ Lens Flare and related filters have improved handling in regions of soft alpha channels which changes the look of existing projects
* PI Fluids projects created in 15.0.0 may look significantly different in 15.0.1 due to fixes in the fluid geometry which yield more natural fluid motion and particle disbursement
* Older Super Pro dongles are no longer supported on Mac.  Please discuss dongle replacement with Boris FX Support.

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.1) for AVX - Avid - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8824 - BCC+ filters in Avid don't support Avid's 16bit mode and will render in 8 bit under the hood.  Use Avid Float rendering for maximum quality.
* CO-8820 - Mocha PixelChooser data modified when loading presets in Avid even when pref is set to not change PixelChooser/Mocha data
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha

<div id="ext-gen9245"> </div>