{
"date": "2019-06-12",
"title": "BCC Water Waves Dissolve",
"category": "BCC Transitions",
"link": "bcc-water-waves-dissolve/"
}

 ### Overview


The Water Waves Dissolve filter creates a rippling water-like distortion that automatically animates as your transition progresses to obscure the underlying dissolve between clips.


[![BCC_WaterWaves_Dissolve](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_WaterWaves_Dissolve.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_WaterWaves_Dissolve.jpg)


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Layer to Reveal**: This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the Incoming or Reveal layer for the transition.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto*: automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter.)
* *Percent Done*: requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


**Number of Waves:**  Use to set the number of waves in the image.  Higher values will produce more heavily distorted results.


 **Amplitude:**  Use to control the height of the waves.  Higher values will produce more heavily distorted results.


**Speed of Waves:** Use to control the speed of the waves as the auto-animate across the image.


**Average Direction:**  Sets the primary direction that the waves will move as they auto-animate.


**Direction Spread:** Use to spread out or fan that the direction that the waves will follow.  Higher values produce more random wave directions and with a setting of 360 degrees the waves move in completely random directions.


**Average Wavelength:**  Use to set the width of the waves.


**Wavelength Spread:**  Use to control how randomized the wavelengths will be between different wave generators.  When set to 0 all the waves have the same width whereas when set to higher values the wavelengths become more randomized leading to a mix of wide and narrow waves.


**Edge Treatment:**  Determines the rendering along the edge of the frame in cases where the wave distortion pulls the filtered image inwards away from the edge.


* *Repeat*: Edge pixels are repeated to fill any negative space.
* *Reflect*:  The image is reflected back to fill any negative space.


**Spotlight:** Use to controls the position of an optional spotlight in the frame.


**Spotlight Color:** Use to set the color of the spotlight.


**Spotlight Intensity:** Use to control the intensity of the spotlight.


**Spotlight Focus:** Pop-up selector with 5 options that are used to determine the lighting style.


* *Hard* Edge: Broad, hard-edged light.
* *Broad*: Broad, soft-edged light.
* *Normal*: Normal, soft-edged light.
* *Narrow*: Narrow, soft-edged light.
* *Laser*: Ultra narrow, soft-edged light.
* *Manual*: style is determined by the value of the Manual Focus parameter.


**Manual Focus:**  Use to manually specify the spotlight focus style. Low values generate a hard-edged light, whereas high values generate a soft light.


 **Spotlight Width:**  Use to control the position of the light above the waves, which determines the effective width of the region that the spotlight will illuminate.


 


**Color Group**


Controls for color enhancements that auto-animate along with the transition – for example boosting (or reducing) the Brightness or Contrast during the peak of the transition to maintain greater contrast, boost intensity, or create stylized variations of the basic dissolve.


**Brightness Peak:** Defines the maximum change to the Brightness at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


**Contrast Peak:** Defines the maximum change to the Contrast at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


 


**Extras Group**


Contains additional advanced controls for further fine tuning the details of the effect.


**Apply Waves To:**Determines how the Waves are applied to the source and reveal layers.


* *Dissolve –* dissolve the two layers first and apply the waves to the output of the dissolve
* *Source Layer –* apply the waves prior to the dissolve, but only to the source layer
* *Reveal Layer*–** apply the waves prior to the dissolve, but only to the reveal layer
* *Source and Reveal*–** apply the waves to both the source and reveal layers separately prior to dissolving between them
* *Off –* disable the waves completely and just show the result of the basic dissolve


 


**Reflections:**  Control the intensity of simulated world-reflection colors which when used in moderation can add more definition to the wave shapes and provide an enhanced sense of realism.


**Top Color:**  Use to set the color for reflections from the top.


**Bottom Color:**  Use to set the color for reflections from the bottom.


**Left Color:**  Use to set the color for reflections from the left.


**Right Color:**  Use to set the color for reflections from the right.


**Random Seed:**  Use to set the random seed for the wave generator when you wish to alter the wave pattern.


**Undistort:**  Blends the filtered result back with the unfiltered result to decrease the intensity of the effect.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Ease In:**Control how quickly or slowly the wave distortion increases at the beginning of the transition.


**Ease Mid:**Control the rate of change of the wave distortion (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


**Ease Out:**  Control how quickly or slowly the wave distortion decreases at the end of the transition.


**Dissolve Duration:** Control the timing of the underlying dissolve relative to the timing of the rest of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


