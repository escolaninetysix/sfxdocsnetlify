{
"date": "2019-06-12",
"title": "BCC Wild Cards",
"category": "BCC Particles",
"link": "bcc-wild-cards/"
}

 

|  |  |
| --- | --- |
| [![Wild Cards 1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-1.jpg) | [![Wild Cards 1.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-1.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-1.1.jpg) |
| Without Anti-Aliasing | With Anti-Aliasing |


### Overview


BCC Wild Cards is used to generate an array of 3D cards with interesting and convenient animation options .


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

* *Vegas Pro Workflow Tip:*  To use the Light Wrap feature in Vegas Pro you must apply the filter in Custom Composite Mode.  For more information on working with Custom Composite Modes in Vegas, [Click Here](/documentation/continuum/working-in-vegas-pro/ "Working in Sony Vegas").![Vegas Custom Composite](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/03/Vegas1.png)Using Custom Composites in Vegas Pro


**Render**


**Anti-Aliasing** is a smoothing process that applies to 3D and alpha edges in the effect if they appear jagged. Anti-Aliasing can slow down the responsiveness of working with the effect and so by design **the plugin will not apply any Anti-Aliasing when the layer the effect is applied to is set to Draft mode**. Also, using a higher AA setting will result in a somewhat slower render than using a lower AA setting so AA should only be set as high as is visually necessary to smooth the effect.


**Opacity Boost** can be used to uniformly adjust the overall opacity of the particles. It can be useful used in relation to other parameters creating varied opacity such as **Motion Blur, Opacity Evolution, Random Opacity**, etc.


**Use Source As Mask** will use the alpha channel of the layer to which the effect is applied to mask the output of the effect.


**Use Particle Intersection** allows particles to intersect with each other. This render mode can be useful for some kinds of effects but does not support particle images with transparency well.


**Motion Blur** offers various levels of motion blur to simulate camera shutter blur based on movement of the particles or camera


**Shutter Angle** determines the spread of the motion blur when it is enabled


**Depth of Field Blur**: Determines the amount the amount of blur in front and behind the focus of the camera.




|  |
| --- |
| [![Wild Cards 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-2.jpg) |
| Motion Blur |


**Use Comp Lights**: When enabled, the filter will **use AE lights** enabled in the comp. The maximum number of total lights (including built-in and AE lights) the filter can use at once is 8. If there are more than 8 enabled AE lights in the comp it will use the 8 enabled light tracks that are topmost in the timeline.


**Use Built-in Lights**: There are also 3 built-in lights available. It’s possible to use both built-in and AE lights simultaneously. If enabled, the built-in lights will have priority over AE lights in terms of which lights get used if the total number of lights exceeds 8.


**Use Comp Camera**: When enabled, the filter will display the Cards from the perspective of the enabled AE camera whose track is topmost in the timeline. When Use Comp Camera is enabled, the Built-In Camera group is disabled.




|  |
| --- |
| [![Wild Cards 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-3.jpg) |
| Using After Effects Light |




|  |
| --- |
| [![Wild Cards 4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-4.jpg) |
| Using After Effects Camera |


**Cards**


**Front Face** and **Back Face** determine the source for the card faces. If no back face is chosen the Front Image will appear when viewed from behind




|  |
| --- |
| [![Wild Cards 5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-5.jpg) |
| With Different Back Face Input |


**Image Mode** offers options for how the image is mapped onto the Cards, including whether or not the image is mapped across multiple cards.




|  |  |
| --- | --- |
| [![Wild Cards 6](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-6.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-6.jpg) | [![Wild Cards 6.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-6.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-6.1.jpg) |
| Whole Images | Image in Parts |


**Corner Roundness** allows for giving the cards rounded corners.


**Alternate Front Faces Group**


**Sample Mode** determines how the effect chooses images for alternate front faces, either choosing additional layer inputs or using alternate frames form the primary Front Face input.


**Distribution** determines how the alternate front faces are distributed within the array of cards.


**Frame Count** and **Loop Count** determine how many frames and loops are used for the random and loop based **Sample Modes.**


**Alternate Face 1-5** is where it is possible to specify other inputs when using the **“Choose Layers” Sample Mode**.


**Master Scale, Scale X** and **Scale Y** are used to determine the size of the cards, while Size Random allows for randomizing the Size.


**Tumble, Spin**, and **Rotate**: allows for transforming cards independently from the overall card array.


**Tumble, Spin** , and **Rotate Random** **parameters:** allows for varying the rotation amount between pins based on a random algorithm.


**Bi-directional**: allow for varied rotation in both directions simultaneously (positive and negative).


**Rotate:** it is possible to specify a wipe direction for the effects of card rotation.




|  |  |  |
| --- | --- | --- |
| [![Wild Cards 7](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-7.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-7.jpg) | [![Wild Cards 7.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-7.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-7.1.jpg) | [![Wild Cards 7.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-7.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-7.2.jpg) |
| Left to Right | Top to Bottom | In to Out |


 




|  |  |  |
| --- | --- | --- |
| [![Wild Cards 8](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-8.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-8.jpg) | [![Wild Cards 8.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-8.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-8.1.jpg) | [![Wild Cards 8.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-8.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-8.2.jpg) |
| H Mid to Edge | V Mid to Edge | “Random Wipe |


**Wipe Progress** and **Wipe Softness**: At progress zero none of the card rotation is displayed, at progress 100 the card rotation is entirely wiped on. Extending the Progress to 200 allows for wiping back the other way.


**Wipe Softness** allows for a softer edge to the wipe (more cards affected simultaneously).


**Lightness Resolution**: Determines the resolution of the light.


**Material Shininess** and **Material Specular Color** can be used to adjust specular shading on the cards (when using 3D Lighting, AE Lights or Built-In).


**Array**


 **Global Scale**: scale the overall card array including scale of the individual cards.


**Num Cards X, Y**, and **Z**: set the number of cards along 3 axes.


**Master Spacing**, **Spacing X, Y,** and **Z**: set the between cards along 3 axes.


**Preserve Card Orientation**: when enabled, the cards will maintain their orientation to the camera when the Array is rotated and/or the camera moves.


**Center X, Y** , and **Z**: 3D position of the card array.


**Rotate X, Y, Z**: card array based rotation on 3 axes – rotation is applied to array and particles.


**Lock Pivot, Pivot X, Y**, and **Z**: unlocking the pivot allows for offsetting 3D pivot from position.


**World Rotate X, Y**, and **Z:** world based rotation on 3 axes.


**Wild Cards**


**Choose Cards**: offers options for specifying which cards to apply the wild card transformation parameters too.


**Choice**: When using the **Choose Cards** setting of **One Card, One Row,** or **One Column** this parameter allows you to specify which Card/Row/Column is affected. When using **Random Choice** this parameter acts as a random seed.


**Wildness Map**: allows for specifying a layer input whose luma values will be used to determine which cards the wild card transformations apply too.


**Scale, Tumble, Spin, Rotate, Pos XYZ**: wild cards transformations applied to chosen cards


**Influence** and **Influence Falloff** ; the **Choose Cards** setting of **One Card, One Row**, or **One Column** these Influence parameters allow for having the cards surrounding the wildcard(s) seem to be influenced by the wild card – to have some of the wild card transformations applied depending on proximity to the wildcard(s).


**Disperse**


**Disperse Master, Disperse X, Y**, and **Z**: disperses the pins from their original locations based on a random algorithm – a master control and control for dispersion along the individual 3D axes.


**Disperse Wipe, Wipe Progress, Wipe Softness**: wipe controls that apply to the dispersion (same wipe options as for Rotate Wipe in the Cards group.




|  |
| --- |
| [![Wild Cards 9](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-9.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-9.jpg) |
| Dispersion along the Z Axis |


**Fractal Movement**


**Amplitude Master, Amplitude X, Y**, and **Z**: Determines the Amplitude of the Noise pattern that displaces the cards.


**Frequency Master**, **Frequency X, Y**, and **Z**: Determines the frequency of the noise pattern with separate control for each axis.


**Auto Evolve Speed**: Speed of the auto animation of the noise pattern – set to zero to turn off auto animation.


**Auto Loop**: The number of seconds at which the noise pattern animation will seemlessly loop.


**Evolve X, Y, and Z**: Offsets for the noise pattern animation – can be used to manually animate noise.


**Individual Particle Noise**: When enabled, each card uses its own noise patter rather than sharing a noise pattern, which results in an appearance that looks less like waves and more random.


**Noise Character**: Offers a variety of kinds of noise patterns




|  |
| --- |
| [![Wild Cards 10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-10.jpg) |
| Fractal Movement along the Z Axis |


**Built-in Camera**


**Camera Model** ; **Position, Orbit**: Camera offering 3D position and orientation control, or an orbit camera for easily adjusting perspective while remaining focused on the 3D center.


**Field of View**: An adjustment that can be used to simulate the look of various lenses – a large value gives a wide angle look.


**Camera Position X, Y**, and **Z**: 3D coordinate control for camera.


**Camera Tumble, Spin**, and **Rotate**: Controls for orientation of the position based camera.


**Use Depth of Field, DOF Focal Point, Aperture, Blur**: Controls for simulating camera depth of field.


**Built-in Lights**


**Enable**: 3 built in lights which can be individually enabled/disabled.


**Ambient**: Increasing this value gives some of the light color to the dark (unlit) areas.


**Type**: Determines whether the light will appear as a spot light or point light.


**Light Intensity**: Intensity of the light.


**Specular Highlight**: Determines how much the light contributes to any specular highlights on the particles – the color of the specular highlights is determined by the **Material Specular** parameter in the **Particles** group.


**Color**: The color of the light.


**Position X, Y,** and **Z**: 3D position of the light source.


**Tumble and Spin**: Determines the orientation of the light if it is a spotlight.


**Spot Angle** and **Feather**: For spotlight, these determine the angle of the light cone and the softness of spot edges.


**Global Settings**


**Random Seed**: There are several features in the plugin that use some kind of randomization to generate results (Size, Rotation, and Wipe randomization as well as Dispersion and Fractal Movement).


**Random Seed** tweaks the random algorithms to produce a somewhat different result. It can be used to simply try a few different takes on an effect and it can also be used when you want another instance of the effect to look the same but not identical – give it a different Random Seed value.


**Near and Far Clip Plane Adjust**: It is possible to trim or extend the range in which particles will appear in the effect. In most cases there is no need to adjust these parameters, but if you find a particle very near or far from the camera unexpectedly disappearing it is possible to use these parameters to correct it.


**System Pos Z Use Pixel Units**: When this is enabled, Position Z uses absolute pixel units for the system.


**Camera Pos Z Use Pixel Units**: When this is enabled, Position Z uses absolute pixel units for the camera.


**Alpha Cutoff %**: Determines what alpha value is equivalent to zero for the particle renderer.


**Z-Sorting Mode**: **Z Sorting Mode**: Defaults to true 3D, with options for sorting by birth order.


**Accessing Image Layers**: Determines whether (and how) an animated **Image Layer** used as a particle will loop when the end is reached.


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).



|  |
| --- |
| [![Wild Cards 11](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-11.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Wild-Cards-11.jpg) |


