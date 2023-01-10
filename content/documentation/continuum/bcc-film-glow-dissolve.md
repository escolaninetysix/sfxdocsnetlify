{
"date": "2019-06-12",
"title": "BCC Film Glow Dissolve",
"category": "BCC Obsolete",
"link": "bcc-film-glow-dissolve/"
}

 ### *Deprecated – replaced by [BCC Fast Film Glow Dissolve](/documentation/continuum/bcc-fast-film-glow-dissolve)*


*We recommend use of [BCC Fast Film Glow Dissolve](/documentation/continuum/bcc-fast-film-glow-dissolve) instead of BCC Film Glow Dissolve in BCC10 and higher.  The newer BCC Fast Film Glow Dissolve is fully GPU accelerated using OpenCL and provides the same feature set but with much faster rendering.*


### Overview


The Film Glow Dissolve filter creates a glow animation that automatically animates as your transition progresses to obscure the dissolve between clips.


[![BCC_FilmGlow_Dissolve](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/01/BCC_FilmGlow_Dissolve.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/01/BCC_FilmGlow_Dissolve.jpg)


### 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Layer to Reveal**: This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Percent Done* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


**Glow****Intensity:**Use to control the intensity of the glow result. Higher values yield a stronger glow with a total white image when this parameter is set to it’s highest value.


**Glow****Color:**Used to set the color of the glow. Default is white.


**Glow****Radius:**  Used to set the radius over which the glow spreads to surrounding regions.


**X****Radius****:**Independent control for the width radius of the glow.


**Y****Radius:**Independent control for the height radius of the glow.


**Glow****Threshold:**Used to set the pixel values that are affected by the glow – a setting of 0 will apply a glow to all of the pixels in the input clip, while a setting of 100 will not apply any glow to the image.


**Threshold Mid Offset:**Use to automatically modify the threshold setting towards the middle of the transition without having to set any keyframes.  At beginning/end of the transition the Mid Offset has no effect but as the transition nears it’s mid point the effect of the Mid Offset increases until at the midpoint the full Mid Offset amount is added to the Glow Threshold setting.


**Glow Desaturation:**  This function alters the glow result by adjusting the chroma values that are used for the input. At 0 the function has no effect on the result generating a traditional film glow, increasing the value in this parameter yields a result that looks colder and less saturated.


 


**RGB****Independent****Group**


**RGB****Independent****Glows:**This checkbox enables independent scaling of the glow dimensions for R, G, and B.


**Re****d****S****c****al****e****:**Scales red glow uniformly.


**Re****d****S****c****ale****X****:**Scales red glow along horizontal axis.


**Re****d****S****c****ale****Y:**Scales red glow along horizontal axis.


**Gr****ee****n****S****c****al****e****:**Scales green glow uniformly.


**Gr****ee****n****S****c****ale****X****:**Scales green glow along horizontal axis.


**Gr****ee****n****S****c****ale****Y:**Scales green glow along horizontal axis.


**Blue****S****c****al****e****:**Scales blue glow uniformly.


**Blue****S****c****ale****X****:**Scales blue glow along horizontal axis.


**Blue****S****c****ale****Y:**Scales blue glow along horizontal axis.


 


**Color Group**


Controls for color enhancements that auto-animate along with the transition – for example, boosting (or reducing) the Brightness or Contrast during the peak of the transition to maintain greater contrast, boost intensity, or create stylized variations of the basic dissolve.


**Brightness Peak:** Defines the maximum change to the Brightness at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


**Contrast Peak:** Defines the maximum change to the Contrast at the midpoint of the transition.  Auto-animates so that it has no effect at the beginning or end of the transition and peaks in intensity at the middle.


 


**Extras Group**


**Apply Glow To:**Determines how the glow is applied to the source and reveal layers.


* *Dissolve –* dissolve the two layers first and apply the glow to the output of the dissolve
* *Source Layer –* apply the glow prior to the dissolve, but only to the source layer
* *Reveal Layer*–** apply the glow prior to the dissolve, but only to the reveal layer
* *Source and Reveal*–** apply the glow to both the source and reveal layers separately prior to dissolving between them
* *Off –* disable the glow completely and just show the result of the basic dissolve


**A Intensity:** Scale the intensity for the Source Layer.


**A Radius:**Scale the radius for the Source Layer.


**A Threshold Offset:**Scale the threshold offset for the Source Layer.


**B Intensity:**Scale the intensity for the Reveal Layer.


**B Radius:**Scale the radius for the Reveal Layer.


**B Threshold Offset:**Scale the threshold offset for the Reveal Layer.


**Threshold Color:** Controls the color threshold of the glow dissolve.


**Glow Apply Mode:**Used to blend between the selected Glow apply mode and the normal apply mode.


**Apply Mix:**Used to blend between the selected apply mode and the normal apply mode.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid) you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Glow Ease In:**Control how quickly or slowly the glow amount increases at the beginning of the transition.


****Glow**Ease Mid:**Control the rate of change of the glow amount (how quickly it reaches its peak amount and how long it holds there) during the middle of the transition.


****Glow**Ease Out:**  Control how quickly or slowly the glow amount decreases at the end of the transition.


**Dissolve Duration:**  Control the timing of the underlying dissolve relative to the timing of the rest of the transition.


**View Ease Curve:** (Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.)  Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


