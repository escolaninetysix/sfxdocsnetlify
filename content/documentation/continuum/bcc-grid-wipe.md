{
"date": "2019-06-12",
"title": "BCC Grid Wipe",
"category": "BCC Transitions",
"link": "bcc-grid-wipe/"
}

 ### Overview


The BCC Grid Wipe transition uses a cross hatched pattern which expands from a center point to progressively wipe the image off screen.


[![BCC_Grid_Wipe](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_Grid_Wipe.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_Grid_Wipe.jpg)


**Workflow Note – Alpha Clips and/or One-Sided Transitions:** Due to this transition’s support for built-in drop shadows, you may need to take special steps to ensure the transition works properly when applied to clips that have transparency. Note that when applying the effect as a one-sided NLE-style transition (i.e. to the head or tail of a clip) the “empty” incoming or outgoing region is effectively treated as a fully transparent slug when in Adobe Premiere or Sony Vegas, and thus the same guidelines below for using this transition with alpha clips are relevant for those one-sided transitions as well. Note that in Avid hosts there is no alpha channel at all when applying as true NLE-style transitions so these special workflow considerations for alpha clips are not relevant in that context, although you can choose to apply these plugins as “effects” instead of true single-track “transitions” in Avid and in that case these tips would still pertain.


The approach you take depends on the details of which clip(s) contain transparency.


* Both clips contain transparency: If both clips contain some transparency you must manually disable the Opaque Sources checkbox (which also turns off the Drop Shadow feature) to guarantee that the transition will generate correct, alpha-aware results on every frame. If you do not disable the Opaque Sources checkbox you may see sudden jumps at the beginning or end of the transition instead of a smoothly progressing effect.
* Outgoing clip contains transparency or one-sided front-end transition: If the outgoing clip contains any transparency (or if you are applied as a one-sided front end transition in Premiere or Vegas) then you MUST turn off the Opaque Sources checkbox to ensure a proper transition.
* Incoming clip contains transparency or one-sided back-end transition: As long as the outgoing clip is fully opaque you can leave the Opaque Sources checkbox enabled and continue to make use of the Drop Shadow feature. This is true even if the incoming clip has transparency or if the filter is applied as a one-sided back-end transition.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Layer to Reveal:**  This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the Incoming or Reveal layer for the transition.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter.)
* *Percent Done* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


**Center:**  Sets the center point for the transition and hub of any specified rotation.


**Rotation:**  Sets the amount of rotation applied to the cross hatch pattern.


**Border:**  Controls the width of the border region between the inside and outside of the shape and thus effectively the type of tapering that appears in the cross hatch elements as they reach progress towards the edges.  Higher values produce wider borders between the inside and outside of the shape leading to more slowly tapering cross hatch elements.  Lower values produce narrower borders with more rapid tapering.


**Tiles:**  Set the total number of tiles in the grid with higher values producing a denser cross hatch pattern.


**Transition Type:**   Sets the shape of the overall pattern boundary as it grows from the center point.


* *Doors* –  splits the source image into two parts.
* *Radial* – wipes in a circular shape.
* *Rectangular* – wipes in a rectangular shape.


**Invert Wipe:**  Reverses the direction of the wipe so that it expands from the outside towards the center point instead of from the center point outwards.


**Opaque Sources:**  When enabled, this tells the transition that it is applied to opaque images and thus for example that it is OK to apply the Drop Shadow (which is only supported when working with opaque clips).  If working with titles or other clips containing alpha objects you must disable this checkbox to ensure proper transition behavior.


 


**Drop Shadow Group**


Adds depth to the transition with a drop shadow between the upper and lower layers as the opacity of the upper layer is modified by the wipe pattern.  This feature is only supported when working with opaque clips.


**Drop Shadow On:**  Enable/Disable the drop shadow feature.


**Color:**  Sets the color of the drop shadow.


**Strength:**  Sets the strength (or effective opacity) of the drop shadow.


**Direction:**  Sets the angle in which the drop shadow is offset from the image.


**Distance:**  Sets how far the drop shadow shifts from the feature casting it.


**Softness:**  Sets how defocused the drop shadow appears to be.  Higher values produce shadows with softer edges.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Ease In:**Control how quickly or slowly the effect amount increases at the beginning of the transition.


**Ease Out:**  Control how quickly or slowly the effect amount decreases at the end of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


