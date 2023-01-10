{
"date": "2019-06-12",
"title": "BCC+ Rays Dissolve",
"category": "BCC Transitions",
"link": "bcc-plus-rays-dissolve/"
}

 
NEW IN CONTINUUM 2022.5, the BCC+ Rays Dissolve filter creates stunning and realistic light ray effects that automatically animate in intensity and position as your transition progresses to obscure the dissolve between clips. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2022/04/RD.jpg)
### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**GPU Rendering:** allows for the selection of GPU or CPU software rendering.


* *Default*: Uses the GPU to render the effect.
* *16 bit float*
* *32 bit float*
* *Disabled*: disables GPU rendering and allows for CPU software rendering.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Manual* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Layer to Reveal** – This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition. 


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.




**Source Point Animation:**Contains different options for how the light source moves across the animation.


* *Source*: Begins and Ends the light source at a single fixed point. When selected the light source will not animate it’s position during the transition.
* *Start -> End:*Animates the light source from the defined **Source Start**point to the defined **Source** **End.**


**Source**: Sets the static XY position of the light source when Source Point Animation is set to Source.


**Source** **Start:**Used to control the point of origin for the light source along the XY Axis. When animated, this is where the light source transition will begin.


**Source End:**Used to control the end point for the light source along the XY Axis. When animated, this is where the light source transition will end.


**Source Ease:** used to control the smoothness of motion as the light source travels from the Source Start to Source End.


#### Rays


**Position**: Used to move the point control in the center of the screen to change the source point from which the rays will emanate.


**Length**: Used to set the ray length. Higher values will result in longer rays, while lower values will constrain the rays.


**Brightness**: Used to set the brightness of the rays. Higher values will result in more intense rays and glows. 


**Color**: Used to set parameter sets the color of the rays through the use of a standard color picker. The default color is white. 


**Blur**: Used to control the intensity of the blur applied to the rays. Higher values results in a more intense blur during the transition.  



**Threshold**: Used to control the amount of rays based on a brightness threshold. Fewer rays with more definition are generated at higher threshold values.


#### Light Source


A circular light source can be used to enhance the generation of the light rays. It is particularly useful when the image does not have strong highlights.


**Brightness**: Used to control the intensity of the light source. Higher values will increase the brightness of the light source, and the intensity of the rays.  



**Size**: Used to control the size of the light source. As the size is increased, the overall brightness and intensity of the effect are increased.


#### Texture


The texture group allows for the modification of texture to the rays, allowing for more realistic blending of the rays with the source clip.  



**Amount**: Used to control the amount of texture. Higher vales will result in a more detailed texture.


**Size**: Used to control the size of the texture.


**Phase**: Used to control the random seed of the texture.


#### Shimmer


The shimmer group contains parameters to create randomization in the rays.


**Amount**: Used to control the amount of shimmering. Higher values will produce more dramatic shimmer movement.


**Phase**: Used to control the random seed of the shimmering.


#### Opacity


**Rays**: Used to control the opacity of the rays. Higher values will produce more opaque pixels, whereas lower values will produce more transparent pixels.


#### Alpha


**Rays From Alpha**: The Rays From Alpha option generates the image rays from the alpha channel instead of or in addition to the color channels. The selection in the Rays From Alpha Mode determines how the alpha rays and the color channel rays are combined. 


**Rays Under Source:** Use this function to control how the rays are composited with alpha source clips – a setting of zero composites the rays on top of the source and disregards the source alpha channel, while a setting of 100 composites the rays behind opaque regions in the source but allowing them to extend out into the transparent regions. 


#### Color Correction Group


The Color Correction group provides a range of color correction tools to adjust the overall look of the transition. 


**Hue**: Control the overall hue of the transition.


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


