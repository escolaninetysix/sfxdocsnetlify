{
"date": "2019-06-12",
"title": "BCC Alpha Spotlight",
"category": "BCC Obsolete",
"link": "bcc-alpha-spotlight/"
}

 

|  |  |
| --- | --- |
| [![shatter.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/shatter.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/shatter.original.jpg) | [![alphaspot.original.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.original.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.original.2.jpg) |
| Source Image | Filtered Image |


### Overview


Alpha Spotlight uses a spotlight to create or add transparency to the source image. For example, you can use Alpha Spotlight to create an effect in which the lit areas become transparent while the background is left opaque, or vice versa.


### 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Near Corner (Top right part of image)** sets the point in the lit region that is closest to the light source.


**Far Corner (Bottom left part of image)** sets the point in the lit region that is farthest from the light source.


[![alphaspot.nearfar](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.nearfar.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.nearfar.jpg)


**The Displace Light** point control displaces the Near and Far Corners by the same amount. Use this control if you want to animate the spotlight to sweep across the image without altering its shape or intensity.




|  |  |
| --- | --- |
| [![alphaspot.displace200](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.displace200.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.displace200.jpg) | [![alphaspot.displace500](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.displace500.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.displace500.jpg) |
| Displace Light X=200 | Displace Light X=500 |


**Light Elevation** controls the height of the light source above the image plane. The portion of the image that is lit is either an ellipse or a hyperbola, depending on the angle at which the beam of light strikes the image. The shape of the lit region is determined by the Light Elevation and the location of the Near and Far Corners. Reducing Elevation focuses the light on the Near Corner point. Increasing Elevation stretches the lit region towards the far corner. At a value of 100, the lit region reaches forms an ellipse which reaches from the Near Corner to the Far Corner.




|  |  |  |
| --- | --- | --- |
| [![alphaspot.elevation0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.elevation0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.elevation0.jpg) | [![alphaspot.elevation50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.elevation50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.elevation50.jpg) | [![alphaspot.elevation100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.elevation100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.elevation100.jpg) |
| Light Elevation=0 | Light Elevation=50 | Light Elevation=100 |


**Light Squeeze** controls the shape of the lit region. A value of 100 creates a circular lit region (by putting the source directly above the center of the region). As Light Squeeze is reduced, the lit region narrows. Decreasing Light Squeeze moves the source further away from the lit region, making the light weaker. You can compensate for the weaker light by increasing the Intensity value.




|  |  |  |
| --- | --- | --- |
| [![alphaspot.squeeze10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.squeeze10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.squeeze10.jpg) | [![alphaspot.squeeze30](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.squeeze30.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.squeeze30.jpg) | [![alphaspot.squeeze50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.squeeze50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaspot.squeeze50.jpg) |
| Light Squeeze=10 | Light Squeeze=30 | Light Squeeze=50 |


**Intensity** sets the intensity of the light.


**Center Falloff** controls the falloff in the center of the lit region. Increase Center Falloff from its default setting of 0 to create a light that is brighter in the center of the lit region


**Edge Falloff** controls the softness of the edges of the lit region. Increase Edge Falloff to soften the transition between the lit and unlit regions.


The **Apply Mode menu** determines how the filter uses the new alpha channel created by the filter to composite the image.


* Note: For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).


The **Gel-Matte Layer** menu allows you to select any clip or layer in the composition to use as either a gel or a matte.


The **Gel-Matte menu** determines how the Gel/Matte Layer image is used.


* The *Gel* and *Matte* options use the Gel/Matte track for color information in creating either a gel or matte, respectively.
* If Gel/Matte is set to *None*, no gel or matte is used, and the Best Quality Gel checkbox has no affect.


Selecting the **Best Quality Gel checkbox** can improve the quality of the spotlight when using a gel, particularly if the spotlight is in motion, but increases render and preview time. Deselecting this option improves speed, and the resulting image quality is often adequate.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Using Gels and Mattes**


Adding a gel to a Spotlight filter is similar to placing a transparent gel over an actual spotlight. The text or image on the gel conforms to the size and shape of the light and is oriented in the same direction.


[![spotlight.gel](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/spotlight.gel_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/spotlight.gel_.jpg)


A matte is not a physically achievable lighting effect. A matte creates an alpha matte over the source image which is only visible when the spotlight passes over it. Therefore the text or image on the matte maintains its orientation relative to the background, and does not change size or shape along with the light.


[![spotlight.matte](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spotlight.matte_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spotlight.matte_.jpg)


