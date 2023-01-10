{
"date": "2019-06-12",
"title": "BCC+Depth of Field",
"category": "BCC Optical Diffusion",
"link": "bcc-depth-of-field/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Depth of Field filter simulates   
Depth of Field by isolating and blurring only a portion of the image. The amount of blurring is directly proportionate to the luminance of the matte settings, a gradient or an input image. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_210.png)**Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**Depth**: Selects the source for the selective blur effect.


* *Matte*: Use a matte for the depth source.
* *Grad*: Use a gradient for the depth source.


**Input**: Use an image as the depth source. This is useful for 3D programs which render out depth mattes.


1. After Effects / Premiere Pro
	* Change Depth > Depth to Input.
	* Select the layer/track you want to use from the Depth > Input selector.
2. Final Cut Pro X
	* Change Depth > Depth to Input.
	* Click the drop zone to the right of the Depth Input parameter, choose a clip, and press Apply Clip below the Viewer.
3. Motion
	* Change Depth > Depth to Input.
	* Drag the image to be used as the depth input and place it onto the drop zone to the right of the Depth > Input parameter.
4. Avid Editing Systems
	* Place images on two adjacent video tracks.
	* Apply the Depth of Field filter to the upper track of the two adjacent tracks.
	* Change Depth > Depth to Input.
	* The track below the one that you added Depth of Field to is used as the depth source.
5. OFX Hosts
	* Assign the image to be used as the depth source.
	* Note**:**Using an image as the depth source is only available in OFX hosts that support auxiliary inputs. Consult the host documentation for instructions on how to assign a source input as this will vary by host.
	* Change Depth > Depth to Input.
	* The assigned input will now be used as the depth source.


**Blur**: Sets how much the image is blurred.


#### Grad


Depth of Field can optionally use a gradient that limits where the filter is applied. Grad is the transition area that goes from the blurred portion to the original image. Its direction, corners and size can be adjusted. 


**Enable**: Turns the grad on and off.


**Type**: Controls the direction of the grad.


* *Top-to-bottom*: The direction of the grad is from top to bottom.
* *Bottom-to-top*: The direction of the grad is from bottom to top.
* *Left-to-right*: The direction of the grad is from left to right.
* *Right-to-left*: The direction of the grad is from right to left.
* *Horizontal Strip*: Horizontal strip grad.
* *Vertical Strip*: Vertical strip grad.


**Size**: The size of the grad.


**Angle**: The angle of the grad.


Note: In some host programs, you must highlight the effect title in the Effect Controls window to see the on-screen controls.


#### Matte


A matte can be used to create the depth of field effect. Go to the Matte section of Common Filter Controls to see how the Matte controls work.


* **Position**: Selects the values to be adjusted.
* **Range**: Controls the range of values to be used for the matte. A higher Range value considers more values.
* **Blur**: blurs the matte with a quality blur.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Depth of Field from the BCC Optical Diffusion unit
2. Click the BCC FX Editor button.The BCC FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Adjust the Blur sliders to your liking. In some of the filters, a matte is generated to create the desired effect–in this case, depth of field.
5. Change your View to Depth to see the matte values.The areas that are white in the matte are the areas where blur will be introduced. The location of the blur within the scene can be adjusted by modifying the Matte > Position and Range parameters.
6. Change the Matte > Position parameter if you want to select different values to be used for the matte.
7. Increase the Matte > Range control to add more values to the matte. Decrease for less values.
8. Increase the Matte > Blur parameter to soften the transition areas of the matte.
9. Change your View to Output to see the filtered image.The Depth of Field filter can also use a grad or an image as the depth source instead of the matte.
10. Set the Depth to Grad.
11. Adjust the Grad > Type, Corner Points, Size and Angle.To adjust the Corner Points, just click and drag them to the desired location.
12. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.


