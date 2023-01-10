{
"date": "2019-06-12",
"title": "BCC Linear Color Key",
"category": "BCC Key & Blend",
"link": "bcc-linear-color-key/"
}

 

|  |  |
| --- | --- |
| [![twoway.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twoway.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twoway.original.jpg) | [![twoway.keepcolor](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twoway.keepcolor.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twoway.keepcolor.jpg) |
| Source image | Filtered image |


### Overview


Linear Color Key creates a key based on the difference between the color of each pixel and the specified Key Color. The color comparison can be done in RGB or in HSL color space, and you can adjust the relative importance of each RGB channel with the RGB Weights parameters.


Linear Color Key also allows you to remove unwanted foreground objects or restore opacity to a transparent region in the foreground using the Region of Interest controls. This feature is useful when the foreground has an isolated region that is similar in color to the background (for example, a person wearing a tie of the same color as the background).


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


The **Output menu** determines how the output of the filter is rendered.


* In *Composite* mode, the filter uses the new alpha channel, making portions of the image partially or completely transparent when composited over the new background.
* *Composite* – *Inv* *Alpha* inverts the new alpha channel.
* *Show Matte* displays the matte instead of the composite, allowing you to view the matte as you make adjustments.
* *Show Invert Matte* displays the inverted matte.
* *Gel* allows you to create artistic gel effects using an alpha channel generated from the image. A Gel effect applies a transparent solid color, similar to a theatrical gel, to the source image. The alpha channel created by the filter is used to composite the chosen Gel Color over the background.
* *Gel* – *Inv* *Alpha* inverts the new alpha channel and uses it to composite the Gel Color over the background.
* *Keep Color* is useful only when the image already has an alpha channel. It is used to restore opacity to regions that have been made transparent by a previous keying filter.
* *Mask* *Transparent* *Pixels* allows you to view the source image with a 50% red mask over the pixels that will be transparent.


The **Color Matching menu** determines what type of color matching the filter uses to create the matte. At the default setting, *RGB*, the filter performs color matching based on the RGB color values in each pixel. The other Color Matching options match colors in the HSL color space. They compute the Hue, Saturation, and Lightness of each pixel, and compare them with the HSL values of the Key Color. HSL matches Hue, Saturation, and Lightness. Chroma matches Hue and Saturation and ignores Lightness. Hue matches only the Hue value.


* Note: The HSL color matching options take considerably more time to render than RGB color matching. Chroma and Hue matching often key out pixels that look quite different from the key color, because in these modes the filter ignores one or two color channels in each pixel. The best approach to a difficult keying problem is to try RGB color matching; then try HSL matching if RGB matching does not achieve the desired results. You can also combine multiple linear keys and define a different Region of Interest around each area to key.


**Key Color** and **Similarity** determine which portion of color space (the Key Color Region) is affected by the key. Key Color sets the color to key out. Similarity controls range of values similar to the Key Color that key out. If Similarity is 0, the filter only keys out pixels that exactly match the key color. Increasing Similarity keys out a wider range of colors.


**Red Weight, Green Weight**, and **Blue Weight** control the relative importance of each channel in RGB color matching. Increasing a channel’s weight makes the filter more sensitive to differences between the corresponding channel value in each pixel and the key color and less sensitive to differences in the other channels. This narrows the range of colors that key out in the channel whose weight is increased, and widens the range in the other channels.


Softness and Post Blur create transitions between transparent and opaque regions in the matte. A completely hard matte (with all pixels fully transparent or fully opaque) often appears sharp and unrealistic. Softness and Post Blur soften the matte by creating partially transparent pixels.


**Softness** softens the matte by increasing transparency in pixels that are close to the borders of the key color region. You can use Softness to soften the matte edges so the colors of the image change gradually from point to point, or to create artistic blended mattes in which the image gradually becomes transparent as you move into the Key Region.




|  |  |
| --- | --- |
| [![linearcolor.matte1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte1_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte1_.jpg) | [![linearcolor.matte2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte2_1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte2_1.jpg) |
| Softness=0 | Softness=40 |


**Post Blur** blurs the alpha channel after the matte is created. Use Post Blur to soften the edges in the matte for sources with high-contrast edges.




|  |  |
| --- | --- |
| [![linearcolor.matte2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte2_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte2_.jpg) | [![linearcolor.matte3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte3_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte3_.jpg) |
| Post Blur=0 | Post Blur=40 |


* Note: Softness does not increase rendering time, but Post Blur increases it substantially.


**Gamma** controls the value of the middle tones while leaving the white and black of the image unaltered. The **Gamma** parameter controls a gamma adjustment that is made to the derived alpha. Increasing gamma spreads the alpha so that the matte is more opaque.


**Alpha Offset** controls an offset that is added to the output alpha. You can create a transition by animating this from –255 to 255. At a value of -255, the entire image keys out. At a value of 255, the entire image is opaque.


**Choke** applies a choke to the matte. Positive Choke values tighten the matte around the foreground image, while negative values pull the matte away from the edges of the foreground image.


 


**Region Parameter Group**


The linear keys allow you to define a Region of Interest. The key creates a matte only for pixels that lie within this region.


The **Region of Interest** setting determines the shape of the region in which the filter is applied. You can apply the filter to an area *Inside Rectangle, Outside Rectangular, Inside Oval, Outside Oval*, or choose *All* to filter all pixels in the image, regardless of their location.


**Region Top-Left** and **Region Bot-Right** control the size and location of the region of interest. If Region of Interest is set to Inside or Outside Rectangle, Region Top-Left and Region Bot-Right define the upper left and bottom right corners of the rectangle. If Region of Interest is set to Inside or Outside Oval, the Region Top-Left and Region Bot-Right points define a rectangle in which the oval is inscribed.


**Outside Region** controls the processing of points outside the region. *Make* *Transparent* clears the alpha channel for these points. Use Make Transparent if you have chosen a region that includes all of the desired foreground (opaque) pixels. The *Use Existing Alpha* setting leaves these points unprocessed, and uses only the alpha information in the original image.


**Gel Color** allows you to set the color of the gel which is used to create artistic gel effects using an alpha channel generated from the image. A Gel effect applies a transparent solid color, similar to a theatrical gel, to the source image. The alpha channel created by the filter is used to composite the chosen **Gel Color** over the background. You can use the Alpha Offset parameter to control the opacity of the Gel color. Gel Color has no effect if the **Output menu** is set to *Gel* or *Gel-Inv Alpha*.


