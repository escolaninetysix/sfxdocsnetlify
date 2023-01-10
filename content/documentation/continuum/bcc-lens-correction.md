{
"date": "2019-06-12",
"title": "BCC Lens Correction",
"category": "BCC Image Restoration",
"link": "bcc-lens-correction/"
}

 [![8. BCC_LensCorrection](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/03/8.-BCC_LensCorrection.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/03/8.-BCC_LensCorrection.jpg)


 


### **Overview**


This filter was designed to reduce or remove image distortion in source image clips that were shot using a wide angle or fish-eye lens and to make simple perspective corrections.  The filter includes handy presets that were specifically designed for go-pro cameras.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Load / Save Preset Mechanism**


The built-in load save mechanism is used to access the factory installed or user generated presets.


 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

**Compare****Mode****po****p****-­up:**Controls what is displayed by the Compare Mode. The options are:


* *Off*shows the output of the filter.
* **Side By**Side*the left side of the output shows half of the incoming image, and the right side shows the same half of the image as processed by the filter. When in Side-by-Side mode, the corresponding Slide and Right Offset sliders become available.Wipe*enables the user to interactively wipe the effect across the image. The left side of the wipe bar on the image output shows the unfiltered image, while the right side of the wipe bar shows the filtered result. When in Wipe mode, the corresponding Wipe slider becomes available.
* *Wipe/Slide*operates as a Wipe function when Wipe is selected in Compare Mode, and as a Slide function when Side-­‐By-­‐Side is selected in Compare Mode. When in Wipe mode, adjustments to this parameter moves the vertical wipe bar across the image; the region on the left of the wipe bar shows the original unfiltered image, while the region on the right shows the filtered result. When in Slide mode, adjustments to this parameter pans the image in the viewer window, maintaining the spatial relationship in the viewer between the before and after images.
* *Right**Offset*provides a way to adjust the spatial relationship between the unfiltered original image and the filtered result in the viewer window. Adjustments to this parameter will offset the position of the filtered image in the viewer.


 


**Correction:**  Controls the magnitude of the lens warping correction.  Smaller values will correct for moderate warping, whereas more exaggerated fish-eye / wide angle distortions will require higher values. Use negative values to correct for Pincushion distortions.


**Scale Master:**  Controls the amount of scaling/zoom applied to your clip after the distortion has been removed.  Tweaking the scale control may allow you to recover more of the original shot but at the risk of reintroducing some lens warping at the outer edges.


**Scale X:**  Controls a separate scale factor in the horizontal direction.  Useful in tweaking footage that appears squished or stretched after perspective correction.


**Scale Y:**  Controls a separate scale factor in the vertical direction.  Useful in tweaking footage that appears squished or stretched after perspective correction.


**Rotation:**  Adjusts image rotation around the center point to allow fine tuning of the framing/perspective.


**Vertical Perspective:**  Make vertical perspective adjustments to restore straight lines to being exactly vertical.


**Horizontal Perspective:**  Make horizontal perspective adjustments to restore straight lines to being exactly horizontal.


**Pan:**  Adjust the framing of the final shot by translating the already corrected image horizontally and vertically.


**Lens Center:**  This parameter can generally be left at default settings but can be useful in fine tuning the lens distortion correction pass in situations where the lens center point (and hence the center point of the distortion) are slightly misaligned with the center of the image.


