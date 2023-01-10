{
"date": "2019-06-12",
"title": "BCC Clouds",
"category": "BCC Textures",
"link": "bcc-clouds/"
}

 [![clouds.airy.vertical](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.airy_.vertical.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.airy_.vertical.jpg)


### Overview


Clouds is a realistic clouds generator. The clouds can act as a filter on a layer or generate a sky with clouds and a horizon color. Three different types of clouds automatically animate using the Direction, Angle and Speed you set without using keyframes.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Cloud Direction** sets the direction of cloud movement. This value represents the angle between the direction of motion and the horizontal axis.


**Cloud Speed** determines the speed at which the clouds move in the specified Cloud Direction. The clouds auto-animate at the chosen speed, but you can make a stationary cloud effect by setting Cloud Speed to 0.


**Scale X** and **Scale Y** determine the horizontal and vertical size of the clouds. Select the **Lock to Scale X checkbox** to lock the Scale Y value to the Scale X value, or deselect this option to adjust each parameter independently.




|  |  |
| --- | --- |
| [![clouds.scale.x400.y50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.scale_.x400.y50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.scale_.x400.y50.jpg) | [![clouds.scale.x50.y400](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.scale_.x50.y400.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.scale_.x50.y400.jpg) |
| Scale X=400, Scale Y=50 | Scale X=50, Scale Y=400 |


**Billow Speed** determines the rate at which the clouds surge or rotate inward on themselves.


**Opacity** controls the opacity of the clouds, or the overall image. If Sky Type (see below) is set to Color, Opacity affects the whole image. If Sky Type is set to Composite on Original or Alpha, this setting affects the opacity of the clouds only.


The **Cloud Type menu** sets the general appearance of the cloud patterns. The three different Cloud Types, *Airy, Puffy* and *Wispy*, include some inherent shape and size differences. For this reason, you may want to adjust the Scale and Billow Speed settings slightly when switching between the various Cloud Types.




|  |  |  |
| --- | --- | --- |
| [![clouds.airy.vertical](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.airy_.vertical.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.airy_.vertical.jpg) | [![clouds.puffy.vertical](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.puffy_.vertical.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.puffy_.vertical.jpg) | [![clouds.wispy.vertical](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.wispy_.vertical.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.wispy_.vertical.jpg) |
| Airy Clouds | Puffy Clouds | Whispy Clouds |


The **Sky Type menu** setting determines how the filter applies the clouds.


* When Sky Type is set to *Composite on Original*, the filter composites clouds over the source image, which remains visible through the clouds.
* *Color* composites clouds over the chosen Sky Color.
* *Alpha* composites the clouds over a transparent layer. This enables you to adjust the clouds without altering the background image.


**Cloudiness** controls the density of clouds in the sky. Cloudiness is scaled as a percentage between 0 and 100. A value of 0 produces a sky with no clouds. Increasing the Cloudiness value adds more clouds to the sky.


**Cloud Color** sets the color of the clouds. **Sky Color** sets the color of the sky. **Horizon Color**sets the color of the horizon. If **Use Horizon** is not selected, Horizon Color has no affect.


When the **Use Horizon checkbox** is selected, the resulting sky is a gradation from the Sky Color at the top of the screen to the Horizon Color at the bottom. The example at right shows the Use Horizon option.


* Note:Apply the Clouds filter twice to combine two types of clouds. Use the eyedropper to set the sky and horizon colors to the same values as the first Clouds filter, then set the second filter’s Sky Type to Composite on Original and decrease the opacity about 50% to make both outputs visible. This technique mixes clouds of different sizes, colors, and shapes to achieve more natural, less regular clouds.


[![clouds.horizon](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.horizon.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.horizon.jpg)


The **Map Layer menu** allows you to choose any layer in the timeline to use as matte for the clouds. The clouds conform to the opaque regions in the Map Layer’s alpha channel.




|  |  |
| --- | --- |
| [![clouds.maplayer.boris](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.maplayer.boris_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.maplayer.boris_.jpg) | [![clouds.maplayer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.maplayer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/clouds.maplayer.jpg) |
| Boris matte | Cloud with Boris matte used as Map Layer |


**Blend** blurs the alpha channel. You can use Blend to feather edges in the matte or to reduce pixilation caused by Choke.


**Choke** adjusts the size of the opaque regions in the matte. Increasing positive Choke values enlarge the opaque regions, while decreasing negative values shrink the opaque regions.


