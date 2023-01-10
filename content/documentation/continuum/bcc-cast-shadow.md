{
"date": "2019-06-12",
"title": "BCC Cast Shadow",
"category": "BCC Stylize",
"link": "bcc-cast-shadow/"
}

 
### **Parameter Controls**


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/10/BCC-Cast-Shadow-1024x576.jpg)
#### **Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings. For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).


**Use Comp Camera checkbox**: When enabled, the Cast Shadow filter will ignore the built-in camera and instead use the AE native camera for preview and final render of the current scene. In the case where there is more than one camera in the scene, the filter will use the camera that is placed at highest level in the layer stack.


**Use Comp Light checkbox**: When enabled, the Cast Shadow filter will ignore the built-in light and instead use the AE native lights for preview and final render of the current scene. 


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


#### **Comp Light Group**


Contains parameters and options, which are used to control how the filter uses host native lights that are present in the After Effects scene.


#### Built-In Light Group


Contains parameters and options, which are used to control how the filter uses it’s built-in light source.


**Position XY** Sets the position of the light along the XY axis.  



**Position Z** Sets the position of the lights along the Z axis.  



Type sets the style of light being emitted. There are two options for use with Cast Shadow:


* *Point* lights emit light from a single point. Light rays spread out from that central point.
* *Parallel* lights emit their light from the light source. The light rays are parallel to each other, so they hit the object at the same angle.


**Interest XY** sets the focal point of the light source along the XY axis.


**Interest Z** sets the focal point of the light source along the X axis.


**Softness** diffuses the light source. Higher values make the light more diffuse, and produces a softer shadow. Lower values will produce a sharper shadow.


**Softness Y** ratio adjusts the softenss of the shadow along the Y axis.


**Fade Start** adjusts the shadow fade gradient starting point.


**Fade Length** adjusts the overall length of the shadow gradient.


**Color** sets the color of the light source.


**Transmission** adjusts the amount mix between the source image and the shadow. For example if Cast Shadow is placed on an orange text object, increasing the transmission will increase the amount of color mixed with the shadow. If the value is set to 100, the shadow color will match the text.


**Opacity** adjusts the intensity of the light source. Higher values will produce a more intense light, and therefore a more opaque shadow. Lower values will produce a more transparent shadow.


#### Image Plane Group


The image plane group contains parameters for modifying the original source image that drives the shadow. Changes to these parameters will affect how the source image interacts with lighting, it’s position, rotation and scale.


The **Lock To** menu provides options for linking the image plane behavior with 


* None
* Shadow
* Shadow and Light


**Opacity**: sets the opacity of the source and, subsequently, the shadow itself.


**Position XY** adjusts the source position along the XY Axis


**Position Z** adjusts the source position along the Z axis.


**Rotate X** adjusts the source rotation on the X axis.


**Rotate Y** adjusts the source rotation on the Y axis.


**Rotate Z** adjust the source rotation on the Z axis.


**Master Scale:** Sets the scale along the XY axis.


**Scale X/Y**: Sets scale individually along the X or Y axis.


#### Shadow Plane Group


**Auto Fit Shadow** automatically links the shadow to the lowest point of the object. If placed on a text object, the shadow will automatically fit to the bottom edge of the text. Auto Fit is enable by default. 


*NOTE:* because Auto Fit is linked to the bottom of the object, any animated effect that distorts the edges of the the object will move the shadow. It is recommended that distortion effects be placed below the Cast Shadow filter in the stacking order, or, use mocha PixelChooser to mask the effect.


**Position XY** adjusts the source position along the XY Axis


**Position Z** adjusts the source position along the Z axis.


**Rotate X** adjusts the source rotation on the X axis.


**Rotate Y** adjusts the source rotation on the Y axis.


**Rotate Z** adjust the source rotation on the Z axis.


#### Ripple On Floor Group


**Ripple Amount** sets the amplitude of the shadow ripple distortion. Higher values will produce more pronounced waves.


**Ripple Speed** sets the speed of the ripple over time. Lower values will produce calmer, subtler ripples, while higher values will produce faster more chaotic ripples.


**Ripple Scale X** adjusts the scale of the ripples along the X axis.


**Ripple Scale Y** adjusts the scale of the ripples along the Y axis.



