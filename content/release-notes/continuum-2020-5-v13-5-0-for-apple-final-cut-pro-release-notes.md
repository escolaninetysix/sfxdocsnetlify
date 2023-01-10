{
  "title": "Continuum 2020.5 (v13.5.0) for Apple Final Cut Pro - Release Notes",
  "date": "2020-05-02T17:01:00-04:00",
  "description": "Continuum 2020.5 (v13.5.0) for Apple Final Cut Pro release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2020.5 (v13.5.0) for Apple Final Cut Pro / FxPlug - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2020.5 for Apple FxPlug Hosts (Summary of major changes since Continuum 2020):**

**_New Crash Zoom Dissolve Transition:_**

* High energy, smooth zoom in or out while dissolving to the new layer.

**_New Spin Blur Dissolve Transition:_**

* Rapid image rotation or spin/spiral blur while dissolving to the new layer.

**_Remover Enhancements:_**

* Absolute vs. Relative Offset option for Spot Clone mode
* Clone Color / Clone Detail frequency separation tuning controls

**_Prism and Prism Dissolve Performance:_**

* Render up to 2x faster.

**_Other Enhancements:_**

* Cast Shadow - Added Apply Modes menus (to Built in Light and Comp Light groups)
* Light Leaks Dissolve - Added Color group
* Saturation Peak Added to dissolve transitions Color group
* Prism Amount control added to Prism and Prism Dissolve
* Vignette - Improved Softness control with more intuitive behavior for large values and ability to control the shape of the fall-off ramp
* Preference / Environment Variable to allow floating server render-only machines to be configured to ONLY consume render-only licenses and never full GUI licenses

**_Other Fixes and Polish in Continuum 2020.5_:**

* Licensing - Fix a rare licensing issue on machines where some disks are only visible to admin users.
* Licensing - Mac Dongle licensing failure.
* Licensing - Protect against rare loss of license with multiple machines running with certain cloned drive configurations.
* Remover - Improved cloning of alpha regions (reduced edge artifacts)
* OpenCL Preferences setting - Integrated Glow still uses the GPU even when the Enable OpenCL pref was turned off
* Integrated Glow group (in Reframer, Beauty Studio, Light Leaks) - glow radius did not auto-scale with clip resolution causing presets to look different on HD vs 4k if they used the glow feature prominently.  Old projects with integrated glow might need to tweak the glow radius when reopened in the new version.  (This does NOT affect Fast Film Glow or Fast Film Glow Dissolve).
* Logging - Improved license diagnostic logging.
* Logging - Cross Glitch - remove false errors in log.

<span style="font-size: 1rem;"> </span>

**Continuum 2020.5 (v13.5.0) (BCC 13.5.0) for FxPlug was released on 5/2/2020.**

<span style="font-size: 1rem;"> </span>

**Continuum 2020.5 (v13.5.0) for Apple FxPlug officially supports the following host applications:**

macOS 10.12, 10.13, 10.14, and 10.15 (as appropriate for the host version in use):

Final Cut Pro X 10.2, 10.3, and 10.4
Motion 5.2, 5.3, and 5.4

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2020.5 (v13.5.0) for FxPlug Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Integrated Glow group (in Reframer, Beauty Studio, Light Leaks).  Previously the glow radius did not auto-scale with clip resolution causing presets to look different on HD vs 4k if they used the glow feature prominently.  Old projects with integrated glow might need to tweak the glow radius when reopened in the new version to adjust for this change.  (This does NOT affect Fast Film Glow or Fast Film Glow Dissolve).

<span style="font-size: 1rem;"> </span>

**Continuum 2020.5 for FxPlug (v13.5.0) - Known Issues and Limitations:**

* Continuum 2019 for FxPlug does not include support for Mocha tracking/masking, Primatte Studio, Particle Illusion, Title Studio, Corner Pin Studio, or the FX Browser at this time.
* In order to comply with host multi-threading requirements BCC Match Grain does not currently support using the Lock Sample checkbox to lock in new grain samples. You can still use Match Grain to render grain matched from an alternate clip by leaving the Lock Sample checkbox disabled, but it is not possible to use the Lock Sample checkbox to store new grain profiles permanently in grain files or presets. However, loading previously saved grain profiles or Match Grain presets will continue to work as before. \[2858\]

<div id="ext-gen9245"> </div>