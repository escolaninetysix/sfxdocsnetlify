{
"date": "2019-06-12",
"title": "BCC+ Prism Dissolve",
"category": "BCC Transitions",
"link": "bcc-plus-prism-dissolve/"
}

 
NEW IN CONTINUUM 2022.5, the BCC+ Prism Dissolve filter generates prismatic color aberrations in the filtered source that automatically animates in intensity as the transition progresses to obscure the dissolve between clips. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2022/04/PD.jpg)
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


**Depth Delta:**  Used to set the overall change in depth between the start and end points. Higher values will result in a more intense prism distortion. 


**Angle Delta:** Used to set the overall change in clockwise angle for the image spin. Higher values will result in a more significant clockwise blur, while lower values will produce a more subtle effect.


**Smooth Mode**: Used to select the method of smoothing used in the effect. 


* *Automatic*: Lets the filter set the level of smoothness in the image samples.
* *Manual*: Manually sets the level of smoothness in the image samples. Higher vales will result in smoother image samples.


**Smoothness**: Used to set the level of smoothness in the image samples when in manual mode. Higher vales will result in smoother image samples. 


**Prism Weight**: Used to set the smoothness of the prism with lower values generating a more visible stepped offset and higher values yielding a smooth continuous prism.


#### **The Colors Group**


**Short Color:** use to set the first color in the prism


**Mid Color:** use to set the second color in the prism


**Long Color***:* use to set the third color in the prism


#### **The Transformation Group**


**Lock Center Start/End:** when checked the the center start and center end parameters will be bound to each other.


**Center Start**: Sets the center point of the start of the blur


**Center End:** Sets the center point of the end of the blur


**Falloff :** Controls the bias of the blur falloff between the start and end for both position and angle


**Edge Mode:** In some effects the filter can create instances where the image becomes offset creating areas along the edges of the frame where no image appears. Edge Mode options allow for different methods of handling those pixels. 


* *Transparent:* allows the edge of the result to become transparent.
* *Repeat:* repeats edge pixels to generate opaque pixels along the edge of the result.
* *Reflect:* reflects pixels back into the result to generate opaque pixels along the edge of the result.


**Apply Prism to**: Selects which part of the transition the prism effect will be applied to.


* *Dissolve*: Applies the prism effect to the dissolve.
* *Outgoing*: Applies the prism effect to the outgoing clip.
* *Incoming*: Applies the prism effect to the incoming clip.
* *Incoming and Outgoing*: applies prism to the incoming and outgoing clips.
* *Off*: Turns off prism effect.


**Reverse Depth on Reveal**: Used to invert the depth delta for the incoming clip.


**Reverse Angle on Reveal**: Used to invert the angle delta for the incoming clip.


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



