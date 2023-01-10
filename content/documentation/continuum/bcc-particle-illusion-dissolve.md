{
"date": "2019-06-12",
"title": "BCC Particle Illusion Dissolve",
"category": "BCC Transitions",
"link": "bcc-particle-illusion-dissolve/"
}

 
### **Overview**


Introduced with Continuum 2019.5 BCC Particle Illusion Dissolve is a dissolve-style transition filter that includes the full Particle Illusion engine for a colossal variety of new looks. Particle Illusion is a 2D, sprite (image) based particle effect system that is preset driven, easy to use, and powerful. Particle Illusion Dissolve automatically animates the opacity of the particles up/down over the course of the transition while the background progressively dissolves between the outgoing and incoming clips. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/05/dissolve.png)
  



### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](https://borisfx.com/documentation/continuum/bcc-common-controls).


**Layer to Reveal**: This layer selection popup is not relevant when you have applied the filter as a true NLE-style transition and it will be hidden or disabled in that context.  When applied as a normal “effect” as opposed to a transition, however, this menu is used to select the “Incoming” or “Reveal” layer for the transition.


**Animation:** Menu controlling what drives the animation of the transition.


* *Auto* – automatically generates a transition based on the transition length (when used as a transition) or the clip length (when used as a filter).
* *Percent Done* – requires the user to set keyframes to control the transition progression.  Can be useful in customizing the exact timing of the transition or when applying the filter as a stylized effect as opposed to a direct NLE-style transition.


**Percent Done:**  Disabled/Hidden by default.  When the Animation menu is changed to Percent Done then this slider can be manually keyframed to control the transition progression.


### **A Brief Primer on Particle Effects**


If you’ve not used particle effects before, or if you’re new to Particle Illusion — often referred to as “PI” in these docs — a quick look at the terminology will be helpful in understanding the rest of the documentation and tutorials.


**Particles:** Particles are the visible entities in Particle Illusion. You have no direct control over individual particles; once they are “born” they behave based on the values set in their Particle Type. Particles use images for their appearance.


**Particle Type:** A particle type is the collection of properties that determine how particles of this type look and behave. A particle type consists of an image (or images), a color gradient, and various properties such as velocity, size, weight, etc.


**Emitters:** An emitter is not visible, but is the object that creates particles. Emitters come in 4 shapes types: point, line, ellipse (circle), and area. An emitter contains one or more particle types, and “global” duplicates of many of the particle type properties (velocity, size, etc.). Emitters, unlike particles, can be directly controlled and moved over time.


So an emitter is made up of particle types, and particle types are made from images, and particles are created by the emitter based on the properties of its particle types. In other words, an emitter creates particles which combine to form the visual effect.


A more complex type of emitter is a “super emitter”.


**Super Emitters:** This is a special type of emitter in Particle Illusion that does not create particles directly, but creates other emitters which in turn create the particles.


**Free Emitters:** The emitters that a super emitter creates. They are similar to particles in that you cannot directly control their position — once they are “born” they behave based on the properties of their Free Emitter Type.


**Free Emitter Type:** Like a Particle Type, this is the collection of properties that determine how the free emitters of this type will behave.


So a super emitter is made up of free emitter types and free emitters are created by the super emitter based on the properties of its free emitter type. Each free emitter type consists of particle types, and particles are created by each free emitter based on the properties of its particle type. In other words, a super emitter creates free emitters, which in turn create particles which combine to form the visual effect.


**Emitter Library:** a collection of emitter “presets” saved as a single file. This is not really important in Particle Illusion unless you want to copy or move libraries — to share them as an example. Note that once an emitter is added to a project it is completely independent of that library.


These Emitter Library emitters are the starting point for building new particle effects: the first step in building an animation is to add one or more emitters from the Emitter Library to your project.


## Using Particle Illusion


Working with emitters in Particle Illusion Dissolve is exactly the same as working with emitters in the main Particle Illusion Plug in. The only difference here is the ability to animate those effects across a transition. 


A detailed breakdown of the Particle Illusion UI and how to create and edit Particle Illusion emitters is available on the main Particle Illusion help page, [which may be found here](https://borisfx.com/documentation/continuum/bcc-particle-illusion/). 


