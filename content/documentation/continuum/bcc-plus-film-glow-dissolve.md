{
"date": "2019-06-12",
"title": "BCC+ Film Glow Dissolve",
"category": "BCC Transitions",
"link": "bcc-plus-film-glow-dissolve/"
}

 
NEW IN CONTINUUM 2022.5, the BCC+ Film Glow Dissolve filter generates a traditional film glow look that automatically increases in intensity as it animates the transition progresses to obscure the dissolve between clips. 


[![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2022/04/FGD-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Fast-Film-Glow.jpg)
### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Manual* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Layer to Reveal** – This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition. 


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.




**View pop-­up:** This four way pop-up is useful when setting up the filter:


* *Output:* This is the main result of the full  glow effect applied back over the input clip
* *Glow:* Displays just the generated glow prior to being applied back to the input clip via the apply modes.
* *Threshold:* Displays the intermediate result of the threshold setting
* *Threshold w Boost + Desat:* Displays the intermediate result of the Threshold with Boost and Glow Desaturation applied


**Glow Intensity:**Use to control the intensity of the glow result. Higher values yield a stronger glow across the image while lower values restrict the glow intensity.


**Glow Color:**Used to set the color of the glow. In it’s default state the glow is white. By selecting a color with the color chip, the glow can be set to any RGB value. With the eyedropper, the glow color can be selected directly from the image pixels.  



**Glow Radius:**Used to set the radius over which the glow spreads to surrounding regions. Higher values will result in a larger, more diffuse glow, while lower values will create a more restricted glow.


**Glow Radius** **X**: Used to set the width of the glow along the X axis. Higher values will result in a glow that is stretched horizontally along the X axis, while lower values will restrict the glow horizontally along the X axis.


**Glow Radius** **Y :**Used to set the width of the glow along the Y axis. Higher values will result in a glow that is stretched vertically along the Y axis, while lower values will restrict the glow horizontally along the Y axis..


**Glow Desaturation:**Used to alters the glow result by adjusting the chroma values that are used for the input. At 0 the function has no effect on the result generating a traditional film glow, increasing the value in this parameter yields a result that looks colder and less saturated.


**Glow Threshold:**Used to set the pixel values that are affected by the glow – a setting of 0 will apply a glow to all of the pixels in the input clip, while a setting of 100 will not apply any glow to the image.


**Glow From Alpha:**The Glow From Alpha option generates the image glow from the alpha channel instead of or in addition to the color channels. The selection in the Glow From Alpha Mode determines how the alpha glow and the color channel glows are combined.


**Glow Boost Alpha:**Controls how much the spread of glow pixels caused by the blur boosts the alpha channel of non-­‐opaque pixels.


**Glow Under Source:** Use this function to control how the glow is composited with source clips – a setting of zero composites the glow on top of the source and disregards the source alpha channel, while a setting of 100 composites the glow behind opaque regions in the source but allowing it to extend out into the transparent regions.


**Edge Handling:** Determines how edges of the filtered frame are handled. 


* *Transparent:* allows the edge of the result to become transparent.
* *Repeat:* repeats edge pixels to generate opaque pixels along the edge of the result.
* *Reflect:* reflects pixels back into the result to generate opaque pixels along the edge of the result.
* *Warp*: warps edge pixels to generate opaque pixels along the edge of the result.


**RGB****Independent Glows****:**This checkbox enables independent scaling of the glow dimensions for R, G, and B.


**Red Scale:** Used to set the scale of the red glow uniformly. Higher values will increase the scale along the X and Y axis.


**Red Scale X:** Used to set the scale of the red glow along the horizontal axis. Higher values will increase the scale along the X axis. While lower values will restrict it.


**Red Scale Y:**  Used to set the scale of the red glow along the vertical axis. Higher values will increase the scale along the Y axis. While lower values will restrict it. 


**Green Scale:** Used to set the scale of the green glow uniformly. Higher values will increase the scale along the X and Y axis. 


**Green Scale X:** Used to set the scale of the green glow along the horizontal axis. Higher values will increase the scale along the X axis. while lower values will restrict it. .


**Green Scale Y:** Used to set the scale of the green glow along the vertical axis. Higher values will increase the scale along the Y axis. while lower values will restrict it. 


**Blue Scale:**  Used to set the scale of the blue glow uniformly. Higher values will increase the scale along the X and Y axis.


**Blue Scale X:**  Used to set the scale of the green glow along the horizontal axis. Higher values will increase the scale along the X axis. While lower values will restrict it. . 


**Blue Scale Y:** Used to set the scale of the blue glow along the vertical axis. Higher values will increase the scale along the y axis. While lower values will restrict it.


**Glow Matte Type**: Selects the channel in the source image from which the glow is derived. Pixels with higher values in the selected channel are considered to have higher intensities.


* *Color*: use the RGBA color channel and multiplies it by the source alpha channel.
* *Color Inverted*: uses the inverted color channel.
* *Luma*: uses the luma channel.
* *Luma* *Inverted:* uses the inverted luma channel.
* *Alpha:* use the unmodified Alpha channel.
* *Alpha Inverted*: use the inverted Alpha channel.


#### **Extras Group**


**Threshold****Color:**The RGB values of this color are added to the threshold slider value to make an independent threshold for each channel. (e.g. if this is set to pure blue, the blue channel is not glowed, regardless of the channel values or the threshold slider setting.)


**Glow Apply Mode:** This pop-­up is used to set the apply mode that the filter uses to composite the glow over the input image.  The default apply mode is “Screen”.


#### Color Correction Group


The Color Correction group provides a range of color correction tools to adjust the overall look of the transition. 


**Hue**: Used to control the overall hue of the transition.


**Saturation:** Used to control the overall saturation of the transition. Higher values create a more intense color saturation than lower values.


**Brightness:** Used to control the overall brightness of the transition.  
Higher values create a more intense highlights than lower values.


**Contrast:** Used to control the overall contrast of the transition. Higher values create a more intense contrast between light and dark pixels than lower values.


**Gamma:** Used to control the overall gamma of the transition.


**Temperature:**Used to control the overall temperature of the transition. Moving the Temperature slider to the left (negative values) will yield a cooler result, while moving the slider to the right will warm up the shot.


**Cyan/Magenta:** Used to control the overall amount of cyan/magenta in the image..  Moving the slider to the left (negative values) will add a cyan tint, while moving the slider to the right will add a magenta tint.


**Red**: Used to control the overall value of the red color channel. Higher values increase the overall influence of the red color channel than lower values.  



**Green**: Used to control the overall value of the green color channel. Higher values increase the overall influence of the blue color channel than lower values.


**Blue**: Used to control the overall value of the blue color channel. Higher values increase the overall influence of the red color channel than lower values.


#### **Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Glow Ease In:**Control how quickly or slowly the glow amount increases at the beginning of the transition.


**Glow Ease Mid:**Control the rate of change of the glow amount (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


**Glow Ease Out:**  Control how quickly or slowly the glow amount decreases at the end of the transition.


**Dissolve Duration:**  Control the timing of the underlying dissolve relative to the timing of the rest of the transition.


**OSC Enable:** Only visible in hosts that support heads up display widgets for manipulating these controls directly on screen. Enables/Disables on screen controls.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


**GPU Rendering:** allows for the selection of GPU or CPU software rendering.


* *Default*: Uses the GPU to render the effect.
* *16 bit float*
* *32 bit float*
* *Disabled*: disables GPU rendering and allows for CPU software rendering.


 



