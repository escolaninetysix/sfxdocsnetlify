{
"date": "2019-06-12",
"title": "BCC Pin Art 3D",
"category": "BCC Particles",
"link": "bcc-pin-art-3d/"
}

 [![Pin art 3D 1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-1.jpg)


### Overview


**BCC Pin Art 3D** is a particle based generator style filter. The name Pin Art is a reference to the desk toy where metal (or plastic) pins can be displaced by objects creating a 3D relief. The filter can use the color, luma, and alpha values of layers in the After Effects composition to define the appearance and arrangement of the particles making up the “Pin Screen”. Like a 3D-capable LED or halftone type of effect, it can be used to achieve a wide range of both 2D and 3D-looking surfaces. Pin Art 3D supports AE lights and camera for simple integration into AE 3D compositions. Features such as sophisticated built-in wipes and an integrated Beat Reactor group allow for creating dynamic animations within the filter, including animations directly influenced by audio layers.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Note about presets**: Most **Pin Art 3D** effects are dependent on an alternate layer being set as the **Pin FX Layer** in order to appear as designed. Since layer selector popups are not saved as part of presets it is **necessary to select the Pin FX Layer BEFORE loading a preset**. Once the Pin FX Layer is selected it will persist when loading any additional presets for that effect instance.


 


**Render Group**


Includes parameters affecting the **image** **quality** of the effect and other **global** **render** **related** settings.


**Anti-Aliasing**: *None, Low, High* ; sets the level of anti-aliasing applied to smooth edges.


**Opacity Boost**: controls the opacity of the particles.


**Use Source Mask**: When enabled, the Pin Screen will take any masking applied to the filter layer into account in it’s use of the layer, otherwise it will ignore masks.


**Particle Intersection**: Clicking this checkbox allows for particles to intersect in three dimensional space.


**Motion Blur and Shutter Angle**: offers options for various levels , simulating motion blur seen in camera footage. When set to **Host Settings**, the motion blur of the filter matches the motion blur set for the AE comp it’s applied in.


**DOF Falloff , DOF Resolution**: when using Depth of Field (Built-in or Comp camera) these affect the appearance and quality.


**3D Options**: **Slice Resolution and Stack Resolution**: for 3D pin shapes, these determine the resolution (how many polygons) used to define the shape. Higher resolution values will result in slower performance. For effects where the pins appear small, it may be possible to lower the resolution values to get faster performance (without adversely affecting the appearance). For effects where the pins appear large, it is possible to increase the resolution values to give a smoother appearance to the shape.


**Near Clip Plane Offset and Far Clip Plane Offset**: these can be used to clip or extend the bounds of the area in which pins will appear.


**Use Comp Lights**: When enabled, the filter will **use AE lights** enabled in the comp. The maximum number of total lights (including built-in and AE lights) the filter can use at once is 8. If there are more than 8 enabled AE lights in the comp it will use the 8 enabled light tracks that are topmost in the timeline.


**Use Built-in Lights**: There are also 3 built-in lights available. It’s possible to use both built-in and AE lights simultaneously. If enabled, the built-in lights will have priority over AE lights in terms of which lights get used if the total number of lights exceeds 8.


**Use Comp Camera**: When enabled, the filter will display the Pin Screen from the perspective of the enabled AE camera whose track is topmost in the timeline. When Use Comp Camera is enabled, the Built-In Camera group is disabled.


 


**Pin FX Group**


**Pin FX Layer** and **Pin FX Layer Mode**, **Individual FX Layers** and Modes ; In the Pin FX group, either the **Pin FX Layer** selector or the **Individual FX Layer** selectors determine which layers in the composition are used to influence the various FX applied to the pins. Every FX Layer selector also has an **FX Layer Mode** selector where it is possible to choose which attribute of the layer ; **Luma, Alpha,**  




**Luma Inverse, or Alpha Inverse**: is used to map how the FX are applied.




|  |  |  |
| --- | --- | --- |
| *FX Parameter* | *FX Layer Mode\** | *Result using Positive FX parameter values* |
| **Shift FX** | Luma | Higher luma values shift the corresponding pins farther out from the front of the pin screen |
| **Shift FX** | Alpha | Higher opacity values shift the corresponding pins farther out from the front of the pin screen |
| **Size FX** | Luma | Lower Luma values shrink the cooresponding pins smaller than their original size |
| **Size FX** | Alpha | Lower opacity values shrink the corresponding pins smaller than their original size |
| **Opacity FX** | Luma | Lower luma values fade the opacity of the corresponding pins |
| **Opacity FX** | Alpha | Lower opacity values fade the opacity of the corresponding pins |


* Note: In all cases the inverse effect can be achieved by using the inverse FX Layer Mode or negative FX parameter values.


**Master FX Scaler**: allows for scaling all FX values in a single parameter.


 **Wipe FX, Lock FX Wipes**: allow for wiping the individual FX separately or alogether with a single wipe control.


**FX Wipe Types**: Below are images showing a Pin Screen with Pin FX partially wiped on using various wipe types.


[![Pin art 3D 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-2.jpg)


**Wipe Progress and Wipe Softness:** @ Progress zero none of the Pin FX displayed, @ Progress 100 the Pin FX is entirely wiped on. For some Pin FX, extending the Progress to 200 allows for further wiping the effect to the other extreme (so the entire pin screen is displaying the effect). Wipe Softness allows for a softer edge to the wipe.


 


**Pins Group**


**Pin Type**: determines the type of particle used for the pins. 3D Pin Types support 3D lighting and textures, while most other choices do not. The Custom Shapes choice also supports 3D lighting and textures.


**Texture Layer and Texture Modes**: allow for using the image (**Color and Alpha or Alpha Only**) from an alternate layer as the texture displayed by each pin.


[![Pin art 3D 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-3.jpg)


**Preserve Orientation**: when Preserve Orientation is enabled, **3D pins’ orientation in relation to the camera is maintained regardless of the camera perspective or pin screen rotations**. This means that if the Pin Transforms are left at default, the pins will always seem to be facing the camera which is useful for some types of effects. The **Preserve Orientation** setting **does not apply to other (non-3D) Pin Types** since those types **always** face the camera regardless of perspective or rotations.


**Master Size, Size Variance, Size X, Size Y, Size Z**: for adjusting and varying the size of the pins.


**Mix Color Amount, Mix to Single Color, Mix to Layer**: the pins default to using the color from the layer they are applied to, and the mix parameters allow for using another color or another layer to define the pin colors.


[![Pin art 3D 4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-4.jpg)


**Shape Character**: this parameter makes the **3D Discs to appear with hollow centers** and it can change **the 3D Cylinders into Cone shapes**.


**Material Shininess** and **Material Specular**: for 3D snd Custom Shape pin types, these parameters allow for adjusting the appearance of 3D lighting on the surface of the pins.


 


**Pin Screen Group**


**Density Master, Density X, and Density Y**: for adjusting the density of pins while maintaining the scale of the pin screen.


**Master Scale, Scale X, and Scale Y**: scale control for the pin screen which maintains particle size and density.


 


**Transform Screen Group**


**Rotate X, Y, Z**: rotation on 3 axes – rotation is applied to screen and pins.


**Global Scale**: scale the pin screen including scale of the pins.


**Center X, Y , Z, and Position Mode:** 3D position of pin screen with a choice of using object based position (**Before Rotation**) or world based position (**After Rotation**).


**Twist Mode, Twist Angle, Twist Offset, Twist Direction**: controls for applying a twist deformation to the pin screen.


**Twist Wipe**: wipe controls that apply to the twist deformation.


[![Pin art 3D 5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-5.jpg)


 


**Transform Pins Group**


**Tumble, Spin, and Rotate**: allows for transforming 3D pins independently from the pin screen (disabled for non 3D pins).


 **Variance parameters:** allows for varying the rotation amount between pins based on a random algorithm.


**Bi-directional Rotation**: allow for varied rotation in both directions simultaneously (positive and negative).


**Transform Wipe**: wipe controls that apply to the pin transformations.


 


**Noise Waves Group**


**Amplitude**: for adjusting the height of the waves (can use positive and negative values).


**Frequency**: for adjusting the frequency of the waves.


**Evolve**: a control for the evolution of the noise pattern the waves are based on – can be keyframed to manually animate waves.


**Auto-Evolve Speed**: speed of wave auto-animation.


**Auto-Loop**: number of seconds at which wave animation will seemlessly loop.


**Scale Waves**: scales the amplitude of the waves.


**Waves Wipe**: wipe controls that apply to the wave deformations.


[![Pin art 3D 6](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-6.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-6.jpg)


 


**Dispersion Group**


**Disperse Master, Disperse X, Y, and Z**: disperses the pins from their original locations based on a random algorithm – a master control and control for dispersion along the individual 3D axes.


**Disperse Wipe**: wipe controls that apply to the dispersion.


[![Pin art 3D 7](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-7.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-7.jpg)


 


**Built-in Camera Group**


**Camera Model: Position, Orbit**: camera offering 3D position and orientation control, or an orbit camera for easily adjusting perspective while remaining focused on the 3D center.


**Field of View**: an adjustment that can be used to simulate the look of various lenses – a large value gives a wide angle look.


**Camera Position X, Y, and Z**: 3D coordinate control for camera.


**Camera Tumble, Spin, and Rotate**: controls for orientation of the position based camera.


**Use Depth of Field, DOF Focal Point, Aperture, Blur**: controls for simulating camera depth of field.


 


**Built-in Lights Group**


**Enable**: 3 built in lights which can be individually enabled/disabled.


**Ambient**: increasing this value gives some of the light color to the dark (unlit) areas.


**Type**: determines whether the light will appear as a spot light or point light.


**Light Intensity**: intensity of the light.


**Specular Highlight**: determines how much the light contributes to any specular highlights on the particles – the **color** of the specular highlights is determined by the **Material Specular** prameter in the **Particles** group.


**Color**: the color of the light.


**Position X, Y, and Z**: 3D position of the light source.


**Tumble and Spin**: determines the orientation of the light if it is a spotlight.


**Spot Angle and Feather**: for spotlight, these determine the angle of the light cone and the softness of spot edges.


 


**Global Settings**


**Random Seed**: There are several features in the plugin that use some kind of randomization to generate results (Fractal Field, Speed Randomness, Size Randomness, Opacity Randomness, etc.). Changing the **Random Seed** tweaks the random algorithms to produce a somewhat different result. It can be used to simply try a few different takes on an effect and it can also be used when you want another instance of the effect to look the same but not identical – give it a different **Random Seed** value.


**Near and Far Clip Plane Adjust**: These can be used to clip or extend the bounds of the area in which particles will appear.


**Pos Z Use Pixel Units**: When this is enabled, Position Z uses absolute pixel units.


**Alpha Cutoff**: Determines what alpha value is equivalent to zero for the particle renderer.


**Z Sorting Mode**: Defaults to true 3D, with options for sorting by birth order.


**3D Slice and Stack Resolution:** For 3D particle shapes, these determine the resolution (how many polygons) used to define the shape. Higher resolution values will result in slower performance. For effects where the particles appear small, it may be possible to lower the resolution values to get faster performance (without adversely affecting the appearance). For effects where the particles appear large, it is possible to increase the resolution values to give a smoother appearance to the shape.


**Accessing Image Layers:** Determines whether (and how) an animated **Image Layer** used as a particle will loop when the end is reached.


 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

[![Pin art 3D 8](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-8.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pin-art-3D-8.jpg)


