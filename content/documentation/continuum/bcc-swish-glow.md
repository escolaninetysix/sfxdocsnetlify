{
"date": "2022-10-24T16:40:56.518Z",
  "title": "BCC+ Swish Glow",
  "category": "BCC Transitions",
  "link": "BCC+ Swish Glow"
}
The BCC+ Swish Glow is an auto-animating transition effect that creates a fast camera pan between a clip pair and includes a soft film glow over the duration of the transition. 

The ease in and out of the auto-transition can be modified using the included animation control group, located at the bottom of the effect controls. Included in the transition is a roll speed option, which is used to set the amount of times the outgoing and incoming clips will roll past through the course of the transition. The clips can be separated spatially with a user defined solid color filling the separation gap between the clips. By default, the effect uses a pyramid blur, which is fast and smooth, but users can select between this, a double smooth pyramid and a gaussian blur. A full suite of color correction tools are also included with this transition effect.

![](https://borisfx-com-res.cloudinary.com/image/upload/v1666629148/documentation/continuum/uploads/2023/Swish-Glow.jpg)

### Presets and the FX Editor

The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](https://borisfx.com/documentation/continuum/bcc-fx-editor) to return to the host user interface.

To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done.

### Filter Parameters

**Animation**: Menu controlling what drives the animation of the transition.

* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Manual* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.

**Layer to Reveal:** This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition.

**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.

**Pan Direction:** Used to set the direction of the swish pan. Default is right to left. 

**Roll Speed:**  Used to set the speed at which the outgoing clip progresses through the transition. 

**Separation:** Used to set the speed at which the swish pan progresses through the transition. 

**Use Colored Background:** Enable to select a color background to overlay between the outgoing and incoming clip. 

**Background Color:** Used to set the color of the background. Default is black.

### Film Glow group

**View pop-up:** allows for the selection of the view to aid in setting up the filter.

* *Output*: This is the main result of the full  glow effect applied back over the input clip
* *Glow*: Displays just the generated glow prior to being applied back to the input clip via the apply modes.
* *Threshold*: Displays the intermediate result of the threshold setting

**Glow Intensity:** Use to control the intensity of the glow result. Higher values yield a stronger glow with a total white image when this parameter is set to it’s highest value.

**Glow Color:** Used to set the color of the glow. Default is white.

**Glow Radius:** Used to set the radius over which the glow spreads to surrounding regions.

**Glow Desaturation:** Used to alter the glow result by adjusting the chroma values that are used for the input. At 0 the function has no effect on the result generating a traditional film glow, increasing the value in this parameter yields a result that looks colder and less saturated.

**Glow Threshold:** Used to set the pixel values that are affected by the glow – a setting of 0 will apply a glow to all of the pixels in the input clip, while a setting of 100 will not apply any glow to the image.

**Glow from Alpha:** The Glow From Alpha option generates the image glow from the alpha channel instead of or in addition to the color channels. The selection in the Glow From Alpha Mode determines how the alpha glow and the color channel glows are combined.

**Glow Boost Alpha:** Used to Control how much the spread of glow pixels caused by the blur boosts the alpha channel of non-­‐opaque pixels.

**Glow Under Source:** Use this function to control how the glows are composited with alpha source clips – a setting of zero composites the glow on top of the source and disregards the source alpha channel, while a setting of 100 composites the glow behind opaque regions in the source but allowing them to extend out into the transparent regions.

**Edge Handling**: Determines how edges of the filtered frame are handled.

* *Transparent*: allows the edge of the result to become transparent.
* *Repeat*: repeats edge pixels to generate opaque pixels along the edge of the result.
* *Reflect*: reflects pixels back into the result to generate opaque pixels along the edge of the result.
* *Wrap*: wraps edge pixels to generate opaque pixels along the edge of the result.

**RGB Independent Glows:** This checkbox enables independent scaling of the glow dimensions for Red, Green, and Blue color channels.

**Red Scale:** Scales red glow uniformly.

**Red Scale X:** Scales red glow along horizontal axis.

**Red Scale Y:** Scales red glow along vertical axis.

**Green Scale:** Scales green glow uniformly.

**Green Scale X:** Scales green glow along horizontal axis.

**Green Scale Y:** Scales red glow along vertical axis.

**Blue Scale:** Scales blue glow uniformly.

**Blue Scale X**: Scales blue glow along horizontal axis.

**Blue Scale Y:** Scales blue glow along vertical axis.

**Secondary Glow:** Enables/Disables secondary glow parameters.

### Secondary Glow group

**Link Glow Intensity:** When enabled the secondary glow intensity is linked to the primary glow intensity parameter.

**Glow Intensity:** Used to control the intensity of the secondary glow result. Higher values yield a stronger glow with a total white image when this parameter is set to it’s highest value.

**Glow Color:** Used to set the color of the secondary glow. Default is white.

**Glow Radius:** Used to set the radius over which the secondary glow spreads to surrounding regions.

**Glow Radius X:** Scales secondary glow along horizontal axis.

**Glow Radius Y:** Scales secondary glow along vertical axis.

**Glow Desaturation:** Used to alter the secondary glow result by adjusting the chroma values that are used for the input. At 0 the function has no effect on the result generating a traditional film glow, increasing the value in this parameter yields a result that looks colder and less saturated.

**Glow Threshold:** Used to set the pixel values that are affected by the secondary glow – a setting of 0 will apply a glow to all of the pixels in the input clip, while a setting of 100 will not apply any glow to the image.

**Glow Under Source:** Use this function to control how the secondary glows are composited with alpha source clips – a setting of zero composites the glow on top of the source and disregards the source alpha channel, while a setting of 100 composites the glow behind opaque regions in the source but allowing them to extend out into the transparent regions.

### Extras group

**Threshold Color:** The RGB values of this color are added to the threshold slider value to make an independent threshold for each channel. (e.g. if this is set to pure blue, the blue channel is not glowed, regardless of the channel values or the threshold slider setting.)

**Glow Apply Mode:** This pop-­up is used to set the apply mode that the filter uses to composite the glow over the input image.  The default apply mode is “Screen”.

### Blur group

**Blur Quality:** Selects the style of the blur and the overall quality of the effect.

**Blur:**  Used to control the main blur amount

**Edge Mode:** Determines how edges of the filtered frame are handled

* *Box*: the fastest option but with the least smooth result.
* *Pyramid*: offers the performance boost of a box but with some of the smoothness that approaches a gaussian. This is the default setting of the filter.
* *Pyramid Smoother:* an extra smoothing pass over a standard Pyramid and closer to the look of a gaussian.
* *Gaussian*: the smoothest result but not quite as fast as the other options.
* ***Transparent***: allows the edge of the result to become transparent.
* *Repeat*: repeats edge pixels to generate opaque pixels along the edge of the result. This is the default setting of the filter.
* *Reflect*: reflects pixels back into the result to generate opaque pixels along the edge of the result.

**Perpendicular Blur:** Used to control the horizontal blur amount

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

### Animation Tuning group

These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.

**Ease In:** Control how quickly or slowly the line advances at the beginning of the transition.

**Ease Out:**  Control how quickly or slowly the line advances at the end of the transition.

**OSC Enable**: Only visible in hosts that support heads up display widgets for manipulating these controls directly on screen. Enables/Disables on screen controls.

**View Ease Curve**: (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the animation curves rendered into the composite window.

**GPU Rendering**: allows for the selection of GPU or CPU software rendering.

* *Default*: Uses the GPU to render the effect.
* *16 bit float*
* *32 bit float*
* *Disabled*: disables GPU rendering and allows for CPU software rendering.

<!--EndFragment-->