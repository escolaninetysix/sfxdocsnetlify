{
   "date": "2017-04-13T09:47:00-04:00",
   "description": "BCC 10.0.6 FxPlug release notes",
   "excerpt": "",
   "image_url": "",
   "tags": [
      "Continuum Complete"
   ],
   "title": "BCC FxPlug 10.0.6 Release Notes"
}

### Boris Continuum Complete 10.0.6 for FxPlug - Release Notes

<span style="font-size: 1rem;">&nbsp;</span>

**Enhancements in BCC 10.0.6 for FxPlug:**

* Improved HDR support in many filters including Lens Flare 3D, Stage Light, Video Glitch, Grunge, Colorize, Colorize Glow, Linear Color Key, Misalignment, LED, Bump Map, Particle Emitter 3D, Orgranic Strands, Particle Array 3D, Pin Art 3D, and 3D Extruded Image Shatter.

* More accurate 3D lighting model in 3D Extruded Image Shatter, Organic Strands, Particle Emitter 3D, Particle Array 3D, Pin Art 3D, Stage Light, and Wild Cards.

* Fixes for problems in 3D Objects filters introduced in BCC 10.0.5

* Numerous additional bug fixes.

<span style="font-size: 1rem;">&nbsp;</span>

**BCC FxPlug 10.0.6 for Apple FxPlug hosts was released on 4/13/2017 and is an update to:**

* Boris Continuum Complete 10.0.5 for FxPlug (<a title="BCC 10 FxPlug – 10.0.5 Release Notes" href="/release-notes/bcc-fxplug-10-0-5-release-notes/" target="_blank">BCC 10.0.5 FxPlug&nbsp;Release Notes</a>)

* Boris Continuum Complete 10.0.2 for FxPlug (<a title="BCC 10 FxPlug – 10.0.2 Release Notes" href="/release-notes/bcc-fxplug-10-0-2-release-notes/" target="_blank">BCC 10.0.2 FxPlug&nbsp;Release Notes</a>)

<span style="font-size: 1rem;">&nbsp;</span>

**What's New in BCC 10 for FxPlug (Summary of major changes since BCC9):**

* **New Effects:**

* *Beauty Studio*

* *Dropout Fixer*

* *Fast Film Glow*

* *Fast Film Process*

* *Fast Lens Blur*

* *Light Leaks*

* *Reframer*

* *Remover*

* *Video Glitch*

* **New Transitions:**

* *Cross Glitch*

* *Cross Melt*

* *Cross Zoom*

* *Fast Film Glow Dissolve*

* *Lens Blur Dissolve*

* *Light Leaks Dissolve*

* More than 80 new transition templates in Final Cut

* More than 170 new effect templates in Final Cut

* Hundreds of new presets in Motion.

* Greater use of OpenCL and OpenGL for GPU acceleration in filters such as Beauty Studio, Fast Film Glow, Fast Film Process, Fast Lens Blur, Fast Film Glow Dissolve, Lens Blur Dissolve, and many more.

* PixelChooser re-engineered for streamlined UI, enhanced shape masking, and robust color keying.

* Improved support for 3D deformers in Final Cut in the 3D Objects family of filters.

* New textures added to BCC Grunge.

* Advanced Optical Flow option in BCC Motion Blur.

* Added View Current Matte feature to Chroma Key Studio.

* Streamlined effect categories with deprecated filters moved to Obsolete category.

* RLM Floating Licensing model for enterprise installations.

* Numerous bug fixes.

<span style="font-size: 1rem;">&nbsp;</span>

**BCC 10 FxPlug officially supports the following host applications:**

Mac OSX 10.10, 10.11, and 10.12:

* Final Cut Pro X 10.2 or higher (latest version recommended)

* Motion 5.2 or higher (latest version recommended)

<span style="font-size: 1rem;">&nbsp;</span>

**Training:**

Numerous resources are available for helping you get the most out of Boris Continuum Complete.

* Help documents for individual BCC effects are accessible directly from each plug-in’s UI.  The entire [BCC Help Documention](/documentation/continuum/bcc-user-guide/ "BCC Help Documentation") library is also available on the BorisFX website, including access to a downloadable version for browsing [offline BCC Help Documentation](https://cdn.borisfx.com/borisfx/store/BCC10Documentation.zip "Offline Downloadable BCC Help Documentation").

* [BorisTV](/videos/) video tutorials cover a huge range of topics from introductions to the Fundamentals, to deep training Webinar Replays, to in-depth looks at  key effects and techniques.

<span style="font-size: 1rem;">&nbsp;</span>

**BCC FxPlug 10.x Compatibility Notes:**

While in general your previously saved projects should render identically in the newer version, bug fixes and quality improvements can sometimes change the look of older projects. While every effort is made to ensure project compatibility, the following notable areas may see some change to the look of previously saved projects.

* Rays Dissolve - a fix to the Region Animation rotation control will cause the region size to appear slightly larger when opening saved projects which used this Region Animation option.

* Projects saved using the BCC9 standalone PixelChooser effect in either Motion or FCP may have some parameters reset to default when opened with BCC10 and may have some parameters missing in the UI in FCP.  Newly created effects with the standalone PixelChooser effect will behave normally.

* The BCC Motion Tracker in FxPlug hosts will continue to render previously saved motion tracker analysis passes and it will continue to support loading externally generated tracker data files such as those exported from mocha, but conducting new BCC Motion Tracker analysis passes is disabled in FxPlug hosts in order to ensure full cooperation with newer host multi-threading requirements.

* 3D Objects - Faces with partial opacity now render with more accurate combined opacities from multiple overlapping faces. This may require re-tweaking the opacity if you used partially transparent faces in saved 3D Objects projects.

* Improved HDR support may cause render results to differ somewhat in floating point projects depending on effect settings in many filters including Lens Flare 3D, Stage Light, Video Glitch, Grunge, Colorize, Colorize Glow, Linear Color Key, Misalignment, LED, Bump Map, Particle Emitter 3D, Orgranic Strands, Particle Array 3D, Pin Art 3D, and 3D Extruded Image Shatter.

* More accurate 3D lighting model may cause render results to differ somewhat depending on effect settingsin 3D Extruded Image Shatter, Organic Strands, Particle Emitter 3D, Particle Array 3D, Pin Art 3D, Stage Light, and Wild Cards.

<span style="font-size: 1rem;">&nbsp;</span>

**BCC FxPlug 10.0.6 - Known Issues and Limitations:**

* BCC10 for FxPlug does not include support for mocha PixelChooser tracking/masking.

* BCC Motion Blur now includes an Advanced optical flow option which uses OpenCL hardware assisted rendering to implement a more sophisticated (and more computationally intensive) motion vector analysis. The performance of the Advance mode varies widely from one graphics card to another and if you see reduced performance or unexpected results when using the Advanced option it is recommended that you switch to the Simple mode on that card. [706 + 1094]

* Motion - 3D Objects - selecting a texture file will actually choose the texture file that comes alphabetically after the one you chose. [2818]

* Motion - Very rapidly cycling through presets via the Previous/Next arrows can cause the host to temporarily appear to slow down or become unresponsive while it catches up with the backlog of event handling. [2823]

* Motion - After rapidly clicking to load presets or to step through presets with the Previous/Next buttons, attempts to launch the Enter Text window or BCC Preferences window in 3D objects filters can give the appearance of the window failing to load and the application being unresponsive. You can click on the main top menu bar or toggle to another application and back again to reset the windowing properties and allow the window to finish launching. [2844]

* The BCC Motion Tracker in FxPlug hosts will continue to render previously saved motion tracker analysis passes, but conducting new BCC Motion Tracker analysis passes is disabled in FxPlug at this time to ensure full compliance with host multi-threading requirements. [2856]

* In order to comply with host multi-threading requirements BCC Match Grain does not currently support using the Lock Sample checkbox to lock in new grain samples. You can still use Match Grain to render grain matched from an alternate clip by leaving the Lock Sample checkbox disabled, but it is not possible to use the Lock Sample checkbox to store new grain profiles permanently in grain files or presets. However, loading previously saved grain profiles or Match Grain presets will continue to work as before. [2858]
