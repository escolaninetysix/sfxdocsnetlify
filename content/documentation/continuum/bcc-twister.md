{
"date": "2019-06-12",
"title": "BCC Twister",
"category": "BCC Transitions",
"link": "bcc-twister/"
}

 ### Overview


Transitions between images by simulating a tight twist in the image plane which animates along a chosen axis to progressively reveal the incoming layer on the newly exposed back side


[![BCC_Twister](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_Twister.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_Twister.jpg)


 


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Layer to Reveal**: This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the Incoming or Reveal layer for the transition.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter.)
* *Percent Done* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


**Shading:**  Enables dimensional lighting to enhance the suggestion of 3D depth.


**Center:**  Defines the center point through which the twist axis progresses.


**Axis:**  Sets the angle of the twist axis through the center point.


**Use Colored Background:**  Enables compositing the result over a solid color background in areas left vacant by the twisting foreground.


**Background Color:**  Defines the color of the solid background when Use Colored Background is enabled.


 


**Drop Shadow Group**


Adds depth to the transition with a drop shadow between the upper layer and the background as foreground is modified by the twist pattern.  **This feature is only fully supported when working with opaque clips.**


**Drop Shadow On:**  Enable/Disable the drop shadow feature.


**Color:**  Sets the color of the drop shadow.


**Strength:**  Sets the strength (or effective opacity) of the drop shadow.


**Direction:**  Sets the angle in which the drop shadow is offset from the image.


**Distance:**  Sets how far the drop shadow shifts from the feature casting it.


**Softness:**  Sets how defocused the drop shadow appears to be.  Higher values produce shadows with softer edges.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Ease In:**Control how quickly or slowly the effect amount increases at the beginning of the transition.


**Ease Out:**  Control how quickly or slowly the effect amount decreases at the end of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


