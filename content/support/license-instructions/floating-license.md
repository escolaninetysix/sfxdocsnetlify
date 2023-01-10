{
  "title": "Floating License",
  "date": "2017-10-06T15:25:04Z",
  "description": "Installing an activation key floating license for Continuum from Boris FX."
}
### How do I install my activation key floating license?

After you have set up the floating license sever, the next steps are to install the Continuum plug-ins and the client license. [If you have not set up the license server, make sure to do that first](/support/license-instructions/sapphire-activation-key/).

Step 1: Get the host line from the server. It looks something like this:

HOST ServerName EthernetAddress PortNumber

(NOTE: The HOST line that you copy over must match the HOST line from the license file.)

Step 2: During the Continuum installation process, when you are prompted to license the software, choose to “Enter an existing RLM license” and copy and paste the HOST line from your “activate.lic” license file from the license server.

Save the modified license file.

The next time you start up After Effects or Premiere Pro on the client machine, the license should take effect.

<hr>

If you skipped the license installation during the initial installation process, you can follow the instructions below:

On Windows, go to the Start Menu and scroll to Boris FX Continuum AE. Twirl open the group and click on  “Install RLM License ".
On Mac, go to: /Macintosh HD/Applications/Boris Continuum Complete 11/ and double click on "Install RLM License".

Or you can find and directly modify the client RLM license file located:

On Windows:  C:\ProgramData\GenArts\rlm\SapphireAE.lic
On Mac:           /Library/Application Support/GenArts/rlm/SapphireAE.lic

Open the file with a text editor and paste in the HOST line:

HOST ServerName EthernetAddress PortNumber

Save and exit the license file.

The next time you start up the host application (Adobe, Avid etc) on the client machine, the license should take effect.
