{
"date": "2019-06-12",
"title": "BCC Veined Marble",
"category": "BCC Textures",
"link": "bcc-veined-marble/"
}

 

|  |
| --- |
| [![veined.detail.90](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.detail.90.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.detail.90.jpg) |


### Overview


Veined Marble is similar to the Marble Texture Type, but produces a texture with more pronounced “veins” and offers more controls for customizing the effect.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Offset XY** position points control the pattern of the marble at a given point by moving through the procedural noise from which the effect is generated along the XY axis.


**Scale X** and **Scale Y** set the scale of the marble pattern along the X and Y axis respectively. Select the **Lock to Scale X checkbox** to keep these values in proportion, or deselect this option to adjust Scale X and Y independently.


The **Vein Color** controls set the color of the veins in the pattern.


**Vein Alpha** sets the alpha value for the Vein Color.


The **Background Color** controls set the color of the background of the marble pattern.


**Background Alpha** sets the alpha value for the Background Color.


**Detail** sets the resolution of the vein pattern. Lower values produce marble patterns resembling soft gradients. As Detail increases, the pattern becomes more complex and detailed.




|  |  |  |
| --- | --- | --- |
| [![veined.detail.10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.detail.10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.detail.10.jpg) | [![veined.detail.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.detail.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.detail.50.jpg) | [![veined.detail.90](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.detail.90.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.detail.90.jpg) |
| Detail=10 | Detail=50 | Detail=90 |


**Background Variation** varies the Background Color. At lower values, the background areas resemble flat patches of the Background Color. As the value increases, the background areas become more mottled as a wider variety of colors are used.




|  |  |  |
| --- | --- | --- |
| [![veined.backvariation.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.backvariation.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.backvariation.0.jpg) | [![veined.backvariation.0.5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.backvariation.0.5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.backvariation.0.5.jpg) | [![veined.backvariation.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.backvariation.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/veined.backvariation.1.jpg) |
| Background Variation=0.0 | Background Variation=0.5 | Background Variation=1.0 |


**Vein Thickness** adjusts the thickness of the veins in the marble pattern. Higher values produce thicker veins, while lower values produce narrower veins.


**Vein Color Blend** sets the contrast between the Vein and Background Colors. Increasing this value blends the Veins with the Background. Decreasing this value creates a narrower blended region.


**Mutation** controls the pattern of the marble at a given point by moving through the procedural noise from which the effect is generated along the Z axis.


**Rotation** spins the veined marble pattern around the Z axis.


Select the **Source Alpha checkbox** to use the source alpha channel as a mask for the filter, so the texture appears only in the opaque regions of the source. If this option is deselected, the source image’s alpha channel is ignored.


**Opacity** adjusts the opacity of the simulated texture.


**Apply Mode** controls how the texture is composited over the source image. For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** controls the mix of the specified Apply Mode with the *Normal* apply mode. If the Apply Mode is Normal, Apply Mix has no affect. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


 


**3D Bump Mapping Parameter Group**


3D Bump Mapping creates the appearance of three-dimensional detail on a surface.


Select the **Use Bump Map checkbox** to turn on the Bump map. If this checkbox is not selected, the other parameters have no affect.


**Light XY** positions the light source in space by moving the light parallel to the image plane along the X and Y axes.


**Light Z** positions the depth of the light source relative to the image plane. A value of 100 places the light one source width above the image plane. Light Z can be negative, which places the light behind the image plane. If Light Z is negative, the light is seen only if the object is rotated or displaced so that all or part of it is behind the light source (that is, the light source always points in toward the object, never out at the viewer).


**Light Intensity** controls the intensity of the light.


**Light Color** controls the color of the light.


**Spot X/Y:**controls set the X and Y coordinates for the point at which the Marble is positioned.


**Spot Light Angle:** sets the angle of the light. This is analogous to focusing the light. Decreasing values create a smaller, more focused light.


**Spot Light Fall Off:**controls the relative softness of the edges of the lit region. Leave Spotlight Falloff at its default setting if you prefer a soft edge, or decrease this value to harden the edges of the lit region. Spotlight Falloff removes light from the edges of the lit region. To maintain the size of the region while softening the edges, you need to increase Spotlight Angle accordingly.


**White in Specular** increases the amount of white in the specular light. Increasing this value can create a more metallic surface effect. This parameter is only useful when Specular Intensity has a value greater than 0.


**Ambient Intensity** adjusts the total amount of diffuse light on the image. The default setting of 100 does not add or subtract ambient light from the source image. Decreasing this setting makes the image darker before the other lights are applied. Ambient light illuminates or darkens the image evenly, and is unaffected by any other lighting parameters.


**Diffuse Intensity** determines the amount of non-directional diffuse light applied to the object. Increasing Diffuse Intensity brightens the object uniformly.


**Specular Intensity** simulates lighting a glossy surface from a point source, creating a small spot of intense light whose falloff can vary. Increasing this value adds reflected light to the surface.


**Shininess** controls the rate at which the Specular light falls off from the center of the lit region. A higher Shininess value creates a more concentrated highlight, simulating a shiny, highly reflective surface. A lower Shininess value spreads light more evenly throughout the lit region, simulating a rougher, less reflective surface.


**Bump Height** determines the height of the bump map used to create the texture of the bricks.


**Bump Smoothness** adjusts the amount of blur applied to the bump map. Higher values produce more blur, which tends to reduce the amount of detail and noise in the filtered image.


