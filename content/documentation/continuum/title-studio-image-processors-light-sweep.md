{
"date": "2019-06-12",
"title": "Title Studio- Image Processors - Light Sweep",
"category": "Tutorial",
"link": "title-studio-image-processors-light-sweep/"
}

 Light Sweep Shaders


In this section we will cover the Light Sweep IP Shader available in Title Studio with Continuum 2019. Light Sweep creates an auto-animating beam of light that sweeps across the image. Additional atmospheric customization can help create a smoky or foggy appearance. There are two styles of Light Sweeps which can be selected from the Type menu:


* Light Sweep is a standard solid light sweep.
* Light Sweep Noisy adds a foggy appearance to the light sweep which may be animated.


[![LS1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/LS1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/LS1.jpg)


Both variations share a core set of parameters, which will be described in the Light Sweep category. Light Sweep Noisy specific parameters will be detailed in it’s specific section.


#### Light Sweep & Light Sweep Noisy


**Apply Mode** sets the composite mode of the light sweep. Available modes include Add, Screen, Multiply and Overlay. Different composite modes will produce different effects.


**Position Move Type** allows you to specify Maunal or Automatic.


* **Manual** allows for the manualkeyframing of the light sweep by using the **Center X** & **Center Y** parameters, or the on screen widget.
* **Automatic** auto animates the light sweep across the object. When Automatic is selected **Center X** & **Center Y** are not available.


**Pos. Direction** allows for the position angle to be set during a*utomatic mode only*.


**Color** allows the user to set the color of the light sweep either by using the color chip or the eyedropper.


**Ignore Alpha**, when enabled, ignores the alpha regions of the object and extends the light sweep across the entire composite window. This is useful to help you to easily see the location of the light sweep, or to use it as, for example a lower third background.


**Angle** allows for the angle to be set *during manual mode only*.


**Intensity** controls the overall brightness and intensity of the light sweep. Higher values will result in a more intense light light sweep.


**Light Width** controls the width of the light sweep. You can use this to adjust the width to fit text or other objects. Higher values will produce wider beams of light.


**Glow Amount** controls the softness of the light beam by bluring the glow around the edge of the beam. Higher values will produce softer beams that more naturally blend into the object.


**Ambient Light** controls the ambient light that is reflected onto the object from the glow.


**Mix With Original** mixes the light sweep effect with the orginal object.


 


#### Light Sweep Noisy


As mentioned earlier, Light Sweep Noisy shares all the same parameters and functions with the standard Light Sweep. Type specific parameters unique to Light Swwwp Noisy are:


**Noise Scale X** adjusts the scale of the fog pattern along the x axis.


**Noise Scale Y** adusts the scale of the  fog pattern along the y axis.


**Noise Offset X** moves the fog pattern along the x axis.


**Noise Offset Y** moves the fog pattern along the y axis.


**Animation Speed** sets the speed at which the fog evolves. Lower values will result in slower speeds, while higher values will result in faster animation.


**Noise Intensity** sets the intensity of the noise pattern. Higher values will produce a more detailed noise pattern, while lower values will produce a more subtle texturing.


 


#### The Smoke Tab


In addition to the Material Attributes outlined above, the **Smoke Tab** allows users to customize the fog effect that makes up Light Sweep Noisy.


[![smoketab](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/smoketab.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/smoketab.png)


**Intensity** increases or decreases the intensity of the smoke visible in the scene. Higher values will produce more intense smoke effects, while lower values will produce more subtle effects.


**Rate** controls the speed of the smoke’s evolution. Higher values will produce faster moving smoke, while a value of zero will produce no movement in the smoke.


**Rotate** changes the angle of the fog.


**Scale** changes the scale of the fog pattern, with smaller values producing more detailed smoke effects.


**Random Seed** introduces random patterns to the fog effect.


**Color** allows you to use the color chip or eyedropper to set the color of the smoke. This does not change the color of the light source, only the smoke itself.


**Mix Color With Original** blends the smoke with the original effect.


