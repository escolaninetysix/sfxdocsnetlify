{
  "title": "Continuum for OFX - 11.0.2 Release Notes",
  "date": "2018-01-04T12:17:01Z",
  "tags": [
    "Continuum Complete"
  ],
  "description": "Continuum 11 (11.0.2) for OFX release notes",
  "excerpt": "",
  "image_url": ""
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum (BCC) 11.0.2 for OFX - OpenFX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

Continuum 11.0.2 for OFX officially supports DaVinci Resolve, Nuke, and Vegas.  Other OFX hosts may work to varying degrees but are not yet officially supported.

<span style="font-size: 1rem;"> </span>

**Enhancements in Continuum (BCC) 11.0.2 for OFX:**

* Improved Resolve 14 support - Overlays no longer flicker/jump and loading/saving of motion tracker data and presets is more robust
* VR Sharpen - GPU acceleration using OpenCL
* VR Blur  - GPU acceleration using OpenCL (in 8bit projects)
* VR Sharpen - new Edge Sensitivity mode offering quality/performance tradeoff.
* Title Studio - many new and improved presets including switch to universal fonts and better preset integration with FX Browser.
* Title Studio and Type on Text - improved edge quality in 3D scenes
* VR Insert - new Repeat option "Front + 1/3 sides"
* VR Insert - new Feather option for inserted graphic
* VR Insert - render quality improvements including cleaner edges
* Numerous additional bug fixes, particularly in Title Studio, VR filters, licensing, and particles.

<span style="font-size: 1rem;"> </span>

**Continuum 11.0.2 for OFX was released on 1/8/2018 and is an update to:**

* [Continuum 11.0.1 for OFX](/release-notes/continuum-for-ofx---11.0.1-release-notes/ "Continuum 11.0.1 for OFX")

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 11 for OFX (Summary of major changes since BCC10):**

* 7 New Effects:
* _Broadcast Safe_
* _Primatte Studio_
* _VR Blur_
* _VR Flicker Fixer_
* _VR Insert_
* _VR Reorient_
* _VR Sharpen_
* RLM Based Licensing.
* <span style="font-size: 1rem;">BCC 3D Objects Category - improved edge quality</span>
* BCC Title Studio - Performance Improvements - particularly with static titles.
* BCC Title Studio - Expanded preset library.
* BCC Title Studio - Numerous UI enhancements.
* Mocha PixelChooser - Faster rendering and tracking and improved tracking accuracy.
* New Presets in Particle Emitter 3D and Particle Array
* <span style="font-size: 1rem;">BCC Motion Blur - improved optical flow accuracy under Advanced Mode.</span>
* Improved text rendering for overlay labels on Retina macs.
* Numerous bug fixes

<span style="font-size: 1rem;"> </span>

**Continuum 11.0.2 for OFX (OpenFX) officially supports the following host applications:**

_Note that Continuum OFX may work to varying degrees in other OFX hosts, but at this time it is only officially supported in Resolve, Nuke, and Vegas._

Mac OSX™ 10.10, 10.11, 10.12, and 10.13:

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, and 14.x.  (If using Resolve 14 then 14.1 or higher is strongly recommended.)
* Nuke 10.x, 11.x

Windows 7 x64, Windows 8 x64, Windows 10 x64:

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, and 14.x.  (If using Resolve 14 then 14.1 or higher is strongly recommended.)
* Nuke 10.x, 11.x
* Vegas 13 (Sony)
* Vegas 14, 15 (Magix)

<span style="font-size: 1rem;"> </span>

**Additional Host Version Requirements:**

Note that due to variation from one OFX host to another, some features or effects may not be available in all OFX hosts.  Furthermore, some BCC features have additional host version requirements:

* In order to access the mocha PixelChooser, BCC Optical Stabilizer, and FX Browser dynamic video previews when running in DaVinci Resolve, you must use the paid Studio version of Resolve and you must use Resolve Studio 12.5 or higher.<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC10Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum for OFX (OpenFX) 11.x Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Title Studio: Title Studio now enforces that containers use either 2D (track order based) or 3D (Z depth based) compositing in order to maximize render quality.  Projects now default to using 2D scene containers which means that some older projects may not render exactly the same when reopened in the latest version.  If your project made use of cast shadows or z-depth based compositing order (as opposed track based) you may need to change the scene container type back to 3D or readjust the track order.
* Grunge:  fixes to incorrect color shifts in regions of partial transparency may change the brightness along the edges of alpha objects.
* BCC Light Leaks and Light Leaks Dissolve: fixes to incorrect color shifts in regions of partial transparency may change the brightness in soft alpha objects.
* BCC Textures - Due to a fix in the Texture Position control, the offset of textures may have shifted in several of the filters in the texture generators group, possibly requiring the Position to be tweaked to restore the original look although the overall look and feel remains the same.
* More accurate edge quality handling in blur filters and other filters which use blurs internally will cause minor changes to pixel values near the edges in some clips.

<span style="font-size: 1rem;"> </span>

**BCC for OFX (OpenFX) 11.0.2 - Known Issues and Limitations:**

* Due to host-side limitations in Resolve 14.0.0 and 14.0.1, it is strongly recommended that users of Resolve 14.x use version 14.1 or higher.
* Due to host-side limitations in some Resolve 14 versions (and earlier) the Primatte Studio toolbar widget is disabled in Resolve.  We are working with BlackMagic engineering to resolve this issue.
* When using Primatte Studio in Vegas, if you apply the filter and you are not on frame 0, you MUST manually move the CTI again after applying the filter or else all Primatte image sampling will come from frame 0 even when you are not actually on frame 0.
* mocha PixelChooser - mocha track data is not saved with presets.  To clone mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one mocha UI instance to another. \[645\]
* <span style="font-size: 1rem;">mocha PixelChooser - export to BCC motion tracker formats requires the host application be set to full resolution for the exported track data to be correctly scaled. \[1675\]</span>
* Title Studio - The Frame Cache is not automatically Purged when you manually change the PAR (pixel aspect ratio). \[1964\]
* <span style="font-size: 1rem;">Custom UI views such as the Title Studio UI, FX Browser, License Dialog, or Preferences Dialog don't adapt to High-DPI displays on windows which can cause some fonts to render too small and be difficult to read. \[3335\]</span>
* <span>3D Objects filters may render black on some systems in Nuke the very first time Nuke is launched after installing or updating BCC.  Relaunching Nuke after the first launch eliminates the problem.</span>

<div id="ext-gen9245"> </div>
