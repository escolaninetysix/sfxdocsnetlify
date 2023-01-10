{
"date": "2019-06-12",
"title": "BCC Vector Displacement",
"category": "BCC Warp",
"link": "bcc-vector-displacement/"
}

 ### Overview


Vector Displacement uses the RGB channels in the Map Layer to displace the image in three different directions.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

* *Vegas Pro Workflow Tip:*  To use the Light Wrap feature in Vegas Pro you must apply the filter in Custom Composite Mode.  For more information on working with Custom Composite Modes in Vegas, [Click Here](/documentation/continuum/working-in-vegas-pro/ "Working in Sony Vegas").![Vegas Custom Composite](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/03/Vegas1.png)Using Custom Composites in Vegas Pro


Selecting the **Process Alpha Only checkbox** allows you to distort the alpha channel without changing the underlying colors.


**Map Parameter Group**


The **Map menu** sets which clip in the timeline is used to create the distortions.


* Note: If the Map Layer is partly transparent, the displacement amount scales by its alpha values. Pixels whose map alpha is 0 are not displaced.
* Note: The remaining parameters are identical to the corresponding controls in the Displacement Map filter. See the Displacement filter for more information.


**Preblur:** applies a blur to the clip. Increasing Pre Blur can help eliminate sharp edges in the map to create a smoother effect.


**Blur****Threshold:** softens the clip before computing the distortions.


**Map Black Level:** sets the channel values of the clip that are output as pure black.


**Map White Level:** sets the channel values of the clip that are treated as pure white by the filter.


**Map Gamma:**adjusts the midlevel gray values of the clip by adjusting the gamma.


**View Map Checkbox:**allows you to view the clip as you adjust it. Deselect this option before rendering.


**Master Displacement:**control defaults to 100 and scales all of the displacement amounts. Animating this controls allows you to animate the total displacement.


**Red Direction, Green Direction**, and **Blue Direction** set the direction of the displacement controlled by the red, green and blue channels in the Map Layer.


**Red Displacement, Green Displacement**, and **Blue Displacement** set the amount of displacement, in pixels, that the filter applies to portions of the image corresponding to pixels in the Map Layer whose matching color channel is fully on. If a pixel in the Map Layer has a color channel that is fully off, then its corresponding image area is displaced in the amount determined by the matching Displacement value, but in the opposite direction.


**Red, Green, and Blue Reference Level:**Determines the amount of each color is in the pixels.


The **Map Behavior menu** sets how the map is applied when the Map Layer image is a different size than the filtered clip. If your map is the same size as the filtered image, the Map Behavior settings all produce the same result.


* *Center Map* centers the map on the source and does not displace the source image outside the boundaries of the centered Map Layer.
* *Stretch Map to Fit* resizes the Map Layer to the size of the source.
* *Tile Map* creates tiles from the Map Layer and uses them to displace the source. Tile Map only has an effect when the map is smaller than the source image.


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

**Distortion Pinning**


The BCC Distortion Pinning controls are used to fine tune edge treatment in situations where a distortion effect might cause regions from outside the image edges to be remapped inside the boundary.


For more information on the BCC Distortion Pinning controls, [Click Here](/documentation/continuum/bcc-pinning-controls/).

 