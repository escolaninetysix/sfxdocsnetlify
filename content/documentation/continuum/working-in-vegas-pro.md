{
"date": "2019-06-12",
"title": "Working in Vegas Pro",
"category": "Tutorial",
"link": "working-in-vegas-pro/"
}

 ### Using Continuum filters in Custom Compositing Modes


In Vegas Pro for an effect to be able to access an alternate video layer (a layer other than the layer the effect is applied to) it needs to be applied on a per track basis as a Custom Composite. Some filters such as BCC Light Wrap are only available as Custom Composites since they fundamentally rely on being able to access a second layer. Other Continuum filters such as Primatte Studio will be available as both normal effects and as Custom Composites, although some features which require access to secondary layers will not be fully functional in the normal effect versions. To apply a custom Composite Mode choose the Compositing Mode icon for the track and then select the Custom option which brings up a list of available filters (see the screenshot below). Note that Compositing Mode choices in Vegas Pro are applied to the entire track.  

![Vegas1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/03/Vegas1.png)


 


Within Vegas Pro, there are a number of Continuum effects that are available. While most of the filters listed below are only available in Composite Mode, some filters are available as traditional plugins, however functionality that relies of composite layers is only available when applied as a Composite Filter.


 


#### Blur


* **Fast Lens Blur** is also available as a traditional filter, however when used in Composite Mode, additional functionality exists that allows for the use of Z-maps to create depth of field using an alternate source input.


#### Image Restoriation


* **Broadcast Safe** provides an easy and automated way to ensure that all of your projects are color and luma safe for delivery to any broadcast market.


#### Key and Blend


* ****Chroma Key Studio**** is an all-in-one keying suite. It combines screen enhancement, auto-garbage matte and masking, chroma key, matte cleanup, matte choker, foreground color correction and light wrap into a single filter.  To use the Light Wrap feature in Vegas Pro you must apply the filter as in  Custom Composite Mode.
* **Composite**offers a variety of options for compositing one layer over another. To use the Light Wrap feature you must apply the filter in Custom Composite Mode.
* **Light Wrap**reflects a background image around the edges of a foreground image to form a border. This creates the illusion that light from the background image is reflected onto the foreground image. This creates a more convincing composite by making it appear as if the images were shot in the same environment.
* **Primatte Studio**is the ultimate blue/green screen toolset to easily chroma key and composite using the same Academy Award-nominated compositing tech (Photron’s Primatte) as major blockbusters like the *Lord of the Rings* series, *Harry Potter* films, and *Spider-Man*. ***NOTE: HUD features are not available in Vegas Pro***
* **RGB Blend** provides independent compositing of the source image’s RGB channels with the Mix Layer’s RGB Channels.


#### Match Move


* **Corner Pin** allows you to map media to a specific area on a moving object in a media file. For example, your media includes a moving bus with an advertisement on its side. You could use Corner Pin to track and replace the advertisement with a logo.
* **Match Move** allows you to lock the movement of one image clip to another image clip using the built-in motion tracking function.


#### Particles


* **Wild Cards**is used to generate an array of 3D cards with interesting and convenient animation options.


#### VR


* **VR Insert**  provides users with a way to insert a secondary source clip, title, logo, etc. into a VR 360 shot in true 360 VR space in either mono or stereo format in addition to providing a full array of controls to reorient the source in 360 VR space.


#### Warp


* **Displacement Map**uses the luminance or color information from an alternate video or still image Map Layer to displace the pixels in the source image horizontally and vertically. This filter creates a distorted version of the source whose distorted regions correspond to the luma or color channel of the Map Layer’s media. Use Custom Composite Mode to select a specific Map Layer.
* **Polar Displacement** uses a Map Layer to displace pixels radially outward from the Center Point and angularly along an arc of a circle centered at the Center Point.  Use Custom Composite Mode to select a specific Map Layer.
* **Vector Displacement** uses the RGB channels in the Map Layer to displace the image in three different directions. Use Custom Composite Mode to select a specific Map Layer.


 


 


