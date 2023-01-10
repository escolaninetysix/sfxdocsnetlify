{
"date": "2019-06-12",
"title": "BCC Swish Pan",
"category": "BCC Transitions",
"link": "bcc-swish-pan/"
}

 [![swish pan](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/swish-pan.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/swish-pan.jpg)


### Overview


This transition filter enables you to create fast camera-pan style transitions between clips. The filter is fully automated in some NLE host environments, such as Avid or Apple, and also includes full manual override controls. Like all of the other filters that are included in the transition category of effects in BCC 6, the Swish Pan filter includes user controls for the velocity of the pan with on-screen display of the ease-in and ease-out curve.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Animation pop-up**: Offers 2 options for the transition animation.


* *Percent* *Done* – requires the user to set keyframes to determine the transition length
* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter)


**Layer to Reveal pop-up**: Sets the clip to be used as the incoming media for the transition effect.


**Pan Direction pop-up**: 4 way selector that sets the direction of the pan


* *Left* – incoming clip slides in from right to left
* *Top* – incoming clip slides in from bottom to top
* *Right* – incoming clip slides in from left to right Bottom – incoming clip slides in from top to bottom
* *Blur* – Sets the amount of blur that is applied during the transition on the incoming and outgoing clips


**Use Colored Background**: Whether or not the result is composited over a solid background color or whether instead any transparency introduced by the Separation control is allowed to remain in place.


**Background Color**: Controls the color of the solid background when *Use Colored background* is enabled.


**Blur**: Controls the peak amount of blurring at the midpoint of the transition.


**Separation**: Controls the amount by which the two clips (incoming and outgoing) overlap.


 


**Blur Extras Group**


Contains additional controls for fine-tuning the blur effect.


**Blur Delay**: Positive values cause the transition to start and end unblurred, and delay the blur effect until after the transition has started. Negative values cause the blur to start at the beginning of the transition, and delay the pan.


**Blur type pop-up**: contains two blur types


* *Faster* – fast box blur
* *Smoother* – smoother pyramid blur


**Motion Blur**: Amount of blur in the direction of motion of the pan.


**Clip Motion Blur**: Clips the blur to the slider value taken as a percentage. This causes the effect to reach it’s maximum blur value partway through the effect and hold it. (e.g. At the default settings, the maximum blur is 50 units. The effect reaches maximum blur 1/4 of the way through the effect, and holds the max blur until 3/4 of the way through. If clip Motion blur were set to 100, the blur would reach 100 units halfway through.


**Perpendicular Blur**: An optional blur normal to the direction of motion of the pan.


**Blur Apply Mode** **pop-up:** Contains 27 apply modes for compositing the blur effect.


**Blur Apply Mix**: Blends the selected apply mode with the Normal apply mode.


**Blur Mix With Original**: Blends the Blur effect back into the original clip


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Ease In:**Control how quickly or slowly the effect amount increases at the beginning of the transition.


**Ease Out:**  Control how quickly or slowly the effect amount decreases at the end of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


