{
"date": "2019-06-12",
"title": "BCC Scanline",
"category": "BCC Stylize",
"link": "bcc-scanline/"
}

 [![Scanline](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Scanline.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Scanline.jpg)


### Overview


BCC Scan Lines is another filter from the new BCC OGL category. This filter was designed to generate rolling RGB scanlines over the source image clip, emulating the effect of a computer monitor which was shot on video tape or film. The RGB bars rolling scan lines that the filter generates can be offset from each other in yx space and time to generate photorealistic effects. The filter also includes a user controlled noise generator function for added realism.


### Function


We’re going to use the BCC Scanline filter to make a clip appear as though it was the result of shooting a computer monitor with a video camera. Start by importing an image clip then with the clip selected, apply the BCC Scanline filter from the Stylize category.


By default, the generated lines are set to a small size and will automatically animate / roll across the face of the clip, which is fine in many cases but you may want to modify a few parameters to generate a more interesting look.


Set the size parameter to 75 and the softness parameter to 75. Then set the Roll RGB Speed to 35. To blend this in a little bit better with the original image, we’ll set the Mix with Original parameter value to 40. Now preview the effect to RAM.


Now we’ll add a little stylistic element, basically electronic noise, to make the image appear to have been on a CC TV system. Set the Noise Size parameter to 10. Preview the effect to RAM to see the effect and observe that the noise appears to pulse over time.


Finally, let’s offset the RGB position values of the rolling scanlines. Set the Roll R parameter value to 20. Then set the Roll B value to minus 20. Preview the effect to RAM to see the final result.


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Size**: Determines the vertical size of the scanlines.


**Softness**: Determines the softness of the edge of the scanlines.


**Angle**: Sets the angle along which the scanlines will roll.


**Roll RGB**: Explicitly set the roll amout offset added to all channels.  Can be keyframed to precisely control the evolution of the parameter roll, although for simple animated rolls, the Roll RBB Speed control can be used without the need for any keyframing.


**Roll****RGB Speed**: Control the speed of automatically animating roll.  Set to 0 for static scanlines.


**R****oll R**: Used to offset the red channel scanline roll.


**Roll G**: Used to offset the green channel scanline roll.


**Roll B**: Used to offset the blue channel scanline roll.


**Noise**: Determines the amount of noise added to the image.


 **Noise Size**: sets the size of the noise particles.


**Mix With Original**: Blends the effect back with the original unfiltered clip.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 