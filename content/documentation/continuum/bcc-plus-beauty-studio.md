{
"date": "2019-06-12",
"title": "BCC+ Beauty Studio",
"category": "BCC Image Restoration",
"link": "bcc-plus-beauty-studio/"
}

 
NEW IN CONTINUUM 2021.5 for Final Cut Pro/Motion and new in CONTINUUM 2022 for other hosts, the BCC+ Beauty Studio filter optimizes the original Beauty Studio filter to allow you to easily apply digital make-up. Automatically eliminate wrinkles, pores, and unwanted blemishes to make sure your talent is ready for their close-ups. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/2._Beauty_Studio-1-1024x576.jpg)Before and After
**Overview**


Quite often, in these days of cameras equipped with ultra sharp lenses and highly sensitive light sensors, we’re seeing more detail than ever before in images on screen. Akin to digital make-up, the BCC+ Beauty Studio filter was designed to automate the process of eliminating wrinkles, pores and other undesirable blemishes from the skin-tones in a close up shot of a person’s face.


There are two stages to the filter : building an isolation matte for the skin-tone and smoothing the skin-tone.


Additionally, you can use the integrated color correction tools to modify the hue, saturation and brightness of the image. The color correction can be applied to the entire image or confined to the masked skin-tone.


**How to use the filter:**


As mentioned, there are two stages to using this filter: building a matte/mask to isolate the skin-tone and smoothing the skin-tone. This mask can be based a color-based key to isolate skin tones, on tracked mocha masks, or a combination of the two.  Pay close attention when setting up the isolation matte – a poor matte will yield an unnatural looking image.    
  
Ideally the matte/mask should avoid selecting areas such as eyes, hair, and lips to ensure that the smoothing operation does not introduce unwanted changes in these regions.  


The Matte controls are set to a color based keying by default and a good first step in using the filter is to fine tune the results of the key if necessary.  The Color A and Color B parameters in the Matte section should be used to select “typical” colors towards the mid-range of the skin tones.  Avoid selecting skin tones at the extreme light/dark ranges of the skin tones but rather choose a pair of representative colors from regions that are typical of the overall or average skin tones.  Then tweak the Hue, Saturation, and Softness controls as necessary to refine the matte.


**Smoothing**:  Once the isolation mask is refined you can then proceed to tweak the smoothing by adjusting how much smoothing is applied at each detail level.  The most natural looking results are generally obtained by using only small amounts of smoothing for the smallest detail levels which ensures that very fine skin details such as pores or fine hairs will be partially preserved which avoids an overly smoothed “plastic” or “airbrushed” looking result. Use of higher amounts of smoothing for the larger detail levels is generally recommended as way to smooth wider blemishes, color blotchiness, and unwanted highlights.   The ideal smoothing settings can vary from image to image depending on the type and size blemishes in the original footage.


### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Parameters and Controls


**GPU Rendering**: This popup allows toggles renderer in use for the filter.


* *Default*: By default the filter will utilize the installed video card and bases the render on the project settings.
* *16 Bit Float*: Sets the render to 16 bit float
* *32 Bit Float*: Sets the render to 32 bit float
* *Disabled*: Disables GPU rendering and switches to software rendering in FCPX or Motion.


**View**: Toggles the render view


* *Output*: Displays the final filtered output
* *Matte*: Displays the matte. This is the suggested view while refining the matte.


#### **Smoothing Group**


The Smoothing Group controls the details of the skin smoothing process.


**Master Amount:** This is the main smoothing controller. Settings between 100 and 200 will overdrive the smoothing effect on all active smoothing levels.


**Smooth Smallest Details:**  Affects only the smallest details in the source clip, which is essentially a 1×1 pixel array.


**Smooth Small Details:** Affects a pixel array twice the size of the smallest pixels.


**Smooth Medium Details:** Affects a pixel array twice the size of the small pixels.


**Smooth Large Details:** Affects a pixel array twice the size of the medium pixels.


**Smooth Largest Details:** Affects a pixel array twice the size of the medium pixels.


**Quality**: Sets the render settings of the effect. Fast quickly renders the smoothing, while Precise results in a slower but more detailed render. 


**Details Level Pop-up:** Sets the level of details that are smoothed in the image. Setting this to 1 means that only fine detail in the image is subject to smoothing. Setting this to 5 will smooth the image over 5 independently controllable levels of detail in the image.


**Preserve Contrast:** Prevents loss of contrast in the filtered result – higher values preserve more of the contrast from the source clip in the filtered result.


**Detail Scale:** Modifies the size of the pixel arrays used for smoothing. Depending on the source, this can sometimes be used to reduce unwanted shine in skin-tones.


**Enable Matte**: This checkbox enables the matte and Matte Control parameters.


#### **The Matte Controls**


The Matte Controls are used to generate a raster pixel matte based on pixels from a specific channel of the input source clip. There are tools in the PixelChooser for altering the pixels of the selected channel to fine tune the matte, such as a levels control which clips pixels on either end of the scale. The Matte section also includes a two step keyer, which can be used to isolate particular portions of the input source based on user defined color components, such as skin-tones or a graduated sky.  The Matte group includes an advanced edge-preserving blur option to enable smoother matte generation without loss of important image details. ore or after the masking.


**Color A** : use to set color for keyer


**Color B** : use to set color for keyer


**Hue Softness** : use to expand or contract the hue values used by the keyer


**Saturation Softness** : use to expand or contract the saturation values used by the keyer


**Luma Softness** : use to expand or contract the luma values used by the keyer


**Clip Black** : use to control the shadow region of mattes generated by the keyer


**Clip White** : use to control the highlight region of mattes generated by the keyer


**Gamma** : use to adjust the gamma of mattes generated by the keyer


**Invert Matte** checkbox : inverts the matte when enabled 


**Mix:** Blends the smoothed result back with the unfiltered source clip.


**PixelChooser:**The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.](/documentation/continuum/)


