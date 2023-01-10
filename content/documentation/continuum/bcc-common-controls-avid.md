{
"date": "2019-06-12",
"title": "BCC Common Controls - Avid",
"category": "Uncategorized",
"link": "bcc-common-controls-avid/"
}

 ### Overview


BCC effects contain a number of parameters that are specific to working with the Avid host environment and this document describes the usage of those parameters and other UI metaphors which are common most/all BCC effects in Avid.  These common controls generally appear at the top and the bottom parameter lists and the details of exactly which parameters are available will vary slightly from one effect to another depending on the nature of individual effects.  This document also describes how to work with the “Heads Up Display” or “Overlay” controls in Avid to enable setting up key parameters directly in the preview window.


### 


### Heads Up Display


BCC allows you to configure the settings for key parameters in most effects by manipulating “Heads Up Display” or “Overlay” widgets directly in the preview window.  These special UI controls give you quick access to the most important parameters in an effect and allow you to tweak them while keep your eyes focused on preview window.  Additionally for certain geometric parameters these overlays allow adjusting the geometric properties with direct reference to the underlying image data rather than merely scrubbing parameter param values in the Effect Editor window.  The details of exactly which Heads Up Display options are available will vary from one effect to another but all effects allow switching between several UI modes by selecting the buttons in the top right of the Effect Editor window as indicated in the screenshot below.  Hovering your mouse over these buttons will display the name of the button and detailed descriptions each button are listed below.


 *[![AvidHeadsUpDisplayOverlays](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/06/AvidHeadsUpDisplayOverlays.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/06/AvidHeadsUpDisplayOverlays.png)*


**Standard UI Widgets**: This is the default UI mode and offers a variety of general purpose widgets which vary based on your individual effect.  The most important parameters of an effect are generally accessible in this Mode.


**Customs Spline UI**: Used when drawing custom spline shapes in the PixelChooser, Motion Key, and Chroma Key Studio.


**Scale + Position**: Adjusts the scale and position in the standard Geometrics group.


**Crop**: Adjusts the image cropping in the standard Geometrics group.


**No UI Widgets**: Completely disables all the heads up display widgets.


 


### Common Parameters Group (BCC 11 and Higher)


**Bypass**: Displays the source clip without an applied effect.


**Show FX Browser**: activates the effects browser for more information on the FX Browser, [Click Here](/documentation/continuum/bcc-fx-browser/).

**Preset Menu**: Used to load or save presets from the list.  If you save a new preset into the standard preset folder it won’t show up in the list until the next time you launch Avid.  It can always be loaded in the meantime using the load command.


* *No Preset:*No preset has been loaded.
* *Reset to Factory Defaults:*Resets all filter parameters to standard default settings.
* *Reset to Custom Default Preset:* Resets filter parameters to settings to your own custom preset, named default.
* *Load:*Launches a standard file browser for selecting a preset.
* *Save:* Launches a standard file browser for saving a preset.


* Note: All things listed below Save are factory installed or your own custom presets.


**View Parameters Menu:** Shows the edited parameters in an effect instance.


* *All:*See all the parameters in the effect
* *Edited:*See only parameters that have been changed from their default parameter.
* *Animated:*Lists only parameters which have been keyframed.
* *EZ Mode:*Not available in all effects but switches to a simplified UI mode that shows only the basic parameters of the effect.
* *Motion Tracking:*Hides all parameters except Motion tracker parameters.


**Background:**Controls which layer is used for the image background in situations where the effect would expose the underlying layers.  In BCC11 and higher you can preserve a live alpha channel in the effect’s result by setting the Background to None which will appear to composite over black but which will still maintain a live alpha channel.


 


### Common Parameters Group (BCC 10 and Earlier)


**Registration Info**: Displays the BCC license management window shows your registration information and status.


**Bypass**: Displays the source clip without an applied effect.


**Launch Help File**: launches the help document.


**Show FX Browser**: activates the effects browser for more information on the FX Browser, [Click Here](/documentation/continuum/bcc-fx-browser/).

**Preset Menu**: Used to load or save presets from the list.  If you save a new preset into the standard preset folder it won’t show up in the list until the next time you launch Avid.  It can always be loaded in the meantime using the load command.


* *No Preset:*No preset has been loaded.
* *Reset to Factory Defaults:*Resets all filter parameters to standard default settings.
* *Reset to Custom Default Preset:* Resets filter parameters to settings to your own custom preset, named default.
* *Load:*Launches a standard file browser for selecting a preset.
* *Save:* Launches a standard file browser for saving a preset.


* Note: All things listed below Save are factory installed or your own custom presets.


**Previous Preset**: Jumps to the previous preset in the list.


**Next Preset**: Jumps to the next preset in the list.


**View Parameters Menu:**Shows the edited parameters in an effect instance.


* *All:*See all the parameters in the effect
* *Edited:*See only parameters that have been changed from their default parameter.
* *Animated:*Lists only parameters which have been keyframed.
* *EZ Mode:*Not available in all effects but switches to a simplified UI mode that shows only the basic parameters of the effect.
* *Motion Tracking:*Hides all parameters except Motion tracker parameters.


 


### General Controls (BCC 11 and Higher)


Note: Not all controls are available in all filters.


**Safe Levels:**Controls whether the levels conform to the 16 – 235 video color range or if they use the full available color luma range.  See the [BCC Preferences](/documentation/continuum/bcc-preferences/) documentation for additional details on additional global preferences that also relate to Safe Levels rendering.

**Effect Layer Opacity:**Adjusts the overall opacity of the layer.


**Draft Mode:** Temporarily switches to lower quality rendering in order to generate faster previews.  Draft mode should be turned off before doing any final rendering.


**Fields Menu:** Controls the details of the deinterlacing process and is thus only relevant when working in interlaced projects.  The options available in this menu will be based on the individual filter to which it is applied.  Note these settings are only relevant when viewing in green/green mode or in when rendering.


* *Speed Optimized:*Produces the fastest performance and render speeds by working with half height images when the filter permits.
* *Quality Optimized:*Deinterlaces the clip before rendering which can yield higher quality results in effects that do warps and geometric transformations.
* *Motion Detect:* Uses an advanced Motion Analysis based deinterlacing technique for maximum quality in in effects that do warps and geometric transformations.
* *Progressive Input:*Used when you know that the original source clip was actually a progressive clip.  This permits the deinterlacing step to be bypassed and can yield higher quality in effects that do warps and geometric transformations..


**Chan Menu:** Allows you to preview individual color channels in your image.


* *All:* Get a normal result with all channels combined.
* *Red:* Selecting red produces a gray scale representation of the red channel.
* *Green:*Selecting green produces a gray scale representation of the green channel.
* *Blue:*Selecting blue produces a gray scale representation of the blue channel.
* *Alpha:*Selecting alpha produces a gray scale representation of the alpha channel.


**License Info**: Displays the BCC license management window shows your current version and license status.


**Preferences:** Launches the BCC Preferences panel.  For more information on BCC Preferences, [Click Here](/documentation/continuum/bcc-preferences/).

**Launch Help File**: launches the help document.


 


### General Controls (BCC 10 and Earlier)


Note: Not all controls are available in all filters.


**Background:**Controls which layer is used for the image background in situations where the effect would expose the underlying layers.


**Safe Levels:**Controls whether the levels conform to the 16 – 235 video color range or if they use the full available color luma range.  See the [BCC Preferences](/documentation/continuum/bcc-preferences/) documentation for additional details on additional global preferences that also relate to Safe Levels rendering.

**Effect Layer Opacity:**Adjusts the overall opacity of the layer.


**Draft Mode:**Temporarily switches to lower quality rendering in order to generate faster previews.  Draft mode should be turned off before doing any final rendering.


**Fields Menu:** Controls the details of the deinterlacing process and is thus only relevant when working in interlaced projects.  The options available in this menu will be based on the individual filter to which it is applied.  Note these settings are only relevant when viewing in green/green mode or in when rendering.


* *Speed Optimized:*Produces the fastest performance and render speeds by working with half height images when the filter permits.
* *Quality Optimized:*Deinterlaces the clip before rendering which can yield higher quality results in effects that do warps and geometric transformations.
* *Motion Detect:*Uses an advanced Motion Analysis based deinterlacing technique for maximum quality in in effects that do warps and geometric transformations.
* *Progressive Input:*Used when you know that the original source clip was actually a progressive clip.  This permits the deinterlacing step to be bypassed and can yield higher quality in effects that do warps and geometric transformations..


**Chan Menu:**Allows you to preview individual color channels in your image.


* *All:*Get a normal result with all channels combined.
* *Red:*Selecting red produces a gray scale representation of the red channel.
* *Green:*Selecting green produces a gray scale representation of the green channel.
* *Blue:*Selecting blue produces a gray scale representation of the blue channel.
* *Alpha:*Selecting alpha produces a gray scale representation of the alpha channel.


**Preferences:**Launches the BCC Preferences panel.  For more information on BCC Preferences, [Click Here](/documentation/continuum/bcc-preferences/).

 


### Title Matte Group


Controls how filters work when applied to Avid title mattes or when maintaining alpha channels between multiple stacked BCC filters.


**Apply to Title – Matte:**Must be enabled when applying a filter to an avid title map to preserve the alpha information in the map.


**Title Alpha:** Controls how the alpha information in the title map is interpreted.


* *Straight*
* *Premult Black*
* *Premult White*


**Invert Title Matte:**Inverts the title matte alpha channel.


**Multifilter Start: [Only in BCC10 and earlier]**Should be enabled if you have stacked BCC filters and you wish to maintain alpha channels from one filter to the next in the stack. Should be enabled in the top filter in the stack.  This control may be found in version BCC11 and higher when opening projects saved in older versions of BCC but it is not necessary for preserving alpha in BCC11 and up.


**Multifilter Mid:  [Only in BCC10 and earlier]**Should be enabled if you have stacked BCC filters and you wish to maintain alpha channels from one filter to the next in the stack. Should be enabled for middle filters in the stack when you have more than two filters in the stack.  This control may be found in version BCC11 and higher when opening projects saved in older versions of BCC but it is not necessary for preserving alpha in BCC11 and up.


**Multifilter End:  [Only in BCC10 and earlier]**Should be enabled if you have stacked BCC filters and you wish to maintain alpha channels from one filter to the next in the stack. Should be enabled in the bottom filter in the stack.  This control may be found in version BCC11 and higher when opening projects saved in older versions of BCC but it is not necessary for preserving alpha in BCC11 and up.


 


### Geometrics Group


Applies standard geometric transforms to the image.  It is particularly useful when using avid title map effects since the original title matte geometrics are unavailable when you have applied a BCC filter to a title map.


**Reset Geometrics:**Rests all the parameters in the geometrics group to the factory default value.


**Enable Geometrics:**Clicking the checkbox turns on the geometrics controls.


**Geometrics:**Controls whether the geometric transforms are applied before or after the BCC effect.


* *Pre-Apply:*Before
* *Post-Apply:*After


**Position:**Modifies the X/Y position of the image.


**Lock Scale:** Locks the X and Y scale parameters so image is scaled equally in each dimension.


**Scale X:** Scale image along the X axis.


**Scale Y**: Scale image along the Y axis.Only visible when Lock is turned off.


**Tumble:** Controls the rotation in 3D space around the X axis.


**Spin:**Controls the rotation in 3D space around the Y axis.


**Rotate:**Controls 2D or 3D rotation around the Z axis.


**Left Crop:** Crops the left hand side of the image.


**Top Crop:**Crops the top of the image.


**Right Crop:**Crops the right hand side of the image.


**Bottom Crop:**Crops the bottom of the image.


**Blend:**Controls how soft the edge of the cropping boundary is.


 


### Drop Shadow Group


Adds a soft drop shadow under the top clip.


**Reset Drop Shadow:**Resets all the parameters in the drop shadow group.


**Enable Drop Shadow:** Enables drop shadows.


**Source Opacity:**Controls the opacity of the shadows in the top layer.


**Distance:**Controls how far offset the shadow is from the image in the top layer.


**Intensity:**Controls how dark the drop shadow is.


**Softness:** Controls the how soft the shape of the drop shadow is.


**Angle:** Controls the direction offset of the drop shadow from the source.


**Shadow Color:** Controls the color of the drop shadow.


