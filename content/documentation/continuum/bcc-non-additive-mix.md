{
"date": "2019-06-12",
"title": "BCC+Non-Additive Mix",
"category": "BCC Key & Blend",
"link": "bcc-non-additive-mix/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Non-Additive Mix filter combines two images by controlling their luminance level relative to each other as well as a set mix percentage. Back in the day of video switchers and online editing, effects editors used a non-additive mix to combine smoke and fire to another image.


* ![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_320.jpg)Background Image
* ![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_321.jpg)Foreground Image


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_319.jpg)Composited Image
### Filter Parameters


**Background‌**: Selects what image to use as the background.


**After Effects / Premiere Pro**


* Choose the layer/track to use as the background.


**Avid**


* The track below the current track is automatically used as the background.


**Final Cut Pro**


* Click the drop zone to the right of the Background parameter, choose a clip, and press Apply Clip below the Viewer.


**Motion**


* Drag the image to be used as the background and place it onto the drop zone to the right of the Background parameter.


**OFX**


* Node Based Hosts: Hook up the background clip in the Node Graph.
* Layer Based Hosts: The layer/track below the current layer/track is automatically used as the background.


Note:Assigning the background input requires an OFX host that supports auxiliary inputs. Consult the host documentation for instructions on how to assign an auxiliary input as this will vary by host.


**Mix‌**: Sets the mix level of the foreground element.


**Black Clip**: Blacks are made blacker by increasing the value of the slider. As the slider value increases, more values are clipped to black.


Note:Often times the black portion of an image is not entirely black. This becomes an issue if something like fire is shot against a black background. If the black is not entirely black, then these impure black areas will be added to the background image as part of the Non-Additive Mix causing the final result to have “milky” blacks. The Black Clip parameter has been added to easily adjust the foreground image’s black level.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Non-Additive Mix from the Key and Blend unit:
2. After Effects / Premiere Pro
	* To use Holdout Composite, the layers/tracks should be stacked in the following order from bottom to top: background and then foreground.
	* Apply BCC+ Non-Additive Mix to the top foreground layer/track.
	* Using the Background pop-up menu, choose the layer/track to be used as the background.
3. Avid
	* To use BCC+ Non-Additive Mix, the video tracks should be stacked in the following order from bottom to top: background and then foreground.
	* Apply BCC+ Non-Additive Mix to the top foreground track.
4. Final Cut Pro
	* Apply BCC+ Non-Additive Mix to a clip.
	* Click the drop zone to the right of the Background parameter, choose a clip, and press Apply Clip below the Viewer.
5. Motion
	* Apply BCC+ Non-Additive Mix to a clip.
	* Drag the clip to be used as the background and place it onto the drop zone to the right of the Background parameter.
6. OFX
	* For node based hosts, apply BCC+ Non-Additive Mix to a foreground clip and then hook up a background clip.
	* For layer based hosts, the layers/tracks should be stacked in the following order from bottom to top: background and then a foreground clip. Then, apply BCC+ Non-Additive Mix to the top foreground layer/track.
	* Note: In Vegas, BCC+ Non-Additive Mix is accessed through the Composite Mode icon in the track controls and then navigating to the Custom Composite category.
7. Set the Mix value so that the foreground clip is blended with the background.If the blacks in your composite look milky, it is usually because the foreground blacks are not entirely black. These impure black areas will be added to the background clip as part of the Non-Additive Mix causing the final result to have milky blacks. You can improve milky blacks using Black Clip.
8. Use Black Clip if the composite’s blacks look milky.


