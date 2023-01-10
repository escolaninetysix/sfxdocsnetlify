{
  "title": "Continuum 2019.5 (v12.5.0) for OFX - Release Notes",
  "date": "2019-06-12T22:01:00-04:00",
  "description": "Continuum 2019.5 for OFX release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2019.5 (v12.5.0) for OFX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2019.5 (v12.5.0) for OFX officially supports DaVinci Resolve and Vegas.  The embedded Fusion page in Resolve is not officially supported at this time.  Other OFX hosts may work to varying degrees but are not yet officially supported.

**What's New in Continuum 2019.5 for OFX (Summary of major changes since Continuum 2019.0):**

**_Particle Illusion Enhancements_**

* Forces - Create force fields to influence the animation of particles.
* Deflectors - Define shapes which reflect particles to simulate interaction with objects in your scene.
* Sprite Customization - Replace particle sprites with any other sprite in the same emitter library or upload your own new particle shape images.
* Custom Emitter Creation/Editing/Saving - You can now edit all aspects of an emitter or create brand new emitters of your own, and you can save these emitters into a Custom emitter library for easy reuse or sharing.  You can add/create new super emitters, add/delete particle types/emitter types/free emitters, and customize particle shape images.
* Fully Tagged Emitter Libraries - Easily search for emitters by keyword
* Native Host Parameter Properties - Key particle properties such as Number/Velocity/Size etc have been exposed as native parameters in the host plugin UI.  These act as multipliers or offsets for the internal particle properties of the same name.  This lets you tweak looks without re-entering the PI UI and also lets you drive key particle properties with expressions and other native keyframing capabilities in hosts that support them.   Also includes native host Most Blur controls.
* Integrated Beat Reactor - Animate key particle parameters without manual keyframing such as Number, Scale, Velocity based on audio samples.
* Random Seed Slider - Easily tweak the random seed for the particle patterns at multiple levels.  (Available both as a native host param and inside the individual PI UI elements.)
* Lock Size Aspect Checkbox - Expose separate Size X / Size Y particle size controls.
* Integrated Glow - Add Fast Film Glow to the particles without the need to stack filters.
* Integrated Brightness/Contrast/Gamma - Tweak the colors without the need to stack filters.
* Direct Compositing mode supports Opacity - The native host Opacity slider is now available for all Composite Styles
* Render quality improvements
* Faster UI Refresh on Mac when dragging controls inside the Particle Illusion UI
* Misc. Performance tweaks
* Numerous UI Refinements.

**_Particle Illusion Dissolve - New Filter_**

* Particle Illusion Dissolve is a brand new dissolve-style transition with the full Particle Illusion effect embedded for an enormous range of new transition looks.

**_Spill Remover - New Filter_**

* Spill Remover is a new simple and robust way to remove spill from your key along with a new light wrap approach based on the spill map.  Available both integrated into Primatte Studio and as a separate Spill Remover filter.

**_Title Studio Enhancements_**

* Vastly improved render quality for C4D imports
  * Respects Subdivision info from C4D file for smoother surfaces.
  * Respects Reflection information from C4D file.
  * Respects Material information from C4D file.
  * More accurate shape rendering
  * Support for model features such as Symmetry, Array, and Spline object
  * Improvements to reflection, gradient texture, texture mapping, and bump mapping quality
  * Fix errors opening certain C4D files.
* New Insert Text button in the Title Studio FX Browser will commit any text edits for ALL lines of a multi-element preset rather than having to separately insert the text for each element.
* 20 new Type-On-Text style presets

**_Mocha Enhancements_**

* Mask Rendering Performance - Mask rendering with Mocha PixelChooser in Continuum is now much faster - especially for complex and multi-layered masks.
* Edge Snapping - Edge-Snapping on Splines to speed up Masking.  Select one or more points and press "ALT+S" to snap points to the nearest edge, or hold "S" to drag-snap
* Layout Manager - Save, modify, and order custom layouts from the View menu. New layouts will appear in the workspace drop down.
* Autosave Backups - Autosaves now include iterated history to prevent data loss and Autosaves are no longer removed on exit to the host. You can define the location and the number of backups in the Mocha preferences.
* Numerous Bug Fixes and UI Tweaks including foreground mattes now correctly occluding when GPU tracking a background layer.

**Primatte Studio Enhancements**

* Direct integration of the Spill Remover and associated Light Wrap on Spill features.
* Faster performance and reduced memory demands (applies to all bit-depths but especially noticeable in float projects)

**Light Wrap from Solid Color**

* Light Wrap (in all filters where it occurs) has a new option to take the light wrap colors from a Solid Color instead of from a background layer which is a handy shortcut for simple scenes, especially in hosts with limited or cumbersome access to secondary layer inputs.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.5 (internal version 12.5.0) (BCC 2019.5 v12.5.0) for OFX was released on 6/12/2019.**

<span style="font-size: 1rem;"> </span>

**Continuum 2019.5 (v12.5.0) for OFX (OpenFX) officially supports the following host applications:**

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

**Continuum 2019.5.0 (v12.5.0) for OFX - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Title Studio - 3D Model rendering enhancements, particularly for C4D models, may change the look of saved projects that reference such models.
* Particle Illusion _-_ Projects created by loading a Continuum preset that was created at a different original FPS than the current timeline FPS may render with some particle pattern changes due to a fix that ensures the host particle pattern now matches the Particle Illusion UI pattern.
* Particle Illusion _-_ Certain projects may show differences in particle randomization due to fixes that ensure consistency between the particle pattern in the host and in the Particle Illusion UI.
* Not all features of the older, original particleIllusion (V3 or earlier) are fully supported in the new Continuum Particle Illusion.  This may affect the ability to perform some actions supported in the older Particle Illusion.  Future updates to Continuum Particle Illusion will restore many of these features over time:
  * Rendering/exporting videos from the standalone Particle Illusion UI.  Rendering is only supported via the plugin’s host timeline at this point.
  * Updating emitter library thumbnails
  * Record Position feature  - i.e. recording mouse movements for conversion to position keyframes.
  * Stage view widgets for Layer and Emitter angle

<span style="font-size: 1rem;"> </span>

**Continuum 2019.5.0 (v12.5.0) for OFX - Known Issues and Limitations:**

* Mocha PixelChooser +  Mocha track data is not saved with presets.  To clone Mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one Mocha UI instance to another. \[CO-4250\]
* Some Custom UI views such as the Title Studio UI, FX Browser, License Dialog, or Preferences Dialog don't adapt to High-DPI displays on windows which can cause some fonts to render too small and be difficult to read.  (Doesn't NOT affect Particle Illusion.) \[CO-3269\]
* Title Studio - Snap to guide - snapping is offset by 2 pixels. \[CO-5071\]
* Particle Illusion - Custom GUI scroll bars do not react to Wacom tablet clicks. \[CO-5788\]
* Particle Illusion - Integrated Beat Reactor presets do not work \[CO-6413\]
* Particle Illusion - Searching in PI UI can be unexpectedly slow on Windows \[CO-6417\]
* Particle Illusion - You can not yet update the "emitter thumbnail" for newly saved custom emitter \[CO-6250\]
* Primatte Studio "toolbar" menu items may appear too small or overlapping on high-DPI displays \[CO-5792 + CO-5791\]
* Lens Flash Transition ignores Ease parameters \[CO-5719\]
* Particle Illusion - The "About" dialog launched from the PI UI does not show the accurate build date/version.  Consult the About/Licence dialogs back in the host UI instead.  \[CO-6433\]
* Title Studio - Quarter resolution (or lower) causes some settings that use Image Processing Shaders to render with different colors \[CO-6429\]
* Title Studio - Enabling the native Use Transforms option can cause some sections of 3D Model files to disappear \[CO-6431\]

<div id="ext-gen9245"> </div>