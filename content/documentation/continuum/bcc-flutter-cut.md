{
"date": "2019-06-12",
"title": "BCC Flutter Cut",
"category": "BCC Transitions",
"link": "bcc-flutter-cut/"
}

 ### Overview


Flutter Cut produces a jumpy transition that cuts between the incoming and outgoing clips, with optional insertion of effects, colored frames, and alternate layers. The filter is always self–animating with no need to set keyframes.


* Warning: When applied as an effect (as opposed to as a single-track transition) the outgoing clip in has to be trimmed (or precomped) to the desired length in order for the effect to work properly.


The filter renders a sequence of clips that, by default, alternates between the incoming and outgoing clips in a pattern determined by the Outgoing Clip Settings and Incoming Clip Settings groups. The controls in the Colors group allow you to add a pattern of colors or alternate layers to the output sequence. The effect controls at the bottom allow you to add a couple of simple effects to selected clips in the output sequence.  The Flutter Cut effect produces (by design) a chaotic and rapidly changing output.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


* After Effects Usage: The Flutter Cut effect produces (by design) a chaotic and rapidly changing output. This output cannot always be properly evaluated using AE ptr or spacebar play on the computer monitor. This is because AE’s previews are single-buffered and subject to frame tearing.  To reliably avoid this issue you can preview the output on an external NTSC monitor or render the comp and open it in an AE footage window or in a Quicktime player or a similar app.


**Incoming Clip:** The filter is applied to the outgoing clip of the transition. This popup selects the incoming clip.


**Outgoing Clip Settings**: These settings determine the length of each sequence of frames from the outgoing clip and also control the initial fade-in.


**Outgoing Start Frames**: The number of consecutive frames from the outgoing clip in each sequence at the start of the effect.


**Outgoing End Frames:** The number of consecutive frames from the outgoing clip in each sequence at the end of the effect.


**Outgoing Acceleration**: The rate at which the number of consecutive outgoing frames changes from the Start setting to the End setting as the effect progresses. At the default setting of 100, this change takes the whole length of the effect, **Increasing Acceleration** causes the **End** setting to be reached before the end of the effect.


**Outgoing Fadeout**: This adds a dissolve from the outgoing clip to the **Flutter Cut** sequence, softening the start of the effect. At the maximum value of 100, this dissolve lasts for the whole length of the effect.


* Note: the effect always starts with a sequence of clips from the outgoing clip.


**Incoming Clip Settings**: These settings determine the length of each sequence of frames from the incoming clip and also control the final fade-in.


**Incoming Start Frames:** The number of consecutive frames from the incoming clip in each sequence at the start of the effect.


**Incoming End Frames**: The number of consecutive frames from the incoming clip in each sequence at the end of the effect.


**Incoming Acceleration**: The rate at which the number of consecutive incoming frames changes from the **Start** setting to the **End** setting as the effect progresses. At the default setting of 100, this change takes the whole length of the effect, **Increasing Acceleration** causes the start value to be held at the start of the effect , with a faster acceleration that starts later in the effect. All settings of this control will result in the number of consecutive frames reaching the end setting at the end of the effect.


**Incoming Fadein**: This adds a dissolve from the **Flutter Cut** sequence to the incoming clip, softening the end of the effect. At the maximum value of 100, this dissolve lasts for the whole length of the effect.


**Colors**: The controls in this group allow you to add a pattern of colors or alternate layers to the **Flutter Cut** sequence.


**Color 1**: The color inserted into the sequence when Color 1 Frames is > 0.


**Color 1 From**: An alternate layer that can be used instead of Color 1.


**Color 1 Order**: This determines where the color 1 frames appear in the Flutter Cut sequence. The choices are:


* *Before Incoming*: Color 1 frames are inserted before the start of each sequence of frames from the incoming clip.
* *After Incoming*: Color 1 frames are inserted after the end of each sequence of frames from the incoming clip.
* *After Outgoing*: Color 1 frames are inserted after the end of each sequence of frames from the outgoing clip.
* *After Both*: Color 1 frames are inserted after the end of each sequence of frames from either clip.
* *Off*: Color 1 is not used.


**Color 2 Controls:** These are identical to the Color 1 controls above. Note that if both colors are used, color 1 precedes color 2.


**Effect Type**: Selects an effect that can be applied to selected clips in the Flutter Cut sequence.  The choices are Invert, Monochrome, Invert-Monochrome, and None.


**Effect Target**: Determines the frames to which the effect is applied. The choices are None, Incoming, Outgoing, Both and Custom Pattern. Choosing the **Custom Pattern** option generates a pattern determined by the controls in the Effect Pattern group.


**Effect Pattern**:  The parameters in this group control the custom effect pattern generated when Effect Target is set to Custom Pattern.


**Normal Frames Before**: The number of unaffected frames before each sequence of frames to which the effect is applied.


**Effect Frames**: The number of consecutive frames to which the effect is applied.


**Normal Frames After**: The number of unaffected frames after each sequence of frames to which the effect is applied.


