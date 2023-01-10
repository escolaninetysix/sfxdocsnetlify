{
  "date": "2017-10-06T15:32:47+00:00",
  "description": "Instructions for setting up the Sapphire / GenArts RLM server on a floating license server.",
  "title": "Sapphire Activation Key"
}
### How do I set up the Sapphire/GenArts RLM server on my Floating License Server?

**Floating License Server Online Activation**

To set up the GenArts RLM server on your floating license server:

**Step 1:** Download and run the GenArts RLM server software on the license server.

Download link: [https://borisfx.com/downloads/?&product=RLM%20License%20Server](/downloads/?&product=RLM%20License%20Server "https://borisfx.com/downloads/?&product=RLM%20License%20Server")

(Sapphire requires RLM v11 or greater.)

**Step 2:** Open a Web browser and go to: http://SERVERNAME:5054/goforms/activate.

(Replace “SERVERNAME” with the name of the license server.)

**Step 3:** Click "BEGIN License Activation".

**Step 4:** Enter activation.genarts.com in the “ISV activation website” field provided and click "Next".

**Step 5:** Enter genarts in the “ISV” field.

**Step 6:** Copy and paste your Sapphire Activation Key license that you received from your license email into the "License activation key" field. Then, click "Next".

**Step 7:** Your Ethernet address will auto-populate in the “License Server or Node-lock hostid” field. Accept the auto-populated Ethernet address.

**Step 8:** Enter the number of licenses that should be locked to this server in the "License count (for floating licenses)" field.  Or just enter 0 to assign all licenses to the specified server. Click "Next".

**Step 9:** A default license location will auto-populate in the “License File to create or edit” field. Accept the default license location and click "Next".

**Step 10:** On the “Activation Request Data” screen, verify all the information you have entered, and click "REQUEST LICENSE".

**Step 11:** On the “License Activation” page, click on "(Re)start License Server".

**Step 12:** Then, on the “Reread/Restart Servers” page, click on "Reread/Restart".

This completes the License server set up.

To confirm that the Sapphire/GenArts license server is working, go to http://SERVERNAME:5054 (replace SERVERNAME with the name of the server), and click "Status" on the top left hand corner. Genarts should show up under the ISV Servers and it will say Running: Yes.

<hr>

**Floating License Server Offline Activation**

To set up the GenArts RLM server on your offline floating license server:

**Step 1:** Go to a computer with Internet connection and download the GenArts RLM server software: http://www.genarts.com/support/downloads/rlm-license-server-genarts-products

**Step 2:** Install the GenArts RLM server software on your offline license server and on your computer with Internet connection. (You will use the online machine to get the license for your offline server.)

(Sapphire requires RLM v11 or greater.)

**Step 3:** On the online computer, open a Web browser and go to: http://SERVERNAME:5054/goforms/activate or http://localhost:5054/goforms/activate

(Replace SERVERNAME with the name of the server.)

**Step 4:** Click "BEGIN License Activation".

**Step 5:** Enter activation.genarts.com in the “ISV activation website” field provided and click "Next".

**Step 6:** Enter genartsin the “ISV” field.

**Step 7:** Copy and paste your Sapphire Activation Key license that you received from your license email into the "License activation key" field. Then, click "Next".

**Step 8:** The Ethernet address of the machine you are on will auto-populate in the “License Server or Node-lock hostid” field. You will need to overwrite it with the Ethernet address of the offline license server.

To find the Ethernet address of your offline license server:

On Windows:    Go to start -> GenArtsRLMServer -> Get RLM HostID
On Mac:             In a console type: "/Library/Application Support/GenArts/rlm/Get Hostid.py"
On Linux:           In a terminal type: /usr/genarts/rlm/hostid_wrapper.py

(The command will print out the results -- Get the first mac address from the first line: "Hostid of this machine:")

**Step 9:** Enter the number of licenses that should be locked to this server in the "License count (for floating licenses)" field.  Or just enter 0 to assign all licenses to the specified server. Click "Next".

**Step 10:** A default license location will auto-populate in the “License File to create or edit” field. Replace the default location to a location that you can easily write to and access the file, such as your Desktop or the Downloads folder.

Click "Next".

**Step 11:** On the Activation Request Data screen, verify all the information you have entered, and click "REQUEST LICENSE".

**Step 12:** On the License Activation page, click on "(Re)start License Server".

**Step 13:** On the Reread/Restart Servers page, click on "Reread/Restart".

**Step 14:** Transfer the License File on to the offline license server and save the License File to the RLM directory.

For Windows:     C:\\Program Files (x86)\\GenArts\\rlm
For Mac:              /Library/Application Support/GenArts/rlm/
For Linux:            /usr/genarts/rlm/

**Step 15:** Open the License File and edit the file with your offline server's Hostname.

**Step 16:** Open a Web browser on the offline server, go to http://localhost:5054 and click on “(Re)Start License Server”.

This completes the License server set up.

To confirm that the Sapphire/GenArts license server is working, go to http://SERVERNAME:5054 (replace SERVERNAME with the name of the server), and click "Status" on the top left hand corner. Genarts should show up under the ISV Servers and it will say Running: Yes.

Now that everything is installed and activated, you no longer need the RLM server installed on the temporary online computer -- you can remove it at this time.