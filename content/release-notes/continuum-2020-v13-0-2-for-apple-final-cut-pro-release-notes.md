{
  "title": "Continuum 2020 (v13.0.2) for Apple Final Cut Pro - Release Notes",
  "date": "2019-12-19T17:01:00-05:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2020 (v13.0.2) for Apple Final Cut Pro / FxPlug - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2020 (v13.0.2) is a maintenance update to Continuum 2020 (v13.0.x) and is free to licensed users of Continuum 2020.  It includes several important fixes and enhancements (see below).  For a full list of what's new between Continuum 2020 and the previous Continuum 2019.5 major release please refer to the previous 2020 release notes here:

[Continuum 2020 (v13.0.0) Apple FxPlug Release Notes](/release-notes/continuum-2020-for-apple-final-cut-pro-13-0-0-release-notes/)
[Continuum 2020 (v13.0.1) Apple FxPlug Release Notes](/release-notes/continuum-2020-v13-0-1-for-apple-final-cut-pro-release-notes/)

<span style="font-size: 1rem;"> </span>

**Enhancements/Fixes in 2020 (v13.0.2) for Apple FxPlug:**

* Licensing - (Rare) - Multiple machines on some networks incorrectly identified as the same machine so licensing changes on one machine would unexpectedly affect others.
* Chroma Key Studio, Spill Remover, Light Wrap - Improved handling of Mix With Original in Light Wrap group when a Light Wrap preview mode is enabled.
* Cast Shadow - Artifacts for some settings on Intel GPUs

<span style="font-size: 1rem;"> </span>

**Continuum 2020 (v13.0.2) (BCC 13.0.2) for FxPlug was released on 12/19/2019.**

<span style="font-size: 1rem;"> </span>

**Continuum 2020 (v13.0.2) for Apple FxPlug officially supports the following host applications:**

macOS 10.12, 10.13, 10.14, and 10.15 (as appropriate for the host version in use):

Final Cut Pro X 10.2, 10.3, and 10.4
Motion 5.2, 5.3, and 5.4

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2020 (v13.0.2) for FxPlug Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Due to host-side threading changes the origional Continuum motion tracker was disabled in newer versions.  You should be able to open old projects that used the tracker, but it is not possible to perform new motion tracking analysis in FxPlug hosts at this time.
* The 3D Objects category of filters was deprecated back in Continuum 11. Old projects which used 3D Objects filters will still open normally, but these filters will no longer appear in the effect menus. Please contact customer support if this is a concern.

<span style="font-size: 1rem;"> </span>

**Continuum 2020 for FxPlug (v13.0.2) - Known Issues and Limitations:**

* Continuum 2019 for FxPlug does not include support for Mocha tracking/masking, Primatte Studio, Particle Illusion, Title Studio, Corner Pin Studio, or the FX Browser at this time.
* In order to comply with host multi-threading requirements BCC Match Grain does not currently support using the Lock Sample checkbox to lock in new grain samples. You can still use Match Grain to render grain matched from an alternate clip by leaving the Lock Sample checkbox disabled, but it is not possible to use the Lock Sample checkbox to store new grain profiles permanently in grain files or presets. However, loading previously saved grain profiles or Match Grain presets will continue to work as before. \[2858\]

<div id="ext-gen9245"> </div>