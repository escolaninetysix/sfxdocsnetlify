{
"date": "2019-06-12",
"title": "Title Studio- Working with the Timeline Window",
"category": "Title Studio",
"link": "title-studio-working-with-the-timeline-window/"
}

 The **Timeline Window** gives you a wide range of controls that allow you to choose and adjust media and tracks, as well as display your effect over time. You can create media, manipulate tracks, and control the media that appears on a particular track. You can animate tracks’s attributes in the timeline by setting *keyframes*. A keyframe sets specific parameter values for a track at a certain point on the timeline. When you place multiple keyframes on the timeline, Title Studio interpolates, or computes intermediate values, between keyframe values to animate the effect. Keyframes will be covered in detail in a future tutorial.


[![timeline](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/timeline.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/timeline.png)


 


### Timeline Controls


1. **Project Name:** Your project name will appear here. As with most software, by default it will appear as untitled until you save your project.
2. **Hide/Show Transformation Tracks:** Toggles the visibility of the Transformation Controls.
3. **Hide/Show Material Tracks:** Toggles the visibility of Material Tracks
4. **Toggle Smart View for the Project:** Toggles the visibility of the keyframed parameters for the scene. When this is enabled only the tracks with keyframed parameters will be visible in the window. Disable it to view all tracks.
5. **Add New Shape**: Provides you with quick access to various basic shapes. These shapes may also be found in the Track—>New Shape drop down menu. The following objects may be assigned shortcuts for quick access:
	* One-Sided Plane
	* Two-Sided Plane
	* Extrusion
	* Sphere
	* Cube
	* Cylinder
	* Imported Model
6. **Add New Media**: Provides you with quick access to various media types. These media types may also be found in the Track—>New Media drop down menu. The following objects may be assigned shortcuts for quick access:
	* Flat Text
	* Flat Text with 3D Lights
	* Extruded Text
	* Extruded Type On Text
	* Credit Roll
	* Spline Object
	* Spline Primitive
	* EPS File
	* Image File
	* 3D Model File
	* Gradient
	* Video Layer
7. **Add New Container**: Provides you with quick access to various containers. These containers may also be found in the Track—>New Container drop down menu. The following containers may be assigned shortcuts for quick access:
	* 3D Container
	* Title Container
8. **Scene Container:** hold all  the various elements of your effect in one place, and allow you to make changes to **all** the elements in an effect at once.
9. **Transformation Controls**: allows you to make changes to the various parameters directly from the Timeline Window instead of navigating back up to the Controls Window. Any changes made to the transformation controls will be reflected in the Controls Window and vice versa. You can hide the Transform Controls from the **Preferences Window**, or you can choose to only display parameters that have been modified by enabling **Smart View**.
10. **Shape Track**: This is the primary track for your shape. Parameters and keyframes available on this track allow you to change the overall shape of your effect
11. **Material Track**: Parameter and keframes available on this track allow you to make changes to the look and behavior of your effect.
12. **Container Icon**: Displays an icon that indicates the type of container being used.
13. **Change Track Shape**: Allows you to choose the type of shape to use for the track. Each shape type displays a different icon in the timeline window. The example above  shows the One-Sided Plane icon. The particular shape in the example is a flat text track. When you click on the icon, the shape menu will open, allowing you to make the changes you want. This menu is identical to the one seen in the Add New Shape menu, however in this instance, selections update the existing selected track. If you wish to create a new shape track you will need to select from the Add New Shape button.
14. **Track Visibility Control:** turns the track’s visibility on and off. When Track Visibility is on (the eye icon is “open”), the track’s content is visible in the Composite window and in the rendered output. When Track Visibility is off (the eye icon is “closed”), the track’s content is invisible in the Composite window and in the rendered output, and tracks lower in the timeline are visible.
15. **Smart View:** Allows you to quickly display only the parameter tracks that were adjusted in your effect. This saves you from having to click multiple disclosure triangles. With Smart View active, only the parameter tracks you made changes to are displayed. As you adjust additional parameters, they are added to the display. If Smart View is disabled, the timeline returns to the standard view.
16. **Lock Control**: Locking a track is useful if you want to ensure that you don’t accidentally make changes to a track. In most cases, the track is unlocked by default, which allows you to make changes to the track and its contents. When the track is locked, its media and filter selection controls are dimmed and you cannot alter the track’s content. Furthermore, all tracks nested within the locked track are locked.
17. **Change Media Type**: Allows you to choose the type of media to use for the track. Each media type displays a different icon in the timeline window. The example above  shows the Text Media icon. When you click on the icon, the media menu will open, allowing you to make the changes you want. This menu is identical to the one seen in the Add New Media menu, however in this instance, selections update the existing selected track. If you wish to create a new track you will need to select from the Add New Media button.
18. **Global Timeline:** The individual frames of your project appear here and will reflect the length of your project. Right-Clicking on the Global Timeline will allow you to add or remove a **Rigid Run**. Rigid Runs maintain the timing of portions of your effect that you do not wish to be elastic.
19. **Keyframe Marker:** These mark the point at which a keyframe has been added to your track.
20. **Active Keyframe Marker:** Keyframes that have been selected will appear red. Any changes to a parameter will be applied to this keyframe.
21. **Texture Keyframe:** This marks a keyframe that has been applied to the Texture Track.
22. Display Entire Timeline: Clicking this will restore the visible area of your timeline to the full timeline window. This is useful if you have zoomed into a specific set of frames and now want to view the whole timeline without scrolling.
23. **Scroll to CTI:** if you have zoomed into a set of frames and your CTI is no longer visible in the timeline window, clicking this button will snap the timeline view to the location of your CTI.
24. **Zoom In on One Second Section:** This will zoom the timeline into a 1-second section around your CTI. Useful if you want to quickly focus on a small area.
25. **Change Timeline Resolution:** Manually adjusts your timeline to either fill the whole window, or zoom into a specific section.


 


 


[Return to Main Title Studio Page](/documentation/continuum/bcc-title-studio).


