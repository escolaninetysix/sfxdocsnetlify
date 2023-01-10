{
"date": "2019-06-12",
"title": "BCC Matte Cleanup",
"category": "BCC Key & Blend",
"link": "bcc-matte-cleanup/"
}

 ### [![MatteCleanupAft](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MatteCleanupAft.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MatteCleanupAft.jpg)


### Overview


You can use Matte Cleanup to correct imperfect mattes and to make interesting matte effects.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


The **Output menu** determines whether the composite image or the matte is displayed. *Composite* displays the composited effect. *Show* *Matte* allows you to view the matte as you adjust it. Be sure to set Output to Composite before rendering.


**Blend** sets the amount of blur applied to the matte after level adjustments (see below) are made. You can use blend to feather matte edges or to create blurred title effects.


**Choke** adjusts the size of the opaque portion of the matte. Positive values expand the opaque areas, while negative values contract them.


Often a key can create an imperfect matte in which traces of the background color remain around the edge of the foreground subject, as in this image.


[![cleanup.choke1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/cleanup.choke1_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/cleanup.choke1_.jpg)


You can use the Choke parameter to shrink the opaque region and remove the green fringe around the subject’s head and shoulders. In this example, Choke has been over corrected, removing parts of the foreground.


[![cleanup.choke2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/cleanup.choke2_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/cleanup.choke2_.jpg)


In this image, Choke has been correctly adjusted to remove remnants of the background color, while retaining all of the desired foreground pixels.


[![cleanup.choke3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/cleanup.choke3_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/cleanup.choke3_.jpg)


**Black** sets the alpha values in the matte that are treated as pure black (transparent) by the filter. All pixels whose alpha value is lower than the Black value are output as transparent. For example, if Black is 50, all pixels with a value of 50 or less are output to a value of 0. Increasing Black can help eliminate unwanted gray (semi-transparent) areas.


**White** sets the alpha values in the matte that are treated as pure white (opaque) by the filter. All pixels whose alpha value is higher than the White value are output as opaque. For example, if White is set to 200, all pixels with a value of 200 or more are output to a value of 255. Lowering White can help eliminate unwanted semi-transparent areas from the foreground.


**Spread** controls the width of the edge area used in making level adjustments.


**Gain** sets the maximum variance permitted within the edge area before the black and white thresholds are tested. Increasing Gain heightens the effect of changes to the Black and White parameters.


* Note: Processing is done in the following order: Level Adjustment, Blending, then Choking. To change the order, apply the filter several times adjusting one parameter each time.


**Region of Interest Top-Left** and **Region of Interest Bot-Right** define the upper left and bottom right corners of a rectangle within which the filter is applied. This is useful if you need to adjust the matte in a certain portion of the image. At the default Region of Interest settings, the entire image is included in the rectangle so that all pixels are affected by the filter.


