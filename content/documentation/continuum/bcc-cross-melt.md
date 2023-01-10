{
"date": "2019-06-12",
"title": "BCC Cross Melt",
"category": "BCC Transitions",
"link": "bcc-cross-melt/"
}

 ### [![BCC Cross Melt](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Cross-Melt.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Cross-Melt.jpg)


*New in BCC10*


### Overview


The Cross Melt transition uses a combination of auto-animating displacement, blur, and lighting effects that post process an underlying dissolve to create a stylized melting or dream-like look as the transition progresses.


**Usage Notes:**


* In an auto-animating transition such as Cross Melt, many parameters allow you to set the value used at the mid-point of the transition while the values that are interpolated from and interpolated to (at the start and end of the transition) are predetermined to match the unaffected source image to insure a smooth beginning and end of the transition. For these parameters it is a good idea to adjust them while previewing a frame from the mid point or somewhere near the middle of the transition, and the standard way of using them would require not animating them with keyframes since they are already auto-animating. In the parameter list below, parameter names shaded green are such auto-animating parameters.
* This transition uses the content of the images to drive the displacement intensity so the results can vary significantly from one image to another. If the displacement results seem to intense or too mild, try adjusting the main Displacement parameter or the Displacement Smoothness control.


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


**Percent Done:**  Disabled/Hidden by default. When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


 


**Map Layer:**  This determines what image the Displacement is based on. It defaults to using the output of the underlying Dissolve between both images, but it is also possible to set it to use only the Source Layer or Reveal layer (outgoing or incoming shot)


*In the parameter list below, parameter names shaded green are auto-animating parameters. See the Usage Notes above for more details.*


**Displacement:**The amount of Displacement used with zero being no displacement.


**Light Intensity:**The amount of Light used. There are several more parameters for adjusting the light appearance available in the Light parameter group toward the bottom of the transition controls.


**Ambient Intensity:**Reducing the Ambient Intensity will reduce the brightness of the base image resulting in any Light effects appearing more pronounced.


**Brightness Boost:**Increases (positive values) or reduces (negative values) the Brightness of the transition effect.


**Contrast:**Increases (positive values) or reduces (negative values) the Contrast of the transition effect.


**Blur Direction:**Can be set to Horizontal or Vertical.


**Master Blur:**Adjusts the overall amount of Blur.


**Red Blur:**Blur affecting specifically the Red channel of the image.


**Green Blur:**Blur affecting specifically the Green channel of the image.


**Blue Blur:**Blur affecting specifically the Blue channel of the image.


 


**Displacement Group**


The Displacement Group parameters allow fine tuning the details of the displacement effect.


**Displacement Channel:**Sets which Channel of the Displacement Map image affects the Displacement.


**Smoothness:** Controls the Smoothness of the map used to drive the Displacement effect.


 


**Light Group**


The Light Group parameters allow fine tuning the look of the additional Lighting pass.


**Light On:**Toggles the effects of the Light On or Off.


**Light Type:**Choice of Distant or Point light.


**Elevation:**The Distance of the light from the image surface.


**Direction:**Applies to Distant Light type and determines the angle the light seems to come from.


**Light Start Position, Light End Position and Light Position Animation:**Applies to Point Light Type and allows for making it so that the Light Position auto-animates over the course of the effect without the need to set any keyframes.


**Light Color:**The Color of the Light.


**Diffuse:** Controls the intensity of the diffuse lighting.


S**pecular:**Controls the intensity of the specular highlights.


**Specular Spread:** Controls how widely spread the specular highlights appear.


**Metallic:** Controls how the color of the surface interacts with the color of the light source in specular highlights to create a more or less metallic looking reflection.


 


**Animation Tuning Group**


These parameters control the overall timing of the transition.  On hosts which permit on-screen heads up display widgets (such as AE, Premiere, and Avid), you should never need to modify these sliders directly since they can be configured in a more convenient and intuitive manner by manipulating the widgets directly in your comp/preview pane.  On hosts without heads up display widgets you can use these sliders directly to fine tune your animation timing, taking advantage of the View Ease Curve option to help visualize the animation rates.


**Ease In:**Controls how quickly or slowly the displacement and lighting increase at the beginning of the transition.


**Ease Mid:**Controls the rate of change of the displacement and lighting amounts (how quickly they reach their peak amount and how long they hold there) during the middle of the transition.


**Ease Out:** Controls how quickly or slowly the displacement and lighting decrease at the end of the transition.


**Blur Duration:** Controls the timing of the blur relative to the timing of the rest of the transition.


**Dissolve Duration:** Controls the timing of the underlying dissolve relative to the timing of the rest of the transition.


**View Ease Curve:**(Only visible/enabled in hosts that don’t support heads up display widgets for manipulating these controls directly on screen.) Enable this control to display a preview graph of the the animation curves rendered into in the composite window*.*


