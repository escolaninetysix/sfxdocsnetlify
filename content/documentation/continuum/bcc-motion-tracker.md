{
"date": "2019-06-12",
"title": "BCC Motion Tracker",
"category": "Nested Subgroup",
"link": "bcc-motion-tracker/"
}

 ### *New in Continuum 2019*


### Continuum Mocha Motion Tracker Overview


Introduced in Continuum 2019, the BCC Mocha Motion Tracker provides an enormous leap forward in the parameter tracking capabilities in Continuum.  You can now use the full power of Mocha’s planar tracking engine to drive geometric parameters such as light or emitter locations directly within the Continuum effect.  When launching Mocha through the **Motion Tracker / Mocha** button you will see a mocha workspace optimized specifically for parameter tracking.  It still uses the same Mocha planar tracking engine as the Mocha PixelChooser masking tool, but when applied back in the host the track data is converted into a set of geometric information designed to directly drive parameters values such as position pickers.


### Workflow and Parameters


The Mocha Motion Tracker is available in select filters to help drive various effects. For example, in BCC Match Move, Lens Flare 3D and Witness Protection the Mocha Motion tracker can help simplify your motion tracking workflow.


To access it, begin by applying a filter with built in Motion Tracker to a clip.


You can launch the built in **Mocha Motion Tracker**, by clicking on the button and the mocha UI window will open.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/10/motion-tracker.png)


Inside of the Mocha UI there are two tracking layers that we need to be aware of:


* The **blue crosshair** represents the “surface,” or the position whose location will be exported back to the filter.
* The tracking layer , or the **red circular region** which defines the plane to be tracked.  

Both of these will need to be moved to the chosen location you would like to track. Moving only one of these will result in undesierable results.


![Match2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/02/Match2.png)


1. With the desired tracking location set, we can click Track Forward to track the object in Mocha. It should be noted that Track Forward begins from the frame that your CTI is located on. If you are not at frame zero, you will want to move the CTI to frame zero before you track, or select Track Backwards after so that the whole timeline is tracked.
2. Once you have tracked the specific point in Mocha, you can close the UI and save the tracking data.


![Match3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/02/Match3.png)


The **Show Motion Path** checkbox will overlay the video clip with a representation of the mocha-tracked motion path.


![Match4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/02/Match4.png)


**Smooth Motion** helps to smooth the movement of the effect along the motion path. Higher values will result in a smoother movement.


The **Apply menu** options will vary depending on the specific BCC filter used. Here you can assign mocha tracking data to available parameters to drive the effect.


In the example below, the motion tracker data has been assigned to the Lens Flare 3d light source, allowing for seemless motion tracking into the scene.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/10/motion-tracker2.png)


**Offset X** is used to offset the tracking data along the X-Axis. This can be helpful if you need to adjust the position of your tracked parameter.


**Offset Y** is used to offset the tracking date along the Y-Axis. This can be helpful if you need to adjust the position of your tracked parameter.


The **Render Legacy Track** checkbox is helpful when opening up older projects that were created using legacy versions of the motion tracker. These projects will still open and render as expected, however, you may *only* use the Mocha Motion Tracker for any new motion tracking.


### Legacy BCC Motion Tracker Documentation (Continuum 11 or earlier)


As of Continuum 2019, the older Legacy BCC Motion Tracker as has been deprecated.  This section contains documentation for the legacy BCC Motion Tracker found in Continuum 11 and older.  For motion tracking in Continuum 2019 and beyond, please refer to the main [BCC Mocha Motion Tracker](/documentation/continuum/bcc-motion-tracker) documentation above.


*Note in Continuum 2019 and beyond the Legacy Motion Tracker parameters are hidden to simplify the visual layout.  Projects created in older versions of Continuum (11 or earlier) will still render any legacy Motion Tracker settings when the Render Legacy Tracker option is enabled, but editing the individual legacy Motion Tracker settings or track information is no longer supported beyond turning them on/off as a whole.*


The Legacy BCC Motion Tracker was integrated point tracking tool available directly inside many individual BCC effects.  It tracks the motion of an object in a clip, and this motion path can then be used to drive the animation of various effect properties without the need for manual keyframing.  The Legacy BCC Motion Tracker also permits importing data files from other tracking sources such as Mocha or previously saved BCC tracker runs.  The Legacy BCC Motion Tracker requires somewhat modified workflows depending on the particular host in which it is running and the documentation is therefore split into separate versions for each supported host:


[Legacy BCC Motion Tracker – After Effects](/documentation/continuum/bcc-motion-tracker-ae/ "BCC Motion Tracker - After Effects")

[Legacy BCC Motion Tracker – Avid](/documentation/continuum/bcc-motion-tracker-avid/ "BCC Motion Tracker - Avid")

[Legacy BCC Motion Tracker – FCP X](/documentation/continuum/bcc-motion-tracker-fcp/ "BCC Motion Tracker - FCP X")

[Legacy BCC Motion Tracker – Motion](/documentation/continuum/bcc-motion-tracker-motion/ "BCC Motion Tracker - Motion")

[Legacy BCC Motion Tracker – Premiere](/documentation/continuum/bcc-motion-tracker-prm/ "BCC Motion Tracker - Premiere")

[Legacy BCC Motion Tracker – Resolve](/documentation/continuum/bcc-motion-tracker-resolve/ "BCC Motion Tracker - Resolve")

[Legacy BCC Motion Tracker – Vegas](/documentation/continuum/bcc-motion-tracker-vegas/ "BCC Motion Tracker - Vegas")

 