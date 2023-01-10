{
"date": "2019-06-12",
"title": "BCC Curl",
"category": "BCC Warp",
"link": "bcc-curl/"
}

 
![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/10/BCC-Curl-1024x575.jpg)
### Overview


The BCC Curl filter simulates curled distortions in the source footage. This filter automatically creates animated curls and allows you to choose from a range of distortions. 


### **Parameter Controls**


#### **Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings. For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).


#### **Main Controls**


**Complexity:** controls the number of distortions in the effect. Higher values will produce more complex curl distortions in the scene.


**Distortion Amplitude:** controls the amplitude of the curl effects. Higher values will result in tighter curls, while lower values will result in smoother curls.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/09/Curl2.png)Distortion Amplitude set to 60
![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/09/Curl3.png)Distortion Amplitude set to 2000: 
**Curl Size:** adjusts the overall size of the curls. Higher values will produce larger curls.


**Direction:** adjusts the angle of movement of the curl distortions in the scene.


**Direction Spread:** adjusts the distance between curls along the angle of direction.


**Speed:** adjusts the speed at which the curl distortions move through the scene. Higher values will result in faster movement, while lower values will create more subtle distortions.


**Random Seed:** adjust the randomness of the distortion movement.


**Advanced Sampling:** provides additional render passes to smooth and anti-alias the effect. Enabling this may increase render times.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/09/curl4-1024x557.png)With **Advanced Sampling** *disabled*, noise and other artifacts can be seen in highly complex effects.  

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/09/curl5-1024x555.png)*Enabling* **Advanced Sampling** will produce smoother results, but may increase render times.
**Mix with Original:**Used to blend the filter effect back with the unfiltered input image.


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).*te that when Avoid Clipping is enabled the Pixel Chooser is unavailable in Film Glow.*


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 