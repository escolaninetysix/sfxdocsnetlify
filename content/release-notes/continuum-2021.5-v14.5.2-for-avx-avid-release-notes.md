{
  "title": "Continuum 2021.5 (v14.5.2) for AVX - Avid - Release Notes",
  "date": "2021-08-10T17:02:00-04:00",
  "description": "Continuum 2021.5 (v14.5.2) for AVX - Avid Media Composer - Release Notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2021.5 (v14.5.2) for Avid AVX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2021.5 (v14.5.2) is a maintenance update to Continuum 2021.5 (v14.5.0) and is a free update for licensed users of Continuum 2021.5.  It includes several important fixes and enhancements (see below).  For a full list of what's new between Continuum 2021.5 and the previous Continuum 2021 major release please refer to the initial 2021.5 release notes here:

[Continuum 2021.5 (v14.5.0) for AVX - Avid - Release Notes](/release-notes/continuum-2021.5-v14.5.0-for-avx-avid-release-notes/)

<span style="font-size: 1rem;"> </span>

**Additional Feature Enhancements in 2021.5 (v14.5.2) Update for AVX - Avid Media Composer:**

* Particle Illusion:
  * Large performance improvements for host rendering and for UI playback and interactivity.
  * Mini-timeline Cached Frame Indicator shows which frames are cached inside the PI UI and gives a progress thermometer as the cache updates after parameter changes.
* BCC+ FX Editor macOS Performance:
  * The FX Editor in BCC+ filters on mac has been optimized for more responsive interaction and faster playback.

<span style="font-size: 1rem;"> </span>

**Fixes and Polish in 2021.5 (v14.5.2) Update for AVX - Avid Media Composer:**

* FX Editor - Fix External Monitor tool tip
* Version Update prompt fix
* BCC+ macOS Version Info - Bundle reports correct version in Get Info and elsewhere
* License Tool - Updates for 4k monitors and other improvements
* Particle Illusion - Scrubbing while frames are caching can give unexpected particle elements and require cache clearing
* Particle Illusion - Line Emitter jumping around when dragging end points
* Particle Illusion - Adding 2nd emitter causes first emitter to be confined to widget area
* Particle Illusion - Sphere Force radius wrong when camera rotates in Z
* Particle Illusion - Force Object does not cover entire indicated area
* Particle Illusion - Force direction in HUD not correct (doesn't match actual parameter values)
* Particle Illusion - When line emitter is rotated in 3D (any angle component is not 0) moving line points rotates the entire emitter
* Particle Illusion - Graph window sporadically does not show up when PI is launched.
* Particle Illusion - Center position Widget for line emitter not refreshing on non 0th frame
* Particle Illusion - Make disabled nodes more visually distinct
* Particle Illusion - Radius for point forces not drawing correctly when layer Angle is non-zero
* Particle Illusion - Lines draw incorrectly when layer angle is non-zero
* Particle Illusion - Box Force "direction" not working correctly
* Particle Illusion - Number of "emit at points" not always correct for box emitters
* Particle Illusion - Stray particles created after updating parameters
* Particle Illusion - Lines for Free Emitters is not working
* Particle Illusion - Grid Force objects "direction variation" does not work in 3D
* Particle Illusion - Crash when hitting Undo after certain actions such as adding emitters, deleting particle type, or deleting emitter type.
* Particle Illusion - Grid force objects “direction variation” does not work in 3D
* Particle Illusion - f-position turbulence over life has no effect
* Particle Illusion - Position keys for all objects do not take into account layer position or angle
* Particle Illusion - Crash when selecting Emitter Library Search Clear button (slashed circle) while the libraries are still loading
* Particle Illusion - Cursor could get stuck on hand tool after panning nodes
* Particle Illusion - Node pane panning should match the panning behavior in the stage
* Particle Illusion - Host param “Random Seed” does not affect Turbulence
* Particle Illusion - Layout changes should not force app window to full screen
* Particle Illusion - Disabled node should indicate that it is disabled in the tree panel
* Particle Illusion - Make Super Emitter does not apply Position Turbulence and Size Turbulence correctly
* Particle Illusion - Preserve Color option ignored in 2D renders
* Particle Illusion - Opacity dialog should not open directly on top of alpha gradient dialog

<span style="font-size: 1rem;"> </span>

**Continuum 2021.5 (v14.5.2) (BCC 14.5.2) for Avid AVX was released on 8/10/2021.**

<span style="font-size: 1rem;"> </span>

**Continuum 2021.5 (v14.5.2) for Avid AVX supports the following host applications:**

Macintosh:

* Avid Media Composer 2018.x, 2019.x, 2020.x, 2021.x (up to Avid versions released at time of Continuum release) and running macOS 10.14, 10.15, 11.0, 11.1, 11.2, 11.3, 11.4 (as appropriate for the host version in use).  _(Intel chipsets only.  M1 / ARM chipsets are not supported in this version.)_

Windows:

* Avid Media Composer 2018.x, 2019.x, 2020.x, 2021.x (up to Avid versions released at time of Continuum release) and running Windows 10

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2021.5 (v14.5.2) for AVX - Avid - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Due to UI optimization and expanded 3D support, some Particle Illusion projects may show shifts in some particle properties (although the look and feel should remain the same).
* As part of improving alpha support for many filters in the BCC+ Lights category (e.g. BCC+Rays, BCC+Glow, BCC+Lens Flare, and BCC+Streaks) the lighting will now by default expand into regions of zero or low alpha.  While this is generally the desired result, it can change the look of saved projects with these filters applied to alpha clips, so if necessary the you can dial back the alpha channel expansion by reducing the Affect Alpha parameter.
* As part of improving the BCC+ AVX infrastructure we revamped the levels handling to be more accurate and to better match settings in other hosts.  This means that some saved Avid BCC+ projects may show levels shifts when opened in this version.
* BCC+Edge Composite - due to AVX infrastructure enhancements the Title Matte settings in previous projects might need to be adjusted to support the newer UI if it was used on nonstandard mattes.

<span style="font-size: 1rem;"> </span>

**Continuum 2021.5 (v14.5.2) for AVX - Avid - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8678 - Particle Illusion - Layer widget disappears and particles do not render on stage for some high resolution projects at 5k+
* CO-8847 - Mac Installer Registration Dialog fails the installer if certain unicode characters were entered on a previous installer run
* CO-9274 - Particle Illusion - 3D HUD box can display as distorted for some settings
* CO-9270 - Particle Illusion - phantom camera controls can appear after converting project from 2d to 3d
* CO-9219 - Particle Illusion - Make Super Emitter does not apply Position Turbulence and Size Turbulence correctly
* CO-9220 - Particle Illusion - Delete and Undo commands do not always execute when expected
* CO-9290 - Licensing - Occasionally the license activation tool does not pop up automatically after installation on Mac.  Re-running the installer should pop up the tool on the next run.
* CO-8824 - BCC+ filters in Avid don't support Avid's 16bit mode and will render in 8 bit under the hood
* CO-8820 - Mocha PixelChooser data lost when loading presets in Avid even when pref is set to not change PixelChooser/Mocha data
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9391 - 3 BCC+ filters clamp in HDR projects - Film Stocks, Cross Processing, Color Paste
* CO-9390 - BCC+Composite reverts to CPU if Transform Scale X param is scrubbed
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-9369 - BCC+ Lens Flare - incorrect result in some cases when compositing with soft alpha comps

<div id="ext-gen9245"> </div>