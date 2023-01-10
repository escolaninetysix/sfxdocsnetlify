{
  "title": "Continuum 2020 (v13.0.1) for Adobe AE/Premiere - Release Notes",
  "date": "2019-11-22T17:04:00-05:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2020 (v13.0.1) for Adobe After Effects and Adobe Premiere - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2020 (v13.0.1) is a maintenance update to Continuum 2020 (v13.0.0) and is free to licensed users of Continuum 2020.  It includes several important feature enhancements and fixes (see below).  For a full list of what's new between Continuum 2020 and the previous Continuum 2019.5 major release please refer to the initial 2020 release notes here:

[Continuum 2020 (v13.0.0) Adobe AE/Premiere Release Notes](/release-notes/continuum-2020-for-adobe-ae-premiere-13-0-0-release-notes/)

<span style="font-size: 1rem;"> </span>

**Feature Enhancements 2020 (v13.0.1) for Adobe After Effects / Premiere:**

* **Cast Shadow and Reflection**
  * Option to see the original behind/beneath the shadow/reflection ground plane.
  * Improved antialiasing quality
* **Corner Pin Studio Overlay Widget**
  * Corner Pin Studio now has overlay widgets to make it easier to set up the initial pin region prior to launching Mocha.  Note that after tracking the widget is grayed out since the location is then tied to the Mocha data.
* **Particle Illusion UI**
  * Add play/pause button for the Preview pane

<span style="font-size: 1rem;"> </span>

**Fixes/Tweaks in 2020 (v13.0.1) for Adobe After Effects / Premiere:**

* Cast Shadow and Reflection - Subtle fringe around alpha object when there is high zoom
* Cast Shadow Light Widget (and other widgets) - cleaner rendered drop shadow behind overlay widget text labels
* Cast Shadow - AE Custom Camera influences shadow even when Use Comp Camera is disabled.
* Reflection - ripples change more than expected when downsampling.
* Premiere Overlays - add drop shadow behind overlay widget text labels.
* Mocha - Update to latest Mocha to match fixes in Mocha Pro
* Tile Mosaic - Gap Width scales incorrectly with resolution
* Scanlines - produces a white fringe around alpha objects in float bit depths
* Prism Dissolve - incoming layer displays color channel transposition in FX Browser in Premiere Pro on Mac
* Title Studio - Rulers and Guides are linked to scene camera and change unexpectedly with camera
* Title Studio - Checkerboard shouldn't scale along with zoom level
* Video Morph - Mask Opacity is ignored
* Match Grain - Renders Black when applied to a solid colored layer
* Corner Pin Studio and Match Move - Tracker drift in Premiere when applied to foreground with different size then the sequence.
* Corner Pin Studio - Problems in AE when applying to FG image with different pixel aspect ratio than the comp.
* Corner Pin Studio - Add "Insert" to name of Foreground param to help make usage more clear.
* AE - Artifacts when applied to AE Adjustment layers in some situations (when the adjustment layer encompasses only small sized sub-layers)
* Primatte Toolbar Widget - better text alignment in AE/Premiere on Windows
* Reflection - very thin line of alpha around the image edge when applied to fully opaque clip
* Lens Flash Transition - animation Ease parameter had no effect
* Title Studio - Apply Mode in Composite tab did not work.
* Kaleida Dissolve - Contextually disable the Tile Mix param when not in use.
* Lightning  - very slightly render differences between runs even with identical parameters.
* Floating license improvements
* Particle Illusion - improved message when emitter library or group is selected and "Enter" is pressed, error message is wrong
* Particle Illusion - Show "No Emitters Found" message when searching does not find any emitters in an emitter library view
* Particle Illusion - Does not correctly remember selected emitter if search is cleared
* Particle Illusion - Tooltip for preview play button should indicate stop/pause state
* Particle Illusion - Initial Zoom level is shown as 100% even though preview is a different size
* Particle Illusion - Turning on "lock aspect" does not undo correctly
* Particle Illusion - Preference pane option name improvement
* Particle Illusion - Should remember the last used library view and return to it upon relaunch
* Particle Illusion - Checkerboard shouldn't scale along with zoom level
* Particle Illusion - Thumbnail scale should be remembered between launches
* Particle Illusion - Improved Logging including a new Preference setting for verbose (diagnostic) logging mode and button to launch the log file.
* Particle Illusion - Fix scrolling with some mice
* Particle Illusion - Undo/redo of gradient changes does not update the gradient widget display
* Particle Illusion - Work in progress on making the alpha gradient widget easier to see and to edit
* Particle Illusion - "Save" always works like "Save As...", forcing you to type or choose the filename
* Particle Illusion - Add key shortcut for "update emitter thumbnail"
* Particle Illusion - The next/prev key buttons in the controls view do not work for Position
* Particle Illusion - Loading a project that contains a deflector immediately puts you in "add point" mode to the deflector
* Particle Illusion - Stage zoom with scroll wheel is much too sensitive when using a trackpad
* Particle Illusion - When emitter not added at frame 0, but then Start Frame slider is moved to frame 0, first key becomes inaccessible
* Particle Illusion - Deflector "thickness" is not correct as drawn in the HUD
* Particle Illusion - Limit width of search box
* Particle Illusion - Add a way to reset the List/Grid views to starting state (clicking again on column header)
* Particle Illusion - Emitter View is not maintained when changing layouts
* Particle Illusion - Opening and closing groups changes selected preview
* Particle Illusion - Preview zoom should be remembered on relaunch
* Particle Illusion - Alpha repeat being applied to all particles in sync - should be independently animating instead of "strobing" as a group.
* Particle Illusion - After saving an emitter in a library the preview window displays unexpected results
* Particle Illusion - Random seed changing when Saving emitter to library - should be preserved in library copy
* Particle Illusion - Color type of "Next key color" does not work correctly
* Particle Illusion - Some emitters such as "Thin Diagonal Blur" & "Small Digits Array" do not preview properly.
* Particle Illusion - Preview window "repeat" looping behavior not correct for some animated emitters
* Particle Illusion - Using "Color from Layer" option on half-res layer produces wrong results - Scale coordinates from Project size to Image size.
* Particle Illusion - Add Position keyframe stage widgets to Line Emitters
* Particle Illusion - Line Emitter jumps around when "Angle" parameter is not 0
* Particle Emitter Library installer on macOS didn't look correct in Dark Mode.
* Particle Illusion - factory installed emitter libraries were not overwritten by updated newer versions during installation.
* Particle Illusion - loaded projects sometimes were marked as modified when in fact not actually changed
* Particle Illusion - the alpha gradient is difficult to see and to edit
* Particle Illusion - rename emitter "show" + "hide" option to "enable" + "disable" for clarity

<span style="font-size: 1rem;"> </span>

**Continuum 2020 (v13.0.1) (BCC 13.0.1) for Adobe After Effects and Adobe Premiere Pro was released on 11/22/2019.**

<span style="font-size: 1rem;"> </span>

**Continuum 2020 (v13.0.1) for Adobe supports the following Adobe host applications:**

macOSX 10.12, 10.13, 10.14, 10.15 (as appropriate for the host version in use):

* Adobe After Effects and Premiere Pro CC 2015, CC 2017, CC 2018, CC 2019, and 2020

Windows 7 x64, Windows 8 x64, Windows 10 x64 \[recommended\] (as appropriate for the host version in use):

* Adobe After Effects and Premiere Pro CC 2015, CC 2017, CC 2018, CC 2019, and 2020

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2020 (v13.0.1) for Adobe - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Particle Illusion now renders particles with correct half-frame timing in interlaced projects which will produce slightly different particle locations on field 2 when field rendering.
* Particle Illusion randomization fixes to some settings will cause the particles to render with different random patterns than before, although the overall look and feel will remain the same.

<span style="font-size: 1rem;"> </span>

**Continuum 2020 (v13.0.1) for Adobe - Known Issues and Limitations:**

* mocha PixelChooser - mocha track data is not saved with presets.  To clone mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one mocha UI instance to another. \[CO-4250\]
* <span style="font-size: 1rem;">Mocha PixelChooser splines can render distorted or in the wrong location in filters that use "Avoid Clipping" or similar mechanisms to expand the source layer dimensions.  As a workaround the layer expansion should be done prior to the effect in a precomp. \[CO-1298\]</span>
* The Hide Disabled Parameters preference exposes host-side UI refresh issues in AE and Premiere.  We are working with Adobe to resolve these issues.  As a workaround the Hide Disabled Parameters preference can be disabled to revert to "graying out" parameters instead of hiding them. \[CO-2296\]
* Title Studio - projects with Cinema 4D files that reference host tracks as textures can cause slow or stalled refreshes in Premiere. \[CO-2344\]
* Custom UI views such as the Title Studio UI, FX Browser, License Dialog, or Preferences Dialog don't fully adapt to High-DPI displays on windows which can cause some fonts to render too small and be difficult to read. \[CO-3269\]
* Title Studio - Snap to guide - snapping is offset by 2 pixels. \[CO-5071\]
* Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks. \[CO-5788\]
* Moving Mocha from one monitor to another and relaunching it can cause UI refresh problems with mixed monitor resolutions \[CO-5829\]
* Mocha Masking in PixelChooser can produces intermittent BFX error code in Premiere. \[CO-6785\]
* Cast Shadow and Reflection - Saving Mac presets sometimes has incorrect position values \[CO-6862\]
* Mocha mask can flicker on edges of static masks in interlaced projects - \[CO-6033\]
* Title Studio UI displays blank Comp window on Catalina in standalone version \[CO-7049\]

<div id="ext-gen9245"> </div>