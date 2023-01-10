{
"date": "2019-06-12",
"title": "BCC Posterize Time",
"category": "BCC Time",
"link": "bcc-posterize-time/"
}

 ### Overview


Posterize Time can be used to create strobe effects by altering the frame rate of the source media and adjusting the length of time for which each frame is displayed. You can also use apply modes and the PixelChooser to mix the time-posterized output with the original in various ways.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


* Warning: You can apply the Posterize Time filter directly to the clip that you want to strobe; however, the duration of the effect is then limited to the duration of the filtered clip. To create an effect that is longer than the duration of the source media, follow the steps described in the BCC Looper filter, [click here](/documentation/continuum/bcc-looper/).


**Legacy Posterize Behavior:** Enabling this checkbox offsets the start posterized frame by half.


**Frame** **Separation** sets which frames display and the duration each frame is held. For example, if Frame Separation is 10, every tenth frame (frame 0, 10, 20, and so on) displays for 10 frames for the duration of the clip. Increasing Frame Separation reduces the number of frames from the source media that display and increases the time that each frame stays on-screen. When Frame Separation is 1, the sequence plays at its normal frame rate.


Select the **Lock to Whole Numbers checkbox** to round Frame Separation values to the nearest whole number.


The **Time Mix Mode menu** affects what happens when Time Width is reduced from the default of 100. The Time Width sets the percentage of the time for which the output is the unmixed Poster Frame.


* *Original* is the default choice. Reducing Time Width from 100 replaces the posterized frame with the original image as you move away from the actual time of the frame. Reducing Time Width to 0 removes the posterization completely. Time Falloff determines the smoothness of this transition.
* *Dissolve* dissolves the output from one posterized frame to the next when Time Width is reduced. Time Falloff is ignored.
* *Transparency* mixes the posterized frame with transparency as Time Width is reduced. Time Falloff works as it does with Original.
* When the Time Mix menu is *Off*, the Time Width and Falloff controls have no affect.


**Time Width** mixes the time-posterized output with the source image by alternately outputting some frames at their normal frame rate and outputting other frames at the time- posterized frame rate (determined by the Frame Separation value).The Time Width value is expressed as a percentage in which 0 represents the normal frame rate and 100 the time- posterized rate. For example, if Frame Separation is 10 and Time Width is 50, the first five frames play at their normal frame rate, followed by 5 frames at the time-posterized frame rate. This creates the appearance of real-time motion alternating with strobe motion.


**Time Falloff** creates dissolves between the source frames and the time-posterized frames when Time Width is used. Increasing Time Falloff increases the number of frames in each dissolve, smoothing the transitions between real-time motion and strobe motion.


The **Apply Mode menu** sets the apply mode used to composite the time-posterized output over the original source media.  For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** blends the Apply Mode setting with the Apply Mix From menu setting. The resulting mixed mode is used to composite the time-posterized output over the original source media. For example, if Apply Mode is set to Lighten and Apply Mix From is set to Normal, then Apply Mix blends the Lighten and Normal apply modes. In this case, an Apply Mix setting of 0 uses the Normal apply mode, and an Apply Mix setting of 100 uses the Lighten apply mode. An Apply Mix setting of 50 blends the two apply modes equally.


* Note: You can use Apply Mix to soften the effect of a given apply mode, or to animate from one apply mode to another over time.


**Mix with Original** blends the filtered output with the original source image. Use this parameter to scale down or animate the effect of the filter without adjusting individual parameters.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 