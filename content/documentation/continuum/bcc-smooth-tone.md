{
"date": "2019-06-12",
"title": "BCC Smooth Tone",
"category": "BCC Image Restoration",
"link": "bcc-smooth-tone/"
}

 ### [![Smooth Tone](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Smooth-Tone.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Smooth-Tone.jpg)


### [![Smooth Tone 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Smooth-Tone-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Smooth-Tone-2.jpg)


### 


[![Smooth Tone 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Smooth-Tone-3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Smooth-Tone-3.jpg)


### [![Smooth Tone 4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Smooth-Tone-4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Smooth-Tone-4.jpg)


### Overview


The primary purpose of this filter is to control the smoothness of an input image or clip while retaining as much of the original image detail as possible. This process is achieved via the use of the image processing algorithms that are at the heart of the filter.


Basic use of the filter is that once it has been applied to a clip, the degree of smoothing is controlled by adjustments to the Radius parameter with higher values generating a smoother result and the degree of image sharpness if controlled by making adjustments to the range parameter, with higher values preserving less image detail.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

**Compare****Mode****po****p****-­up:**Controls what is displayed by the Compare Mode. The options are:


* *Off*shows the output of the filter.
* **Side By**Side*the left side of the output shows half of the incoming image, and the right side shows the same half of the image as processed by the filter. When in Side-by-Side mode, the corresponding Slide and Right Offset sliders become available.Wipe*enables the user to interactively wipe the effect across the image. The left side of the wipe bar on the image output shows the unfiltered image, while the right side of the wipe bar shows the filtered result. When in Wipe mode, the corresponding Wipe slider becomes available.
* *Wipe/Slide*operates as a Wipe function when Wipe is selected in Compare Mode, and as a Slide function when Side-­‐By-­‐Side is selected in Compare Mode. When in Wipe mode, adjustments to this parameter moves the vertical wipe bar across the image; the region on the left of the wipe bar shows the original unfiltered image, while the region on the right shows the filtered result. When in Slide mode, adjustments to this parameter pans the image in the viewer window, maintaining the spatial relationship in the viewer between the before and after images.
* *Right**Offset*provides a way to adjust the spatial relationship between the unfiltered original image and the filtered result in the viewer window. Adjustments to this parameter will offset the position of the filtered image in the viewer.


 


**Method pop-up**: Offers three different methods for image smoothing, each utilizing a different algorithm.


* *fastest*: quickest to set up and to render but offers less control than the smoother option
* *faster*: quick to set up and to render but offers less control than the smoother option
* *smoother*: generates the smoothest result and offers the most control over the image sharpness


**Lock Radius Checkbox**: Changes the value of the Y parameter to the value of the X parameter and locks them together so that when the value of the X parameter is change, the value of the Y parameter will also change by the same amount.


**Radius X**: Used to control the amount of smoothness that is applied along the X axis of the image. Higher values generate a smoother result.


**Radius Y**: Used to control the amount of smoothness that is applied along the X axis of the image. Higher values generate a smoother result.


**Blur Cutoff**: The value in this parameter determines the point at which the smoothness will cease to have any effect on the image.


**Max. Deviation**: used to control the amount of image detail that is preserved during the smoothing process. A value of 0 does not smooth any pixels, a value of 100 smoothes every pixel in the image.


**Iterations**: Repeats the filter process as if the user had applied multiple versions of the filter with the same settings to the image. A value of 1 applies the filter once, while higher values will increase the number of times that the filter is applied.


**Apply Mode**: This pop-up contains all of the apply mode compositing options, such as Add, Multiply, Difference etc.


**Apply Mix**: Used to blend the currently selected Apply Mode with the Normal Apply Mode.


**Mix with Original**: Used to blend the filtered result with the original image.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 