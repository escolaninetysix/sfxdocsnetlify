{
"date": "2019-06-12",
"title": "BCC Overview in Resolve",
"category": "Uncategorized",
"link": "bcc-overview-in-resolve/"
}

 ## **Overview**


This document provides additional guidance for working with BCC in DaVinci Resolve.


**Fusion Page Support:**


Note that as of Continuum 2019 (v12.0.0) the Fusion Page in Resolve is NOT officially supported by Continuum filters.  Some parts of Continuum may work fine in the Fusion page, but other parts will likely have problems in the Fusion page so Continuum is officially supported only in Color and Edit pages in Resolve at this time.  Improved support for the Fusion page is slated for future updates.


**Supported Effects**:


Continuum supports DaVinci Resolve through the OFX plugin API.  Due to certain limitations in the current DaVinci Resolve implementation of that plugin API, not all BCC filters will appear as options within the Resolve UI.


* Up through the release of Resolve 14 it is not currently possible for an OFX plugin to access the source layer at points in time that are more than roughly 5 frames from the current frame.  Many BCC plugins access neighboring frames and may use restricted frame ranges when running in Resolve.  Other BCC plugins such as Optical Stabilizer or Optical Flow fundamentally require access to frames at very widely spaced points in time and thus are not currently supported in Resolve.


### **Working with Alpha**:


Working with alpha channels in Resolve requires specific workflow techniques.  Note that Resolve currently does not allow an OFX effect to modify the alpha channel if it is applied in the Edit page.  If you apply an effect that modifies alpha in the Edit page, then Resolve will simply ignore any alpha changes, so when the effect needs to modify an alpha channel it should be applied in the Color page.  Note that even in the Color page you cannot currently apply effects to Resolve native Titles, so if you want to apply an effect to text you should generate the text using Title Studio or to an imported still image with embedded alpha channel.  Please consult Resolve documentation for complete guidance, but to quickly get up and running with BCC effects that create or modify alpha channels in Resolve you can do one of the following depending on whether you apply the effect directly to the main node or to a serial node.


Applying directly to the main node:


* Drag the effect directly onto the source node
* Right Click in an empty background area of the node graph and select Add Alpha Output
* Connect the alpha output from the source node to the main alpha output you just created in the previous step.
* Right click on the effect node and select Use OFX Alpha
* Optional – if the node to which the effect is applied already had an external alpha channel such as when applied to still image with embedded alpha, then you may need to re-impose that source alpha channel by right clicking on the source node and selecting Add Matte to restore the matte.


Applying as a serial node:


* Drag the effect onto the graph to add it as a new downstream serial node.
* Right Click in an empty background area of the node graph and select Add Alpha Output
* Connect the alpha output from the effect node to the main alpha output you just created in the previous step.
* Optional – if the upstream nodes already have an alpha channel, be sure to pipe the alpha channel into the effect node’s alpha.
* Optional – if the source node has an external alpha channel such as a still image with embedded alpha, then you may need to re-impose that source alpha channel by right clicking on the source node and selecting Add Matte to restore the matte.


### **Working with Secondary Layers**:


As of Resolve 11.1 it is now possible for an effect to access secondary layers – for example Chroma Key Studio can now perform a Light Wrap by piping in the background layer for a more realistic final composite.  Here’s a quick suggested workflow for accessing secondary layers in Resolve:


1. In the media tab’s file browser, select the clip to be used as a secondary layer, right click, and select ‘Add as Matte’  

2. In the color tab, apply the desired BCC filter to your primary media’s node  

3. Right click the node, and select ‘Add OFX Input’  

4. Right click the node again, go to ‘Add Matte,’ and select the name of the clip you previously imported as a matte  

5. Select the Key Input (the dotted line between the blue triangle on each node) and delete it  

6. Select the Source Bar (gray rectangle on the left of the node window) and connect it to the RGB Input (top grey circle) of your primary node  

7. Select the RGB Output (bottom grey circle) of the matte node, and connect it by dragging to the OFX input (middle grey circle) of your primary node.  The secondary layer option should now be working.



