{
"date": "2019-06-12",
"title": "Title Studio- The Container Position Tab",
"category": "Title Studio",
"link": "title-studio-container-position-tab/"
}

 The **Container Position Tab** contains controls for the position and scale of the container, and allow you to rotate it X, Y, and Z space. It is almost identical to the Position Tab for Shapes. Changes made to parameters in the container position tab affect the effect as a whole, but do not change the individual object parameters. The tab becomes available only when the *scene container* has been selected in the timeline. Once selected you can  adjust  the location of the container in 3D space, it’s opacity, size, orientation and pivot.


[![container](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/03/container.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/03/container.png)


**Position X** and **Position Y** adjust the horizontal and vertical location of the scene. Adjustments may be made manually in the control window, or by using the Open GL interactor in the composite window.


**Position Z** adjusts the aparent depth of the scene.


[![c1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/03/c1.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/03/c1.png)


**Master Scale** Increases the scale of the scene along the X, Y and Z axes at once.


**Scale X**, **Scale Y**, and **Scale Z** change the size of the scene along the X, Y, and Z axes, respectively. These parameters are scaled as percentages of the effect’s original width, height, or depth. Thus, a Scale X setting of 200 distorts the scene such that it is twice as wide as the original.


[![c2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/03/c2.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/03/c2.png)


The **Rotation Order** menu sets the order that Tumble X, Spin Y and Rotate Z are applied. The first axis is unaffected by the other two. For example if you want to rotate and spin an object then have it tumble around its own axis, you would choose X, Y, Z. When you create static rotations, the rotation order is not important; the final image will match the appearance in the Composite window. The rotation order becomes important when you create animated rotations. A user selectable rotation order makes it possible to achieve a desired effect more easily. This also makes it possible to easily match the results of a rotation effect created in another application that uses a different rotation order.


**Tumble X**, **Spin Y** and **Rotate Z**  change the image’s perspective along the X, Y, and Z axes respectively. Tumble, Spin, and Rotate can be animated over values greater than 360° in order to make the shape complete more than one full revolution.


**Opacity** sets the opacty of the scene, and is scaled as a percentage. A setting of 0% makes the image completely transparent; a setting of 100% makes the image completely opaque. You can easily fade the whole scene in or out by animating the parameter.


 


 


[Return to Main Title Studio Page](/documentation/continuum/bcc-title-studio).


[Return to Scene Container Parameters Guide](/documentation/continuum/title-studio-scene-container).


