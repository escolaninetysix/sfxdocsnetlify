{
"date": "2019-06-12",
"title": "BCC Ripple",
"category": "BCC Warp",
"link": "bcc-ripple/"
}

 

|  |  |
| --- | --- |
| [![green.gates.original1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/green.gates_.original1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/green.gates_.original1.jpg) | [![ripple.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.original.jpg) |
| Source image | Filtered image |


### Overview


The Ripple filter simulates ripples spreading out from a point of origin in a pool of water, similar to what you see after tossing a pebble into a pond. This filter automatically creates animated ripples and allows you to choose from a range of wave shapes.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


If the **Correct Non-Square Pixels checkbox** is selected and the filter is applied to media with non-square pixels, the filter converts the pixels to square pixels (maintaining the height), applies the ripple, and then converts the pixels back to their original format. This helps to prevent distortion.


Selecting the **Process Alpha Channel Only checkbox** allows you to distort the alpha channel without changing the underlying colors.


**Radius** determines the radius of the full-strength ripple. Points within the range set by the Radius value will be fully displaced by the ripple. The ripple waves decay as they move beyond the range of the radius, and points more than two times the radius from the center are not affected by the ripple (when Falloff is at 0).


For example, if you set Radius to 50, all pixels within 50 units of the Center Point are fully distorted by the ripple. Points between 50 and 100 units are affected less as the value approaches 100. Pixels beyond this range remain unaffected.




|  |  |
| --- | --- |
| [![ripple.width20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.width20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.width20.jpg) | [![ripple.radius.80](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.radius.80.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.radius.80.jpg) |
| Radius=160 | Radius=80 |


**Center Point** sets the coordinates of the center point of the ripple on the X and Y axis. Note that the center point must be placed within the source image.


**Height** determines the amount of displacement in the direction of wave motion.




|  |  |
| --- | --- |
| [![ripple.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.original.jpg) | [![ripple.height.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.height.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.height.100.jpg) |
| Height=50 | Height=100 |


**Perpendicular Height** determines the amount of displacement perpendicular to the direction of wave motion.




|  |  |
| --- | --- |
| [![ripple.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.original.jpg) | [![ripple.angleheight40](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.angleheight40.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.angleheight40.jpg) |
| Perpendicular Height=0 | Perpendicular Height=50 |


**Wave Width** determines the distance between the peaks of the ripple waves. The Wave Width does not affect the maximum displacement of each point in the image, but does affect how fast the displacement changes from point to point in the image. Wave Width also affects the number of waves in the effect, because as the waves become wider, fewer fit on screen.




|  |  |
| --- | --- |
| [![ripple.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.original.jpg) | [![ripple.width20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.width20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.width20.jpg) |
| Wave Width=40 | Wave Width=20 |


**Speed** and **Phase** control the motion of the ripple waves as they move from the center of the ripple. Speed controls the rate at which the waves move, and Phase controls the position of the waves.


The default Speed setting is 10 moves the ripple out by one wave width per second. A negative Speed value moves the ripples in toward the center. When Speed is set to 0, the ripple is stationary (unless Phase is animated).


* Note: The Speed and Phase controls provide several ways to control the movement of your ripple over time.


* Leave Phase at its default setting and adjust Speed. Try this technique if you care about the overall motion of the effect but not about the exact number of waves created.
* If you want to precisely control the point in the waveform at which the Ripple begins (for example, whether it begins at a peak or a trough), move the position indicator to the first frame of the effect and adjust the Phase control until the wave is at the desired point. If you want to control the number of waves that move out over the duration of the clip, set Speed to 0 and animate Phase to create movement. For example, suppose you want exactly five waves to form and disperse during the clip. At the first keyframe of the clip, set Phase to 0. Set the keyframe at the last frame in the clip to 1800° (5 x 360°). Exactly five full waves form over the duration of the clip.
* If you want a static (not animated) distortion, set Speed to 0 and do not animate Phase.


**Inside Radius** sets the radius of a circle at the center of the ripple within which no distortion takes place. You can animate this parameter to produce a ripple that does not continuously flow outward from the center, but instead produces a few concentric ripples that move outward and disappear.




|  |  |
| --- | --- |
| [![ripple.width20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.width20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.width20.jpg) | [![ripple.insideradius](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.insideradius1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.insideradius1.jpg) |
| Inside Radius=0 | Inside Radius=80 |


**Falloff** controls the rate at which the wave height drops off beyond the edges of the radius. Increasing Falloff causes the wave height to decrease more slowly (thereby creating a wider falloff area), and decreasing this value makes the wave height decrease more abruptly.


 


**Chaos Parameter Group**


The Chaos parameters provide more options for controlling the appearance of the ripple, which can be useful for creating more realistic effects.


The **Twirl menu** affects the behavior of the angular portion of the wave. The Twirl settings have no affect if Perpendicular Height is set to 0.


* When Twirl is set to *Off*, Perpendicular Height creates the same amount of displacement in the center of the ripple as it does at the edges.
* When Twirl is set to *On*, the displacement caused by the Perpendicular Height increases farther from the center.
* *Super Twirl and Hyper Twirl* further exaggerate the angular motion as the wave moves away from the center of the ripple.




|  |  |
| --- | --- |
| [![ripple.twirl.on](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.twirl_.on_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.twirl_.on_.jpg) | [![ripple.twirl.hyper](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.twirl_.hyper_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.twirl_.hyper_.jpg) |
| Twirl On | Twirl Hyper |


The **WaveForm menu** setting determines the shape of the wave. The choices fall into two categories: Shape waveforms and Spectrum waveforms.


The Shape waveforms include *Sine, Triangle, Square, Sawtooth, Circle, Semi-Circle, Uncircle, and Half-Sine*. These names refer to the shape repeated on a graph that plots the displacement of each point in the wave on the Y axis and the distance of each point from the center on the X axis.


The Shape waveforms are mathematically derived and are not intended to look natural. For a more natural-looking alternative, experiment with the Spectrum waveforms. These are all variations on the sine wave that produce more realistic waves.


* Note: For illustrative examples of some of the various waveforms, see the Wave Filter – [Click Here](/documentation/continuum/bcc-wave/).


The Chaos Wave’s waveform is determined by the **Chaos Wave** value, which relates to the fourteen Spectrum waveforms listed in the WaveForm menu. A Chaos Wave value of 10 uses the Spectrum 1 waveform, 20 uses the Spectrum 2 waveform, and so on. Values between two multiples of 10 create a mix of the two adjacent Spectrum waves.


**Chaos Blend** controls the mix of the specified Waveform (determined by the WaveForm menu) with the Chaos Wave setting.


If Chaos Blend is set to 0, the resulting wave conforms to the WaveForm setting. At a Chaos Blend value of 100, the filter uses only the Chaos Wave setting. Intermediate values blend between the two. You can change the Chaos Blend value to adjust the amount of chaos added to the basic waveform.


**Wave Distortion** distorts the shape of the wave, changing the displacement of pixels that are not at zero points (for positive values) or peaks (for negative values) in the wave. A zero point is a point in a wave which is not displaced; if you image a waveform drawn on a graph, the zero points are the points at which the wave crosses the horizontal axis.


The **Intensity menu** adjusts the affect of the Height and Perpendicular Height settings on the ripple.


* *Normal* has no affect on the Height and Perpendicular Height settings and is suitable in most circumstances.
* *Low* scales down the Height and Perpendicular Height values by a factor of 10, which can be useful if you are working with small ripples and want fine control over the parameters.
* *Super* multiplies the Height and Perpendicular Height values by a factor of 10 and can produce very exaggerated and unnatural-looking ripple effects.


You can stretch or squeeze the area affected by the ripple in any direction by using **Stretch** and **Stretch Angle**. Positive Stretch values stretch the ripple, while negative values squeeze it. The Stretch Angle is the angle between the stretch direction and the horizontal axis.


* Note: Stretch is useful for adjusting the perspective of the ripple. For example, you can create the appearance of a ripple in water viewed from the shore rather than from above. To achieve this effect, adjust the Stretch slider to a high value (between 75 and 100), and leave Stretch Angle at the default of 0. This effect generally looks best if Wave Width is decreased, which adds to the illusion of perspective by making the waves look closer together. In the following examples, the PixelChooser is used to apply the filter to a rectangular area ending at the horizon.




|  |  |
| --- | --- |
| [![sunset](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sunset.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sunset.jpg) | [![ripple.stretch](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.stretch.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.stretch.jpg) |
| Source image | Filtered image with Stretch |


If you see holes or tearing in the ripple after you stretch it, scale down the Stretch and Height parameters or adjust the Pinning controls to compensate.


**Light Level** controls the amount of light applied to the image. At a value of 0, no light is applied. As the value increases, the light becomes more intense.


 


**Light Parameter Group**


The Light parameters adjust the lighting of the ripple in the filtered image.


**Light Color** sets the color of the applied light.


**Light Width** affects the size of the lit area on the wave crest. Increasing this parameter value causes a wider part of the crest to be lit; decreasing it diminishes the lit portion of the wave.




|  |  |
| --- | --- |
| [![ripple.lightwidth.20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.lightwidth.20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.lightwidth.20.jpg) | [![ripple.lightwidth.80](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.lightwidth.80.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.lightwidth.80.jpg) |
| Light Width=20 | Light Width=80 |


**Light Focus** adjusts the shape of the light over each wave. Increasing Light Focus makes the light wider and more diffuse; decreasing Light Focus makes the light sharper and narrower.




|  |  |
| --- | --- |
| [![ripple.focus.n80](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.focus_.n80.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.focus_.n80.jpg) | [![ripple.focus.80](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.focus_.80.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.focus_.80.jpg) |
| Light Focus= -80 | Light Focus=80 |


**Light Angle** sets the angle at which the light hits the surface of the waves.


**Light Elevation** determines the distance between the light source and the image plane. As Light Elevation increase, the light hits a larger portion of the ripple.




|  |  |
| --- | --- |
| [![ripple.elevation.20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.elevation.20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.elevation.20.jpg) | [![ripple.elevation.80](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.elevation.80.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/ripple.elevation.80.jpg) |
| Light Elevation=20 | Light Elevation=80 |


**Ambient Light** adjusts the diffuse light on the image. The default of 100 does not add or subtract ambient light from the source image. Decreasing this setting makes the image darker before the other light is applied. Ambient Light illuminates or darkens the image evenly, and is unaffected by any other lighting parameters.


* Note: The PixelChooser does not affect Ambient Light. Ambient Light is applied to all pixels. This ensures that the PixelChooser does not create discrepancies in the overall lighting of the image before Wave is applied. At the default Ambient Light value, the PixelChooser behaves exactly as in other filters; at other values, the PixelChooser filters every parameter except Ambient Light.


The **Apply Mode menu** controls how the filtered image is composited with the source image.  For descriptions of all the Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Distortion Pinning**


The BCC Distortion Pinning controls are used to fine tune edge treatment in situations where a distortion effect might cause regions from outside the image edges to be remapped inside the boundary.


For more information on the BCC Distortion Pinning controls, [Click Here](/documentation/continuum/bcc-pinning-controls/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 