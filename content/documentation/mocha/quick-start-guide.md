{
"mocha": true
}

# Getting Started: Mocha Pro

## The Mocha Pro Quick Start Guide!

Mocha's Planar Tracker technology provides 2D tracking data by tracking planes rather than points. The key to getting the most out of the Planar Tracker is to learn to find planes of movement in your shot which coincide with the object that you want to track or roto. Sometimes it will be obvious – other times you may have to break your object into different planes of movement. For instance if you were tracking a tabletop with a vase on top of it, you would want to draw the spline to avoid the flower arrangement in the center of the table -- the vase is not on the same plane as the table and will make your track less accurate.

Think of your objects as if they are low poly models and track the planes most relevant to the data you need. Since There Are No Point Trackers in Mocha, splines are used for both tracking and rotoscoping. This is a different method from standard 1-point, feature, or multi-point tracking tools. If you try to use Mocha like older tracking technology, you will not get successful tracks.

>NOTE: Take some time to learn the software by reading this section, watching our videos, and checking out the documentation. We are confident that you will speed up your workflow. It's time to get Mocha added to your toolbox!

_Download This Footage to Follow Along:_
<iframe src="https://player.vimeo.com/video/87612978" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/87612978">Free Motion Tracking Clips for Training (Non-Commercial)</a> from <a href="https://vimeo.com/mochapro">the Mocha Pro channel</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

* * *

## Basic Tracking:
1. Import your footage.

	![New Project dialog](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/newfile.png)

	Try to only use what you need, use individual shots rather than an entire edit. Working with very long files can be time consuming for the artist and can slow down tracking as it searches for more frames.
2. Select your preferred spline tool, either X Splines or Beziers.

	![New X-spline button](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/spline.png)
3. Draw spline around the planar area that you want to track.

	![Drawing a spline](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/spline2.png)
- You can be fairly loose with your spline because the Planar Tracker is intelligent enough to discard the pixel movement that does not move similarly enough. Scrub through the timeline and find the largest, sharpest, and most parallel to the camera area to begin tracking from; draw your shape there to start with.
4. Track the spline.

	![Track forwards button](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/track.png)

	You can use backwards and forward tracking from wherever it is that you have drawn your spline. You can often get a great result with default settings, but if you're getting a lot of drift, try increasing the Min % Pixels Used. Remember to turn layer cogs (AKA: gears) off when you are done tracking, as those cogs tell you which layers are being used for tracking!
5. Set the Surface Tool.

	![Show surface button](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/setsurface.png)

	The Surface Tool represents the corner pin data where you want an inserted image to be, or the center point of the surface tool becomes your transform data when you export from Mocha. Generally, it is better to align the surface roughly to the area you are tracking so you can easily see how your track is going!
6. Adjust your track if necessary.

	![Adjusting a track](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/adjust-track.png)

	Adjust track is a four point correction that animates over the top of your track. Adjust track is a more advanced section that can be found here.\
- Export the completed track to whatever format you need.

	![Export tracking data dialog](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/export.png)

You can do this via copy and paste for After Effects and Nuke, or you can save and load this data for all other programs.

When you paste or load your Mocha tracking data into the final composite or edit, make sure you are pasting or loading your data in at the first frame of the clip, otherwise your data will not line up. Frame rate, dimensions and pixel aspect ratio must be correct. Make sure these values match the settings in your compositor or editor and inside of Mocha, otherwise your tracking data will not match when you export it. If your transform data doesn't match up in your compositing program of choice, you may need to delete your imported anchor points or recheck your settings. Find more export instructions here.

* * *

## Basic Rotoscoping:
1. Roto follows the basic workflow of the first 6 basic tracking steps.

	![Previously tracked project](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/start_roto.png)

	However, you will need to track everything in individual planes. This means that you need to rotoscope people and animals "paper doll" style. Split everything up at it's movable joint for best results and less keyframes.
2. Draw a new, more detailed rotoscoping shape.

	![Detailed roto shape](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/detailed_roto.png)

	Once you have a good track (as outlined in the Basic Tracking section above), you will need to trace the edges of the objects that you need to rotoscope in detail. Complex roto shapes are not good candidates for tracking.
3. Link your new rotoscoping shape to your original track.

	![Link to track control](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/linktotrack.png)

	In the layer properties, you can use the dropdown menu called "link to track" to attach your finer, more detailed roto shape to your original track. The new shape will now move along with the original tracking layer.
4. You can also just track and roto at the same time.

	![Track and roto on the same shape](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/trackandroto.png)

	This method only works for simple shapes. This is not recommended for complex roto shapes like heads, hair, and wrinkled shirts. However, buildings, walls, smooth organic objects, and any inorganic objects can be tracked and rotoscoped this way.
5. Adjust shapes where necessary.

	![Adjusting shapes](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/adjust-shape.png)

	You will only have to adjust where Mocha shapes slip off your object. Make sure to animate on the "bounce" or "squash and stretch" areas in order to minimize keyframes, like you would in traditional animation.
6. Export the rendered mattes or the shape data in whatever format you need.

	![Export shape data dialog](//borisfx-com-res.cloudinary.com/image/upload/v1531950287/documentation/mocha/images/quickstartguide/export_shape.png)

You can do this via copy and paste for After Effects and Nuke, or you can save and load this data for all other programs.

When you paste or load your Mocha shape data into the final composite or edit, make sure you are pasting or loading your shape data in at the first frame of the clip, otherwise your data will not line up. Frame rate, dimensions and pixel aspect ratio must be correct. Make sure these values match the settings in your compositor or editor and inside of Mocha, otherwise your shape data will not match when you export and import it. Find more about matte export here.

* * *

## Quick Tool Reference
|Tool/Icon |Description
|:--------: |:---
| ![Selection Tool](//borisfx-com-res.cloudinary.com/image/upload/v1531948311/documentation/mocha/images/overview/ICON_Select_001.jpg) | **_Selection Tool:_** This tool selects points of the spline and edges of the surface tool for manipulation.
| ![X-Spline Tool](//borisfx-com-res.cloudinary.com/image/upload/v1531948311/documentation/mocha/images/overview/ICON_XSplines_001.jpg) | **_X-Spline:_** In general X splines work better for tracking, especially with perspective motion. X-Splines have only one control handle for every point, this makes X-Splines faster to use for many people. The shapes still export as bezier splines to any software that Mocha supports. All splines can be feathered with inner and outer edges.
| ![Add to X-Spline Tool](//borisfx-com-res.cloudinary.com/image/upload/v1531948311/documentation/mocha/images/overview/ICON_AddXSpline_001.jpg) | **_Add to X-Spline:_** Adds another X Spline to the same tracking layer to add or subtract information. Subtraction of tracking areas happens where shapes overlap, and addition happens where shapes do not overlap.
| ![Bezier Spline Tool](//borisfx-com-res.cloudinary.com/image/upload/v1531948311/documentation/mocha/images/overview/ICON_BezSplines_001.jpg) | **_Bezier Spline:_** We also provide Bezier Splines as they can be versatile and is the industry spline standard. Beziers have two control handles for every point on the spline. The shapes still export as Bezier splines to any software that Mocha supports. All splines can be feathered with inner and outer edges.
| ![Add to Bezier Spline Tool](//borisfx-com-res.cloudinary.com/image/upload/v1531948311/documentation/mocha/images/overview/ICON_AddBezSplines_001.jpg) | **_Add to Bezier Spline:_** Adds another Bezier Spline to the same tracking layer to add or subtract information. Subtraction of tracking areas happens where shapes overlap, and addition happens where shapes do not overlap.
| ![Surface Tool](//borisfx-com-res.cloudinary.com/image/upload/v1531948311/documentation/mocha/images/overview/ICON_Surface_001.jpg) | **_Surface Tool:_** The 'Surface' Tool represents the corner pin data where you want an inserted image to be, or the center point of the surface tool becomes your transform data when you export from Mocha.
| ![Grid Tool](//borisfx-com-res.cloudinary.com/image/upload/v1531948311/documentation/mocha/images/overview/ICON_Grid_001.jpg) | **_Grid Tool:_** The grid follows the track and surface tool, and lets you know in detail exactly what your track is doing. It cannot be exported.
| ![Transform Tool](//borisfx-com-res.cloudinary.com/image/upload/v1531948311/documentation/mocha/images/overview/ICON_TransformTool_001.jpg) | **_The Transform Tool:_** The bounding box can select either multiple points from multiple splines in the same layer, or multiple layers. Translation, Scale and Rotation and Distortion is all handled by selecting the correct area of the box.

* * *

## Quick Tips!

#### A planar surface does not necessarily have to be flat
We have a Planar Tracker which specifically tracks planes of motion, but this is not limited to tables, walls and other flat objects. Distant background is considered flat by the camera where there is no parallax. Faces can be tracked very successfully around the eyes and bridge of the nose. Rocky ground, rumpled cushions, clumps of bushes, human torsos and curved car bodies are all good candidates. The key is low parallax or no obvious moving depth. When in doubt, try quickly tracking an area to see if it will work, as you can quite often trick the planar tracker into thinking something is planar.

#### You can change tracking parameters or spline shape in the middle of a track
If the track is slipping because of skew or perspective, turn those parameters off for the problem area and on again after you're out of the trouble spot. You can also increase the amount of pixels you are tracking in the middle of the track or even change the shape of the spline or what you are tracking in the middle of the track. Don't be afraid to change something to get the best track.

#### Always watch for occlusions
Moving objects or people that slowly move in front of the area you are trying to track need to be avoided. Also look out for obvious or even "barely there," consistently moving reflections or shadows; Mocha will notice them even if you don't!
#### Use shots instead of entire scenes
The Mocha workflow is designed around a project structure. It is good practice to only work on one shot per project file to minimize layer management and to keep the work streamlined. Don't load your entire rendered out edit into Mocha, that will only slow you down.

#### Scrub your time-line
When starting a new project, go through your footage a few times to see what your best options are for tracking. You will save yourself a lot of time by making note of obstructions and possible problem areas in advance.

#### Use edges
When tracking surfaces you will usually get a much better track if you include the edges and not just the interior of an object. This is because Mocha can define the difference between the background and the foreground and lock on better. For example, if you are tracking a greenscreen, it is better to draw your shape around the entire screen rather than just the internal tracking markers. In some cases this means you can avoid tracking markers altogether and save time on cleanup later.

#### Draw more shapes
Remember you are not limited to one shape in a layer. Use a combination of shapes to add further areas or cut holes in existing areas to maximize your search. If necessary, make an additional layer to track and mask out foreground obstructions before tracking the object you need.

#### Use the grid while tracking
It's common to use the surface and the grid to line up your corners after you track, but it can be much more advantageous to set up your surface before you track and leave the grid on to watch for any subtle drift while you are tracking. This way you can stop your track early to fix any issues and spend less time trying to find them later.

#### Figuring out tracking order
When you track a layer, the mattes of any active layers above the layer itself are subtracted from the matte of the layer and hence influence the area being tracked. To keep your tracking predictable, it is recommended that you keep your tracking layers on the top of the stack unless you specifically wish to use other layers to subtract from the tracking area of layers beneath it. To monitor what the tracker "sees" as a tracking area, select the Track Matte button in the view control. With this layer order, as long as your track objects from the foreground to the background, you will always have holdouts for the tracks behind them.
#### Tracking multiple objects
You can track multiple layers at once, but you need to make sure the shape order does not interfere with your tracks. Remember: any layers above other layers will prevent layers underneath them from tracking where they intersect. We do not recommend you track more than two or three layers at a time.

#### In the end, there is no magic bullet
While Mocha is a very flexible tracker and will save a lot of time, you will eventually, and very occasionally, run into a piece of footage that just will not track. Large or continuous obstructions, extreme blur, low contrast details and sudden flashes can all cause drift or untrackable situations. If something just isn't tracking no matter what you try, consider using Mocha to track as much as possible then move to manual work. You can often get a lot more done fixing shots by hand or using Adjust Track in Mocha rather than trying to tweak your shapes and parameters over and over again to get everything done automatically.

> Between Mocha AE and Mocha Pro, we have a lot of options for our users! Not sure what version of Mocha you need? You can find more about what software Mocha supports and which features are in which version of Mocha here.

* * *

## In depth training!

Want to see more? Stream all the exercises below or [Purchase> Premium Download Now](/store/?product=getting-started-with-mocha-pro).

[Getting Started with Mocha – 01 – Fundamentals of Planar Tracking](/videos/getting-started-with-mocha-01-fundamentals-of-planar-tracking/)

[Getting Started with Mocha – 02 – Understanding the Planar Tracker](/videos/getting-started-with-mocha-02-understanding-the-planar-tracker/)

[Getting Started with Mocha – 03 – Simple Screen Inserts](/videos/getting-started-with-mocha-03-simple-screen-inserts/)

[Getting Started with Mocha – 04 – Choosing the Best Tracking Settings](/videos/getting-started-with-mocha-04-choosing-the-best-tracking-settings/)

[Getting Started with Mocha – 05 – Unlink Tracking](/videos/getting-started-with-mocha-05-unlink-tracking/)

[Getting Started with Mocha – 06 – Using the Tracking Data](/videos/getting-started-with-mocha-06-using-the-tracking-data/)

[Getting Started with Mocha – 07 – Stabilization and the Stabilize Module](/videos/getting-started-with-mocha-07-stabilization-and-the-stabilize-module/)

[Getting Started with Mocha – 08 – Rotoscoping Basics](/videos/getting-started-with-mocha-08-rotoscoping-basics/)

[Getting Started with Mocha – 09 – More Complex Screen Inserts](/videos/getting-started-with-mocha-09-more-complex-screen-inserts/)

[Getting Started with Mocha – 10 – Remove Module](/videos/getting-started-with-mocha-10-remove-module/)

[Getting Started with Mocha – 11 – Lens Module](/videos/getting-started-with-mocha-11-lens-module/)

[Getting Started with Mocha – 12 – Camera Solve – Pan Tilt Zoom](/videos/getting-started-with-mocha-12-camera-solve-pan-tilt-zoom/)

[Getting Started with Mocha - 13 - Camera Solve - Parallax Changes](/videos/getting-started-with-mocha-13-camera-solve-parallax-changes/)

>If you still need more help, check out our full documentation here, or contact support here.
