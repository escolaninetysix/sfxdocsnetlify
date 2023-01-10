{
  "title": "Applying Continuum Filters to a Matte Key or Title in Avid Media Composer",
  "date": "2017-10-26T11:34:06+00:00",
  "description": "Using  Continuum 11, Boris FX has streamlined the way users interact with matte keys or alpha title mattes in Avid.",
  "excerpt": "With the release of Continuum 11, Boris FX has streamlined the way users interact with matte keys or alpha title mattes in Avid. Instead of having to set the multi-filter start-mid-end checkboxes in a multi-filter stack, this is now handled automatically from within Continuum. There are only three basic rules that must now be followed...",
  "image_url": "",
  "tags": [
    "Continuum",
    "Avid"
  ]
}


With the release of [Continuum 11](/products/continuum/), Boris FX has streamlined the way users interact with matte keys or alpha title mattes in Avid. Instead of having to set the multi-filter start-mid-end checkboxes in a multi-filter stack, this is now handled automatically from within Continuum.

<span style="font-size: 1rem;">There are only three basic rules that must now be followed, which are:</span>

* the first filter should have the apply to alpha option enabled

* the last filter should have it’s background set to first (or second) below

* all filters except for the last filter should have the background set to none

**single filter:**

* simply apply the filter and enable the apply to title matte option

* the background is automatically set to 1st below

**multi-filter:**

* apply any number of filters

* in the first filter, enable the apply to title matte option

* in all filters except for the filter at the top of the stack (the last one to render) set the background to none

* in the filter at the top of the stack (the last one to render) set the background to 1st below

**important note:**

* when dragging the first filter onto the alpha matte clip, do not hold the alt/option key

* for all additional filters, hold down the alt/option key
