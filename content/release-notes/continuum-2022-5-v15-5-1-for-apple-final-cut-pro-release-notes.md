{
"date": "2022-08-04T20:57:00.000Z",
  "title": "Continuum 2022.5 (v15.5.1) for Apple Final Cut Pro - Release Notes",
  "description": "Continuum 2022.5 (v15.5.1) FCP/Motion FxPlug - Release Notes"
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2022.5 (v15.5.1) for Apple Final Cut Pro / FxPlug - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2022.5 (v15.5.1) is a maintenance update to Continuum 2022.5 version 15.5.0 and is a free update for licensed users of Continuum 2022.5.  It includes several important fixes and feature enhancements (see below).  For a full list of what's new between Continuum 2022.5 and the previous Continuum 2022 major release, please refer to the initial 2022 release notes:

[Continuum 2022.5 (v15.5.0) for FCP/Motion FxPlug](/release-notes/continuum-2022-5-v15-5-0-for-apple-final-cut-pro-release-notes/)

<span style="font-size: 1rem;"> </span>


**Fixes and Polish in Continuum 2022.5 (v15.5.1) Update for FxPlug:**

* Units licenses now work irrespective of product version
* Mocha - Mac - fix sporadic hang in Mocha UI on some newer mac hardware
* BCC+ Transform - Shear X widget moved in the opposite direction
* FCP - Incorrect timeline duration in Mocha UI when relaunching Mocha after closing and restarting FCP in a subsequent session.




<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 (v15.5.1) (BCC 15.5.1) for FxPlug was released on 8/4/2022.**

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 (v15.5.1) for Apple FxPlug officially supports the following host and OS version:**

macOS 10.15, 11.x, 12.x  (up to OS version at time of Continuum release and as appropriate for the host version in use).

Final Cut Pro 10.6.x

Motion 5.6.x

\[Up to host versions released at time of Continuum release\]

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 FCP (v15.5.1) Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.
* BCC+ Light Leaks and BCC+ Light Leaks Dissolve - param defaults have been tweaked for improved look, but this can cause old projects to open with different values if those params were never changed from their original default in the previous version.
* BCC+ Directional Blur (+ Dissolve), BCC+ Channel Blur (+Dissolve), and BCC+ Channel Blur YUV now default Premultiply to On which can change the look of old projects when applied to soft alpha channels.

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 FCP (v15.5.1) - Known Issues and Limitations:**

* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-10185 - FX Editor will show placeholder clips in situations where it is unable to fetch the correct image data from the host.  This does not affect rendering and is limited to the FX Editor preview.  Mostly commonly this occurs for transitions with inputs of mismatched sizes or for transitions where the effect has not rendered in the current session due to host caching from previous sessions.  You can work around this by clearing the host cache or tweaking a param to force a render refresh and then relaunch the FX Editor.
* CO-10213- FX Editor preview can show incorrect colors changing OCIO colorspace multiple times
* CO-10260 - Edge Mode repeat sometimes shows transparency instead of repeating the last lines of pixel around the edges in FCP
* CO-10231 - FX Editor shows transparency/black temporarily when scrubbing or widgets in transitions

<div id="ext-gen9245"> </div>