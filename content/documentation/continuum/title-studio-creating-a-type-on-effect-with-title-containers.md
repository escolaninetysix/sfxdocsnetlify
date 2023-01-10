{
"date": "2019-06-12",
"title": "Title Studio- Creating a Type on Effect with Title Containers",
"category": "Title Studio",
"link": "title-studio-creating-a-type-on-effect-with-title-containers/"
}

 Title Containers provide a way to create type-on text effect where each letter is a separate layer that can intersect with other letters in 3D.


### Creating the Type On Effect


To create a new Type on Effect begin by adding a new Title Container using a Timeline shortcut menu


![Type1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/Type1.png)


A new Title Container track will be added to the Timeline and the Control Window will display parameter for that Title Container.


Select Type On from the Animation popup:


![type2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/type2.png)


Once you select **Type On**, a new text track is added to the Timeline with the default *Boris FX* text placeholder and more options are revealed in the Controls Window:


![type3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/type3.png)


You can choose between **Flat** or **Extruded** text to work with. Both will work in true 3D environment but Extruded text will have depth. Let’s choose that.


Notice that the TimeLine now container a separate Extruded shape for each Letter:


![type4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/type4.png)


### Customizing the Type On Effect


Within the Control Window have parameters for **Extrusion Size, Bevel Size and Polygon Count**. Use the first two to achieve the style of text you need and the **Polygon Count** to make text smoother. Higher count will tax your graphics card more so add only as much as needed, checking the final look in the Preview Window set at **High Quality**.


![type5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/type5.png)


The **Type On** text feature allows you to define two stages of the animation – type on and type off or **Reveal** and **Remove**. Both stages are disabled by default so start with checking the box for the first one:


![Type 6](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/Type-6.png)


Note that **Animation Time** is set to 50 percent which means that the type-on effect will last exactly half of your total effect duration. In the middle of the Timeline Window, you will now have a special keyframe:


![type7](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/type7.png)


This keyframe may be dragged to the right or left to change the type-on duration. Alternatively, you can set the numeric value for that duration in the Controls Window.


The type on effect can be accomplished with a combination of several controls: **Fade**, **Scale X, Scale Y, Tumble, Spin, or Rotate**.


All parameters will be keyframed automatically once you set the starting value. For example, of you set **Fade** to 0 each letter will be faded from 0 to 100 percent opacity progressively over the time of the typeon animation, one letter at the time. Now notice the **Overlap** parameter. It allows you to achieve the effect of starting to fade in the second letter before the first one is fully faded in which is sometimes desirable for smoother animations. You can also choose from three different animation styles: **Linear, Accelerate and Decelerate**:


![type8](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/type8.png)


Notice how keyframes for each letter are automatically generated for you in the Timeline.


![type9](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/type9.png)


It is recommended not to attempt to manually alter these keyframes because they will be rebuilt from scratch every time you change another parameter in the Control Window. Because of this, the individual letter tracks are locked with the lock button by default and are not selectable in the Timeline.


An interesting animation can be achieved with **Always Visible** checkbox. Each Letter will be faded in and out in turn while others remain visible all the time. And you can choose the order of letter animation from the Order pop up menu:


![type10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/type10.png)


**Forward, Reverse, or Random**.


To create a type-off effect on the same text press the second vertical button to reveal type-off parameters and check the check box to enable them. Notice that the typeoff timeline marker appears in the timeline. Type-off parameters are similar to type-on parameters from the previous section.


**TIP:** You can overlap type on and type off animations by changing Animation Time control or simply dragging animation markers in the timeline.


![Type11](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/Type11.png)


**TIP:** To reuse this effect on other text animations, one needs to make sure that type-on or type-off animation speed does not depend on the effect length. To accomplish that, create **Rigid Runs** in the area of type-on and type-ff.


To create a **Rigid Run** Option-click on the timeline and choose **Create Rigid Run**


![Type12](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2016/03/Type12.png)


It appears as a dark clip at the top of the timeline. It could be moved and trimmed like a regular clip. Any keyframe within that time interval will maintain its absolute (rigid) timing and will not be re-timed with a change in duration of the effect.


**Performance Tip:** If you attempt to type on a large amount of text (hundreds of letters long), use **Extruded** text instead of Flat text option. Flat text requires one separate Open GL texture per character which may slow down your graphics card.


