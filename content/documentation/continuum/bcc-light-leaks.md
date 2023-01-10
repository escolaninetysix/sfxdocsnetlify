{
"date": "2019-06-12",
"title": "BCC Light Leaks",
"category": "BCC Lights",
"link": "bcc-light-leaks/"
}

 ### [![BCC Light Leaks](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Light-Leaks.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Light-Leaks.jpg)


### *New in BCC10*


### Overview


The BCC Light Leaks filter simulates the visual effect of light leaking through gaps in a camera and partially exposing the film/sensor. The light elements are animated over time to create stylized looks ranging from subtle, diffuse glows to bright and/or rapidly flickering flares. The BCC Light Leaks filter builds its pattern of leaks by layering up to four separate leak generators on top of each other with additional controls over the scaling, intensity, and apply mode of the combined leak elements. 


 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Geometry Group**


Controls the overall geometric properties of the combined leak generator map.


**Position:** Offsets the X/Y location of the combined leak map.


**Rotation:** Rotates the combined leak map around the Position point.


**Scale Master:** Controls the scale around the Position point of the combined leak map in both the X and Y dimensions.


**Scale X:** Modifies the scale of the combined leak map in just the X dimension.


**Scale Y:** Modifies the scale of the combined leak map in just the Y dimension.


 


**Stylize Group**


Various controls to modify the overall look of the combined leak generator map.


**Opacity:**  Sets the overall opacity of the combined leak map as it is applied over the input clip.  Reducing the opacity will reduce the overall intensity of the effect.


**Exposure:**  Increases or Decreases the overall light exposure of the leak by modifying the intensity of the combined leak map.  Exposure affects both the opacity and the color brightness.


**Hue:** Master hue control which affects the combined light leak.


**Saturation:** Master saturation control which affects the combined light leak.


**Blur Master:** Scales the blur amount applied to the combined leak map equally in the X and Y directions.


**Blur X:** The amount of blur in the X direction applied to the combined leak map.


**Blur Y:** The amount of blur in the Y direction applied to the combined leak map.


**Glow Intensity:**  Controls the overall intensity of the glow effect added to the combined leak map.


**Glow Radius:**  Controls the radius over which the glow spreads to surrounding regions in the combined leak map.


**Glow Threshold:**  Sets the brightness threshold for determining which pixels contribute to the glow effect.


**Flicker Amount:**  Controls the intensity of the exposure flickering added on top of the normal evolution of the texture.  This permits flickering in brightness while maintaining the same (or a slowly evolving) texture pattern as opposed to increasing the Texture Mutation Rate which causes the entire texture pattern to change more rapidly.


**Flicker Speed:**  Controls the speed of the exposure flicker.


**Flicker Randomness:**  Controls how random the exposure flickering appears to be.  When set to 0, the exposure will oscillate up and down in a steady wave-like pattern whereas increasing values generate more random flicker evolution.


**Texture Mutation Rate:**  Controls the rate at with the texture evolves (auto-animates) over time.  Setting this to 0 will produce completely static textures whereas higher values will produce very rapidly evolving or even flickering textures.


**Random Seed:**  Usde to set the starting seed of the texture shape generators.


 


**Use Source Alpha:**  Controls whether or not the filter retains the original alpha channel of the clip.  When enabled, the original alpha channel is preserved whereas when disabled the leak map will tend to expand the alpha in regions where the leaks are present.


**Apply Mode:**  Chooses the apply mode used in blending the leak map with the original image.  The choice of apply mode can dramatically affect the feel of the final composite.


**Apply Mix:**  Blends between the result of the selected Apply Mode and a “normal” apply mode to allow a range of apply mode intensities and styles.


 


**Generator Groups (1 through 4)**


Create up to four separately generated light leak maps, each with independent controls over all properties, which are then composited into a single combined light leak map before being applied over the source clip. The controls in each generator group are the same, but they may have different settings by default.


**Enable Generator:**  Enables or Disables the generator group.


**Shape:** Controls whether a shape mask is applied to the generator map to limit the output to a smaller region.


* None:  No shape mask applied.
* Parabola:  Limits the shape to an open parabolic shaped region.
* Ellipse: Limits the shape to a closed elliptical region.


**View Shape:**  Preview option which when enabled, renders the selected shape in white to facilitate setup.


**Shape Width:**  Controls the width of the shape mask.


**Shape Height:**  Controls the height of the shape mask.


**Fade:**  Controls the feather/fade of the the shape boundary.


**Position:**  Offsets the X/Y location of the leak map and its shape mask (if used).


**Rotation:** Rotates the leak map around the master Position point in the main Geometry group.


**Scale Master:** Controls the scale of the leak map in both the X and Y dimensions.


**Scale X:** Modifies the scale of the leak map in the X direction only.


**Scale Y:** Modifies  the scale of the leak map in the Y direction only.


**Threshold:**  Controls the cutoff intensity between which regions of the generator map are transparent and which contribute to the light regions.  Higher values yield more dense, intensely colored leak maps.


**Start Color:**  Controls the color the of the darker regions of the leak map.


**Mid Color:**  Controls the color the of the mid tone regions of the leak map.


**End Color:**  Controls the color the of the brighter regions of the leak map.


**Mid Color Position:**  Shifts the relative spacing of the leak color gradient.


**Blur:**  Controls the softness of the leak map.


**Opacity:**  Scales the peak opacity of the generator map.  Lower values will reduce the overall intensity of the generator.


**Texture Amplitude:**  Increases the contrast of the raw texture map which tends to produce sharper, more extreme texture gradients and more well defined distinctions between opaque and transparent regions.


**Texture Offset:**  Increases or decreases raw texture map levels to adjust how much of the map falls within the threshold and the various color ranges.


**Texture Frequency:**  Controls the rate at which the texture changes with respect to image dimensions, with higher values yielding smaller texture patterns.


**Texture Aspect:**  Controls the relative stretch of the texture pattern in the X/Y directions to give the ability to generate patterns with more horizontally or vertically squished textures.


**Texture Detail:**  Controls the level of detail in the texture pattern with large values generating more complex shapes.


 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 