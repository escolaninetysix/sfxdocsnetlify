{
   "date": "2017-03-16T21:16:17Z",
   "description": "Get descriptions of each of the Sapphire effects for the Sapphire VFX plugin from Boris FX ",
   "excerpt": "Is there a list with descriptions of the Sapphire effects?",
   "image_url": "",
   "tags": [],
   "title": "Is there a list with descriptions of the Sapphire effects?"
}

This a list of descriptions of the [Sapphire](/products/sapphire/) effects.

<table class="table table-bordered">
<thead>
<tr>
<td><strong>Adjust Unit</strong></td>
<td></td>
<td>All the basic tools needed for advanced color correction are included in the Sapphire Adjust Unit.</td>
</tr>
</thead><tbody>
<tr>
<td>Adjust</td>
<td>S_ChannelSwitcher</td>
<td>Reorders the RGBA channels of the source clip.  Allows mapping any source channel into any output channel, with scaling and offset for each output channel.</td>
</tr>
<tr>
<td>Adjust</td>
<td>S_ClampChroma</td>
<td>Reduces the chrominance of the input clip if necessary so it is not above a specified maximum.  This effect can be used to make ‘broadcast safe’ colors.  It also can be used to scale the chrominance, clamp the luminance, or scale the luminance.</td>
</tr>
<tr>
<td>Adjust</td>
<td>S_DuoTone</td>
<td>Performs an interpolation between two specified colors using the brightness of the source clip.</td>
</tr>
<tr>
<td>Adjust</td>
<td>S_Gamma</td>
<td>Applies a gamma correction to the input clip.  The red, green, and blue channels can be adjusted independently.  From Gamma just causes the inverse effect of adjusting Gamma.</td>
</tr>
<tr>
<td>Adjust</td>
<td>S_Hotspots</td>
<td>Generates a hotspot image containing areas of the source clip brighter than a given threshold.  The colors of the hotspots should match the original source.  This can be used for increasing contrast or finding the bright areas of a clip, but without changing the color saturation or hue of the result.</td>
</tr>
<tr>
<td>Adjust</td>
<td>S_HueSatBright</td>
<td>Adjusts the hue, saturation, brightness, and/or offset of the input clip.</td>
</tr>
<tr>
<td>Adjust</td>
<td>S_Invert</td>
<td>Inverts the colors of the source clip, so black becomes white, and white becomes black.  This can optionally also invert luma, chroma, RGB and alpha channels independently and do some basic color correction on the inverted result.</td>
</tr>
<tr>
<td>Adjust</td>
<td>S_Monochrome</td>
<td>Generates a monochrome version of the source clip using adjustable weights for the red, green, and blue channels.  This can simulate the use of a color filter applied to the lens of a black and white camera.  For example, use more red weight to darken blue sky areas of the input.  The weights are scaled so they sum to 1 before being used to reduce overall brightness changes when they are adjusted.</td>
</tr>
<tr>
<td>Adjust</td>
<td>S_QuadTone</td>
<td>Performs an interpolation between four specified colors using the brightness of the source clip.</td>
</tr>
<tr>
<td>Adjust</td>
<td>S_ShowBadColors</td>
<td>Identifies all pixels that fall outside a given color range, and flags them with the same color so they can be seen easily.</td>
</tr>
<tr>
<td>Adjust</td>
<td>S_Threshold</td>
<td>Sets the color channels of the source clip to full on or full off using a given softness and threshold.  This can be used to increase the contrast of each color channel independently.</td>
</tr>
<tr>
<td>Adjust</td>
<td>S_Tint</td>
<td>Tints the dark and light regions of the input clip towards given colors.  The dark colors are tinted by the Tint Dark color, and the brighter colors are tinted by the Tint Lights color.</td>
</tr>
<tr>
<td>Adjust</td>
<td>S_TriTone</td>
<td>Performs an interpolation between three specified colors using the brightness of the source clip.</td>
</tr>
<tr>
<td><strong>Blur+Sharpen</strong></td>
<td></td>
<td>Create fast and realistic in camera blurs, beautify an image, or sharpen and degrain with the Sapphire Blur + Sharpen Unit.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_Beauty</td>
<td>Applies smoothing, color correction, soft focus, and glow to skin regions.  Skin regions are based on the value of Enable Skin Detection and whether a second input is provided.  If Enable Skin Detection is on, the plugin generates an internal matte from the Skin Color, Luma and Chroma Range parameters.  The second input is an optional matte, that if connected the effect only applies to bright areas of the matte (if Enable Skin Detection is on and a matte is provided the two are multiplied).</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_Blur</td>
<td>Blurs the source clip by an arbitrary amount using a gaussian, triangle, or box filter.  This effect should render quickly even with very large Width values.  Use the Blur Rel X and Y parameters for a more horizontal or vertical blur direction.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_BlurChannels</td>
<td>Blurs each channel of the source clip by an arbitrary amount using a gaussian, triangle, or box filter.  This effect should render quickly even with very large Width values.  Use the Blur Rel X and Y parameters for a more horizontal or vertical blur direction.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_BlurChroma</td>
<td>Separates the source into luminance and chrominance components, blurs the chrominance and/or the luminance independently, and recombines them.  You can also scale the luma and chroma independently to enhance or remove either.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_BlurDirectional</td>
<td>Blurs the source clip in a given direction using a gaussian, triangle, or box filter. It can also blur each channel by different amounts.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_BlurMoCurves</td>
<td>Performs a motion blur and optionally transforms the source clip using the animated curves of the Z Dist, Rotate and Shift parameters.  If these parameters are constant, no motion blur will occur.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_BlurMotion</td>
<td>Performs a motion blur of the source clip between the specified From and To transformations.  This can be used to perform radial zoom blurs, rotate blurs, directional blurs, or any combination of these.  The From and To parameters do not refer to time.  They describe the two transformations in space that determine the style of blur applied to each frame.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_Convolve</td>
<td>Convolves a source image with a kernel.  Convolution is a mathematical operator which uses one image, the kernel, as a filter shape for another image (the source).  Convolution effectively stamps a copy of the kernel at each point of the source, using the source’s brightness at that point.  The effect is that a copy of the kernel will appear over all the bright spots of the source.  A kernel image shaped like a circle or polygon will give an effect similar to RackDefocus; a kernel image shaped like a starburst can give something like Glare.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_ConvolveComp</td>
<td>Convolves front and back images with a kernel, and composites them using a matte.  Convolution is a mathematical operator which uses one image, the kernel, as a filter shape for another image (the source).  Convolution effectively stamps a copy of the kernel at each point of the source, using the source’s brightness at that point.  The effect is that a copy of the kernel will appear over all the bright spots of the source.  A kernel image shaped like a circle or polygon will give an effect similar to RackDefocusComp; a kernel image shaped like a starburst can give something like GlareComp. <p> The kernel size can vary between front and back so either or both can be blurred.</p></td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_Deband</td>
<td>Removes banding artifacts from a clip by diffusing pixels across the banded areas, while keeping the original edges intact.  To use this effect, first select Show:Edges and adjust the edge threshold until the banding edges just disappear, leaving only the desired real edges.  Then select Show:Result to see the result.  If you still see some banding, increase Diffuse Threshold and/or Diffuse Radius.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_DefocusPrism</td>
<td>Defocuses the color channels of the source clip into rings of different widths.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_EdgeAwareBlur</td>
<td>Blur regions of similar color while preserving edges between regions of different colors.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_EdgeBlur</td>
<td>Finds the edges within the Matte clip, and blurs the Source clip at those edges.  Use the Show Edges option to view which areas will receive the blur while adjusting the edge parameters.  Then adjust Blur Width to control the amount of blur.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_GrainRemove</td>
<td>Smooths the source clip while retaining the edges.  To adjust the parameters in this effect, first use the Show:Edges option to inspect which edges will be retained and adjust Edges Threshold, Edges Width, and Edges Scale until the important edges are fairly sharp and bright but not jaggy.  Then return to Show:Result and adjust the smooth parameters to remove the appropriate amount of grain.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_Median</td>
<td>Applies a median filter to the source image. Median filters are useful for cleaning up isolated spots and noise.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_RackDefocus</td>
<td>Generates a defocused version of the source clip using a ‘circle of confusion’ convolution.  This effect is often preferable to a gaussian blur for simulating a real defocused camera lens, because bright spots can be defocused into clean shapes instead of being smoothed away.  The iris shape can be controlled using Points, Pointiness and Rotate, and the Use Gamma parameter can adjust the relative brightness of the blurred highlights.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_RackDfComp</td>
<td>Composites the Foreground over the Background while defocusing both layers by different amounts.  The Foreground alpha channel is used as the matte. If the Middle input is provided, it is composited between the Foreground and Background.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_Sharpen</td>
<td>Amplifies the high frequencies in the source clip such as edges and details.  Increase the Sharpen Width parameter to sharpen more of the mid range frequencies, and adjust Sharpen Amp to control the amount of sharpening applied.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_SoftFocus</td>
<td>Combines a blurred version of the source with the original to give a ‘soft focus’ effect.  Adjust the Width and Mix parameters to give different types of looks.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_ZBlur</td>
<td>Blurs areas of the source clip by different amounts using depth values from a ZBuffer input.  Separates the input into a number of layers in depth and blurs them by different amounts depending on each layer’s depth.  Linear fog can also be mixed into the result.  To use this effect, first set ZBuffer:Black Is Near or White Is Near according to your Z buffer, then adjust the focus depth and depth of field parameters to get the look you want.  To help set the focus depth, you can use Show: In Focus Zone.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_ZConvolve</td>
<td>Convolves areas of the source clip using a kernel which is made larger or smaller using depth values from a ZBuffer input. Separates the input into a number of layers and applies different sized convolution blurs depending on the distance from the focal depth, and depth of field.  This is similar to ZDefocus but with an iris shape (or Kernel) that comes from a clip.</td>
</tr>
<tr>
<td>Blur+Sharpen</td>
<td>S_ZDefocus</td>
<td>Defocuses areas of the source clip by different amounts using depth values from a ZBuffer input. Separates the input into a number of depth layers and applies different amounts of defocus depending on each layer’s depth.  To use this effect, first set ZBuffer:Black Is Near or White Is Near according to your Z buffer, then adjust the Focus Depth and Depth Of Field parameters to get the look you want.  To help set the Focus Depth, you can use Show: In Focus Zone.</td>
</tr>
<tr>
<td><strong>Distort</strong></td>
<td></td>
<td>Create powerful lens distortion effects, in-camera shake effects, chromatic aberrations, and a whole host of warping tools with the Sapphire Distort Unit.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_Distort</td>
<td>Warps the source input clip using the gradient of the Lens input clip.  This can generate optical glass-like effects as if the source clip were being viewed through an arbitrarily shaped lens.  It is best demonstrated when the lens image contains just a few bold shapes or a simple texture.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_DistortBlur</td>
<td>Blurs the source input clip in the direction of the gradient of the Lens input clip.  It is best demonstrated when the lens image contains just a few simple shapes.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_DistortChroma</td>
<td>Warps the chrominance of the source input by different amounts using the gradient of the Lens input clip.  This can generate optical glass-like effects as if the source clip were being viewed through an arbitrarily shaped or textured prism.  It is best demonstrated when the lens image contains just a few simple bold shapes.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_DistortRGB</td>
<td>Warps the red, green, and blue color channels of the source input by different amounts using the gradient of the Lens input clip.  It is best demonstrated when the lens image contains just a few simple bold shapes.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_InfiniteZoom</td>
<td>Zooms into endlessly repeating copies of an image, reminiscent of certain M.C. Escher drawings.  Works best with clips with transparent edges, such as clocks or plates; or transparent centers, such as picture frames.  Transparency can come from the source clip’s alpha or the mask.  Animate the Zoom param to get the full effect.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_Shake</td>
<td>Applies a shaking motion to the source clip over time with translation, zooming, and/or rotation.  The shaking is random but repeatable, so with the same parameters the same shaking motion is generated each time.  Turn on Motion Blur and adjust the Mo Blur Length for different amounts of blur.  Adjust the Amplitude and Frequency for different shaking speeds and amounts.  The Rand parameters give detailed control of the random non-periodic shaking, and the Wave parameters adjust the regular periodic shaking.  The X, Y, Z, and Tilt parameters control the horizontal, vertical, zoom, and rotation amounts of shaking respectively.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_StretchFrameEdges</td>
<td>Stretch the edges of a 4x3 image while preserving the center, to hide the black pillars in a 16x9 comp.  This effect takes the middle part of the Source clip and squeezes it, since viewing a 4x3 image in a 16x9 comp normally stretches it out to fit.  The edges are not squeezed, so the image goes all the way out to the edges.  The left and right edge portions of the image will appear stretched horizontally.  Although intended for 4x3 conversion, it can work with any aspect ratios.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpBubble</td>
<td>Warps the source clip by a smooth noise function.  This can be used to create heat diffusion or under water types of effects.  The Shift Speed parameters cause the noise pattern to automatically translate over time.  Adjust the Amplitude and Frequency parameters to give different types of distortions.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpBubble2</td>
<td>Warps the source clip using two overlapping sets of bubble patterns.  This can be used to create heat diffusion or under water types of effects.  The Shift Speed parameters cause the noise pattern to automatically translate over time.  Adjust the Amplitude and Frequency parameters to give different types of distortions.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpChroma</td>
<td>Separates the source clip into spectral bands and warps them by different amounts.  The red is warped by the From transformation, the blue by the To transformation, with the other colors of the spectrum in between.  The From and To parameters do not refer to time.  They describe the two transformations in space that determine the sequence of warps applied to each color.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpCornerPin</td>
<td>Performs a 3D perspective warp of the source image to align the corners with the four indicated points.  This can be useful for positioning the source over an object in another clip, such as a billboard or computer screen.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpDrops</td>
<td>Warps the source clip by multiple patterns of concentric waves emanating from multiple center locations.  Each area in the Centers input clip brighter than the value of Threshold Cntrs, generates an independent pattern of concentric waves, and the total brightness of each area scales the warping magnitude of those waves.  If the Centers image is complex, the number and locations of resulting centers can be fairly sensitive to the threshold value.  Try using just solid black with a few white dots for the Centers input.  If you only need a single set of waves, you can use the WarpPuddle effect instead.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpFishEye</td>
<td>Expands the center of the source clip as if viewed through a fish-eye lens.  Adjust the Amount parameter to give more or less distortion.  Turn off the Wrap options to give transparency beyond the borders of the input clip instead of reflected copies.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpMagnify</td>
<td>Magnifies an elliptical region of the source to create a glass lens refraction effect.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpPerspective</td>
<td>Transforms the source clip onto a 3D plane with perspective.  Adjust the Latitude, Swing, and Roll parameters to rotate the image on various axes, and adjust Shift and Z Dist to translate and zoom.  Turn off the Wrap options to give a single non-repeated copy of the image.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpPolar</td>
<td>Warps the source clip into a rounded disk shape.  The vertical direction of the source image is mapped between the Inner Radius and Outer Radius, and the horizontal direction is rotated about the center based on the number of Angle Repeats and offset by Angle.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpPuddle</td>
<td>Warps the source clip by a pattern of concentric waves.  The Phase Speed parameter causes the waves to automatically move outwards from the center over time.  Adjust the Inner and Outer Radius parameters to limit the area where the waves appear.  Increase the Inner and Outer softness for smoother transitions between where the waves appear and do not appear.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpPuff</td>
<td>Warps the source clip based on its gradient.  By default, brighter areas are puffed out and darker areas are shrunk.  This is similar to applying Distort effect to an image using itself as the lens.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpRepeat</td>
<td>Transforms the source input multiple times and averages the results.  The From and To parameters do not refer to time.  They describe the two transformations in space that determine the sequence of repeated warps applied to each frame.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpTransform</td>
<td>Warps the source clip by a combination of linear transformations including scale, shear, zoom, rotation, and translation.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpVortex</td>
<td>Twists the source clip into a vortex, about a given Center location.  Use the Vortex Start parameter to adjust the amount of vortexing, and use Angle Offset to also apply a normal rotation.  Vortex Speed can be used to automatically animate the amount of vortexing.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpWaves</td>
<td>Warps the source clip by a wave pattern.  You can make the waves move over time by increasing the Phase Speed parameter, or by animating the value of Phase Start.</td>
</tr>
<tr>
<td>Distort</td>
<td>S_WarpWaves2</td>
<td>Warps the source clip using two sets of overlapping wave patterns.  You can make the waves move over time by increasing the Phase Speed parameters, or by animating the value of the Phase Start parameters.</td>
</tr>
<tr>
<td><strong>Lighting</strong></td>
<td></td>
<td>Flawlessly simulate natural and synthetic lights with the legendary Sapphire Lighting Unit.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_BokehLights</td>
<td>Generates random, defocused lights that move around the screen.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_DropShadow</td>
<td>Generates a shadow on the Background clip using the alpha channel of the Foreground or an optional Matte, then composites the Foreground over the Background to give the final result.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_EdgeRays</td>
<td>Generates beams of light emitting from the edges of an input clip.  You can provide a Matte input to selectively scale the colors of the rays.  If Matte Type is set to Color, you can also use the Matte input to colorize the rays differently in different regions.  Set the Rays Res parameter to <sup>1</sup>⁄<sub>2</sub> for faster rendering with slightly softer rays.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_Flashbulbs</td>
<td>Simulates lots of flashbulbs going off.  With many small flashes, can look like a stadium scene.  With a few large flashes, works well on a celebrity red carpet clip.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_Glare</td>
<td>Composites rainbow halos and/or glint-like rays at locations where the Source clip is brighter than the threshold.  Lower the threshold parameter to produce glares in more areas.  Use the Style menu to select different glare types.  Set the Glare Res parameter to <sup>1</sup>⁄<sub>2</sub> for faster rendering with slightly softer glares.  Use the Convolve option for smoother results.  Glares are best observed on dark images with a few bright spots.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_Glint</td>
<td>Generates star shaped glints at locations where the Source clip is brighter than the threshold.  Lower the threshold parameter to produce glints in more areas.  Adjust the size and brightness parameters to make different types of glints.  Glints are best observed on dark images with a few bright spots.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_GlintRainbow</td>
<td>Generates star shaped rainbow colored glints at locations where the Source clip is brighter than the threshold.  Lower the threshold parameter to produce glints in more areas.  Adjust the Shift Out, Size, and Brightness parameters to make different types of glints.  Glints are best observed on dark images with a few bright spots.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_Glow</td>
<td>Generates glowing light from areas of the source clip that are brighter than the given threshold.  Raise the threshold parameter to produce glows in fewer areas.  Adjust the Width RGB parameters to make glows with different color falloffs, and adjust the Width XY parameters to make horizontal or vertical glows.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_GlowAura</td>
<td>Generates radial colored aura lines following the gradient of the source clip.  Raise the threshold parameter to produce glows in fewer areas.  Adjust the Width, Frequency, Phase, and Twist parameters to make glows with different aura patterns.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_GlowDarks</td>
<td>Areas of the source clip darker than the given threshold are blurred and combined with the input clip to give a deep smoky look.  Adjust the Darkness, Width, and Threshold parameters to give different types of looks.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_GlowDist</td>
<td>Generates glows based on the distances from the edges of the source input.  Any edges in the input image, where the brightness crosses the given threshold value, will generate an equally bright glow into the darker side of the edges.  This is best observed when used on images with dark backgrounds.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_GlowEdges</td>
<td>Creates glowing light from the edges of the source clip.  This differs from the default Glow in that small or thin objects generate as much glow around their edges as large objects.  Also the glow colors are not affected by the colors of the source clip.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_GlowNoise</td>
<td>Generates glowing light from areas of the source clip that are brighter than the given threshold.  The glows are also attenuated by a solid noise texture to give them a noisy or grainy effect.  If the Jitter Frames parameter is positive, the noise will be regenerated for each frame for a fizzling look.  If Jitter Frames is zero, two noise textures are combined and slide over each other at a rate depending on the Spread Speed.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_GlowOrthicon</td>
<td>The source clip is darkened at areas around parts of the source clip that are brighter than the given threshold, to give an ‘orthicon’ or ‘dark glow’ look.  Lower the Threshold parameter to produce the orthicon effect in more areas.  Adjust the Darkness and Width parameters to give different types of looks.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_GlowRainbow</td>
<td>Generates rainbow colored glows based on the distances from the edges of the source input.  Any edges in the input image, where the brightness crosses the given threshold value, will generate an equal glow into the darker side of the edges.  This is best observed when used on images with dark backgrounds.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_GlowRings</td>
<td>Generates glows of colored rings around the areas of the source clip that are brighter than the given threshold.  Raise the threshold parameter to produce glows in fewer areas.  Adjust the Width and Thickness RGB parameters to make glows with different color patterns, and adjust the Width XY parameters to make horizontal or vertical glows.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_LensFlare</td>
<td>Renders a lens flare image over the background clip, aligning various flare elements between the hotspot and pivot locations.  Use the Lens menu to select different types of lensflares.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_LensFlareAutoTrack</td>
<td>Renders one or more lens flare images over the background clip, aligning various flare elements between the hotspot and pivot locations.  In this AutoTrack version of LensFlare, the hotspots are automatically positioned on the brightest areas of the background clip. Increasing Blur For Auto will cause the input to be smoothed before the brightest locations are found and can help remove the effect of secondary bright spots.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_Light3D</td>
<td>Performs 3D relighting with up to 4 individually controlled light sources.  The Source input is usually an ambient or diffuse pass from a 3d renderer that shows the surface colors.  The Normal vector input determines the surface direction at each pixel.  The source and normals should be generated together by the 3d program so they match.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_LightLeak</td>
<td>Renders abstract patterns of color that simulate light leaking through gaps in a camera body. The light leak consists of three distinct elements which can be adjusted individually.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_Rays</td>
<td>Generates beams of light emitting from the bright areas of the source clip.  Lower the Threshold parameter to generate rays from more areas or raise it to generate rays from only the brightest areas.  Set the Rays Res parameter to <sup>1</sup>⁄<sub>2</sub> for faster rendering with slightly softer rays.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_SpotLight</td>
<td>Lights the input clip using one or two spotlights. For each enabled light, the intersection of a 3D light cone with the image plane is calculated using the given light source position, aim location, and beam angle.  Ambient light can also be applied to affect the entire source image evenly.  A wide variety of lighting shapes can be created by adjusting the parameters provided.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_Streaks</td>
<td>Motion blurs the bright areas of the source into streaks between the From and To transformations.  This can be used to create an extended film exposure effect, or simulate soft beams of light.  From and To parameters do not refer to time.  They describe the two transformations in space that determine the style of blur applied to each frame.</td>
</tr>
<tr>
<td>Lighting</td>
<td>S_ZGlow</td>
<td>Glows areas of the source clip with varying widths depending on the depth values from a ZBuffer input.  Separates the input into a number of layers and applies different amounts of glow depending on Width Near, Width Far, Brightness Near, and Brightness Far parameters.</td>
</tr>
<tr>
<td><strong>Render</strong></td>
<td></td>
<td>Enhance your work with textures, gradients, cloud, sky, and lightning effects with the Sapphire Render Unit.</td>
</tr>
<tr>
<td>Render</td>
<td>S_Aurora</td>
<td>Generates a two colored swirl of light along a user controlled spline reminiscent of the Aurora Borealis (Northern Lights).</td>
</tr>
<tr>
<td>Render</td>
<td>S_Caustics</td>
<td>Simulates the patterns created when light rays are reflected or refracted by a curved surface. Caustics can often be seen at the bottom of a swimming pool in bright sunlight or on objects viewed underwater.</td>
</tr>
<tr>
<td>Render</td>
<td>S_Clouds</td>
<td>Generates a procedural noise texture.  Use the Frequency parameter to zoom in and out of the texture.  The Shift Speed parameters cause the texture to automatically translate over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_CloudsColorSmooth</td>
<td>Generates a full color clouds texture.  Procedural noise texture is independently generated for each of the red, green, and blue output channels.  The Shift Speed parameters cause the texture to automatically translate over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_CloudsMultColor</td>
<td>Generates a procedural noise texture like S_Clouds and tints the colors using an additional color noise texture.  The Shift Speed parameters cause the texture to automatically translate over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_CloudsPerspective</td>
<td>Generates a procedural noise texture transformed onto a 3D plane with perspective.  Adjust the Latitude, Swing, and Roll parameters to rotate the image on various axes, each axis, and use the Frequency parameter to zoom in and out of the texture.  Shift Speed causes the texture to automatically translate over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_CloudsPsyko</td>
<td>Generates a procedural noise texture, and passes this through a colorizing process.  The Shift Speed parameters cause the pattern to automatically translate over time, and Phase Speed causes the colors to rotate over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_CloudsVortex</td>
<td>Generates a procedural noise texture twisting into a vortex.  The Vortex Speed parameter causes the amount of vortex rotation to automatically animate over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_Gradient</td>
<td>Makes a smooth color gradient across the screen using given Start and End locations and colors, then optionally combines the gradient with a background clip.  Increase Add Noise to reduce banding artifacts in the gradient due to color quantization.</td>
</tr>
<tr>
<td>Render</td>
<td>S_GradientMulti</td>
<td>Generates a smooth multi-color gradient across the screen using multiple control points, and optionally combines the gradient with a background clip.</td>
</tr>
<tr>
<td>Render</td>
<td>S_GradientRadial</td>
<td>Makes a smooth radial color gradient in an ellipse shape, given Center, Inner Radius, and Outer Radius parameters, and optionally combines the gradient with a background clip.  Increase Add Noise to reduce banding artifacts in the gradient due to color quantization.</td>
</tr>
<tr>
<td>Render</td>
<td>S_Grid</td>
<td>Generates a grid of lines and combines it with a background clip.  Adjust the Latitude, Swing, and Roll parameters to rotate the grid on various axes, and adjust Shift and Z Dist to translate and zoom.</td>
</tr>
<tr>
<td>Render</td>
<td>S_Grunge</td>
<td>Simulates many different kinds of grunge including dirt, stains, flecks, grime, scratches, and paint. Up to three different kinds of grunge can be combined.  There are master controls for adjusting all grunge together as well as a set of detailed controls for adjusting the look of each of the grunge collections.</td>
</tr>
<tr>
<td>Render</td>
<td>S_LaserBeam</td>
<td>Simulates the beam from a science fiction style laser blaster. The beam moves over a number of frames from a source point to a target point. A perspective effect may also be added.</td>
</tr>
<tr>
<td>Render</td>
<td>S_Luna</td>
<td>Renders the Earth’s Moon; you can adjust phase and colors, and add atmospheric effects.</td>
</tr>
<tr>
<td>Render</td>
<td>S_MuzzleFlash</td>
<td>Simulates the flash and smoke that is generated when a gun is fired. The flash from several types of gun can be simulated. All guns have a primary flash, and guns with suppressors may have secondary flashes. The gun may easily be fired repeatedly.</td>
</tr>
<tr>
<td>Render</td>
<td>S_NightSky</td>
<td>Generates a realistic starry night sky as viewed from a major city or a specified longitude and latitude.  The stars are generated using a star database so that major constellations are visible where expected.  Adjust magnitude limit to see more stars. Animate the Minute param to make the stars move realistically over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_Shape</td>
<td>Draws a shape into the image.  It can give a wide variety of shapes, from polygons and circles to stars, flower shapes, and swirled starfish shapes.  The main parameters to look at are Points, Pointiness, Roundness, and Swirl.</td>
</tr>
<tr>
<td>Render</td>
<td>S_Sparkles</td>
<td>Generates a field of sparkling glint effects.  Adjust the Frequency, Density, and Size parameters for different types of sparkling patterns.  Use the Matte input to only generate sparkles in specified areas.</td>
</tr>
<tr>
<td>Render</td>
<td>S_SparklesColor</td>
<td>Generates a field of sparkling Glint effects with varying colors.  Adjust the Frequency, Density, and Size parameters for different types of sparkling patterns.  Use the Matte input to only generate sparkles in specified areas.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureCells</td>
<td>Generates an image of procedural cellular shapes.  The Rotate Speed parameter causes the cell centers to rotate within each cell over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureChromaSpiral</td>
<td>Creates an abstract texture by applying a WarpChroma effect to a procedurally generated noise texture.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureFlux</td>
<td>Creates abstract textures of fluctuating liquid or cellular patterns.  The Morph Speed parameter causes the pattern to automatically undulate over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureFolded</td>
<td>Creates an abstract texture resembling folded cloth or liquid that can be animated to give a dynamic turbulent effect.  The Fold Speed parameters cause the pattern to automatically undulate over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureLoops</td>
<td>Creates an abstract texture of overlapping loop shapes.  Three sets of shapes can be separately adjusted, colored, and then combined together.  The Phase Speed parameter causes the pattern to automatically change over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureMicro</td>
<td>Generates a procedural texture that looks a bit like a surface of a rough object under an electron microscope.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureMoire</td>
<td>Creates an abstract Moire texture by adding together two patterns of concentric rings.  The Phase Speed and Moire Speed parameters cause the rings to automatically animate over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureNeurons</td>
<td>Creates an abstract texture resembling moving nerve cell tendrils.  The Phase Speed and Morph Speed parameters cause the pattern to automatically change over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureNoiseEmboss</td>
<td>Creates an abstract texture by applying a EmbossShiny effect to a procedurally generated noise texture.  Adjust the Light Dir to illuminate the pattern from different angles.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureNoisePaint</td>
<td>Creates an abstract texture by applying an AutoPaint effect to a procedurally generated noise texture.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TexturePlasma</td>
<td>Creates an abstract texture resembling an electrical plasma effect.  The Phase Speed parameter causes the pattern to automatically undulate over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureSpots</td>
<td>Creates a field of spots that can be distorted and animated.  The Warp Speed parameter causes the spots to be distorted over time by a random warping pattern.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureTiles</td>
<td>TextureTiles draws a repeating pattern of tiles.  The shapes can be hexagons, triangles, diamonds, stars, or variations on those, depending on the Morph parameters.</td>
</tr>
<tr>
<td>Render</td>
<td>S_TextureWeave</td>
<td>Creates an abstract texture resembling perpendicular woven strands.  The two sets of strands, horizontal and vertical, can be adjusted independently using frequency, octaves, and speed parameters.</td>
</tr>
<tr>
<td>Render</td>
<td>S_Zap</td>
<td>Generates lightning bolts between two points, and renders them over a background.  Increase the number of bolts to give a electrical plasma effect.  Increase Vary Endpoint to spread out the ends of the bolts.  Adjust the Glow Color for differently colored results.  The Wiggle Speed parameter causes the bolts to automatically undulate over time.</td>
</tr>
<tr>
<td>Render</td>
<td>S_ZapFrom</td>
<td>Generates multiple lightning bolts outwards from the edges of objects in the FromObj input clip, and renders them over a background input.  Use the Show:Edges option to view the source edges while adjusting the Threshold and Blur From Obj parameters.</td>
</tr>
<tr>
<td>Render</td>
<td>S_ZapTo</td>
<td>Generates a forked lightning bolt from a given point to the edges of objects in the ToObject input clip, and renders it over a background input.  Use the Show:Edges option to view the target edges while adjusting the Threshold and Blur To Obj parameters.</td>
</tr>
<tr>
<td><strong>Stylize</strong></td>
<td></td>
<td>Build color grades, damaged looks, and other visually abstract treatments with the Sapphire Stylize Unit.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_AutoPaint</td>
<td>Generates a ‘paint-brushed’ version of the source clip.  Use the Frequency and Stroke Length parameters to adjust the density and shape of the brush strokes.  You can set Jitter Frames to 1 if you want to re-randomize the brush stroke pattern for each frame.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_BandPass</td>
<td>Generates an X-ray-like effect using a band-pass filter.  Two blurs are performed with different widths, and the result is the difference scaled and offset by a gray value.  Frequencies above and below the cutoffs are attenuated, leaving only the middle band of frequencies.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_BleachBypass</td>
<td>Simulates a film process in which silver is not removed from the negative.  The result has increased contrast and reduced color saturation.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Brush</td>
<td>Simulates the look of drawing and painting by layering brush strokes of different sizes and directions. The style of the effect can be Oil or Chalk with the option to use one of the following brushes: felt tip, splat, water color, stipple, pencil, pastel, sponge, splodge, round, or cubes. In addition to the master controls for adjusting shape, size, orientation, density, etc., there are also three unique controls to each effect style that control the lighting and shading of the brushes.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Cartoon</td>
<td>Generates a version of the source clip with a cartoon look.  Finds the edges in the image and draws new outlines for those edges.  Smooths the colors of the areas between the edges, and optionally posterizes the colors into fewer color values.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_CartoonPaint</td>
<td>Auto-generates a version of the source clip with a cartoon paint-brushed look.  Finds the edges in the image and draws new outlines for those edges.  Replaces the colors of the areas between the edges with paint brush shapes.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Crosshatch</td>
<td>Simulates a pen-sketch crosshatched look using overlapping strokes.  The source is divided into four bands based on luma; each band from dark to light gets a different pattern of strokes.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Diffuse</td>
<td>Scrambles the pixels of the source input within an area determined by the Diffuse Amount.  Use the Blur Rel X and Y parameters for a more horizontal or vertical diffuse direction.  The pixelated look of this effect depends on the image resolution, so it is recommended to test your final resolution before processing.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_DigitalDamage</td>
<td>Simulates bad digital TV transmission with many options, including freeze-frames, shifting and flowing blocks, various kinds of blocky noise, and pixelization.  Can give looks similar to MPEG stream errors, digital dropouts, and satellite feed data corruption.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_DogVision</td>
<td>Generates a dual color-channel version of the input image, as might be perceived by the limited color vision system of dogs.  Humans have three color receptors (for red, green, and blue) while dogs have only two receptors (for yellow and blue).</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_EdgeColorize</td>
<td>Assigns different colors to the edges of the source clip depending on their direction.  Increase the Edge Smooth parameter for thicker edges.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_EdgeDetect</td>
<td>Finds the edges within the source clip.  Increase the Edge Smooth parameter for thicker edges.  Select Mono or Chroma mode to show only edges in Luminance or Chroma.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_EdgeDetectDouble</td>
<td>Performs an edge detect operation twice giving a double stranded edge effect.  Increase the Edge Smooth parameters for thicker edges.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_EdgesInDirection</td>
<td>Finds the edges of the source input that are aligned in a specified direction.  Increase the Edge Smooth parameter for thicker edges.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Emboss</td>
<td>Embosses the Source clip using the brightness of the Bumps input as a relief map.  Increase the Bumps Smooth parameter for bolder bumps, and adjust the Light Dir to illuminate the bumps from different angles.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_EmbossDistort</td>
<td>Embosses and warps the Source clip using the Bumps input as a relief map and also distorts the result using the Bumps as a ‘lens’ image.  Increase the Bumps Smooth parameter for bolder bumps, and adjust the Light Dir to illuminate the bumps from different angles.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_EmbossGlass</td>
<td>The Source is embossed and warped using the Bumps input as a relief map and lens image.  A chrominance distortion is also performed, separating the spectrum for a ‘prismatic’ look.  Increase the Bumps Smooth parameter for bolder bumps, and adjust the Light Dir to illuminate the bumps from different angles.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_EmbossShiny</td>
<td>Embosses the Source clip using the Bumps input as a relief map.  A lighting model is used which includes highlights from specular reflections.  Increase the Bumps Smooth parameter for bolder bumps, and adjust the Light Dir to illuminate the bumps from different angles.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Etching</td>
<td>Generates a version of the source clip using two sets of black and white lines of varying thickness to give an ‘etching’ or ‘lithograph’ look.  Use the Smooth Source parameter to remove some details and make the lines more evenly shaped.  Use the Lines Frequency parameter to adjust the density of all lines.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_FilmDamage</td>
<td>Simulates damaged film with many options, including dust, hairs, stains, scratches, defocusing, flicker, and shake.  Each option has a master control and a set of detailed controls for adjusting the look of that type of damage.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_FilmEffect</td>
<td>Provides a physically accurate model of film exposure and processing to make your video footage look like it was shot on particular film stocks.  It can remove field artifacts, perform color correction for specific film types, add film grain, and apply glow or soft focus effects.  The color correction and grain can be selectively disabled using the Scale CC and Grain Amp parameters.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_FlysEyeCircles</td>
<td>Breaks the image into circle shaped tiles and transforms the image within each shape, to create a fly’s eye view effect.  The Overlap options allow the circles to be combined in different ways where they overlap.  The ‘Inside’ parameters transform the Source image before it is tiled into the pattern, and the ‘Tile’ parameters transform the entire fly’s eye pattern.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_FlysEyeHex</td>
<td>Breaks the image into hexagon shaped tiles and transforms the image within each shape, to create a fly’s eye view effect.  Increase Edge Softness for a smoother overlap between the tiles.  The ‘Inside’ parameters transform the Source image before it is tiled into the pattern, and the ‘Tile’ parameters transform the entire fly’s eye pattern.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_FlysEyeRect</td>
<td>Breaks the image into rectangle shaped tiles and transforms the image within each shape, to create a fly’s eye view effect.  The ‘Inside’ parameters transform the Source image before it is tiled into the pattern, and the ‘Tile’ parameters transform the entire fly’s eye pattern.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Grain</td>
<td>Adds color and/or monochrome grain to the source clip.  Amplitude and frequency parameters allow adjusting the grain texture independently for all colors together, each color channel, or black and white grain.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_GrainStatic</td>
<td>Adds color and/or monochrome random noise of given amplitudes to every pixel of the source clip.  Unlike the other Grain effects, there is no coherency of the grain between pixels, so the resulting look will vary with different output resolutions.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_HalfTone</td>
<td>Generates a halftone version of the source clip using a black and white pattern of dots.  Use the Smooth Source parameter to remove some details and make the dots more consistently round.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_HalfToneColor</td>
<td>Generates a version of the source clip using a colored dot pattern.  Use the Smooth Source parameter to remove some details and make the dots more consistently round.  You can invert the dots pattern from CMY to RGB using the Dots menu.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_HalfToneRings</td>
<td>Generates a duotone version of the source clip using a repeating pattern of concentric rings.  Use the Smooth Source parameter to remove some details and make the dots more consistently shaped.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_JpegDamage</td>
<td>Creates a version of the Source input that is subjected to Jpeg compression artifacts and errors.  This can be used to give various looks of low quality digital transmissions.  Three methods for manipulating your image are provided: the Jpeg quality can be adjusted, various internal frequencies can be scaled, and random decompression errors can be introduced.  In all cases it can also be useful to lower the resolution factor to create larger, more obvious Jpeg blocks.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Kaleido</td>
<td>Reflects the source clip into a kaleidoscopic pattern of triangles, squares, diamonds, or octagonal shapes.  Use the Pattern menu to select different reflection patterns.  The ‘Inside’ parameters transform the Source image before it is reflected into the pattern.  The Center and Z Dist transform the entire result including the reflection pattern, and the Rotate affects only the reflecting ‘mirrors’.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_KaleidoPolar</td>
<td>Warps the source clip around in a disk shape and reflects radially as if viewed through a reflecting cylinder.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_KaleidoRadial</td>
<td>Simulates a traditional 2 or 3-mirror kaleidoscope.  You see a pie-slice shaped piece of the source through the angle between the mirrors, and mirror-reflected copies of it in the rest of the image.  Use the Slices parameter to control the how many copies of the source pie slice you see around the central point.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Mosaic</td>
<td>Generates a pixelated version of the source clip.  Adjust the size and shape of the blocks using the Pixel Frequency and Pixel Rel Height parameters.  Increase the Smooth Colors parameter to cause the colors of nearby pixel blocks to be more consistent, and less flickery over time.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Posterize</td>
<td>Generates a posterized version of the input by limiting the number of colors in the source, and replacing detailed texture and noise with solid colors.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_PseudoColor</td>
<td>Colorizes the source image.  The hue is calculated from the brightness of the source.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_PsykoBlobs</td>
<td>Combines the source clip with a field of ‘blob’ shapes and then passes them through a colorization process.  The Phase Speed parameter causes the colors to automatically rotate over time.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_PsykoStripes</td>
<td>Combines the source clip with a stripe pattern and then passes them through a colorization process.  The Phase Speed parameter causes the colors to automatically rotate over time.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_RomanTile</td>
<td>Generates a mosaic pattern based on the Source clip.  Adjust the Edge Attract parameter to get the tile corners to bias towards the edges in the source.  Increase Vary Shape to get a less regular tile pattern.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_ScanLines</td>
<td>Creates a version of the source clip with a scan line pattern resembling a color TV monitor.  Increase the Add Noise parameter to also add a grainy effect to the result.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_ScanLinesMono</td>
<td>A monochrome version of ScanLines.  Creates a version of the source clip with a scan lines pattern resembling a black and white TV monitor.  Increase the Add Noise parameter to also add a grainy effect to the result.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Sketch</td>
<td>Generates a version of the input with a hand drawn sketched look.  The results of this effect can depend on the image resolution, so it is recommended to test your final resolution before processing a clip.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Solarize</td>
<td>Inverts the colors of the input clip that are brighter than the Threshold value, to create a ‘solarization’ effect.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_StripSlide</td>
<td>Breaks a clip into strips and slides them off the screen one at a time to reveal the Background.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_TVDamage</td>
<td>Simulates a TV with transmission and reception problems, VCR issues, and TV hardware difficulties.  Simulates static, interference, ghosting, horizontal and vertical hold, hum bars, color stripes, visible scanlines, VCR fast-forward, dropouts, vignetting, orthicon, fisheye, and turn-off.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_TileScramble</td>
<td>Breaks the image into rectangular tiles and shifts the image within each tile to create an effect like a wall of small randomly oriented mirrors reflecting the source image.  The amount and direction of shifting are controllable.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Vignette</td>
<td>Darkens the border areas of the source clip to create a vignette effect.  Use the Squareness, Radius, and Edge Softness parameters to affect the shape of the vignette.  Use the Opacity and Color parameters to adjust its strength and color.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_VintageColor2Strip</td>
<td>Simulates the old color 2-strip film process from the 1920s.  The scene is exposed twice, through red and green filters, onto alternating frames of a monochrome film strip.  Then the red print is dyed with a red dye, and the green print is dyed cyan.  Those two strips are cemented together back-to-back to form the final print.  The result contains mostly red and green colors, with some synthetic blue from the blue components of the dyes.  <br> This effect simulates the two filter colors and the two dye colors, and also allows adding grain and color correction.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_VintageColor3Strip</td>
<td>Simulates the color 3-strip film process from 1935 through 1955.  Three-strip color was a subtractive process which exposed three separate film strips through color filters, then applied complementary color dyes to the print according to the density of the original records.  This process was used for many films such as The Wizard Of Oz, Fantasia, and Gone With The Wind.  <br> Modern color film has much broader color filtering in the emulsion layers, so this effect simulates the narrower filters and sharper colored dyes of the era which gave it its characteristic vibrancy.  This effect also allows adding grain and color correction.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_ZFogExponential</td>
<td>Mixes a fog color into the source clip using depth values from a ZBuffer input.  The fog starts at Z Near and increases exponentially to Z Far at a rate depending on the Fog Density.  The ZBuffer input will be solid black if not provided, so you should specify this input for this effect to do anything useful.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_ZFogLinear</td>
<td>Mixes a fog color into the source clip using depth values from a ZBuffer input.  The fog amount varies linearly between Fog Near and Fog Far as the depth varies between Z Near and Z Far.  The ZBuffer input will be solid black if not provided, so you should specify this input for this effect to do anything useful.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_Zebrafy</td>
<td>Modulates the brightness of the source clip with a sinusoid to give a black and white solarized look.</td>
</tr>
<tr>
<td>Stylize</td>
<td>S_ZebrafyColor</td>
<td>Modulates the brightness of the source clip with sinusoids for each color channel to give a color striped effect.</td>
</tr>
<tr>
<td><strong>Time</strong></td>
<td></td>
<td>Slow down or speed up time with the Sapphire Optical Flow retimer and a whole host of other time based effects that come with the Sapphire Time Unit.</td>
</tr>
<tr>
<td>Time</td>
<td>S_CutToDissolve</td>
<td>Turns a cut within a single clip into a dissolve.  No heads or tails are required; just set the cut point (frame) and CutToDissolve creates a dissolve around that point.  Note that this effect does not take two clips; just a single clip already containing a cut.  The Cut Point param is key to making it work; whatever frames are on either side of that will be treated as the cut, and the dissolve will be created around them.</td>
</tr>
<tr>
<td>Time</td>
<td>S_Feedback</td>
<td>The previous frames of the input clip are transformed and combined with the current frame to give a variety of effects inspired by video feedback.  The output of each processed frame is stored and then combined with the next frame.  The feedback is reinitialized whenever any non-consecutive frame is processed: either the first frame, reprocessing a given frame, or jumping to another frame.  You must process multiple frames of a clip in a row to observe the effect, and clearing your image cache before rendering may sometimes be necessary.</td>
</tr>
<tr>
<td>Time</td>
<td>S_FeedbackBubble</td>
<td>Similar to Feedback, previous frames are combined with the current frame while distorting by a bubble pattern.  The feedback is reinitialized whenever any non-consecutive frame is processed: either the first frame, reprocessing a given frame, or jumping to another frame.  You must process multiple frames of a clip in a row to observe the effect, and clearing your image cache before rendering may sometimes be necessary.</td>
</tr>
<tr>
<td>Time</td>
<td>S_FeedbackDistort</td>
<td>The previous frames of the input clip are distorted by the gradient of a given Lens input clip and combined with the current frame to give a variety of possible effects.  The output of each processed frame is stored and then combined with the next frame.  The feedback is reinitialized whenever any non-consecutive frame is processed, either the first frame, reprocessing a given frame, or jumping to another frame.  You must process multiple frames of a clip in a row to observe the effect, and clearing your image cache before rendering may sometimes be necessary.</td>
</tr>
<tr>
<td>Time</td>
<td>S_FieldRemove</td>
<td>Adaptively removes video field interlacing artifacts from areas with motion, without blurring the stationary parts of the image.  A ‘Motion Matte’ is generated internally and the moving areas are deinterlaced with the usual loss of vertical resolution, but the stationary areas are not deinterlaced and should remain sharp.</td>
</tr>
<tr>
<td>Time</td>
<td>S_Flicker</td>
<td>Scales the colors of the source clip by different amounts over time for a flickering effect.  The pattern of flickering can be random, a periodic wave, or a combination of the two.</td>
</tr>
<tr>
<td>Time</td>
<td>S_FlickerMatch</td>
<td>Adds flicker to the Source clip using the flicker from a second Match clip.  For example, a clip can be brightened in synchrony with a flashing light in another clip.  To use this effect, first position the corners of the rectangle over an area of the Match clip which has brightness changes you want to copy.  A middle or light gray area is best for this.  Then select a frame where you want the Source brightness unchanged, and hit the Set Match Level button.  When other frames are processed, the Source brightness will be scaled by the average Match brightness within the rectangle, relative to the Match Level.</td>
</tr>
<tr>
<td>Time</td>
<td>S_FlickerMatchColor</td>
<td>Adds color changes to the Source clip using the color changes from a second Match clip.  Similar to FlickerMatch but the process is applied to each color channel.  To use this effect, first position the corners of the rectangle over an area of the Match clip which has color changes you want to copy.  A middle or light gray area is best for this.  Then select a frame for which you want the Source color unchanged, and hit the Set Match Level button.  When you process other frames, the Source colors will be scaled by the average Match color within the rectangle, relative to the Match Color.</td>
</tr>
<tr>
<td>Time</td>
<td>S_FlickerMatchMatte</td>
<td>Adds flicker to the Source clip using the flicker from a second Match clip, in the areas specified by a Matte. To use this effect, select a frame where you want the Source brightness unchanged, and hit the Set Match Level button.  When other frames are processed, the Source brightness will be scaled by the average Match brightness within the Matte, relative to the Match Level.</td>
</tr>
<tr>
<td>Time</td>
<td>S_FlickerMchMatteColor</td>
<td>Adds color changes to the Source clip using the color changes from a second Match clip, in the areas specified by a Matte.  To use this effect, select a frame where you want the Source color unchanged, and hit the Set Match Color button.  When other frames are processed, the Source color will be scaled by the average Match color within the Matte, relative to the Match Color.</td>
</tr>
<tr>
<td>Time</td>
<td>S_FlickerRemove</td>
<td>Removes temporal flickering from the Source clip. For example, old footage with uneven exposure times can be smoothed out with this effect.  To use this effect, first position the corners of the rectangle over an area where the average brightness should remain constant.  A middle or light gray area is best for this.  Then select a Source frame that has the desired brightness within the rectangle, and hit the Set Hold Level button. When other frames are processed, their brightness will be scaled so the average brightness within the rectangle is equal to the Hold Level.  You can keyframe different Hold Level values over time to account for desirable brightness changes.</td>
</tr>
<tr>
<td>Time</td>
<td>S_FlickerRemoveColor</td>
<td>Removes temporal color changes from the Source clip.  Similar to FlickerRemove but the process is applied to each color channel.  To use this effect, first position the corners of the rectangle over an area where the average color should remain constant. A middle or light gray area is best for this.  Then select a Source frame that has the desired color within the rectangle, and hit the Set Hold Color button.  When other frames are processed, their colors will be scaled so the average color within the rectangle is equal to the Hold Color.</td>
</tr>
<tr>
<td>Time</td>
<td>S_FlickerRemoveMatte</td>
<td>Removes temporal flickering from the Source clip using a Matte clip to specify the area where the average brightness should remain constant.  To use this effect, select a Source frame that has the desired brightness within the Matte, and hit the Set Hold Level button.  When other frames are processed, their brightness will be scaled so the average brightness within the Matte is equal to the Hold Level.  You can keyframe different Hold Level values over time to account for desirable brightness changes.</td>
</tr>
<tr>
<td>Time</td>
<td>S_FlickerRmMatteColor</td>
<td>Removes temporal color changes from the Source clip using a Matte clip to specify the area where the average color should remain constant.  To use this effect, select a Source frame that has the desired color within the Matte, and hit the Set Hold Color button.  When other frames are processed, their color will be scaled so the average color within the Matte is equal to the Hold Color.</td>
</tr>
<tr>
<td>Time</td>
<td>S_FreezeFrame</td>
<td>Freezes motion for each duration of Freeze Frames.  For example if Freeze Frames is 5 and the source frames are: 1 2 3 4 5 6 7 8 9 10 11… the output frames would be: 1 1 1 1 1 6 6 6 6 6 11…</td>
</tr>
<tr>
<td>Time</td>
<td>S_GetFrame</td>
<td>Retrieves a specified frame from the source clip for each destination frame.  This is meant to be used by animating the value of Get Frame to speed up, slow down, or reverse the input clip in an arbitrary way as desired.</td>
</tr>
<tr>
<td>Time</td>
<td>S_JitterFrames</td>
<td>Each output frame receives a random frame between the current frame plus and minus the Jitter Frame Dist.  The jittering is random but repeatable.</td>
</tr>
<tr>
<td>Time</td>
<td>S_MotionDetect</td>
<td>For each frame, finds the difference between the frame and a frame before it.</td>
</tr>
<tr>
<td>Time</td>
<td>S_NearestColor</td>
<td>Collects pixel colors from the input clip’s frames that are closest to the given Match Color.  This can create, for example, a background-only image from a clip with objects moving over a blue or green-screen background.  It can also be used to accumulate the color of a moving object over a non-colored background.  The collected colors are reinitialized whenever any non-consecutive frame is processed, either the first frame, reprocessing a given frame, or jumping to another frame.  You must process multiple frames of a clip in a row to observe the effect, and clearing your image cache before rendering may sometimes be necessary.</td>
</tr>
<tr>
<td>Time</td>
<td>S_RandomEdits</td>
<td>Randomly re-edits the entire source clip.  The shuffling is random but repeatable.</td>
</tr>
<tr>
<td>Time</td>
<td>S_RepairFrames</td>
<td>Repairs one or more frames of a clip by replacing them with a time-warped version of the surrounding frames.</td>
</tr>
<tr>
<td>Time</td>
<td>S_Retime</td>
<td>Retimes a clip using optical flow based motion estimation and frame interpolation.</td>
</tr>
<tr>
<td>Time</td>
<td>S_ReverseClip</td>
<td>Reverses the frame order of a clip, and optionally also reverses the fields of each frame.</td>
</tr>
<tr>
<td>Time</td>
<td>S_ReverseEdits</td>
<td>Independently reverses segments of the input clip.  For example if Edit Frame Length is 5, and the input clip frames are: 1 2 3 4 5 6 7 8 9 10 11… the output frames would be: 5 4 3 2 1 10 9 8 7 6 15…</td>
</tr>
<tr>
<td>Time</td>
<td>S_TimeAverage</td>
<td>Each output frame is the average of multiple input frames: from the current frame, back to a given number of previous frames. This is similar to the Trails effect, except all frames within the range are weighted equally instead of fading out, so the end points of the trails are abrupt.  Each frame contributes only 1/n of the total brightness, so fast-moving objects against a dark background may seem dim.  The average is reinitialized whenever any non-consecutive frame is processed: either the first frame, reprocessing a given frame, or jumping to another frame.  You must process multiple frames of a clip in a row to observe the effect, and clearing your image cache before rendering may sometimes be necessary. This effect does not work properly if processed on fields.  Please be sure to process on frames.</td>
</tr>
<tr>
<td>Time</td>
<td>S_TimeDisplace</td>
<td>Displaces the Source clip by variable amounts in time depending on the brightness values of a Matte input.</td>
</tr>
<tr>
<td>Time</td>
<td>S_TimeSlice</td>
<td>Divides the output frame into slices, where each slice receives a different frame from the source clip.  An example use of this effect might be to make a turning object twist into a helix shape instead of rigidly rotating.  The slices are oriented depending on Slice Direction, and receive relative frame numbers between plus and minus half of Slice Number.  For example if the current frame number is 30, Slice Direction is -90 degrees, Slice Number is 12, and Frame Offset is 0, the result will consist of horizontal slices containing approximately frames 30-6 to 30+6 from bottom to top.</td>
</tr>
<tr>
<td>Time</td>
<td>S_TimeWarpRGB</td>
<td>Shifts the red, green, and blue channels in time by different amounts, to give a temporal chroma distortion.</td>
</tr>
<tr>
<td>Time</td>
<td>S_Trails</td>
<td>The previous frames of the input clip are combined with the current frame to give a variety of ‘time trails’ effects.  The output of each processed frame is stored and then combined with the next frame.  The trails are reinitialized whenever any non-consecutive frame is processed, either the first frame, reprocessing a given frame, or jumping to another frame.  You must process multiple frames of a clip in a row to observe the effect, and clearing your image cache before rendering may sometimes be necessary.</td>
</tr>
<tr>
<td>Time</td>
<td>S_TrailsDiffuse</td>
<td>The previous frames of the input clip are processed with a pixel diffusion process and then combined with the current frame.  The output of each processed frame is stored and then combined with the next frame.  The trails are reinitialized whenever a non-consecutive frame is processed, either the first frame, reprocessing a given frame, or jumping to another frame.  You must process multiple frames of a clip in a row to observe the effect, and clearing your image cache before rendering may sometimes be necessary.</td>
</tr>
<tr>
<td><strong>Transitions</strong></td>
<td></td>
<td>Never worry again about a lack of high-quality transitions with Sapphire Transition Unit.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_CardFlip</td>
<td>Transitions between two clips by sliding or spinning the outgoing clip to reveal the incoming clip behind it. The Amount parameter should be animated to control the transition speed. Adjusting Revolutions and Shift will give different kinds of transitions.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_Dissolve</td>
<td>A basic cross fade between two input clips.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveAutoPaint</td>
<td>Fade in a ‘paint-brushed’ version of the starting clip.  Decrease the complexity of the painting until it is just a few colors, then transition to a ‘paint-brushed’ version of the second clip which then grows in color and complexity until the second clip fades in.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveBlur</td>
<td>Transitions between two input clips while blurring each.  The first clip is blurred and faded out while the second clip is unblurred and faded in.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveBubble</td>
<td>Transitions between two input clips using a bubble warping function.  The first clip is warped away and faded out while the second clip is unwarped into place and faded in.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveDefocus</td>
<td>Transitions between two input clips while defocusing each.  The first clip is defocused and faded out while the second clip is brought into focus and faded in.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveDiffuse</td>
<td>Transitions between two input clips by scrambling the pixels of the inputs within an area determined by Max Amount.  The first clip is diffused away while the second clip is diffused into place.  The Dissolve Percent parameter should be animated to control the transition speed.  The pixelated look of this effect depends on the image resolution, so it is recommended to test your final resolution before processing.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveDistort</td>
<td>Transitions between two input clips while distorting each using the gradient of the other.  The first clip is warped away and faded out while the second clip is unwarped into place and faded in.  The Dissolve Percent parameter should be animated to control the transition speed.  Note that the Background input must be provided or this effect will just perform a simple dissolve without any distortion.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveEdgeRays</td>
<td>Transitions between two input clips using animated edge rays.  The clips dissolve into each other, and edge rays are added to the result.  The edge rays ramps up and down over the duration of the effect.  The edge rays animate by moving the origin of the edge rays across the screen along a line.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveFilm</td>
<td>Transitions between two input clips using a film dissolve with selectable gamma.  Film dissolve preserves the highlights in the clips longer compared to a regular dissolve.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveFlashbulbs</td>
<td>Simulates lots of flashbulbs going off while dissolving between two clips.  With many small flashes, can look like a stadium scene.  With a few large flashes, works well on a celebrity red carpet clip.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveGlare</td>
<td>Transitions between two input clips using animated glares.  The clips dissolve into each other, and glares are added to the result.  The glare size and brightness ramps up and down over the duration of the effect.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveGlint</td>
<td>Transitions between two input clips using a bright glowing glint.  The clips dissolve into each other, while each one gets a glint which ramps up and down over the duration of the effect.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveGlintRainbow</td>
<td>Transitions between two input clips using a bright glowing glint.  The clips dissolve into each other, while each one gets a glint which ramps up and down over the duration of the effect.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveGlow</td>
<td>Transitions between two input clips using a bright glowing flash.  The clips dissolve into each other, while each one gets a glow which ramps up and down over the duration of the effect.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveLensFlare</td>
<td>Transitions between two input clips using an animated lens flare.  The clips dissolve into each other, while a lens flare moves along a straight line.  The lens flare grows and shrinks over the duration of the effect.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveLuma</td>
<td>Transitions between two input clips using a pattern derived from their luminances.  One clip often appears to emerge through the other.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolvePuddle</td>
<td>Transitions between two input clips while warping by a circular pattern of waves.  The first clip is warped away and faded out while the second clip is unwarped into place and faded in.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveRays</td>
<td>Transitions between two input clips using animated rays.  The clips dissolve into each other, and rays are added to the result.  The rays ramp up and down over the duration of the effect.  The rays animate by moving the origin of the rays across the screen along a line.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveShake</td>
<td>Transitons between two clips by applying a shaking motion to them, along with a quick dissolve.  The shaking uses translation, zooming, and/or rotation.  It is random but repeatable, so with the same parameters the same shaking motion is generated each time.  Turn on Motion Blur and adjust the Mo Blur Length for different amounts of blur.  Adjust the Amplitude and Frequency for different shaking speeds and amounts.  The Rand parameters give detailed control of the random non-periodic shaking, and the Wave parameters adjust the regular periodic shaking.  The X, Y, Z, and Tilt parameters control the horizontal, vertical, zoom, and rotation amounts of shaking respectively.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveSpeckle</td>
<td>Transition between two input clips using a speckled noise pattern.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveStatic</td>
<td>Transitions between two input clips using random pixel static.  The Dissolve Percent parameter should be animated to control the transition speed.  The pixelated look of this effect depends on the image resolution, so it is recommended to test your final resolution before processing.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveTiles</td>
<td>Transitions between two input clips while breaking each up into tiles and scrambling them. The first clip breaks apart and spreads out while the second clip coalesces behind the first.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveVortex</td>
<td>Transitions between two input clips using a vortex warping function.  The first clip is warped away and faded out while the second clip is unwarped into place and faded in.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveWaves</td>
<td>Transitions between two input clips using a waves warping function.  The first clip is warped away and faded out while the second clip is unwarped into place and faded in.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_DissolveZap</td>
<td>Transition between two clips using animated lightning bolts.  The clips dissolve into each other, while the lightning grows.  The Dissolve Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_FilmRoll</td>
<td>Transitions between two clips by rolling one off screen vertically while rolling the other on, while applying various film damage effects such as shaking, stains, scratches, and flicker.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_FlutterCut</td>
<td>Transitions between two clips by rapidly cutting back and forth between them, optionally inserting solid colored or inverted frames as well. The cuts of each clip can get longer or shorter over the length of the transition.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_StripSlideTransition</td>
<td>Transitions between two clips by breaking them into strips and sliding them off the screen one at a time to reveal the incoming clip.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_Swish3D</td>
<td>Dissolves between two input clips while performing 3D moves on each.  During the transition the From clip is transformed by the Zdist, Rotate, Swivel, Tilt, Shift, Scale, and Shear parameters, and the To clip is transformed by the opposite of these values.  The overall amount of motion for each image can be scaled by the Rel Amp From and Rel Amp To parameters.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_SwishPan</td>
<td>Transitions between two input clips by sliding one clip off the frame and the other clip on, and adding motion blur to give the appearance of a quick pan.  This works best when the duration of the transition is short.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_TVChannelChange</td>
<td>Transitions between two input clips by simulating a channel change on an old television set.  The first clip goes black with bad reception, followed by the second clip with bad reception.  The reception improves over time until only the second clip is left.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeBlobs</td>
<td>Performs a wipe transition between two input clips using a pattern of blobs generated by a noise function.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Grad Add parameter to make the timing of the blobs pattern move across the screen during the wipe.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeBubble</td>
<td>Wipes between two input clips with a bubble-warp process performed within the transition area.  The Wipe Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeCells</td>
<td>Performs a wipe transition between two input clips using a pattern of procedurally generated cellular shapes.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Grad Add parameter to make the timing of the cells pattern move across the screen during the wipe.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeChecker</td>
<td>Performs a wipe transition between two input clips using a grid of growing or shrinking checkers.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Grad Add parameter to make the timing of the checker pattern move across the screen during the wipe.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeCircle</td>
<td>Performs a wipe transition between two input clips using a growing or shrinking circle.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeClock</td>
<td>Performs a clock wipe transition between two input clips.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeClouds</td>
<td>Transitions from the first clip to the second using a moving cloud texture.  The Wipe Percent parameter should be animated to control the transition speed.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeDiffuse</td>
<td>Wipes between two input clips with a pixel-diffusion process performed within the transition area.  The Wipe Percent parameter should be animated to control the transition speed.  The pixelated look of this effect depends on the image resolution, so it is recommended to test your final resolution before processing.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeDots</td>
<td>Performs a wipe transition between two input clips using a grid of growing or shrinking dots.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Grad Add parameter to make the timing of the dots pattern move across the screen during the wipe.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeDoubleWedge</td>
<td>Performs a wipe transition between two input clips using two wedge shapes.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeFlux</td>
<td>Performs a wipe transition between two input clips using a flux texture with mostly round cells.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Grad Add parameter to make the timing of the flux pattern move across the screen during the wipe.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeFourWedges</td>
<td>Performs a wipe transition between two input clips using a pattern of four wedges merging into an ‘X’ shape.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeLine</td>
<td>Performs a simple line wipe transition between two input clips.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeMoire</td>
<td>Performs a wipe transition between two input clips using a pattern of combined concentric rings.  The Wipe Percent parameter should be animated to control the transition speed.  The Phase Speed and Moire Speed parameters cause the rings to automatically animate over time.  Increase the Grad Add parameter to make the timing of the pattern move across the screen during the wipe.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipePixelate</td>
<td>Transitions between two input clips by adding blocks of pixels of one clip onto another in a semi-random order.  The Wipe Percent parameter should be animated to control the transition speed.  Adjust the Edge Width and Chunky parameters for different pixelated patterns.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipePlasma</td>
<td>Performs a wipe transition between two input clips using a plasma texture with moving tendrils.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Grad Add parameter to make the timing of the plasma pattern move across the screen during the wipe.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipePointalize</td>
<td>Transitions between two input clips by adding brush-like polygon shapes from one clip onto another in a semi-random order.  The Wipe Percent parameter should be animated to control the transition speed.  Adjust the Frequency to change the size of the shapes, and adjust the Edge Width and Chunky parameters for different patterns.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeRectangle</td>
<td>Performs a wipe transition between two input clips using a growing or shrinking rectangle.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeRings</td>
<td>Performs a wipe transition between two input clips using a pattern of concentric rings.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Grad Add parameter to make the timing of the rings pattern move across the screen during the wipe.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeStar</td>
<td>Performs a wipe transition between two input clips using a star shape.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeStripes</td>
<td>Performs a wipe transition between two input clips using a series of stripes.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Grad Add parameter to make the timing of the stripe pattern move across the screen during the wipe.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeTiles</td>
<td>Performs a wipe transition between two input clips using a pattern of growing or shrinking hexagons, triangles, diamonds, or stars.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Grad Add parameter to make the timing of the tile pattern move across the screen during the wipe.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeWeave</td>
<td>Performs a wipe transition between two input clips using a texture resembling perpendicular woven strands.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Grad Add parameter to make the timing of the weave pattern move across the screen during the wipe.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
<tr>
<td>Transitions</td>
<td>S_WipeWedge</td>
<td>Performs a wipe transition between two input clips using a wedge shape.  The Wipe Percent parameter should be animated to control the transition speed.  Increase the Border Width parameter to draw a border at the wipe transition edges.</td>
</tr>
</tbody>
</table>
