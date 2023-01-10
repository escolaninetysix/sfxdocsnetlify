{
  "title": "Continuum 2019 for Adobe AE/Premiere - 12.0.1 Release Notes",
  "date": "2019-02-14T12:15:56-05:00",
  "description": "Continuum 2019 for Adobe AE/Premiere release notes",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Continuum Complete"
  ]
}
<span style="color: rgb(40, 40, 40); font-size: 1.5em; word-spacing: 0.5px;">Continuum 2019.0.1 for Adobe AE/Premiere v12.0.1  - Release Notes</span>

<span style="font-size: 1rem;"> </span>

**Enhancements in Continuum (BCC) 12.0.1 for Adobe After Effects and Premiere Pro:**

* _Particle Illusion_
  * Large performance improvements, especially on longer clips, both when rendering and when jumping around in the PI UI.
  * New Properties group for editing nearly ALL applied emitter settings.  Now you can edit more key features of applied emitters directly in the main parameter view such as Color and Color Gradient, Alpha Gradient, apply properties and more.
  * Particle Color From Layer Feature.  Now supports emitters which take their particle color and/or alpha from the underlying image layer.
  * Tool Tips in PI Stage View
  * Particle Count added to Stage view
  * Preference option for whether or not clicking on stage automatically adds an emitter
* _Title Studio_
  * Added Center Cut Title Safe and Action Safe zones
  * Improved C4D file support
  * Improved render quality in Material Panel and Material Panel interactivity
* _Mocha_ - Numerous fixes/tweaks across the UI.
* _Scanlines and Title Studio Scanlines Shader_ - New separate control for size vs. spacing
* _Particle Emitter 3D_ - 16 new presets including dust and snow.
* _External Reference Monitor_ - Enhanced support for AJA and BlackMagic cards
* _Match Move + Corner Pin_ - Alternate Mocha tracking layer for more versatile workflows especially when applying to alpha clips.
* _Dongle Licensing_ - Dongles supported on mac now and support for new HASP dongles added.
* _Performance_ - Numerous general performance tweaks.

<span style="font-size: 1rem;"> </span>

**Fixes in Continuum (BCC) 12.0.1 for Adobe AE/Premiere:**

* Pan and Zoom - Error message displayed when enabling the Motion Blur option
* 3D Extruded Image Shatter - Antialiasing of edges not as smooth as in previous versions
* Vignette - Some blur settings generate artifacts when applied to alpha clips
* Vignette - blur option is not rendered for some settings.
* Time Displacement - Stability problems when using Alt layer in 16bit projects
* Prism - PixelChooser resulted in masked region generating transparency instead of unfiltered source
* StandAlone FX Browser - Categories not appearing in alphabetical order on mac.
* Floating license server - schemes could show sporadic watermarking on some frames when re-establishing licenses after time outs
* AE - Suppress point picker widgets in the ui for contextually disabled (grayed out) parameters and for permanently hidden legacy parameters.
* Fast Film Glow - horizontal streak artifacts in some settings in float projects.
* Corner Pin and Witness Protection - Missing point picker param overlay widgets.
* Mac installer saying “Product Already Licensed” when it isn’t licensed
* Video Glitch - sporadic black error screens when working with Beat Reactor in AE/Premiere
* Improved diagnostic logging
* Mocha Motion Tracker - Layer visibility/process/lock buttons in the Mocha UI don’t work for filters with more than 1 tracker point (such as Particle Illusion).
* Mocha - unexpected behavior opening some older Continuum 11 projects
* Mocha PixelChooser - Memory leak that could cause low memory conditions on long renders.
* Mocha - several fixes including improved stability in Premiere
* Mocha - backwards point tracker didn't work unless UI clicked before tracking
* Mocha - improved handling for missing cache drive
* Mocha - zooming too far in UI when using linearized workspace
* PixelChooser - PC params incorrectly disabled in some filters that use the PixelChooser in non-standard ways.
* PixelChooser - AE Host Mask option was missing from PixelChooser mask shape menu in some filters in AE.
* Particle Illusion - Widgets in Stage view were difficult to see over some backgrounds.
* Particle Illusion - File Open/Save dialog should remember last used folder
* Particle Illusion - Some circle emitter shapes were appearing as rectangles
* Particle Illusion - Line Emitters should rotate around center point
* Particle Illusion - Line and Shape widgets wrong when emitter Angle was non-zero
* Particle Illusion - The correct point is now selected by default when launching the Mocha Motion Tracker depending on whether you’re tracking the Emitter or World
* Particle Illusion - Moving one point in the Mocha Motion Tracker would sometimes cause the second point to unexepectedly move as well.
* Particle Illusion - Particle Illusion UI did not always display accurate Motion Tracker paths on trimmed clips.
* Particle Illusion - Changing an Over Life key param to constant interpolation generated unexpected values.
* Particle Illusion - Errors when creating and then attempting to reopen very large PI projects (particularly with high rez sprites such as the HUD textures)
* Particle Illusion - Choosing Undo after changing the emitter shape to an area option would not always fully undo the change.
* Particle Illusion - Minitimeline and graph draw garbled on projects with long durations
* Particle Illusion - The last frame number is now displayed at the end of the timeline
* Particle Illusion - After adding an emitter, the “active” bar (in the mini timeline) does not appear until the emitter is selected in the parameter window.
* Particle Illusion - Video doesn’t play inside the PI UI until an emitter is applied
* Particle Illusion - Widget/Zoom levels not refreshing after reopening PI, changing Layout workspace, or moving to different resolution monitor.
* Particle Illusion - Gaps in the particle trails when Emitter Offset is keyframed for some emitters
* Particle Illusion - Stage zoom with scroll wheel is too sensitive when using a trackpad
* Particle Illusion - When field rendering new particle births were not evenly spread over both fields
* Particle Illusion - Current selection in the parameter control panel is not reflected back in the graph view when using the arrow keys to move through visible parameters
* Particle Illusion - Center widget of line emitter not actually centered
* Particle Illusion - Holding shift while dragging should constrain movement to a single axis
* Particle Illusion - Bezier splines in the graph view can generate incorrect curves for some settings.
* Particle Illusion - Quitting when not changing anything in a new project shows “save?” dialog
* Particle Illusion - Mouse cursor does not become a hand on Mac when moving points
* Particle Illusion - Delay in UI when jumping to end of long clip even with NO emitters applied
* Particle Illusion - Standalone version of PI forgets duration changes when saving/reloading a project
* Particle Illusion - Standalone version cannot manually enter decimal frame rate values such as 23.976
* Particle Illusion - Twirly state of parameters is now remembered when reopening a project.
* Particle Illusion - Emitter Preview window displays motion blur the same way it will appear when applied to the Stage.
* Particle Illusion - Ellipse shape not showing Y Radius value
* Particle Illusion - Some Params labels were cut off when UI was launched on a 4k monitor with scaled settings
* Particle Illusion - "Spin" and "Spin over life" params not generating expected results.
* Particle Illusion - Changing Preferences causes PI to not be able to insert new particles onto stage
* Particle Illusion - Emitter active range is not refreshed when panels are resized
* Particle Illusion - Improve window placement when moving UI between High DPI and normal screens
* Particle Illusion - Change shape from “line” to something else and undo/redo is incorrect
* Particle Illusion - Gap in particles apparently from frame 0 when preload enabled.
* Particle Illusion - Trimmed clips show shifted motion in PI UI (although render correctly in host) for animated params such as Motion Tracker or manually keyframed native params.
* Particle Illusion - Fix sporadic PI error messages when exiting the UI while timeline is currently actively playing.
* Particle Illusion - small gap in some particle arrays when playing through more than once in the UI.
* Particle Illusion - moving projects/presets to clips with different pixel aspect ratios (but the same frame aspect) would render particles in the wrong horizontal location.
* Particle Illusion - Pixel Aspect Ratio is preserved when saving/reloading projects from the Standalone PI.
* Particle Illusion - Color type of “Next key color” now cycles through colors correctly.
* Title Studio - Improved support for High-DPI/4k monitors on Windows (more to come).
* Title Studio - Improved handling for moving UI between standard and High-DPI/4k/Retina monitors during mixed monitor configurations.
* Title Studio - AE - FX Browser playback animated incorrectly on trimmed clips in AE while inside the browser.
* Title Studio - Guide Style and Color do not update until refresh triggered
* Title Studio - FX Browser Text Insertion overflows entry box when screen refreshed
* Title Studio - Rays shader picks up unexpected black rays color from transparent regions
* Title Studio - Texture Cropping when Gradient Shader Color Alpha set to zero
* Title Studio - Unexpected behavior when opening certain .OBJ models
* Title Studio - Tool Tip for next keyframe had incorrect label.
* Title Studio - Opacity changes are ignored for elements of some C4D models.
* Title Studio - Snap To Guides does not work when opening saved projects
* Title Studio - Spotlight Shader UI typo
* Title Studio - Toggling the camera/light views changes the zoom scale
* Title Studio - Clear Guides menu option doesn’t trigger refresh until your mouse is moved over the composite panel
* Title Studio - Multiple semi-transparent plane objects were not rendered correctly.
* Title Studio - Improved reporting of missing texture files.
* Title Studio - Deformers and color textures appeared as “Disabled” in 3D Mode even though they were not disabled.
* Title Studio - Light Sweep Noisy Animation Speed param is too sensitive
* Title Studio - Burned Film shader renders differently on Mac and Win
* Title Studio - Two Sided Planes incorrectly showed a controls tab for Spheres
* Title Studio - Enabled stroke width for extruded text
* Title Studio - Spiral Blur shader fails to blur for some settings
* Title Studio - Rigid Runs overlap with range markers
* Title Studio - Improved Cinema 4D import quality/accuracy
* Title Studio - Image Processing Shaders not working when used with non-default composite modes.
* Title Studio - Ruler Anchor made persistent
* Numerous general fixes and tweaks

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.1 v12.0.1 (BCC 12.0.1) for Adobe After Effects and Premiere Pro was released on 2/13/2019.**

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.1 v12.0.1 for Adobe supports the following Adobe host applications:**

macOSX 10.10, 10.11, 10.12, 10.13, 10.14 (as appropriate for the host version in use):

* Adobe After Effects and Premiere Pro CS6, CC, CC 2014, CC 2015, CC 2017, CC 2018, and CC 2019

Windows 7 x64, Windows 8 x64, Windows 10 x64 \[recommended\] (as appropriate for the host version in use):

* Adobe After Effects and Premiere Pro CS6, CC, CC 2014, CC 2015, CC 2017, CC 2018, and CC 2019

<span style="font-size: 1rem;"> </span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [Offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC11Documentation.zip "Offline Downloadable BCC Help Documentation").
* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.1 v12.0.1 for Adobe Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Particle Illusion received major performance enhancements (especially for long clips) both when rendering and when working in the PI UI, but these enhancements required changes to the random number generation patterns.  Projects created in 12.0.0. will be differently randomized in 12.0.1 (as if the seed had changed), but the overall look and feel should remain the same.
* Particle Illusion projects saved in Continuum 12.0.1 cannot be opened in Continuum 12.0.0 due to numerous fixes in the project format.
* Particle Illusion _emitter libraries_ saved in PI3 are fully supported in the new Continuum Particle Illusion (with some exceptions noted below), but PI3 _project files_ are NOT supported in the new Particle Illusion.
* Older plugin versions of Particle Illusion (V3 or earlier) are completely distinct from the new Continuum Particle Illusion and those older plugin projects will not migrate to this new plugin.  However, you should be able to leave those older plugin versions installed on your system alongside the newer Continuum Particle Illusion.
* Not all features of the older Particle Illusion (V3 or earlier) are fully supported in the initial release of the new Continuum Particle Illusion.  This may affect the ability to fully use some older emitter libraries or to perform some actions supported in the older Particle Illusion.  Future updates to Continuum Particle Illusion will restore many of these features over time:
  * Editing emitter sprites
  * Rendering/exporting videos from the standalone Particle Illusion UI.  Rendering is only supported via the plugin’s host timeline at this point.
  * Saving new or modified emitters back to a library.
  * Updating emitter library thumbnailsom host image data
  * Deflectors, and Forces
  * Record Position feature  - i.e. recording mouse movements for conversion to position keyframes.
  * Stage view widgets for Layer and Emitter angle
* Title Studio - Ambient light fixes may cause saved projects to render brighter in the new version requiring possible tweaks to the light intensity.
* 3D Objects - Texture scaling improvements may cause some textures to be stretched/sized differently in the new version.
* OpenGL blur quality enhancements may slightly change perceived blur amount in some filter elements.
* Prism - Fixes to alpha / premultiplication handling will produce different results in intermediate alpha regions.

<span style="font-size: 1rem;"> </span>

**Continuum 2019.0.1 v12.0.1 for Adobe - Known Issues and Limitations:**

* mocha PixelChooser - mocha track data is not saved with presets.  To clone mocha tracking data from one effect instance or machine or host to another, you can use the File->Export Project and File->Merge Project options from within the mocha UI or you can copy/paste track data from the clipboard when moving from one mocha UI instance to another. \[CO-4250\]
* <span style="font-size: 1rem;">Mocha PixelChooser splines can render distorted or in the wrong location in filters that use "Avoid Clipping" or similar mechanisms to expand the source layer dimensions.  As a workaround the layer expansion should be done prior to the effect in a precomp. \[CO-1298\]</span>
* The Hide Disabled Parameters preference exposes host-side UI refresh issues in AE and Premiere.  We are working with Adobe to resolve these issues.  As a workaround the Hide Disabled Parameters preference can be disabled to revert to "graying out" parameters instead of hiding them. \[CO-2296\]
* Title Studio - projects with Cinema 4D files that reference host tracks as textures can cause slow or stalled refreshes in Premiere. \[CO-2344\]
* Custom UI views such as the Title Studio UI, FX Browser, License Dialog, or Preferences Dialog don't fully adapt to High-DPI displays on windows which can cause some fonts to render too small and be difficult to read. \[CO-3269\]
* Title Studio - Snap to guide - snapping is offset by 2 pixels. \[CO-5071\]
* Particle Illusion - custom GUI scroll bars do not react to Wacom tablet clicks. \[CO-5788\]

<div id="ext-gen9245"> </div>