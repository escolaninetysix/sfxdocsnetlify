{
"date": "2019-06-12",
"title": "BCC Damaged TV",
"category": "BCC Stylize",
"link": "bcc-damaged-tv/"
}

 

|  |
| --- |
| [![Damaged TV](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Damaged-TV.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Damaged-TV.jpg) |


### Overview


Another addition to the new Open Gl filter category is the BCC Damaged TV filter. Designed to emulate the appearance of a CRT style television set that is receiving a bad antenna signal or is in need of repair, complete with gun offset, distorted edges, image roll, noise, scan lines, and interference lines, this powerful filter features both fully automatic or manual modes of operation. When using the filter in automatic mode, the filter will automatically animate image roll, scan lines, noise or any other visible parameter – and even though the filter is being used in automatic mode, the user retains full control over every parameter. Like all filters in the BCC set, this filter ships with presets to make working with the filter easy and fast.


### Function


There are two main modes of operation for controlling this filter – auto and manual. When in Auto mode, you can control the general look of the effect by manipulating the values in the first 5 parameters. For instance, select the preset named Null from the preset pop-up menu and the image should appear non-distorted. Now we can dial-in the amount of effect that we want via the top 5 parameters. Set the Signal strength to 65, the Max Signal Threshold to 80 and the Min Signal Threshold to 20. Preview to RAM. Observe that the clip now has distortion and color loss that appears and disappears over time. Stop the playback and set the CTI to the start of the timeline. Now set the value in the Seed parameter to 0 and observe that the effect itself has not changed, but that the placement of the effect in time has changed. This is what the Seed parameter does, it moves the start point of the effect along the timeline.


Now we’ll go through the rest of the parameters in the filter, adding them one by one to build-up our final look. Start by going to the bottom of the filter parameter list and twirling down the Miscellaneous Group and set the V\_Rolling Speed to 20. PTR to see the effect, which is that the image now has a non-constant vertical roll.


Let’s stop playback and set the Interference parameter to a value of 25 and PTR. The effect now includes randomly spaced interference lines that auto-animate vertically across the screen.


Now lets twirl down the Scanline control and set the Thickness parameter to a value of 10. Preview the effect to RAM.


Twirl down the Lines Group next and set the Strength parameter to a value of 50 – dotted lines now appear and disappear at a 45 degree angle across the screen.


Now twirl down the Noise group and set the Amount parameter to 50. PTR to see that we have now introduced noise into the clip, which appears and disappears along with the vertical image roll.


Twirl down the Ghosting Group and set the Ghost Strength parameter to a value of 80, the Ghost Count parameter to 10 and the Ghost Distance to 50. Now PTR and observe that the image on the screen now has what is referred to as ghosting.


Next twirl down the Color Gun Offset Group and set the Red Gun Offset Y parameter to a value of 238 and the Blue Gun Offset Y parameter to a value of 242. Again, let’s PTR to see the effect and you can see how the image RGB values are now offset from each other vertically.


Twirl down the Degraded Color Group next and set a value of 60 into the Degraded Amount parameter. Let’s PTR to see the result. The image color now fades up and down throughout the duration of the effect.


Next is the Distorted Edge Group, where will set the Distorted Amount to a value of 70 and PTR and observe the increase in the amount of distortion or jaggedness in the image.


Now we’ll save this as a preset by clicking on the S button in the filter banner. Once you have provided a name for the effect you can recall this at any time on any clip to which you have applied the filter.


**Parameters**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).  
**Control** **Type**: Pop-up options for auto or manual control over the image damage.


**Seed**: Random seed parameter which sets the phase of the effect.


**Signal Strength**: Determines the quality level of the TV antenna signal or reception.


**Breaking Frequency**: Offsets the position of the image on the screen with lower values producing a smaller offset.


**Max Signal Threshold**: Maximum picture quality.


**Min Signal Threshold**: Minimum picture quality.


 


**Distorted Edge Group**


**Distorted Amount**: Sets controls the amount of the distortion along the picture edge.


**Edge Shapes**: Pop up with options for the shape type of the edge distortion.


**Edge Jaggedness:** Controls the jaggedness along the distorted picture edge.


 


**Degraded Color Group**


**Degraded Amount**: Controls the amount of color in the image.


**Degraded To Pop-Up**: Pop up that is used to set the image color to b/w or a tint overlay.


**Color**: Controls the color used when tinting the image.


 


 **Color Gun Offset Group**


**Red** **Offset** – Offsets the red channel simulating red tube misalignment.


**Green** **Offset** – Offsets the green channel simulating green tube misalignment.


**Blue Offset** – Offsets the blue channel simulating blue tube misalignment.


 


 


**Ghosting Group**


**Ghost Strength:** Controls the opacity or strength of the ghost image.


**Ghost Count**: Sets the amount of ghost images.


**Ghost Distance**: Sets the offset of the ghost images from the main image.


 


**Noise Group**


**Amount**: Determines the amount of noise added to the image.


**Size**: Sets the size of the noise particles.


 


 


**Lines Group**


**Strength**: Sets the opacity of the lines.


**Direction**: Sets the angle of the lines.


**Spacing**: Sets the distance between each of the lines.


 


**Scanline Control Group**


**Thickness**: Controls the thickness of the horizontal scan lines.


**Spacing**: Sets the distance between each of the scanlines.


**Smoothness**: Sets the edge softness of the scanlines.


**Alpha**: Sets the opacity of the scanlines.


 


**Miscellaneous Group**


**V-Rolling Speed**: Controls the speed of the image as it rolls along the vertical axis.


**V-Rolling Offset**: Controls the offset of the image along the vertical axis.


**H-Rolling Speed**: Controls the speed of the image as it rolls along the horizontal axis.


**H-Rolling Offset**: Controls the offset of the image along the horizontal axis.


**Interference**: Controls the opacity of the horizontal picture interference lines.


**Mix With Original**: Blends the effect back with the original unfiltered clip.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 