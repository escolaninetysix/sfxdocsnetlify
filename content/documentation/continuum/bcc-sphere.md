{
"date": "2019-06-12",
"title": "BCC Sphere",
"category": "BCC Perspective",
"link": "bcc-sphere/"
}

 [![Sphere](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Sphere.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Sphere.jpg)


### Overview


The Sphere shape maps the source image onto a 3D modeled sphere. A number of controls allow you to adjust the position, scale, size, and pivot point of the shape, crop and mask the sphere, adjust the camera perspective of the sphere, apply motion blur and lights, and control the compositing of the sphere with other objects.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Faces Group**


 The **Source menu** allows you to choose any clip layer in the timeline to map to the surface of the sphere. If you choose *None*, the filtered clip is used.


The **Wrap menu** determines how the source image wraps around the sphere.


* *Around* wraps the image completely around the shape. This is the most likely choice to use to place media on the shape and spin or tumble it. If the image is fully wrapped, wrapping Around only shows roughly half the source at any given time. This is not always the best choice if you do not spin or tumble your sphere. As you unwrap the sphere using the Around setting, the source covers a smaller part of the modeled shape, and the uncovered area becomes transparent.




|  |
| --- |
| [![sphere.wrap.around](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.around.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.around.jpg) |


* *One Way Repeat* renders two copies of the source image, one on the front and one on the back of the sphere. You can see the seam between the two images if you spin the sphere 90° or 270°. Unwrapping the sphere using One Way Repeat causes multiple copies of the source (as many as required to fill the shape) to wrap horizontally around the shape.




|  |
| --- |
| [![sphere.wrap.oneway](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.oneway.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.oneway.jpg) |


* *Back & Forth* Repeat also renders two copies of the source, but the back copy is a mirror image. This causes the corresponding sides to line up and mirror each other at the seams. This setting unwraps in the same manner as the One Way Repeat setting.




|  |
| --- |
| [![sphere.wrap.back](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.back_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.back_.jpg) |


* *Front* maps the image onto the front of the sphere and leaves the back transparent. This creates a semi-sphere, visible if you spin or tumble the object. In this example, the sphere has been rotated 90° to show the transparent back half.




|  |
| --- |
| [![sphere.wrap.front](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.front_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.front_.jpg) |


* *Tile* is similar to One Way Repeat, but it also repeats the image vertically as it unwraps. You can create a tiled sphere by reducing Scale and Wrap Percentage.




|  |
| --- |
| [![sphere.wrap.tile](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.tile_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.tile_.jpg) |


The **Faces menu** determines which faces of the sphere are visible and allows you to map a separate image to the inside of the sphere.


* Choose *Front* to map the chosen Source Layer to the outside of the sphere.
* *Back* maps the Source Layer to the inside of the sphere.
* *Both* maps media to both the inside and outside of the shape. When Front and Back is selected, you can map another layer from the timeline to the inside of the sphere using the **Alternate Back menu**.


**Front Opacity** controls the opacity of the image on the outside of the sphere. You can use this setting to make the outside of the sphere partially or fully transparent to reveal an image on the inside. A setting of 100 makes the outside of the sphere completely opaque; a setting of 0 makes the outside completely transparent.


 


**Geometry Parameter Group**


**Position** sets the X and Y coordinates of the center point of the sphere.


**Position Z** adjusts the apparent depth of the sphere. Decreasing negative values move the sphere closer to the viewer, while increasing positive values move the sphere farther away from the viewer. Very low Position Z values move the sphere behind the viewer, making it invisible.


**Wrap Percentage** controls the extent to which the image wraps around the shape. As Wrap Percentage approaches 0, the shape is less spherical and closer to the original flat image.


A Wrap Percentage of 100 wraps the image completely around the sphere. As you reduce the value, four things happen to the physical model: the radius gets larger, the image is mapped on a smaller section of the 3D shape, the viewer’s eye moves further away, and the aspect ratio is adjusted toward the original aspect ratio of the source. The overall effect is a gradual flattening of the image as the sphere unwraps.




|  |  |  |
| --- | --- | --- |
| [![sphere.wrap.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.100.jpg) | [![sphere.wrap.80](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.80.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.80.jpg) | [![sphere.wrap.40](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.40.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/sphere.wrap_.40.jpg) |
| Wrap Percentage=100 | Wrap Percentage=80 | Wrap Percentage=25 |


* Warning: If you spin, tumble, or rotate a sphere and then unwrap it, the object moves back to its original position in 3D space as it unwraps.To animate the sphere so that it spins through one full revolution and unwraps, animate Spin from –360 to 0 (or 360 to 0 to go the other direction). Otherwise, the image’s motion counteracts the Spin as it moves to the original, unrotated position.


**Scale** adjusts the size of the sphere.


**Tumble, Spin**, and **Rotate** move the sphere around the X, Y, and Z axis respectively. Tumble, Spin, and Rotate can be animated over values greater than 360° to make the sphere complete more than one full revolution.


The **Crop** controls crop the edges of the image. The **Crop Top-Left** and **Crop Bot-Right** set the upper left and lower right corners of a rectangle that define the borders of the crop.


 


**Motion Blur Parameter Group**


Select the **Motion Blur On checkbox** to turn Motion Blur on.


* Warning: Motion Blur is a very processor-intensive feature. You might want to turn motion blur off while you work, then enable it just before rendering. You can also work in Draft Mode to speed your previews.


The **Motion Blur menu** determines how many times the effect samples between the time the “shutter” opens and the time it closes. Increasing the number of samples creates a smoother blur but increases render and preview time proportionately. Choose *Rough, Medium, Smooth, or Smoothest. Rough* uses the fewest samples, while Smoothest uses the most.


**Shutter Angle** refers to the workings of a conventional film camera. Normally the shutter is open to 180°, meaning that the shutter is open for half of each frame. Increasing the angle opens the shutter longer, creating a wider blur. Decreasing the angle produces a thinner blur.


**Camera/Pivot Parameter Group:**When the **Lock Pivot** checkbox is selected, the image tumbles, spins, and rotates around its own center. If this option is deselected, you can set an external pivot point around which to tumble, spin, or rotate.


**Pivot XY** and **Pivot Z** set the X, Y, and Z coordinates of the pivot point. If the Lock Pivot checkbox is selected, moving the pivot point has no affect.


**Camera XY** sets the horizontal and vertical position of the focal point of the camera (the point on the image plane at which the camera is pointed).




|  |  |
| --- | --- |
| [![dve.cameraxy.10.10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.cameraxy.10.10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.cameraxy.10.10.jpg) | [![dve.cameraxy.630.470](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.cameraxy.630.470.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.cameraxy.630.470.jpg) |
| Camera XY=10,10 | Camera=630,470 |


**Camera Z** sets the model camera’s distance from the image. Decreasing this setting places the camera closer to the image, exaggerating the perspective on portions of the image that are closest to the camera




|  |  |
| --- | --- |
| [![dve.cameraz.0.5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.cameraz.0.5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.cameraz.0.5.jpg) | [![dve.cameraz.5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.cameraz.5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.cameraz.5.jpg) |
| Camera Z=0.5 | Camera Z=5 |


The parameters in these sections allow you to apply up to three different lights to the effect. Each section contains parameters which control the corresponding light source. These parameters function identically for each source.


The **Light Type menu** sets the light type.


* *Diffuse-Specular* combines both focused (specular) and diffuse light. You can use this Light Type to create the appearance of a shiny surface lit by a point light source.
* *Spotlight* simulates the look of a traditional theatrical spotlight.
* *Light Sweep* creates a linear band of light that sweeps across the layer.




|  |  |  |
| --- | --- | --- |
| [![dve.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/dve.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/dve.2.jpg) | [![dve.spotlight](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.spotlight.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.spotlight.jpg) | [![dve.lightsweep](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.lightsweep.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.lightsweep.jpg) |
| Diffuse-Specular | Spotlight | Light Sweep |


Each of the three light types is controlled by a slightly different group of parameters. The following chart indicates which parameters are used by each light type.




|  |  |  |  |
| --- | --- | --- | --- |
| Parameter Name | Diffuse-Specular | Spotlight | Light Sweep |
| Source XY | X | X | X |
| Source Z | X | X | X |
| Target XY | X | X | X |
| Width | — | X | X |
| Intensity | X | X | X |
| Specular | X | — | — |
| Color | X | X | X |
| Falloff | — | X | X |
| Sweep Angle | — | — | X |
| Point at Source | — | X | X |
| Apply Mode | X | x | X |
| Apply Mix | X | X | X |


**Source XY** Spotlight sets the location of the light source on the horizontal and vertical axis.


**Source Z** controls the distance between the light source and the image plane. Decreasing this value moves the light source farther from the image, while increasing this value moves the light closer. Changing the Source Z setting allows you to focus the light or to spread it over a larger area.




|  |  |
| --- | --- |
| [![dve.light.sourcez.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light_.sourcez.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light_.sourcez.0.jpg) | [![dve.light.sourcez.3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light_.sourcez.3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light_.sourcez.3.jpg) |
| Source Z=0 | Source Z=3 |


**Target XY Spotlight** sets the X and Y coordinates for the point at which the light is aimed.


**Width** controls the width of the light beam.


**Intensity** controls the intensity of the light source. Increasing this value creates a brighter light.


* Note: When using the Diffuse-Specular Light Type, Intensity controls the intensity of the diffuse light on the image and has no affect on the intensity of the specular light. Increasing the Intensity value increases the size of the lit region and makes the center of the lit area look increasingly bright.


**Specular** determines the amount of specular light applied to the image. Increasing this value increases the amount of light at the center of the lit region.


The following illustrations demonstrate the effect of adjusting Intensity and Specular.




|  |  |  |
| --- | --- | --- |
| [![dve.light1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light1_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light1_.jpg) | [![dve.light2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light2_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light2_.jpg) | [![dve.light3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light3_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light3_.jpg) |
| Intensity=50, Specular=0 | Intensity=0, Specular=400 | Intensity=50, Specular=400 |


**Color** controls the color of the Light source.


**Falloff** adjusts the amount of falloff on the edges of the lit region. Increasing this value adds more falloff, softening the edges of the lit region. Decreasing this value reduces the amount of falloff, creating harder edges on the lit region.




|  |  |
| --- | --- |
| [![dve.light.falloff.5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light_.falloff.5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light_.falloff.5.jpg) | [![dve.light.falloff.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light_.falloff.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/dve.light_.falloff.50.jpg) |
| Falloff=5 | Falloff=50 |


**Sweep Angle** sets the angle between the beam of light and the horizontal axis.


If you select the **Point at Source checkbox**, the Target point coordinates are set relative to the undistorted source, so that the light follows the source as it animates.


The **Apply Mode menu** controls how the light is composited with the source image.  For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** controls the mix of the specified Apply Mode with the *Normal* apply mode. If the Light 1 Apply Mode is Normal, Apply Mix has no affect. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


 


**Drop Shadow Parameter Group**


The **Drop Shadow On checkbox** turns the shadow on and off. If this checkbox is not selected, the other parameters have no affect.


**Shadow Distance** sets the distance (in pixels) between the shadow and the image.


**Shadow Intensity** sets the opacity of the drop shadow, and is scaled as a percentage. At a value of 100, the shadow is completely opaque. Lower Intensity values allow the background image to be seen through the shadow. At a value of 0, the shadow is invisible.


**Shadow Softness** controls the softness of the edges of the shadows. A setting of 0 produces a sharply defined shadow with hard edges. Increasing Softness produces softer edges.


**Shadow Angle** sets the direction of the drop shadow. A setting of 0° places the shadow to the right of the image; a setting of 90° places it directly below the image.


**Shadow Color** sets the color of the shadow.


 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 