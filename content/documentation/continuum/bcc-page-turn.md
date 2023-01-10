{
"date": "2019-06-12",
"title": "BCC Page Turn",
"category": "BCC Perspective",
"link": "bcc-page-turn/"
}

 [![PageTurn](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/PageTurn.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/PageTurn.jpg)


### Overview


Page Turn creates a 3D model of a page turning in a book or magazine, and allows you to place media on both sides of the page.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


The **Animation menu** controls whether the filter auto-animates or is animated manually. Choose from the following options.


* *Manual* is the most flexible setting. Use Manual if you are applying the filter as a composite instead of a transition, or do not have enough control with the other settings. When Manual is chosen, you create the wipe by manually animating parameters such as Wipe Amount, Radius and Direction, depending on the wipe. When Manual is chosen, Percent Done has no affect.
* *Auto* animates the incoming clip from offscreen at the start of the transition, to fully onscreen at the end of the transition. Choosing Auto has the same affect as choosing Pct. Done with a 0 value keyframe at the start of the effect and a 100 value keyframe at the end. When Auto is chosen, Percent Done has no affect.


In some instances Auto may result in the incoming clip reaching fully onscreen before the effect finishes. In this instance, choose Pct. Done and animate the Percent Done parameter instead of using Auto.


* *Pct*. *Done* animates the incoming clip from transparent (at a value of 0) to opaque (at a value of 100). When Pct. Done is chosen, the **Percent** **Done** parameter allows you to adjust the animation.


 


**Animation Tuning Group**


Contains contextually enabled parameters to control the transition animation.


* *View Ease Curve checkbox* – enable to view the animation curve in the composite window*.*
* *Ease In* – Used to ease the animation at the beginning of the transition.
* *Ease Out* – Used to ease the animation at the end of the transition.


**Offset** controls the amount of the page that peels off over the duration of the effect. An Offset of 0 leaves the source image undistorted, whereas an Offset of 100 peels the page off completely, revealing the track below.




|  |  |
| --- | --- |
| [![pgturn.offset.40](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.offset.40.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.offset.40.jpg) | [![pgturn.offset.60](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.offset.60.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.offset.60.jpg) |
| Offset=40 | Offset=60 |


**Direction** sets the angle between the fold in the page and the horizontal axis.




|  |  |
| --- | --- |
| [![pgturn.direction.70](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.direction.70.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.direction.70.jpg) | [![pgturn.direction.300](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.direction.300.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.direction.300.jpg) |
| Direction=70 | Direction=300 |


**Flap Radius** sets the radius of the 3D-modeled flap as the page turns. Reducing Flap Radius makes the flap sharper and more like a crease, and increasing it makes the flap more cylindrical.




|  |  |
| --- | --- |
| [![pgturn.radius.10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.radius.10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.radius.10.jpg) | [![pgturn.radius.40](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.radius.40.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.radius.40.jpg) |
| Flap Radius=10 | Flap Radius=40 |


**Flap Opacity** adjusts the transparency of the flap. A setting of 100 makes the flap completely invisible, whereas a setting of 0 leaves the flap completely opaque.


**Light** adds a basic white light that illuminates the curve of the flap as it peels back. Increasing this value increases the intensity of the highlight.


**Shadow** causes the flap to cast a shadow on the turning page. Increasing this value increases the intensity of the shadow.


The **Alternate** **Back menu** allows you to choose a layer in the timeline to apply to the back of the page turn. *None* applies the source layer to both sides of the page.


**Trails** sets the number of motion trails which follow the page turn as it animates. If the page turn is not animated, Trails has no affect. In the following illustrations Direction is animated.




|  |  |
| --- | --- |
| [![pgturn.trails.4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.trails.4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.trails.4.jpg) | [![pgturn.trails.8](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.trails.8.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/pgturn.trails.8.jpg) |
|  |  |


 


