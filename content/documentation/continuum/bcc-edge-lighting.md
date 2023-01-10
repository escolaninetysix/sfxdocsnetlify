{
"date": "2019-06-12",
"title": "BCC Edge Lighting",
"category": "BCC Lights",
"link": "bcc-edge-lighting/"
}

 

|  |  |
| --- | --- |
| [![composite2.sourcelayer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.sourcelayer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/composite2.sourcelayer.jpg) | [![edgelight.orginal](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/edgelight.orginal.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/edgelight.orginal.jpg) |
| Source Image | Filtered Image |


### Overview


The Edge Lighting filter finds edges based on pixel-to-pixel differences in any chosen channel in the source image or in the Edge Source Track and applies light to these edges. Highlights and Shadows are independently computed and can be blurred and applied separately to the source.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


* Warning: It is important to view at least some of your preview at full size. The effects of an edge filter can vary with the image scale, particularly if you apply Edge Lighting to a detailed photographic source image.


The **Edge Layer menu** allows you to choose any clip or layer in the composition to use to generate edges.


The **Edges From menu** determines which source channel is used to compute edges. You can create edges from the *Alpha, Luma, Red, Green* or *Blue* channels. *PixelChooser* lets you create edges based on the PixelChooser settings.


Edge Lighting uses a synthetic light source to light the edges. The position of this light source is controlled by the **Light Direction** and Light Elevation settings. Light Direction controls the direction that the light comes from, and **Light Elevation** controls the elevation of the light source above the image plane. Increasing Light Elevation makes the edge lighting less directional. At a Light Elevation setting of 100, Light Direction has no affect.


 


**Highlights Parameter Group**


The Highlights parameters control the appearance of the highlights on the edges.


**Highlight** **Intensity** controls the intensity of the highlights.


**Highlight Color** sets the color of the highlights.


**Highlight** **Post Blur** blurs the highlights after they are applied to the source.


The **Apply Mode menu** controls how the filtered image is composited with the source image. For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Highlight Apply Mix** controls the mix of the specified Highlight Apply Mode with the *Normal* apply mode. If the Highlight Apply Mode is Normal, Highlight Apply Mix has no affect. If Highlight Apply Mix is 0, Highlight Apply Mode has no affect. Increase Highlight Apply Mix to blend the Highlight Apply Mode setting with the Normal apply mode.


Increasing **Background Follow** causes the ambient light and the shadows to fall off in regions of the image that are lit by highlights. Use Background Follow if you want the Highlight Color to replace the ambient light and shadows.


* Note: You can add highlights to 2D text to create a subtle 3D appearance. To create an effect similar to the following example, increase the Intensity of the highlights and shadows, then soften the edge lighting by slightly increasing Post Blur.




|  |  |
| --- | --- |
| [![edgelight.text1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/edgelight.text1_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/edgelight.text1_.jpg) | [![edgelight.text2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/edgelight.text2_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/edgelight.text2_.jpg) |
| Original text | Text with Edge Lighting |


 


**Shadows Parameters Group**


The Shadows parameters control the appearance of the shadows on the edges.


**Shadow Intensity** controls the intensity of the shadows.


**Shadow Color** sets the color of the shadows.


**Shadow Post Blur** blurs the shadows after they are applied to the source.


The **Apply Mode menu** controls how the filtered image is composited with the source image. For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Shadow Apply Mix** controls the mix of the specified Shadow Apply Mode with the *Normal* apply mode. If the Shadow Apply Mode is Normal, Shadow Apply Mix has no affect. If Shadow Apply Mix is 0, Shadow Apply Mode has no affect. Increase Shadow Apply Mix to blend the Shadow Apply Mode setting with the Normal apply mode.


 


**Common Parameter Group**


The Common parameters offer a variety of options for adjusting the filter, allowing you to finetune the appearance of the effect.


**Pre Blur** blurs the source image before the edges are computed.


**Threshold** determines how sensitive the filter is to differences between pixels when finding edges in the source image. The effect of this setting depends on the nature of the source image. Changes to the Threshold value affect both Shadows and Highlights.


* Note: Threshold is intended more for adjusting the look of the edges than for animation. Some images change dramatically when Threshold is animated.


The filter eliminates edges whose intensity is lower than the **Edge Floor** value. Increase Edge Floor to eliminate stray edges from the output if you want to enhance or light only the strongest edges in the image. Adjustments to the Edge Floor affect both Shadows and Highlights.


**Ambient Light** adjusts the total amount of diffuse light on the image. The default setting of 100 does not add or subtract ambient light from the source image. Decreasing this setting makes the image darker before the other light is applied. Ambient light illuminates or darkens the image evenly, and is unaffected by any other lighting parameters.


The **Post Blur Quality** **menu** adjusts the quality of the Post Blur. *Pyramid* is the fastest option and is generally adequate. It produces a blur similar in quality to the Pyramid Blur filter. *Pyramid Smoother* produces a better quality pyramid blur and increases rendering times slightly. The remaining choices, *Gaussian Low, Gaussian Medium, Gaussian High, Gaussian Higher*, and *Gaussian* *Highest* produce gaussian blurs of increasing quality. These options increase rendering times proportionately.


The **Alpha From menu** determines how the filter creates the output alpha channel. When Alpha From is set to *Source*, the filter uses the input alpha channel. The other options allow you to use only the *Highlight* edges or a combination of both the *Source* *and* *Highlight* information or of the *Highlight* and *Shadow* edges. *Full* creates a full on (completely opaque) alpha channel, which is helpful if you want to use the PixelChooser with this filter.


The **View menu** is a preview control. Choose Output to view the filter’s output. Choose *Highlights* or *Shadows* to view either set of edges in black and white. Choose Both to see a preview of both the highlights and shadows. Remember to switch back to Output before rendering.


Many hosts process media one field at a time which can cause flickering to occur on filtered effects. The **Reduce Flicker menu** allows you to reduce flicker in the rendered image. The only way to evaluate a deflicker setting is to render and play back the effect on an NTSC monitor. Choose from the following options in the Reduce Flicker menu.


* *1-2-1* mixes each pixel with the pixels above and below it, with the input pixel getting twice the weight as the ones above and below. For After Effects users, this works the same as applying the AE Reduce Flicker filter at a setting of 0.5.
* *2-3-2* provides more softening than 1-2-1.
* *1-1-1* provides the most softening for effects that still contain flicker with the above options.
* *Off* is the default. If Off is chosen, no deflickering will be done.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 