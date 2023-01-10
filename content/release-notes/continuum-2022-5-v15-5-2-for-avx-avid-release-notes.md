{
"date": "2022-08-17T13:02:34.897Z",
  "title": "Continuum 2022.5 (v15.5.2) for AVX - Avid - Release Notes",
  "description": "Continuum 2022.5 (v15.5.2) for AVX - Avid Media Composer - Release Notes"
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2022.5 (v15.5.2) for Avid AVX - Release Notes</span>


<span style="font-size: 1rem;"> </span>


Continuum 2022.5 (v15.5.2) is a maintenance update to Continuum 2022.5 versions 15.5.0 and 15.5.1 and is a free update for licensed users of Continuum 2022.5.  It includes several important fixes and feature enhancements (see below).  For a full list of what's new between Continuum 2022.5 and the previous Continuum 2022 major release, please refer to the initial 2022 release notes:

[Continuum 2022.5 (v15.5.1) for Avid AVX Release Notes](/release-notes/continuum-2022-5-v15-5-1-for-avx-avid-release-notes/)

[Continuum 2022.5 (v15.5.0) for Avid AVX Release Notes](/release-notes/continuum-2022-5-v15-5-0-for-avx-avid-release-notes/)

<span style="font-size: 1rem;"> </span>

**Feature Enhancements in Continuum 2022.5 (v15.5.2) Update for Avid AVX:**

* New Presets in Several BCC+ Filters:

  * Day For Night
  * Film Grunge
  * Rays
  * Sunset
  * Two Strip

<span style="font-size: 1rem;"> </span>

**Fixes in Continuum 2022.5 (v15.5.2) Update for Avid AVX:**

* Particle Illusion - Cmd/Ctrl click on position keyframes in Stage does not delete them
* Particle Illusion - Emitter center point does not align with mouse cursor for some emitters

<span style="font-size: 1rem;"> </span>


**Continuum 2022.5 (v15.5.2) (BCC 15.5.2) for Avid AVX was released on 8/17/2022.**


<span style="font-size: 1rem;"> </span>


**Continuum 2022.5 (v15.5.2) for Avid AVX supports the following host applications:**

Macintosh:

* Avid Media Composer 2018.x, 2019.x, 2020.x, 2021.x, 2022.x (up to Avid versions released at time of Continuum release) and running macOS 10.14, 10.15, 11.x, 12.x (up to OS version at time of Continuum release and as appropriate for the host version in use).

Windows:

* Avid Media Composer 2018.x, 2019.x, 2020.x, 2021.x, 2022.x (up to Avid versions released at time of Continuum release) and running Windows 10 or Windows 11

<span style="font-size: 1rem;"> </span>


**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>


**Continuum 2022.5 (v15.5.2) for AVX - Avid - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Particle Illusion 3D environment enhancements may cause some projects to render with individual particle differences, although the overall look and feel should remain the same.


<span style="font-size: 1rem;"> </span>


**Continuum 2022.5 (v15.5.2) for AVX - Avid - Known Issues and Limitations:**

* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8824 - BCC+ filters in Avid don't support Avid's 16bit mode and will render in 8 bit under the hood.  Use 32 bit float projects to ensure maximum fidelity.
* CO-8820 - Mocha PixelChooser data modified when loading presets in Avid even when pref is set to not change PixelChooser/Mocha data
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-10220 - BCC+ Crash Zoom Dissolve - angle animation is not as smooth as it should be
* CO-10213 - FX Editor preview sometimes shows incorrect colors after changing OCIO colorspace multiple times

<div id="ext-gen9245"> </div>