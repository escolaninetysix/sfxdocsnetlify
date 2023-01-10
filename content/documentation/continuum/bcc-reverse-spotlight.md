{
"date": "2019-06-12",
"title": "BCC Reverse Spotlight",
"category": "BCC Lights",
"link": "bcc-reverse-spotlight/"
}

 [![ReverseSpotlightAft](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/ReverseSpotlightAft.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/ReverseSpotlightAft.jpg)


### Overview


Using the Spotlight filter to precisely light a specific area can sometimes be difficult. Reverse Spotlight allows you to define the lit region and computes the Light Source, Target, and Cone Width from this region. The Near Corner, Far Corner and Light Squeeze controls in Reverse Spotlight replace the Light Source, Target, and Cone Width controls in the Spotlight filter.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Near Corner** sets the point in the lit region that is closest to the light source.


**Far Corner** sets the point in the lit region that is farthest from the light source.


The **Displace Light** X and Y point controls displace the light source and target point by the same amount. Use this control to animate the spotlight across the image without altering its shape or intensity.




|  |
| --- |
| [![reverse.nearfar](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/reverse.nearfar.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/reverse.nearfar.jpg) |


Far Corner / Near Corner




|  |  |
| --- | --- |
| [![spotlight.displace200](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spotlight.displace200.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spotlight.displace200.jpg) | [![spotlight.displace500](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spotlight.displace500.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spotlight.displace500.jpg) |
| Displace Light X=200 | Displace Light X=500 |


**Light Elevation** controls the height of the light source above the image plane. The lit area is either an ellipse or a hyperbola, depending on the angle at which the light strikes the image. The shape of the lit region is determined by the Light Elevation and the distance between the Near and Far Corner points. Reducing Light Elevation produces an increasingly stretched ellipse. Increasing Light Elevation produces an increasingly circular lit region.




|  |  |  |
| --- | --- | --- |
| [![spotlight.elevation50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spotlight.elevation50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spotlight.elevation50.jpg) | [![spotlight.elevation100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spotlight.elevation100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spotlight.elevation100.jpg) | [![spotlight.elevation200](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spotlight.elevation200.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spotlight.elevation200.jpg) |
| Light Elevation=50 | Light Elevation=100 | Light Elevation=200 |


**Light Squeeze** sets the shape of the lit region. A value of 100 creates a circular lit region (by putting the source directly above the center of the region). As Light Squeeze is reduced, the lit region narrows. Decreasing Light Squeeze moves the source away from the lit region, making the light weaker. You can compensate for the weaker light by increasing the Intensity value.




|  |  |  |
| --- | --- | --- |
| [![reverse.squeeze10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/reverse.squeeze10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/reverse.squeeze10.jpg) | [![reverse.squeeze30](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/reverse.squeeze30.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/reverse.squeeze30.jpg) | [![reverse.squeeze50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/reverse.squeeze50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/reverse.squeeze50.jpg) |
| Light Squeeze=10 | Light Squeeze=30 | Light Squeeze=50 |


**Intensity** sets the intensity of the light. Light Color sets the color of the light.


**Ambient Light** adjusts the total amount of diffuse light on the image. The default setting of 100 does not add or subtract ambient light from the source image. Decreasing this setting makes the image darker before the other light is applied. Ambient light illuminates or darkens the image evenly, and is unaffected by any other lighting parameters.


Increasing **Ambient Follow** causes the ambient light to fall off in regions of the image that are lit by the applied light. Use Ambient Follow if you want the applied light’s color to completely replace the ambient light.


**Center** **Falloff** controls the falloff in the center of the lit region. Increase Center Falloff to create a light that is brighter in the center than at the edges. Use a negative Center Falloff value to create a ring-shaped spotlight.


**Edge Falloff** controls the softness of the edges of the lit region. Increase Edge Falloff to soften the transition between the lit and unlit regions.


 


**Edges Parameter Group**


The Edges parameters control edge detection and edge lighting. Note that the edges referred to here are edges in the source image not the edges of the spotlight.


* Warning: Edge detection is inherently a non-scalable process, because edges are found by comparing each pixel with its immediate neighbors. The appearance of the full- size rendered image can be quite different than a scaled preview, so you should preview at least a frame of your sequence that uses edge lighting at full size.


The **Edges From menu** determines which channel in the source is used to compute edges. Choose *Alpha* to light text, or to light a cutout image around the edges. Use *Luma* or an RGB channel to light the image based on the edges in the corresponding color channel.


**Edge Intensity** sets the intensity of the edge light. If Edge Intensity is any value other than 0, the filter completes a directional edge detection on the source image. Edge points are then given additional light, which is scaled by the geometric controls in the general parameters. You can also light only the edges by setting the Intensity to 0 and Edge Intensity to a value other than 0.


**Edge Threshold** determines how sensitive the filter is to differences between pixels when finding edges in the source image. The affect depends on the nature of the source image.


* Warning: Edge Threshold is intended more for adjusting the look of the edges than for animation. Some images change dramatically when Edge Threshold is animated.


**Edge Pre** **Blur** blurs the source image before edge detection. This parameter softens the image’s edges and reduces their intensity.


**Edge Post Blur** blurs the edge light after the edges are computed. You can use Edge Post Blur to create glowing edges and flare effects.


**Post Blur Quality** determines the quality of the Post Blur. *Pyramid* is the fastest option and is generally adequate. It produces a blur similar in quality to the Pyramid Blur filter. *Pyramid* *Smoother* produces a better quality pyramid blur and increases rendering times slightly. The remaining choices, *Gaussian Low, Gaussian Medium, Gaussian High, Gaussian Higher, and Gaussian Highest* produce gaussian blurs of increasing quality. These options increase rendering times proportionately.


The **View Edges Only checkbox** lets you view the edges created by the filter in black and white. When View Edges Only is on, the filter’s output is determined only by the edge controls. View Edges Only is useful to create a complex effect involving edge lighting.


**Edge Color** sets the edge light color.


The **Edge Color Mode menu** controls the interaction between the Edge Color and the Light Color. If *Ignore* is chosen, the Light Color overrides the Edge Color. If *Mix* is chosen, the Edge Light Color is mixed with the Light Color. If *Prefer* is chosen, the Light Color fades away where the Edge Color is intense.


 


**Common Parameter Group**


The Common parameters offer more options for adjusting the filter. Use these parameters to control the mixing of ambient and applied light and/or to create gel or matte effects.


The **Apply Mode menu** determines how the filter composites the applied light with the image. For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** controls the mix of the specified Apply Mode with the Normal apply mode. If the Apply Mode is Normal, Apply Mix has no affect. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


If the **Shadow Transparent checkbox** is selected, unlit regions of the image are transparent.


The **Gel-Matte Layer** selects any layer in the composition to use as either a gel or a matte.


The **Gel-Matte menu** determines how the Gel-Matte layer is used.


* The *Gel* and *Matte* options use the Gel-Matte layer for color information in creating either a gel or matte, respectively.
* The *Luma Gel* and *Luma Matte* options scale down the applied light by the luminance values in the Gel-Matte layer. *Luma Gel* is not available in the Light sweep filter.
* If Gel-Matte is set to *None*, no gel or matte is used.


Selecting the **Best Quality Gel checkbox** can improve the quality of the spotlight when using a gel, particularly if the spotlight moves, but increases render and preview time. Deselecting this option improves speed, and the resulting image quality is often adequate.


The **Light Apply Layer menu** allows you choose any layer in the composition to which the light is applied. This enables you to apply multiple lights to a layer with low ambient light.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 