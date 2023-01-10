{
"date": "2019-06-12",
"title": "BCC Correct Selected Color",
"category": "BCC Color & Tone",
"link": "bcc-correct-selected-color/"
}

 

|  |  |
| --- | --- |
| [![levels.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg) | [![correctselected.filtered.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/correctselected.filtered.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/correctselected.filtered.2.jpg) |
| Source image | Filtered image |


### Overview


This filter allows you to adjust a specified range of colors in the source image, leaving colors outside the range unaffected.  To correct two or more separate colors within an image, apply the Correct Selected filter as many times as needed.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


The **View menu** determines which portion of the effect is displayed in the Effect Preview monitor. Choose *Output* to view the entire effect. Choose *Matte* to view the matte created by the effect. Choose *Source* to view the unfiltered source clip.


**Color Matching** determines how the filter matches colors.


* *RGB* matches colors in RGB space.
* *HSL* matches colors in HSL (Hue, Saturation, and Lightness) space.
* *Chroma* matches colors based on Hue and Saturation only.
* *Hue* matches colors based on Hue alone.


**Color** sets the color of the pixels to correct. For best results, use the eyedropper to select the color from your source image.


**Color** **Range** controls the extent of the range of colors to correct. A setting of 0 applies corrections only to pixels that exactly match the Selected Color. Increase the Color Range value to apply corrections to a wider range of colors.


**Blend** creates a blend between the selected and unselected regions in the filtered image. Use this parameter to soften discontinuities between the two regions.


**Blur** **Matte** blurs the matte created by the filter between the selected and unselected regions.


**Choke** applies a choke to the image. Positive Choke values tighten the matte around the selected regions, while negative values pull the matte away from the edges of the selected regions.


**Reverse** **Color** **Range** reverses the range of colors to be corrected.


**Brightness** adjusts the brightness of the image. Increasing the Brightness setting pushes colors toward white, and decreasing the setting pushes colors toward black.


**Contrast** adjusts the contrast of the image. Increasing the Contrast setting pushes colors toward pure colors, and decreasing the setting pushes colors toward 50% gray.


**Hue** cycles the colors in the image around the color wheel in the HSL color space. Most color corrections require very small changes in the Hue setting; adjustments of 10° or less usually suffice. Adjustments larger than 10° usually produce very dramatic color changes.


**Hue Fine Control** allows you to fine tune the Hue parameter in increments of 1.


**Saturation** adjusts the intensity of each color’s hue in the image. Negative values remove color from the image, and positive values add color to the image.


**Output** **Black** adjusts the luminance level of black pixels. Increasing Output Black from its default value of 0 makes black pixels brighter and pushes the RGB color space toward white.


**Output** **White** sets the luminance of white pixels. Decreasing Output White from its default value of 255 makes white pixels darker and pushes the RGB color space toward black.


**Blur Amount** controls the amount of blur applied to the color corrected image. Increasing Blur Amount displaces pixels farther in the chosen direction and creates more blur.


The **Blur menu** determines when the blur is applied to the color corrected image.


* *Post* *Correct* blurs the selected color before the color correction is applied.
* *Pre* *Correct* blurs the selected color after the color correction is applied.
* *Off* turns the blur off.


If the source image is opaque, selecting the **Opaque Source checkbox** can speed rendering and preview times. If your source is partially transparent, deselect this option for best results.


The **Blur Quality menu** sets the quality of the Blur used to soften the color corrected image. Box is the fastest option and is generally adequate. The remaining choices, *Low, Medium, High* and *Highest* produce soft shadows of increasing quality. These options increase rendering times proportionately.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 