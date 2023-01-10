{
  "title": "Silhouette and Silhouette Paint FAQ",
  "date": "2020-04-13T00:00:47-05:00",
  "description": "Since 2005 Silhouette has made its mark on film and television visual effects and post-production. Silhouette is an award-winning GPU accelerated compositing application that runs on macOS, Windows and Linux. Silhouette’s standout features are advanced rotoscoping tools and a non-destructive 32 bit, HDR paint system.  Silhouette is also a node-based compositing tool with integrated planar tracking, keying, matting, warping, morphing, and a total of 146 different nodes–all stereo enabled. Silhouette supports ACES color management via OpenColorIO. In 2019 the Silhouette team was recognized with Academy and Emmy technical achievement awards for the software’s contribution to the feature film and television industries. ",
  "excerpt": "",
  "image_url": "",
  "tags": [
    "Silhouette"
  ]
}

## What is Silhouette?

Since 2005 Silhouette has made its mark on film and television visual effects and post-production. Silhouette is an award-winning GPU accelerated compositing application that runs on macOS, Windows and Linux. Silhouette’s standout features are advanced rotoscoping tools and a non-destructive 32 bit, HDR paint system.  Silhouette is also a node-based compositing tool with integrated planar tracking, keying, matting, warping, morphing, and a total of 154 different nodes–all stereo enabled. Silhouette supports ACES color management via OpenColorIO. In 2019 the Silhouette team was recognized with Academy and Emmy technical achievement awards for the software’s contribution to the feature film and television industries. 

Silhouette is now shipping version 2021 with multiple purchase, subscription and bunde options: 

* Silhouette Standalone + Multi-Host Plugin
* Standalone Multi-Host Plugin only
* Bundles 
	* Silhouette  + Mocha Pro plug-in  
	* Bundle: Silhouette + Mocha Pro (Standalone + Multi-Host)
	* Bundle: Silhouette Plugin + Mocha Pro Plugin (Multi-Host)
	* Boris FX Suite (Silhouette, Mocha Pro, Sapphire, Continuum, and Optics). 
	
## Does the Silhouette 2021 Plugin replace the Silhouette Paint Plugin? 

Yes, the fully featured Silhouette interface for roto, paint and compositing can now be launched as a plugin from industry standard VFX applications. In previous versions, the “Silhouette Paint Plugin” was limited to paint only functions. Now, the entire Silhouette node based workflow for roto, paint, tracking, warping, keying and compositing is a plugin for Adobe After Effects and Premiere Pro and OFX hosts: Foundry NUKE, Blackmagic Resolve and Fusion, and Autodesk Flame.

Existing Silhouette Paint Plugin customers with an active subscription can install the Silhouette 2021 Multi-host Plugin and their existing license will work for the duration of the subscription. 

## What is the difference between Silhouette and Silhouette Plugin?

The Silhouette Standalone and Plugin have the same feature set with the main difference being the Plugin is responsible for loading source inputs and final rendering. Although the Plugin doesn’t allow more than three inputs, additional sources can be added directly within Silhouette.

## I own the Silhouette Standalone, do I have to pay for the Plugin? 

The Silhouette Plugin is included with all new Silhouette 2021 purchases and your license enables the ability to run inside Adobe or supported OFX hosts. You can either run the Silhouette Standalone or the Silhouette Plugin at one time on the same CPU, based on the amount of licenses you own. 

Silhouette Standalone owners on current [upgrade and support plans](https://borisfx.com/store/upgrade-and-support-plan/) also receive the Silhouette Plugin for free. Your current license will work and does not require reactivation. If you are unsure if you qualify, [contact our sales team](https://borisfx.com/store/contact-us/). 

Silhouette owners running legacy versions and are not on an upgrade and support plan, do not qualify for the free Silhouette Plugin.  

## Are projects compatible between the Silhouette Standalone and Silhouette Plugin? 

Yes, Silhouette Standalone and Plugin projects are interchangeable with a couple of caveats.

1. The sources need to be reconnected when opening a Plugin project in the Standalone.
2. The OCIO colorspace may need to be adjusted when opening Plugin projects in another host or in the Standalone as some host applications perform colorspace conversions.

## Does the Silhouette Standalone and Plugin support floating licenses or VM licensing? 

Yes, Boris FX offers Enterprise licensing options for customers with 5 or more users that require floating licenses or virtual license serving. Please visit our [Enterprise Program](https://borisfx.com/store/enterprise/) page to learn more.  

## What OFX plug-ins does Silhouette support?

At the current time, Boris FX Mocha Pro, Boris FX Sapphire, RE:Vision Effects and Neat Video plug-ins have been qualified to run in the Silhouette Standalone. However, OFX plug-ins are not supported within the Silhouette plug-in.

## What shape formats can Silhouette export?

Silhouette can export to the following shape formats: Autodesk®/Discreet® gMask, Elastic Reality®, Eyeon Fusion®, Nuke® and Shake® 4.x SSF shapes.

## What is the difference between the integrated Mocha tracker and the Mocha Pro plug-in for Silhouette?

The integrated Mocha tracker tracks directly within the Silhouette user interface and links to Silhouette’s spline tools. The Mocha Pro plug-in launches the Mocha user interface and provides access to GPU-accelerated tracking and object removal, stabilization, lens calibration, AdjustTrack module, 3D camera solver, stereo 360/VR support, and more. Learn more about the differences: [Silhouette and Mocha Pro Comparison Chart](https://borisfx.com/products/mocha-pro/#compareMPSil)

## Can I get a trial license?

A fully working, 15-day trial can be obtained by launching the Silhouette Standalone or Plugin and completing the in-application request trial form. After 15 days, the license will revert to a demo mode where saving is disabled. 

## Are academic licenses available for students and schools?

Yes. Please find more information and a verification forum for our [EDU/Academic program here](https://borisfx.com/store/academic-pricing/). If you still have questions, please [contact us](https://borisfx.com/store/contact-us/). 

## What do I do if I am having problems activating the software?

If you are unable to activate, please disable your anti-virus and/or firewall software while activating. You can find [licensing instructions for all Boris FX products here](https://borisfx.com/support/license-instructions/). 

## How do I configure a Wacom tablet on Linux?

We require that proper tablet support is enabled in the X server. This part is left up to the user, as it is very distribution and version specific. This site can be used for more information: (http://linuxwacom.sourceforge.net/index.php/all)

## What versions of Linux does Silhouette run in?

Silhouette runs in Linux distributions that conform to the CY2021 VFX Reference Platform as specified at (https://www.vfxplatform.com)

## On Linux, why are there GStreamer console errors?

In the Linux console, GStreamer module errors may appear and are related to hardware accelerated decoding if certain libraries are not installed. These are benign errors and can be ignored. However, to remove these errors, please follow the instructions here: [Hardware Video Acceleration](https://wiki.archlinux.org/index.php/Hardware_video_acceleration)

## What version of Python does Silhouette use?

Silhouette 2020.5 and later now uses Python 3.

## What are the known issues with the Silhouette plug-in?

**Flame Sequence Numbering**

Flame is not obeying the OFX parameter that determines the start frame, so a Flame sequence starting at 1 instead starts at 0 in Silhouette.

**Premiere Pro**

	Alpha Channels With Soft Edges

By default, Premiere Pro is linearizing the alpha channels exported from the Silhouette plug-in even though they are already linear. This causes the alpha to appear smaller when using soft edges. To avoid this issue, disable Composite in Linear Color in the sequence settings.

	Misreporting The Resolution

Silhouette requires that Premiere Pro’s Playback Resolution be set to Full. Otherwise, an error message is displayed when you try to open the Silhouette user interface. Sometimes, Premiere Pro misreports the correct resolution even though it is set to Full. If this happens, change to a different frame and try again. Adobe is aware of this issue and is working on a fix.

	Trimmed Footage Loads Entire Clip Into Silhouette

If a clip is trimmed in Premiere Pro, the entire clip is loaded into the Silhouette plug-in instead of the trimmed clip. Adobe is aware of this issue and is working on a fix.

**Resolve and Vegas > Multiple Inputs**

Resolve and Vegas do not allow more than one input for plug-ins that use custom user interfaces. However, additional sources can be added directly within Silhouette.

## Silhouette Plug-in - Host Application Tips

**What is the procedure for using multiple resolutions in Nuke?**

When using optional sources that are a different size than Silhouette’s primary input, you will need to add Reformat nodes to the optional sources.

1. In Nuke, add Reformat nodes to the sources that are a different size than the primary Silhouette input.
2. Set the Reformat node’s Output Format, the Resize Type to None and enable Center. 
3. If you want to center the image inside Silhouette, select the source thumbnail in Silhouette’s Trees window and disable Center in the Node window. This defers the centering to the Nuke setting.

**How do I use an optional input in the Silhouette plug-in in Resolve?**

In the Resolve > Color tab, right-click the source node Silhouette was applied to and select Add OFX Input, drag and drop the optional source from the Media Pool to the Color tab, and connect the green output port of the optional source to the green input of the source node.

**How do I use an optional input in the Silhouette plug-in in Vegas?**

Create two tracks with the optional source on the bottom track and the main input on the top track. Apply Silhouette to the top track by clicking the Composite Mode icon in the track controls, navigate to the Custom > Boris FX Silhouette category and then select Silhouette.

**Why do the clips imported directly in the Silhouette plug-in not match the colorspace of the clips imported by the host application?**

Some host applications convert clips to a particular colorspace whereas Silhouette infers the colorspace from the filetype. To handle this situation, add a Color > OCIO Colorspace node after source file and set the appropriate colorspace.

**How do I use alpha generated by Silhouette in Resolve?**

To use the alpha channel created by Silhouette in Resolve, a specific workflow is required.

Edit Tab

1. Apply Silhouette to a clip in the Edit tab.
2. Using Resolve 17 or later, make sure Use Alpha is enabled.

**Note:** When Silhouette is applied in the Edit tab, only one input can be used. An optional source can only be input into Silhouette through the Resolve > Color tab.

Color Tab

1. In the Color tab, apply Silhouette to the source media's node.
2. Right-click on the node and select Use OFX Alpha.
3. Right-click an empty area of the Node Editor and choose Add Alpha Output to reveal the Node Tree output on the right.
4. Connect the node's key output to the Alpha output at the right of the node editor.

Alpha channels created in Silhouette will now be available for use in Resolve.