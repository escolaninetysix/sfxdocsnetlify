{
"date": "2019-06-12",
"title": "BCC+Low Contrast",
"category": "BCC Color & Tone",
"link": "bcc-low-contrast/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Low Contrast filter spreads highlights into darker areas, lowers contrast and keeps bright areas bright. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_302.png)**Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


#### Contrast


* **Light Brightness**: Sets the intensity of the light that is spread into darker areas.
* **Light Spread**: Sets how far light is spread from bright areas to darker areas.
* **Shadow Brightness**: Adjusts the brightness of the shadow areas.


#### Matte


A matte is used to create the light spread effect.Wherever there is white in the matte is where the contrast adjustment will occur. 


**Position:** Pinpoints the color values to be used in the matte. For a luminance matte, a Position value of 100 would make a white matte of the highlights and a value of 0 would make a white matte of the shadows. In the flower image below, look at how the matte varies for different Position values in a red extraction. When the Position is at a value of 100, the red flowers are shown as white in the matte.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_349.gif)Position=100, Range=25
When the Position is moved to 50, the red flowers turn black.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_350.gif)Position=50, Range=25
**Range:** Increases or decreases the range of values in the matte. A low Range value indicates a narrow range of values. A high Range value indicates a large range of values included in the matte.


**Blur:** The matte is blurred by a quality blur.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Low Contrast from the BCC Color and Tone unit category.
2. Click the BCC FX Editor button from the Effects and Presets banner. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Adjust the Contrast > Light Brightness and Contrast > Light Spread to control the brightness and distance of the light being spread into the shadow areas.In some of the filters, a matte is generated to create the desired effect–in this case, low contrast.
5. Change your View to Matte to see the matte values.The areas that are white in the matte will be the image areas used to spread light into the shadow areas. The location of the low contrast within the scene can be adjusted by modifying the Matte > Position and Range parameters.
6. Change the Matte > Position parameter if you want to select different values to be used for the matte.
7. Increase the Matte > Range control to add more values to the matte. Decrease for less values.
8. Change your View to Spread to see the special matte used to create the low contrast effect.The Spread matte will change as the Contrast > Light Spread slider is adjusted.
9. Move the Contrast > Light Spread slider to see how it affects the Spread matte. Leave it at a value of 200 when you are done.
10. Change your View to Output to see the filtered image.
11. Adjust the Contrast > Shadow Brightness if your shadows are still too dark.
12. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.



