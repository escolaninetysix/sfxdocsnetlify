{
"date": "2019-06-12",
"title": "BCC Chroma Key",
"category": "BCC Key & Blend",
"link": "bcc-chroma-key/"
}

 

|  |  |
| --- | --- |
| [![woman.original1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/woman.original1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/woman.original1.jpg) | [![chroma.matte](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/chroma.matte_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/chroma.matte_.jpg) |
| Source Image | Filtered Image |


### Overview


Chroma Key is used for compositing camera footage shot using a blue, green, or red screen as a backdrop over a new background video or a still image from a separate file.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


The **Output menu** determines whether the composite image or the matte displays in the Comp or Canvas window. Composite displays the composited effect. Show Matte allows you to view the matte as you adjust it. Set the Output menu to Composite before rendering.


Increasing **Density** makes transparent areas more transparent and opaque areas more opaque. Too much Density can degrade the matte.


**Balance** adjusts the balance between density and lightness. Adjusting balance can enhance semi-transparent foreground objects and shadows.


Increasing **Lightness** makes the entire matte more transparent. Boosting transparency might be necessary to ensure that the background shows through semi-transparent areas, although too much Lightness can result in print-through–that is, the background image might show through the foreground subject.


Use the eyedropper to choose a key **Color** from the image background. If you are working with a human subject, pick a color from a background location close to the subject’s hair line, but not in the hair itself. If the default key Color pulls a matte which removes a lot of the source image, it can be difficult to use the eyedropper to select a different key Color. Temporarily hide the filter and pull the correct matte color from the unfiltered image.


 


**Color Weight Parameter Group**


**Red, Green**, and **Blue** adjust the weight of the corresponding color channel in creating the matte. Adjusting the weights of the color channels slightly changes the key Color and can help improve the matte.


 


**Spill Suppression Parameter Group**


After you are satisfied with the matte, check the for color spill–that is, the presence of the background color in the foreground. If a spill is present you can substantially reduce it by modifying Spill Ratio, Tone Mix, and Tone Range. It is best to adjust the controls in the order described. If necessary, you can use the Crop Top-Left and Crop Matte Bot-Right parameters to create a region outside which all pixels become transparent, which can help remove unwanted objects in the foreground.


The first step in spill removal is to adjust **Spill Ratio** until most of the background color is gone from the foreground. Lowering Spill Ratio to 0 creates a magenta (if the key color is green) or yellow (if the key color is blue) tint in the foreground. Increasing this value to 200 leaves the original foreground color unchanged, with no adjustment for spill.


**Tone Mix** has the opposite effect of Spill Ratio; it adds background color to the foreground image. For example, if you work with a green screen image, you can increase Tone Mix to compensate for magenta tint created by lowering the Spill Ratio.


Increasing **Tone Range** increases the range of the foreground color mix, which can also help restore the original color to the flesh areas.


**Crop Top-Left** and **Crop Bot-Right** define the upper left and bottom right corners of a rectangle that contains the foreground image. All points outside of this rectangle are fully transparent. This area is called a garbage matte because it discards parts of the color channel information. Such a matte is useful for getting rid of unwanted foreground objects or shadows in the background color that prevent it from keying out.


