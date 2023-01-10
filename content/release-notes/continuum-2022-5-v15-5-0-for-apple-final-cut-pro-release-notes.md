{
"date": "2022-06-21T22:00:38.521Z",
  "title": "Continuum 2022.5 (v15.5.0) for Apple Final Cut Pro - Release Notes",
  "description": "Continuum 2022.5 (v15.5.0) FCP/Motion FxPlug - Release Notes"
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2022.5 (v15.5.0) for Apple Final Cut Pro / FxPlug - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2022.5 for FCP (Summary of major changes since Continuum 2022):**

**Improved Mocha Tracking and FX Editor Preview Integration**
* Adjust Mocha automatically to changes in clip trim without needing to re-track entire clip.
* Improved frame access when tracking in Mocha or previewing in the FX Editor

**Mocha for Continuum Update**
* Update to Mocha 2022.5 era enhancements:
  * New Surface Controls
    * Right-click Ratios: You can now set the surface ratio by right-clicking the surface
    * Right-click Align and Reset: You can align the surface or reset it to the spline.
    * Right-click view controls: You can turn off the insert and surface view
  * Track Preprocessing
    * Treat your clip before tracking to get optimal details in difficult shots. Pre-process gamma, contrast, blur etc.
  * Non-destructive gamma view
     * Adjust both brightness and gamma in the view controls without affecting the actual clip

**Faster BCC+ Rendering**
* Improved resource utilization in BCC+ filters - especially with computationally-intensive filters, complicated projects with stacked filters, and when using Mocha PixelChooser.

**BCC+ Camera Shake - New Geometry Controls**

* Control X and Y translation amounts independently
* Global Amplitude control for scaling all geometries with a single parameter
* Post-scale slider allowing additional zoom to hide edge conditions
* New presets


**_Other Fixes and Polish in Continuum 2022.5 v15.5.0 for FCP:_**


* Mac Uninstaller - request privileges (password) before removing anything
* Fix stability issues with with FX Editor / Mocha in some timelines
* Fix sporadic placeholder images appearing in FX Editor or Mocha
* Mocha tracks in FCP now adjust correctly when the clip front trim changes
* Fix placeholder images appearing in FX Editor or Mocha when moving/tracking backwards
* Camera Shake Dissolve - incorrectly darkened premult fringe around soft alpha objects
* Video Glitch Dissolve - incorrectly brightened premult fringe around soft alpha objects
* Channel Blur Dissolve - incorrectly brightened premult fringe around soft alpha objects
* FX Editor OCIO2 - fix black frame when realunching after changing color space, although changing it twice in a session can still cause an incorrect frame which then goes away after changing it a third time.
* One-sided transitions applied to the end of a clip now transition to transparent instead of to a proxy image while previewing in the FX Editor
* Sporadic rendering of the wrong blend frame when masking with Mocha or PixelChooser, especially with stacked filters

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 (v15.5.0) (BCC 15.5.0) for FxPlug was released on 6/21/2022.**

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 (v15.5.0) for Apple FxPlug officially supports the following host and OS version:**

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

**Continuum 2022.5 FCP (v15.5.0) Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.
* BCC+ Light Leaks and BCC+ Light Leaks Dissolve - param defaults have been tweaked for improved look, but this can cause old projects to open with different values if those params were never changed from their original default in the previous version.
* BCC+ Directional Blur (+ Dissolve), BCC+ Channel Blur (+Dissolve), and BCC+ Channel Blur YUV now default Premultiply to On which can change the look of old projects when applied to soft alpha channels.

<span style="font-size: 1rem;"> </span>

**Continuum 2022.5 FCP (v15.5.0) - Known Issues and Limitations:**

* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-10185 - FX Editor will show placeholder clips in situations where it is unable to fetch the correct image data from the host.  This does not affect rendering and is limited to the FX Editor preview.  Mostly commonly this occurs for transitions with inputs of mismatched sizes or for transitions where the effect has not rendered in the current session due to host caching from previous sessions.
* CO-10348 - BCC+ Transform - adjusting the shear parameters in the control panel causes widget to move in opposite direction of the image
* CO-10213- FX Editor preview can show incorrect colors changing OCIO colorspace multiple times
* CO-10325 - BCC+ Composite filter auto-mattes against itself when applied to clips with soft alpha, thus shrinking the alpha
* CO-10260 - Edge Mode repeat sometimes shows transparency instead of repeating the last lines of pixel around the edges in FCP
* CO-10231 - FX Editor shows transparency/black temporarily when scrubbing or widgets in transitions

<div id="ext-gen9245"> </div>