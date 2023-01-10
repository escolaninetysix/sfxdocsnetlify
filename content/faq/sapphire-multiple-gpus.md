{
  "title": "Will Sapphire use multiple GPUs if I have more than one?",
  "date": "2018-04-26T00:00:00+00:00",
  "description": "Will Sapphire use multiple GPUs if I have more than one?",
  "excerpt": "No, Sapphire will only utilize a single CUDA GPU. If you have multiple CUDA capable GPUs, you can control which one Sapphire uses in the s_config.text file. Change the use_gpu setting from \"Yes\" to the desired GPU index (0, 1, etc.). You can verify which GPU Sapphire is currently using in the Help dialog. s_config can be found in the following directories. . .",
  "image_url": "",
  "tags": [
    "Sapphire"
  ]
}

No, Sapphire will only utilize a single CUDA GPU.  
  
If you have multiple CUDA-capable GPUs, you can control which one Sapphire uses in the s\_config.text file. Change the use\_gpu setting from 'Yes' to the desired GPU index (0, 1, etc.). You can verify which GPU Sapphire is currently using in the Help dialog. s\_config can be found in the following directories.

* * *
##### Adobe #####

*	**On Windows:** C:\Program Files\GenArts\SapphireAE\s\_config.text
*	**On Mac:** /Applications/GenArtsSapphireAE/config/s_config.text

* * *
##### Avid #####

*	**On Windows:** C:\Program Files\GenArts\SapphireAVX\s\_config.text
*	**On Mac:** /Applications/GenArtsSapphireAVX/config/s\_config.text

* * *
##### OFX #####

*	**On Windows:** C:\Program Files\GenArts\SapphireOFX\s\_config.text
*	**On Mac:** /Applications/GenArtsSapphireAVX/config/s\_config.text
*	**On Linux:** /usr/genarts/sapphireOFX/s\_config.text

* * *
##### Avid #####

*	**On Mac:** /Applications/GenArtsSapphireAVX/config/s\_config.text
*	**On Linux:** /usr/discreet/sparks/sapphire11/s\_config.text
