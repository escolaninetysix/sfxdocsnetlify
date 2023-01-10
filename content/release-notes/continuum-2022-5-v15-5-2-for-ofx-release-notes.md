{
"date": "2022-08-17T13:01:31.390Z",
  "title": "Continuum 2022.5 (v15.5.2, v15.5.2B) for OFX Release Notes",
  "description": "Continuum 2022.5 (v15.5.2, v15.5.2B) for OFX (OpenFX) Release Notes"
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2022.5 (v15.5.2, v15.5.2B) for OFX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2022.5 (v15.5.2, v15.5.2B) is a maintenance update to Continuum 2022.5 versions 15.5.0 and 15.5.1 and is a free update for licensed users of Continuum 2022.5.  It includes several important fixes and feature enhancements (see below).  For a full list of what's new between Continuum 2022.5 and the previous Continuum 2022 major release, please refer to the initial 2022 release notes:

[Continuum 2022.5 (v15.5.1) for OFX Release Notes](/release-notes/continuum-2022-5-v15-5-1-for-ofx-release-notes/)

[Continuum 2022.5 (v15.5.0) for OFX Release Notes](/release-notes/continuum-2022-5-v15-5-0-for-ofx-release-notes/)

<span style="font-size: 1rem;"> </span>

**New Features in Continuum 2022.5 (v15.5.2, v15.5.2B) Update for OFX:**

* Vegas 20 Support (Requires 15.5.2B update!)
  * As of the 15.5.2B update of Continuum 2022.5, issues fetching frames from BCC+ filters in the FX Editor and Mocha in Vegas 20 are now fully resolved.

* New Presets in Several BCC+ Filters:

  * BCC+ Day For Night
  * BCC+ Film Grunge
  * BCC+ Rays
  * BCC+ Sunset
  * BCC+ Two Strip


<span style="font-size: 1rem;"> </span>

**Fixes in Continuum 2022.5 (v15.5.2, v15.5.2B) Update for OFX:**
* Vegas 20 - Avoid crashing or missing frames in BCC+ filters with the FX Editor or Mocha UI.  Be sure you are fully updated to the 15.5.2B version of Continuum 2022.5
* Particle Illusion - Cmd/Ctrl click on position keyframes in Stage does not delete them
* Particle Illusion - Emitter center point does not align with mouse cursor for some emitters


<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 (v15.5.2) (BCC 15.5.2) for OFX was released on 8/17/2022.**

**Continuum 2022.5 (v15.5.2B) (BCC 15.5.2B) for OFX was released on 9/22/2022.**

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 (v15.5.2, v15.5.2B) for OFX (OpenFX) officially supports the following host applications:**

_Note that Continuum OFX may work to varying degrees in other OFX hosts, but at this time it is only officially supported in Resolve, Vegas Pro, and Nuke.  Note that official Resolve support does not yet include the embedded Fusion page within Resolve.  Note that the Apple App Store version of Resolve is not fully supported and direct downloads of Resolve from the Blackmagic Design site should be used instead._

macOS 10.14, 10.15, 11.x, 12.x (up to OS version at time of Continuum release and as appropriate for the host version in use):    Note, Continuum 2022.5 v15.5.0 supports running natively on M1/ARM64 native chipsets for host versions which themselves support running natively on M1/ARM64.  \[Up to host versions released at time of Continuum release\]:

* DaVinci Resolve Studio and DaVinci Resolve 16.x, 17.x, 18.x
* Nuke 12, 13

Windows 10 x64 and Windows 11 \[Up to host versions released at time of Continuum release\]:

* DaVinci Resolve Studio and DaVinci Resolve 16.x, 17.x, 18.x
* 16, 17, 18, 19, 20 (Magix)
* Nuke 12, 13 (4k monitor support on windows requires Nuke 12.1 or higher)

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 (v15.5.2, v15.5.2B) for OFX - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Particle Illusion 3D environment enhancements may cause some projects to render with individual particle differences, although the overall look and feel should remain the same.

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 (v15.5.2, v15.5.2B) for OFX - Known Issues and Limitations:**

* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-9244 - 3D Objects category of filters including Title Studio are disabled on macOS Resolve due to technical difficulties with that host.
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-9511 - BCC+ Vignette renders differently between CPU and GPU on mixed sized clips in Vegas
* CO-9789 - Nuke only: Some presets not applying correctly when the y param is set to 200
* CO-10220 - BCC+ Crash Zoom Dissolve - angle animation is not as smooth as it should be
* CO-10213 - FX Editor preview sometimes shows incorrect colors after changing OCIO colorspace multiple times
* CO-9963 - Title Studio - C4D import not supported on native M1

<div id="ext-gen9245"> </div>