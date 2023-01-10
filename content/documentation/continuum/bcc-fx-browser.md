{
"date": "2019-06-12",
"title": "BCC FX Browser",
"category": "BCC Browser",
"link": "bcc-fx-browser/"
}

 ### [![PresetBrowserUI](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/PresetBrowserUI.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/PresetBrowserUI.jpg)


### Overview


The BCC FX Browser™  is a state-of-the-art graphical preset browser allowing you to preview your preset library over moving host video, not just static frames.  There are two different ways to use the FX Browser in BCC – Integrated and Standalone.


### Integrated FX Browser™


The Integrated FX Browser is available inside every effect and allows intuitive preview and application of all presets for that effect.  You can launch the Integrated version of the FX Browser from within any BCC effect by clicking on the **Fx Browser** button in the effect’s control pane.  Hit Apply to apply the selected presest back to your clip in the timeline.  Hit Cancel to return to the timeline without applying any presets.  The Cancel and Apply buttons are located in the bottom right corner of the browser window.


### Standalone FX Browser™


The Standalone FX Browser  is applied as a separate standalone effect which can be found under the BCC Browser category.  The Standalone version allows browsing presets from EVERY effect in the full BCC library to allow maximum freedom in exploring creative possibitilites.  Unlike the Integrated browser, however, you cannot directly apply these presets back to the timeline in most hosts.  If you see just a Close button with no Apply option it means that you cannot apply directly in your host and you once you have found your desired preset you need to leave the standalone browser and apply the preset directly from the chosen effect.


 


### **UI Overview**


The FX Browser UI is divided into four main panes plus a standard menu bar and a bottom bar.


**Bottom Bar****:**


* Close, Cancel, and Apply:  Buttons located towards the bottom right corner of the browser window.
	+ Close:  Exit the browser when in the Standalone browser pane.
	+ Cancel: Exit the Integrated browser without applying any presets back to the host.
	+ Apply: Exit the Integrated Browser and apply the selected preset back to the host.  If you are in a host that supports animated presets and if you have selected to apply an animated preset you will be prompted about how the timing properties of the animated preset should be interpreted in your existing timeline.
* Reset:  Located towards the bottom left corner of the browser window.  Hit reset to return to the main folder for a particular preset if you’ve navigated away from the root folder such as to view a folder of presets on your desktop.


**Main Menu Bar:**


* File:  Exit provides an alternate mechanism to close/cancel out of the browser without applying any presets.
* Edit:  Standard text editing controls
* Window:
	+ Workspaces:  Save and load your own customized workspace layouts for the browser or reset to factory defaults.  Note that the default workspace for the Integrated and Standalone browsers are different since the Integrated browser doesn’t require the Folder pane for most typical usage.
	+ History/Presets/Previews/Folders:  Choose which UI panes are open.
* Help:  Register, contact Technical Support, or view help files for the FX Browser or an individual effect.


**Preview Pane:**  Displays a preview of the currently selected preset applied to your footage.  When playing back over live footage it can skip frames the first time through but will playback at full speed once the frames are fully cached.


* Timeline:  A simple and intuitive mini-timeline allows previewing the result over moving video, not just static frames.
	+ Playback Controls:  Standard Start, Stop, Step and Rewind controls to control playback.  You can also use the spacebar to start and stop reviewing.
	+ Current Time Indicator (CTI):  Vertical blue line indicates your current frame in the timeline.
	+ Play Range:  The bars immediately above the white timeline allow setting the Start Play Range and End Play Range to permit previewing over a subset of the full clip’s timeline.
* Compare Mode:  Compare your result against the original unaffected image with an adjustable split screen.
	+ Compare Off: Displays just the rendered effect.
	+ Compare Side By Side: Two copies of the image are generated side by side. The left side is unaffected by the previewed filter while the right side shows the effect.  You can drag the left or right image to view more of the original image.
	+ Compare Split: The full image will be shown, the left half of the image will be unaffected and the right half is rendered with the effect.  The point where the split occurs is marked by a dividing line.  The onscreen controls can move the split point.
	+ **Note:** The compare modes can also be quickly enabled by pressing the ‘1’ key for Compare Off, ‘2’ for Compare Side By Side and ‘3’ for Compare Split.
* Preview Info:
	+ FPS: Shows the current frames per second when playing.
	+ Zoom: Shows the percent zoom that you monitor sizes the animation too.  This can change by re-sizing the Preset Browser window.
	+ Dimensions: Shows the dimensions of the animation.
	+ Time: Shows the current frame displayed in the preview.
	+ Duration: Shows the duration of the clip.
* Render Resolution: Changes the resolution of the animation.  Reducing the resolution of the image helps speed up its play time.
* Background: Allows you to choose what background the animation is rendered over.  It only makes a difference when alpha is present.  The three options are:
	+ *Black:*Generates a black background behind the animation.
	+ *Checkerboard:*Generates a checkerboard background behind the animation.
	+ *Background:*Generates a customizable background behind the animation.
	+ **Warning:** Background is only visible in the filter version of the Preset Browser


**Presets Pane:**  Displays thumbnail sized previews of all active presets.  Selecting a preset will trigger the main Preview pane to refresh with that preset applied.  A text search field allows filtering the presets by keyword.  Note the ability to adjust the size of the thumbnails and the ability to toggle between thumbnail and detail views.


**History Pane:**  Displays a thumbnail preview of your most recently accessed presets.  Selecting a preset will display a full sized preview in the Preview pane.  Note the ability to adjust the size of the thumbnails and the ability to toggle between thumbnail and detail views.


**Folders Pane:**  Displays a folder navigation tree allowing you to browser to any folder on your system and display its presets in the Preset pane.  When using the Standalone FX Browser, use this pane to select which filter or filter category is being displayed in the Preset pane.  When using the Integrated FX Browser you can only view presets for your currently applied effect so the Folder Pane is hidden by default since it always opens to the standard folder for that particular filter.  The Folder pane can be opened to allow browsing to other directories on disk however, such as viewing presets sent from another user on your desktop.  Note the ability to use text search to filter the results in the folder pane, for example to show only presets in a folders containing the name “Rays” or “Wipe”.


 


### **Usage Notes**


**Preview Gamma:**  The FX Browser always displays  pixel levels exactly as extracted from the host application without any addition gamma correction.  When working with a host such as Adobe After Effects or Sony Vegas that has the optional ability to process pixels in a linear space while still displaying the results in a gamma corrected space, you may notice that colors appear darker in the FX Browser previews since they are displayed as raw, uncorrected values.


