{
"date": "2019-06-12",
"title": "BCC Linear Luma Key",
"category": "BCC Key & Blend",
"link": "bcc-linear-luma-key/"
}

 

|  |  |
| --- | --- |
| [![redflower.original2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/redflower.original2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/redflower.original2.jpg) | [![twoway.keepcolor](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twoway.keepcolor.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twoway.keepcolor.jpg) |
| Source image | Filtered image |


### Overview


Linear Luma Key creates a key from a single channel in the source. This type of filter is called a luma key, because the key is usually created from the image luminance, but you can also use any single RGB channel. You might want to examine the individual channels of the source and use a channel that provides more contrast between the foreground and background than the luma channel.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


The **Make Key From** menu setting determines which channel (*Luma, Red, Green*, or *Blue*) is used to create the key.


The **Output menu** determines how the output of the filter is rendered.


* In *Composite* mode, the filter uses the new alpha channel, making portions of the image partially or completely transparent when composited over the new background.
* *Composite* – *Inv* *Alpha* inverts the new alpha channel.
* *Show Matte* displays the matte instead of the composite, allowing you to view the matte as you make adjustments.
* *Show Invert Matte* displays the inverted matte.
* *Gel* allows you to create artistic gel effects using an alpha channel generated from the image. A Gel effect applies a transparent solid color, similar to a theatrical gel, to the source image. The alpha channel created by the filter is used to composite the chosen Gel Color over the background.
* *Gel* – *Inv* *Alpha* inverts the new alpha channel and uses it to composite the Gel Color over the background.
* *Keep Color* is useful only when the image already has an alpha channel. It is used to restore opacity to regions that have been made transparent by a previous keying filter.
* *Mask* *Transparent* *Pixels* allows you to view the source image with a 50% red mask over the pixels that will be transparent.




|  |  |
| --- | --- |
| [![linearluma.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearluma.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearluma.original.jpg) | [![linearluma.gel](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearluma.gel_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearluma.gel_.jpg) |
| Output=Composite | Output=Gel |


The **Key Type menu** determines how the key uses the Threshold value and the image’s color or luminance information.


* *Key Out Brighter* keys out pixels whose value is higher than the Threshold value.
* *Key Out Darker* keys out pixels whose value is lower than the Threshold value.
* *Key Out Similar* keys out pixels whose value is close to the Threshold value, within the range set by Key Similarity.
* *Key Out Dissimilar* keys out pixels whose value is not close to the Threshold value, outside of the range set by Key Similarity.




|  |  |
| --- | --- |
| [![twoway.keepcolor](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twoway.keepcolor.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twoway.keepcolor.jpg) | [![linearluma.darker](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearluma.darker.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearluma.darker.jpg) |
| Key Type=Brighter | Key Type=Darker |


**Threshold** controls the sensitivity of the key to changes in color or luminance. When Key Type (see below) is Brighter or Darker, pixels brighter or darker than the Threshold value are keyed out (made transparent), and the Key Similarity setting is ignored. When Key Type is Similar or Dissimilar, pixels whose brightness is close to the value of Threshold Level, and within (Similar) or outside of (Dissimilar) the range set by Key Similarity are keyed out. You can create soft wipes by animating Threshold.


**Similarity** is used to set a range of luminance values for which pixels are keyed out or kept in, depending on whether Similar or Dissimilar is chosen as the Key Type. The Similarity value and the Key Type can create mattes that change from opaque to transparent as the luminance changes from black to white.


**Softness** softens the matte by increasing transparency in pixels that are close to the borders of the key color region. You can use Softness to soften the matte edges so the colors of the image change gradually from point to point, or to create artistic blended mattes in which the image gradually becomes transparent as you move into the Key Region.




|  |  |
| --- | --- |
| [![linearcolor.matte1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte1_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte1_.jpg) | [![linearcolor.matte2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte2_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte2_.jpg) |
| Softness=0 | Softness=40 |


**Post Blur** blurs the alpha channel after the matte is created. Use Post Blur to soften the edges in the matte for sources with high-contrast edges.




|  |  |
| --- | --- |
| [![linearcolor.matte2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte2_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte2_.jpg) | [![linearcolor.matte3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte3_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/linearcolor.matte3_.jpg) |
| Post Blur=0 | Post Blur=40 |


* Note: Softness does not increase rendering time, but Post Blur increases it substantially.


**Gamma**controls the value of the middle tones while leaving the white and black of the image unaltered. The **Gamma** parameter controls a gamma adjustment that is made to the derived alpha. Increasing gamma spreads the alpha so that the matte is more opaque.


**Alpha Offset** controls an offset that is added to the output alpha. You can create a transition by animating this from –255 to 255. At a value of -255, the entire image keys out. At a value of 255, the entire image is opaque.


**Choke** applies a choke to the matte. Positive Choke values tighten the matte around the foreground image, while negative values pull the matte away from the edges of the foreground image.


 


**Region Parameter Group**


The linear keys allow you to define a Region of Interest. The key creates a matte only for pixels that lie within this region.


The**Region of Interest** setting determines the shape of the region in which the filter is applied. You can apply the filter to an area *Inside Rectangle, Outside Rectangular, Inside Oval, Outside Oval*, or choose *All* to filter all pixels in the image, regardless of their location.


**Region Top-Left** and **Region Bot-Right** control the size and location of the region of interest. If Region of Interest is set to Inside or Outside Rectangle, Region Top-Left and Region Bot- Right define the upper left and bottom right corners of the rectangle. If Region of Interest is set to Inside or Outside Oval, the Region Top-Left and Region Bot-Right points define a rectangle in which the oval is inscribed.


**Outside Region** controls the processing of points outside the region. *Make* *Transparent* clears the alpha channel for these points. Use Make Transparent if you have chosen a region that includes all of the desired foreground (opaque) pixels. The*Use Existing Alpha* setting leaves these points unprocessed, and uses only the alpha information in the original image.


**Gel Color** allows you to set the color of the gel which is used to create artistic gel effects using an alpha channel generated from the image. A Gel effect applies a transparent solid color, similar to a theatrical gel, to the source image. The alpha channel created by the filter is used to composite the chosen **Gel Color** over the background. You can use the Alpha Offset parameter to control the opacity of the Gel color. Gel Color has no effect if the **Output menu** is set to *Gel* or *Gel-Inv Alpha*.


