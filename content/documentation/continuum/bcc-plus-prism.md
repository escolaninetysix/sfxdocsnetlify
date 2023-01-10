{
"date": "2019-06-12",
"title": "BCC+ Prism",
"category": "BCC Stylize",
"link": "bcc-plus-prism/"
}

 
NEW IN CONTINUUM 2022, the BCC+ Prism filter generates prismatic color aberrations in the filtered source. Also includes a set of transforms that simultaneously smears pixels from the filtered source forward and backward along the Z axis in a straight and/or spiral direction. This filter is GPU accelerated for smooth and speedy results. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/11/PrismCombo-1024x288.jpg)
### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**GPU Rendering:** allows for the selection of GPU or CPU software rendering.


* *Default*: Uses the GPU to render the effect.
* *16 bit float*
* *32 bit float*
* *Disabled*: disables GPU rendering and allows for CPU software rendering.


**Smooth Mode**: select the method of smoothing used in the effect. 


* *Automatic*: Lets the filter set the level of smoothness in the image samples
* *Manual*: Manually sets the level of smoothness in the image samples


**Smoothness**: Sets the level of smoothness in the image samples when in manual mode


**Prism Weight**: Sets the smoothness of the prism with lower values generating a more visible stepped offset and higher values yielding a smooth continuous prism


#### **The Colors Group**


* **Short Color:** use to set the first color in the prism
* **Mid Color:** use to set the second color in the prism
* **Long Color***:* use to set the third color in the prism


#### **The Transformation Group**


* **Global Transform:** Globally adjusts all values in the transformation group allowing for simple, one parameter keyframing or adjustments.
* **Lock Center Start/End:** when checked the the center start and center end parameters will be bound to each other.
* **Center Start**: Sets the center point of the start of the blur
* **Center End:** Sets the center point of the end of the blur
* **Scale Start:** Sets the start point of the blur along the z axis
* **Scale End:** Sets the end point of the blur along the z axis
* **Angle Start:**Sets the start angle of the blur rotation
* **Angle End:**Sets the end angle of the blur rotation
* **Offset Start**: Offsets the start result along the z axis
* **Offset End:** Offsets the end result along the z axis


**Falloff :** Controls the bias of the blur falloff between the start and end for both position and angle


**Apply Mode:** Select from 24 apply/blending modes


**Apply Mix** – Mix selected apply mode back with normal apply mode.


**Edge Mode:** Determines how edges of the filtered frame are handled. 


* *Transparent:* allows the edge of the result to become transparent.
* *Repeat:* repeats edge pixels to generate opaque pixels along the edge of the result.
* *Reflect:* reflects pixels back into the result to generate opaque pixels along the edge of the result.


**Mix with Original:** Used to blend the filtered result with the unfiltered source. 


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here](/documentation/continuum/).


### Working with The Filter


1. Apply BCC+ Prism from the BCC Stylize unit.
2. Click the BCC FX Editor button. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Adjust the various colors.
5. Adjust the Center Start point.
6. Adjust the Center End point.
7. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.


