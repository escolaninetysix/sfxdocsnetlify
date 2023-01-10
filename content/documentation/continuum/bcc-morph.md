{
"date": "2019-06-12",
"title": "BCC Morph",
"category": "BCC Warp",
"link": "bcc-morph/"
}

 

|  |  |  |
| --- | --- | --- |
| [![Morph-7.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-7.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-7.2.jpg) | [![Morph-12.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-12.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-12.2.jpg) | [![Morph-15.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-15.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-15.2.jpg) |
| Source Image | Supplement Image | Mixed Image |


### Overview


The OpenGL hardware-accelerated BCC Morph filter performs a combined warp and cross-dissolve from one still image into another still image, resulting in the generation of an animated image morph image clip. The filter relies on the use of user generated Adobe After Effects spline mask shapes to define edges on the source and on the corresponding destination images to create a realistic image morph.


When morphing one face into another face, for example, the user draws open or closed spline mask shapes that follow the contour line of key elements in the source and destination images, such as the jaw line, eyes, ears etc and the filter uses these spline shapes to aid in generating a smooth morph transition between the two images. In addition to the spline mask shapes the filter uses Key Markers, which serve as instruction points for the Morph filter’s software algorithms that are set in the filter control panel by the user for the source and destination images to control of the duration of the morph. The Key Markers function is to instruct the filter on when to start and stop the image morph.


### Function


**Here’s a step-by-step tutorial on how this filter is used in Adobe After Effects:**Two still image head-shots are imported into an AE project and dragged into the composition timeline with the source image on top of the destination image:




|  |
| --- |
| [![Morph 1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-1.jpg) |


Apply the Morph filter to the top image in the composition and set the Render Mode pop-up to Source UnWarped.




|  |
| --- |
| [![Morph 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-2.jpg) |


Now we add the Key Markers, which are used to define when we want the un-warped source and un-warped destination clips to appear in time the distance between the Key Markers determines the length / timespan of the morph. In the timeline click on the disclosure triangle beside the Effects group, and again on the Morph filter so that you can see the Key Marker track and set the CTI to the start of the timeline.




|  |
| --- |
| [![Morph 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-3.jpg) |


Enable animation by clicking on the stopwatch for this parameter. When you do this a hold keyframe is created at the start of the timeline. The Key Marker should be “On” – the default state is “Off”, to change it to on click on the “Off” text button.




|  |
| --- |
| [![Morph 4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-4.jpg) |


Move forward one frame and create a new keyframe for the Key Marker function by clicking on the keyframe box to the left of the timeline and switch the “On” button to “Off” for the Key Marker control by clicking the “On” text button in the timeline.




|  |
| --- |
| [![Morph 5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-5.jpg) |


Move the CTI to the end of the timeline and click the On button for the Key Marker parameter in the timeline. This action generates a new keyframe and also changes the Off button to On.




|  |
| --- |
| [![Morph 6](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-6.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-6.jpg) |


Create an open spline mask, which follows the contour of the jaw on the source image. Create additional mask shapes, open or closed, that match the contour of the eyes, eyebrows and other features in the image.




|  |
| --- |
| [![Morph 7](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-7.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-7.jpg) |


With the CTI at the start of the timeline, select the Source Image clip in the timeline and press the “M” key on the keyboard. This displays the Mask Path properties for all of the masks on this clip. All masks should be disabled, set to none, in the timeline.




|  |
| --- |
| [![Morph 8](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-8.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-8.jpg) |


Enable keyframe animation for all of the masks by clicking on the stopwatch icon for the Mask Path.




|  |
| --- |
| [![Morph 9](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-9.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-9.jpg) |


Move the CTI to the end to the timeline and in the Morph filter control panel, set the destination image in the Destination pop-up:




|  |
| --- |
| [![Morph 10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-10.jpg) |


In the filter control panel, set the Render Mode to Destination UnWarped.




|  |
| --- |
| [![Morph 11](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-11.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-11.jpg) |


Reposition all of the spline mask shapes so that they match the corresponding elements in the destination image. Keyframes will be generated automatically by AE to reposition or tween the spline shapes over time.




|  |
| --- |
| [![Morph 12](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-12.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-12.jpg) |


In the filter control panel, set the Render Mode pop-up to Warped and Blended.




|  |
| --- |
| [![Morph 13](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-13.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-13.jpg) |


If necessary, go back to the Morph control panel and set the Morph Anti-aliasing to something other than None for a smoother result along the warped edges




|  |
| --- |
| [![Morph 14](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-14.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-14.jpg) |


Now play back the composition in the timeline and observe how the images morph over time from the source to the destination image.




|  |
| --- |
| [![Morph 15](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-15.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Morph-15.jpg) |


So that’s the easy way to use the filter. Should you desire a deeper level of control, you can disable the Use Global Warp parameter and control the spline warping on a per spline basis by setting the Mask Expansion parameter value (under the Mask group in the timeline.) Furthermore, the cross-dissolve blend can be controlled on a per spline basis by disabling the Use Global Blend checkbox and using the Mask Opacity parameter value to set the blend level.


**Parameter Descriptions**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Render Mode pop-up:** Used to set the view from the filter in the composition window


**Blended:**Displays the morphed result when selected


**Source UnWarped**: Displays only the undistorted source clip when selected


**Source Warped:** Displays only the distorted source clip when selected


**Destination UnWarped**: Displays only the undistorted destination clip when selected


**Destination Warped**: Displays only the distorted destination clip when selected


**Warped Splines**: Displays only the warped spline shapes when selected


**Warp checkbox**: Used to enable the warping function of the morph. When disabled only a cross dissolve between the two images will occur and when enabled the result will be a warped morph image


**Destination pop-up**: Used to select the destination image for the morph. All images that have been placed into the composition will appear in this list


**Key Marker checkbox**: Used to instruct the filter where to start and end the morph transition. This parameter must be keyframed at the start and end of the section of the timeline where the image morph is to occur. Before the first keyframe the source image is displayed and after the second keyframe the completed morph image result is displayed


**Anti-­Aliasing pop-up**: Used to set the level of anti-aliasing in the morph result


* *None* – No anti-aliasing is applied to the image
* *5 Samples* – Minimum level (5) of anti-aliasing is applied to the image
* *9 Samples* – Maximum level (9) of anti-aliasing is applied to the image


**Accuracy** **pop-up**: Used to set the optimal performance / speed versus the accuracy of the morph. Lower values produce a less accurate morph with fewer points on the grid but increases filter performance. Higher settings produce a more accurate morph but take longer to render.


* *Low* – Most coarse grid setting – lowest number of grid points
* Medium – Medium grid setting
* *High* – Fine grid setting
* *Highest* – Finest grid – highest number of grid points


**Warp Area pop-up**: Used to set the size of the area in the image that is ultimately affected by the warp grid. Low values will warp only a small portion of the image, while higher values will extend the warp over a larger portion of the image, but will decrease the filter’s performance.


* *Smallest –*Contains image warp to the smallest permissible warp field
* *Small* – Small size warp field
* *Medium –* Medium size warp field
* *Large –*Largest permissible warp field


**Pin Edges**: Used to hold or pin the image edges. Sometimes the image morph can show tears along the edges of the image. Enable this checkbox to pin or hold the edges of the image.


**Boundary Mask pop-up**: Used to contain the morph to a select region in the image. Selecting a mask shape from this pop-up will contain the morph to within the bounds of that mask. If an open spline point is selected, the filter will automatically close the shape by linking the first and last points along the spline.


**Use** **Auto Blend checkbox**: When enabled, the morph will blend the two images in a linear fashion, with all mask shapes getting equal weighting with regard to the image warp. When disabled, the warp is controlled by the settings in the mask expansion or mask opacity settings, depending on which was selected by the user.


**Mask Blend pop-up:**Only available when the “Use Auto Blend” option is disabled, this pop-up allows the user to select whether the warp is controlled by making adjustments to the mask opacity or the mask expansion parameters.


**Mask Opacity**: When selected enables the user to control the degree of warp via the mask opacity parameter


**Mask Expansion**: When selected enables the user to control the degree of warp via the mask expansion parameter


**Point Match checkbox**: Matches point for point the spline masks of the source and destination images, when enabled.


**Auto Alignment checkbox**; Automatically aligns key features in the image, such as the eyes or teeth or other areas of high contrast, when enabled.


