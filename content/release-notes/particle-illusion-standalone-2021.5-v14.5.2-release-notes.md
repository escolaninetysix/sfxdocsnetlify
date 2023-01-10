{
  "title": "Particle Illusion Standalone 2021.5 (v14.5.2) - Release Notes",
  "date": "2021-07-30T17:00:00-04:00",
  "description": "Particle Illusion Standalone 2021.5 (v14.5.2) - Release Notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Particle Illusion"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Particle Illusion Standalone 2021.5 (14.5.2) - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Particle Illusion Standalone 2021.5 (Summary of major changes since Particle Illusion Standalone 2021):**

**_Enhancements:_**

* Node View
  * See a graphical node representation of complex emitter stacks and quickly view just the parameters desired for a particular element.
* Performance optimization
  * Faster rendering and previews
* UI performance cache
  * Particle caching allows instant scrubbing backward and forward inside the PI UI for any frame you’ve already calculated.
* 3D Emission Controls
  * Control 3D emission angles for all emitters
* 3D Basic Shape Emitter
  * Emit from 3D Planes, Spheres, and Cuboids
* 3D Forces
  * Forces have been extended to work in true 3D space
* Graph View Redesign
  * Zoom + Pan in the graph view for precise editing of keyframes even on long timelines
  * Improved graph editing interface
* Emit from After Effects Masks or Text
  * Take emitter path location from After Effects host Mask or Text outlines.
  * Trace masks either sequentially or with simultaneous cloned emitters for each mask.
* New "Emitters_2021.5" Emitter Library
* Other PI Enhancements
  * Add “Uniform Spacing” option for non-randomized particle birth location
  * Turbulence Auto-Evolve Speed - larger max range
  * Performance improvements rendering in host for some projects
  * “Number of Each Color” - larger max range
  * When no Favorites are present but filtering is set to show Favorites, show explanatory message
  * Numerous UI tweaks

**_Other Fixes and Polish:_**

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

**Particle Illusion Standalone 2021.5 (v14.5.2) was released on 7/30/2021.**

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2021.5 (v14.5.2) supports the following platforms:**

macOSX 10.14, 10.15, 11.0, 11.1, 11.2, 11.3, 11.4:  _(Intel chipsets only.  M1 / ARM chipsets are not officially supported in this version, although Particle Illusion may be largely usable under Rosetta2 emulation mode.)_

Windows 10 x64:

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Particle Illusion.

* Detailed help documentation is available on the Boris FX website: [Particle Illusion Documention](/documentation/continuum/bcc-particle-illusion/ "BCC Help Documentation")
* [BorisTV](/videos/) video tutorials cover a huge range of topics from initial introductions, to deep training Webinar Replays, to in-depth looks at specific techniques.  It contains an extensive series of videos on all aspects of Particle Illusion.

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2021.5 (v14.5.2) - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Due to UI optimization, performance optimizatioin, and expanded 3D support, some Particle Illusion projects may show changes in certain particle properties (although the general look and feel should remain the same).

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2021.5 (v14.5.2) - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8678 - Particle Illusion - Layer widget disappears and particles do not render on stage for some high resolution projects at 5k+
* CO-8847 - Mac Installer Registration Dialog fails the installer if certain unicode characters were entered on a previous installer run
* CO-9281 - Particle Illusion - Some UI element manipulations can be slower to refresh than expected
* CO-9274 - Particle Illusion - 3D HUD box can display as distorted for some settings
* CO-9270 - Particle Illusion - phantom camera controls can appear after converting project from 2d to 3d
* CO-9401 - Particle Illusion - Sphere Force radius incorrect when camera rotates in Z
* CO-9427 - Particle Illusion - Cross-hair to add additional points to line emitter may not align with the line

<div id="ext-gen9245"> </div>