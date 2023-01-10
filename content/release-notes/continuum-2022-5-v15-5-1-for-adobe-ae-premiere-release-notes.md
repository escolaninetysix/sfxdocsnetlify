{
"date": "2022-08-04T21:00:00.000Z",
  "title": "Continuum 2022.5 (v15.5.1) for Adobe AE/Premiere - Release Notes",
  "description": "Continuum 2022.5 (v15.5.1) for Adobe After Effects / Premiere Pro - Release Notes"
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2022.5 (15.5.1) for Adobe After Effects and Adobe Premiere Pro - Release Notes</span>

<span style="font-size: 1rem;"> </span>



Continuum 2022.5 (v15.5.1) is a maintenance update to Continuum 2022.5 version 15.5.0 and is a free update for licensed users of Continuum 2022.5.  It includes several important fixes and feature enhancements (see below).  For a full list of what's new between Continuum 2022.5 and the previous Continuum 2022 major release, please refer to the initial 2022 release notes:

[Continuum 2022.5 (v15.5.0) for Adobe Release Notes](/release-notes/continuum-2022-5-v15-5-0-for-adobe-ae-premiere-release-notes/)

<span style="font-size: 1rem;"> </span>


**Fixes and Polish in Continuum 2022.5 (v15.5.1) Update for Adobe:**

* Units licenses now work irrespective of product version
* Mocha - Mac - fix sporadic hang in Mocha UI on some newer mac hardware
* BCC+ Transform - Shear X widget moved in the opposite direction
* Particle Illusion - Occasional crashes or UI glitches while manipulating widgets
* Particle Illusion - Duplicated forces or deflectors are not retained when reopening project
* Particle Illusion - Improved handling of 3D model file picker
* Particle Illusion - Rename library emitter dialog doesn't use Return key as Accept (or ESC key as cancel).
* Particle Illusion - Layer HUD indicator (blue dot) not drawing in correct place when dragging widget
* Particle Illusion - Alt-click on position key in stage to toggle bezier/linear not working
* Particle Illusion - Can't resize Sphere force radius using HUD 
* Particle Illusion - Sphere Force draws rotated 
* Particle Illusion - Thumbnails are flipped vertically in some cases
* Particle Illusion - It's possible to drag other items when adding line points, resulting in unexpected results (regression)
* Particle Illusion - Window position is lower at each launch of PI
* Particle Illusion - On Windows with 2 monitors, sometimes particle count and project dimensions text does not display.
* Particle Illusion - Movement restricted to wrong plane in Top, Left, etc.
* Particle Illusion - Disabling multiple emitters cannot be undone
* Particle Illusion - Sporadic crash in AE when modifying camera angles.
* Particle Illusion - Bezier handle adjustment gives unexpected results
* Particle Illusion - Add UI indicators to recommend using 3D instead of 2D projects in most instances



<span style="font-size: 1rem;"> </span>


**Continuum 2022.5 v15.5.1 (BCC 15.5.1) for Adobe After Effects and Adobe Premiere Pro was released on 8/4/2022.**


<span style="font-size: 1rem;"> </span>


**Continuum 2022.5 v15.5.1 for Adobe supports the following Adobe host applications:**

macOSX 10.14, 10.15, 11.x, 12.x (up to OS version at time of Continuum release and as appropriate for the host version in use). Continuum 2022.5 supports running natively on M1/ARM64 native chipsets for After Effects and Premiere Pro versions which themselves support running natively on M1/ARM64.

* Adobe After Effects and Premiere Pro CC 2019, 2020, 2021, 2022 (up to versions released at time of Continuum release)

Windows 10 x64, Windows 11:

* Adobe After Effects and Premiere Pro CC 2019, 2020, 2021, 2022 (up to versions released at time of Continuum release)

<span style="font-size: 1rem;"> </span>


**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI in most hosts.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the Boris FX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.


<span style="font-size: 1rem;"> </span>


**Continuum 2022.5 v15.5.1 for Adobe - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Particle Illusion 3D environment enhancements may cause some projects to render with individual particle differences, although the overall look and feel should remain the same.


<span style="font-size: 1rem;"> </span>


**Continuum 2022.5 v15.5.1 for Adobe - Known Issues and Limitations:**

* CO-1298 - Mocha PixelChooser splines can render distorted or in the wrong location in filters that use "Avoid Clipping" or similar mechanisms to expand the source layer dimensions.  As a workaround the layer expansion should be done prior to the effect in a precomp.
* CO-2296 - The Hide Disabled Parameters preference exposes host-side UI refresh issues in AE and Premiere.  We are working with Adobe to resolve these issues.  As a workaround the Hide Disabled Parameters preference can be disabled to revert to "graying out" parameters instead of hiding them.
* CO-2344 - Title Studio - projects with Cinema 4D files that reference host tracks as textures can cause slow or stalled refreshes in Premiere.
* CO-6682 - Optical Stabilizer does not stabilize correctly on trimmed clips in Premiere
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8475 - Particle Illusion - PI layer Sync with Ae 3D lost when using Y Rotation keyframes
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8858 - Particle Illusion - Ae does not refresh renders if PI is using mask / text via mask picker menu and the mask on an alternate layer is changed. (Change a param or purge cache to force refresh.)
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-10548 - Particle Illusion: AE Comp Camera rotation in some directions is opposite in AE from PI
* CO-10220 - BCC+ Crash Zoom Dissolve - angle animation is not as smooth as it should be
* CO-10213 - FX Editor preview sometimes shows incorrect colors after changing OCIO colorspace multiple times
* CO-9963 - Title Studio - C4D import not supported on native M1



<div id="ext-gen9245"> </div>