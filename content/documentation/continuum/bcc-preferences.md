{
"date": "2019-06-12",
"title": "BCC Preferences",
"category": "Uncategorized",
"link": "bcc-preferences/"
}

 ### Overview


The BCC Preferences panel manages global settings that apply across the full BCC effect set.  These controls allow fine tuning your BCC workflow and configuring special options such as hardware settings.  Because these preferences are not saved into project files, care should be taken when moving projects to other systems or when sharing systems between multiple users since changes to preferences can affect both render results and parameter defaults in newly applied effect instances.


### 


### Transferring/Migrating Preferences


You can manually transfer preference files between systems or between versions of Continuum to ensure render results remain identical, or alternatively preference settings can be manually set to match settings on another system if needed.  Since the available options for some preference items are specific to the graphics hardware on a particular system, you may find that some settings change when transferring preferences between systems with different graphics cards.  Note if you transfer a preference file manually, you should make sure that the host application is closed before transferring the file.  Preference files can be found at locations similar to the following, being sure to select the file appropriate for your particular host and your particular version of BCC.  Note there are multiple preferences files at these paths and that they may vary by version of Continuum.  (The AE preference files are indicated in these example paths below.)


(*Note on Windows you may need to set Windows Explorer to allow showing hidden files in order to see this folder.  Select Windows Explorer->View->Options and on the View tab choose to show hidden files and folders.*)


Preference files are XML based text files and can be merged/edited in standard text editors, although care must be take to preserve proper tags.  Note that the format of the XML and PLIST files is the same internally.  The extension was changed from PLIST to XML in 11.0.3 to avoid conflicts with disk utility programs on mac.


BCC 11.0.3 and forward (using XML extension):


Mac:  

/Users/YOUR\_ACCOUNT\_NAME/Library/Preferences/com.borisfx.BCC11.filter.ae.xml


/Users/YOUR\_ACCOUNT\_NAME/Library/Preferences/com.borisfx.BCC11.fxBrowser.ae.xml


/Users/YOUR\_ACCOUNT\_NAME/Library/Preferences/com.borisfx.Continuum.BCC.ae.xml


Windows:  

C:\Users\YOUR\_ACCOUNT\_NAME\AppData\Local\BorisFX\Boris Continuum Complete\Continuum\_BCC\_Preferences\_AE.xml


C:\Users\YOUR\_ACCOUNT\_NAME\AppData\Local\BorisFX\Boris Continuum Complete\BCC11\_FXBrowserPreferences\_AE.xml


C:\Users\YOUR\_ACCOUNT\_NAME\AppData\Local\BorisFX\Boris Continuum Complete\BCC11\_FilterPreferences\_AE.xml


BCC 10 through 11.0.2 and earlier – adjust major version as necessary (using PLIST extension):


Mac:  

/Users/YOUR\_ACCOUNT\_NAME/Library/Preferences/com.borisfx.BCC11.filter.ae.plist


/Users/YOUR\_ACCOUNT\_NAME/Library/Preferences/com.borisfx.BCC11.fxBrowser.ae.plist


/Users/YOUR\_ACCOUNT\_NAME/Library/Preferences/com.borisfx.Continuum.BCC.ae.plist


Windows:  

C:\Users\YOUR\_ACCOUNT\_NAME\AppData\Local\BorisFX\Boris Continuum Complete\Continuum\_BCC\_Preferences\_AE.plist


C:\Users\YOUR\_ACCOUNT\_NAME\AppData\Local\BorisFX\Boris Continuum Complete\BCC11\_FXBrowserPreferences\_AE.plist


C:\Users\YOUR\_ACCOUNT\_NAME\AppData\Local\BorisFX\Boris Continuum Complete\BCC11\_FilterPreferences\_AE.plist


 


### Launching the Preferences Panel


The way you access the Preferences panel is different for each host.  In After Effects, Premiere, and Motion the preferences are accessed by clicking the Preferences button that is part of the main BCC banner at the top of each effect.  In Avid the preferences are accessed by a Preferences button in the General Controls parameter group.  In Vegas and Resolve the preferences are accessed by a Preferences button at the top of the effect.


### 


### Working with the Preferences Panel


You can access the help documentation for the Preferences panel at any time by clicking the **“?”** icon in the panel.


You can reset the preferences to factory default settings at any time by clicking the**Reset** button in the panel.


After editing preference settings, choose the **Cancel** or **OK** buttons to either dismiss or commit your changes.


 


### Clearing Render Caches


Note that some preference settings will affect the render results, but changing preferences may not automatically clear the render caches in hosts which maintain them.  If you have changed a preference setting that will potentially affect the render results you may need to manually purge any cached renders as appropriate for your particular host.


### 


### Preference Details


**Enable OpenCL:**Enables or disables accelerated GPU processing for the filters that use OpenCL.   (Note this option does not disable hardware acceleration in OpenGL accelerated filters and only affects OpenCL accelerated filters.)  This setting should generally remain enabled, but might occasionally be useful in trouble shooting or working around situations where graphics card failures or hardware rendering errors are occurring in accelerated filters.  When the Enable GPU setting is disabled the associated effects will use a non-accelerated CPU rendering path which will considerably increase rendering times, but which in rare circumstances can be useful in working around hardware difficulties.


**Hide Disabled Parameters [Adobe only]:**Enables whether or not disabled parameters are completely hidden or merely “grayed out” in Adobe hosts.  Using hidden parameters can preset a less cluttered looking UI, but some versions of After Effects and Premiere show UI glitches when the Hidden option is enabled such as UI elements failing to appear when expected or failing to draw correctly.  If these UI glitches are apparent in your Adobe host version you should consider leaving the Hidden option disabled.


**Load PixelChooser Mask with Preset:**Controls whether or not parameters in the PixelChooser group are modified when a preset is loaded.  Some presets are specifically designed to be used with the PixelChooser settings stored in the preset, for example to limit effects to certain geometries or tonal regions.  (Note that factory installed presets which are intended to be used with PixelChooser settings are labelled with “PC” at the end of the preset name.)  However in other circumstances it can be desirable to leave PixelChooser settings unchanged when loading presets.  For example if you have already dialed in a custom PixelChooser setting and would like to change the main effect preset without modifying that custom PixelChooser setting.


**Logging:**Event logs are generated when running BCC and these can occasionally be useful when troubleshooting problems, particularly OpenCL related failures.  You can choose the level of detail in the **Logging Menu** by choosing between *Normal* for standard logging and *Comprehensive* for more detailed logging.  Choose Comprehensive when troubleshooting BCC.  Note that you need to restart the host application after changing the Logging Menu setting in order for the change to take effect.  The Logging **Open** button will open the current log file.  Any standard text editor can be used to read the contents of this log file.


**Safe Levels Default [Avid only]:**Specifies the default value for the Safe Levels checkbox in any newly applied effect instances going forward.  Changing this setting has no effect on previously applied filter instances but allows you to customize your preferred default setting for any new effects that get applied after the setting is changed.  This allows streamlining your workflow based on your personal preferences and the requirements of your current project.


**Safe Levels Global Override [Avid only]:** Specifies whether or not to globally override the Safe Levels settings in all current effect instances.  This allows you to force a project to render with Safe Levels universally On or Off irrespective of how the Safe Levels checkboxes are actually configured within the individual effects.  Note that this setting does not change the checkbox state in the individual filters, but it instead causes all the individual filters to render as if their checkbox state had been changed.  Safe Levels Global Override has three options:


* *None:*  Skips any global override of Safe Levels handling and each effect respects the value of its individual Safe Levels checkbox.
* *Forced On:* All effects ignore their individual Save Levels checkbox state and render with Safe Levels forced to ON.
* *Forced Off:* All effects ignore their individual Save Levels checkbox state and render with Safe Levels forced to OFF.


### 


### Legacy Preference Details (for older versions of BCC)


**Enable GPU [BCC9 Only]:**Enables or disables accelerated GPU processing for the filters that use OpenCL.   (Note this option does not disable hardware acceleration in OpenGL accelerated filters and only affects OpenCL accelerated filters.)  This setting should generally remain enabled but might occasionally be useful in trouble shooting or working around situations where graphics card failures or hardware rendering errors are occurring in accelerated filters.  When the Enable GPU setting is disabled the associated effects will use a non-accelerated CPU rendering path which will considerably increase rendering times, but which in rare circumstances can be useful in working around hardware difficulties.


**Use 4K Buffers [BCC9 Only]:**This setting must be enabled to allow the 3D Objects category of filters to work on media at resolutions above 1920×1080 (and up to 4k).  However, this 4k support requires graphics cards with sufficient on-board memory to allow full processing in 4K.  At least 2GB of on board memory are recommend when using this setting although you might have success on some cards with as little as 1.5GB.  If this 4K option is enabled on a system that lacks the sufficient graphics cards support then an error message will appear.  Note that on some cards with borderline support you might find that enabling 4K buffers will render ok but will cause performance degradation, in which case the 4K Buffer option should be disabled.


**Anti Alias Buffer Level [BCC9 Only]:** This setting allows fine tuning the edge quality in the 3D Objects family of filters.  Higher settings of the the Anti Alias Buffer Level will generate cleaner, more anti-aliased edges on both internal and outer boundaries in 3D Objects filters.  The available buffer levels will vary depending on the capabilities of your graphics card and on the status of the Use 4k Buffers setting.  Enabling the Use 4K Buffers option will reduce the number of available anti-alias buffer levels due to the increased memory demands of the 4k buffers.   Note that pushing the buffer level to the highest offered setting can sometimes overstretch GPU resources which can in turn cause noticeable performance degradation.  Experiment with various settings to find the optimum balance between edge quality and performance for your particular graphics card.


 


