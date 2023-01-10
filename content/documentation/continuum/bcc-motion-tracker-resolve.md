{
"date": "2019-06-12",
"title": "BCC Motion Tracker Resolve",
"category": "Nested Subgroup",
"link": "bcc-motion-tracker-resolve/"
}

 [![MotionTracker](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MotionTracker.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MotionTracker.jpg)


### 


#### *As of Continuum 2019, the older Legacy BCC Motion Tracker as has been deprecated.  This page contains documentation for the legacy BCC Motion Tracker found in Continuum 11 and older.  For motion tracking in Continuum 2019 and beyond, please refer to the main [BCC Mocha Motion Tracker](/documentation/continuum/bcc-motion-tracker) documentation.*


### Overview


The Motion Tracker parameter group allows you to track the motion of an object in a media file. You can then use the motion path data to control another aspect of the effect. The parameters that can be affected depend upon the filter. For example, apply a Pyramid Blur filter to a clip and use the Motion Tracker parameters to track a logo on a t-shirt. Use the PixelChooser parameters to apply the Pyramid Blur to obscure the logo. Or apply a Particle Emitter and use the tracker to sync the emitter point location to a moving object.


*Note: This help file describes the way the Motion Tracker Parameter Group works in DaVinci Resolve. The Motion Tracker parameter group works differently in other hosts.*


**Tracker Limitations in Resolve**


DaVinci Resolve does not currently give effect plug-ins the ability to access frames at widely varying times, but this is a requirement of the analysis phase in the BCC Motion Tracker.  This means that the BCC Motion Tracker *can not* be used for computing new motion paths directly within Resolve.  However the BCC Motion Tracker in Resolve does permit *importing* motion data from tracker runs performed in other hosts including Mocha tracker exports and BCC Motion Tracker data exported from BCC plugins running in hosts such as Avid, After Effects, Premiere, Vegas, or FCP X.  We are working with the Resolve engineering team to eliminate this restriction in a future update of the Resolve host which would then provide the ability to perform motion analysis directly within BCC filters in Resolve.  In the meantime you can still use the BCC Motion Tracker in Resolve but only with motion data that you import from Mocha or from BCC tracker runs exported in other hosts.  This document thus just describes the workflow for importing external tracker data into Resolve.  Since BCC plugins use the OFX plugin architecture in Resolve and these OFX plugins work in hosts other than Resolve we have left the full set of Motion Tracker controls available in the UI, even though for the time being only the tracker controls needed to import external motion data are relevant in Resolve.


**Brief Description of Controls Needed in Resolve**


The Motion Tracker parameter group includes the following controls.  *Note that as described above, the Motion Tracker in Resolve can only be used to import external tracker data and cannot currently be used for generating new motion tracker runs directly within Resolve.  Thus only the parameters directly relevant to importing tracker data are actually used in Resolve.*  The Motion Tracker requires specific workflow considerations in each host so be sure to review the recommendations for you particular host carefully.


**Tracker Data:**  Select Load.. to launch a file browser where you can select an external tracker data file such as one exported from Mocha or from a BCC Motion Tracker run that was completed in another host which fully supports BCC Motion Tracker analysis.


**Reset** **Tracker**:  Clears any previously calculated or loaded motion tracking data. It does not change the parameters in the Motion Tracker parameter group but merely clears any internally stored tracker paths.


The **External Data checkbox** will automatically be checked after loading an external tracker data file.  This checkbox indicates if you have external tracker data in your project.  Turning off the checkbox will clear your tracker data which cannot be undone.


Clicking the **Help** **button** opens the help file specific to your host.


**Minimum Tracker Resolution:**Not relevant in Resolve.


**Look Ahead Frames**: Not relevant in Resolve.


**Preprocess Group:**  Not relevant in Resolve.


**Tracking Source Layer:**Not relevant in Resolve.


**Track On-the-Fly:**  Not relevant in Resolve.


**View:**Not relevant in Resolve.


The **Show Motion Path checkbox** enables the track indicators even when the Track On the Fly checkbox is false, thus allowing visualizing the tracking data while viewing the results of the applied tracker.


The **Path Frames** slider controls the length of the tracker path (in frames) displayed in the tracking indicators.


**Tracker Center KF**:****  Not relevant in Resolve.


**Input Channel**:****  Not relevant in Resolve.


**Sub-Pixel Accuracy**:****  Not relevant in Resolve.


**Start Tracking Frame**:****Not relevant in Resolve.


**End Tracking Frame:**Not relevant in Resolve.


**Target Width**:**** Not relevant in Resolve.


**Search Width**:**** Not relevant in Resolve.


The **Apply menu** determines which parameter the Motion Tracker data affects. The choices depend on the filter. When None is chosen, the Motion Tracker data has no affect.


The **Offset X** and **Offset Y** parameters allow you to offset the effect on the X and Y axis respectively. This is useful if you want to track one area, then apply the effect to a different area. For example, you want to blur out an athlete’s name on a t-shirt but don’t want to blur the player’s number. However, the player ‘s number offers more contrast and is therefore easier to track. You would track the number, then offset the effect to obscure the name.


The **Extrapolate Motion** menu determines how the position calculated for the tracker behaves in regions before and/or after the frames actually tracked.


The **Smooth Motion** slider allows averaging out small noise/bumps in the tracker path to create an overall smoother trajectory. Higher values produce greater amounts of smoothing.


The **Smooth Falloff** slider controls how many neighboring frames are used when smoothing the motion.


The **Smooth On checkbox** allows completely enabling/disabling the smoothing.


The **Smooth Lock menu** controls whether smoothing is applied to regions outside the trim points defined by the Start/End Tracking Frame parameters.


The **Tracker Auto-Man** allows blending between the position of the tracked object and the value of the normal position picker to which the tracker has been applied. This for example allows a point to maintain part of the character of its original keyframed animation while also being partially affected by the tracked motion path.


**Tracker Time Offset** shifts the tracker location through time which can be used in conjecture with trimmed clips to adjust by the trim amount and properly align the tracker.



**Understanding the Tracking Process**


Motion Tracking is a powerful feature, but it can be complicated especially with some limitations that exist in certain hosts.  Since Resolve does not permit full tracking at this time it has a simplified workflow which supports loaded external tracker data such as from Mocha or from BCC Motion Tracker data exported from a BCC tracker run in a different host.


1. Make sure your clip has a tracker data file already created which tracks the object of interest.  This can be done in Mocha or by saving tracker data from BCC in an alternate host that supports full BCC Tracking.


2. Apply an effect containing the BCC Motion Tracker


3. Select the Load option in the Tracker Data control which will launch a file browser.  Select the tracker data file containing the motion information for you clip.


4. Note that the Use External Data checkbox will be turned on which indicates you’ve successfully loaded an external data file.


5. Observe the motion path displayed on screen and confirm the tracker data correctly matches the motion of the object of interest in your clip.


6. Turn off the Show Motion Path option so the preview path data will not be rendered into your final result.


7. Use the Apply menu to select which point control in your effect will be mapped to the tracker data.  The list of available point controls in the Apply menu will vary from one effect to another.


8. Preview your result to confirm the desired final behavior for the full duration of the clip and if necessary use the additional tracker controls described above to fine tune the result.


9. If you wish to retrack after tuning the tracking parameters, be sure to hit the Reset button to clear the old tracking data if you have changed the search width, target width, color space, or accuracy since the previous tracking pass.


**Trimming Motion Tracked Effects**


When you trim a clip that has been motion tracked, the filters do not purge the tracked data. This means that if a clip is trimmed from the end, you do not need to do anything. If a clip is trimmed from the beginning (or if you slide the clip, which is the equivalent of trimming from the beginning and end), you could either use the Tracker Time Offset to account for the shift or you could press the **Reset button** to invalidate all of the motion tracker data and retrack your effect from scratch.


