{
  "title": "Sapphire 2021.5.1 release notes",
  "date": "2021-06-25T04:00:00.000Z",
  "description": "",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Sapphire"
  ]
}


### What’s New in Sapphire 2021.5

**New Features**

* Support for new After Effects Multi-Frame Rendering pipeline on most Sapphire Effects.

* Native support for Mac M1 machines in Premiere Beta.

* Improved Rays and EdgeRays: These effects now have parameters allowing the rays to be blurred before they are combined with the background.

* Performance Improvements and Bug Fixes in Preset Browser, Sapphire Effect Builder, and Flare Designer.

* New LensFlares.

* LensFlare: Improved flare consistency between thumbnails and the Flare Designer.

* Improved Mocha: Improved Dope Sheet.

### What’s New in Sapphire 2021.5.1

* Builder: Fix a bug in S_Transition where the preset browser only displayed a single frame when launched from within the Transition Builder UI.

* Builder and LensFlare: Show presets from 2021 and 2021.5 in the "New" tab.

* Fixed a bug that prevented certain subscription licenses from updating.

* Added an environment variable to control the subscription license check. By default, subscription checks happen on GUI nodes and do not happen on render nodes.

* Adobe and OFX: Render Node: To turn on subscription license checks for render nodes, set the environment variable SAPPHIRE_SUBSCRIPTION_CHECK to 1.

* Adobe and OFX: GUI Node: To turn off the subscription license check for GUI nodes, either set the environment variable SAPPHIRE_SUBSCRIPTION_CHECK to 0 or set enable_subscription_checks to 0 in s_config.text.

* Added GPU status to the LensFlare Designer About Dialog.

Adobe and OFX:

* S_DissolveLensFlare: Fixed a crash with certain parameter combinations when blur-motion was enabled.

* Fixed a bug where the installer opened twice on Mac M1 machines.

* Fixed a performance issue in noise generation within effects on Mac M1 machines. Eg. S_Clouds, S_DissolveBubble, and others.

Avid:

* S_PanAndZoom: Reduced amount of disk storage used in saved projects.
