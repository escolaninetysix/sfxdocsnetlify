{
"date": "2019-06-12",
"title": "BCC Light Sweep",
"category": "BCC Lights",
"link": "bcc-light-sweep/"
}

 

|  |  |
| --- | --- |
| [![edgelight.orginal](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/edgelight.orginal.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/edgelight.orginal.jpg) | [![lightsweep.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.original.jpg) |
| Source Image | Filtered image |


### Overview


BCC Light Sweep creates a linear beam of light that sweeps across your image. The filter is physically modeled after a light that is infinitely far away. The light is infinitely wide in one direction, and falls off in the other. Light Sweep also has some very useful edge detection and edge lighting features.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Direction** sets the angle that the light beam makes with the horizontal axis.  The light center is set by the **Light Center** point controls. The light comes from infinitely far away to the Light Center, at which point it begins to fall off.


**Falloff Distance** controls the rate at which the light darkens or falls off, after it passes the Center point. If Falloff Distance is 0, the light falls off immediately. If Falloff Distance is 100, the light continues past the center to infinity, and displacing the Center along the Direction of the light does not change the effect.




|  |  |  |
| --- | --- | --- |
| [![lightsweep.falloff10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.falloff10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.falloff10.jpg) | [![lightsweep.falloff20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.falloff20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.falloff20.jpg) | [![lightsweep.falloff40](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.falloff40.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.falloff40.jpg) |
| Falloff Distance=10 | Falloff Distance=20 | Falloff Distance=30 |


**Cone Width** sets the width, in pixels, of the light beam.




|  |  |
| --- | --- |
| [![lightsweep.conewidth200](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.conewidth200.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.conewidth200.jpg) | [![lightsweep.conewidth400](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.conewidth400.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.conewidth400.jpg) |
| Cone Width=200 | Cone Width=400 |


**Center %** sets the percentage of the cone width for which the light is fully applied. For example, if Center Percentage is 50, the center half of the lit region is fully lit, and the light in the quarters on each side of the center falls off as it approaches the edge of the lit region.




|  |  |  |
| --- | --- | --- |
| [![lightsweep.center0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.center0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.center0.jpg) | [![lightsweep.center50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.center50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.center50.jpg) | [![lightsweep.center100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.center100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.center100.jpg) |
| Center %=0 | Center %=50 | Center %=100 |


**Shape** controls how the light falls off from the center to the outside regions of the beam. At higher values, the light falls off rapidly outside the center of the light beam, creating a hard- edged beam. At the lower values, the light falls off more gradually, creating a softer beam.




|  |  |  |
| --- | --- | --- |
| [![lightsweep.shape10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.shape10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.shape10.jpg) | [![lightsweep.shape50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.shape50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.shape50.jpg) | [![lightsweep.shape100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.shape100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightsweep.shape100.jpg) |
| Shape=10 | Shape=50 | Shape=100 |


**Intensity** adjusts the intensity of the light.


**Light** **Color** sets the color of the light.


**Ambient Light** adjusts the total amount of diffuse light on the image. The default setting of 100 does not add or subtract ambient light from the source image. Decreasing this setting makes the image darker before the other light is applied. Ambient light illuminates or darkens the image evenly, and is unaffected by any other lighting parameters.


Ambient Light overrides the PixelChooser in the Light Sweep filter. In other words, the Ambient Light setting is applied to all pixels, regardless of whether or not they are chosen by the PixelChooser. This ensures that the PixelChooser does not create discrepancies in the overall lighting of the image before Light Sweep is applied. At the default Ambient Light value of 100 (where no ambient light is added or subtracted), the PixelChooser behaves exactly as in other filters; at other values, the PixelChooser filters every parameter except Ambient Light.


Increasing **Ambient Follow** causes the ambient light to fall off in regions of the image that are lit by the applied light. Use Ambient Follow if you want the applied light’s color to completely replace the ambient light.


 


**Edges Parameter Group**


The Edges parameters control edge detection and edge lighting. Note that the edges referred to here are edges in the source image, not the edges of the spotlight.


* Warning: Edge detection is inherently a non-scalable process, because edges are found by comparing each pixel with its immediate neighbors. The appearance of the full- size rendered image can be quite different than a scaled preview, so you should preview at least a frame of your sequence that uses edge lighting at full size.


The **Edges From menu** determines which channel in the source is used to compute edges. Choose *Alpha* to light text, or to light a cutout image around the edges. Use *Luma* or an RGB channel to light the image based on the edges in the corresponding color channel.


**Edge Intensity** sets the intensity of the edge light. If Edge Intensity is any value other than 0, the filter completes a directional edge detection on the source image. Edge points are then given additional light, which is scaled by the geometric controls in the general parameters. You can also light only the edges by setting the Intensity to 0 and Edge Intensity to a value other than 0.


**Edge** **Threshold** determines how sensitive the filter is to differences between pixels when finding edges in the source image. The affect depends on the nature of the source image.


* Warning: Edge Threshold is intended more for adjusting the look of the edges than for animation. Some images change dramatically when Edge Threshold is animated.


**Edge Pre Blur** blurs the source image before edge detection. This parameter softens the image’s edges and reduces their intensity.


**Edge Post Blur** blurs the edge light after the edges are computed. You can use Edge Post Blur to create glowing edges and flare effects.


**Post Blur Quality** determines the quality of the Post Blur. *Pyramid* is the fastest option and is generally adequate. It produces a blur similar in quality to the Pyramid Blur filter. *Pyramid* *Smoother* produces a better quality pyramid blur and increases rendering times slightly. The remaining choices, *Gaussian Low, Gaussian Medium, Gaussian High, Gaussian Higher*, and *Gaussian* *Highest* produce gaussian blurs of increasing quality. These options increase rendering times proportionately.


The **View Edges Only checkbox** lets you view the edges created by the filter in black and white. When View Edges Only is on, the filter’s output is determined only by the edge controls. View Edges Only is useful to create a complex effect involving edge lighting.


**Edge** **Color** sets the edge light color.


The **Edge** **Color** **Mode** **menu** controls the interaction between the Edge Color and the Light Color. If *Ignore* is chosen, the Light Color overrides the Edge Color. If *Mix* is chosen, the Edge Light Color is mixed with the Light Color. If *Prefer* is chosen, the Light Color fades away where the Edge Color is intense.


 


**Common Parameter Group**


The Common parameters offer more options for adjusting the filter. Use these parameters to control the mixing of ambient and applied light and/or to create gel or matte effects.


The **Apply Mode menu** determines how the filter composites the applied light with the image.  For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** controls the mix of the specified Apply Mode with the *Normal* apply mode. If the Apply Mode is Normal, Apply Mix has no affect. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


If the **Shadow Transparent checkbox** is selected, unlit regions of the image are transparent. The Gel-Matte Layer selects any layer in the composition to use as either a gel or a matte. The Gel-Matte menu determines how the Gel-Matte layer is used.


* The *Gel and Matte* options use the Gel-Matte layer for color information in creating either a gel or matte, respectively.
* The *Luma* *Gel* and *Luma* *Matte* options scale down the applied light by the luminance values in the Gel-Matte layer. *Luma* *Gel* is not available in the Light sweep filter.
* If Gel-Matte is set to *None*, no gel or matte is used.


The **Light Apply Layer menu** allows you choose any layer in the composition to which the light is applied. This enables you to apply multiple lights to a layer with low ambient light.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

.


