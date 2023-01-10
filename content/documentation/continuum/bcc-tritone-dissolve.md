{
"date": "2019-06-12",
"title": "BCC Tritone Dissolve",
"category": "BCC Transitions",
"link": "bcc-tritone-dissolve/"
}

 ### Overview


The Tritone Dissolve filter creates a tint/tritone effect with optional levels/gamma adjustments that automatically animates up and down in intensity while the underlying dissolve progresses to complete the transition.


[![BCC_Tritone_Dissolve](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_Tritone_Dissolve.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_Tritone_Dissolve.jpg)


 


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


**Color Options:**  Select which combination of color effects is applied during the transition.


* *Tritone And Levels* – Apply both the Tritone and Levels/Gamma pass.
* *Tritone Only* – Apply only the Tritone pass.
* *Levels Only* – Apply only the Levels/Gamma pass.
* *Dissolve Only* – Skip both the Tritone and Levels/Gamma passes and just render the underlying dissolve.


**Intensity:**  Control the overall intensity of the color changes caused by the Tritone, Levels/Gamma, and Apply Mode settings.


**Highlights:**  Set the tint color for the highlights in the Tritone pass.


**Midtones:**  Set the tint color for the midtones in the Tritone pass.


**Shadows:**  Set the tint color for the shadows in the Tritone pass.


**Use Midtones Color:**  Control whether the tinting uses a 3-color tritone process with separate tint colors for Highlight, Midtone, and Shad0w, or if it instead uses a 2-color duotone process with just Hightlight and Shadow tint colors.


 


**Color Group**


Controls for color enhancements that auto-animate along with the transition – for example boosting (or reducing) the Brightness or Contrast during the peak of the transition to maintain greater contrast, boost intensity, or create stylized variations of the basic dissolve.


**Brightness Peak:** Defines the maximum change to the Brightness at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


**Contrast Peak:** Defines the maximum change to the Contrast at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


 


**Extras Group**


Contains additional advanced controls for further fine tuning the details of the effect.


**Apply Tint To:**Determines how the tritone and levels/gamma passes are applied to the source and reveal layers.


* *Dissolve –* dissolve the two layers first and apply the color effects to the output of the dissolve
* *Source Layer –* apply the color effects prior to the dissolve, but only to the source layer
* *Reveal Layer*–** apply the color effects prior to the dissolve, but only to the reveal layer
* *Source and Reveal*–** apply the color effects to both the source and reveal layers separately prior to dissolving between them
* *Off –* disable the color effects completely and just show the result of the basic dissolve


**Input Black:**  Set the input black value for the levels/gamma pass.


**Input White:**  Set the input white value for the levels/gamma pass.


**Gamma:**  Set the midpoint level for levels/gamma pass.


**Reverse Colors:**  Swap the Highlight and Shadow color selections.


**Apply Mode:**  Control the blend mode used to apply the results of the tritone and levels/gamma passes back to the image.  Choose the Normal apply mode to see just the straight result of the tritone and levels/gamma passes.


**Apply Mix:**  Control the intensity of the changes introduced by the Apply Mode settings, with a value of 100 generating the pure apply mode result and lower values reducing the strength of the apply mode.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Ease In:**Control how quickly or slowly the color effects (tritone and levels/gamma) increase at the beginning of the transition.


**Ease Mid:**Control the rate of change of the color effects (tritone and levels/gamma) during the middle of the transition – i.e.  how quickly it reaches its peak amount and how long it holds there.


**Ease Out:**  Control how quickly or slowly the color effects (tritone and levels/gamma) decrease at the end of the transition.


**Dissolve Duration:** Control the timing of the underlying dissolve relative to the timing of the rest of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


