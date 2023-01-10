{
"date": "2019-06-12",
"title": "BCC Flicker Fixer",
"category": "BCC Image Restoration",
"link": "bcc-flicker-fixer/"
}

 [![Flixer Fixer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Flixer-Fixer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Flixer-Fixer.jpg)


### Overview


BCC Flicker Fixeris a filter for eliminating flicker from source footage. It provides 3 different methods for removing flicker. The **Frame****Analysis**method is intended for use with clips with flicker that is uniform throughout the frame, or at least uniform within a contiguous block of the frame – e.g. flicker that is caused by unintended shutter speed or aperture variations from frame to frame. The two **Temporal****Smoothing**methods are intended for use with clips in which the flicker varies from pixel to pixel within the frame – e.g. a scene that is lit partly by natural light and partly by a flickering artificial light, however the Temporal options are most suitable for clips without fast moving objects.


The **Frame****Analysis**method analyzes the whole frame, and is not suitable for clips where the flicker is limited to a small part of each frame unless that part can be encompassed by a sampling mask rectangle. If most of the frame is flickering and a small part is not, the Frame Analysis method will generally remove most (but not all) of the flicker, but is likely to add flicker to the non‐flickering part of the clip.  You can, however, use the Mask and key controls to isolate the non‐flickering part of the clip and prevent this flicker from being added.


The **Temporal****Smoot****h****i****n****g**method processes each pixel independently. If part of the image is flickering and part is not, you can usually get good results by processing the whole clip as long as there is minimal motion in the clip. The filter will produce some softening (since it works by smoothing) in the non-­‐flickering part of the image, and you can use the Matte controls to isolate this region and minimize the image softening.


We recommend rendering the filter in 16 bit or float, especially if the Temporal Smooth YCC method is used.


 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Met****h****od****popup**This control sets the method used by the filter to remove flicker. There are three options:


* *Frame Analysis* analyzes the color range of each frame, and adjusts each pixel based on the difference between the RGB color range of the current frame and the average range of the surrounding frames. This generally works well if the flicker is uniform over the whole image.  The **Frame****Analysis**method always analyzes the whole frame, and is not suitable for clips where the flicker is limited to a small part of each frame. If most of the frame is flickering and a small part is not, the Frame Analysis method will generally remove most (but not all) of the flicker, but is likely to add flicker to the non‐flickering part of the clip.  You can use the **Limit****Sampling** controls to isolate the analysis phase to just a sub-portion of the image.  Furthermore, you can use the Mask and key controls to isolate non‐flickering part of the clip and prevent the average flicker correction from being added.
* *Temporal  Smooth  RGB*and *Temporal  Smooth  YCC* compute  a weighted average  of each pixel with the same pixel at surrounding  frames. The filter assess that the flicker is producing small frame-­‐to-­‐ frame changes in color, so pixels that are close in color to the pixel in the current frame get more weight than pixels that are further away in color. This causes small changes  caused by flicker to be averaged  out, while large changes  caused  by action are left alone. The averaging can be done in either RGB or YCC color space. RGB is faster, and the results are pretty similar, so we suggest you start with RGB. In some cases you may get better results in YCC, especially  if only the Y is flickering.  The **Temporal****Smoot****h****i****n****g**method processes each pixel independently. If part of the image is flickering and part is not, you can usually get good results by processing the whole clip. The filter will produce some softening (since it works by smoothing) in the non-­‐flickering part of the image, and you cause the Matte controls to isolate this region and prevent any image softening.


 


**Frame Analysis Group**


These controls are active when the Frame Analysis method is selected


**Time****Wi****n****dow:**This is the number of frames considered by the filter during flicker removal analysis. You may need to increase this for slow flicker, and may be able to save a little render time by reducing this for fast flicker. Increasing the value in this parameter increases render time.


**Time****Wi****n****dow****Cutoff:**This controls how far the analysis extends along the clip. Increasing the value in this parameter increases render time.


**Faster****Analysis:**You can achieve some speedup of the analysis by checking this control, and it has little discernible effect on the render quality.


**Smoothing:**Increase the value in this parameter if the image flicker is very rapid. Increasing the value in this parameter increases render time.


**R****eset****Ca****ch****e****butto****n****:**You can usually ignore this button, but you need to hit it whenever you make a change to the layer to which the filter is applied.


You **do****n****ot**need to hit this button if you slide the effect in the timeline, or change any filter applied after Flicker Fixer.


**Limit****Sampling****button:**Flicker can sometime be apparent in only a portion of the image – use this button to instruct the filter to limit image analysis to the region encompassed by the top left and bottom right sampling box.


**Sampling****Top-­****Lef****t****/****Bot-­Right:**Used to set the region sample box.


**Vi****e****w:**Used to set the filter output and includes the following four options:


* *Output*– displays the filtered result
* *Transform Over Output*– displays flicker curve over the filtered result
* *Transform Over Input*– displays the flicker curve over the input clip
* *Transform Over Black*– displays the flicker curve over black


 


**Temporal Smoothing Group:**These controls are active when one of the Temporal Smoothing methods is selected.


**Smoothing:**The amount of smoothing, in frames. Increasing this beyond 2 or 3 times the Max Frames setting will have little effect.


**Color****Range:**This is a master control that scales the range for the 3 color channels.


For each channel, the color range determines which pixels at neighboring frames are considered flickering versions of the current pixel.


**Max****Frames:**The maximum number of frames that the filter will look at on each side of the current frame. Increasing this value increases render time.


**Re****d,****Gr****ee****n,****Blu****e****,****Y,****Cb,****Cr****Range****:**Each of these (scaled by the Color Range) sets the range for the specific channel as described under Color Range. Only the 3 that are relevant to the current method setting are active. Note that Cb and Cr ranges default to their minimum value, since we expect most of the flicker to be in Y.


**Smooth****By****Fi****e****lds****checkbox**: This setting affects final render in fielded projects. Turning it on causes the smoothing to include each surrounding field instead of each frame. Enabling this option increases render time and adds some image softening, but can be necessary if the flicker is very rapid.


**Mix****With****Original:**Use to blend the filtered result with the original unfiltered input clip.


 


**Matte****Group**


Use the controls in this group to create a static or animated matte, which is then used to limit the flicker removal to the selected areas of the image.


The generated matte can be any combination of masked regions created via the built-in mask tools within the filter (or in After Effects from any layer mask) along with pixels, which have selected via the key group by the user from the input image.


**Ren****d****e****r**mode pop-up: This popup interacts with the **Mask**and **Ke****y**controls and determines the rendered output of the filter. The Mask and Key controls can be used to create a matte that separates the image into **Inside**and **Outside**pixels. The following options are available in this pop-up:


* *Render with Matte***:**Uses the inside settings to render pixels inside the   matte (pixels that are both inside the mask and keyed in), and the outside settings to render pixels that are outside the matte.
* **Ignore Matte:** The matte is ignored completely.
* *View Matte:* The Matte is rendered as a black and white image.
* *Mask Inside Pixels:* The source is rendered with a ruby mask over the pixels that are inside the matte.
* *Mask Outside Pixels:* The source is rendered with a ruby mask over the pixels that are outside the matte.
* *Make Alpha from Matte:* Makes an alpha channel from the matte. This is composited with the image’s original alpha channel.
* *Make Alpha from Inverse Matte:* Makes an alpha channel from the inverted matte. This is composited with the image’s original alpha channel.
* *Show Source:* Displays the unfiltered and unmasked original input clip.


**Matte****Preview****Color****picker**: Used to set the color of the mask overlay


**Mask****Shape** **pop-up**: Used to select the shape of the mask that is used to contain the inside and outside correction. On-screen control widgets have been provided for the Egg Shape masks. The available on-screen controls for these mask shapes enable you to modify the position and scale of the mask as well as the feather amount, feather bias, and egg shape.


* *Off*: No mask is used and only the Inside Color Correction parameters will affect the image result.
* *Rectangle*: Generates a rectangular mask
* *Rounded Rectangle*: Generates a rectangular mask
* *Egg Shape*: Generates an egg shape mask (good for human faces)
* *Host Layer*: Uses luma or alpha values from a user selected source clip


 


**Mask****Group**


Contains parameters pertaining to the mask that is used to separate the inside and outside correction.


* *Host Layer pop-­up**:***Displays a list all of the available layers in the host timeline.
* *Host Channel pop-­up*: used to select the host layer luma or alpha channel or their inverts.
	+ **Lum****a**: Uses the selected host layer Luma channel.
	+ **Alph****a**: Uses the selected host layer Alpha channel.
	+ **Lum****a****In****v**: Uses the selected host layer Inverted Luma channel.
	+ **Alph****a****In****v**: Uses the selected host layer Inverted Alpha channel.
* *Host Mask pop-­up*: Displays a list of available host generated closed spline mask shapes.
* *Host Mask Offset*: Used to offset the position of the selected host mask shape.
* *Point 1*: Used to control the position of the top of the mask shape.
* *Point 2*: Used to control the position of the bottom of the mask shape.
* *Width*: Used to control the width of the mask shape.
* *Scale*: Used to transform scale the mask shape.
* *Egg Shape*: Used to control the mask egg shape. Negative values produce a downward pointing egg shape, positive values produce an upward pointing egg shape.
* *Feather*: Used to control the softness (feather) of the mask edge.
* *Feather Bias*: Used to position the feather inside or outside of the mask shape bounds.
* *Mask Gamma:*Used to adjust the falloff of the mask feathering.
* *Invert*: Used to invert the mask.


**Ke****y****Mode****po****p****-­u****p**: Controls the state of the key matte function.


* *Off*: Key matte function is disabled.
* *On*: Enables the key matte function.
* *Invert*: inverts the generated key matte.


**Mask****Key****Combine****pop-­u****p**: contains options for combining the mask shape and the key matte.


* *Multiply*: Multiplies the key matte with the mask shape (removes pixels from the mask).
* *Screen*: Screens the key matte over the mask shape (adds pixels to the mask).


 


**Ke****y****Grou****p**


Contains parameters that are used in the generation of key mattes to isolate secondary colors for correction.


* *Base Key On pop-­up*: Used to set the color space in which the keying is done.
	+ **H****S****V**: Hue, Saturation, Luminance.
	+ **H****S****L**: Hue, Saturation, Value.
	+ **HI****S**: Hue, Saturation, Interpreted.
	+ **H****S****P**: Hue, Saturation, Perceptual.
		- Note: Setting the Base Key On pop-up to HSP provides the greatest tonal range of all the available options but it less bright than the HSL default.


* *Key Softness pop-­up*: Controls how the softness controls interact with the key.
* *Expand Key*: Increasing the softness controls expand the key when this is selected.
* *Contract Key*: Increasing the softness controls contract the key when this is selected
* *Soften Key:* Increasing the softness controls softens the key when this is selected.
* *Key Color swatch and eyedropper*: Used to select a color from the image that will be matched in the selected color space.


+ Note: If you choose a pure grey no hue matching will be done.


* *Hue Threshold*: Used to control how close each pixels hue value needs to be to the selected Key Color to be treated as within the key.
* *Hue Softness*: Used to soften the key in the hue channel.
* *Sat. Threshold*: Used to control how close each pixels saturation value needs to be to the selected Key Color to be treated as within the key.
* *Sat. Softness*: Used to soften the key in the saturation channel.
* *Lightness Threshold*: Used to control how close each pixels lightness value needs to be to the selected Key Color to be treated as within the key.
* *Lightness Softness*: Used to soften the key in the lightness channel.
* *Blur Key*: Used to apply a blur to the key.
	+ Note: Use of the Blur Key function can increase render times.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

The trackers in this filter have some additional controls:


**Appl****y**has three choices.


* *Off**:***ignores the tracker data
* *Mask Points**:***applies each tracker to the corresponding mask points
* *Host Mask Offset***:**applies data from Tracker 1 to the host mask.


**L****o****c****k** **T****r****acke****r****1****a****n****d****2:**lock each tracker. If you have successfully tracked one point, and are still working on the other, you can lock the completed tracker to save time and avoid changing its data.


Each tracker has a group for controls that can be set independently for the trackers. You would normally set tracker 1 to the point at the start of your clip where you want Point 1 of the mask to be, and tracker 2 where you want Point 2. You would then track and set Apply to Mask Points


There will be times when the points that you are able to track do not correspond to the end points of the desired mask. There are two ways that you can deal with this. You can attempt to adjust the mask controls (e.g. Feather, Feather Bias, and Scale) to find settings that produce the desired result, or you can edit the Offset X and Offset Y controls for each point to offset the Mask Points from the tracked result. These  offset controls can be animated if needed.


