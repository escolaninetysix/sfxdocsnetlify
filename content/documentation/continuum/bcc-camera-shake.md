{
"date": "2019-06-12",
"title": "BCC+Camera Shake",
"category": "BCC Lens",
"link": "bcc-camera-shake/"
}

 
NEW IN CONTINUUM 2021, The BCC+ Camera Shake filter simulates camera shake using random changes in amplitude, speed, scale, rotation, and motion blur. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_180.png)**Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


* **Amplitude**: Sets the size of the camera shake.
* **Speed**: The speed of the camera shake.
* **Scale**: Determines the camera shake fluctuation.
* **Rotate**: Sets the rotation of the camera shake.
* **Randomize**: Randomizes the camera shake.


#### Motion Blur


**Enable**: Turns Motion Blur on or off. The default is off.


**Shutter Angle**: Determines how long the camera shutter stays open when a picture is taken– higher values create more motion blur. The range of the Shutter Angle is 0-720 and defaults to 180. Measured in degrees, it simulates the exposure of a rotating camera shutter. The shutter angle uses the footage frame rate to determine the simulated exposure. For example, a shutter angle of 180 degrees (50% of 360 degrees) for 24fps footage creates an effective exposure of 1/48 of a second. Typing 1 degree applies almost no motion blur, and typing 720 degrees applies a high degree of motion blur.


**Shutter Phase**: Offsets the point in time, either forward or reverse, when the shutter opens. The range of the Shutter Phase is -360 to 360 and defaults to -90.


**Motion Samples**: Renders intermediate frames equal to the Motion Samples value and accumulates them, one over the other, on a single frame. The higher the number, the smoother the motion. The Motion Samples range is from 1-256 and defaults to 16.


Note:Normally, motion blur is calculated going forward, so if there is no motion beyond the end of a sequence, there won’t be motion blur on the last frame. To work around this, add an extra frame or two to the end of the work range in the Timebar and move the last transform keyframes to be outside of the session range.


### Working with The Filter


1. Apply BCC+ Camera Shake from the BCC Lens unit.
2. Adjust the Amplitude, Speed, Scale, Rotate and Randomize sliders until you achieve the desired amount of shake.
3. Enable Motion Blur if you want to add realistic camera blur to the image.


