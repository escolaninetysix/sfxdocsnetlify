{
"date": "2019-06-12",
"title": "BCC Spin Blur Dissolve",
"category": "BCC Transitions",
"link": "bcc-spin-blur-dissolve/"
}

 
![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/03/Spin-Blr_Draft.jpg)
### Overview


The BCC Spin Blur Dissolve filter simulates a prismatic blur that distorts the source footage with a clockwise or counterclockwise blur. The effect automatically animates in intensity as your transition progresses to obscure the underlying dissolve between clips. 


### **Parameter Controls**


#### **Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings. For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).


#### Main Transition Group


**Layer to Reveal** – This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Percent Done* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


#### Spin Blur Parameters


**Angle Delta:** Sets the overall change in clockwise angle for the image spin. 


**Reverse Blur Direction:** Toggles *between* clockwise and counterclockwise bluring.


**Bi-Directional Blur:** Enables simultaneous clockwise and counterclockwise bluring.**L**


**Blur Amount:** Sets the amount of motion blur during the transition. Higher values will result in smoother motion blur.


**Sample Count:** sets the amount of copies of the original used to create the effect. the upper limit of 100 generates a smooth result. Starting- sets the start point of the zoom effect


**Center A/B**: Set the XY position of the start and end points of the transition.


**Point Animation**: Determines the animation progression between points.


* *A–>B*: Animates the transition from the defined Point A to the defined Point B.
* *B–>A* Animates the transition from the defined Point B to the defined Point A
* *Center A*: Focuses the transition at Point A only.
* *Center B:* Focuses the transition at Point B only.


**Zoom Delta:**Sets the overall change in depth between the start and end points. 


**Color Amount**: Adjustst the amount of color displacement as defined by the color chips.


**Color Chips:** allows you to set the color of the indvidual color waves.


* *Short Color*: Sets the color of the short color waves. The default is blue.
* *Mid Color*: Sets the color of the medium color waves. The default is green.
* *Long Color*: Sets the color of the long color waves. The default is red.


**Outside Pattern**: Pop-up options for the outside area of the image include:


* *No* (does nothing)
* *Tile* (tiles the image to fill the gap)
* *Reflect* (reflects the outer edges to fill the gap)


#### Region Animation Group


**Region Animation** allows you to fine tune the style and direction of the transition effect with various settings. These settings are disabled by default until an animation type is selected.


**Animation Type** sets the direction of the transition animation.


* *None* will set the transition animation to affect the entire image at once. This is the default setting.
* *Out:* the transition will begin at a central point and move outwards towards a edges.
* *In:* the transition will begin along the outer edge and move inwards towards a central point.
* *Out & In:* The transition will animate outwards and then rebound inwards over the course of the animation.
* *In & Out:* The transition will animate inwards and then rebound outwards over the course of the animation.


**Region Type:** determines the shape of the transition effect.


* *Circle* will cause the transition to appear as a circular shape that increases or decreases in size.
* *Line* will cause the transition to appear as a standard linear wipe.


**Direction:** Sets the angle of the transition. Only available when the Region Type is set to Line.


**Softness:** sets the edge feathering of the transition region. Lower values will produce a sharper edge.


**Center Point:** Sets the XY position of the transition’s animation.


**Color** settings allow you to set the brightness and contrast values of the transition at it’s peak point. Values will increase as the effect transitions in and then decrease as the new layer is revealed.


**Brightness Peak:** Sets the maximum brightness value for the transition.


**Contrast Peak:** Sets the maximum contrast value for the transition.


**Saturation Peak**: Sets the maximum saturation value for the transition.


#### **Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Glow Ease In:**Control how quickly or slowly the glow amount increases at the beginning of the transition.


**Glow Ease Mid:**Control the rate of change of the glow amount (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


**Glow Ease Out:**  Control how quickly or slowly the glow amount decreases at the end of the transition.


**Dissolve Duration:**  Control the timing of the underlying dissolve relative to the timing of the rest of the transition.**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*  




 