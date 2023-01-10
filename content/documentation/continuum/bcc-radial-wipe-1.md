{
"date": "2022-10-24T19:33:45.663Z",
  "title": "BCC+ Radial Wipe",
  "link": "BCC+ Radial Wipe",
  "category": "BCC Transitions"
}
The BCC+ Radial Wipe is an auto-animating transition effect that generates a circular wipe between a clip pair. 

The ease in and out of the auto-transition can be modified using the included animation control group, located at the bottom of the effect controls. Although the default for this wipe is a proper circle, an aspect ratio option is included to deform the circle into a vertical or horizontal elliptical shape. The angle of the wipe can be set to any rotation value and the wipe edge can be sharp or feathered. Also included in this transition is a set of 3 independently controlled borders, each with control over the color, thickness, softness, offset and opacity of the border. A clip edge option, included in the borders, enables the leading or trailing edge of each border to clip to the wipe edge instead of extending beyond both sides of the wipe.

![](https://borisfx-com-res.cloudinary.com/image/upload/v1666643019/documentation/continuum/uploads/2023/Radial-Wipe.jpg)

### Presets and the FX Editor

The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](https://borisfx.com/documentation/continuum/bcc-fx-editor) to return to the host user interface.

To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done.

### Filter Parameters

**Animation**: Menu controlling what drives the animation of the transition.

* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Manual* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.

**Layer to Reveal:** This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition.

**Percent Done**:  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.

**Invert Wipe**: Used to invert the direction of the wipe. When enabled, the effect will wipe on from left to right, as opposed to the default right to left. 

**Center Position XY**:  Used to set the center point of the wipe on the X and Y axis, respectively.

**Rotation**: Used to set the rotation of the radial wipe. 

**Aspect**: Used to adjust the aspect ratio of the radial wipe. Higher values will result in a wider shape, whereas lower values will result in a taller shape. 

**Softness**: Used to set the softness of the wipe. Higher values will result in a softer line.

### ﻿

### Borders group

**Enable All**: Used to enable the three border groups, creating a user-defined solid border between the two clips.

### ﻿

### Border 1 group

**Thickness**: Used to set the thickness of the first border, in pixels.

**Softness**: Used to set the softness of the first border.

**Offset**:  Used to move the border relative to the edge of the wipe. Negative values move the border to the left; positive values move the border to the right. You can use the Border Offset parameter to make a border appear as a drop shadow.

**Opacity**: Used to set the opacity of the border, expressed as a percentage.

**Clip Edge**: Used to define the edge of the outgoing clip and where the border is placed. 

* *Off*: The clip edge is not specified, and the border is placed directly on the edge itself. 
* *Inside*: The interior of the clip is specified, and the border is placed on the inside edge of the outgoing clip.
* *Outside*: The outside edge of the clip is specified, and the border is placed on the outside edge of the outgoing clip.

**Color**: Used to set the color of the border.

### ﻿

### Border 2 group

**Thickness**: Used to set the thickness of the second border, in pixels.

**Softness**: Used to set the softness of the second border.

**Offset**:  Used to move the border relative to the edge of the wipe. Negative values move the border to the left; positive values move the border to the right. You can use the Border Offset parameter to make a border appear as a drop shadow.

**Opacity**: Used to set the opacity of the border, expressed as a percentage.

**Clip Edge**: Used to define the edge of the outgoing clip and where the border is placed. 

* *Off*: The clip edge is not specified, and the border is placed directly on the edge itself. 
* *Inside*: The interior of the clip is specified, and the border is placed on the inside edge of the outgoing clip.
* *Outside*: The outside edge of the clip is specified, and the border is placed on the outside edge of the outgoing clip.

**Color**: Used to set the color of the border.

### ﻿

### Border 3 group

**Thickness**: Used to set the thickness of the second border in pixels.

**Softness**: Used to set the softness of the second border.

**Offset**:  Used to move the border relative to the edge of the wipe. Negative values move the border to the left; positive values move the border to the right. You can use the Border Offset parameter to make a border appear as a drop shadow.

**Opacity**: Used to set the opacity of the border, expressed as a percentage.

**Clip Edge**: Used to define the edge of the outgoing clip and where the border is placed. 

* *Off*: The clip edge is not specified, and the border is placed directly on the edge itself. 
* *Inside*: The interior of the clip is specified, and the border is placed on the inside edge of the outgoing clip.
* *Outside*: The outside edge of the clip is specified, and the border is placed on the outside edge of the outgoing clip.

**Color**: Used to set the color of the border.

### ﻿

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