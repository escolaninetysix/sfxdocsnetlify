{
"date": "2019-06-12",
"title": "BCC Dropout Fixer",
"category": "BCC Image Restoration",
"link": "bcc-dropout-fixer/"
}

 [![BCC Dropout Fixer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Dropout-Fixer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2015/10/BCC-Dropout-Fixer.jpg)


### *New in BCC10*


### **Overview**


This filter was designed to fix field glitches / artifacts in a source clip which are present as a the result of digitizing tape based media with faulty equipment. Sometimes digitized media will have fields that contain artifacts due to brief signal loss – the BCC Dropout Fixer filter provides a way to isolate the exact frame with the field artifact and replace the damaged portion of the field with data from a near field.


 


**Notes**


* This filter only works on on interlaced media and output rendering must be fielded.
* Each instance of the filter affects only one field, but can affect that field on multiple frames.
* If the same area of the same field has dropouts on several consecutive frames, they can be fixed with one instance by setting a higher value in the Dropout Length parameter.
* The Preview popup is  active only when setting up the filter.
* The Mask Horizontally checkbox determines whether the mask is applied to a box of pixels, or to rows.


 


**How to use the filter:**


Because the filter cannot automatically detect which pixels in the image are undesired artifacts and the result of video capture dropout, the user must specify the exact frame that contains a field with dropout artifacts. Once the frame has been identified in the clip, this frame number should be set in the Dropout Start Frame numeric entry box at the top of the filter UI – this is achieved either manually, or by clicking the “Click to Set Dropout Frame” button in the filter control panel. Then the filter needs to know which field – upper or lower – in the frame that contains the pixel artifacts. This is set in the Dropout Field pop-up.


Once the frame and field have been correctly identified and set in the filter UI, you have a choice to set the field removal to affect the entire field in question, or a portion of the field. In our lab testing we have found that it’s often more desirable to replace the complete field, but your results may vary depending the size of the dropout artifacts and the movement of pixels in the frame. If after isolating the filter to affect only a specified region in the frame where you’re seeing an obvious glitch in the result, try setting the Dropout Top/Left and Bottom/Right region points so that they encompass the entire frame. This may produce a subtle jump but because it will affect the entire field, it may be more desirable and less noticeable when playing back the rendered result.


The pop-up at the bottom of the filter enables you to select whether the filter should replace the damaged field with either the nearest field forward or nearest field backward. You can also elect to set the removal as a solid red color … obviously it would be ill advisable to select this option for a final print but it’s a handy option if you simply wish to identify the bad field as opposed to fixing it immediately.


 


### **Parameter Controls:**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Click to Set Dropout Frame button** : Use this button to automatically set the dropout frame number to the current CTI location.


**Dropout Start Frame** : Displays the frame number that is currently set for repair. You can manually set the value of this field.


**Dropout Field pop-up** : Used to identify the field to be repaired. There are two options:


* **Field 1**
* **Field 2**


**Dropout Length** : Used to set the number of frames to be repaired.


**Preview pop-up** : Used to set the filter output. There are six options :


* **Original Field**
* **Dropout Field at CTI**
* **Dropout Field**
* **Replacement Field**
* **Output Field**
* **Output**


**Dropout Top/Left xy position** : Used to set the top left corner of the frame that is to be repaired.


**Dropout Bottom/Right xy position** : Used to set the bottom right corner of the frame that is to be repaired.


**Mask Softness** : Used to soften the edges of the dropout repair region.


**Mask Horizontally checkbox** : When disabled, the filter will operate in a horizontal strip across the frame, using only the X values in the Dropout Top left and Dropout Bottom Right fields. When enabled, the filter will operate on a shape defined by the X and Y values in the Dropout Top left and Dropout Bottom Right fields.


**Replace with pop-up** : There are 3 options for the field replacement :


* **Color** : Fills the selected field with solid color as defined by the Fill Color chip.
* **Nearest Field Forward** : Fills the selected field with the corresponding field from the next frame.
* **Nearest Field Back** : Fills the selected field with the corresponding field from the previous frame.


**Fill Color chip** : Use to set the fill color.


 


