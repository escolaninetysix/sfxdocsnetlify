{
  "title": "Continuum 2020 (v13.0.0) for Apple Final Cut Pro - Release Notes",
  "date": "2019-10-25T17:01:00-04:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2020 for Apple Final Cut Pro / FxPlug v13.0.0  - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2020 for Apple FxPlug - Final Cut Pro X and Motion (Summary of major changes since Continuum 2019.5):**

**_Three New Effects:_**

* **Cast Shadow**
  * Generates true 3D cast shadows from the source alpha using an integrated point or parallel light source maneuverable in 3D space around the source
* **Curl**
  * Animated vortex distortions that create looks ranging from heat shimmer or raindrops on a window, to more stylized swirling curly-cues.
* **Reflection**
  * Generates a planar reflection from the source image, projecting the result onto a virtual ground plane to create the appearance of an image being reflected onto a highly polished or liquid surface in a true 3D environment.

**_Six New Transitions:_**

* **Colorize Glow Dissolve**
  * Dissolve-style transition based on the BCC Colorize Glow filter allowing strongly emphasized colorized gradients in the glow.
* **Curl Dissolve**
  * Dissolve-style transition based on the new Curl warp filter generating animated vortex distortions of varying intensities.
* **Kaleida Dissolve**
  * Dissolve-style transition based on a kaleidoscopic warping pattern.
* **Prism Dissolve**
  * Dissolve-style transition based on the prismatic zoom/spin/shift blurring in the BCC Prism filter.
* **RGB Blur Dissolve**
  * Dissolve-style transition variant of Blur Dissolve with control over separate R/G/B blur amounts to enable various color separation looks.
* **RGB Displacement Dissolve**
  * Dissolve-style transition combining the color separation of BCC Misalignment with Displacement Map distortions.

**_macOS 10.15 (Catalina) Support:_**

* Continuum is now supported on macOS 10.15 for hosts application versions which themselves also support 10.15.

**_Blur Dissolve - Region Animation:_**

* Blur Dissolve now includes the standard Continuum Region Animation dissolve controls to allow for a variety of wipe on/off complements to the main dissolve look.

**_Misalignment Enhancements:_**

* New edge treatment options in BCC Misalignment


<span style="font-size: 1rem;"> </span>

**Continuum 2020 v13.0.0 (BCC 13.0.0) for FxPlug was released on 10/25/2019.**

<span style="font-size: 1rem;"> </span>

**Continuum 2020 v13.0.0 for Apple FxPlug officially supports the following host applications:**

macOS 10.12, 10.13, 10.14, and 10.15 (as appropriate for the host version in use):

Final Cut Pro X 10.2, 10.3, and 10.4
Motion 5.2, 5.3, and 5.4

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2020 v13.0.0 for FxPlug Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Due to host-side threading changes the origional Continuum motion tracker was disabled in newer versions.  You should be able to open old projects that used the tracker, but it is not possible to perform new motion tracking analysis in FxPlug hosts at this time.
* The 3D Objects category of filters was deprecated back in Continuum 11. Old projects which used 3D Objects filters will still open normally, but these filters will no longer appear in the effect menus. Please contact customer support if this is a concern.

<span style="font-size: 1rem;"> </span>

**Continuum 2020 for FxPlug 13.0.0 - Known Issues and Limitations:**

* Continuum 2019 for FxPlug does not include support for mocha tracking/masking, Primatte Studio, Particle Illusion, Title Studio, Corner Pin Studio, or the FX Browser at this time.
* In order to comply with host multi-threading requirements BCC Match Grain does not currently support using the Lock Sample checkbox to lock in new grain samples. You can still use Match Grain to render grain matched from an alternate clip by leaving the Lock Sample checkbox disabled, but it is not possible to use the Lock Sample checkbox to store new grain profiles permanently in grain files or presets. However, loading previously saved grain profiles or Match Grain presets will continue to work as before. \[2858\]

<div id="ext-gen9245"> </div>