{
"date": "2019-06-12",
"title": "BCC Reflection",
"category": "BCC Stylize",
"link": "bcc-reflection/"
}

 
![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/10/BCC-Reflection-1024x576.jpg)
### **Parameter Controls**


#### **Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings. For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).


**Use Comp Camera checkbox**: When enabled, the Cast Shadows filter will ignore the built-in camera and instead use the AE native camera for preview and final render of the current scene. In the case where there is more than one camera in the scene, the filter will use the camera that is placed at highest level in the layer stack.


**Use Comp Light checkbox**: When enabled, the Cast Shadows filter will ignore the built-in light and instead use the AE native lights for preview and final render of the current scene. 


#### **Built-­in Camera Group**


Contains contextually aware parameters that are used to control the built-in 3D camera system.


**Camera Model pop-up**:  
Used to select the desired camera system. There are three available options to select from:


* *Position*: Enables you to move freely without restriction around the composition in XYZ space and includes the option of either Free or Target orientation modes.
* *Orbit*: Enables you to orbit around the center of the current composition in XYZ space.
* *Pan*: Enables you to pan and zoom across the center of the current composition in Z and Z space.


 **Zoom**: Used to set the Camera zoom, which controls the view perspective. To achieve a wide angle effect, set a low Zoom value and use the Position Z parameter to move in closer to the composition.


**Position** **XY**: Used to control the position of the camera in 3D space along the XY axis.


**Position Z**: Used to control the position of the camera in 3D space along the Z axis.


**Camera Orientation**


* *Free*: When selected, the direction that the camera is pointing is determined by the tumble, spin and rotate parameters.
* *Target*: When selected, the camera will always point at the direction that is set by the Target X, Y and Z parameters.


**Tumble**: Used to set the direction of the camera along the Y axis when in Free camera mode.


**Spin**: Used to set the direction of the camera along the X axis when in Free camera mode.


**Rotate**: Used to set the direction of the camera along the Z axis when in Free camera mode.


**Target XY**: Used to set the XY position for the Target camera mode.


**Target Z**: Used to set the Z position for the Target camera mode.


**Orbit Radius**: Used to set the distance from the camera to the center of the Flare.


**Orbit Tumble**: Used to move around the Flare along the Y axis.


**Orbit Spin**: Used to move around the Flare along the X axis.


**Orbit Rotate**: Used to move around the Flare along the Z axis.


**Pan Distance**: Used to move horizontally across the scene along the X axis.


**Pan Advance**: Used to move in or out of the scene, along the Z axis.


#### Image Plane Group


The image plane group contains parameters for modifying the original source image that drives the reflection. Changes to these parameters will affect the source image position, rotation and scale.


**Lock To** Reflection locks the source image to the reflection plane. This is helpful when making global adjustments.


**Opacity**: sets the opacity of the source and, subsequently, the shadow itself.


**Position XY** adjusts the source position along the XY Axis


**Position Z** adjusts the source position along the Z axis.


**Rotate X** adjusts the source rotation on the X axis.


**Rotate Y** adjusts the source rotation on the Y axis.


**Rotate Z** adjust the source rotation on the Z axis.


**Master Scale:** Sets the scale along the XY axis.


**Scale X/Y**: Sets scale individually along the X or Y axis.


#### **Reflection Plane Group**


Contains controls for adjusting the position and angle of the Reflected Image.


**Opacity:** adjusts the opacity of the Reflected Plane. Higher values will produce more opaque results.


**Auto-Fit Reflection** automatically links the reflection to the lowest point of the source. If placed on a text object, the reflection will automatically fit to the bottom edge of the text. 


*NOTE:* because Auto Fit is linked to the bottom of the object, any animated effect that distorts the edges of the the object will move the reflection. It is recommended that distortion effects be placed below Reflection in the stacking order, or, use mocha pixelchooser to mask the effect.


**Position XY:** adjusts the position of the Reflected Plane along the XY plane.


**Position Z:** adjusts the position of the Reflected Plane along the Z plane.


**Rotate X:** rotates the Reflected Plane along the X axis.


**Rotate Y:** rotates the Reflected Plane along the Y axis.


**Rotate Z:** rotates the Reflected Plane along the Z axis.


**Width:** distorts the width of the Reflected Image. Higher values will stretch the width.


**Height:** distorts the height of the Reflected Image. Higher values will stretch the height, while lower values will shrink it.


**Skew:** distorts the angle of the Reflected image, skewing the perspective.


#### **Reflection Style Group**


Contains controls for adjusting the look and style of the reflected plane. In this group you can adjust the fade, softness and add ripple effects.


**Softness:** adds a blur to the reflected image. Higher values will produce a softer look, while lower values will produce a sharper image.


**Fade Start:** adjusts the fade gradient start point. Higher values will move the gradient further from the image, while lower values will bring it in closer.


**Fade Length:** adjusts the feathering of the fade. Higher values will produce a softer blend, while lower values will produce a sharper edge.


**Ripple Amount:** adjusts the amount of ripple effect on the Reflected Image. Higher values will produce a more liquid appearance.


**Ripple Speed:** adjusts the speed of the ripple effect. Lower values will produce more subtle rippling effects.


**Ripple Scale X:** adjusts the scale of the ripples along the X axis.


**Ripple Scale Y**: adjusts the scale of the ripple along the Y axis.


