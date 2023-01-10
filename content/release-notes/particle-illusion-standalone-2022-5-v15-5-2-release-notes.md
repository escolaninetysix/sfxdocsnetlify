{
"date": "2022-08-17T05:00:36.230Z",
  "title": "Particle Illusion Standalone 2022.5 (v15.5.2) - Release Notes",
  "description": "Particle Illusion Standalone 2022.5 (v15.5.2) - Release Notes"
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Particle Illusion Standalone 2022.5 (15.5.2) - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Particle Illusion Standalone 2022.5 (Summary of major changes since Particle Illusion Standalone 2022):**

**_Feature Enhancements:_**

**Particle Illusion Enhancements**

* Emit from 3D Models (C4D/OBJ)
  * You can now import C4D or OBJ 3D model files to define 3D emitter shapes.
* Enhanced 3D HUD Widgets
  * Full revamp of 3D HUD widget system for interacting with your 3D scenes.
* New 2022.5 Emitter Library
* Numerous UI Refinements
  * Recent Files list
  * File Revert option
  * Look and Feel tweaks/cleanup to Save to Emitter Library, Rename Emitter Library, Rename Item, Frame Rate and Pixel Aspect Ratio display, Preferences dialog, Project Settings dialog, Shape Editor dialog
  * Click Duration in playback toolbar to open project settings
  * Click Stage dimensions text (above stage) clickable, opening the Project Settings dialog.
  * Import Shape radio button selection clarification
  * double click node elements for quick edits (particle gradients, color gradients, enable/disable)
  * new shortcuts (including Zoom to Fit for Stage view - ‘F’)
  * Menu and key shortcuts for Motion Blur and 3D/2D actions now update visual project modified indicator (asterisk after name in title bar).
  * “Project modified” asterisk indicator reliability including after undo/redo
  * Clean up where Play Range tooltip displays and hide it when double-click to reset Play Range
  * Add “Always Open All Parameters” preference. When checked (the default value) all parameters with children will be opened when displayed.




**_Other Fixes and Polish:_**

* Particle Illusion - Always enable HUD on UI start
* Particle Illusion - Set min HUD transparency to 10 to avoid confusion over them disappearing unexpectedly
* Particle Illusion - Improved memory efficiency
* Particle Illusion - Fix for deleting shapes from libraries
* Particle Illusion - Prevent UI from opening as hidden after corrupted prefs
* Particle Illusion - Switch 3D coordinates from a left handed system to a more conventional right handed coordinate system. This better matches typical 3D graphics conventions.  Older projects will continue to use the left-handed system.
* Particle Illusion - Tweak text of Action menu items.
* Particle Illusion - Improved look of About Box
* Particle Illusion - Some checkable menu items do not update correctly. Loop Play (Action menu) and 3D Project (Stage menu) did not update their “checked” state.
* Particle Illusion - Add “Add a Deflector” and “Add a Force” menu items to Action menu. * Particle Illusion - Add “World Coords” menu item to Stage menu.
* Particle Illusion - Selected node outline color darkens on disabled nodes.
* Particle Illusion - Icon and shape image in disabled nodes now draw darker for improved visual clarity.
* Particle Illusion - Improved memory usage when native Particle Properties params changed
* Particle Illusion - Add Camera Controls text in node view which updates to indicate when being used
* Particle Illusion - Improved window restore when reopened on multi-monitor configs
* Particle Illusion - Improved button color and down state when preview buttons pressed
* Particle Illusion - Fix errors when launching PI UI from host with large image sizes
* Particle Illusion - Eliminate visual jumping of particle count display as number of particles changes

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2022.5 (v15.5.2) was released on 8/17/2022.**

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2022.5 (v15.5.2) supports the following platforms:**

* macOSX 10.14, 10.15, 11.x, 12.x (up to OS version at time of Continuum release and as appropriate for the host version in use).  Particle Illusion 2022.5 is a "universal" application and runs natively on either Intel or arm64 Apple Silicon hardware.

* Windows 10 x64, Windows 11:

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Particle Illusion.

* Detailed help documentation is available on the Boris FX website: [Particle Illusion Documentation](/documentation/continuum/bcc-particle-illusion/ "BCC Help Documentation")
* [BorisTV](/videos/) video tutorials cover a huge range of topics from initial introductions, to deep training Webinar Replays, to in-depth looks at specific techniques.  It contains an extensive series of videos on all aspects of Particle Illusion.

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2022.5 (v15.5.2) - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Particle Illusion 3D environment enhancements may cause some projects to render with individual particle differences, although the overall look and feel should remain the same.

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2022 (v15.0.2) - Known Issues and Limitations:**

* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)


<div id="ext-gen9245"> </div>