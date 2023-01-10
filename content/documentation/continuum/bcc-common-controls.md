{
"date": "2019-06-12",
"title": "BCC Common Controls",
"category": "Uncategorized",
"link": "bcc-common-controls/"
}

 ### Overview


BCC plug-ins offer a variety of common control groups for consistent access to features which are shared across the BCC toolkit.  This document provides an summary of the main common control groups and links to detailed descriptions of each group.


### BCC Common Controls – Avid


BCC offers a number of common controls unique to the workflow requirements in Avid.


For more information about Avid-specific common controls, [Click here](/documentation/continuum/bcc-common-controls-avid/).

### BCC+Presets and the BCC+FX Editor™


BCC+ filters include an extensive library of factory-installed presets, along with the ability to save and share your own customized presets and exchange them between different host applications.  The FX Editor is a graphical interface not just for browsing presets, but for adjusting effect settings with access to advanced UI controls such as color wheels where necessary.  You can find detailed info using BCC+Presets and the BCC+FX Editor on the [FX Editor](/documentation/continuum/bcc-fx-editor/) help page.

### BCC Presets and the BCC FX Browser™


BCC has always shipped with a large library of factory-installed presets, along with the ability to save and share your own customized presets and exchange them between different host applications.  With the introduction of the BCC FX Browser™ in BCC9 the power of your the BCC preset library is taken to a whole new level.  The BCC FX Browser is a new graphical preset browser that generates previews of your presets applied to live video for maximum ease in previewing and selecting from your library.


For more information on BCC Presets and the BCC FX Browser™, [Click Here](/documentation/continuum/bcc-presets/).

### BCC Preferences


The BCC Preferences manager allows customizing global settings that apply across the full BCC effect set.  These controls allow fine tuning your BCC workflow and hardware settings.


For more information about the BCC Preferences, [Click here](/documentation/continuum/bcc-preferences/).

### BCC Compare Mode


Many BCC filters include the BCC Compare Mode to allow easy comparison between the original and the affected image.  In its simplest form the Compare Mode offers a basic split screen view with the original on one side and the modified image on the other side.  For a full description of the BCC Compare Mode consult the documentation here:  [BCC Compare Mode](/documentation/continuum/bcc-compare-mode/ "BCC Compare Mode").

### BCC+PixelChooser and Mocha Mask Tracking


New with Continuum 2022, most BCC+ filters include a newly updated BCC+ version of the PixelChooser which includes Mocha Planar Mask tracking.  In its standard form the PixelChooser allows you to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  A full description of the BCC+ Pixel Chooser can be found here:  [BCC+PixelChooser](/documentation/continuum/ "BCC+PixelChooser").


### BCC PixelChooser and Mocha Mask Tracking


Many BCC effects include the BCC PixelChooser with integrated Mocha Planar Mask Tracking to provide powerful built-in masking of the effect result.  In its standard form the PixelChooser allows you to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  As of BCC10 the PixelChooser now includes fully integrated Mocha planar tracking to allow for highly robust tracking of spline masks.  When not using Mocha masks the PixelChooser selection can be also based on either a variety of geometric properties such as rectangular/oval/gradient masks, or on image channel data such as luma maps or color ranges.  As of BCC10 the PixelChooser includes robust HSL masking with state of the art OpenCL accelerated matte noise reduction.  Some effects permit using the PixelChooser for more than simple masking such as  for defining in-filter luma maps to drive other effect properties.  Any filters which support the PixelChooser can share PixelChooser presets via the built in sub-preset controls.  A full description of the Pixel Chooser can be found here:  [BCC PixelChooser](/documentation/continuum/bcc-pixel-chooser/ "BCC PixelChooser").  Note that Mocha can also be used for driving geometric parameter data such as point pick picker location.  That is a separate use of Mocha which is covered in the [BCC Mocha Motion Tracker](/documentation/continuum/bcc-motion-tracker/) documentation.

### BCC Mocha Motion Tracker


The BCC Mocha Motion Tracker, new in Continuum 2019, is a completely redesigned parameter tracking tool which uses the power of Mocha’s planar tracking engine to automatically drive geometric parameter data such as light or emitter positions without the need for manual keyframing.  The new Mocha-based Motion Tracker replaces the Legacy BCC Motion Tracker and offers direct integration with the Mocha UI for state of the art tracking technology, nearly universal host support, and a simplified native host interface.  Note, this is a separate use of Mocha aimed directly at driving parameter values, as opposed to the Mocha PixelChooser which is used for mask tracking.  A full description of the Mocha Motion Tracker (along with the legacy BCC tracker) can be found here:  [BCC Mocha Motion Tracker](/documentation/continuum/bcc-motion-tracker/ "BCC PixelChooser").

### BCC Beat Reactor


The BCC Beat Reactor is an animation control suite which enables driving parameter animation based on the contents of audio tracks.  This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.  The BCC Beat Reactor comes in two flavors – a standalone keyframe generator which is available only in After Effects at this time and an integrated generator which appears directly inside many BCC effects in all other hosts.  Both versions analyze an audio track and let you isolate key audio elements to drive particular animation properties.  In the standalone AE version you then export a set of keyframes to the timeline which can be copy/pasted anywhere in AE.  The integrated version uses internally maintained keyframes to drive specific key parameters in supported effects.  Full descriptions of the Beat Reactor can be found here:


[BCC Beat Reactor – Standalone](/documentation/continuum/bcc-beat-reactor/ "BCC Beat Reactor - Standalone") (AE)

[BCC Beat Reactor – Integrated](/documentation/continuum/bcc-beat-reactor-integrated/ "BCC Beat Reactor - Integrated") (All hosts)

### BCC Gradients


Many BCC effects include the BCC Gradient control group which defines complex multi-color gradients for use in a variety of effect settings such as colorizing light sources.  Any filters which support the BCC Gradient group can share gradient presets via the built in sub-preset controls.  A full description of the BCC Gradient controls can be found here:  [BCC Gradients](/documentation/continuum/bcc-gradient/ "BCC Gradients").

### BCC Distortion Pinning


Many BCC distortion effects include standard controls to handle edge treatment behavior in cases where the distortion might cause transparent regions from outside the image edges to creep into the image.  A full description of the BCC Pinning controls can be found here:  [BCC Pinning Controls](/documentation/continuum/bcc-pinning-controls/ "BCC Pinning Controls").

### BCC Apply Modes


Many effects use Apply Modes to control how the filter result (or a generated light) is applied back to the source image. Apply Modes control the blending of the two images, giving the effects additional creative possibilities.   A description of the individual apply modes can be found here:  [BCC Apply Modes](/documentation/continuum/bcc-apply-modes/ "BCC Apply Modes").

 