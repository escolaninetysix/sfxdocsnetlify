{
  "title": "Continuum 2020 (v13.0.2) for OFX - Release Notes",
  "date": "2019-12-19T17:02:00-05:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2020 (v13.0.2) for OFX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2020 (v13.0.2) is a maintenance update to Continuum 2020 (v13.0.x) and is free to licensed users of Continuum 2020.  It includes several important fixes and enhancements (see below).  For a full list of what's new between Continuum 2020 and the previous Continuum 2019.5 major release please refer to the previous 2020 release notes here:

[Continuum 2020 (v13.0.0) OFX Release Notes](/release-notes/continuum-2020-for-ofx-13-0-0-release-notes/)
[Continuum 2020 (v13.0.1) OFX Release Notes](/release-notes/continuum-2020-v13-0-1-for-ofx-release-notes/)

<span style="font-size: 1rem;"> </span>

**Enhancements/Fixes in 2020 (v13.0.2) for OFX:**

* Mocha - Sporadic Bfx 25 error when rendering with Mocha PixelChooser in Vegas renders
* Mocha - Jittering in Mocha PixelChooser masks when field rendering
* Mocha - Subtract layer property in Mocha UI not working as expected after swapping layer order.
* Mocha - Missing OCIO config in Mocha UI
* Time Displacement - Improved performance in Resolve
* Time Displacement - Crash in Resolve for certain Displacement Amount (Frames) settings
* Licensing - (Rare) - Multiple machines on some networks incorrectly identified as the same machine so licensing changes on one machine would unexpectedly affect others.
* Primatte Studio, Chroma Key Studio, Spill Remover, Light Wrap - Improved handling of Mix With Original in Light Wrap group when a Light Wrap preview mode is enabled.
* Particle Illusion - More consistent look and feel of UI elements across the interface
* Particle Illusion - Project Settings/Preferences Dialog - after clicking the Project Size popup all subsequent clicks open the menu
* Cast Shadow - Artifacts for some settings on Intel GPUs

<span style="font-size: 1rem;"> </span>

**Continuum 2020 v13.0.2 (BCC 13.0.2) for OFX was released on 12/19/2019.**

<span style="font-size: 1rem;"> </span>

**Continuum 2020 v13.0.2 for OFX (OpenFX) officially supports the following host applications:**

_Note that Continuum OFX may work to varying degrees in other OFX hosts, but at this time it is only officially supported in Resolve, Vegas, and Nuke.  Note that official Resolve support does not yet include the embedded Fusion page within Resolve.  Note that the Apple App Store version of Resolve is not fully supported and direct downloads of Resolve from the Blackmagic Design site should be used instead._

macOS 10.12, 10.13, 10.14, and 10.15 (as appropriate for the host version in use):

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, 14.x, 15.x, 16.x  (If using Resolve 14 then 14.1 or higher is strongly recommended.)
* Nuke 10, 11, 12

Windows 7 x64, Windows 8 x64, Windows 10 x64 (as appropriate for the host version in use):

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, 14.x, 15.x, 16.x  (If using Resolve 14 then 14.1 or higher is strongly recommended.)
* Vegas 13 (Sony)
* Vegas 14, 15, 16, 17 (Magix)
* Nuke 10, 11, 12

<span style="font-size: 1rem;"> </span>

**Additional Host Version Requirements:**

Note that due to variation from one OFX host to another, some features or effects may not be available in all OFX hosts.  Furthermore, some Continuum features have additional host version requirements:

* In order to access dynamic host frames in previews inside custom UI panes such as Mocha, Particle Illusion, Title Studio, and the FX Browser in Resolve you must use the paid Studio version of Resolve and you must use Resolve Studio 12.5 or higher.  Similarly BCC Optical Stabilizer requires the paid Studio version of Resolve.<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2020 v13.0.2 for OFX - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Particle Illusion now renders particles with correct half-frame timing in interlaced projects which will produce slightly different particle locations on field 2 when field rendering.
* Particle Illusion randomization fixes to some settings will cause the particles to render with different random patterns than before, although the overall look and feel will remain the same.

<span style="font-size: 1rem;"> </span>

**Continuum 2020 for OFX 13.0.2 - Known Issues and Limitations:**

* mocha PixelChooser - mocha track data is not saved with presets.  To clone mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one mocha UI instance to another. \[CO-4250\]
* Custom UI views such as the Title Studio UI, FX Browser, License Dialog, or Preferences Dialog don't fully adapt to High-DPI displays on windows which can cause some fonts to render too small and be difficult to read. \[CO-3269\]
* Title Studio - Snap to guide - snapping is offset by 2 pixels. \[CO-5071\]
* Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks. \[CO-5788\]
* Moving Mocha from one monitor to another and relaunching it can cause UI refresh problems with mixed monitor resolutions \[CO-5829\]
* Title Studio and other custom UI elements sometimes draw incorrectly in Nuke on Mac with high-DPI displays \[CO-7051\]
* Title Studio UI displays blank Comp window on Catalina in standalone and in some hosts \[CO-7049\]

<div id="ext-gen9245"> </div>