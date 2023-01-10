{
"date": "2019-06-12",
"title": "BCC Noise Map 2",
"category": "BCC Textures",
"link": "bcc-noise-map-2/"
}

 ### [![Noise Map 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Noise-Map-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Noise-Map-2.jpg)


### Overview


The Noise Map 2 filter uses a 3 dimensional Noise Map to generate auto-animating monochrome textures for use as backgrounds, mattes, or alternate sources to control other filters.  The filter generates multiple layers of noise and superimposes them to produce the output texture.


The biggest difference between Noise Map 2 and other noise map filters on the market is Noise Map 2’s ability to use an alternate layer or synthetic shape to modulate various aspects of the mapping. Pushing points around in the “Noise Space” based on modulation settings produces a lot of interesting textures.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Scale:**This scales all layers of the noise output.


**Intensity, Reference Level, and (Texture Geometric) Wrap Mode:** These controls determine how the output of the noise map is converted to the rendered monochrome image. The reference level is subtracted from the map value, and the result multiplied by the intensity. The result is converted to monochrome level based on the wrap setting. The default setting is to wrap in both directions, creating an effect that gets more complex as intensity is increased passed 100. You can also turn wrapping off, creating a an effect that contains more extreme values (levels of 0 or 255) as intensity is increased, or wrap only positive or negative values, which will result in large black or white areas as intensity is pushed.


You may want to start by leaving Reference Level and Wrap Mode at their default values.


 


**Texture Geometrics Group**


The **Texture** **Geometrics** group controls the geometry of the initial layer of noise.


**Aspect:**Stretches the effect vertically. Aspect is applied before rotation. If the effect is rotated, aspect scales normal to the rotation.


**Offset X/Y:**Offsets the effect. The units of this control are not directly related to image size.


**Anchor:**Sets the anchor point around which the effect can be scaled or rotated.


**Rotation:**Rotates the effect. Applied after aspect and offset.


**Use Improved Noise:**Uses an improved Noise Algorithm, but feel free to turn it off and see if you like the result.


**Noise Type:**This sets the overall look of the Noise.


**Seed:**Seeds the random number generator that builds the 3d noise space that is used by the filter. **Animating this will result in jumps.**


**Interpolation:**Controls the mathematical algorithm that interpolates the noise. The default value of Spline gives the smoothest results, but you may find the others interesting.


**Turbulence:**This controls the number of layers of Noise. Increasing it makes the noise more complex and slower to render


 


**Turbulence Settings Group**


The **Turbulence Settings**group contains controls that determine how the extra layers created by turbulence are layered with the original noise layer.


**Feedback:**Mathematically**,**this feeds the noise output from each layer back into the Z value that is used to compute the noise for the next layer. Visually, it produces what might be described as a ‘gnarly’ look.


**Sub Scaling:**Controls the scaling of each layer of noise relative to the previous layer. If > 100, each layer is larger than the previous, if < 100, each layer is smaller.


**Turbulence Aspect:**Controls the aspect of each layer of noise relative to the previous layer. If > 100, each layer is scaled up in y (before rotation) than the previous, if < 100, each layer is scaled down in Y.


**Turb. Rotation:**Rotates each layer relative to the previous layer.


**Turb. Offset X and Y:**Offsets each layer relative to the previous layer.


**Turbulence Mix:**Controls the mix of each layer of noise with the previously rendered noise. Low values cause the turbulence to have very little effect. High values cause each layer to have more effect than the previous one, and also overdrive the output.


 


**Modulation Group**


You can use two different sources to modulate various aspects of the rendered texture which can generate very interesting results. Either of these can be taken from the luminance of a source track. The first modulation source can also be taken from a shape generator, which itself can be used as a filter.


**Modulation 1 Shape:**Determines the shape used for modulation 1. The other controls are enabled and named based on the shape setting. Some of the controls are common to multiple shapes’.  The following controls are used with all modulation shapes.


**Invert Modulation:**Inverts the modulation.


**View Modulation:**Renders the modulation source selected in the popup.


**Modulation** **Dest:**Determines the noise property that is modulated.


**Off:**No Modulation


**Displacement:**Modulation displaces the noise in the direction set by the **Disp. Angle** control at the bottom of the group.


**Z Displacement:**Displaces the noise source in the Z dimension in the noise space in which it is computed.


**Turbulence Scale:**Modulates the sub-scaling control described in the turbulence section, affecting the relative scaling of the noise layers on a point by point basis.


**Zoom:**Zooms the noise around a point which defaults to the effect center, and can be offset by adjusting the Zoom Rot Center control.


**Rotation:**Rotates the noise around the Zoom-Rot Center.


**Turbulence Amount:**Modulates the number of layers of noise (the Turbulence setting in the main group) on a point by point basis.


**Feedback:**Modulates the Feedback from the Turbulence group on a point by point basis.


**Turbulence Displacement, Z, Zoom, Rotation:**These apply the modulation only to the turbulence, not to the initial layer of noise.


**Fade to Black/White:**Fades the modulated pixels to black or white.


**Modulation** **Amount:**Determines the amount of modulation.


**Modulation** **Reference:**Determines the modulation level that is considered to be 0.


 


**Modulation Shapes**


**Off:**No modulation.


**Layer:**The layer (if any) selected in the modulation 1 layer picker is used and the **blur** slider blurs the modulation image.


**Layered Noise:**Creates two layers of scaled white noise.  Controls for this are:


**Anchor:**Sets the anchor point for scaling the Noise.


**Intensity 1 and 2:**Sets the intensity for each layer of the noise,


**Seed:**Seeds the random number generators. **Seed should not be animated.**You can make the noise evolve by animating **Morph** or by setting **Morph Rate**to a non-zero value.


**Scale 1 and 2:**Scales each layer of the Noise up. A value of 0 produces noise blocks that are 1 pixel on a side, higher values create larger noise blocks.


**Morph:**Smoothly morphs the patterns of white noise.


**Blur:**Blurs the noise.


**Morph Rate:**Automatically morphs the white noise. Setting Morph Rate to a non-zero value makes the noise self-animating.


**Ripple:**Creates a simple Ripple shape. The controls are similar to those found in the BCC Ripple filter. Note that you can choose from a variety of waveforms.


**Wave:**Creates a simple Wave shape. The controls are similar to those found in the BCC Wave filter. Note that you can choose from a variety of waveforms.


**Radial Wipe:**Creates a simple radial wipe shape.


**Ring:**Creates a simple ring shape.


**Linear Gradient:**Similar to the Linear Gradient in Pixel Chooser.


**Distance to Line:**Similar to the controls in Pixel Chooser. There is an additional control called Cutout, which turns off the pixels that are close to the line. Setting cutout to 100 makes the region black.


The **Modulation 2** controls allow you to use another layer to create additional modulation. The controls for Modulation 2 are the same as those for Modulation 1 when layer is selected as the source.


There are two additional controls at the bottom of the modulation group that are enabled for certain modulation destination choices.


**Zoom-Rotation Center**sets the center point if one of the zoom or rotation choices is used.


**Disp. Angle**sets the angle used for displacement if a displacement destination is selected.


 


**Animation Group**


These controls auto animate the filter:


**Flow Rate:**Causes the noise to flow through the image.


**Flow Direction:**Sets the direction of flow.


**Morph Start:**Sets the initial z coordinate for the lookup in the 3 dimensional noise space. Changing this changes the details of the image without changing its character.


**Morph Rate:**Auto-animates **Morph Start.**


The **Turbulence Settings** group contains controls that determine how the extra layers created by turbulence are layered with the original noise layer.


