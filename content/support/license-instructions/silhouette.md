{
   "title": "Silhouette Licensing Instructions"
}


## Node-Locked Licenses

When you purchase your license, you will be emailed a serial number.

### Internet Activation

When your machine is connected to the Internet, you can activate directly in a
few simple steps.

  1. Make sure you are connected to the Internet.

  2. Start Silhouette and select Activate nodelock license in the License window and click OK.

	 ![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_165/v1573588636/documentation/silhouette/licensing/license-1-new.jpg)

     The Boris FX License Tool will load.

  3. Choose Activate your license now and press Next.

     ![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_400/v1573233455/documentation/silhouette/licensing/license-nodelock-1.jpg)
	 
  4. Paste the serial number into the Activation Key field and click Next.

     ![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_400/v1573233454/documentation/silhouette/licensing/license-nodelock-2.jpg)

     If the activation is successful, details will appear on the next page.

     ![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_400/v1573233455/documentation/silhouette/licensing/license-nodelock-3.jpg)

  5. Select Finish.

     Your license is now installed and Silhouette’s New Project dialog box opens.
	 
### Offline Activation

If your machine is not connected to the Internet or you are behind a firewall, use the Activate your license manually option.

  1. Start Silhouette and select Activate nodelock license from the License window and click OK.
  
  	 ![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_165/v1573588636/documentation/silhouette/licensing/license-1-new.jpg)
  
     The Boris FX License Tool will load.
  
  2. Choose Activate your license manually using another computer’s web browser and press Next.
  
     ![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_400/v1573233455/documentation/silhouette/licensing/license-nodelock-4.jpg)
	 
  3. You will be provided with file fields to load a key file.
   
     ![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_400/v1573233454/documentation/silhouette/licensing/license-nodelock-5.jpg)
	 
  4. Download and save the key file that you received from your license email from a computer that has an Internet connection.

  5. Transfer the key file to your offline machine you are going to activate via a flash/thumb drive or a shared network.

  6. Select the location of the key file in the first field.

  7. Pick a location for the request file (which will be created) in the second field.

  8. Copy the request file (.req) to a machine with an Internet connection.

  9. Upload it to http://activation.borisfx.com/offline-activation.php.

  10. Save the activation file it returns (via download or email), and copy that back to the offline machine.
  
  11. Enter its location into to the license tool and click Next.
  
      ![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_400/v1573233456/documentation/silhouette/licensing/license-nodelock-6.jpg)
  
      Your license is now installed and Silhouette’s New Project dialog box opens.
	  
### Internet Deactivation

Once Silhouette has been activated, you can access the deactivate option by selecting the Help > License menu.

  1. Make sure you are connected to the Internet.
  
  2. Start Silhouette and select the Help > License menu. The Boris FX License Tool loads.
  
  3. Choose Deactivate your license now and press Next.
  
     ![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_400/v1573233456/documentation/silhouette/licensing/license-nodelock-7.jpg)
  
     Silhouette deactivates.
	 

### Node-Locked License Troubleshooting

  1. It is important that your Silhouette software matches your activation code, so check your purchase order to make sure everything matches up version wise. It may be that you don’t have the correct version of Silhouette installed from our download section. This is especially important for legacy software before Silhouette 2020, where a different licensing method is used.
  
  2. Check to make sure you are not restricted to using certain ports due to a firewall or other admin permissions. When in doubt, temporarily turn your firewalls off for the duration of the installation and then turn them back on when you are done.
  
  3. Troubleshoot your machine; try uninstalling all your Silhouette software, restarting your machine, and installing the software again from scratch, and make sure you follow installation directions off our website exactly. It sounds redundant, but sometimes it’s a great way to figure out what is going on inside your machine.

  4. If all else fails, our support team is happy to help you figure this out. Please contact support.
  
# Floating Licenses

This section will walk you through the process of installing floating licenses. Installing nodelocked licenses does not require the use of the license manager. See above.

## Floating licenses - How it works

A floating license allows central administration of your license deployment, avoiding the need to manually activate and deactivate our software on every machine, which is particularly beneficial for large facilities.

Configuring a new machine to use your floating license server is very straightforward and requires no Internet connection.

Similarly, replacing a failed machine can be done without needing to contact technical support for the license to be released.

## How do I Install the Floating License Server?

Silhouette uses the Boris FX RLM License server for floating licenses.

You can download the license server from the Boris FX website. See the steps below.

Floating licenses are easy to set up if you are familiar with configuring network services, but if you need any help with the process, please contact technical support.

*Note:* To configure a license server you must have Administrator (or root) privileges.

## Installing Floating Licenses with Online Activation

  1. Download the RLM License Manager from the download section here: <a href="https://borisfx.com/downloads/?&product=RLM%20License%20Server" target="_blank" title="Silhouette RLM License Server">RLM License Server</a>

  2. Run the License Manager file then follow the installation prompts.

  3. Open a Web browser and go to: http://SERVERNAME:5054/goforms/activate

  4. Replace SERVERNAME with the name of the license server.

  5. Click BEGIN License Activation.

  6. Enter activation.genarts.com in the ISV activation website field and click Next.

  7. Enter genarts in the ISV field.
  
  8. Copy and paste your Silhouette Activation Key license that you received from your license email into the License activation key field. Then, click Next.

  9. Your Ethernet address will auto-populate in the License Server or Node-lock hostid field. Accept the auto-populated Ethernet address

  10. Enter the number of licenses that should be locked to this server in the License count (for floating licenses) field. Or just enter 0 to assign all licenses to the specified server. Click Next.

      A default license location will auto-populate in the License File to create or edit field. Accept the default license location and click Next.

  11. On the Activation Request Data screen, verify all the information you have entered, and click REQUEST LICENSE.

  12. On the License Activation page, click on (Re)start License Server.

  13. Then, on the Reread/Restart Servers page, click on Reread/Restart. The license server should now be set up.

  14. To confirm that the Boris FX license server is working, go to
      http://SERVERNAME:5054

  15. Replace SERVERNAME with the name of the server, and click Status on the top left hand corner.

      genarts should show up under the ISV Servers and it will say Running: Yes.

## Installing Floating Licenses With Offline Activation

In cases where you cannot install the license via an Activation code (normally where the server is not connected to the Internet) you can manually install your license:
  1. On a machine with Internet access, download the RLM License Manager from the download section here: <a href="https://borisfx.com/downloads/?&product=RLM%20License%20Server" target="_blank" title="Silhouette RLM License Server">RLM License Server</a>

  2. Install the License Manager on both the machine that has an Internet connection and the offline server you intend to run on.

     Note: You will use the online machine to get the license for your offline server. 
 
  3. One the online computer, open a web browser and go to:
   
     http://SERVERNAME:5054/goforms/activate

  4. Replace SERVERNAME with the name of the license server.

  5. Click BEGIN License Activation.

  6. Enter activation.genarts.com in the ISV activation website field and click Next.
 
  7. Enter genarts in the ISV field.

  8. Copy and paste your Silhouette Activation Key license that you received from your license email into the License activation key field. Then, click Next.

  9. The Ethernet address of the machine you are on will auto-populate in the License Server or Node-lock hostid field. You will need to overwrite it with the Ethernet address of the offline license server. To find the Ethernet address on the offline license server:
     
	 For RLM Server v13 and newer:
     
	 • On Windows: Go to Start > Boris FX RLM Server > Get RLM HostID
	 
     • On Mac: In a console type: /Library/Application Support/BorisFX/rlm/GetHostid.py
	 
     • On Linux: In a terminal type: /usr/borisfx/rlm/hostid_wrapper.py
     
	 For older versions of RLM Server:
     
	 • On Windows: Go to Start > GenArtsRLMServer > Get RLM HostID
	 
     • On Mac: In a console type: /Library/Application Support/GenArts/rlm/GetHostid.py
	 
     • On Linux: In a terminal type: /usr/genarts/rlm/hostid_wrapper.py

     The command above will print out the results.

  10. Get the first mac address from the first line: Hostid of this machine.

  11. Enter the mac address into the online License Server or Node-lock hostid field.

  12. Enter the number of licenses that should be locked to this server in the License count (for floating licenses) field. Or just enter 0 to assign all licenses to the specified server.

  13. Click Next.

  14. A default license location will auto-populate in the License File to create or edit field. Replace the default location to a location that you can easily write to and access the file, such as your Desktop or the Downloads folder.

  15. Click Next.

  16. On the Activation Request Data screen, verify all the information you have entered, and click REQUEST LICENSE.
  
  17. On the License Activation page, click on (Re)start License Server.

  18. Then, on the Reread/Restart Servers page, click on Reread/Restart.
  
  19. Transfer the License File onto the offline license server and save the License File to the RLM directory.

     For RLM Server v13 and newer:

     • For Windows: C:\Program Files\BorisFX\rlm

	 • For Mac: /Library/Application Support/BorisFX/rlm/

	 • For Linux: /usr/borisfx/rlm/
     
	 For older versions of RLM Server:
 
     • For Windows: C:\Program Files (x86)\GenArts\rlm

     • For Mac: /Library/Application Support/GenArts/rlm/

     • For Linux: /usr/genarts/rlm/

  20. Open the License File in a text editor and edit the file with your offline server’s Hostname.

  21. Open a Web browser on the offline server, go to http://localhost:5054 and click on (Re)Start License Server.

     This completes the License server set up.

  22. To confirm that the Boris FX license server is working, go to http://SERVERNAME:5054

  23. Replace SERVERNAME with the name of the server, and click Status on the top left hand corner.

     genarts should show up under the ISV Servers and it will say Running: Yes.

     Now that everything is installed and activated, you no longer need the RLM server installed on the temporary online computer – you can remove it at this time.

## Installing The Floating License On A Client Machine (Manual Install)

If you haven’t yet installed the server license, follow the instructions above in 'How do I Install the Floating License Server.' Once you have the server license installed, perform the following steps to get the client license running.

### Install Floating Client License Using The License Window

  1. Install Silhouette on the client machine.
  
  2. Get the host line from the server license, which looks like this: HOST ServerName EthernetAddress PortNumber

     For example, HOST camelot 00000000042e 5053

  3. Start Silhouette and select Use floating license in the License window.
  
     ![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_165/v1573233456/documentation/silhouette/licensing/license-2.jpg)

  4. Enter the PortNumber and ServerName from the server license in the Server field in the following format: port@ServerName. In the server license example above, you would enter 5053@camelot

  5. Click OK.

    Your client machine is now connected to the license server and Silhouette’s
    
	New Project dialog box opens.

### Install Floating Client License Using a License File
  1. Install Silhouette on the client machine.

  2. Get the host line from the server license, which looks like this: HOST ServerName EthernetAddress PortNumber

     For example, HOST camelot 00000000042e 5053

  3. Create a new file in a text editor called silhouette_client.lic. The file name is not important, as long as the .lic extension exists.
  
  4. Paste in the HOST line into the client license file and press enter to create a new line.

  5. You can either keep the server Mac address in the client or replace it with the word “any”. See example below.

     HOST camelot any 5053

  6. Save the file to the appropriate location. For your particular system this is:
  
    • For Windows: C:\ProgramData\GenArts\rlm
 
    • For Mac: /Library/Application Support/GenArts/rlm/

    • For Linux: /usr/genarts/rlm/
   
  7. Start Silhouette.

    Your client machine is now connected to the license server and Silhouette’s

    New Project dialog box opens.

### Install Floating Client License Using An Environment Variable


If you want to point to a license file via environment variable, use genarts_LICENSE. It uses the usual RLM syntax, e.g:

genarts_LICENSE=5053@server-name

genarts_LICENSE=/path/to/file.lic

You can also set up the RLM environment variable to read all .lic files in a directory:

genarts_LICENSE=your/rlm/directory

**Note:** The genarts in the environment variable name must be lower case.

## Troubleshooting Floating Licenses

As with any software, problems may arise during the installation process. Please take a moment to read our troubleshooting section and check for common errors.

If you continue to have issues installing, please contact support and we will be happy to help you. You may contact our support team here: https://borisfx.com/support/open-a-case/

### Verify Server License Has Been Successfully Installed

Check that your license actually exists on the Server.

For RLM Server v13 and newer:
 
 • For Windows: C:\Program Files\BorisFX\rlm

 • For Mac: /Library/Application Support/BorisFX/rlm/

 • For Linux: /usr/borisfx/rlm/

For older versions of RLM Server:

 • For Windows: C:\Program Files (x86)\GenArts\rlm

 • For Mac: /Library/Application Support/GenArts/rlm/

 • For Linux: /usr/genarts/rlm/

### Verify License Server Software Is Latest Version

Check to make sure your License Manager is up to date.

### Verify Firewall Is Not Running Between Server And Client

If your organization needs to run a firewall, you will need to check if the ports for the RLM server are open for use.

### Check That Silhouette Version Matches Activation Code

Check your purchase order to make sure everything matches up version wise. It may be that you don’t have the correct version of Silhouette installed from our download section. This is especially important for legacy software.

### Check Conflicting Licenses Installed In Licensing Folder

If you have more than one Silhouette license installed on the server or client machine check to make sure they are not expired licenses. While rare, sometimes these licenses can conflict with any current ones you have on your system.

### The Client Does Not Connect Or See The Server Host Name

If your client machine does not connect to the server based on the server name, try replacing the server name with the IP address of the server instead in the license file. You can easily do this via the License Manager or via a text editor.

### When In Doubt, Check The Logs!

Check logs and their paths: Read the logs from Silhouette and from your server. They will tell you all about what is happening to your machine.

### Check Your Firewall Settings

Check to make sure you are not restricted to using certain ports due to a firewall or other admin permissions. When in doubt, temporarily turn your firewalls off for the duration of the installation and then turn them back on when you are done.

### Check Your Host Name Settings

If your client machine is not able to connect to the server you may have a networking issue. Try changing the server name on the client machine to the IP address of the server instead when entering the port@host, or check to see if your host has “.local” appended to the end of it.

#### Sometimes The Best Solution Is To Start Again

You might roll your eyes at this one, but try uninstalling, restarting your machine, and installing the software again from scratch. Make sure you follow installation directions off our website exactly. It sounds redundant, but sometimes it’s a great way to troubleshoot what is going on inside your machine.

### When All Else Fails…

Contact us! Our support team are more than happy to help you fix any floating license issues you may have. Please contact support here:

https://borisfx.com/support/open-a-case/

## Installing Render Licenses

This section will discuss the installation of floating render licenses and how they differ from standard interactive floating licensed.

### Render Floating Licenses vs Interactive Floating Licenses

A render license is a specific kind of floating license that only allows rendering of Silhouette project output.

When you are using a floating license, it is broken into two parts: The interactive portion and the rendering portion.

  1. If you open Silhouette (and a license is available) you are entering the interactive portion.

  2. If you have Silhouette closed and are using the command-line renderer, you are utilizing the rendering portion.

If the interactive license is in use elsewhere or missing, the Silhouette GUI will become unlicensed and attempting further work may encrypt your project if you choose to save. If you have no interactive floating licenses available to render with, additional render licenses can be helpful to let you free up interactive licenses elsewhere.

### Workflow For Render Licenses - Example 1

To help illustrate the Render License workflow, let’s look at the following situation:

• 5 floating licenses (interactive)

• 10 render licenses (render only)

• There is only 1 user

The license server is operating with both sets of licenses.

• If only one person is using Silhouette on the network, there are 4 interactive and 10 render licenses still available to use.

• If only that one person was using Silhouette on the network, they would have 15 render machines available for use including the one they were working with.

• If another person started working and all machines were in use for rendering, their version of Silhouette would be unlicensed, as there would be no available seats.

### Workflow For Render Licenses - Example 2

To help illustrate the Render License workflow, let’s look at another situation.

• 5 floating licenses (interactive)

• 10 render licenses (render only)

• There are 5 users

The license server is operating with both sets of licenses.

• There are 5 people working in Silhouette.

• If another user tries to work on a 6th machine, they will open Silhouette unlicensed, because all interactive licenses are in use.

• They open an existing Silhouette project (or render from the command line), they will be able to render, because all render licenses are available.

Now, what if one person wants to send off a render to the network?

• If 5 people are using Silhouette on the network already, there would be 11 render machines available for use including the one the user was presently working with.

• If another person stopped working in Silhouette, the interactive license would be released, and a new machine would then be free to either use for work (interactive) or render (non-interactive) by another user.

### Installing Render Floating Licenses

The installation of a render license is exactly the same as that of a standard interactive floating license. See Floating Licenses for a complete guide.

## Run in Demo Mode

Runs Silhouette in a watermarked demo mode which does not allow saving, exporting or rendering.

![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_165/v1573569574/documentation/silhouette/licensing/license-3.jpg)

## Request A Trial

Request a 15 day, unrestricted trial license.

<b><u>Note:</u></b> Internet access is required for nodelocked trial licenses.

### Node-locked License Trial

  1.  Select Request a trial and click OK.
  
      ![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_165/v1587043683/license-4_4.jpg)
  
  2.  Fill out the Request Trial License form that appears and click OK.

      ![](https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto,w_165/v1587043683/license-5_1.jpg)
  
A 15 day trial license is automatically installed.
  
### Floating License Trial

  1.  Request a Silhouette floating trial license here: [Contact Us](https://borisfx.com/store/contact-us/)
  
  2.  Fill out the required information indicating that you would like a Silhouette floating trial license and if you have a current RLM license server, provide your server’s Hostid and name.
