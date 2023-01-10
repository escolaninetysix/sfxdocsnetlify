{
"date": "2019-06-12",
"title": "BCC Lens Flash",
"category": "BCC Transitions",
"link": "bcc-lens-flash/"
}

 ### Overview


BCC Lens Flash creates a flare animation that automatically animates as your transition progresses to obscure the dissolve between clips. It offers a simplified subset of the full lens flare parameter set, oriented towards making a large bright flash as the transition progresses.


[![BCC_LensFlash](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/12/BCC_LensFlash.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/12/BCC_LensFlash.jpg)


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Animation pop-up** – Offers 2 options for the transition animation.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter.)
* *Percent Done* – requires the user to set keyframes to determine the transition length.


**Source Point Animation:**Contains different options for how the lens flare moves across the animation.


* *Start -> End:*Begins the lens flare at **Position Start XY**and ends at **Position End XY**.
* *End -> Start:*Begins the lens flare at **Position End XY**and ends at **Position Start XY.**
* *Start:*The lens flare does not move across the animation.  It remains static at **Position Start XY.**
* *End:*The lens flare does not move across the animation.  It remains static at **Position End XY.**


**Position Start XY:**Used to control the point of origin for the lens flare.


**Position End XY:**Used to control the end point for the lens flare.


**Flare Scale**: Used to set the size of the Flare – higher values will generate a larger Flare.


**Flare Color**: Use to blend the color of the Rays with the color of the Flare.


**Flicker Amount**: Used to set the amount by which the light can change from its original value – higher values yield a greater range of flickering.


**Flicker** **Speed**: Used to set the overall speed of the light flicker – higher values yield a faster change in the flickering rate.


**Flicker** **Seed**: Used to set the random seed for the starting point of the multiple Flare flickering.


**Ring Intensity**: Used to set the brightness of the Ring. Higher values will yield a brighter result.


**Ring Radius**: Used to set the radius or size of the Ring. Higher values will generate a larger Ring.


**Ring Color**: Used to set the color of the Ring.


**Rays Intensity**: Used to set the intensity of the Rays – higher values result in brighter Rays.


**Rays Scale**: Used to set the length of the Rays – higher values will generate longer Rays.


**Rays Color**: Used to set the color of the Rays.


**Rays Width:**Used to set the width of the Rays.


**Rays Count**: Used to set the amount of Rays.


**Rays Type:** Controls the type of Rays generated.  There are two options:


* *Straight:* Rays are straight line and parallel.
* *Spreading:* Rays spread from the source.


**Shimmer Amount**: Used to set the amount by which the Rays will change length during the shimmer effect. Higher values will result in the Rays becoming longer as they twinkle.


**Shimmer Speed**: Used to set the speed or rate of shimmer. Higher values result in faster shimmering / twinkling.


 


**Chroma Fan Group**


The Chroma Fan group contains controls for the generation and tuning of a small multi-colored dual split-prism arc that surrounds the light source pushing outward in a fan like direction, with an arc on either side of the light center.


**Chroma Fan Intensity**: Used to set the intensity of the Chroma Fan. Lower values yield a more transparent result.


****Chroma Fan**Color Offset**: Offsets the RGB color values from each other. At a setting of zero the result is monochromatic, and at 10 the full color spectrum is used.


****Chroma Fan**Scale**: Use to control the scale of the Chroma Fan. Higher values generate a larger result.


****Chroma Fan**Radial Offset**: Used to control the distance of the Chroma Fan radially away from the light center.


****Chroma Fan**Angle**: Used to control the angle of the Chroma Fan, spinning it around the light center.


****Chroma Fan**Cycle**: Used to set the number of rings that make up the Fan. Smaller values generate more smaller rings that are closer together.


****Chroma Fan**Spread**: Used to spread the spikes that make up the Chroma Fan apart from each other. At the highest setting, the ring will form a circle of evenly spaced multi-colored spikes.


****Chroma Fan**Density**: Used to set the split-­‐prism density or amount of spikes that make up the Chroma Fan. A setting of 100 yields a totally solid multi-colored hoop.


****Chroma Fan**Noise**: Used to add noise to the Chroma Fan result.


**Lens Spot Count:**Controls the amount of spots that appear on the lens.

**Lens Spots Brightness:**Controls the brightness of the lens spots.

**Illumination Radius:**Controls how much of the image is illuminated by the lens spots.

**Radius Fall Off:** Controls where on the image the lens spots fall off.

**Lens Spots Shape:** Determines the shape of the lens spots.  There are three options: *Circle, Polygon, Orbs Texture.*

**Polygon Sides:**Controls the amount of sides used in the *Polygon***Shape**if it is selected in **Shape**.

**Polygon Roundness:**Controls how circular the *Polygon* **Shape** will be if it is selected in **Shape.**


**Outline Intensity:**Controls the intensity of the orb outlines.


**Outline Thickness:**Controls thickness or orb outlines.


**Outline Feathering:**Controls how blurred the orb edges are at the outline edges.


**Lens Spots Intensity:**Controls the intensity of the lens spots.


 


**Extras Group**


Contains ways to modify the dissolve throughout the animation.


**Dissolve Apply Mode pop-up**: Used to set the apply mode for the wipe. There are 27 different apply modes in this list.


**Dissolve Apply Mix**: Used to blend between the selected apply mode and the normal apply mode.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Flash Ease In:**Control how quickly or slowly the flash amount increases at the beginning of the transition.


****Flash**Ease Mid:**Control the rate of change of the flash amount (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


****Flash**Ease Out:**  Control how quickly or slowly the flash amount decreases at the end of the transition.


**Dissolve Duration:**  Control the timing of the underlying dissolve relative to the timing of the rest of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*



