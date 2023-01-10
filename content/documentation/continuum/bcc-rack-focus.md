{
"date": "2019-06-12",
"title": "BCC+Rack Focus",
"category": "BCC Optical Diffusion",
"link": "bcc-rack-focus/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Rack Focus filter replicates a true camera defocus by introducing lens Bokeh effects. Bokeh is the Japanese term that describes the quality of out-of-focus points of light. In defocused areas, each point of light becomes a shape–either a circle or a polygon. The shape grows in size as the amount of defocusing is increased. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_335.png)**Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**Blur**: The image is blurred by using a quality blur.


#### Aperture


 **Blend**: Determines the blend mode to be used when adding Bokeh.


* *Add*: Bokeh’s are added to your image.
* *Screen*: The Bokeh are combined with the image using a Screen blend mode. This looks kind of like the Add blend mode, but highlights are retained.


**Brightness**: Brightens the Bokeh.


**Facets**: Set the number of Bokeh facets when the Curvature parameter is set to 0.


**Curvature**: Controls the curvature of the Bokeh. When set to 100, the Bokeh are completely round. Set to a value of 0 to see a polygonal shape.


**Angle**: Rotates the Bokeh.


**Color**: Sets the Bokeh color.


**Blur**: Sets the softness of the Bokeh. This can be useful when using high threshold values.


#### Matte


 A matte is used to create the Bokeh effect.


**Position:** Pinpoints the color values to be used in the matte. For a luminance matte, a Position value of 100 would make a white matte of the highlights and a value of 0 would make a white matte of the shadows. In the flower image below, look at how the matte varies for different Position values in a red extraction. When the Position is at a value of 100, the red flowers are shown as white in the matte.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_349.gif)Position=100, Range=25
When the Position is moved to 50, the red flowers turn black.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_350.gif)Position=50, Range=25
**Range:**Increases or decreases the range of values in the matte. A low Range value indicates a narrow range of values. A high Range value indicates a large range of values included in the matte.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Rack Focus from the BCC Optical Diffusion unit.
2. Click the BCC FX Editor button. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Adjust the Blur to your liking.
5. Set the Aperture > Brightness and Color settings.
6. Change the Aperture > Facets to control the polygon’s shape and use Angle to rotate the Bokeh.
7. Set the Aperture > Curvature to 100 if you prefer the Bokeh to be circular in shape.In some of the filters, a matte is generated to create the desired effect–in this case, Bokeh effects.
8. Set your View to Matte to see the matte values.The matte has been preset to a highlight matte to generate the Bokeh effect. The areas that are white in the matte are the areas where Bokeh will be introduced. The location of the Bokeh within the scene can be adjusted by modifying the Matte > Position and Range controls.
9. Change the Matte > Position parameter if you want to select different luminance values to be used for the matte.Bokeh will be generated wherever there are white values in the matte.
10. Change your View to Aperture to see the Bokeh.
11. Increase the Matte > Range value to add more Bokeh into the scene. Decrease for less Bokeh.
12. Change your View to Output to see the filtered image.
13. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.



 