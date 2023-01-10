{
  "title": "Particle Illusion Standalone 2021 (v14.0.2) - Release Notes",
  "date": "2021-01-26T17:00:00-05:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Particle Illusion"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Particle Illusion Standalone 2021 (14.0.2) - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Particle Illusion Standalone 2021 (Summary of major changes since Particle Illusion Standalone 2020.5):**

**_Enhancements:_**

* 3D
  * Emit particles in a 3D environment
* Turbulence
  * Add organically evolving randomized variation to particle Size and Position based on a noise map field.
* Lines
  * Add Lines connecting particles to each other, to their emitter location, or to their birth position for a wide range of new looks.
* Deflector - Randomization
  * Particles can now pick up variable randomization in their bounce pattern after colliding with a deflector to give a much more natural scattering effect.
* Deflector - Particle Break
  * Particles can now break into separate sub-particles after hitting a deflector.
* Updated Library View
  * The Library View in the emitter browsing pane (as opposed to the Grid and Thumbnail views) has been refactored to be cleaner and easier to use.
* macOS 11.0 Big Sur Support
  * macOS 11.0 Big Sur is now fully supported on Intel processors.  (M1 ARM-based processors are not supported at this time.)
* New "Emitters_2021" Emitter Library and Presets
* Other PI Enhancements
  * Faster refresh when stepping or jumping forward in the timeline
  * Expose random seed parameters for particle types and free emitter types
  * Add motion blur frames indicator to particle count display
  * Added Pref for disabling the Render Finished chime
  * Added Pref for default keyframe type
  * Default to Grid view for new installs
  * Added Menu command for File->Render
  * Stage / Playback UI - updated layout and look
  * When a stage emitter is selected in the Controls View, the "Return/Enter" key initiates "Rename"
  * Add pref to show or hide stage/project info
  * Force and Deflector buttons now act as auto-toggles which instantly add an element to the timeline to avoid confusion
  * Alt-click on stage position keys toggles linear/bezier like in graph view

**_Other Fixes and Polish:_**

* Particle Illusion - Fix jump in selection when marking an emitter as favorite (when not actually filtering on favorites-only)
* Particle Illusion - Particle order does not appear to do anything for super emitters
* Particle Illusion - Blue render progress stops just short of 100% when exporting (even though it has actually succeeded in fully completing the export).
* Particle Illusion - Layers are drawing in reverse order
* Particle Illusion - Mac - improved retention of UI layout when closing + reopening the UI
* Particle Illusion - Preview Background composite popup menu options are chopped off in PI UI
* Particle Illusion - Shaped emitters stop creating any particles when Number value is too high
* Particle Illusion - Erratic window placement/sizing when closing and reopening the PI GUI
* Particle Illusion - Duplicating a particle type does not result in the same particle pattern in both
* Particle Illusion - Fix Search behavior with multiple search terms and when Favorites enabled
* Particle Illusion - When moving the 2nd deflector point, it will get joined together with the first deflector
* Particle Illusion - Keyframe interpolation pop-up menu - interpolation icons are offset to the right making the text unreadable
* Particle Illusion - When preload is not 0 the Start frame is not working correctly
* Particle Illusion - Shape import dialog layout issue
* Particle Illusion - Change the default emitter radX and radY from 10 to 100 when an emitter is first initialized
* Particle Illusion - Undo twice is required if entering param values by keyboard and pressing enter
* Particle Illusion - Double particles drawn (after start bar is moved)
* Particle Illusion - Double-clicking Start Frame Bar doesn't move keys
* Particle Illusion - Smaller font size on HighDPI Windows monitors
* Particle Illusion - Alt clicking on motion path keyframe doesn't work when CTI is parked on the keyframe
* Particle Illusion - Line emitters get corrupted when angle is not 0 and other emitters are changed
* Particle Illusion - Single Particle Emitters like La Luna have separation between primary and secondary particles when position transforms are used
* Particle Illusion - UI does not remember user selected monitor in multi-monitor setups
* Particle Illusion - Include version info in mac app bundle so Get Info shows correct version details
* Particle Illusion - Circle/Ellipse emitters create particles in clumps instead of smoothly distributed around the circle
* Particle Illusion - When parameter selection is changed by clicking on value, graph view does not update
* Particle Illusion - Particles are "clumping" in super emitters
* Particle Illusion - Cannot un-star more than 1 favorite emitters without reselecting the emitter
* Particle Illusion - Emitter search control font size tweak
* Particle Illusion - Emitter unmarked as favorite comes up as marked favorite upon relaunch of PI.
* Particle Illusion - Tweak text formatting issue in Preferences
* Particle Illusion - Fix Alt+Click to add new line point along line emitter segment
* Particle Illusion - Line emitter emission angle incorrect
* Particle Illusion - Shaped emitters with non-zero "Angle" parameter draw HUD in wrong position
* Particle Illusion - HUD doesn't update for Force object position when at frame 0
* Particle Illusion - Stage Widgets are in wrong place (zoomed) relative to underlying image features when monitor display is at 100% scaling
* Particle Illusion - Bezier curves in Graph view now more accurately match actual interpolated values, particularly for Over Life params
* Particle Illusion - Undo of line emitter deletion does not put point back in correct position

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2021 (v14.0.2) was released on 1/26/2021.**

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2021 (v14.0.2) supports the following platforms:**

macOS 10.13, 10.14, 10.15, 11.0:

Windows 10 x64:

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Particle Illusion.

* Detailed help documentation is available on the Boris FX website: [Particle Illusion Documention](/documentation/continuum/bcc-particle-illusion/ "BCC Help Documentation")
* [BorisTV](/videos/) video tutorials cover a huge range of topics from initial introductions, to deep training Webinar Replays, to in-depth looks at specific techniques.  It contains an extensive series of videos on all aspects of Particle Illusion.

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2021 (v14.0.2) - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Fixes to the Particle Illusion layer order may affect the look of old projects if they contained multiple layers inside the Particle Illusion UI (not common).  Layers cannot be reordered at this time and adding additional layers is not longer supported.
* Fixes to the Particle Illusion Particle Type handling may slightly affect the look of old projects, particularly if they used multiple Particle Type instances.  The exact randomization pattern may be different, but the overall look and feel should remain the same.

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2021 (v14.0.2) - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - Custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8319 - Particle Illusion - Missing top window bar to minimize or maximize when reopened on secondary monitor in some circumstances.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8678 - Particle Illusion - Layer widget disappears and particles do not render on stage for some high resolution projects at 5k+
* CO-8659 - Particle Illusion - Window - Cannot edit text for Export Range field values etc. if Render window is opened from File menu unless other elements are edited first.  Opening the Render dialog from the Render button in the Stage view does not have this issue.

<div id="ext-gen9245"> </div>