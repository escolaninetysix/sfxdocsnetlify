{
"date": "2019-06-12",
"title": "BCC Deinterlace",
"category": "BCC Film Style",
"link": "bcc-deinterlace/"
}

 ### Overview


The BCC Deinterlace filter converts interlaced video clips into progressive-scan frames, such as footage shot on film. Deinterlace can render “simulated TeleCine” style by adding pulldown. This filter can also convert 29.97fps NTSC video into 24fps film-style frames.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


* Note: If you are combining the BCC Deinterlace filter with other film filters (BCC Film Damage, BCC Film Grain, BCC Film Process or BCC Match Grain), you should apply BCC Deinterlace first. BCC Deinterlace works most effectively with the original, unprocessed pixels.


* **Important Note for AE Users:** Clips run through this filter must have **Separate** **Fields** set to *Off* in the **Interpret** **Footage** dialog. Output rendering must be done with **Field** **Render** set to *Off* as well. Frame Blending should not be enabled.


Deinterlacing leaves the first or earlier input field (the lower field for DV) unmodified. The second field is synthesized by interpolating the first field wherever the effect would otherwise show motion artifacts as combing or teeth. A motion mask is used to determine where the second field is interpolated. You can use the Motion Sensitivity and Motion Filter Size parameters to fine-tune this mask.


 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


The **Operation menu** determines which type of interpolation the filter performs.


* *View Motion Mask* displays the motion in the clip as a black and white mask. Moving areas in the image cause interlace artifacts, thus viewing the Motion Mask allows you to see where the interlace artifacts will be removed by interpolation. The unmasked areas in this view are unaffected by the filter. White indicates interpolation and black indicates that the original pixel is unchanged.
* *Only DeInterlace* converts interlaced video clips to progressive-scan frames without changing the frame rate. This option helps to remove video combing artifacts.


* Note: PAL input at 25i can be converted to progressive-frames by setting the Operation menu to Only Deinterlace and reinterpreting the results as 24 fps.


* Use *Simulate Pulldown* with NTSC video clips to simulate the effect of 3:2 pulldown when film is converted to NTSC video. The filter chooses the fields in the original video that are closest in time to where the 24fps frames would be, deinterlaces them, and then assembles them in the chosen pulldown pattern. The overall timing is not changed. The filter chooses the best 24 fields out of the 60 in each second of video and discards the rest. The pulldown pattern is set in the Pulldown menu.
* *29.97i – 23.976p* creates film-rate progressive-scan frames from interlaced NTSC video.


* Note: AE users can convert NTSC video at 29.978i to progressive frames by placing it into a composition set to 23.976 fps. This is an exact 5:4 ratio, causing one frame from every 5 input frames to be discarded. Setting the Operation menu to 29.97i -> 23.976p causes the filter to use the first input field for output frames 1 and 2 and the second input field for output frames 3 and 4 (in the cycle of 4).


Set the **Input Field Order menu** to match your footage.


**Motion Sensitivity** sets the threshold between black and white on the motion detector or mask. White causes interpolation and black passes the original pixel through unchanged. Setting the Sensitivity to 100 interpolates all pixels. Increase the value until interlace (combing) artifacts disappear.


**Motion Filter Size** determines how many pixels are used to measure the strength of interlace “teeth” or “comb.” Higher values allow the motion detector to better distinguish interlace artifacts from noise. However, higher values interpolate more pixels, reducing detail.


**Interpolation** **Slant** determines how many pixels to the side are examined for diagonal correlations. Setting Interpolation Slant to 0 creates vertical-only interpolation. Setting it to 1 also checks against lines at a 45-degree angle. Setting it to 2 examines one more pixel to the side, and preserves more slanted diagonal lines through interpolated pixels. However, increasing this value also increases rendering time and can introduce noise artifacts. In most instances, the default of 1 works very well, preserving slanted edges without slowing the filter or producing artifacts.


The **Pulldown menu** sets the pulldown pattern. Pulldown includes two “split” frames, composed of fields from different input frames. This filter can generate all five pulldown patterns. The result closely approximates the motion look of film that has been TeleCined. Choose *WWWSS, WWSSW,WSSWW, SSWWW,* or *SWWWS*. This menu only applies when the Operation menu is set to Simulate Pulldown.


When **Operation** is set to *Simulate Pulldown*, the **Output Field Order menu** is active. Since pulldown has two split frames composed of fields from different input frames, you need to set the output field order. Choose *Upper Field First* or *Lower Field First*.


**Mix with Original** blends the source and filtered images. Use this parameter to animate from the unfiltered to the filtered image without adjusting other settings, or to reduce the affect of the filter by mixing it with the source image. At a value of 0, the image is unaffected by the filter.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 