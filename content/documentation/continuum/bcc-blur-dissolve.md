{
"date": "2019-06-12",
"title": "BCC Blur Dissolve",
"category": "BCC Transitions",
"link": "bcc-blur-dissolve/"
}

 ### Overview


The Blur Dissolve filter creates a blur animation that automatically animates as your transition progresses to obscure the dissolve between clips.


[![BCC_Blur_Dissolve](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/01/BCC_Blur_Dissolve.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/01/BCC_Blur_Dissolve.jpg)


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Layer to Reveal**: This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto*: automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter.)
* *Percent Done*: requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


**Master Blur:** Controls the amount of blur on both the horizontal and vertical scale, increasing them proportionally to each other.  Enlarging this value raises the amount of blur that is applied to the image.


**Horizontal Blur Scale:**Controls the amount of blur on the horizontal scale.  Increasing these values increases the amount of blur that is applied to the image.


**Vertical Blur Scale:**Controls the amount of blur on the vertical scale.  Increasing these values increases the amount of blur that is applied to the image.


 


**Color Group**


Controls for color enhancements that auto-animate along with the transition – for example, boosting (or reducing) the Brightness or Contrast during the peak of the transition to maintain greater contrast, boost intensity, or create stylized variations of the basic dissolve.


**Brightness Peak:** Defines the maximum change to the Brightness at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


**Contrast Peak:** Defines the maximum change to the Contrast at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


 


**Extras Group**


Contains additional advanced controls for further fine tuning the details of the effect.


**Apply Blur To:**Determines how the Blur is applied to the source and reveal layers.


* *Dissolve:* dissolve the two layers first and apply the blur to the output of the dissolve
* *Source Layer:* apply the blur prior to the dissolve, but only to the source layer
* *Reveal Layer*:** apply the blur prior to the dissolve, but only to the reveal layer
* *Source and Reveal*:** apply the blur to both the source and reveal layers separately prior to dissolving between them
* *Off:* disable the blur completely and just show the result of the basic dissolve


**A Master Blur:**Scale the master blur applied to the Source Layer.


**B Master Blur:**Scale the master blur applied to the Reveal Layer.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Blur Ease In:**Control how quickly or slowly the blur amount increases at the beginning of the transition.


**Blur Ease Mid:**Control the rate of change of the blur amount (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


**Blur Ease Out:**  Control how quickly or slowly the blur amount decreases at the end of the transition.


**Dissolve Duration:**  Control the timing of the underlying dissolve relative to the timing of the rest of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


