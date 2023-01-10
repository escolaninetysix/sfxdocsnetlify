{
"date": "2019-06-12",
"title": "BCC Broadcast Safe",
"category": "BCC Image Restoration",
"link": "bcc-broadcast-safe/"
}

 [![BCC Broadcast Safe](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2017/10/BCC-Broadcast-Safe.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2017/10/BCC-Broadcast-Safe.jpg)


### *New in BCC11*


### **Overview**


The BCC Broadcast Safe filter provides an easy and automated way to ensure that all of your projects are color and luma safe for delivery to any broadcast market.  Simply apply the filter at the top level of your sequence or comp, select the preset that corresponds with the broadcast standard that you require and render.


This filter utilizes a soft knee approach to maintaining safe color and luma levels and by default does not hard clip the output. The included Custom option opens up all of the controls for you to create your own customized presets.


### 


### **Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Broadcast Standards:**Use this pop-up to select the desired broadcast standard for the clip or sequence that you are working with. The available standards are:


* *Neutral:* No change is made to the underlying source (this is the default) and the filter is effectively bypassed when in this mode. All other selections from this menu will cause the underlying source to be altered to fit the selected broadcast standard.
* *EBU 103*
* *EBU 103 Extra Safe*
* *0-100 % RGB*
* *PAL*
* *NTSC*
* *NTSC No Setup*
* *EBU 103 + PAL*
* *EBU 103 + NTSC*
* *EBU 103 + NTSC No Setup*
* *Custom:* This option will open up all of the filter controls to enable the generation of user definable customized presets.


**Color Range**: Use this pop-up to select the desired color range. The available options are:


* *Automatic:* Automatically selects between full range and video range based on the selected broadcast standard
* *Full Range:* 0-100
* *Video Range:* 16-235


**Color Space**: Use this pop-up to select the desired video space. The available options are:


* *Rec. 601 (SD)*
* *Rec. 709/1886 (HD)*


**View Mode**: Use this pop-up to set the current view mode. Note that this selection is rendered into the final result so be sure to set this to Final Output before rendering. The available options are:


* *Final Output:* The filtered broadcast safe result
* *Zebra Pattern:* Displays a zebra pattern over areas in the image that are being changed by the filter
* *Clipped Pixels:* Adds a color overlay over areas in the image that are being changed by the filter


 


***Note that all of the parameters listed below are available only when Custom is selected from the Broadcast Standards pop-up.  The available / visible custom parameters change depending on the chosen Color Mode.***


**Color Mode**: Use to select the desired working color mode for the filter. Options are:


* *RGB*
* *YRGB*
* *Composite*
* *Composite + RGB*
* *Chroma*


**Composite Mode:**  Use to select the Composite settings when working in *Composite* or *Compsite +RGB* modes. Options are:


* *NTSC with no Setup*
* *NTSC with 7.5 IRE Setup*
* *PAL*



**Y-Luma Range group:**


Controls the clip points and knee widths for the  Y or Luma channel.


**High Clip:**


**High Knee:**


**Low Knee**


**Low Clip**



**RGB Range group:**


Controls the clip points and knee widths for the  RGB channels.


**High Clip**


**High Knee**


**Low Knee**


**Low Clip**



**NTSC, no Setup group:**


Controls the IRE settings when the Composite Mode is set to *NTSC with no Setup*.


**High IRE**


**Low IRE**



**NTSC, 7.5 IRE Setup group:**


Controls the IRE settings when the Composite Mode is set to *NTSC with 7.5 IRE Setup*.


**High IRE**


**Low IRE**



**PAL group**


Controls the IRE settings when the Composite Mode is set to *PAL*.


**High IRE**


**Low IRE**



**Chroma group:**


Controls custom clamping of just the saturation.


**Soft Clip**


**Hard Clip**


 


 


