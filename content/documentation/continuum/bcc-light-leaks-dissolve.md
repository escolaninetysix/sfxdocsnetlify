{
"date": "2019-06-12",
"title": "BCC Light Leaks Dissolve",
"category": "BCC Transitions",
"link": "bcc-light-leaks-dissolve/"
}

 ### [![BCC Light Leaks Dissolve](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Light-Leaks-Dissolve.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Light-Leaks-Dissolve.jpg)


### *New in BCC10*


### Overview


The Light Leaks Dissolve filter creates a stylized pattern of bright lighting elements overlaid on the source footage which automatically animates in intensity as your transition progresses to obscure the underlying dissolve between clips.  The lighting elements simulate the look of light leaking through the gaps in a camera and partially exposing the film/sensor.  The BCC Light Leaks Dissolve transition builds its pattern of leaks by layering up to four separate leak generators on top of each other with additional controls over the scaling, intensity, and apply mode of the combined leak elements.


 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Layer to Reveal**: This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the Incoming or Reveal layer for the transition.  Setting separate Light Source Start and End locations allows for easily animating the center point of the rays during the transition without the need to set any keyframes.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter.)
* *Percent Done* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


 


**Geometry Group**


Controls the overall geometric properties of the combined leak generator map.


**Position:** Offsets the X/Y location of the combined leak map.


**Rotation:** Rotates the combined leak map around the Position point.


**Scale Master:** Controls the scale around the Position point of the combined leak map on both the X and Y axes.


**Scale X:** Modifies the scale of the combined leak map in on the X axis only.


**Scale Y:** Modifies the scale of the combined leak map on the Y axis only.


 


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


**Texture Mutation Rate:**  Controls the rate at with the texture evolves (auto-animates) over time.  Setting this to 0 will produce completely static textures, whereas higher values will produce very rapidly evolving or even flickering textures.


**Random Seed:**  Used to set the starting seed of the texture shape generators.


 


**Use Source Alpha:**  Controls whether or not the filter retains the original alpha channel of the clip.  When enabled, the original alpha channel is preserved. When disabled, the leak map will tend to expand the alpha in regions where the leaks are present.


**Apply Mode:**  Chooses the apply mode used in blending the leak map with the original image.  The choice of apply mode can dramatically affect the feel of the final composite.


**Apply Mix:**  Used to blend between the result of the selected Apply Mode and a “normal” apply mode to allow a range of apply mode intensities and styles.


 


**Generator Groups (1 through 4)**


Create up to four separately generated light leak maps, each with independent controls over all properties, which are then composited into a single combined light leak map before being applied over the source clip.  The controls in each generator group are the same, but they may have different settings by default.


**Enable Generator:**  Enables or Disables the generator group.


**Shape:** Controls whether a shape mask is applied to the generator map to limit the output to a smaller region.


* None:  No shape mask applied.
* Parabola:  Limit the shape to an open parabolic shaped region.
* Ellipse: Limit the shape to a closed elliptical region.


**View Shape:**  Preview option which when enabled, renders the selected shape in white to facilitate setup.


**Shape Width:**  Controls the width of the shape mask.


**Shape Height:**  Controls the height of the shape mask.


**Fade:**  Controls the feather/fade of the the shape boundary.


**Position:**  Offsets the X/Y location of the leak map and its shape mask (if used).


**Rotation:** Rotates the leak map around the master Position point in the main Geometry group.


**Scale Master:** Controls the scale of the leak map in both the X and Y dimensions.


**Scale X:** Modifies the scale of the leak map in just the X direction.


**Scale Y:** Modifies the scale of the leak map in just the Y direction.


**Threshold:**  Controls the cutoff intensity between which regions of the generator map are transparent and which contribute to the light regions.  Higher values yield more dense, intensely colored leak maps.


**Start Color:**  Controls the color the of the darker regions of the leak map.


**Mid Color:**  Controls the color the of the mid tone regions of the leak map.


**End Color:**  Controls the color the of the brighter regions of the leak map.


**Mid Color Position:**  Shifts the relative spacing of the leak color gradient.


**Blur:**  Controls the softness of the leak map.


**Opacity:**  Scales the peak opacity of the generator map.  Lower values will reduce the overall intensity of the generator.


**Texture Amplitude:**  Increases the contrast of the raw texture map which tends to produce sharper, more extreme texture gradients and more well defined distinctions between opaque and transparent regions.


**Texture Offset:**  Increases or decreases raw texture map levels to adjust how much of the map falls within the threshold and the various color ranges.


**Texture Frequency:**  Controls rate at which the texture changes with respect to image dimensions, with higher values yielding smaller texture patterns.


**Texture Aspect:**  Controls the relative stretch of the texture pattern in the X/Y directions to give the ability to generate patterns with more horizontally or vertically squished textures.


**Texture Detail:**  Controls the level of detail in the texture pattern with large values generating more complex shapes.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid), you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Ease In:**Controls how quickly or slowly the light leak intensity increases at the beginning of the transition.


**Ease Mid:**Controls the rate of change of the light leak intensity (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


**Ease Out:**  Controls how quickly or slowly the light leak intensity decreases at the end of the transition.


**Dissolve Duration:**  Controls the timing of the underlying dissolve relative to the timing of the rest of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


