{
  "title": "Continuum 2021.5 (v14.5.3) for OFX release notes",
  "date": "2021-09-20T17:01:00-04:00",
  "description": "Continuum 2021.5 (v14.5.3) for OFX release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2021.5 (v14.5.3) for OFX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2021.5 (v14.5.3) is a maintenance update to Continuum 2021.5 (v14.5.0 and v14.5.2) and is a free update for licensed users of Continuum 2021.5.  It includes several important fixes (see below).  For a full list of what's new between Continuum 2021.5 and the previous Continuum 2021 major release please refer to the initial 2021.5 release notes here:

[Continuum 2021.5 (v14.5.0) for OFX - Release Notes](/release-notes/continuum-2021.5-v14.5.0-for-ofx-release-notes/)
[Continuum 2021.5 (v14.5.2) for OFX - Release Notes](/release-notes/continuum-2021.5-v14.5.2-for-ofx-release-notes/)

<span style="font-size: 1rem;"> </span>

**Fixes and Polish in 2021.5 (v14.5.3) Update for OFX:**

* Particle Illusion - Adding an emitter to a scene with an existing animated emitter and deflectors causes an unexpected change in the animation
* Particle Illusion - Sporadic crash after deleting an emitter under certain circumstances

<span style="font-size: 1rem;"> </span>

**Continuum 2021.5 (v14.5.3) (BCC 14.5.3) for OFX was released on 9/20/2021.**

<span style="font-size: 1rem;"> </span>

**Continuum 2021.5 (v14.5.3) for OFX (OpenFX) officially supports the following host applications:**

_Note that Continuum OFX may work to varying degrees in other OFX hosts, but at this time it is only officially supported in Resolve, Vegas Pro, and Nuke.  Note that official Resolve support does not yet include the embedded Fusion page within Resolve.  Note that the Apple App Store version of Resolve is not fully supported and direct downloads of Resolve from the Blackmagic Design site should be used instead._

macOS 10.14, 10.15, 11.0, 11.1, 11.2, 11.3, 11.4  (as appropriate for the host version in use):  _(Intel chipsets only.  M1 / ARM chipsets are not supported in this version.)_  \[Up to host versions released at time of Continuum release\]:

* DaVinci Resolve Studio and DaVinci Resolve 15.x, 16.x, 17.x
* Nuke 12, 13

Windows 10 x64 \[Up to host versions released at time of Continuum release\]:

* DaVinci Resolve Studio and DaVinci Resolve 15.x, 16.x, 17.x
* 15, 16, 17, 18 (Magix)
* Nuke 12, 13 (4k monitor support on windows requires Nuke 12.1 or higher)

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2021.5 (v14.5.3) for OFX - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Due to UI optimization and expanded 3D support, some Particle Illusion projects may show shifts in some particle properties (although the look and feel should remain the same).
* As part of improving alpha support for many filters in the BCC+ Lights category (e.g. BCC+Rays, BCC+Glow, BCC+Lens Flare, and BCC+Streaks) the lighting will now by default expand into regions of zero or low alpha.  While this is generally the desired result, it can change the look of saved projects with these filters applied to alpha clips, so if necessary the you can dial back the alpha channel expansion by reducing the Affect Alpha parameter.
* Due to technical difficulties with newer versions of Resolve on macOS, the 3D Objects category of filters (including Title Studio) is disabled in Resolve on macOS.  We are working with Resolve engineering on a solution.

<span style="font-size: 1rem;"> </span>

**Continuum 2021.5 (v14.5.3) for OFX - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8678 - Particle Illusion - Layer widget disappears and particles do not render on stage for some high resolution projects at 5k+
* CO-8847 - Mac Installer Registration Dialog fails the installer if certain unicode characters were entered on a previous installer run
* CO-9274 - Particle Illusion - 3D HUD box can display as distorted for some settings
* CO-9270 - Particle Illusion - phantom camera controls can appear after converting project from 2d to 3d
* CO-9290 - Licensing - Occasionally the license activation tool does not pop up automatically after installation on Mac.  Re-running the installer should pop up the tool on the next run.
* CO-9244 - 3D Objects category of filters including Title Studio are disabled on macOS Resolve due to technical difficulties with that host.
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9391 - 3 BCC+ filters clamp in HDR projects - Film Stocks, Cross Processing, Color Paste
* CO-9390 - BCC+Composite reverts to CPU if Transform Scale X param is scrubbed
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-9369 - BCC+ Lens Flare - incorrect result in some cases when compositing with soft alpha comps

<div id="ext-gen9245"> </div>