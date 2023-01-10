{
  "title": "Continuum 2021.5 (v14.5.0) for Adobe AE/Premiere - Release Notes",
  "date": "2021-06-21T17:00:00-04:00",
  "description": "Continuum 2021.5 (v14.5.0) for Adobe After Effects / Premiere Pro - Release Notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2021.5 (14.5.0) for Adobe After Effects and Adobe Premiere Pro - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2021.5 for Adobe (Summary of major changes since Continuum 2021):**

**_9 New Fully GPU Accelerated BCC+ Effects:_**

* BCC+Composite
  * Blend a pair of clips with extensive controls over compositing details such as color correction, blur, film grain, motion blur, edge composite control, and an integrated drop shadow
* BCC+Film Grunge
  * Hardware accelerated Film Grunge filter to add aged-film effects to video source clips.
* BCC+Flashing
  * Simulate "Flashing" techniques from film development/printing processes with highlight and shadow adjustments for brightness and tint.
* BCC+Fluorescent
  * Adjust color to remove green cast from shooting with fluorescent lighting
* BCC+F-Stop
  * 4-way color correction filter offers independent exposure control across multiple regions of the filtered source shot.
* BCC+Haze
  * Improve color and clarity with haze removal filtering.
* BCC+Multi-Star
  * Generates multi-point star patterns based on luma values in the source shot.
* BCC+Two Strip
  * Sister filter to the BCC+ Three Strip for variations on vintage film looks.
* BCC+Vignette
  * Full featured vignette generator with independent controls for setting the color and true variable blurs along with unique options for edge distortion.

**_Particle Illusion Enhancements:_**

* Node View
  * See a graphical node representation of complex emitter stacks and quickly view just the parameters desired for a particular element.
* UI performance cache
  * Particle caching allows instant scrubbing backward and forward inside the PI UI for any frame you’ve already calculated.
* 3D Emission Controls
  * Control 3D emission angles for all emitters
* 3D Basic Shape Emitter
  * Emit from 3D Planes, Spheres, and Cuboids
* 3D Force and Deflectors
  * Forces and Deflectors have been extended to work in true 3D space
* Graph View Redesign
  * Zoom + Pan in the graph view for precise editing of keyframes even on long timelines
  * Improved graph editing interface
* Emit from After Effects Masks or Text
  * Take emitter path location from After Effects host Mask or Text outlines.
  * Trace masks either sequentially or with simultaneous cloned emitters for each mask.
* Emit from After Effects 3D Light / 3D Layer Positions
  * Take emitter location from the location of AE 3D composition lights or AE 3D layer positions
* New "Emitters_2021.5" Emitter Library
* Other PI Enhancements
  * Add “Uniform Spacing” option for non-randomized particle birth location
  * Turbulence Auto-Evolve Speed - larger max range
  * Performance improvements rendering in host for some projects
  * “Number of Each Color” - larger max range
  * When no Favorites are present but filtering is set to show Favorites, show explanatory message
  * Numerous UI tweaks

**_BCC+ Improved Alpha Support:_**

* Many BCC+ lighting filters now support improved integration with alpha clips including BCC+ Rays, BCC+ Streaks, BCC+ Lens Flare, BCC+ Glow, BCC+ Glow Edges, BCC+ Ice Halos, and BCC+ Multi-Star. These filters now allow generated lights to expand into transparent regions.
* The FX Editor now supports working with alpha clips, allowing you to view how presets will affect your alpha footage. Use SHIFT+A to toggle alpha preview on/off.

<span style="font-size: 1rem;"> </span>

**_Other Fixes and Polish in Continuum 2021.5 for Adobe:_**

* Premiere Mocha - After cutting a clip with a mocha PixelChooser instance, no mocha renders in the second clip appear until you relaunch the mocha UI
* BCC+ - FX Editor - deleting custom presets did not in fact fully delete them
* BCC+Light - Displacement param shifted image while mouse down
* BCC+ - GPU errors (falling back to CPU) with some OS/GPU/Driver combinations
* BCC+ - Improved diagnostic logging
* BCC+Film Stocks should not comp vignette alpha
* Licensing - Improved license logging and license robustness
* Title studio - .blu files do not open automatically in Title Studio when double clicked, or when using the "open with" command
* Title Studio - Info Window - X/Y position displays inaccurate pointer location
* Particle Illusion - Discontinuity in emission points at time 0 for particles using preload.
* Particle Illusion - Reset Camera doesn't do anything
* Particle Illusion - Lines elements not drawn with motion blur
* Particle Illusion - When inside PI UI, post warning to user if they try to load a project created with a later version of the PI
* Particle Illusion - Incorrect position of new points in line emitter as count grows higher
* Particle Illusion - Deflectors crash after adding more than 24 points
* Particle Illusion - Windows - Missing top window bar to minimize or maximize when reopened on secondary monitor
* Particle Illusion - Render dialog "Full" doesn't use full project duration
* Particle Illusion - Emitters that don't start at frame 0 are wrong when added to library
* Particle Illusion - If you Rename a library emitter but hit "cancel" the "rename" dialog never repopulates with the current name
* Particle Illusion - Update some Fireworks emitters libraries to work better with alternate frame rates
* Particle Illusion - Line emitters drawn wrong in HUD when emitter is rotated
* Particle Illusion - Key navigation buttons do not initialize correctly for "over life" graphs
* Particle Illusion - Emitter with "Single Particle" causes deflector "break particles" to hang or add very long delays
* Particle Illusion - "Angle" parameters do not show y-axis values in graph view
* Particle Illusion - Point Force minimum radius can go larger than radius
* Particle Illusion - Improved Point Force radius mouse detection
* Particle Illusion - Reduce CPU/GPU usage when idle
* Particle Illusion - Preview will use motion blur at startup if project MB is turned on, regardless of preview MB setting
* Particle Illusion - Unexpected animation curves in graph editor
* Particle Illusion - Creating position keys can result in strange Bezier handle behavior in Stage
* Particle Illusion - Improved mouse click handling on numeric entry fields.
* Particle Illusion - Line emitters do not match HUD after 3D rotation
* Particle Illusion - Position Turbulence artifacts (gaps or "stair-stepping") when "Pos Turbulence Over Life" is animated
* Particle Illusion - Darken grid color for better HUD contrast

<span style="font-size: 1rem;"> </span>

**Continuum 2021.5 v14.5.0 (BCC 14.5.0) for Adobe After Effects and Adobe Premiere Pro was released on 6/21/2021.**

<span style="font-size: 1rem;"> </span>

**Continuum 2021.5 v14.5.0 for Adobe supports the following Adobe host applications:**

macOSX 10.13, 10.14, 10.15, 11.0, 11.1, 11.2, 11.3, 11.4 (as appropriate for the host version in use):  _(Intel chipsets only.  M1 / ARM chipsets are not supported in this version.)_

* Adobe After Effects and Premiere Pro CC 2018, CC 2019, 2020, 2021 (up to versions released at time of Continuum release) 

Windows 10 x64:

* Adobe After Effects and Premiere Pro CC 2018, CC 2019, 2020, 2021 (up to versions released at time of Continuum release) 

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2021.5 v14.5.0 for Adobe - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Due to UI optimization and expanded 3D support, some Particle Illusion projects may show shifts in some particle properties (although the look and feel should remain the same).
* As part of improving alpha support for many filters in the BCC+ Lights category (e.g. BCC+Rays, BCC+Glow, BCC+Lens Flare, and BCC+Streaks) the lighting will now by default expand into regions of zero or low alpha.  While this is generally the desired result, it can change the look of saved projects with these filters applied to alpha clips, so if necessary the you can dial back the alpha channel expansion by reducing the Affect Alpha parameter.

<span style="font-size: 1rem;"> </span>

**Continuum 2021.5 v14.5.0 for Adobe - Known Issues and Limitations:**

* CO-1298 - Mocha PixelChooser splines can render distorted or in the wrong location in filters that use "Avoid Clipping" or similar mechanisms to expand the source layer dimensions.  As a workaround the layer expansion should be done prior to the effect in a precomp.
* CO-2296 - The Hide Disabled Parameters preference exposes host-side UI refresh issues in AE and Premiere.  We are working with Adobe to resolve these issues.  As a workaround the Hide Disabled Parameters preference can be disabled to revert to "graying out" parameters instead of hiding them.
* CO-2344 - Title Studio - projects with Cinema 4D files that reference host tracks as textures can cause slow or stalled refreshes in Premiere.
* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-6682 - Optical Stabilizer does not stabilize correctly on trimmed clips in Premiere
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8475 - Particle Illusion - PI layer Sync with Ae 3D lost when using Y Rotation keyframes
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8678 - Particle Illusion - Layer widget disappears and particles do not render on stage for some high resolution projects at 5k+
* CO-8847 - Mac Installer Registration Dialog fails the installer if certain unicode characters were entered on a previous installer run
* CO-8858 - Particle Illusion - Ae does not refresh renders if PI is using mask / text via mask picker menu and the mask on an alternate layer is changed. (Change a param or purge cache to force refresh.)
* CO-9034 - Particle Illusion - Unexpected render differences in some projects between current and previous version
* CO-9208 - Particle Illusion - Center position Widget for line emitter not refreshing on non-0th frame correctly
* CO-9284 - AE - DOF mismatch between AE objects (like text layer) and particles
* CO-9281 - Particle Illusion - Some UI element manipulations can be slower to refresh than expected
* CO-9274 - Particle Illusion - 3D HUD box can display as distorted for some settings
* CO-9270 - Particle Illusion - phantom camera controls can appear after converting project from 2d to 3d
* CO-9247 - Particle Illusion - AE - selected 3D layer for emitters can change unexpectedly with multiple AE layers.  Using one layer at a time can be employed as a workaround.
* CO-9226 - Premiere Adjustment Layers can cause unexpected timing behavior in some setups.  We are working with Adobe to resolve this issue.
* CO-9219 - Particle Illusion - Make Super Emitter does not apply Position Turbulence and Size Turbulence correctly
* CO-9220 - Particle Illusion - Delete and Undo commands do not always execute when expected
* CO-9290 - Licensing - Occasionally the license activation tool does not pop up automatically after installation on Mac.  Re-running the installer should pop up the tool on the next run.
* CO-9176 - Particle Illusion - 3D rotation of line emitters particles do not match HUD

<div id="ext-gen9245"> </div>