{
"date": "2019-06-12",
"title": "BCC Optical Stabilizer",
"category": "BCC Image Restoration",
"link": "bcc-optical-stabilizer/"
}

 [![OpticalStabilizer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/OpticalStabilizer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/OpticalStabilizer.jpg)


### Overview


The BCC Optical Stabilizer filter enables you to quickly and easily stabilize shaky video footage, such as clips that were shot with a hand-held camera. The Optical Stabilizer uses optical flow technology to analyze every frame in the source clip to determine the movement of the camera and then adjusts the position, rotation and scale of the clip to compensate for the unwanted camera movement. Depending upon filter parameter settings the motion in the clip will either be smoothed or completely locked down. Unlike many image stabilization tools, the BCC Optical Stabilizer does not require you to set and keyframe user-defined tracking points, which is very useful for images where point tracking data is unreliable.


Because the very nature of post camera image stabilization causes the image to be cropped, this filter includes post image stabilization options to fill the blank areas around the of the frame, such as repeating pixels along the cropped edges, mirroring the image along those edges, filling them with solid color or leaving them transparent. An autoscale function is also included in the filter. The Auto Scale function, which is enabled by default, automatically transform scales the image so that it fills the frame across time. Also included in the filter are seven user-selectable transform scale algorithms, which ensure optimal post-transform image sharpness.


Note that Optical Stabilizer is designed to be applied to individual clips without cuts.  If you have a “compound” clip that contains multiple cuts you should first split the content into separate segments for each cut and apply Optical Stabilizer separately to the individual segments.  Similarly Optical Stabilizer is not designed to be applied to Adjustment Layers or Precomps that span multiple separate clips, but instead should be applied separately to each individual clip.


### Function


1. Set the Composite Window to full resolution and 100 percent.


2. Drag the BCC Optical Stabilizer filter from the BCC Image Restoration group onto a source clip in the timeline.


3. Open the Effects Controls Window.


4. Click on the Analyze button – the filter will pop-up a window that displays the current frame being analyzed and the estimated amount of time remaining to complete the image analysis.


5. When analysis is complete the pop-up window will disappear and the clip will be stabilized along the xy axis and automatically resized so that the image fills the frame at every point in time.


 


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

**Compare****Mode****po****p****-­up:**Controls what is displayed by the Compare Mode. The options are:


* *Off*shows the output of the filter.
* **Side By**Side*the left side of the output shows half of the incoming image, and the right side shows the same half of the image as processed by the filter. When in Side-by-Side mode, the corresponding Slide and Right Offset sliders become available.Wipe*enables the user to interactively wipe the effect across the image. The left side of the wipe bar on the image output shows the unfiltered image, while the right side of the wipe bar shows the filtered result. When in Wipe mode, the corresponding Wipe slider becomes available.
* *Wipe/Slide*operates as a Wipe function when Wipe is selected in Compare Mode, and as a Slide function when Side-­‐By-­‐Side is selected in Compare Mode. When in Wipe mode, adjustments to this parameter moves the vertical wipe bar across the image; the region on the left of the wipe bar shows the original unfiltered image, while the region on the right shows the filtered result. When in Slide mode, adjustments to this parameter pans the image in the viewer window, maintaining the spatial relationship in the viewer between the before and after images.
* *Right**Offset*provides a way to adjust the spatial relationship between the unfiltered original image and the filtered result in the viewer window. Adjustments to this parameter will offset the position of the filtered image in the viewer.


 


**Mode Pop-up Options:**


* *Stabilize:* removes all camera movement and is the default selection.
* *Smooth:* smoothes but does not eliminate camera movement.
* *Setup Region:* to setup the target area. This region should be as large as possible while excluding large untrackable areas of uniform texture such as sky or water.
* *Show Vectors:* displays red lines and dots over the image that show where the optical flow algorithm has detected moving pixels in the image and provides useful feedback when making changes to parameters in the optical flow group.
* *Show Samples:* displays red dots over the image that show pixels have been sampled by the optical flow algorithm and provides useful feedback when making changes to parameters in the optical flow group.


 


**Reference Frame**


Changing the value in this parameter changes the reference frame around which the source clip is stabilized. Changing this value does not require re-analysis of the clip and depending on the amount of movement in the source, a value other than the default first frame can sometimes generate a more pleasing result. Available when in Stabilize mode only.


 


**Smoothing Range**


Changing the value in this parameter changes the number of frames over which the camera motion is smoothed. Experimentation is key as depending on the level of camera movement in the source clip, changing this value will result in a more or less smooth result. Available when in Smooth mode only.


**Corner 1** and **Corner 2** position controls determine the target region. The target region indicates the area in the media to track. The points set the location of the upper left and lower right corners of a rectangular target region. However, in general it is easier to use the onscreen point controls to set this up. Then use the position controls for finetuning. Before adjusting these controls, set the Mode menu to Setup Region.


A good target region contains a high-contrast object with good vertical and horizontal edge definition as well as large areas of non-uniform detail, especially edges in various directions. Ideally, you should find a pattern that is visible in every frame. The area you define should contain an object that should be stationary in every frame.


For example, you want to stabilize some footage shot off the railing of a moving boat. The pier is visible from the boat. A high contrast mooring on the pier would make a good target.


* Warning: Not all imagery is appropriate for optical stabilization. For example, images with large uniform textures, like fields of grain, sky, water, or blank walls will not work well with this filter. Images with lots of motion blur or low contrast images may also cause problems. In addition, perspective shifts (for example, a forward dolly shot) or moving foreground objects that dominate the image will not generate optimum results. For best results, your target region should include a fair amount of contrast with good vertical and horizontal edge definition as well as large areas of non-uniform detail, especially edges in various directions. The motion of the clip should only include panning, zooming and rotation. Large background areas with objects moving independent of the background are also suitable.


**Stabilize Pop-up Options:**


* *Translation:* Default setting and locks down the camera along the XY axis.
* *Translation + Rotation:* Select this option to remove any rotation in the result.
* *Translation + Rotation + Zoom*: Select this option to correct for rotation and zoom – this provides a total camera lock-down result.


 


**Edge Handling Group**


This group contains controls to handle the edges around the stabilize image.


**Clip** **Top**: Crops the image along the top horizontal edge.


**Clip** **Left**: Crops the image along the left vertical edge.


**Clip** **Bottom**: Crops the image along the bottom horizontal edge.


**Clip** **Right**: Crop the image along the right vertical edge.


**Edge** **Handling** **Pop**–**up**: Contains options for handling the outer edges of stabilized result.


* *Color* – Fills the outer edges with solid color pixels. Use the edge color parameter to set the color used.
* *Transparent* – Fills the outer edges with alpha transparency.
* *Repeat* – Repeats the last row of pixels, producing a smeared effect.
* *Reflect* – Mirrors the image.
* *Tile* – Tiles the image.


**Edge Color Chip:** Use to set the color of the pixels for the color fill


 


**Post Processing Group**


This group contains post image stabilization options for controlling the transform scale and image sharpness.


**Auto Scale**: When enabled, automatically transform scales the image to fill the frame.


**X Translation**: Use to manually reposition the image along the horizontal axis


**Y Translation**: Use to manually reposition the image along the horizontal axis


**Rotation**: Use to manually rotate the image along the Z axis


**Scaling**: Use to manually transform scale the image


**Transform Center Offset**: Use to set the x/y pivot point around which manual rotation and scaling are centered.


**Quality Pop-up**: Contains 7 transform scale quality options


* *Draft* – Minimum level of post transform image sharpness
* *Fast* – Default sharpness setting
* *Sharp* – Generates a significantly sharper result than default
* *Standard* – Generates a significantly sharper result than default
* *Smooth* – Smooths instead of sharpens
* *Magic Smooth* – Generates the smoothest result
* *Magic Sharp* – Generates the sharpest result


 


**Optical** **Flow** **Group**


This group contains parameters that can be manipulated to alter Optical Flow analysis.


**Vector View Spacing** – Use to adjust the number of on-screen vector lines.


**Vector View Scale** – Use to increase the scale of the on-screen vector lines.


**Stabilization Samples** – Use to set the number of pixel samples that the optical flow algorithm uses for image analysis. Higher values pay produce a more accurate result but will increase render times.


**Span** – Sets the percentage of samples that are considered to be representative of the background. If the image is nearly all background, increasing the value in this parameter can increase the accuracy of the stabilization.


**Edge Contrast** – Sets a threshold for the minimum amount of detail in a region.  Regions containing less detail than the threshold are treated as having no detail.  If the images includes a lot of motion in areas that are very detailed, or small objects, decrease the value in this parameter.  Min Edge Contrast does no depend on motion, only texture and detail.


**Resolution** **Pop**–**up**: Used to set the quality of image analysis.  Higher values will result in longer image analysis items but, depending on the clip, may yield a higher quality result.


* *Full* – Full High-resolution image is analyzed
* *Half*– Image is halved in size and then analyzed
* *Quarter* – Image is shrunk to quarter size and then analyzed
* *Eighth* – Image is shrunk to quarter size and then analyzed
* *Sixteenth* – Image is shrunk to quarter size and then analyzed
* *32nd* – Image is shrunk to quarter size and then analyzed
* *64th* – Image is shrunk to quarter size and then analyzed


**Velocity** **Limit** – Constrains the magnitude of motion estimation.  This value corresponds to a percentage of the size and resolution of the Source Later.  For example, when working with a D1 image, the value of 100 corresponds to approximately 100 pixels.


**Low Velocity** **Correction** – The value in this parameter sets a threshold for detecting motion in a region.  If the Optical Flow shows vectors in a area that is not moving, adjust the Low Velocity Correction value.


