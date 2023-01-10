{
"date": "2019-06-12",
"title": "BCC+Color Paste",
"category": "BCC Key & Blend",
"link": "bcc-color-paste/"
}

 NEW IN CONTINUUM 2021, the BCC Color Paste filter takes the luminance values of the foreground image and pastes it as a color over the background.



![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/color-paste.png)
### Filter Parameters


**Opacity‌**: Sets the opacity of the foreground element.


**Color‌**: The Color parameter sets the color of the foreground image through the use of a standard eyedropper or color picker. The default color is white.


#### A Note for Adobe Premiere Users:


* Color Paste requires a minimum of Premiere Pro CC. In addition, the Sequence Settings > Composite in Linear Color preference needs to be disabled for Color Paste to composite correctly.


#### A Note for Nuke Users:


* Input Is Premultiplied. In Nuke, the Color Paste filter needs to know if the input image is premultiplied. Enable if premultiplied.
* In Nuke, Color Paste premultiplies the output by default.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Color Paste from the Key and Blend unit
2. In After Effects / Final Cut Pro / Motion / Premiere Pro:
	* Stack your foreground clip (what you want to color paste) above a background layer/track.
	* Apply Color Paste to the foreground layer/track.
3. In OFX Hosts such as Nuke and Resolve
	1. For node based hosts, apply Color Paste to a RGB clip and then use a Composite or Merge node to composite the result.
4. For layer-based hosts such as Vegas, stack your foreground clip (what you want to color paste) above a background layer/track. Then, apply Color Paste to the top foreground layer/track.
5. Adjust the Opacity and Color to achieve the desired effect.


Note:Color Paste requires a minimum of Premiere Pro CC. In addition, the Sequence Settings > Composite in Linear Color preference needs to be disabled for Color Paste to composite correctly.


