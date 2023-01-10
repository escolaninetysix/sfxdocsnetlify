{
"date": "2019-06-12",
"title": "BCC+Harris Shutter",
"category": "BCC Art Looks",
"link": "bcc-harris-shutter/"
}

 
NEW IN CONTINUUM 2021 The BCC+ Harris Shutter filter uses separate images for the red, green and blue channels or offsets the individual channels of a sequence in time. 


Invented by Robert S. “Bob” Harris of Kodak, the Harris Shutter was originally a strip device with three color filters used for making color photographs with the different primary color layers exposed in separate time intervals in succession. The same frame of film was re-exposed through red, green and blue filters in turn, while keeping the camera steady.


The Continuum filter version of the Harris Shutter can use separate images for the red, green and blue channels or offset the individual channels of a sequence in time. Offsetting the channels creates a rainbow of color around any object that moves within the frame. Some good candidates for subjects include waterfalls, clouds blowing over a landscape or people walking across a busy street.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_240.png)
### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**View:** Allows you to set the viewer to display various color channels.


* *Output*: Shows the default look of the BCC Harris Shutter filter on the image and mixes all color channels.
* *Red:* Shows the red color channel only.
* *Green:* Shows the green color channel only.
* *Blue:* Shows the blue color channel only


**Source:** Sets the source image to be used as the Red, Green and Blue channels. If an image is not assigned using Source, the original image’s color channel will be used. Depending on your host, different workflows may be needed:


* *After Effects:* Select the layer from the Red, Green, and Blue > Source selector.
* *Premiere Pro:* Select the track from the Red, Green, and Blue > Source selector.
* *Final Cut Pro X:* Click the drop zone to the right of the Red, Green, or Blue > Source parameter, choose a clip, and press Apply Clip below the Viewer.
* *Avid Editing Systems:* Place the source clips on a track below the clip you applied Harris Shutter to. Source 1, Source 2, and Source 3 are numbered from top to bottom where Source 1 is the first track below the one Harris Shutter is applied to.
* *OFX Hosts:* Assign the images to be used as the Red, Green, or Blue > Sources.


**Note:** The Red, Green and Blue source inputs are only available in OFX hosts that support auxiliary inputs. If auxiliary inputs are not supported, they will not be visible. Consult the host documentation for instructions on how to assign a source input as this will vary by host.


**Offset:** Allows you to offset the frames used for the Red, Green and Blue channels.


**Amount**: Controls how much of the Red, Green or Blue image is contributed to the composite image.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC Harris Shutter from the BCC Art Looks unit category.
2. If using the same sequence but offset in time for the various channels, set the Red, Green and Blue > Offset.
3. Select the source for the Red, Green and Blue channels.
	* *After Effects:* Select the layer from the Red, Green, and Blue > Source selector.
	* Premiere Pro: Select the track from the Red, Green, and Blue > Source selector.
	* *Final Cut Pro X:* Click the drop zone to the right of the Red, Green, or Blue > Source parameter, choose a clip, and press Apply Clip below the Viewer.
	* *Avid Editing Systems:* Place the source clips on a track below the clip you applied Harris Shutter to. Source 1, Source 2, and Source 3 are numbered from top to bottom where Source 1 is the first track below the one Harris Shutter is applied to.
	* *OFX Hosts:* Assign the images to be used as the Red, Green, or Blue > Sources. **Note**: The Red, Green and Blue source inputs are only available in OFX hosts that support auxiliary inputs. If auxiliary inputs are not supported, they will not be visible. Consult the host documentation for instructions on how to assign a source input as this will vary by host.If an image is not assigned using the Source parameters, the original image’s color channel will be used.
4. Adjust the Red, Green and Blue > Amounts to the desired level.


