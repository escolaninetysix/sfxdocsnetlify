{
"date": "2019-06-12",
"title": "BCC VR Reorient",
"category": "BCC VR",
"link": "bcc-vr-reorient/"
}

 [![BCC VR Reorient](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2017/10/BCC-VR-Reorient.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2017/10/BCC-VR-Reorient.jpg)


### *New in BCC11*


### **Overview**


The BCC Reorient filter enables users to reorient a VR 360 shot in true 360 VR space in either mono or stereo format. Included in the filter are a set of intuitive overlay guides that map each section of the 360 source clip to its respective face in the 360 environment, emulating the view that a user would experience when consuming 360 media via a head mounted display system such as an Oculus Rift.


### 


### **Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Source group**


Contains options for specifying the VR source input to, and output from, the filter.


**Input Format:**Set the source format**:**


* *Mono*
* *Stereo Top-Bottom*
* *Stereo Left-Right*
* Stereo Bottom-Top
* *Stereo**Right-Left*


**Input Horizontal FOV :** Set the input source field of view**:**


* *360 degrees*
* *180 degrees*


**Output Format:**Set the output format**:**


* *Left Eye*
* *Right Eye*
* *Stereo Top-Bottom*
* *Stereo Left-Right*
* Stereo Bottom-Top
* *Stereo**Right-Left*


 


**Reorient Group**


Contains parameters for reorienting the source clip in 360 VR space.


**Enable Reorientation checkbox:**  This control offers a quick way to toggle between the orientation of the unfiltered original source clip and the reorientated source clip.


**Tilt (X axis):** Reorients the shot along the X axis


**Pan (Y axis):** Reorients the shot along the Y axis


**Roll (Z axis):** Reorients the shot along the Z axis


**View Mode:** Contains options for setting the current view mode of the filter.  Be sure to set the *View Mode* back to Full before rendering.  The options are:


* *Full* – displays the full reoriented source image in its original format
* *Preview* – displays the reoriented source image as if it were viewed through a headset
* *Left* – displays the left face of the reoriented source image as if it were viewed through a headset
* *Front* – displays the front face of the reoriented source image as if it were viewed through a headset
* *Right* – displays the right face of the reoriented source image as if it were viewed through a headset
* *Back* – displays the back face of the reoriented source image as if it were viewed through a headset
* *Top* – displays the top face of the reoriented source image as if it were viewed through a headset
* *Bottom* – displays the bottom face of the reoriented source image as if it were viewed through a headset


**Preview FOV** – Use this to set the field of view (FOV) for the preview mode. Useful when you want to pull back from the shot. This feature is only available when the View Mode is set to Preview.


**Preview Left-Righ**t – Use this to shift the view along the horizontal axis, side to side. This feature is only available when the View Mode is set to Preview.


**Preview Top-Bottom**  – Use this to shift the view along the vertical axis, up and down. This feature is only available when the View Mode is set to Preview.


 


**Overlays****Group**


Contains parameters for displaying guides that can assist in setting up the effect. Note that these options should be disabled before rendering the effect or they will be burned into the output.


**P.I.P. Mode**: When enabled, generates a convenient picture-in-picture effect, which displays the unfiltered source clip in its original format superimposed on top of the filtered result.


* *Off* – PIP is disabled. This is the default state.
* *Top-left –* Displays the PIP in the top-left quadrant of the viewer.
* *Top-Right* – Displays the PIP in the top-right quadrant of the viewer.
* *Bottom-left –* Displays the PIP in the bottom-left quadrant of the viewer.
* *Bottom-Right –* Displays the PIP in the bottom-right quadrant of the viewer.


**P.I.P Scale**: Use this to set the size of the PIP overlay.


**Overlay Guides**: When enabled, displays an outline of the 360 cube map onto which the source clip is mapped.


**Overlay Faces**: When enabled, overlays a different color for each face of the cube map.


**Overlay Text**: When enabled, overlays a text identifier for each face of the cube map.


**Overlay Opacity**: Use to control the opacity of the color overlay for each face of the cube map.


 


