{
  "title": "Quick Tip for Nuke: LUT settings for Roto with Silhouette and Mocha",
  "description": "This quick tip for Foundry Nuke users describes how to ensure that roto files from Boris FX Silhouette or Mocha Pro display properly in the Nuke viewer.",
  "tagging": {
    "product": [
      "Mocha Pro",
      "Silhouette"
    ],
    "host": [

    ],
    "series": [
      "Quick Tips"
    ],
    "feature": [

    ],
    "language": [

    ]
  },
  "thumbnail_url": "https://img.youtube.com/vi/7r3a8nTlfZY/maxresdefault.jpg",
  "video_url": "https://youtu.be/7r3a8nTlfZY",
  "video_id": "7r3a8nTlfZY",
  "video_name": "quick-tip-for-nuke-lut-settings-for-roto-with-silhouette-and-mocha",
  "date": "2020-08-04T17:00:00-04:00"
}
This quick tip for Foundry Nuke users describes how to ensure that rotoscoping files from Boris FX Silhouette or Mocha Pro display properly in the Nuke viewer.

You can find the original tech note in the [Silhouette User Forum](https://forum.borisfx.com/t/using-exported-silhouette-shapes-in-nuke-best-practices/8605).

***

Nuke's viewer settings apply a LUT to not only the RGB channels, but the Alpha channel as well. To ensure that the Alpha channel displays the same in Nuke as it did in Silhouette or Mocha Pro, there is a specific Nuke viewer control that needs to be enabled.

Select the Nuke >Viewer node, right-click in the Viewer and choose Viewer settings to open them.

Enable “apply LUT to color channels only”

Note: You can make this a default Viewer setting in the Nuke preferences.

The Alpha channel in Nuke will now match Silhouette.
