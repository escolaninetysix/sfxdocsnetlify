{
"date": "2019-06-12",
"title": "BCC+ Radial Blur",
"category": "BCC Blur & Sharpen",
"link": "bcc-plus-radial-blur/"
}

 
NEW IN CONTINUUM 2022.5, the BCC+ Radial Blur Filter creates a blur around a specific point, simulating the affect of a zooming or rotating camera. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2022/04/RadBlr.jpg)Before and After
### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**GPU Rendering:** allows for the selection of GPU or CPU software rendering.


* *Default*: Uses the GPU to render the effect.
* *16 bit float*
* *32 bit float*
* *Disabled*: disables GPU rendering and allows for CPU software rendering.
* 


**Blur Type**: Selects the style of the blur and the overall quality of the effect.


* *Box*: the fastest option but with the least smooth result.
* *Pyramid*: offers the performance boost of a box but with some of the smoothness that approaches a gaussian. This is the default setting of the filter.
* *Pyramid Smoother*: an extra smoothing pass over a standard Pyramid and closer to the look of a gaussian.
* *Gaussian*: the smoothest result but not quite as fast as the other options.


**Center**: Used to set the coordinates of the center of the radial blur along the X and Y axis. 


**Radial Amount**: Used to control the amount of blur that is applied to any moving pixels in the image.


**Rotation Amount**: Used to control the amount of the rotation that is applied to any moving pixels in the image


**Falloff:** Used to control transition between the blured and unblured areas. Higher values will result in a softer edge. 


**Smooth Mode**: Used to select the method of smoothing used in the effect. 


* *Automatic*: Lets the filter set the level of smoothness in the image samples.
* *Manual*: Manually sets the level of smoothness in the image samples.


**Smoothness**: Sets the level of smoothness in the image samples when in manual mode. Higher values will result in smoother image samples. 


**Edge Mode:** In some effects the filter can create instances where the image becomes offset creating areas along the edges of the frame where no image appears. Edge Mode options allow for different methods of handling those pixels. 


* *Transparent:* allows the edge of the result to become transparent.
* *Repeat:* repeats edge pixels to generate opaque pixels along the edge of the result.
* *Reflect:* reflects pixels back into the result to generate opaque pixels along the edge of the result.


**Apply Mode:**  Used to control how the filtered image is composited with the source image. 


**Apply Mix** controls the mix of the specified Apply Mode with the Normal apply mode. If the Apply Mode is Normal, Apply Mix has no affect and the parameter does not appear. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the affect of the filter by mixing it with the source image.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


