{
  "title": "How Do I Paste 3D Camera Solve Data into Adobe After Effects?",
  "date": "2018-08-09T20:24:12-04:00",
  "description": "Learn how you can paste 3D camera solve data into Adobe AE and find out how to tell if you have the 3D camera importer app already installed.",
  "excerpt": "First, copy your 3D camera data out of Mocha by selecting the layer(s) you want to use and clicking \"export 3D camera data.\" In After Effects, paste your 3D Camera Data...",
  "image_url": "",
  "tags": [

  ]
}
First, copy your 3D camera data out of Mocha by selecting the layer(s) you want to use and clicking "export 3D camera data." In After Effects, paste your 3D Camera Data by using the "Paste Mocha camera" option in the Edit menu. When you paste into After Effects you will get a camera and a number of nulls depending on the type of solve you did. PTZ will only export a single null to help define the camera motion. The large or small parallax solves will create a null for each corner of your layer surface objects in Mocha.

**Where to find the 3D Track Importer Plug-in?**

If you can not see the option to paste Mocha camera data into After Effects, you will need to [download the 3D Camera importer](/downloads/?&product=Mocha%203D%20Track%20Importer).

By default, the plug-ins folder is in the following location:

* (Windows) Program Files\\Adobe\\Adobe After Effects <version>\\Support Files
* (Mac OS) Applications/Adobe After Effects <version>

Navigate to the Mocha folder within these locations and simply drag and drop the plug-in into place. You should restart Adobe After Effects and your "paste Mocha camera" option should now be available.

You can find more information on [exporting Camera Solver Data](/support/documentation/mocha/5.6.0/#_exporting_camera_solves) in our [Mocha documentation](/support/documentation/).