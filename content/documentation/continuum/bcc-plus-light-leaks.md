{
"date": "2019-06-12",
"title": "BCC+ Light Leaks",
"category": "BCC Lights",
"link": "bcc-plus-light-leaks/"
}

 
NEW IN CONTINUUM 2022.5, the BCC+ Light Leaks filter simulates the visual effect of light leaking through gaps in a camera and partially exposing the film/sensor. The light elements are animated over time to create stylized looks ranging from subtle, diffuse glows to bright and/or rapidly flickering flares. The BCC+ Light Leaks filter builds its pattern of leaks by layering up to four separate leak generators on top of each other with additional controls over the scaling, intensity, and apply mode of the combined leak elements. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2022/04/LL.jpg)**Before and After**


### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**Geometry Group**


Controls the overall geometric properties of the combined leak generator map.


**Position:** Used to control the X/Y location of the combined leak map. Adjusting the position will change the location of all leaks generated simultaneously. For example, if all four generators are enabled, all four leak maps will have their location adjusted.


**Rotation:** Used to set the amount of rotation of the combined leak map around the Position point.


**Scale Master:** Used to control the scale of the combined leak map around the Position point in both the X and Y dimensions.


**Scale X:** Used to control the scale of the combined leak map in just the X axis. Higher values will stretch the map along the horizontal axis.


**Scale Y:** Used to control the scale of the combined leak map in just the Y axis. Higher values will stretch the map along the vertical axis. 


**Stylize Group**


This group contains various controls to modify the overall look of the combined leak generator map.


**Opacity:**  Used to set the overall opacity of the combined leak map as it is applied over the input clip.  Reducing the opacity will reduce the overall intensity of the effect.


**Exposure:** Used to increases or decreases the overall light exposure of the leak by modifying the intensity of the combined leak map.  Exposure affects both the opacity and the color brightness.


**Hue:** Master hue control which affects the combined light leak.


**Saturation:**   
Used to control the overall saturation of the combined light leak. Higher values create a more intense color saturation than lower values. 


**Blur Master:** Used to control the intensity of the blur amount. Higher values results in a more intense blur applied to the combined leak map equally in the X and Y directions.


**Blur X:** Used to adjust the blur amount along the horizontal (X) axis. Higher values results in a more intense horizontal stretching of the blur applied to the combined leak map.


**Blur Y:** Used to adjust the blur amount along the vertical (Y) axis. Higher values results in a more intense vertical stretching of the blur applied to the combined leak map. 


**Glow Intensity:**  Use to control the intensity of the glow applied to the combined leak map. Higher values yield a stronger glow across the image while lower values restrict the glow intensity. 


**Glow Radius:**     
Used to set the radius over which the glow spreads to surrounding regions in the combined leak map. Higher values will result in a larger, more diffuse glow, while lower values will create a more restricted glow. 


**Glow Threshold:**  Used to set the pixel values that are affected by the glow – a setting of 0 will apply a glow to all of the pixels in the input clip, while a setting of 100 will not apply any glow to the combined leak map.


**Flicker Amount:**  Used to control the intensity of the exposure flickering added on top of the normal evolution of the texture.  This permits flickering in brightness while maintaining the same (or a slowly evolving) texture pattern as opposed to increasing the Texture Mutation Rate which causes the entire texture pattern to change more rapidly.


**Flicker Speed:** Used to control the speed of the exposure flicker. Higher values will result in a faster, more chaotic flicker, while lower values will create a slower, more controlled flicker, or pulsing effect. 


**Flicker Randomness:**  Controls how random the exposure flickering appears to be.  When set to 0, the exposure will oscillate up and down in a steady wave-like pattern whereas increasing values generate more random flicker evolution.


**Texture Mutation Rate:**  Controls the rate at with the texture evolves (auto-animates) over time.  Setting this to 0 will produce completely static textures whereas higher values will produce very rapidly evolving or even flickering textures.


**Random Seed:** Used to control the random seed for the starting the texture shape generators.


**Use Source Alpha:**  Controls whether or not the filter retains the original alpha channel of the clip.  When enabled, the original alpha channel is preserved whereas when disabled the leak map will tend to expand the alpha in regions where the leaks are present.


**Apply Mode:**  Chooses the apply mode used in blending the leak map with the original image.  The choice of apply mode can dramatically affect the feel of the final composite.


**Apply Mix:**  Blends between the result of the selected Apply Mode and a “normal” apply mode to allow a range of apply mode intensities and styles.


**Generator Groups (1 through 4)**


Create up to four separately generated light leak maps, each with independent controls over all properties, which are then composited into a single combined light leak map before being applied over the source clip. The controls in each generator group are the same, but they may have different settings by default.


**Enable Generator:**  Enables or Disables the generator group.


**Shape:** Controls whether a shape mask is applied to the generator map to limit the output to a smaller region.


* *None*:  No shape mask applied.
* *Parabola*:  Limits the shape to an open parabolic shaped region.
* *Ellipse*: Limits the shape to a closed elliptical region.


**View Shape:**  Preview option which when enabled, renders the selected shape in white to facilitate setup.


**Shape Width:**  Used to control the width of the shape mask.


**Shape Height:** Used to control the height of the shape mask.


**Fade:**  Used to control the feather/fade of the the shape boundary. Higher values will result in a softer shape edge, while lower values will create a sharper, more defined edge. 


**Position:**  Used to control the X/Y location of the individual leak map and its shape mask (if used). NOTE: this differs from the Geometry Group position parameter, in that it controls ONLY the individual leak and not the combined leak map.


**Rotation:** Used to rotate the leak map around the master Position point in the main Geometry group. NOTE: this differs from the Geometry Group rotation parameter, in that it controls ONLY the individual leak and not the combined leak map. 


**Scale Master:** Used to control the scale of the leak map in both the X and Y dimensions.


**Scale X:** Used to modify the scale of the leak map along the X axis only.


**Scale Y:** Used to modify the scale of the leak map along the Y axis only.


**Threshold:** Used to control the cutoff intensity between which regions of the generator map are transparent and which contribute to the light regions.  Higher values yield more dense, intensely colored leak maps.


**Start Color:** Used to control the color the of the darker regions of the leak map.


**Mid Color:** Used to control the color the of the mid tone regions of the leak map.


**End Color:**  Used to control the color the of the brighter regions of the leak map.


**Mid Color Position:**  Shifts the relative spacing of the leak color gradient.


**Blur:** Used to control the edge softness of the leak map. Higher values results in a softer edge equally in the X and Y directions. 


**Opacity:**  Scales the peak opacity of the generator map.  Lower values will reduce the overall intensity of the generator.


**Texture Amplitude:**  Increases the contrast of the raw texture map which tends to produce sharper, more extreme texture gradients and more well defined distinctions between opaque and transparent regions.


**Texture Offset:**  Increases or decreases raw texture map levels to adjust how much of the map falls within the threshold and the various color ranges.


**Texture Frequency:** Used to control the rate at which the texture changes with respect to image dimensions, with higher values yielding smaller texture patterns.


**Texture Aspect:**  Used to control the relative stretch of the texture pattern in the X/Y directions to give the ability to generate patterns with more horizontally or vertically squished textures.


**Texture Detail:**  Used to control the level of detail in the texture pattern with large values generating more complex shapes.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)



 