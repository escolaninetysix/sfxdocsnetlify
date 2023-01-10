{
  "title": "Sapphire 2020.5.1 release notes",
  "date": "2020-06-26T00:00:00-05:00",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Sapphire"
  ]
}


### What's New In Sapphire 2020.51

* Licensing: Improve subscription license handling.
* LensFlare: Shadow working correctly with the undo stack in the Sapphire Lens Flare Designer.
* Effect Builder: Change Color node default to "Color Only"
* Resolve: Fixed occasional black frames when returning from Builder and the Preset Browser.
* Linux: Fixed libglade error when installing the Sapphire RPM on Centos 7.2-3; Centos 8.X, and Ubuntu 18.04.
* Linux: Fixed libglade error when running the Sapphire Preset Browser, Sapphire Lens Flare Designer, and Sapphire Effect Builder on Centos 7.2-3; Centos 8.X, and Ubuntu 18.04.
* Transitions: Remove the erroneous "Amount" parameter on many transitions (Eg. HyperPull) when in transition mode.
* Nuke and Fusion: Fixed the offset and wrap for CardFlip and HyperPush transitions.
* Rio: Fix temporal effects.
* Fusion: Enable S_Effect and S_Transition.
* Fixed Deinterlace Auto.
* Resolve: Enable Mocha in Resolve 15.
* Premiere on Windows: Improved behavior when Premiere fails to load the Sapphire plugins on the first attempt.  The plugins may still fail to load when Premiere is first updated or Sapphire is first installed if there are many installed plugins.  However, Premiere should correctly try to load the Sapphire plugins on subsequent runs.
* Premiere: Fixed the shadow in Lens Flare to keep the correct aspect ratio on non-square pixel aspect ratios.
