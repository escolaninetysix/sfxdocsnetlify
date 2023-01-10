{
"date": "2019-06-12",
"title": "BCC Emboss",
"category": "BCC Stylize",
"link": "bcc-emboss/"
}

 

|  |  |
| --- | --- |
| [![sanddunes.gray](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sanddunes.gray_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sanddunes.gray_.jpg) | [![emboss2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss2.jpg) |
| Source image | Filtered image |


### Overview


Emboss simulates the appearance of an embossed or raised image by converting the source to a solid color and lighting the edges in the source’s luma channel.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


The **Emboss** **Channel** **menu** allows you to choose a channel in the image to emboss. Choose *Alpha, Luma, Red, Green, Blue* or *PixelChooser*. If you choose PixelChooser, the region defined in the PixelChooser parameter group is embossed.


**Direction** sets the angle between the beam of light and the vertical axis.


**Intensity** controls the brightness of the effect. At a value of 0, the image is completely black. Higher values lighten the image.




|  |  |
| --- | --- |
| [![emboss.intensity.4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.intensity.4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.intensity.4.jpg) | [![emboss.intensity.8](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.intensity.8.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.intensity.8.jpg) |
| Intensity=4 | Intensity=8 |


**Pre Blur** adjusts the amount of blur applied to the image before edge detection is performed and the image is embossed. Higher values produce more blur, which tends to reduce the amount of detail and noise in the filtered image.




|  |  |
| --- | --- |
| [![emboss.preblur.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.preblur.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.preblur.0.jpg) | [![emboss.preblur.10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.preblur.10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.preblur.10.jpg) |
| Preblur=0 | Preblur=10 |


**Highlight****Color** sets the color of the highlight areas.


**Shadow** **Color** sets the color of the shadow areas.


**Highlight** **Balance** adjusts the balance of highlight and shadow areas in the effect. Increasing positive values add more highlights and brighten the image. Decreasing negative values add more shadows and darken the effect.




|  |  |  |
| --- | --- | --- |
| [![emboss.balance.n50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.balance.n50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.balance.n50.jpg) | [![emboss.balance.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.balance.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.balance.0.jpg) | [![emboss.balance.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.balance.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/emboss.balance.50.jpg) |
| Highlight Balance= -50 | Highlight Balance=0 | Highlight Balance=50 |


Many hosts process media one field at a time which can cause flickering to occur on filtered effects. The **Reduce Flicker menu** allows you to reduce flicker in the rendered image. The only way to evaluate a deflicker setting is to render and play back the effect on an NTSC monitor. Choose from the following options in the Reduce Flicker menu.


* *1-2-1* mixes each pixel with the pixels above and below it, with the input pixel getting twice the weight as the ones above and below. For After Effects users, this works the same as applying the AE Reduce Flicker filter at a setting of 0.5.
* *2-3-2* provides more softening than 1-2-1.
* *1-1-1* provides the most softening for effects that still contain flicker with the above options.
* *Off* is the default. If Off is chosen, no deflickering will be done.


The **Apply Mode menu** determines how the filter is composited over the source image.  For information on the available apply modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** controls the mix of the specified Apply Mode with the *Normal* apply mode. If the Apply Mode is Normal, Apply Mix has no affect. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


**Mix with Origina**l blends the source and filtered images.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 