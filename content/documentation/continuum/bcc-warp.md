{
"date": "2019-06-12",
"title": "BCC Warp",
"category": "BCC Warp",
"link": "bcc-warp/"
}

 [![Warp](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Warp.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Warp.jpg)


### Overview


The OpenGL hardware-accelerated BCC Warp filter is used for the generation of static or animated image warps. The filter relies on the use of user generated pairs of Adobe After Effects spline mask shapes to define the start and stopping point for the image warp. You can use as many pairs of warp shapes as you like to warp the image. In addition, you can contain the warp to a specific region within the image via a single closed spline shape mask.


For instance, we could extend or modify the smile on a persons face by first generating an open spline shape “a” that matches the smile contour and then creating a second open spline shape “b” to define the warp – the software then warps the image pixels based on the spatial relationship between the “a” and “b” spline shapes. To prevent the warp from affecting other areas of the image, contain the two warp splines within a third closed spline shape, set the shape to off in the timeline, and select the shape in the Contain Warp Shape pop-up.


It is important to note that in order to generate a warp in the image, you must use a minimum of 2 open or closed spline shapes.


### Function


**Here’s a step by step tutorial on how this filter is used in Adobe After Effects**


A still image of a bridge (this example is taken from an Artbeats clip) is imported into the project and dragged into the composition timeline




|  |
| --- |
| [![Warp 1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-1.jpg) |


Using the pen tool, an open spline mask is created on the source image that follows the contour of the bridge surface. This is the source spline shape -­‐ it’s helpful to rename the mask in the timeline so that we can easily differentiate the source from the destination spline masks. Name this mask “Bridge Source”.




|  |
| --- |
| [![Warp 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-2.jpg) |


A second spline mask shape is created to warp the image. To make it easy, duplicate the source mask and rename it “Bridge Destination”. You may also want to set the color to something different from the source shape to more easily differentiate between the shape pairs while working in the comp window. In this example, I’ve set the spline shape that we are using for the warp destination to the color red (Note that if you are using closed shape masks, that all masks should be disabled or set to none, in the timeline.)




|  |
| --- |
| [![Warp 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-3.jpg) |


Apply the BCC Warp filter to the source image.




|  |
| --- |
| [![Warp 4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-4.jpg) |


The BCC Warp filter will warp the pixels in the image from the source spline shape to the destination spline shape, so in order to see a warp we need to reposition the points of the destination spline shape. Select and drag a few of the destination shape points away from the source shape points to interactively warp the image.




|  |
| --- |
| [![Warp 5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-5.jpg) |


We can limit or contain the warp so that it affects only the bridge image element by adding third spline mask shape. We’ll make this shape a closed mask. Use the pen tool to create a closed spline mask shape that encompasses the source and destination spline shapes. As per the note above regarding closed mask shapes, make sure to disable the mask function of the shape by setting it to none in the timeline. Rename the mask “Contain Warp Shape” and set the mask color to a different color that the source and destination spline shapes.




|  |
| --- |
| [![Warp 6](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-6.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-6.jpg) |


Select this closed shape in the Contain Warp Shape pop-­‐up in the Warp filter control panel. Observe how the warp no longer extends beyond the bounds of this mask.




|  |
| --- |
| [![Warp 7](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-7.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Warp-7.jpg) |


So that’s the easy way to use the filter. Should you desire a deeper level of control, you can disable the Use Global Warp parameter and control the spline warping on a per spline basis by setting the Mask Expansion parameter value (under the Mask group in the timeline.)


Also note that if desired, you can animate the destination shape spline points over time to generate an animated warp result.


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Render Mode pop-up:** Used to set the view from the filter in the composition window.


* *Source UnWarped*– Displays only the undistorted source clip when selected
* *Source Warped* – Displays only the distorted source clip when selected Warped
* *Splines* – Displays only the warped spline shapes when selected


**Use Global Warp checkbox**: When enabled, this feature instructs the filter to use a single Global warp control for all shapes. When deselected the warp is controlled by making adjustments to the After Effects Mask Expansion feature.


**Global Warp Percent**: Used to control the amount of warping that is applied to the image. a value of zero produces no warp and increasing the value increases the amount of the warp.


**Anti-­Aliasing pop-up**: Used to set the level of anti-aliasing in the morph result.


* None – No anti-aliasing is applied to the image
* 5 Samples – Minimum level (5) of anti-aliasing is applied to the image
* 9 Samples – Maximum level (9) of anti-aliasing is applied to the image


**Accuracy pop-up**: Used to set the optimal performance / speed versus the accuracy of the morph. Lower values produce a less accurate morph with fewer points on the grid but increases filter performance. Higher settings produce a more accurate morph but take longer to render.


* *Low* – Most coarse grid setting – lowest number of grid points
* *Medium* – Medium grid setting
* *High* – Fine grid setting
* *Highest* – Finest grid – highest number of grid points


**Warp Area pop-up**: Used to set the size of the area in the image that is ultimately affected by the warp grid. Low values will warp only a small portion of the image, while higher values will extend the warp over a larger portion of the image, but will decrease the filter’s performance.


* *Smallest* – Contains image warp to the smallest permissible warp field
* *Small* – Small size warp field
* *Medium* – Medium size warp field
* *Large* – Largest permissible warp field


**Pin Edges**: Used to hold or pin the image edges. Sometimes the image morph can show tears along the edges of the image. Enable this checkbox to pin or hold the edges of the image.


**Contain Warp Shape pop-up:** When a spline shape has been selected in this pop-up, only spline shapes that are contained within the bounds of this outer shape will have any affect on the image. If a spline shape is moved outside of the Contain Shape bounds, the shape will not generate a warped result.


**Point Match checkbox**: This function attempts to match points along pairs of spline shapes where possible and when there is a mismatch between the number of points along any pair of spline shapes, the filter will attempt to approximate where the missing point would be along the spline. Sometimes the image result with this feature enabled can appear unnatural – if this occurs disable the Point Match feature.


**Add Warp Grid checkbox**: When enabled, overlays a grid displaying the warp field. This feature is especially useful when making adjustments to the Warp Accuracy and Warp Area settings.


 **Warp Grid Color color chip**: Used to set the color of the warp grid lines. Click on the color chip to select a color for the grid display.


