{
"date": "2019-06-12",
"title": "BCC Composite Choker",
"category": "BCC Key & Blend",
"link": "bcc-composite-choker/"
}

 ### Overview


Composite Choker contracts or expands the edges of the matte to bring them closer to or farther from the foreground. Two Choke controls allow you to smoothly adjust the matte.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Choke 1** applies a choke to the image. Positive Choke values tighten the matte around the foreground image, while negative values pull the matte away from the edges of the foreground image.


The **Output menu** determines how the filter uses the two Choke values to composite the filter, which enables you to adjust the matte more precisely.


* *Choke 1* uses the Choke 1 value and ignores the Choke 2 value.
* *Mix* blends the two Choke values to alter the alpha channel.
* *Difference* uses the difference between the two chokes, creating an outline effect.
* *Subtract* *Difference* uses the difference between the original alpha channel and the difference between the two Choke values.
* *Choke* *2* uses the Choke 2 value and ignores the Choke 1 value.


**Choke 2** applies a second choke to the image which you can mix with the first choke using the Output setting.


**Post Blur** blurs the alpha channel after the matte is processed. Use Post Blur to soften the edges of the matte for sources with high-contrast edges. You might also want to add Post Blur when using Difference or Subtract Difference output modes.


The **Blur Quality menu** adjusts the quality of the Post Blur. *Pyramid* is the fastest option and is generally adequate. It produces a blur similar in quality to the Pyramid Blur filter. *Pyramid* *Smoother* produces a better quality pyramid blur and increases rendering times slightly. The remaining choices, *Gaussian Low, Gaussian Medium, Gaussian High, Gaussian Higher,* and *Gaussian Highest* produce gaussian blurs of increasing quality. These options increase rendering times proportionately.


The **View Matte checkbox** allows you to view the matte as you adjust it. Be sure to deselect this option before rendering.


 


**Region Parameter Group**


The Region parameters allow you to define a specific region of interest in which the filter is applied, leaving the rest of the image unchanged.


The **Region of Interest** setting determines the shape of the region in which the filter is applied. You can apply the filter inside or outside a rectangular or oval-shaped region, or choose *All* to filter all pixels in the image, regardless of their location.


**Region Top-Left** and **Region Bot-Right** control the size and location of the region of interest. If Region of Interest is set to Inside or Outside Rectangle, Region Top-Left and Region Bot- Right define the upper left and bottom right corners of the rectangle. If Region of Interest is set to Inside or Outside Oval, the Region Lop-Left and Region Bot-Right points define a rectangle in which the oval is inscribed.


Increasing **Region** **Blend** softens the edges of the region.


