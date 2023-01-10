{
  "title": "Continuum 2020.5 (v13.5.0) for OFX - Release Notes",
  "date": "2020-05-02T17:02:00-04:00",
  "description": "Continuum 2020.5 (v13.5.0) for OFX release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2020.5 (v13.5.0) for OFX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2020.5 for OFX - OpenFX (Summary of major changes since Continuum 2020):**

**_New Crash Zoom Dissolve Transition:_**

* High energy, smooth zoom in or out while dissolving to the new layer.

**_New Spin Blur Dissolve Transition:_**

* Rapid image rotation or spin/spiral blur while dissolving to the new layer.

**_Particle Illusion Enhancements:_**

* New "Emitters_2020.5" Emitter Library
* New Presets
* Force Field Grid
  * New force geometry offering a huge array of new dynamic and organic particle motion behaviors.
* Force Point
  * New circularly symmetric attractor/deflector force type for sculpting and animating particle motion geometry.
* Favorites Tag for Emitters
  * Mark your top emitters as Favorites and then filter to quickly see just the Favorites. (Grid and List views only)
* Faster UI Interactivity
  * Faster scrubbing of widgets, parameters, graph view controls, and CTI - especially for more complex projects
* Numerous UI Improvements
  * Graph View bezier keyframe improvements
  * Emitter controls retain their twirl/untwirl state when re-opened
  * Selecting library emitter restarts preview playback
  * Ctrl/Cmd+Click on Keyframes to delete them
  * Alt/Option+Click on Keyframes to toggle between linear and bezier interpolation
  * Wider range for all width and height parameters
  * Mouse wheel, trackpad scrolling, and pinching to zoom the Emitter Preview window
  * UI indicator to show when a frame is still processing.
  * Numerous other UI tweaks
* Mocha Parameter Tracking Refinement
  * Disabled point layers now default to hidden/disabled inside the Mocha UI for simpler tracking experience

**_Title Studio Enhancements:_**

* Integrated Cast Shadow shader
* 4k / HighDPI monitor support on Windows
* Native Composite controls with Apply Modes, Opacity, and Brightness available back in the native host’s UI. You can now apply directly to the clip instead of applying to a filler track.
* Seven new bundled C4D models and new presets illustrating their use
* Improved support for macOS 10.15 (Catalina)
* UI tweaks

**_Mocha 2020.5 Enhancements:_**

* Track planes that can move behind the camera
* Area Brush - adjust brush size by holding down cmd/ctrl and dragging mouse to rescale brush size
* Area Brush - fill gaps feature with configurable fill size
* Magnetic edge snapping improvements - snap multiple points at a time
* Faster rendering of motion blur masks
* OCIO color management improvements
* Improved support for macOS 10.15 (Catalina)
* UI tweaks

**_Remover Enhancements:_**

* Mocha Parameter Tracking for Spot Clone mode
* Source / Destination Widgets for Spot Clone Mode
* Relative Offset Widget for Shape Clone Mode
* Absolute vs. Relative Offset option for Spot Clone mode
* Clone Color / Clone Detail frequency separation tuning controls

**_FX Browser  Enhancements:_**

* 4k / HighDPI monitor support on Windows

**_Prism and Prism Dissolve Performance:_**

* Render up to 2x faster.

**_Other Enhancements:_**

* Additional 4k / HighDPI / Retina monitor improvements:
  * Primatte Toolbar
  * License and Prefs panes
  * License Activation Tool
* Particle Illusion Dissolve - two new presets
* Particle Illusion Dissolve - Added Region Animation group
* Cast Shadow - Added Apply Modes menus (to Built in Light and Comp Light groups)
* Light Leaks Dissolve - Added Color group
* Saturation Peak Added to all dissolve transitions Color group
* Prism Amount control added to Prism and Prism Dissolve
* Layer Deformer - add multiple materials option to map media to each face independently
* Vignette - Improved Softness control with more intuitive behavior for large values and ability to control the shape of the fall-off ramp
* Preference /Environment Variable to allow floating server render-only machines to be configured to ONLY consume render-only licenses and never full GUI licenses

**_Other Fixes and Polish in Continuum 2020.5_:**

* OFX Memory Utilization - fix excess memory usage when rendering some filters such as Primatte Studio in some OFX hosts such as Resolve
* 3D Objects - OFX - error loading native extrusion style or material presets in 3D Objects filters other than Title Studio
* Nuke - Fix errors re-opening Rays Wedge projects in Nuke
* Licensing - Fix a rare licensing issue on machines where some disks are only visible to admin users.
* Licensing - Mac Dongle licensing failure.
* Licensing - Protect against rare loss of license with multiple machines running with certain cloned drive configurations.
* Remover - Improved cloning of alpha regions (reduced edge artifacts)
* Remover - If method is set to one of the Auto-Fill options, don't change method to Clone Shape after launching Mocha in the PixelChooser
* Remover, Corner Pin Studio, and Witness Protection - Turn off PixelChooser overlay widgets if the effect is in a mode that completely disables the PixelChooser.
* Dissolve Transitions: better match between 8/16/float bitdepth results when using Color boost params such as Brightness and Contrast
* Layer Deformer - Curl Deformer reverse direction does not work
* OpenCL Preferences setting - Integrated Glow still uses the GPU even when the Enable OpenCL pref was turned off
* Integrated Glow group (in Particle Illusion, Reframer, Beauty Studio, Light Leaks) - glow radius did not auto-scale with clip resolution causing presets to look different on HD vs 4k if they used the glow feature prominently.  Old projects with integrated glow might need to tweak the glow radius when reopened in the new version.  (This does NOT affect Fast Film Glow or Fast Film Glow Dissolve).
* Logging - Resolve Transitions clutter up BCC log with spurious messages.
* Logging - Improved license diagnostic logging.
* Logging - Cross Glitch - remove false errors in log.
* Particle Illusion - Keyframe interpolation type not displayed correctly in pop-up
* Particle Illusion - Moving bezier handle on position key can result in invalid values and unusable position path
* Particle Illusion - Cut/Paste emitter from one layer to another can crash
* Particle Illusion - Inconsistent menu text look and size in some parts of the UI
* Particle Illusion - Dragging a point on a line emitter causes all points on the line to become repositioned
* Particle Illusion - Only one internal PI layer will render back in the host
* Particle Illusion - Can't change project duration in standalone mode
* Particle Illusion - Selecting library emitter should restart preview playback
* Particle Illusion - Selecting parameter value does not select object in stage HUD
* Particle Illusion - Spacebar does not always initialize playback
* Particle Illusion - Closing Project Settings dialog by clicking "Apply" causes blue CTI to disappear
* Particle Illusion - Deflector thickness HUD doesn't match effect when angle adjusted
* Particle Illusion - Crash when spinning closed a particle type setting with value text selected
* Particle Illusion - "Single Particle" types now always drawn on top as intended.
* Particle Illusion - Respect particle render order options
* Particle Illusion - Saving emitters to the library now accurately creates the emitter thumbnail from the current Stage view
* Particle Illusion - Randomness variation issue where some particle properties were not as randomly distributed as intended.
* Particle Illusion - Particle birth on same frame with alpha gradient
* Particle Illusion - Rendering glitches in the host for animated Forces with multiple emitters.
* Particle Illusion - Mini timeline shows keys from one parameter while graph window shows another
* Particle Illusion - Adding an emitter to library does not update List or Grid views
* Particle Illusion- Undo of disabling "Intense" param does not restore "Preserve Color"
* Particle Illusion - When focus is a numeric entry field, the arrow keys should increase / decrease numeric value in the field
* Particle Illusion - Deflectors and forces should adhere to the "add new objects (emitters) at frame 0" rule in the preferences panel
* Particle Illusion - Improved mouse focus handling when clicking on param name versus param value
* Particle Illusion - Pasting an emitter into a new document crashes
* Title Studio - Crash when choosing V1 as Environment Map Track map
* Title Studio - Reflect Scene option not rendering correctly
* Title Studio - Crash or hang when enabling Shadow light
* Title Studio - First time you replace a c4d file you get an error message though the file does import
* Title Studio - Toggling Visibility on C4D layers causes Crash.
* Title Studio - Crash when adjusting the edge contract param
* Title Studio - Fix User Marks stability/display
* Title Studio - Some shaders did not work when applied to C4D objects
* Title Studio - Text for the last icon in various styles are cut off
* Title Studio - Catalina - Comp window empty
* Title Studio - Material bump Textures render incorrectly when Text Tool is selected
* Title Studio - 3D Model fails to render when shader is applied to model part
* Title Studio - Curl Deformer only effects part of multi-object C4D models
* Title Studio - Shaders applied to scene level will disable any shader applied to a Container Converted 3d Model
* Title Studio - Setting track type to motion path causes title studio errors
* Title Studio - Improve accuracy of warning dialog when saving a project fails because the destination folder does not have Write permissions
* Title Studio - Polygon count shows 0 if certain actions are undone
* Title Studio - Blur shader renders differently at lower preview resolution
* Title Studio - Track Compositing parameters create incorrect render with image processing shaders
* Title Studio - Blur shaders wrap around to opposite edge.
* Title Studio - Attempts to save new project might fail with odd error message on first attempt
* Title Studio - updated Typography Banner.bsp preset to fix a minor defect in banner shape
* Title Studio - Sometimes extruded outline text will not display correctly, with some characters being filled and some outline only

<span style="font-size: 1rem;"> </span>

**Continuum 2020.5 v13.5.0 (BCC 13.5.0) for OFX was released on 5/2/2020.**

<span style="font-size: 1rem;"> </span>

**Continuum 2020.5 v13.5.0 for OFX (OpenFX) officially supports the following host applications:**

_Note that Continuum OFX may work to varying degrees in other OFX hosts, but at this time it is only officially supported in Resolve, Vegas, and Nuke.  Note that official Resolve support does not yet include the embedded Fusion page within Resolve.  Note that the Apple App Store version of Resolve is not fully supported and direct downloads of Resolve from the Blackmagic Design site should be used instead._

macOS 10.12, 10.13, 10.14, and 10.15 (as appropriate for the host version in use):

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, 14.x, 15.x, 16.x  (If using Resolve 14 then 14.1 or higher is strongly recommended.)
* Nuke 10, 11, 12

Windows 7 x64, Windows 8 x64, Windows 10 x64 (as appropriate for the host version in use):

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, 14.x, 15.x, 16.x  (If using Resolve 14 then 14.1 or higher is strongly recommended.)
* Vegas 13 (Sony)
* Vegas 14, 15, 16, 17 (Magix)
* Nuke 10, 11, 12 (4k monitor support on windows requires Nuke 12.1 or higher)

<span style="font-size: 1rem;"> </span>

**Additional Host Version Requirements:**

Note that due to variation from one OFX host to another, some features or effects may not be available in all OFX hosts.  Furthermore, some Continuum features have additional host version requirements:

* In order to access dynamic host frames in previews inside custom UI panes such as Mocha, Particle Illusion, Title Studio, and the FX Browser in Resolve you must use the paid Studio version of Resolve and you must use Resolve Studio 12.5 or higher.  Similarly BCC Optical Stabilizer requires the paid Studio version of Resolve.<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2020.5 v13.5.0 for OFX - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Dissolve Transitions: A fix for better match between 8/16/float bitdepth results when using the optional Color boost transition parameters such as Brightness and Contrast means that the look of some previous projects will have changed slightly in 8 and 16bit projects.
* Integrated Glow group (in Particle Illusion, Reframer, Beauty Studio, Light Leaks).  Previously the glow radius did not auto-scale with clip resolution causing presets to look different on HD vs 4k if they used the glow feature prominently.  Old projects with integrated glow might need to tweak the glow radius when reopened in the new version to adjust for this change.  (This does NOT affect Fast Film Glow or Fast Film Glow Dissolve).
* Particle Illusion and Particle Illusion Dissolve:  Fixes to random property granularity may change the details of individual particles in some projects, although the overall look and feel should remain the same.

<span style="font-size: 1rem;"> </span>

**Continuum 2020.5 for OFX 13.5.0 - Known Issues and Limitations:**

* Mocha PixelChooser - mocha track data is not saved with presets.  To clone mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one mocha UI instance to another. \[CO-4250\]
* Title Studio - Snap to guide - snapping is offset by 2 pixels. \[CO-5071\]
* Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks. \[CO-5788\]
* Moving Mocha from one monitor to another and relaunching it can cause UI refresh problems with mixed monitor resolutions \[CO-5829\]
* Particle Illusion - "File->New" does not clear out project filename, so "Save" can overwrite last project saved if the filename is not changed. \[CO-7723\]

<div id="ext-gen9245"> </div>