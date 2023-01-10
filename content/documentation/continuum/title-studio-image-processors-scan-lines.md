{
"date": "2019-06-12",
"title": "Title Studio- Image Processors - Scan Lines",
"category": "Tutorial",
"link": "title-studio-image-processors-scan-lines/"
}

 #### Scan Lines


In this section we will cover the Scanlines IP Shader available in Title Studio with Continuum 2019. Scanlines simulates the look of CRT TV’s. Options include a screen shape with rounded corners, tinting, blend modes and auto-animating horizontal or vertical scanlines. Includes a tv noise option for added photorealism. It can be applied to a scene, an object or a material texture for unique results. There are three types available in Continuum 2019:


* **Old TV Scan Lines** produces a noisy black and white image with horizontal scan lines, reminiscent of the early cathode-ray tube TVs.
* **Scan Lines Horizontal** produces rolling RGB lines horizontally.
* **Scan Lines Vertical** produces rolling RGB lines vertically


#### Old TV Scan Lines


[![Scan1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/Scan1.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/Scan1.png)


**Noise Intensity** creates gray noise, similar to the noise on a cathode-ray television. A value of 0 produces a clear image, while a value of 1 adds the maximum amount of noise to the image.


**Distortion Amount** adjusts the level of waviness added to the image. A value of 1 barely distorts the image, while a value of 50 adds distortion in several places


**Distortion Scale** adjusts the size of the distortions in the image. A value of 0 leaves the image intact, while a value of 50 produces large, wavy distortions, similar to a difficult-to-tune channel on an old TV.


**Lines Frequency** determines the number of scan lines added to the image. A value of 0 leaves the image clear. A value of 1 adds 1 scan line, 2 adds 2 scan lines, and so on, up to 128 scan lines.


**Lines Intensity** adjusts the opacity of the scan lines. Higher values will prouduce more opaque lines, while lower values will produce more transparent lines.


**Lines Softness** adjusts the edge softness of the scan lines. The higher the value the softer the line.


**Lines Color** allows the user to set the color of the scan line either through the use of the color chip or eyedropper.


**Roll R** used to offset the red channel scanline roll.


**Roll G** used to offset the green channel scanline roll.


**Roll B** used to offset the blue channel scanline roll.


**Tint Color** allows you to select the color of the tinting either by using the color chip or the eye dropper


**Tint Amount** adjusts the overall strength of the tint. Higher values will result in a more saturated tint.


**Lines Offset** sets the pattern of the scan lines at a given point. Navigate through the line patterns to find a setting that you like.


**Saturation**adjusts the saturation of the image. Assuming that you are starting with a color image, a value of 1 produces a full color image, and a value of 0 completely desaturates the image, converting it to black and white.


**Animation Speed** controls the speed of the RGB roll. Higher values will result in faster rolls.


**Frame Sharpness** adjusts the sharpness of the inner edge of the old TV frame. Higher values produce a softer edge.


**Frame Limit** controls the size of the inner frame and therefore the viewing area.  A value of 1 completely closes the inner frame, giving you a black image. A value of .10 opens the inner frame to its maximum size, given the Frame Shape that youíve defined.


**Mix With Original** blends the effect back with the original unfiltered object.


 


 


#### Scan Lines Horizontal and Vertical


[![Both types of scan line share identical parameters. They differ in the direction of the scan lines.](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/scan2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/scan2.jpg)Both types of scan line share identical parameters. They differ in the direction of the scan lines.


**Lines Frequency** determines the number of scan lines added to the image. A value of 0 leaves the image clear. A value of 1 adds 1 scan line, 2 adds 2 scan lines, and so on, up to 128 scan lines.


**Lines Intensity** adjusts the opacity of the scan lines. Higher values will prouduce more opaque lines, while lower values will produce more transparent lines.


**Lines Softness** adjusts the edge softness of the scan lines. The higher the value the softer the line.


**Lines Color** allows the user to set the color of the scan line either through the use of the color chip or eyedropper.


**Roll R** used to offset the red channel scanline roll.


**Roll G**  used to offset the green channel scanline roll.


**Roll B** used to offset the blue channel scanline roll.


**Lines Offset** sets the pattern of the scan lines at a given point. Navigate through the line patterns to find a setting that you like.


**Saturation**adjusts the saturation of the image. Assuming that you are starting with a color image, a value of 1 produces a full color image, and a value of 0 completely desaturates the image, converting it to black and white.


**Animation Speed** controls the speed of the RGB roll. Higher values will result in faster rolls.


**Mix With Original** blends the effect back with the original unfiltered object.


 


 


