{
   "date": "2017-08-15T16:09:57Z",
   "description": "RLM License Server for Sapphire from Boris FX",
   "title": "RLM License Server"
}

<p><a href="#windows">INSTALL INSTRUCTIONS - WINDOWS</a><br />
<a href="#mac">INSTALL INSTRUCTIONS - MAC</a><br />
<a href="#linux">INSTALL INSTRUCTIONS - LINUX</a></p>

<h3 id="install-instructions-windows">Install Instructions - Windows</h3>

<p><a name="windows"></a></p>

<p>To download and install the RLM Server version 11.2.2.0:</p>

<ol>
<li><p>Download and run the appropriate installer on your 64-bit license server machine:</p>

<p><a href="/downloads/?&amp;product=RLM%20License%20Server">Windows Installer</a> (1Mb)<br />
Either run the installer from its current location, or save it and then execute it.</p></li>

<li><p>To install your license, use a text editor to open the server license file:</p>

<div>On 64-bit Windows:  <tt>c:\Program Files (x86)\GenArts\rlm\genarts.lic</tt></div>

<p>Cut and paste the GenArts license that has been provided to you into the license file.<br />
Save the file and exit the text editor.</p></li>

<li><p>Tell the license server to read the new license:<br />
Open the RLM server&rsquo;s web interface using a browser. From the server machine go to <a href="http://localhost:5054">http://localhost:5054</a> or from another machine use <a href="http://servername:5054" title="http://servername:5054">http://servername:5054</a> replacing servername as appropriate.<br />
On the left side of the main page select Reread/Restart Servers, and then on that page click on Reread Licenses.</p>

<p>Or, if you don&rsquo;t have access to a web browser, you can instead type the following commands to reread the license:<br />
On 64 bit Windows: <tt>cd &ldquo;\Program Files (x86)\GenArts\rlm&rdquo;; .\rlmutil.exe rlmreread</tt></p></li>
</ol>

<p>After installation, you can also monitor the status of your floating licenses using the RLM server&rsquo;s web interface. From the server machine go to <a href="http://localhost:5054">http://localhost:5054</a> or from another machine use <a href="http://servername:5054" title="http://servername:5054">http://servername:5054</a> replacing servername as appropriate.</p>

<p>For troubleshooting tips using OFX plug-ins, see also the RLM section of our <a href="http://support.genarts.com/Knowledgebase/List/Index/68">OFX support page</a>.</p>

<p>If you already have an RLM license server for another product, download the <a href="https://cdn.borisfx.com/borisfx/store/genarts.set">GenArts settings file here</a> and put it in the RLM directory on your server. Put your license file in the same directory.</p>

<h3 id="installation-instructions-mac">Installation Instructions - Mac</h3>

<p><a name="mac"></a></p>

<p>To download and install the RLM Server version 11.2.2.0:</p>

<ol>
<li><p>Download and run the appropriate installer on your license server machine:</p>

<p><a href="/downloads/?&amp;product=RLM%20License%20Server">Mac Installer</a> 11.2.2.0 (1Mb) - Intel Only<br />
If it asks for your passphrase, enter your Mac user login password.</p>

<p><a href="/downloads/?&amp;product=RLM%20License%20Server">Mac Installer</a> 9.0.3.0 (1Mb) - PowerPC Only (depricated)<br />
If it asks for your passphrase, enter your Mac user login password.</p></li>

<li><p>To install your license, use a text editor to open the server license file:<br />
On Mac:  <tt>/Library/Application Support/GenArts/rlm/genarts.lic</tt></p>

<p>Cut and paste the GenArts license that has been provided to you into the license file.<br />
Save the file and exit the text editor.</p></li>

<li><p>Tell the license server to read the new license:<br />
Open the RLM server&rsquo;s web interface using a browser. From the server machine go to <a href="http://localhost:5054">http://localhost:5054</a> or from another machine use <a href="http://servername:5054" title="http://servername:5054">http://servername:5054</a> replacing servername as appropriate.<br />
On the left side of the main page select Reread/Restart Servers, and then on that page click on Reread Licenses.</p>

<p>Or, if you don&rsquo;t have access to a web browser, you can instead type the following commands to reread the license:<br />
On Mac:  <tt>&rdquo;/Library/Application Support/genarts/rlm/rlmutil&rdquo; rlmreread</tt></p></li>
</ol>

<p>After installation, you can also monitor the status of your floating licenses using the RLM server&rsquo;s web interface. From the server machine go to <a href="http://localhost:5054">http://localhost:5054</a> or from another machine use <a href="http://servername:5054" title="http://servername:5054">http://servername:5054</a> replacing servername as appropriate.</p>

<p>For troubleshooting tips using OFX plug-ins, see also the RLM section of our <a href="http://support.genarts.com/Knowledgebase/List/Index/68">OFX support page</a>.</p>

<p>If you already have an RLM license server for another product, download the <a href="https://cdn.borisfx.com/borisfx/store/genarts.set">GenArts settings file here</a> and put it in the RLM directory on your server. Put your license file in the same directory.</p>

<h3 id="installation-instructions-linux">Installation Instructions - Linux</h3>

<p><a name="linux"></a></p>

<p>To download and install the RLM Server version 11.2.2.0:</p>

<ol>
<li><p>Make sure your license server machine is 64-bit.</p></li>

<li><p>Download and run the appropriate installer on your license server machine:</p>

<p>For Red Hat or similar Linux, become root and type the command:<br />
<tt>rpm -Uvh <a href="https://cdn.borisfx.com/borisfx/store/GenArtsRLM-11.2.2.0-1.x86_64.rpm">https://cdn.borisfx.com/borisfx/store/GenArtsRLM-11.2.2.0-1.x86_64.rpm</a></tt><br />
or download the <a href="/downloads/?&amp;product=RLM%20License%20Server">Linux RPM Installer</a> file and install it locally (0.4Mb).</p></li>

<li><p>To install your license, use a text editor to open the server license file:<br />
On Linux:  <tt>/usr/genarts/rlm/genarts.lic</tt></p>

<p>Cut and paste the GenArts license that has been provided to you into the license file.<br />
Save the file and exit the text editor.</p></li>

<li><p>Tell the license server to read the new license:<br />
Open the RLM server&rsquo;s web interface using a browser. From the server machine go to <a href="http://localhost:5054">http://localhost:5054</a> or from another machine use <a href="http://servername:5054" title="http://servername:5054">http://servername:5054</a> replacing servername as appropriate.<br />
On the left side of the main page select Reread/Restart Servers, and then on that page click on Reread Licenses.</p>

<p>Or, if you don&rsquo;t have access to a web browser, you can instead type the following commands to reread the license:<br />
On Linux:  <tt>/usr/genarts/rlm/rlmutil rlmreread</tt></p></li>
</ol>

<p>After installation, you can also monitor the status of your floating licenses using the RLM server&rsquo;s web interface. From the server machine go to <a href="http://localhost:5054">http://localhost:5054</a> or from another machine use <a href="http://servername:5054" title="http://servername:5054">http://servername:5054</a> replacing servername as appropriate.</p>

<p>For troubleshooting tips using OFX plug-ins, see also the RLM section of our <a href="http://support.genarts.com/Knowledgebase/List/Index/68">OFX support page</a>.</p>

<p>If you already have an RLM license server for another product, download the <a href="https://cdn.borisfx.com/borisfx/store/genarts.set">GenArts settings file here</a> and put it in the RLM directory on your server. Put your license file in the same directory.</p>
