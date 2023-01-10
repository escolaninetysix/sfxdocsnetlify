{
"date": "",
  "title": "BCC+ Swish Pan",
  "link": "BCC+ Swish Pan",
  "category": "BCC Transitions"
}
The BCC+ Swish Pan is an auto-animating transition effect that creates a fast camera pan between a clip pair. 

The ease in and out of the auto-transition can be modified using the included animation control group, located at the bottom of the effect controls. Included in the transition is a roll speed option, which is used to set the amount of times the outgoing and incoming clips will roll past through the course of the transition. The clips can be separated spatially with a user defined solid color filling the separation gap between the clips. By default, the effect uses a pyramid blur, which is fast and smooth, but users can select between this, a double smooth pyramid and a gaussian blur. A full suite of color correction tools are also included with this transition effect.

![](https://borisfx-com-res.cloudinary.com/image/upload/v1666641664/documentation/continuum/uploads/2023/Swish-Pan.jpg)

### Presets and the FX Editor

The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](https://borisfx.com/documentation/continuum/bcc-fx-editor) to return to the host user interface.

To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done.

### Filter Parameters

**Animation**: Menu controlling what drives the animation of the transition.

* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Manual* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.

**Layer to Reveal:** This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition.

**Percent Done**:  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.

**Pan Direction**: Used to set the direction of the swish pan. Default is right to left. 

**Roll Speed**:  Used to set the speed at which the outgoing clip progresses through the transition. 

**Separation**: Used to set the speed at which the swish pan progresses through the transition. 

**Use Colored Background**: Enable to select a color background to overlay between the outgoing and incoming clip. 

**Background Color**: Used to set the color of the background. Default is black.

### ﻿

### Blur group

**Blur Quality**: Selects the style of the blur and the overall quality of the effect.

**Blur**:  Used to control the main blur amount

**Edge Mode**: Determines how edges of the filtered frame are handled

* *Box*: the fastest option but with the least smooth result.
* *Pyramid*: offers the performance boost of a box but with some of the smoothness that approaches a gaussian. This is the default setting of the filter.
* *Pyramid Smoother*: an extra smoothing pass over a standard Pyramid and closer to the look of a gaussian.
* *Gaussian*: the smoothest result but not quite as fast as the other options.
* *Transparent*: allows the edge of the result to become transparent.
* *Repeat*: repeats edge pixels to generate opaque pixels along the edge of the result. This is the default setting of the filter.
* *Reflect*: reflects pixels back into the result to generate opaque pixels along the edge of the result.

**Perpendicular Blur**: Used to control the horizontal blur amount

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

**View Ease Curve**: (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the animation curves rendered into the composite window.

**GPU Rendering**: allows for the selection of GPU or CPU software rendering.

* *Default*: Uses the GPU to render the effect.
* *16 bit float*
* *32 bit float*
* *Disabled*: disables GPU rendering and allows for CPU software rendering.