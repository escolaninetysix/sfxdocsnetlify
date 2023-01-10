{
"date": "2019-06-12",
"title": "BCC VR Blur",
"category": "BCC VR",
"link": "bcc-vr-blur/"
}

 [![BCC VR Blur](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2017/10/BCC-VR-Blur.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2017/10/BCC-VR-Blur.jpg)


### *New in BCC11*


### **Overview**


The BCC VR Blur filter emulates the look of shooting with soft focus or with a lens diffusion filter, generating out of focus effects. This filter was designed from the ground up to operate in VR 360 with multiple edge wrap modes to process pixels that reside along the edge of the 360 seam (non-VR aware filters will generate a hard line across the seam and will not create a convincing look.) The VR Blur filter includes independent controls for the amount of blur along the horizontal and vertical axis, making it easy to emulate fast camera pans.


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


**Input Format:** Use this to set the source and destination format**:**


* *Mono*
* *Stereo Top-Bottom*
* *Stereo Left-Right*


**Input Horizontal FOV :**Use this to set the source and destination field of view**:**


* *360 degrees*
* *180 degrees*


 


**Master Blur:**Control the global blur amount


**Blur X:**Use this to adjust the horizontal blur amount independently of the vertical blur amount


**Blur Y:**Use this to adjust the vertical blur amount independently of the horizontal blur amount


**Edge Mode:**Only available when the Source -> Input Horizontal FOV pop-up is set to 180, this pop-up contains options for how blurred pixels are treated along the edge of the seam.


* *Repeat*
* *Reflect*
* *W**rap* (default)


 


