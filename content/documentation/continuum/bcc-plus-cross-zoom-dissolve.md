{
"date": "2019-06-12",
"title": "BCC+ Cross Zoom Dissolve",
"category": "BCC Transitions",
"link": "bcc-plus-cross-zoom-dissolve/"
}

 
NEW IN CONTINUUM 2022.5, the BCC+ Cross Zoom is an auto-animating transition which uses a zoom in / zoom out motion to create a dynamic look when moving from one image to another.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2022/04/Cross-Zoom-1.jpg)



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




**Master Zoom:**  Used to adjust the overall amount of Zoom. Higher values will result in a more intense zoom during the transition.


**Outgoing Zoom:**  Used to adjust amount of Zoom for the Outgoing shot (shot A, Source Layer). Higher values will result in a more intense zoom during the outgoing clip’s portion of the transition. 


**Incoming Zoom:** Used to adjust amount of Zoom for the Incoming shot (shot B, Reveal Layer). Higher values will result in a more intense zoom during the incoming clip’s portion of the transition. 


**Outgoing Aspect:** Used to make adjustments so the Outgoing shot stretches horizontally or vertically as it Zooms.


**Incoming Aspect:** Used to make adjustments so the Incoming shot stretches horizontally or vertically as it Zooms.


**Zoom Overlap:**  At a value of 100 the Incoming and Outgoing Zoom occur simultaneously and at a value of zero the Zooms occur consecutively – with in between values offering a full range of Overlap timing choices.


**Lock Centers to Outgoing:**  Enabling this forces the center point for the incoming zoom to follow the value of the center point for the outgoing zoom so the zoom centers will automatically be the same.


**Outgoing Zoom Center:** Used to adjust X/Y coordinate for the center point of the outgoing zoom. If Lock Centers is enabled, the X/Y coordinate selected here will be used for the incoming clip as well.


**Incoming Zoom Center:** Used to adjust X/Y coordinate for the center point of the incoming zoom. If Lock Centers is enabled, the X/Y coordinate selected here will be ingnored in favor of the Outgoing Zoom Center value. 


**Edge Mode:** In some effects the filter can create instances where the image becomes offset creating areas along the edges of the frame where no image appears. Edge Mode options allow for different methods of handling those pixels. 


* *Transparent:* allows the edge of the result to become transparent.
* *Repeat:* repeats edge pixels to generate opaque pixels along the edge of the result. This is the default setting of the filter.
* *Reflect:* reflects pixels back into the result to generate opaque pixels along the edge of the result.


**Motion Blur Group**


Controls the details of the motion blur appearance when the image is animating quickly.


**Enable Motion Blur:**  Checkbox for enabling/disabling Motion Blur.


**Shutter Angle:**   Simulates how long the shutter would be open in a film camera (and therefore how much motion blur smear appears within a frame).


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



