{
"date": "2019-06-12",
"title": "Title Studio- Creating an Animated Lower Third",
"category": "BCC 3D Objects",
"link": "title-studio-creating-lower-third/"
}

 
In this section we will look at creating a basic animated lower third. A lower third is a graphic or banner with text that appears at the bottom lower third of your screen. Lower Thirds can range from simple text and a banner to more complicated animations that use shapes, text, shaders and 3D models. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L31.png)
For this tutorial we will focus on creating a basic dual banner using *spline objects*, animating them, adding primary and sub text, and setting up *rigid runs* to keep the animation consistent regardless of the length of the clip the preset is applied to. 


You can create a new Title Studio project any length you want, but for this tutorial, we will be working with a project length of 5 seconds. While this tutorial will go into depth on how to create the effect, it’s recomended that you review the basics of Title Studio, such as creating text and animating keyframes before you continue.


### Step 1: Creating the Main Banner


The first step in creating any kind of lower third is to set up the motion graphic as it will appear when it’s fully on screen. Don’t worry about animating it on or off yet, let’s just focus on creating the finished look.


* In the Timeline window, select **Add New Media** and choose *Spline Object*. You can also create a new spline object by selecting the **pen**, **rectangle**, or **circle** tool and clicking in the composite window.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L32.png)
* A new scene container is created and a default, empty Spline Track is created. Using the **Rectangle Tool**, draw a rectangle object in the lower third of the screen. Leave extra room at the bottom for the subtext banner, which we will cover in a moment.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L33-1-1024x562.png)
* With the **pen tool** selected, select the *Spline Object 1* track in the timeline. This will allow you to select a specific point in the spline object and change it’s position. You will **only** be able to do this if the Spline Object 1 track is selected. Using the pen tool, adjust the top left point and the bottom right point so that you create a bladed look to the banner. Use the spline object outline to make sure that the sides are level. It will appear jagged if the edges are not straight.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L34-1024x559.png)
* To change the track texture, make sure that the *Show/Hide Material Track* is enabled, and then select the *Shader – Texture* track. Here we can change the Type to **Flat Texture**. This will prevent the texture from reacting to the light source.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L36-1024x375.png)
* Next, select the Material Track, and go to the Fill Tab. The color chip will allow you to set the color of your primary banner. In this example we will set it to blue.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L37-1024x359.png)
* Lastly, Select the main Spline Track and right click to bring up the contextual menu and select rename track. This will allow us to chang it’s name to Main Banner.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L38.png)
### Step 2: Creating the Sub Banner


To create the second half of the banner where our subtext will go, we will want to repeat the process used in Step 1, however there is a faster way to quickly create a sub banner.


* Right click on the Main Banner track and select Duplicate. This will create a duplicate track that we can modfy to fit our needs.
* Because our sub banner will need to animate from behind the Main Banner, track order is very important. Select the LOWER copy of the Main banner and rename it Sub Banner.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L39.png)
* Next, select the Material track and in the Fill Tab, change the color to white. We won’t be able to see it at the moment because it’s hidden behind the main banner itself.
* With the Sub Banner’s *Spline Object 1 track* selected, use the Solid Arrow tool to reposition the sub banner slightly below the main banner in the composition window.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/l310-1024x556.png)
* Lastly, select the spline object 1 track and, with the solid arrow tool selected, drag the bounding box in to shrink the shape so that it aligns with the main banner as seen in the photo.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L311.png)
### Step 3: Creating the Text


Creating the text is the easiest part of the exercise, and is largely up to you how you want to design it. In this case we will want to create two seperate text tracks.


Feel free to experiment with different fonts, kearning and sizes to get the look that works for you. But ultimately, once you’ve set up the text as needed, it’s time to animate the effect.


* Using the **Text Tool**, or the **Add New Media button**, create a new *flat text track*.
* In the *text generator window*, we will edit the text, font and size as needed and then position the text in the center of our Main Banner.
* Next, we’ll create another text track, this time changing the color to black in the text generator window, making the font a bit smaller and then position it at the center of the sub Banner.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L312-1024x555.png)
### Step 4: Grouping the Lower Third Elements


The goal to animate this lower third will be to have the main banner slide on from the left of the screen, and then have the sub banner drop down from behind. It will then animate off in reverse.


To do this, we will first want to group the various elements into 3D Containers. This will allow us to animate each seperately, as well as together. 


* *Track order* will come in to play here, and to maintain the look, the first thing I want to do is drag my Subtext Text Track *below* the Main Banner and above the Sub Banner in the timeline. This will place the text behind the main banner, but in front of the sub banner.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L313.png)
* Next, I want to group my elements. I’ll do this by, with *shift held down*, selecting the **Main Title Track**, and the **Main Banner** to select them Both. Once that is done, I’ll select **New 3D Container** from the **Add New Container Button**. This places both objects inside of a 3D Container, which I can rename ***MAIN BANNER***.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L314.png)
* I will also do the same thing with the Sub Text and Sub Banner. However, be aware that when I do, *the new container will be placed above the Main Bander container*. It’s important to **drag this container to the bottom of the stack below the Main Banner container**, so that the effect looks correct. I will rename this container ***SUB BANNER***


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L315.png)
By doing this, I am now able to animate the position of either the individual tracks, or the container that contains them both. This makes it easy to move tracks individually or as a group. 


In fact, lets, select **both the Main and Sub Banner Containers** and place them inside of a **new container**, which we’ll rename *LOWER THIRD*.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L316.png)
Now, we can control each element, each section, and the whole lower third as a group. Very handy, and very nicely organized.


Okay, lets begin animating…


## Step 5: Animating the Lower Third


To begin with, lets move the CTI to about the 20 frame mark and select the Lower Third container track.


* at the 20 frame mark, we will set a Position X *hold interpolation keyframe*. This is the point at which we want the Lower Third to pause in it’s end position.
* Next, move the CTI to the first frame and, with the Lower Third container track selected, *move the whole thing off screen to the left*. You’ll notice that a hold keyframe is created for the Position X value in the container tab.
* Select the hold interpolation keyframe to bring up a menu of available interpolation settings. Lets select Decelerate. This will cause the lower third to slow down as it gets to it’s final position.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L317-1024x492.png)
While we’re at it, lets animate the effect off at the end.


* Move the CTI to about 20 frames from the end of the clip, and set a **Hold Keyframe** for the **Position X value**. This is temporary, but it allows us to set things up correctly.
* Next, move to the very last frame, and move the **Position X** value off screen to the left, as we did before. This will automatically create a hold value at the end.
* Lastly, select the previous keyframe and change the interpolation value to **Accelerate**. This will change the animation so that the effect speeds up as it moves back off screen.


One final thing we can do is animate the sub text so that it slides on after the Main Title has animated on. To do this, we are going to have it drop down from behind the Main Banner.


Since this will animate seperately from the man banner, we will want to make sure that the **Sub Banner** container has been selected.


* Move the CTI to about the 1:10 mark and set a **Hold Keyframe** for the **Position Y Value** for the *Sub Banner*
* Next, move the CTI back to frame 20, where the main animation ended previously. Here we are going to move the *Sub Banner* up so that it is hidden behind the *Main Banner*.
* Now, before we change it’s interpolation value (currently set as Hold), **go back to the first frame** and set that interpolation value to Hold as well. *And set the Position Y value to match the value at frame 20*. The reason we want to do this is so that we don’t inadvertantly create an animation between frame 1 and frame 20. We want the sub banner to stay hidden until frame 20.
* Next, select the keyframe at frame 20 and change the Position Y interpolation value from Hold To **Decelerate**.
* Lastly, repeat the same process as before to animate the effect off. Or, feel free to leave the sub baner as is, so that it’s text remains visible while animating off. It’s up to you!


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L318-1024x528.png)
### Step 6: Rigid Runs


One important feature of Title Studio is the ability to easily create what’s known as Rigid Runs. In this tutorial we have created an effect based off a 5 second clip. However, often, the presets we create will need to be applied to clips of varying length. If our Lower Third preset was applied to a 10 second clip, the animation that we created for 5 seconds, would now take 10 seconds to animate. While this would be perfectly fine for the main section where the lower third is fully displayed, it would cause the on and off animations to render half as fast as we originally wanted them to.


To keep animations exact, but allow for the non-animated portions to stretch to fit the length of a clip we can employ Rigid Runs to define the areas where Title Studio should use the original animation length. 


In our example, we would want to place a rigid run at the very begining, until the 1:10 mark, when the animation ends.


To do this, right click on the timeline and select **Add Rigid Run.** 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L319.png)
This will create a **red adjustable range marker** in the timeline wherever the CTI is located. Simply **drag the left range** **marker** to frame zero, and then **drag the right range marker** to the 1.10 mark.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L320.png)
Title Studio will now maintain the animation timing within this range. In essence, regardless of the clip length, the animate on effect will always take 1:10 seconds. 


Repeat the Process for the Animate Off portion of the effect. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/L321-1024x531.png)
Now, Title Studio will always maintain the timing for the animate on and off, but allow the main section of the effect to stretch to fit the clip. 


NOTE: Because Rigid Runs maintain the animation timing of a section of the motion graphic, if the Motion Graphic is applied to a clip that is LESS THAN the length of the original Rigid Run, the effect will not render correctly, because the animation will overlap.


Always make sure that you apply an effect with a Rigid Run to a clip of equal or greater length.


