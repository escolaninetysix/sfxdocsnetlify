{
"date": "2022-10-26T12:00:04.000Z",
  "title": "Continuum 2023 (v16.0.0) for Apple Final Cut Pro - Release Notes",
  "description": "Continuum 2023 (v16.0.0) FCP/Motion FxPlug - Release Notes"
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2023 (v16.0.0) for Apple Final Cut Pro / FxPlug - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2023 for FCP (Summary of major changes since Continuum 2022.5):**

**New BCC+ Atmospheric Glow Effect**
* An exciting new glow style mega-filter effect that brings instant atmospheric looks to an otherwise flat scene.



**10 New/Ported BCC+ Transitions**
* BCC+ Film Roll
* BCC+ Swish Glow
* BCC+ Swish Pan
* BCC+ Swish Prism
* BCC+ Swish Warp
* BCC+ Linear Wipe
* BCC+ Radial Wipe
* BCC+ Rectangular Wipe
* BCC+ Texture Wipe
* BCC+ Vignette Wipe



**BCC+ Light - New Gobos and Tiling**
* 50 new, seamlessly tiling gobo presets in the Abstract, Foliage, Glass, and Texture categories. Choose the "New" tag in the FX Editor to see them all.
* New Edge Mode option with Wrap and Reflect abilities that let you infinitely tile textures.



**BCC+ Film Glow - New Secondary Glow**
* A new set of independent secondary glow params allows chained glows for easier creation of more diverse looks.




**New Presets Across a Variety of Filters**
* BCC+ Beauty Studio
* BCC+ Camera Shake
* BCC+ Chroma Bands
* BCC+ Chromatic Aberration
* BCC+ Develop
* BCC+ Film Glow
* BCC+ Light Leaks
* BCC+ Prism
* BCC+ Vignette
* BCC+ X-Ray


**Improved Mocha Performance**
* Tracking performance has been improved by up to 50% on Apple Silicon hardware


**BCC+ Film Grunge Refinements**
* Gate Weave section has new Auto Scale option and expanded ranges. Allows more stylized, dramatic weave/shake looks.

**_Other Fixes and Polish in Continuum 2023 (v16.0.0) for FCP:_**
* Film Stocks and other BCC+ filters with Curves control - Fix rendering clamped on Apple Silicon hardware
* BCC+ Transitions - adjust timing so transition reaches full completion on the last frame.  May affect the perceived timing of transitions by 1 frame in saved projects.
* BCC+ Rays - Rays Only mode now reflects the Brightness and Color params
* BCC+ Light - Fix missing thumbnail images for Glass texture category on Windows
* BCC+ Light - Fix shear direction
* BCC+ Film Grunge - Fix asymmetric Gate Weave
* BCC+ Vignette - Fix premultiplication issues when applied to alpha clips
* BCC+ Vignette - CPU mode did not produce the same result as GPU



<span style="font-size: 1rem;"> </span>

**Continuum 2023 (v16.0.0) (BCC 16.0.0) for FxPlug was released on 10/26/2022.**

<span style="font-size: 1rem;"> </span>

**Continuum 2023 (v16.0.0) for Apple FxPlug officially supports the following host and OS version:**

macOS 11.5.1+, 12.x, 13.x  (up to OS version at time of Continuum release and as appropriate for the host version in use).

Final Cut Pro 10.6.5

Motion 5.6.3

\[Up to host versions released at time of Continuum release\]

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum FCP 2023 (v16.0.0) Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.
* BCC+ Transitions - Fix to adjust timing so transition reaches full completion on the last frame may affect the perceived timing of transitions by 1 frame in saved projects.

<span style="font-size: 1rem;"> </span>

**Continuum FCP 2023 (v16.0.0) - Known Issues and Limitations:**
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-10185 - FX Editor will show placeholder clips in situations where it is unable to fetch the correct image data from the host.  This does not affect rendering and is limited to the FX Editor preview.  Mostly commonly this occurs for transitions with inputs of mismatched sizes or for transitions where the effect has not rendered in the current session due to host caching from previous sessions.  You can work around this by clearing the host cache or tweaking a param to force a render refresh and then relaunch the FX Editor.
* CO-10213- FX Editor preview can show incorrect colors changing OCIO colorspace multiple times
* CO-10260 - Edge Mode repeat sometimes shows transparency instead of repeating the last lines of pixel around the edges in FCP
* CO-10231 - FX Editor shows transparency/black temporarily when scrubbing or widgets in transitions

<div id="ext-gen9245"> </div>

