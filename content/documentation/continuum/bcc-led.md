{
"date": "2019-06-12",
"title": "BCC LED",
"category": "BCC Stylize",
"link": "bcc-led/"
}

 

|  |
| --- |
| [![LED](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/LED.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/LED.jpg) |


### Overview


The BCC LED filter was designed to make an image, clip or text element with alpha appear as though it was constructed out of an array of blinking or solid LED lights similar to the display boards that we see in todays sports stadiums. By default, the lights take their color from the clip to which it was applied and can be set to either square or round diodes or “bulbs”. Alternately the filter can apply a tint of color over the media element to which it was applied. This filter is a part of the new OGL category of filters in BCC which benefit from hardware acceleration as all of the processing is done by the GPU of the graphics card instead of the CPU, which greatly improves performance while working with these filters within the host system and significantly reduces render times.


### Function


Start by importing a clip into the host project window and then drag this down into the timeline. Create a new text layer above the clip, use the font Arial Black at a size of 200 points. Set the text color to white. So now that we have the media elements in place, let’s move on and start to have some fun with the LED filter.


Disable the view of the text for the time being as we are only interested in the background element for this section of the exercise. Apply the BCC LED filter to the background shot. We’ll set the LED Size parameter to 4 and the LED Gap parameter to 2. Click on the LED Shape pop-up and select Square. Set the Flickering Speed to 40 and the Flickering Amount to 8. Preview the result (Preview To RAM usually works best) and we can see that the background now appears to resemble a blinking array of LED lights.


Disable the background view and enable the view of the text. Now add the LED filter to the text element. Set the Light Size parameter to a value of  

6. Set the LED Shape to Circle. Set the Flickering Speed to 20 and the Flickering Amount to 25. Preview the result via PTR. Now we add the BCC Rays Radiant Edges filter to the text after the LED filter. Position the Light Source in the center of the text, over one of the bulbs. Enable the Light over Edges function. Set the Intensity to 180 and change the Ray Style from Detailed to Fat. Preview the result via PTR. With the CTI at frame 0, set the Intensity to 175 and set the Ray Length to 25. Then move to frame 3 and set the Intensity to 225. Then go to the end of the effect and set the Intensity to 175. Now let’s preview the final result via the preview to RAM function.


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Lock to Scale X**: Maintains proportional scaling of the light size LED Size X – determines the bulb size along the horizontal axis.


**LED Size Y**: Determines the bulb size along the vertical axis – only takes effect if Lock to Scale X is disabled.


**Lock to Gap X**: Maintains proportional scaling of the gap between each light.


**Gap Size X**: Determines the gap size. Larger value generates a wider gap.


**Gap Size Y**: Determines the gap size along the vertical axis – only takes effect if Lock to Gap X is disabled.


**LED Shape**: Pop up options are round or square.


**Tint**: Enable checkbox to colorize effect target layer.


**Color**: Sets color used by colorize parameter.


**Flickering Speed**: Speed by which the bulbs appear to flicker on and off.


**Flickering Amount**: Amount by which the bulbs appear to flicker.


**Grow Alpha**: Spreads the effect out over the alpha bounds.


**Glow Size**: Controls the size of the glow that appears behind the lights over the gap area.


**Glow Brightness**: Controls the brightness of the Glow effect.


**Brightness**: Overall brightness of the bulbs.


**Mix With Original**: Blends the effect back with the original unfiltered clip.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 