{
"date": "2019-06-12",
"title": "BCC Lens Transition",
"category": "BCC Obsolete",
"link": "bcc-lens-transition/"
}

 [![lens transition 1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lens-transition-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lens-transition-1.jpg)


[![lens transition 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lens-transition-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lens-transition-2.jpg)


### *Deprecated in favor of [BCC Lens Blur Dissolve](/documentation/continuum/bcc-lens-blur-dissolve)*


*We recommend use of [BCC Lens Blur Dissolve](/documentation/continuum/bcc-lens-blur-dissolve) instead of BCC Lens Transition in BCC10 and higher.  The newer [BCC Lens Blur Dissolve](/documentation/continuum/bcc-lens-blur-dissolve) is fully GPU accelerated using OpenCL and provides a superior feature set with much faster rendering.*


### Overview


The BCC Lens Transition dissolve/wipe filter applies a lens blur defocus/rack-focus style effect to the specular highlights of the outgoing and incoming image clips (the highlights take on the shape of a simulated lens diaphragm.) This filter includes a pop-up that can be used to match the different looks that can be achieved in the physical world based on the lens aperture setting. This pleasing optical result is referred to in photographic terms as Bokeh.  Like all of the other filters that are included in the Transitions category, the Lens Transition filter includes user controls for the velocity of the transition with an optional on-screen display of the ease-in and ease-out velocity curve.


 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Transition Type pop-up**: Used to select the transition style.


**Dissolve**: Generates a cross-dissolve transition


**Zoom In**: Incoming clip is zoomed in from zero to 100 percent


**Zoom Out**: Outgoing clip is zoomed out from 100 to zero percent


**Pan**: Outgoing clip is panned over to reveal incoming clip. The direction of the pan is set in Pan Direction pop-up


**Linear Wipe**: The outgoing clip is wiped to reveal the incoming clip. The direction of the wipe is set in Wipe Direction pop-up


**Radial Wipe In**: The incoming clip is wiped on from zero to 100 percent with a radial mask.


**Radial Wipe Out**: The outgoing clip is wiped off from zero to 100 percent with a radial mask


**Pan Wipe Direction pop-up**: Used to set the direction of the Pan or Wipe effect Left-Mask wipes from right to left.


* *Top* – Mask wipes from bottom to top
* *Right* – Mask wipes from left to right
* *Bottom* – Mask wipes from top to bottom


**Dissolve Apply Mode pop-up**: Used to set the apply mode for the wipe. There are 27 different apply modes in this list.


**Dissolve Apply Mix**: Used to blend between the selected apply mode and the normal apply mode.


**Incoming Layer pop-up**: Used to select the incoming layer. The list displays all layers that are in the timeline of the current composition.


**Apply Effect To pop-up**: Used to select the layer(s) to which the Lens effect is applied.


* *Transition* – The effect is applied to the transition between the outgoing and incoming clips.
* Source – The effect is applied to the outgoing clip only.
* *Reveal* – The effect is applied to the incoming clip only.
* *Source and Reveal* – The effect is applied to the incoming and the outgoing
* *Off* – The effect is disabled.


**Animation pop-up**: Offers 2 options for the transition animation.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter.)
* *Percent Done* – requires the user to set keyframes to determine the transition length.


**Percent Done**: Animate this parameter to set the state of the wipe.


**Quality pop-up**: 3 way pop-up is used to set the quality of the edges of the generated highlights.


* *Normal* – This is the standard, fast mode.
* *Sharp* – This mode generates a sharper result but takes longer to render than the Normal mode.
* *Sharper –* This mode generates the sharpest edges but is the slowest to render.


**Iris Scale**: Used to set the size of the highlight blur effect.


**Scale X**: Scales the highlight along the X axis only.


**Scale Y**: Scales the highlight along the Y axis only.


**Gamma**: Used to control the image highlight gamma.


 


**Iris Group**


Contains parameters to control the shape and look of the generated highlights.


**V****iew Iris checkbox**: When checked, displays the iris shape on a black background.


**Iris Shape pop-up**: Used to set the overall shape of the highlight.


* *Circle –* Generates circular highlights
* *3-­16 Sides* – Generates non-circular highlights with 3-16 sides Iris


***Curvature:***  Similar to a pinch / bloat filter. Used to curve or smooth non-circular iris shapes


**Iris Rotation**: Used to set the rotation of the iris


**Bokeh**: Determines the overall look or bokeh of the Iris Shape – negative values erode the center of the shape, positive values erode the outside of the shape


**Bokeh** **Shading**: Used to set the softness of the bokeh – negative values produce a soft result, positive values produce a sharp result


 


**Highlights** **Group**


Contains parameters to control the highlights that are generated by the filter.


**Boost/Sup Mode pop-up**: Used to determine the way the highlights are composited into the image.


* *RGB Max* – Boosts the RGB values of the highlights.
* *RGB Glow* – Boosts the RGB and Saturation values of the highlights.
* *Luma Boost to White* – Boosts the Luminosity values and desaturates the highlights.
* *Luma* – Boosts the Luminosity values of the highlights.


**Highlight Boost**: Used to set the intensity of the highlight boosting – higher values result in brighter highlights.


**Highlight Threshold**: Used to set the cut-off point for highlight boosting.


**Suppress Threshold**: Used to set the intensity of the shadow boosting – higher values result in darker shadows.


**Boost Soften**: A slope control that softens the highlight and shadow boosting effect.


 


**Color Group**


Controls for color enhancements that auto-animate along with the transition – for example, boosting (or reducing) the Brightness or Contrast during the peak of the transition to maintain greater contrast, boost intensity, or create stylized variations of the basic dissolve.


**Brightness Peak:** Defines the maximum change to the Brightness at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


**Contrast Peak:** Defines the maximum change to the Contrast at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


 


**Extras Group**


These controls can be used to fine tune the way the blur interacts with the dissolve.


**Apply Blur To:**Determines how the blur is applied to the source and reveal layers.


* *Dissolve –* dissolve the two layers first and apply the blur to the output of the dissolve
* *Source Layer –* apply the blur prior to the dissolve, but only to the source layer
* *Reveal Layer*–** apply the blur prior to the dissolve, but only to the reveal layer
* *Source and Reveal*–** apply the blur to both the source and reveal layers separately prior to dissolving between them
* *Off –* disable the blur completely and just show the result of the basic dissolve


**A Iris Scale:** Scale the blur amount  for just the Source Layer.


**B Iris Scale:**Scale the blur amount for just the Reveal Layer.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Ease In:**Control how quickly or slowly the effect amount increases at the beginning of the transition.


**Ease Out:**  Control how quickly or slowly the effect amount decreases at the end of the transition.


**Effect Delay:**  Control the timing of the underlying dissolve relative to the timing of the rest of the transition.  Negative values (recommended) cause the blur effect to begin prior to the underlying dissolve, whereas positive values cause the dissolve to begin prior to the blurring.


**View Ease Curve:**  (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window.


