{
"date": "2019-06-12",
"title": "BCC Presets",
"category": "Uncategorized",
"link": "bcc-presets/"
}

 ### Overview


BCC has always shipped with a large library of presets and the ability to save and share your own customized presets.  With the introduction of the BCC FX Browser™ in BCC9 the power of your the BCC preset library is taken to a whole new level.  The BCC FX Browser is a new graphic preset browser that generates previews of all your presets over a video clip, not just a static frame.  The FX Browser is available in two forms.  The Integrated version is accessible from the preset controls in every individual filter and lets you preview and apply any of the presets for that particular filter.  The Standalone Browser is a separate effect which appears in the BCC Browser category and previews presets from the entire library.  For a full description of the BCC FX Browser see its complete documentation here:  [BCC FX Browser](/documentation/continuum/bcc-fx-browser/ "BCC FX Browser").

### 


### Loading Presets


All hosts include multiple standard mechanisms for loading presets.  Launching the FX Browser from within any filter provides a graphical way to preview and apply presets.  You can also choose Load to launch a standard OS file browser which permits navigating to presets located anywhere on disk.  Previous and Next buttons allow for quickly stepping through preset lists (although the Previous and Next buttons navigate only through the static presets and ignore any animated presets).  Finally, popup menus allow you to select from the list of available presets by name.


### 


### Saving Custom Presets


Choose the Save option to launch a standard OS file save dialog to save your own presets.  If you wish newly saved presets to appear automatically in your preset menus, they should be saved into the standard preset folder for that particular effect which should be the default location offered when the file save dialog first appears.  Alternatively you can save custom presets to your desktop or other locations for ease of sharing.    In some hosts you may need to relaunch the application before the newly saved presets will automatically appear in the preset menus, although they can always be loaded directly with the preset Load option without having to relaunch.


### 


### Sharing Presets


BCC presets are cross platform and can be freely shared between workstations, between hosts, and between different versions of BCC.  For example, you can save a BCC preset in Avid Media Composer and move it into a BCC AE preset directory on a different machine where it will be available for use in matching settings.  You can simply use the file Save and Load dialogs to save/load a preset to/from any appropriate location such as your desktop.  If you wish to have shared presets permanently show up in your preset menu for a particular effect then they should be copied to the preset folder for that effect.  Presets are located in a folder whose name starts with “BCC Presets” and then includes the product version and host specifier (if any) followed by subfolders for category and then effect name. These preset folders can be found here:


Windows:


C:\Program Files\Boris FX, Inc\BCC Presets…


Mac:


/Library/Application Support/BCC Presets…


Alternatively you can identify where presets are stored on your machine by applying a BCC effect and hitting the Load button to bring up a file dialog that allows browsing for presets.  By default the file dialog will open to the root folder for that particular effect and this will indicate the general path for presets on that machine.    In some hosts you may need to relaunch the application before the newly installed presets will automatically appear in the preset menus, although they can always be loaded directly with the preset Load option without having to relaunch.


 


### Static vs Animated Presets


BCC supports both animated and static presets although not all host applications are capable of using the animated presets.  Animated presets capture keyframe settings for the effect which allows restoring full animation, not just static parameter values.  Currently animated presets are supported in After Effects and Avid Media Composer, Symphony, and News Cutter.  Animated presets have the file extension \*.BAP whereas static presets will have a file extension of either \*.BSP or \*.BCP in the case of older non-xml based presets.  For the most accurate interchange of animation between different host applications it is safest to use either linear or autobezier/cubic spline keyframes.


 


 


