{
  "title": "All My GPU Renders With Sapphire Sparks Are Failing In Autodesk",
  "date": "2018-04-25T00:00:00+00:00",
  "description": "All My GPU Renders are Failing In Autodesk",
  "excerpt": "On Linux, add the following line to /etc/modprobe.conf and then reboot: options myri10ge myri10ge_pat_idx=1",
  "image_url": "",
  "tags": [
    "Sapphire",
    "Autodesk"
  ]
}

If a CUDA card is detected, and GPU is enabled, but all GPU renders fail immediately:

*   On Linux, add the following line to /etc/modprobe.conf and then reboot:  options myri10ge myri10ge\_pat\_idx=1
