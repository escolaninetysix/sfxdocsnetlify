{
  "title": "Continuum 2019 for Apple Final Cut Pro - 12.0.1 Release Notes",
  "date": "2019-02-14T12:15:56-05:00",
  "description": "Continuum 2019 (12.0.1) for Apple FCPX release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2019.0.1 for Apple Final Cut Pro / FxPlug v12.0.1  - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What’s New in Continuum 2019 for Apple/FxPlug (Summary of major changes since Continuum 11)::**

* 20 New FCP X Title Templates.
* 19 New FCP X Transition Templates.
* Rendering performance improvements.
* macOS Mojave support
* Scanlines - New separate control for size vs. spacing
* Particle Emitter 3D - 16 new presets including dust and snow.

<span style="font-size: 1rem;"> </span>

**Fixes in Continuum (BCC) 12.0.1 for FxPlug:**

* FxPlug - Video Glitch produces error when applied to Group containing a Replicator in FXPlug
* FxPlug - Damage TV - unexpected behavior if applied to a Text Layer in Motion
* FxPlug - Visible placeholder well layer elements appearing in Final Cut renders for some templates
* Prism - PixelChooser resulted in masked region generating transparency instead of unfiltered source
* StandAlone FX Browser - Categories not appearing in alphabetical order on mac.
* Floating license server - schemes could show sporadic watermarking on some frames when re-establishing licenses after time outs
* Fast Film Glow - horizontal streak artifacts in some settings in float projects.
* Mac installer saying “Product Already Licensed” when it isn’t licensed
* Improved diagnostic logging
* Numerous general fixes and tweaks

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.1 v12.0.1 (BCC 12.0.1) for FxPlug was released on 2/13/2019.**

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.1 v12.0.1 for Apple FxPlug officially supports the following host applications:**

macOS 10.10, 10.11, 10.12, 10.13, 10.14 (as appropriate for the host version in use):

Final Cut Pro X 10.2, 10.3, and 10.4
Motion 5.2, 5.3, and 5.4

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.1 v12.0.1 for FxPlug Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Due to host-side threading changes the origional Continuum motion tracker was disabled in newer versions.  You should be able to open old projects that used the tracker, but it is not possible to perform new motion tracking analysis in FxPlug hosts at this time.
* The 3D Objects category of filters was deprecated back in Continuum 11. Old projects which used 3D Objects filters will still open normally, but these filters will no longer appear in the effect menus. Please contact customer support if this is a concern.
* OpenGL blur quality enhancements may slightly change perceived blur amount in some filter elements.
* Prism - Fixes to alpha / premultiplication handling will produce different results in intermediate alpha regions.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.1 for FxPlug 12.0.1 - Known Issues and Limitations:**

* Continuum 2019 for FxPlug does not include support for mocha PixelChooser tracking/masking, Primatte Studio, or Particle Illusion at this time.
* In order to comply with host multi-threading requirements BCC Match Grain does not currently support using the Lock Sample checkbox to lock in new grain samples. You can still use Match Grain to render grain matched from an alternate clip by leaving the Lock Sample checkbox disabled, but it is not possible to use the Lock Sample checkbox to store new grain profiles permanently in grain files or presets. However, loading previously saved grain profiles or Match Grain presets will continue to work as before. \[2858\]

<div id="ext-gen9245"> </div>