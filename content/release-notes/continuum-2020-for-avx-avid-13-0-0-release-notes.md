{
  "title": "Continuum 2020 (v13.0.0) for AVX - Avid - Release Notes",
  "date": "2019-10-25T17:04:00-04:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2020 for Avid AVX v13.0.0  - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2020 for AVX Avid (Summary of major changes since Continuum 2019.5):**

**_Four New Effects:_**

* **Cast Shadow**
  * Generates true 3D cast shadows from the source alpha using an integrated point or parallel light source maneuverable in 3D space around the source
* **Corner Pin Studio**
  * Next generation corner pinning with improved Mocha integration, advanced filtering quality, improved geometrics, advanced pinning controls, and more built-in extras to reduce filter stacking.
* **Curl**
  * Animated vortex distortions that create looks ranging from heat shimmer or raindrops on a window, to more stylized swirling curly-cues.
* **Reflection**
  * Generates a planar reflection from the source image, projecting the result onto a virtual ground plane to create the appearance of an image being reflected onto a highly polished or liquid surface in a true 3D environment.

**_Six New Transitions:_**

* **Colorize Glow Dissolve**
  * Dissolve-style transition based on the BCC Colorize Glow filter allowing strongly emphasized colorized gradients in the glow.
* **Curl Dissolve**
  * Dissolve-style transition based on the new Curl warp filter generating animated vortex distortions of varying intensities.
* **Kaleida Dissolve**
  * Dissolve-style transition based on a kaleidoscopic warping pattern.
* **Prism Dissolve**
  * Dissolve-style transition based on the prismatic zoom/spin/shift blurring in the BCC Prism filter.
* **RGB Blur Dissolve**
  * Dissolve-style transition variant of Blur Dissolve with control over separate R/G/B blur amounts to enable various color separation looks.
* **RGB Displacement Dissolve**
  * Dissolve-style transition combining the color separation of BCC Misalignment with Displacement Map distortions.

**_Mocha Area Brush:_**

* Mocha is now updated to match the new features in the recently released Mocha Pro, in particular the Area Brush. This feature let’s you quickly define a tracking region via paint strokes which are automatically converted to splines for tracking. It fully supports the use of pressure sensitive Wacom tablets to control the width of the painted stroke.

**_Particle Illusion Enhancements:_**

* New "Emitters_2020" library with 44 new emitters.
* Grid/List View - New graphical and list views for easier browsing/searching/sorting of emitter libraries.
* Preview Window Toolbar - Controls to adjust preview pane behavior such as motion blur, background color, etc.
* New high-resolution thumbnail images for all emitter libraries
* Add sprite from ANY library - You can now choose new image sprite shapes from any library, not just the current library.
* Line Emitters and Deflector refinement - You can now add/remove points existing lines by hot key clicking.
* Update Custom Emitter Library Thumbnails - You can update the thumbnail image for any custom emitter library entry.
* Faster playback inside PI UI when Motion Blur is disabled (especially on lower end cards) via Use HQ Playback preference setting.
* Mip mapping now enabled by default when creating new particles for smoother looking particles with further mip mapping controls in the Preferences.
* Ability to Rename a Custom emitter library
* Start Frame bar has option to CMD-Drag so you can choose between shifting ALL keyframes versus shifting only the start time without sliding keyframes.
* New Preference option to always place new emitters at the start of the timeline instead of at the current timeline location
* Improved management of unused textures to reduce project/preset/library sizes.
* Width and height (for area emitters), Radius (for circle), and X Radius/Y Radius (for ellipse) can all now go negative which flips the emitter, thus allowing for easier construction of certain animation styles
* Numerous UI tweaks

**_New Particle Illusion Dissolve Presets:_**

* Particle Illusion Dissolve has 9 new presets inspired by the new emitter library

**_Title Studio Enhancements:_**

* Continuing improved support for C4D model import.
* 12 new _Sidebar_ presets in Title Studio
* Updated preset animation - better template behavior when changing text, improved animation, updated looks.

**_Network Drive Preset Folder:_**

* You can now add an environment variable which points to an alternate root preset folder location - e. g. a shared network drive. Set the BCC_LOAD_PRESET_PATH environment variable to the ROOT folder for the alternate preset location and the FX Browser/Load/Save windows will default to using this new location. You can force it to reset to the factory installed location by using the Reset option in the bottom left of the FX Browser pane.

**_Primatte Studio Toolbar in 4k:_**

* The toolbar widget in Primatte Studio now scales up automatically on High-DPI monitors.

**_Blur Dissolve - Region Animation:_**

* Blur Dissolve now includes the standard Continuum Region Animation dissolve controls to allow for a variety of wipe on/off complements to the main dissolve look.

**_Misalignment Enhancements:_**

* New edge treatment options in BCC Misalignment

**_Other Fixes and Tweaks in Continuum 2020_:**

* Title Studio and other custom windows on mac may drop behind the main host UI after changing temporarily to another application and then back again.
* Title Studio - Media Find window did not automatically find other missing elements located in the same path
* FX Browser - Improved playback speeds
* FX Browser - Jumping to the last frame in the timeline actually shows frame 0 instead of showing the last frame.
* Particle Illusion - Control pane could not be reduced in size, thus limiting UI layout options.
* Particle Illusion - Hiding a free emitter type did not disable/grey the child particle types
* Particle Illusion - Save dialog on mac sometimes showed garbage characters
* Particle Illusion - Failure to interpolate particle positions due to animated angle changes leading to unexpected particle clumping in certain emitters.
* Particle Illusion - Emitter position keys create unexpected motion before first key
* Particle Illusion - Long particles that extended outside the image boundary would sometimes be incorrectly skipped.
* Particle Illusion - Changing an emitter position keyframe from linear to bezier was not correct
* Particle Illusion - When Layer position was not zero, the emitter widget appeared to be offset correctly but the actual particles were not
* Particle Illusion - Parameter Sliders and Checkbox controls sometimes looked too small with mixed resolution monitors.
* Particle Illusion - when field rendering particles, both fields were from the same point in time instead of half a frame apart.
* Performance tweaks in Primatte Studio with Mocha Masks on mac.
* Particle Illusion - Some sub-emitters showed identical random number sequences even when they should have been unique
* Particle Illusion - Fixed rare, sporadic crash on launch
* Particle Illusion - Fix duplicating an emitter by menu
* Particle Illusion - Reference Point changes could not be undone
* Particle Illusion - Delete Deflector when deflector line stage widget selected
* Particle Illusion - Changes to keyframe values were sometimes not committed when moving to previous or next keyframe
* Particle Illusion - When Reference Point param is selected and spacebar is hit, Ref Pt dialog opened
* Particle Illusion - Preferences and Project Settings windows had drawing problens in macOS Dark Mode
* Particle Illusion - Improved stability and better logging with certain emitters
* Particle Illusion - UI layout tweaks
* Particle Illusion - Playback range should be persistent
* Particle Illusion - Render difference in some cases between playback and paused look.

<span style="font-size: 1rem;"> </span>

**Continuum 2020 v13.0.0 (BCC 13.0.0) for Avid AVX was released on 10/25/2019.**

<span style="font-size: 1rem;"> </span>

**Continuum 2020 v13.0.0 for Avid AVX supports the following host applications:**

Macintosh:

* Avid Media Composer 8.x, 2018.x, 2019.x (up to avid versions released at time of Continuum release) and running macOS 10.12, 10.13, 10.14 (as appropriate for the host version in use):

Windows:

* Avid Media Composer Media Composer 8.x, 2018.x, 2019.x (up to avid versions released at time of Continuum release) and running Windows 7 Professional (64-bit), Windows 8 Professional or Enterprise (64-bit), and Windows 10 (as appropriate for the host version in use).

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2020 v13.0.0 for AVX - Avid - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Particle Illusion now renders particles with correct half-frame timing in interlaced projects which will produce slightly different particle locations on field 2 when field rendering.
* Particle Illusion randomization fixes to some settings will cause the particles to render with different random patterns than before, although the overall look and feel will remain the same.

<span style="font-size: 1rem;"> </span>

**Continuum 2020 v13.0.0 for AVX - Avid - Known Issues and Limitations:**

* mocha PixelChooser - mocha track data is not saved with presets.  To clone mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one mocha UI instance to another. \[CO-4250\]
* Custom UI views such as the Title Studio UI, FX Browser, License Dialog, or Preferences Dialog don't fully adapt to High-DPI displays on windows which can cause some fonts to render too small and be difficult to read. \[CO-3269\]
* Title Studio - Snap to guide - snapping is offset by 2 pixels. \[CO-5071\]
* Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks. \[CO-5788\]
* Moving Mocha from one monitor to another and relaunching it can cause UI refresh problems with mixed monitor resolutions \[CO-5829\]
* AVX - Mocha mask can cause flickering in interlaced projects \[CO-6033\]

<div id="ext-gen9245"> </div>