{
"date": "2019-06-12",
"title": "BCC VR Flicker Fixer",
"category": "BCC VR",
"link": "bcc-vr-flicker-fixer/"
}

 [![BCC VR Flicker Fixer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2017/10/BCC-VR-Flicker-Fixer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2017/10/BCC-VR-Flicker-Fixer.jpg)


### *New in BCC11*


### **Overview**


BCC VR Flicker Fixer is a simplified version of the full BCC Flicker Fixer and is designed to reduce or eliminate flicker from live action 360 VR source footage.  The **Frame****Analysis**method is intended for use with clips with flicker that is uniform throughout the frame, or at least uniform within a contiguous block of the frame – e.g. flicker that is caused by unintended shutter speed or aperture variations from frame to frame. The two **Temporal****Smoothing**methods are intended for use with clips in which the flicker varies from pixel to pixel within the frame – e.g. a scene that is lit partly by natural light and partly by a flickering artificial light, however the Temporal options are most suitable for clips without fast moving objects.


The **Frame****Analysis**method analyzes the whole frame, and is not suitable for clips where the flicker is limited to a small part of each frame unless that part can be encompassed by a sampling mask rectangle. If most of the frame is flickering and a small part is not, the Frame Analysis method will generally remove most (but not all) of the flicker, but is likely to add flicker to the non‐flickering part of the clip.  Host masking controls may be used isolate the non‐flickering part of the clip and prevent this flicker from being added.


The **Temporal****Smoot****h****i****n****g**method processes each pixel independently. If part of the image is flickering and part is not, you can usually get good results by processing the whole clip as long as there is minimal motion in the clip. The filter will produce some softening (since it works by smoothing) in the non-­‐flickering part of the image, and you can use host masking controls to isolate this region and minimize the image softening.


We recommend rendering the filter in 16 bit or float, especially if the Temporal Smooth YCC method is used.


### 


### **Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Met****h****od****popup**This control sets the method used by the filter to remove flicker. There are three options:


* *Frame Analysis*analyzes the color range of each frame, and adjusts each pixel based on the difference between the RGB color range of the current frame and the average range of the surrounding frames. This generally works well if the flicker is uniform over the whole image.  The **Frame****Analysis**method always analyzes the whole frame, and is not suitable for clips where the flicker is limited to a small part of each frame. If most of the frame is flickering and a small part is not, the Frame Analysis method will generally remove most (but not all) of the flicker, but is likely to add flicker to the non‐flickering part of the clip.  You can use the **Limit****Sampling** controls to isolate the analysis phase to just a sub-portion of the image.  Furthermore, you can use the Mask and key controls to isolate non‐flickering part of the clip and prevent the average flicker correction from being added.
* *Temporal  Smooth  RGB*and *Temporal  Smooth  YCC*compute  a weighted average  of each pixel with the same pixel at surrounding  frames. The filter assess that the flicker is producing small frame-­‐to-­‐ frame changes in color, so pixels that are close in color to the pixel in the current frame get more weight than pixels that are further away in color. This causes small changes  caused by flicker to be averaged  out, while large changes  caused  by action are left alone. The averaging can be done in either RGB or YCC color space. RGB is faster, and the results are pretty similar, so we suggest you start with RGB. In some cases you may get better results in YCC, especially  if only the Y is flickering.  The **Temporal****Smoot****h****i****n****g**method processes each pixel independently. If part of the image is flickering and part is not, you can usually get good results by processing the whole clip. The filter will produce some softening (since it works by smoothing) in the non-­‐flickering part of the image, and you cause the Matte controls to isolate this region and prevent any image softening.


 


**Frame Analysis Group**


These controls are active when the Frame Analysis method is selected


**Time****Wi****n****dow:**This is the number of frames considered by the filter during flicker removal analysis. You may need to increase this for slow flicker, and may be able to save a little render time by reducing this for fast flicker. Increasing the value in this parameter increases render time.


**Time****Wi****n****dow****Cutoff:**This controls how far the analysis extends along the clip. Increasing the value in this parameter increases render time.


**Faster****Analysis:**You can achieve some speedup of the analysis by checking this control, and it usually has little discernible effect on the render quality.


**Smoothing:**Increase the value in this parameter if the image flicker is very rapid. Increasing the value in this parameter increases render time.


**R****eset****Ca****ch****e****butto****n****:**You can usually ignore this button, but you need to hit it whenever you make a change to the layer to which the filter is applied.


You **do****n****ot**need to hit this button if you slide the effect in the timeline, or change any filter applied after Flicker Fixer.


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


