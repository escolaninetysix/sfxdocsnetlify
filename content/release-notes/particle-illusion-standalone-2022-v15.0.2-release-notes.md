{
  "title": "Particle Illusion Standalone 2022 (v15.0.2) - Release Notes",
  "date": "2022-01-25T20:00:00-05:00",
  "description": "Particle Illusion Standalone 2022 (v15.0.2) - Release Notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Particle Illusion"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Particle Illusion Standalone 2022 (15.0.2) - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Particle Illusion Standalone 2022 (Summary of major changes since Particle Illusion Standalone 2021.5):**

**_Feature Enhancements:_**

* Fluid Dynamics
  * Apply fluid dynamics as a Force object in any Particle Illusion scene for a vast new range of organic motion possibilities.
* Particle Illusion Scene Library
  * You can now save entire scenes as Particle Illusion emitter library entries.  In the past a library could include just a single emitter, but now you can include not only multiple emitters, but also multiple forces including fluids and more.  Nearly all project settings can now be saved into an emitter library template entry for easy sharing and instant reuse.
* New 2022.0 Emitter Library
* Native M1/ARM64 support
  * Particle Illusion now fully supports running natively on the latest Apple Silicon hardware for the fastest possible performance on Mac systems.

**_Other Fixes and Polish:_**

* Particle Illusion - Emission angle in 3D is inconsistent with the way it works in 2D
* Particle Illusion - Faster performance for 3D Box Grid Force objects
* Particle Illusion - Can't duplicate node via Edit->Duplicate or Ctrl+D
* Particle Illusion - New Render Completion sound
* Particle Illusion - Cache indicator doesn't show when first emitter is disabled
* Particle Illusion - Render from within PI UI crashes when project FPS is too high
* Particle Illusion - Changing value of one emitter's parameter can change another emitter's parameter too
* Particle Illusion - Import shape (sprite) does not work using "Apply to Current Emitter"
* Particle Illusion - Changing view (Render, World, Top, etc.) causes unnecessary particle recalculation
* Particle Illusion - Improved performance with high Motion Blur count
* Particle Illusion - Deflectors don't correctly deflect in 3D
* Particle Illusion - Grid force objects "direction variation" not correct in 3D
* Particle Illusion - Adjust default camera DOF parameters to have more visible result
* Particle Illusion - "Emit in 3D" is no longer automatically checked for emitters in 3D projects
* Particle Illusion - Fix spurious warning statement in log
* Particle Illusion - Fix for starting up without timeline panel on certain windows multi-monitor setups
* Particle Illusion - World View changes/distorts when camera position animated
* Particle Illusion - Possible fix for MGP export errors on certain machines when rendering from PI UI
* Particle Illusion - Change project settings blur items so always displayed (not dependent on state of "enable" setting)
* Particle Illusion - Object selection in stage does not always apply in node and controls view
* Particle Illusion - "Save" menu item should be disabled if project is unchanged
* Particle Illusion - Motion blur settings shown in project settings dialog do not always match what is actually used
* Particle Illusion - Any 3D view besides "Render View" uses significantly more CPU time
* Particle Illusion - Circle emitters emission inaccurate in 3D projects
* Particle Illusion - Layer widget disappears and particles do not render on stage in PI UI for resolutions above (5005 x X)
* Mac Installer - Registration Dialog fails the installer if certain unicode characters were entered on a previous installer run

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2022 (v15.0.2) was released on 1/25/2022.**

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2022 (v15.0.2) supports the following platforms:**

macOSX 10.14, 10.15, 11.x, 12.0

Particle Illusion 2022 is a "universal" application and runs natively on either Intel or ARM64/M1 Apple Silicon hardware.

Windows 10 x64, Windows 11:

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Particle Illusion.

* Detailed help documentation is available on the Boris FX website: [Particle Illusion Documentation](/documentation/continuum/bcc-particle-illusion/ "BCC Help Documentation")
* [BorisTV](/videos/) video tutorials cover a huge range of topics from initial introductions, to deep training Webinar Replays, to in-depth looks at specific techniques.  It contains an extensive series of videos on all aspects of Particle Illusion.

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2022 (v15.0.2) - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* PI Grid force objects "direction variation" is now more correct and thus renders differently than before
* PI 3D Deflectors didn't correctly deflect in 3D which changes the look of existing projects

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2022 (v15.0.2) - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-9436 - Particle Illusion - "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9935	- Particle Illusion - Particle locations can vary slightly from one render to the next in some projects that use Deflectors
* CO-9915 - Particle Illusion - Saved library scene does not display Force/Fluid set up until UI is refreshed.

<div id="ext-gen9245"> </div>