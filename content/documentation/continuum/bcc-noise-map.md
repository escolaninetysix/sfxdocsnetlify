{
"date": "2019-06-12",
"title": "BCC Noise Map",
"category": "BCC Obsolete",
"link": "bcc-noise-map/"
}

 

|  |
| --- |
| [![noisemap](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/noisemap.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/noisemap.jpg) |
| Noise Map |


### *Deprecated – replaced by [BCC Noise Map 2](/documentation/continuum/bcc-noise-map-2)*


*We recommend use of [BCC Noise Map 2](/documentation/continuum/bcc-noise-map-2) instead of the older BCC Noise Map.  The newer [BCC Noise Map 2](/documentation/continuum/bcc-noise-map-2) offers a more sophisticated noise map generator along with many more presets.*


### Overview


Noise Map is a procedural noise generator that produces a continuously flowing gradient which can be used to provide organic input to other filters. Because the noise is continuous, there is never a seam.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


* Note: You can use Noise Map as a map in any filter that allows you to use luma information in a map layer. For example, you can apply the Noise Map filter to the clip to use as a map layer in any of the Displacement filters to create continuously flowing displacement effects (such as heat or water effects).The example below shows a heat effect created by applying Noise Map to the map layer used by the Displacement Map filter.




|  |  |
| --- | --- |
| [![glow.orginal](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glow.orginal.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glow.orginal.jpg) | [![noisemap.heat](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/noisemap.heat_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/noisemap.heat_.jpg) |
| Source image | Displacement Map with Noise Map |


**Flow Direction** sets the direction of motion of the noise pattern.


**Flow Speed** controls the speed of motion of the noise pattern as it auto-animates.


The **Noise Type menu** sets the general appearance of the noise pattern. The three different Noise Types, *Smooth, Bubbly* and *Stringy*, include some inherent shape and size differences. You can compensate for these differences by adjusting the Scale, Morph Rate, and Turbulence settings slightly when changing Noise Types.




|  |  |  |
| --- | --- | --- |
| [![noisemap.smooth](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/noisemap.smooth.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/noisemap.smooth.jpg) | [![noisemap.bubbly](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/noisemap.bubbly.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/noisemap.bubbly.jpg) | [![noisemap.stringy](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/noisemap.stringy.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/noisemap.stringy.jpg) |
| Smooth |  Bubbly | Stringy |


**Scale X** and **Scale Y** determine the horizontal and vertical scale of the noise pattern. Choose Lock to Scale X checkbox to lock the Scale Y value to the Scale X value, or deselect this option to adjust each parameter independently.


**Morph** **Rate** determines the rate at which the noise pattern surges and rotates inward as the filter auto-animates.


**Turbulence** **Level** controls the texture of the noise map. Increasing Turbulence Level creates a rougher noise pattern and increases rendering and preview time proportionately.


