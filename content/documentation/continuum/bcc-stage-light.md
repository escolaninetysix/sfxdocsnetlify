{
"date": "2019-06-12",
"title": "BCC Stage Light",
"category": "BCC Lights",
"link": "bcc-stage-light/"
}

 [![Stagelight1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Stagelight1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Stagelight1.jpg)  

[![Stagelight 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Stagelight-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Stagelight-2.jpg)  

[![Stagelight 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Stagelight-3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Stagelight-3.jpg)


### Overview


The BCC Stage Light filter was designed to augment the built-in lights in Adobe After Effects or to function as a 3D lighting system when used in supported non Adobe After Effects hosts.


While the lighting system in After Effects is indeed rich and powerful, it is incapable of generating real-world volumetric lighting, such as one might see when stage lights are used to illuminate talent on a real set. The BCC Stage Light filter generates 3D volumetric lighting with control over the visible light levels as well as other real world stage-light attributes such as smoke particles. The BCC Stage Light filter creates this effect using either the host native After Effects lights, or via the use of the filters own built-in 3D lighting system.


### Function


To use the filter you must first apply it to a solid color layer, an adjustment layer or an image clip. The filter is set to generate light from the built-in lights and uses the built-in camera by default. To use it in a host without a camera or lighting system simply apply the filter to any clip and use the built-in filter camera and lighting controls to light and navigate around the scene in 3D space.


To use the After Effects light and camera system you can click on the checkboxes located at the top of the filter parameter list in the effects control window. Unless there is an AE camera and light present in the comp no effect will be visible when you select this option, therefore, if you have not done so already, add a spot light or a point light and an active camera to the scene. The BCC Stage Light filter will automatically detect the added light(s) and use it to create volumetric scene lighting.


As you move the camera around the scene, you will notice that the volumetric light that is generated by the filter will remain locked into the scene and you will be able to move around the light and view it from any angle. Of course you can also animate the AE light, which will, in turn, animate the volumetric light that is being applied to the scene as the AE light and the volumetric light effect that the filter is generating are locked together in space and time.


If you have more than one light in the scene, the filter will pick up these lights and apply the same level of volumetric light to each visible light. There are options in the filter to determine whether a light in the scene is used or ignored as well as the option to control the level of volumetric lighting for each individual light in the scene using the built-in host lighting controls such as the Light Intensity, the Shadow Darkness or the Shadow Diffusion parameters.


For an interesting and cool look, try enabling the Smoke option. The smoke is an auto-animating effect and you can control the amount of smoke and the speed by which it animates in the scene.


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Preset Load / Save Mechanism Group**


The preset load / save mechanism is located at the top of every filter in Boris Continuum.


Use the preset load save mechanism to load the factory installed or user generated animated and / or static presets for this filter or to save the current setting as a new animated or static preset.


**Use Comp Camera checkbox**: When enabled, the Lens Flare 3D filter will ignore the built-in camera and instead use the AE native camera for preview and final render of the current scene. In the case where there is more than one camera in the scene, the filter will use the camera that is placed at highest level in the layer stack.


**Use Comp Light**: Enable this option to use the After Effects 3D lighting system. When disabled, the built-in lights are used to generate volumetric lighting.


 


**Built-­in Camera Group**


Contains contextually aware parameters that are used to control the built-in 3D camera system.


**Camera Model pop-up**: Used to select the desired camera system. There are three available options to select from:


* *Position*: Enables you to move freely without restriction around the composition in XYZ space and includes the option of either Free or Target orientation modes.
* *Orbit*: Enables you to orbit around the center of the current composition in XYZ space.
* *Pan*: Enables you to pan and zoom across the center of the current composition in Z and Z space.


**Zoom:** Used to set the Camera zoom, which controls the view perspective. To achieve a wide angle effect, set a low Zoom value and use the Position Z parameter to move in closer to the composition.


**Position XY:** Used to control the position of the camera in 3D space along the XY axis.


**Position Z**: Used to control the position of the camera in 3D space along the Z


**Camera Orientation:**


* *Free*: When selected, the direction that the camera is pointing is determined by the tumble, spin and rotate parameters.
* *Target*: When selected, the camera will always point at the direction that is set by the Target X, Y and Z parameters.


**Tumble**: Used to set the direction of the camera along the Y axis when in  

Free camera mode.


**Spin**: Used to set the direction of the camera along the X axis when in Free camera mode.  




**Rotate**: Used to set the direction of the camera along the Z axis when in Free camera mode.  




**Target** **XY**: Used to set the XY position for the Target camera mode.


**Target Z**: Used to set the Z position for the Target camera mode.


**Orbit** **Radius**: Used to set the distance from the camera to the center of the lights.


**Orbit Tumble**: Used to move around the lights along the Y axis.


**Orbit Spin**: Used to move around the lights along the X axis.


**Orbit Rotate**: Used to move around the lights along the Z axis.  




**Pan Distance**: Used to move horizontally across the scene along the X axis.


**Pan Advance**: Used to move in or out of the scene, along the Z axis.


 


**Smoke Group**


Use to add smoke to the scene for more realistic lighting.


**On checkbox**: Smoke is added to the scene when this option is enabled.


**Seed:**Determines the value input to the random number used by the filter to change the particles of the smoke.


**Density:** Use to set the amount of smoke in the scene.  




**Speed**: Use to control the speed by which the smoke evolves over time.


 


**Comp Light Group**


Contains parameters and options, which are used to control how the filter uses host native lights that are present in the After Effects scene.


 


**Global Group**


Use to select light sources and global render options


**Select Lights pop-­up**: Use to control which lights are affected by the filter


* *On*: Only lights that are turned on are used.
* Off: Only lights that are turned off are used.
* *All*: All lights are used regardless of whether they are on or off.


**Name Starts With pop-­up**: Use to select lights according to the way they have been named in the After Effects composition.


* *Anything*: The name of the light is not taken into account by the filter.
* *A through I:* The filter will only use lights whose name begins with the letter selected in this pop-up.
* *Light*: The filter will only use lights whose name starts with the word Light.


**Render Mode pop-­up**: Use to set the lighting falloff style.


* *Weak*: Emulates a weak light that has a rapid falloff.
* *Linear*: Emulates a light with linear even falloff.
* *Natural*: Emulates a light with a more natural looking falloff.
* *Strong*: Emulates a light with a late falloff.


 


**Point Light Group**


Use to set the options for point light sources.


**Point Light Style pop-­up**:


* *Off*: Point lights are not rendered.
* *Natural Light*: Point lights are rendered with natural photo-­‐real look.
* *Constant Radius*: Point lights are rendered as a colored disc


**Use Source Light Intensity checkbox**: When enabled, uses the After Effects light source Intensity setting for point lights.


**Master Intensity**: Serves as the global light intensity controller for point lights.


**Feather**: Used to soften the point lighting.


**Radius**: Only available when using the Constant Radius light style. Use to control the radius of the point light render.


**Individual Radius pop-­up**: Only available when using the Constant Radius light style. Use to control the light radius based on the After Effects point light settings.


* *Intensity*: Uses the After Effects point light intensity value to set the individual light radius.
* *Shadow Darkness*: Uses the After Effects point light shadow darkness value to set the individual light radius.
* *Shadow Diffusion*: Uses the After Effects point light shadow diffusion value to set the individual light radius.


**Spot Light group**: Use to set the options for spot light sources. Spot Light Style pop-­up:


* *Off*: Spot lights are not rendered.
* *Natural Light*: Spot lights are rendered with soft natural photo-real look.
* *Distance Falloff*: Generates a more intense light with a sharp visible falloff at the end of the cone.
* *Constant:* Generates a more intense light with a constant sharp visible falloff at the light source and at the end of the cone.


**Use Source Light Intensity checkbox**: When enabled, uses the After Effects light source Intensity setting for spot lights.  




**Master Intensity**: Serves as the global light intensity controller for spot lights.


**Offset Source**: Offsets the light that is generated by the filter from the source light.


**Target**: Use to manually set the distance of generated light from the spot lights source to the end of the light falloff. This value in this parameter sets all spot lights to the same length.


**Individual Target pop-­up**: Use to manually set the distance of generated light from the spot lights source to the end of the light falloff based on the setting of the After Effects spot light parameter. This enables you to set different lengths for all of the spot lights in the scene.


* *Intensity*: Light length based on the multiplied value of the After Effects spot light Intensity parameter and the filters Target parameter value.
* *Shadow Darkness*: Light length based on the multiplied value of the After Effects spot light Shadow Darkness parameter and the filters Target parameter value.
* *Shadow Diffusion*: Light length based on the additive value of the After Effects spot light Shadow Diffusion parameter and the filters Target parameter value.


**Use Target Layer**: Sets the light length to the exact distance of the selected layer in the Target Map Layer pop-up.


**Target Map Layer pop-­up**: Select a layer from the list that serves as the light Target. All layers present in the current comp will be displayed in this list.


**Double Sided Lighting checkbox**: By default this option is enabled, meaning that the light generated by the filter hit the selected target layer and be cut off by that layer, regardless of which side is facing the light. Disabling this option changes the relationship between target layers and lights in such a way that if the light is facing the layer it will cut of the light but if it is facing away from the light, then the light starts when it hits the layer.


 


**Built-­in Light group**


Contains parameters and options for controlling light in the scene, which is being generated by the filter’s built-­‐in lights. The built-­‐in light function includes 3 built-in lights, which can be set to any combination of point or source light types.


**Master Intensity**: Increases or decreases the intensity of all lights simultaneously


**Light Source 1 On checkbox**: Use to enable or disable this light source


**Light Source 1 Group**: Contains options and parameters for Light 1


**Render Mode pop-­up**: Use to set the lighting falloff style.


* *Weak*: Emulates a weak light that has a rapid falloff.
* *Linear*: Emulates a light with linear even falloff.
* *Natural*: Emulates a light with a more natural looking falloff.
* *Strong*: Emulates a light with a late falloff.


**Color**: Use to set the color of the generated light


**Intensity**: Use to control the intensity of the generated light


**Position XY**: Use to position the light along the XY axis


**Position Z**: Use to position the light along the Z axis


**Type pop-­up**: Use to set the light source type


* *Spot*: Use to set the light source to a spot light
* *Point*: Use to set the light source to a point light


 


**Point Light Group**


Contains parameters and options for point light sources


**Point Light Style pop-­up**: The point light source can render two distinct styles of point light, which can be selected from this pop-up list.


* *Off*: Disables the light
* *Natural Light*: Produces a natural looking distant point light
* *Constant Radius*: Produces a light that appears to be close to and pointing directly into the camera lens


**Feather**: Use to feather or soften the generated light


**Radius**: Use to control the radius of the generated light when using the Constant Radius mode


**Spot Light group**: Contains parameters and options for spot light sources


**Interest XY**: Use to light target in XY space


**Interest Z**: Use to set the light target in Z space


**Cone Angle**: Use to set the angle of the spot light


**Cone Feather**: Use to set the feather or drop-off of the spot light


**Light Model pop-­up**: Use to set the desired light mode for the spot light


* *Off*: Disables the light
* *Natural*: Produces a natural looking spot light


**Offset Source**: Use to offset the generated light from the actual light source


* *Target*: Use to manually set the target or total length of the spot light.


 


**Light Source 2 Group**


Contains options and parameter controls for light source 2. The parameters that are available in this group are the same as the parameters in the Light Source 1 group.


**Light Source 2 On checkbox**: Use to enable / disable light source 2.


 


**Light Source 3 Group**


Contains options and parameter controls for light source 3. The parameters that are available in this group are the same as the parameters in the Light Source 1 group.


**Light Source 3 On checkbox**: Use to enable / disable light source 3.


 


**Use Target Layer checkbox**: Use to automatically target the spotlight(s) to a select layer in the composition.


**Target Map Layer pop-­up**: Displays a list of layers from the timeline


**Double Sided Lighting checkbox**: By default this option is enabled, meaning that the light generated by the filter hit the selected target layer and be cut off by that layer, regardless of which side is facing the light. Disabling this option changes the relationship between target layers and lights in such a way that if the light is facing the layer it will cut of the light but if it is facing away from the light, then the light starts when it hits the layer.


**Gamma Adjust:**Determines the width of the spotlight cast.

