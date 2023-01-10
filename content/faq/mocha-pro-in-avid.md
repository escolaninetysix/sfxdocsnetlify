{
  "title": "Custom UI Crash in Avid with Dual Monitor Systems",
  "date": "2018-08-21T14:03:30-04:00",
  "description": "Learn how to use Avid and Mocha when you use Dual-Monitor setups on Windows 7.",
  "excerpt": "There are ways to handle a known issue in which users, using Dual-Monitor setups on Windows 7, sometimes experience crashes if they use Mocha, when closing the plugin and going back to Avid.",
  "image_url": "",
  "tags": [
    "Avid",
    "Mocha Pro",
    "Mocha"
  ]
}
There is a known issue in which users, using Dual-Monitor setups on Windows 7, sometimes experience crashes if they use Mocha, when closing the plugin and going back to Avid, regardless of if 'Cancel' or 'Apply' is pressed.

In this situation, when [Mocha Pro](/products/mocha-pro/) is crashing Avid on close, there are a few things you can do that should help matters. Please note, however, that these will need to be in place _the entire time_ in order for Mocha not to crash. So, when you open Mocha and make these adjustments—even if you set everything up correctly—it will crash on Close at least one more time.

The primary things are that Mocha Pro's interface needs to be entirely visible on a single monitor. That is:

* none of the interface can be off-screen, 
* none of it can cross from one monitor to the other, and 
* nothing can come up in front of the interface while it's up, such as the Task Manager or an Email/Browser program.

With this, we recommend keeping the interface in a way where there's at least 20-30 pixels on each side before it hits the edge of the monitor view. Along with that, if you bring the interface close to the top of the display, Windows will trigger the option to Maximize the window. If it does this, the problem will occur immediately, so you'll want to make sure you avoid this at all cost.

Lastly, which monitor you choose to show Mocha will play a factor, and it might not be quite so obvious. The primary thing that will need to be in place is that both the Effect Editor and the Mocha Pro interface need to be on your _primary_ monitor. This is not necessarily the one with the Start menu; instead, if you go into the Display portion of your Control Panel, and then into Adjust Resolution, press the 'Identify' button and each number will show the number "1" or "2" - the one that shows "1" is the one that both the Effect Editor and Mocha Pro interface will need to be on.