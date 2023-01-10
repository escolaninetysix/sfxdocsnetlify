{
"date": "2019-06-12",
"title": "Title Studio- Image Processors - Wipe Shaders",
"category": "Tutorial",
"link": "title-studio-image-processors-wipe-shaders/"
}

 #### Wipe Shaders


In this section we will cover the available **Wipe IP Shaders** that are available in Title Studio with Continuum 2019. Wipe Shaders are animatible wipe effect that simulates the look and style of burning film, curtains and erosion. There are three Wipe variations that can be applied to an object or scene in Title Studio:


* **Burnt Film** simulates the look of holes burning through a layer of film to reveal another image.
* **Curtain** wipes away one image to reveal another in the form of a horizontal or vertical line.
* **Erosion** wipes away one image to reveal another in the form of an eroding pattern.


Each Wipe has a number of variants that allow for more refined customization.


 


#### Burnt Film


Burnt Film simulates the look of holes burning through a layer of an object to reveal another image.  It gives you control over the appearance of the burned edges as well as the burn rate. There are four variants of Burnt Film that are available in the Type drop down menu:


* Burnt Film is the default burn setting, creating a look of the burn evolving over the entire object or scene.
* Burnt Radial radiates the burn around a central source point, which is adjustable via Center X & Y parameters or an onscreen widget.
* Burnt Horizontal radiates the burn along the horizon.
* Burnt Vertical radiates the burn from left to right.


**Flare Color** sets the color of the inside edges of the burn holes which are partially transparent. Color may be selected with the color chip or eyedropper.


**Burn Color** sets the color of the burnt edges. Color may be selected with the color chip or eyedropper.


**Char Color** sets the color of the charred edges outside edges of the burn holes. These edges have not yet burned through and are completely opaque. Color may be selected with the color chip or eyedropper.


**Flare Amount** sets the width of the inside edges of the burn holes.


**Burn Amount** sets the amount of burn applied to the source image. A setting of 0 does not affect the source image. A setting of 1 burns out the source completely, revealing any tracks below it in the timeline. To create a burnt film transition, animate Burn Amount from 0 to 1.


**Char Amount** sets the width of the *charred* edges.


**Scale X** and **Scale Y** set the scale of the burn pattern along the horizontal and vertical axis.


 **Offset X** and **Offset Y** controls set the pattern of the burn holes at a given point. Navigate through the underlying burn patterns to find one that you like.


**Center Intensity** determines how much the burn centers grow.


**Level** determines how much of the total image burns away


 


#### Curtain


The **Curtain** effect wipes away one image to reveal another in the form of a horizontal or vertical ine. You can adjust the speed of the wipe, and create an edge that is clean or ragged, opaque or translucent.


The **Type** menu determines the orientation of the wipe:


* Curtain Horizontal produces a horizontal edge that moves up or down.
* Curtain Vertical produces a vertical edge that moves left or right across the image.


**Edge Bias** determines which side of the image is the wipe edge. A positive value puts the wipe on the left edge of a vertical wipe or on the bottom edge of a horizontal wipe. A negative value puts the wipe on the right edge of a vertical wipe or on the top edge of a horizontal wipe.


**Speed** controls the speed at which the wipe progresses.


**Noise Scale X** and **Noise Scale Y** determine the horizontal and vertical scale of the noise pattern.


**Noise Offset X** and **Noise Offset Y** determine the pattern of the noise at a given point. Navigate through the noise patterns to find a setting that you like.


**Noise Intensity** adjusts the intensity of the noise pattern in the curtain wipe. A low value produces a smooth edge, and a high value produces a more noisy, jagged edge.


**Offset** controls the progression of the wipe at a given point.


**Mix with Original** blends the source and processed images. Use this parameter to animate the effect from the unprocessed to the processed images without adjusting other settings, or to reduce the effect of the image processor by mixing it with the source image.


 


 


#### Erosion


The Erosion effect wipes away one image to reveal another in the form of an eroding pattern. You can adjust the type and scale of the erosion pattern, and adjust the offset. Mutation sliders let you further adjust the erosion patterns, while the Level parameter is used to animate the effect.


The **Type** menu determines the type of erosion pattern used in the wipe:


* The **Erosion** pattern uses randomly-shaped openings that gradually wipe away the image.
* **Marbelous Erosion** adds a marbled texture to the pattern.


**Scale X** and **Scale Y** set the scale of the erosion pattern along the horizontal and vertical axis.


**Offset X** and **Offset Y** determine the pattern of the erosion at a given point. Navigate through the erosion patterns to find a setting that you like.


**Mutation 1**, **Mutation 2**, **Mutation 3**, and **Mutation 4** control the shapes used in the erosion pattern. Each control mutates the shapes in different ways. Experiment with each of the settings until you find a pattern you like.


**Level** controls the intensity of the erosion pattern, with higher values producing higher levels of erosion.


