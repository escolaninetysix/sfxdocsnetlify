{
  "title": "Sapphire 2019.5 release notes",
  "date": "2019-06-19T00:00:00-04:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Sapphire"
  ]
}


### What’s New in Sapphire 2019.5


**New Effect and Transitions**

* S_ParallaxStrips- Brand new for Sapphire 2019.5 effect, S_ParallaxStrips takes any image and divides into strips separated apart in z space. The floating strips can seamlessly strip apart or seamless form a complete image. Angle, size, speed, z-depth, and many more parameters can be adjusted for original and interesting looks. 

* S_ParallaxStripsTransition- New for Sapphire 2019.5, S_ParallaxStripsTransition is a new transition using ParallaxStrips to animate between the input and output clips. S_ParallaxStripsTransition breaks the image up into a collection of 3d refracting strips.  The strips slowly fade on, then off again.

* S_DissolvePixelSort- New for Sapphire 2019.5, is a new transition based on the S_PixelSort effect. S_DissolvePixelSort is a damage transition that sorts the pixels the dissolve along different patterns of lines. There are three modes: Linear sorts along parallel lines, Radial sorts along lines radiating from a controllable center point, and Circular sorts along concentric circles.  S_DissolvePixelSort sorts the pixels based on the relative values of the pixels.  Use "Max Percentage" to control how much of the image is sorted at the peak of the transition.

* S_DissolveDigitalDamage- S_DissolveDigitalDamage is a transition version of DigitalDamage simulating bad digital TV transmission with a dissolve between the incoming and outgoing clips.


**New Functionality**

* Clip Access for Builder, Flare Designer, and the Preset Browser- All Sapphire 2019.5 external applications, such as the Effect and Transition Builder, Flare Designer, and Preset Browser, now can live preview on any resolution clip.

* New Look and Feel for Builder, Flare Designer, and the Preset Browser- All Sapphire 2019.5 external applications, such as the Effect and Transition Builder, Flare Designer, and Preset Browser, now feature an updated look and feel, complete with modern UI optimized for 4K HDPI monitors.

* Broadcast Monitor Support- The Sapphire Effect and Transition Builder and Flare now support outputting to a third party broadcast monitor via a Blackmagic or AJA card.

**Improved Mocha**

* Mask Rendering Performance - Mask rendering with Mocha in Sapphire is now much faster - especially for complex and multi-layered masks.
Edge Snapping - Edge-Snapping on Splines to speed up Masking. Select one or more points and press “ALT+S” to snap points to the nearest edge, or hold “S” to drag-snap.

* Layout Manager - Save, modify, and order custom layouts from the View menu. New layouts will appear in the workspace drop down.

* Autosave Backups - Autosaves now include iterated history to prevent data loss and Autosaves are no longer removed on exit to the host. You can define the location and the number of backups in the Mocha preferences.

* Numerous Bug Fixes and UI Tweaks including foreground mattes now correctly occluding when GPU tracking a background layer.

**New Host:**

* Sapphire 2019.5 OFX is now happy to support Autodesk Flame, Flame Assist, Flare v2020 or higher. In addition to new effects and transitions, Flame artists will now have access to the Sapphire Effect and Transition Builder inside of Flame with the 2019.5 release.

**Compatibility Issues:**

* In v19, LensFlares using MutliSpot and MultiStreak elements would look different inside the Flare Designer across operating systems.  In v19.5 this was fixed, but as a result Lens Flares may look different from v19 when loaded through the Flare Designer.  Old projects will continue to look the same as they did in v19 when loaded into the host or rendered, but may look different after loading in the Flare Designer.

**Known Issues:**

* Preset Browser does not display Feedback or Temporal presets correctly.
* (Sparks) Flame may crash on close when a Mocha mask was used in Sapphire.
* (Sparks) upate_setups has a bug when upgrading Caustics from v2019->2019.5.
* If you have an animated Mocha mask in your plugin when you enter the Preset Browser, the Mocha mask will not animate.
* (OFX - Resolve) Sometimes the Preset Browser, Flare Designer, or Builder will start behind the host.
* Sometimes the preview in the Preset Browser, Flare Designer or Builder doesn’t render with the correct frame.
* The Preset Browser, Flare Designer, or Builder may be slow on first launch.
* The current time marker in the Preset Browser, Flare Designer or Builder doesn’t always match the current time in the host application.
* (OFX - Resolve) The second input isn’t showing in the Preset Browser or Builder in Sapphire Transitions.
* (not Sparks) “Show Checkerboard” isn’t working inside of Builder.
* (Premiere) The Preset Browser and Effect Builder may not respect clip scaling applied in Premiere.
* (OFX, Linux) The License Tool that runs while running the RPM doesn't advance after entering the activation key and clicking next.  The license installs correctly.  After clicking next, you can click cancel to close the tool.  Running the License Tool directly from the start menu advances correctly.
* (OFX, Nuke) The Preset Browser and Lensflare Designer may not open if a still is hooked up as an input.
* (OFX, Resolve 16, Mac OS) On older Macs, Mocha may generate an error the first time you try to track.  If you close Mocha and re-open it, tracking should work as expected.
* Atmosphere may not look the same between the LensFlare designer and the plugin.