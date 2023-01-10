{
"date": "2022-10-24T19:24:44.855Z",
  "title": "BCC+ Texture Wipe",
  "category": "BCC Transitions",
  "link": "BCC+-Texture-Wipe"
}
The BCC+ Texture Wipe is an auto-animating transition effect that generates a luma map based texture wipe between a clip pair. 

The ease in and out of the auto-transition can be modified using the included animation control group, located at the bottom of the effect controls. The luma values for the wipe can be taken from the source (outgoing) shot, reveal (incoming) shot or a mix of both (combined luma map of both outgoing and incoming clips). Also included are controls for adjusting the luma map used by the filter and a way to view the matte while making adjustments to it. A full suite of color correction tools are also included with this transition effect.

![](https://borisfx-com-res.cloudinary.com/image/upload/v1666672695/documentation/continuum/uploads/2023/TextWipe.jpg)

### Presets and the FX Editor

The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](https://borisfx.com/documentation/continuum/bcc-fx-editor) to return to the host user interface.

To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done.

### Filter Parameters

**Animation:** Menu controlling what drives the animation of the transition.

* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Manual* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.

**Layer to Reveal:** This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition.

**Percent Done**:  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.

**Invert Wipe**: Used to invert the direction of the wipe. When enabled, the effect will wipe on from left to right, as opposed to the default right to left. 

### ﻿

### Matte group

**View Matte**: Allows you to view the matte as you adjust it. Be sure to deselect this option before rendering.

**Texture Map**: Used to select the texture input source.

**Channel**:  Used to select the matte input to use in the Composite.

* *Luma*: The average luminance of the RGB channels is used for the matte in the composite
* *Red Channel*: The Red Channel is used for the matte in the composite.
* *Green Channel*: The Green Channel is used for the matte in the composite.
* *Blue Channel*: The Blue Channel is used for the matte in the composite.
* .*Alpha Channel*: The Alpha Channel is used for the matte in the composite.

*Note: The Use parameter is not available in Avid Editing Systems. When applied to a Matte Key, the Alpha Channel is used, otherwise it uses the luminance of the RGB channels.*

**Pre-smoothing Amount**: Used to blur the alpha channel BEFORE the matte is processed. 

**Softness**: Used to control the amount of affect the Choke setting has. When Softness is 100, the Choke value has no affect on the image. If Softness is 0, the Choke acts as an alpha extract and produces a purely binary key. 

**Choke**:  Used to adjust the size of the opaque portion of the matte. Positive values expand the opaque areas, while negative values contract them.

**Blur**: Used to blur the alpha channel after the matte is processed.

### Color Correct group

The Color Correction group provides a range of color correction tools to adjust the overall look of the transition.

**Hue**: Used to control the overall hue of the transition.

**Saturation**: Used to control the overall saturation of the transition. Higher values create a more intense color saturation than lower values.

**Brightness**: Used to control the overall brightness of the transition.Higher values create more intense highlights than lower values.

**Contrast**: Used to control the overall contrast of the transition. Higher values create a more intense contrast between light and dark pixels than lower values.

**Gamma**: Used to control the overall gamma of the transition.

**Temperature**: Used to control the overall temperature of the transition. Moving the Temperature slider to the left (negative values) will yield a cooler result, while moving the slider to the right will warm up the shot.

**Cyan/Magenta**: Used to control the overall amount of cyan/magenta in the image..  Moving the slider to the left (negative values) will add a cyan tint, while moving the slider to the right will add a magenta tint.

**Red**: Used to control the overall value of the red color channel. Higher values increase the overall influence of the red color channel than lower values.

**Green**: Used to control the overall value of the green color channel. Higher values increase the overall influence of the blue color channel than lower values.

**Blue**: Used to control the overall value of the blue color channel. Higher values increase the overall influence of the red color channel than lower values.

### ﻿

### Animation Tuning group

These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.

**Ease In**: Control how quickly or slowly the line advances at the beginning of the transition.

**Ease Out**:  Control how quickly or slowly the line advances at the end of the transition.

**OSC Enable**: Only visible in hosts that support heads up display widgets for manipulating these controls directly on screen. Enables/Disables on screen controls.

**View Ease Curve**: (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window\*.\*

**GPU Rendering**: allows for the selection of GPU or CPU software rendering.

* *Default*: Uses the GPU to render the effect.
* *16 bit float*
* *32 bit float*
* *Disabled*: disables GPU rendering and allows for CPU software rendering.