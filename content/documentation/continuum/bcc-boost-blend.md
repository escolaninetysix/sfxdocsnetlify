{
"date": "2019-06-12",
"title": "BCC Boost Blend",
"category": "BCC Obsolete",
"link": "bcc-boost-blend/"
}

 

|  |  |
| --- | --- |
| [![boost.blend.source](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.blend_.source.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.blend_.source.jpg) | [![boost.blend.blend](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.blend_.blend_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.blend_.blend_.jpg) |
| Source Layer | Blend Layer |


### Overview


Boost Blend is a compositing filter that blends two independent layers in a composition and adjusts contrast in the blended pixels. Unlike most transfer modes, Boost Blend adjusts the mix only where the source and blend layers are different. Boost Blend is especially useful when you composite an image over itself and do not want the transfer mode to affect areas where the blended pixels are identical to the source pixels. This filter also contains a PixelChooser which provides additional control over the selection of pixels to adjust.


### 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

* *Vegas Workflow Tip:*  To use the Light Wrap feature in Vegas you must apply the filter as a “Custom Composite Mode” (also known as a “2 to 1 Transform” effect).  For more information on working with Custom Composite Modes in Vegas, [Click Here](/documentation/continuum/working-in-vegas-pro/ "Working in Sony Vegas").


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

The **Blend Layer menu** chooses any clip or layer in the composition to blend with the source layer (the clip or layer to which Boost Blend is applied). The illustrations below show the source layer and the blend layer used in the examples in this section.


**Mix Back** controls the opacity of the source and blend layers in the composite image. Increasing this value increases the opacity of the blend layer. At a Mix Back value of 100, the blend layer is completely opaque and the source layer is completely transparent. Decreasing Mix Back decreases the opacity of the blend layer. At a value of –100, the blend layer is completely transparent and the source layer is completely opaque.




|  |  |  |
| --- | --- | --- |
| [![boost.blend.mixback.neg50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.blend_.mixback.neg50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.blend_.mixback.neg50.jpg) | [![boost.blend.mixback.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.blend_.mixback.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.blend_.mixback.0.jpg) | [![boost.blend.mixback.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.blend_.mixback.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.blend_.mixback.50.jpg) |
| Mix Back= -60 | Mix Back=0 | Mix Back=60 |


* Warning: Mix Back is not affected by the PixelChooser.


The **Mode menu** controls how the layers blend together in the composite. Each option uses a slightly different algorithm to adjust the contrast in the blended output, and some algorithms use **Exponent** and **Exponent Offset** to adjust the output.


* Note: The differences between the various Boost Modes can be very subtle or quite pronounced, depending on your footage and the Exponent and Exponent Offset settings. Try each Boost Mode setting to see which works best.


* *Exponential* blends the layers by subtracting an offset value from each pixel’s color channels, exponentiating the value, adding the results, and then adding back the offset. When you use this mode, Exponent controls the exponent that is used in the calculations, and Exponent Offset sets the offset value that is subtracted. Adjusting Exponent and Exponent Offset using the Exponential mode can produce extreme posterization effects, as shown in the example at right.


*[![boost.mode.exponent](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.mode_.exponent.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.mode_.exponent.jpg)*


* *Equal Power Pos*. is an algorithm modeled on the audio concept of an equal power crossfade. This algorithm emphasizes the light pixels in the blend, which can be useful when blending dark images. Exponent and Exponent Offset have no effect when Equal Power Pos. is selected.


*[![boost.mode.equal.pos](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.mode_.equal_.pos_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.mode_.equal_.pos_.jpg)*


* *Equal Power Neg*. is similar to Equal Power Pos., but it uses the difference between the pixels’ channel values and 255 in computing the output contrast. This algorithm emphasizes the dark pixels in the blend, which can be useful when blending lighter images. Exponent and Exponent Offset have no effect when Equal Power Neg. is selected.


[![boost.mode.equal.neg](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.mode_.equal_.neg_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.mode_.equal_.neg_.jpg)


* *Bias* increases the contrast of pixels whose color channel values are furthest from the Exponent Offset value. The output is left unchanged if Exponent set to 0.




|  |
| --- |
| [![boost.mode.bias](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.mode_.bias_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.mode_.bias_.jpg) |


* *Off* blends the two images equally by making them both 50% opaque, and does not affect the contrast of the blended output. This mode is useful for comparing the results of the other algorithms to an effect in which the contrast is unchanged.




|  |
| --- |
| [![boost.mode.off](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.mode_.off_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/boost.mode_.off_.jpg) |


**Boost Mix** mixes the selected Boost Mode with the *Off* Boost Mode (see the description of the Off Boost Mode in the preceding section). When Boost Mix is set to 100, the selected Boost Mode and the Exponent and Exponent Offset settings are used. Setting Boost Mix to 0 produces an equal blend of the source and blend layers with no contrast adjustments. Intermediate values produce varying degrees of contrast adjustment in the blended output.


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 