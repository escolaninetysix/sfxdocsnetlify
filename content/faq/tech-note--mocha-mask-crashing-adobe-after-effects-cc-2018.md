{
  "title": "Tech Note: Mocha Mask Crashing Adobe After Effects CC 2018 - RESOLVED",
  "date": "2017-10-30T13:28:10Z",
  "description": "Mocha Mask and Adobe After Effects CC 2018",
  "excerpt": "A prior crashing issue with Mocha AE and Adobe After Effects has been resolved as of January 2018.",
  "tags": [
    "Adobe",
    "Mocha AE"
  ],
  "image_url": ""
}
##### **Note: We are thrilled to report this issue was resolved in the <a href="https://helpx.adobe.com/uk/after-effects/kb/bug-fixes-in-after-effects-cc.html" target="_blank">Adobe After Effects CC 2018.0 (January 2018) Release</a>.**

<hr><br>

<iframe src="https://player.vimeo.com/video/239902787" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

On October 18, 2017, Adobe released the new After Effects CC 2018. Please be aware, we have verified that this release introduces a significant crash related to Mocha's workflow for converting masking data to AE masks.

Specifically, this crash occurs when you are inside the Mocha interface, export Mocha shape data, and copy to the clipboard. When you go back to After Effects, you will most likely crash.

This AE crash can occur in all Mocha products: Mocha AE, Mocha Pro and Mocha VR. Please note, the crash does not occur when pasting tracking data from Mocha to After Effects. Only shape data on the clipboard causes the crash.

For owners of either Mocha Pro or Mocha VR, the simple workaround to avoid crashing After Effects is to avoid "copying Mocha mask data" to clipboard. Instead, when using Mocha for masking, use the "Convert AE Masks" button in the plug-in interface to convert Mocha shapes to AE masks. All other export formats found in Mocha Pro & Mocha VR are working fine.

For AE users that rely heavily on Mocha AE for masking, but do not wish to upgrade, we advise you to wait on updating to the new 2018 release. If you have updated After Effects and experience the crash, you can roll back to the last 2017 version.

Adobe's engineering team has verified this specific crashing issue and has committed to providing a fix in an upcoming point release. Boris FX apologizes for this inconvenience and would like to invite you to download and test a fully working, 15-day trial of the [Mocha Pro plug-in for Adobe](/downloads/?&product=Mocha%20Pro&host=Adobe).

[Contact our support team](/store/contact-us/) with any questions.
