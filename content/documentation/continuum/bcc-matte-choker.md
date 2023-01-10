{
"date": "2019-06-12",
"title": "BCC Matte Choker",
"category": "BCC Key & Blend",
"link": "bcc-matte-choker/"
}

 ### Overview


Matte Choker is a tool for the often frustrating task of adjusting mattes that are not quite right. A first-pass matte often has unwanted holes in areas that should be opaque, and/or unwanted spots in areas that should be transparent. These problems can usually be fixed with Matte Choker.


Matte Choker uses an iterative technique to process the source alpha channel. In other words, the filter applies one stage of the process to the source image, then applies a second stage to the output of the first stage, and repeats the process using the output of each iteration as the input of the next.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

**Compare Mode pop­up:** Controls what is displayed by the Compare Mode. The options are:


* *Off* shows the output of the filter.
* *Side By Side* the left side of the output shows half of the incoming image, and the right side shows the same half of the image as processed by the filter. When in Side-by-Side mode, the corresponding Slide and Right Offset sliders become available.Wipe*enables the user to interactively wipe the effect across the image. The left side of the wipe bar on the image output shows the unfiltered image, while the right side of the wipe bar shows the filtered result. When in Wipe mode, the corresponding Wipe slider becomes available.
* *Wipe/Slide* operates as a Wipe function when Wipe is selected in Compare Mode, and as a Slide function when Side-­‐By-­‐Side is selected in Compare Mode. When in Wipe mode, adjustments to this parameter moves the vertical wipe bar across the image; the region on the left of the wipe bar shows the original unfiltered image, while the region on the right shows the filtered result. When in Slide mode, adjustments to this parameter pans the image in the viewer window, maintaining the spatial relationship in the viewer between the before and after images.
* *Right Offset* provides a way to adjust the spatial relationship between the unfiltered original image and the filtered result in the viewer window. Adjustments to this parameter will offset the position of the filtered image in the viewer.


 


The first three controls affect Choke 1, whose output can then be passed through Choke 2 if needed.


**Blur 1** softens the image’s alpha channel.


Positive **Choke 1** values push the tones in the matte toward transparent, tightening the edges of the matte around the foreground image. Negative values push the tones toward opaque, expanding the edges of the matte away from the foreground image.


**Gray Soften 1** controls the amount of affect the Choke setting has. When Gray Soften is 100, the Choke value has no affect on the image. If Gray Soften is 0, the Choke acts as an alpha extract and produces a purely binary key.


* Note: To contract the matte to get rid of areas in the foreground, use a positive Choke value. Increase Blur to increase the softness of the transparent areas, and adjust Gray Soften to adjust the sharpness of the borders of the matte. To expand the matte, follow the same guidelines using a negative Choke value. You may also want to apply a choke in one direction and a second choke in the opposite direction to deal with problem areas created by the first choke. You can use the Iterations control to repeat adjustments a number of times.


 


**Choker 2 Parameter Group**


The second choke uses the Choke 1 output and applies the process again using **Blur 2, Choke 2,** and **Gray Soften 2**. These parameters are identical to Blur 1, Choke 1, and Gray Soften 1, except that they affect the output of the first choke rather than directly affecting the source.


**Iterations** determines the number of times the filter is applied. Some choking effects can only be achieved by repeatedly applying the same settings. Increasing Iterations increases rendering times proportionately.


The **Blur Quality menu** controls the quality of the blur applied in the filter. *Pyramid* is the fastest option and is generally adequate. It produces a blur similar in quality to the Pyramid Blur filter. *Pyramid* *Smoother* produces a better quality pyramid blur and increases rendering times slightly. The remaining choices, *Gaussian Low, Gaussian Medium, Gaussian High, Gaussian Higher,* and *Gaussian Highest* produce gaussian blurs of increasing quality. These options increase rendering times proportionately.


**Iterations** determines the number of times the filter is applied. Some choking effects can only be achieved by repeatedly applying the same settings. Increasing Iterations increases rendering times proportionately.


The **View Matte checkbox** allows you to view the matte as you adjust it. Be sure to deselect this option before rendering.


 


**Region Parameter Group**


The Region parameters allow you to define a specific region of interest in which the filter is applied, leaving the rest of the image unchanged.


The **Region of Interest** setting determines the shape of the region in which the filter is applied. You can apply the filter inside or outside a rectangular or oval-shaped region, or choose All to filter all pixels in the image, regardless of their location.


**Region Top-Left** and **Region Bot-Right** control the size and location of the region of interest. If Region of Interest is set to Inside or Outside Rectangle, Region Top-Left and Region Bot- Right define the upper left and bottom right corners of the rectangle. If Region of Interest is set to Inside or Outside Oval, the Region Lop-Left and Region Bot-Right points define a rectangle in which the oval is inscribed.


Increasing **Region Blend** softens the edges of the region.


