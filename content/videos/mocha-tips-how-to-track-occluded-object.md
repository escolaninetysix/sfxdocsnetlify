{
  "title": "Mocha Tips: How to Track Occluded Objects",
  "description": "Watch this video from Boris FX to get Mocha tracking techniques to solve difficult shots like when the object you are trying to track is partially or fully occluded.",
  "tagging": {
    "product": [
      "Mocha Pro",
      "Mocha AE"
    ],
    "host": [

    ],
    "series": [
      "Quick Tips"
    ],
    "feature": [
      "Mocha Tracking"
    ],
    "language": [

    ]
  },
  "thumbnail_url": "https://img.youtube.com/vi/b0qAq5EkXhk/0.jpg",
  "video_url": "https://youtu.be/b0qAq5EkXhk?rel=0",
  "video_id": "b0qAq5EkXhk",
  "video_name": "mocha-tips-how-to-track-occluded-object",
  "date": "2018-03-27T11:27:22Z"
}
In this quick tip, Mary Poplin, Boris FX Product Specialist, will cover some [Mocha tracking](/products/mocha-pro/) techniques to solve difficult shots: what to do when the object you are trying to track is partially or fully occluded, the importance of layer order, how to avoid occlusions, and how to spot occlusions before you start tracking. One of the most common problems in tracking occurs when foreground objects cover the object we are trying to track. We call these occlusions. For example, when a finger swipes across a phone or when actors pass in front of monitors we have a tracking occlusion to solve.

**How to spot occlusions:** Most occlusions are obvious. [Mocha](/products/mocha-pro/) is pretty smart about filtering texture, but it can get confused by moving objects, reflections, shadows, or people that slowly or barely move in front of the area you are trying to track. Mocha is smart enough to ignore most noise and quick inconsistencies like explosions and rain, but slow moving objects give mocha enough texture from one frame to another for mocha to get derailed. Show explosion example, even though it is used before.

**Partial Occlusions:** For partial occlusions, avoiding the occlusion can be as simple as tracking the object as normal and then pausing and moving the shape to another area moving in the same direction. Just keep in mind that animating a shape doesn't animate the track, it simply tells the track to look in a new location. Turn the surface tool on to see what your track is really doing.

**Layer Order:** You can also use layer order to hold objects out of your track. Layers at the top of the layer pile are automatically held out of layers below them when tracking. Simply draw a shape around the offending object, and drag that layer to the top of the layer pile in layer properties. If you always track objects from the FG to the BG you will always have holdout shapes for your tracks below.

**Full Occlusions:** When an object is not visible or entirely occluded, you can use manual track to jump past them. You will need to turn your surface tool on and then switch to manual track in the track tab, notice how the surface tool becomes a dotted line. Then you can hand keyframe any interruptions in the track. If this looks good, keep tracking forward. If not, track into the occlusion from either side of the timeline and delete any messy tracking keyframes by using the keyframe Minus - button.
