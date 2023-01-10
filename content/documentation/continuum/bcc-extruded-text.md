{
"date": "2019-06-12",
"title": "BCC Extruded Text",
"category": "BCC 3D Objects",
"link": "bcc-extruded-text/"
}

 [![ExtrudedText](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/ExtrudedText.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/ExtrudedText.jpg)


### Overview


The BCC Extruded Text filter generates true 3D text objects with separate control options for each of the 4 sides of the extruded object. Users of After Effects, HitFilm, and Nuke can take advantage of tight integration with the native host 3D camera and lighting systems in addition to the filter’s own built-in 3D camera and lighting options that are available across all hosts.  Additionally, AE users can use AE native mask tools to create custom bevel shapes, and for non-AE users, a variety of built-in bevel shapes have been included. Also included with this filter are 3D deformers, such as ripple, pulse, bend-taper-twist, curl and a shatter explosion effect. The Jitter option offers additional automated control over the 3D text animation.


As with all filters in the 3D Objects group, this OpenGL based filter is hardware assisted for enhanced render performance.


### 


#### **Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


#### **A****pplying** **t****he****B****C****C****Ex****tr****ud****e****d****T****e****xt****F****il****te****r**


3D Objects filters are general best applied to solid color/slug layers which match the dimensions of the overall project.  It is recommended that you apply the filter to a project/comp sized layer when possible to ensure that features such as host native Camera and Light integration will work as expected.


Although the Extruded Text filter operates in a true 3D space, for best integration of the 3D extrusion into an host 3D scene it is generally recommended to **l****e****ave** **t****he****Solid****lay****e****r****t****he** **f****il****te****r****is****appli****e****d** **t****o****as****a****2D****lay****e****r**(rather than switching it to a 3D layer).


The BCC Extruded Text filter provides a custom Text Window to enter and format the text.  In some hosts the Text Window may automatically launch when the effect is first applied, whereas in other hosts you may need to select the Text button to bring up the window.


 


 


#### **Text Window**


**B****C****C****Ex****tr****ud****e****d****T****e****xt**uses the standard Boris Text Window (like the Boris Title Toolkit, RED, Blue, and Graffiti products).


The Text Window is where text is entered and formatted, where Font and Point Size are selected, etc.


**S****m****all****e****r****point****si****ze****s****g****e****n****er****ally****do****not** **w****o****r****k** **we****ll**when extruding text – it’s best to start with a larger point size (perhaps a point size of 100 or larger depending on the Font) – and then to reduce the size by scaling it down using the Scale controls in the filter’s Transformations group if smaller text is desired.


Changes made to most of the **a****ttr****ibu****te****s** in the Text Window (font and point size for example) are **appli****e****d** **t****o** **t****he** **c****u****rre****n****t****ly s****e****l****ecte****d** **te****xt**– which means it is possible to use multiple fonts and point sizes within the same text object.


When the Text Window is open and text entry, editing, or formatting is finished, the Text Window can be closed by using the


**A****pply****or****C****an****ce****l**buttons in the bottom right area of the window or by choosing Close from under the File menu (or keyboard shortcut for Close).


Note, on Mac OS some of the parameters such as Top Down Text, Right to Left Reading, Negative Line Leading, Superscript and Subscript are not accounted for in the custom text entry window.  However previews and renders back in the host will always correctly account for these parameters.  This limitation does not affect Windows users.  We recommend using the new Title Studio effect for more comprehensive typography preview and control.


[![Extruded Text 4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-4.jpg)


 


#### **Global Preferences [BCC9 only]**


*[This preference applies only to BCC9 and is not relevant in newer versions of BCC.]*  The 3D Objects family of effects relies on the BCC Preferences panel to optimize your configuration based on your workflow needs and the capabilities of your graphics hardware.  In particular if you wish to work with footage resolutions higher than 1920×1080 (up to 4k) or to optimize antialiasing settings for your hardware, please consult the documentation on [Managing BCC Preferences](/documentation/continuum/bcc-preferences/).

 


#### **Built****in****Fil****te****r****P****re****s****et****s**


There are several levels of built-in preset controls in the Extruded Text filter ;


* There is a master preset control for saving and loading values for all the parameters in the filter. This is the 1st preset control, near the top of the Effect Controls panel.
* There is an **Ex****tr****usion****S****t****yle**preset control for saving and loading a style that includes all the Extrusion and Material attributes.
* There are 3 preset controls (Bevel, Side, and Path) for saving and loading custom curves created out of AE masks (for use in defining extrusion shapes and text paths).
* There are **M****a****ter****ial**preset controls for saving and applying materials used on the extrusion surfaces.


[![Extruded Text 5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-5.jpg)


 


 


#### **Re****nd****e****r**


The **Re****nd****e****r**parameter group includes controls that can affect the smoothness and edge quality as well as some other options that affect the visual quality of the Extruded Text effect.


The **Polygon** **C****ount**parameter can be used to increase or decrease the number of polygons defining the extruded object. **If** **c****u****r****v****e****d** **e****dg****e****s****or****su****rf****a****ce****s****of** **t****he** **e****x****tr****usion****look****blo****c****k****y****,****in****cre****asing** **t****he****Polygon** **C****ount** **w****ill** **re****sult****in** **t****he** **c****u****r****v****e****s****looking s****m****oo****t****h****e****r**. The performance of the filter is affected by the Polygon Count and it is possible to speed up the performance (during preview or exporting the final effect) by reducing the Polygon Count.


The **A****n****t****ialiasing**popup menu controls the level of antialiasing applied to the edges of the Extruded Text. **If****t****he** **e****dg****e****s****of****t****he Ex****tr****ud****e****d****T****e****xt****look** **j****agg****e****d,****in****cre****asing** **t****he****A****n****t****ialiasing****l****e****v****e****l** **c****an****h****e****lp****s****m****oo****t****h** **t****he****app****e****a****r****an****c****e****of** **t****he****e****dg****e****s**. The performance of the filter is affected by how much antialiasing is being applied and it is possible to speed up the performance (during preview or exporting the final effect) by reducing the Antialiasing level. Be aware that **w****h****e****n** **t****he****A****E****lay****e****r****t****he** **f****il****te****r****is****appli****e****d** **t****o****is****s****e****t** **t****o** **Dr****a****f****t****in** **t****he****A****E** **t****i****me****line** **t****he****A****n****t****ialiasing****popup** **me****nu****has****no** **effec****t**and the Extruded Text uses Draft antialiasing regardless of how the popup menu is set.  Likewise in Avid hosts if the Follow Avid Draft Setting checkbox is enabled, the filter will render in draft mode when Avid is at less than full resolution (i.e. either yellow/yellow or yellow/green) and you will only see the antialiasing results when Avid is set to full green/green resolution.  Note that important additional hardware based antialiasing options are also available in the [BCC Preferences](/documentation/continuum/bcc-preferences/) panel.

The **T****r****anspa****re****nt****Ob****jec****t**checkbox can allow for a more realistic appearance when using partially transparent (as opposed to fully transparent or fully opaque) materials on extruded surfaces.


The **M****o****t****ion****Blur**parameters offer control for simulating a camera blur for motion resulting from animation of the Extruded Text. Enabling **M****o****t****ion****Blur****w****ill****no****t****i****ce****ably****slow****do****w****n** **t****he****p****re****vi****e****w****and** **re****nd****e****r****t****i****m****e** **f****or****t****he** **effec****t**, so **it****is** **rec****o****mme****nd****e****d** **t****o** **e****nable  it****as****a****last****s****te****p** **w****h****e****n****d****e****signing** **t****he** **effec****t**. Also, notice that the **Enable** **M****o****t****ion****Blur**checkbox parameter is **k****e****y****fr****a****m****able**so it is possible to **only** **e****nable****it** **f****or****t****he** **fr****a****me****s** **w****i****t****hin** **t****he** **effec****t****in****c****luding****signi****f****i****c****ant** **m****o****t****ion**– thereby speeding up preview of some areas and speeding up the overall final render of the effect.


[![Extruded Text 6.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-6.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-6.1.jpg)


[![Extruded Text 6.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-6.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-6.2.jpg)


 


 


#### **Using Host 3D Camera and Lights**


Some hosts support direct integration with the host’s native 3D Camera (AE, Nuke, HitFilm) and 3D lights (AE and HitFilm).


By default the 3D object is lit by a single built-in point light centered and positioned in front of the extrusion and by any host lights enabled in the comp if Use Comp Lights is enabled and it is a supported host.


If both the **Use Comp Lights** and the **Use Built-in Light checkboxes** are enabled it can be lit by both the BCC built-in light and the host native comp lights.


When using AE lights, the 3D object will properly support all host light types (**Point, Spot, Ambient, or Parallel**)


There is information specific to using the **Built-In Light** controls later in this document.


If an **active host camera** is present in the comp, the 3D object can be viewed from the perspective of the hosts 3D camera by enabling the **Use Comp Camera checkbox** in supported hosts.


If there is more than one camera track spanning the current frame, and the host comp window set to “Active Camera” the 3D object will use the perspective of the camera whose track is nearest the top of the timeline. If there are multiple cameras and the hostcomp window is set to use a specific camera (other than the topmost camera) the 3D object will use the camera specified by the comp window. In this sense the filter simply follows the behavior of 3D layers (e.g. in AE).


There is information specific to using the **Built-In Camera** controls later in this document.


[![Extruded Text 7](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-7.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-7.jpg)


 


#### **Ex****tr****usion**


The **Ex****tr****usion**parameter group includes controls for adjusting the shape (geometry) of the extruded text object.


The **Ex****tr****usion** **De****p****t****h**parameter defines the depth of the side face that extends between the front and back of the extruded text.


The **B****e****v****e****l****S****t****yle**popup menu offers choices for **S****tr****aight**, **C****onv****e****x**, **C****on****c****av****e**, **Sav****e****d****P****re****s****e****t**, or **Host****Pa****t****h**. The Host Path choice allows for creating a custom bevel based on an AE mask, and the Saved Preset choice allows for using a preset created by saving a bevel style based on an AE mask.


The **B****e****v****e****l****Am****ount** parameter determines the depth of the edge bevels for the extruded text.


The **Ba****c****k****B****e****v****e****ls**checkbox enables edge bevels between the side and back face of the extruded text.


The **Side****S****t****yle**popup menu offers choices of **S****tr****aight**, **Sav****e****d****P****re****s****e****t**, or **Host****Pa****t****h**. The Host Path choice allows for creating a custom side face based on an AE mask, and the Saved Preset choice allows for using a preset created by saving a side style based on an AE mask.


The **B****e****v****e****l****Host****Pa****t****h** and **Side****Host****Pa****t****h**popup menus are where it is possible to select an AE mask as a custom extrusion curve (if Bevel Style or Side Style is set to Host Path, other wise these controls are disabled).


The **B****e****v****e****l****Sav****e****d****P****re****s****e****t**and the **Side****Sav****e****d****P****re****s****e****t**controls are where you can access bevel or side preset styles that have been saved based on AE Masks. To save such a bevel or side style preset the **B****e****v****e****l****S****t****yle**or **Side****S****t****yle**popup menu must be set to **Host Pa****t****h**and an AE mask must be selected as the Host Path. Once the preset is saved, it will work even in effects that do not include that particular AE Mask.


* Note: that for an AE Mask to be accessible to the filter it **m****ust****be****appli****e****d** **t****o** **t****he****sa****m****e****A****E****lay****e****r****t****he** **f****il****te****r****is****appli****e****d** **t****o**, and for the mask to have the expected effect as a custom bevel or side curve **it** **m****ust****be****an****op****e****n****pa****t****h**. The images below show various AE mask curves applied to the side face of an Extruded Spline.


[![Extruded Text 8.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-8.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-8.1.jpg)


[![Extruded Text 8.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-8.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-8.2.jpg)


 


#### **M****a****ter****ial**


**M****a****ter****ial**parameters are used to determine the appearance of the surface(s) of the Extruded Text.


The **Am****bi****e****nt****In****te****nsi****t****y**parameter controls the ambient light amount on all materials for an extruded object, unless there is an active AE Ambient Light track in the comp, in which case the ambient light is controlled there and Ambient Intensity will have no effect.


The **M****a****ter****ial** **C****ount**popup menu determines which faces of the extrusion share materials and which of the 4 Material parameter groups are used (and have their controls enabled) is determined by this popup menu.


The **M****a****ter****ial****P****re****s****e****t**control is where it is possible to save or apply preset materials. Material Presets include all parameters of a material except Texture Layer or Bump Layer (because these parameters refer to other layers in the AE comp and so are not available in all contexts the style may be used). To save a material preset style including texture or bumps, use a texture or bump map from the Texture File or Bump File popup menu since these files are accessed directly from disk as a resource of the plugin so that they will be available in whatever context the style is applied.


The **F****r****ont****T****e****x****t****u****r****e****File**popup menu allows for selecting a texture to map to the surface of the 3D object. Texture maps accessed through this menu can be saved as part of preset styles (Material presets, Extrusion presets, Filter master presets). The texture maps pre-installed in this menu are graphics designed to simulate materials like stone, tiles, metal, and wood – and they are designed to seamlessly tile so that when they are used the surface should look continuous at any scale, rotation, or position offset. The pre- installed texture files are from the Genetica Texture Packs created by Spiral Graphics [<http://www.spiralgraphics.biz/>] It’s possible to add more textures to this menu by placing them in the correct directory on your hard drive. The directories for the **T****e****x****t****u****r****e****Fil****e****s** menu graphics are as follows ; On Mac OS [Macintosh HD\LibraryApplication Support\BorisFX\BCC 6.0\Styles\**C****us****t****om** **T****e****x****t****u****re****s**] and on Windows [C:Program Files\Boris FX, Inc\BCC Presets 6\**C****us****t****om****T****e****x****t****u****re****s**]. The Texture File feature supports several still graphic formats such as ; psd, bmp, png, tif, tga, pct, jpg, gif.


The **T****e****x****t****u****r****e****Lay****e****r**popup menu is where it is possible to select an alternate layer within the AE comp to use as a texture mapped to the surface of the 3D object. This allows for using any AE supported media files (including moving video) as a texture map.


The **T****e****x****t****u****r****e****A****lpha**popup menu allows for specifying how to interpret (or even disable) the alpha channel on a texture map.


The **T****e****x****t****u****r****e****S****tre****ng****t****h**parameter allows for fading a texture map which reveals some of the diffuse color underneath. At a value of 1 the texture map is fully opaque and it fades as the value is lowered.


The **Am****bi****e****n****t**, **D****i****ff****us****e**, and **Highlight**color parameters determine the colors for the material.


The **Opa****c****i****t****y**parameter controls the opacity of the material. When using partially transparent materials, enabling the **T****r****anspa****re****nt Ob****jec****t**checkbox in the Render group may create a more realistic looking effect.


The **Highlight****Am****ount**parameter controls how much of a highlight will be reflected on the surface of the object. There is more of a highlight at lower values and less at higher values. A visible highlight is also dependent on the **Highlight**color chip being adjusted to a color with some obvious luminance.


The **Sp****ec****ular****S****tre****ng****t****h**parameter controls how intense (shiny) the highlight is.


The **F****r****ont****Bu****m****p****File**popup menu allows for selecting a bump map for the surface of the 3D object. Bump maps accessed through this menu can be saved as part of preset styles (Material presets, Extrusion presets, Filter master presets). The menu accesses graphics from the same directory as the **T****e****x****t****u****r****e****File**popup menu.


The **F****r****ont****Bu****m****p****Lay****e****r**popup menu is where it is possible to select an alternate layer within the AE comp to use as a bump map on the surface of the 3D object. This allows for using any AE supported media files (including moving video) as a bump map.


The **Bu****m****p****S****tre****ng****t****h**parameter controls the intensity of the bumps generated by the bump map.


The **Shi****f****t****X**and **Y**, **S****c****ale****X**and **Y**, and **R****o****t****a****t****e**parameters allow for offsetting the position, scaling, and rotating the texture and bump maps.


The **Ref****l****ect****ion**popup allows for selecting a reflection map for simulating a reflection on the surface of the 3D object.


The **Ref****l****ect****ivi****t****y**parameter controls how much of the reflection map is mixed in to the look of the material.


The **Ref****l****ect****ion**Scale parameter scales the appearance of the reflection map.


The **T****w****o****–****sid****e****d****Ligh****t****ing**checkbox causes a material to display the effects of lights on both sides when the checkbox is enabled. This can be useful for achieving specific types of effects.


[![Extruded Text 9](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-9.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-9.jpg)


 


#### **Transformations**


The **Transformations** **parameter** group includes controls for Rotating, Positioning, and Scaling the 3D object


The **Orientation X, Orientation Y, and Orientation Z parameters** offer an initial set of rotation controls for orienting the 3D object. Used in conjunction with the Rotate X, Y, and Z controls it is possible to create animations that would not be possible with a single set of rotation controls.


The **Rotate X, Rotate Y, and Rotate Z parameters** offer rotation controls for the 3 3D axes, and the order in which they are applied to the object matches the X, Y, and Z Rotation of AE 3D layers making it easy to match the rotations from such AE layers and even to link the rotation parameters of the 3D object to other layers using AE expressions


The **Position X, Y, and Z parameters** offer world based position controls for the Extrusion


The **PreRotate Position X, Y, and Z** parameters offer object based position controls for the Extrusion


The **Master Scale parameter** increases or decreases the X, Y, and Z scale of the Extrusion


The **individual Scale X, Y, and Z parameters** offer individual control of Scale along each axis. It’s possible to offset the individual scale values to change the scale ratio and then to globally scale the result while maintaining that ratio by using the Master Scale parameter. **Be aware that the Scale Z parameter is not the commonly desired way to increase the depth of the extrusion – there is another parameter offered in the Extrusion group which scales only the extrusion face (not bevels etc.) which is more commonly used for this purpose**.


The **Opacity control** in the **Transformations group** controls the opacity of all materials for the 3D object. When using partially transparent materials, enabling the **Transparent Object checkbox** in the Render group may create a more realistic looking effect. Keep in mind that this is a different effect from fading the opacity for the AE layer the filter is applied to which is the recommended way of uniformly fading the filter effect.


**Pivot X, Y, and Z** allow for offsetting the pivot point around which the 3D object rotates, unless Lock Pivot to Position is enabled in which case these controls are disabled and the Pivot point follows the position point.


 


#### **Path**


The **Pa****t****h**parameter group includes controls for doing a “text on path” effect where a user defined curve can act as the baseline for text.


The **Pa****t****h****T****ype**popup menu offers the following options ; **A****E** **M****as****k**, **Sav****e****d****Pa****th**, **Lin****e**, and **C****i****rc****l****e**.


The **A****E** **M****ask**popup allows for selecting an AE mask as the baseline for the Extruded Text, and this popup is enabled only if Path Type is set to AE Mask. Note that for an AE Mask to be accessible to the filter it **m****ust****be****appli****e****d** **t****o** **t****he****sa****m****e****A****E****lay****e****r****t****he** **f****il****te****r****is****appli****e****d** **t****o.**


The **Point****1**, **Point****2**and **S****c****ale**controls apply specifically to using the **Line**and **C****i****rc****le**path types, and will be disabled when Path Type is set to AE Mask.


The **On****Pa****t****h** **M****o****t****ion**parameter can be used to position and animate the text along the path.


The **A****ngle****T****o****Pa****t****h**parameters allows for adjusting the text characters so they are oriented to be perpendicular to the angle of the path or so they are oriented to be perpendicular to the edge of the frame (and any angle in between).


The **A****lign****me****nt**popup menu offers choices for the text to be Left, Right, or Center justified on the path – and also a choice to Distribute the text characters evenly so they are covering the entire path.


When enabled, the **Re****v****er****se****Pa****t****h** checkbox will cause the text to use the reverse side of the path for a baseline.


The **Pa****t****h****Ji****tte****r**parameters provide options for jittering the path vertices X and Y positions, and controlling the speed of the jittering and varying the random seed.


[![Extruded Text 10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-10.jpg)


 


#### **L****ette****r** **T****r****ans****f****o****rm****a****t****ions**


**The****L****ette****r****T****r****ans****f****o****rm****a****t****ions**parameter group includes controls for adjusting and animating various typographical attributes of the text characters which are being extruded. For most of these parameters reading the parameter label gives a good idea of its   function.


The **T****r****a****c****king**parameter offers a way to adjust and animate the tracking between the text characters.


The **L****e****ading**parameter offers a way to adjust and animate the line leading between multiple lines text characters.


The **Bas****e****line**parameter can offset the baseline on which the text characters are arranged – particularly useful with text on a path.


The **Sk****e****w****X**and **Sk****e****w****Y**parameters can horizontally and vertically skew the text characters


The **M****as****te****r****L****ette****r****S****c****ale**parameter scales the text at the text character level only while **L****ette****r****S****c****ale****X**and **Y**allow for adjusting letter scale horizontally or vertically


The **L****ette****r****R****o****t****a****t****e**parameter allows for rotating the letters (without rotating the text block as a whole).


* Note:that these **L****ette****r****T****r****ans****f****o****rm****a****t****ions****a****r****e****appli****e****d** **t****o** **t****he** **te****xt****at** **t****he****v****ect****or****te****xt****l****e****v****e****l**(before it is extruded to create a 3D shape) so animating these values works best for 3D text with solid color materials as texture and bump maps do not animate along with these parameters.


 


#### **Built-in Light (1-3)**


The **Built-in Light** parameter groups include controls for light sourcea that can be controlled from within the filter.  Additional lights can be added by creating host light tracks in hosts that support full integration with their native 3D lighting systems such as AE and HitFilm.  The Built-in Light offers 3 Light Types to choose from: **Point, Spot, and Spot + Shadows**


**Point:** A **Point** light shines from the source in all directions and includes controls for **X/Y and Z Position, Color, Intensity, and Attenuation**. **Attenuation** lessens the intensity of the light rays as they extend from the source, allowing for the creation of a less directional distant diffuse light, similar to sunlight.


**Spot:** A **Spot** light shines from the source toward a target (specified by **Spot X/Y** and **Z** parameters) and is limited to a cone defined by the **Angle** parameter and with edges softened by the **Fall** **Off** parameter.


**Spot + Shadows:** A **Spot + Shadows** light is identical to a Spot Light, except that it is also capable of casting shadows. The shadows it casts are limited to self-shadowing between 3D objects generated by the filter. The **Width** parameter can appear to soften the cast shadow edges. The cast shadows do not support partial transparency – meaning the shadows will appear as if the object being shadowed is fully opaque or fully transparent – and the **Alpha Shadow Tolerance** parameter defines the threshold for what the shadow considers opaque or transparent.


 


#### **Built-in Camera**


The **Built-in Camera parameter** group includes parameters that affect the viewing perspective of the 3D object whenever the Use Comp Camera checkbox is not enabled. When using the Built-in Camera, there are 3 options for what kind of **Camera Model** is used: **Position, Orbit, or Pan**.


**Zoom:** all 3 Camera Models include a Zoom control for zooming the viewing perspective. By using a low **Zoom value**, and moving closer to the 3D object with the **Position Z parameter** (or Orbit Radius or Pan Distance depending on the Camera Model), it’s possible to simulate **a more wide angle lens** perspective.


**Position Camera:** offers Position X, Y, and Z control for positioning the camera in 3D space, and offers 2 Camera Orientation  

options: **Free** or **Target**.


* When using **Free Camera Orientation**, the direction the camera is pointing is determined by the **Tumble, Spin, and**  

**Rotate** parameters.
* When using **Target Camera Orientation**, the camera will always point in the direction of the target as determined by the  

**Target X, Y, and Z** parameters.


**Orbit Camera:** provides a convenient camera perspective for always facing the center (default Position of the 3D object) while allowing for simple orbit moves around the center using the **Orbit Tumble, Orbit Spin, and Orbit Rotate** parameters. Distance from the Center is determined by the Orbit Radius parameter.


**Pan Camera:** offers simple controls for panning horizontally using the **Pan Advance** parameter, and moving the camera in or out with the Pan Distance parameter.


[![Extruded Text 11](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-11.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-11.jpg)


 


#### **Ji****tte****r**


The **Ji****tte****r**parameter group includes controls for applying an auto-animated jitter to the text characters which are being extruded.


The **Ji****tte****r****S****ee****d** parameter allows for varying the randomness of the jitter.


The **Ji****tte****r****Sp****ee****d**parameter controls how fast the auto-animated jitter is (frequency of the jitter)


The **Ji****tte****r****Posi****t****ion****X**and **Y**, **Ji****tte****r****A****ngl****e**, and **Ji****tte****r****S****c****ale****X**and **Y**parameters determine how much each of those attributes of the text characters is being jittered.


The **Re****s****tr****i****ct****ions**popup menu allows for limiting the jitter to one direction or the other (from default). For example when Jittering the Y Position, setting **Re****s****tr****i****ct****ions**to **Ne****ga****t****ive****Only**will make it so all the jittering occurs above the baseline of the text (rather than allowing text characters to also dip below the baseline of the text).


The **Pola****r****i****z****e**parameter pushes more of the text characters toward the extremes of the range in which they are jittering.


The **M****as****te****r****Ji****tte****r****Am****ount** parameter scales all the individual jitter attributes together in a single parameter allowing for easier fading up and down of the overall **Ji****tte****r**effect .


 


 


#### Deformers


The Extruded Text filter includes several true 3D deformers for warping the 3D extrusion in various ways. The Deformers included in the filter are **B****e****nd****–****T****ap****e****r****–****T****w****is****t**, **C****u****r****l**, **Sha****tte****r**, **R****ippl****e**, and **Puls****e**.


[![Extruded Text 12](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-12.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-12.jpg)


 


 


#### **B****e****nd****–****T****ap****e****r****–****T****w****ist****Deformer**


**E****ffec****t****O****r****d****e****r**


As the name suggests Bend Taper Twist offers 3 distinct deformation processes and the **E****ffec****t****O****r****d****e****r**popup menu provides a way **t****o****d****eterm****ine** **t****he****in****ter****nal****o****r****d****e****r****in** **w****hi****c****h** **t****he****3****d****ef****o****rm****a****t****ions****a****r****e****appli****e****d**to arrive at the final result.


 


**B****e****nd****S****tre****ng****th**, **B****e****nd** **R****adiu****s**, and **B****e****nd** **M****ode**


**B****e****nd****S****tre****ng****t****h**controls how much bend is applied and in which direction the bend goes, with positive values bending the left and right edges of the object forward and negative values bending them backward. **B****e****nd** **R****adius**defines the steepness of the bend curve. The **B****e****nd** **M****ode**popup menu provides 2 options for how the bend will appear. Using the **S****tretc****h**mode, the Z scale of the object increases as the Bend radius increases, while the using the **C****u****r****ve**mode the Z scale does not change with the **B****e****nd** **R****adiu****s**.


 


**L****ef****t****T****ap****e****r****and** **R****ight****T****ap****e****r**


The **L****ef****t**and **R****ight****T****ap****e****r**controls taper the Y and Z scale of each side of the object, with positive values giving a larger Y and Z scale and negative values giving a smaller Y and Z scale.


 


**L****ef****t****T****w****ist** **and** **R****ight****T****w****ist**


The **L****ef****t**and **R****ight****T****w****ist**parameters twist each side of the object, with positive values twisting the object so the top part is bent forward while the bottom part is bent back – and negative values twisting the object so the top part is bent back while the bottom part is bent forward.


 


**Ce****n****te****r****O****ff****s****e****t****X**, **Ce****n****te****r****O****ff****s****e****t****Y**, **and** **Ce****n****te****r****O****ff****s****e****t****Z**


**Ce****n****te****r****O****ff****s****e****t****X**, **Y**, and **Z**provide a way to offset the deformations in 3D space.


 


 


#### **C****u****r****l****Deformer**


**D****i****rect****ion**


The **D****i****rect****ion**popup menu determines what direction in 3D space the object will curl in using the Curl deformer. The **Gu****e****ss** choice tries to give a commonly desired result by curling along the longest axis in the direction of the shortest axis, and the **Gu****e****ss 2**choice curls along the longest axis in the direction of the second shortest axis. The other choices are labeled to allow for specifying what edges of the object are curled along which 3D axis.


 


**R****e****v****er****se****D****i****rect****ion**


The **Re****v****er****se****D****i****rect****ion**checkbox reverses the direction of the curl in terms of which edge (Left, Right, Top, Bottom) begins the curl. For example a Left/Right curl begins on the right edge and moves left by default but it begins on the left edge and moves right with the Reverse Direction checkbox enabled.


 


**C****u****r****l****1****and** **C****u****r****l****2**


The **C****u****r****l****1**and **2**parameters define a primary and a secondary curl when changed from their default values of zero, with positive values curling the edge of the object forward and negative values curling the edge back in 3D space.


 


**T****igh****t****n****e****ss**


The **T****igh****t****n****e****ss**parameter tightens or loosens the Curl(s) by increasing or decreasing the size of cylindrical area(s) the object is rolled into as it is curling. A higher Tightness value rolls the object into a smaller cylinder while larger values roll it into a larger cylinder, with more or less of the object rolled farther into the cylinder depending on its size.


 


**M****idpoint**


The **M****idpoint**parameter will only seem to have an effect if Curl 2 is changed from its default to create a secondary curl. In this case Midpoint determines the positioning of Curl 2 in relation to Curl 1


 


**Am****ount**


The **Am****ount**parameter offers a way to control the overall progression if the curl effect in a single parameter. This allows for easy creation of animated curl effects where an object rolls or unrolls over time. The Amount parameter defaults to a value of 70 (rather than zero) so that the preceding parameters can be adjusted to design the curl while the effect is visible. For many commonly desired effects the Amount parameter will be animated over time in the final effect. For example in order to have an object begin as curled and to unroll to its un-curled state over time the Amount parameter is animated from some higher number back to zero. And in order to have an object begin un-curled and roll up over time the Amount parameter is animated from zero to some higher number.


 


**A****xis****O****ff****s****e****t**


The **A****xis****O****ff****s****e****t**parameter allows for scaling the curl cylinder larger or smaller without rolling more or less of the object further into the cylinder – instead it will cause the curled part of the object to scale and distort to the new size.


 


**B****e****nd****1****and** **B****e****nd****2**


The **B****e****nd****1**and **2**controls provide a way to to bend the object at the point of Curl 1 and Curl 2. The bend(s) are applied along the alternate access from the curl.


 


**Re****solu****t****ion**


The **Re****solu****t****ion**parameter controls how many curl points the deformer uses to internally calculate the curl. In most cases there is no reason to change this parameter from its default, but in some cases it is possible to make the curl appear smoother by increasing the Resolution value.


 


**C****u****r****l****T****ype**


The **C****u****r****l****T****ype**popup menu offers 2 choices ; **3D**or **Fla****t**. The default choice of 3D will curl the object while maintaining its thickness while the Flat choice will flatten the object at the curl points.


 


**N****oise****Re****du****ct****ion**


The **N****oise****Re****du****ct****ion**checkbox, which is enabled by default, prevents noise artifacts that can appear in certain types of curl effects. The speed of the curl effect can be increased by disabling Noise Reduction for effects where it does not seem to be necessary.


 


#### **Shatter Deformer**


**Polygon Count**


While it is not a parameter within the deformer itself (**Polygon Count** is a parameter in the **Render** group), the Shatter deformer shatters 3D objects based on the polygons / vertices that make up the geometry mesh of the shape, so the **Polygon Count** value (tesselation) of the object has a significant effect on the appearance of the shatter effect. **Higher Polygon Count** values result in more overall shatter pieces that are smaller, and **lower Polygon Count** values result in less overall pieces that are bigger. Lower **Polygon Count** values also result in faster performance. There are also ways to affect the size and number of the pieces from within the Shatter deformer itself.


 


**Crack Mode, Crackability, and Crack Adjust**


The **Crackability** parameter determines the size of the pieces with higher values resulting in smaller pieces and lower values resulting in larger pieces. Also, very low **Crackability** values can result in some parts of the object not being affected by the shatter (not being Crackable) at all. The **Crack Adjust** parameter affects the shatter in different ways depending on which **Crack Mode** is being used (explained in more detail in the bullet points below). The **Crack Mode** popup menu includes 5 modes. Each **Crack Mode** has a unique way of influencing how the object will shatter in terms of how many places it cracks and where it cracks while shattering ;


* **Random** **mode** creates apparently randomly placed cracks. In this mode, the **Crack Adjust** parameter has no effect.
* **Crack Points mod**e creates cracks that include cracks in areas of the geometry where various parts are connected. For example in an extruded shape crack points would include the place where the front face meets the bevel, where the bevel meets the depth face, etc.
* **Falloff Crack Points** mode is similar to **Crack Points**, but falloff means the **Crackability** decreases farther from the **Crack** **Points** which can be used to create a more realistic shatter effect in some cases.
* **Horizontal Lines** makes horizontal cuts through the mesh creating alternating horizontal lines of bigger and smaller pieces and the **Crack Adjust** parameter can be used to increase or decrease the number of lines.
* **Angular** **Cut** breaks the mesh at all points where the mesh edges are a certain angle, while **Crack Adjust** and **Crackability** determine what angle that is and how close to the angle they have to be in order to break.


[![Extruded Text 13](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-13.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-13.jpg)


 


**V****e****lo****c****i****t****y****M****od****e**, **V****e****lo****c****i****t****y****M****ini****m****um**, **V****e****lo****c****i****t****y****V****a****r****ia****t****io****n**, **Explosive****Fo****rc****e**, **and** **G****r****avi****t****y**


The **V****e****lo****c****i****t****y** **M****ode**popup menu offers 12 options for determining the direction the shatter pieces will move in relation to the object as it shatters. The Velocity Modes are ;


* *Random*
* *Outward*
* *Inward*
* *Spiral CW (Clockwise)*
* *Spiral CCW (Counter-Clockwise)*
* *Left-Right*
* *Left*
* *Right*
* *Up*
* *Down*
* *Back*
* *Forward*


**V****e****lo****c****i****t****y****M****ini****m****um**determines the minimum velocity for the slowest of the shatter pieces, while **V****e****lo****c****i****t****y****V****a****r****ia****t****ion**determines how varied the velocity is between all the pieces, and also acts as a maximum velocity control. **Explosive****Fo****rc****e**provides an easy way to alter the overall velocity curve so there is a burst of speed as the piece first shatters away from the main shape – the **Explosive****Fo****rc****e**also gives a similar speed burst to the **Spin****Sp****ee****d**of the pieces which makes the explosive feeling of the shatter more convincing. **G****r****avi****t****y**exerts a pull on the shatter pieces (unless it is set to zero), and although it is outside of the slider range it is possible to scrub the numeric entry field or enter negative **G****r****avi****t****y**values to apply reverse gravity. To have no velocity to the shatter (so the object seems to crumble) set both **V****e****lo****c****i****t****y** **M****ini****m****um**and **V****e****lo****c****i****t****y****V****a****r****ia****t****ion** to zero, and make sure there is some gravity value applied.


 


**S****c****a****tte****r****W****ipe****M****od****e**, **W****ipe****T****i****me**, **and** **S****c****a****tte****r****Op****t****ion**


It is possible to have the shatter effect progressively wipe from one part of the object to another rather than having the whole object shatter at once. This can be done by choosing one of the Scatter Wipe modes. The **S****c****a****tte****r****W****ipe****M****ode** popup menu offers 12 options for determining the direction the wipe will move in relation to the object. The **S****c****a****tte****r****W****ipe****M****od****e****s**are:


* *None (no wipe, object will shatter all at once)*
* *Left – Right*
* *Right – Left*
* *Top – Bottom*
* *Bottom – Top*
* *Back – Front*
* *Front – Back*
* *Random*
* *Small – Large (small pieces first, followed by large)*
* *Large – Small (large pieces first, followed by small)*
* *Inside – Out*
* *Outside – In*


**W****ipe****T****i****m****e**determines how long the wipe takes from start to finish, with higher values resulting in longer wipes and lower values resulting in shorter wipes. The **S****c****a****tte****r****Op****t****ion**parameter is relevant when applying a **S****c****a****tte****r****W****ipe**to an object that includes multiple parts (like Extruded Text characters) ; in this case, the Scatter Option **S****m****oo****t****h**choice results in a wipe that moves across  all the parts as if they were one large whole, while the **D****is****cree****t**choice results in a wipe that acts as several individual wipes that move simultaneously across each part. The difference between the **S****m****oo****t****h**and **D****is****cree****t**Scatter Options is illustrated using Extruded Text immediately below.


[![Extruded Text 14](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-14.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-14.jpg)


 


**D****ispla****c****e**


The **D****ispla****c****e**parameter allows for pushing the shatter pieces out away from (or in toward) the center of the object. Positive Values push the pieces outward and negative values pull the pieces inward. This displacement is in addition to whatever shattering is going on based on other deformer parameters.


 


**K****ee****p****Th****re****shold**


The **K****ee****p****Th****re****shold**parameter allows for making it so some percentage of the shatter pieces stay in place rather than shattering away from the original object. Adjusting this parameter with various combinations of Crack Modes, Crackability, and Crack Adjust can give some interesting results.


 


**Spin** **D****i****rect****io****n**, **Spin****Sp****eed**, and **Spin** **C****ha****r****a****cte****r**


The **Spin** **D****i****rect****ion**popup menu includes 7 options for determining which direction the shatter pieces will rotate as they shatter from the original object. The **Spin** **D****i****rect****ions**are ;


* *RandomAll (all pieces randomly rotating)*
* *TumbleForward (all pieces tumbling on the X axis in one direction)*
* *TumbleBoth (some pieces tumbling on the X axis in one direction and some tumbling on the X axis in the opposite direction)*
* *SpinForward (all pieces spinning on the Y axis in one direction)*
* *SpinBoth (some pieces spinning on the Y axis in one direction and some spinning on the Y axis in the opposite direction)*
* *RotateForward (all pieces rotating on the Z axis in one direction)*
* *RotateBoth (some pieces rotating on the Z axis in one direction and some rotating on the Z axis in the opposite direction)*


The **Spin****Sp****ee****d**parameter determines how fast and in which direction the shatter pieces rotate – positive values will cause a piece to rotate in one direction while negative values will result in that piece rotating in the opposite direction, and the rotation will be faster the further away from zero the value is. The **Spin** **C****ha****r****a****cte****r**parameter defines a gradient that maps the difference in spin speed between the largest and smallest shatter pieces, allowing for having the larger pieces spin faster. Since **Spin** **C****ha****r****a****cte****r** relates to **Spin****Sp****eed**, it is suggested to adjust these 2 parameters together in relation to each other.


 


**Time Scale, Time Mode, and Manual Time**


By default the shatter effect is set to auto-animate (with **Time Mode** set to **Automated**) so no interpolation keyframes are necessary for the object to shatter over time. When the shatter is **Automated**, **Time Scale** allows for slowing down or speeding up the overall speed of the shatter. As the parameter name indicates, **Time** **Scale** affects the whole time scale of the effect, so it will also affect the timing of a **Scatter** **Wipe** (if it is enabled) as well as the **Spin** **Speed** of the pieces, and even the effects of **Gravity** – so it is suggested that these other speed & time related parameters should be adjusted in conjunction with **Time** **Scale**. There are 4 Time Mode choices which are ;


* **Automated** (auto-animation that obeys Time Scale parameter)
* **Manual** (animation progresses according to the Manual Time parameter and ignores Time Scale parameter)
* **Manual** **Move** (the Velocity based movement and Scatter Wipe time progress according to the Manual Time parameter, but the Spin Speed behaves as Automated)
* **Manual** **Spin** (the Spin Speed progresses according to the Manual Time parameter, but the Velocity based movement and Scatter Wipe time behave as Automated)


Since the **Automated Time Mode** always does a forward shatter (**Time Scale** does not accept negative values), using the **Manual****Time mode** (animating from a higher to lower **Manual Time** value) is suggested for creating reverse shatter effects.


 


**Random Seed**


The Random Seed parameter allows for tweaking the shatter to get a different result without changing any of the other significant parameters that create the look of the effect. This can be useful to help alter the shatter for a particular frame(s) while auto- animating, and it is also very useful for cases where there are multiple objects each using the same Shatter – since an identical appearance can be avoided by simply using different Random Seed values for each instance of the effect. This is a parameter that is left static in most common uses, since animating it will not result in a smoothly animating shatter.


 


 


#### **Ripple Deformer**


The **Ripple Deformer** applies a ripple effect along the Z plane of the object.


 


**Center X/Y and Stretch**


**Center X and Y** determine the X/Y center point for the ripple effect. The ripple defaults to being a perfectly round circle ripple and the **Stretch** parameter allows for elongating the ripple shape in either direction resulting in an oval shape ripple. Combining certain Center X/Y and Stretch values also allows for the creation of effects that can appear more like a wave, including a horizontal or vertical wave.


 


**Phase and Time Scale**


The Ripple deformer auto-animates by default and the **Phase** parameter allows for offsetting the phase of the ripple auto- animation. The **Time Scale** parameter determines the speed of the ripple auto-animation with negative values animating the ripples outward from the center and positive values animating in the reverse direction, with values farther away from zero being faster and values closer to zero being slower. It is also possible to manually drive the ripple by setting the **Time Scale** to zero and animating the **Phase** parameter with keyframes.


 


**Amplitude and Frequency**


**Amplitude** determines the height of the waves and **Frequency** determines the frequency of waves. Adjusting one of these parameters has some effect on the other so it is recommended to adjust them in relation to each other to get the desired result.


[![Extruded Text 15.1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-15.1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-15.1.jpg)


[![Extruded Text 15.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-15.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Extruded-Text-15.2.jpg)


 


**Pulse Deformer**


The **Pulse deformer** offers several different deformations (in some cases similar to those found in other deformers) and offers a quick way to apply these deformations using repetitive auto-animation back and forth within a user determined range to allow for convenient creation of pulse like animations without requiring keyframing. The Pulse animation oscillates between the original undeformed object and the deformed object.


 


**Effect Type**


The **Effect Type** popup menu determines which kind of deformation will be applied to the object. There are 8 Effect Type choices ; **Bulge, Deform, and Lumpy** are variations of a Bulge or sphereize type of effect. **Bend, Twist, and Spin** do exactly what the parameter names suggest with the **Bend** and **Twist** deformations being like those described previously in the **Bend-Taper-Twist** deformer, and the **Spin** choice applying a simple spin on the Y axis. **Bounce** moves the object up and down on the Y axis and **Approach** moves it back and forth on the Z axis.


 


**Pulse Type**


The **Pulse Type** popup menu determines the animation curve of the pulse cycle as the deformation animates from the original undeformed object to the most deformed state (determined by Amplitude parameter) and back again. There are 9 Pulse Type choices ;


* **Breathing** creates a pulse where the animation accelerates as it moves away from an extreme and decelerates as it gets closer to an extreme, with a slight pause between each back and forth.
* **Elastic** pulse is similar to Breathing except with no pause between each back and forth animation.
* **Beat** pulse decelerates as it moves away from the original undeformed object and uses linear interpolation (even speed) as it animates from the extreme back to the original – with no pause.
* **Bop pulse** decelerates as it moves away from the original undeformed object and accelerates as it animates from the extreme back to the original – with a pause between pulses.
* **Uneven pulse** is like elastic but the amplitude of the pulse varies so that some pulses are stronger than others.
* **Jerky pulse** is like Elastic with a pause added midway between the undeformed and most deformed states, and the interpolation is such that it eases in and out of the extra pause.
* **Random pulse** will cause the deformation to jump between various values. Using this Pulse Type the Amplitude parameter has no effect (the Random Pulse automatically uses amplitude values between zero and 100). The animation jumps between values using Hold style interpolation – meaning that it snaps between states rather than smoothly animating between them.
* **Snap** pulse will snap back and forth between the original undeformed object and the most deformed state. The animation jumps between values using Hold style interpolation – meaning that it snaps between states rather than smoothly animating between them.
* **Paused** pulse disables the pulsing auto-animation and the Frequency and Phase parameters have no effect using this Pulse Type. The other parameters such as Amplitude can still be used to adjust the static effect.


 


**Amplitude, Frequency, and Phase**


The **Amplitude** parameter determines how much of the deformation is applied at the most deformed point in the pulse animation. Although it is outside of the slider range it is possible to scrub the numeric entry field or enter negative Amplitude values to reverse the direction of the deformation. The **Frequency** parameter determines the frequency of pulses, with higher values resulting in more frequent pulses and lower values resulting in less frequent pulses. The **Phase** parameter allows for offsetting the phase of the auto-animated pulse. It is also possible to manually drive the pulse (and animate its frequency) by setting the **Frequency** parameter to zero and animating the **Phase** parameter with keyframes.


 


**Center Offset X and Y, Radius Adjust**


The **Center Offset X and Y** parameters allow for offsetting the center of the deformation in X and Y space, while **Radius Adjust** determines the the size of the area in which the deformation is applied. When using the **Spin Effect Type**, **Radius Adjust** has no effect.


