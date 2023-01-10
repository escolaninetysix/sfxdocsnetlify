{
"date": "2019-06-12",
"title": "BCC+ Channel Blur",
"category": "BCC Blur & Sharpen",
"link": "bcc-plus-channel-blur/"
}

 
NEW IN CONTINUUM 2022, the BCC+ Channel Blur filter allows for the bluring of an image with options to control the level of blurring independently over each RGBA color channel in the filtered source. This filter is GPU accelerated for smooth and speedy results.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/11/ChannelBlurCombo-1024x288.jpg)
### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**GPU Rendering:** allows for the selection of GPU or CPU software rendering.


* *Default*: Uses the GPU to render the effect.
* *16 bit float*
* *32 bit float*
* *Disabled*: disables GPU rendering and allows for CPU software rendering.


**Blur Quality**: Selects the style of the blur and the overall quality of the effect


* *Box*: the fastest option but with the least smooth result,
* *Pyramid*: offers the performance boost of a box but with some of the smoothness that approaches a gaussian. This is the default setting for the filter.
* *Pyramid Smoother*: an extra smoothing pass over a standard Pyramid and closer to the look of a gaussian.
* *Gaussian*: the smoothest result but not quite as fast as the other options.


**Blur:** Used to control the main blur amount.


**Blur X:** Used to adjust the blur amount along the horizontal (X) axis.


**Blur Y:** Used to adjust the blur amount along the vertical (Y) axis.  



**Blur Red:** Used to adjust the blur amount in the red color channel.


**Blur Green:** Used to adjust the blur amount in the green color channel.


**Blur Blue:** Used to adjust the blur amount in the blue color channel.


**Blur Alpha:** Used to adjust the blur amount in the alpha channel.


**Edge Mode:** Determines how edges of the filtered frame are handled 


* *Transparent:* allows the edge of the result to become transparent.
* *Repeat:* repeats edge pixels to generate opaque pixels along the edge of the result.
* *Reflect:* reflects pixels back into the result to generate opaque pixels along the edge of the result.


**Mix with Original:** Used to blend the filtered result with the unfiltered source. 


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Channel Blur from the Blur unit.
2. Click the BCC FX Editor button. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Adjust the Blur Amount.
5. Adjust the values of the red, green and/or blue blur.
6. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.



 