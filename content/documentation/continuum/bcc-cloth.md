{
"date": "2019-06-12",
"title": "BCC Cloth",
"category": "BCC Textures",
"link": "bcc-cloth/"
}

 ![natural.cloth](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/natural.cloth_.jpg)


### Overview


Cloth creates a texture resembling tightly-woven fabric.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


The **Offset XY** parameters control the appearance of the cloth pattern at a given point by moving through the procedural noise from which the effect is generated along the X and Y axis.


**Scale X** and **Scale Y** determine the scale of the threads that form the cloth along the X and Y axis respectively. Select **Lock to X Scale checkbox** to keep these values in proportion, or deselect this option to adjust Scale X and Y independently.


The **Type of Thread menu** sets the style of threads are used to create the cloth. Each type uses the selected Color, but varies the luminosity to achieve a range of thread colors. Choose *Dark* and *Light, Light Only, Dark Only*, *Thin* *Light*, or *Thin* *Dark*.




|  |  |  |
| --- | --- | --- |
| [![threadcloth.type.dark&light](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/threadcloth.type_.darklight.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/threadcloth.type_.darklight.jpg) | [![threadcloth.type.darkonly](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/threadcloth.type_.darkonly.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/threadcloth.type_.darkonly.jpg) | [![threadcloth.type.thinlight](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/threadcloth.type_.thinlight.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/threadcloth.type_.thinlight.jpg) |
| Dark and Light | Dark Only | Thin Light |


The **Color controls** set the color of the cloth pattern.


**Color Alpha** sets the alpha value of the color.


The **Thread Color** controls set the color of the thread.


**Thread Depth** adjusts the contrast between the colors of the individual threads in the cloth. At a value of 0, all of the threads use the specified Color, and the pattern resembles a solid color. As the Thread Depth increases, a wider range of thread colors are used, and the individual threads are more pronounced in the pattern.




|  |  |  |
| --- | --- | --- |
| [![nat.cloth.threaddepth.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/nat.cloth_.threaddepth.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/nat.cloth_.threaddepth.0.jpg) | [![nat.cloth.threaddepth.0.5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/nat.cloth_.threaddepth.0.5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/nat.cloth_.threaddepth.0.5.jpg) | [![nat.cloth.threaddepth.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/nat.cloth_.threaddepth.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/nat.cloth_.threaddepth.1.jpg) |
| Thread Depth=0 | Thread=0.5 | Thread Depth=1.0 |


**Spacing X** and **Spacing Y** adjusts the spacing of the threads along the X and Y axis. Increasing this value moves the threads farther apart.




|  |  |
| --- | --- |
| [![threadcloth.spacingx.0.5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/threadcloth.spacingx.0.5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/threadcloth.spacingx.0.5.jpg) | [![threadcloth.spacingx.0.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/threadcloth.spacingx.0.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/threadcloth.spacingx.0.0.jpg) |
| Spacing X=0 | Spacing X=50 |


**Mutation** controls the pattern of the threads at a given point by moving through the procedural noise from which the effect is generated along the Z axis.


**Rotation** spins the cloth pattern around the Z axis.


**Opacity** adjusts the opacity of the simulated texture.


Select the **Source Alpha checkbox** to use the source alpha channel as a mask for the filter, so the texture appears only in the opaque regions of the source. If this option is deselected, the source image’s alpha channel is ignored.


The **Apply Mode menu** controls how the texture is composited over the source image.


**Apply Mix** controls the mix of the specified Apply Mode with the Normal apply mode. If the Apply Mode is Normal, Apply Mix has no affect. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


