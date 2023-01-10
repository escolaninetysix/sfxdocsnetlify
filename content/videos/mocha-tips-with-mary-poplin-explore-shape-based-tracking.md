{
  "title": "Mocha Tips: Shape Based Tracking, Part 1",
  "description": "Shaped based tracking is covered in this quick video about Mocha from Boris FX. Product Specialist Mary Poplin explains the difference between the shape and the surface tool.",
  "tagging": {
    "product": [
      "Mocha Pro",
      "Mocha AE"
    ],
    "host": [

    ],
    "series": [

    ],
    "feature": [
      "Mocha Tracking"
    ],
    "language": [

    ]
  },
  "thumbnail_url": "https://img.youtube.com/vi/PIwz2oP-y9A/0.jpg",
  "video_url": "https://youtu.be/PIwz2oP-y9A",
  "video_id": "PIwz2oP-y9A",
  "video_name": "mocha-tips-with-mary-poplin-explore-shape-based-tracking",
  "date": "2017-11-08T09:08:03Z"
}
In this quick video, Product Specialist Mary Poplin explains the difference between the shape and the surface tool in [Mocha](/products/mocha-pro/). After you view this video, watch [Part 2](/videos/mocha-tips--shape-based-tracking-part-2/).

1\. What is the Shape?

* The shape is a vector mask we use to define both a matte and where the track is looking.

* Mocha is a planar tracker, so its very different from the point track search area you might be used to. Point trackers use use small, rigid, square search areas, while Mocha uses "animatable" layer shapes to define the tracking search area.

* Mocha looks for a similarly moving pattern of pixels that evolve over time, a plane, and we can change where we look by moving the shape tool to any similarly moving pieces of data. We are not locked to one point or one feature in order to track, which is why we can track through blur and lighting changes.

* The shape defines this pattern of pixels and the shape follows the track to the next instance of that pattern from frame 1 to 2, 2 to 3, etc.

* Changing or editing the shape will not change the position of the track. So... editing the shape over time is a great way to solve a difficult tracking shot.

2\. Shape vs Surface.

* The shape and surface are both "children" of the track.  
  The surface tool simply follows the track.

* The shape can be animated and manipulated to stay on an object as a rotomask, but this will not adjust the tracking data at all, which is a common mistake users make.

* Often users will have a shape that looks perfect but don't notice the surface tool is not moving correctly and then export insufficient tracks.

* Since a shape has it's own set of keyframes, imagine the shape "lies" about the track, because it can be animated separate from the track; the surface tool is the only thing that reveals the truth of whether or not your track is good.

* The shape can be unlinked from the track, and this is a great way to track ground planes, backgrounds OR panning shots because the shape becomes a "scanner" reading all the pixels that move underneath it as it stays in place. This is a great way to track BG elements for a stabilize, or track a planar background area for a remove. Simply go to layer properties and unlink the shape layer from the track and Mocha does the rest.
