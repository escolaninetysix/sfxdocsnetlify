{
  "title": "Continuum 2019 for OFX - 12.0.4 Release Notes",
  "date": "2019-05-01T08:00:00-04:00",
  "description": "Continuum 2019 (12.0.4) for OFX release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2019.0.4 for OFX v12.0.4  - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 2019.0.4 (v12.0.4) for OFX officially supports DaVinci Resolve and Vegas.  The embedded Fusion page in Resolve is not officially supported at this time.  Other OFX hosts may work to varying degrees but are not yet officially supported.

**Fixes in Continuum (BCC) 12.0.4 for OFX:**

* Sporadic stalls in performance on systems with certain closed network configurations.
* Sporadic errors in some hosts when scrubbing parameters or current timeline indicator in host UI with Particle Illusion applied.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.4 v12.0.4 (BCC 12.0.4) for OFX was released on 5/1/2019.**

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.4 v12.0.4 for OFX (OpenFX) officially supports the following host applications:**

_Note that Continuum OFX may work to varying degrees in other OFX hosts, but at this time it is only officially supported in Resolve and Vegas.  Note that official Resolve support does not yet include the embedded Fusion page within Resolve._

macOSX 10.10, 10.11, 10.12, 10.13, and 10.14 (as appropriate for the host version in use):

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, 14.x, 15.x  (If using Resolve 14 then 14.1 or higher is strongly recommended.)

Windows 7 x64, Windows 8 x64, Windows 10 x64 (as appropriate for the host version in use):

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, 14.x, 15.x  (If using Resolve 14 then 14.1 or higher is strongly recommended.)
* Vegas 13 (Sony)
* Vegas 14, 15, 16 (Magix)

<span style="font-size: 1rem;"> </span>

**Additional Host Version Requirements:**

Note that due to variation from one OFX host to another, some features or effects may not be available in all OFX hosts.  Furthermore, some Continuum features have additional host version requirements:

* In order to access dynamic host frames in previews inside custom UI panes such as Mocha, Particle Illusion, Title Studio, and the FX Browser in Resolve you must use the paid Studio version of Resolve and you must use Resolve Studio 12.5 or higher.  Similarly BCC Optical Stabilizer requires the paid Studio version of Resolve.<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.4 v12.0.4 for OFX Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Particle Illusion received major performance enhancements (especially for long clips) both when rendering and when working in the PI UI, but these enhancements required changes to the random number generation patterns.  Projects created in 12.0.0. will be differently randomized in 12.0.1 (as if the seed had changed), but the overall look and feel should remain the same.
* Particle Illusion projects saved in Continuum 12.0.1 cannot be opened in Continuum 12.0.0 due to numerous fixes in the project format.
* Particle Illusion _emitter libraries_ saved in PI3 are fully supported in the new Continuum Particle Illusion (with some exceptions noted below), but PI3 _project files_ are NOT supported in the new Particle Illusion.
* Older plugin versions of Particle Illusion (V3 or earlier) are completely distinct from the new Continuum Particle Illusion and those older plugin projects will not migrate to this new plugin.  However, you should be able to leave those older plugin versions installed on your system alongside the newer Continuum Particle Illusion.
* Not all features of the older Particle Illusion (V3 or earlier) are fully supported in the initial release of the new Continuum Particle Illusion.  This may affect the ability to fully use some older emitter libraries or to perform some actions supported in the older Particle Illusion.  Future updates to Continuum Particle Illusion will restore many of these features over time:
  * Editing emitter sprites
  * Rendering/exporting videos from the standalone Particle Illusion UI.  Rendering is only supported via the plugin’s host timeline at this point.
  * Saving new or modified emitters back to a library.
  * Updating emitter library thumbnails
  * Deflectors, and Forces
  * Record Position feature  - i.e. recording mouse movements for conversion to position keyframes.
  * Stage view widgets for Layer and Emitter angle
* Title Studio - Ambient light fixes may cause saved projects to render brighter in the new version requiring possible tweaks to the light intensity.
* 3D Objects - Texture scaling improvements may cause some textures to be stretched/sized differently in the new version.
* Resolve - Due to host side changes regarding trimmed clip handling in Resolve 15, the internal timing of trimmed clips is different now.  This means that projects saved with mocha PixelChooser tracks in older versions of Resolve will have shifted mask timing and will need to be re-tracked.  This also means that effects which automatically evolved based on time (such as generators) may show different results when opening projects from older versions of Resolve inside Resolve 15.
* OpenGL blur quality enhancements may slightly change perceived blur amount in some filter elements.
* Prism - Fixes to alpha / premultiplication handling will produce different results in intermediate alpha regions.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.4 for OFX 12.0.4 - Known Issues and Limitations:**

* mocha PixelChooser - mocha track data is not saved with presets.  To clone mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one mocha UI instance to another. \[CO-4250\]
* Custom UI views such as the Title Studio UI, FX Browser, License Dialog, or Preferences Dialog don't fully adapt to High-DPI displays on windows which can cause some fonts to render too small and be difficult to read. \[CO-3269\]
* Title Studio - Snap to guide - snapping is offset by 2 pixels. \[CO-5071\]
* Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks. \[CO-5788\]
* Title Studio - When applied in the Resolve Edit Tab (but not in the Color Tab), Title Studio is unusually It is recommended that the Color page be used for Title Studio in Resolve for the time being. \[CO-5807\]

<div id="ext-gen9245"> </div>