{
"date": "2019-06-13",
  "title": "BCC Particle Illusion",
  "category": "BCC Particles",
  "link": "bcc-particle-illusion/"
}
**Version 2023**

#### **Overview**

Introduced with Boris Continuum 2019, Particle Illusion is a sprite (image) based particle effect system that is preset driven, easy to use, and powerful. A 64-bit update of the original particleIllusion from the early 2000’s, a new UI, reorganized libraries, and thousands of curated presets bring exciting particle effects to artists and editors of any skill level. The addition of Mocha tracking, masking, and transfer modes makes integrating advanced particle effects into your work easier than ever.

Advanced features have been added in recent releases, such as 3D particles with integrated camera, Fluid Dynamics, 3D model emission, and more.

Note that Particle Illusion is available as a **standalone application** and also as a **plugin**. Some features are only applicable to the plugin version — they will be noted throughout these documents.

**Important**: There are just 2-3 libraries installed with Particle Illusion: the “Sampler” library, the “Emitters_2023” library of new emitters for this release, and an editable “Custom” library (if you don’t have a “Custom” library installed already). To get the full set of additional emitter libraries use the “Download Emitters” option from the “Help” menu:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672263048/documentation/continuum/uploads/2023/pi-docs-v2023/01-pi-2023-help-menu.png)

</div>

This requires a connection to the Internet, and will require you to register for a free account.

Also note that if you’ve already installed these additional libraries from the previous version of Continuum (or Particle Illusion Standalone), then you don’t need to install them again — the latest emitter library is included with the main BCC or PI installer.

<hr>

<br>

#### **A Brief Primer on Particle Effects**

If you’ve not used particle effects before, or if you’re new to Particle Illusion — often referred to as “PI” in these docs — a quick look at the terminology will be helpful in understanding the rest of the documentation and tutorials.

**Particles**: Particles are the visible entities in Particle Illusion. You have no direct control over individual particles; once they are “born” they behave based on the values set in their Particle Type. Particles use images for their appearance.  

**Particle Type**: A particle type is the collection of properties that determine how particles of this type look and behave. A particle type consists of an image (or images), a color gradient, and various properties such as velocity, size, weight, etc.  

**Emitters**: An emitter is not visible, but is the object that creates particles. Emitters come in 4 shapes types: point, line, ellipse (circle), and area. An emitter contains one or more particle types, and “global” duplicates of many of the particle type properties (velocity, size, etc.). Emitters, unlike particles, can be directly controlled and moved over time.  

So an emitter is made up of particle types, and particle types are made from images, and particles are created by the emitter based on the properties of its particle types. In other words, an emitter creates particles which combine to form the visual effect.  

A more complex type of emitter is a “super emitter”.  

**Super Emitters**: This is a special type of emitter in Particle Illusion that does not create particles directly, but creates other emitters which in turn create the particles.  

**Free Emitters**: The emitters that a super emitter creates. They are similar to particles in that you cannot directly control their position — once they are “born” they behave based on the properties of their Free Emitter Type.  

**Free Emitter Type**: Like a Particle Type, this is the collection of properties that determine how the free emitters of this type will behave.  

So a super emitter is made up of free emitter types and free emitters are created by the super emitter based on the properties of its free emitter type. Each free emitter type consists of particle types, and particles are created by each free emitter based on the properties of its particle type. In other words, a super emitter creates free emitters, which in turn create particles which combine to form the visual effect.

**Emitter Library**: a collection of emitter “presets” saved as a single file. This is not really important in Particle Illusion unless you want to copy or move libraries — to share them as an example. Note that once an emitter is added to a project it is completely independent of that library.

These Emitter Library emitters are the starting point for building new particle effects: the first step in building an animation is to add one or more emitters from the Emitter Library to your project.

Starting with the 2022 release, Libraries can now also store “Scenes” — essentially complete projects. Multiple emitters, forces, deflectors can all be saved in a Library Scene, and unlike with library emitters, Scenes save position animation too.

#### <hr>

<br>

#### **Navigating the Particle Illusion User Interface**

In this section we will introduce the five primary views used in Particle Illusion to select, modify, animate, and preview effects.

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672264988/documentation/continuum/uploads/2023/pi-docs-v2023/02-PI_interface_2023.png)

1. **Emitter Library Browser**\
   The Emitter Library browser displays every emitter library and emitter available. Manually browse the thousands of available emitters or use the emitter search to help you zero in on the effect you’re looking for. Choose from a Tree View (shown), List View, or Grid View of larger icons for more visual browsing.
2. **Emitter Preview**\
   A live view that displays the emitter selected in the Emitter Library Browser. Click and drag in this view to see how the selected effect will behave before adding it to your project. More on the Emitter Preview below.
3. **Composite View (or “Stage”)**\
   The Composite view displays the composited effect as it will appear in your final output. Click to add the selected library emitter to the project, then adjust the emitter position by dragging if needed. It also offers menu options that adjust some preview settings while you work, such as zoom level, background image preview, and H.U.D. (on-screen overlays). Also known as the “Stage” if you’re an original particleIllusion user.
4. **Controls View**\
   The Controls view displays the properties and animatable parameters for each emitter. The Controls view allows you to adjust the values for each parameter and choose how to interpolate those values between keyframes.  
5. **Graph View**\
   The graph view gives you a wide range of controls that allow you to animate parameter attributes in the timeline by setting keyframes. A keyframe sets specific parameter values for a parameter at a certain point on the timeline. When you place multiple keyframes on the timeline, PI interpolates, or computes intermediate values, between keyframe values to animate the effect. Keyframes will be covered in detail in a future tutorial.
6. **Nodes View (or “Node Graph”)** \
   The node view shows the emitters, forces, and deflectors that are in the project, allowing easier navigation of the parameters in the controls view. The particle types of each emitter are also shown, giving a much clearer picture of the components of each effect.

#### **<hr>**

##### **Emitter Preview**

When browsing emitters, the Emitter Preview (or “Preview”) will show the selected emitter. This is a live window that you can click and drag in to see how the particles behave when moving (*unless a "Scene" is selected, which only displays the thumbnail in the Preview -- more details in the section on Library Scenes*). 

There are a few controls below the preview, which will be described here. From left to right…

![](https://borisfx-com-res.cloudinary.com/image/upload/v1588577229/documentation/continuum/uploads/2020/05/EmitterPreview1.png)

**Motion Blur**: When turned on the particles will be drawn with motion blur. This can enhance realism, especially for fast-moving particles. Note that emitters that have “(mb)” in their names were designed to be used with motion blur.

**Background Image**: When on the background will be an image instead of a solid color. Useful for some effects, especially if they get their colors from the source layer. (Particles can get their colors from source only in the plugin version). Note that selecting an emitter that gets its color from the source will use this image automatically for the particles regardless of the setting of this option.

**Background Color**: Although many particles look best when shown on a black background, some need a lighter color to display correctly (this is often indicated in the thumbnail image for the emitter with a grey or white background). Use this to set the background to any color.

**Zoom Level**: Controls the zoom level of the preview. Note that this is for display only — it does not modify the settings in the emitters.

**Play/Stop Button**: This control is in the center of the toolbar and allows you to stop (pause) the preview. Although you usually won’t want to do this, it can be useful when examining an effect or to set the emitter thumbnail image.

**Favorites**: Click this star icon to add the selected emitter to your “favorites” collection. When selecting an emitter that is already a “favorite”, this icon will be highlighted.

**Update Thumbnail**: When an emitter in an unlocked library (details later on locked vs. unlocked libraries) is selected, this icon will be enabled. Clicking it will update the thumbnail image for the emitter based on what’s visible in the preview. (*Note that it is not possible to update the thumbnail of Library Scenes.*)

##### **Browsing Emitters**

There are a few different ways to browse the dozens of different emitter libraries in Particle Illusion, including with an emitter search:

<div class="imageResize">

![Search Emitters](https://borisfx-com-res.cloudinary.com/image/upload/v1672265114/documentation/continuum/uploads/2023/pi-docs-v2023/03-browse-emitters.png)

</div>

Type a term in the search bar to filter the emitters that are displayed.  (This will be covered in more detail later in this document.)

Below the emitter search field there are three icons — these control the type of view used for the emitters: Library View, List View, and Grid View.

**Library View** displays the emitters in a split view, showing the libraries in the upper pane and the emitters in the selected library below.

(The Library View replaces the older Tree View, and requires much less scrolling and twirling open/closed to navigate.)

**List View** shows more information about each emitter in a flat list:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1588791006/documentation/continuum/uploads/2020/05/particleIllusionBrowseList.png)

Note that the heading of each column can be clicked to sort — clicking toggles between A-Z, Z-A, and unsorted. (The default is unsorted.)

**Grid View** shows the thumbnails and emitter names only:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1588791456/documentation/continuum/uploads/2020/05/particleIllusionBrowseGrid.png)

This is the most visual way to browse the emitters. Note that when in grid view a slider appears above the top row of emitter thumbnails that allows you to select the size of the thumbnails.

##### **Favorites**

The emitters that you have flagged as “favorites” are designated in two ways. In each view if the selected emitter is in your favorites collection, the star icon below the preview will be highlighted:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672265343/documentation/continuum/uploads/2023/pi-docs-v2023/04-favorites.png)

</div>

Also, the emitters that are flagged as “Favorites” will have their names drawn in the gold color of the star icon:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672265447/documentation/continuum/uploads/2023/pi-docs-v2023/05-favorites.png)

</div>

Also, you will see a “Favorites” button at the right below the search field. When clicked, only the emitters in the “favorites” collection will be displayed:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672265984/documentation/continuum/uploads/2023/pi-docs-v2023/06-display-favorites.png)

##### **<br>**

##### **Library Scenes**

Scenes are similar to emitters in a library in that they both are a type of preset, both have thumbnail images, and both are added to the project in the same way. There are significant differences though:

* Scenes have a “+” symbol before their name
* Scenes only show their thumbnail image in the preview — it is not a live preview
* Scenes can contain multiple emitters, forces, and deflectors. (It is this complexity that requires the removal of the live preview)
* Scenes preserve position data, so are always added at absolute positions (you can’t click to add a Scene at a different position in the Stage)

#### **<hr>**

#### **<br>**

#### **Adding An Emitter: The Basics**

1. **Select an emitter**. Either browse the libraries or use the emitter search to find the type of particle emitter that you’ll want to use in your project. If you can’t find exactly what you’re looking for, select something that is close, as you’ll be able to modify all aspects of it later.
2. **Click in the Composite View** — this will add the emitter. Alternately you can double-click the emitter name in the library browser to add it to the exact center of the Composite View.
3. **Adjust parameters**. In the Controls View select the appropriate parameter and adjust its value as needed. Experimenting is encouraged. Note that if you want to make the entire effect bigger, use the “Zoom” parameter instead of “Size”.
4. **Animate position** (optional). To animate position, click the “Auto-Key” button to turn it on (so it turns red), jump ahead in time, then drag the emitter position in the Composite View. Note that the position values in the Controls View are drawn with a red box — this indicates they are animated.
5. **Click “Apply”** to close and return to the host application (The “Apply” button is only visible when running as a plug-in.)
6. Alternately, render directly from Particle Illusion by clicking the “Render” button found above the stage.

That’s all that is required to add a Particle Illusion effect!

#### **<hr>**

#### **<br>**

#### **Project Files**

Whether you are running Particle Illusion as a plug-in (from a host application) or standalone, you can save or load Particle Illusion project files at any time. This allows you to save works-in-progress or different versions of your work. Note that saving a project file is not required when running as a plug-in, but it can still be a useful feature — especially to save backup copies outside of your host application project.

To save a project use the File – Save Project menu item, or the Cmd/Ctrl S keyboard shortcut.

A project file can be loaded at any time, even when you’re running as a plug-in. Use the File – Open Project menu item, or the Cmd/Ctrl O shortcut.

Note that the project file contains Stage Settings such as resolution, framerate, and pixel aspect ratio. When running as a host application, it’s possible to load a project that contains settings that do not match those of the host application.

<hr>

#### **<br>**

#### **Rendering**

It’s possible to render a movie file directly from Particle Illusion. This could be much faster than rendering back in the host , especially with complex particle setups and compositions that have many other layers. Once the design of the particles is completed, you can then replace your Particle Illusion layer with the rendered file as footage.

To render a movie file, click the “render” button at the right side of the playback bar:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image40.png)

…and the render settings window will open:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1592360019/documentation/continuum/uploads/2020/06/ParticleIllusionRenderSettings.png)

Here you will be able to choose the range of frames to render, the output filename and path, output format, resolution, framerate and more.

There are two output formats to choose from: MP4 and ProRes.

ProRes is the preferred format, as it’s the only way to embed an alpha channel into the video — select one of the ProRes Presets that contain alpha. (With MP4 you must render the RGB and Alpha as two separate files.)

Note that changing the render Resolution, Pixel Aspect Ratio, and Frame Rate from what is in your Project Settings may produce unpredictable results.

<hr>

#### **<br>**

#### **Adding An Emitter: Parameters**

Before looking at the parameters in the Controls View, remember from earlier that a regular emitter is made up of one or more particle types, and a super emitter is made up of one or more free emitter types, which in turn contain one or more particle types. This relationship is clearly seen in the Nodes View:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672266268/documentation/continuum/uploads/2023/pi-docs-v2023/07-nodes.png)

The Controls View shows the parameters for the selected node: emitter, particle type, etc.  Since many of the parameters at each level have the same names — for instance you’ll see “Velocity” at the emitter level, free emitter type level, and particle type level — it’s important to know the difference between them. 

As an example, you may see that the emitter (“Boom Blast 08” in the above image) “Spin” value is 100, but the particles are not spinning. If you realize that the emitter level parameters are scale factors, you’ll know that you also need to check the particle type (nodes with colors on them: “lead sparks”, “dark intense”, etc. in the above image) “Spin” value, which is probably set to 0. In order to see spin, the “Spin” values at all levels must be non-zero.

Now let’s take a closer look at the parameters in the Controls View when an emitter is selected:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672266268/documentation/continuum/uploads/2023/pi-docs-v2023/08-emitter-controls-view.png)

</div>

We’ll skip the “Properties” group for now, so we've closed it (it will be opened by default).

Starting with v2023, the parameters are grouped according to function: Appearance, Transform, Emission, etc. 

The Appearance section contains Size, Zoom, Opaticy, etc -- the parameters that control how the particles of this emitter will work.  It's important to remember that the values for most parameters at the Emitter level are scaling factors applied to the parameters of the same name in the particle nodes. More on this in the section on parameter de-emphasis below.

Most of these should be self explanatory, but a few details are noted here:

“Tint Strength” controls the amount of tint color applied, and is used in conjunction with the Tint Color (see below). A value of 100 will completely override the particle colors, while when set to 0 the Tint Color has no effect.  

“Position” is the emitter position, which can be controlled here or in the Composite View (Stage) directly. Note that when in 2D mode there will be only 2 parameters here (X/Y), but in 3D mode there will be 3 as shown (X/Y/Z).

Note that “Angle” is used to rotate line, area, plane, box, sphere and ellipse emitters, and will probably have no visible effect on point emitters (or circle emitters in a 2D project).

“Emission Angle” and “Emission Range” go together — when “Emission Range” is less than 360 degrees, the “Emission Angle” becomes useful.

(Also note that in 2D mode the Emission Angle and Angle parameters become a single value.)

&nbsp;

- - -

#### **<br>**

#### **3D Particles**

Although the particles themselves are still always 2D sprites, it is possible to have them emit in a 3D environment.

To enable 3D, toggle the 2D/3D selector above the stage to “3D”:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672267064/documentation/continuum/uploads/2023/pi-docs-v2023/09-3d-2d-button.png)

Once in 3D mode, any emitters that are added to the stage will be set to emit in 3D. If you already had emitters in the project before you switched to 3D, you can manually set those to emit in 3D in the emitter “Properties” section:

![Emit in 3D Checkbox](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/11/3DParticlesEmitIn3DCheckbox.png)

Similarly there may be a reason that you’d want to keep an emitter in 2D inside a 3D project — you can do this by unchecking the “Emit in 3D” option.

&nbsp;

##### Camera

To actually see any result of this switch to 3D particle emission, you need to select a camera model. To show the camera parameters, click in the Nodes View in an empty area (no node(s) selected):

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image17.png)

The Camera parameters will then display in the Controls View:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image16.png)

</div>

The camera model defaults to “None”, but there are three other options: Position, Orbit, and Pan.

In brief…

Position: has the most controls and is most complex, but gives you all of the options you’d need.

Orbit: A simplified camera that always points at the origin (0,0,0), useful for easy orbiting of an emitter or scene.

Pan: Simplified camera that is used to pan horizontally.

In more detail…

&nbsp;

##### **Position Camera Model**

<div class="imageResize">

![3D Particles Camera Orientation Free Rotation](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/11/CameraOrientation.png)

</div>

With the Position camera model and the “Orientation” set to “Free Rotation”, you have a camera that can be animated with no restrictions: you set the camera position, and its orientation in 3D space.

Use Tumble to rotate the camera around its X axis, Spin to rotate it around its Z axis, and Rotate for the Y axis.

Note that rotating the camera when in “Free Rotation” orientation can make it difficult to track what the camera is pointing at.

<div class="imageResize">

![3D Particles Camera Orientation Point to Target](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/11/OrientationPointToTarget.png)

</div>

When Orientation is set to “Point to Target”, you set the XYZ coordinates of the camera, and the XYZ coordinates of the point in space at which the camera should point.

(You do not set any angles, just the points)

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/01/Point-To-Object.png)

</div>

The “Point to Object” Orientation is not yet implemented and should not be used.

&nbsp;

##### **Orbit Camera Model**

<div class="imageResize">

![3D Particles Camera Model Orbit](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/11/CameraModelOrbit.png)

</div>

The Orbit camera model is an easy way to move the camera around the origin (0,0,0) while keeping it at the same distance — the camera “orbits” the origin.

Tumble orbits the camera around the world X axis, Spin orbits the camera around the world Z axis, and Rotate orbits the camera around the world Y axis.

*Note that “Orbit” camera model is somewhat similar to the Position camera model when using the “Point to Target” orientation, with the Target XYZ set to the origin.  The difference is that in the Orbit model the camera is always the same distance away from the origin, unless you change the “distance” parameter of course.*

*&nbsp;*

##### **Pan Camera Model**

<div class="imageResize">

![3D Particles Camera Model Pan](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/11/CameraModelPan.png)

</div>

The Pan camera model is a simple way to scroll the scene horizontally. Instead of having position values to set or angles to adjust, there is a single “Advance” parameter that controls the horizontal movement.

*Note that the Pan camera model is equivalent to the Position camera model with “Free Rotation” orientation if you have the camera unrotated (Tumble, Spin, and Rotate all 0.0) and adjust only the Position X value.*

*&nbsp;*

##### **Depth of Field**

Each of the camera models includes a “Use Depth of Field” option that when enabled will blur particles based on their distance from the camera.

<div class="imageResize">

![3D Particles Camera Model Use Depth of Field](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/11/CameraModelUseDepthOfField.png)

</div>

“Focus Length” indicates the distance at which particles will be in focus, and then particles closer or farther away will be blurred.

Aperture and Blur Strength work together to set the maximum blur amount, where larger values will result in more blurring, but also take longer to calculate.

<hr>

<br>

#### **2D vs. 3D Projects**

Now that 3D is available, why would you ever want to use Particle Illusion in 2D mode?

Although a large number of emitters work great when converted to 3D, the legacy ones were all created in 2D, and may rely on tricks of the 2D rendering pipeline that no longer exist in the 3D renderer. For instance:

* Emitters that are made primarily of “single” particles to create flat effects, such as HUD or display elements.
* Emitters that rely on particles being drawn in specific order. In 3D mode the particles are sorted by distance from the camera, so the “keep in order” settings (oldest in back, oldest in front) can’t be maintained.
* Super Emitters with particles that use the “preserve color” option for “intense” particles. This relies on particles being drawn for each free emitter in turn, and that’s not possible in 3D mode.
* Any particles that require the “preserve color” option for “intense” particles. “Preserve Color” does nothing in 3D mode, so particles may look a lot brighter and “blown out”.

Also, we didn’t want to force anybody to use 3D if they weren’t comfortable working with it.

So it’s still possible to use Particle Illusion in “2D” mode, although 3D mode is recommended. Therefore when you switch a project to 2D mode, two things will happen: First, you will see a warning message:

<div class="imageResize">

![2D mode warning message](https://borisfx-com-res.cloudinary.com/image/upload/v1672267549/documentation/continuum/uploads/2023/pi-docs-v2023/10-2D-mode-warning.png)

</div>

This is just a reminder that some emitters might not work correctly in 2D mode.

The second indicator that 2D mode is not recommended is that the "2D" button above the stage will show in red:

![2D mode button turns red](https://borisfx-com-res.cloudinary.com/image/upload/v1672267549/documentation/continuum/uploads/2023/pi-docs-v2023/11-2D-mode-button-red.png)

Finally, note that if the project is in 2D mode but you add an emitter that requires 3D - for instance an emitter that uses a 3D model - the project will automatically be switched to 3D and you'll be notified:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672267549/documentation/continuum/uploads/2023/pi-docs-v2023/12-forced-3d-mode.png)

</div>

&nbsp;

- - -

#### **<br>**

#### **Emitter Properties**

Going back to the “Properties” group now, you’ll see controls for preload, emitter shape, and more:

<div class="imageResize">

![Emitter Properties](https://borisfx-com-res.cloudinary.com/image/upload/v1672267864/documentation/continuum/uploads/2023/pi-docs-v2023/13-emitter-properties.png)

</div>

“Shape” describes the shape of the emitter from which particles are created, and allows you to switch between “Point”, “Line”, “Area” (rectangle),  “Ellipse”, and “Circle” in 2D projects.  In 3D, “Area” is replaced by “Plane”, and “Box” and “Sphere” shapes become available, as well as "3D Model" (added in v2022.5).

Note that additional parameters will be visible for some of these shapes, and will be covered in more detail later.

*(Emitter Shape is different from the particle “shape” — also called “sprite” — which is the image used for each particle.)*

“Frames to Preload” sets the number of frames that the emitter will run before its first frame in the project, allowing it to have many particles visible at the start instead of starting from zero particles. Library emitters that take a while for their effects to evolve will usually have “Frames to Preload” set to a non-zero value.

“Particle Order” determines if the particles will be drawn in order: oldest first, oldest last, or unordered. Unless the specific effect requires particles to be drawn in order, it’s best to set this to “Unordered”. Some types of effects that might require particles to be drawn in order are heavy smoke trails, geometric effects, and effects that are animated to grow/shrink over time (as if the emitter were coming toward or moving away from you). Note that particles flagged as “intense” always combine in a way that makes “in order” drawing inapplicable. (“Intense” particles will be covered in the “particle type” section below). *Note that this setting does not have an effect in a 3D project.*

“Random Seed” is the value used to generate the random numbers used in generation of particles, adding variation, and more. Changing this value by any amount will result in a different pattern of particles, and is the easiest way to get a new version of the effect.

“Emit in 3D” is only available when the project is 3D, and should be checked to get particles in 3D space. When NOT checked in a 3D project, the particles will all be created on a plane, which can be very obvious if the camera moves. Note that when a project is 3D, any emitters added will automatically have this option checked, but you can uncheck it manually.

&nbsp;

##### **Turbulence Field**

The “Turbulence Field” group of parameters controls the noise pattern used to displace particles and free emitters in space and/or change their size. This 3D turbulence field is created by one or more “octaves” of noise that are added together.

Note that these parameters only have an effect if the Position Turbulence and Size Turbulence values are non-zero.

“Frequency” is the base frequency of the first noise pattern.  In general it sets the “size” of the noise pattern, with higher values resulting in a smaller overall pattern.

“Octaves” is the number of noise total patterns that are added, with each copy having a frequency and amplitude determined by the next two parameters.

“Octave Freq Scale” is the multiplier used to determine the frequency of the octave.  A value of “200” means that each octave added will have double the frequency of the previous. A value of “100” makes the number of octaves have no visible result. Note that with an “Octaves” value of “1” this parameter has no effect.

“Octave Amp Scale” is the multiplier used to determine the amplitude of the octave.  A value of “50” means that each octave added will be half the amplitude (strength) of the previous.  Note that with an “Octaves” value of “1” this parameter has no effect.

Using the default values of 200% for Octave Freq Scale and 50% for Octave Amp Scale, adding octaves has the visual effect of adding “detail” to the turbulence field.

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image7.jpg)

Note that 2 or 3 Octaves is usually sufficient for adding detail, and that the higher the number of octaves, the slower the calculation (although the slowdown may not be noticeable).

“Auto Evolve Speed” is used to animate the turbulence field. This is useful for particles that are not moving, or to create a kind of “waving” effect. The higher the value, the faster the noise field will animate.

&nbsp;

##### Particle Parameters

Remember that many of the parameters of the emitter are scaling factors that are applied to its child particle types (and free emitter types it has). In this example, the emitter is a regular (non-super) emitter with a single particle type named “*trail*”:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image86.png)

With the particle type selected, the Controls View looks like this:

<div class="imageResize">

![Emitter Properties Trail](https://borisfx-com-res.cloudinary.com/image/upload/v1672268125/documentation/continuum/uploads/2023/pi-docs-v2023/14-particle-parameters.png)

</div>

It has many of the same parameters as seen previously with the emitter selected, with some subtle differences. (As before we’ll skip the “Properties” group initially) 

First, the “Weight” and “Spin” parameters can go negative here. Particles with negative weight will rise, and particles with negative spin will rotate in the opposite direction.

There are also “Variation” parameters here that can be used to produce a range of values. In this example the “Size” is 10.0 and the “Size Variation” is 7.0, which means that particles will be created with a size that is anywhere from 6.5 to 13.5.

One thing to note: the values for size, velocity, etc. are **relative and without units**. So a “size” value of 10 does not mean 10 pixels; the only thing you can say for certain is that a particle with a size of “10” is twice as big as a particle with a size of “5”. Similarly, a “Life” value of 6 does not mean 6 frames or 6 seconds.

The “Over Life” parameters — “Size Over Life” for instance — control the parameter over the life of the particle. They’re a bit different than normal parameters, so let’s take a look at them in more detail.

&nbsp;

##### **Normal Parameters vs. “Over Life” Parameters**

The normal parameters like “Size” and “Velocity” designate the values that will be used at the instant the particle is created. Even if these parameters are animated (change over time) this is still true. So if the “Velocity” parameter for instance starts at 0 for several frames before increasing, the particles created when velocity was 0 will not move even when the velocity value has increased.

To change the particle velocity over time you use the “Velocity Over Life” parameter. When this or any “Over Life” parameter is selected, the Graph View changes:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672268514/documentation/continuum/uploads/2023/pi-docs-v2023/15-overlife-graph.png)

*(To see the entire over life graph you may need to hit the "R" button to reset the graph range.)*

For “Over Life” parameters the horizontal scale of the Graph View no longer shows frame numbers, but instead displays the percentage of the particle’s life. On the left is 0.0, the birth of the particle, and on the far right 1.0, the particle’s death. In the example above for “Size Over Life” you can see that the particle starts large, slowly decreases in size until about 70% (0.7) of its life has passed, then more quickly decreases until it ends its life with a size of 0.

Note that this is independent of how long the particle actually lives; whether it is alive for 10 frames or 500 its size will follow this graph over its life.

<br>

#### **De-Emphasized Parameters**

You may have noticed that some parameters are darkened for some emitters, free emitters, particle types, etc. These parameters are not disabled, but are "de-emphasized" because they have no effect.

Let's take the following example of the "Glitter Sparkles 08" emitter (found in the "Sampler" library). With the emitter node selected you can see that both "Weight" and "Spin" are de-emphasized:

<div class="imageResize">

![Emitter parameters de-emphasized](https://borisfx-com-res.cloudinary.com/image/upload/v1672339797/documentation/continuum/uploads/2023/pi-docs-v2023/30-emitter-de-emphasis.png)

</div>

Parameters are de-emphasized when a related parameter causes then to have no effect. To see what this means, let's look at the particle parameters for this same emitter:

<div class="imageResize">

![Particle type parameters de-emphasized](https://borisfx-com-res.cloudinary.com/image/upload/v1672339797/documentation/continuum/uploads/2023/pi-docs-v2023/31-particle-de-emphasis.png)

</div>

First let's look at "Weight". You can see that both "Weight" and "Weight Variation" are 0.0. Since this emitter (Glitter Sparkles 08) only has a single particle type, and since the emitter parameters are scaling factors, it doesn't matter what the emitter "Weight" value is -- it will have no effect on the particles. Scale "0.0" by anything and you still get "0.0", so the emitter "Weight" parameter is de-emphasized.

Similarly the "Spin" parameter is de-emphasized at the emitter level because the particles have no spin.

Note also that the "Weight over life" and "Spin over life" parameters are de-emphasized, again to remind you that they have no effect.

It's important to note that although parameter de-emphasis will usually make it easier to focus on the parameters that matter, there is one case where it can cause some confusion: animated parameters.

Take this example:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672340948/documentation/continuum/uploads/2023/pi-docs-v2023/32-step-down.png)

This is a common graph of an emitter "Number" parameter for an explosion or other type of burst; the "Number" is some non-zero value for a few frames and then steps down to 0 to "turn off" the creation of particles.

If you then look at the particle node "Number" parameter, if the current time indicator (CTI) is between frames 0 and 5, the particle "Number" parameter will not be de-emphasized. If the CTI moves past frame 5 though, the parameter will be de-emphasized since the emitter "Number" is now 0:

<div class="imageResize">

![particle "Number" de-emphasized but still has an effect](https://borisfx-com-res.cloudinary.com/image/upload/v1672341230/documentation/continuum/uploads/2023/pi-docs-v2023/33-particle-number-de-emph.png)

</div>

If you change the particle "Number" parameter (or "Number Variation") you will still see the number of particles change even though this parameter is de-emphasized.

<br>

#### **Graph View**

Parameters that are selected in the Controls View have their animation displayed in the Graph View:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672334238/documentation/continuum/uploads/2023/pi-docs-v2023/16-graph.png)

Using the graph view you can change the values of data keys, reposition them, delete keys, or create new ones. 

 ![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image76.png)

To delete a key, select it in the graph window, then press your keyboard’s “delete” key, or ctrl-click (cmd-click on Mac) directly on the key.

To change a key from linear to bezier, alt-click it (option-click on Mac).

You can disconnect bezier handles by alt-clicking on one of them (option-click on Mac).

To add a new key, ctrl-click on the graph (cmd-click on Mac) -- but not on an existing key.

Note that it’s possible to select multiple points in the graph (for moving or deletion).

The controls at the bottom of the Graph View allow you to zoom the graph:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image26.png)

* The slider (and -/+ buttons) control the horizontal zoom level.
* The “AZ” button is “Auto-Zoom”, and will automatically adjust the vertical scale and range of the graph so the data keys fill the graph.
* When “Auto-Zoom” is turned off, the “Z” button will do the same thing manually.
* The “R” button will reset the graph both vertically and horizontally, showing the entire range of values.

#### **<br>**

#### **Particle Type Properties**

Back to the particle type parameters, the “Properties” group contains most of the low-level controls for particle types: how the particle is drawn, its color, and more:

<div class="imageResize">

![Particle Properties](https://borisfx-com-res.cloudinary.com/image/upload/v1672334623/documentation/continuum/uploads/2023/pi-docs-v2023/17-particle-properties.png)

</div>

The “Shape Image” displays a thumbnail of the image (or “sprite”) used by particles of this type. Click it to change the image — but we’ll cover that in more detail shortly.

The “Reference Point” button brings up a dialog that allows you to change the reference point for the sprite, but that too will be covered more shortly.

The “Flip” option determines if the sprite (image) used for the particle is flipped horizontally, vertically, or both.

“Use Mipmapping”: When checked, smaller copies of the particle shape image (“texture”) are generated from the original, resulting in less aliasing in smaller particles. This is more apparent in particle shape images that have sharp edges. If your particles contain too much aliasing (jagged edges) when being drawn in smaller sizes, try checking this option.

The “Intense” option makes the particle additive, giving it an “intense” look (hot, bright, glowing, etc.) When checked, the “Preserve Color” option is available, which will help to keep “intense” particles from adding to white, preserving some of their original color.

“Single Particle”: when checked, a single particle of this type will be created. It will be connected to the emitter’s position (velocity and motion randomness will be ignored), and its life will be very long (on the order of 10K frames).

“Attached to Emitter” can be used when you want particles to move with the emitter, but don’t want just a single particle. When “Attached to Emitter” is checked, the attachment amount parameter becomes available — a value of 0 means that the particles won’t move with the emitter, and a value of 100 means that they fully move with the emitter.

“Random Seed” allows you to change the randomization of a specific particle type. This is useful if you duplicate a particle type and want to give it variety.

There are five subgroups of particle type properties: “Behavior”, “Color”, “Alpha”, “Lines”, and “Turbulence Field”.

&nbsp;

##### **Particle Behavior**

<div class="imageResize">

![Particle Behavior Properties](https://borisfx-com-res.cloudinary.com/image/upload/v1672334623/documentation/continuum/uploads/2023/pi-docs-v2023/18-particle-behavior.png)

</div>

The “Behavior” group lets you set the particle angle. You can specify the angle (in degrees) and all particles of this type will be created at the same angle, you can select a “Random” angle, where you specify the angle range and offset value, or you can have the particles “Align to Motion”.

<div class="imageResize">

![Align to Motion](https://borisfx-com-res.cloudinary.com/image/upload/v1672334623/documentation/continuum/uploads/2023/pi-docs-v2023/19-particle-align.png)

</div>

When aligned to motion you specify the rotation angle, and the particles will align themselves with their initial motion. If the particles have no initial velocity this may not work as expected.

When the “Keep Aligned to Motion” option is checked the particle angle will continuously update based upon the particle’s motion, changing as the particle falls due to gravity. Note that when this option is checked, the particle spin parameter will be ignored — “Keep Aligned to Motion” overrides the spin value.

The next parameter in the “Behavior” subgroup is “Use Emitter emission”. When checked, this particle type uses the emitter “Emission Angle” and “Emission Range” parameters. If unchecked, you’ll see “Emission Angle” and “Emission Range” parameters added at the particle type level. It’s not common to see this option unchecked.

The “Break on Deflector” option enables breaking of this particle type when hitting a deflector that is configured to break particles. When unchecked particles of this type will not break on deflectors. (Deflectors are covered later in this document.)

“Uniform Spacing” is the final parameter in the Behavior section and needs a little explanation. When an emitter is moving (its position is animated over time), particles will be created between the emitter’s position at each frame:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image95.png)

With the “Uniform Spacing” option unchecked, particles will be added at random positions as seen above. When “Uniform Spacing” is checked, the particles are added at regular intervals:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image74.png)

This option was added to allow “stroke” style emitters that leave a smooth trail of particles.

&nbsp;

##### **Particle Color and Alpha**

The next subgroup determines the particle colors and transparency:

<div class="imageResize">

![Color and Alpha options](https://borisfx-com-res.cloudinary.com/image/upload/v1672334623/documentation/continuum/uploads/2023/pi-docs-v2023/20-particle-color-alpha.png)

</div>

Clicking the color or alpha gradient brings up the gradient editor.

The “Color Type” menu allows you to select between:

* “Full Gradient”: the gradient represents the life of the particle, where the color at the left edge of the gradient is the color when the particle is born, and the right edge is the color when the particle dies. When this option is selected you have a “Repeat” value that can be used to repeat the gradient over the life of the particle.
* “Random Gradient”: a random color from anywhere on the gradient is chosen for the particle at its birth. The particle color does not change over its life. Choosing this option reveals a “Use key colors only” option, when checked the defined gradient colors are the only possible random choices.
* “Next key color”: A specified number X of particles of each defined gradient color are created, then the next gradient color is used for the next X particles, and so on. The number of particles created at each color must be specified.
* (Plugin version only) “Color from layer”: each particle gets its birth color from the source pixel beneath its creation position. The “Update Color from Layer” option means that the particle resamples the source image as it moves.

The alpha gradient shows the particle alpha over its life, and clicking the alpha gradient opens the alpha editor.

The “Alpha Type” menu allows you to select between:

* “Full Gradient”: the gradient represents the life of the particle, where the alpha at the left edge is the alpha when the particle is born, and right edge indicates the alpha when the particle dies. Note that white is fully opaque, and black is fully transparent. When this option is selected you have a “Repeat” value that can be used to repeat the gradient over the life of the particle.
* “Link To Color”: when selected the particle color gradient is converted to alpha values. (*This option is not recommended as it does not work correctly in some situations*)
* (Plugin version only) “Alpha From layer”: each particle gets its birth alpha from the source pixel beneath its creation position. The “Update Alpha from Layer” option means that the particle resamples the source image as it moves.

##### **<br>**

##### **Particle Lines**

The “Lines” subgroup allows you to connect the particles with lines in various ways.

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672335008/documentation/continuum/uploads/2023/pi-docs-v2023/21-lines.png)

</div>

There are three different ways to connect particles with lines; they can be used independently or in combination:

“Connect to Emitter”: draws lines from the particles to the emitter’s reference point.

"Connect to Birth Position”: draws lines from the particles to the position they had when first created. For point emitters that are not moving this gives the same results as “Connect to Emitter”, but for moving emitters or all other emitter types this will look very different from “Connect to Emitter”.

"Connect Particles": draws a line from a particle to the previous particle. Since the “previous particle” can possibly be quite a distance away from the current particle — with area emitters for instance — once “Connect Particles” is enabled, a “Max Line Length” parameter becomes visible:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672335096/documentation/continuum/uploads/2023/pi-docs-v2023/22-connect-particles.png)

</div>

Use this to limit the lines that are drawn when connecting particles. Only lines that are below this limit will be drawn.

If you have a case where turning on “Connect Particles” results in a wild tangle of lines, try decreasing the “Max Line Length” value.

The other line parameters relate to how the lines themselves look: their thickness, color, and opacity.

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672335166/documentation/continuum/uploads/2023/pi-docs-v2023/23-line-appearance.png)

</div>

Although the Thickness value can be set to any value between 0.0 and 100.0, you may find that only specific values make a visible difference. This is entirely based on your hardware and or graphics driver — for instance a value of 0.5 might look exactly like a value of 0.9, then 1.0 will increase the visible thickness. Integer values should always work (we haven’t found a case yet where they don’t), so it’s probably best to stick to whole numbers when designing emitters.

Note that the antialiasing (smoothness) of lines may also be completely hardware or graphics driver dependent.

For Line Color there are two options: “Use Particle Color”, which is self-explanatory, and “Specify”, which lets you set the color independently of the particles.  Note that even when you select “Specify”, if the emitter has a non-zero Tint Strength, the Tint Color will be applied to lines as well as particles.

Line Opacity also has two options: “Scale Particle Alpha” and “Specify”. If the particles have an alpha that changes over time, you may want to use “Scale Particle Alpha”, as the line opacity will be the result of the “Opacity” value (set here in the “Lines” section) multiplied by the current alpha of the particles. If you want the lines to fade out with the particles, use this option.

If instead you want to the lines to remain at a constant opacity regardless of what the particle alpha is doing, use the “Specify” option.  Note that with this setting lines will abruptly disappear when the particle dies.

*Creative Tip: If you want lines only but don’t want to see the particles, set the particle “Size” value to 0.*

*<br>*

##### **Particle Turbulence**

The final subgroup is the “Turbulence Field” group:

<div class="imageResize">

![Turbulence Field Group](https://borisfx-com-res.cloudinary.com/image/upload/v1672335230/documentation/continuum/uploads/2023/pi-docs-v2023/24-turbulence.png)

</div>

The parameters in this group allow you to adjust the noise field of each particle type individually.  Remember that the base Turbulence Field settings are made in the Emitter Properties, and by default each particle type in the emitter will use the same settings.

“Frequency Scale” is an additional multiplier to the base Frequency. Higher values result in higher frequencies (a smaller noise pattern in general).

“Offset” allows you to use a different portion of the turbulence field, giving these particles a different turbulence look without changing the frequency.

“Random Offset” gives a random offset amount to each individual particle. Large values result in chaotic noise that loses its organic feel, but smaller values can “smooth out” the turbulence pattern and soften the final look.

<br>

<br>

##### **Changing Particle Shape Images (“Sprites”)**

When you click the “Shape Image” thumbnail, the Shape Editor dialog opens:

![Particle Shape Editor](https://borisfx-com-res.cloudinary.com/image/upload/v1672335475/documentation/continuum/uploads/2023/pi-docs-v2023/25-shape-editor.png)

This dialog lets you either select a new shape from those available in any of the available emitter libraries, or import a shape from a JPG or PNG image file. As you select a shape from those available, the “New Shape” thumbnail will give you a larger preview of the selected shape, but more importantly the particles in the Stage are updated. (Note that you can open the Shape Editor dialog while playback is occurring so it’s possible to see the particles in motion.)

Note that the dialog opens with the shapes from the currently active emitter library, but you can select any other library on the left to choose from the shapes available there.

**Shape Information**

There is quite a bit of useful information displayed here, specifically:

* The total approximate memory footprint of the selected library (shown in the title bar)
* The approximate memory footprint of the selected shape
* The emitters that are using the selected shape (in the scrollable "Used in:" window)

If the "Used in:" window is blank, the selected shape is not used in the selected library.

Note that in the display grid of shapes, any unused shapes will have their name dimmed, so you can tell at a glance which shapes are not being used -- which can be helpful when creating your own libraries if memory usage or library filesize is a concern.

<br>

The “Delete Shape” button only enables when an editable library is loaded (more on this in another section). The title bar of this dialog indicates not only the library name, but whether or not the library is locked, and the approximate memory usage of the library. 

The “Import Shape” button is used to select a PNG or JPG file. After selecting the image file the import options dialog shows:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672337001/documentation/continuum/uploads/2023/pi-docs-v2023/26-import.png)

Here you can scale the image to one of several preset sizes, select whether the image will be used as a “Greyscale” particle shape — where the RGB and Alpha channels are the same with black as fully transparent and white as fully opaque — or as “Full Color” where the existing alpha channel will be used.

If the current emitter library is one that can be edited (is unlocked), then you’ll be able to choose between importing this shape into the library, or just applying it to the current emitter. If the library is locked you’ll only be able to import to the current emitter.

Note that in both the Change Shape and import options dialogs, the transparency of the sprites can be shown via checkerboard in all of the previews. You can click the preview to toggle the transparency on and off — with some sprites it will be easier to see them with transparency off.

If you want to import a sequence of images to use for the particle sprites rather than a single image, the files must be named as a sequence.  For instance, “blur_round_00.jpg”, “blur_round_01.jpg”, “blur_round_02.jpg”, etc. If PI detects that the selected image is part of a sequence, it will allow you to import the sequence instead:

![Particle Sprites Import Image Sequence](https://borisfx-com-res.cloudinary.com/image/upload/v1672337001/documentation/continuum/uploads/2023/pi-docs-v2023/27-import-sequence.png)

When the sprite contains multiple frames, you can use the arrow keys below the preview to switch frames, or you can just scroll when your mouse cursor is over the image (using your mousewheel or trackpad scroll gesture).

&nbsp;

##### **Reference Point**

The “Reference Point” for a particle is the point at which scaling and rotation happens. Most of the time this reference point is set to the center of the particle shape, but it’s often useful to move that reference point — you can do this by clicking the red circle “Reference Point” icon. The resulting dialog lets you click and position the reference point wherever you want:

### ![Reference Point](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/11/ReferencePoint.png)

Note that the stage view will update as you make changes to the reference point, allowing you to see the results of any changes.

If needed you can use the zoom level below the preview to zoom in or out — zooming out is the only way to set the reference point farther away from the center.

You can set the reference point to the center of the image using the “Center” button.

<hr>

<br>

#### **Emitter Shapes**

In the emitter properties group you can select different “shapes” for the emitter, and depending on the shape chosen there are additional parameters that are revealed. The options in 2D projects are “Point”, “Line”, “Ellipse”, “Area” and “Circle”. In 3D projects they are expanded: “Point”, “Line”, “Ellipse”, “Plane”, “Circle”, “Box”, “Sphere”, and "3D Model".

For “Point” emitters, the particles all emanate from a single point. This is the simplest shape for an emitter, and there are no additional parameters for it.

With “Line” emitters, the particles all emanate from a line or series of connected line segments. After switching the shape to “Line” you will see a line (if the HUD is enabled) from the emitter point to the mouse position. Clicking adds a new line point — double-click or press the ESC key to end the line. Line emitters have the following additional parameters:

* Emission In: particles will be emitted from one side of the line. Note that only when Emission Range is set below 360 degrees will you see this, and it will be most clear when the Emission Range is below 180 degrees.
* Emission Out: particles will be emitted from the other side of the line.
* Emit at Points: When checked the “Number Points” parameter becomes visible. Use this option to create a row of point emitters evenly spaced along the line (or line segments).

*Note that on Mac Cmd-click will delete a line emitter point, and Option-click will allow you to add points to the line. On Windows Ctrl-click to delete a line point, and Alt-click to add them.*

Set to “Ellipse”, the particles will be created along the ellipse. As with “Line” emitters, these additional parameters are available:

* Emission In: particles will be emitted toward the inside of the ellipse. Note that only when Emission Range is set below 360 degrees will you see this, and it will be most clear when the Emission Range is below 180 degrees.
* Emission Out: particles will be emitted toward the outside of the ellipse.
* Emit at Points: When checked the “Number Points” parameter becomes visible. Use this option to create evenly spaced point emitters along the ellipse.

In addition, “Ellipse” emitters have “X Radius” and “Y Radius” parameters which can be used to resize the ellipse.

Unlike the other shapes, “Area” emitters create particles throughout a rectangular area (not just along the outline). In 3D projects “Area” is called “Plane”, but it behaves the same. Area/Plane emitters add:

* Emit at Points: When checked the “Num Points X” and “Num Points Y” controls are revealed, allowing you to create a grid of point emitters.
* “Width” and “Height” parameters to control the dimensions of the rectangle.

A “Circle” emitter is a special case of “Ellipse”, in that only a single “Radius” parameter is added instead of “Radius X” and “Radius Y” — all other parameters for “Circle” emitters are the same as for “Ellipse” emitters.

“Box” and “Sphere” emitters are 3D analogs of the 2D “Area” and “Circle” shapes. Box emitters create particles throughout their volume (in the same way that “Area” emitters create points throughout the rectangle area), while “Sphere” emitters create particles along their surface (in the same way that “Circle” emitters create particles along the circumference).

Box emitters add a “Depth” parameter to complement “Height” and “Width”, and when “emit at points” is checked a “Number points Z” parameter is added.

One important note about emitter shapes other than “Point”: **Line, Ellipse, Circle, and Area emitters emit more particles the “bigger” the shape**. For instance, a long line emitter will create many more particles than a short line emitter, a circle emitter with a large radius will create many more particles than a small radius, etc. The most extreme case of this is probably the “Area” emitters in 2D, and “Box” emitters in 3D — increasing the width and height of an area emitter so it fills the entire frame will most likely create many more particles than you intended, with the result of this being poor performance and greatly reduced responsiveness. 

For this reason it’s a good idea to reduce the “Number” value significantly before increasing the dimensions (line length, radius, width and/or height) of any shaped emitter, then increase it again slightly afterward if necessary. This will ensure that performance and responsiveness stays optimal.

*If you change an emitter shape and you don’t see the stage update right away, you may want to immediately decrease the “Number” parameter to something very small — you don’t have to wait until the stage updates.*

*&nbsp;*

##### 3D Models

When the "3D Model" emitter shape is selected, a file dialog immediately shows to allow you to choose the 3D model file to use for the emitter. Both C4D and OBJ file formats are supported by Particle Illusion.

After selecting a model file, the parameters specific to 3D models are displayed:

<div class="imageResize">

![3D model parameters](https://borisfx-com-res.cloudinary.com/image/upload/v1657732897/documentation/continuum/uploads/2022/07%20-%20PI%20docs/PIdocs_model_parameters.png "3D model parameters")

</div>

"Model File": shows the filename of the current 3D model. Click to select a new model. (The tooltip for this parameter shows the full path to the current file.)

"Emit From": Select what part of the model to use for emission: "Vertices", "Edges", "Surface", or "Normal"

"Threshold Angle": Only visible when emitting from "Vertices" or "Edges". This sets the threshold angle for emission. For instance when set to "Edges" using a cylinder model, a threshold angle of less than 12 degrees will result in emission from most (or all edges):

![threshold angle 0](https://borisfx-com-res.cloudinary.com/image/upload/v1657815971/documentation/continuum/uploads/2022/07%20-%20PI%20docs/PIdocs_threshold_angle_0.png "threshold angle 0")

While a threshold angle of more than 12 but less than 90 degrees will result in emission from the sharp edges only (the ends of the cylinder):

![threshold angle 12](https://borisfx-com-res.cloudinary.com/image/upload/v1657815971/documentation/continuum/uploads/2022/07%20-%20PI%20docs/PIdocs_threshold_angle_12.png "threshold angle 12")

"Subdivide Large Polys". This parameter is visible only with "Surface" emission, and is used to help distribute particle creation more evenly when your model contains a mix of large and small faces. When unchecked the smaller faces will have a higher particle density.

"Model Scale": Scales the 3D model uniformly in all dimensions.  (Note that upon import the 3D model scale is normalized to fit the frame -- there is no way to turn that off. "Model Scale" is applied on top of that internal normalization.

"Model Scale X/Y/Z": Used to scale the model along a specific axis.

"Use Model Color for Tint": When checked, the color information stored in the model will be used instead of the "Tint Color", and will be mixed with the selected wireframe color using the "Tint Strength" value.

"Show Wireframe": Displays a wireframe of the model.

When "Show Wireframe" is checked, wireframe properties are shown:

<div class="imageResize">

![Show Wireframe parameters](https://borisfx-com-res.cloudinary.com/image/upload/v1657734029/documentation/continuum/uploads/2022/07%20-%20PI%20docs/PIdocs_show_wireframe_parameters.png "Show Wireframe parameters")

</div>

Use these to set the wireframe opacity, color, and line thickness. The wireframe is very similar to the particle "lines" feature, except that Emitter "Tint Color" does not affect the wireframe. 

Although the Wireframe Thickness value can be set to any value between 0.0 and 20.0, you may find that only specific values make a visible difference. This is entirely based on your hardware and or graphics driver — for instance a value of 0.5 might look exactly like a value of 0.9, then 1.0 will increase the visible thickness. Integer values should always work (we haven’t found a case yet where they don’t), so it’s probably best to stick to whole numbers.

<hr>

*<br>*

#### **Super Emitters**

Remember that a “super emitter” is a special type of emitter in Particle Illusion that does not create particles directly, but creates other emitters (free emitters) which in turn create the particles.

![Free emitter node selected](https://borisfx-com-res.cloudinary.com/image/upload/v1672337459/documentation/continuum/uploads/2023/pi-docs-v2023/28-super-emitter-nodes.png)

With a free emitter node selected in the Nodes View (as shown above), the Controls View will display something like this:

<div class="imageResize">

![Free emitter parameters](https://borisfx-com-res.cloudinary.com/image/upload/v1672337557/documentation/continuum/uploads/2023/pi-docs-v2023/29-free-emitter-params.png)

</div>

The “f-” parameters such as “f-Life”, “f-Number”, “f-Velocity”, etc. are applied to the free emitters themselves and do not control particles. *(This is further indicated by the section titles, which will note either "free emitters" or "particles" as a reminder of what these parameters control.)*

For example, to create more free emitters, increase the “f-Number” value. To make the free emitters move faster, it is “f-Velocity” that must be adjusted.

You’ll notice that there is no “f-Size” parameter. This is because free emitters are not visible, and therefore do not need a “size” control.

Similar to the parameters for particle types which were discussed earlier, there are also “Variation” and “Over Life” controls for the “f-” parameters.

Starting In the "Appearance (particles)" section you will see what looks like the same set of parameters that were visible at both the emitter and particle type levels: “Life”, “Number”, “Size”, etc. These are the scale factors for the corresponding controls in all of the particle types that this Free Emitter Type contains — they control the particles. 

This means that for a Super Emitter there are two different levels of scale factors that are applied to the particle type parameters.

This may seem overly complex and a bit difficult to grasp when reading it, and when you’re looking at an emitter that contains only a single particle type, it may be overkill. The advantage of this system of a hierarchy of controls becomes apparent when dealing with emitters that have several different particle types though.

Note that parameter de-emphasis can also help to understand the difference between "f-Velocity" and "Velocity". Set "f-Velocity" to 0 and you'll see the parent emitter's "Velocity" parameter de-emphasize.  Set the free emitter "Velocity" parameter to 0 and you'll see the particle type "Velocity" and "Velocity Variation" parameters de-emphasize.

<br>

- - -

#### **Animating  Parameters**

Most parameters that can be animated — by manually creating keys to change values over time — displays the keyframe controls to the right of the parameter value in the Controls View:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/01/animating-params.png)

*The exceptions are Position and any "Angle" parameters -- these do not show anything in the graph view.*

Note that any parameter that is animated (contains more than one key value) has its value outlined by a red rectangle. The left and right arrows are the key navigation buttons, and clicking them jumps the current time indicator (CTI) to the frame of the appropriate key. (Except when an “over life” parameter is selected.)

The interpolation control is between the two key navigation buttons, and is used to switch the interpolation type of the current key. Note that if the CTI is not at a keyframe, the interpolation type will not display (will show as an empty box).

![Interpolation Type Choices](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/Interpolation-Type-Choices.png)

Interpolation Type Choices

*Linear*: The value changes at this key occur linearly, along a straight line.

*Bezier*: The value changes along a smooth curve that is adjusted in the Graph View using the control point “handles”.

*Constant*: Setting a “constant” value removes all keys from this parameter.

To adjust keys in the Graph View, you can just click and drag them. You can also change the parameter value itself in the Controls View. If the CTI is at a keyframe when you change that value, that key will be adjusted. If the CTI is not already at a keyframe and the graph already contains a key, a new key will be created. (If you adjust the value for a “Constant” parameter, the value will change but no key will be created.) More in the “Working with Data Keys” section below.

There is another way to create keys to animate a parameter: using the animation controls. These are found just under the mini-timeline, above the Graph View on the left:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/01/auto-key.png)

</div>

The buttons with the left and right arrows are key navigation controls, and they have the same effect as the buttons to the right of the parameter value in the Controls View: they move the CTI to the next or previous data key (if they exist).

The button with the “+” sign adds a key at the current frame for the current parameter. Note that this works even when the parameter interpolation is set to “Constant”.

The “Auto-Key” button is a toggle; **when turned on any parameter changes will create keys**. Since there are other ways of creating keys for most parameters, this may not be a button you’ll use often**.**

&nbsp;

##### **Animating Emitter Position**

Although each emitter has a “Position” parameter in the Controls View, selecting that parameter — unlike with most of the other parameters that can be animated — does not display anything in the Graph View. 

This is because position changes, for animation or not, can be made in the Stage by clicking and dragging the emitter. (This is usually much easier than manually creating position keys by entering specific values in the Controls View.)

To animate the emitter position in the Stage:

1. Click on the emitter in the Stage and drag it to its starting position.
2. Toggle the “Animate” button on, click the “Add Key” button, or select “Linear” as interpolation type in the Controls View.
3. Jump the current time indicator (CTI) forward some number of frames
4. Drag the emitter in the Stage. You should see the emitter motion path in the Stage now:

![Animating emitter position](https://borisfx-com-res.cloudinary.com/image/upload/v1672352883/documentation/continuum/uploads/2023/pi-docs-v2023/34-position-keys.png)

You can now continue moving the CTI and dragging the emitter to create new position keys as needed. (Once a position key is created, new keys are created automatically.) 

To create position keys that are between two existing keys, just move the CTI between those keys and drag the emitter — a new key is created regardless of the stage of the Animate button.

Note that you can click and drag position keys directly in the Stage, similar to the way that you can do this in the Graph View for other parameters.

To change a position key from “Linear” to “Bezier”, Alt/Option click on the key in the Stage, or use the interpolation control to the right of the Position XY values in the Controls View — just as you would for any other parameter.

Note that the emitter position at each frame is indicated by small dots:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672352883/documentation/continuum/uploads/2023/pi-docs-v2023/35-pos-keys.png)

*(Note that you can set the size, color, and opacity of these elements in the HUD page of the Preferences dialog.)*

**<br>**

##### **Position and Angle in 3D**

When discussing creating position data keys above, we mentioned that you can just click and drag the emitter to position it.

There is another way to position, rotate, and in some cases even scale the emitter in the stage. Instead of clicking and dragging the emitter, click and release (to select it). This will display the 3D widget (or "interactor"):

![3D widgets](https://borisfx-com-res.cloudinary.com/image/upload/v1658260349/documentation/continuum/uploads/2022/07%20-%20PI%20docs/PIdocs_widgets_trans.png "3D widgets")

The widget allows you to drag the emitter along a specific axis, while also letting you drag it freely in the current view plane.

When you roll over an axis arrow or plane square, it will highlight in yellow -- click and drag to move the emitter along that axis or plane.

There are three modes for the widgets/interactors which are indicated by the icons above the stage (see image above): translate, rotate, and scale.  You can switch between the modes using the hotkeys W, E, and R (as shown in the tooltips for each mode icon).

Note that the Scale widget will only have an effect in certain cases: it's possible to use the scale widget to resize a Box emitter in any specific direction for instance, but the scale widget does nothing for a point emitter.

##### World vs. Object Coordinates

Once an object is rotated, you can use the translate widget to move it along its own coordinate system, or instead along the world (screen) coordinates, depending on the state of the "World Coords" button. With "World Coords" off, the widget is aligned to the object's rotated coords:

![object coords](https://borisfx-com-res.cloudinary.com/image/upload/v1658264126/documentation/continuum/uploads/2022/07%20-%20PI%20docs/PIdocs_widgets_objectcoords.png "object coords")

Remember that  when widgets are not displayed, you can always click and drag an emitter to position it in the current view -- widgets just give you more control when you need it.

#### **<br>**

##### **Working with Data Keys**

We mentioned already that it’s possible to click and drag a data key in the Graph View, and that you can change a data key’s value using the Controls View. There are a few other features that make working with data keys easier:

* Multi-selecting data keys. You can shift-click on keys in the graph view to select multiples, or click and drag to create a selection rectangle that will select multiple keys. All selected keys can be dragged as a group.
* Deleting data keys. Use your keyboard “delete” key to delete all selected keys.

When a data key is set to “Bezier” interpolation, you can drag the control handles to change the curve. In addition, you can:

* On Mac: Option-drag a bezier handle disconnects the two handles and lets them move independently. Option-drag on one of the disconnected handles to reconnect them.
* On Windows: Alt-drag a bezier handle disconnects the two handles and lets them move independently. Alt-drag on one of the disconnected handles to reconnect them.

<br>

<hr>

#### **Using the Playback Controls**

The playback controls appear above the Graph View and below the Stage:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image48.png)

These allow you to toggle playback, move one frame forward/back, move 10 frames forward/back, or jump to the start frame (frame 0) or end frame. The spacebar is a keyboard shortcut for the play button.

There is also a “looping” control at the far right that should be self-explanatory.

The current frame number is shown to the left of the playback controls, and the length of the project in frames is shown to the right.

*Note that you can click the number of frames as a shortcut to open up the Project Settings dialog.*

<br>

##### **The Mini Timeline**

The area just above the playback buttons — where the blue frame indicator line shows — is called the “Mini Timeline”. You can click anywhere in the Mini Timeline to jump the current time indicator (CTI) to that frame.

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image71.png)

This is also where keys are shown for the selected parameter — if you want to change the position of any keyframes you can do that in the Mini Timeline. Doing it here removes the risk that you might unintentionally change a keys value when trying to move it in the Graph View.

##### **In and Out Points**

Just above the Mini Timeline are the trim controls for setting the In and Out points. Drag them to set the playback range, or double-click between them to clear both of them and reset to the full play range.

For those who want more precise control over the In/Out controls, you can "nudge" these one frame at a time: hover the mouse cursor over the control, then use the L/R arrow keys to nudge. (Once the cursor moves off the In/Out marker, the arrow keys stop working.)

*Note that start/end frame controls have dual usage: click the start frame button once to move to frame 0, then click it again to move to the "in" frame. Similarly the end frame control jumps to the last frame in the project, then to the "out" frame.*

##### **Jump by Five**

When working in the mini timeline, it's possible to jump the frame number to the nearest multiple of 5. When dragging the CTI, the In point, or Out point, just hold the *Shift* key.

##### **Cache Indicator**

You will have noticed that in the mini timeline there is a cyan line that draws from frame 1 to the CTI. This is the cache indicator. Particle Illusion will cache particle calculations which allows for better performance when scrubbing the timeline (under many circumstances). Note that it is not an image cache, so for projects with a large number of particles you may still not get smooth scrubbing.

If you ever notice something strange happening during playback — particles that glitch or jump for instance — you should reset the cache. An easy way to do this is to just select any parameter value and change it slightly, or even just click on it as if you were to type a new value but just hit Enter/Return to keep the same value. Once the cache recalculates the glitch should no longer occur.

##### **Emitter Start Frame** 

Below the playback controls is the Start Frame slider for the selected emitter. By default added emitters are placed so that they start at the current frame. To make the emitter start at a different frame, just slide the head of this Start Frame slider by clicking and dragging it. Note that all data keys contained in this emitter will move with the slider — this is most important for emitters that have significant animation or turn off, such as explosion emitters.

Tip: the Start Frame also responds to the *Shift* key modifier to jump by five frames.

Note that if for some reason you don’t want the data keys to move with the slider you can CMD+click and drag on the slider head (on Windows CTRL+click and drag). *This could be useful if, for instance, you want an explosion emitter to create particles for a bit longer before turning off. Instead of moving all of the “number” data keys to a later time (to the right) — and there could be several different “number” parameters where you’d have to do this — you can instead CMD-drag the Start Frame slider to an earlier time (to the left).* 

<br>

- - -

#### **Emitter Libraries**

Particle Illusion is preset driven, and there are well over 2500 particle emitters in the various emitter libraries. Only two libraries — the locked “Sampler” library and the editable “Custom” library — are installed with Particle Illusion. To get the additional libraries use the link provided in the “Help” menu:

<div class="imageResize">

![Download Emitters](https://borisfx-com-res.cloudinary.com/image/upload/v1672263048/documentation/continuum/uploads/2023/pi-docs-v2023/01-pi-2023-help-menu.png "Download Emitters")

</div>

You’ll need to restart Particle Illusion after installing those libraries to make them available.

The concept of libraries is not so important in Particle Illusion because of the search function, but libraries do provide some level of organization. The important thing to know is that the legacy emitters have been grouped into themed libraries, so that most smoke emitters are in the “Smoke” library, explosions are in “Explosions”, etc. (The newest emitters are released in versioned libraries: “Emitters_2021.5” for instance.)

This is only important if you’re manually browsing the libraries, but with so many emitters to look at the only realistic way to browse is to first use the emitter search function.

<br>

##### **Library Scenes**

Starting with Particle Illusion 2022, libraries can now contain “Scenes” along with emitters. Scenes are similar to emitters in a library in that they both are a type of preset, both have thumbnail images, and both are added to the project in the same way. There are significant differences though:

* Scenes have a “+” symbol before their name
* Scenes only show their thumbnail image in the preview — it is not a live preview
* Scenes can contain multiple emitters, forces, and deflectors. (It is this complexity that requires the removal of the live preview)
* Scenes preserve position data, so are always added at absolute positions (you can’t click to add a Scene at a different position in the Stage)

##### **<br>**

##### **Emitter Search**

The emitter search can really help you reduce the number of emitters that you need to browse, and is the best way to quickly find what you’re looking for without a huge amount of scrolling. 

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672353509/documentation/continuum/uploads/2023/pi-docs-v2023/36-search.png)

To search the emitter libraries, just start typing in the Search box below the preview.

The emitter search works over emitter names and on the tags saved with each emitter, and optionally on the folder/group names (which are only visible in List View).

Note that search works on Scenes as well as emitters.

In the Preferences for Particle Illusion there are a few options related to emitter searching:

* Search Folder Names: the folders in each emitter library are included in search results. When this option is checked all emitters in that folder will be included in the results if the search term is in the folder name. (This is not usually desired so is unchecked by default.)
* Search Tags: If you want to search only on emitter names you can uncheck this option. (It is checked by default as there are many emitters with names that are not descriptive.)
* Display Tags in emitter library: when checked, each emitter’s tags will display after its name in Library View. (The tags will not show in List or Grid views)  

Here’s a list of all emitter search tags used in the emitter libraries:

> Abstract\
> Background\
> Cartoon, Toon\
> Clouds\
> Creatures\
> Disintegrate, Disintegration\
> Dust\
> Explosion, Burst, Pyro\
> Fire, Flames, Pyro\
> Fireworks, Pyro\
> Geometry, Shapes\
> Magic\
> Nature\
> Rain\
> Sci-Fi\
> Smoke\
> Snow\
> Space\
> Sparkles\
> Sparks\
> Teleport, Transport\
> Texture\
> Trail\
> UI, HUD, Interface\
> Water\
> Distortion
>
> Bright\
> Colorful\
> Dark\
> Extreme\
> Falling\
> Fast\
> Fiery\
> Flowing, Drifting\
> Geometric\
> Glowing\
> Lines\
> Miscellaneous,Misc\
> Natural\
> Puff\
> Rising\
> Simple\
> Slow\
> Smoky\
> Smooth\
> Sparkly\
> Turbulent, Turbulence
>
> RegularEmitter\
> SuperEmitter
>
> Black\
> Blue\
> Brown\
> Green\
> Grey, Gray\
> Orange\
> Pink\
> Purple, Violet\
> Red\
> White\
> Yellow, Gold  
>
> v2020.0\
> v2020.5\
> v2021.0\
> v2021.5\
> v2022.0\
> v2022.5\
> v2023.0
>
> Scene\
> Fluids

Knowing these can help you search more effectively.

Note that tags can be combined, so searching for “sparkles red” will return all emitters tagged with both “red” and “sparkles”. 

Also note that new emitters are included with most major releases.  For instance, the new emitters in the Continuum 2023 release are in the library “Emitters_2023.0” — you can easily find these using the search tag “2023.0”.

Tip: It’s easy to isolate the library Scenes using search: just search on the “Scene” tag.

&nbsp;

##### **Locked vs. Unlocked Libraries**

All libraries installed by either Particle Illusion or the Additional Emitter Libraries installer will be “locked” and can’t be edited with one exception: the “Custom” library. This is provided as a place to store your own emitters — it contains just a single very basic (not useful) emitter because emitter libraries can’t be empty.

The locked vs. unlocked status of an emitter library is determined by where the library file resides: there is one folder for “locked” libraries, and one folder for editable libraries. You can manually move or copy emitters from one folder to another as necessary. **It is recommended that the emitter libraries released by Boris FX remain locked.**

Locked emitter libraries are found in the following folder:

Mac:\
 `/Library/Application Support/BorisFX/EmitterLibraries`

Windows:    \
`C:\ProgramData\BorisFX\EmitterLibraries`

The unlocked (editable) emitter libraries are found in the following folder:

Mac:    \
`/Library/Application Support/BorisFX/UserEmitterLibraries`

Windows:     \
`C:\ProgramData\BorisFX\UserEmitterLibraries`

Note that if you used (or are still using) the legacy version of particleIllusion 3.0 and created emitter libraries with it, those libraries can still be used in Particle Illusion. There is no “Load Library” command, so in order for Particle Illusion to find your emitter libraries you’ll need to copy them to one of those folders.

The more emitter libraries that are in those folders, the longer PI will take to load all of them, so you may want to be selective when you’re adding emitter libraries. *Note that if you just copy all of the legacy pI3 emitter libraries for use in PI, you will have over 2500 duplicates — we curated the legacy pI3 libraries to create the PI libraries.*

*&nbsp;*

##### **Adding an Emitter to a Library**

Any emitter in your project can be added to one of the editable libraries. To do this, click the “hamburger” menu button to the right of the emitter in the controls view, then select “Save to Emitter Library…”

The “Save to Emitter Library” dialog then opens….

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/08/save2.png)

…and lets you rename the emitter, edit the emitter tags, and then choose the destination library (if more than one unlocked library exists).

As the dialog message indicates, there is no undo of adding an emitter to a library.

&nbsp;

##### **Adding a Scene to a Library**

When you add an emitter to the library since it’s a single object you do it from the emitter’s “hamburger” menu. Since a scene contains everything in your project, you use the “File” menu to add it to a library:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672353654/documentation/continuum/uploads/2023/pi-docs-v2023/37-save-scene-menu.png)

Think of it as being similar to saving the project, but you’re saving it in the library instead of a project file.

Note that a Scene is not exactly the same as a project, as the following information that is saved in a project is NOT saved in library Scenes:

* Motion Blur settings
* Stage size (resolution)
* Camera data
* Layer data (position, rotation, etc.)
* Node layout

When you add a scene to a library, the exact contents of the Stage are used for the Scene thumbnail (cropped to a square), so you should make sure you move the CTI to a frame that is representative of the Scene. (Unlike with Library Emitters, It’s not possible to update the Scene thumbnail after it is added.)

&nbsp;

##### **Deleting Emitters/Scenes from a Library**

To delete an emitter or Scene from a library, select the emitter/Scene then hit the <delete> key. If the selected item is in an editable library, you’ll get a confirmation dialog:

<div class="imageResize">

![Delete library emitter confirmation](https://borisfx-com-res.cloudinary.com/image/upload/v1672353746/documentation/continuum/uploads/2023/pi-docs-v2023/38-delete-lib-emitter.png)

</div>

If the selected emitter/Scene is in a locked library, you will see an error message instead.

<br>

##### **Emitter “Hamburger Menu”**

Besides saving an emitter to a library, using the emitter “hamburger menu” you can also:

* Disable an emitter, which removes it from displaying and rendering.
* Delete the emitter
* Duplicate it, making an exact copy of it
* Move it Up or Down in the layer (if more than one emitter exists) to change the render order in 2D projects only (Does not change render order in 3D projects)

##### <br>

##### **Renaming Library Emitters/Scenes**

You can easily rename an emitter/Scene or modify its tags in any unlocked library. Simply select the emitter/Scene then hit the Enter/Return key, and the rename dialog will appear.

You cannot modify emitters or Scenes that are in locked libraries. See the section on Locked vs. Unlocked Libraries above.

<br>

##### **Adding/Removing Particle Types and Free Emitter Types**

We’ve discussed all of the parameter changes you can make to a particle type (and to a free emitter type for super emitters), but we have not talked about how you can create a new particle type, or delete an existing one from an emitter.

Once a regular emitter is added to your project, you can create a new “basic” particle type using the “Add New Particle Type” option in the hamburger menu:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/08/Add1.png)

This will create a generic particle type using the first particle shape image from this current emitter, default parameters, and solid white for color gradient and alpha. You’ll need to customize everything in order to make it do anything interesting.

If instead you would like to make a copy of an existing particle type in this emitter — which may make setting the various parameters much easier — use the hamburger menu for that particle type (instead of for the emitter) and select “Duplicate Particle Type”:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/08/Add2.png)

Note that it’s also possible to Rename and Hide using this menu, as well as Delete and rearrange particle types (Move Up/Down) if the emitter contains more than one particle type.

Super emitters work similarly in that you can create a new “basic” free emitter type using the “Add New Free Emitter Type” menu (*it may show as “Add New Emitter Type” in some versions*), and can duplicate an existing free emitter type, delete free emitter types, hide them, etc.

*Note that the order of particle types and free emitter types usually does not make much difference, but there can be some rendering differences in some cases.*

*<br>*

##### **Make Super Emitter**

To convert a regular emitter into a super emitter, use the emitter hamburger menu “Make Super Emitter” function:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/08/Super1.png)

If your project contains a super emitter, you can add a regular emitter to that super emitter using the “Add to Super Emitter…” menu item:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/08/Super2.png)

Note that option is only available if there is a super emitter in the project, and displays only for regular emitters.

A dialog showing all available super emitters will show:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/08/Super3.png)

Note that the Free Emitter Type added to the super emitter will have the same name as the emitter that you added, and the original emitter will still be present in the project.

*Note that there is no way to extract a regular emitter from a super emitter.*

#### <br>

#### **Creating An Emitter from Scratch**

One of the advantages of Particle Illusion is its huge preset library. It’s much easier to start with a preset and then modify it to make it your own than it is to create one from nothing, but there are times when you might want to create an emitter without using a preset.

Technically this is not possible, as there’s no concept of an “empty” emitter in Particle Illusion, but starting with the 2021 version, some “Basic” emitters have been included that allow you to start from a nearly empty emitter.

If you do an emitter search for the word “Basic”, you’ll see a small collection of “Basic” emitters shown in the “Emitters_2021” library:

<div class="imageResize">

![Basic Emitters](https://borisfx-com-res.cloudinary.com/image/upload/v1672354313/documentation/continuum/uploads/2023/pi-docs-v2023/39-basic-emitters.png)

</div>

These five emitters are as close to a blank slate as you can get in Particle Illusion, and will let you create a custom emitter from scratch.

*(Note that these are also included in your "Custom" emitter library.)*

<hr>

<br>

#### **Composite View (“Stage”) Controls**

The Composite View or "Stage" is pretty straightforward, but there are some controls in the upper left corner of this view that require some explanation:

![Composite View Button Controls](https://borisfx-com-res.cloudinary.com/image/upload/v1658266349/documentation/continuum/uploads/2022/07%20-%20PI%20docs/PIdocs_stage_toolbar.png)

From left to right…

**Presets**: An easy way to show/hide the Emitter Libraries view and Preview.

**Zoom**: Sets the zoom level for the Composite View.

**Preview Background**: Select compositing over Black, checkerboard (which shows transparency), Source Frame, or Source Video. Note that the options in this list are ordered by performance, with fastest at the top and slowest at the bottom. (Source Frame and Source Video are only available in the plugin version.)

**View Selector**: Enabled only in 3D projects, and lets you switch between the Render (camera) view, Top, Left, Right, Bottom, and World Views — essential when trying to position objects in 3D space.

**2D/3D**: This allows you to switch between 2D and 3D modes.

**Motion Blur**: toggles motion blur for the Composite View. Performance is increased with motion blur off. (Note that the motion blur settings are in the Project Settings dialog covered later).

**H.U.D.**: Toggles the “heads up display”. When turned on, the overlays for object, position path, etc. are visible. When off only the particles are visible. Also note that the ground plane in 3D views is controlled by this button.

**Translate Mode**: For moving objects in the Stage with widgets.

**Rotate Mode**: For rotating objects with widgets.

**Scale Mode**: For scaling some objects with widgets.

**World Coords**: Toggles between Object and World coords when translating rotated objects.

**+ Deflector**: Used to add a deflector object to the project. (See below)

**+ Force**: Used to add a force object to the project. (See below)

The upper right corner of the view displays some useful information too:

![Composite View Info Display](https://borisfx-com-res.cloudinary.com/image/upload/v1658267015/documentation/continuum/uploads/2022/07%20-%20PI%20docs/PIdocs_particle_count.png)

The number of particles is displayed here, and if motion blur is turned on you’ll see the frame multiplier. In this example motion blur is set to 4 frames, and the multiplier reminds you that the particles are being drawn 4 times.

The project resolution is shown here also. *(Note: click the project resolution as a shortcut to open the Project Settings dialog so the resolution or motion blur settings can be changed.)*

Note that the particle count is usually the main factor in determining performance. If your project is too slow,  particle count is most likely too high — reduce the “number” value or disable emitters.

(The number of motion blur frames and the project resolution are both set in the Project Settings dialog, unless running as a plugin, when resolution is set by the host, and motion blur frames might also be set there.)

&nbsp;

##### **Interacting with the Composite View (Stage)**

Besides the zoom and motion blur controls discussed above, there are other ways of controlling the Stage.

* Scroll/Pan the Stage by holding the spacebar then clicking and dragging in it.
* Zoom In using Cmd+ on (macOS) or Ctrl+ (Windows)
* Zoom Out using Cmd- on (macOS) or Ctrl- (Windows)
* Toggle Motion Blur using Cmd-B (macOS) or Ctrl-B (Windows)
* The "F" key will Fit the Stage to the View size

You can also zoom using the mousewheel or trackpad when the mouse cursor is positioned over the Composite View.

- - -

#### **<br>**

#### **Using After Effects Camera** (Plugin version only)

Besides the built-in camera when Particle Illusion is set to 3D mode, it’s possible to use the After Effects camera:

![After Effects Use Comp Camera Checkbox](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/11/AfterEffectsUseCompCamera.png)

Just check the “Use Comp Camera” parameter before launching Particle Illusion.

Then inside PI, you won’t see any built-in camera controls, but the view in the Stage will be set to whatever the AE camera is for that specific frame.

Note that the other indication that the AE camera is being used when in the Particle Illusion application is that any camera animation will automatically be applied in the Stage.

(Note also that changes to the 2D/3D button will not make a difference.)

<br>

<hr>

#### **Motion Tracking and Masking** (Plugin version only)

When Particle Illusion is used as a plugin, motion tracking and masking are available, powered by Continuum’s integrated Mocha tracker.

With this tracking you can essentially “pin” an emitter to a feature in your shot — for instance a train’s smokestack — moving it automatically without requiring you to manually animate the emitter position.

To track the position of an emitter, select “Emitter” for the Transforms parameter in your host application:

![Track Position of Emitter](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/Track-Position-of-Emitter-300x101.png)

Then expand the “Motion Tracker / Mocha” group and click the “Mocha Motion Tracker” button:

![Mocha Motion Tracker](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/Mocha-Motion-Tracker-300x78.png)

This opens the Mocha interface, where you can then track the emitter position:

![Track Emitter Position](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/Track-Emitter-Position.png)

The details of how to use Mocha are provided elsewhere, but the key concept to understand when using it with Particle Illusion is that the “Transforms” parameter must be set correctly:

* “Emitter” if you want to track an emitter position in a shot with a stationary camera
* “World” if you want to track the camera movement only (with emitters that don’t move or that you’ll animate manually)
* “World + Emitter” if you want to track both camera movement and emitter position

Mocha not only provides tracking, but also masking via the PixelChooser. When in the Mocha interface, there are several ways to draw masks: freehand, as X-splines, with the magnetic tool, and more.

Once the masks are drawn, they also get tracked by Mocha, reducing or eliminating any manual repositioning. There are parameters for feathering, inverting the mask, and more:

![Mask Parameters](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/Mask-Parameters-300x104.png)

Both the Mocha tracking and masking are essential features to integrate Particle Illusion effects into your projects.

<hr>

<br>

#### **Composite Style / Apply Modes** (Plugin version only)

Also when used as a plugin, Particle Illusion can be applied using a variety of transfer modes. The default setting is “Direct (Classic)”, which composites the particles directly over the source layer — this is the method used by the legacy particleIllusion application.

![Transfer Modes](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2018/11/Transfer-Modes-300x61.png)

Although this “Direct” composite style may be ideal for some projects, a wide variety of apply modes become available once the “Alpha + Apply Mode” Composite Style is selected:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/08/Composite.png)

</div>

With an apply mode selected, you then have the ability to not only mix the selected mode with Normal mode using the “Apply Mix” value, but you can adjust the Opacity of the effect too — both of these give you a huge amount of control in blending the particle effects into your project.

You can also adjust Brightness, Contrast, and Gamma regardless of which Composite Style is chosen, but when “Alpha + Apply Mode” is selected you can also choose to apply these adjustments to just the particles, or to the composition.

<hr>

<br>

#### **Particle Properties** (Plugin version only)

Under the “Particle Properties” section you have access to some of the Particle Illusion native parameters:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/08/Comp2.png)

These are provided not just for convenience — as they let you adjust some aspects of the particles without having to jump back into the PI interface — but also allow you to animate and utilize your host application’s scripting capabilities.

Note that it’s best to think of these parameters as an additional level of scaling factor being applied; they can’t add something that is not there in the emitter already. For example, if the particles in the emitter have a velocity of 0, the “Velocity” parameter in this “Particle Properties” section will have no effect: 100% of 0 is still 0.

<hr>

<br>

#### **Glow** (Plugin version only)

You can add glow to the particles by clicking “Glow On”:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/08/glow.png)

</div>

Once enabled you can adjust intensity, color, radius and threshold, and when using “Alpha + Apply Modes” as the Composite Style you can choose to apply the glow to the particles alone or the composition.

#### **<hr>**

<br>

#### **Beat Reactor** (Plugin version only)

When talking about the Particle Properties above, it was mentioned that you can animate those parameters or use the host’s scripting capabilities. Even if your host does not have scripting you can still make particles react automatically to an audio track by enabling Beat Reactor:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/08/Beat.png)

After selecting an audio layer (or external audio file based on which host application you’re using), you use Beat Reactor to set frequency ranges and tie them to specific Particle Illusion parameters.

Beat Reactor works in the same way in Particle Illusion as it does in the other Continuum effects that contain it — more information on Beat Reactor here.

Note that if you use Beat Reactor to drive specific Particle Property parameters, and have manually animated those same parameters (or have used your host’s scripting to animate them), results may be unpredictable.

<hr>

<br>

#### **Path/Light/3D Layer Follow** (plugin version, AE only)

In After Effects you can have Particle Illusion emitters follow a path (mask/text) or attach to Lights or 3D layers:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image36.png)

To enable this feature in the Particle Illusion plugin in After Effects, set “Transforms” to “Emitter”, then the “Take Path From” options available are Comp Lights, 3D Layer, or Mask/Text:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image81.png)

</div>

With “Mask/Text” selected, the parameters in the “Mask/Text” section are enabled, and you have several options in the “Choose Path” parameter:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image51.png)

</div>

As seen you can choose to follow all masks simultaneously or sequentially, choose a single mask to follow, or follow text simultaneously or sequentially.

(Note that all of these options are always enabled even if masks or text layers are not present in the composition so you’ll have to know which option you need.)

To trace all text characters or masks at the same time, choose the “Simultaneously” version. This will make copies of the emitter for each letter (or mask).

Next you select the Mask/Text Layer:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image56.png)

</div>

This allows you to have the text/mask on a different layer — the chosen layer does not even need to be visible.

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image92.png)

Note that because of the multiple copies of the emitter, you may want to use the “Number” parameter to decrease the number of particles created.

###### Animate Path Location Parameter

In order to actually trace the letters (or other paths), you need to do one more step: animate the “Path Location” parameter so it starts at 0º and then some time later increases to 359º (or 1 revolution).  You can set it to multiple revolutions if you want the emitter(s) to loop around the path multiple times.

You can use the Path Direction parameter to set the direction of tracing, or even have it trace one direction then reverse.

If you instead want each character or mask to be traced in turn (one after another), choose the “Sequentially” option.  Remember that the emitter position is being offset here, so if the emitter is moving too quickly — when tracing out a long text string for instance — the details won’t be preserved:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image97.png)

The answer is to either have the “Path Location” parameter animate slowly, or only use masks that don’t have small details or corners. (Or stick to the “Sequentially” option.)

**Comp Lights and 3D Layer** are similar to Mask/Text, except the emitters are attached to the selected objects — there is no “tracing” involved — so many of the parameters that were used for mask/text are disabled.

There are several options for selecting which lights will be used:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image61.png)

</div>

Note that if your comp has several lights that will be used for emitters you may want to decrease the “Number” parameter as multiple copies of the emitter will be created automatically.

For 3D layer, you can select a single layer to use for attaching an emitter.

<hr>

<br>

#### **Mask/Text Emission** (plugin version, AE Only)

In After Effects you can not only animate emitter position using masks and text (as seen in the previous section), you can also use masks and text as emission sources.

The "Emitter Type" parameter determines if the emitter will be as defined by PI, or if it will use a mask or text for emission instead:

<div class="imageResize">

![Emitter Type](https://borisfx-com-res.cloudinary.com/image/upload/v1658522375/documentation/continuum/uploads/2022/07%20-%20PI%20docs/PIdocs_mask_emission.png "Emitter Type")

</div>

After selecting "Mask/Text", the "Emission Mask/Text" parameters are enabled:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload/v1658522369/documentation/continuum/uploads/2022/07%20-%20PI%20docs/PIdocs_mask_emission_opts.png)

</div>

The emission options are self-explanatory: "All Masks, Selected Layer", "Single Mask, Current Layer", or "All Text, Selected Layer".

For the options based on "Selected Layer", use the "Mask/Text Layer" selector.

Here's an example using "All Text, Selected Layer":

![](https://borisfx-com-res.cloudinary.com/image/upload/v1658522972/documentation/continuum/uploads/2022/07%20-%20PI%20docs/PIdocs_text_emission.png)

Note that it doesn't matter what the emitter shape was in PI: point, line, sphere, 3D Model. Once you select Mask/Text Emission, it is internally converted into a "line" emitter (that is then fit to the mask or text path). Switching back to "Defined by PI" will restore the original emitter shape.

**Important:** Using masks or text for emission can greatly increase the number of particles that are created, so you may want to decrease the "Number" parameter in the Particle Properties section significantly before selecting mask/text emission.

<br>

It's possible to use both Mask/Text emission and Mask/Text position offset at the same time -- for instance to have particles emitting from text, then having that text move along a separate path.

<br>

- - -

#### **Particle Influencers (Deflectors and Forces)**

Although Emitters are the main objects you’ll be using in Particle Illusion, there are two other types of objects that will influence particles and make your projects more interesting: Deflectors and Forces.

##### **Deflectors**

Deflectors are objects that particles will hit and bounce from. They consist of one or more line segments with parameters to control the amount of bounce and more.

To add a deflector, click the “Deflector” button above the Composite View…

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672425023/documentation/continuum/uploads/2023/pi-docs-v2023/40-add-deflector.png)

…and a deflector made up of two points will automatically be added to the center of the stage:

To move it, click and drag the endpoints:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672425023/documentation/continuum/uploads/2023/pi-docs-v2023/41-deflector.png)

To add points to a deflector, you have two options:

* Add a single point: Alt-click (Windows) Option-click (Mac) anywhere on the deflector line.
* Add many points: Alt-click (Windows) Option-click (Mac) on the last point of the deflector. This puts you in “add point mode”, where each click adds a point. Double-click to add the last point and end, or press ESC to exit without adding a last point.

Deflectors have only a few parameters:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/01/deflector-params.png)

*</div>*

*Angle* — allows you to set the angle of the deflector or rotate it.

*Bounce* — scales the amount of bounce that particles have when colliding. Note that if the particle type or emitter “Bounce” values are zero, adjusting this will have no effect.

*Hits* — determines what percentage of particles will hit. Usually you’ll leave this at 100 but lower values might be desirable in some circumstances.

*Thickness* — allows you to increase the thickness of the deflector “line”, which can be useful when you want to simulate particles bouncing off a plane instead of a line.

*Randomness* — adds a random component to the bounce vector, which can result in a more realistic simulation especially for natural effects like water.

*Break Particles* — when checked particles will break when they hit, and more parameters are revealed:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/11/BreakParticles.png)

*Min* *Pieces* and *Max Pieces* determine how many pieces are created. You can set the minimum to “1” so some particles do not break on every collision.

Note that Min Pieces must be set less than or equal to Max Pieces.

Velocity Randomness — adds some variation to the broken particles’ bounce vector. When 0 or very small, the particle pieces will be on top of each other.

(Remember that there is a Particle Type Property that can be used to keep certain particles from breaking on deflectors.)

The deflector itself does not have a position that can be animated, but each point that makes up the deflector will display its position in the controls view under the “Deflector Line Points” group:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/01/deflector-points.png)

You can animate the position of these points in the same way as emitter position can be animated (by dragging in the Stage with the appropriate animate buttons set, by using the “create key” button, etc.)

A few things to note about deflectors:

* When bounce is 0, particles will “sink” through a deflector. (To fix this, set bounce to 0.1 or 1%)
* Only moving particles will hit a deflector. If the particles are not moving but the deflector is, collisions will NOT happen.
* Particles may “leak” where two deflector segments meet.
* With high Position Turbulence values, deflectors may not work as expected (or it may be very difficult to see that they are working)
* Deflectors are currently 2D (projected into 3D), so in a 3D project they work a bit unpredictably — especially when the camera is animated.

<br>

##### **Forces**

Force objects apply an acceleration to any particles that enter their area, a bit like wind (or a magnet depending on the force type). Force objects can also provide the complex, organic movement of fluid dynamics to your project.

To add a force, click the “Force” button above the Composite View…

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672425565/documentation/continuum/uploads/2023/pi-docs-v2023/42-add-force.png)

…and a Force object will be added slightly offset from the center of the Stage (to make it easier to drag and reposition).

There are three types of force objects in a 2D project: *Area*, *Grid*, and *Point*. The type is set using the “Type” parameter, with “Area” being the default:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1588796526/documentation/continuum/uploads/2020/05/particleIllusionForceObjects.png)

In a 3D project the types list is modified; you can choose from *Box*, *Box Grid*, and *Sphere*:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/07/image88.png)

</div>

&nbsp;

##### **Area Forces**

Area Force objects are rectangular, with dimensions set by “Width” and “Height”:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload/v1588796796/documentation/continuum/uploads/2020/05/particleIllusionForceObjectsWidthHeight.png)

</div>

The “Direction” parameters sets the angle of the force, and the “Strength” determines how much force is applied. 

![](https://borisfx-com-res.cloudinary.com/image/upload/v1588797642/documentation/continuum/uploads/2020/05/particleIllusionForceStrengthNegative.png)

Note that “Strength” can go negative, and will then move particles opposite to the direction parameter.

&nbsp;

##### **Grid Forces**

Grid Forces are rectangular like Area Forces, but the rectangle is divided into a grid of cells:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1588797747/documentation/continuum/uploads/2020/05/particleIllusionForceGrid1.png)

In addition to the parameters that the Area Force has (Strength, Direction, Angle, Width, Height), a Grid Force has Grid X and Grid Y parameters to set the number of horizontal and vertical divisions, and Variation parameters for Strength and Direction.

With Strength Variation and Direction Variation both set to “0”, a Grid Force behaves exactly like an Area Force: all particles that enter it are accelerated the same amount, in the same direction:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1588797823/documentation/continuum/uploads/2020/05/particleIllusionForceGrid2.png)

When Strength Variation or Direction Variation are non-zero though, that’s when things get interesting. Let’s start with Direction Variation, as it has the biggest impact. With Direction Variation set to 90 (degrees) and an 8×8 grid, this is what we get:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1588798002/documentation/continuum/uploads/2020/05/particleIllusionForceGrid3.png)

The emitter was moved slightly from the previous image to help illustrate a point: each cell of the grid now has a different direction, as indicated by the arrow in each cell.

With Direction Variation set to the maximum (360 degrees), each cell will point in a random direction. Depending on the placement of the emitter, the Strength value, and a few other options (Strength Variation, the velocity of the particles, number of grid cells, etc.) you can get very complex, organic particle motion:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1588798210/documentation/continuum/uploads/2020/05/particleIllusionForceGrid4.png)

The motion becomes even more interesting if the emitter and particles move into different cells over time. For example animating the Position, Angle or Direction of the Force can result in very sophisticated particle motion.

*Note that the “Random Seed” parameter can be changed to get a different pattern for Strength and Direction Variation.*

*&nbsp;*

##### **Point Forces**

The final type of Forces are Point Forces. A Point Force is quite different from Area and Grid Forces in that it is circular, not rectangular:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1588798336/documentation/continuum/uploads/2020/05/particleIllusionForcePoint1.png)

Also, it does not have a “Direction” parameter as all particles within its active area are accelerated toward the center point. You can think of Point Forces as “attractors”.

Since particles that pass very close to or even through the center point will have very large acceleration, Point Forces have a “Min. Distance” parameter that creates a smaller circle of no additional acceleration — essentially it makes it easier to avoid “stray” particles that have huge velocities.

In the same way that a negative Strength value will reverse the acceleration direction in Area and Grid Forces, a negative Strength turns a Point Force into a particle repeller:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1588798422/documentation/continuum/uploads/2020/05/particleIllusionForcePoint2.png)

This makes Point Forces ideal for pushing particles out of the way.

&nbsp;

##### **Box, Box Grid, and Sphere Forces (3D)**

In 3D the “Box” type is almost identical to the “Area” force, but it adds a Depth parameter. So too the “Box Grid” type is almost identical to the “Grid” type, and “Sphere” is the 3D version of the 2D “Point” force — they behaved identically but in 3D.

Adding Forces to your projects, especially Grid and Point Forces, will give you advanced particle motion that you won’t be able to get any other way in Particle Illusion.

Note that Force objects can be saved in Particle Illusion project files, as host presets (loadable through the FX Browser), but they cannot be added to an Emitter Library.

<br>

#### **Fluid Dynamics**

To enable fluid dynamics in a force object, simply check the “Enable Fluid Dynamics” force parameter:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672426003/documentation/continuum/uploads/2023/pi-docs-v2023/43-force-params.png)

(Note that it is possible to have only a single fluids force object in a project. Once fluids is enabled for one force, all remaining forces won’t show the “Enable Fluid Dynamics” parameter.)

Once enabled, the fluids parameters will be displayed:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672426003/documentation/continuum/uploads/2023/pi-docs-v2023/44-fluids.png)

“Viscosity” sets the thickness of the fluid, where higher values restrict the flow more and allow less turbulence. Think of 0.0 as more like water, and higher values acting more like the particles are moving in oil:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/12/image100.png)

“Swirl Amount” adds turbulence to the fluids. In projects with a single emitter and no additional force objects, the fluids might move in a fairly calm “stream” — there’s nothing that stirs things up. Adding some “Swirling” can help give the particles that organic turbulent flow that you’d expect in a fluid simulation.

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/12/image45.jpg)

Note that if “Swirling” is set too high, the simulation can become unstable, causing particles to move in unexpected ways. For this reason it’s best to keep “Swirling” to values of 40.0 or less.  When particles are moving very quickly though, higher values of “Swirling” may be required.

"Swirl Turbulence" will add a secondary turbulence that can add more "detail" to the swirls. *(Lower values seem to produce the best results, so don't set this too high.)*

“Simulation Detail” controls the resolution of the fluid simulation, with lower values calculating more quickly but giving less detailed results. In a 3D project you can choose from three levels of detail. Note that the highest setting does not always produce the best results — often the larger motion of lower settings is more appropriate.

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/12/image114.png)

<br>

##### **Fluid Simulation Motion**

It’s important to understand that the motion of fluids in Particle Illusion is supplied completely by the particles themselves. Stated another way, it’s the particles that move the fluids. Therefore if your particles are not moving much, you won’t see much fluid motion either.

In practice this means that you may need to increase the velocity or weight of the particles when added to a fluids project.

Since forces act on particles, force objects can also be used to control the movement of the particles — and therefore the movement of the fluids. Note that the fluids force object is the biggest contributor to this — other force objects added inside a fluids force will need their strength values set quite a bit higher than that of the fluids force object to influence the particles.

The type of the fluids force object is quite important to the overall look of the fluids, so switch between the different types (Box, Box Grid, Sphere) to see the effect on the overall look.

Some things to keep in mind about fluids:

* Particles that move outside of the force area are no longer affected by the fluid simulation. (If you see some particles that seem to be moving too fast or are not swirling as expected like the rest of the particles, check to see that they aren’t moving out of the force area.)
* Box and Box Grid forces have a “depth” parameter that may need to be increased.
* A positive value for “Strength” in Sphere forces attracts particles to the center. With high enough values, can create an interesting “suction” or “down the drain” effect.
* A negative value for “Strength” in Sphere forces repels particles. This can help to create more dynamic “burst” type fluid effects.
* Animate the fluids force “Strength” between positive and negative to create more complex effects.
* The position of the fluids force can be animated.

Note: **It is possible to have only one fluids force object in a project.** Once fluids is enabled for one force, all remaining forces won’t show the “Enable Fluid Dynamics” parameter. This applies to Library Scenes too: if your project contains a fluids force already, the fluids force in a Scene will not be added to the project.

&nbsp;

##### **Affect Fluids and** \

**Affected By Fluids Parameters**

Once fluid dynamics are enabled in a project, all emitters in the project will have a two new parameters visible, “Affect Fluids” and "Affected by Fluids":

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672426329/documentation/continuum/uploads/2023/pi-docs-v2023/45-affected.png)

"Affect Fluids" allows you to set how much influence each emitter in a multi-emitter project will have on the fluid motion, and also allows you to scale the amount of motion an emitter provides. Lower values mean less influence, and a value of 0 means that the particles of this emitter will not contribute to the fluid motion at all.  They will still be affected by forces, which will then move the fluids, and they are still affected by fluid motion, but their velocity and weight won’t change the fluids.

"Affected By Fluids" adjusts how much each emitter's particles are influenced by fluids. When set to values less than 100 (percent), the particle motion for this emitter is a mix of the original particle motion (without fluids) and the motion of the fluids. Setting it to 0 will make this emitter "ignore" fluids completely -- at least with regards to particle motion.

Using these two parameters, it's possible to have particles that do not contribute to the fluid motion, but are moved by the fluids. Conversely, it's possible to have particles that move the fluids but are not moved by them.

<br>

##### **Fluids in 2D**

Fluids works in 2D projects too, providing a different look than in 3D projects and usually calculating faster:

![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/12/image11.jpg)

In 2D projects, the “Simulation Detail” parameter allows higher settings than in 3D projects. Like in 3D projects, higher settings may not always produce the best results, so experiment!

<hr>

<br>

#### **Standalone vs Plugin Mode**

Although you’ll typically use Particle Illusion as a plugin applied to a layer in your host, it’s also possible to launch it as a standalone application. Only in standalone mode will you be able to modify the Project Settings.

##### **Project Settings**

The Project Settings Window allows for customization of the current project: Stage size, Duration, Frame Rate and other features. (When PI is launched from a host such as Adobe After Effects, many of these parameters are pulled directly from the host itself, and cannot be changed).

<div class="imageResize">

![Project Settings](https://borisfx-com-res.cloudinary.com/image/upload/v1672427003/documentation/continuum/uploads/2023/pi-docs-v2023/46-project-settings.png)

</div>

Motion Blur is a key feature that adds realism to many of the emitters, and when turned on in a project (using the “Enable” checkbox here or the “Stage – Motion Blur” menu) these are the settings used. You probably won’t want to change these values, but this is what they do:

* Total Frames. This sets the number of frames of motion blur to use. Note that motion blur requires multiple copies of each particle to be drawn, so although higher values result in smoother blurring, it takes longer to render. The default value of “4” is a good compromise between quality and performance.
* Blur Amount. The amount of the distance between frames that the blurring occurs. When set to 100% the particles are blurred the entire distance they would move between the two frames. When set to 50%, the blurring will occur in ½ the distance. (When set to 0% no blurring occurs.) 

“Mipmap Setting” allows you to override the mipmapping settings contained in each particle type. The default setting is to use the settings contained in the emitter (set per particle type), but you can also force mipmapping on or off for all particles. (As a reminder, mipmapping uses resampled copies of the particle image shape texture for smaller sizes, which reduces aliasing — jagged edges — and can result in a higher-quality but “softer” render.)

<br>

<hr>

#### **The Preferences Window**

The Preferences “General” Panel is where you set the default project settings and other aspects of the application.

Set Stage Size (resolution), Pixel Aspect ratio, Duration, and Frame Rate here:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672427003/documentation/continuum/uploads/2023/pi-docs-v2023/47-prefs.png)

</div>

It’s important to realize that changing the Stage Size and other settings in the top part of this dialog does NOT change the current project — it only applies when a new project is created.

The preferences below the stage size section are application settings:

The “*Click in Stage to Add Emitter*” option can be unchecked if you find yourself accidentally adding new emitters to the Stage by clicking. Note that if you uncheck this option, the only way to add an emitter to the project will be to double-click its name in the Emitter Library Browser.

“*Show Stage Tool Tips*”: When checked, tooltips show in the Stage (Composite View) when the mouse cursor is over something that can be clicked or dragged:

![](https://borisfx-com-res.cloudinary.com/image/upload/v1672428114/documentation/continuum/uploads/2023/pi-docs-v2023/49-tooltips.png)

Although these tooltips can help you know what will be clicked — especially useful in projects that contain many overlapping emitters, forces, and deflectors — you may find them to be intrusive.

"*When SHIFT Held*" allows tooltips to be shown only when the SHIFT key is held -- an easy way to toggle Stage tooltips on-demand. Note that this is only visible when "Show Stage Tool Tips" is checked.

“Use High-Quality Playback”: When checked particles are rendered to an offscreen buffer giving highest quality results. When unchecked, particles will render directly to the window, which can give a performance boost on some older hardware and OSes. Note that when motion blur is turned on this setting is ignored — particles are rendered to an offscreen buffer as if this setting were checked.

“*Add New Emitters at Frame 0*”: When checked an emitter is always added at frame 0. When unchecked, the emitter will be added at the current frame.

“*Play Sound When Render Finishes*”: when using the render feature (to save ProRes output for instance) a sound will play when the render completes if this is checked.

“*Show Particle Count and Project Dimensions*”: when checked this information is displayed above the Stage. Since the particle count is always updating, some users may find this distracting — you can turn this information off here.

"*Always Open All Parameters*": when checked, all parameter groups will always open, which makes all parameters easily accessible. We do mean "always" -- If you close a group then select another node, when you come back to this node the group will be open again. If you are using a relatively low screen resolution, you may want to uncheck this option and open the closed groups manually. (Note that some groups like "Properties" will always open by default regardless of this setting.)

<br>

The Emitter Search Options:

* “*Search Folder Names*”: the folders in each emitter library are included in search results. When this option is checked all emitters in that folder will be included in the results if the search term is in the folder name. (This is not usually desired so is unchecked by default.)
* “*Search Tags*”: If you want to search only on emitter names you can uncheck this option. (It is checked by default as there are many emitters with names that are not descriptive.)
* “*Display Tags in emitter library*”: when checked, each emitter’s tags will display after its name (only in Library View).

“*Clean project data on open*”: If you’ve done a lot of work with changing particle shapes in your emitters, or have added particle types, added and deleted emitters, etc., you may find that your PI project (or host project) has become unexpectedly large in size (larger than expected file, using much more memory than seem reasonable, etc.) If you have this preference enabled, using the “load” function to open a saved PI project file should remove any excess bloat from the file and get it back to optimal size.

“*Enable Verbose Logging*”: When checked, extra information is added to the Particle Illusion log file. This in theory will decrease performance, but in practice this slowdown is not noticeable. The extra information logged will help us diagnose any problems you may have.

The “*Show Log*” button will open the log file so you can view it. Note that if you contact support you will probably be asked for this file.

"*Enable Crash Reporting*": When checked, anonymous crash reports are generated and uploaded. This is very helpful to us to increase the stability of Particle Illusion, so please do not disable this -- or enable it when you have a repeatable scenario that causes crashes.

"*Show Library Loading Error Messages*": When a library can't be loaded by Particle Illusion (which usually means it was created in a newer version, or has been corrupted) an error message is displayed at startup (when loading libraries). You can disable these messages using this preference.

“*Mipmap Setting*” allows you to override the mipmapping settings contained in each particle type. The default setting is to use the settings contained in the emitter (set per particle type), but you can also force mipmapping on or off for all particles. (As a reminder, mipmapping uses resampled copies of the particle image shape texture for smaller sizes, which reduces aliasing — jagged edges — and can result in a higher-quality but “softer” render.)

“*Default Keyframe Type*”: determines if the keys created in the graph view and Stage are “Linear” or “Bezier” when created. This defaults to “Linear” but if you find that you mainly use Bezier keys, you may want to change it here.

“*Zoom Sensitivity*”: Input devices have different scrollwheel speeds — for instance a trackpad may be too sensitive to allow it to zoom the Stage in a controllable way. By increasing this value you can decrease the sensitivity of zooming in the Stage: lower values zoom faster, while higher values zoom more slowly.

<br>

#### **HUD Settings**

There is a second page of preferences to set the HUD colors:

<div class="imageResize">

![Heads Up Display Preferences](https://borisfx-com-res.cloudinary.com/image/upload/v1672427003/documentation/continuum/uploads/2023/pi-docs-v2023/48-prefs-hud.png)

</div>

Here you can set the colors used for the Emitters, Deflectors, and Forces, but the opacity of the HUD as well. In addition you can control:

* HUD Opacity. This slider controls all HUD objects including tooltips
* HUD Object Line Width. Set to a higher value to draw HUD objects with thicker lines for increased visiblity, or a lower value for a more unobtrusive, refined look. 
* HUD Path Point Size. Controls the size of the position points, when an object's position is animated. 

Note that if you are unable to see the HUD even when it is turned on, check these preferences to ensure that the Opacity has not inadvertently been set to a very low value. *(Note that you will not be able to set this lower than 20 percent. If you want to turn off the HUD, use the HUD button above the stage.)*

<br>

#### **Resetting Preferences**

In the event that Particle Illusion won't start up, or the application starts but the UI window is not visible, the recommended action is to reset the preferences. This has previously been difficult, as it required you to locate the the file, delete it, and reboot (Mac) or edit the Registry (Windows). Starting in v2022.5, it's easy:

**To delete the preferences, just hold the SHIFT key when launching PI.** 

If successful, PI will open and you will see a message confirming the reset:

<div class="imageResize">

![](https://borisfx-com-res.cloudinary.com/image/upload/v1658528196/documentation/continuum/uploads/2022/07%20-%20PI%20docs/PIdocs_prefs_reset.png)

</div>

Note that resetting the prefs in this way will be indicated in your PI.log file, and the preferences values will be added to the log too.

<br>

<hr>

#### **PI.Log - Diagnostic Log File**

Particle Illusion will write various kinds of data to a diagnostic log file. This is not usage data, but information that could be helpful to us when providing support.

Here is an example of the log file from a short Particle Illusion session:

![PI log file.](https://borisfx-com-res.cloudinary.com/image/upload/v1672430870/documentation/continuum/uploads/2023/pi-docs-v2023/50-logfile2.png)

Note that most of the data in the PI.log file is generic/anonymous, except for cases where a filename or path error message is logged. Since those items may contain sensitive information, they have been flagged with the label "(CUSTOMER DATA)". This has been done so you can search the log file for that string to see if there is anything you might want to remove or edit before sending to us.

Remember that you can easily view the log file using the "Help - View Log File" menu.

(The newest data is found at the bottom of the file.)

<hr>

<br>

#### **Keyboard Shortcuts**

<br>

**Spacebar**        Toggle Playback

**PgUp or L arrow**    Previous Frame

**PgDn or R arrow**    Next Frame

**Shift+L arrow**        Jump 10 frames back

**Shift+R arrow**        Jump 10 frames forward

**Home**            Jump to first frame

**End**            Jump to last frame

**Mousewheel**        Zoom Stage (when cursor over Stage)

**F**            Zoom Stage to Fit

\
<br>

**Cmd B/Ctrl+B**        Toggle Motion Blur in Stage

**delete/backspace**    Stage: delete selected object

**delete/backspace**    Graph View: delete selected keys

**delete/backspace**    Emitter Library Browser: remove the selected emitter from library (if unlocked)

**Cmd/Ctrl+T**        Update selected library emitter thumbnail from preview (if library unlocked)

\
<br>

**Cmd/Ctrl+1**        Load the Default View Layout (all views visible in default sizes)

**Cmd/Ctrl+2**        Load the “Edit” View Layout (hides Emitter Library Browser and Preview)

**Cmd/Ctrl+3**        Load the “Create” View Layout

**Cmd/Ctrl+4**        Load the “Browse” View Layout (only Emitter Library Browser and Preview visible)

<br>

**Cmd/Ctrl+S**        Save Project (using current file name)

**Shift Cmd/Ctrl+S**    Save Project As (with a new file name)

**Cmd/Ctrl+O**        Open Project

**Cmd/Ctrl+N**        New Project

**Cmd/Ctrl+Z**        Undo

**Shift Cmd/Ctrl+Z**    Redo

<br>

Cmd/Ctrl drag an emitter or force in the Stage to move the entire position path (when position is animated)

Option/Alt click on a position key in the Stage to toggle between Linear and Bezier.

Option/Alt click on a bezier handle in the Stage to disconnect from the other handle (disconnected handles move independently of each other). Option/Alt click on either disconnected handle to connect them again.

Cmd/Ctrl drag the start frame handle of an emitter, deflector, or force to change the active frame without moving any keyframes.

Option/Alt click on a deflector or line emitter segment to add a point. 

Option/Alt click on the last deflector or line emitter point to enter “add points” mode -- each click will add another point until double-click or ESC.

Shift+drag CTI, Start Frame Bar, or In/Out markers to jump by 5 frames

<br>

<hr>

<br>

(end of document)