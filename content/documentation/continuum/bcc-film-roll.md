{
"date": "",
  "title": "BCC+ Film Roll",
  "link": "BCC+ Film Roll",
  "category": "BCC Transitions"
}
The BCC+ Film Roll is an auto-animating transition effect that creates a grungy damaged glowy film roll over the duration of the transition. 

The ease in and out of the auto-transition can be modified using the included animation control group, located at the bottom of the effect controls. There are 10 effect groups in this transition: dirt, hair, scratches, stains, splotches, gate weave, flicker, vignette, grain and film glow. Included in the transition is a roll speed option, which is used to set the amount of times the outgoing and incoming clips will roll past through the course of the transition. The clips can be separated spatially with a user defined solid color filling the separation gap between the clips. By default, the effect uses a pyramid blur, which is fast and smooth, but users can select between this, a double smooth pyramid and a gaussian blur. A full suite of color correction tools are also included with this transition effect.

![](https://borisfx-com-res.cloudinary.com/image/upload/v1666641319/documentation/continuum/uploads/2023/Film-Roll.jpg)

### ﻿Presets and the FX Editor

The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](https://borisfx.com/documentation/continuum/bcc-fx-editor) to return to the host user interface.

To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done.

### ﻿

### Filter Parameters

**Animation**: Menu controlling what drives the animation of the transition.

* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Manual* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.

**Layer to Reveal** – This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition.

**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.

**Roll Speed:**  Used to set the speed at which the outgoing clip progresses through the transition. 

**Separation:** Used to set the speed at which the swish pan progresses through the transition. 

**Use Colored Background:** Enable to select a color background to overlay between the outgoing and incoming clip. 

**Background Color:** Used to set the color of the background. Default is black.

**Global Intensity:** Used to set the master intensity of the various parameter groups.

### ﻿

### Film Grunge group

**Randomize:** Used to set the global randomness of the various grunge effects.

### ﻿

### Dirt group

**Opacity**: Used to set the peak opacity of the dirt spots.

**Amount:** Used to set the number of dirt spots in the effect. Higher values add more spots.

**Size:** Used to set the overall size of the dirt spots. 

**Type:** Used to select between Positive (Black) or Negative (White). 

### ﻿

### Hair group

**Opacity**: Used to set the peak opacity of the hair strands.

**Amount**: Used to set the number of hair strands in the effect. Higher values add more spots.

**Size**: Used to set the overall size of the individual hair strands. 

**Type**: Used to select between Positive (Black) or Negative (White). 

### ﻿

### Scratches group

**Opacity**: Used to set the peak opacity of the scratch lines.

**Amount**: Used to set the number of scratches in the effect. Higher values add more scratches.

**Width**: Used to set the thickness of the scratch lines. Higher values produce thicker, less eroded lines.

**Length**: Used to set the length of the scratches as a percentage of the image height. 

**Variance**: Used to randomize the length of individual scratches in the effect.

**Roughness**: Used to adjust the amount of erosion in the scratches. 

**Type**: Used to select between Positive (Black) or Negative (White). 

### ﻿

### Stains group

**Opacity**: Used to set the peak opacity of the stains.

**Amount**: Used to set the number of stains in the effect. Higher values add more stains.

**Size**: Used to set the overall size of the individual stains. 

**Type**: Used to select between Positive (Black) or Negative (White). 

### ﻿

### Splotches group

**Opacity**: Used to set the peak opacity of the splotches.

**Amount**: Used to set the number of splotches in the effect. Higher values add more splotches.

**Size**: Used to set the overall size of the individual splotches. 

**Type**: Used to select between Positive (Black) or Negative (White). 

### ﻿

### Gate Weave group

**Amount X:** The amount of weave along the horizontal axis.

**Amount Y:** The amount of weave along the vertical axis.

**Amount Gang:** Links the Amount XY parameter values.

**Speed:** Used to adjust the speed of the weave.

**Auto-scale:** Automatically scales the effect to the image size. 

**Edge Mode:** Determines how edges of the filtered frame are handled.

* *Transparent*: allows the edge of the result to become transparent.
* *Repeat*: repeats edge pixels to generate opaque pixels along the edge of the result.
* *Reflect*: reflects pixels back into the result to generate opaque pixels along the edge of the result.

### ﻿

### Flicker group

**Amount**: Used to set the overall intensity of the flicker effect.

**Speed**: Used to set the length of time between each flicker. Higher values will result in a faster flicker.

### ﻿

### Vignette group

The vignette group includes options for controlling the size, position and softness of the vignette as well as control over the color. 

**Opacity**: Sets the opacity of the colored vignette. For defocused vignettes, you may want to turn down the Opacity so you can see the defocused effect.

**Color**: Used to set the color of the vignette through the use of a standard color picker. The default color is black.

**Position X/Y:** Used to set the overall center position of the vignette along the XY axis.

**Roundness**: Sets the roundness of the vignette. The vignette can either be circular or square or anywhere in between.

**Size**: Used to set the size of the vignette.

**Aspect Ratio**: Used to set the aspect ratio of the vignette. A value of -100 would be wider, and 100 would be taller.

**Rotation**: Used to set the angle of the vignette.

**Distortion**: Used to add distortion into the interior edge of the vignette. Higher values result in more distorted edges. 

**Distortion Size**: Used to set the intensity of the distortion. A value of zero will result in no visible distortion, whereas a value of 100 will result in a highly stylized distortion. 

**Randomize**: Used to adjust the randomness of the vignette distortion.

**Softness**: The Softness parameters control the master softness of the vignette edge.

### ﻿

### Grain group

Use this group to add grain to the effect. There's a checkbox option to set the grain to be RGB or B/W. Sometimes a little static B/W grain is a nice way to add a pleasing texture to the result. The Response Position, Range and Minimum parameters allow you to control where grain is added to the shot and can be thought of as a way to matte back the grain generator.

**Enable checkbox**: Used to enable/disable the grain effect.

**Monochrome**: When checked, the grain is monochrome. In this mode, only the Red Size, Red Amount and Red Softness sliders are active. Since the grain is monochrome, only one slider is needed.

**Size**: Controls the size of the grain. The larger the Size setting, the larger the grain will be.

The Amount parameters set the red, green and blue intensities of the grain. Film stocks generally have varying amounts of red, green and blue intensities with the blue intensity generally higher than the rest. If you turn the red, green and blue amount sliders to a value of 0, the grain will disappear.

**Red Amount**: Controls the intensity of the red grain.

**Green Amount**: Controls the intensity of the green grain.

**Blue Amount**: Controls the intensity of the blue grain.

**Softness**: The Softness parameter controls the softness of the grain. Normally, only minor softness adjustments are necessary, usually between a value of 0-1.

**Response Position**: Defines the portions of the image where grain will be added. A low Position value places grain in the darkest image values, while a high Position value places grain in the brightest areas.

**Response Range**: Increases or decreases the area where grain is added to the image based on the value of the Position slider. A low Range value indicates a narrow range of values, while a high Range value indicates a large range of values.

**Response Minimum**: Sets the minimum level of grain that is always added to the image. A Position value of 0 and a Range of 80 is typical of standard film, with grain applied to the entire range except the brightest whites with black being the most affected.

*Note: You may not see an accurate representation of the grain in the viewer unless your timeline/composition is set to high quality and the viewer is set to a 1:1 pixel ratio.*

### ﻿

### Film Glow group

**P﻿re/Post:**  Used to determine the order in which the glow is applied to the effect.

* *P﻿re Film Grunge*: Applies the film glow to the transition before the other grunge effects. 
* *P﻿ost Film Grunge*: Applies the film glow to the transition after the other grunge effects have been applied.

**View pop-up**: allows for the selection of the view to aid in setting up the filter.

* *Output*: This is the main result of the full  glow effect applied back over the input clip
* *Glow*: Displays just the generated glow prior to being applied back to the input clip via the apply modes.
* *Threshold*: Displays the intermediate result of the threshold setting

**Glow Intensity**: Use to control the intensity of the glow result. Higher values yield a stronger glow with a total white image when this parameter is set to it’s highest value.

**Glow Color**: Used to set the color of the glow. Default is white.

**Glow Radius**: Used to set the radius over which the glow spreads to surrounding regions.

**Glow Desaturation**: Used to alter the glow result by adjusting the chroma values that are used for the input. At 0 the function has no effect on the result generating a traditional film glow, increasing the value in this parameter yields a result that looks colder and less saturated.

**Glow Threshold**: Used to set the pixel values that are affected by the glow – a setting of 0 will apply a glow to all of the pixels in the input clip, while a setting of 100 will not apply any glow to the image.

**Glow from Alpha**: The Glow From Alpha option generates the image glow from the alpha channel instead of or in addition to the color channels. The selection in the Glow From Alpha Mode determines how the alpha glow and the color channel glows are combined.

**Glow Boost Alpha**: Used to Control how much the spread of glow pixels caused by the blur boosts the alpha channel of non-­‐opaque pixels.

**Glow Under Source**: Use this function to control how the glows are composited with alpha source clips – a setting of zero composites the glow on top of the source and disregards the source alpha channel, while a setting of 100 composites the glow behind opaque regions in the source but allowing them to extend out into the transparent regions.

**Edge Handling**: Determines how edges of the filtered frame are handled.

* *Transparent*: allows the edge of the result to become transparent.
* *Repeat*: repeats edge pixels to generate opaque pixels along the edge of the result.
* *Reflect*: reflects pixels back into the result to generate opaque pixels along the edge of the result.
* *Wrap*: wraps edge pixels to generate opaque pixels along the edge of the result.

**RGB Independent Glows**: This checkbox enables independent scaling of the glow dimensions for Red, Green, and Blue color channels.

**Red Scale:** Scales red glow uniformly.

**Red Scale X**: Scales red glow along horizontal axis.

**Red Scale Y**: Scales red glow along vertical axis.

**Green Scale**: Scales green glow uniformly.

**Green Scale X**: Scales green glow along horizontal axis.

**Green Scale Y**: Scales red glow along vertical axis.

**Blue Scale**: Scales blue glow uniformly.

**Blue Scale X**: Scales blue glow along horizontal axis.

**Blue Scale Y:** Scales blue glow along vertical axis.

**Secondary Glow**: Enables/Disables secondary glow parameters.

### ﻿

### Secondary Glow group

**Link Glow Intensity**: When enabled the secondary glow intensity is linked to the primary glow intensity parameter.

**Glow Intensity**: Used to control the intensity of the secondary glow result. Higher values yield a stronger glow with a total white image when this parameter is set to it’s highest value.

**Glow Color**: Used to set the color of the secondary glow. Default is white.

**Glow Radius**: Used to set the radius over which the secondary glow spreads to surrounding regions.

**Glow Radius X**: Scales secondary glow along horizontal axis.

**Glow Radius Y**: Scales secondary glow along vertical axis.

**Glow Desaturation**: Used to alter the secondary glow result by adjusting the chroma values that are used for the input. At 0 the function has no effect on the result generating a traditional film glow, increasing the value in this parameter yields a result that looks colder and less saturated.

**Glow Threshold**: Used to set the pixel values that are affected by the secondary glow – a setting of 0 will apply a glow to all of the pixels in the input clip, while a setting of 100 will not apply any glow to the image.

**Glow Under Source**: Use this function to control how the secondary glows are composited with alpha source clips – a setting of zero composites the glow on top of the source and disregards the source alpha channel, while a setting of 100 composites the glow behind opaque regions in the source but allowing them to extend out into the transparent regions.

### ﻿

### Extras group

**Threshold Color**: The RGB values of this color are added to the threshold slider value to make an independent threshold for each channel. (e.g. if this is set to pure blue, the blue channel is not glowed, regardless of the channel values or the threshold slider setting.)

**Glow Apply Mode**: This pop-­up is used to set the apply mode that the filter uses to composite the glow over the input image.  The default apply mode is “Screen”.

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

**Perpendicular Blur:** Used to control the horizontal blur amount

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