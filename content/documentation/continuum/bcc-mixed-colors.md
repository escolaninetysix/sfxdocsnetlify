{
"date": "2019-06-12",
"title": "BCC Mixed Colors",
"category": "BCC Textures",
"link": "bcc-mixed-colors/"
}

 

|  |
| --- |
| [![Color map original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Color-map-original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Color-map-original.jpg) |


### Overview


Mixed Colors produces a color noise map.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Offset XY** controls the appearance of the pattern at a given point by moving through the procedural noise from which the effect is generated along the X and Y axis, respectively.


**Scale X** and **Scale** **Y** determine the scale of the pattern along the X and Y axis. Select **Lock to Scale X checkbox** to keep these values in proportion, or deselect this option to adjust Scale X and Y independently.




|  |  |  |
| --- | --- | --- |
| [![mixedcolors.scalexy.10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.scalexy.10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.scalexy.10.jpg) | [![mixedcolors.scalexy.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.scalexy.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.scalexy.50.jpg) | [![mixedcolors.scalexy.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.scalexy.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.scalexy.100.jpg) |
| Scale X and Y=10 | Scale X and Y=50 | Scale X and Y=100 |


**Rotation** spins the pattern around the Z axis.


**Brightness** adjusts the brightness of the pattern. Increasing the Brightness setting pushes colors toward white, and decreasing the setting pushes colors toward black.


**Contrast** adjusts the contrast of the image. Increasing the Contrast setting pushes colors toward pure colors, and decreasing the setting pushes colors toward 50% gray.


**Red Balance, Green Balance**, and **Blue Balance** adjust the relative intensity of each respective color channel in the texture.


**Detail** determines how jagged the boundaries between the colors in the pattern are. Low values produce smooth curvilinear boundaries. High values produce rougher, more intricate boundaries.




|  |  |  |
| --- | --- | --- |
| [![mixedcolors.detail.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.detail.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.detail.0.jpg) | [![mixedcolors.detail.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.detail.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.detail.50.jpg) | [![mixedcolors.detail.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.detail.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.detail.100.jpg) |
| Detail=10 | Detail=50 | Detail=100 |


**Coarseness** controls the number of distinct color patches that appear in the random color pattern. Higher values create a greater number of smaller patches, while lower values create fewer patches that are larger in size.




|  |  |
| --- | --- |
| [![mixedcolors.coarseness.10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.coarseness.10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.coarseness.10.jpg) | [![mixedcolors.coarseness.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.coarseness.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mixedcolors.coarseness.100.jpg) |
| Coarseness=10 | Coarseness=100 |


**Mutation** controls the pattern of the colors at a given point by moving through the procedural noise from which the effect is generated along the Z axis.


Select the **Source Alpha checkbox** to use the source alpha channel as a mask; the texture appears only in opaque regions. When deselected, the source’s alpha channel is ignored.


**Opacity** adjusts the opacity of the simulated texture.


The **Apply Mode menu** controls how the texture is composited over the source image.  For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** controls the mix of the specified Apply Mode with the Normal apply mode. If the Apply Mode is *Normal*, Apply Mix has no affect. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


