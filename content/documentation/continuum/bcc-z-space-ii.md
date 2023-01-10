{
"date": "2019-06-12",
"title": "BCC Z Space II",
"category": "BCC Obsolete",
"link": "bcc-z-space-ii/"
}

 

|  |  |
| --- | --- |
| [![respectz.off](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/respectz.off_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/respectz.off_.jpg) | [![respectz.on](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/respectz.on_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/respectz.on_.jpg) |
| Normal DVE Planes | DVE Planes in Z Space |


### Overview


Normally, if you create an effect with multiple DVE layers, each layer is rendered separately. The layer that is topmost in the timeline overlaps all other layers, no matter how the layers move or rotate. The Z Space filters allow you to create effects using multiple DVE layers (“Z planes”) and/or sphere layers which can interact and intersect in 3D space. In a Z Space effect, each plane or sphere’s apparent depth, or position on the Z axis, determines how the plane interacts with other planes and spheres. The plane closest to the viewer in Z space covers planes and spheres that are farther away, regardless of the order in the timeline.


### 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Viewing Selected Planes**


The View menu sets which portion of the effect displays. Choose *Effect* to view the entire effect. The other View menu choices vary depending on the Z Space filter. In Z-Space I, you can choose *Plane 1, Plane 2, Plane 3* or Background to view only the corresponding plane.


* Note: If View is set to a Plane which does not have a source layer assigned to it, the Effect Preview monitor displays a transparent layer.


 


**Container Parameter Group**


The Z Space filters use a container to group and arrange Z planes and spheres in 3D space. When you add planes and spheres to a container, you can animate each plane and sphere independently (using the Plane and Sphere parameters), then apply parameters and animations globally to all the planes and spheres within the container (using the Container parameters). The container preserves the spatial relationship between the objects within it as you reposition and rotate the container.


The illustration at right shows three Z planes in a 3D container. Each plane is scaled and positioned independently.




|  |
| --- |
| [![container.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.1.jpg) |


When you scale or rotate the container, all three planes scale and rotate as well, yet the spatial relationship between the three tracks remains constant.




|  |  |
| --- | --- |
| [![container.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.2.jpg) | [![container.3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.3.jpg) |
| Container Rotated | Container Rotated and Stretched |


You can still adjust any individual Z plane by making changes to the corresponding group of Plane parameters. In the example at right, Plane 2 (the facade) is tumbled forward.


* Note: You can control which planes are in the container using the Link menu in each Plane parameter group. You can also choose whether the background plane is inside the container using the Link menu in the Background parameter group.




|  |
| --- |
| [![container.4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.4.jpg) |


**Scale X Container** and **Scale Y Container** adjust the size of the container along the X and Y axis respectively. These parameters are scaled as percentages of the container’s original width and height. Thus, a Scale X setting of 200 produces a container twice as wide as the original. Select the **Lock Scale checkbox** to keep these values in proportion, or deselect this option to adjust the Scale X and Y independently.


**Position X** and **Position Y****Container** sets the horizontal and vertical location of the container.


**Position Z Container** sets the apparent depth of the container. Decreasing negative values move the container closer to the viewer; increasing positive values move the container away. Very low Position Z values move the container behind the viewer, making it invisible.


**Tumble Container, Spin Container**, and **Rotate Container** move the container around the X, Y, and Z axis, respectively. Tumble, Spin, and Rotate can animate over values greater than 360° to make the container undergo more than one full revolution.




|  |  |  |
| --- | --- | --- |
| [![container.tumble](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.tumble.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.tumble.jpg) | [![container.spin](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.spin_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.spin_.jpg) | [![container.rotate](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.rotate.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.rotate.jpg) |
| Container Tumbled | Container Spun | Container Rotated |


When the **Lock Pivot to Position checkbox** is selected, the container tumbles, spins, and rotates around its own center. If this option is deselected, you can set an external pivot point around which to tumble, spin, or rotate the container.


Container rotated around center




|  |  |  |
| --- | --- | --- |
| [![container.pivot.position1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.pivot_.position1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.pivot_.position1.jpg) | [![container.pivot.ind2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.pivot_.ind2_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.pivot_.ind2_.jpg) | [![container.pivot.position3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.pivot_.position3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.pivot_.position3.jpg) |
| Rotate= -45 | Rotate=0 | Rotate=45 |


Container rotated around independent picot point in lower left corner




|  |  |  |
| --- | --- | --- |
| [![container.pivot.ind1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.pivot_.ind1_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.pivot_.ind1_.jpg) | [![container.pivot.ind2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.pivot_.ind2_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.pivot_.ind2_.jpg) | [![container.pivot.ind3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.pivot_.ind3_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.pivot_.ind3_.jpg) |
| Rotate= -45 | Rotate=0 | Rotate=45 |


**Pivot X Container, Pivot Y Container**  and**Pivot Z Container** set the X, Y, and Z  coordinates of the pivot point. If Lock Pivot to Position is selected, moving the pivot point has no affect.


The **Motion Blur menu** enables motion blur and controls the smoothness of the blur. *0ff* turns motion blur off. The remaining options, *Rough, Medium, Smooth, and Smoothest*, produce motion blur of varying degrees of smoothness. Increasing smoothness produces a higher quality blur but increases rendering and preview times proportionately.




|  |  |
| --- | --- |
| [![container.smooth.low](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.smooth.low_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.smooth.low_.jpg) | [![container.smooth.highest](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.smooth.highest.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.smooth.highest.jpg) |
| Motion Blur=Rough | Motion Blur=Smoothest |


* Warning: Motion Blur is very processor intensive. You might want to turn motion blur off then enable it just before rendering. You can also work in Draft mode in your host application to speed your previews.


**Shutter Angle** refers to the workings of a conventional film camera. Normally, the shutter is open to 180°, meaning that the shutter is open for half of each frame. Increasing the angle opens the shutter longer, creating a wider blur. Decreasing the angle produces a thinner blur.




|  |  |
| --- | --- |
| [![container.motionblur.180](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.motionblur.180.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.motionblur.180.jpg) | [![container.motionblur.300](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.motionblur.300.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/container.motionblur.300.jpg) |
| Shutter Angle=180 | Shutter Angle=300 |


 


**Shadows Parameter Group**


Parameters in this section enable you to add true 3D cast shadows to the Z Space effect. These shadows are more realistic than simple drop shadows because the cast shadows change as the objects casting or receiving the shadows are transformed. In the following examples, notice that the shadow falls differently on the background plane as the plane is rotated in 3D space.




|  |  |
| --- | --- |
| [![cast.shadow.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/cast.shadow.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/cast.shadow.2.jpg) | [![cast.shadow.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/cast.shadow.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/cast.shadow.1.jpg) |


* Note: Each plane parameter group has a Shadows control that determines whether that plane casts and receives shadows. For example, if you want a sphere track to cast shadows on all other planes, but do not want the sphere shadowed by other planes, you can set the sphere track to cast but not receive shadows.


The **Shadows menu** turns shadows on and off and adjusts the quality of the shadows. *0ff* turns off the shadows. The remaining three choices turn on shadows and provide three different rendering algorithms.


* *Faster #1 and Faster #2* render shadows more quickly but a lower quality. Experiment with these two settings to find the algorithm that looks better for your effect.
* *Better* increases rendering time, but produces a better-looking shadow.


* Note: If Shadow Softness is 0, Faster #1, Faster #2, and Better all produce the same quality.


**Shadow Intensity** controls the opacity of the shadows. A Shadow Intensity value of 100 creates completely opaque shadows, and a Shadow Intensity value of 0 makes the shadows completely transparent.


**Shadow Color** sets the color of the shadows.


**Shadow Elevation** sets the elevation of the synthetic light source used to produce shadows. A high elevation value produces a shadow that falls directly behind the plane casting the shadow. Decrease Shadow Elevation to offset the shadow farther from the plane casting the shadow. Negative Shadow Elevation values cause the plane to cast a shadow in front of itself in Z space so that the plane is partially covered by its own shadow.




|  |  |
| --- | --- |
| [![zshadows.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/zshadows.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/zshadows.original.jpg) | [![zshadows.elevation](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/zshadows.elevation.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/zshadows.elevation.jpg) |
| Shadow Elevation=60 | Shadow Elevation=25 |


**Shadow Direction** sets the angle between the beam of light and the horizontal axis. The plane casts a shadow in the direction opposite that of the of the light beam. For example, if the light hits the plane from the right, the plane casts a shadow to the left.




|  |  |
| --- | --- |
| [![zshadows.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/zshadows.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/zshadows.original.jpg) | [![zshadows.direction](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/zshadows.direction.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/zshadows.direction.jpg) |
| Shadow Direction= -135 | Shadow Direction= -45 |


**Shadow Softness** controls the softness of the shadow edges. A setting of 0 produces a sharply defined shadow with hard edges. Increasing Shadow Softness produces shadows with softer edges.




|  |  |
| --- | --- |
| [![zshadows.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/zshadows.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/zshadows.original.jpg) | [![zshadows.lightwidth](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/zshadows.lightwidth.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/zshadows.lightwidth.jpg) |
| Shadow Softness=15 | Shadow Softness=50 |


 


**Plane 1, 2, and 3 Parameter Groups**


These parameters apply geometric transformations to the corresponding Z plane.


The **Plane menu** sets which layer in the timeline is used as the source for the corresponding Z plane. Choose None to remove the plane from the effect.


The **Link menu** determines how the plane is grouped with the other elements of the effect.


* *Free* places the plane outside the container.
* *In Container* places the plane inside the container.
* *In Layer 1* links the plane to Plane 1. This link functions like a second container that can be also nested inside the main container. Thus, any changes made to Plane 1 also affect any Z planes whose Link menus are set to In Layer 1.


**Scale X** and **Scale Y** **Plane**adjust the size of the plane along the X and Y axis respectively. These parameters are scaled as percentages of the plane’s original width and height. Thus, a Scale X setting of 200 produces a plane twice as wide as the original plane. Select the Lock to Scale X checkbox to keep the X and Y Scale values in proportion.


**Opacity** **Plane** scales the opacity of the Z plane. When Opacity is 100, the plane is completely opaque. As Opacity decreases, the plane becomes increasingly transparent, and at value of 0, the plane is completely transparent.


**Position X** and **Position Y Plane** sets the X and Y coordinates of the center point of the plane.


**Position Z** **Plane** adjusts the apparent depth of the plane. Decreasing negative values move the plane closer to the viewer, while increasing positive values move the plane farther from the viewer. Very low Position Z values move the plane behind the viewer, making it invisible.


**Tumble, Spin**, and **Rotate** **Plane**move the plane around the X, Y, and Z axis, respectively. Tumble, Spin, and Rotate can animate over values greater than 360° to make the plane complete more than one full revolution.


When the **Lock Pivot to Position checkbox** is selected, the plane tumbles, spins, and rotates around its own center. If this option is deselected, you can set an external pivot point around which to tumble, spin, or rotate the plane.


**Pivot X, Pivot Y** and **Pivot Z** **Plane** set the X, Y, and Z coordinates of the pivot point. If Lock Pivot to Position is selected, moving the pivot point has no affect.


The **Crop** controls crop the edges of the plane. The X and Y position controls set the **Top-left** and **Bot-right** corners of a rectangle that defines the borders of the cropped area.


The **Shadows menu** determines whether the plane casts and/or receives shadows.


* *Cast 0nly* causes the plane to cast shadows on other objects but not to receive them.
* *Receive 0nly* causes the plane to receive shadows cast by other objects but not to cast any of its own.
* *Cast and Receive* causes the plane to both cast and receive shadows.
* *0ff* causes the plane to neither cast nor receive shadows.


 


**Background Parameter Group**


These parameters adjust the corresponding Background plane. Background planes are similar to Z planes but have fewer controls.


The **Background menu** determines which layer in the timeline is used as the background plane. Choose None to eliminate the background from the effect.


The **Link menu** controls how the background plane is grouped with the other elements of the effect.


* *Background* places the background plane outside the main container, and causes the background plane’s size to remain the same regardless of its depth. This allows you to position the background plane as far away in Z space as you need without adjusting the scale.
* *Free* places the background plane outside of the main container.
* *In Container* places the background plane inside the main container.
* *In Layer 1* links the background plane to Z Plane 1. This link functions like a second container that can be nested inside the main container. Any changes made to Plane 1 also affect any background planes whose Link Background menus are set to In Layer 1.


**Scale Background** scales the size of the background plane along the X and Y axis. This parameter is scaled as percentages of the plane’s original width and height. Thus, a Scale Background setting of 200 produces a plane twice as wide as the original plane.


**Opacity Background** scales the opacity of the background plane. When Opacity Background is 100, the plane is completely opaque. As Opacity Background decreases, the plane is increasingly transparent, and at value of 0, the plane is completely transparent.


**Position X Background** and **Position Y Background** set the X and Y coordinates of the center point of the plane. Position Z Background sets the apparent depth of the plane. Decreasing negative values move the plane closer to the viewer; increasing positive values move the plane away. Very low Position Z values move the plane behind the viewer, making it invisible.


**Rotate Background** rotates the background plane around the Z axis.


The **Crop** controls crop the edges of the background. The X and Y position controls set the **Top-left** and **Bot-right** corners of a rectangle that defines the borders of the cropped area.


The **Shadows menu** sets whether the background casts and receives shadows.


* *Cast 0nly* causes the plane to cast shadows on other planes but not to receive them.
* *Receive 0nly* causes the plane to receive shadows cast by other planes but not to cast any.
* *Cast and Receive* causes the plane to both cast and receive shadows.
* *0ff* causes the plane to neither cast nor receive shadows.


