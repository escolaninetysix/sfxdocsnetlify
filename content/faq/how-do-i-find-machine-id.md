{
  "title": "How Do I Find My Machine ID (Host ID)?",
  "date": "2018-04-27T00:00:00+00:00",
  "description": "How Do I Find My Machine ID (Host ID)?",
  "excerpt": "Your Machine ID is your Ethernet ID/MAC address. It consists of 6 pairs of numbers and letters A-F. You may see these pairs un-separated (d312a930bc7f), separated by colons (d3:12:a9:30:bc:7f) or separated by dashes (d3-12-a9-30-bc-7f). To find your Machine ID, please follow the steps below. . .",
  "image_url": "",
  "tags": [
    "Sapphire"
  ]
}

Your Machine ID is your Ethernet ID/MAC address. It consists of 6 pairs of numbers and letters A-F. You may see these pairs un-separated (d312a930bc7f), separated by colons (d3:12:a9:30:bc:7f) or separated by dashes (d3-12-a9-30-bc-7f). To find your Machine ID, please follow the steps below.

* * *

**On Windows**

*   Go to the Start menu, then in the search box type "cmd" and hit Enter.
*   In the cmd window, type "ipconfig /all".
*   Find the line that reads "Physical Address". This is your Machine ID.

* * *

**On Mac**

*   Go to System Preferences > Network and select your active network interface (e.g., Ethernet)
*   From the list on the left. Click on 'Advanced...', then on 'Hardware'.
*   The Machine ID is listed under "MAC Address".

* * *

**On Linux**

*   Open a terminal/shell window, and type "ifconfig".
*   Look for "Hwaddr" under eth0. This is your Machine ID.
