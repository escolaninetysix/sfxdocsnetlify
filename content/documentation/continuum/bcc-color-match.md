{
"date": "2019-06-12",
"title": "BCC Color Match",
"category": "BCC Color & Tone",
"link": "bcc-color-match/"
}

 [![ColorMatchAft](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/ColorMatchAft.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/ColorMatchAft.jpg)


### Overview


BCC Color Match simplifies the process of matching the color or luma values of two clips in the timeline. For instance, if two clips with different lighting conditions are spliced together, the color and luma values will differ between the clips. Match Color automates the process of removing or balancing the difference between the two clips by setting color or luma values for the quarter, mid and three-quarter areas of the image.


Ideally, you want to view both the Source and Target clips so that you can sample colors.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


The **Quality menu** sets the quality of the effect. The choices are *Faster* or *Smoother*. Smoother uses an algorithm which produces a better result but takes twice as long to render.


The **View menu** is a preview control that determines what type of output is displayed.


* *Normal* displays the filtered source image. Choose this option before rendering.
* *Highlight* displays the source image’s highlights as a black and white mask. White areas indicate pixels that are highlights. Black areas indicate pixels that are not in the highlight zone; gray areas indicate pixels that are partially in the highlight zone.
* *Midtone* displays the source image’s midtones as a black and white mask. White areas indicate midtones. Black areas indicate pixels that are not in the midtone zone; gray areas indicate pixels that are partially in the midtone zone.
* *Shadow* displays the source image’s shadows as a black and white mask. White areas indicate pixels that are shadows. Black areas indicate pixels that are not in the shadow zone; gray areas indicate pixels that are partially in the shadow zone.
* *HMS* *Colorized* displays the three zones using three colors, so you can quickly tell which areas of the image are in which zone. Red indicates highlights, blue indicates shadows and green indicates midtones.


The **Master Level** parameter allows you to adjust all three Level parameters with a single control after you adjust individual Highlight, Midtone and Shadow Levels. The Level controls affect how much the source luminance is changed to match the target luminance.


The **Master Color** parameter allows you to adjust all three Color parameters with a single control after you adjust individual Highlight, Midtone and Shadow Colors. The Color controls affect how much the source colors are changed to match the target colors


**Highlight Source, Midtone Source** and **Shadow** **Source** select the source color for the highlight, midtones and shadows that you want to match between the source and the target. The source is the filtered clip.


**Highlight** **Target**, **Midtone** **Target** and **Shadow** **Target** select the target color for the highlight, midtones and shadows that you want to match between the source and the target. The target is the clip whose color you are sampling.


The **Highlight Level, Midtone Level** and **Shadow Level** controls affect how much the source luminance is changed to match the target luminance. At a value of 0, the image is unaffected by the filter. If the luminance of the two samples (source and target) is the same, this parameter has no affect.


The **Highlight Color, Midtone Color** and **Shadow Color** parameters affect how much the source colors are changed to match the target colors. At a value of 0, the image is unaffected by the filter.


The **Highlight/Midtone Bias** and **Midtone/Shadow Bias** parameters control the crossover points between the three zones. In other words, the level that distinguishes highlight from midtone, or midtone from shadow.


**Mix with Original** blends the source and filtered images. Use this parameter to animate from the unfiltered to the filtered image without adjusting other settings, or to reduce the affect by mixing with the source image. At a value of 0, the image is unaffected by the filter.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 