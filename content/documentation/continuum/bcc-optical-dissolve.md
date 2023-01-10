{
"date": "2019-06-12",
"title": "BCC+Optical Dissolve",
"category": "BCC Key & Blend",
"link": "bcc-optical-dissolve/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Optical Dissolve filter uses a power function to simulate an optical film dissolve. The bright areas of the B side of the dissolve appear sooner than the darker areas. 


* ![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_323.jpg)Background Image
* ![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_324.jpg)Foreground Image


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_322.jpg)Composited Image
### Filter Parameters


**Opacity‌**: Sets the mix level.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Optical Dissolve from the Key and Blend category:
2. After Effects / Final Cut Pro / Motion / Premiere Pro
	* The layers/tracks should be stacked in the following order from bottom to top: background and then foreground.
	* Apply BCC+ Optical Dissolve to the top foreground layer/track.
3. OFX
	* For node based hosts, apply BCC+ Optical Dissolve to a foreground clip and then hook up a background clip.
	* For layer based hosts, the layers/tracks should be stacked in the following order from bottom to top: background and then foreground. Then, apply BCC+ Optical Dissolve to the top foreground layer/track.
4. Set the Opacity value so that the foreground clip is blended with the background.


