{
"date": "2019-06-12",
"title": "BCC VR Insert",
"category": "BCC VR",
"link": "bcc-vr-insert/"
}

 [![BCC VR Insert](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2017/10/BCC-VR-Insert.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2017/10/BCC-VR-Insert.jpg)


### *New in BCC11*


### **Overview**


The BCC VR Insert filter provides users with a way to insert a secondary source clip, title, logo, etc. into a VR 360 shot in true 360 VR space in either mono or stereo format in addition to providing a full array of controls to reorient the source in 360 VR space.


#### **Workflow considerations:**


The VR Insert filter can be applied in two distinct ways in most hosts, although in some hosts only one of the workflows is available.  **Apply to Background Workflow** -You can apply VR Insert to the background VR video layer and then select the clip to insert via the Source -> Insert Layer menu and use the Normal apply mode.  In this workflow the VR Insert effect does the final composite between the overlays and background layers.  **Apply to Insert Workflow**– Alternatively you can apply VR Insert directly to the clip you wish to insert or to a solid/slug, select the insert clip via the Source -> Insert Layer menu (if necessary in that host), and then use the Replace apply mode which will generate just the remapped insert clip as an alpha track, thus relying on the host to the do the eventual final composite over the VR background.  In most situations these two approaches will produce the same result and either can be used depending on which is most convenient.  *However, note that it is important for the VR Insert filter to be applied to a clip with the same dimensions as the final equirectangular VR project.*  In Avid, Premiere, Vegas, and Resolve this happens automatically as long as the overall sequence settings match the equirectangular format.  In AE it also happens automatically when applying to native AE titles as long as the composition settings  match the equirectangular format.  However if the insert clip in AE has a different size than the final VR format (except for titles) then you should apply the Insert VR filter to a solid with eqr dimensions, a precomp, or directly to the backgound equirectangular clip and select the smaller insert clip via the Source layer menu.  Note if you want to stack multiple inserts onto the same scene then you will get the highest quality final result using the *Apply to Insert* workflow where you apply to the insert layer using the Replace apply mode and let the host composite each inserted layer independently as opposed to applying VR Insert multiple times to the background layer with the *Apply to Background* workflow since the repeated warping/unwarping of the background layer can cause slight softening.  Note that using the Insert Repeat option with the Replace apply mode in the *Apply to Insert*workflow can cause elements to overwrite each other due to the effects of the Replace apply mode if the inserted elements are large, and if encountered the Insert Repeat option may require use of the alternate *Apply to Background*workflow when available.  Additional host-specific workflow considerations are presented below.


 


#### Vegas Workflow


For Vegas users note that the simplest approach is the *Apply to Insert*workflow where you apply VR Insert directly to the front layer (title/logo) and let the host composite over the background VR track, but this option is available only in Continuum 11.0.3 or higher.  However, in Vegas you can also use the *Apply to Background*workflow of applying to the background layer if you use the Vegas custom composite mode version of the filter.  Generally the *Apply to Insert* workflow will be an easier workflow in Vegas, but it is only available in Continuum 11.0.3 or later, and note that when you do choose that option the Insert Layer menu and the Apply Mode menu will be grayed out since they are automatically set to the right values for this workflow in Vegas.


#### 


#### Resolve Workflow


For Resolve users the recommended workflow changed in Continuum 11.0.3 to simplify usage so the approach you take will be different based on the version of Continuum you are using.


**Resolve Continuum 11.0.1 or 11.0.2:**


In Continuum 11.0.1 and 11.0.2 only the *Apply to Background* workflow is availabe.  You apply VR Insert to the background VR layer in the Color tab.  Then you make the insert layer accessible by importing it as a matte layer.  See the general instructions on [Working with Secondary Layers in Resolve](https://borisfx.com/documentation/continuum/bcc-overview-in-resolve/) for details on the usual process for making an alternate layer available to an effect in Resolve.


**Resolve Continuum 11.0.3 and higher**


In Continuum 11.0.3 and higher the usage was simplified in Resolve to support the *Apply to Insert*workflow instead of the *Apply to Background* workflow.  This means you no longer need to deal with Resolve’s multi-step process for making secondary layers accessible to an effect since the *Apply to Insert* workflow uses the host’s native compositing to blend the layers.  You now apply VR Insert in the Color tab directly to the insert layer.   Since the effect now generates an alpha channel and relies on Resolve to do the composite you must take the usual steps to instruct Resolve to preserve the alpha channel output by the effect.  To do that you right click in the color pane and select “Add Alpha Output”, then connect the blue alpha output of the effect node to the main blue alpha output, and if necessary right click on the effect node and select “Use OFX Alpha”.  Note that if the Insert layer itself has alpha (such as a logo or title with alpha), you also need to add the layer to itself as a matte layer to force Resolve to preserve the alpha input channel.  Note that the Insert Layer menu and the Apply Mode menu will be grayed out in VR Insert since they are automatically set to the right values for this workflow in Resolve.


 


#### Supporting Alpha with VR Insert in Avid:


Due to the limited host support for alpha channels in Avid, special workflow considerations are required when inserting alpha content in Avid such as titles.


**Inserting clips with alpha in Avid – **Apply to Insert Workflow**:**


* Stack a native title matte or BCC Title Studio over a video background
* Filter the title matte with the VR Insert filter
* Enable the Apply to Title-Matte option (in the Title Matte group) if using a native title matte.  Or if using Title Studio then set the Background layer menu in Title Studio to None.
* Set Insert Layer to Filter Layer (in the Source group)
* Set Insert Apply Mode to Replace (in the Insert group)


**Inserting clips with alpha in Avid – Apply to Background Workflow:**


* Stack the video background on the track *above* the native title matte or BCC Title Studio
* Apply VR Insert to the video background layer
* Set Insert Layer to 1st Below (in the Source group)
* If using a native title on the lower track, apply BCC Brightness Contrast to that title (just to ensure that its alpha is preserved).  Set Apply to Title-Matte in the the Brightness Contrast filter and set Background layer to None.    If using Title Studio on the lower track you can skip adding the separate Brightness Contrast effect and just set the  Background layer to None in Title Studio to ensure that its alpha is preserved.


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


**Input Horizontal FOV :**Set the input source field of view**:**


* *360 degrees*
* *180 degrees*


**Insert Layer:**  Use this to select the secondary source that is being inserted into the filtered source.  In some OFX workflows (when applying directly to the Insert layer) this option is disabled in the UI because the correct layer is automatically chosen for you under the hood.


**Output Format:**Set the output format**:**


* *Left Eye*
* *Right Eye*
* *Stereo Top-Bottom*
* *Stereo Left-Right*
* Stereo Bottom-Top
* *Stereo**Right-Left*


 


**Insert Group**


Contains options for controlling position, scale, opacity, etc. of the clip that is being inserted into the filtered 360 VR shot.


**Insert Latitude**: Use this to control the position of the insert along the vertical axis.


**Insert Longitude**: Use this to control the position of the insert along the horizontal axis.


**Insert Distance**:  Use this to control the position of the insert along the Z axis.


**Insert X Orientation**: Use this to angle the insert along the X axis (spin).


**Insert Y Orientation**: Use this to angle the insert along the Y axis (tumble).


**Insert Z Orientation**: Use this to angle the insert along the Z axis (rotate).


**Insert Order**:  Controls whether the clip is inserted before or after the Reorient operations are applied, thus controlling whether the inserted clip maintains its current position in relation to the filtered source as you apply Reorientation.


* Before Reorient – The insert is composited before the Reorient so the insert is affected by Reorientatioin.
* After Reorient – The insert is composited after the Reorient so the insert does not move in response to Reorientation.


**Insert Scale**: Use to control the transform scale of the insert.


**Insert Opacity**: Use to control the opacity of the insert.


**Insert Convergence**: Only available when the Stereo Input Format is selected and is used to set the stereo convergence of the insert


**Insert Apply Mode**: Use to select whether the filter source is included in the render.  In some OFX workflows (when applying directly to the Insert layer) this option is disabled in the UI because the correct mode (Replace) is automatically chosen for you under the hood.  There are two options:


* *Normal* – will composite the selected insert over the filtered source.
* *Replace –* will render the selected insert without the filtered source.


**Insert Anti-aliasing**: Contains options for smoothing the edges of the insert.  Higher values will increase render times slightly.


* *None*
* *Good*
* *Best*


**Insert Repeat**: Use to automatically clone the insert along multiple sides of the cube map.


* Off
* Four Sides
* Front+Back
* All Sides


 


**Reorient Group**


Contains parameters for reorienting the source clip in 360 VR space.


**Enable Reorientation checkbox:**  This control offers a quick way to toggle between the orientation of the unfiltered original source clip and the reorientated source clip.


**Tilt (X axis):** Reorients the shot along the X axis


**Pan (Y axis):** Reorients the shot along the Y axis


**Roll (Z axis):** Reorients the shot along the Z axis


**View Mode:** Contains options for setting the current view mode of the filter.  Be sure to set the *View Mode* back to Full before rendering.  The options are:


* *Full* – displays the full reoriented source image in its original format
* *Preview* – displays the reoriented source image as if it were viewed through a headset
* *Left* – displays the left face of the reoriented source image as if it were viewed through a headset
* *Front* – displays the front face of the reoriented source image as if it were viewed through a headset
* *Right* – displays the right face of the reoriented source image as if it were viewed through a headset
* *Back* – displays the back face of the reoriented source image as if it were viewed through a headset
* *Top* – displays the top face of the reoriented source image as if it were viewed through a headset
* *Bottom* – displays the bottom face of the reoriented source image as if it were viewed through a headset


**Preview FOV** – Use this to set the field of view (FOV) for the preview mode. Useful when you want to pull back from the shot. This feature is only available when the View Mode is set to Preview.


**Preview Left-Righ**t – Use this to shift the view along the horizontal axis, side to side. This feature is only available when the View Mode is set to Preview.


**Preview Top-Bottom**  – Use this to shift the view along the vertical axis, up and down. This feature is only available when the View Mode is set to Preview.


 


**Overlays****Group**


Contains parameters for displaying guides that can assist in setting up the effect. Note that these options should be disabled before rendering the effect or they will be burned into the output.


**P.I.P. Mode**: When enabled, generates a convenient picture-in-picture effect, which displays the unfiltered source clip in its original format superimposed on top of the filtered result.


* *Off* – PIP is disabled. This is the default state.
* *Top-left –* Displays the PIP in the top-left quadrant of the viewer.
* *Top-Right* – Displays the PIP in the top-right quadrant of the viewer.
* *Bottom-left –* Displays the PIP in the bottom-left quadrant of the viewer.
* *Bottom-Right –* Displays the PIP in the bottom-right quadrant of the viewer.


**P.I.P Scale**: Use this to set the size of the PIP overlay.


**Overlay Guides**: When enabled, displays an outline of the 360 cube map onto which the source clip is mapped.


**Overlay Faces**: When enabled, overlays a different color for each face of the cube map.


**Overlay Text**: When enabled, overlays a text identifier for each face of the cube map.


**Overlay Opacity**: Use to control the opacity of the color overlay for each face of the cube map.


 


