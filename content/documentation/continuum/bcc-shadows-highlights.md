{
"date": "2019-06-12",
"title": "BCC+Shadows/Highlights",
"category": "BCC Color & Tone",
"link": "bcc-shadows-highlights/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Shadows/Highlights filter lowers contrast evenly throughout the image by brightening shadow areas and darkening highlights. It is useful for correcting dark foreground subjects due to strong backlighting as well as highlights that are slightly washed out. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_367.png)**Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


#### Shadows


* **Shadows**: Raises the brightness of the shadows.
* **Position**: Selects the shadow values to be adjusted.
* **Range**: Controls the range of values to be used for the shadows. A higher Range value considers more values as shadows.


#### Highlights


* **Highlights**: Lowers the brightness of the highlights.
* **Position**: Selects the highlight values to be adjusted.
* **Range**: Controls the range of values to be used for the highlights. A higher Range value considers more values as highlights.


#### Working with Matte Parameters


BCC+ Shadows/Highlights utilizes matte position and range values to adjust the shadows and highlights. The above Position and Range parameters are further elaborated on here:


**Position:** Pinpoints the color values to be used in the matte. For a luminance matte, a Position value of 100 would make a white matte of the highlights and a value of 0 would make a white matte of the shadows. In the flower image below, look at how the matte varies for different Position values in a red extraction. When the Position is at a value of 100, the red flowers are shown as white in the matte.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_349.gif)Position=100, Range=25
When the Position is moved to 50, the red flowers turn black.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_350.gif)Position=50, Range=25
**Range:** Increases or decreases the range of values in the matte. A low Range value indicates a narrow range of values. A high Range value indicates a large range of values included in the matte.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Shadows/Highlights from the BCC Color and Tone unit category.
2. Click the BCC FX Editor button from the Effects and Presets banner. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Adjust the Shadows > Shadows slider to brighten shadow areas.
5. Adjust the Highlights > Highlights slider to darken highlight areas.In some of the filters, a matte is generated to create the desired effect–in this case, lowering contrast.
6. Change your View to Shadows or Highlights to see the matte values.The areas that are white in the matte are the areas that will be adjusted by either the Shadows or Highlights sliders. The areas defined as Shadows or Highlights can be adjusted by modifying the Position and Range parameters.
7. Use the Shadows or Highlights > Position parameters if you want to select different values to be used for the matte.
8. Increase the Shadows or Highlights > Range controls to add more values to the matte. Decrease for less values.
9. Change your View to Output to see the image.
10. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.


