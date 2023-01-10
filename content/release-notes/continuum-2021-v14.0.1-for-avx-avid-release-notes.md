{
  "title": "Continuum 2021 (v14.0.1) for AVX - Avid - Release Notes",
  "date": "2020-12-16T17:01:00-05:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2021 (14.0.1) for Avid AVX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2021 (v14.0.1) is a maintenance update to Continuum 2021 (v14.0.0) and is free to licensed users of Continuum 2021.  It includes several important fixes and enhancements (see below).  For a full list of what's new between Continuum 2021 and the previous Continuum 2020.5 major release please refer to the initial 2021 release notes here:

[Continuum 2021 (v14.0.0) for AVX - Avid - Release Notes](/release-notes/continuum-2021-v14.0.0-for-avx-avid-release-notes/)

<span style="font-size: 1rem;"> </span>

**Feature Enhancements in 2021 (v14.0.1) Update for AVX - Avid:**

**Particle Illusion Performance:**

* Depth Of Field performance and quality.  AMD cards now perform MUCH faster than they did in the past.
* PI UI Performance - Faster refresh when stepping or jumping forward in the timeline when inside the PI UI.
* Improved render performance in projects with Free Emitters when Turbulence is not being used.

**Title Studio - Font Menus:**

* Title Studio font menus can now draw using the actual fonts.  To enable this, turn on the option in the Title Studio prefs and then restart the host.

**Title Studio - New C4D Model:**

* New Background_LowPoly_Rock1.c4d model included with main installer.  And don't forget that there are more free C4D models available for download on our website!

<span style="font-size: 1rem;"> </span>

**Fixes and Polish in 2021 (v14.0.1) Update for AVX - Avid:**

* BCC+ Filters - AVX - Fix video range handling in float projects so results in float projects match 8/16bit.
* BCC+ Harris Shutter - AVX - Mismatch between 8/16bit and float results
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

**Continuum 2021 (v14.0.1) (BCC 14.0.1) for Avid AVX was released on 12/15/2020.**

<span style="font-size: 1rem;"> </span>

**Continuum 2021 (v14.0.1) for Avid AVX supports the following host applications:**

Macintosh:

* Avid Media Composer 8.x, 2018.x, 2019.x, 2020.x (up to avid versions released at time of Continuum release) and running macOS 10.13, 10.14, 10.15 (as appropriate for the host version in use):

Windows:

* Avid Media Composer 8.x, 2018.x, 2019.x, 2020.x (up to avid versions released at time of Continuum release) and running Windows 7 Professional (64-bit) and Windows 10 (as appropriate for the host version in use).

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2021 v14.0.1 for AVX - Avid - New BCC+ Filter Integration Notes:**

You will notice several differences between the new BCC+ filters and the existing BCC effects in the 2021 cycle.  Several standard Continuum features and workflow metaphors have not yet been added to the new filters.  We will continue to refine the integration in future versions:

* The new filters do not support the PixelChooser, Mocha Masking and Tracking, Compare Mode, Beat Reactor, or Head Up Display widgets.
* The new filters use the new FX Editor preset browser, while the old filters will continue to use the original FX Browser.
* The new filters do all preset loading/saving from within the FX Editor.  There are no native host controls for loading/saving/browsing presets.
* The new filters do not appear in the standalone FX Browser filter
* The new filters do not support applying to Title Mattes in Avid and they do not support several of the standard Continuum AVX UI metaphors such as Safe Levels and Bypass.

<span style="font-size: 1rem;"> </span>

**Continuum 2021 (v14.0.1) for AVX - Avid - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Fixes to the Particle Illusion layer order may affect the look of old projects if they contained multiple layers inside the Particle Illusion UI (not common).  Layers cannot be reordered at this time.
* Fixes to the Particle Illusion Particle Type handling may slightly affect the look of old projects, particularly if they used multiple Particle Type instances.  The exact randomization pattern may be different, but the overall look and feel should remain the same.
* Fixes to the Particle Illusion Depth of Field performance and quality may affect the look of previous 3D projects that used Depth of Field.  In particular the blur amount might need to be tweaked to achieve a closer match to the previous result.
* Fixes to the Particle Illusion Turbulence when combined with Deflectors/Forces may affect the locations of particles in some projects.
* Fixes to levels in 32bit float renders (in the BCC+ filters only) can cause shifts in levels compared to V14.0.0 results.

<span style="font-size: 1rem;"> </span>

**Continuum 2021 (v14.0.1) for AVX - Avid - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8319 - Particle Illusion - Missing top window bar to minimize or maximize when reopened on secondary monitor in some circumstances.
* CO-8319 - Particle Illusion - Missing top window bar to minimize or maximize when reopened on secondary monitor in some circumstances.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8608	- Particle Illusion - DOF sometimes produces more blur than is expected
* CO-8606	- The old Multi-Filter parameter options appear in UI when "Apply to Title-Matte" is checked in new effects, but these params should only appear when opening legacy timelines.

<div id="ext-gen9245"> </div>