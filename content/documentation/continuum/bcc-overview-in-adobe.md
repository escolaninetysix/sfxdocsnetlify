{
"date": "2019-06-12",
"title": "BCC Overview in Adobe",
"category": "Uncategorized",
"link": "bcc-overview-in-adobe/"
}

 ## **Overview**


This document provides additional guidance for working with BCC in Adobe After Effects and Premiere.


**Using BCC Transitions in Premiere**


Historically BCC has always offered some “transition-style” effects in Premiere but with BCC 9 in Premiere CC we now offer true NLE-style single-track transitions.  In Premiere CC you will now see two separate BCC Transitions folders – one under Premiere’s “Video Effects” group and one under Premiere’s “Video Transitions” group.  For standard transition work – applying single track NLE transitions – you should use the BCC filters from the Video Transitions group.  You can still apply the older “effect-style” versions of the transitions from the Video Effects group to individual clips if desired but in general these are presented mainly for compatibility with older versions of BCC and for projects created with older versions of Premiere.


**Rendering at less than full resolution in Premiere**


When rending in Premiere to a final resolution that is lower than the project’s main resolution, the Premiere host will render all effects at lower resolution internally which can cause some effects to generate significantly different results than if rendered at full resolution and resized afterwards.  Some filters that are highly resolution dependent such as BCC Match Grain will even render warning messages when used at less than full resolution. To ensure Premiere renders internally at full resolution and then resizes as a secondary post-processing step you can enable Premiere’s “maximum render quality” option.


**Parameter Enabling/Disabling in Premiere CS6**


BCC frequently enables/disables individual parameters within the effect control pane to help make clear which parameters are relevant in a particular configuration.  Premiere CS6 and earlier have a host-side problem where they sometimes fail to fully enable or fully disable parameters in response to other parameter changes.  This can at times make parameters appear unavailable when they should in fact be editable.  Newer versions of Adobe Premiere do not show this problem, but for older versions you can usually force the UI to refresh correctly by twirling an effect group closed and then back open again.


 


**Videoscope log files in Premiere**


Premiere uses a predictive rendering scheme where it is constantly rendering multiple frames in the background in an effort to yield optimized preview speeds.  Thus even when parked on a single frame in Premiere, the BCC Video Scope log file can generate entries for multiple framex when a render refreshes e.g. due to changing a parameter.  The Video Scope log file entry for the current frame should be the first entry in the list if you clear the log file prior to forcing a render refresh.


