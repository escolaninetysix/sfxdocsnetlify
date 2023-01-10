{
"date": "2019-06-12",
"title": "BCC Motion Tracker FCP",
"category": "Nested Subgroup",
"link": "bcc-motion-tracker-fcp/"
}

 [![MotionTracker](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MotionTracker.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MotionTracker.jpg)


### 


#### *As of Continuum 2019, the older Legacy BCC Motion Tracker as has been deprecated.  This page contains documentation for the legacy BCC Motion Tracker found in Continuum 11 and older.  For motion tracking in Continuum 2019 and beyond, please refer to the main [BCC Mocha Motion Tracker](/documentation/continuum/bcc-motion-tracker) documentation.*


### Overview


The Motion Tracker parameter group allows you to track the motion of an object in a media file. You can then use the motion path data to control another aspect of the effect. The parameters that can be affected depend upon the filter. For example, apply a Pyramid Blur filter to a clip and use the Motion Tracker parameters to track a logo on a t-shirt. Use the PixelChooser parameters to apply the Pyramid Blur to obscure the logo. Or apply a Particle Emitter and use the tracker to sync the emitter point location to a moving object.


*Note: This help file describes the way the Motion Tracker Parameter Group works in Final Cut Pro X.  The Motion Tracker parameter group works differently in other hosts.*


**FCP X Configuration Tip:**


In order to have a smoother experience when using the BCC motion tracker’s Analysis Mode, it can sometimes be be useful to use either proxy media or set the Playback Quality to Better Performance.  The Use Proxy Media and Playback Quality settings are located in the Playback tab of the Final Cut Pro X Preferences Window.   It is possible to leave this window open while working in Final Cut Pro X when making frequent changes to these settings


**Brief Description of Controls**


The Motion Tracker parameter group includes the following controls. It is important that you also read the detailed sections “Understanding the Tracking Process” and “Tips when using the Motion Tracker” following this section. The Motion Tracker requires specific workflow considerations in each host so be sure to review the recommendations for you particular host carefully.


**Show Tracker Path:**enables the track indicators even when the **Tracker Analysis Mode** is disabled, thus allowing visualizing the tracking data while viewing the results of the applied tracker.


**Tracker Analysis Mode:**  Enable this control to begin motion tracking.  Be sure to move to the first frame of your clip before you enable this option so that you set your starting tracker location at the first frame.  Then if you press Play/spacebar or step through the media, the filter calculates the tracking data. When you select this checkbox, the chosen effect does not display but you instead see the results of the tracking process overlaid on the tracking source layer. Once you finish computing the tracking data you must then TURN OFF the Tracker Analysis Mode to return to normal effect operations.


* Note: See the “Understanding the Tracking Process” section to learn more about the Tracker Analysis workflow.


**Tracker Center:**  Use the Tracker Center control to define the center of the region which will be tracked.


* Note: See the “Understanding the Tracking Process” section to learn how to use the Tracker Center to adjust tracking during an effect.


**Tracker Channel:**controls which channel of the source media is used when analyzing motion. Some footage may have more distinctive features suitable for tracking in alternate channels.


**Target Width:** sets the size of the target to be tracked. A white outline indicates the selected area.


**Search Width:** sets the size of the area searched on each frame during the tracking process. Objects containing faster motion may need a larger search area.


**Smooth Motion:** allows averaging out small noise/bumps in the tracker path to create an overall smoother trajectory. Higher values produce greater amounts of smoothing.


**Offset X** and **Offset Y:** offset the effect on the X and Y axis respectively. This is useful if you want to track one area, then apply the effect to a different area. For example, you want to blur out an athlete’s name on a t-shirt but don’t want to blur the player’s number. However, the player ‘s number offers more contrast and is therefore easier to track. You would track the number, then offset the effect to obscure the name.


**Tracker Influence:**  allows blending between the position of the tracked object and the value of the normal position picker to which the tracker has been applied. This for example allows a point to maintain part of the character of its original setting while also being partially affected by the tracked motion path.


**Extrapolate Motion:** menu determines how the position calculated for the tracker behaves in regions before and/or after the frames actually tracked.


**Start Tracking Frame:** provides an offset if you wish the tracking to begin on a frame other than the first frame.


**End Tracking Frame:** allows terminating the tracking prior to the end of the clip if desired.


**Look Ahead Frames:** specifies the maximum number of frames the tracker can be advanced from the last rendered frame without triggering a warning message. Higher values allow you to skip farther ahead in the timeline while still maintaining successful tracking but they require you to wait for the tracker to compute the track on all intervening frames so if this control is set too high you may experience delays when jumping ahead in the timeline while the tracker catches up.


**Understanding the Tracking Process**


Motion Tracking is a powerful feature, but it can be complicated especially with some limitations that exist in certain hosts. To understand best how to track, you need to understand the Tracker Analysis Mode and Tracker Center control.


**Setting up your Effect**


1. Place the current-time indicator on the first frame of your effect.


2. Enable the **Tracker Analysis Mode.**


3. Set the Tracker Center position to the region you would like to track and adjust the Target Width and Search Width if desired.


4. Adjust the other Motion Tracking parameters as necessary. See “Tips for Setting Up the Target Area” for more information.


5. Tracking needs to proceed in order from the beginning to the ending of the clip. You can jump ahead from the starting frame or a previously tracked frame as long as you don’t jump farther than the value set in the Look Ahead Frames parameter. The easiest way to track is to hit the spacebar to play through the footage frame by frame. Alternatively you can step through the footage jumping ahead by no more than the number of frames set frames in the Look Ahead Frames parameter.  If you jump ahead in the timeline beyond the last tracked frame by more than the time specified in the Look Ahead Frames parameter a Rewind error message will be displayed. See “Understanding Error Messages when Tracking on the Fly” for more details in dealing with that situation.


6. If you wish to retrack after tuning the tracking parameters, be sure to hit the Reset button to clear the old tracking data if you have changed the search width, target width, color space, or accuracy since the previous tracking pass.




|  |
| --- |
| [![motion tracker center thing](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/motion-tracker-center-thing.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/motion-tracker-center-thing.jpg) |


**Resetting the Tracker Data**


If at any point you wish to regenerate the motion tracker data (e.g. after tweaking a param such as the Search Width or Tracker Channel) you can force the saved tracker data to be purged by making a tiny change to the Tracker Center control which will then allow you to retrack from scratch.


**Understanding the Onscreen Tracking Marks**


When Tracker Analysis Mode is enabled, the program renders a line along the bottom of the Composition window indicating the location of tracked frames. The line references the length of the edited source clip in the timeline. It is important to note that this line is actually rendered onto the image when you are in Tracker Analysis Mode mode. Make sure to turn off Tracker Analysis Mode before you render to disk or export your effect.


* A Red mark along the bottom of the Monitor window indicates the current position of the current-time indicator.
* Blue marks indicate keyframe locations. A keyframe location is any frame whose position differs from that of the previous frame. The first frame is always considered a keyframe. A frame where the center position differs from the previous frame is also considered a keyframe.


* Note: The blue onscreen marks are internal to the Motion Tracker. While the Motion Tracker considers these frames to be “keyframes”, these are different than the keyframes that are visible in your timeline.


* Green marks indicate the frames that have been tracked and are current (i.e. the location of the tracker center has not changed since the tracking data was generated).
* Magenta marks indicates frames which were tracked, but for which the tracker point has changed. This usually indicates a region that needs retracking (unless you are manually positioning the Tracker Center without making keyframes in your timeline).




|  |
| --- |
| [![Track On the Fly](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Track-On-the-Fly.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Track-On-the-Fly.jpg) |


* Note: When you track an effect, marks for each tracked frame draw on the left of the playhead because there is tracking data for these frames.


**Understanding Error Messages in Tracker Analysis Mode**


The most common error message you will see during tracking is “Look Ahead exceeded. Please rewind to Frame X of your clip.”


There are several things you can do while tracking that cause this error message to appear.


* If you jump forward in the effect farther than the amount allowed by the Look Ahead Frames parameter. This may happen when scrubbing in the timeline or when playing in the timeline if the host jumps forward too far in an attempt to maintain realtime playback.
* If you have partially tracked an effect, disabled Tracker Analysis Mode, and moved the current-time indicator past the tracked region before re-enabling Tracker Analysis Mode


When you get this error message, you need to perform the following steps.


1. Move the current-time indicator to the frame indicated in the message.


2. Increasing the value of the Look Ahead Frames parameter may minimize the instances of this tracker error.


**Working with the Tracker Center Control**


The **Tracker Center** position controls set up the area to track. Use the Tracker Center control to set up your tracking region, then adjust the Tracker Center position control if necessary for finetuning.


**Understanding How Keyframes Work in the Motion Tracker**


It is sometimes necessary to “help the tracker along” when it loses the object by keyframing the **Tracker Center** control. The motion tracker treats any frame as keyframed if the Tracker Center position at that frame is different from the track center at the previous frame. Keyframes appear in blue along the bottom of the preview when Track On The Fly is on.


If you have created two Tracker Center keyframes with different values and are not using Hold interpolation, the tracker will treat each point between these keyframes as being at a keyframe.


* Note: The onscreen marks are internal to the Motion Tracker. While the Motion Tracker considers the frames represented by the blue marks to be “keyframes”, these are different than the keyframes that are visible in your timeline.


**Adjusting Tracking During the Effect**


It may be necessary to adjust the tracking during an effect, as the tracking can become inaccurate when the tracked object changes orientation or is obscured by another object. The best way to deal with this is by keyframing the Track Center control. Note that the onscreen Tracker Center crosshair control does not follow the tracked object, but you can reset it to the location of the tracked object at any point in the effect


**Adjusting Tracking without Keyframes**


It is also possible to adjust tracking without using keyframes. However you should be careful working this way because if you make a mistake your effect could jump. To use this workflow you MUST set the Look Ahead Frames parameter to 0.


You can move the current-time indicator to the point where you lost tracking, adjust the tracker, and continue tracking, You will notice that the tracked frame markers turn from green to magenta when you do this. This indicates that the Tracker Center is different from the current value.


This method works unless you go back to an earlier frame with the Tracker Analyis Mode checkbox on. If you go back, the tracker retracks that frame using the new (incorrect for that frame) value of Tracker Cente, and the final render will jump. Since you haven’t saved the Tracker Center value for the start of the effect, you will have to re-enter it and retrack.


* Note: If you use this method, we recommend that you disable the Tracker Analysis Mode as soon as you finish tracking, so you don’t inadvertently change the tracker data.
* Note: The onscreen marks are internal to the Motion Tracker. While the Motion Tracker considers the frames represented by the blue marks to be “keyframes”, these are different than the keyframes that are visible in your timeline.


**Adjusting Tracking with Linear Keyframes**


Final Cut Pro users need to use Linear keyframes, as Final Cut Pro doesn’t support Hold keyframes. However, you need to be careful when doing this.


Put a Linear keyframe at the last frame before the tracker loses tracking, and another Linear keyframe at the point where the tracker loses tracking. Put a new keyframe at the location of the object where tracking was lost and proceed.


*It is essential that the two keyframes be exactly one frame apart.* Otherwise, the tracker assumes there are keyframes between them, and interpolates between the first keyframe (where the object was at the start of the effect), and the second keyframe, where the object is when tracking was lost. This causes the render to jump between these keyframes. To make a second adjustment you need two more keyframes.


For example, you set a tracker point at the beginning of your effect, make an adjustment at frame 30 and another at frame 60. With Hold keyframes you can put the first keyframe anywhere between the beginning and frame 29, the second keyframe at frame 30 and the third at frame 60. However, since Final Cut Pro does not support Hold keyframes, you need to put the first keyframe at frame 29, and the second at frame 30. You need another keyframe with same value as the one at frame 30 at frame 59, and then the final keyframe at frame 60.


* Note: The onscreen marks are internal to the Motion Tracker. While the Motion Tracker considers the frames represented by the blue marks to be “keyframes”, these are different than the keyframes that are visible in your timeline.


**Additional Tips For Using the Motion Tracker**


**Tips for Setting Up the Target Area:**


* A good Target area contains a high-contrast object with good vertical and horizontal edge definition. Ideally, you should find a pattern that is visible in every frame.
* The Target Width should be large enough to accommodate a good target image.


**Trimming Motion Tracked Effects**


When you trim a clip that has been motion tracked, the filters do not purge the tracked data. This means that if a clip is trimmed from the end, you do not need to do anything. If a clip is trimmed from the beginning (or if you slide the clip, which is the equivalent of trimming from the beginning and end), you can either compensate with the Tracker Time Offset control or force retracking by making a slight change to the Tracker Center control which will invalidate the previous track.


**Tracking Part of an Effect**


There may be times when you want the effect to follow the tracked object for only part of the effect. If you want the tracking to follow the object to a certain point in the effect and then hold at that point, stop the tracking when it reaches that point. The rendered effect will follow the object for as long as it has tracked, and then hold.


If you want the effect to hold steady for a while, and then pick up the object at a particular frame and start tracking it, follow the steps below.


1. Park the current-time indicator on the frame where you want to pick up tracking and add a **Tracker Center keyframe**.


2. Go back to the beginning of the effect, and add another Linear keyframe, setting its value to be a fraction of a pixel different from the value in step 1.


3. Track your effect. The tracker will now think that there are keyframes at every frame up to the one you set in step 1, so it won’t use any tracking data at that point in the effect. Once it reaches the second keyframe, it will track normally.


