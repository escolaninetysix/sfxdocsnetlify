{
  "title": "Continuum for Adobe AE/Premiere - 11.0.2 Release Notes",
  "date": "2018-01-04T11:07:23Z",
  "tags": [
    "Continuum Complete"
  ],
  "description": "",
  "excerpt": "",
  "image_url": ""
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum (BCC) 11.0.2 for Adobe AE/Premiere - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**Enhancements in Continuum (BCC) 11.0.2 for Adobe AE/Premiere:**

* VR Sharpen - GPU acceleration using OpenCL
* VR Blur  - GPU acceleration using OpenCL (in 8bit projects)
* VR Sharpen - new Edge Sensitivity mode offering quality/performance tradeoff.
* Title Studio - many new and improved presets including switch to universal fonts and better preset integration with FX Browser.
* Title Studio and Type on Text - improved edge quality in 3D scenes
* VR Insert - new Repeat option "Front + 1/3 sides"
* VR Insert - new Feather option for inserted graphic
* VR Insert - render quality improvements including cleaner edges
* Numerous additional bug fixes, particularly in Title Studio, VR filters, licensing, and particles.

<span style="font-size: 1rem;"> </span>

**Continuum 11.0.2 for Adobe After Effects and Premiere Pro was released on 1/8/2018 and is an update to:**

* [Continuum 11.0.0 for Adobe](/release-notes/continuum-for-adobe-ae-premiere-11-0-0-release-notes "Continuum 11.0.0 for Adobe")

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 11 Adobe (Summary of major changes since BCC10):**

* 7 new effects:
* _Broadcast Safe_
* _Primatte Studio_
* _VR Blur_
* _VR Flicker Fixer_
* _VR Insert_
* _VR Reorient_
* _VR Sharpen_
* RLM Based Licensing.
* <span style="font-size: 1rem;">BCC 3D Objects Category - improved edge quality</span>
* BCC Title Studio - Performance Improvements - particularly with static titles.
* BCC Title Studio - Expanded preset library.
* BCC Title Studio - Numerous UI enhancements.
* Mocha PixelChooser - Faster rendering and tracking and improved tracking accuracy.
* New Presets in Particle Emitter 3D and Particle Array
* <span style="font-size: 1rem;">BCC Motion Blur - improved optical flow accuracy under Advanced Mode.</span>
* <span style="font-size: 1rem;">Numerous bug fixes</span>

<span style="font-size: 1rem;"> </span>

**Continuum 11.0.2 for Adobe supports the following Adobe host applications:**

Mac OSX 10.10, 10.11, 10.12, and 10.13:

* Adobe After Effects and Premiere Pro CS6, CC, CC 2014, CC 2015, and CC 2017

Windows 7 x64, Windows 8 x64, Windows 10 x64:

* Adobe After Effects and Premiere Pro CS6, CC, CC 2014, CC 2015, and CC 2017

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC10Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**BCC for Adobe 11.x Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Title Studio: Title Studio now enforces that containers use either 2D (track order based) or 3D (Z depth based) compositing in order to maximize render quality.  Projects now default to using 2D scene containers which means that some older projects may not render exactly the same when reopened in the latest version.  If your project made use of cast shadows or z-depth based compositing order (as opposed track based) you may need to change the scene container type back to 3D or readjust the track order.
* Grunge:  fixes to incorrect color shifts in regions of partial transparency may change the brightness along the edges of alpha objects.
* BCC Light Leaks and Light Leaks Dissolve: fixes to incorrect color shifts in regions of partial transparency may change the brightness in soft alpha objects.
* BCC Textures - Due to a fix in the Texture Position control, the offset of textures may have shifted in several of the filters in the texture generators group, possibly requiring the Position to be tweaked to restore the original look although the overall look and feel remains the same.
* More accurate edge quality handling in blur filters and other filters which use blurs internally will cause minor changes to pixel values near the edges in some clips.

<span style="font-size: 1rem;"> </span>

**BCC for Adobe 11.0.2 - Known Issues and Limitations:**

* mocha PixelChooser - mocha track data is not saved with presets.  To clone mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one mocha UI instance to another. \[645\]
* <span style="font-size: 1rem;">mocha PixelChooser - export to BCC motion tracker formats requires the host application be set to full resolution for the exported track data to be correctly scaled. \[1675\]</span>
* Title Studio - The Frame Cache is not automatically Purged when you manually change the PAR (pixel aspect ratio). \[1964\]
* Optical Stabilizer does not currently analyze correctly when applied to precomps in AE. As a workaround it should be applied directly to individual clip elements instead of to precomps. \[28590\]
* <span style="font-size: 1rem;">Stacking multiple 3D Objects filters on a single clip in Premiere Pro can lead to performance degradation or psuedo-hanging. It is recommended that for the time being 3D Objects filters be applied to separate tracks or separate clips in Premiere Pro. \[28423\]</span>
* Custom UI views such as mocha PixelChooser and the FX Browser in Premiere Pro will sometimes display the media placeholder view instead of the proper video content if you relaunch the app after the effect was rendered in a previous host session.  We are working with Adobe to resolve this issue which is not unique to BCC.  As a workaround, change any parameter in the main effect controls which will then restore proper video output when the custom UI is re-launched.  \[1900\]
* <span style="font-size: 1rem;">mocha PixelChooser splines can render distorted or in the wrong location in filters that use "Avoid Clipping" or similar mechanisms to expand the source layer dimensions.  As a workaround the layer expansion should be done prior to the effect in a precomp. \[1298\]</span>
* The Hide Disabled Parameters preference exposes host-side UI refresh issues in AE and Premiere.  We are working with Adobe to resolve these issues.  As a workaround the Hide Disabled Parameters preference can be disabled to revert to "graying out" parameters instead of hiding them. \[2251 + 2296\]
* 3D Objects category filters with Shatter enabled can produce jumps in shatter particle location when multiple effects are stacked on overlapping layers in Premiere.  As a workaround the effect instances can be nested and rendered individually. \[2265\]
* Title Studio - projects with Cinema 4D files that reference host tracks as textures can cause slow or stalled refreshes in Premiere. \[2344\]
* Match Grain samples don't update automatically in Premiere after changing the sample location via on screen point picker widget.  As a workaround you should change any of the sample parameters in the effect control pane to force a refresh of the grain samples after having adjusted the sample location by the point picker cross hair. \[3006\]
* Custom UI views such as the Title Studio UI, FX Browser, License Dialog, or Preferences Dialog don't adapt to High-DPI displays on windows which can cause some fonts to render too small and be difficult to read. \[3335\]

<div id="ext-gen9245"> </div>
