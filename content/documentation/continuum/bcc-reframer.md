{
"date": "2019-06-12",
"title": "BCC Reframer",
"category": "BCC Image Restoration",
"link": "bcc-reframer/"
}

 [![BCC Reframer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Reframer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Reframer.jpg)


### *New in BCC10*


### **Overview**


The BCC Reframer filter was designed to ease the work of integrating video that was shot in portrait format into a landscape video frame, incorporating SD footage into HD/UHD frames, or ensuring maximum image quality when converting HD to UHD.  Typical applications of this filter include:


* Inserting vertical cell phone footage that was sourced, for example, on an iPhone into an HD/UHD format sequence with extensive control over framing and edge padding
* Converting 4:3 SD sources into 16:9 HD or UHD frames with advanced upscaling algorithms and extensive control over framing and edge padding.
* Upscaling from HD to UHD (even when frame aspects match) with advanced upscaling algorithms for maximum quality and control over the upscaling process.


***BCC Reframer vs BCC UpRez:**  Note that BCC Reframer and BCC UpRez have partially overlapping features in that both can be used to convert SD to HD / UHD formats or HD to UHD (as examples).  BCC Reframer is the best choice when embedding vertical footage into horizontal frames since it has much more extensive control over the framing and over the various methods for filling/padding the edge regions.  BCC Reframer also tends to be easier to configure and is great for quickly converting large numbers of SD clips into HD/UHD formats or HD to UHD.  BCC Uprez is appropriate when the primary concern is achieving the highest possible upscaling quality, as opposed to ease of use or edge style options, since the UpRez workflow guarantees that all processing happens in a single pass, even when the pixel aspect ratios of the source and destination do not match.  BCC Reframer offers the same advanced resampling algorithms as UpRez, but compensation for differing pixel aspect ratios will be done by the host in a separate pass.*


Here’s a quick tutorial on how to use the filter in various hosts followed by a brief description of the available controls and options.


### Workflow Part 1 – Basic Setup:


**Please note that the initial setup of Reframer is slightly different between the Avid Media Composer, Adobe After Effects / Premiere Pro, and DaVinci Resolve hosts.  Once the basic setup is complete, the various refinement options in Part 2 are the same for all hosts.** 


*Tip:  if you are importing multiple shots from the same source format you can greatly simplify the process by saving a BCC preset with the desired initial setup to use as a quick starting point.*


**Basic Setup in Avid Media Composer****:**


* Start by importing the vertical media asset (iPhone shot) into the project and cut this into the timeline of the sequence that you’re working with
* Apply the BCC Reframer filter directly to the imported clip in the sequence
* In the Effect Editor panel, twirl open the Source Setup group
* If the image is rotated horizontally, use the Interpret Source pop-up to rotate the image so that it is vertical
* Use the Crop Source Width to crop out the black background that surrounds the clip after it was imported into Media Composer


**Basic Setup in Adobe After Effects / Premiere Pro****:**


* Start by importing the vertical media asset (iPhone shot) into the project and move this into the timeline of the composition that you’re working with – disable the view of this shot by clicking on the eyeball for this clip in the timeline
* Add a new solid layer to the comp which matches the final composition/sequence dimensions.
* Apply the BCC Reframer filter to the new solid layer
* In the Effect Controls Window, at the top of the filter, twirl open the Source Setup group and set the Source Layer to use the imported media asset
* If the image is rotated horizontally, use the Interpret Source pop-up to rotate the image so that it is vertical


**Basic Setup in DaVinci Resolve****:**


* Start by importing the vertical media asset (iPhone shot) into the project and move this into the timeline of the composition that you’re working with
* In Color mode, apply the BCC Reframer Filter to the default node in the node tree
* If the image is rotated horizontally, twirl down the Foreground Setup group, and set the FG Rotate Pre parameter to 90 so that the foreground is vertical
* Twirl down the Background Transforms group, and set the BG Scale Master to 200 so that the background image fills the width of the screen


###  Workflow Part 2 – Refinements:


* If the source is being upscaled by a large amount (e.g. SD to HD), experiment with the Resampling Quality menu starting with the Magic Sharp option to ensure optimum image quality during the rescaling.
* Use the Foreground Setup group as necessary to refine the framing of the source prior to the cropping – e.g. adjusting the horizon line.
* Use the Foreground Transforms group to refine the framing of the source after the cropping such as zooming/panning or stretching.
* Use the Background Setup group to control how the background edge regions are filled.
* Use the Background Transforms group to refine the framing of the background fill.
* Use the Foreground Effect and Background Effect groups to:
	+ Control blending or drop shadow between the regions
	+ Tweak sharpness or perform basic color correction
	+ Add more stylized effects such as Blur, Tint, Glow, Halftone, or Mosaic.


### Workflow For Vegas Pro Users:


Vegas Pro has a unique workflow setup for BCC Reframer. To get the best results you will want to begin by creating a project with your desired **final** dimensions – e.g. 1920×1080


* Import the vertical footage into the project.
* Add the vertical footage to the timeline.
* If Vegas asks you “Do you want to set your project video settings to match this media” choose **No**.
* Open Vegas’s Pan/Crop tool for the clip.
* Make sure the option for Lock Aspect Ratio is disabled.
* Set the main Width and Height parameters in the Pan/Crop controls to the FINAL Dimensions – e.g. 1920×1080.
* Now apply BCC Reframer.
* Adjust the Crop Source Width until all the black disappears. Often a value of around 34 might be a good starting point.


You should now see the vertical clip with a blurred copy of itself filling the sides. At this point you can experiment with various effects to fine tune the results like in other hosts.


### Secondary Workflow For Vegas Pro Users:


Another option unique to Vegas Pro users, which in some circumstances could produce higher quality results is as follows:


* Import vertical clip into Vegas
* In the Project Media pane, right click on the source clip and choose Properties.
* Override the Rotation setting – e.g. back to 0. Depending on your footage this may tell Vegas to treat the clip as a horizontal clip instead of a vertical clip.
* Add the clip to a project of desired final size. It will appear horizontal at first.
* Apply BCC Reframer
* In the Foreground Setup section change Interpret Source to either 90 or -90 depending on clip orientation.


This should then instantly give you a good default look for Reframer which you can then use as the starting point to refine the details.


### **Parameter Controls:**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

**Resampling Quality**: This menu controls which resampling algorithm is used when rescaling the footage.  Note that the various quality options in this menu are only really relevant when doing a large amount of resolution upscaling such as when importing SD footage into HD/UHD or HD into UHD.  Using the Foreground Setup or Foreground Transform controls to increase the effective amount of zoom into the source clip can also create situations where the advanced Resampling Quality options are helpful.  When not doing significant upscaling it is recommended that you leave this menu at the default Fast setting for optimum performance.  When upscaling the footage by significant amounts the Magic Sharp option is recommended to maintain maximum edge definition, but depending on the nature of the source footage and the amount of uprezzing it can be useful to experiment with the other quality options to achieve the right balance between edge preservation and noise augmentation.


**Foreground Setup** **Group**


This group contains options for how the Foreground (FG) image is handled.  The geometric controls in this group are applied *prior* to the image cropping and allow adjustments such as adjusting horizon lines without creating rotated image boundaries.  Use the geometrics in the Foreground Transforms group to control the final reframing *after* the cropping phase such as panning/zooming.


**Crop Source Width**: Crop out any unwanted portions of the image along the horizontal axis including any solid colored padding that may have been added to the clip during import in your particular host.


**Crop Source Height**: Crop out any unwanted portions of the image along the vertical axis including any solid colored padding that may have been added to the clip during import in your particular host.


**Interpret Source**: Rotate the FG image plus or minus 90 degrees if necessary.


**FG Scale Master** **Pre**: Uniformly scale the FG image, without affecting the image mask.


**FG Scale X Pre**: Scale the FG image along it’s horizontal axis, without affecting the image mask.


**FG Scale Y Pre:**  Scale the FG image along it’s vertical axis, without affecting the image mask.


**FG Position Pre**: Reposition the FG image along the horizontal axis, without affecting the image mask.


**FG Rotate Pre****:** Rotate the FG image, without affecting the image mask.


**Foreground Transforms** **Group**


This group contains options for applying transforms to the FG image independently of the BG image.


**FG Scale Master Post**: Uniformly scale the FG image.


**FG Scale X Post**: Scale the FG image along it’s horizontal axis.


**FG Scale Y Post**: Scale the FG image along it’s vertical axis.


**FG Position Post**: Reposition the FG image along the horizontal axis.


**FG Rotate Post**: Rotate the FG image.


**Foreground Effects** **Group**


This group contains options for adding effects to the FG image independently of the BG image.


**FG Blend Edges**: Soften the edges of the FG image.


**FG Sharpen**: Sharpen the FG image.


**FG Blur**: Blur the FG image.


**FG Color Correction**: Adjust the color of the FG image.


**FG Drop Shadow**: Add a drop shadow behind the FG image.


**Background Setup** **Group**


This group contains options for how the BG image is handled.


**Background**: Set the BG source. Reframer allows you to use the original clip as your source, or select an alternate clip if desired.


**Alternate Source**: Set a clip other than the source for the BG.


**Source Options**: Determines how the background is filled. There are three settings available:


* **Scale** is a uniform scale transform.
* **Stretch** is a non-uniform scale transform.
* **Mirror** duplicates the image on either side of the FG image and includes options to flip each of the mirrored images.


**Background Transforms** **Group**


This group contains options for applying transforms to the BG image independently of the FG image.


**BG Scale Master**: Uniformly scale the BG image.


**BG Scale X:** Scale the BG image along it’s horizontal axis.


**BG Scale Y**: Scale the BG image along it’s vertical axis.


**BG Position**: Reposition the BG in XY space.


**BG Rotate**: Rotate the image.


**Background Effects** **Group**


This group contains options for adding effects to the BG image independently of the FG image.


**BG Blur**: Apply a Blur effect to the BG image.


**BG Mosaic**: Apply a Mosaic effect the BG image.


**BG Tint**: Apply a color tint to the BG image.


**BG Sharpen**: Sharpen the BG image.


**BG Color Correction**: Adjust the color values of the BG image.


**BG Glow**: Add a Glow effect to the BG image.


**BG Halftone**: Add a Halftone effect to the BG image.


