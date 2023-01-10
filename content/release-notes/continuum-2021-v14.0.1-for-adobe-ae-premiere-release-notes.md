{
  "title": "Continuum 2021 (v14.0.1) for Adobe AE/Premiere - Release Notes",
  "date": "2020-12-16T17:00:00-05:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2021 (14.0.1) for Adobe After Effects and Adobe Premiere  - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2021 (v14.0.1) is a maintenance update to Continuum 2021 (v14.0.0) and is free to licensed users of Continuum 2021.  It includes several important fixes and enhancements (see below).  For a full list of what's new between Continuum 2021 and the previous Continuum 2020.5 major release please refer to the initial 2021 release notes here:

[Continuum 2021 (v14.0.0) for Adobe Release Notes](/release-notes/continuum-2021-v14.0.0-for-adobe-ae-premiere-release-notes/)

<span style="font-size: 1rem;"> </span>

**Feature Enhancements in 2021 (v14.0.1) Update for AE / Premiere:**

**macOS 11.0 Big Sur Support:**

* macOS 11.0 Big Sur is now supported in all host versions which themselves support Big Sur.

**Particle Illusion Performance:**

* Depth Of Field performance and quality.  AMD cards now perform MUCH faster than they did in the past.
* PI UI Performance - Faster refresh when stepping or jumping forward in the timeline when inside the PI UI.
* Improved render performance in projects with Free Emitters when Turbulence is not being used.

**Title Studio - Font Menus:**

* Title Studio font menus can now draw using the actual fonts.  To enable this, turn on the option in the Title Studio prefs and then restart the host.

**Title Studio - New C4D Model:**

* New Background_LowPoly_Rock1.c4d model included with main installer.  And don't forget that there are more free C4D models available for download on our website!

<span style="font-size: 1rem;"> </span>

**Fixes and Polish in 2021 (v14.0.1) Update for Adobe After Effects + Adobe Premiere:**

* Premiere Windows 4k display - button icons in Premiere's effect controls panel appeared too large and overlapping on High-DPI displays
* Update to latest Mocha libs
* Licensing - Diagnostic logging improvements
* Licensing - Fix minor problems with Units licensing in Safe Colors OBS, Boost Blend OBS, and Optical Stabilizer
* Film Grain, Film Damage, Two Strip Color - fix vertical streaking patterns (non-randomness) in grain
* BCC+ License Dialog - change default selection of dialog to Cancel instead of Activate to avoid confusion
* Motion Blur - Fix Max Velocity control in Float renders
* Motion Key - Position/Offset point control not working
* FX Browser - Home/End and Page Up/Page Down keyboard shortcuts enabled for timeline navigation
* FX Browser - Close button is small on 4k monitors
* FX Browser - Does not reliably refresh preview pane when using arrow keys to change selected presets
* Title Studio - Track Rename is cut off on 4K monitors
* Title Studio - C4D object disappears when Procedural texture is applied
* Title Studio - Mac - Mark out keyboard shortcut "O" does not work
* Title Studio - Refresh issue in comp window
* Title Studio - Mouse pointer gets stuck as text tool when toggling between text tool and arrow tool
* Title Studio - Basic Styles - improve legibility of text
* Title Studio - Doesn't Purge the the Frame Cache when you manually change the PAR
* Title Studio - Resolution setting in TS causing text to be resized in host
* Title Studio - Moving keyframes in time is not functioning as expected when multiple tracks are selected
* Title Studio - Rings preset has unexpected alpha in some frames in fx browser
* Title Studio - Deleting certain sub-tracks can crash
* Particle Illusion - When deflector breaks particles into 2 pieces, they don't get random velocities
* Particle Illusion - Playback toolbar next/previous key buttons are always enabled
* Particle Illusion - Include version info in mac app bundle so Get Info shows correct version details
* Particle Illusion - Circle/Ellipse emitters create particles in clumps instead of smoothly distributed around the circle
* Particle Illusion - Motion blur calculation does not take into account camera motion
* Particle Illusion - Some 3D views are black or half rendered when motion blur is turned on
* Particle Illusion - New play bar layout can overlap on smaller resolution screens
* Particle Illusion - Position Turbulence causes particles to go through deflector
* Particle Illusion - Switching to Top View can cause crashing on macOS 10.13.6
* Particle Illusion - When parameter selection is changed by clicking on value, graph view does not update
* Particle Illusion - Particles are "clumping" in super emitters
* Particle Illusion - Camera + widget in non-Render Views does not show correct orientation
* Particle Illusion - AE camera and built-in camera results do not match (sort order reversal with AE camera)
* Particle Illusion - Cannot un-star more than 1 favorite emitters without reselecting the emitter
* Particle Illusion - Emitter search control font size tweak
* Particle Illusion - Emitter unmarked as favorite comes up as marked favorite upon relaunch of PI.
* Particle Illusion - Tweak text formatting issue in Preferences
* Particle Illusion - Fix Alt+Click to add new line point along line emitter segment
* Particle Illusion - Fix keyboard modifiers for stage interactor widgets
* Particle Illusion - Motion blur in render view can cause recursive drawing
* Particle Illusion - Line emitter emission angle incorrect
* Particle Illusion - Playback toolbar next/previous key buttons are always enabled
* Particle Illusion - Adding points to line emitters does not create particles in the new segments
* Particle Illusion - When using Comp Camera, 2D/3D button should be set to 3D and disabled
* Particle Illusion - Camera XYZ and zoom values in position mode are not the same as in orbit and pan modes resulting in difference in render result
* Particle Illusion - When emitter position Z value is non-zero, dragging emitter on stage sets it to 0
* Particle Illusion - Shaped emitters with non-zero "Angle" parameter draw HUD in wrong position
* Particle Illusion - HUD doesn't update for Force object position when at frame 0
* Particle Illusion - Native scale/rotate controls cause particles to incorrectly shift away from correct location
* Particle Illusion - Stage Widgets are in wrong place (zoomed) relative to underlying image features when monitor display is at 100% scaling
* Particle Illusion - Disable use of the "Preserve Color" option in 3D projects since it is a 2D-only compositing option.
* Particle Illusion - Bezier curves in Graph view now more accurately match actual interpolated values, particularly for Over Life params
* Particle Illusion - Fix errors with motion tracking applied to emitters location
* Particle Illusion - When in 3D views other than Render, ghost particles can appear when animating.
* Particle Illusion - Particle sprites are not scaling correctly with camera zoom
* Particle Illusion - Undo of line emitter deletion does not put point back in correct position

<span style="font-size: 1rem;"> </span>

**Continuum 2021 v14.0.1 (BCC 14.0.1) for Adobe After Effects and Adobe Premiere Pro was released on 12/15/2020.**

<span style="font-size: 1rem;"> </span>

**Continuum 2021 v14.0.1 for Adobe supports the following Adobe host applications:**

macOSX 10.13, 10.14, 10.15, 11.0 (as appropriate for the host version in use):

* Adobe After Effects and Premiere Pro CC 2015, 2017, CC 2018, CC 2019, and 2020

Windows 7 x64, Windows 10 x64 \[recommended\] (as appropriate for the host version in use):

* Adobe After Effects and Premiere Pro CC 2015, 2017, CC 2018, CC 2019, and 2020

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2021 v14.0.1 for Adobe - New BCC+ Filter Integration Notes:**

You will notice several differences between the new BCC+ filters and the existing BCC effects in the 2021 cycle.  Several standard Continuum features and workflow metaphors have not yet been added to the new filters.  We will continue to refine the integration in future versions:

* The new filters do not support the PixelChooser, Mocha Masking and Tracking, Compare Mode, Beat Reactor, or Head Up Display widgets.
* The new filters use the new FX Editor preset browser, while the old filters will continue to use the original FX Browser.
* The new filters do all preset loading/saving from within the FX Editor.  There are no native host controls for loading/saving/browsing presets.
* The new filters do not appear in the standalone FX Browser filter

<span style="font-size: 1rem;"> </span>

**Continuum 2021 v14.0.1 for Adobe - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Fixes to the Particle Illusion layer order may affect the look of old projects if they contained multiple layers inside the Particle Illusion UI (not common).  Layers cannot be reordered at this time.
* Fixes to the Particle Illusion Particle Type handling may slightly affect the look of old projects, particularly if they used multiple Particle Type instances.  The exact randomization pattern may be different, but the overall look and feel should remain the same.
* Fixes to the Particle Illusion Depth of Field performance and quality may affect the look of previous 3D projects that used Depth of Field.  In particular the blur amount might need to be tweaked to achieve a closer match to the previous result.
* Fixes to the Particle Illusion Turbulence when combined with Deflectors/Forces may affect the locations of particles in some projects.

<span style="font-size: 1rem;"> </span>

**Continuum 2021 v14.0.1 for Adobe - Known Issues and Limitations:**

* CO-1298 - Mocha PixelChooser splines can render distorted or in the wrong location in filters that use "Avoid Clipping" or similar mechanisms to expand the source layer dimensions.  As a workaround the layer expansion should be done prior to the effect in a precomp.
* CO-2296 - The Hide Disabled Parameters preference exposes host-side UI refresh issues in AE and Premiere.  We are working with Adobe to resolve these issues.  As a workaround the Hide Disabled Parameters preference can be disabled to revert to "graying out" parameters instead of hiding them.
* CO-2344 - Title Studio - projects with Cinema 4D files that reference host tracks as textures can cause slow or stalled refreshes in Premiere.
* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-6682 - Optical Stabilizer does not stabilize correctly on trimmed clips in Premiere
* CO-8319 - Particle Illusion - Missing top window bar to minimize or maximize when reopened on secondary monitor in some circumstances.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8475 - Particle Illusion - PI layer Sync with Ae 3D lost when using Y Rotation keyframes
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8608	- Particle Illusion: DOF sometimes produces more blur than is expected

<div id="ext-gen9245"> </div>