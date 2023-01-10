{
"date": "2019-06-12",
"title": "Title Studio- Understanding Track Structure",
"category": "Title Studio",
"link": "title-studio-track-structure/"
}

 ### Overview


Title Studio allows you to create static effects whose parameters do not change over time, or you can animate the effect’s parameters using keyframes. Effect controls are hierarchal, allowing you fine tune a specific element, or make larger changes that effect multiple elements in multiple objects. Title Studio uses a track structure similiar to those seen in Boris Red and Blue.


### Understanding Track Structure


Every effect in Title Studio is made up of multiple tracks. The basic track types include 3D Container tracks, Title Container tracks, Shape tracks and Material tracks. Each track type is briefly covered in the following section and then in an entire subsequent chapter.


To begin, click one of the *Add Media* buttons to begin creating an effect. This example uses the *Add  Text  Page*, or *Ctrl+Shift+T*.


Once created, you can see that several tracks appear in the Timeline.


![tracks](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/tracks.png)


Each track controls a particular element of your effect.  In this example, the highest level track is the **Scene Container**. There are two types of Scene Containers:


* **3D Containers**, which give you the ability to independently animate and adjust tracks
* **Title Containers**, which allow you to create crawls, rolls and other credit effects.


The second track is known as the **Shape Track**. This track gives you the ability to change the overall shape of your effect. In this instance, since we have create a new Text Page, the track name displays the default text (*Boris FX*). By default, Text tracks will reflect the contents of the Text Window.


The **Material Track** allows you to make changes to the look and behavior of your effect.


Lastly, we have the **Texture Track**. This track allows you to make changes to surface texture and reflectivity.


 


Lets take a closer look at how each Track functions in an effect.


 


## Working With Scene Containers


The highest level of an effect is the **scene container**. Any effect you create must be contained with in either a 3D Container, or a Title Container. Think of the Scene Container as a stock pot. On its own it doesn’t do much, but when you put in a few ingredients, it is one of the most important parts of making soup. Scene containers hold all  the various elements of your effect in one place, and allow you to make changes to **all** the elements in an effect at once.


Title Studio has two distinct types of Scene Containers: **3D Containers** and **Title Containers**, and while they both serve different functions, they do share very specific control parameters. Selecting the Scene Container gives you access to the following parameters in the Controls window:


* **Container Position** allows you to make global changes to the position, scale and rotation of the entire effect. Changes made here will affect all elements in the effect while preserving the relationship between the 3D objects.
* The **Camera** tab allows you to make adjustments to the position, orbit and pan parameters for up to 5 cameras. This gives you the ability to animate the camera through the scene.
* The **Lights** tab controls the overall lighting for a scene. You have the ability to create three distinct light sources, adjust their position, distance, color, intensity and attenuation. You can also switch between *Point* and *Spot lights* as well as *Shadow lights* to cast distinct shadow patterns on 3D Objects.
* The **Render** tab contains parameters for adjusting the render quality of the effect. You can add environment maps and adjust the motion blur settings.


 


**Title Containers** are a type of scene container that are used exclusively for creating and manipulating various title effects. While they have similar control parameters to a standard 3D Container, they also give you access to the following parameters in the Controls window:


**Animation Style** determines how the text in the container behaves. Title studio gives you the ability to create crawls, rolls and other type on effects. Some styles that are available to you are:


* Roll: a standard style of rolling text commonly seen at the end of film and television productions. Text moves from the bottom of the screen to the top.
* Crawl: animate a line of text to move along the X axis to simulate the standard news information crawl.
* Fade: text fades in and out similar to the opening credits of many television and film productions.
* Zoom: text flys towards or away from the camera.
* Shuffle: Text appears in a random order.
* Type On: precise controls to adjust the way your text animates on and off.


**Composite** determines how your text interacts with other layers in your effect.


 


**3D Containers** are a type of scene container that are used exclusively for creating and manipulating various 3D and 2D animation effects. If you are launching Title Studio from the host plugin, for example After Effects, Vegas or Media Composer, a default placeholder container is created. This may be deleted if you wish to start from scratch.


At it’s core, a 3D Container allows you to apply parameters to multiple 2D and 3D Shapes. For example, if you want to resize several shapes by the same amount, you can adjust the *Scale* parameter of the container, rather than scaling each track individually.


3D containers provide several advantages:


* You can *combine* objects with multiple pivot points.
* You have the freedom to adjust *individual* tracks at any time.
* Effects take *less time* to create because you do not have to manually group objects.


In the example below, three 3D Extrusion tracks have been placed inside of a 3D Container. Because the scaling and position adjustments were made at the container level, the spatial relationship between the tracks remain constant.


**Remember**: You can always adjust any individual tracks by selecting the track and adjusting it’s parameters in the Timeline, Composite Window, or Controls Window.


 


### Creating a 3D Container


When you create a new effect, that effect is automatically nested inside a 3D Container track. However, your timeline can included an unlimited number of 3D Containers.


To create a 3D Container, select **Track —> New 3D Container** or press **Control-J**. You can also click the Add 3D Container from the button in the Timeline Window.


**Adding Tracks to a 3D Container**


As mentioned before, on their own, 3D Containers don’t do much. There are, however, several easy ways to add tracks to a new container:


* Select a track and drag it into the 3D Container
* Hold Shift to select multiple tracks and then drag them into the container.
* With a track selected, press Control-J or create a new 3D Container. The track will automatically be moved into the new container.


**Deleting a 3D Container**


* To delete a 3D Container track, simply select the track and choose Edit > Delete Track, or press Back Space. Be aware that when you delete a 3D Container, all tracks nested inside the container are also deleted. If you don’t want to delete the tracks nested inside the container, drag them out of the container before deleting the container.


**Copying a 3D Container** 


* To copy a 3D Container track, select the track and choose Edit > Copy, or press Control-C.


**Pasting a 3D Container** 


* To paste a 3D Container track, select the track and choose Edit > Paste, or press Control-V.


**Duplicating a 3D Container** 


* To duplicate a 3D Container track, select the track and choose Edit > Duplicate, or press Control-D.


**Resetting a 3D Container** 


* To reset a 3D Container track, select the track and choose Edit > Reset, or press Control-R.


**TIP**: On their own, 3D and Title Containers give you incredible control over the look of your animation, but they can also be nested within each other to create even more complex effects. Try experimenting with various combinations for exciting results.


 


 


## Working With The Shape Track


In Title Studio, the Shape Track is the most basic type of track. If we go back to the soup analogy from earlier, the Shape Track is a base ingredient that makes up the soup. Just as we would add carrots, celery and onion to our soup, in Title Studio we add Flat Text, Spline Objects, Extrusions and other Media to our effect. *How* those objects are prepared depends on various parameter adjustments which we will get to in a bit.


First, lets look at the various typed of Shape Tracks available in Title Studio. Each type can be added to the timeline by either selecting it from the Track—>New Media menu, or by selecting it from the Add New Media button in the timeline.


* **Flat Text**: A simple text track mapped with a flat texture that does not interact with 3D Lighting in the scene. Shadows and lighting fall off will not be seen on flat text. This media is ideal for basic credits.
* **Flat Text with 3D Lights**: A simple text track mapped with a texture that interacts with 3D lighting. Shadow and lighting falloff  will interact with the text to give it a more realistic look within the scene. This media is ideal for more advanced titles.
* **Extruded Text**: A track that has been extruded into a 3D Object that can be manipulated in fully 3D space. It interacts fully with 3D lighting effects.
* **Extruded Text Type On Text**: An extruded text track that can be animated to type on and then off. Think letters flying into frame, or other dynamic effects. It is fully 3D and interacts with 3D Lighting. This type of effect automatically creates a Title Container.
* **Credit Roll**: A text effect that allows you to import longer text documents (RTF file format) to create credit rolls, scrolls and other animated flat text. Good examples are Lower Third Tickers, Film End Credits, or a Star Wars style opening crawl. This type of effect automatically creates a Title Container.
* **Spline Object**: A spline object is a custom shape that can be manipulated within Title Studio. Spline Objects can be drawn by the user with the Pen or Pencil tools, or they can be created by using the circle or rectangle tools.
* **Spline Primitive**: Is a pre-definied shape that can be manipulated. Spline Primitives are simple shapes such as rectangles, circles, wedges, lines, grids, hearts, stars and arrows.
* **EPS File**: Title Studio is able to import a wide aray of image media. EPS files created in Adobe Illustrator may be imported into Title Studio and converted to spline objects. **NOTE**: The file *must* be saved as an Illustrator 8 EPS file for use with Title Studio.
* **Image File:** Title Studio can import an array of standard image file formats including .jpg, .tiff, .gif, etc.
* **3D Model File**: 3D models created in Cinema 4D, 3DS Max and other modeling programs can be incorperated into your Title Studio scene.
* **Composition File**: Saved Title Studio projects and be brought into a new project. The imported composition file is nested inside of a seperate 3D Container and is fully editable.
* **Gradient**: A simple color or greyscale gradient plane.
* **Color**: a solid color or greyscale plane
* **Video 1 Track**: Video layers take the video from a specific layer within your host application.


 


Each shape track has its own specific set a parameters that allow you to modify the unique properties of the layer. The Control Window automatically displays the parameters specific to the selected shape track. For example: Text tracks have parameters that include a text generator window, Extrusions have parameters that allow modification of the beveling and extrusion depth, etc.


While each type of track has a unique set of parameters, there are global parameters that every shape track shares. These common controls include:


* **Shape Position**: Modifies the XYZ position, scale, rotation, tumble, spin and pivot of an object
* **Surface**: Controls the smoothness of the object’s surface
* **Drop Shadow**: Enables drop shadow controls for the entire object. ***WARNING***: enabling shape-level drop shadow may cause unexpected results with material level drop shadows. See Material Tracks for more information.
* **Composite**: Determines how the object is composited within a scene.


Changes made to shape level parameters affect the object ***as a whole***. To once again return to our soup analogy, think of the shape track as an ingredient. In this case, a carrot. By changing the position at the shape level, we are moving the whole carrot. If the carrot is chopped into smaller pieces, changes made at the shape level are moving *all* the pieces. So too, with our text, splines and other objects, changes made at the shape level  affect the object as a whole, regardless of what adjustments are made to the individual material track parameter.


 


 


