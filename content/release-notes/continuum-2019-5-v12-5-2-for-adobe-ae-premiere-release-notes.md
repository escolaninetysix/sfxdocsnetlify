{
  "title": "Continuum 2019.5 (v12.5.2) for Adobe AE/Premiere - Release Notes",
  "date": "2019-08-26T11:03:00-04:00",
  "description": "Continuum 2019.5 for Adobe AE/Premiere release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2019.5 (v12.5.2) for Adobe After Effects and Adobe Premiere - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2019.5 (v12.5.2) is a minor maintenance update to Continuum 2019.5 (v12.5.0) and (v12.5.1) and is free to licensed users of Continuum 2019.5.  It includes several important feature tweaks and fixes (see below).  For a full list of what's new between Continuum 2019 and Continuum 2019.5 please refer to the initial 2019.5 release notes here:

[Continuum 2019.5 (v12.5.0) Adobe AE/Premiere Release Notes](/release-notes/continuum-2019-5-for-adobe-ae-premiere-12-5-0-release-notes/)

<span style="font-size: 1rem;"> </span>

**Enhancements and Fixes in 2019.5 (v12.5.2) for Adobe After Effects / Premiere:**

* Title Studio preset improvements - Improved retention of formatting/alignment after inserting new text and other misc. animation improvements.
* Title Studio - Extruded Object position changed with downsampling resolution if anchor point used
* Title Studio - 3D models failed to render if Anchor Point is changed
* Extruded Text - Curl Deformer caused distortion in wrong plane
* Particle Illusion - New "Use Mipmapping" particle property to control the resampling softness of the particle images.
* Particle Illusion - Preview pane motion blur did not work
* Particle Illusion - “Use Next Color” emitters were not working correctly
* Particle Illusion - Background was black instead of showing host video until at least one emitter is added.
* Particle Illusion - Clicking “lock aspect” did not update the emitter
* Particle Illusion - Duplicate Emitter did not work after saving an emitter to the library
* Particle Illusion - Preview was black or displayed wrong emitter after saving a custom emitter
* Particle Illusion - Clicking in mini timeline didn't take focus from other views so arrow keys didn't work
* Particle Illusion - Shape thumbnail in “Properties” section was distorted
* Particle Illusion - Non-standard comp sizes could cause artifacts
* Particle Illusion Dissolve - Incorrect Help documentation link
* Premiere CS6 - crash in effects that accessed alternate layers in float projects.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.5 (internal version 12.5.2) (BCC 2019.5 12.5.2) for Adobe After Effects and Premiere Pro was released on 8/26/2019.**

<span style="font-size: 1rem;"> </span>

**Continuum 2019.5 (v12.5.2) for Adobe supports the following Adobe host applications:**

macOSX 10.11, 10.12, 10.13, 10.14 (as appropriate for the host version in use):

* Adobe After Effects and Premiere Pro CS6, CC, CC 2014, CC 2015, CC 2017, CC 2018, and CC 2019

Windows 7 x64, Windows 8 x64, Windows 10 x64 \[recommended\] (as appropriate for the host version in use):

* Adobe After Effects and Premiere Pro CS6, CC, CC 2014, CC 2015, CC 2017, CC 2018, and CC 2019

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC11Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics including introductions to the fundamentals, deep training webinar replays, and in-depth looks at key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.5 (v12.5.2) for Adobe Compatibility Notes:**

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

<span style="font-size: 1rem;"> </span>

**Continuum 2019.5 (v12.5.2) for Adobe - Known Issues and Limitations:**

* Mocha PixelChooser - Mocha track data is not saved with presets.  To clone Mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the Mocha UI or you can copy/paste track data from the clipboard when moving from one Mocha UI instance to another. \[CO-4250\]
* Some Custom UI views such as the Title Studio UI, FX Browser, License Dialog, or Preferences Dialog don't adapt to High-DPI displays on windows which can cause some fonts to render too small and be difficult to read.  (Does NOT affect Particle Illusion.) \[CO-3269\]
* Title Studio - Snap to guide - snapping is offset by 2 pixels. \[CO-5071\]
* Particle Illusion - Custom GUI scroll bars do not react to Wacom tablet clicks. \[CO-5788\]
* Particle Illusion - You can not yet update the "emitter thumbnail" for newly saved custom emitter \[CO-6250\]
* Primatte Studio "toolbar" menu items may appear too small or overlapping on high-DPI displays \[CO-5792 + CO-5791\]
* Lens Flash Transition ignores Ease parameters \[CO-5719\]
* Particle Illusion - projects created in v12.0.x where an emitter was duplicated on the stage may not open correctly in v12.5.x.  The workaround is to reopen the project in v12.0.x and delete the duplicated emitter, then re-add it in v12.5.x \[CO-6491\]

<div id="ext-gen9245"> </div>