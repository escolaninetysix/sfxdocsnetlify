{
"date": "2022-06-21T22:02:08.765Z",
  "title": "Continuum 2022.5 (v15.5.0) for OFX release notes",
  "description": "Continuum 2022.5 (v15.5.0) for OFX release notes"
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2022.5 (v15.5.0) for OFX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2022.5 for OFX (Summary of major changes since Continuum 2022):**

**5 New/Ported Fully GPU Accelerated BCC+ Effects**

* BCC+ Film Glow
* BCC+ Light Leaks
* BCC+ Magic Sharp
* BCC+ Radial Blur
* BCC+ Video Glitch


**15 New/Ported Fully GPU Accelerated BCC+ Dissolve Transitions**

* BCC+ Blur Dissolve
* BCC+ Camera Shake Dissolve
* BCC+ Channel Blur Dissolve
* BCC+ Crash Zoom Dissolve
* BCC+ Cross Zoom Dissolve
* BCC+ Directional Blur Dissolve
* BCC+ Dissolve
* BCC+ Film Glow Dissolve
* BCC+ Light Leaks Dissolve
* BCC+ Multi-Star Dissolve
* BCC+ Prism Dissolve
* BCC+ Rack Focus Dissolve
* BCC+ Rays Dissolve
* BCC+ Spin Blur Dissolve
* BCC+ Video Glitch Dissolve



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
  * Double click node elements for quick edits (particle gradients, color gradients, enable/disable)
  * New shortcuts (including Zoom to Fit for Stage view - ‘F’)
  * Menu and key shortcuts for Motion Blur and 3D/2D actions now update visual project modified indicator (asterisk after name in title bar).
  * “Project modified” asterisk indicator reliability including after undo/redo
  * Clean up where Play Range tooltip displays and hide it when double-click to reset Play Range
  * Add “Always Open All Parameters” preference. When checked (the default value) all parameters with children will be opened when displayed.



**FX Editor Enhancements**
* On-screen HUD Overlay Widgets inside the FX Editor
* Numerous Refinements to Window/Pane behavior
* Numerous UI Look and Feel Enhancements
* Improvements to Preset Saving workflow


**OFX HUD Overlay Widgets**
* On-screen HUD Overlay Widgets inside OFX hosts which support widgets (Resolve and Nuke)

**Faster BCC+ Rendering on Multi-threaded Hosts**
* Improved resource utilization in BCC+ filters in highly multi-threaded hosts yields big render speed gains - especially with complicated projects/stacked filters or Mocha PixelChooser.

**BCC+ Mocha / PixelChooser UI Rearrangement** 

* The Mocha Mask launch button and PixelChooser group are moved near the top of the UI for easier accessibility.


**Mocha for Continuum Update**
* Update to Mocha 2022.5 era enhancements:
  * New Surface Controls
    * Right-click Ratios: You can now set the surface ratio by right-clicking the surface
    * Right-click Align and Reset: You can align the surface or reset it to the spline.
    * Right-click view controls: You can turn off the insert and surface view
  * Track Preprocessing
    * Treat your clip before tracking to get optimal details in difficult shots. Pre-process gamma, contrast, blur etc.
  * Non-destructive gamma view
     * Adjust both brightness and gamma in the view controls without affecting the actual clip
  * BCC Point Tracking now supports Adjust Track


**BCC+ Camera Shake - New Geometry Controls**

* Control X and Y translation amounts independently
* Global Amplitude control for scaling all geometries with a single parameter
* Post-scale slider allowing additional zoom to hide edge conditions
* New presets


**Miscellaneous Feature Enhancements**

* New BCC+ Edge Mode controls have been added to:
  * BCC+ Camera Shake
  * BCC+ Lens Distortion
  * BCC+ Wide Angle Lens
  * BCC+ Transform
  * BCC+ Composite
  * BCC+ Film Grunge
  * BCC+ Borders
* New BCC+ Smear Blur presets
* BCC+ Directional Blur, BCC+ Channel Blur, and BCC+ Channel Blur YUV
  * Added Premultiply checkbox to control whether or not sources should be premultiplied. Useful at times on clips with alpha channels for example when blurring RGB channels by different blur amounts than the alpha channel.
* BCC+ Glow Edges
  * New alpha controls for refining how the glow interacts with alpha edges.
* BCC+ GPU Rendering Menu
  * Moved from the top of each effect to the bottom for more efficient UI layout.

**_Other Fixes and Polish in Continuum 2022.5 v15.5.0 for OFX:_:**

* BCC+ Camera Shake - Randomize param not working
* BCC+ Camera Shake - Expanded slider parameter ranges
* BCC+ PixelChooser - Ruby preview mask inverted
* BCC+ PixelChooser - View Chosen Pixels overlay generates unexpected color on out of range clips
* BCC+ PixelChooser : Overdrive feature is not working as expected (values outside 0-100)
* FX Editor - show thumbnails over black for Light, Diffusion, Textures, Ice Halos - so that the image textures can be easily visualized in the thumbs.
* FX Editor - Fix B-mode icon
* Licensing - Add support BCC+ Looks single-filter unit license
* BCC+ Lens Flare - extend the range of the Brightness parameter
* BCC+ Licensing - BCC+ Lens Flare to single premium filter unit
* Mac Uninstaller - request privileges (password) before removing anything
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
* Title Studio - address stability issues with certain OBJ model files
* Scratch - skip loading 3D Objects filters to address launch issues in Scratch

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 (v15.5.0) (BCC 15.5.0) for OFX was released on 6/21/2022.**

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 (v15.5.0) for OFX (OpenFX) officially supports the following host applications:**

_Note that Continuum OFX may work to varying degrees in other OFX hosts, but at this time it is only officially supported in Resolve, Vegas Pro, and Nuke.  Note that official Resolve support does not yet include the embedded Fusion page within Resolve.  Note that the Apple App Store version of Resolve is not fully supported and direct downloads of Resolve from the Blackmagic Design site should be used instead._

macOS 10.14, 10.15, 11.x, 12.x (up to OS version at time of Continuum release and as appropriate for the host version in use):    Note, Continuum 2022.5 v15.5.0 supports running natively on M1/ARM64 native chipsets for host versions which themselves support running natively on M1/ARM64.  \[Up to host versions released at time of Continuum release\]:

* DaVinci Resolve Studio and DaVinci Resolve 16.x, 17.x, 18.x
* Nuke 12, 13

Windows 10 x64 and Windows 11 \[Up to host versions released at time of Continuum release\]:

* DaVinci Resolve Studio and DaVinci Resolve 16.x, 17.x, 18.x
* 16, 17, 18, 19 (Magix)
* Nuke 12, 13 (4k monitor support on windows requires Nuke 12.1 or higher)

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 (v15.5.0) for OFX - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Particle Illusion 3D environment enhancements may cause some projects to render with individual particle differences, although the overall look and feel should remain the same.

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 (v15.5.0) for OFX - Known Issues and Limitations:**

* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-9244 - 3D Objects category of filters including Title Studio are disabled on macOS Resolve due to technical difficulties with that host.
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-9511 - BCC+ Vignette renders differently between CPU and GPU on mixed sized clips in Vegas
* CO-9789 - Nuke only: Some presets not applying correctly when the y param is set to 200
* CO-10220 - BCC+ Crash Zoom Dissolve - angle animation is not as smooth as it should be
* CO-10213 - FX Editor preview sometimes shows incorrect colors after changing OCIO colorspace multiple times
* CO-10693 - Particle Illusion - movement restricted to wrong plane in Top, Left view
* CO-9963 - Title Studio - C4D import not supported on native M1

<div id="ext-gen9245"> </div>