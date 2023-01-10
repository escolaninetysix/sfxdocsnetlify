{
"date": "2019-06-12",
"title": "BCC Wood Grain",
"category": "BCC Textures",
"link": "bcc-wood-grain/"
}

 

|  |
| --- |
| [![natural.wood](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/natural.wood_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/natural.wood_.jpg) |


### Overview


Wood Grain creates the appearance of a solid piece of wood.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Offset XY** position points control the pattern of the wood grain at a given point by moving through the procedural noise from which the effect is generated along the X and Y axis.


**Scale X** and **Scale Y** determine the scale of the grain pattern along the X and Y axis respectively. Select **Lock to Scale X checkbox** lock the Scale Y value to the Scale X, or deselect this option to adjust each parameter independently.




|  |  |
| --- | --- |
| [![wood.scalex.10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.scalex.10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.scalex.10.jpg) | [![wood.scalex.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.scalex.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.scalex.100.jpg) |
| Scale X=10 | Scale X=100 |


 


**Wood Color Parameter Group**


The **Wood Color** controls set the color of the lightest parts of the wood grain pattern.


**Wood Alpha** sets the alpha value for the Grain Color.


**Grain Color** sets the color of the darkest parts of the wood grain pattern.


**Grain Alpha** sets the alpha value for the Grain Color.


**Grain Scale** adjusts the scale of the rings in the grain pattern. Higher values create larger rings, while lower values create smaller rings.




|  |  |
| --- | --- |
| [![wood.ringscale.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.ringscale.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.ringscale.1.jpg) | [![wood.ringscale.25](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.ringscale.25.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.ringscale.25.jpg) |
| Grain Scale=1 | Grain Scale=25 |


**Grain Noise** adjusts the resolution of the grain pattern. Lower values create distinct, well- defined grain lines on the wood. As Grain noise increases, the pattern becomes less distinct as patches of the Wood Color begin overlapping the darker grain lines.




|  |  |
| --- | --- |
| [![wood.grainy.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.grainy.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.grainy.0.jpg) | [![wood.grainy.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.grainy.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.grainy.1.jpg) |
| Grain Noise=0 | Grain Noise=1.0 |


**Mutation** controls the pattern of the wood grain at a given point by moving through the procedural noise from which the effect is generated along the Z axis.


**Rotation** sets the angle between the grain of the wood texture and the horizontal axis.




|  |  |  |
| --- | --- | --- |
| [![wood.rotation.45](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.rotation.45.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.rotation.45.jpg) | [![wood.rotation.90](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.rotation.90.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.rotation.90.jpg) | [![wood.rotation.135](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.rotation.135.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/wood.rotation.135.jpg) |
| Rotation=135 | Rotation=90 | Rotation=45 |


Select the **Source Alpha checkbox** to use the source alpha channel as a mask for the filter, so the wood texture appears only in the opaque regions of the source. If this option is deselected, the source image’s alpha channel is ignored.


**Opacity** sets the opacity of the wood grain.


The **Apply Mode menu** controls how the texture is composited over the source image.  For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** controls the mix of the specified Apply Mode with the *Normal* apply mode. If the Apply Mode is Normal, Apply Mix has no affect. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


 


**3D Bump Mapping Parameter Group**


3D Bump Mapping is used to create the appearance of three-dimensional detail on a surface.


Select the **Use Bump Map checkbox** to turn on the Bump map. If this checkbox is not selected, the other parameters have no affect.


**Light XY** positions the light source in space by moving the light parallel to the image plane along the X and Y axes.


**Light Z** positions the depth of the light source relative to the image plane. A value of 100 places the light one source width above the image plane. Light Z can be negative, which places the light behind the image plane. If Light Z is negative, the light is seen only if the object is rotated or displaced so that all or part of it is behind the light source (that is, the light source always points in toward the object, never out at the viewer).


**Light Intensity** controls the intensity of the light.


**Light** **Color** controls the color of the light.


**White in Specular** increases the amount of white in the specular light. Increasing this value can create a more metallic surface effect. This parameter is only useful when Specular Intensity has a value greater than 0.


**Ambient Intensity** adjusts the total amount of diffuse light on the image. The default setting of 100 does not add or subtract ambient light from the source image. Decreasing this setting makes the image darker before the other lights are applied. Ambient light illuminates or darkens the image evenly, and is unaffected by any other lighting parameters.


**Diffuse Intensity** determines the amount of non-directional diffuse light applied to the object. Increasing Diffuse Intensity brightens the object uniformly.


**Specular Intensity** simulates lighting a glossy surface from a point source, creating a small spot of intense light whose falloff can vary. Increasing this value adds reflected light to the surface.


**Shininess** controls the rate at which the Specular light falls off from the center of the lit region. A higher Shininess value creates a more concentrated highlight, simulating a shiny, highly reflective surface. A lower Shininess value spreads light more evenly throughout the lit region, simulating a rougher, less reflective surface.


**Bump Height** determines the height of the bump map used to create the texture of the bricks.


**Bump Smoothness** adjusts the amount of blur applied to the bump map. Higher values produce more blur, which tends to reduce the amount of detail and noise in the filtered image.


