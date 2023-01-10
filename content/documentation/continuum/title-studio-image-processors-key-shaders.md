{
"date": "2019-06-12",
"title": "Title Studio- Image Processors - Key Shaders",
"category": "Tutorial",
"link": "title-studio-image-processors-key-shaders/"
}

 #### Key Shaders


In this section we will cover the available Keying IP Shaders that are available in Title Studio with Continuum 2019.  Keying Shaders allow the user to define a color key to add transparency to the source for advanced compositing effects. There are three types of image keying that can be applied to an object, material or scene in Title Studio:


* **Key-Chroma Key** is used for compositing footage shot using a blue, green, or red screen as a backdrop over a new background video or a still image from a separate file.
* **Key-Difference** creates a key based on the difference between an HSV or RGB color and the colors of the individual pixels in the source.
* **Key-Luma Key** creates a key from a single channel in the source.


#### 


#### Chroma Key


The **Key-Chroma Key**IP Shader is used for compositing footage shot using a blue, green, or red screen as a backdrop over a new background video or a still image from a separate file. It examines the RGB channels of each pixel, then differentiates between foreground and background pixels based on the chosen key color.


Chroma Key creates transparency by examining the ratio of the key color to the other color channels, not to the color level alone. For example, pure green and pure white both contain a green level of 255, but the ratio of green to red and blue is much higher in the pure green pixel. Therefore, the green pixels in the background are the most transparent, a light green pixel is semi-transparent, and a white pixel is opaque.


The **Type** menu lets you quickly define chroma keys based on different color channels. Choose from the following types of keys:


* **ChromaKey** lets you define a custom Key Color and then refine the keying, by defining the Matte Density, Matte Lightness, and Matte Balance; specifying the Red, Green, and Blue Weights; and adjusting the Flare Ratio, Flare Mix, and Flare Range.
* **ChromaKey Blue** creates a Blue Key and lets you refine it by: defining the Matte Density, Matte Lightness, and Matte Balance; specifying the Red, Green, and Blue Weights; and adjusting the Flare Ratio, Flare Mix, and Flare Range.
* **ChromaKey Green** creates a Green Key and lets you refine it by: defining the Matte Density, Matte Lightness, and Matte Balance; specifying the Red, Green, and Blue Weights; and adjusting the Flare Ratio, Flare Mix, and Flare Range.
* **ChromaKey Red** creates a Red Key and lets you refine it by: defining the Matte Density, Matte Lightness, and Matte Balance; specifying the Red, Green, and Blue Weights; and adjusting the Flare Ratio, Flare Mix, and Flare Range. Use the eyedropper to choose a Key Color from the image background. If you are working with a human subject, pick a color close to the subjectís hair line, but not in the hair itself.


Increasing **Matte Density** makes transparent areas more transparent and opaque areas more opaque. Too much Density can degrade the matte.


Increasing **Matte Lightness** makes the entire matte more transparent. Boosting transparency might be necessary to ensure that the new background shows through in semi-transparent areas. However, too much Lightness can result in ìprint-throughîñthat is, the background image might show through the foreground subject.


**Matte Balance** adjusts the balance between Density and Lightness. Adjusting Matte Balance can enhance semi-transparent foreground objects and shadows. Red Weight, Green Weight, and Blue Weight adjust the weight of the corresponding color channel in creating the matte. Adjusting the weights of the color channels slightly changes the Key Color and can help improve the matte. After you are satisfied with the matte, check the image in the Composite Window for color spill that is, the presence of the background color in the foreground. If spill is present you can substantially reduce it by modifying the Spill Ratio, Tone Mix, and Tone Range. It is best to adjust the controls in the order described.


The first step in flare removal is to adjust **Spill Ratio** until most of the background color is gone from the foreground. Lowering **Spill Ratio** to 0 creates a magenta (if the key color is green) or yellow (if the key color is blue) tint in the foreground. Increasing this value to 200 leaves the original foreground color unchanged, with no adjustment for spill.


**Tone Mix** has the opposite effect of Spill Ratio; it adds background color to the foreground image. For example, if you work with a green screen image, you can increase Tone Mix to compensate for magenta tint created by lowering the Spill Ratio.


Increasing **Tone Range** increases the range of the foreground color mix, which can also help restore the original color to flesh areas.


 


#### Difference


The **Key-Difference** IP Shader creates a key based on the difference between an HSV or RGB color and the colors of the individual pixels in the source.


The Type menu options include:


* **HSV Difference** sets a color range for a key based on the difference between the chosen Key Color and the individual pixels in the HSV color model.
* **HSV Difference** **Invert** uses the inverse of HSV Difference as the key.
* **RGB Difference** sets a color range for a key based on the difference between the chosen Key Color and the individual pixels in the RGB color model.
* **RGB Difference Invert** uses the inverse of RGB Difference as the key.


 


**Key Color** allows you to select the color from the image background. You can use the color chip, but it is recommended that you use the eyedropper instead If you are working with a human subject, pick a color close to the subject’s hair line, but not in the hair itself.


**Color Similarity** keys out a wider or narrower range of pixels based on the similarity to the Key Color specified.


 


#### Luma Key


The **Key-Luma Key** IP Shader creates a key from a single channel in the source. This type of image processor is called a luma key, because the key is usually created from the image luminance, but you can also use any single RGB channel. You might want to examine the individual channels of the source and use a channel that provides more contrast between the foreground and background than the luma channel.


The **Type** menu determines how the key uses the Threshold value and the imageís color or luminance information.


* **Luma Key** keys out pixels whose value is higher than the Threshold value.
* **Luma Key Invert** keys out pixels whose value is lower than the Threshold value.
* **Luma Darker Key** keys out pixels whose value is close to the Threshold value, within the range set by Key Similarity.
* **Luma Darker Key Invert** keys out pixels whose value is not close to the Threshold value, outside of the range set by Key Similarity.


**Color Similarity** sets a range of luminance values for which pixels key out or are kept in, depending on whether Similar or Dissimilar is chosen as the Key Type. The Similarity value and the Key Type can create mattes that change from opaque to transparent as the luminance changes from black to white.


 


