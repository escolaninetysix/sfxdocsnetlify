{
"date": "2019-06-12",
"title": "BCC Fast Lens Blur",
"category": "BCC Blur & Sharpen",
"link": "bcc-fast-lens-blur/"
}

  


[![BCC Fast Lens Blur](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Fast-Lens-Blur.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Fast-Lens-Blur.jpg)


### *New in BCC10*


### Overview


BCC Fast Lens Blur is a 100% GPU accelerated replacement for our original BCC Lens Blur.  BCC Fast Lens Blur uses OpenCL to emulate a lens blur defocus/rackfocus effect where out of focus highlights of an image clip take on the shape of the lens diaphragm. When a lens is used at it’s maximum aperture (fully open / set to the smallest f stop number) the out of focus highlights are typically in the shape of a circle, however, when the lens is stopped down (set to something other than the smallest f stop number) the blades inside the lens shape the out of focus highlights into multi-sided shapes. This filter includes a pop-up that can be used to match the different looks that can be achieved in the physical world based on the lens aperture setting. This pleasing optical result is referred to in photographic terms as Bokeh.


The BCC Fast Lens Blur filter also includes a comprehensive depth of field (Z-Depth) option, whereby a separate image can be used to control the depth and position of the focus field.


 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Quality pop-up**: 3 way pop-up containing options that affect the edges of the generated highlights.


* *Normal*
* *Sharp*
* *Sharper*


**Iris Scale**: Used to set the size of the highlight blur effect.


**Scale X**: Scales the highlight along the X axis only.


**Scale Y:** Scales the highlight along the Y axis only.


**Blur Alpha:**  Controls whether or not to blur the alpha channel along with the RGB channels.


**Gamma**: Used to control the image highlight gamma.


**View Iris checkbox**: When checked, displays the iris shape on a black background.


 


**Iris Group**


Contains parameters to control the shape and look of the generated highlights.


**Iris Shape pop-up:** Used to control the iris shape.


* *Circle*:­ Generates circular highlights (lens at maximum aperture /wide open).
* *3 -­ 16 Sides*:­ Sets the number of sides representing the number of shutter blades in the lens.


***Iris Curvature*:** Used to control the iris shape. Positive values produce rounded shapes, negative values produce diamond shapes.


***Iris Rotation*:** Used to rotate the angle of the iris.


***Bokeh*:** Used in conjunction with the Iris Shape pop-up to define the shape of the out of focus highlights.


***Bokeh Shading*:** Used to set the level of shading of the inner region of the highlights.


 


**Z Map Group**


Contains parameters to enable and control Z-Depth compositing within the filter.


**Mode pop-up**: Used to set the mode of the Z-Map function:


* *Off*: Default, the Z-Map function is disabled.
* *On*: The Z-Map function is enabled.
* *View Focus Map*: Displays the current state of the depth of field image.
* *View Z Map*: Displays the Z-Map input image.
* *Mask Defocused Pixels:* Displays a ruby red mask which is overlaid on the main image showing the pixels that are out of focus.


**Z Layer pop-up**: Used to select the layer that is used as the depth map image.


**Z Channel pop-up**: Used to select a channel from the layer that is used as the depth map image with the following options:


* *Luminance*
* *Alpha*
* *Red*
* *Green*
* *Blue*
* *Lightness*
* *PixelChooser*


**Invert Z:** Allows inverting the range of the Z Map image.


**Smoothness**: Higher values produce a smoother blur result.


**Focal Point**: Used to set the point along the Z axis which is in focus.


**Depth of Field**: Controls the depth of the focus field, or the amount of pixels that remain in focus.


**Z Gamma**: Adjusts the gamma levels of the Z Map input image.


**Near Scale**: Used to increase the size of the blur applied to the pixels that are closest to the camera.


**Far Scale**: Used to increase the size of the blur applied to the pixels that are farthest from the camera.


**Use Obscuration:** Controls whether or not to use Obscuration based on the Z Depth.


 


**Noise Group**


Contains parameters to control the level of noise in the highlights.


***Noise Intensity*:** Used to set the amount of noise in the highlights.


***Noise Scale*:** Used to set the size of noise structure in the highlights.


***Noise Stretch*:** Used to distort the noise structure in the highlights.


***Noise Blur*:** Used to smooth the generated noise in the highlights.


***Noise Seed:*** Used to set the random seed that controls the noise structure in the highlights.


 


**Highlights Group**


Contains parameters to control the highlights that are generated by the filter.


**Boost/Sup Mode pop-up**: Used to determine the way the highlights are composited into the image with the following options:


* *RGB Max*: Boosts the RGB values of the highlights.
* *RGB Glow*: Boosts the RGB and Saturation values of the highlights.
* *Luma Boost to White*: Boosts the Luminosity values and desaturates the highlights.
* *Luma*: Boosts the Luminosity values of the highlights.


**Highlight Boost**: Used to set the intensity of the highlight boosting – higher values result in brighter highlights.


**Highlight Threshold**: Used to set the cutoff point for highlight boosting.


**Suppress Threshold**: Used to set the intensity of the shadow boosting – higher values result in darker shadows.


**Boost Soften**: A slope control that softens the highlight and shadow boosting effect.


 


**Post Group**


Contains parameters for post processing the image.


***Apply Mode pop-up*:** Controls image apply modes for determining how the filtered is blended with the original image.


***Mix with Original:***Used to blend the filtered result with the unfiltered original image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 