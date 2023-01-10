{
"date": "2019-06-12",
"title": "BCC+Glow Edges",
"category": "BCC Lights",
"link": "bcc-glow-edges/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Glow Edges filter isolates lines and edges in an image and then adds glow only to these areas resulting in a stylized look. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_235.png)**Before and After**
### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


#### Glow


**Blend**: Determines the blend mode to be used to create the glow effect.


* *Add*: The glow is added to your image.
* *Screen*: The glow is combined with the image using a Screen blend mode. This looks kind of like the Add blend mode, but highlights are retained.


**Brightness**: Sets the intensity of the glow.


**Blur**: Sets the softness of the glow.


**Color**: The Color parameter sets the color of the glow through the use of a standard color picker. The default color is white.


#### Edge


An edge matte is created to produce the edge glow effect.


**Brightness**: Determines the brightness of the edge matte.


**Blur**: Blurs the edge matte.


#### Alpha


**Glow From Alpha:**The Glow From Alpha option generates the image glow from the alpha channel instead of or in addition to the color channels. The selection in the Glow From Alpha Mode determines how the alpha glow and the color channel glows are combined. 


**Glow Under Source:** Use this function to control how the glows are composited with alpha source clips – a setting of zero composites the glow on top of the source and disregards the source alpha channel, while a setting of 100 composites the glow behind opaque regions in the source but allowing them to extend out into the transparent regions. 


**Mix with Original:** Used to blend the filter effect back with the unfiltered input image.




**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Glow Edges from the BCC Lights unit category.
2. Click the BCC FX Editor button from the Effects and Presets banner. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Select either the Add or Screen Blend mode. Add will burn out highlights while the Screen mode will retain them.
5. Adjust the Glow > Brightness, Blur and Color settings to your liking.In Glow Edges, an edge matte is generated to create the desired effect.
6. Change your View to Edge to see the matte values.The areas that are white in the edge matte are the areas where glow will be introduced.
7. Adjust the Edge > Brightness to make sure that you have sufficient white areas in the edge matte.
8. Set the Edge > Blur to smooth out the edge matte.
9. Change your View to Output to see the filtered image.
10. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.


