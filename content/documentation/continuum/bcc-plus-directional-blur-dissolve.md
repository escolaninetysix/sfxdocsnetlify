{
"date": "2019-06-12",
"title": "BCC+ Directional Blur Dissolve",
"category": "BCC Transitions",
"link": "bcc-plus-directional-blur-dissolve/"
}

 
NEW IN CONTINUUM 2022.5, the BCC+ Directional Blur Dissolve filter allows for the directional bluring of an image that automatically animates as your transition progresses to obscure the dissolve between clips. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2022/04/Directional-Blr-1.jpg)
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




**Direction**: Used to set the angle of the blur.


**Blur Quality**: Selects the style of the blur and the overall quality of the effect


* *Box*: the fastest option but with the least smooth result.
* *Pyramid*: offers the performance boost of a box but with some of the smoothness that approaches a gaussian.
* *Pyramid Smoother*: an extra smoothing pass over a standard Pyramid and closer to the look of a gaussian.
* *Gaussian*: the smoothest result but not quite as fast as the other options.


**Blur:** Used to control the intensity of the blur amount. Higher values results in a more intense blur during the transition.


**Blur X:** Used to adjust the blur amount along the horizontal (X) axis. Higher values results in a more intense horizontal stretching of the blur during the transition.


**Blur Y:**Used to adjust the blur amount along the vertical (Y) axis. Higher values results in a more intense vertical stretching of the blur during the transition.


**Blur Red:** Used to adjust the blur amount in the red color channel. Higher values results in a more intense bluring of the red color channel during the transition.


**Blur Green:** Used to adjust the blur amount in the green color channel. Higher values results in a more intense bluring of the green color channel during the transition.


**Blur Blue:**Used to adjust the blur amount in the blue color channel. Higher values results in a more intense bluring of the blue color channel during the transition.


**Blur Alpha:** Used to adjust the blur amount in the alpha channel. Higher values results in a more intense bluring of the alpha channel during the transition.


**Edge Mode:** In some effects the filter can create instances where the image becomes offset creating areas along the edges of the frame where no image appears. Edge Mode options allow for different methods of handling those pixels. 


* *Transparent:* allows the edge of the result to become transparent.
* *Repeat:* repeats edge pixels to generate opaque pixels along the edge of the result.
* *Reflect:* reflects pixels back into the result to generate opaque pixels along the edge of the result.


**Premutiply**: premultiplies the effect for better resultes with alpha images. 


#### **Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Glow Ease In:**Control how quickly or slowly the glow amount increases at the beginning of the transition.


**Glow Ease Mid:**Control the rate of change of the glow amount (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


**Glow Ease Out:**  Control how quickly or slowly the glow amount decreases at the end of the transition.


**Dissolve Duration:**  Control the timing of the underlying dissolve relative to the timing of the rest of the transition.


**OSC Enable:** Only visible in hosts that support heads up display widgets for manipulating these controls directly on screen. Enables/Disables on screen controls.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


