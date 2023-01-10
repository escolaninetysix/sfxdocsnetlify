{
"date": "2019-06-12",
"title": "BCC Twirl",
"category": "BCC Warp",
"link": "bcc-twirl/"
}

 

|  |  |
| --- | --- |
| [![twirl.source](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.source.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.source.jpg) | [![twirl.filtered](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.filtered.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.filtered.jpg) |
| Source image | Filtered image |


### Overview


The BCC Twirl filter spins the image around a center point, creating a spiral of distortion.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


Selecting the **Process Alpha Only checkbox** allows you to distort the alpha channel without changing the underlying colors.


**Twirl Center** sets the center of the twirl effect along the X and Y axis.


The **Twirl Style menu** adjusts the shape of the twirl effect. Each style uses the Twirl Angle and **Twirl Radius** parameters slightly differently.


* *Linear* displaces pixels to the specified Twirl Angle at the Twirl Center point. The displacement of the pixels decreases evenly as their distance from the center decreases, and pixels are not displaced at all beyond the Twirl Radius.
* *Wide* is similar to Linear, but applies more displacement to pixels near the Twirl Radius. This creates a wider twirl.
* *Narrow* is similar to Linear but applies more displacement to pixels near the Twirl Center point. This creates a narrower twirl.
* *Two Way* begins displacing pixels outside the Twirl Radius in the direction of the Twirl Angle. As the distance to the center of the effect decreases, the displacement increases until the Twirl Radius is reached. At the Twirl Radius, pixels are displaced fully in the Twirl Angle direction. Between the **Twirl Radius** and the Twirl Center, pixels are displaced increasingly in the direction opposite the Twirl Angle. At the Twirl Center point, pixels are displaced fully to the opposite of the **Twirl Angle**.




|  |  |  |
| --- | --- | --- |
| [![twirl.style.linear](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.style_.linear.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.style_.linear.jpg) | [![twirl.style.narrow](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.style_.narrow.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.style_.narrow.jpg) | [![twirl.style.twoway](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.style_.twoway.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.style_.twoway.jpg) |
| Twirl Style=Linear | Twirl Style=Narrow | Twirl Style=Two Way |


**Outside Soften** softens the transition between the twirl and the undistorted region.




|  |  |
| --- | --- |
| [![twirl.outsidesoftness.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.outsidesoftness.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.outsidesoftness.0.jpg) | [![twirl.outsidesoftness.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.outsidesoftness.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.outsidesoftness.50.jpg) |
| Outside Softness=0 | Outside Softness=50 |


**Inset** changes the radius value at which the twirl achieves its maximum displacement. Increasing positive values move the peak displacement area away from the center of the twirl, which can create an undistorted region in the center. Negative values create effects similar to those produced by reducing the Twirl Angle value.




|  |  |  |
| --- | --- | --- |
| [![twirl.inset.n100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.inset_.n100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.inset_.n100.jpg) | [![twirl.inset.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.inset_.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.inset_.0.jpg) | [![twirl.inset.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.inset_.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.inset_.100.jpg) |
| Inset= -100 | Inset=0 | Inset=100 |


If Inset is greater than 0, **Inside Falloff** controls the length or the transition between fully displaced pixels in the twirl and the unaffected pixels. If the Inset value is greater than the Inside Falloff value, an undistorted region in the center of the effect is created. If Inset is 0 or a negative value, Inside Falloff has no affect.




|  |  |  |
| --- | --- | --- |
| [![twirl.insidefalloff.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.insidefalloff.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.insidefalloff.0.jpg) | [![twirl.insidefalloff.25](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.insidefalloff.25.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.insidefalloff.25.jpg) | [![twirl.insidefalloff.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.insidefalloff.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.insidefalloff.50.jpg) |
| Inside Falloff=0 | Inside Falloff=25 | Inside Falloff=50 |


**Aspect** stretches the Twirl. Positive values stretch the twirl horizontally, while negative values stretch the twirl vertically.




|  |  |
| --- | --- |
| [![twirl.aspect.5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.aspect.5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.aspect.5.jpg) | [![twirl.aspect.n5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.aspect.n5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/twirl.aspect.n5.jpg) |
| Aspect=5 | Aspect= -5 |


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Distortion Pinning**


The BCC Distortion Pinning controls are used to fine tune edge treatment in situations where a distortion effect might cause regions from outside the image edges to be remapped inside the boundary.


For more information on the BCC Distortion Pinning controls, [Click Here](/documentation/continuum/bcc-pinning-controls/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 