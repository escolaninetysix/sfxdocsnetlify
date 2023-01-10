{
"date": "2019-06-12",
"title": "BCC VR Sharpen",
"category": "BCC VR",
"link": "bcc-vr-sharpen/"
}

 [![BCC VR Sharpen](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2017/10/BCC-VR-Sharpen.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2017/10/BCC-VR-Sharpen.jpg)


### *New in BCC11*


### **Overview**


The BCC VR Sharpen filter uses state-of-the-art image algorithms to enhance image detail while minimizing artifacts associated with traditional sharpening tools.  The core sharpening algorithm performs up to four passes labelled Fine, Small, Medium, and Course.  Each pass targets physical details that have wider and wider pixel dimensions with each stage focusing on details of roughly 1.5x the pixel dimensions as the previous stage.  This filter was designed from the ground up to operate in VR 360 with multiple edge wrap modes to process pixels that reside along the edge of the 360 seam (non-VR aware sharpening filters will generate a hard line across the seam and will not create a convincing look.)


On-screen control widgets are included in this filter, which makes it easy to set up the effect while maintaining visual focus on the image result in the viewer / comp window.


### 


### **Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Source group**


Contains options for specifying the VR source and destination format.


**Input Format:**Use this to set the source and destination format**:**


* *Mono*
* *Stereo Top-Bottom*
* *Stereo Left-Right*


**Input Horizontal FOV :**Use this to set the source and destination field of view**:**


* *360 degrees*
* *180 degrees*


 


**Sharpen Strength** – Use this to set the global sharpen amount


**Fine Detail Radius –** Controls the radius of the finest sharpening band.


 


**Detail Tuning group**


Contains options to fine-tune the level of sharpness which is being applied to the image.


**Sharpen Master** – Use this as a master controller for the Fine / Small / Medium / Sharp parameters


**Sharpen Details Fine / Small / Medium / Large** – Individual controls for the amount of sharpening across the fine, small, medium and large bands


**Inter-band Radius Scale –** Adjusts the radius of each band relative to the previous one. E.g. if Fine Radius is 2, and this is 1.5, then the 2nd band will be radius 3 (2 x 1.5) and so on.


**Sharpen Threshold –** The starting threshold for the image sharpening algorithm. Values below the threshold are ignored by the filter which can help reduce unwanted noise or grit in some images, although this control can also introduce discontinuities in other images and should be used sparingly.


 


**Smoothing Control:**  Specifies whether the sharping is applied to all channels or just the luma channel.


* *Luma* – only the luma channel is sharpened.
* *Independent Channels –* each channel is sharpened individually.


**Edge Mode:**Only available when the Source -> Input Horizontal FOV pop-up is set to 180, this pop-up contains options for how blurred pixels are treated along the edge of the seam.


* *Repeat*
* *Reflect*
* *W**rap* (default)


