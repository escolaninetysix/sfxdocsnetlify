{
"date": "2019-06-12",
"title": "BCC Pixel Fixer",
"category": "BCC Image Restoration",
"link": "bcc-pixel-fixer/"
}

 [![Pixel Fixer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pixel-Fixer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Pixel-Fixer.jpg)


### Overview


The primary purpose of the BCC Pixel Fixer filter is to fix bad pixels caused by bad pixels on the sensor in digital video and still cameras. The secondary purpose of the filter is to fix bad spots on digital still images caused by dust on the sensor.


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


 


**Use Shape 1 for All:** Checkbox, if on (default) filter assumes all bad pixels are the same shape. 


**Blur Tuning**: Tunes the blur amount used in blurring the background image around the bad spot. 


**Point 1 Enable checkbox**: Enable fixing for point 1.


**Point 1**: Used to set the position point for Point 1.


**Size controls (Lock, X and Y)**: If the “Use Shape 1 for All” feature is enabled, only the first Size control is used, and they are called “Size”, not “Size 1” in hosts that support dynamic renaming.


**Size Y** controls the number of pixels to be erased on each side of the bad pixel. Because of compression, a bad pixel in the sensor usually affects more than one pixel in the image. Pushing this past 5 or 6 will usually show an obvious box in the render. By default, size Y is locked to X, but they can be controlled independently, which is probably more useful for dust spots than for bad pixels in the sensor.


**More Points**: This group contains the parameter controls for points 2 – 10. They are at the bottom of the UI, on the assumption that most of the time the user will lock these to Size 1.


