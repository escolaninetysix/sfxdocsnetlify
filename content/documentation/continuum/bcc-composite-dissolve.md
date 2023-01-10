{
"date": "2019-06-12",
"title": "BCC Composite Dissolve",
"category": "BCC Transitions",
"link": "bcc-composite-dissolve/"
}

 ### Overview


[![BCC_Composite_Dissolve](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_Composite_Dissolve.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_Composite_Dissolve.jpg)


Creates unique variations on standard dissolve transitions by using apply modes and levels/gamma controls to fine tune the look of the dissolve midpoint.  Leveraging the range of looks offered by the apply modes, this transition can generate an enormous number of new looks that still maintain the basic feel of a classic dissolve transition.  It can be used in subtle ways such as employing the Hard Light, Soft Light or Overlay modes to boost color intensity during the dissolve midpoint which avoids the washed out colors that can characterize a classic dissolve.   Modes such as Multiply, Screen, and Add can generate interesting glow-like dissolves and hybrids between classic dissolves and dip to black/white transitions.  BCC Composite Dissolve offers the unique ability to select two different apply modes and control the blend amount between the them for maximum control over the final look.  When subtler results are desired just set the Mix From mode to Normal and use the Apply Mix control to dial in just the desired amount of impact from the main Apply Mode.


**Note that due to the special nature of the algorithms involved, this filter should only be applied to fully opaque clips.  When applied to titles, alpha objects, or as one sided transitions (in some hosts) this filter may not generate a properly animating transition.**


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


**Apply Mode:**  Used to set the main apply / blend mode for the transition.  Use the Apply Mix slider to control the blend amount between this apply mode and the Mix From apply mode.


**Apply Mix:**  Blend the results of the main Apply Mode and the secondary Mix From mode.  When set to 50 you get a a 50-50 mix of the two results.  Higher values favor the look of the main Apply Mode and lower values favor the look of the secondary Mix From mode.


**Mix From:**  Used to set the secondary apply / blend mode that is combined with the main Apply Mode result.   (Remember – this filter allows mixing between two blend modes!)  An easy way to tone down the intensity of the main apply mode is to set this secondary apply mode to Normal and dial the Apply Mix slider back to generate a higher percentage of “normal” dissolve in the final look.


 


**Note*:***The following 5 parameters are used to perform a standard levels/gamma color correction on the output of the apply mode pass.  The intensity of this color correction automatically animates up and down such that the luma changes peak at the midpoint of the transition and fade back to having no effect at the beginning/end of the transition.  This guarantees a smoothly animating transitions yet with the ability to tweak intermediate luma properties.


**Input Black:**  Set the input black level.  Higher values tend to increase contrast and also decrease overall brightness unless paired with matching changes to Input White.


**Input White:**  Set the input white level.  Lower values tend to increase contrast and also increase overall brightness unless paired with matching changes to Input Black.


**Gamma:**  Control the position of the midtone level.


**Output Black:**  Set the output black level.  Higher values tend to decrease contrast and also increase overall brightness unless paired with matching changes to Output White.


**Output White:**  Set the output white level.  Lower values tend to decrease contrast and also decrease overall brightness unless paired with matching changes to Output Black.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Ease In:**Control how quickly or slowly the effect amount increases at the beginning of the transition.


**Ease Out:**  Control how quickly or slowly the effect amount decreases at the end of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


