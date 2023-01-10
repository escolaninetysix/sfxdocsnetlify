{
"date": "2019-06-12",
"title": "BCC+ Camera Shake Dissolve",
"category": "BCC Transitions",
"link": "bcc-plus-camera-shake-dissolve/"
}

 
NEW IN CONTINUUM 2022.5, The BCC+ Camera Shake Dissolve filter automatically animates your transition progresses with simulated camera shake and distortion to obscure the dissolve between clips. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2022/04/Camera-SHake.jpg)
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




**Amplitude**: Used to set the severity of the shake along the diagonal axis with higher values producing a more intense diagonal movement.


**Speed**: Used to control the overall timing of the shake with higher values producing camera shake that appears to be occurring at a faster rate. 


**Scale**: Used to set the amount of shake along the z axis with higher values causing the shot to zoom in and out more than lower values. 


**Rotate**: Used to set the amount of rotation of the camera during the shake, with higher values causing the camera to rotate more than lower values 


**Randomize**: Used to control the random seed for the shake.


**Edge Mode:** In some effects the filter can create instances where the image becomes offset creating areas along the edges of the frame where no image appears. Edge Mode options allow for different methods of handling those pixels. 


* *Transparent:* allows the edge of the result to become transparent.
* *Repeat:* repeats edge pixels to generate opaque pixels along the edge of the result. This is the default setting of the filter.
* *Reflect:* reflects pixels back into the result to generate opaque pixels along the edge of the result.


#### Motion Blur


**Enable**: Turns Motion Blur on or off. The default is off.


**Shutter Angle**: Determines how long the camera shutter stays open when a picture is taken– higher values create more motion blur. The range of the Shutter Angle is 0-720 and defaults to 180. Measured in degrees, it simulates the exposure of a rotating camera shutter. The shutter angle uses the footage frame rate to determine the simulated exposure. For example, a shutter angle of 180 degrees (50% of 360 degrees) for 24fps footage creates an effective exposure of 1/48 of a second. Typing 1 degree applies almost no motion blur, and typing 720 degrees applies a high degree of motion blur.


**Shutter Phase**: Offsets the point in time, either forward or reverse, when the shutter opens. The range of the Shutter Phase is -360 to 360 and defaults to -90.


**Samples**: Renders intermediate frames equal to the Motion Samples value and accumulates them, one over the other, on a single frame. The higher the number, the smoother the motion. The Motion Samples range is from 1-256 and defaults to 16.


***Note***:Normally, motion blur is calculated going forward, so if there is no motion beyond the end of a sequence, there won’t be motion blur on the last frame. To work around this, add an extra frame or two to the end of the work range in the Timebar and move the last transform keyframes to be outside of the session range.


#### Color Correction Group


The Color Correction group provides a range of color correction tools to adjust the overall look of the transition. 


**Hue**: Used to control the overall hue of the transition.


**Saturation:** Used to control the overall saturation of the transition. Higher values create a more intense color saturation than lower values.


**Brightness:** Used to control the overall brightness of the transition.   
Higher values create a more intense highlights than lower values. 


**Contrast:** Used to control the overall contrast of the transition. Higher values create a more intense contrast between light and dark pixels than lower values. 


**Gamma:** Used to control the overall gamma of the transition.


**Temperature:** Used to control the overall temperature of the transition. Moving the Temperature slider to the left (negative values) will yield a cooler result, while moving the slider to the right will warm up the shot.


**Cyan/Magenta:** Used to control the overall amount of cyan/magenta in the image..  Moving the slider to the left (negative values) will add a cyan tint, while moving the slider to the right will add a magenta tint.


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



