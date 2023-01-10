{
  "title": "How Can I Process a Title or Key in Avid Without Affecting the Background?",
  "date": "2018-04-25T00:00:00+00:00",
  "description": "How Can I Process a Title or Key in Avid Without Affecting the Background?",
  "excerpt": "Drop a Sapphire plugin onto a title or key and then select the \"Apply To Title/Key\" checkbox in the Effect Editor. This causes the plugin to process the fill and matte of the title together. . .",
  "image_url": "",
  "tags": [
    "Sapphire",
    "Avid"
  ]
}

Drop a Sapphire plugin onto a title or key and then select the "Apply To Title/Key" checkbox in the Effect Editor. This causes the plugin to process the fill and matte of the title together.  
  
Any animation curves in the title will be removed, and only the matte and fill clips will remain. If you want the title to move, you can instead use the "Crop/Transform" parameters.  
  
You can also apply more than one effect to a title or key without affecting the background. To do this, drop the first effect onto the title and select "Apply To Title/Key" as above. Then change its Background input to "None" to prevent it from compositing. Next, apply another effect by alt-dropping it on the first effect; but, leave "Apply To Title/Key" unselected. You can alt-drop any number of additional effects in this way. In the final effect, set the Background to "1 Track Below" to composite the final result. Note that only the first effect should have "Apply To Title/Key" selected, and only the last effect should have a Background selected. You should use only Sapphire effects between this first effect and the final composite, because other effects will probably not pass the alpha channel through in a compatible way.  
  
The Wipe and Dissolve transition effects do not include an Apply To Title/Key option, because they are required by AVX to accept only 2 inputs, and therefore can not replace a title that requires 3 inputs.  
  
To apply a transition between two titles without affecting the background, first apply "S\_MakeRGBA" to both titles, and add the transition effect between these titles. Then shift-select both sides of the transition (incoming and outgoing) and use the "Collapse" button on the timeline toolbar to nest them together. Finally, alt-drop "S\_Layer" on the nest and you should see the completed effect. If your Avid allows you to apply effects on filler, instead of collapsing the transition, you can add "S_Layer" on a filler track on top of that (alt drop), and select Background: 2 tracks below to composite over the background.  
  
If you want to also apply other effects to each title such as distortions or blurs, use them instead of "S_MakeRGBA" above, and select "Apply to Title/Key".  
  
To wipe on or off a title, just use an all-black title for the other side.
