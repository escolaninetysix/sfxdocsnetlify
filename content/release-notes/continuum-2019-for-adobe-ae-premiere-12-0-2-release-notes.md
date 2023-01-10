{
  "title": "Continuum 2019 for Adobe AE/Premiere - 12.0.2 Release Notes",
  "date": "2019-02-27T12:15:56-05:00",
  "description": "Continuum 2019 (12.0.2) for Adobe AE/Premiere release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2019.0.2 for Adobe AE/Premiere v12.0.2  - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**Fixes in Continuum (BCC) 12.0.2 for Adobe AE/Premiere:**

* Particle Illusion would fail to launch as a plugin on certain systems with non-standard user names or drive paths (with spaces).
* Improved support for certain bundle licensing combinations.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.2 v12.0.2 (BCC 12.0.2) for Adobe After Effects and Premiere Pro was released on 2/27/2019.**

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.2 v12.0.2 for Adobe supports the following Adobe host applications:**

macOSX 10.10, 10.11, 10.12, 10.13, 10.14 (as appropriate for the host version in use):

* Adobe After Effects and Premiere Pro CS6, CC, CC 2014, CC 2015, CC 2017, CC 2018, and CC 2019

Windows 7 x64, Windows 8 x64, Windows 10 x64 \[recommended\] (as appropriate for the host version in use):

* Adobe After Effects and Premiere Pro CS6, CC, CC 2014, CC 2015, CC 2017, CC 2018, and CC 2019

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.2 v12.0.2 for Adobe Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Particle Illusion received major performance enhancements (especially for long clips) both when rendering and when working in the PI UI, but these enhancements required changes to the random number generation patterns.  Projects created in 12.0.0. will be differently randomized in 12.0.1 (as if the seed had changed), but the overall look and feel should remain the same.
* Particle Illusion projects saved in Continuum 12.0.1 cannot be opened in Continuum 12.0.0 due to numerous fixes in the project format.
* Particle Illusion _emitter libraries_ saved in PI3 are fully supported in the new Continuum Particle Illusion (with some exceptions noted below), but PI3 _project files_ are NOT supported in the new Particle Illusion.
* Older plugin versions of Particle Illusion (V3 or earlier) are completely distinct from the new Continuum Particle Illusion and those older plugin projects will not migrate to this new plugin.  However, you should be able to leave those older plugin versions installed on your system alongside the newer Continuum Particle Illusion.
* Not all features of the older Particle Illusion (V3 or earlier) are fully supported in the initial release of the new Continuum Particle Illusion.  This may affect the ability to fully use some older emitter libraries or to perform some actions supported in the older Particle Illusion.  Future updates to Continuum Particle Illusion will restore many of these features over time:
  * Editing emitter sprites
  * Rendering/exporting videos from the standalone Particle Illusion UI.  Rendering is only supported via the plugin’s host timeline at this point.
  * Saving new or modified emitters back to a library.
  * Updating emitter library thumbnailsom host image data
  * Deflectors, and Forces
  * Record Position feature  - i.e. recording mouse movements for conversion to position keyframes.
  * Stage view widgets for Layer and Emitter angle
* Title Studio - Ambient light fixes may cause saved projects to render brighter in the new version requiring possible tweaks to the light intensity.
* 3D Objects - Texture scaling improvements may cause some textures to be stretched/sized differently in the new version.
* OpenGL blur quality enhancements may slightly change perceived blur amount in some filter elements.
* Prism - Fixes to alpha / premultiplication handling will produce different results in intermediate alpha regions.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.2 v12.0.2 for Adobe - Known Issues and Limitations:**

* mocha PixelChooser - mocha track data is not saved with presets.  To clone mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one mocha UI instance to another. \[CO-4250\]
* <span style="font-size: 1rem;">Mocha PixelChooser splines can render distorted or in the wrong location in filters that use "Avoid Clipping" or similar mechanisms to expand the source layer dimensions.  As a workaround the layer expansion should be done prior to the effect in a precomp. \[CO-1298\]</span>
* The Hide Disabled Parameters preference exposes host-side UI refresh issues in AE and Premiere.  We are working with Adobe to resolve these issues.  As a workaround the Hide Disabled Parameters preference can be disabled to revert to "graying out" parameters instead of hiding them. \[CO-2296\]
* Title Studio - projects with Cinema 4D files that reference host tracks as textures can cause slow or stalled refreshes in Premiere. \[CO-2344\]
* Custom UI views such as the Title Studio UI, FX Browser, License Dialog, or Preferences Dialog don't fully adapt to High-DPI displays on windows which can cause some fonts to render too small and be difficult to read. \[CO-3269\]
* Title Studio - Snap to guide - snapping is offset by 2 pixels. \[CO-5071\]
* Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks. \[CO-5788\]

<div id="ext-gen9245"> </div>