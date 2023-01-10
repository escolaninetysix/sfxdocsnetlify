{
"date": "2019-06-12",
"title": "BCC Edge Grunge",
"category": "BCC Stylize",
"link": "bcc-edge-grunge/"
}

 [![BCC_EdgeGrungeDoc](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/03/BCC_EdgeGrungeDoc.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2014/03/BCC_EdgeGrungeDoc.jpg)


**Overview**


Use this filter to generate stylized titles that glow, burn and disappear over time.  At default settings it is designed to be applied to titles or other moderately sized alpha objects.  When applied to large alpha objects or non-alpha video it can produce overly blown out levels by default.  This can be moderated by disabling the glow group to permit adding erosion to just the edges of the these larger objects.  The primary use of this filter is with text and other alpha objects.


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


 


**Burn Width:**Controls the width of the edge erosion. Larger values tend to erode farther into the alpha boundaries.


**Conform Alpha:**Controls how the eroded alpha channel is modified by the original input alpha.  When enabled, this prevents the alpha regions from growing or “leaking” beyond the original sources alpha boundaries.  When Texture Amounts are high (which they are by default), this control should remain on to avoid spurious texture elements from appearing in regions away from the alpha object.  With lower Texture Amount settings this control allows edges to grows outside their original hard boundaries to produce looser, more organic looking shapes.


**Disappearing Edge:**When Conform Alpha is enabled, this option determines whether or not the original alpha shape is allowed to erode versus maintaining the original alpha channel with only the RGB pixels modified by the grunge portion of the effect.


**Fade Width:**  Controls the rate of opacity fading near the edges of the burn pattern.  Larger Fade Widths soften the burn pattern edges which can produce smoother results when animating the Burn Progression.


**Color 1:**  Specifies the color band closest to the outer edge of the burn pattern (i.e. farthest from the interior of the alpha object).


**Color 2:**  Specifies the color band second from the outer edge of the burn pattern (i.e. second farthest from the interior of the alpha object).


**Color 3:**  Specifies the color band third from the outer edge of the burn pattern (i.e. second closest to the interior of the alpha object).


**Color 4:**  Specifies the color band fourth from the outer edge of the burn pattern (i.e. closest to the interior of the alpha object).


**Color Blend:**  Specifies how smoothly one color band blends with the next.


**Burn Progression:**  Specifies how far the burnt edge progresses toward or away from the layer edge.  A maximum burn progress of 100 will erode the alpha object until it is completely gone.


**Texture Amount:**  Specifies the amplitude of the texture to be added to the erosion pattern.  Larger Texture Amounts spread the grunge erosion across more of the alpha object.


**Texture Grain Size:**  Specifies the size of the grain texture.


**Burn Intensity:**  Specifies the strength and intensity of the generated burn colors as they replace the original image colors.


**Layer Border Options:**  Controls how regions outside the image edge are treated when computing the erosion shape.


* *Repeat:*  Edge pixels are repeated indefinitely
* *Mirror:*  Image content is mirrored at the edge
* *Transparent:*  All regions outside the image are assumed to be fully transparent
* *Opaque:*  All regions outside the image are assumed to be fully opaque.


**Add Original:**  Specifies the extent to which the original image colors are added to the generated burns colors when the Burn Intensity is less then full.  Low values leave just the generated burn pattern present even if the burn intensity is low.


 


**Glow Group**


Controls the properties of the glow applied to eroded text.


**Avo****id****Cl****i****pp****i****n****g****checkbox**: This feature enables the glow to expand beyond the edges of the filtered image.  This generates an even glow past the edges of the image. Enabling the feature clips the glow with a soft falloff toward the edge of the filtered image.


**Vi****e****w****:**This four way pop-up is useful when setting up the filter:


* *Output:* This is the main result of the full  glow effect applied back over the input clip
* *Glow:* Displays just the generated glow prior to being applied back to the input clip via the apply modes.
* *Threshold:* Displays the intermediate result of the threshold setting
* *Threshold w Boost + Desat:* Displays the intermediate result of the Threshold with Boost and Glow Desaturation applied


**Glow****Intensity:**Use to control the intensity of the glow result. Higher values yield a stronger glow with a total white image when this parameter is set to it’s highest value.


**Glow****Color:**Use to set the color of the glow. Default is white.


**Glow****Radius:** Use to set the radius over which the glow spreads to surrounding regions.


**X****Widt****h****:**Independent control for the width of the glow.


**Y****Widt****h****:**Independent control for the height of the glow.


****Glow Desaturation**:**This function alters the glow result by adjusting the chroma values that are used for the input. At 0 the function has no effect on the result generating a traditional film glow, increasing the value in this parameter yields a result that looks colder and less saturated.


**Glow****Threshold:**Used to set the pixel values that are affected by the glow – a setting of 0 will apply a glow to all of the pixels in the input clip, while a setting of 100 will not apply any glow to the image.


**Threshold****Color:**The RGB values of this color are added to the threshold slider value to make an independent threshold for each channel. (e.g. if this is set to pure blue, the blue channel is not glowed, regardless of the channel values or the threshold slider setting.)


**Matte****Layer****:**If a matte layer is selected, the alpha premultiplied RGB values of this layer are used as a matte, applied to the RGB Glow (before the blur) independently for each channel E.g. if a pixel in the matte layer is pure blue, the corresponding source pixel will only contribute to the blue channel before the glow is applied.


**Matte****Type****:**This pop-­up offers 6 channel options for the matte input:


* *Color*: matte is based on the color values of the matte input
* *Color Inverted*: inverted matte, based on the color values of the matte input
* *Luma*: matte is based on the luma values of the matte input
* *Luma Inverted*: inverted matte, based on the color values ov the luma input Alpha – matte is based on the alpha values of the matte input
* *Alpha Inverted*: inverted matte, based on the alpha values in the matte input


**Blur****T****y****pe****po****p****-­up:**This two way pop-up lets you use a Box or a Triangle blur for the glow effect.


**Triangle****Blur****Iterations:**Use to set the number of times the triangle blur is applied to the glow. Higher values will generate a smoother glow but will increase render time.


**Mirror Edge:** Controls the type of edge treatment used in the blurring passes.  This function determines whether the image will to repeat or reflect at the edges.


**Glow****From****A****lp****h****a:**The Glow From Alpha option generates the image glow from the alpha channel instead of or in addition to the color channels. The selection in the Glow From Alpha Mode determines how the Alpha Glow and the Color Channel Glows are combined.


**Glow****A****lp****h****a****Mode****:**This pop-­‐up is used to select how the alpha glow and  the color channel glows are combined. If it is set to Blend (the default) increasing glow from alpha decreases the impact of the RGB channels on the glow. If it is set the Add, the glow from each color channel is added to the alpha glow.


**Glow****Boost****Alpha:**Controls how much the spread of glow pixels caused by the blur boosts the alpha channel of non-opaque pixels.


**Glow****U****n****d****e****r****Sour****ce****:**Allows you to animate between compositing the glow over the source (default setting), under the source (setting of 0) or anywhere inbetween.


**Sour****c****e****Opa****c****ity:**The opacity of the source image that is composited with the glow. At a setting of zero only the glow is rendered.


**Appl****y****Mod****e****:**This pop-up sets the apply mode that the filter uses to composite the glow over the input image. The default apply mode is “Screen” and there are 27 different apply modes to select from.


**Appl****y****M****ix:**Use to blend between a normal apply mode and the user selected apply mode.


**RGB****Independent****Glows****:**This checkbox enables independent scaling of the glow dimensions for R, G, and B.


 


**RGB****Independent****Group**


**Re****d****S****c****al****e****:**Scales red glow uniformly.


**Re****d****S****c****ale****X****:**Scales red glow along horizontal axis.


**Re****d****S****c****ale****Y:**Scales red glow along horizontal axis.


**Gr****ee****n****S****c****al****e****:**Scales green glow uniformly.


**Gr****ee****n****S****c****ale****X****:**Scales green glow along horizontal axis.


**Gr****ee****n****S****c****ale****Y:**Scales green glow along horizontal axis.


**Blue****S****c****al****e****:**Scales blue glow uniformly.


**Blue****S****c****ale****X****:**Scales blue glow along horizontal axis.


**Blue****S****c****ale****Y:**Scales blue glow along horizontal axis.


**Mix****with****Original:**Used to blend the filter effect back with the unfiltered input image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 