{
  "title": "Continuum for Apple/FxPlug 11.0.3 Release Notes",
  "date": "2018-05-16T14:15:36-04:00",
  "tags": [
    "Continuum Complete"
  ],
  "description": "",
  "excerpt": "",
  "image_url": ""
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum (BCC) 11.0.3 for Apple Final Cut Pro and Motion - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**Enhancements in Continuum (BCC) 11.0.3 for FxPlug (FCP X and Motion):**

* Improved dongle licensing support on newer versions of Mac OS.
* New Presets in Particle Array 3D
* Lens Flare 3D - new Luma Obscuration mode allows specifying an obscuration map that affects flare brightness without affecting flare colors.

<span style="font-size: 1rem;"> </span>

**Fixes in Continuum (BCC) 11.0.3 for FxPlug:**

* Fix time drift in interlaced clips in Remover when using Clone Shape mode.
* Fix slight darkening in Lens Flare 3D of some flare components when composited over each other.
* Fix visual jump when Light Wrap width parameter was set all the way to 0 in  Chromas Key Studio.
* Fix minor alpha precision problems in Light Wrap when using Mix With Original (including in Chroma Key Studio)
* Fix pruning of installed filters when running Unit installers or licensing change.
* Fix silent uninstall on mac OS
* Change preferences files to use xml rather than plist format to avoid warning messages from certain disk utility programs on Mac.
* VR Reorient in FxPlug - remove duplicate template in FCP

<span style="font-size: 1rem;"> </span>

**Continuum 11.0.3 for Apple Final Cut Pro + Motion (FxPlug) hosts was released on 5/24/2018 and is an update to:**

* [Continuum 11.0.2 for FxPlug](/release-notes/continuum-for-apple/fxplug-11.0.2-release-notes/ "Continuum 11.0.2 for Apple Final Cut Pro X and Motion")

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 11 for Apple/FxPlug (Summary of major changes since BCC10):**

* 6 New Effects:
* _Broadcast Safe_
* _VR Blur_
* _VR Flicker Fixer_
* _VR Insert_
* _VR Reorient_
* _VR Sharpen_
* RLM Based Licensing.
* New Presets in Particle Emitter 3D and Particle Array
* BCC Motion Blur - improved optical flow accuracy under Advanced Mode.
* Numerous bug fixes

<span style="font-size: 1rem;"> </span>

**Continuum 11.0.3 for Apple/FxPlug officially supports the following host applications:**

Mac OSX 10.10, 10.11, 10.12, and 10.13:

* Final Cut Pro X 10.2, 10.3, and 10.4
* Motion 5.2, 5.3, and 5.4

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC10Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum for Apple/FxPlug 11.x Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* The 3D Objects category of filters has been deprecated in BCC11.  Old projects which used 3D Objects filters will still open normally, but these filters will no longer appear in the effect menus.  Please contact customer support if this is a concern.
* Grunge:  fixes to incorrect color shifts in regions of partial transparency may change the brightness along the edges of alpha objects.
* BCC Light Leaks and Light Leaks Dissolve: fixes to incorrect color shifts in regions of partial transparency may change the brightness in soft alpha objects.
* BCC Textures - Due to a fix in the Texture Position control, the offset of textures may have shifted in several of the filters in the texture generators group, possibly requiring the Position to be tweaked to restore the original look although the overall look and feel remains the same.
* More accurate edge quality handling in blur filters and other filters which use blurs internally will cause minor changes to pixel values near the edges in some clips.
* Lens Flare 3D:  Fixes to slight darkening of some flare components when composited over each other will cause some flares to render somewhat brighter now, especially near the center of the flare.
* BCC Preference files have changed format in BCC11.0.3 and previous preference settings will need to be reconfigured or migrated.  See the Continuum help docs for information on migrating preference settings. [Migrating Continuum Preferences](/documentation/continuum/bcc-preferences/ "Migrating Continuum Preferences")

<span style="font-size: 1rem;"> </span>

**Continuum for Apple/FxPlug 11.0.3 - Known Issues and Limitations:**

* BCC11 for FxPlug does not include support for mocha PixelChooser tracking/masking nor for Primatte Studio at this time.
* In order to comply with host multi-threading requirements BCC Match Grain does not currently support using the Lock Sample checkbox to lock in new grain samples. You can still use Match Grain to render grain matched from an alternate clip by leaving the Lock Sample checkbox disabled, but it is not possible to use the Lock Sample checkbox to store new grain profiles permanently in grain files or presets. However, loading previously saved grain profiles or Match Grain presets will continue to work as before. \[2858\]
* Some templates in FCP display empty Well layers messages. \[CO-4735\]

<div id="ext-gen9245"> </div>
