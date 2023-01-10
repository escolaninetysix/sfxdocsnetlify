{
"date": "2019-06-12",
"title": "BCC Magic Sharp",
"category": "BCC Image Restoration",
"link": "bcc-magic-sharp/"
}

 [![BCC_MagicSharpHelpDoc](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/03/BCC_MagicSharpHelpDoc.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/03/BCC_MagicSharpHelpDoc.jpg)


**Overview**


The BCC Magic Sharp filter uses algorithms to enhance image detail while minimizing artifacts associated with traditional sharpening tools.  The core sharpening algorithm performs up to four passes labelled Fine, Small, Medium, and Course.  Each pass targets physical details that have wider and wider pixel dimensions with each stage focusing on details of roughly twice the pixel dimensions as the previous stage.  Additional controls allow fine tuning the amount of sharpening applied to individual color channels and to independent luma ranges along with the ability to suppress noise or grit introduced during the sharpening process.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Load / Save Preset Mechanism**


The built-in load save mechanism is used to access the factory installed or user generated presets.


 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

**Compare****Mode****po****p****-­up:**Controls what is displayed by the Compare Mode. The options are:


* *Off*shows the output of the filter.
* **Side By**Side*the left side of the output shows half of the incoming image, and the right side shows the same half of the image as processed by the filter. When in Side-by-Side mode, the corresponding Slide and Right Offset sliders become available.Wipe*enables the user to interactively wipe the effect across the image. The left side of the wipe bar on the image output shows the unfiltered image, while the right side of the wipe bar shows the filtered result. When in Wipe mode, the corresponding Wipe slider becomes available.
* *Wipe/Slide*operates as a Wipe function when Wipe is selected in Compare Mode, and as a Slide function when Side-­‐By-­‐Side is selected in Compare Mode. When in Wipe mode, adjustments to this parameter moves the vertical wipe bar across the image; the region on the left of the wipe bar shows the original unfiltered image, while the region on the right shows the filtered result. When in Slide mode, adjustments to this parameter pans the image in the viewer window, maintaining the spatial relationship in the viewer between the before and after images.
* *Right**Offset*provides a way to adjust the spatial relationship between the unfiltered original image and the filtered result in the viewer window. Adjustments to this parameter will offset the position of the filtered image in the viewer.


 


**Sharpen Amount:**Controls the master sharpening amount across all detail levels.  Refinements to the amount of sharpening for individual detail sizes can be set in the Detail Tuning parameter group.  Adjusting this master sharpening control will scale the amount of sharpening in all detail stages proportionally.


**Sharpen Threshold:**  This control is used to limit the amount of sharpening applied to regions that already have sharp, high-contrast edges.  This favors only applying the sharpening to lower contrast details where the enhancement is most needed.  Setting the Threshold to higher values will sharpen edges that are already quite sharp.  When pushed too far it will introduce ring or halo artifacts along edges that already have high contrast – a notorious problem with traditional sharpening tools.  The Threshold parameter avoids ringing/halo artifacts by sharpening the right details and avoiding details that don’t need additional contrast enhancement.


**Sharpen Radius:**Controls the master sharpening radius across all detail levels.  Choosing larger values will favor the enhancement of details with larger physical dimensions (in pixels).  Refinements to the amount of sharpening for individual detail sizes can be set in the Detail Tuning parameter group by enabling or disabling individual passes.  Note that increasing radius settings can increase render times.


**Noise Suppression:**This reduces the amount of sharpening applied to minor details.  This is useful in some clips where you need to reduce image noise.  Use sparingly in noisy clips to limit enhancement of noise while still permitting sharpening of genuine image detail.


 


**Detail Tuning****Group**


The core sharpening algorithm performs up to four passes labelled Fine, Small, Medium, and Course.  Each pass targets physical details that have wider and wider pixel dimensions with each stage focusing on details of roughly twice the pixel dimensions as the previous stage.  This group allows controlling which of those stages are enabled as well as fine tuning the relative amount of sharpening in each of those stages.  Note that enabling the stages for wider image details can increase rendering times.


**Fine Pass:** Enable/Disable the sharpening pass for the finest level details.


**Fine Sharpen:** Adjust the relative amount of sharpening of Fine details.


**Small Pass:** Enable/Disable the sharpening pass for small sized details.


****Small** Sharpen:** Adjust the relative amount of sharpening of small sized details.


**Medium Pass:** Enable/Disable the sharpening pass for medium sized details.


**Medium Sharpen:** Adjust the relative amount of sharpening of medium sized details.


**Coarse Pass:** Enable/Disable the sharpening pass for the coarsest level details.


**Coarse Sharpen:** Adjust the relative amount of sharpening of coarse details.


 


**Channel Tuning****Group**


Adjust the relative amounts of sharpening in individual color channels, for example to restrict sharpening only to luma without sharpening chroma details.


**Luma Sharpen:** Controls the relative amount of sharpening in the luma channel.


**Chroma Sharpen:** Controls the relative amount of sharpening in the chroma channel.


**Red Sharpen:** Controls the relative amount of sharpening in the red channel.


**Green Sharpen:** Controls the relative amount of sharpening in the green channel.


**Blue Sharpen:** Controls the relative amount of sharpening in the blue channel.


 


**Range Tuning****Group**


Adjust the relative amounts of sharpening across different luma ranges, for example to reduce sharpening in noisy shadow regions.  Range parameters allow fine tuning which tonal ranges fall into each group.  The relative sharpening adjustments change smoothly for regions that fall part way between tonal ranges.


**Range Preview:** Menu which controls ruby mask preview options for visualizing which regions of the image fall into which tonal ranges.


* *Off*:  Disable the preview modes and view the final effect result.
* *Highlights*:  Display a ruby mask over non-highlight pixels while highlight regions are displayed in their original color.
* *Midtones*:  Display a ruby mask over non-midtone pixels while midtone regions are displayed in their original color.
* *Shadows*:  Display a ruby mask over non-shadow pixels while shadow regions are displayed in their original color.


**Highlight Range:** Pixels with luma values above this level are treated as fully within the Highlight range.  Pixels with values between this level and the Midtone High Range are treated as proportionally belonging to both ranges.


**Midtone High Range:** Pixels with luma values below this level but above the Midtone Low Range are treated as fully within the Midtone range.  Pixels with values between this level and the Highlight Range are treated as proportionally belonging to both ranges.


**Midtone Low Range:** Pixels with luma values above this level but below the Midtone High Range are treated as fully within the Midtone range.  Pixels with values between this level and the Shadow Range are treated as proportionally belonging to both ranges.


**Shadow Range:** Pixels with luma values below this level are treated as fully within the Shadow range.  Pixels with values between this level and the Midtone Low Range are treated as proportionally belonging to both ranges.


**High/Mid/Shad Sharpen On:** Enable/Disable fine tuning of the sharpening amounts across these tonal ranges.


**Highlight Sharpen:** Controls the relative amount of sharpening in the highlights.


**Midtone Sharpen:** Controls the relative amount of sharpening in the midtones.


**Shadow Sharpen:** Controls the relative amount of sharpening in the shadows.


 


**Reduce Grit:** Enable/Disable an additional pass which suppresses unwanted noise or grit in the image which can sometimes be made more prominent during the sharpening process.


**Grit Radius:** Control the pixel size of the noise/grit being targeted for removal.  Larger values will suppress larger noise details but can reduce the impact of the main sharpening effect.


**Grit Sensitivity:** Adjust to discriminate between noise and genuine image detail.  Higher values will suppress more prominent noise but can reduce the impact of the main sharpening effect.


 


**Mix With Original:** Controls a blend with the original image allowing the overall intensity of the effect to be uniformly moderated.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 