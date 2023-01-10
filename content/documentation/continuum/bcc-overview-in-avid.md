{
"date": "2019-06-12",
"title": "BCC Overview in Avid",
"category": "Uncategorized",
"link": "bcc-overview-in-avid/"
}

 ### **Overview**


This document provides additional guidance for working with BCC in Avid Media Composer, Symphony, and News Cutter hosts.


### 


**Common Controls**


BCC for Avid offers a number of common controls unique to the workflow requirements in Avid.  For detailed descriptions of the Avid-specific common controls, [Click here](/documentation/continuum/bcc-common-controls-avid/).

**Green Dot Real-time Effects:**


The majority of BCC effects appear as “green dot” or “real-time” effects in Avid hosts.  However, effects cannot appear as green dot real-time in Avid if they require accessing source footage at alternate times – for example during optical flow analysis or temporal blurring.  In versions of Continuum prior to Continuum 2019, the older Legacy BCC Motion Tracker required there to be duplicate versions of many effects – a green dot real time effect and a blue dot non-real-time effect with the suffix “MT” that supported the old tracker.  As of Continuum 2019 and the introduction of the new Mocha Motion Tracker we no longer need those separate versions of the effects just for motion tracking so most of the remaining blue dot non-real time filters have been moved to the Obsolete folder to support opening legacy projects.  In some cases an effect has a core feature which can not work at all in a green dot effect and it will appear only as a blue dot non-real-time effect (for example this is true for many effects in the Time category).


The BCC AVX green dot effects offer a useful real-time draft preview for judging the appearance and animation of unrendered effects.  They will generally give much smoother results with the Avid timeline set to draft mode or high performance mode (green/yellow or yellow icon). The real-time preview will drop frames if necessary to maintain the overall timing of the playback. Factors such as how processor intensive the effect is, the resolution and data rate of the media, and the disk drive speed, the graphics card speed, and the CPU speed of the system, can all affect the smoothness of the real-time preview playback.


**Obsolete Effects:**


In recent revisions we have simplified the way effects appears in the Avid effect palette. In some cases where it used to be necessary to maintain a green dot and a blue dot version of the same effect now we are able to offer just the green dot version. The effects in the 2-Input category no longer offer any unique functionality since Media Composer 6 or higher allows for applying more kinds of effects as single track transitions.


None of these changes will result in missing effects when opening older BCC/Avid sequences, but in some cases an effect applied in an older sequence might appear with “OBS” on the end of the effect name which indicates that it uses an effect which now resides in the BCC Obsolete category. Why would an effect be “obsolete” ? There are a few possible reasons. There could now be a green dot version with all the same functionality, or it could be from the 2-Input category whose effects have been moved to the Obsolete category, or maybe it’s just an effect that has been superseded by an improved version. If an effect is found in BCC Obsolete that means we suggest seeking an alternate BCC effect when creating a new effect, but that including the lesser effect is necessary to maintain compatibility with older sequences that use it.


**Copying Presets from Earlier Versions of BCC AVX:**To use custom BCC presets created in earlier versions of BCC AVX, you need to copy the older presets from their previous preset location to the new BCC AVX preset folder location.  The most reliable way to find the location of the preset directory for an individual effect is to use the Load preset command to open a file browser for that effect which then indicates the path to the correct preset folder in the current version of BCC.


**Applying Non-transition Effects as Transitions:**BCC provides two methods to use effects as transitions (as opposed to the filters in the standard BCC Transitions category which are already customized to function as transitions). The first method is to apply the effect directly to the transition between two clips. The second method is to overlap two clips and apply a BCC effect to one or both layers depending on the desired result. Each method offers advantages. Applying directly to a transition offers the convenience of an Avid transition. For example, trimming and duration changes are easily made and you only have to render a single effect. However, to create a wider range of transition effects, you can use the second method: overlap two clips and apply a filter to each layer. This method provides greater control over parameters.


**Applying BCC Effects to Titles and Mattes:**To apply a BCC effect to a an avid-native title or to an imported matte, drag the effect onto the title and choose the Apply To Title option. If you Option /Alt-drag to the effect, the effect is applied to the title as well as to any tracks beneath the title in the timeline. For example, to apply a Pyramid Blur to a title, drag the BCC Pyramid Blur effect onto the title and enable Apply to Title. To apply a Pyramid Blur to a title and the background video, Option-drag the BCC Pyramid Blur effect to the title.


**Maintaining Live Alpha Channel Data [BCC11 and up]:**BCC AVX 11 introduced an improved alpha handling pipeline to simplify preserving alpha channel information between stacked effects or even between tracks.  BCC now uses the same alpha pipeline approach as Sapphire which means you can share live alpha channel information between any combination of BCC and Sapphire filters.  There is no longer any need for the Multi-Filter Start/Mid/End controls used in versions of BCC prior to V11 (although you may still see these controls for compatibility’s sake when opening projects saved in earlier versions of BCC.  In BCC11 all you need to do to preserve the alpha channel of an effect is to set the Background layer menu to None.  The layer will then appear to composite over black instead of over the typical background track, but this image will have a live alpha channel which is accessible for use by any other BCC or Sapphire effect, whether applied as stacked filters or applied to higher tracks.  Some examples:


* *Stacked Effects with Alpha:* Use BCC Title Studio to create a title and set the Background layer to None.  Then Alt/Option-drag BCC Fast Film Glow or S\_Glow onto the BCC title to create a stacked effect.  The stacked glow effects would automatically be aware of the title’s alpha channel, enabling you to easily add a glow to the text before compositing over the final background.  Just choose the final background layer in the BCC Fast Film Glow or S\_Glow effects to complete the composite.
* *Alpha across multiple tracks:*  Use BCC Title Studio to create a title on V1 and set the Background layer to None.  Add the desired background clip to V2 and apply BCC Match Move to the V2 clip.  Select the First Below (Title Studio) track as the foreground and note that it composites over the V2 clip with a live alpha channel.
* *Alpha from host title mattes:* To preserve the alpha of any host title matte (either titles or imported graphics), just apply any BCC filter such as Brightness and Contrast which “does nothing” at default settings and enable the Apply to Title Matte option.  Set the Background for the BCC filter to None and you will see the native title matte appears to composite over black, but by passing through the BCC filter it now has a live alpha channel.  You can then apply BCC or Sapphire filters such as VR Insert or Match Move to the track above which reference the lower track and the alpha channel will be intact.
* *Transitions between BCC Titles:*  Create two separate overlapping title clips on V1 with any BCC filter such as Title Studio.  Make sure the Background layer is set to None in both the titles.  Then apply any BCC or Sapphire transition to the overlap between the two titles to create a transition between two titles which appears to be composited over black but which has a live alpha channel.  Then add the desired final background clip to V2 (above the transition) and apply BCC Composite to this clip.  Change the composite mode to Normal instead of default and you should see the transition between titles composited over the unaffected background.
* *Transitions between native title-mattes:* Take the same approach as for transitions between BCC Titles (above) but requires a few additional steps.  Create native avid title mattes on the two V1 clips.  Apply BCC Brightness and Contrast effects to each native title matte, select Apply to Title, and set Background to None.  This will preserve the alpha channel so that when the BCC or Sapphire transition is applied, the final Composite filter can generate a true composite between titles with intact alpha channels.


**Maintaining Live Alpha Channel Data [BCC10 and earlier]:**BCC AVX allows you to maintain live alpha channel data between multiple stacked filters for example to apply two or more effects to an Avid title or matte without affecting the background. For example, you could apply a BCC Emboss to a title and then add a glow filter as a second step.  When working with stacked filters that need to maintain alpha channel information, use the Multi-Filter controls in the Title Matte parameter group.  The first filter in the stack should have the Multi-filter Start option enabled.  The last filter in the stack should have Multi-Filter End enabled.  Any additional filters between the start and end filter should have Multi-Filter Mid enabled.


**Safe Levels:**


Each effect has a Safe Levels checkbox in the General Controls group to control which controls whether or not the levels are clipped to video safe 16-235 ranges or are allowed to use the full available levels.  BCC allows customizing the default value of the Safe Levels checkbox to facilitate the workflow needs of individual users or projects.  You can also enable global overrides to force all effects to render with safe levels on or off if desired.  For details on customizing Safe Levels defaults or engaging global overrides of the Safe Levels settings please refer to the [BCC Preferences](/documentation/continuum/bcc-preferences/) documentation.

**Working with Presets and Effect Templates:**  

After you apply and adjust a BCC AVX filter, you can save the parameter settings by using the Preset menu and choosing Save to create either a static or animated preset.  A dialog box allows you to name and save the file.  Presets can be shared between different editing systems and even between different host application.  However presets are only compatible with the specific filter in which they were created. For example, if you attempt to load a Cartooner preset into a Blur filter, the preset is ignored. However, you can also save presets for filter subgroups such as the PixelChooser or Gradient sections and then load them into any other filter which supports that same subgroup. Boris Continuum Complete AVX includes a large selection of preset effects for each filter. These presets are an excellent way to learn the capabilities of a filter.


**Resetting Effects:**The Preset menu allows you to save filter settings independently of the media or project. You can return to the Boris Continuum Complete default settings or to a custom default that you create yourself.


**Loading Preset Effects:**To load a previously saved filter settings file, you must first apply the same filter to your media. A list of existing presets appears in the menu and the FX Browser allows graphical preview of all the available presets.


**Saving Effect Templates in a Bin:**You can save parameter settings in a bin as an Effect template, just as you save other Avid effects. Effect templates allow you to save effect parameters and use them again to create or modify other effects. Effect templates save parameters set at multiple keyframes.


**Applying Effect Templates from a Bin:**To apply all the values from the template, drag the Effect template from the bin to either the Timeline or the Effect Preview monitor in the Effect Editor window.


**Saving BCC AVX Effects as Custom Transitions:**You can now save custom transitions to the Avid Quick Transition menu for easy access. This means that custom BCC AVX transitions appear in the Quick Transitions dialog box.


 


