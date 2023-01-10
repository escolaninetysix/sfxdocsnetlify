{
"date": "2019-06-12",
"title": "BCC Tile Wipe",
"category": "BCC Transitions",
"link": "bcc-tile-wipe/"
}

 ### Overview


BCC Tile Wipe creates a transition between two layers by dividing the footage into tiles and animating the scale and rotation of the individual tiles.


[![BCC_Tile_Wipe](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_Tile_Wipe.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/04/BCC_Tile_Wipe.jpg)


###  Function


**Workflow Note – Alpha Clips and/or One-Sided Transitions:** Due to this transition’s support for built-in drop shadows, you may need to take special steps to ensure the transition works properly when applied to clips that have transparency. Note that when applying the effect as a one-sided NLE-style transition (i.e. to the head or tail of a clip) the “empty” incoming or outgoing region is effectively treated as a fully transparent slug when in Adobe Premiere or Sony Vegas, and thus the same guidelines below for using this transition with alpha clips are relevant for those one-sided transitions as well.  Note that in Avid hosts there is no alpha channel at all when applying as true NLE-style transitions so these special workflow considerations for alpha clips are not relevant in that context, although you can choose to apply these plugins as “effects” instead of true single-track “transitions” in Avid and in that case these tips would still pertain.


The approach you take depends on the details of which clip(s) contain transparency.


* Both clips contain transparency: If both clips contain some transparency you must manually disable the Opaque Sources checkbox (which also turns off the Drop Shadow feature) to guarantee that the transition will generate correct, alpha-aware results on every frame. If you do not disable the Opaque Sources checkbox you may see sudden jumps at the beginning or end of the transition instead of a smoothly progressing effect.
* Outgoing clip contains transparency or one-sided front-end transition: If the outgoing clip contains transparency (or if you are applied as a one-sided front end transition in Premiere or Vegas) then you can leave the Opaque Sources checkbox enabled and continue to make use of the Drop Shadow feature as long as the Reverse Transition checkbox is set to ON (which  it is by default).  If the Reverse Transition checkbox is disabled then the Opaque Sources checkbox must be disabled in order to produce a valid transition, but this particular transition will produce more realistic results if Reverse Transition remains enabled when the Outgoing clip has transparency.
* Incoming clip contains transparency or one-sided back-end transition: As long as the outgoing clip is fully opaque you can leave the Opaque Sources checkbox enabled and continue to make use of the Drop Shadow feature but you must manually disable the Reverse Transition checkbox (the opposite of the previous case above).


 


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Layer to Reveal:**  This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the Incoming or Reveal layer for the transition.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter.)
* *Percent Done* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


**Reverse Transition:**   Reverses the direction and layer to which the transition is applied – i.e. toggles between breaking the outgoing clip into tiles which progressively shrink to reveal the underlying layer and breaking the incoming clip into tiles which progressively expand to cover the underlying layer.


**Lock Scale:**  When Lock Scale is enabled the Horizontal and Vertical Scales are locked internally and both dimensions use the value set by the Horizontal Scale slider.  Disable Lock Scale and adjust the horizontal and vertical scale factors independently to create tiles that become progressively more rectangular as they animate.


**Horizontal Scale:**  Controls the rate at which the horizontal scale changes during the transition on top of the standard scaling involved in shrinking/expanding to complete the basic transition.  Setting to high enough values will cause the tiles to appear to grow before eventually shrinking, while setting to lower values will cause the tile to shrink more quickly.  Negative values can introduce a flip part way through the transition.


**Vertical Scale:**  Controls the rate at which the vertical scale changes during the transition on top of the standard scaling involved in shrinking/expanding to complete the basic transition.  Setting to high enough values will cause the tiles to appear to grow before eventually shrinking, while setting to lower values will cause the tile to shrink more quickly.  Negative values can introduce a flip part way through the transition.


**Tile Size:**  Specify the relative size of the tiles which in turn controls the number of tiles into which the image is divided.  Higher values will produce a smaller number of larger tiles.


**Rotation:**  Sets the total amount of rotation the tiles go through over the course of the transition.


**Cut Tiles:**  When enabled this restricts each tile to the image portion originally inhabiting that tile, whereas when disabled additional image data is used to fill more of the original square tile region as the tile shrinks/expands.  When disabled this produces a more stylized, kaleidoscopic look.


**Opaque Sources:**  When enabled, this tells the transition that it is applied to opaque images and thus for example that it is OK to apply the Drop Shadow (which is only supported when working with opaque clips).  If working with titles or other clips containing alpha objects you must disable this checkbox to ensure proper transition behavior.


 


**Drop Shadow Group**


Adds depth to the transition with a drop shadow between the upper and lower layers as the opacity of the upper layer is modified by the wipe pattern.  This feature is only supported when working with opaque clips.


**Drop Shadow On:**  Enable/Disable the drop shadow feature.


**Color:**  Sets the color of the drop shadow.


**Strength:**  Sets the strength (or effective opacity) of the drop shadow.


**Direction:**  Sets the angle in which the drop shadow is offset from the image.


**Distance:**  Sets how far the drop shadow shifts from the feature casting it.


**Softness:**  Sets how defocused the drop shadow appears to be.  Higher values produce shadows with softer edges.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Ease In:**Control how quickly or slowly the effect amount increases at the beginning of the transition.


**Ease Out:**  Control how quickly or slowly the effect amount decreases at the end of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


