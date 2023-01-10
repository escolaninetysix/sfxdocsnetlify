{
"date": "2019-06-12",
"title": "BCC Film Glow",
"category": "BCC Obsolete",
"link": "bcc-film-glow/"
}

 [![Film Glow](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Film-Glow.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Film-Glow.jpg)


### *Deprecated – replaced by [BCC Fast Film Glow](/documentation/continuum/bcc-fast-film-glow)*


*We recommend use of [BCC Fast Film Glow](/documentation/continuum/bcc-fast-film-glow) instead of BCC Film Glow in BCC10 and higher.  The newer BCC Fast Film Glow is fully GPU accelerated using OpenCL and provides the same feature set but with much faster rendering.*


### Overview


The BCC Film Glow filter generates a traditional film glow look, where the frame is subjected to a strong light source causing the image to bloom.  A common use of the glow filter is to make the whites in an image appear to glow and the filter will do this at its default settings.  To generate that flash to white glow, you need only animate the Glow Intensity parameter from 0 to the maximum desired value.  The Glow Threshold control is very useful in adjusting which regions or the image will contribute to the glow based on the brightness ranges found in a particular source clip.  Setting the Threshold Color value to anything other than white will prevent pixels of the same color value from contributing to the glow.  Toggling between box and triangle blur types allows for interesting stylized variations on the glow look.


 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Avo****id****Cl****i****pp****i****n****g**: (Available on in After Effects and Premiere.)  This feature enables the glow to expand beyond the edges of the filtered image, thereby generating an even glow out past the edges of the image.  Disabling the feature clips the glow with a soft falloff toward the edge of the filtered image.  Note that when Avoid Clipping is enabled, the Pixel Chooser is not available.


**Vi****e****w****:**This four way pop-up is useful when setting up the filter:


* *Output* This is the main result of the full  glow effect applied back over the input clip
* *Glow* Displays just the generated glow prior to being applied back to the input clip via the apply modes.
* *Threshold* Displays the intermediate result of the threshold setting
* *Threshold w Boost + Desat* Displays the intermediate result of the Threshold with Boost and Glow Desaturation applied


**Glow****Intensity:**Use to control the intensity of the glow result. Higher values yield a stronger glow with a total white image when this parameter is set to it’s highest value.


**Glow****Color:**Used to set the color of the glow. Default is white.


**Glow****Radius:** Use to set the radius over which the glow spreads to surrounding regions.


**X****Widt****h****:**Independent control for the width of the glow.


**Y****Widt****h****:**Independent control for the height of the glow.


****Glow Desaturation**:**This function alters the glow result by adjusting the chroma values that are used for the input. At 0 the function has no effect on the result generating a traditional film glow, increasing the value in this parameter yields a result that looks colder and less saturated.


**Glow****Threshold:**Used to set the pixel values that are affected by the glow – a setting of 0 will apply a glow to all of the pixels in the input clip, while a setting of 100 will not apply any glow to the image


**Threshold****Color:**The RGB values of this color are added to the threshold slider value to make an independent threshold for each channel. (e.g. if this is set to pure blue, the blue channel is not glowed, regardless of the channel values or the threshold slider setting.)


**Matte****Layer****:**If a matte layer is selected, the alpha premultiplied RGB values of this layer are used as a matte, applied to the RGB Glow (before the blur) independently for each channel E.g. if a pixel in the matte layer is pure blue, the corresponding source pixel will only contribute to the blue channel before the glow is applied.


**Matte****Type****:**This pop-­up offers 6 channel options for the matte input:


* *Color* – matte is based on the color values of the matte input
* *Color Inverted* – inverted matte, based on the color values of the matte input
* *Luma* ‐  matte is based on the luma values of the matte input
* *Luma Inverted* – inverted matte, based on the color values ov the luma input Alpha – matte is based on the alpha values of the matte input
* *Alpha Inverted* – inverted matte, based on the alpha values in the matte input


**Blur****T****y****pe****po****p****-­up:**This two way pop-­‐up offers the option of using a Box or a Triangle blur for the glow effect.


**Triangle****Blur****Iterations:**Use to set the number of times the triangle blur is applied to the glow. Higher values will generate a smoother glow but will increase render times.


 


**RGB****Independent****Group**


**RGB****Independent****Glows****:**This checkbox enables independent scaling of the glow dimensions for R, G, and B.


**Re****d****S****c****al****e****:**Scales red glow uniformly.


**Re****d****S****c****ale** **X****:**Scales red glow along horizontal axis.


**Re****d****S****c****ale****Y:**Scales red glow along horizontal axis.


**Gr****ee****n****S****c****al****e****:**Scales green glow uniformly.


**Gr****ee****n****S****c****ale** **X****:**Scales green glow along horizontal axis.


**Gr****ee****n****S****c****ale****Y:**Scales green glow along horizontal axis.


**Blue****S****c****al****e****:**Scales blue glow uniformly.


**Blue****S****c****ale** **X****:**Scales blue glow along horizontal axis.


**Blue****S****c****ale****Y:**Scales blue glow along horizontal axis.


 


**Glow****From****A****lp****h****a:**The Glow From Alpha option generates the image glow from the alpha channel instead of or in addition to the color channels. The selection in the Glow From Alpha Mode determines how the alpha glow and the color channel glows are combined.


**Glow****A****lp****h****a****Mode****:**This pop-­‐up is used to select how the alpha glow and  the color channel glows are combined. If it is set to Blend (the default) increasing glow from alpha decreases the impact of the RGB channels on the glow. If it is set the Add, the glow from each color channel is added to the alpha glow.


**Glow****Boost****Alpha:**Controls how much the spread of glow pixels caused by the blur boosts the alpha channel of non-­‐opaque pixels.


**Glow****U****n****d****e****r****Sour****ce****:**Allows you to animate between compositing the glow over the source (default setting), under the source (setting of 0) or anything in-­‐between.


**Sour****c****e****Opa****c****ity:**The opacity of the source image that is composited with the glow. At a setting of zero only the glow is rendered.


**Appl****y****Mod****e****:**This pop-­‐up is used to set the apply mode that the filter uses to composite the glow over the input image. The default apply mode is “Screen” and there are 27 different apply modes to select from.


**Appl****y****M****ix:**Use to blend between a normal apply mode and the user selected apply mode.


**Mix****with****Original:**Used to blend the filter effect back with the unfiltered input image.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

*Note that when Avoid Clipping is enabled the Pixel Chooser is unavailable in Film Glow.*


 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 