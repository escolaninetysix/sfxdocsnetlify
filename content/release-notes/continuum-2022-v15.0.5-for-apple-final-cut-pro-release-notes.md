{
  "title": "Continuum 2022 (v15.0.5) for Apple Final Cut Pro - Release Notes",
  "date": "2022-04-22T21:00:00-04:00",
  "description": "Continuum 2022 (v15.0.5) FCP/Motion FxPlug - Release Notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2022 (v15.0.5) for Apple Final Cut Pro / FxPlug - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2022 for FCP (Summary of major changes since Continuum 2021.5):**

**Mocha Masking and PixelChooser added to all BCC+ filters**

* BCC+ filters now include a redesigned, 100% GPU'd version of the PixelChooser including brand new support for Mocha planar mask tracking in BCC+.

**_11 New Fully GPU Accelerated BCC+ Effects:_**

* BCC+Blur
  * Fast, simple, yet tunable blurring
* BCC+Channel Blur
  * Create subtle or highly stylized color separations with per-channel tunable blur amounts
* BCC+Channel Blur YUV
  * Control independent blur amounts for the luminance and color channels in YUV color space, both for subtle image restoration / noise suppression work and for more stylized washed out / degraded color looks
* BCC+Directional Blur
  * Blur along any direction with unique control over the perpendicular blur amount, plus the ability to dial in each channel separately.  Includes a full set of blur quality tuning controls and excellent performance with no slowdown for larger blur amounts.
* BCC+Film Glow
  * BCC's classic glow is now fully ported to BCC+ for maximum performance and usability
* BCC+Light Leaks
  * Layered evolving leaks for subtle to highly styized looks with improved image quality, full HDR support, and faster rendering.
* BCC+Magic Sharp
  * Advanced sharpening technology to rescue soft footage without artifacts/ringing with extensive tuning controls to refine detail size, region, and intensity.
* BCC+Radial Blur
  * Fast radial blurs with excellent performance and silky smooth render quality
* BCC+Prism
  * Stylized prismatic color separation combined with geometric/smeary blurs.  Excellent performance and silky smooth quality despite large non-uniform blur ranges.
* BCC+Smear Blur
  * New blur filter with looks ranging from fast standard geometric motion blurs to unique smeary/trippy/dreamy looks available by decoupling the motion transforms in non-standard and mixed ways.  Excellent performance and silky smooth quality despite large non-uniform blur ranges.
* BCC+Video Glitch
  * Layers of digital glitch artifacts with ultimate control

**_15 New Fully GPU Accelerated BCC+ Dissolve Transitions:_**

* BCC+ Blur Dissolve
* BCC+ Camera Shake Dissolve
* BCC+ Channel Blur Dissolve
* BCC+ Crash Zoom Dissolve
* BCC+ Cross Zoom Dissolve
* BCC+ Direction Blur Dissolve
* BCC+ Dissolve
* BCC+ Film Glow Dissolve
* BCC+ Light Leaks Dissolve
* BCC+ Multi-Star Dissolve
* BCC+ Prism Dissolve
* BCC+ Rack Focus Dissolve
* BCC+ Rays Dissolve
* BCC+ Spin Blur Dissolve
* BCC+ Video Glitch Dissolve

**10 New Simple Title Templates**

* New minimalist titles, designed to adapt to any format for easy integration in broadcast or social media.

**FX Editor Enhancements**

* Video playback (instead of a single still frame)
* UI Look and Feel Update - flatter, cleaner, more efficient use of space
* Customized Workspaces with Save/Load controls for optimized layouts across a variety of scenarios.
* OCIO2 support
* New alpha preview control mode for choosing between previewing Over Black, Over Gray, Over White, Over Checkerboard, or Straight RGB.
* Improved reliability of restoring window layout from previous session
* Show thumbnails over black for Light, Diffusion, Textures, Ice Halos - so that the image textures can be more easily visualized.

**HUD Overlay Widgets in BCC+**:

Many BCC+ filters now support HUD on-screen-control overlay widgets for quickly dialing in controls such as radial and linear gradients, geometric transforms, corner pins, and transition animation tuning.  HUD widgets are available both in the native host view and in the FX Editor.

**Apple Silicon "M1" arm64 support**

* Run BCC+ plugins natively on Apple Silicon / M1 arm64 hardware

**New Presets for BCC+Film Stocks**

* 60 new "movie look" presets for BCC+Film Stocks based on iconic film looks.

**New Presets for BCC+Camera Skake**

* 13 new presets ranging from subtle hand-held camera drift to earthquake level shaking

**New Gobos for BCC+Lights**

* 50 new Glass style gobos in BCC+Lights

**BCC+ Alpha Handling**

* Improved handling for numerous BCC+ filters when applied to transparency or soft alpha regions including BCC+ Lens Flare, BCC+ Glow, BCC+ Rays, and others.

**Improved BCC+ Vignette Defaults**

* The BCC+ Vignette defaults have been adjusted for a more typical default starting look.

**New BCC+ Edge Mode Controls Added to Filters**:

* BCC+ Camera Shake
* BCC+ Lens Distortion
* BCC+ Wide Angle Lens
* BCC+ Transform
* BCC+ Composite
* BCC+ Film Grunge
* BCC+ Borders

**_Other Fixes and Polish in Continuum 2022 v15.0.5 for FCP:_**

* BCC+ GPU Rendering menu has been moved from the top of each effect down to the bottom so that the mostly commonly used controls are more immediately accessible at the top.
* BCC+Beauty Studio - quality refinements
* BCC+Vignette - fix incorrect colors in some presets
* BCC+Transform - Fixed premult fringe
* BCC+Camera Shake - Fixed premult fringe
* BCC+Rack Focus - Fixed premult fringe
* BCC+Depth of Field - Fixed premult fringe
* BCC+Split Field - Fixed premult fringe
* Mac Registration Dialog in installer can fail on certain unicode entries
* BCC+ Rays, Glows, Flares - improvements to alpha handling in some alpha regions and simplification of alpha controls.
* FxEditor - params disabled in host were not setting to correct values if enabled during the FX Editor session
* BCC+ Camera Shake - Randomize param not working
* BCC+ Camera Shake - Expanded slider parameter ranges
* BCC+ Lens Flare - extend the range of the Brightness parameter
* License tool updates and improved diagnostics

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.5) (BCC 15.0.5) for FxPlug was released on 4/25/2022.**

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.5) for Apple FxPlug officially supports the following host and OS version:**

macOS 10.15, 11.0, 11.1, 11.2, 11.3, 11.4  (as appropriate for the host version in use).

Final Cut Pro 10.6.2

Motion 5.6.1

\[Up to host versions released at time of Continuum release\]

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2022 FCP (v15.0.5) Compatibility Notes:**

* BCC+ filters with Affect Alpha will now have Affect Alpha set to 100 always and this parameter will be hidden as this is almost universally the desired approach.
* BCC+ Lens Flare and related filters have improved handling in regions of soft alpha channels which changes the look of existing projects
* Older Super Pro dongles are no longer supported on Mac.  Please discuss dongle replacement with BorisFX Support.

<span style="font-size: 1rem;"> </span>

**Continuum 2022 FCP (v15.0.5) - Known Issues and Limitations:**

* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-10185 - FX Editor will show placehold clips in situations where it is unable to fetch the correct image data from the host.  This does not affect rendering and is limited to the FX Editor preview.  Mostly commonly this occurs for transtions with inputs of mismatched sizes or for transitions where the effect has not rendered in the current session due to host caching from previous sessions.
* CO-10366 - Several transitions show premult problems (dark or light fringes) in FCP when applied to soft alpha clips
* CO-10348 - BCC+ Transform - adjusting the shear parameters in the control panel causes widget to move in opposite direction of the image
* CO-10213- FX Editor preview will be all black after changing OCIO colorspace upon reopening
* CO-10325 - BCC+ Composite filter auto-mattes against itself when applied to clips with soft alpha, thus shrinking the alpha
* CO-10260 - Edge Mode repeat sometimes shows transparency instead of repeating the last lines of pixel around the edges in FCP
* CO-10231 - FX Editor shows transparency/black when scrubbing or widgets in transitions

<div id="ext-gen9245"> </div>