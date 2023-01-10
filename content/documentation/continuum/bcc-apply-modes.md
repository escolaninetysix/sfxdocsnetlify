{
"date": "2019-06-12",
"title": "BCC Apply Modes",
"category": "Nested Subgroup",
"link": "bcc-apply-modes/"
}

 ### Overview


Many effects use Apply Modes to apply the filtered output (or light) to the source image. Apply Modes control the blending of the two images, giving the effects many additional creative possibilities. The Apply Mode menu may contain any or all of the apply modes described in the following table.


### Function


**Normal:** applies the light or filter directly to the source image, replacing the source pixels with filtered pixels.


**Lighten:** compares the color channels values in the original pixels and in filtered pixels, and chooses the lighter (higher) value for each channel in each pixel. If a pure red pixel is applied to a pure blue pixel, the result is pure magenta.


**Darken:** compares the color channels values in the original pixels and in filtered pixels, and chooses the darker (lower) value for each channel in each pixel. If a pure red pixel is applied to a pure blue pixel, the result is black.


**Multiply:** applies the light or effect to the source as if it were a transparency placed over the source. The resulting image is darker than either. If a pure red pixel is applied to a pure blue pixel, the result is black. If a 50% gray pixel is applied to another 50% gray pixel, the result is 25% gray.


**Screen:** applies the light or effect to the source as if a photographic double image was taken of the light or effect and the source. The resulting image is lighter than either the light or effect or the source. If a pure red pixel is applied to a pure blue pixel with Screen, the result is magenta. If a 50% gray pixel is applied to another 50% gray pixel with Screen, the result is 75% gray.


**Difference:** outputs the difference between the light or filtered color and the source color for each channel. Difference modes can produce some very striking colors and create glow effects when used with Blurs. Difference modes can also exacerbate the noise in noisy video sources. Difference can generate non-Color Safe output.


**Lighter:** uses the lighter of the source and filtered colors for each pixel for all channels. If a dark green pixel is composited with light red, the result is light red.


**Darker:** uses the darker of the source and light or filtered colors for each pixel for all channels. If a dark green pixel is applied to a light red pixel, the result is dark green.


**Scale Multiply:** is a useful variation of Multiply that produces a brighter image than the standard Multiply. This is often the most realistic Apply mode for light effects.


**Scale Screen:** is a useful variation of Screen that produces a darker and less washed-out image than the standard Screen.


**Difference X 2:** is a variation of Difference that produces a more intense effect than the standard Difference. The enhanced difference modes can be particularly effective in creating glows with the Blur effects.


**Difference X 4:** is a variation of Difference that produces an even more intense effect than Difference X 2. The enhanced difference modes can be particularly effective in creating glows with the Blur effects.


**Add:** adds the light or filtered output with the source. The resulting color values are clipped at white.


**Subtract:** subtracts the light or effect from the source. This can produce intense and unpredictable colors and make the image appear noisy.


**Overlay:**layers the light or effect over the source. The result is brighter than the result of a Multiply and darker than the result of a Screen.


**Soft Light:** simulates shining a diffuse light (whose color is the light color or filtered output) on the source image. Most of the detail in the final output comes from the source image.


**Hard Light:** simulates shining a harsh light (whose color is the light color or filtered output) on the source image. The source image and the light or filtered output contribute roughly equal amounts of detail to the final output.


**Hue:** creates a composite color for each pixel that takes its Hue value from the light color or filtered output, and takes the Lightness and Saturation values from the source image.


**Saturation:** takes the Saturation of each pixel from the light color or filtered output, and takes the Lightness and Hue from the source image.


**Color:** takes the Color for each pixel from the light color or filtered output, and takes the Lightness from the source image.


**Luminosity:** takes the Luminosity for each pixel from the light color or filtered output, and its Color from the source image.


**Transparency:** used in Light filters and other lighting effects. Increases transparency in lit regions.


**Opacity:**used in Light filters and other lighting effects. Increases opacity in lit regions. If the image is fully opaque, Opacity has no affect.


**Boost Expo 1:** blends the color channels in the source and filtered pixels by subtracting an offset value from each pixel, exponentiating the value, adding the results, and then adding back the offset.


**Boost Expo 2:**is similar to Boost Expo 1, except that this mode uses offset and exponent values different from those used by Boost Expo 1.


**Boost Eq Power** +: uses an algorithm modeled on the audio concept of an equal power crossfade. This algorithm emphasizes the light pixels in the blend of the source and filtered pixels, which is useful when working with darker images.


**Boost Eq Power** –: similar to Boost Eq Power +, but uses the difference between the channel value and 255 in computing the contrast. This algorithm emphasizes the dark pixels in the blend of the source and filtered pixels, which can be useful when working with lighter images.


**Boost Bias:** increases the contrast of the pixels whose channel values are highest.


* Note: In all boost apply modes, if the top and bottom color are identical, the output color will be the same as the top and bottom.


**50–50 Mix:** reduces the opacity of the source and filtered pixels by 50% and the blends them equally. If the source and/or filtered pixels are partially transparent, their opacity is reduced proportionately.


**Behind:** composites the light behind the image that is lit. This Apply mode is only useful for images that include some transparency.  




**In Front:** composites the light in front of the image that is lit. This Apply mode is only useful for images that include some transparency.


**None:**outputs the effect and ignores the underlying layer


