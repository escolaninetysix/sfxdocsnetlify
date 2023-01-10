{
"date": "2019-06-12",
"title": "BCC RGB Displacement Dissolve",
"category": "BCC Transitions",
"link": "bcc-rgb-displacement-dissolve/"
}

 
![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/10/BCC-RGB-Displace-Dissolve-1024x576.jpg)
### **Parameter Controls**


#### **Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).


**Layer to Reveal** – This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Percent Done* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


#### **RGB Misalignment Group**


**Render Misalignment** enables or disables the RGB misalignment feature. When disabled, the RGB effect will not render.


**Misalignment Animation** sets the style with which the misalignment animates into view. 


* *Offset* slides the Red, Green and Blue channels out from the original image.
* *Opacity* fades them into view without animating their offset motion
* *Both* fades the Red, Green and Blue Channels into view while animating their offset motion.


**Misalignment Opacity** manually adjusts the opacity value of the misaligned channels.


The **Red Offset, Green Offset** and **Blue Offset** position controls offset the corresponding color channel on the X and Y axis.


The **Red Intensity, Green Intensity** and **Blue Intensity** determine the intensity of the corresponding color channel, expressed as a percentage. At the default values of 0, all channels are given equal weight.


**Reflect Edges** will fill in the edges of the frame with repeating pixels reflecting the RGB split.


The **Apply Mode menu** controls how the filtered image is composited with the source image.  For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).


**Apply Mix** controls the mix of the specified Apply Mode with the *Normal* apply mode. If the Apply Mode is Normal, Apply Mix has no affect and the parameter does not appear. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


#### Displacement Map Group


The Displacement Map Group controls the appearance of the map used to distort the source image. 


**Pre** **Blur** applies a blur to the Map Layer. Increasing Pre Blur can help eliminate sharp edges in the map to create a smoother effect. 


Blur Threshold softens the Map Layer before computing the displacements. After the Map Layer is blurred, the blurred track is compared to the original Map Layer, and the color change for each channel is reduced by a relative amount. Increasing Blur Threshold blurs parts of the image with rapid changes in color without blurring subtle details. This is particularly appropriate for a displacement map, which can severely distort areas of the image where the Map Layer changes rapidly. 


**Map** **Black** **Level** sets the channel values of the map that are output as pure black. All pixels whose value is lower than the Map Black Level value become pure black. For example, if Map Black Level is set to 50, all pixels with a value of 50 or less output to a value of 0. The remaining values (50-255) are remapped to produce a smooth gradient from black to white. 


**Map White Level** sets the channel values of the input image that are treated as pure white by the filter. All pixels whose value is higher than the Map White Level value become to pure white. For example, if Map White Level is set to 200, all pixels with a value of 200 or more are output to a value of 255. The remaining values (0-200) are remapped to produce a smooth gradient from black to white. 


 **Map Gamma** adjusts the midlevel gray values of the input image by adjusting the gamma. Increasing Map Gamma lightens the shadows and reduces contrast. Decreasing Gamma darkens the shadows and increases contrast. 


#### The Displacement Group


The Displacement Group contains parameters for adjusting the overall look of the displacement effect.


**Render Displacement** enables or disables the displacement feature. When disabled, the displacement effect will not render. 


**Master Displacement** allows you to adjust the overall intensity of the displacement. Higher values will produce more intense distortions.


The **Master Displacement** control defaults to 100 and scales all of the displacement amounts. Animating this controls allows you to animate the total displacement.


The **Horiz. Channel menu** is the channel in the Map Layer used to compute horizontal displacement. The choices are *Red, Green, Blue, Luma, White, Gray*, and *Black*. White treats all of the pixels as if they were white (i. e. fully displaces each pixel to the Max. Horizontal value). Gray treats all pixels as if they were 50% gray (resulting in no displacement). Black treats all pixels as if they were black, thereby displacing all pixels to the negative of the Max. Horizontal Displacement value.


**Max. Horiz. Displacement** sets the amount of horizontal displacement for pixels in the Map Layer. Positive values move points that correspond to white pixels in the Map Layer to the right; points that correspond to black pixels displace to the left. Negative values displace pixels in the opposite direction (white pixels move to the left and black pixels to the right). The displacement of gray pixels is interpolated between these values. 50% gray pixels undergo no displacement, because they “pull” equally in both directions. 


**Horiz Reference Level** is the channel value where no displacement occurs. If you want all of the displacement in the horizontal channel, set *Horiz. ReferenceLevel* to 255. To have all the displacement occur vertically, set *Horiz. ReferenceLevel* to 0. 


The **Vert**. **Channel** **menu** sets the channel in the Map Layer used to compute vertical displacement. The choices are *Red, Green, Blue, Luma, White, Gray,* and *Black*. White treats all pixels as if they were white (fully displaces each pixel to the Max Vert. Displacement value). Gray treats all pixels as if they were 50% gray (resulting in no displacement). Black treats all pixels as if they were black, thereby displacing all pixels to the negative of the Max Vert. Displacement value.


**Max Vert. Displacement** sets the vertical displacement for pixels. White pixels are displaced up by this amount, and black pixels are displaced down by this amount. The displacement of gray pixels is interpolated between these values. 50% gray pixels undergo no displacement, because they “pull” equally in both directions.


**Vert Reference Level** is the channel value where no displacement occurs. If you want all of the displacement in the vertical channel, set *Vert. Reference Level* to 255. To have all the displacement occur horizontally, set *Vert. Reference Level* to 0.


#### Region Transition Group


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



#### **Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Glow Ease In:**Control how quickly or slowly the glow amount increases at the beginning of the transition.


**Glow Ease Mid:**Control the rate of change of the glow amount (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


**Glow Ease Out:**  Control how quickly or slowly the glow amount decreases at the end of the transition.


**Dissolve Duration:**  Control the timing of the underlying dissolve relative to the timing of the rest of the transition.**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*



 