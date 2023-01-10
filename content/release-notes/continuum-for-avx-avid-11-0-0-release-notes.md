{
  "date": "2017-10-12T12:51:33Z",
  "description": "Continuum 11 (11.0.0) for Avid AVX release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ],
  "title": "Continuum for AVX - Avid - 11.0.0 Release Notes"
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum (BCC) 11.0.0 for AVX - Avid - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 11 for Avid (Summary of major changes since BCC10):**

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

* Avid UI Improvements - Simplified control layout.

* Avid Alpha Handling - Simplified and more powerful approach to alpha in Avid, allowing interop with Sapphire filters and even preserving alpha between tracks.

* EZ Mode added to 63 more filters

* Numerous bug fixes

<span style="font-size: 1rem;"> </span>

**Continuum 11.0.0 (BCC 11.0.0) for AVX - Avid hosts was released on 10/11/2017.**

<span style="font-size: 1rem;"> </span>

**Continuum 11.0.0 for AVX - Avid supports the following host applications:**

Macintosh:

* Avid Media Composer 6.5, 7, and 8.x  running Macintosh OS™ X 10.8, 10.9, 10.10, 10.11, and 10.12.

* Avid Symphony 6.5, 7, and 8.x running Macintosh OS™ X 10.8, 10.9, 10.0, 10.11, and 10.12.

Windows:

* Avid Media Composer Media Composer 6.5, 7, and 8.x running Windows 7 Professional (64-bit), Windows 8 Professional or Enterprise (64-bit), and Windows 10.

* Avid Symphony 6.5, 7, and 8.x running Windows 7 Professional (64-bit), Windows 8 Professional or Enterprise (64-bit), and Windows 10.

* Avid NewsCutter running Windows 7 Professional (64-bit), Windows 8 Professional or Enterprise (64-bit), and Windows 10.

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC11Documentation.zip "Offline Downloadable BCC Help Documentation").

* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum for AVX-Avid 11.x Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Title Studio: Title Studio now enforces that containers use either 2D (track order based) or 3D (Z depth based) compositing in order to maximize render quality.  Projects now default to using 2D scene containers which means that some older projects may not render exactly the same when reopened in the latest version.  If your project made use of cast shadows or z-depth based compositing order (as opposed track based) you may need to change the scene container type back to 3D or readjust the track order.

* Grunge:  fixes to incorrect color shifts in regions of partial transparency may change the brightness along the edges of alpha objects.

* BCC Light Leaks and Light Leaks Dissolve: fixes to incorrect color shifts in regions of partial transparency may change the brightness in soft alpha objects.

* BCC Textures - Due to a fix in the Texture Position control, the offset of textures may have shifted in several of the filters in the texture generators group, possibly requiring the Position to be tweaked to restore the original look although the overall look and feel remains the same.

<span style="font-size: 1rem;"> </span>

**BCC for AVX 11.0.0 - Known Issues and Limitations:**

* mocha PixelChooser - mocha track data is not saved with presets.  To clone mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one mocha UI instance to another. \[645\]

* <span style="font-size: 1rem;">mocha PixelChooser - export to BCC motion tracker formats requires the host application be set to full resolution for the exported track data to be correctly scaled. \[1675\]</span>

* Title Studio - The Frame Cache is not automatically Purged when you manually change the PAR (pixel aspect ratio). \[1964\]

* <span style="font-size: 1rem;">Custom UI views such as the Title Studio UI, FX Browser, License Dialog, or Preferences Dialog don't adapt to High-DPI displays on windows which can cause some fonts to render too small and be difficult to read. \[3335\]</span>

* Extruded EPS does not preserve colors from some EPS files. \[4290\]

* <span style="font-size: 1rem;">Particle Emitter 3D incorrectly generates particles on frame 0 when some Spawn options are enabled. \[4259\]</span>

* PixelChooser - shape feathering option is not implemented in OpenGL filters. \[497\]

* <span style="font-size: 1rem;">Title Studio Plugin Mac - Menu Bar doesn't update back when toggling apps until you cancel or apply from Title Studio UI. \[1539\]</span>

* <span style="font-size: 1rem;">Optical Stabilizer, inserting a transition at the head of the stabilized clip makes it lose stabilization & the filter has to be re-analyzed. \[431\]</span>

* <span style="font-size: 1rem;">Geometrics drop shadow option in OpenGL filters can produce unexpected colors. \[877\]</span>

* <span style="font-size: 1rem;">PixelChooser - Circle and Egg Shape modes render incorrectly in OpenGL filters on Avid. \[1070\]</span>

* <span style="font-size: 1rem;">PixelChooser - Circle and Egg Shape can show stretched shapes or feathering when in interlaced projects and set to Speed Optimized. As a workaround you can change the Fields menu in the General Controls group to Quality Optimized. \[1107\]</span>

<div id="ext-gen9245"> </div>
