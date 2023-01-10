{
"date": "2019-06-12",
"title": "BCC DeNoise",
"category": "BCC Obsolete",
"link": "bcc-denoise/"
}

 ### *Deprecated – replaced by [BCC Noise Reduction](/documentation/continuum/bcc-noise-reduction)*


*We recommend use of [BCC Noise Reduction](/documentation/continuum/bcc-noise-reduction) instead of the older BCC Denoise.  The newer BCC Noise Reduction filter contains more advanced grain suppression techniques.*


### Overview


The BCC DeNoise filter removes unwanted pixel noise from an image. DeNoise is especially useful when working with archival materials, as it lets you correct dark areas that show artifacts from film emulsion or video compression. You may also want to use the BCC DeNoise filter when resizing 4:3 images to 16:9 aspect ratio.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode:**The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


The BCC DeNoise filter distinguishes between moving areas and areas that are static. This allows the filter to selectively remove noise only from static areas. This preserves the full detail of areas that are in motion.


DeNoise uses temporal and spacial smoothing to eliminate the artifacts, based on alternate frames in the video. Since the smoothing algorithm is based on a sequence of frames, it is difficult to show the effects of this filter in a still image.


The PixelChooser is especially useful for this filter. If the DeNoise filter removes too much detail, you can selectively remove noise from a specific channel or area of your image.


**Value Range** determines how much noise is removed from the image. Higher values remove more detail from the image.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the affect of the filter by mixing it with the source image. At a value of 0, the image is unaffected by the filter.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 