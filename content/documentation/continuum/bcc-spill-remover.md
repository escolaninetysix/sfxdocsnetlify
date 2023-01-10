{
"date": "2019-06-12",
"title": "BCC Spill Remover",
"category": "BCC Key & Blend",
"link": "bcc-spill-remover/"
}

 
New in Continuum 2019.5, the BCC Spill Remover filter is an advanced and highly efficient method of removing spill from green, blue and red backgrounds while keying footage. It prevents background color from seeping into the foreground by suppressing those tones, or by creating a color or image light wrap around the areas of spill. 


Spill Remover is available as a stand alone filter, as well as an additional feature inside of BCC Primatte Studio.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/spill-1024x314.jpg)
### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](https://borisfx.com/documentation/continuum/bcc-common-controls).


* *Vegas Pro Workflow Tip:*  To use the Light Wrap with Background Layer option in Spill Remover in Vegas Pro you must apply the filter in Custom Composite Mode.  For more information on working with Custom Composite Modes in Vegas, [Click Here](/documentation/continuum/working-in-vegas-pro). Using Custom Composites in Vegas Pro.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/03/Vegas1.png)
### Basic Parameters


#### Compare Mode


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](https://borisfx.com/documentation/continuum/bcc-compare-mode).


The **View** popup is useful when setting up the filter. There are 8 view options that allow you focus on specific aspects of the filter setup.


* Final
* Light Wrap Only
* Light Wrap on Black
* Color + Alpha
* Alpha Map
* Greyscale Map
* Alpha Map Straight
* Greyscale Map Straight


**Removal Method** allows you to set auto or classic continuum spill removal.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/Spill3-1024x362.png)
**Channel Limit** scans the selected color channel and attempts to remove the spill. You can set the **Screen Type** to have the filter remove *green*, *blue* or *red* spill and adjust the **Bias** to adjust the replacement color tones.


***NOTE***: When Channel Limit is selected, Classic Continuum features will not be available. 


**Classic Continuum** allows you to manually select the screen color and adjust the removal mix. When this option is selected the following parameters become available for use:


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/spill4.png)
**Screen Color** allows you to set the color of the spill you wish to remove. 


Once you’ve selected the apropriate screen color the next step is to adjust the **Spill Ratio** until most of the background color is gone from the foreground. Lowering Spill Ratio to 0 creates a magenta (if the key color is green) or yellow (if the key color is blue) tint in the foreground. Increasing this value to 200 leaves the original foreground color unchanged, with no adjustment for spill.


**Spill Tone Mix** has the opposite effect of Spill Ratio; it adds background color to the foreground image. For example, if you work with a green screen image, you can increase Tone Mix to compensate for magenta tint created by lowering the Spill Ratio.


Increasing **Spill Tone Range** increases the range of the foreground color mix, which can also help restore the original color to the flesh areas.


As a final adjustment you can change the **Amount** to adjust the overall amount of spill removal


**Light Wrap On Spill** enables Continuum’s Light Wrap feature for areas where spill is present. Light Wrap reflects a background image around the edges of a foreground image to form a border.  This creates the illusion that light from the background image is reflected onto the foreground image which in turn creates a more convincing composite by making it appear as if the images were shot in the same environment. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/spill5.png)
**Light Wrap Source** allows you to choose between creating the Light Wrap from a **Background Layer** or from a user definied **Wrap Color**.


**Softness** is only available when *Background Layer* has been selected in the *Light Wrap Source*. This softens the edges of the border image that is reflected or wrapped. 


**Lightness** sets the lightness value of the reflected image. Negative values make the reflection darker and positive values make the reflection lighter. 


**Apply Mode** determines the method that is used to composite the border. For descriptions of all the possible Apply Modes, [Click Here](https://borisfx.com/documentation/continuum/bcc-apply-modes). 


**Mix With Original** blends the original and modified results. Use this parameter to control the effective amount of the light wrap adjustment. 


