{
"date": "2019-06-12",
"title": "BCC+ Composite",
"category": "BCC Key & Blend",
"link": "bcc-plus-composite/"
}

 
NEW IN CONTINUUM 2021.5 the BCC+ Composite filter layers a foreground over a background using a matte with the ability to add drop shadows. To create realistic composites, Color Correct, Blur, Grain and Transform controls are provided. Composite also lets you manipulate the matte using grow, shrink and blur tools. Another crucial feature in creating seamless effects, Composite’s edge blending allows for color correction, blurring and controlling the opacity of the foreground images’ edge.


* ![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/06/Image_199.jpg)
* ![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/06/Image_200.jpg)
* ![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/06/Image_198.jpg)


### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**Input Is Premultiplied‌**: In Nuke, the Composite filter needs to know if the input image is premultiplied. Enable if premultiplied.


**Opacity‌**: Sets the opacity of the foreground element.


**Input**: Selects what image to use for the matte.


* *After Effects / Premiere Pro*: Choose the layer/track to use as the matte if you don’t have an embedded Alpha channel or if you want to use an Alpha channel from another clip.
* *Avid*: When working with three tracks, the matte comes from the top track. When working with two tracks, the top track must contain a Matte Key (RGB+Alpha image) and it’s embedded alpha channel is used for the matte.
* *Final Cut Pro*: Click the drop zone to the right of the Input parameter, choose a clip, and press Apply Clip below the Viewer.
* *Motion*: Drag the image to be used as the matte source and place it onto the drop zone to the right of the Input parameter.
* *OFX*: Assigning the matte input requires an OFX host that supports auxiliary inputs. Consult the host documentation for instructions on how to assign an auxiliary input as this will vary by host.


***Note***: In most hosts, the Alpha channel comes from the RGB+Alpha foreground clip.


#### Use


Chooses the channel from the matte input to use in the Composite.


* *Alpha Channel*: The Alpha Channel is used for the matte in the composite.
* *Red Channel*: The Red Channel is used for the matte in the composite.
* *Green Channel*: The Green Channel is used for the matte in the composite.
* *Blue Channel*: The Blue Channel is used for the matte in the composite.
* *Luminance*: The average luminance of the RGB channels is used for the matte in the composite.


Note: The Use parameter is not available in Avid Editing Systems. When applied to a Matte Key, the Alpha Channel is used, otherwise it uses the luminance of the RGB channels.


**Invert**


* Off: Does nothing to the matte.
* *On*: Inverts the luminance values of the matte.


Note:Depending on what is black and white in your matte, you may need to toggle Invert to off.


**Shrink/Grow:** Shrinks or grows the matte. Negative values shrink and positive values grow the matte.


**Blur:** The matte is blurred by a fast, quality blur.


**Black Clip:** Blacks in the matte are made blacker by increasing the value of the slider. As the slider value increases, more values are clipped to black. This is helpful for getting rid of unwanted gray areas in what should be the black part of the matte.


**White Clip**: Whites in the matte are made whiter by increasing the value of the slider. As the slider value increases, more values are clipped to white. This is helpful for getting rid of unwanted gray areas in what should be the white part of the matte.


#### Drop Shadow‌


Drop shadows can be added to any composite. All you have to do is turn up the opacity, position the drop shadow and add a little blur.


**Note** :The Drop Shadow group on Avid Systems has been truncated to “Shad”.


**Color** : The Color parameter sets the color of the drop shadow through the use of a standard eyedropper or color picker. The default color is black.


**Opacity**: The opacity of the shadow.


**Blur**: The drop shadow is blurred by a fast, quality blur.


**Transform:** Transform the drop shadow using Position, Scale, Rotate, Corner-Pin, Shear


#### Edge


The **Edge** parameters allow you to color correct or blur only the edge of the foreground. You can also mix the edge of the foreground with the background. This is very helpful for seamlessly integrating 3D elements as well as dealing with aliased mattes.


**Size**: Determines the size of the edge matte.


#### Color Correct


The edge of the foreground can be color corrected. 


* **Hue:** Rotates the hue of the image.
* **Saturation:** Adjusts the saturation of the image*.*Positive values saturate, negative values desaturate.
* **Brightness:** Adjusts the brightness of the image. Positive values brighten, negative values darken.
* **Contrast:** Adjusts the contrast of the image. Positive values increase contrast, negative values decrease contrast.
* **Gamma:** Adjusts the gamma of the image. The gamma adjustment leaves the white and black points the same and only modifies the values in-between. Positive values lighten the midtones, negative values darken the midtones.
* **Temperature:** Sets the color of the image to be either warmer or cooler. Dragging the slider to the right makes the image cooler (bluer) and dragging the slider to the left makes the image warmer (redder).
* **Cyan/Magenta:** Adds either Cyan or Magenta to the image. Dragging the slider to the right makes the image more magenta and dragging the slider to the left makes the image more cyan.
* **Red:** Adds or subtracts red from the image.
* **Green:** Adds or subtracts green from the image.
* **Blue:** Adds or subtracts blue from the image.


**Blur:**The edge is blurred by a fast, quality blur.


**Opacity**: Mixes the foreground back to the background, but only in areas of the edge matte.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Composite from the BCC Key and Blend unit category
2. After Effects / Premiere Pro
	* To use Composite, you can work with either two or three layers. When working with three layers, the layers should be stacked in the following order from bottom to top: matte, background and foreground. When working with two layers, the top layer must be a RGB+Alpha clip.
	* For a three layer effect, apply Composite to the foreground layer. For a two layer effect, apply Composite to the layer that contains the RGB+Alpha clip.
	* When using three layers, select the layer containing the matte using the Matte > Input selector. You should be aware that the Matte > Input expects an Alpha channel by default. If you want to use a channel other than the Alpha to create your composite, go to Matte > Use and select a different channel.
3. Avid
	* To use Composite, you can work with either two or three video tracks. When working with three tracks, the video tracks should be stacked in the following order from bottom to top: background, foreground and matte. When working with two tracks, the top track must contain a Matte Key (RGB+Alpha clip).
	* For a two track effect, apply Composite to the track that contains the Matte Key. For a three track effect, apply Composite to the track that has the matte.
	* Depending on what is black and white in your matte, you may need to set the Alpha pop-up menu to a non-inverted selection. By default, Composite inverts the matte to be compatible with the way Avid treats matte values in a Matte Key.
4. Final Cut Pro
	* To use Composite, you work with two video tracks. The tracks should be stacked in the following order from bottom to top: background and then foreground.
	* Apply Composite to the top foreground track.
	* The Alpha channel used to create the composite can be from either the foreground’s Alpha channel or from a separate clip. If you don’t want to use the foreground’s Alpha channel or if it does not have one, click the drop zone to the right of the Matte > Input parameter, choose a clip, and press Apply Clip below the Viewer.
5. Motion
	* To use Composite, you work with two video tracks. The tracks should be stacked in the following order from bottom to top: background and then foreground.
	* Apply Composite to the top foreground track.
	* The Alpha channel used to create the composite can be from either the foreground’s Alpha channel or from a separate clip. If you don’t want to use the foreground’s Alpha channel or if it does not have one, drag the clip to be used as the matte and place it onto the drop zone to the right of the Matte > Input parameter.
6. OFX
	* For node based hosts, apply Composite to a RGB+Alpha clip and then hook up a background clip.
	* For layer based hosts, the layers/tracks should be stacked in the following order from bottom to top: background and then a foreground that is a RGB+Alpha clip. Then, apply Composite to the top foreground layer/track.
7. If you want, Color Correct, Blur or Grain the Foreground clip.
8. The Foreground can be transformed using the Transform parameters.There are two sets of on-screen Transform controls in Composite. The point controls that are offset to the right and down are for the drop shadow, while the point controls located on the corners and center of the image are for the foreground.Note:On some host programs, you must highlight the effect title in the Effect Controls window to see the on-screen controls.
9. Use Transform > Crop to get rid of unwanted areas of the Foreground.
10. In the Matte group, apply Shrink/Grow, Blur and Clip controls to the matte if needed.
11. Add a Drop Shadow to the Foreground using the Color, Opacity, Blur and Transform controls in the Drop Shadow Group.
12. Use the Edge parameters to clean up ratty edges, if any, in the composite.


