{
  "title": "How do I set up the Imagineer License Server on Linux with systemd?",
  "date": "2018-11-07T16:29:47+00:00",
  "excerpt":
     "systemd is the new mechanism for managing startup services on modern Linux distributions. The Imagineer License Server can be configured to use systemd instead of legacy init scripts for managing the server process.",
  "image_url": "",
  "blackfriday": {
     "extensions": [ "" ]
  },
  "tags": [
    "Mocha",
    "Installation & Licensing"
  ]
}

_NOTE: This document only applies to the legacy Imagineer License Server that
serves the FlexLM licenses provided with Mocha 5.6 and earlier. Mocha 2019 and
later use the GenArts license server, which is not configured in this way._

### Introduction

**systemd** is the new mechanism for managing startup scripts and services on
modern Linux distributions, replacing the previous init scripts and Upstart (on
Ubuntu). The following distributions use systemd by default, although support
for old-style init scripts is generally retained as much as possible.

- **RHEL/CentOS** version 7.0 and newer
- **Fedora 15** and newer
- **Ubuntu 15.04** and newer
- **Debian 8** and newer

### Package installation

First, install the `LicenseManager` package on the server. On a CentOS, RHEL or
Fedora system you should be able to install the RPM package directly, while on
Ubuntu or Debian you will need to convert the RPM package to the DEB format
using `alien` (do *not* use the `--scripts` parameter, since the RPM
installation scripts may not be compatible).

### Dependency installation

Test that the license daemon can actually run on the system by invoking it
manually from the command line (ignoring any errors about missing licenses).

```
$ /opt/isl/LicenseManagerV1/bin/isllmgrd -z
```

If the license daemon runs (and possibly immediately exits), continue to the
next section. If there is an error message “No such file or directory”, this
means that the necessary LSB (Linux Standard Base) package is not installed on
the system.

On Ubuntu, the command to install this package would be

```
$ sudo apt-get install lsb
```

Whereas on CentOS the command is:

```
$ sudo yum install redhat-lsb
```

Other distributions may use different names for their LSB packages, so you may
need to search for the appropriate package name to install.

### Create the daemon user and group

**This section is only needed when using a converted DEB package on Ubuntu or
Debian. If you installed the RPM directly (e.g. on CentOS or RHEL), skip this
section.**

For security reasons, the license management daemon should not run with root
privileges, but as a dedicated `isllmgrd` user with limited access to the
system.  If the LicenseManager was installed via a converted DEB package, the
RPM script to create the necessary system user will not have been executed.
Therefore it needs to be run manually with the following commands:

```
$ sudo groupadd -r isllmgrd
$ sudo useradd -r -g isllmgrd -s /sbin/nologin -c "License Manager user account" isllmgrd
```

### Install the systemd service file

The systemd service file tells systemd how to start and stop the LicenseManager
daemon, and replaces the previous `isllmgrd` init script which is no longer
used and should be removed.

1. Download the `isllmgrd.service` file from
   [here](https://cdn.borisfx.com/borisfx/store/LicenseManager/isllmgrd.service
   "isllmgrd service file").
2. Install the service file into the location: `/etc/systemd/system`
3. Remove the `/etc/init.d/isllmgrd` script, to avoid confusion and possible
   conflict with the old-style init system.

At this point it should be possible to start and stop the license daemon with
systemd, and to obtain its log output and status.

### Administering the daemon with systemd

Now that the daemon is managed by systemd instead of an init script,
there are some changes in the commands used to manage the service.

To **start** the service, use:

```
$ sudo systemctl start isllmgrd
```

To **stop** the service, use:

```
$ sudo systemctl stop isllmgrd
```

To obtain the current **status**, use:

```
$ sudo systemctl status isllmgrd
```

Note that the status output is far more comprehensive than with the init
script, giving the PID, the full command-lines of the main process and its
child process, and various other information.

To obtain the **log output**, another systemd command is used. There is no need
to look for the old `/var/log/isllmgrd.log` file, since this is no longer used
and will not be created if it is not already present.

This command dumps the log output to the console:

```
$ sudo journalctl -u isllmgrd
```

If the user needs to send a copy of the log to support, it is better to have
them redirect the output to a file rather than copy-paste from a terminal
window, which may cut off long lines.

```
$ sudo journalctl -u isllmgrd > /tmp/isllmgrd.txt
```

The above command will save the log into `/tmp/isllmgrd.txt` which can then be
sent to support as an email attachment.



