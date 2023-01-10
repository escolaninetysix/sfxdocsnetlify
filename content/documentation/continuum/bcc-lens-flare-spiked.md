{
"date": "2019-06-12",
"title": "BCC Lens Flare Spiked",
"category": "BCC Transitions",
"link": "bcc-lens-flare-spiked/"
}

 ### Overview


BCC Lens Flare Spiked is a dissolve-style transition that creates a flare animation which automatically animates as your transition progresses to obscure the dissolve between clips. It offers a simplified subset of the full lens flare parameter set, oriented towards making a more star-shaped and spiked appearance.


[![BCC_LensFlare_Spiked](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/12/BCC_LensFlare_Spiked.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/12/BCC_LensFlare_Spiked.jpg)


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Animation pop-up** – Offers 2 options for the transition animation.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter.)
* *Percent Done* – requires the user to set keyframes to determine the transition length.


**Flare Scale Peak**: Used to control the overall intensity of the effect. A setting of 0 dims the effect to nothing while settings above 200 will generally yield a totally white image result.


**Flare Intensity**: Used to control the global scale of the effect. Smaller values will generate a smaller Lens Flare effect while larger values will yield a bigger Lens Flare.


**Flare Color**: Use to blend the color of the Rays with the color of the Flare.


**Flicker Amount**: Used to set the amount by which the light can change from its original value – higher values yield a greater range of flickering.


**Flicker** **Speed**: Used to set the overall speed of the light flicker – higher values yield a faster change in the flickering rate.


**Flicker** **Seed**: Used to set the random seed for the starting point of the multiple Flare flickering.


**Source Point Animation:**Contains different options for how the lens flare moves across the animation.


* *Start -> End:*Begins the lens flare at **Position Start XY**and ends at **Position End XY**.
* *End -> Start:*Begins the lens flare at **Position End XY**and ends at **Position Start XY.**
* *Start:*The lens flare does not move across the animation.  It remains static at **Position Start XY.**
* *End:*The lens flare does not move across the animation.  It remains static at **Position End XY.**


**Position Start XY:**Used to control the point of origin for the lens flare.


**Position End XY:**Used to control the end point for the lens flare.


**Pivot Point**: Used to set the central point around which the Lens Flare will pivot in xy space.


**Rays Color**: Used to set the color of the Rays.


**Rays Scale**: Used to set the length of the Rays – higher values will generate longer Rays.


**Rays Intensity**: Used to set the intensity of the Rays – higher values result in brighter Rays.


**Rays Count**: Used to set the amount of Rays that will be generated. Higher values will generate more rays.


**Rays Width**: Used to set the width of the Rays. Higher values result in wider rays.


**Shimmer Amount**: Used to set the amount by which the Rays will change length during the shimmer effect. Higher values will result in the Rays becoming longer as they twinkle.


**Shimmer Speed**: Used to set the speed or rate of shimmer. Higher values result in faster shimmering / twinkling.


 


**Polygons Group**


The Polygons group contains controls for the generation and tuning of colored polygonal shapes that are spaced along an axis as defined by the light source position and the pivot point.


**Polygon Color**: Used to set the color of the Polygons.


**Polygon Intensity**: Used to set the opacity of the Polygons. Higher values generate more opaque Polygons.


**Polygon Scale**: Used to set the size of the Polygons. Higher values generate larger Polygons.


**Polygon Count:** Used to set the number of Polygons that are being generated.


**Polygon Shape**: Used to set the number of sides that the Polygons will have.


* *Pentagon*: Generates 5-sided shapes.
* *Hexagon*: Generates 6-sided shapes.


 


**Stripe Group**


The Stripe group contains controls for the generation and tuning of a thin colored stripe that tapers out from center to edge. The stripe can be positioned anywhere along the axis which is defined by the light source and target.


**Stripe Color:** Used to set the color of the Stripe.


**Stripe Intensity:** Used to set the intensity of the Stripe. Higher values will cause the stripe to become more visible and cause the Stripe to bulge out in the center.


**Stripe Angle:** Used to set the angle of the Stripe. By default the Stripe is horizontal.


**Stripe Length:** Used to set the length of the Stripe. Higher values will generate a longer Stripe.


**Stripe Softness:** Used to set the softness of the Stripe. Higher values yield a softer result.


 


****Chroma Fan Group****


The Chroma Fan group contains controls for the generation and tuning of a small multi-colored dual split-prism arc that surrounds the light source pushing outward in a fan like direction, with an arc on either side of the light center.


****Chroma Fan Intensity**:** Used to set the intensity of the Chroma Fan. Lower values yield a more transparent result.


**Chroma Fan Radial Offset:**Used to control the distance of the Chroma Fan radially away from the light center.


**Chroma Fan Angle:**Used to control the angle of the Chroma Fan, spinning it around the light center.


**Chroma Fan Scale:**Use to control the scale of the Chroma Fan. Higher values generate a larger result.


**Chroma Fan Spread:**Used to spread the spikes that make up the Chroma Fan apart from each other. At the highest setting, the ring will form a circle of evenly spaced multi-colored spikes.


**Chroma Fan Density:**Used to set the split-­‐prism density or amount of spikes that make up the Chroma Fan. A setting of 100 yields a totally solid multi-colored hoop.


**Extras Group:**Contains ways to modify the dissolve throughout the animation.


**Dissolve Apply Mode pop-up**: Used to set the apply mode for the wipe. There are 27 different apply modes in this list.


**Dissolve Apply Mix**: Used to blend between the selected apply mode and the normal apply mode.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Flash Ease In:**Control how quickly or slowly the flash amount increases at the beginning of the transition.


****Flash**Ease Mid:**Control the rate of change of the flash amount (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


****Flash**Ease Out:**  Control how quickly or slowly the flash amount decreases at the end of the transition.


**Dissolve Duration:** Control the timing of the underlying dissolve relative to the timing of the rest of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


