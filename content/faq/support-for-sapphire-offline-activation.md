{
  "date": "2017-07-19T13:53:41Z",
  "description": "Sapphire installation instructions if your machine or license server machine is not connected to the Internet.",
  "excerpt": "How to install a Sapphire activation key if your machine or license server machine is not connected to the Internet.",
  "image_url": "",
  "tags": [
    "Sapphire",
    "Installation & Licensing"
  ],
  "title": "What are the installation instructions for Sapphire offline activation?"
}
**Node-Locked**

<a href="#how1">How do I install my activation key if my machine is not connected to the Internet?</a>

**Floating**

<a href="#how2">How do I install my activation key if my license server machine is not connected to the Internet?</a>

---

<p></p>

<a name=how1>**HOW DO I INSTALL MY ACTIVATION KEY IF MY MACHINE IS NOT CONNECTED TO THE INTERNET?**

First install Sapphire on your machine. If the software is already on your machine:

**On Windows 7**, go to: Start -> All Programs -> GenArts Sapphire -> Activate Sapphire <version> License.
**On Windows 8**, Search for GenArts Sapphire -> Activate Sapphire License.
**On Mac**, go to: /Applications/GenArtsSapphire folder and double click on "Activate License".
**On Linux**, go to Start > GenArtsSapphire folder and double click on "Activate License".

* Choose to "Activate your license manually using another computer's Web browser".
* Get the key file from your computer that has Internet connection and transfer it to your offline machine via a flash/thumb drive, etc.

\(Note: The key file is included with your license e-mail).

* Select the location of the key file, and pick a location for the request file (which will be created).
* Copy the request file (sapphire.req) to a machine with Internet.
* Upload it to http://activation.genarts.com/offline-activation.php.
* Save the activation file it returns (via download or email), and copy that back to the offline machine.
* Enter its location into to the license tool.

---

<p></p>

<a name=how2>**HOW DO I INSTALL MY ACTIVATION KEY IF MY LICENSE SERVER MACHINE IS NOT CONNECTED TO THE INTERNET?**

Go to a computer with Internet connection and follow the instructions below:

* Install the GenArts RLM server software on 1) your offline license server and 2) on another server with Internet access. (You will use this machine to get the license for your offline server.)
* You can download the installer from here: http://www.genarts.com/support/downloads

\(The Sapphire v8 license requires RLM v11 or greater.)

* On the server with Internet access, open a web browser and go to: http://localhost:5054/goforms/activate
* Click "BEGIN License Activation"
* In the ISV activation website field, paste in "activation.genarts.com" (without the quotes). Click "Next".
* In the ISV field, type "genarts" (without the quotes).
* Paste your Sapphire Activation Key from the license email, in the field next to "License activation key". Click "Next".
* Go to your offline license server and get the Host ID (a.k.a. Ethernet Address or MAC address)
* On Windows: Go to start -> GenArtsRLMServer -> Get RLM HostID
* On Mac: In a console type: "/Library/Application Support/GenArts/rlm/Get Hostid.py"
* On Linux: In a terminal type: /usr/genarts/rlm/hostid_wrapper.py

\(The command will print out the results -- Get the first mac address from the first line: "Hostid of this machine:")

* In the License Server or Node-lock hostid field, replace what's there with the Ethernet address of the Offine machine
* In the field next to "License count (for floating licenses):" enter the number of licenses that should be locked to this server.
* Enter 0 to assign all licenses to the specified server.
* Click "Next".
* Replace the default location for the "License File to create or edit" to a location that you can easily write to and access the file, such as your Desktop or Downloads folders.
* Click "Next".
* On the final screen verify all the information you've entered and click "REQUEST LICENSE".
* Transfer the License File to the offline license server and save the License File to the RLM directory.
  * **For Windows:**  C:\\Program Files (x86)\\GenArts\\rlm
  * **For Mac:**  /Library/Application Support/GenArts/rlm/
  * **For Linux:**  /usr/genarts/rlm/
* Open the License File and edit the file with your offline server's Hostname.
* In a browser, go to http://localhost:5054 and click on “(Re)Start License Server”.
* To confirm that your RLM License Server is running properly, go to http://localhost:5054
* On the left hand side of the page, click “Status”. The genarts server should be running.

Now install Sapphire Plug-ins on each client machine.

* You can download the Sapphire software from here: http://www.genarts.com/support/downloads.

\(Please note, you will need to download the appropriate Sapphire installer for each host you will use Sapphire with.)

* Create or open the client RLM license file, which is located in the following location:
  * **On Windows:** c:\\ProgramData\\GenArts\\rlm\\Sapphire.lic
  * **On Mac:** /Library/Application Support/GenArts/rlm/Sapphire.lic
  * **On Linux:** /usr/genarts/rlm/Sapphire.lic
* Open that file with a text editor and paste in the following license string:

HOST servername

* Replace servername with the actual DNS name of your license server.
* Then restart your host application on the client machine, and the license should take effect.
* You no longer need the RLM server installed on the temporary server, so you can remove it at this time.
