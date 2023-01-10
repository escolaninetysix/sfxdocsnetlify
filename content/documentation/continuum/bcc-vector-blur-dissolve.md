{
"date": "2019-06-12",
"title": "BCC Vector Blur Dissolve",
"category": "BCC Transitions",
"link": "bcc-vector-blur-dissolve/"
}

 ### Overview


The Vector Blur Dissolve filter creates a stylized vector blur that automatically animates as your transition progresses to obscure the dissolve between clips.  A wide variety of looks ranging from wispy blurs to stylized painterly or melted blends can be achieved by varying the blur controls or by browsing through presets.  Images with lots of small detail may benefit from increasing the Map Softness to produce more smoothly varying blur patterns.


[![BCC_Vector_Blur_Dissolve](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_Vector_Blur_Dissolve.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_Vector_Blur_Dissolve.jpg)


 


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


**Vector Type:**  Determines how vectors are derived from the selected vector map.


* *Natural*:  Base the vector field on the gradient in the vector map.  Smoothness and steepness in the vector map affect vector length and thus also Blur Length, not just blur direction.  Produces crystalline or caustic style blur patterns.
* *Constant Length*:  Base the vector field on the gradient in the vector map but maintain a constant blur length across the map.    Produces crystalline, caustic, or fuzzy style blur patterns.
* *Perpendicular*:  Base the vector field on the perpendicular of the gradient direction defined in the vector map. Vectors along contour lines instead of across contour lines which yields a painterly effect, especially when the Map Softness is increased.
* *Direction Center:*  Base the vector field on the gradient in the vector map, but the blur region for a pixel is centered upon that pixel rather than moving away the pixel in one direction.  Blur lengths do not vary.  This tends to produce the look of swirling, wispy brush strokes or even melting images.  Play with the Texture slider for a huge range in looks.
* *Direction* *Fading*:  Same as Direction Center but with more smoothly fading blur patterns yielding softer swirling, wispy brush stroke or melting effects.  Play with the Texture slider for a huge range in looks.
* *Natural with Offset*:  Same as Natural except that Angular Offset parameter can be used to offset the vector angle to produce widely ranging variations on the look.
* *Constant with Offset*:  Same as the Constant Length option except that Angular Offset parameter can be used to offset the vector angle to produce widely ranging variations on the look.


**Angular Offset:**  Specifies on offset to the angle of the blur vectors for some Vector Type selections.


 **Texture:** Increase or Decrease the contrast in the vector map image before it is used by the blur function which provides huge opportunities to vary the look of the blur result.  The Direction Center and Direction Fading blur types off particularly interesting variations based on this Texture control.


**Blur Length:**  Control the length of the blur.  Larger settings can increase render times towards the middle frames of the transition.


**Map Softness:** Softens the vector map image to produce more smoothly varying blur patterns.  Particularly useful in clips containing lots of sharp detail.


**Map Layer:**  Select which image map is used as the basis for the vector gradients, the source map for the blur (which by default contains the pre-dissolved clips) one or the other of the individual transition clips.


**Map Channel:**  Use to set the channel from which the vector gradient map is derived.


**Ignore Edge Pixels:**  When enabled, this edge treatment option extends the blur so that it covers the entire image which avoids introducing transparency along the edges when applied to opaque clips.


 


**Color Group**


Controls for color enhancements that auto-animate along with the transition – for example boosting (or reducing) the Brightness or Contrast during the peak of the transition to maintain greater contrast, boost intensity, or create stylized variations of the basic dissolve.


**Brightness Peak:** Defines the maximum change to the Brightness at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


**Contrast Peak:** Defines the maximum change to the Contrast at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


 


**Extras Group**


Contains additional advanced controls for further fine tuning the details of the effect.


**Apply Blur To:**Determines how the Blur is applied to the source and reveal layers.


* *Dissolve –* dissolve the two layers first and apply the blur to the output of the dissolve
* *Source Layer –* apply the blur prior to the dissolve, but only to the source layer
* *Reveal Layer*–** apply the blur prior to the dissolve, but only to the reveal layer
* *Source and Reveal*–** apply the blur to both the source and reveal layers separately prior to dissolving between them
* *Off –* disable the blur completely and just show the result of the basic dissolve


**Reverse Blur on Reveal:**  Enables reversing the direction of the blur vectors on the Reveal image when the Apply Blur To menu is set such that the Reveal layer is blurred separately.


**Reverse Angle on Reveal:**  Enables reversing the angular offset direction of the blur vectors on the Reveal image when the Apply Blur To menu is set such that the Reveal layer is blurred separately.


**Apply Mode:**  Control the blend mode used to apply the results of the blur back to the image.  Choose the Normal apply mode to see just the straight result of the blur pass.


**Apply Mix:**  Control the intensity of the changes introduced by the Apply Mode setting, with a value of 100 generating the pure apply mode result and lower values reducing the strength of the apply mode towards the normal result.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Blur Ease In:**Control how quickly or slowly the blur amount increases at the beginning of the transition.


**Blur Ease Mid:**Control the rate of change of the blur amount (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


**Blur Ease Out:** Control how quickly or slowly the blur amount decreases at the end of the transition.


**Dissolve Duration:** Control the timing of the underlying dissolve relative to the timing of the rest of the transition.


**View Ease Curve:**(Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


