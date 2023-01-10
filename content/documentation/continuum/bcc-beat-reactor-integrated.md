{
"date": "2019-06-12",
"title": "BCC Beat Reactor Integrated",
"category": "Nested Subgroup",
"link": "bcc-beat-reactor-integrated/"
}

 ### [![BeatReactorIntegrated](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/BeatReactorIntegrated.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/BeatReactorIntegrated.jpg)


### Overview


**Beat Reactor** is a parameter group found at the bottom of some BCC and FEC filters which can be used to influence other effect parameters within the filter based on an audio track within the composition. Beat Reactor displays a spectrum graph including vertical bands representing the audio levels within various frequency ranges. This graph can be used to help target particular elements within the audio track for use in influencing other effect parameters.


The BCC product also includes a **BCC Beat Reactor** standalone filter found in the **BCC Time filter** category. The standalone filter can be used to influence any parameter in an AE composition, and it has a somewhat different workflow and has its own Help file document.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


* **Beat Reactor** is a parameter group found at the bottom of several BCC8 for **Sony Vegas** filters which can be used to influence other effect parameters within the filter based on audio. **Beat Reactor displays a spectrum graph** including vertical bands representing the audio levels within various frequency ranges. This graph can be used to help target particular elements within the audio track for use in influencing other effect parameters.
* The **Sound Layer** popup will display all layers present in the composition. To use **Beat Reactor** it is necessary to first **select the layer including the audio you wish to use for influencing effect parameters**. Once a Sound Layer with audio is selected, by default the spectrum graph should display bands on frames including any significant audio levels.


* Note: to select the audio when using Beat Reactor in **All hosts besides After Effects**, it is necessary to use an external audio file as described toward the end of this document*.*


* The **Channel** popup allows for having the spectrum graph display **Left, Right,** or stereo **Mix** from the audio layer.
* **Delay (sec)** offsets the spectrum graph display in time from the audio (so it should be applied after sampler rectangles are set).This allows for offsetting the affect on parameters in time from the audio. Negative values result in the affect on parameters starting ahead of the audio event and positive values result in the affect on parameters following the audio event. ***It is often useful to use a small positive value (.1 second for example)** to create the impression that the audio event caused the change created by the **Beat Reactor**.*
* In order for a **white sampler rectangle** to appear on the spectrum graph, **it is first necessary to select a parameter** from one of the Apply Parameter popup menus.




|  |
| --- |
| [![Beat reactor Integrated 1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Beat-reactor-Integrated-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Beat-reactor-Integrated-1.jpg) |


**Each enabled Apply Parameter is represented by a white sampler rectangle** on the audio spectrum graph display. *While targeting audio events with **Beat Reactor**, it can be useful to expose the audio layer’s waveform display in the AE timeline panel to get a sense of the audio patterns over time and the relative audio level of the current frame.*


The process of using the audio spectrum graph sampler rectangles to target a particular audio element within an audio layer for use in influencing effects parameters involves a workflow process something like this:


* Make sure that the AE **audio playback can be clearly heard with as much detail as possible** (turn up the speakers or plug in the headphones).
* **Enable audio playback for the audio layer chosen as the Sound Layer in the Beat Reactor group, and disable audio playback for any other layers in the comp** (to be able to hear the important audio layer more clearly).
* In the AE timeline, **set the work area to an area including the effect** using the Beat Reactor.
* **Preview To Ram** (PTR) **with audio, listening carefully while closely watching the graph to see the movements in the spectrum bands that coincide with the audio event of interest**. It is often useful to let the PTR loop a few times listening/watching carefully in order to get a good look at it.
* Pause PTR playback and **position the current-time indicator on a frame at good instance of the audio event** of interest. It can sometimes help to scrub the timeline with audio to do this accurately. To scrub audio and video in the AE Timeline panel, Ctrl-drag (Windows) or Command-drag (Mac OS) the current-time indicator. If you stop moving the current-time indicator while keeping the mouse button depressed, a short section of audio loops.
* Use the on-screen (Corner 1 and Corner 2) position points to **place the sampler rectangle so it covers the area in which the audio event occurs**, trying as much as possible to exclude spectrum band activity which is not part of the audio event.
* **PTR with audio again, listening carefully and watching the sampler’s output meter** (the white band on the far right edge of the graph) to see if the sampler is picking up the audio event well enough to use for influencing the parameter. **If necessary, pause PTR playback and re-adjust the sampler rectangle**, PTR with audio again, readjust samplers and so on.


* Note: **Falloff** and **Delay** are parameters that relate to how Beat Reactor affects parameters (discussed in the next section of this document), but their effects are also reflected in the graph display output meters. For more direct and accurate audio visualization, *disable these parameters by setting **Delay** amount to **0** and setting **Falloff** to **Unused** during the process of placing Samplers* to isolate audio events on the graph.




|  |
| --- |
| [![Beat reactor Integrated 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Beat-reactor-Integrated-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Beat-reactor-Integrated-2.jpg) |


 


**Adjusting** **Apply Options**


The **Beat Reactor** group can influence up to 3 different parameters using the **Apply Parameter** popups (**A, B**, and **C**) and the corresponding **Apply Options** (**A, B**, and **C**). Each active **Apply Parameter** will be represented by a sampler rectangle on the graph.


Once Samplers have been placed so that they do a satisfactory job of targeting the audio events which will be used to influence the parameter(s), then it is possible to make adjustments to the **Apply Options**.


* The **Effect on Parameter** popup contains some fundamental choices about how **Beat Reactor** affects the parameter.
* **Replace Value** will **replace any parameter value already set on the parameter.**
* **Add to Value** will take the value derived from the samplers and **add it to any parameter value already assigned to the parameter**. This can be used to deviate below and above a specific value (by defining the range so both positive and negative values are added to the current value).
* **Subtract from Value** will take the value derived from the samplers and **subtract it from any parameter value already assigned to the parameter**.
* **Output Range, Output Min**, and **Output Max** determine the numeric range within which the **Beat Reactor** will influence the parameter. In this case, *Output Min does not need to be a lower number than Output Max*. **Output Min** is the value mapped to the lowest (quietest) part of the output meter and **Output Max** is the value mapped to the highest (loudest) part of the output meter.
* **Apply Strength %** allows for scaling the influence of the **Beat Reactor** on the parameter. Besides offering a quick way to increase or reduce the **Beat Reactor** influence, it provides a convenient way to animate (fade) the influence of the **Beat Reactor** on the parameter up or down over time.
* **Falloff** and **Falloff Time** offer options for creating different behaviors for the **Beat Reactor** influence immediately following the sampled audio event.
* **Unused (Immediate)** means there is no falloff beyond whatever is dictated by the sampled audio event.
* **Linear** creates a falloff where the animation curve would appear as a straight line.
* **Quadratic Hard** creates a falloff that starts a bit faster and eases toward the end of the falloff period.
* **Quadratic Soft** creates a falloff that eases at the peak and accelerates toward end of the falloff period.
* **Sustain** maintains the highest value within that occurrence of the audio event for the duration.
* **Build Up to Max** keeps adding to the value (integrated over the audio event period), up to the maximum value in the graph. With this falloff type, a large **Falloff Time** value will build up slower than a short **Falloff Time**.
* **Build Up Indefinitely** uses the **Falloff Time** to determine the time span over which one unit of build up is calculated and then builds up the value based on that.
* **Falloff Time** determines the duration of the falloff in seconds.
* **Propagation Mode** and **Propagation Time** ; the integrated Beat Reactor in the **BCC Pin Art 3D and BCC Particle Array 3D** includes a unique feature that allows for having the influence of the audio propagate through the particles in 3D space over time. **Propagation Mode** determines the starting point and direction of the propagation and **Propagation Time** determines how long it takes (in seconds) for the propagation to move from it’s starting point till it is completes within the particle array.


The **Sampler** popup menu includes options determining the sampler’s mode.


* **Box Percentage** mode finds the percentage of the sampler box area that is filled by the spectrum bands and fills that same percentage of the output meter.
* **Max Frequency** mode compares spectrum bands and finds the one that is filling the greatest area of the sampler and then finds the percentage full on only that band (as if the rectangle were only as wide as that band) and fills that same percentage of the output meter.
* **Toggle ON/OFF** mode will fill the whole output meter (Output Max value) if there is any piece of spectrum band within the sampler rectangle (and go straight to an empty meter as soon as there is no spectrum band within the rectangle).
* **Link to Sampler A:** The Sampler popups in the Apply Options B and C subgroups include an additional choice to have Sampler B and C Link to Sampler A. **When this is chosen, B and C maintain their own individual options (Range, Falloff, etc.) but will use the sampler rectangle from Apply A** and derive the animation from that area of the spectrum graph.


The **Sampler Corner** parameters are coordinate parameters for the sampler rectangles’ placement corners (these parameters are usually adjusted using the on-screen position point since they are placed in relation to the audio spectrum bands).


The **Audio Spectrum Options** group contains options for adjusting how the spectrum graph visualizes the audio.


* **Freq Resolution determines how many distinct bands are used to represent the frequencies included in the graph**. It is sometimes useful to increase the resolution in order to visualize and more accurately sample a specific audio event.
* **Scale (%)** can be used to adjust the vertical scale of all the bands in the graph (scaling them toward the top of the graph). For audio with lower levels it is often useful to boost the scale a bit so it better fills the graph area. **Sub-Bass, Bass, Mid-Range**, and **Treble (%)** offer the same functionality for individual areas of the spectrum (with **Scale %** acting as a master control).
* **Low Cutoff dB** determines what level is used as the cutoff point at the bottom of the graph.
* **Min** and **Max Freq (Hz)** determine the frequency range displayed in the graph.
* **Smoothness (%)** makes the graph smoother by averaging out the values of neighboring frequency bands. This can be useful for more easily visualizing broader patterns in the audio, although smaller smoothness values offer more precise isolation of sound.


The **Show Graph** popup menu includes options for how the graph displays ;


* **Only in Draft Mode** will result in the graph being displayed **only when the AE layer’s Quality switch is set to Draft** (the Graph **will not display when the layer is set to Best** quality).
* When set to **Yes** the graph will be displayed as long as a layer has been deselected in the **Sound Layer** popup menu.
* When set to **No** the graph will not be displayed.
* When set to **With Black Background** the graph will be displayed with a black background as long as a layer has been selected in the **Sound Layer** popup menu.


The **Graph Options** group includes controls for **Graph Opacity**, and **Corner controls** for the graph that allow **for changing the graph’s position and size** within the frame. *Since the white sampler rectangles do not move or scale along with the graph when using these corner controls, it is best to re-position / re-scale the graph **BEFORE** setting the sampler rectangles.*


Using **External Audio Files** (**In all hosts besides Adobe Aftereffects** workflow):


* Since **non-Adobe Aftereffects hosts** video plugin cannot directly access audio from their timeline, **the workflow for using Beat Reactor in these hosts involves directing the plugin to an external audio file on your system. The audio file must be an AIFF (Audio Interchange File Format) file using the .aif or .aiff file extension**. AIFF files of various sample rates and bit depths are supported. Commonly the audio file will contain the same audio that is present in 1 or more tracks of the host timeline during the duration of the BCC effect to create the appearance of some sort of synchronicity between the image and sound. Therefore, once you have decided to use the Beat Reactor, **often the first step is to mark an in and an out in the Avid timeline around the audio you want to use in the Beat Reactor and export it out of these hosts as an AIFF file.**
* To use **Beat Reactor** it is necessary to first **select the audio file including the audio you wish to use for influencing effect parameters.** After checking the **Enable Beat Reactor** checkbox, a message is displayed in the effect output that looks like the image below.




|  |
| --- |
| [![Beat reactor Integrated 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Beat-reactor-Integrated-3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Beat-reactor-Integrated-3.jpg) |


This message means that it **is necessary to click on the External File button to open the file selection dialogue that allows for selecting the AIFF file**




|  |
| --- |
| [![Beat reactor Integrated 4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Beat-reactor-Integrated-4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Beat-reactor-Integrated-4.jpg) |


**Once an AIFF file has been selected, the audio graph will display** vertical bars representing the audio levels within different frequencies, and it is possible to enable an Apply Parameter and begin adjusting the Beat Reactor.


 


