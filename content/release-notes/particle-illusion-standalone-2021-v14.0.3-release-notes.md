{
  "title": "Particle Illusion Standalone 2021 (v14.0.3) - Release Notes",
  "date": "2021-03-29T17:00:00-04:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Particle Illusion"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Particle Illusion Standalone 2021 (14.0.3) - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Particle Illusion Standalone 2021 (v14.0.3) is a maintenance update to Particle Illusion Standalone 2021 (v14.0.2).  It includes important fixes (see below), and is recommended for all users.  For a full list of what's new between PI 2021 and the previous PI 2020.5 major release please refer to the initial 2021 release notes here:

[Particle Illusion Standalone 2021 (v14.0.2)](/release-notes/particle-illusion-standalone-2021-v14.0.2-release-notes/)

<span style="font-size: 1rem;"> </span>

**Fixes and Polish in Particle Illusion Standalone 2021 (v14.0.3):**

* Fix failures to fully launch the Particle Illusion UI and/or crashing/hanging upon first adding an emitter to the stage in certain scenarios where Particle Illusion had been used previously with a different set of emitters.
* Graph View - Couldn't drag params from min or max values easily

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2021 (v14.0.3) was released on 3/29/2021.**

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2021 (v14.0.3) supports the following platforms:**

macOS 10.13, 10.14, 10.15, 11.0 (Intel chipsets only.  ARM chipsets are not supported in this version.)

Windows 10 x64

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Particle Illusion.

* Detailed help documentation is available on the Boris FX website: [Particle Illusion Documention](/documentation/continuum/bcc-particle-illusion/ "BCC Help Documentation")
* [BorisTV](/videos/) video tutorials cover a huge range of topics from initial introductions, to deep training Webinar Replays, to in-depth looks at specific techniques.  It contains an extensive series of videos on all aspects of Particle Illusion.

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2021 (v14.0.3) - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Fixes to the Particle Illusion layer order may affect the look of old projects if they contained multiple layers inside the Particle Illusion UI (not common).  Layers cannot be reordered at this time and adding additional layers is not longer supported.
* Fixes to the Particle Illusion Particle Type handling may slightly affect the look of old projects, particularly if they used multiple Particle Type instances.  The exact randomization pattern may be different, but the overall look and feel should remain the same.

<span style="font-size: 1rem;"> </span>

**Particle Illusion Standalone 2021 (v14.0.3) - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - Custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8319 - Particle Illusion - Missing top window bar to minimize or maximize when reopened on secondary monitor in some circumstances.
* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8678 - Particle Illusion - Layer widget disappears and particles do not render on stage for some high resolution projects at 5k+
* CO-8659 - Particle Illusion - Window - Cannot edit text for Export Range field values etc. if Render window is opened from File menu unless other elements are edited first.  Opening the Render dialog from the Render button in the Stage view does not have this issue.
* CO-8699 - Emitters with "Single Particle" causes deflector "break particles" to trigger long delays

<div id="ext-gen9245"> </div>