{
  "title": "Continuum 2019.5 (v12.5.1) for OFX - Release Notes",
  "date": "2019-06-28T12:02:00-04:00",
  "description": "Continuum 2019.5 for OFX release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ],
  "draft": false
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2019.5 (v12.5.1) for OFX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2019.5 (v12.5.1) for OFX officially supports DaVinci Resolve and Vegas.  The embedded Fusion page in Resolve is not officially supported at this time.  Other OFX hosts may work to varying degrees but are not yet officially supported.

<span style="font-size: 1rem;"> </span>

Continuum 2019.5 (v12.5.1) is a minor maintenance update to Continuum 2019.5 (v12.5.0) and is free to licensed users of Continuum 2019.5.  It includes several important feature tweaks and fixes (see below).  For a full list of what's new between Continuum 2019 and Continuum 2019.5 please refer to the initial 2019.5 release notes here:

[Continuum 2019.5 (v12.5.0) OFX Release Notes](/release-notes/continuum-2019-5-for-ofx-12-5-0-release-notes/)

<span style="font-size: 1rem;"> </span>

**Feature Enhancements in 2019.5 (v12.5.1) for OFX:**

* Particle Illusion Dissolve - New CounterBulb preset
* Particle Illusion - Improved Motion Blur quality - more physically accurate color/alpha handling
* Particle Illusion - Modifier keys allow adjusting parameter values in smaller increments
* Particle Illusion - Add tool tips for Forces and Deflectors and other tool tip improvements
* Particle Illusion - Use Ctrl+Drag to move the whole path for existing line emitters or forces.
* Title Studio - Polygon Counts added to track info

**Fixes in 2019.5 (v12.5.1) for OFX:**

* Mocha - The Zoom + Pan tools now correctly toggle when using the Magnetic Spline and Shape tools.
* Mocha - Fixed a crash or incorrect spline shape when edge snapping control points in certain circumstances.
* Particle Illusion Dissolve - Incorrect auto-animation in Interlaced projects leading to a jump at the end of the transition
* Ripple Dissolve - Improved match in render results between Interlaced and Progressive projects for the same settings.
* License improvements when using a cross-product bundle license
* Primatte Studio and Light Wrap - render instructional message if Light Wrap set to use BG layer but a BG layer has not been selected.
* FX Browser - improved legibility of text labels in thumbnail view
* Particle Illusion - Emitter “Search” feature was slow to respond on Windows.
* Particle Illusion - Bezier keyframes not behaving as expected when adding a new keyframe to a spline
* Particle Illusion - Emitter library selection is unexpectedly changed if a preset is selected and the group is closed or if a search string is cleared.
* Particle Illusion - Better texture resizing (less aliasing) when particles are drawn at smaller sizes than their original sprites.
* Particle Illusion - Parameter view now refreshed after moving a minitimeline keyframe widget
* Particle Illusion - Error message when launching UI when applied as a Generator in Edit pane in Resolve
* Particle Illusion - Standalone - opening a project of shorter duration than initial prefs will still play back as if original longer duration.
* Particle Illusion - Reference Point window pane maintains a minimum functional size
* Particle Illusion - Cleaner drawing of some UI buttons on high-DPI displays
* Title Studio - Use Transforms option causes missing elements in C4D files.
* Title Studio - Errors launching standalone version of Title Studio on Mac AVX and OFX
* Title Studio - Edge Glow shader looks wrong at very low preview resolutions (such as the FX Browser thumbnails.)
* Title Studio - Fixed problems with materials / textures with long names.
* Title Studio - FX Browser Text selection highlighting overflows entry box when screen refreshed
* Title Studio - Improved positioning of C4D models with offset light source

<span style="font-size: 1rem;"> </span>

**Continuum 2019.5 (internal version 12.5.1) (BCC 2019.5 v12.5.1) for OFX was released on 6/28/2019.**

<span style="font-size: 1rem;"> </span>

**Continuum 2019.5 (v12.5.1) for OFX (OpenFX) officially supports the following host applications:**

_Note that Continuum OFX may work to varying degrees in other OFX hosts, but at this time it is only officially supported in Resolve and Vegas.  Note that official Resolve support does not yet include the embedded Fusion page within Resolve._

macOSX 10.11, 10.12, 10.13, and 10.14 (as appropriate for the host version in use):

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, 14, 15.x

Windows 7 x64, Windows 8 x64, Windows 10 x64 (as appropriate for the host version in use):

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, 14, 15.x
* Vegas 13 (Sony)
* Vegas 14, 15, 16 (Magix)

<span style="font-size: 1rem;"> </span>

**Additional Host Version Requirements:**

Note that due to variation from one OFX host to another, some features or effects may not be available in all OFX hosts.  Furthermore, some Continuum features have additional host version requirements:

* In order to access dynamic host frames in previews inside custom UI panes such as Mocha, Particle Illusion, Title Studio, and the FX Browser in Resolve you must use the paid Studio version of Resolve and you must use Resolve Studio 12.5 or higher.  Similarly BCC Optical Stabilizer requires the paid Studio version of Resolve.<span style="font-size: 1rem;"> </span>

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC11Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics including introductions to the fundamentals, deep training webinar replays, and in-depth looks at key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.5 (v12.5.1) for OFX - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Title Studio - 3D Model rendering enhancements, particularly for C4D models, may change the look of saved projects that reference such models.
* Particle Illusion - Improvements to Motion Blur color/alpha rendering accuracy will change the look of projects saved with motion blur enabled.
* Particle Illusion - Improved anti-aliasing of particle sprites may cause particle drawing to look slightly different, particularly for high contrast particles that are rendered at small sizes.
* Particle Illusion _-_ Projects created by loading a Continuum preset that was created at a different original FPS than the current timeline FPS may render with some particle pattern changes due to a fix that ensures the host particle pattern now matches the Particle Illusion UI pattern.
* Particle Illusion _-_ Certain projects may show differences in particle randomization due to fixes that ensure consistency between the particle pattern in the host and in the Particle Illusion UI.
* Not all features of the older, original particleIllusion (V3 or earlier) are fully supported in the new Continuum Particle Illusion.  This may affect the ability to perform some actions supported in the older Particle Illusion.  Future updates to Continuum Particle Illusion will restore many of these features over time:
  * Rendering/exporting videos from the standalone Particle Illusion UI.  Rendering is only supported via the plugin’s host timeline at this point.
  * Updating emitter library thumbnails
  * Record Position feature  - i.e. recording mouse movements for conversion to position keyframes.
  * Stage view widgets for Layer and Emitter angle

<span style="font-size: 1rem;"> </span>

**Continuum 2019.5 (v12.5.1) for OFX - Known Issues and Limitations:**

* Mocha PixelChooser +  Mocha track data is not saved with presets.  To clone Mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one Mocha UI instance to another. \[CO-4250\]
* Some Custom UI views such as the Title Studio UI, FX Browser, License Dialog, or Preferences Dialog don't adapt to High-DPI displays on windows which can cause some fonts to render too small and be difficult to read.  (Doesn't NOT affect Particle Illusion.) \[CO-3269\]
* Title Studio - Snap to guide - snapping is offset by 2 pixels. \[CO-5071\]
* Particle Illusion - Custom GUI scroll bars do not react to Wacom tablet clicks. \[CO-5788\]
* Particle Illusion - You can not yet update the "emitter thumbnail" for newly saved custom emitter \[CO-6250\]
* Primatte Studio "toolbar" menu items may appear too small or overlapping on high-DPI displays \[CO-5792 + CO-5791\]
* Lens Flash Transition ignores Ease parameters \[CO-5719\]
* Title Studio - Quarter resolution (or lower) causes some settings that use Image Processing Shaders to render with different colors \[CO-6429\]
* Particle Illusion - projects created in v12.0.x where an emitter was duplicated on the stage may not open correctly in v12.5.x.  The workaround is to reopen the project in v12.0.x and delete the duplicated emitter, then re-add it in v12.5.x \[CO-6491\]
* Particle Illusion - Clicking "lock aspect" does not update the emitter \[CO-6482\]
* Particle Illusion - The PI UI displays black instead of showing the background clip until you add an emitter to the Stage, at which point the background is displayed as expected. \[CO-6479\]

<div id="ext-gen9245"> </div>