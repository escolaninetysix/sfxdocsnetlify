{
  "title": "Continuum 2021 (v14.0.0) for OFX - Release Notes",
  "date": "2020-10-27T23:02:00-04:00",
  "description": "Continuum 2021 (v14.0.0) for OFX release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2021 (v14.0.0) for OFX - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**What's New in Continuum 2021 for OFX - OpenFX (Summary of major changes since Continuum 2020.5):**

**_81 New Fully GPU Accelerated "BCC+" Cinematographer's Toolkit Effects:_** Eighty-one new 100% OpenCL accelerated cinematic filters for coloring, lighting, camera lens, film stock emulation, and more. These augment existing Continuum categories (Units) as well as adding three new categories of filters.  All of the new filters are fully HDR compliant and include a new FX Editor preset browser and custom preset generator with 1,000+ presets, OCIO color management tools, metadata tagging, and the ability to edit parameters from directly inside the browser. Summary of new BCC+ filters by category:

* BCC Art Looks:
  * Borders, Color Infrared, Color Shadow, Harris Shutter, Infrared, Night Vision, X-Ray
* BCC Blur:
  * Detail
* BCC Color and Tone:
  * Black and White, DeFog, Develop, Enhancing, Grade, High Contrast, Kelvin, Low Contrast, Polarizer, Selective Saturation, Shadows/Highlights
* BCC Film Style:
  * Bleach Bypass, Color Processing, Day for Night, Film Stocks, Looks, Three Strip Color
* BCC Grads & Tints:
  * Color Gradient, Color Spot, Colorize Gradient, Dual Gradient, Gels, ND Gradient, Photographic, Radial Tint, Sepia, Skin Tone, Split Tone, Sunset, Tint
* BCC Image Restoration:
  * DeBand, DeBlock
* BCC Key & Blend:
  * Color Paste, Edge Composite, Holdout Composite, Math Composite, Non-Additive Mix, Optical Dissolve
* BCC Lens:
  * Camera Shake, Chromatic Aberration, DeFringe, Lens Distortion, Radial Exposure, Wide Angle Lens
* BCC Lights:
  * Ambient Light, Chroma bands, Eye Light, Glow, Glow Darks, Glow Edges, Ice Halos, Key Light, Lens Flare, Light, Overexpose, Rays, Reflector, ReLight, Streaks
* BCC Optical Diffusion:
  * Center Spot, Depth of Field, Diffusion, Double Fog, Fog, Frost, Halo, Mist, Net, Rack Focus, Silk, Split Field
* BCC Perspective:
  * Transform
* BCC Textures:
  * Textures

**_Particle Illusion Enhancements:_**

* 3D
  * Emit particles in a 3D environment including host camera integration
* Turbulence
  * Add organically evolving randomized variation to particle Size and Position based on a noise map field.
* Lines
  * Add Lines connecting particles to each other, to their emitter location, or to their birth position for a wide range of new looks.
* Deflector - Randomization
  * Particles can now pick up variable randomization in their bounce pattern after colliding with a deflector to give a much more natural scattering effect.
* Deflector - Particle Break
  * Particles can now break into separate sub-particles after hitting a deflector.
* Updated Library View
  * The Library View in the emitter browsing pane (as opposed to the Grid and Thumbnail views) has been refactored to be cleaner and easier to use.
* New "Emitters_2021" Emitter Library and Presets
* Other PI Enhancements
  * Expose random seed parameters for particle types and free emitter types
  * Add motion blur frames indicator to particle count display
  * Added Pref for disabling the Render Finished chime
  * Added Pref for default keyframe type
  * Default to Grid view for new installs
  * Added Menu command for File->Render
  * Stage / Playback UI - updated layout and look
  * When a stage emitter is selected in the Controls View, the "Return/Enter" key initiates "Rename"
  * Add pref to show or hide stage/project info
  * Force and Deflector buttons now act as auto-toggles which instantly add an element to the timeline to avoid confusion
  * Alt-click on stage position keys toggles linear/bezier like in graph view

**_Title Studio Enhancements:_**

* Procedural Noise texture generators which enable many new texture/bump map looks and also improved accuracy when importing C4D models.  Procedural Noise texture generators can be added to an object by first changing the material track to any texture option (except color and flat color). In the texture channel track, change the track media to Procedural to access an array of texture noise options.
* Multi-Texture options for combining multiple texture sources into a single hybrid texture and for improved accuracy when importing C4D models. A New Multi-Texture shader can be applied to your scene or objects by selecting Texture Composite from the Image Processors category in the Shaders Menu.
* Improved C4D import including more accurate rendering and faster performance with complex models.
* UI Enhancements including switching to Inter UI font for TS UI on mac for better legibility across various resolutions

**_Primatte Studio:_**

* Integrated Edge Cleaner - New Edge Cleaner tool which uses advanced filtering techniques to clean up the edges of rough keys without degrading clean edges and including a temporal correlation technique to minimize chatter in grainy or compressed chroma key footage.  This is integrated directly into Primatte Studio in all hosts, and it comes in standalone form for Adobe hosts only.  Note this is specifically designed to work with keyed footage, not synthetic alpha edges such as graphics.
* Resolve now supports Spill Removal Method of Softened Background and Light Wrap based on background when applied in Resolve's Color pane with the background image piped into the node.
* Guidance message added when Spill Removal Method of Softened Background is used but when no Background layer has been selected/piped in.

**_Mocha Updates Including Adjust Track V2:_**

* AdjustTrack V2:  AdjustTrack has been completely overhauled to be easier to use and less prone to errors.
* Numerous miscellaneous fixes and tweaks

**_Mocha Data in Continuum Presets:_**

* Continuum presets have been redesigned to include all Mocha tracking data - both PixelChooser masks and parameter tracking.  You can now save a preset in one host and migrate it to another host with all Mocha data intact.  The previous preference setting for whether or not to include PixelChooser data when loading presets has been expanded to cover all Mocha data as well, and we've added a new toggle for this pref inside the FX Browser.  When you want to move an EXACT setting from one instance to another you can enable the pref to include the PixelChooser and Mocha data when loading presets and this choice is reflected in the FX Browser preview.  When you disable this pref you can instead browse different preset looks without replacing any underlying Mocha masking or parameter tracking.

**_Preset sharing:_**

* BCC presets have moved to a new location shared between all hosts.  This means that any custom presets created in one host will automatically be available for all other hosts on the same system.  E.g. a preset saved in AE will automatically show up in AVX and vice versa.  The new preset location for Continuum effects (but not the BCC+ effects) is:
  * C:\\ProgramData\\BorisFX\\Continuum\\14\\Presets
  * Library/Application Support/BorisFX/BCC Presets 14

**_OFX Performance:_**

* OFX infrastructure performance improvements both when scrubbing or when rendering in OFX hosts.

**_Misc. Performance enhancements:_**

* FX Browser playback/scrubbing speed, esp. in float projects
* Title Studio CTI scrubbing.

**_Expanded Temporal Filters in Resolve:_**

* We now take advantage of features in Resolve 15/16 or higher to support filters which require temporal frame access at widely different times - namely Optical Flow, Looper, Velocity Remap, Trails, and Trails Basic.

**_Other Fixes and Polish in Continuum 2021:_**

* Installer - Mac warnings in install log
* Installer - Licensing integration improvements
* Licensing - fixes to ensure the license dialog appears after installation when expected (and only when expected) and that it works right when invoked from the plugin in all cases.
* Prefs dialog - Logging popup not functioning correctly
* Corner Pin Studio - Light Wrap Lightness param range was expanded from +/-1 to +/-100 so it actually had the correct usable range.
* Title Studio - UI appeared low resolution when launched in standalone mode on macOS with Retina display
* Title Studio - Font up/down arrows don't change the font
* Title Studio - Auto Save function does not work
* Title Studio - Unexpected behavior when toggling between Text tool and Interactor
* Title Studio - Custom GUI Tabs do not always respond to mouse clicks
* Title Studio - Materials list is not in alphabetical order on mac
* Title Studio - Crash when entering a value in the keyframe position numerical entry field
* Title Studio - Some material textures & thumbnails are incorrectly displayed/applied as black
* Particle Illusion - Fix jump in selection when marking an emitter as favorite (when not actually filtering on favorites-only)
* Particle Illusion - Particle order does not appear to do anything for super emitters
* Particle Illusion - Blue render progress stops just short of 100% when exporting (even though it has actually succeeded in fully completing the export).
* Particle Illusion - Layers are drawing in reverse order
* Particle Illusion - Mac - improved retention of UI layout when closing + reopening the UI  (Still a work in progress)
* Particle Illusion - Preview Background composite popup menu options are chopped off in PI UI
* Particle Illusion - Shaped emitters stop creating any particles when Number value is too high
* Particle Illusion - Erratic window placement/sizing when closing and reopening the PI GUI
* Particle Illusion - Duplicating a particle type does not result in the same particle pattern in both
* Particle Illusion - Fix Search behavior with multiple search terms and when Favorites enabled
* Particle Illusion - When moving the 2nd deflector point, it will get joined together with the first deflector
* Particle Illusion - Keyframe interpolation pop-up menu - interpolation icons are offset to the right making the text unreadable
* Particle Illusion - When preload is not 0 the Start frame is not working correctly
* Particle Illusion - Shape import dialog layout issue
* Particle Illusion - Change the default emitter radX and radY from 10 to 100 when an emitter is first initialized
* Particle Illusion - Undo twice is required if entering param values by keyboard and pressing enter
* Particle Illusion - double particles drawn (after start bar is moved)
* Particle Illusion - double-clicking Start Frame Bar doesn't move keys
* Particle Illusion - smaller font size on HighDPI Windows monitors
* Particle Illusion - Alt clicking on motion path keyframe doesn't work when CTI is parked on the keyframe
* Particle Illusion - line emitters get corrupted when angle is not 0 and other emitters are changed
* Particle Illusion - Single Particle Emitters like La Luna have separation between primary and secondary particles when position transforms are used
* Particle Illusion - custom GUI does not remember user selected monitor in multi-monitor setups

<span style="font-size: 1rem;"> </span>

**Continuum 2021 (v14.0.0) (BCC 14.0.0) for OFX was released on 10/27/2020.**

<span style="font-size: 1rem;"> </span>

**Continuum 2021 (v14.0.0) for OFX (OpenFX) officially supports the following host applications:**

_Note that Continuum OFX may work to varying degrees in other OFX hosts, but at this time it is only officially supported in Resolve, Vegas Pro, and Nuke.  Note that official Resolve support does not yet include the embedded Fusion page within Resolve.  Note that the Apple App Store version of Resolve is not fully supported and direct downloads of Resolve from the Blackmagic Design site should be used instead._

macOS 10.13, 10.14, and 10.15 (as appropriate for the host version in use):

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, 14.x, 15.x, 16.x  (If using Resolve 14 then 14.1 or higher is strongly recommended.)
* Nuke 10, 11, 12

Windows 7 x64, Windows 10 x64 (as appropriate for the host version in use):

* DaVinci Resolve Studio and DaVinci Resolve 11, 12, 12.5, 14.x, 15.x, 16.x  (If using Resolve 14 then 14.1 or higher is strongly recommended.)
* Vegas 13 (Sony)
* Vegas 14, 15, 16, 17, 18 (Magix)
* Nuke 10, 11, 12 (4k monitor support on windows requires Nuke 12.1 or higher)

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documentation](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC2019Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2021 v14.0.0 for OFX - New BCC+ Filter Integration Notes:**

You will notice several differences between the new BCC+ filters and the existing BCC effects in the 2021 cycle.  Several standard Continuum features and workflow metaphors have not yet been added to the new filters.  We will continue to refine the integration in future versions:

* The new filters do not support the PixelChooser, Mocha Masking and Tracking, Compare Mode, Beat Reactor, or Head Up Display widgets.
* The new filters use the new FX Editor preset browser, while the old filters will continue to use the original FX Browser.
* The new filters do all preset loading/saving from within the FX Editor.  There are no native host controls for loading/saving/browsing presets.
* The new filters do not appear in the standalone FX Browser filter

**Continuum 2021 (v14.0.0) for OFX - Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Fixes to the Particle Illusion layer order may affect the look of old projects if they contained multiple layers inside the Particle Illusion UI (not common).  Layers cannot be reordered at this time.
* Fixes to the Particle Illusion Particle Type handling may slightly affect the look of old projects, particularly if they used multiple Particle Type instances.  The exact randomization pattern may be different, but the overall look and feel should remain the same.

<span style="font-size: 1rem;"> </span>

**Continuum 2021.0 (v14.0.0) for OFX - Known Issues and Limitations:**

* CO-5788 - Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks.
* CO-8319 - Particle Illusion - Missing top window bar to minimize or maximize when reopened on secondary monitor in some circumstances.
* CO-8221 - Particle Illusion - broken particles occasionally falling through deflector
* CO-8395 - Particle Illusion - DOF can be unexpectedly slow on AMD cards
* CO-8060 - Particle Illusion - Motion blur calculation does not take into account camera motion
* CO-8424 - Particle Illusion - Center emitter widget drifts away from mouse cursor after changing layer angle/position param
* CO-8454 - Particle Illusion - when emitter position Z value is non-zero, dragging emitter on stage sets it to 0
* CO-8432 - BCC+ filters such as X-Ray can lose the source clip's alpha channel in some OFX hosts depending on premultiplication properties.  This can be partially worked around by adding a normal BCC effect after the BCC+ effect.
* CO-8426 - OFX: Image/s are flipped for Transitions in FX Browser in some OFX hosts
* CO-8477 - Particle Illusion - Some 3D views are black or partially rendered when motion blur enabled
* CO-8429 - Particle Illusion - Play bar layout is incorrect on smaller resolution screens
* CO-8434 - Particle Illusion - Position Turbulence can cause particles to go through deflectors
* CO-8474 - Particle Illusion - Switching to Top View can cause sporadic crashing on MacOS 10.13
* CO-8490 - Particle Illusion - Appling Mocha World/Emitter tracking or native World/Emitter adjustments does not work as expected for PI projects with internal 3D camera offsets.
* CO-8498 - Title Studio - C4D objects can disappear when Procedural texture is applied
* CO-8480 - Mocha Motion Tracking sporadically displays gray frames and fails to track entire clip in Vegas

<div id="ext-gen9245"> </div>