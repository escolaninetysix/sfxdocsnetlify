{
"date": "2019-06-12",
"title": "BCC Motion Tracker Vegas",
"category": "Nested Subgroup",
"link": "bcc-motion-tracker-vegas/"
}

 [![MotionTracker](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MotionTracker.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MotionTracker.jpg)


### 


#### *As of Continuum 2019, the older Legacy BCC Motion Tracker as has been deprecated.  This page contains documentation for the legacy BCC Motion Tracker found in Continuum 11 and older.  For motion tracking in Continuum 2019 and beyond, please refer to the main [BCC Mocha Motion Tracker](/documentation/continuum/bcc-motion-tracker) documentation.*


### Overview


The Motion Tracker parameter group allows you to track the motion of an object in a media file. You can then use the motion path data to control another aspect of the effect. The parameters that can be affected depend upon the filter. For example, apply a Pyramid Blur filter to a clip and use the Motion Tracker parameters to track a logo on a t-shirt. Use the PixelChooser parameters to apply the Pyramid Blur to obscure the logo.


*Note: This help file describes the way the Motion Tracker Parameter Group works in Sony Vegas. The Motion Tracker parameter group works differently in other hosts.*


**Brief Description of Controls**


The Motion Tracker parameter group includes the controls. It is important that you also read the detailed sections **Understanding the Tracking Process** and **Tips** **when using the Motion Tracker** following this section.


Clicking the **Reset** **button** resets the Motion Tracker data from previous tracking passes.


* Warning: Resetting the Motion Tracker causes you to have to recompute your whole track, which could take time on a long clip with a large search region


[![BCC Vegas 1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-1.jpg)


The **External Data checkbox**will automatically be checked after loading an external tracker data file.  This checkbox indicates if you have external tracker data in your project.  Turning off the checkbox will clear your tracker data **which cannot be undone**.


Clicking the **Motion Tracker Help** button opens this .pdf format help file which is specific to **Sony Vegas**.


[![BCC Vegas 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-2.jpg)


**Working with the Motion Tracker Preprocess Parameters**


A good target region contains a high-contrast object with good vertical and horizontal edge definition. Ideally, you should find a pattern that is visible in every frame. If your image does not contain a high-contrast object to track, you can adjust the Preprocess parameters to make your source image easier to track. For example, you could increase the contrast for better results.


The **View Preprocessed Source** check box lets you view the preprocessed source image as you adjust it. When you select this checkbox, the chosen effect does not display in the Effect Preview window. Once you finish adjusting the Preprocess parameters, deselect this checkbox to view the applied effect.


* Warning: You should deselect the **View Preprocessed Source** check box before you select the **Track On-the-Fly** check box and begin tracking.


The **Input Black, Input White, Gamma** and **Blur-Sharpen** parameters adjust contrast and eliminate noise. Video shot at night or in poorly lit settings often contains noise in the dark areas which can interfere with accurate tracking. Increasing **Input Black** removes this noise by treating all areas darker than the**Input Black** setting as black. Washed out or overexposed images do not contain the full range of levels. Increasing**Input Black** and/or decreasing **Input White** can also boost the contrast of the image.


**Input Black** sets the channel values of the input image that are treated as pure black by the filter. For example, if **Input Black** is set to 50, all pixels with a value of 50 or less are output to a value of 0. The remaining values (50-255) are remapped to produce a smooth gradient from black to white.




|  |  |  |
| --- | --- | --- |
| [![levels.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg) | [![levels.inputblack.75](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputblack.75.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputblack.75.jpg) | [![levels.inputblack.125](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputblack.125.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputblack.125.jpg) |
| Input Black=0 | Input Black=75 | Input Black=125 |


**Input White** sets the channel values of the input image that are treated as pure white by the filter. For example, if Input White is set to 200, all pixels with a value of 200 or more are output to a value of 255. The remaining values (0-200) are remapped to produce a smooth gradient from black to white.




|  |  |  |
| --- | --- | --- |
| [![levels.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg) | [![levels.inputwhite.175](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputwhite.175.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputwhite.175.jpg) | [![levels.inputwhite.125](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputwhite.125.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputwhite.125.jpg) |
| Input White=255 | Input White=175 | Input White=125 |


**Gamma** controls the slope of the curve used to convert from the input color values to output values in pixels brighter than **Input Black** and darker than **Input White**. Increasing **Gamma** from the default of 100 lightens the image and decreases contrast, while decreasing **Gamma** darkens the image and increases contrast.




|  |  |  |
| --- | --- | --- |
| [![levels.gamma.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.gamma_.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.gamma_.50.jpg) | [![levels.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg) | [![levels.gamma.150](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.gamma_.150.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.gamma_.150.jpg) |
| Gamma =50 | Gamma=100 | Gamma=150 |


**Blur-Sharpen** blurs or sharpens your image. Decreasing negative values blur the image, which is useful to smooth noise that might interfere with tracking; increasing positive values sharpen the image, which can enhance objects that might be too blurry to track.


When the **Track On-the-Fly** check box is selected and you build a **Dynamic Ram Preview** of the region you are tracking and the filter calculates the tracking data. When you select this check box the chosen effect does not display. Once you finish tracking, deselect this check box to play the applied effect.


* Note: See the **“Understanding the Tracking Process”** section to learn how to Track on the Fly


The **Tracker Center KF** position controls set up the area to track. Use the Tracker Center KF control to set up your tracking region, then adjust the Tracker Center KF position control if necessary for fine tuning.


* Note: See the **“Understanding the Tracking Process”** section to learn how to use the Tracker Center KF to adjust tracking during an effect.


**Target Width** sets the size of the area to track. Increasing this value increases preview time but can increase the accuracy of the tracking. A white outline indicates the selected area.


The **Apply menu** determines which parameter the Motion Tracker data affects. The choices depend on the filter. When None is chosen the Motion Tracker data has no affect.


* Note: See the **Motion Tracker Features** in Certain Filters section for information on **Apply** menu choices that are specific to certain filters.


The **Offset X** and **Offset Y** parameters allow you to offset the effect on the **X** and **Y axis** respectively. This is useful if you want to track one area, then apply the effect to a different area. For example, you want to blur out an athlete’s name on a t-shirt but don’t want to blur the player’s number. However, the player’s number offers more contrast and is therefore easier to track. You would track the number, then offset the effect to obscure the name.


**Tracker Time Offset** shifts the tracker location through time which can be used in conjecture with trimmed clips to adjust by the trim amount and properly align the tracker.


**Understanding the Tracking Process**


Motion Tracking is a powerful feature but it can be complicated. To understand best how to track, you need to understand **Tracking on the Fly**, and the **Tracker Center KF** control.


**Using the BCC Motion Tracker**


A “Quickstart” suggested workflow for using BCC integrated motion tracker:


[![BCC Vegas 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-3.jpg)


Set Vegas **Dynamic Ram Preview** cache to a good amount of RAM (within the displayed amount).


* At times there may be insufficient RAM to build a Dynamic Ram Preview of the entire region to be tracked. This is especially common in the 32bit version of Sony Vegas and when using HD footage. Switching the resolution to half or quarter before tracking will generally provide sufficient memory to track the full clip. Alternatively, the clip can be tracked in chunks by re-starting the next chunk from a previously tracked frame in the previous pass.


[![BCC Vegas 4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-4.jpg)


1.) Apply the BCC Effect


[![BCC Vegas 5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-5.jpg)


2.) **Select the Loop Region** for the area to be tracked (from beginning of video event forward) **placing timeline cursor on the first frame**


* Warning: Timeline Cursor must be placed on the First Frame.


[![BCC Vegas 6](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-6.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-6.jpg)


3.) **Enable** the **Track On-the-Fly** check box (to put the tracker in analyze mode)


[![BCC Vegas 7](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-7.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-7.jpg)


4.) **Set up tracker** by positioning Tracker Center, adjusting Target and Search Width, selecting Input Channel. In **Sony Vegas** you can fine tune position of a point control by holding down the Control Key while adjusting the position


[![BCC Vegas 8](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-8.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-8.jpg)


5.) From the Vegas Pro Tools menu, choose **Build Dynamic RAM Preview** (motion tracker will start tracking)


[![BCC Vegas 9](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-9.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-9.jpg)


6.) **Set the** **Apply popup menu** to the parameter the tracking data should be applied to


[![BCC Vegas 10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-10.jpg)


7.) **Disable the** **Track On-the-Fly** check box (tracker will be applied to effect parameter in final effect output)


8.) If you wish to retrack after tuning the tracking parameters, be sure to hit the Reset button to clear the old tracking data if you have changed the search width, target width, color space, or accuracy since the previous tracking pass.


**Clear Render Cache Button**


In order for the motion tracker integrated into many BCC effects to work properly it must analyze the frames to be tracked sequentially from the first frame in the effect segment forward.  If the “Track On-the-Fly” check box is enabled the motion tracker is in the analyze mode. When “Track On-the-Fly” is enabled and the motion tracker is on a frame where it has no tracking data for the preceding frame, a message will appear over the effect output image saying:


“Move the current-time marker to a previously tracked frame and click the Clear Render Cache button. Resume tracking from that point.”


This can happen if the Vegas Pro timeline cursor is not on the first frame of the effect when Track On-the-Fly is first enabled or if somehow the timeline cursor jumps forward into the middle of an untracked area while Track On-the-Fly is enabled. **In order to do more tracking in the effect once the message has been displayed it is necessary to go to the first frame (or another frame where the message is not displayed) and click the “Clear Render Cache” button** before Building a Dynamic Ram Preview to begin the tracking analysis. This button will force Vegas Pro to clear it’s rendered frame cache for that effect (thereby clearing the overlay message which would be misleading and interfere with tracking if it were still present).


[![BCC Vegas 11](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-11.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/BCC-Vegas-11.jpg)


**Muted (disabled)** **video tracks above effect** using BCC motion tracking


* Warning: **Currently BCC motion tracking analysis will not work if there is a muted video track in the timeline above the track in which** **the** BCC effect is applied.


The workaround is to enable any higher video tracks when using Track On-the-Fly, or to temporarily move the BCC effect track above any muted tracks while using Track On-the Fly. This problem only applies to the analysis phase of motion tracking and once the analysis is finished the motion tracking result will render correctly even if there is a muted video track above the effect. BorisFX is working with Sony to resolve this in a future Vegas Pro update.


**Understanding Track on the Fly**


When the Track On-the-Fly check box is selected and you build the Dynamic Ram Preview the filter calculates the tracking data.


**Understanding the On screen Tracking Marks**


When **Track on the Fly** is enabled, the program renders a line along the bottom of the **Composition** window indicating the location of tracked frames. The line references the length of the original source clip. It is important to note that this line is actually rendered onto the image when you are in **Track on the Fly** mode. Make sure to turn off **Track on the Fly** before you render to disk or export your effect.


* A *Red* mark along the bottom of the window indicates the current position of the
current-time marker.
* *Blue* marks indicate keyframe locations. A keyframe location is any frame whose position differs from that of the previous frame. A frame where the center position differs from the previous frame is also considered a keyframe.


* Note: The blue on screen marks are internal to the Motion Tracker. While the Motion Tracker considers these frames to be “keyframes”, these are different than the keyframes that are visible in your timeline.


* *Green* marks indicate the frames that have been tracked and are current (i.e. the location of the tracker center has not changed since the tracking data was generated).
* *Magenta* marks indicates frames which were tracked, but for which the tracker point has changed. This usually indicates a region that needs re-tracking (unless you are manually positioning the Tracker Center KF without making keyframes in your timeline).


A Red mark along the bottom of the Monitor window indicates the current position of the current-time indicator.


**Understanding the Onscreen Tracking Marks**


When Track on the Fly is enabled, the program renders a line along the bottom of the Composition window indicating the location of tracked frames. The line references the length of the edited source clip in the timeline. It is important to note that this line is actually rendered onto the image when you are in Track on the Fly mode. Make sure to turn off Track on the Fly before you render to disk or export your effect.


* Blue marks indicate keyframe locations. A keyframe location is any frame whose position differs from that of the previous frame. The first frame is always considered a keyframe. A frame where the center position differs from the previous frame is also considered a keyframe.


* Note: The blue onscreen marks are internal to the Motion Tracker. While the Motion Tracker considers these frames to be “keyframes”, these are different than the keyframes that are visible in your timeline.


* Green marks indicate the frames that have been tracked and are current (i.e. the location of the tracker center has not changed since the tracking data was generated).
* Magenta marks indicates frames which were tracked, but for which the tracker point has changed. This usually indicates a region that needs retracking (unless you are manually positioning the Tracker Center KF without making keyframes in your timeline).




|  |
| --- |
| [![Track On the Fly](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Track-On-the-Fly.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Track-On-the-Fly.jpg) |


* Note: When you track an effect, marks for each tracked frame draw on the left of the current-time marker because there is tracking data for these frames.


**Understanding Error Messages when Tracking on the Fly**


The most common error message you will see during tracking is a Please Move the Current-Time Marker…error message.


There are several things you can do while tracking that cause this error message to appear.


* If you jump forward in the effect past the end of the tracked region.
* If you play, but don’t play every frame. (Preview to Ram with Shift-0).
* If you have partly tracked an effect, disabled Track on the Fly, and moved the current-time marker past the tracked region before re-enabling Track on the Fly.
* This message will sometimes appear when you press the space bar to stop playback.  When this happens, the tracker render for the current frame is interrupted. You just need to back up one frame (and follow the on screen directions to clear the cache) to continue.


**When you get this error message, perform the following steps**


1.) Move the current-time marker to a previously tracked frame in your effect.


2.) Clear the cache that **Sony Vegas** has created for the effect. To clear the cache, press the **Clear Render Cache button**. If you try to re-track without completely clearing the cache, the motion tracker will not work when it reaches the frame that displayed the error message because **Sony Vegas** has already cached the frame that displayed the error message.


**Working with the Tracker Center KF Control**


 **The Tracker Center KF** position control sets up the area to track. Use the Tracker Center KF control to set up your tracking region, then adjust the Tracker Center KF position control if necessary for fine tuning.


**Understanding How Keyframes Work in the Motion Tracker**


It is sometimes necessary to “help the tracker along” when it loses the object by keyframing the **Tracker Center KF** control. The motion tracker treats any frame as keyframed if the Tracker Center position at that frame is different from the track center at the previous frame. Keyframes appear in blue along the bottom of the preview when **Track On The Fly** is on.


* Note: The on screen marks are internal to the Motion Tracker. While the Motion Tracker considers the frames represented by the blue marks to be “keyframes”, these are different than the keyframes that are visible in your timeline.


**Adjusting Tracking During the Effect**


It may be necessary to adjust the tracking during an effect, as the tracking can become inaccurate when the tracked object changes orientation or is obscured by another object. The best way to deal with this is by keyframing the **Track Center KF** control. Note that the on screen Tracker Center KF cross hair control does not follow the tracked object, but you can reset it to the location of the tracked object at any point in the effect.


**Adjusting Tracking without Keyframes**


It is also possible to adjust tracking without using keyframes. However you should be careful working this way because if you make a mistake your effect could jump.


You can move the current-time marker to the point where you lost tracking, adjust the tracker, and continue tracking, You will notice that the tracked frame markers turn from green to magenta when you do this. This indicates that the Tracker Center KF is different from the current value.


This method works unless you go back to an earlier frame with the Track On The Fly check box on. If you go back, the tracker re-tracks that frame using the new (incorrect for that frame) value of Tracker Center KF, and the final render will jump. Since you haven’t saved the Tracker Center KF value for the start of the effect, you will have to re-enter it and re-track.


* Note: If you use this method, we recommend that you close the Motion Tracker group as soon as you finish tracking, so you don’t inadvertently change the tracker data.
* Note: The on screen marks are internal to the Motion Tracker. While the Motion Tracker considers the frames represented by the blue marks to be “keyframes”, these are different than the keyframes that are visible in your timeline.


**Tips For Using the Motion Tracker**


Read the following tips to help understand how to best work with the Motion Tracker in **Sony Vegas**.


**Understanding Sony Vegas’ Cache**


While you preview your effect, **Sony Vegas** maintains a disk cache so that the next time you preview the effect, it plays faster. This can present some problems for the motion tracker, which draws the colored marks at the bottom of the Composition window and reports all of its errors as the disk cache is created.


For example, one situation to avoid is the “Please Move the Current-Time Marker…” error message displayed in the Composition window when you track out of order. You can get this message if you are in Track on the Fly mode and you park the current-time marker on a frame you have not yet tracked. An error message displays and **Sony Vegas** actually caches the rendered frame containing the error message. You need to follow the instructions in the error message to clear the cache and make sure that the tracking does not then skip. The Sony Vegas cache will also cause the rendered frame marks on the bottom of the Viewer window to be incomplete if you track and scrub without changing any parameters in the effect.


**Tips for Setting Up the Target Area**


A good Target area contains a high-contrast object with good vertical and horizontal edge definition. Ideally, you should find a pattern that is visible in every frame.


The Target Width should be large enough to accommodate a good target image. However, processing time increases as the size increases, so do not make the Target Width unnecessarily large.


If your image does not contain a high-contrast object and you have trouble tracking, adjust the parameters in **Motion Tracker Preprocess,** such as **Input Black, Input White, Gamma** et al to increase the contrast for better results.


The Motion Tracker will track more accurately when you preview in Full Quality rather than Draft Mode.


