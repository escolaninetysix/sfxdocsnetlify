{
"date": "2019-06-12",
"title": "BCC Pinning Controls",
"category": "Nested Subgroup",
"link": "bcc-pinning-controls/"
}

 

|  |  |
| --- | --- |
| [![pinning.nopin](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/pinning.nopin_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/pinning.nopin_.jpg) | [![pinning.pinall](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/pinning.pinall.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/pinning.pinall.jpg) |
| No Pin | Pin All Edges |


### Overview


A displacement filter might distort the image in such a way that it creates holes at the edges of your image, or, at more extreme settings, tears holes in the center of your image. The pinning controls can counteract this effect by undistorting the image at specified edges, or in regions around up to two chosen points (“pin points”) within the image.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


The most important control on this section is **Edge Pin**, which determines which edges are pinned. You can pin any or all of the edges, the center of the image, or only the horizontal or vertical edges.


The default setting pins all the edges, which prevents edge distortion at most parameter settings. However, pinning cannot always prevent tearing at extreme settings. Increasing **Edge Pin Width** can help by undistorting within a greater distance from the edges. For effects that involve less distortion, a smaller Edge Pin Width prevents the edges from tearing and looks more realistic.


 


**Pin Point 1 and Pin Point 2 Parameter Groups**


**Pin Point 1** and **Pin Point 2** set the coordinates of a pin point. A pin point is a point at which the image is undistorted. The remaining Point 1 controls affect the distortion in a circular region (the pin region) centered around this point. The Pin Point 2 parameters apply a second pin point. These parameters function identically to the Pin Point 1 controls.


**Point 1 Strength** sets the amount of pinning applied to the image at the pin point. The default value of 100 completely undistorts the pin point. Decreasing values reduce the effect of the pin point, and at a value of 0, the point undergoes the full distorting effect of the filter. In other words, when Point 1 Strength is 0, the Pin Point 1 has no affect.


**Point 1 Range** sets the radius (in pixels) of the Pin Point 1 region.


**Point 1 Center %** sets the percentage of the pin region for which the pin is fully applied. For example, if you set Point 1 Range to 100, and Point 1 Center % to 50, then pixels within 50 pixels (50% of the Point 1 Range setting) are completely undistorted, and pixels within 50 to 100 pixels are partially undistorted.


