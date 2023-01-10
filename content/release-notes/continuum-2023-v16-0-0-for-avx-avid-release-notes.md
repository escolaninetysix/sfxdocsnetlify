{
"date": "2022-10-26T12:02:04.000Z",
  "title": "Continuum 2023 (v16.0.0) for AVX - Avid - Release Notes",
  "description": "Continuum 2023 (v16.0.0) for AVX - Avid Media Composer - Release Notes"
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2023 (v16.0.0) for Avid AVX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2023 for AVX - Avid Media Composer (Summary of major changes since Continuum 2022.5):**



**New BCC+ Atmospheric Glow Effect**
* An exciting new glow style mega-filter effect that brings instant atmospheric looks to an otherwise flat scene.



**10 New/Ported BCC+ Transitions**
* BCC+ Film Roll
* BCC+ Swish Glow
* BCC+ Swish Pan
* BCC+ Swish Prism
* BCC+ Swish Warp
* BCC+ Linear Wipe
* BCC+ Radial Wipe
* BCC+ Rectangular Wipe
* BCC+ Texture Wipe
* BCC+ Vignette Wipe



**Particle Illusion Feature Enhancements**
* New 2023 Emitter Library
* Performance - many combined performance improvements for big boosts in both interactive update and rendering speeds
* Revised user interface with cleaner layout and better grouping of parameters in the control panel
* New Fluid Swirling Frequency for enhanced stylistic control of fluid motion
* New Affected by Fluids control allows fluid forces to be skipped on some emitters
* New Force Feather controls gradual falloff in the strength of a Force object around its edges
* New Emit From 3D Normals for alternate 3D Model emission style
* Numerous UI Refinements Including:
  * Param De-emphasis - params that currently have no effect are drawn grayed out (based on other properties of the setup including in other nodes)
  * Alpha Gradient now directly accessible next to color gradient in node view
  * Scale Particle Number - control whether line emitters/mask emitters automatically scale up the number of particles vs leaving the particle count unchanged
  * Stage Tooltips now work even in 3D view

  * Numerous usability enhancements to Shape import/edit dialog
  * Creates backup of saved file/library if saving would change the project version
  * Motion Blur UI improvements
  * Increase Viscosity, Frame Delay, and Number of Points parameter max values.
  * Resizing the custom GUI maintains relative position and scale between window panes



  * Many miscellaneous UI tweaks and polish

**BCC+ Light New Gobos and Tiling**
* 50 new, seamlessly tiling gobo presets in the Abstract, Foliage, Glass, and Texture categories. Choose the "New" tag in the FX Editor to see them all.
* New Edge Mode option with Wrap and Reflect abilities that let you infinitely tile textures.



**BCC+ Film Glow - New Secondary Glow**
* A new set of independent secondary glow params allows chained glows for easier creation of more diverse looks.




**New Presets Across a Variety of Filters**
* BCC+ Beauty Studio
* BCC+ Camera Shake
* BCC+ Chroma Bands
* BCC+ Chromatic Aberration
* BCC+ Develop
* BCC+ Film Glow
* BCC+ Light Leaks
* BCC+ Prism
* BCC+ Vignette
* BCC+ X-Ray


**Improved Mocha Performance**
* Tracking performance has been improved by up to 50% on Apple Silicon hardware


**Title Studio Enhancements**
* Missing Font Reporting - will now automatically check for and report any missing fonts that are being used in a project
* C4D import now supported on Apple Silicon hardware


**BCC+ Film Grunge Refinements**
* Gate Weave section has new Auto Scale option and expanded ranges. Allows more stylized, dramatic weave/shake looks.


**_Other Fixes and Polish in Continuum 2023 v16.0.0 for AVX - Avid Media Composer:_:**

* Avid - skip loading plugins in Avid's background Phonetic Indexer process to minimize unnecessary resource utilization.
* Film Stocks and other BCC+ filters with Curves control - Fix rendering clamped on Apple Silicon hardware
* BCC+ Transitions - adjust timing so transition reaches full completion on the last frame.  May affect the perceived timing of transitions by 1 frame in saved projects.
* BCC+ Rays - Rays Only mode now reflects the Brightness and Color params
* BCC+ Light - Fix missing thumbnail images for Glass texture category on Windows
* BCC+ Light - Fix shear direction
* BCC+ Film Grunge - Fix asymmetric Gate Weave
* BCC+ Vignette - Fix premultiplication issues when applied to alpha clips
* BCC+ Vignette - CPU mode did not produce the same result as GPU
* Title Studio - 3D models sometimes have small polygon alignment changes after saving/reopening
* Title Studio - updated some presets that referenced OS-specific fonts
* Title Studio - Prevent invalid media formats from being selected as texture tracks
* Particle Illusion - Fixed Affect Fluid control in free emitter
* Particle Illusion - Improved support for several C4D and OBJ emitter files
* Particle Illusion - Fix "over life" graphs animation detection
* Particle Illusion - "Threshold Angle" not working as expected for "Vertices" emission.
* Particle Illusion - "Attached" particles should stick to 3D model when model scale changes.
* Particle Illusion - Position turbulence with free emitters is not applied to first frame of free emitter's life
* Particle Illusion - Presets/projects with 3D Models made on Mac don't render in host on Win and vice versa
* Particle Illusion - Improved graph view bezier handles
* Particle Illusion - Some particles appear "stuck" at fluids boundary when leaving force area
* Particle Illusion - Renamed saved emitter loads up with original name not the new one
* Particle Illusion - particles do not scale with 3D model and always emit from the original size of the model
* Particle Illusion - Motion Blur button (and menu) are now set correctly and disabled when motion blur is forced on or off by host.
* Particle Illusion - when using host camera, only show "using host camera" in Controls View instead of showing all camera parameters
* Particle Illusion - Improve error handling for unsupported library versions.


<span style="font-size: 1rem;"> </span>


**Continuum 2023 v16.0.0 (BCC 16.0.0) for Avid AVX was released on 10/26/2022.**


<span style="font-size: 1rem;"> </span>


**Continuum 2023 v16.0.0 for Avid AVX supports the following host applications:**

Macintosh:

* Avid Media Composer 2018.x, 2019.x, 2020.x, 2021.x, 2022.x (up to Avid versions released at time of Continuum release) and running macOS 10.14, 10.15, 11.x, 12.x, 13.x (up to OS version at time of Continuum release and as appropriate for the host version in use).

Windows:

* Avid Media Composer 2018.x, 2019.x, 2020.x, 2021.x, 2022.x (up to Avid versions released at time of Continuum release) and running Windows 10 or Windows 11

<span style="font-size: 1rem;"> </span>


**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>


**Continuum 2023 v16.0.0 for AVX - Avid - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Particle Illusion 3D environment enhancements and bug fixes may cause some projects to render with individual particle differences, although the overall look and feel should remain the same.
* BCC+ Transitions - Fix to adjust timing so transition reaches full completion on the last frame may affect the perceived timing of transitions by 1 frame in saved projects.


<span style="font-size: 1rem;"> </span>


**Continuum 2023 v16.0.0 for AVX - Avid - Known Issues and Limitations:**

* CO-8221 - Particle Illusion - Broken particles occasionally falling through deflector
* CO-8326 - The FX Editor window does not block access to the host UI while it is up which can lead to stability problems if you make adjustments in the host while the FX Editor is still open.
* CO-8824 - BCC+ filters in Avid don't support Avid's 16bit mode and will render in 8 bit under the hood.  Use 32 bit float projects to ensure maximum fidelity.
* CO-8820 - Mocha PixelChooser data modified when loading presets in Avid even when pref is set to not change PixelChooser/Mocha data
* CO-9436 - Particle Illusion: "Preserve Color" black particles sometimes drawn offset (2D mode)
* CO-9391 - BCC+ Cross Processing and BCC+ Color Paste clamp in HDR
* CO-9370 - BCC+ Color Gradient - ND Brightness feature ignores alpha
* CO-10220 - BCC+ Crash Zoom Dissolve - angle animation is not as smooth as it should be
* CO-10213 - FX Editor preview sometimes shows incorrect colors after changing OCIO colorspace multiple times



<div id="ext-gen9245"> </div>