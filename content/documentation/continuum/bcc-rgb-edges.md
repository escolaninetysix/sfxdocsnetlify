{
"date": "2019-06-12",
"title": "BCC RGB Edges",
"category": "BCC Stylize",
"link": "bcc-rgb-edges/"
}

 

|  |  |
| --- | --- |
| [![mosaic.source](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mosaic.source.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mosaic.source.jpg) | [![rgbedges.original1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbedges.original1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbedges.original1.jpg) |
| Source image | Filtered image |


### Overview


RGB Edges finds edges in each RGB channel independently, creates a new RGB image from these edges, and applies the new image to the source using the chosen Apply Mode and Apply Mix.


The results obtained with the edge filters vary depending on the media to which the filter is applied and the exact settings used. Because they create edge effects by emphasizing differences between adjacent pixels, edge filters are very sensitive to parameter adjustments. Often a small change in a parameter setting can dramatically affect the result.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


* Warning: It is important to preview at least some of your effect at full size. The affects of an edge filter vary with scale, particularly when using a detailed photographic source.


The Light parameters determine the location of the light source used to light the edges in the image, eliminate weak edges, soften the edges, choose which portion of the edges to enhance, and invert the edge output.


The **Enhance menu** setting determines which portion of the edges is enhanced. Choose *Highlight, Shadow, or Both*.


The **Invert RGB checkbox** inverts the altered edges before they are applied to the source.


The Light Direction and Light Elevation controls set the location of the light source used to light the edges in the image.  




**Light Direction** controls the direction that the light comes from.


**Light Elevation** controls the elevation of the light source above the image plane. Increasing Elevation makes edge detection less directional. At an Elevation of 100, the Light Direction setting has no affect.


 


**Intensity Parameters**


The **Lock Intensity to Red checkbox** locks the Green and Blue Intensity values to the Red Intensity setting. When this option is selected, adjusting Green and/or Blue Intensity has no affect. Deselect this option to adjust the three Intensity values independently.


**Red Intensity, Green Intensity,** and **Blue Intensity** control the intensity of the edges in each respective color channel.




|  |  |  |
| --- | --- | --- |
| [![rgbedges.original2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbedges.original2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbedges.original2.jpg) | [![rgbedges.threshold10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbedges.threshold10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbedges.threshold10.jpg) | [![rgbedges.threshold15](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbedges.threshold15.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbedges.threshold15.jpg) |
| Red Intensity=0 | Red Intensity=10 | Red Intensity=15 |


 


**Threshold Parameters**


The **Lock Threshold to Red checkbox** locks the Green and Blue Threshold values to the Red Threshold setting. When this option is selected, adjusting Green and/or Blue Threshold has no affect. Deselect this option to adjust the three Threshold values independently.


**Red Threshold, Green Threshold**, and **Blue Threshold** determine how sensitive the filter is to differences between pixels when finding edges in the source image. The effect of these settings depends on the nature of the source image.


* Warning: The Threshold parameters are intended more for adjusting the look of the edges than for animation. Some images change dramatically when the Thresholds are animated


The filter eliminates edges whose intensity is lower than the **Edge Floor** value. Use the Edge Floor control to eliminate stray edges from the output if you want to process only the strongest edges in the image.


**Pre Blur** blurs the source image before the edges are computed, making the edges softer.


The **Lock Post Blur to Red checkbox** locks the Green and Blue Post Blur values to the Red Post Blur setting. When this option is selected, adjusting Green and/or Blue Post Blur has no affect. Deselect this option to adjust the three Post Blur values independently.


 


**Post Blur Parameters**


Use the Post Blur parameters to blur each of the output color channels before they are applied to the source.


**Red Post Blur, Green Post Blur**, and **Blue Post Blur** control the amount of Gaussian blur the filter applies to each of the respective color channels before the edges are applied to the source.


The **Post Blur Quality** setting controls the quality of the Post Blur in all three channels. *Pyramid* is the fastest option and is generally adequate. It produces a blur similar in quality to the Pyramid Blur filter. *Pyramid Smoother* produces a better quality pyramid blur and increases rendering times slightly. The remaining choices, *Gaussian Low, Gaussian Medium, Gaussian High, Gaussian Higher, and Gaussian Highest* produce gaussian blurs of increasing quality. These options increase rendering times proportionately.


If you select the **Make Alpha From Edges checkbox**, the filter derives the image’s alpha channel from the sum of the RGB channels in the edge output.


Many hosts process media one field at a time which can cause flickering to occur on filtered effects. The **Reduce Flicker menu** allows you to reduce flicker in the rendered image. The only way to evaluate a deflicker setting is to render and play back the effect on an NTSC monitor. Choose from the following options in the Reduce Flicker menu.


* *1-2-1* mixes each pixel with the pixels above and below it, with the input pixel getting twice the weight as the ones above and below. For After Effects users, this works the same as applying the AE Reduce Flicker filter at a setting of 0.5.
* *2-3-2* provides more softening than 1-2-1.
* *1-1-1* provides the most softening for effects that still contain flicker with the above options.
* *Off* is the default. If Off is chosen, no deflickering will be done.


The **Apply Mode menu** controls how the filtered image is composited with the source image.  For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** controls the mix of the specified Apply Mode with the Normal apply mode. If the Apply Mode is Normal, Apply Mix has no affect and the parameter does not appear. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 