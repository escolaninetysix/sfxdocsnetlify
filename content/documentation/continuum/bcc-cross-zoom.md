{
"date": "2019-06-12",
"title": "BCC Cross Zoom",
"category": "BCC Transitions",
"link": "bcc-cross-zoom/"
}

 ### [![BCC Cross Zoom](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Cross-Zoom.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Cross-Zoom.jpg)


### *New in BCC10*


### Overview


BCC Cross Zoom is an auto-animating transition which uses a zoom in / zoom out motion to create a dynamic look when moving from one image to another.


**Usage Notes:**


* In an auto-animating transition such as Cross Zoom, many parameters allow you to set the value used at the mid-point of the transition, while the values that are interpolated from and interpolated to (at the start and end of the transition) are predetermined to match the unaffected source image. This insures a smooth beginning and end of the transition. For these parameters it is a good idea to adjust them while previewing a frame from the mid point or somewhere near the middle of the transition, and the standard way of using them would require not animating them with keyframes since they are already auto-animating. In the parameter list below, parameter names shaded green are such auto-animating parameters.


### 


**Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Layer to Reveal**: This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Percent Done* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


 


*In the parameter list below, parameter names shaded green are auto-animating parameters. See the Usage Notes above for more details.*


**Master Zoom:**  Adjusts the overall amount of Zoom.


**Outgoing Zoom:**   Adjusts amount of Zoom for the Outgoing shot (shot A, Source Layer).


**Incoming Zoom:**   Adjusts amount of Zoom for the Incoming shot (shot B, Reveal Layer).


**Outgoing Aspect:**   Can be used so the Outgoing shot stretches horizontally or vertically as it Zooms.


**Incoming Aspect:**   Can be used so the Incoming shot stretches horizontally or vertically as it Zooms.


**Zoom Overlap:**   At a value of 100 the Incoming and Outgoing Zoom occur simultaneously and at a value of zero the Zooms occur consecutively – with in between values offering a full range of Overlap timing choices.


**Lock Centers to Outgoing:**   Enabling this forces the center point for the incoming zoom to follow the value of the center point for the outgoing zoom so the zoom centers will automatically be the same.


**Outgoing Zoom Center:**   X/Y coordinate for the center point of the outgoing zoom.


**Incoming Zoom Center:**   X/Y coordinate for the center point of the incoming zoom.


 


**Motion Blur Group**


Controls the details of the motion blur appearance when the image is animating quickly.


**Motion Blur:**  Checkbox for enabling/disabling Motion Blur.


**Smoothness:**   Determines the quality of the motion blur. Smoother options use more samples and will perform noticeably slower than rougher options.


**Shutter Angle:**   Simulates how long the shutter would be open in a film camera (and therefore how much motion blur smear appears within a frame).


**Adaptive Motion Blur:**   An optimization that uses fewer samples when the source moves slowly.


 


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid), you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Lock Ease to Outgoing:***Controls whether the incoming and outgoing zooms will use the same ease in/out settings or whether they can instead be independently controlled*.


**Outgoing Ease In:**Controls how quickly the zoom ramps up on the outgoing image at the beginning of the transition.


**Outgoing Ease Out:**Controls how quickly the zoom approaches its maximum amount on the outgoing image at the end of the transition..


**Incoming Ease In:**Controls how quickly the zoom ramps down on the  on the incoming image at the beginning of the transition.


**Incoming  Ease Out:**Controls how quickly the zoom returns to its original value on the incoming image at the end of the transition..


**Dissolve Duration:**  Controls the timing of the underlying dissolve relative to the timing of the rest of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.) Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


