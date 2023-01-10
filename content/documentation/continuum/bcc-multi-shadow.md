{
"date": "2019-06-12",
"title": "BCC Multi Shadow",
"category": "BCC Stylize",
"link": "bcc-multi-shadow/"
}

 

|  |  |
| --- | --- |
| [![bccmultishadow.before](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmultishadow.before.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmultishadow.before.jpg) | [![bccmultishadow.after](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmultishadow.after_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmultishadow.after_.jpg) |
| Source Image | Filtered Image |


### Overview


Multi Shadow is a versatile filter which you can use to composite three or more independent drop shadows over a source image.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


The **Avoid Clipping checkbox** allows you to render shadows outside the source image.


* Note: Leave the Avoid Clipping checkbox selected unless you need the output to remain at a constant size.


The **Shadows From Channel****menu** determines which source color channel is used to create the shadows and to calculate the intensities of the source pixels. Pixels with higher values in the chosen channel are considered to have higher intensities.


* *Luma, Red, Green,* and *Blue* use the corresponding color channel and multiply it by the source alpha channel.
* *Luma* *Inverse* uses the inverted luma channel.
* *Unmultiplied* *Luma* and *Alpha* use the unmodified corresponding source channels.
* *Luma Cartoon Edges* and *Alpha* *Cartoon* *Edges* find edges in the corresponding source channel, apply outlines to the edges, and use the resulting image. When Luma Cartoon Edges or Alpha Cartoon Edges is chosen, the **Source Edges** parameter group is available.
* *Luma Edge*s and *Alpha* *Edges* find edges in the corresponding source channel and use the resulting image. When Luma Cartoon Edges or Alpha Cartoon Edges is chosen, the **Source Edges** parameter group is available.




|  |  |
| --- | --- |
| [![bccms.alphaedges](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccms.alphaedges.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccms.alphaedges.jpg) | [![bccms.alphacartoonedges](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccms.alphacartoonedges.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccms.alphacartoonedges.jpg) |
| Alpha Edges | Alpha Cartoon Edges |


When the **Shadows From Channel menu** is set to *Alpha Edges, Luma Edges, Alpha Cartoon Edge* or *Luma Cartoon Edges* the **Source Edges Parameter Group** (below) becomes active.


 


**Source Edges Parameter Group**


**Cartoon Thickness** adjusts the thickness and intensity of the edges.


**Edge Pre Blur** blurs the source image before the filter searches for edges. This blur does not appear in the output; it is used only in edge detection.




|  |  |  |
| --- | --- | --- |
| [![bccms.preblur0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccms.preblur0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccms.preblur0.jpg) | [![bccms.preblur2.5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccms.preblur2.5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccms.preblur2.5.jpg) | [![bccms.preblur4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccms.preblur4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccms.preblur4.jpg) |
| Pre Blur=0 | Pre Blur=2.5 | Pre Blur=4 |


**Edge Post****Blur** blurs the edges before they are used to create the applied shadow.


**Cartoon Threshold** sets the value in the threshold above which pixels are considered fully on. This parameter is only available when the **Shadows From Channel** is set to *Alpha Cartoon Edge* or *Luma Cartoon Edges*.


**Edge Intensity** controls the intensity of the edges. This parameter is only available when the **Shadows From Channel** is set to *Alpha Edge* or *Luma Edges*.


 


**Master Controls**


Each Shadow has six parameters: *Distance, Intensity, Angle, Color, Softness, Gamma)* which you can combined with the master parameters to control the shadows.


The Master Parameters allow you to change the corresponding parameter for each of the three shadows with one control.


**Master Distance, Master Intensity, Master Angle, Master Softness** and **Master Gamma**scale the values for each shadow. A value of 100 has no affect.


**Master Distance** sets the distance (in pixels) between the shadow and the image.




|  |  |  |
| --- | --- | --- |
| [![bccmultishadow.mdist50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmultishadow.mdist50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmultishadow.mdist50.jpg) | [![bccmultishadow.after](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmultishadow.after_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmultishadow.after_.jpg) | [![bccmultishadow.mdist200](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmultishadow.mdist200.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmultishadow.mdist200.jpg) |
| Master Distance=50 | Master Distance=100 | Master Distance=200 |


**Master Intensity** sets the opacity of the drop shadow, scaled as a percentage. At a value of 100, the shadow is completely opaque. Lower Shadow Intensity values allow the background image to be seen through the shadow. At a value of 0, the shadow is completely transparent.


**Master Angle** sets the direction of the drop shadow. A setting of 0° places the shadow to the right of the image; a setting of 90° places it directly below the image. The angle you set for **Master Angle** is added to the angle for each shadow.


**Master Softness** controls the softness of the edges of the shadows. A setting of 0 produces a sharply defined shadow with hard edges. Increasing Master Softness produces shadows with softer edges.


**Blur Quality** sets the quality of the Blur used to soften the shadow. *Pyramid* is the fastest option and is generally adequate. It produces a blur similar in quality to the BCC Blur filter. *Pyramid Smoother* produces a blur slightly smoother than Pyramid. The remaining choices, *Gaussian Low, Gaussian Medium, Gaussian High, Gaussian Higher* and *Gaussian* *Highest* produce soft shadows of increasing quality. These options increase rendering times proportionately.


**The Master Gamma** value is added to the gamma for each shadow with an offset of 1.0. For example, if Master Gamma and the Gamma value for an individual shadow are both 1.0, the gamma that is applied to the shadow is 1.0.


The **Shadow Noise On checkbox** enables Shadow Noise on all three shadows and activates the Shadow Noise parameter group.


 


**Shadow Noise Parameters**


The Shadow Noise Parameters are master parameters that control all three shadows.


**Noise Master** **Intensity** scales the noise for all three shadows.


**Noise** **Density** sets the percentage of pixels the noise is applied to for all shadows.


**Noise Blur** controls the amount of blur applied to the noise. The fast (**Pyramid Blur**) algorithm is used, so its best to keep this value fairly small.


**Seed** sets the random seed used at the first frame of the effect.


If **Auto Animate** is enabled, a new noise seed is created for the rendered frame.


**Source Opacity, Source Apply Mode** and **Source Apply Mix** control how the source is composited with the shadow. **Apply Mix** controls the mix of the specified Apply Mode with the *Normal* apply mode. If the Apply Mode is Normal, Apply Mix has no affect and the parameter does not appear. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode. You can make the source disappear completely or blend it with the shadows using these controls.


If **Source Apply Mode** is set to Front an opaque source will cover its shadow (except for the parts outside the source region).  For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

 


**The Shadow 1, Shadow 2 and Shadow 3 Parameter Groups**


Each Shadow has six parameters: *Distance, Intensity, Angle, Color, Softness, Gamma*) which you can combine with the master parameters to control the shadows.


The **Shadow On checkbox** must be selected to turn each shadow on. If this checkbox is not selected, the other parameters have no affect.


**Shadow Distance** sets the distance (in pixels) between the shadow and the image.


**Shadow Intensity** sets the opacity of the drop shadow, scaled as a percentage. At a value of 100, the shadow is completely opaque. Lower Shadow Intensity values make the background image visible through the shadow. At a value of 0, the shadow is completely transparent.


**Shadow Angle** sets the direction of the drop shadow. A setting of 0° places the shadow to the right of the image; a setting of 90° places it directly below the image.


**Shadow Color** sets the color of the shadow.


**Shadow Softness** controls the softness of the edges of the shadows. A setting of 0 produces a sharply defined shadow with hard edges. Increasing Shadow Softness produces shadows with softer edges.


Increasing **Shadow Gamma** from the default of 100 lightens the shadows and reduces contrast. Decreasing Gamma darkens the shadows and increases contrast.


**Shadow Noise** controls the amount of noise applied to each shadow.


**Shadow 1** and **Shadow 2** include additional Apply Mode controls which determine how they are composited with the shadow(s) below.


**Shadow Apply Mode** and **Shadow Apply Mix** control how the source is composited with the shadow. **Apply Mix** controls the mix of the specified Apply Mode with the *Normal* apply mode. If the Apply Mode is Normal, Apply Mix has no affect and the parameter does not appear. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode. You can make the source disappear completely or blend it with the shadows using these controls.


