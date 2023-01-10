{
"date": "2019-06-12",
"title": "BCC+Film Stocks",
"category": "BCC Film Style",
"link": "bcc-film-stocks/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Film Stocks filter is a unique filter that simulates 294 different color and black and white still photographic film stocks, motion picture films stocks and historical photographic processes. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_222.png) **Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**Amount**: Sets the amount of the selected preset.


#### Black and White


Red, Green and Blue controls allow you to determine the contribution of each color channel in the black and white conversion.


**Enable**: Enables the Black and White conversion.


* *Red*: Sets the amount of the red channel that contributes to the black and white conversion.
* *Green*: Sets the amount of the green channel that contributes to the black and white conversion.
* *Blue*: Sets the amount of the blue channel that contributes to the black and white conversion.


#### Film Response


To mimic the characteristics of a particular film stock, a combination of settings for the RGB channels have been set.


**Curves**


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_223.png)
You can use Curves to adjust the entire tonal range of an image by changing the shape of the curve in the Curves adjustment. The Curves adjustment lets you adjust points throughout the tonal range of an image (from shadows to highlights).


Note:Curves are only available in the BCC FX Editor interface.


#### Selecting Curves


* Select RGB, Red, Green or Blue from the Curve Type pop-up menu.
* 
* Click directly on an existing curve in the graph to select it.


#### Adding and Deleting Points:


* Click directly on the curve to add a new point. Up to five points can be added.
* Points can be deleted by clicking and dragging a point to the edge of the graph.Adjusting Points:
* Moving a point in the top portion of the curve adjusts the shadows.
* Moving a point in the center of the curve adjusts the midtones.
* Moving a point in the top portion of the curve adjusts the highlights.
* Moving the curve upward or downward lightens or darkens the image. The steeper sections of the curve represent areas of higher contrast; flatter sections represent areas of lower contrast.
* To darken highlights, move a point near the top of the curve downward. Moving a point either down or to the right maps the input value to a lower output value, and the image darkens.
* To lighten the shadows, move a point near the bottom of the curve upward. Moving a point either up or to the left maps a lower input value to a higher output value, and the image lightens.


**RGB**: Controls the RGB film response curve. If you are using a black and white preset, the grayscale film response curve will be adjusted.


**Red**: Controls the Red film response curve.


**Green**: Controls the Green film response curve.


**Blue**: Controls the Blue film response curve.


#### Color Correct


Color Correct manipulates the Temperature, Cyan/Magenta, Brightness, Contrast, Shadow, Midtone, Highlight, and Saturation values of the image. 


**Temperature**: Sets the color of the image to be either warmer or cooler. Dragging the slider to the right makes the image cooler (bluer) and dragging the slider to the left makes the image warmer (redder).


**Cyan/Magenta**: Adds either Cyan or Magenta to the image. Dragging the slider to the right makes the image more magenta and dragging the slider to the left makes the image more cyan.


**Red**: Adds or subtracts red from the image.


**Green**: Adds or subtracts green from the image.


**Blue**: Adds or subtracts blue from the image.


#### Master, Shadows, Midtones, Highlights


All of the color correctors can adjust an image by using it’s master, shadows, midtones and highlight groups. The master settings affect the entire image while adjusting parameters within the shadows, midtones and highlights will only affect those specific areas.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_187.png)  
Original Shadows Midtones Highlights 
**Brightness**: Adjusts the brightness of the image. Positive values brighten, negative values darken.


**Contrasts**: Adjusts the contrast of the image. Positive values increase contrast, negative values decrease contrast.


#### Filter


Adds a color filter to the image.


**Presets**: Select one of the filters from the pop-up menu.


**Color**: Sets the color through the use of a standard color picker.


**Opacity**: Sets the opacity of the color filter.


**Highlights**: Preserves the white areas of the image.


**Sharpen Amount**: Determines how much contrast is added at the edges.


**Radius**: Controls the size of the edges you wish to sharpen.


**Threshold**: The threshold setting is used to sharpen more pronounced edges, while leaving more subtle edges untouched. Low values sharpen more image areas while higher threshold values sharpen less.


**Diffusion ‌Blend**: Determines the blend mode to be used to create the diffusion/glow effect.


* *Add*: The diffusion/glow is added to your image.
* *Normal*: The diffusion is mixed with the original image. In this mode, the Amount slider only shows changes up to a value of 100.
* *Screen*: The diffusion/glow is combined with the image using a Screen blend mode. This looks kind of like the Add blend mode, but highlights are retained.


**Amount**: Sets the amount of diffusion.


**Blur**: Sets the softness of the image.


**Color**: The Color parameter sets the color of the diffusion/glow through the use of a standard color picker or eyedropper. The default color is white.


**Position**: When using the Add and Screen blend modes, Position selects the values used to create the glow effect. A higher Position value uses the brightest image values to create the glow. A lower Position value uses the darkest image values to create the glow.


**Range**: When using the Add and Screen blend modes, Range controls the range of values to be used for the glow. Once you’ve selected the “Position”, you can then add or subtract the “Range” of values to be used in the glow source. A higher Range value includes more values in the glow source while a lower Range value includes less values.


#### Vignette


A vignette is a popular photographic effect where the photo gradually fades into a color. 


**Color**: The Color parameter sets the color of the vignette through the use of a standard color picker. The default color is black.


**Opacity**: Sets the opacity of the colored vignette. For defocused vignettes, you may want to turn down the Opacity so you can see the defocused effect.


**Blur**: Sets the softness of the image in the area of the vignette.


**Roundness**: Sets the roundness of the vignette. The vignette can either be circular or square or anywhere in between.


**Size**: Sets the size of the vignette.


**Aspect Ratio**: Changes the aspect ratio of the vignette. A value of -100 would be wider, and 100 would be taller.


**Rotation**: Rotates the vignette.


**Distortion**: Distorts the edge of the vignette.


**Distortion Size**: Sets the size of the distortion.


**Randomize**: Randomizes the distortion.


**Softness X** and **Y:** The Softness parameters control the softness of the vignette edge. They can be ganged together by enabling the **gang** parameter


#### Grain


Grain simulates film grain with control of the size, softness and intensity. In addition, a Film Response parameter controls where you will see grain in the image. 


**Monochrome**: When checked, the grain is monochrome. In this mode, only the Red Size, Red Amount and Red Softness sliders are active. Since the grain is monochrome, only one slider is needed.


**Size**: Controls the size of the grain. The larger the Size setting, the larger the grain will be.


Note: You may not see an accurate representation of the grain in the viewer unless your timeline/composition is set to high quality and the viewer is set to a 1:1 pixel ratio.


#### Amount


The Amount parameters set the red, green and blue intensities of the grain. Film stocks generally have varying amounts of red, green and blue intensities with the blue intensity generally higher than the rest. If you turn the red, green and blue amount sliders to a value of 0, the grain will disappear.


**Red Amount**: Controls the intensity of the red grain.


**Green Amount**: Controls the intensity of the green grain.


**Blue Amount**: Controls the intensity of the blue grain.


**Softness**: The Softness parameter controls the softness of the grain. Normally, only minor softness adjustments are necessary, usually between a value of 0-1.


**Response Position**: Defines the portions of the image where grain will be added. A low Position value places grain in the darkest image values, while a high Position value places grain in the brightest areas.


**Response Range**: Increases or decreases the area where grain is added to the image based on the value of the Position slider. A low Range value indicates a narrow range of values, while a high Range value indicates a large range of values.


**Response Minimum**: Sets the minimum level of grain that is always added to the image. A Position value of 0 and a Range of 80 is typical of standard film, with grain applied to the entire range except the brightest whites with black being the most affected.


Note: You may not see an accurate representation of the grain in the viewer unless your timeline/composition is set to high quality and the viewer is set to a 1:1 pixel ratio.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Insert Filter Tutorial


1. Apply BCC+ Film Stocks from the BCC Film Styles unit category.
2. Click the BCC FX Editor button from the Effects and Presets banner. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Adjust the Size parameter.The larger the Size setting, the larger the grain will be. *Note:**You may not see an accurate representation of the grain in the viewer unless your timeline/composition is set to high quality and the viewer is set to a 1:1 pixel ratio.*
5. Manipulate the Red, Green and Blue Amount parameters.The Amount parameters set the red, green and blue intensities of the grain. Film stocks generally have varying amounts of red, green and blue intensities with the blue intensity generally higher than the rest. If you turn the red, green and blue amount sliders to a value of 0, the grain will disappear.
6. Change the Softness parameter.The Softness parameter sets the softness of the grain. Normally, only minor softness adjustments are necessary, usually between a value of 0-1.
7. Adjust the Response Position and Response Range to control where you will see grain in the image.In most cases, film grain is apparent over the entire image except the brightest whites with the black areas being the most affected. A low Response Position value places grain in the darkest image values, while a high Response Position value places grain in the brightest areas. Response Range will increase or decrease the area where grain is added to the image based on the value of the slider.
8. If you want, use Response Minimum to set the minimum level of grain that is always added to the image.
9. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.


