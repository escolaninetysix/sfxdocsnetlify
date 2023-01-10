{
"date": "2019-06-12",
"title": "BCC+Center Spot",
"category": "BCC Optical Diffusion",
"link": "bcc-center-spot/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Center Spot filter diffuses and blurs distracting backgrounds while keeping a center spot in focus. The center spot can be moved, sized and the amount of blur can be controlled. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_182.png)**Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**Blur**: Used to control the main blur amount. 


#### Spot


A spot in the form of a radial gradient is used to control where blur is added to the image. 


* **Position**: There is an on-screen control in the center of the image. By clicking and dragging the on-screen control, the position of the spot can be adjusted.
* **Position X**: The horizontal position of the spot.
* **Position Y**: The vertical position of the spot.
	+ Note: In some host programs, you must highlight the effect title in the Effect Controls window to see the on-screen controls.
* **Aspect**: The aspect ratio of the spot.
* **Radius**: The un-blurred radius of the spot.
* **Falloff Radius**: The blurred edge radius.
* **Falloff**: Moves the falloff towards the spot center point.
* **Invert**: Inverts the spot.


#### Temperature


Applies a warming filter to the image.


**Color**: Sets the color through the use of a standard color picker.


**Opacity**: Sets the opacity of the warming or cooling.


**Preserve Highlights**: Preserves the white areas of the image.


**Exposure Compensation**: Exposure Compensation adds back the brightness loss as a result of the warming or cooling.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Center Spot from the Optical Diffusion unit.
2. Click the BCC FX Editor button from the Effects and Presets banner. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. 
5. Adjust the Spot > Position by clicking and dragging the center image point to the desired location.
6. Set the Radius, Falloff Radius and Falloff.The area covered by the spot will be in focus with all other areas blurred.
7. If you are curious, you can see what the Spot looks like by changing your View to Spot. Change your View to Output when done.
8. Adjust the Horizontal and Vertical Blur to your liking.
9. Adjust the Temperature > Color and Opacity sliders to your liking.
10. Click the Apply button to return to the host application. .


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.


