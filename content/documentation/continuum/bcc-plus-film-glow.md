{
"date": "2019-06-12",
"title": "BCC+ Film Glow",
"category": "BCC Film Style",
"link": "bcc-plus-film-glow/"
}

 
NEW IN CONTINUUM 2022.5, the BCC+ Film Glow filter generates a traditional film glow look where the frame is subjected to a strong light source causing the image to bloom.  A common use of the glow filter is to make the whites in an image appear to glow and the filter will do this at its default settings. 


[![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2022/04/Film-Glow-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Fast-Film-Glow.jpg)**Before and After**
### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**GPU Rendering:** allows for the selection of GPU or CPU software rendering.


* *Transparent:* allows the edge of the result to become transparent.
* *Repeat:* repeats edge pixels to generate opaque pixels along the edge of the result.
* *Reflect:* reflects pixels back into the result to generate opaque pixels along the edge of the result.
* *Warp*: warps edge pixels to generate opaque pixels along the edge of the result.


**View pop-­up:** This four way pop-up is useful when setting up the filter:


* *Output:* This is the main result of the full  glow effect applied back over the input clip
* *Glow:* Displays just the generated glow prior to being applied back to the input clip via the apply modes.
* *Threshold:* Displays the intermediate result of the threshold setting
* *Threshold w Boost + Desat:* Displays the intermediate result of the Threshold with Boost and Glow Desaturation applied


**Glow Intensity:** Use to control the intensity of the glow result. Higher values yield a stronger glow across the image while lower values restrict the glow intensity. 


**Glow Color:** Used to set the color of the glow. In it’s default state the glow is white. By selecting a color with the color chip, the glow can be set to any RGB value. With the eyedropper, the glow color can be selected directly from the image pixels.  



**Glow Radius:** Used to set the radius over which the glow spreads to surrounding regions. Higher values will result in a larger, more diffuse glow, while lower values will create a more restricted glow.


**Glow Radius** **X**: Used to set the width of the glow along the X axis. Higher values will result in a glow that is stretched horizontally along the X axis, while lower values will restrict the glow horizontally along the X axis.


**Glow Radius** **Y :** Used to set the width of the glow along the Y axis. Higher values will result in a glow that is stretched vertically along the Y axis, while lower values will restrict the glow horizontally along the Y axis.. 


**Glow Desaturation:** Used to alters the glow result by adjusting the chroma values that are used for the input. At 0 the function has no effect on the result generating a traditional film glow, increasing the value in this parameter yields a result that looks colder and less saturated.


**Glow Threshold:**Used to set the pixel values that are affected by the glow – a setting of 0 will apply a glow to all of the pixels in the input clip, while a setting of 100 will not apply any glow to the image.


**Glow From Alpha:**The Glow From Alpha option generates the image glow from the alpha channel instead of or in addition to the color channels. The selection in the Glow From Alpha Mode determines how the alpha glow and the color channel glows are combined.


**Glow Boost Alpha:** Controls how much the spread of glow pixels caused by the blur boosts the alpha channel of non-­‐opaque pixels.


**Glow Under Alpha:** Use this function to control how the glow is composited with alpha source clips – a setting of zero composites the glow on top of the source and disregards the source alpha channel, while a setting of 100 composites the glow behind opaque regions in the source but allowing it to extend out into the transparent regions.


**Edge Handling:** Determines how edges of the filtered frame are handled. 


* *Transparent:* allows the edge of the result to become transparent.
* *Repeat:* repeats edge pixels to generate opaque pixels along the edge of the result.
* *Reflect:* reflects pixels back into the result to generate opaque pixels along the edge of the result.


**RGB Independent Glows:** This checkbox enables independent scaling of the glow dimensions for R, G, and B.


**Red Scale:** Used to set the scale of the red glow uniformly. Higher values will increase the scale along the X and Y axis.


**Red Scale X:** Used to set the scale of the red glow along the horizontal axis. Higher values will increase the scale along the X axis. while lower values will restrict it.


**Red Scale Y:**  Used to set the scale of the red glow along the vertical axis. Higher values will increase the scale along the Y axis. while lower values will restrict it. 


**Green Scale:** Used to set the scale of the green glow uniformly. Higher values will increase the scale along the X and Y axis. 


**Green Scale X:** Used to set the scale of the green glow along the horizontal axis. Higher values will increase the scale along the X axis. while lower values will restrict it. .


**Green Scale Y:** Used to set the scale of the green glow along the vertical axis. Higher values will increase the scale along the Y axis. while lower values will restrict it. 


**Blue Scale:**  Used to set the scale of the blue glow uniformly. Higher values will increase the scale along the X and Y axis.


**Blue Scale X:**  Used to set the scale of the green glow along the horizontal axis. Higher values will increase the scale along the X axis. while lower values will restrict it. . 


**Blue Scale Y:** Used to set the scale of the blue glow along the vertical axis. Higher values will increase the scale along the y axis. while lower values will restrict it.


**Glow Matte**: Lets you choose an alternate clip or layer from which the matte is derived. 


**Glow Matte Type**: Selects the channel in the source image from which the glow is derived. Pixels with higher values in the selected channel are considered to have higher intensities.


* *Color*: use the RGBA color channel and multiplies it by the source alpha channel.
* *Color Inverted*: uses the inverted color channel.
* *Luma*: uses the luma channel.
* *Luma* *Inverted:* uses the inverted luma channel.
* *Alpha:* use the unmodified Alpha channel.
* *Alpha Inverted*: use the inverted Alpha channel.


**Extras Group**


**Threshold****Color:**The RGB values of this color are added to the threshold slider value to make an independent threshold for each channel. (e.g. if this is set to pure blue, the blue channel is not glowed, regardless of the channel values or the threshold slider setting.)


**Glow Apply Mode:** This pop-­up is used to set the apply mode that the filter uses to composite the glow over the input image.  The default apply mode is “Screen”.


**Mix with Original:** Used to blend the filter effect back with the unfiltered input image.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)



 