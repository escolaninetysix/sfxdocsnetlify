{
  "title": "OpenColorIO FAQ",
  "date": "2019-11-19T00:29:12-04:00",
  "description": "",
  "excerpt": "OpenColorIO FAQ for Sapphire 2020",
  "image_url": "",
  "tags": [
    "Sapphire"
  ]
}

OpenColorIO (OCIO), is the open-source color management solution from Sony Picture Imageworks, Sapphire 2020 can apply and read a color profile to provide consistent colors across internal applications, such as the Preset Browser, Flare Designer, and Effect and Transition Builder. The Flare Designer and Builder applications now feature an OCIO panel to confidently manage the color output to any monitor. Also, Sapphire 2020 features a new effect called S_OCIOTransform, which allows Sapphire to apply an OCIO transform inside of any application, bringing OCIO Color Management to many applications that have yet to adopt the OCIO standard.

All OpenColorIO information below applies both to Color Management within the Sapphire Preset Browser, Sapphire Effect and Transition Builder, and Sapphire Flare Designer as well as to the new OCIOTransform effect in Sapphire 2020

To use OpenColorIO in Sapphire, there are three ways to specify the OpenColorIO configuration file.

* By default, Sapphire will use the config.ocio file found in Sapphire's installation directory.

* To set OCIO system wide, set the OCIO environment variable to point to the desired config.ocio. This will ensure that all host applications and plugins that use OCIO will use the same OCIO settings.

	* We strongly suggest working with an IT department or IT professional to help setup environment variables, as there can be underlying conflicts with pre-existing settings.

	* Windows:
	
	  * Open "File Explorer"

      * Right-click on "This PC" and select "Properties"
	  
	  * On the left, navigate to "Advanced system settings"
	  
	  * At the bottom, click on "Environment Variables"

      * In the top section labelled "User variables for...", click "New"
	  
	  * In the dialog that pops up, enter "OCIO" in the "Variable name" box, and the full path to the config.ocio file in the "Variable value" box.
	
	* Mac OS:

	  * Open a Terminal - This can be found using Spotlight

	  * Type: "launchctl setenv OCIO /full/macos/pathway/config.ocio" (without quotes). Note: this will not remain set after a reboot.

	  * To set the environment variable so that it persists through a reboot, the above command needs to be called through a .plist file in /Library/LaunchDaemons.

	* Linux:

	  * To set the OCIO environment variable for all users of the computer, add "export OCIO /full/linux/pathway/config.ocio" (without quotes) to /etc/profile, replacing "full/linux/pathway/config.ocio" with the path full path for the desired config.ocio.
	  
	  * To set the OCIO environment variable for the current user only, add "export OCIO /full/linux/pathway/config.ocio" (without quotes) to ~/.profile, replacing "/full/linux/pathway/config.ocio" with the path full path for the desired config.ocio.

* To set OCIO for Sapphire only, set the ocio_config flag inside the s_config file that shipped with Sapphire and can be found in the Sapphire installation directory.

	* Windows: C:\Program Files\GenArts\SapphireOFX\s_config.text

	* Mac OS: /Applications/GenArtsSapphireOFX/config/s_config.text

	* Linux: /usr/genarts/SapphireOFX/s_config.text