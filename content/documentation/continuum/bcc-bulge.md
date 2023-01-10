{
"date": "2019-06-12",
"title": "BCC Bulge",
"category": "BCC Warp",
"link": "bcc-bulge/"
}

 [![BulgeAft](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/BulgeAft.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/BulgeAft.jpg)


### Overview


Bulge makes the source image appear as if it is stretched over a surface with a bulge or a depression.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


If the **Correct Non-Square Pixels checkbox** is selected and the filter is applied to media with non-square pixels, the filter converts the pixels to square pixels (maintaining the height), applies the bulge, and then converts the pixels back to their original format. This helps prevent distortion.


Selecting the **Process Alpha Channel Only checkbox** allows you to distort the alpha channel without changing the underlying colors.


 


**Center Point Parameter Group**


**Center Point** sets the X and Y coordinates of the center of the bulge or depression.


**Height** controls the height of the bulge above the surface. Negative Height values create a depression in the surface of the image.




|  |  |
| --- | --- |
| [![bulge.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.original.jpg) | [![bulge.height.n50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.height.n50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.height.n50.jpg) |
| Height=50 | Height= -50 |


**Perspective** controls the distance from the viewer to the top of the bulge. Positive Perspective values move the viewer farther away from the surface, making the bulge appear less pronounced. Negative Perspective values place the viewer under the surface of the bulge, which can produce some unusual effects.




|  |  |
| --- | --- |
| [![bulge.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.original.jpg) | [![bulge.perspective.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.perspective.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.perspective.50.jpg) |
| Perspective=0 | Perspective=50 |


**Radius** sets the radius of the bulge. This value is expressed as the distance, in pixels, between the center point and the edge of the bulge.




|  |  |
| --- | --- |
| [![bulge.radius.300](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.radius.300.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.radius.300.jpg) | [![bulge.radius.600](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.radius.600.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.radius.600.jpg) |
| Radius=300 | Radius=600 |


**Taper** controls the shape of the bulge. An untapered bulge maps the source track onto a surface with a roughly spherical bump. Increasing Taper makes the surface more like a tapered candle, proportionally much higher in the middle than at the edges.


**Stretch** stretches or squeezes the bulge in the direction of the Stretch Angle. Positive Stretch values pull the bulge apart, whereas negative values squeeze it together.




|  |  |
| --- | --- |
| [![bulge.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.original.jpg) | [![bulge.stretch.10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.stretch.10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bulge.stretch.10.jpg) |
| Stretch=0 | Stretch=10 |


**Stretch Angle** sets the direction in which the bulge is stretched or squeezed.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Distortion Pinning**


The BCC Distortion Pinning controls are used to fine tune edge treatment in situations where a distortion effect might cause regions from outside the image edges to be remapped inside the boundary.


For more information on the BCC Distortion Pinning controls, [Click Here](/documentation/continuum/bcc-pinning-controls/).

 