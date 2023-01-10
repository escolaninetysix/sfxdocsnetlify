{
"date": "2019-06-12",
"title": "BCC Misalignment",
"category": "BCC Stylize",
"link": "bcc-misalignment/"
}

 

|  |  |
| --- | --- |
| [![MisalignmentOFF](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MisalignmentOFF.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MisalignmentOFF.jpg) | [![MisalignmentON](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MisalignmentON.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MisalignmentON.jpg) |
| Unfiltered Image | Filtered Image |


### Overview


The Misalignment filter simulates the effect of misaligned RGB color channels.


### Function


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


 


**Red Offset, Green Offset and Blue Offset Parameter Groups**


The **Red Offset, Green Offset** and **Blue Offset** position controls offset the corresponding color channel on the X and Y axis.


The **Red Intensity, Green Intensity** and **Blue Intensity** determine the intensity of the corresponding color channel, expressed as a percentage. At the default values of 0, all channels are given equal weight.


The **Alpha menu** determines how the filter handles alpha channel information.


* When *Single* *Channel* is chosen, each color image is assigned 1/3 of the original alpha value. If the image does not include an alpha channel, a value of 255 is assumed. So, if the red, green and blue channels overlap on a pixel, then the alpha value for that pixel is the original alpha (1/3 + 1/3 + 1/3). If the red and green channels overlap, then the value is 2/3 of the original alpha (1/3 + 1/3).
* *Composite* uses the maximum alpha value among the three channels.


The **Apply Mode menu** controls how the filtered image is composited with the source image.  For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** controls the mix of the specified Apply Mode with the *Normal* apply mode. If the Apply Mode is Normal, Apply Mix has no affect and the parameter does not appear. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 