{
  "title": "Continuum 2022 (v15.0.1) for OFX release notes",
  "date": "2021-12-22T17:01:00-05:00",
  "description": "Continuum 2022 (v15.0.1) for OFX release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2022 (v15.0.1) for OFX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2022 (v15.0.1) is a maintenance update to Continuum 2022 (v15.0.0) and is a free update for licensed users of Continuum 2022.  It includes several important fixes and feature enhancements (see below).  For a full list of what's new between Continuum 2022 and the previous Continuum 2021.5 major release, please refer to the initial 2022 release notes:

[Continuum 2022 (v15.0.0) for OFX Release Notes](/release-notes/continuum-2022-v15.0.0-for-ofx-release-notes/)

<span style="font-size: 1rem;"> </span>

**Feature Enhancements in 2022 (v15.0.1) Update for OFX:**

* Particle Illusion Tint Controls
  * Tint Color and Tint Amount controls are now available inside the Composite group in the host plugin controls for easily adjusting the colors of the overall PI scene right in the native UI.
* Particle Illusion Fluid Animation Improvements
  * Fluid animation has been improved with more natural flow and particle disbursement.

<span style="font-size: 1rem;"> </span>

**Fixes and Polish in Continuum 2022 (v15.0.1) Update for OFX:**

* Optical Stabilizer - Avoid reporting overlay large frame requests during render events to improve performance and in some cases stability with certain OFX hosts
* Nuke - Fix duplicate param names in 3D Image Shatter and Particle Emitter 3D
* Licensing - Improved handling of unit plugin licenses for BCC+ filters in OFX units
* Licensing - OFX Mac - license deactivation tool doesn't appear when uninstalling.
* Licensing - Sentinel dongles are now working on Mac.  (Note, older Super Pro dongles are no longer supported on mac.  Please discuss replacement with Support.)
* BCC+ Lens Flare and related light filters - Improved alpha handling in soft alpha regions
* Title Studio / 3D Objects - Mac only - Isolated crash on launch with certain prefs settings.
* Title Studio - Host crashes when editing text created by text tool
* Mac Installer - Application Install Folder - Unification with other Boris FX products
* OFX BCC+ Mocha - Display message in frame to instruct user to force a refresh if mocha is unable to render initial frames during application launch due to not yet being initialized in BCC+
* Particle Illusion - Lines ignore host-side Opacity parameter value
* Particle Illusion - Dragging CTI while effect is building the cache in the PI UI could causes sporadic discontinuities
* Particle Illusion - "Emit in 3D" is no longer automatically checked for emitters in 3D projects
* Particle Illusion - Adding an emitter doesn't automatically select the emitter
* Particle Illusion - Fix spurious warning statement in log
* Particle Illusion - Fix for starting up without timeline panel on certain windows multi-monitor setups
* Particle Illusion - World View changes/distorts when camera position animated
* Particle Illusion - Particles of Super Emitters not affected by fluids
* Particle Illusion - Possible fix for MGP export errors on certain machines when rendering from PI UI
* Particle Illusion - Fluid Dynamics Performance tweaks
* Particle Illusion - Change project settings blur items so always displayed (not dependent on state of "enable" setting)
* Particle Illusion - Object selection in stage does not always apply in node and controls view
* Particle Illusion - "Save" menu item should be disabled if project is unchanged
* Particle Illusion - Memory usage creeps up over time
* Particle Illusion - On Fluids projects with motion blur, sporadic crashing when adjusting the number of motion blur frames
* Particle Illusion - Fluids - Free Emitters created by Super Emitters were not affected by fluids.
* Particle Illusion - New Noise slider in fluids to spread out clumped particles when desired
* Particle Illusion - Scene thumbs not drawing with correct brightness in emitter library preview pane
* Particle Illusion - Motion blur settings shown in project settings dialog do not always match what is actually used
* Particle Illusion - Any 3D view besides "Render View" uses significantly more CPU time
* Particle Illusion - When renaming Scenes Library Emitters the "+" is added to the name a second time
* Particle Illusion - After adding a scene to a project, all object nodes are selected
* Particle Illusion - Circle emitters emission inaccurate in 3D projects
* Particle Illusion - Layer widget disappears and particles do not render on stage in PI UI for resolutions above (5005 x X)

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.1) (BCC 15.0.1) for OFX was released on 12/22/21.**

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.1) for OFX (OpenFX) officially supports the following host applications:**

_Note that Continuum OFX may work to varying degrees in other OFX hosts, but at this time it is only officially supported in Resolve, Vegas Pro, and Nuke.  Note that official Resolve support does not yet include the embedded Fusion page within Resolve.  Note that the Apple App Store version of Resolve is not fully supported and direct downloads of Resolve from the Blackmagic Design site should be used instead._

macOS 10.14, 10.15, 11.x, 12.0  (as appropriate for the host version in use):    Note, Continuum 2022 supports running natively on M1/ARM64 native chipsets for Resolve host versions which themselves support running natively on M1/ARM64.  Note the Particle Illusion custom UI runs in Rosetta emulation mode while the rest of Continuum including Particle Illusion _rendering_ will run natively in native host enviroments.  Note that Title Studio does not support loading/rendering C4D models when running natively on M1/ARM64.

\[Up to host versions released at time of Continuum release\]:

* DaVinci Resolve Studio and DaVinci Resolve 15.x, 16.x, 17.x
* Nuke 12, 13

Windows 10 x64 and Windows 11 \[Up to host versions released at time of Continuum release\]:

* DaVinci Resolve Studio and DaVinci Resolve 15.x, 16.x, 17.x
* 15, 16, 17, 18, 19 (Magix)
* Nuke 12, 13 (4k monitor support on windows requires Nuke 12.1 or higher)

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.1) for OFX - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Due to technical difficulties with newer versions of Resolve on macOS, the 3D Objects category of filters (including Title Studio) is disabled in Resolve on macOS.  We are working with Resolve engineering on a solution.
* Title Studio does not support loading/rendering C4D models when running natively on M1/ARM64
* The Render Legacy Motion Tracker option was removed to conform to host architecture changes.  Projects saved in much older versions of Continuum that used the old legacy motion tracker will no longer use the legacy track data.  Any such old projects will need to re-track the motion in the current Mocha-based Motion Tracker implementation.  This does NOT affect projects where the tracking was done with Mocha.
* PI Grid force objects "direction variation" is now more correct and thus renders differently than before
* PI 3D Deflectors didn't correctly deflect in 3D which changes the look of existing projects
* BCC+ filters with Affect Alpha will now have Affect Alpha set to 100 always and this parameter will be hidden as this is almost universally the desired approach.
* BCC+ Vignette default settings improvements mean that some older projects may render with modified values for opacity, aspect, softness, or blur in Resolve.
* BCC+ Lens Flare and related filters have improved handling in regions of soft alpha channels which changes the look of existing projects
* PI Fluids projects created in 15.0.0 may look significantly different in 15.0.1 due to fixes in the fluid geometry which yield more natural fluid motion and particle disbursement
* Older Super Pro dongles are no longer supported on Mac.  Please discuss dongle replacement with BorisFX Support.

<span style="font-size: 1rem;"> </span>

**Continuum 2022 (v15.0.1) for OFX - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-9244 - 3D Objects category of filters including Title Studio are disabled on macOS Resolve due to technical difficulties with that host.
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-9511 - BCC+ Vignette renders differently between CPU and GPU on mixed sized clips in Vegas
* CO-9789 - BCC+ - Some presets/FX Editor settings do not applying correctly for ganged parameter types when the y param is adjusted

<div id="ext-gen9245"> </div>