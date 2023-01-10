{
"date": "2019-06-12",
"title": "BCC Stars",
"category": "BCC Textures",
"link": "bcc-stars/"
}

 [![starsEX](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/starsEX.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/starsEX.jpg)


### Overview


Stars is an auto-animated star generator which can composite stars over a sky color or an image layer. This filter provides control over the size, density, movement and color of the stars, and allows you to add galaxies. Stars can also use the alpha channel in any other layer as a map layer, allowing you to create skies in which stars fill a pre-composed image or logo.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


Selecting the **Multiple Layer checkbox** composites three layers of stars over one another. The star layers move at different speeds to create a sense of depth.


**Pattern** sets the position of the star map on the X and Y axis. Adjusting this parameter changes the random configuration of the stars.


The **Move Type menu** determines how the stars move.


* *Side* moves the stars in the direction set by the Direction control.
* *Forward* moves the stars forward, approaching the viewer. Forward is only functional when Multiple Layer is selected.
* *Backward* moves the stars backward, away from the viewer. Backward is only functional when Multiple Layer is selected.


**Speed** sets the speed of the stars at which the stars move. Setting Speed to 0 creates a stationary effect. Increasing the Speed value makes the stars move more quickly.


**Direction** controls the stars’ direction of movement when Move Type is set to Side. The Direction setting represents the angle between the stars’ direction of motion and the vertical axis. Therefore, at a Direction value of 0, the stars move upward. At a Direction value of 90, the stars move to the right.


**Density** sets the density of the stars without affecting their size. Decreasing Density spaces the stars farther apart, whereas increasing Density packs stars closer together.




|  |  |
| --- | --- |
| [![stars.density35](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.density35.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.density35.jpg) | [![stars.density75](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.density75.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.density75.jpg) |
| Density=35 | Density=75 |


**Maximum Size** sets the maximum star size in the layer, and **Minimum Size** sets the minimum star size in the layer. The stars’ sizes fall in the range set by the Minimum Size and Maximum Size values. Therefore, creating a large discrepancy between the Minimum and Maximum Size values produces a wide range of star sizes. Setting the Minimum and Maximum Size values closer together produces more uniform star sizes.


**Twinkle** determines the degree to which stars flicker off and on as they move. Increasing the Twinkle value causes the stars to flicker more, whereas decreasing Twinkle causes the stars to flicker less.


The **Lock to Scale X checkbox** locks the Scale Y value to the Scale X value in order to preserve the aspect ratio of the star pattern. Deselect this option if you want to adjust the Scale X and Scale Y values independently.


**Scale X** sets the horizontal scale of the star pattern. Increase Scale X to stretch the stars horizontally.




|  |  |
| --- | --- |
| [![stars.default](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.default.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.default.jpg) | [![stars.scalex.3000](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.scalex.3000.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.scalex.3000.jpg) |
| Scale X=50 | Scale X=3000 |


**Scale Y** sets the vertical scale of the star pattern. Increase Scale Y to stretch the stars vertically.




|  |  |
| --- | --- |
| [![stars.default](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.default.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.default.jpg) | [![stars.scaley.3000](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.scaley.3000.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.scaley.3000.jpg) |
| Scale Y=50 | Scale Y=3000 |


The **Sky Type menu** chooses how the stars are composited.


* *Composite on Original* composites the stars over the filtered layer.
* *Color* composites the stars over the chosen Sky Color.
* *Alpha* composites the stars over an alpha channel.


**Star Color** sets the color of the stars.


**Sky Color** sets the color of the sky background.


The **Add Galaxies checkbox** adds galaxies to the star pattern.




|  |  |
| --- | --- |
| [![stars.default](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.default.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.default.jpg) | [![stars.galaxies](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.galaxies.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.galaxies.jpg) |
| Add Galaxies off | Add Galaxies on |


**Galaxy Density** determines how closely the galaxies are packed together. Increasing the Galaxy Density value places galaxies closer together and adds more galaxies to the sky. Decreasing Galaxy Density moves galaxies further apart and adds fewer galaxies to the sky.




|  |  |
| --- | --- |
| [![galaxy.density.15](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/galaxy.density.15.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/galaxy.density.15.jpg) | [![galaxy.density.40](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/galaxy.density.40.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/galaxy.density.40.jpg) |
| Galaxy Density=15 | Galaxy Density=40 |


**Galaxy Size** determines the size of the galaxies. Increase the Galaxy Size value to create larger galaxies; decrease this value to create smaller galaxies.




|  |  |
| --- | --- |
| [![galaxy.size.30](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/galaxy.size_.30.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/galaxy.size_.30.jpg) | [![galaxy.size100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/galaxy.size100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/galaxy.size100.jpg) |
| Galaxy Size=30 | Galaxy Size=100 |


The **Add Shining Stars checkbox** changes some of the stars from round- to diamond-shaped.




|  |  |
| --- | --- |
| [![stars.shiningoff](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.shiningoff.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.shiningoff.jpg) | [![stars.shiningon](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.shiningon.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.shiningon.jpg) |
| Add Shining Stars off | Add Shining Stars on |


The **Map Layer menu** allows you to choose a layer in the timeline to use as mask for the effect. The stars conform to the opaque regions in the map layer’s alpha channel.


The remaining parameters affect only the map layer. If no map layer is chosen, adjusting these parameters has no affect.


If you select the **Use Map Alpha checkbox**, the filter uses the alpha channel in the map layer as it is, preserving the full range of transparencies. If this option is not selected, the filter uses the alpha channel in the map layer but treats each pixel as if it were either fully opaque or fully transparent. Pixels that are 50% to 100% opaque in the map layer luma channel are treated as 100% opaque (fully opaque), while pixels that are 0% to 49% opaque in the map layer alpha channel are treated as 0% opaque (fully transparent).




|  |  |  |
| --- | --- | --- |
| [![stars.maplayer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.maplayer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.maplayer.jpg) | [![stars.maplayeralphaoff](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.maplayeralphaoff.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.maplayeralphaoff.jpg) | [![stars.maplayeralphaon](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.maplayeralphaon.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.maplayeralphaon.jpg) |
| Map Layer Luma channel | Use Map Luma off | Use Map Luma on |


**Density on Map Layer** controls the density of the stars within the opaque regions of the map layer’s luma channel. Increasing this value packs the more stars in the region, while decreasing this value creates fewer stars in the region.




|  |  |
| --- | --- |
| [![stars.alphadensity.25](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.alphadensity.25.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.alphadensity.25.jpg) | [![stars.alphadensity.75](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.alphadensity.75.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.alphadensity.75.jpg) |
| Density on Luma Layer=25 | Density on Luma Layer=75 |


**Blend** adjusts the softness of the edges in the map layer’s alpha channel. Increasing this value softens the edges of the opaque areas in the matte.




|  |  |
| --- | --- |
| [![stars.blend.25](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.blend_.25.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.blend_.25.jpg) | [![stars.blend.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.blend_.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.blend_.50.jpg) |
| Blend=25 | Blend=50 |


**Choke** contracts or expands the edges of the opaque regions in the alpha channel. Positive Choke values expand the opaque regions, while negative Choke values contract them.




|  |  |  |
| --- | --- | --- |
| [![stars.choke.neg100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.choke_.neg100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.choke_.neg100.jpg) | [![stars.choke.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.choke_.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.choke_.0.jpg) | [![stars.choke.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.choke_.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/stars.choke_.100.jpg) |
| Choke= -100 | Choke=0 | Choke=100 |


