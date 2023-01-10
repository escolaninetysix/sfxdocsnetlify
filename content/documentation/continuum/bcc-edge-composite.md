{
"date": "2019-06-12",
"title": "BCC+Edge Composite",
"category": "BCC Key & Blend",
"link": "bcc-edge-composite/"
}

 NEW IN CONTINUUM 2021, the BCC Edge Composite filter automatically generates an edge matte from an existing Alpha channel and allows you to color correct or blur only the edge of the foreground. You can also mix the edge of the foreground with the background. This is very helpful for seamlessly integrating images as well as dealing with aliased mattes.



![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_218.png)
### Filter Parameters


**Size‌**: Determines the size of the edge matte.


**Color Correct‌**: The edge of the foreground can be color corrected.


* **Hue:** Rotates the hue of the image.
* **Saturation:** Adjusts the saturation of the image*.*Positive values saturate, negative values desaturate.
* **Brightness:**Adjusts the brightness of the image. Positive values brighten, negative values darken.
* **Contrast:** Adjusts the contrast of the image. Positive values increase contrast, negative values decrease contrast.
* **Gamma:** Adjusts the gamma of the image. The gamma adjustment leaves the white and black points the same and only modifies the values in-between. Positive values lighten the midtones, negative values darken the midtones.
* **Temperature:** Sets the color of the image to be either warmer or cooler. Dragging the slider to the right makes the image cooler (bluer) and dragging the slider to the left makes the image warmer (redder).
* **Cyan/Magenta:** Adds either Cyan or Magenta to the image. Dragging the slider to the right makes the image more magenta and dragging the slider to the left makes the image more cyan.
* **Red:** Adds or subtracts red from the image.
* **Green:** Adds or subtracts green from the image.
* **Blue:** Adds or subtracts blue from the image.


**Blur-Horizontal‌**: The edge of the composite is blurred by a fast, quality blur along the X-axis, but only in areas of the edge matte.


**Blur-Vertical**: The edge of the composite is blurred by a fast, quality blur along the Y-axis, but only in areas of the edge matte.


**Gang‌**: The horizontal and vertical slider values can be ganged together. Adjust the horizontal slider to affect both values.


**Opacity‌**: Mixes the foreground back to the background, but only in areas of the edge matte.


 **PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Edge Composite from the Key and Blend Unit
2. After Effects / Final Cut Pro / Motion / Premiere Pro
	* To use Edge Composite, the layers/tracks should be stacked in the following order from bottom to top: background and then a foreground that is a RGB+Alpha clip.
	* Apply Edge Composite to the top foreground layer/track.Avid
3. To use Edge Composite in Avid Editing Systems
	* You can work with either two or three video tracks. When working with three tracks, the video tracks should be stacked in the following order from bottom to top: background, foreground and matte. When working with two tracks, the top track must contain a Matte Key (RGB+Alpha clip).
	* For a two track effect, apply Edge Composite to the track that contains the Matte Key. For a three track effect, apply Edge Composite to the track that has the matte.
	* Depending on what is black and white in your matte, you may need to set the Alpha pop-up menu to a non-inverted selection. By default, Edge Composite inverts the matte to be compatible with the way Avid treats matte values in a Matte Key.
4. For OFX Hosts
	* For node based hosts, apply Edge Composite to a RGB+Alpha clip and then use a Composite or Merge node to composite the result.
	* For layer based hosts, the layers/tracks should be stacked in the following order from bottom to top: background and then a foreground that is a RGB+Alpha clip. Then, apply Edge Composite to the top foreground layer/track.
5. Change the View to Edge Matte.
6. Using the Size control, set the thickness of the Edge Matte.
7. Switch the View back to Output.
8. Adjust the Color Correction, Blur and Opacity of the edge.


