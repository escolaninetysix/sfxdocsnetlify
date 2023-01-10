{
"date": "2019-06-12",
"title": "BCC Trails Basic",
"category": "BCC Time",
"link": "bcc-trails-basic/"
}

 

|  |  |
| --- | --- |
| [![columns](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/columns.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/columns.jpg) | [![trails.pivotXfeedback.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.pivotXfeedback.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.pivotXfeedback.2.jpg) |
| Source Image | Filtered Image |


### Overview


Trails creates motion trails, video echoes, and video feedback effects which can be combined in a variety of ways.


Boris Continuum Complete includes both a BCC Trails and BCC Trails Basic. The two filters are very similar except that BCC Trails Basic does not include all the parameters; BCC Trails provides more options for controlling the effect; while BCC Trails Basic is streamlined for when you want to create a simple Trails effects.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


The **Source Layer menu** sets the clip used to create the effect.


 


**Source Parameter Group**


The Source parameters adjust the source’s opacity and allows you to crop the source.


**Crop Top-Left** and **Crop Bot-Right** allow you to crop the source image. Crop Top-Left sets the upper left point and Crop Bot-Right sets the bottom right point of the rectangular crop area. The Jitter filter assumes that the Source image is the same size as the filtered layer. This can be confusing if the Source image and the filtered layer are different sizes. For example, if you apply Jitter Basic to a 640 x 480 image, and the Source image is 2000 x 1500, the default Crop values appear as 0, 0 and 640, 480, but are actually 0, 0 and 2000, 1500.


 


**Geometry Parameter Group**


The Geometry parameters adjust the source’s size and position and rotate the source around the X, Y, and Z axis.


**Scale X Source** and **Scale Y Source** adjust the size of the source along the X and Y axis respectively. These parameters are scaled as percentages of the source’s original width or height. Thus, a Scale X setting of 200 produces a source twice as wide as the original source. Select the **Lock to Scale X checkbox** to keep the Scale X and Y values in proportion.


**Position XY Source** sets the X and Y coordinates of the center point of the source.


**Position Z Source** adjusts the apparent depth of the source. Decreasing negative values move the source closer to the viewer, while increasing positive values move the source farther away from the viewer.


**Tumble Source, Spin Source**, and **Rotate Source** move the source around the X, Y, and Z axis, respectively. Tumble, Spin, and Rotate can be animated over values greater than 360° in order to make the source complete more than one full revolution.


 


**Trails Parameter Group**


The Trails parameters add motion trails to the effect and provide a variety of options for adjusting the trails’ behavior and appearance.


**Frame Separation** sets the distance between each motion trail and the adjacent trail and/or source image. This value measures the number of frames between each trail and the frame from which the trail is created. For example, if Frame Separation is 2, the current time is frame 10 (Time 00:00:00:10), and there are 3 trails in the effect, the first motion trail is created from frame 8, the second from frame 6, and the third from frame 4. Increasing this value spreads the trails further apart, while decreasing this value moves them closer together.




|  |  |  |
| --- | --- | --- |
| [![trails.frameseparation.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.frameseparation.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.frameseparation.2.jpg) | [![trails.frameseparation.4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.frameseparation.4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.frameseparation.4.jpg) | [![trails.frameseparation.8](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.frameseparation.8.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.frameseparation.8.jpg) |
| Frame Separation=2 | Frame Separation=4 | Frame Separation=8 |


**Trail Count** determines the number of trails that are visible in the effect.


**Trails Before Start** determines whether or not the effect displays trail frames that are created before the first frame of the source layer. When Off is chosen, no trails display until after the first frame in the source layer. When On is chosen, the first frame in the source layer is used as the trail image for trails created before the first frame in the source layer.


**Trail Intensity** adjusts the opacity of the trails. At a value of 100, the first trail is completely opaque. At a value of 0, the first trail is completely transparent. The first trail is always the most opaque, but you can increase the number of fully opaque trails by using Trail Intensity values greater than 100.




|  |  |  |
| --- | --- | --- |
| [![trails.trailintensity.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.trailintensity.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.trailintensity.50.jpg) | [![trails.trailintensity.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.trailintensity.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.trailintensity.100.jpg) | [![trails.trailintensity.150](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.trailintensity.150.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.trailintensity.150.jpg) |
| Trail Intensity=50 | Trail Intensity=100 | Trail Intensity=150 |


**Blur** adds a blur to the trails. At a value of 0, no blur is applied, so no glow is visible. Higher values produce more blur.


The **Blur Quality menu** controls the quality of the post blur applied to the trails. *Pyramid* is the fastest option and is generally adequate. It produces a blur similar in quality to the Pyramid Blur filter. *Pyramid Smoother* produces a better quality pyramid blur and increases rendering times slightly. The remaining choices, *Gaussian Low, Gaussian Medium, Gaussian High, Gaussian Higher, and Gaussian Highest* produce gaussian blurs of increasing quality. These options increase rendering times proportionately.


When the **Auto Fade checkbox** is selected, the trails automatically fade evenly so that the first trail is entirely opaque and the last trail is almost entirely transparent.


When AutoFade is deselected, **Manual Fade** sets the ratio of the opacity of each trail to the opacity of the following trail.




|  |  |
| --- | --- |
| [![trails.manualfade.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.manualfade.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.manualfade.50.jpg) | [![trails.manualfade.75](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.manualfade.75.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.manualfade.75.jpg) |
| Manual Fade=50 | Manual Fade=75 |


 


**Trail Feedback Parameter Group**


These controls produce feedback effects and are applied recursively to each successive trail—once to the first trail, twice to the second trail, three times to the third, and so on.


* Note: The Feedback, Geometry, and Source Parameters have a cumulative effect on the trails. For example, if Source Rotation is 5, Rotate Trails is 30, and Rotate Feedback is 10 degrees, the source rotates 5 degrees, the first trail rotates 45 degrees [5 + 30 + (1 x 10)], the second trail 50 degrees [5 + 30 + (2 x 10)] and so on.


**Scale Feedback** adjusts the sizes of the trails. Increasing this value creates successively larger trails, while decreasing this value creates successively smaller trails.


When **Pivot Offset Feedback** is centered and **Pivot Z Offset Feedback** are set to 0 (the default settings), the trails tumble, spin, and rotate around their own centers. Changing these values displaces the successive trails’ centers of rotation along the X, Y, and Z axis, respectively.




|  |  |
| --- | --- |
| [![trails.pivotXfeedback.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.pivotXfeedback.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.pivotXfeedback.1.jpg) | [![trails.pivotXfeedback.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.pivotXfeedback.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.pivotXfeedback.2.jpg) |
| Pivot Offset Feedback=360, 240 | Pivot Offset Feedback=330, 240 |


**Position Z Feedback** displaces the trails along the Z axis. Increasing positive values move successive trails further away from the viewer. Decreasing negative values move successive trails closer to the viewer.


**Tumble Feedback, Spin Feedback**, and **Rotate Feedback** rotate the trails around the X, Y, and Z axis respectively.




|  |  |  |
| --- | --- | --- |
| [![trails.tumblefeedback](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.tumblefeedback.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.tumblefeedback.jpg) | [![trails.spinfeedback](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.spinfeedback.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.spinfeedback.jpg) | [![trails.rotatefeedback](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.rotatefeedback.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.rotatefeedback.jpg) |
| Tumble Feedback | Spin Feedback | Rotate Feedback |


 


**Composite Parameters**


These parameters provide options for controlling how the effect is composited.


The **Apply Mode menu** setting determines how the trails and source layer are composited over objects below them in the timeline.  For descriptions of all the Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** blends the Apply Mode setting with the **Apply Mix From** setting. The resulting mixed mode is used to composite the effect. For example, if Apply Mode is set to *Lighten*, and Apply Mix From is set to *Normal*, then Apply Mix blends the Lighten and Normal apply modes. In this case, an Apply Mix setting of 0 produces the Normal apply mode, and an Apply Mix setting of 100 produces the Lighten apply mode. An Apply Mix setting of 50 blends the two apply modes equally.


* Note: Use Apply Mix to soften the effect of a given apply mode, or animate Apply Mix to blend from one apply mode to another over time.


The **Use Apply Settings menu** determines which elements are affected by the Apply Mode and Apply Mix settings.


* *Trails and Composite* applies the settings to both the trails and the source layer.
* *Trails Only* applies the settings to the trails only, leaving the source layer unaffected.
* *Composite Only* applies the settings to the source layer only.
* *Ignore* disregards the settings and applies the effect normally to both the trails and the source layer.




|  |  |  |
| --- | --- | --- |
| [![trails.useapply.trail&comp](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.useapply.trailcomp.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.useapply.trailcomp.jpg) | [![trails.useapply.trailsonly](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.useapply.trailsonly.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.useapply.trailsonly.jpg) | [![trails.useapply.componly](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.useapply.componly.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.useapply.componly.jpg) |
| Trails and Composite | Trails Only | Composite Only |


The **Composite Trails menu** controls how the trails overlap the source in the filtered output.


* *In Front* composites the trails in front of the source layer.
* *Behind* composites the trails behind the source layer.
* *Trails Only* composites the trails only, removing the source layer from the effect.




|  |  |  |
| --- | --- | --- |
| [![trails.composte.infront](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.composte.infront.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.composte.infront.jpg) | [![trails.composite.behind](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.composite.behind.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.composite.behind.jpg) | [![trails.composite.trailsonly](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.composite.trailsonly.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.composite.trailsonly.jpg) |
| In Front | Behind | Trails Only |


The **Render Order menu** determines how the trails overlap each other in the filtered output.


* Choose *Oldest in Front* to place each successive trail in front of the previous trail.
* Choose *Youngest in Front* to place each successive trail behind the previous trail.




|  |  |
| --- | --- |
| [![trails.composte.infront](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.composte.infront.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.composte.infront.jpg) | [![trails.render.youngest.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.render.youngest.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/trails.render.youngest.2.jpg) |
| Oldest in Front | Youngest in Front |


**Source Opacity** sets the opacity of the source layer in the filtered output and does not affect the trails. A value of 100 leaves the image opaque; a value of 0 makes the image transparent.


