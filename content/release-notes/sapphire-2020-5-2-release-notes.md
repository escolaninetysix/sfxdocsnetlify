{
  "title": "Sapphire 2020.5.2 release notes",
  "date": "2020-08-12T04:00:00.000Z",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Sapphire"
  ]
}


### What's New In Sapphire 2020.52

* Sapphire Effect Builder: Fixed an error where opening old projects with S_Zap or S_WarpDrops inside an instance of S_Effect would result in a blank project inside Builder. Note: This is a partial fix. When first opening an old project with S_Effect, you may still see a "Parsing failed" error. The workaround when this error happens is as follows:
* Inside the S_Effect generating the error, click on "Edit Effect". This will cause S_Effect to re-read the node graph.
* If Sapphire Effect Builder loads with a nodegraph, click OK to return to the host.
* The Effect should now work correctly back in the host.
* Sapphire Effect Builder: Fixed a sporadic crash when launching Builder with a large preset.
* Sapphire Preset Browser: Updated the Preset Browser to apply the OpenColorIO colorspace to the preset thumbnails.
* Sapphire Flare Designer: Improved the UI behavior around the "Preview Shadow Element" and "Shadow Parameter" buttons.
* Sapphire Flare Designer: Improved the "Insert Flare" behavior when shadows are involved. If the flare being inserted has a shadow, that shadow will be used instead of the existing shadow. If the flare being inserted has no shadow, the existing shadow will be left alone.
* Sapphire Flare Designer: Improved shadow behavior on rays that are more vertical than horizontal.
* Sapphire Preset Browser: Fixed the "Source Only" entry of the preview menu.
* Sapphire Effect Builder: Fixed a bug where Builder might fail to open if inputs were left unconnected in the host.
* Licensing: Improve subscription license handling.
* LensFlare: Shadow working correctly with the undo stack in the Sapphire Lens Flare Designer.
* Resolve: Fixed occasional black frames when returning from Builder and the Preset Browser.
* Linux: Fixed libglade error when installing the Sapphire RPM on Centos 7.2-3; Centos 8.X, and Ubuntu 18.04.
* Linux: Fixed libglade error when running the Sapphire Preset Browser, Sapphire Lens Flare Designer, and Sapphire Effect Builder on Centos 7.2-3; Centos 8.X, and Ubuntu 18.04.
* Transitions: Remove the erroneous "Amount" parameter on many transitions (Eg. HyperPull) when in transition mode.
* Nuke and Fusion: Fixed the offset and wrap for CardFlip and HyperPush transitions.
* Rio: Fix temporal effects.
* Fusion: Enable S_Effect and S_Transition.
* Fixed Deinterlace Auto.
* Resolve: Enable Mocha in Resolve 15.
* Effect Builder: Change Color node default to "Color Only"
