{
"date": "2019-06-12",
"title": "BCC Damaged TV Dissolve",
"category": "BCC Transitions",
"link": "bcc-damaged-tv-dissolve/"
}

 ### Overview


Damaged TV Dissolve is an effect which simulates a weak or distorted video signal on a CRT television monitor for use as a transitional element between 2 images.


[![BCC_DamagedTV_Dissolve](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_DamagedTV_Dissolve.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_DamagedTV_Dissolve.jpg)


 


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Layer to Reveal** – This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the Incoming or Reveal layer for the transition.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter.)
* *Percent Done* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


 


**Random Seed** – Random seed parameter which varies the phase of the effect.


**Image Roll** – Determines how far (how  many screen heights) the auto animated roll is (a value of Zero disables the auto animated roll) .


**Roll Direction** – Sets the direction for the auto-animated roll.


 


**Damage Group**


**Roll Offset** – Adds some additional roll animation during times when the signal breaks up.


**Edge Distortion Amount** – Determines the amount and direction of edge distortion (how far horizontally the distortion will go) .


**Edge Shapes** – Pop up with options for the shape type of the edge distortion.


**Edge Jaggedness** – Controls the jaggedness along the distorted picture edge.


**Static Amount** – Determines the amount of noise particles simulating TV signal static.


**Static Size** – Adjusts the size of noise particles simulating TV signal static.


**Degraded Color** – Adjusts how much the image desaturates during signal break up.


**Interference** – Controls the opacity of the horizontal picture interference lines.


**Brightness Adjust** – The transition will auto animate to this brightness setting as a peak at the mid point of the transition and then animate back down to the original brightness.


**Contrast Adjust** – The transition will auto animate to this contrast setting as a peak at the mid point of the transition and then animate back down to the original contrast.



**Chromatic Aberration Group**


**CA Intensity** – Sets the Opacity of the Chromatic Aberration.


**CA Shift Amount** – Scales the Chromatic Aberration.


**CA Smoothness** – Determines how many samples are used to create the Chromatic Aberration.


 


**Scan line Control Group**


**Thickness** – Controls the thickness of the horizontal scan lines.


**Spacing** – Sets the distance between each of the scan lines.


**Smoothness** – Sets the edge softness of the scan lines.


**Alpha** – Sets the opacity of the scan lines.


 


**Color Group**


Controls for color enhancements that auto-animate along with the transition – for example boosting (or reducing) the Brightness or Contrast during the peak of the transition to maintain greater contrast, boost intensity, or create stylized variations of the basic dissolve.


**Brightness Peak:** Defines the maximum change to the Brightness at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


**Contrast Peak:** Defines the maximum change to the Contrast at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Damage Ease In:**Control how quickly or slowly the tv damage increases at the beginning of the transition.


**Damage Ease Mid:**Control the rate of change of the tv damage (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


**Damage Ease Out:**  Control how quickly or slowly the tv damage decreases at the end of the transition.


**Dissolve/Roll Duration:**  Control the timing of the underlying dissolve and the auto animated roll relative to the timing of the rest of the transition.


