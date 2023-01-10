{
"date": "2019-06-12",
"title": "BCC+Tint",
"category": "BCC Grads and Tints",
"link": "bcc-tint/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Tint filter tints the entire image with a selected color using a variety of colorization modes.  



![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_383.png)**Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. 


Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


### Filter Parameters


#### Black and White


**Enable**: Converts the image to Black and White.


**Filter**: The Filter pop-up selects the type of black and white filter to be applied to your color image. 


**Brightness**: Adjusts the brightness of the image. Positive values brighten, negative values darken.


**Contrast**: Adjusts the contrast of the image. Positive values increase contrast, negative values decrease contrast.


**Gamma**: Adjusts the gamma of the image. The gamma adjustment leaves the white and black points the same and only modifies the values in-between. Positive values lighten the midtones, negative values darken the midtones.


#### Tint


**Color**: Sets the color that the image will be colorized with. Select the desired color using the color picker.


**Opacity**: Sets the opacity of the color.


**Mode**: Selects how color is applied to the image.


* Normal: Tints the image while retaining highlights.
* Tint: The image is tinted by replacing hue and saturation.
* Hue: The image is tinted by only replacing hue.
* Lighten: Pixels darker than the color are replaced, and pixels lighter than the color do not change.
* Darken: Pixels lighter than the color are replaced, and pixels darker than the color do not change.


#### Grad


Tint can optionally use a gradient that limits where the filter is applied. Grad is the transition area that goes from the tinted image to the original image. Its direction, corners and size can be adjusted.


**ND Brightness**: Darkens the colored portion of the grad.


**Type:** Controls the direction of the gradient


* *Top-to-bottom:* The direction of the gradient is from top to bottom.
* *Bottom-to-top:* The direction of the gradient is from bottom to top.
* *Left-to-right:* The direction of the gradient is from left to right.
* *Right-to-left:* The direction of the gradient is from right to left.
* *Horizontal Strip*: Horizontal strip gradient gradient
* *Vertical Strip:* Vertical stripgradient grad.


**Size:** Adjusts the overall size of the gradient.


**Angle:** Adjusts the angle of the gradient


The grad can also be corner pinned by adjusting the Corner Pin sliders as well as dragging the four points on the corners of the screen.


Note: You may need to zoom the image out a bit to see the corner points. In addition, to see and adjust the corner points in After Effects, make sure that the effect title in the Effect Controls window is highlighted. For Final Cut Pro, you must activate the cross hair icon next to the corner position parameters to see and adjust the corner points on the screen.


* Upper-Left: Controls the X and Y position of the Upper Left Point.
* Upper-Right: Controls the X and Y position of the Upper Right Point.
* Lower-Right: Controls the X and Y position of the Lower Right Point.
* Lower-Left: Controls the X and Y position of the Lower Left Point.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Tint from the Grads and Tint unit.
2. Click the BCC FX Editor button. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. To apply a different color to the image, click on the Tint > Color box and select a new color.
5. Try out the different colorization methods in the Color > Color Mode pop-up menu.
6. If you want less tinting of the image, turn down the Tint > Opacity.If you want, the image can be converted to black and white before the tint is applied.
7. From the Black and White > Filter pop-up menu, select the type of black and white filter to be applied to your color image.Your choice of filter can dramatically change the black and white result.Use the Brightness, Contrast and Gamma controls to further adjust the image.You can also use a gradient in combination with the Tint.
8. To use a gradient with the Tint, click on Grad > Enable.
9. Adjust the Grad > Type, Corner Points, Size and Angle.To adjust the Corner Points, just click and drag them to the desired location.[Go to the](index.html%3Fpage_id=bcc-tint.html#bookmark561)Grad section of Common Filter Controls to see how the Grad controls work.
10. If you are curious, you can see what the Grad looks like by changing your View to Grad. Change your View to Output when done.
11. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.



 