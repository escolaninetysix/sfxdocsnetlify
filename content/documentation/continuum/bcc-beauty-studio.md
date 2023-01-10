{
"date": "2019-06-12",
"title": "BCC Beauty Studio",
"category": "BCC Image Restoration",
"link": "bcc-beauty-studio/"
}

 [![BCC Beauty Studio BCC](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Beauty-Studio-BCC.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Beauty-Studio-BCC.jpg)


### *New in BCC10*


### **Overview**


Quite often, in these days of cameras equipped with ultra sharp lenses and highly sensitive light sensors, we’re seeing more detail than ever before in images on screen. Akin to digital make-up, the Beauty Studio filter was designed to automate the process of eliminating wrinkles, pores and other undesirable blemishes from the skin-tones in a close up shot of a person’s face.


There are two stages to the filter : building an isolation matte for the skin-tone and smoothing the skin-tone.


Additionally, you can use the integrated color correction tools to modify the hue, saturation and brightness of the image. The color correction can be applied to the entire image or confined to the masked skin-tone.


 


**How to use the filter:**


As mentioned, there are two stages to using this filter: building a matte/mask to isolate the skin-tone and smoothing the skin-tone.  BCC Beauty Studio uses the BCC PixelChooser to generate the isolation matte/mask.  This mask can be based a color-based key to isolate skin tones, on tracked mocha masks, or a combination of the two.  Pay close attention when setting up the isolation matte – a poor matte will yield an unnatural looking image.  Ideally the matte/mask should avoid selecting areas such as eyes, hair, and lips to ensure that the smoothing operation does not introduce unwanted changes in these regions.  To generate a good matte/mask it is helpful to use the View Chosen Pixels option in the main PixelChooser menu to generate a grayscale preview of the matte/mask.  BCC Beauty Studio is different from most filters in the BCC in that the PixelChooser is automatically enabled by default when the effect is first applied.


PixelChooser Matte for skin tone isolation by color:    The PixelChooser Matte controls are set to a color based keying by default and a good first step in using the filter is to fine tune the results of the key if necessary.  The Color A and Color B parameters in the Matte section should be used to select “typical” colors towards the mid-range of the skin tones.  Avoid selecting skin tones at the extreme light/dark ranges of the skin tones but rather choose a pair of representative colors from regions that are typical of the overall or average skin tones.  Then tweak the Hue, Saturation, and Softness controls as necessary to refine the matte.


PixelChooser Masking with mocha:  The PixelChooser now includes direct  integration with mocha tracking to enable high quality masking of tracked regions when color base skin tone isolation is insufficient.  Regions such as eyes, lips, hair, etc can be tracked in mocha to completely exclude them from the effects of the softening pass.  It is also possible to use mocha masking in combination with the color based matting pass to generate a combined isolation map.  It is often desirable to add feathering to the mocha Mask to create a more natural looking fade between the included and excluded region.


Smoothing:  Once the isolation mask is refined you can then proceed to tweak the smoothing by adjusting how much smoothing is applied at each detail level.  The most natural looking results are generally obtained by using only small amounts of smoothing for the smallest detail levels which ensures that very fine skin details such as pores or fine hairs will be partially preserved which avoids an overly smoothed “plastic” or “airbrushed” looking result. Use of higher amounts of smoothing for the larger detail levels is generally recommended as way to smooth wider blemishes, color blotchiness, and unwanted highlights.   The ideal smoothing settings can vary from image to image depending on the type and size blemishes in the original footage.


Presets in Beauty Studio:  Presets are provided as starting points for use in Beauty Studio but use of presets in this filter requires special consideration due to the way it relies on the PixelChooser.  Because the skin isolation mask is integral to the final result and this mask is driven by the PixelChooser you need to make sure that loading presets does not inadvertently change your PixelChooser settings.  The BCC Preferences panel has an option called “Load PixelChooser Mask with Preset”.  For general use of presets in Beauty Studio it is best to have that preference disabled which will then allow you to load presets without changing your PixelChooser settings.  However when moving a saved effect from one machine or host to another via a custom saved preset it can be desirable to have the PixelChooser settings preserved, and in that case you should temporarily enable the “Load PixelChooser Mask with Preset” option in the BCC Preferences pane to ensure that the PixelChooser settings are loaded along with the rest of the preset.


 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Smoothing Group**


Control the details of the skin smoothing process.


**Master Amount:** This is the main smoothing controller. Settings between 100 and 200 will overdrive the smoothing effect on all active smoothing levels.


**Smooth Smallest Details:**  Affects only the smallest details in the source clip, which is essentially a 1×1 pixel array.


**Smooth Small Details:** Affects a pixel array twice the size of the smallest pixels.


**Smooth Medium Details:** Affects a pixel array twice the size of the small pixels.


**Smooth Large Details:** Affects a pixel array twice the size of the medium pixels.


**Smooth Largest Details:** Affects a pixel array twice the size of the medium pixels.


**Details Level Pop-up:** Sets the level of details that are smoothed in the image. Setting this to 1 means that only fine detail in the image is subject to smoothing. Setting this to 5 will smooth the image over 5 independently controllable levels of detail in the image.


**Preserve Contrast:** Prevents loss of contrast in the filtered result – higher values preserve more of the contrast from the source clip in the filtered result.


**Detail Scale:** Modifies the size of the pixel arrays used for smoothing. Depending on the source, this can sometimes be used to reduce unwanted shine in skin-tones.


**Mix with Original:** Blends the smoothed result back with the unfiltered source clip.


 


**Color Correction Group**


Controls an optional color correction pass which can be applied either before or after the masking.


**Color Correction On:** enables the Color Correction parameter controls.


**Use Mask:** When enabled, confines the color correction to within the skin-tone mask.


**Saturation:** Use to increase or decrease the color saturation of the image.


**Brightness:** Use to increase or decrease the brightness of the image.


**Contrast:** Use to increase or decrease the contrast of the image.


 


**PixelChooser**


***Note that unlike most BCC filters, BCC Beauty Studio has the PixelChooser enabled by default with a color key enabled to begin isolating skin tones.  It is critical for optimum results in Beauty Studio to review and if necessary fine tune the skin isolation matte/mask generated by the PixelChooser.***


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in non-selected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 