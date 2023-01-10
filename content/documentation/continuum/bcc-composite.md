{
"date": "2019-06-12",
"title": "BCC Composite",
"category": "BCC Key & Blend",
"link": "bcc-composite/"
}

 

|  |  |
| --- | --- |
| [![composite2.sourcelayer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.sourcelayer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.sourcelayer.jpg) | [![composite2.mixlayer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.mixlayer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.mixlayer.jpg) |
| Source layer | Mix layer |




|  |  |
| --- | --- |
| [![composite2.mixinfront.40](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.mixinfront.40.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.mixinfront.40.jpg) | [![composite2.mixinfront.60](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.mixinfront.60.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.mixinfront.60.jpg) |
| Mix in Front=40 | Mix in Front=60 |


### Overview


Composite offers a variety of options for compositing one layer over another. This filter also offers a PixelChooser for greater creative control.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

* *Vegas Pro Workflow Tip:*  To use the Light Wrap feature in Vegas Pro you must apply the filter in Custom Composite Mode.  For more information on working with Custom Composite Modes in Vegas, [Click Here](/documentation/continuum/working-in-vegas-pro/ "Working in Sony Vegas").![Vegas Custom Composite](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/03/Vegas1.png)Using Custom Composites in Vegas Pro


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

The **Mix Layer menu** chooses any clip or layer in the composition to composite with the source layer.


When the **Apply Geometrics to Mix Layer** checkbox is off (the default), the Mix Layer is resized to the size of the source image. When this checkbox is enabled, the controls in the Mix Layer Geometrics group are applied to the mix layer before it is composited.


One application for using Mix Layer Geometrics is a pan-and-scan effect on a large still image. You can use the Geometrics controls instead of precomposing and applying the filter to the precomp.


**Mix Layer Geometrics Parameter Group**


If the source image is opaque, selecting the **Source Opaque checkbox** can speed rendering and preview times. If your source is partially transparent, deselect this option for best results.


**Scale X** and **Scale Y** adjust the size of the source along the X and Y axis respectively. These parameters are scaled as percentages of the source’s original width or height. Thus, a Scale X setting of 200 produces a source twice as wide as the original source. Select the Lock to **Scale X checkbox** to keep the Scale X and Y values in proportion.


**Position XY** sets the X and Y coordinates of the center point of the source.


**Position Z** adjusts the apparent depth of the source. Decreasing negative values move the source closer to the viewer, while increasing positive values move the source farther away.


**Tumble, Spin,** and **Rotate** move the source around the X, Y, and Z axis, respectively. Tumble, Spin, and Rotate can be animated over values greater than 360° in order to make the source complete more than one full revolution.


The Crop controls crop the edges of the Mix Layer image. **The Crop Top-Left** and **Crop Bot- Right** set the upper left and lower right corners of a rectangle that defines the borders of the cropped image.


**Blend** softens the edges of the image by reducing their opacity.


**The Apply Mode menu** controls how the source and Mix Layers are composited. This filter is most useful with Apply Modes other than *Normal*.




|  |  |  |
| --- | --- | --- |
| [![composite2.normal](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.normal.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.normal.jpg) | [![composite2.scalescreen](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.scalescreen.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.scalescreen.jpg) | [![composite2.lightness](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.lightness.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.lightness.jpg) |
| Normal | Scale Screen | Lightness |


For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** blends the Apply Mode setting with the **Mix From menu** setting. The resulting mixed mode is used to composite the Mix Layer over the original source media. For example, if Apply Mode is set to *Lighten* and Mix From is set to *Normal*, then Apply Mix blends the Lighten and Normal apply modes. In this case, an Apply Mix setting of 0 uses the Normal apply mode, and an Apply Mix setting of 100 uses the Lighten apply mode. An Apply Mix setting of 50 blends the two apply modes equally.


You can use Apply Mix to soften the effect of a given apply mode, or to animate from one apply mode to another over time.


If the **Enable Bright/Contrast checkbox** is enabled, the following Brightness and Contrast parameters are active.


**Brightness** adjusts the brightness of the composite image. Increasing positive values lighten the composite, while decreasing negative values darken the composite.




|  |  |  |
| --- | --- | --- |
| [![composite2.brightness.neg25](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.brightness.neg25.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.brightness.neg25.jpg) | [![composite2.brightness.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.brightness.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.brightness.0.jpg) | [![composite2.brightness.25](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.brightness.25.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.brightness.25.jpg) |
| Brightness= -25 | Brightness=0 | Brightness=25 |


**Contrast** adjusts the contrast in the composite image. Increasing this value increases contrast, while decreasing this value decreases contrast.




|  |  |  |
| --- | --- | --- |
| [![composite2.contrast.neg50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.contrast.neg50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.contrast.neg50.jpg) | [![composite2.brightness.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.brightness.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.brightness.0.jpg) | [![composite2.contrast.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.contrast.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.contrast.50.jpg) |
| Contrast= -25 | Contrast=0 | Contrast=25 |


**Levels/Gamma Parameter Group**


The parameters in the group function the same as they do in the Levels/Gamma filter. See the Levels/Gamma filter for illustrations of the following parameters.


If the **Enable Levels/Gamma checkbox** is enabled, the output will squeeze into the legal color range.


**Input Black** sets the channel values of the input image that are treated as pure black by the filter. All pixels whose value is lower than the Input Black value become the Output Black color. For example, if Input Black is set to 50, all pixels with a value of 50 or less are output to a value of 0. The remaining values (50-255) are remapped to produce a smooth gradient from black to white.


**Input White** sets the channel values of the input image that are treated as pure white by the filter. All pixels whose value is higher than the Input White value become the Output White color. For example, if Input White is set to 200, all pixels with a value of 200 or more are output to a value of 255. The remaining values (0-200) are remapped to produce a smooth gradient from black to white.


**Gamma** controls the slope of the curve used to convert from the input color values to output values in pixels brighter than Input Black and darker than Input White. Increasing Gamma from the default of 100 lightens the image and decreases contrast, while decreasing Gamma darkens the image and increases contrast.


**Output Black** sets the channel value at which black source pixels are output. For example, if Output Black is set to 15, all pixels whose values are 0-15 are output to a value of 15. If you are working with broadcast material, you may need to raise the Output Black value in order to avoid NTSC-illegal black levels.


**Output White** sets the channel value at which white source pixels are output. For example, if Output White is set to 240, all pixels whose values are 240-255 are output to a value of 240. If you are working with broadcast material, you may need to decrease the Output White value to avoid NTSC-illegal white levels.


**Mix in Front** mixes the Mix Layer in front of the source layer. Increasing this value increases the opacity of the Mix Layer.




|  |  |
| --- | --- |
| [![composite2.mixinfront.40](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.mixinfront.40.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.mixinfront.40.jpg) | [![composite2.mixinfront.60](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.mixinfront.60.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.mixinfront.60.jpg) |
| Mix in Front=40 | Mix in Front=60 |


**Mix Behind** mixes the chosen Mix Layer behind the source layer. Changes to this setting are only visible if the source layer is partially transparent. Increasing this value increases the opacity of the Mix Layer.


If both Mix Behind and Mix in Front are used, the Mix Layer is first composited behind the source. The Apply Mode, Apply Mix and Apply Mix From settings are then used to composite the Mix Layer over the initial composite of the source and the Mix Layer.


The **Alpha menu** setting determines which information is used to create the output alpha.


* *Original* uses the source layer’s alpha as the output alpha.
* *Composite* creates a composite alpha channel in which pixels that are opaque in either the source or the Mix Layer are opaque.
* *Mix* *Layer* uses the Mix Layer’s alpha as the output alpha.


The Mix Back parameters allow you to quickly create transitions between the source layer, composite image, and Mix Layer without having to adjust multiple parameters.


When the **Enable Mix Back checkbox** is selected, the Mix Back and Mix Back From settings are used. When Enable Mix Back is deselected, the Mix Back parameters have no affect.


The **Mix Back menu** determines which pixels are mixed.


When *Slider* is selected, all pixels are affected, and **Mix Back** determines how the pixels in the source and Mix Layers are composited. If Mix Back is –100, the source layer is completely opaque. As Mix Back approaches 0, the composite image becomes increasingly opaque. At 0, the composite image is completely opaque. Increasing Mix Back above 0 makes the Mix Layer increasingly opaque, and at a value of 100, the Mix Layer is completely opaque.




|  |  |  |
| --- | --- | --- |
| [![composite.slider.neg100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.slider.neg100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.slider.neg100.jpg) | [![composite.slider.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.slider.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.slider.0.jpg) | [![composite.slider.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.slider.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.slider.100.jpg) |
| Mix Back= -100 | Mix Back=0 | Mix back=100 |


When *PixelChooser* is selected, pixels are mixed according to the selection in the PixelChooser. Pixels that are fully selected in the PixelChooser are mixed according to the **Mix Back Max** setting. Pixels that are fully unselected in the PixelChooser are mixed according to the **Mix Back Min** setting. Pixels that are partially selected are mixed to intermediate values between the Mix Back Min and Mix Back Max settings. Mix Back Min and Mix Back Max each work in the same way as the Mix Back parameter used when Mix Back From is set to Slider. If the Mix Back Min and Mix Back Max settings are the same, then the PixelChooser selection has no effect.


In the examples below, the PixelChooser selects pixels inside an oval-shaped region, and Mix Back Min is –100.




|  |  |  |
| --- | --- | --- |
| [![composite.slider.neg100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.slider.neg100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.slider.neg100.jpg) | [![composite.pc.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.pc_.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.pc_.0.jpg) | [![composite.pc.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.pc_.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.pc_.100.jpg) |
| Mix Back Max= -100 | Mix Back Max=0 | Mix Back Max=100 |


* When *Original Alpha* is selected, the alpha channel in the source layer is used to determine which pixels are selected. When Original Alpha is selected, the source’s alpha channel is not used for compositing–that is, the source behaves like a fully opaque layer. Pixels that are fully opaque in the source alpha are mixed according to the **Mix Back Max** setting. Pixels that are fully transparent in the source alpha are mixed according the **Mix Back Min** setting. Pixels that are partially transparent in the source alpha are mixed to an intermediate value. Original Alpha is designed to allow you to create mattes for the Mix Back parameters by altering the source layer’s alpha channel.




|  |  |  |
| --- | --- | --- |
| [![composite.alpha.neg100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.alpha_.neg100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.alpha_.neg100.jpg) | [![composite.alpha.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.alpha_.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.alpha_.0.jpg) | [![composite.alpha.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.alpha_.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite.alpha_.100.jpg) |
| Mix Back Max= -100 | Mix Back Max=0 | Mix Back Max=100 |


The Mix Back, Mix Back Min, and Mix Back Max values are scaled by the Mix in Front value. Therefore, if Mix in Front is at a value less than 100, the Mix Layer never reaches full opacity, even if Mix Back or Mix Back Max is at 100. The range of opacities also varies according to the Apply Mode settings.


The Mix Back parameters provide the Composite filter with a great deal of creative potential.


* The PixelChooser setting in the Mix Back From menu offers greater control over the appearance of a composite of two opaque layers. You can use the PixelChooser parameters to choose pixels in the source layer to control the mix of pixels.
* Try using transfer modes and brightness and contrast adjustments to further enhance a Composite effect.
* You can animate Mix Back Min and Mix Back Max to create a transition from the source layer, to a composite effect, and then to the Mix Layer.


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 