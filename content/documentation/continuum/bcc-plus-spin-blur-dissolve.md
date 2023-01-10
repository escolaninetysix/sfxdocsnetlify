{
"date": "2019-06-12",
"title": "BCC+ Spin Blur Dissolve",
"category": "BCC Transitions",
"link": "bcc-plus-spin-blur-dissolve/"
}

 
NEW IN CONTINUUM 2022.5, the BCC+ Spin Blur Dissolve filter simulates a prismatic blur that distorts the source footage with a clockwise or counterclockwise blur. The effect automatically animates in intensity as your transition progresses to obscure the underlying dissolve between clips. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/03/Spin-Blr_Draft.jpg)
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


* *Auto:* automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Manual:*– requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Layer to Reveal** – This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


#### Spin Blur Parameters


**Center Point Animation:** Contains different options for how the spin moves across the animation.


* *Center*: Begins and Ends the spin blr at a single fixed point. When selected the spin blr will not animat it’s position during the transition.
* *Start -> End:*Animates the spin blr from the defined **Center Start** point to the defined **Center****End.**


**Center**: Sets the static XY position of the spin blr when Center Point Animation is set to Center.


**Center Start:**Used to control the point of origin for the spin blr along the XY Axis. When animated, this is where the spin blr transition will begin.


**Center End:** Used to control the end point for the spin blr along the XY Axis. When animated, this is where the spin blr transition will end.


**Center Ease:** used to control the smoothness of motion as the spin blr travels from the Center Start to Center End.


**Angle Delta:** Sets the overall change in clockwise angle for the image spin.


**Zoom Delta:**Sets the overall change in depth between the start and end points. 


**Blur Amount:** Sets the amount of motion blur during the transition. Higher values will result in smoother motion blur.


**Reverse Blur Direction:** Toggles *between* clockwise and counterclockwise bluring.


**Bi-Directional Blur**: Enables simultaneous clockwise and counterclockwise bluring.


**Reverse Zoom Spiral**: Toggles between clockwise and counterclockwise zoom spiraling. 


**Prism Weight**: Sets the amount of the prism split.


**Prism Colors:** allows you to set the color of the indvidual color waves.


* *Short Color*: Sets the color of the short color waves. The default is blue.
* *Mid Color*: Sets the color of the medium color waves. The default is green.
* *Long Color*: Sets the color of the long color waves. The default is red.


**Edge Mode:** In some effects the filter can create instances where the image becomes offset creating areas along the edges of the frame where no image appears. Edge Mode options allow for different methods of handling those pixels. 


* *Transparent:* allows the edge of the result to become transparent.
* *Repeat:* repeats edge pixels to generate opaque pixels along the edge of the result. This is the default setting of the filter.
* *Reflect:* reflects pixels back into the result to generate opaque pixels along the edge of the result.


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



 