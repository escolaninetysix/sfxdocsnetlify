{
  "title": "Continuum 2020.5 (v13.5.1) for OFX - Release Notes",
  "date": "2020-06-19T17:02:00-04:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2020.5 (v13.5.1) for OFX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2020.5 (v13.5.1) is a maintenance update to Continuum 2020.5 (v13.5.0) and is free to licensed users of Continuum 2020.5.  It includes several important fixes and enhancements (see below).  For a full list of what's new between Continuum 2020.5 and the previous Continuum 2020 major release please refer to the initial 2020.5 release notes here:

[Continuum 2020.5 (v13.5.0) OFX Release Notes](/release-notes/continuum-2020-5-v13-5-0-for-ofx-release-notes/)

<span style="font-size: 1rem;"> </span>

**Feature Enhancements in 2020.5 (v13.5.1) for OFX:**

**Particle Illusion - ProRes Render/Export directly from PI UI:**

* You can now Render/Export directly from within the Particle Illusion UI including to ProRes formats with embedded alpha channels.  Either select the Render button at the top of the Stage view or use CTRL/CMD + R to bring up the Render dialog where you can adjust the render settings and export.  Rendering directly from the PI UI offers much faster renders for more complex PI projects as well as the flexibility to render from the standalone version.

**Particle Illusion - HUD prefs:**

* New user preference settings for Particle Illusions's HUD widget colors and opacity inside the PI UI.

**Particle Illusion - Force Field Grid Drawing Refinement:**

* Force Field Grid drawing is now more responsive and visually cleaner (including only drawing full grid for selected Force and improved line quality)

**Title Studio Reflection Map Quality:**

* Reflection Maps now scale more accurately and with improved antialiasing

<span style="font-size: 1rem;"> </span>

**Fixes/Tweaks in 2020.5 (v13.5.1) for OFX:**

* FX Browser - Updated 4k icons for Close, External Monitor, etc.
* Licensing - Crash Zoom Dissolve and Spin Blur Dissolve were hidden in the Transitions unit if you chose to install only the licensed filters
* Licensing - Improved support for monthly subscription licenses
* Mocha - Latest general Mocha fixes
* Logging - Improved diagnostic logging
* Particle Illusion - Search text is shifted up at 150% or 200% scaling on Windows 4k
* Particle Illusion - Windows - Preferences window doesn't resize properly.
* Particle Illusion - Updated the "Custom" emitter library for a better starting point for creating new custom emitters.
* Particle Illusion - Crash after deleting second emitter from Custom library without clicking to select first
* Particle Illusion - Enter/Return in float parameter field does not update value/create key
* Particle Illusion - Selection stops working in emitter search text
* Particle Illusion - Updated LT_BlueWaveFlow preset with Glow param set to apply to Particles Only.
* Particle Illusion - When motion blur number of frames is set too high, resets to "4"
* Particle Illusion - Force Object bezier position key handles are not visible
* Particle Illusion - Jumping to next/prev key on an animated parameter incorrectly creates a new keyframe
* Particle Illusion - Forces Angle param should have both Angle param fields
* Particle Illusion - Improved default file naming in File->Save + ->Save As
* Particle Illusion - CTI not visible in some circumstances
* Particle Illusion - Incorrect sync of particle birth across free emitters
* Particle Illusion - Using Mocha there were no sub-frame emitter/particle positions for tracked emitters
* Particle Illusion - Erodes partially transparent regions of underlying clip when applied to clips with pre-existing alpha
* Title Studio - On Win, Edit menu options (such as Project Settings, Preferences, Shortcuts et al) do not work if Text Window is the focus & text track is not selected in the timeline.
* Title Studio - Style tabs have extra blank space after the name.
* Title Studio - 4K - FX Browser preset thumbnail text overlaps when small
* Title Studio - Second gradient stop is not present/accessible
* Title Studio - MacOS - some text entry fields were hard to see since the wrong text color was used in Dark Mode.
* Title Studio - Errors with certain unusual fonts
* Title Studio - Convert to Container breaks text materials
* Title Studio - 4k - Timeline track height is too big and spacing between the track is too small
* Title Studio - Check box X difficult to see
* Title Studio - Keyframe icon updated for 4k (now same icon for all interpolation types)
* Title Studio - Reflect Scene giving unpredictable results
* Title Studio - Change duplicate Opacity param name in Title Studio Composite group to Master Opacity to distinguish it from the one in the Transforms group
* Title Studio - About Box not coming up reliably on Mac.
* Title Studio - Gradient Stops are not updated or retained from controls tab
* Title Studio - Composite window zooms out to "Fit" when pen tool is selected from toolbar
* Title Studio - Spline Primitive name not updating when changed
* Title Studio - Tool Tips are missing for style tabs
* Title Studio - Ctrl + \[ can cause unexpected behavior
* Title Studio - Improved window layout / workspace handling with mixed resolution monitors
* Title Studio - Improved window layout / workspace handling with vertical monitor layout

<span style="font-size: 1rem;"> </span>

**Continuum 2020.5 v13.5.1 (BCC 13.5.1) for OFX was released on 6/19/2020.**

<span style="font-size: 1rem;"> </span>

**Continuum 2020.5 v13.5.1 for OFX (OpenFX) officially supports the following host applications:**

_Note that Continuum OFX may work to varying degrees in other OFX hosts, but at this time it is only officially supported in Resolve, Vegas, and Nuke.  Note that official Resolve support does not yet include the embedded Fusion page within Resolve.  Note that the Apple App Store version of Resolve is not fully supported and direct downloads of Resolve from the Blackmagic Design site should be used instead._

macOS 10.12, 10.13, 10.14, and 10.15 (as appropriate for the host version in use):

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, 14.x, 15.x, 16.x  (If using Resolve 14 then 14.1 or higher is strongly recommended.)
* Nuke 10, 11, 12

Windows 7 x64, Windows 8 x64, Windows 10 x64 (as appropriate for the host version in use):

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, 14.x, 15.x, 16.x  (If using Resolve 14 then 14.1 or higher is strongly recommended.)
* Vegas 13 (Sony)
* Vegas 14, 15, 16, 17 (Magix)
* Nuke 10, 11, 12 (4k monitor support on windows requires Nuke 12.1 or higher)

<span style="font-size: 1rem;"> </span>

**Additional Host Version Requirements:**

Note that due to variation from one OFX host to another, some features or effects may not be available in all OFX hosts.  Furthermore, some Continuum features have additional host version requirements:

* In order to access dynamic host frames in previews inside custom UI panes such as Mocha, Particle Illusion, Title Studio, and the FX Browser in Resolve you must use the paid Studio version of Resolve and you must use Resolve Studio 12.5 or higher.  Similarly BCC Optical Stabilizer requires the paid Studio version of Resolve.<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2020.5 v13.5.1 for OFX - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Dissolve Transitions: A fix for better match between 8/16/float bitdepth results when using the optional Color boost transition parameters such as Brightness and Contrast means that the look of some previous projects will have changed slightly in 8 and 16bit projects.
* Integrated Glow group (in Particle Illusion, Reframer, Beauty Studio, Light Leaks).  Previously the glow radius did not auto-scale with clip resolution causing presets to look different on HD vs 4k if they used the glow feature prominently.  Old projects with integrated glow might need to tweak the glow radius when reopened in the new version to adjust for this change.  (This does NOT affect Fast Film Glow or Fast Film Glow Dissolve).
* Particle Illusion and Particle Illusion Dissolve:  Fixes to random property granularity may change the details of individual particles in some projects, although the overall look and feel should remain the same.
* Particle Illusion and Particle Illusion Dissolve:  Fixes to Free Emitter birth timing may change the grouping/placement of particles in some projects, although the overall look and feel should remain the same.

<span style="font-size: 1rem;"> </span>

**Continuum 2020.5 for OFX 13.5.1 - Known Issues and Limitations:**

* Mocha PixelChooser - mocha track data is not saved with presets.  To clone mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one mocha UI instance to another. \[CO-4250\]
* Title Studio - Snap to guide - snapping is offset by 2 pixels. \[CO-5071\]
* Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks. \[CO-5788\]
* Moving Mocha from one monitor to another and relaunching it can cause UI refresh problems with mixed monitor resolutions \[CO-5829\]
* Mac OFX: Primatte Studio Toolbar overlay widget can displays garbled text on a 1080 monitor if the system also has a 4K monitor hooked up. \[CO-7809\]

<div id="ext-gen9245"> </div>