{
  "title": "Mocha Tips: Avoid Reflections & Shadows",
  "description": "In this tutorial Mocha Pro specialist Mary Poplin, will help you learn how to handle tracking reflections and shadows.",
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
  "thumbnail_url": "https://img.youtube.com/vi/FXzxNBrnZjg/0.jpg",
  "video_url": "https://youtu.be/FXzxNBrnZjg?rel=0",
  "video_id": "FXzxNBrnZjg",
  "video_name": "mocha-tips-avoid-reflections-and-shadows",
  "date": "2018-03-09T19:21:49+00:00"
}
Watch this tutorial to learn [Mocha tracking](/products/mocha-pro/ "Mocha Pro tracking") techniques for avoiding reflections and shadows. Mary Poplin, Boris FX Product Specialist, will take you through some of the most common problem when tracking screens, cars, and other reflective objects.

**Screens & Glass:** For screens and glass, the solution is usually simple. Using the x spline tool, draw a shape around your entire screen. Then draw another shape using the add to x-spline tool. This will "cut out" the problematic reflective area but keep both shapes moving with the track. If we show our layer mattes, you can see that adding a 2nd shape with the ADD X SPLINE tool automatically created a subtraction. Remember, the mocha mask tells you where the track is looking for texture to follow, but only the surface tool tells you what the track is actually doing.

**Cars:** For cars, it is tempting to grab the whole side of the vehicle, but this can give unexpected results as the reflections moving down the sides of the car are actually moving in totally opposite directions of our track object. The better choice is to look for the seams and details of the car, the wheels, and the grills and focus Mocha on these non-reflective areas. The rest of the reflections should be moving so rapidly mocha will ignore any flickering. Simply draw a loose shape around the edges of the car and these major landmarks and hit track forwards. Again, the surface tool reveals the truth of the track, so make sure you have it turned on to view the tracking.

**Ground Planes:** For ground planes where there might be large shifting soft shadows from buildings or trees or people walking over the surface, a common mistake users make is grabbing the entire ground plane. Since a plane moves the same way no matter if you track the whole thing or a smaller piece of it, tracking one section of ground is usually as good as another. Look for clean bits of texture and track those. In this example (guy running on road), I will draw my x spline around this occlusion free area, expand my surface tool to be in line with the entire ground, and hit track forwards. The entire ground plane is locked down even though the area I am tracking is small.

[Download a trial of Mocha from Boris FX](/downloads/?&product=Mocha%20Pro "Download a free trial of Mocha Pro").
