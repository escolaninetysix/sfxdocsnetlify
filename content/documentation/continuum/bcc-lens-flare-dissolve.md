{
"date": "2019-06-12",
"title": "BCC Lens Flare Dissolve",
"category": "BCC Transitions",
"link": "bcc-lens-flare-dissolve/"
}

 ### Overview


Lens flare dissolve creates a flare animation that automatically animates as your transition progresses to obscure the dissolve between clips. It includes a full set of lens flare 3D parameter options to allow maximum customization for the look of the dissolve.


[![BCC_LensFlare_Dissolve](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/12/BCC_LensFlare_Dissolve.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/12/BCC_LensFlare_Dissolve.jpg)


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Animation pop-up**: Offers 2 options for the transition animation.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter.)
* *Percent Done* – requires the user to set keyframes to determine the transition length.


**Global Intensity**: Used to control the overall intensity of the effect. A setting of 0 dims the effect to nothing while settings above 200 will yield a white image result.


**Global Scale**: Used to control the global scale of the effect. Smaller values will generate a smaller Lens Flare effect while larger values will yield a bigger Lens Flare.


**Position Start XY:** Used to control the point of origin for the lens flare.


**Position End XY:** Used to control the end point for the lens flare.


**Source Point Animation:** Contains different options for how the lens flare moves across the animation.


* *Start -> End:* Begins the lens flare at **Position Start XY**and ends at **Position End XY**.
* *End -> Start:* Begins the lens flare at **Position End XY** and ends at **Position Start XY.**
* *Start:* The lens flare does not move across the animation. It remains static at **Position Start XY.**
* *End:* The lens flare does not move across the animation. It remains static at **Position End XY.**


 


**Light Flicker Group**


Use the controls in this group to cause the Lens Flares to flicker as though the light source creating the Flare was flickering.


**Type Pop-up**: There are two options for the type of auto-animation for the light flicker:


* *Smooth*: Generates a smooth flowing light flicker.
* *Sharp*: Generates a sharp staccato-like light flicker.


**Speed**: Used to set the overall speed of the light flicker – higher values yield a faster change in the flickering rate.


**Amount**: Used to set the amount by which the light can change from its original value – higher values yield a greater range of flickering.


**Random Multiple Flares checkbox**: When enabled, randomizes the flickering across multiple Flares in the comp. If only one Flare is present then this option has no effect on the result.


**Seed**: Used to set the random seed for the starting point of the multiple Flare flickering.


 


**Auto-­Shimmer Group**


Use the controls in this group to generate a shimmering or twinkling result in the Lens Flare. The shimmer will affect only the Rays.


**Speed**: Used to set the speed or rate of shimmer. Higher values result in faster shimmering / twinkling.


**Amount**: Used to set the amount by which the Rays will change length during the shimmer effect. Higher values will result in the Rays becoming longer as they twinkle.


**Pivot Point**: Used to set the central point around which the Lens Flare will pivot in xy space.


**16 x 9 checkbox**: Forces the Lens Flare to render a result in 16 x 9 aspect ratio.


**Flare On Checkbox**: When enabled, the Flare element is rendered.


 


**Flare Group**


The Flare group contains controls for the generation and tuning of the central bright hotspot in the Lens Flare effect and is located over the light source, whether the light is from the built-in light or from scene lights.


**Color Chip and Eyedropper**: Used to set the color of the Flare.


**Intensity**: Used to set the intensity of the Flare – higher values result in a brighter Flare.


**Scale**: Used to set the size of the Flare – higher values will generate a larger Flare.


**Position**: Used to control the position of the Flare along the axis that is defined by the light source point and the pivot point.


**Draw Ring Checkbox**: When enabled, draws a colored Ring around the Flare.


**Ring Color**: Used to set the color of the Ring.


**Ring Intensity**: Used to set the brightness of the Ring. Higher values will yield a brighter result.


**Ring Radius**: Used to set the radius or size of the Ring. Higher values will generate a larger Ring.


 


**Flare Trigger Group**


This feature enables you control what happens to the flare as it nears either the center (as determined by the pivot point position) or the edge of the composition. For instance, you can set the trigger so that as the lens flare light source nears the edge of the composition (or the lens flares pivot point), the flare becomes brighter. You can also use the trigger to control the size of the lens flare so that as it passes over the center (as determined by the pivot point position) and/or nears the edge of the composition it becomes either larger or smaller.


**Trigger On Edge Checkbox**: When enabled, causes the light to become bright as the source nears the edge of the composition.


**Trigger Edge Distance**: Use to set the distance from the edge of the composition that the trigger feature can affect the light.


**Trigger Intensity**: Use to set the amount by which the light will become brighter as it enters the trigger zone.


**Trigger Scale**: Use to set the amount by which the flare will increase or decrease in size as it enters the trigger zone.


**Trigger Falloff**: Controls the gradation or falloff of the trigger effect region.


 


**Trigger Offset From Edge**


**Draw Trigger Edge Area Checkbox**: When enabled, displays the trigger edge regions in the composition.


**Trigger On Center Checkbox**: When enabled, causes the light to increase or decrease in size as the source nears the flare pivot point.


**Trigger Center Radius**: Use to set the distance from the trigger center (pivot point) that the trigger feature can affect the light.


**Trigger Center Intensity**: Use to set the amount by which the light will become brighter as it enters the trigger zone.


**Trigger Center Scale**: Use to set the amount by which the light will increase or decrease in size as it enters the trigger zone.


**Trigger Center Falloff**: Controls the gradation or falloff of the trigger effect region.


**Draw Trigger Center Area Checkbox**: When enabled, displays the trigger center region in the composition.


 


**Rays Group**


The Rays group contains controls for the generation and tuning of spikes that emanate radially from the Flare center.


**Rays On Checkbox**: When enabled, the Rays element is rendered.


**Shape Preset load / save mechanism**: Used to select the type of Rays that are being generated. Clicking on the pop-up will reveal a list of factory-installed preset Ray shapes. Clicking on the S button will prompt the user to name and save the current state of the Rays group controls, which can then be used as a custom preset and will show up in the Shape Preset pop-up list.


**Color Chip and Eyedropper**: Used to set the color of the Rays.


**Mix with Flare Color**: Use to blend the color of the Rays with the color of the Flare.


**Intensity**: Used to set the intensity of the Rays – higher values result in brighter Rays.


**Scale**: Used to set the length of the Rays – higher values will generate longer Rays.


**Position**: Used to control the position of the Rays along an axis as defined by the light source position point and the pivot point.


**Rotation**: Used to control the rotation of the Rays.


**Type Pop-up**: Used to select the Rays shape and offers two options:


* *Straight*: Rays become thinner and fade away the further they are from the light source.
* *Taper*: Rays become wider and fade away as they fan out from the light source.
* *Bright Taper*: Rays fan become increasingly wider and brighter as they fan out from the center of the light source.


**Width**: Used to set the width of the Rays. Higher values result in wider rays.


**Counts**: Used to set the amount of Rays that will be generated. Higher values will generate more rays.


**Sub Beam On checkbox**: When enabled, causes each Ray to split into several sub-beams.


**Sub Beam Counts**: Used to set the number of sub beams that each Ray can generate.


**Scale Variance**: Used to set the amount by which the length of each Ray will differ from its neighboring ray.


**Scale Seed**: Used to set the random seed starting point of the Rays scale variance.


**Color Variance**: Used to vary the color of the Rays – higher values will move the Rays color away from the currently selected color.


**Color Seed**: Used to set the random seed starting point of the color variance.


**Interval Variance**: Used to vary the space between the Rays.


**Interval Seed**: Used to set the random seed starting point of the space between the Rays.


**Rad. Position Variance**: Used to vary the distance of each Rays starting point from the Ray center point.


**Rad. Position Seed**: Used to set the random seed starting point of the Rays position.


 


**Fog Group**


The Fog group contains controls for the generation and tuning of Fog that is composited over and around the Lens Flare.


* *On Flare checkbox*: Use to center the Fog around the Flare light source.
* *Intensity*: Use to control the opacity or thickness of the Fog. Higher values create thicker, more opaque Fog.
* *Color Chip and Eyedropper*: Use to set the color of the Fog.
* *Color Mix With Flare*: Use to blend the color of the Fog with the color of the Flare.
* *Scale*: Used to set the scale of the Fog. Higher values will generate a wider Fog bank.
* *Rotation*: Used to rotate the Fog bank.


**Fog On Checkbox**: When enabled, Fog is composited into the scene, over and around the Lens Flare.


 


**Polygons Group**


The Polygons group contains controls for the generation and tuning of colored polygonal shapes that are spaced along an axis as defined by the light source position and the pivot point.


* *Color Chip and Eyedropper*: Used to set the color of the Polygons.
* *Intensity*: Used to set the opacity of the Polygons. Higher values generate more opaque Polygons.
* *Scale*: Used to set the size of the Polygons. Higher values generate larger Polygons.
* *Position*: Used to control the position of the Polygons along an axis as defined by the light source and the pivot point.
* *Position Seed*: Used to set the random seed starting point for the position of the
* *Polygons. Rotation*: Used to control the rotation of the Polygons.
* *Counts*: Used to set the number of Polygons that are being generated.


**Polygons On Checkbox**: When enabled, colored polygons are rendered into the image.


**Shape Pop-up**: Used to set the number of sides that the Polygons will have.


* *Pentagon*: Generates 5-sided shapes.
* *Hexagon*: Generates 6-sided shapes.


**Spread**: Used to control the distance between each Polygon shape along the axis.


**Scale Variance**: Used to vary the size of the Polygons from each other.


**Scale Seed**: Used to set the random seed starting point of the Polygon size variance.


**Intensity Variance**: Used to vary the brightness or intensity of the Polygons from each other.


**Intensity Seed**: Used to set the random seed starting point of the intensity variance.


**Color Variance**: Used to vary the color of the Polygons from each other.


**Color Seed**: Used to set the random seed starting point of the Polygon color variance.


 


**Discs Group**


The Discs group contains controls for the generation and tuning of solid or partially transparent colored circular discs that are distributed along an axis as defined by the light source position and the pivot point.


* *Color Chip and Eyedropper*: Used to set the color of the Discs.
* *Intensity*: Used to set the opacity of the Discs. Higher values generate more opaque Discs
* *Scale*: Used to set the size of the Discs. Higher values generate larger Discs.
* *Position*: Used to control the position of the Discs along an axis as defined by the light source position and the pivot point.
* *Position Seed*: Used to set the random seed starting point for the position of the Discs.
* *Counts*: Used to set the number of Discs that are being generated.
* *Spread*: Used to control the distance between each Disc along the axis
* *Scale Variance*: Used to vary the size of the Discs from each other.
* *Scale Seed*: Used to set the random seed starting point of the Disc size variance.
* *Intensity Variance*: Used to vary the brightness or intensity of the Discs from each other.
* *Intensity Seed*: Used to set the random seed starting point of the intensity variance.
* *Color Variance*: Used to vary the color of the Discs from each other.
* *Color Seed*: Used to set the random seed starting point of the Disc color variance.


**Discs On Checkbox**: When enabled, colored discs are rendered into the image.


 


**Hollows Group**


The Hollows group contains controls for the generation and tuning of solid or partially transparent colored circular shapes with a hollow center that are distributed along an axis as defined by the light source position and the pivot point.


* *Color Chip and Eyedropper*: Used to set the color of the Hollows.
* *Intensity*: Used to set the opacity of the Hollows. Higher values generate more opaque Hollows.
* *Scale*: Used to set the size of the Hollows. Higher values generate larger Hollows.
* *Position*: Used to control the position of the Hollows along an axis as defined by the light source position and the pivot point.
* *Position Seed*: Used to set the random seed starting point for the position of the Hollows.
* *Counts*: Used to set the number of Hollows that are being generated.
* *Spread*: Used to control the distance between each Hollow along the axis
* *Scale* *Variance*: Used to vary the size of the Hollows from each other.
* *Scale* *Seed*: Used to set the random seed starting point of the Hollow size variance.
* *Intensity* *Variance*: Used to vary the brightness or intensity of the Hollows from each other.
* *Intensity* *Seed*: Used to set the random seed starting point of the intensity variance.
* *Color* *Variance*: Used to vary the color of the Hollows from each other.
* *Color* *Seed*: Used to set the random seed starting point of the hollow color variance.


**Hollows On Checkbox**: When enabled, Hollows are rendered into the image.


 


**Glows** **Group**


The Glows group contains controls for the generation and tuning of colored circular Glows with spikes that are distributed along an axis as defined by the light source position and the pivot point.


* *Color Chip and Eyedropper*: Used to set the color of the Glows.
* *Intensity*: Used to set the opacity of the Glows. Higher values generate more opaque Glows.
* *Scale*: Used to set the size of the Glows. Higher values generate larger Glows.
* *Position*: Used to control the position of the Glows along an axis as defined by the light source position and the pivot point.
* *Position* *Seed*: Used to set the random seed starting point for the position of the Glows.
* *Counts*: Used to set the number of Glows that are being generated.
* *Spread*: Used to control the distance between each Glow along the axis
* *Scale* *Variance*: Used to vary the size of the Glows from each other.
* *Scale* *Seed*: Used to set the random seed starting point of the Glow size variance.
* *Intensity* *Variance*: Used to vary the brightness or intensity of the Glows from each other.
* *Intensity* *Seed*: Used to set the random seed starting point of the intensity variance.
* *Color* *Variance*: Used to vary the color of the Glows from each other.
* *Color* *Seed*: Used to set the random seed starting point of the glow color variance.


**Glows On Checkbox**: When enabled, glows are rendered into the image.


 


**Faded Ring Group**


The Faded Ring group contains controls for the generation and tuning of a multi-colored faded ring, which is positioned on the axis that is defined by the light source position and the pivot point. The Faded Ring can have a soft or a hard inner outer and outer edge, and the color that is used in the ring can be generated automatically via the internal spectrum generator or manually via user selected colors. The edge of the Faded Ring that is farthest away from the light source will appear to be in shadow, generating the illusion that this element is in 3D space.


**Faded Ring On Checkbox**: When enabled, the Faded Ring is rendered into the image.


**Intensity**: Used to set the opacity of the Ring. Higher values are more opaque.


**Scale**: Used to set the size of the Ring. Higher values generate a larger ring.


**Position**: Used to control the position of the Ring along an axis as defined by the light source position and the pivot point.


**Stretch X**: Used to distort the Ring along the X axis.


**Stretch Y**: Used to distort the Ring along the Y axis.


**Aspect Ratio**: Used to control the aspect ratio of the Ring, similar to spinning the object in 3D space.


**Rotation**: Used to rotate the Ring – note that this feature is unavailable if the Auto Circular Completion feature is enabled.


**Thickness**: Used to control the thickness of the Ring. Larger values generate a thicker Ring.


**Inside Feathering**: Used to control the feathering or softness along the inner edge of the Ring.


**Outside Feathering**: Used to control the feathering or softness along the outer edge of the Ring.


**Color Pop-up**: This pop-up is used to select the color fill for the Ring:


* *Spectrum*: Automatically fills the Ring with a spectrum of color
* *Global*: Fills the Ring with a solid color, which is set in the main Flare group.
* *Custom*: Fills the Ring with solid color, which is set in the Color1 color chip.
* *Gradient*: Fills the Ring with a color gradient, which is created based on the Color1 and Color2 chip values.
* *Color 1 Chip and Eyedropper*: Used to set the color for the Ring fill if custom is selected and as a start point for the gradient.
* *Color 2 Chip and Eyedropper*: Used to set the color for the end point of the gradient.
* *Loop*: Used to control the number of loops the gradient makes. Higher values generate more loops of color.
* *Offset*: Used to offset the gradient color.
* *Reverse Gradient checkbox*: Use to reverse the color of the gradient.
* *Auto Circular Completion checkbox*: Automatically completes the Ring.
* *Circular Completion*: Used to manually set the amount of shadow on the side of the Ring that is farthest from the light source.
* *Circular Feathering*: Used to manually set the softness of the shadow.
* *Circular Rotation*: Used to manually set the position of the shadow.
* *Circular Distortion*: Used to control the Ring distortion. A setting greater than zero will cause the Ring to distort as it moves away from the center of the frame.


 


**Stripe Group**


The Stripe group contains controls for the generation and tuning of a thin colored stripe that tapers out from center to edge. The stripe can be positioned anywhere along the axis which is defined by the light source and target.


* *Intensity*: Used to set the intensity of the Stripe. Higher values will cause the stripe to become more visible and cause the Stripe to bulge out in the center.
* *Length*: Used to set the length of the Stripe. Higher values will generate a longer Stripe.
* *Position*: Used to set the position of the Stripe along an axis as defined by the light source position and the pivot point.
* *Angle*: Used to set the angle of the Stripe. By default the Stripe is horizontal.
* *Softness*: Used to set the softness of the Stripe. Higher values yield a softer result.
* *Color Chip and Eyedropper*: Used to set the color of the Stripe.


**Stripe On Checkbox**: When enabled, the element is rendered into the image.


 


**Chroma Hoop Group**


The Chroma group contains controls for the generation and tuning of a multi-colored split-prism hoop, which fans out toward the camera.


**Chroma Hoop On Checkbox**: When enabled, the Chroma Hoop element is rendered into the image.


**Color Choice pop-up**: The color of the Chroma Hoop can be controlled via the options in this pop-up.


* *Global*: When selected, the color of the Chroma Hoop is taken from the color that is set in the Flare color control.
* *Custom*: When selected, the color is controlled via the color that is set in the Custom Color chip. White will yield a multi-color prismatic result, while setting a more saturated color, such as a saturated red or blue, will produce a more uniformly colored result.


**Custom Color Chip and Eyedropper**: Used to set the color of the Chroma Hoop when Custom is selected in the Color Choice pop-up.


**Intensity**: Used to set the intensity of the Chroma Hoop. Lower values yield a more transparent result.


**Scale**: Used to set the size of the Chroma Hoop. Higher values result in a bigger hoop.


**Position Offset**: Used to reposition the Chroma Hoop along an axis that is defined by the light source and the pivot point.


**Softness**: Used to soften the spread of the Chroma Hoop – values above 10 will cause the hoop to spread out toward the camera, while values lower than 10 will cause the hoop to spread in toward the light center.


**Angle**: Used to control the arc angle of the Chroma Hoop – higher values will generate a greater arc and therefore a larger hoop.


**Density**: Used to set the density or amount of spikes that make up the Chroma Hoop. A setting of 100 yields a totally solid hoop.


**Noise**: Used to add noise to the Chroma Hoop result.


**Arc Completeness**: Used to set the distance between the two ends of the arc. Higher values will produce a more complete arc.


**Count**: Used to set the number of Hoops that are generated.


**Interval**: Used to set the distance between each of the generated Hoops.


**Interval Variance**: Used to vary the distance between each of the Hoops.


 


**Chroma Fan Group**


The Chroma Fan group contains controls for the generation and tuning of a small multi-colored dual split-prism arc that surrounds the light source pushing outward in a fan like direction, with an arc on either side of the light center.


**Chroma Fan On Checkbox**: When enabled, the Chroma Fan element is rendered into the image.


 


**Color Choice pop-up**


**Global**: When selected, the color of the Chroma Fan is taken from the color that is set in the Flare color control.


**Custom**: When selected, the color is controlled via the color that is set in the Custom Color chip. White will yield a multi-color prismatic result, while setting a more saturated color, such as a saturated red or blue, will produce a more uniformly colored result.


**Custom Color Chip and Eyedropper**: Used to set the color of the Chroma Fan when Custom is selected in the Color Choice pop-up.


**Intensity**: Used to set the intensity of the Chroma Fan. Lower values yield a more transparent result.


**Color Offset**: Offsets the RGB color values from each other. At a setting of zero the result is monochromatic, and at 10 the full color spectrum is used.


**Scale**: Use to control the scale of the Chroma Fan. Higher values generate a larger result.


**Position Offset**: Used to reposition the Chroma Fan along an axis that is defined by the light source and the pivot point.


**Radial Offset**: Used to control the distance of the Chroma Fan radially away from the light center


**Angle**: Used to control the angle of the Chroma Fan, spinning it around the light center.


**Cycle**: Used to set the number of rings that make up the Fan. Smaller values generate more smaller rings that are closer together.


**Spread**: Used to spread the spikes that make up the Chroma Fan apart from each other. At the highest setting, the ring will form a circle of evenly spaced multi-colored spikes.


**Density**: Used to set the split-­‐prism density or amount of spikes that make up the Chroma Fan. A setting of 100 yields a totally solid multi-colored hoop.


**Noise**: Used to add noise to the Chroma Fan result.


**Taper**: When enabled, generates the shadow falloff that softens the sides of the Chroma Fan. Disable to have a hard edge on the sides of the fan.


 


**Elliptical Caustic Group**


The Caustics group controls the generation and tuning of the Elliptical caustics element, which appears as a circle with a bright colored noise element in the center.


**Elliptical Caustic On Checkbox**: When enabled, an Elliptical lens caustics element is rendered into the image.


**Intensity**: Use to control the intensity of the Caustics element.


**Position Offset**: Use to reposition the Elliptical Caustic along an axis, which is defined by the Lens Flare source and target points.


**Lock to Scale X checkbox**: When enabled, locks the x and y scale to the value set for scale x.


**Scale X**: Used to control the horizontal scale of the caustic. When lock to scale x is enabled, this also controls the y scale.


**Scale Y**: Used to control the vertical scale of the caustic. When lock to scale x is enabled, this control has no effect.


**Aspect**: Used to control the aspect ratio of the caustic.


**Color Type pop-up**: Used to set color that will be used for the caustic and offers four options:


* *Spectrum*: Automatically fills the caustic with a spectrum of color.
* *Global*: Fills the caustic with a solid color, which is set in the main flare group.
* *Custom*: Fills the caustic with solid color, which is set in the Color1 color chip.
* *Gradient*: Fills the caustic with a color gradient, which is generated based on the Color1 and Color2 chip


**Color 1 Chip and Eyedropper**: Used to set the color if custom is selected and as a start point for the gradient.


**Color 2 Chip and Eyedropper**: Used to set the color for the end point of the gradient.


**Gradient Loop**: Used to loop the gradient colors over the caustic.


**Gradient Offset**: Used to offset the position of the gradient on the caustic.


**Reverse Gradient Checkbox**: When enabled, causes the gradient to be reversed.


**Ring Intensity**: Used to control the intensity of the Caustics outer ring.


**Ring Outline**: Used to set the width of the Caustics outer ring.


**Core Intensity**: Used to set the brightness of the inner Caustics core element.


**Lock to Core Scale X**: When enabled, locks the scale X and scale Y parameters so that the core is scaled uniformly.


**Core Scale X**: Used to control the horizontal scale of the Core.


**Core Scale Y**: Used to control the vertical scale of the Core.


**Core Roundness**: At low values, generates a 4 point star Core shape, at high values generates a rounded Core shape.


**Core Distortion**: Use to stretch the Core shape along the axis defined by the Lens Flare source and target points.


 


**Star Caustic Group**


The Star Caustics group controls the generation and tuning of the Star Caustics element, which appears as a brightly colored star shape near the center of the Elliptical Caustic.


* *Color 1 Chip and Eyedropper*: Used to set the color for Star Caustic element.
* *Intensity*: Use to control the intensity of the Star Caustic element.
* *Position Offset*: Use to reposition the Star Caustic along an axis, which is defined by the Lens Flare source and target points.
* *Lock to Scale X checkbox*: When enabled, locks the x and y scale to the value set for scale x.
* *Scale X*: Used to control the horizontal scale of the Caustic. When lock to scale x is enabled, this also controls the y scale.
* *Scale Y*: Used to control the vertical scale of the Caustic. When lock to scale x is enabled, this control has no effect.
* *Aspect*: Used to control the aspect ratio of the Caustic.


**Star Caustic On Checkbox**: When enabled, a Star lens caustics element is rendered into the image.


 


**Texture/Orbs On Lens Group**


The Texture/Orbs on Lens group controls the generation and tuning of the surface textures that mimic real world surface artifacts such as fingerprints/dirt (texture) or water condensation (orbs.)


**Texture/Orbs On Lens On checkbox**: When enabled, enables the use of texture maps and procedurally generated orbs.


**Texture Source pop-up**:


* *None*: No lens surface texture will be applied.
* *Texture*: A texture is applied to the lens surface.
* *Custom* *Layer*: The layer set in the Custom Layer pop-up is used as the lens texture image.


**Texture pop-up**: Use to select a factory installed texture map.


**Custom Layer pop**-up: Used to select a layer to use as a texture map.


 


**Orbs Group**


Contains parameters to control the orbs.


**Orbs On Checkbox**: When enabled, orbs will be rendered into the image.


**Seed**: Used to set the random seed starting point of the orb position on the lens.


**Shape pop-up**: Used to set the shape for the orbs and offers the following 3 options:


* *Circle*: Generates circular orb shapes.
* *Polygon*: Generates polygonal orb shapes.
* *Orb Texture*: Overlays a texture on the orbs. The texture is selected in the Orb Texture pop-up.


**Polygon Sides**: Used to set the number of sides for the polygon shape.


**Polygon Roundness**: Used to control the roundness of the polygon shape. Higher values yield a more round shape.


**Orb Texture pop-up**: Used to select a layer for the orb texture overlay.


**Depth Blur**: Used to set the apparent depth blur of the Orbs in z space. Higher values make the Orbs appear to be move out of focus.


**Depth Blur Random**: Used to randomize the depth blur sorting of the Orbs in z space. Higher values create a more randomized blurring of the Orbs.


**Outline Intensity**: Used to set the opacity of the orb – higher values yield a more opaque result.


**Outline Thickness**: Used to set the thickness of the orb outer edge – higher values yield a thicker edge.


**Outline Feathering**: Used to set the feathering of the orb edge – higher values yield a softer edge.


**Lock to Scale X checkbox**: When enabled, locks the x and y scale to the value set for scale x.


**Scale X**: Used to control the horizontal scale of the orb. When lock to scale x is enabled, this also controls the y scale.


**Scale Y**: Used to control the vertical scale of the orb. When lock to scale x is enabled, this control has no effect.


**Scale Random**: Randomizes the scale of the orbs across the image.


**Rotation**: Used to set the rotation of the orbs.


**Rotation Random**: Used to randomize the rotation of the orbs from each other.


**Aspect**: Used to control the aspect ratio of the orbs.


**Count**: Used to set the number of orbs that will be generated.


**Color Type pop-up**: Used to set color that will be used for the orbs and offers four options:


* *Spectrum*: Automatically fills the orb with a spectrum of color.
* *Global*: Fills the orb with a solid color, which is set in the main flare group.
* *Custom*: Fills the orb with solid color, which is set in the Color1 color chip.
* *Gradient*: Fills the orb with a color gradient, which is generated based on the Color1 and Color2


**Color 1 Chip and Eyedropper**: Used to set the color for the orb fill if custom is selected and as a start point for the gradient.


**Color 2 Chip and Eyedropper**: Used to set the color for the end point of the gradient.


**Gradient Loop**: Used to loops the gradient colors over the orbs.


**Gradient Offset**: Used to offset the position of the gradient on the orbs.


**Reverse Gradient checkbox**: When enabled, causes the gradient to be reversed.


**Color Random**: Used to randomize the color of the orbs.


**Intensity**: Used to control the opacity of the central portion of the orbs. Higher values yield a more opaque result.


**Intensity Random**: Used to randomize the intensity value of the central portion of the orbs from each other.


**Illumination Radius**: Used to control the area that is covered with orbs. Higher values will result in orbs covering more of the image.


**Falloff**: Used to set the softness of the cut-­‐off of the orb area. Higher values yield a softer edge.


**Brightness**: Used to increase or decrease the brightness of the orbs. Higher values yield a brighter result.


**Offset**: Used to offset the position of the texture layer.


**Scale**: Used to increase or decrease the scale of the texture layer.


 


**Chromatic Aberration Group**


The Chromatic Aberration group contains controls to generate and tune the Chromatic Aberration effect over the entire lens flare.


**Chromatic Aberration On checkbox**: When enabled, generates a Chromatic Aberration lens effect.


**Color Type pop-up**: Used to set the style of the Chromatic Aberration effect with the following three options:


* *Red/Bue Shift*: Shifts the red and blue channels away from each other.
* *Purple Fringe*: Adds a purple fringe effect.
* *Custom Color*: Used to customize the color of the Chromatic Aberration.


**Intensity**: Used to control the intensity of the effect. Higher values generate a more opaque result.


**Shift Amount**: Used to control the amount of shift, or the depth of the effect.


**Inside Color Chip and Eyedropper**: Used to set the color for the inside color if custom is selected.


**Outside Color Chip and Eyedropper**: Used to set the color for the outside color if custom is selected.


**Mix With Original**: Use the Mix With Original parameter to blend the Lens Flare with the unfiltered input clip.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**Extras Group**


Contains ways to modify the dissolve throughout the animation.


**Dissolve Apply Mode pop-up** – Used to set the apply mode for the wipe. There are 27 different apply modes in this list.


**Dissolve Apply Mix** – Used to blend between the selected apply mode and the normal apply mode.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition. On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane. On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Flare Ease In:** Control how quickly or slowly the flare amount increases at the beginning of the transition.


****Flare** Ease Mid:**Control the rate of change of the flare amount (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


****Flare** Ease Out:** Control how quickly or slowly the flare amount decreases at the end of the transition.


**Dissolve Duration:** Control the timing of the underlying dissolve relative to the timing of the rest of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.) Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


