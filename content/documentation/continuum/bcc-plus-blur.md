{
"date": "2019-06-12",
"title": "BCC+ Blur",
"category": "BCC Blur & Sharpen",
"link": "bcc-plus-blur/"
}

 
NEW IN CONTINUUM 2022, the BCC+ Blur filter applies a basic blur effect to the image. This filter is GPU accelerated for smooth and speedy results.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/11/BlurCombo-1024x288.jpg)
### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**GPU Rendering:** allows for the selection of GPU or CPU software rendering.


* *Default*: Uses the GPU to render the effect.
* *16 bit float*
* *32 bit float*
* *Disabled*: disables GPU rendering and allows for CPU software rendering.


**Blur Quality**: Selects the style of the blur and the overall quality of the effect.


**Blur:** Used to control the main blur amount


**Blur X:** Used to adjust the blur amount along the horizontal (X) axis


**Blur Y:** Used to adjust the blur amount along the vertical (Y) axis  



**Edge Mode:** Determines how edges of the filtered frame are handled 


* *Box*: the fastest option but with the least smooth result.
* *Pyramid*: offers the performance boost of a box but with some of the smoothness that approaches a gaussian. This is the default setting of the filter.
* *Pyramid Smoother*: an extra smoothing pass over a standard Pyramid and closer to the look of a gaussian.
* *Gaussian*: the smoothest result but not quite as fast as the other options.


* *Transparent:* allows the edge of the result to become transparent.
* *Repeat:* repeats edge pixels to generate opaque pixels along the edge of the result. This is the default setting of the filter.
* *Reflect:* reflects pixels back into the result to generate opaque pixels along the edge of the result.


**Mix with Original:** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


**PixelChooser:**The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.  
  
For more information on the PixelChooser, [Click Here.](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Blur from the Blur unit.
2. Click the BCC FX Editor button. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Adjust the Blur Amount.
5. Adjust the Blur X or Blur Y amount.
6. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.


