{
"date": "2019-06-12",
"title": "Title Studio- Working With Image Processor Shaders",
"category": "Title Studio",
"link": "title-studio-image-processors-shaders/"
}

 **Image Processor Shaders** allow you to create complex, realistic effects in real time. A myriad of different effects can be created based on which track the shader is applied to, and where it’s placed in the stacking order. Image Processors cannot be applied to all tracks in a project, and are most commonly applied to the *Scene Container*, nested *3D Container* tracks, *Objects*, and *Texture Map* tracks.


[![HD Shaders](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/10/HD-Shaders.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/10/HD-Shaders.png)


**NOTE**: Image Processors can ***only*** be applied in 2D Composite Mode. They will be automatically disabled in 3D Composite Modes.


 


#### Applying a Shader


1. Create a new composition with at least one Shape track. In the example pictured here, we will be using a Flat Text object.


2. Select the *Scene Container* and then go to the **Shaders Menu**.


[![HD Shaders2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/10/HD-Shaders2-1.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/10/HD-Shaders2-1.png)


3. Select Image Processors —-> Light Rays.


[![HD Shaders 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/10/HD-Shaders-3.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/10/HD-Shaders-3.png)


The IP Shader Light Rays will now be applied to the scene itself. Based on this placing, the IP Shader will affect all objects stacked beneath it.


In some instances, available image processors may appear greyed out. If this is the case, you will need to select a different track to apply the Image Processor to.


[![HD Shaders 4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/10/HD-Shaders-4.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/10/HD-Shaders-4.png)As a rule of thumb, Images Processors must be applied directly to Scenes, Shapes or Materials.


When an IP Shader is applied, a new track is created and automatically named for specific image processor. When selected, the Controls Panel will update to provide available parameters to help you customize your effect.


[![HD Shaders 5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/10/HD-Shaders-5.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/10/HD-Shaders-5.png)


## 


#### Available Shaders


A number of Image Processing shaders are available for use with Title Studio in Continuum 2019. IP Shaders are not compatable with previous versions of Title Studio. For a detailed breakdown of available features and parameters please click on the individual shader listed below.


* **[Blur](/documentation/continuum/title-studio-image-procesors)**: Blurs a scene, track or material to simulate an out of focus camera effect. Options include Directional, Prism, Radial and Spiral Blurs.
* [**Glow Light**](/documentation/continuum/title-studio-image-processors-glow-shaders): Generates a traditional film glow where the object(s) are subjected to a strong light causing the image to bloom. Additional compositing modes are available to provide highly detailed customization.
* [**Gradient**](/documentation/continuum/title-studio-image-processors-gradient-shaders): Adds a user definable multi-color gradient across the entire texture.
* [**Keying IP Shaders**](/documentation/continuum/title-studio-image-processors-key-shaders): Allows the user to define a color key to add transparency to the source for advanced compositing effects. Options include Chroma, Difference and Luma Keying.
* [**Light Rays**](/documentation/continuum/title-studio-image-processors-light-rays): Generates visible rays of volumetric light that allow the viewer to see beams of light shining through the environment, similar to light shining through a cathedral window. The generated light beams can take their color from the scene or from a user specified color or gradient.
* [**Light Sweep**:](/documentation/continuum/title-studio-image-processors-light-sweep) Creates an auto-animating beam of light that sweeps across the image. Additional atmospheric customization can help create a smoky or foggy appearance.
* [**Linear Ripple**:](/documentation/continuum/title-studio-image-processors-linear-ripple) Distorts objects with an auto-animating ripple effect to create rippling animations.
* [**Scanlines**:](/documentation/continuum/title-studio-image-processors-scan-lines) Simulates the look of CRT TV’s. Options include a screen shape with rounded corners, tinting, blend modes and auto-animating horizontal or vertical scanlines. Includes a tv noise option for added photorealism.
* [**Spotlight**](/documentation/continuum/title-studio-image-processors-spotlight): Adds a colored spotlight to the scene with blending modes and an optional alpha generator.
* [**Wipe IP Shaders**](/documentation/continuum/title-studio-image-processors-wipe-shaders): Animatible wipe effect that simulates the look and style of burning film, curtains and erosion.


 


[Return to the Main Title Studio Page](/documentation/continuum/bcc-title-studio).


 


