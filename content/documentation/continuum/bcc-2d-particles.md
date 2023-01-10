{
"date": "2019-06-12",
"title": "BCC 2D Particles",
"category": "BCC Particles",
"link": "bcc-2d-particles/"
}

 

|  |  |
| --- | --- |
| [![particles.before](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.before.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.before.jpg) | [![particles.after](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.after_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.after_.jpg) |
| Source Image | Filtered Image |


### Overview


2D Particles breaks the source image into particles and disperses them in 2D space. This filter also provides a variety of explosion, velocity, and gravity controls to adjust the particles movement. You can also control the size, shape, density, and opacity of the particles, and create custom particle shapes and scatter wipes. Use the auto-animation feature to easily generate explosion effects, or animate the filter manually for precise control.


*Transition Tip:  While most Continuum transitions automatically conform to the duration of the transition, Continuum 2D Particles has special requirements when applied as a transition.  Due to the great complexity and randomized motion of the particle simulation which underlies this effect it is impossible for Continuum 2D Particles to automatically adjust its timing to ensure that the transition fully completes by the end of the host transition point.  When used as a transition it is frequently necessary to manually adjust parameters such as the Speed, Gravity, and/or the Automate:Manual+Scatter controls in order to tweak the overall timing of the effect and thus ensure it completes on time.*


 


### Function


**Presets and Common Controls**


*Continuum*filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


*Continuum* filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Scatter (initial)** determines the initial position of the scattered image. At the default of 0, the image appears as if it is not initially scattered, which is ideal for creating transitions from one image to another. Negative Scatter values do not scatter the image, but are useful if you animate Scatter and want the image unaffected for a longer period of time. This parameter only applies when the Automate Scatter menu is set to Manual.




|  |  |  |
| --- | --- | --- |
| [![particles.scatter.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.scatter.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.scatter.0.jpg) | [![particles.scatter.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.scatter.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.scatter.50.jpg) | [![particles.scatter.200](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.scatter.200.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.scatter.200.jpg) |
| Scatter=0 | Scatter=50 | Scatter=200 |


**The Automate Scatter** menu controls the speed and direction in which the filter auto- animates. The choices are *Manual; Fast, Medium*, or *Slow Forward;* and *Fast, Medium*, or *Slow Reverse*. The Forward options create an effect that shatters the initial image and disperses it, revealing a new image; whereas the Reverse options cause pieces to fly onto the screen to form the transition image. For more precise control over the animation of the effect, choose Manual. This allows you to use the Scatter setting as your time value directly, and animate it forwards, backwards, or both using keyframes.


The **Particle X menu** provides a multiplication factor for Grid Spacing that determines the order of magnitude of the grid spacing. For example, if Grid Spacing is set to 15 and Particle X is set to *100*, the image breaks into 1500 particles. As the number of particles increases, the size of each individual particle decreases.




|  |  |  |
| --- | --- | --- |
| [![particleX.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particleX.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particleX.1.jpg) | [![particleX.10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particleX.10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particleX.10.jpg) | [![particleX.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particleX.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particleX.100.jpg) |
| Particle X=1 | Particle X=10 | Particle X=100 |


* Warning: Rendering time is directly proportional to the number of particles. If you use a high Particle X value, work in Draft Mode to speed your previews.


**The Explosion Type** menu controls the animation style of the explosion.


* *Burst* creates a fast initial burst, then particles slow down.
* *Soft Burst* creates a slower initial burst, then particles slow down.
* *Constant* causes particles to disperse at a constant speed.
* *Soft Acceleration* causes particles to move slowly at first, then gradually accelerate.
* *Acceleration* causes particles to move slowly at first, then quickly accelerate.


**Speed** determines the velocity of the particles.


 


**Custom Shape Parameter Group**


The controls in this group allow you to choose a particle shape by using the alpha or color information from another layer in your timeline to create a custom shape.


The **Shape Image menu** chooses the layer in the timeline used to create the custom shape.


The **Shape Use menu** determines how the Shape Image layer media is used to create the shape. Choose *Alpha, Inverted Alpha, Color, Inverted Color*, or *Source*. Alpha and Inverted Alpha use the alpha channel information to determine the particle shape. Color and Inverted Color use the color information to determine the particle shape. Source produces particles that are small copies of the original image.




|  |  |
| --- | --- |
| [![particles.alpha](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.alpha_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.alpha_.jpg) | [![particles.alpha.inverse](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.alpha_.inverse.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.alpha_.inverse.jpg) |
| Shape Use=Alpha | Shape Use=Inverted Alpha |


The **Shape Size menu** determines how the Shape Image media is scaled in creating the particles. *Larger* means that the custom shape size is greater than or equal to the original particle size, *Smaller* means that it is less than or equal to the original particle size, and *Conform to Particle* means it is scaled to the size of the original Shape Image media from which the particles are made.


**Shape Transformation** is a manually animatable choking control that transforms each particle into a rectangle. At a Shape Transformation value of 0, the particles are unaffected and conform to the custom shape. At a value of 100, the particles are completely rectangular. This parameter is useful for creating smooth transitions in which the original image splits into rectangles which then transform into the custom shape. In the examples below, the custom shape is a circle, and the image is unscattered.




|  |  |  |
| --- | --- | --- |
| [![particles.transform1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.transform1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.transform1.jpg) | [![particles.transform4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.transform4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.transform4.jpg) | [![particles.transform3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.transform3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.transform3.jpg) |
| Shape Transformation=0 | Shape Transformation=10 | Shape Transformation=25 |


When the **Save Unscattered checkbox** is selected, unscattered particles do not break up the image when using custom shapes.


The **Shape Type menu** sets how the animation of the Shape Image affects the particle shape.


* When *Animate Shap*e is chosen, the custom shape animates along with the source Shape Image layer.
* *Random Frames* chooses the first few frames of the custom shape image and randomly distributes those shapes among the particles. When Random Frames is chosen, **Shape Frame Count** determines the number of frames selected from the Shape Image layer. **Shape Random Seed** sets which value is input to the random number generator used by the filter to determine which Shape Image layer frame is used for each output frame.


Adjust **Resample Quality** to maximize the quality and/or minimize the render time and memory requirement of custom shape effects. Resample Quality places a limit on how large the particles become before losing quality. A setting of 10 means particles can become as large as the original custom shape image, and 5 means they can become half as large.


* Note: If your particles are relatively small, you can use a fairly low Resample Quality value without a noticeable loss of image quality while significantly decreasing rendering time.


If you select the **Optimize Resample checkbox,** the filter automatically performs Resample Quality adjustments for you.


 


**Scatter Wipe Parameter Group**


The Scatter Wipe parameters allow you to shatter images in a wipe-like fashion, and to control the rate and direction in which particles break off and disperse. You can either wipe the particles in a single direction or use a custom gradient to determine how the image breaks into particles.


In the **Scatter Wipe menu**, choose between *Off, On, Pass Through* and *Random*.


* With *Off* chosen, no wipe takes place (unless you set up a Custom Gradient).
* With *On* chosen, the particles wipe across in the pattern designated by the Wipe Custom Gradient (see below).
* *Pass Through* is similar to On, except that the particles begin at a negative Scatter value rather than a value of 0. Particles come together along the edge of the wipe, then fall apart again as the wipe passes across the screen. This creates an effect which looks like a line that forms and dissipates the image as the line moves across the screen.
* With *Random Wipe* chosen, the particles break off randomly across the screen.


The **Wipe Custom Gradient menu** allows you to choose a layer in your timeline to use as the wipe gradient. Regions in the image corresponding to the darkest areas in the gradient break up first, followed by increasingly lighter areas. If *None* is chosen, the wipe moves across the screen in a straight line. The direction of the line is determined by Wipe Angle.


The **Invert Gradient checkbox** inverts the luma or alpha values in the custom wipe gradient, thereby reversing the scatter wipe pattern.


**Wipe Speed** adjusts the speed of the wipe by determining the Scatter value at which the whole image is broken in particles. For a faster wipe, decrease Wipe Speed. For a more gradual wipe, increase Wipe Speed.


* Regardless of the particles’ Speed setting, a low Wipe Speed value wipes the image quickly, and a high Wipe Speed value wipes the image slowly. With high-speed particles and a low-speed wipe, the image unravels slowly, but each particle flies away from the image extremely quickly. With slow particles and a fast wipe, the image breaks up quickly, but the particles then slowly drift off the screen.


 


**Move Parameter Group**


The Move parameters adjust the particles’ movement.


The **Velocity Type menu** determines which movement pattern the particles follow.


* *Random* moves the particles in random directions as they disperse.
* *Straight* moves the particles in a straight line. Use the **Velocity Angle** control to set the angle between this line and the horizontal axis.
* *Centripetal* moves the particles toward the center point. Use the **Center of Velocity** position controls to set the center point.
* *Centrifugal* moves the particles away from the center point. Use the **Center of Velocity** position controls to set the center point.
* *Spiral CW* moves the particles in a clockwise spiral around the center point. Use the **Center of Velocity** position controls to set the center point.
* *Spiral CCW* moves the particles in a counter-clockwise spiral around the center point. Use the **Center of Velocity** position controls to set the center point.




|  |  |
| --- | --- |
| [![particles.spiral](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.spiral.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.spiral.jpg) | [![particles.centripetal](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.centripetal.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.centripetal.jpg) |
| Velocity Type=Spiral CW | Velocity Type=Centripetal |


**Variance** determines the range of different particle speeds that can appear in the effect. A Variance of 0 synchronizes all of the particles. A larger Variance value increasingly randomizes particle speeds.


**Adjustment** behaves differently depending on which Velocity Type you are using.


* In Random and Straight modes, Adjustment works as a variance control on the particle direction. By animating Adjustment, you can make the particles swerve or change course.
* In Spiral CW and Spiral CCW modes, Adjustment determines the strength of the spiral, increasing this value makes the particles spiral much faster, while decreasing this value makes them spiral more slowly
* In Centripetal And Centrifugal modes, Adjustment has no affect.


**Center of Velocity** sets the horizontal and vertical coordinates of the center point from, toward, or around which the particles move when Velocity Type is set to Centripetal, Centrifugal, Spiral CW, or Spiral CCW.


**Velocity Radius** sets the radius of the particle system when Velocity Type is set to Centripetal, Centrifugal, Spiral CW, or Spiral CCW.


When Velocity Type is set to Centripetal, the **Stop at Center checkbox** determines what happens when particles reach the center point. If Stop at Center is selected, particles move into the center of the image and disappear when they reach the center point. If this option is deselected, the particles pass through the Center and continue moving through to the back side, creating an implosion effect.


 


**Gravity Parameter Group**


The Gravity controls apply a simulated gravitational force to the velocity of the particles.


**Gravity** applies a secondary force to the particles’ movement in addition to their normal velocities. A small amount of Gravity can often help make an effect look more natural by creating more parabolic movement.


The **Gravity Type menu** is similar to Velocity Type except that Gravity is applied as acceleration rather than as direct movement.


* *Random* applies a random gravitational pull to the particles.
* *Straight* is the most “natural” type of gravity because it exerts a straight downward pull on the particles. You can pull the gravity in any direction by adjusting the **Gravity Angle** control, which can be used to simulate wind.
* *Centripetal* applies gravity that pulls particles away from the point defined by the **Center of Gravity** position controls*.*
* *Centrifugal* pulls particles away from the point defined by **Center of Gravity***.*


 


**Options Parameter Group**


The Options parameters affect particle density, position, size and behavior.


**Grid Spacing** works in conjunction with Particle X to determine the number of particles created from the image. Higher values make the grid resolution greater, generating a larger number of smaller particles; while lower values generate a smaller number of larger particles. The Grid Spacing value is multiplied by the Particle X value to determine the total number of particles.


**Density** controls the density of the particles in relation to each other. Low Density values spread the particles farther apart; high values pack the particles more closely together.


**Position Variance** varies the positions of each particle. Increase this setting to create a more random particle arrangement.


* Note: At any Position Variance value greater than 0, the unscattered image has some scattered particles, creating holes in the source image. Animate Position Variance along with Scatter to avoid this problem.


**Size** adjusts the size of the particles without affecting the grid spacing or the number of particles. At the default setting of 100, the image splits into the number of particles determined by the Particle X and Grid Spacing settings. If you increase Size, each particle maintains its original position in the grid but increases in size, so that the image fragments overlap in the unscattered image. Conversely, if you decrease Size, the unscattered particles maintain their positions but do not fill the screen.




|  |  |  |
| --- | --- | --- |
| [![particles.size.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.size_.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.size_.50.jpg) | [![particles.size.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.size_.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.size_.100.jpg) | [![particles.size.150](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.size_.150.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.size_.150.jpg) |
| Size=50 | Size=100 | Size=125 |


**Size Variance** varies the size of the particles by scaling them to 100% of their original size plus the Size Variance value. For example, the default setting of 0 creates particles that are 100% of their original size (that is, the particle size does not change). A Size Variance of 50 produces particles that range up to 150% of their original size, and a value of –50 creates particles that range down to 50% of their original size.


**XY Ratio** determines the aspect ratio of the particle grid. Setting this parameter to a positive value creates tall thin particles, while negative values create wide flat particles.




|  |  |
| --- | --- |
| [![particles.XY.positive](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.XY_.positive.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.XY_.positive.jpg) | [![particles.XY.negative](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.XY_.negative.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.XY_.negative.jpg) |
| XY Ratio=10,000 | XY Ratio= -10,000 |


**Opacity** scales the transparency level of all the particles.


**Opacity Variance** varies the opacity of the particles. If you want the particles to change from completely opaque to completely transparent as the effect progresses, animate Opacity from 100 to 0, and set Opacity Variance to 0. If Opacity Variance is set to any value other than 0, some visible particles are at an Opacity value of 0, and some particles are transparent at an Opacity value of 100.


The **Process Channels menu** determines which channels in the source image are processed. The default setting, *All*, processes all four channels. You can also choose to process *Alpha Only, Red Only, Green Only,* or *Blue Only.*


When you apply a filter to a layer that is composited on top of a larger layer, the edge of the effect will be clipped to the size of the smaller layer (i.e. the one that it is applied to). If you want the effect to go beyond the boundaries of the layer it is applied to (as you may for particle effects), you need to use the **Expand Clipping menu** to expand the clipped region


When the **Keep Original checkbox** is selected, the original image appears behind the particles so that they reveal the image behind them, rather than creating an alpha channel.




|  |  |
| --- | --- |
| [![2dparticle.keeporiginal.off](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/2dparticle.keeporiginal.off_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/2dparticle.keeporiginal.off_.jpg) | [![2dparticles.keeporiginal.on](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/2dparticles.keeporiginal.on_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/2dparticles.keeporiginal.on_.jpg) |
| Keep Original Off | Keep Original On |


**Random Seed** determines which value is input to the random number generator used by the filter. Adjust this value when you like the overall effect but want to alter the random configuration of the particles.


**Frame Size** scales the entire effect toward or away from the velocity center point. This is useful for making sure that all the particles are visible within a given frame.




|  |  |
| --- | --- |
| [![particles.framesize100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.framesize100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.framesize100.jpg) | [![particles.framesize50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.framesize50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/particles.framesize50.jpg) |
| Frame Size=100 | Frame Size=50 |


The **Z-Order menu** determines where in space the particles fall away.


* *Normal* causes particles that break up first to fall in front of the rest of the image.
* *Reversed* causes these particles to fall behind the rest of the image.
* *Random* creates effects in which the particles randomly fall in front of or behind the other particles.


Select the **Wall Bounce checkbox** to prevent particles from leaving the frame. Particles that approach the edges of the frame “bounce” and continue to drift.


Parameters such as Size and Position Variance affect the initial (unscattered) image. **Parameter Suppression** allows you to animate all these parameters at once. To animate from an unscattered image to a scattered image that uses these parameters, set a keyframe with a Parameter Suppression value of 100 at the start of the effect, and animate the value to 0. This suppresses the parameters that affect the unscattered image at the start of the effect.


 


**Beat Reactor**


The Continuum Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 