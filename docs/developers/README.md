# Developers

**This page is intended for software developers. For information for content editors, [click here](../editors).**

* [Getting Started](#getting-started)
* [Architecture](#architecture)
  * [Hugo](#hugo)
  * [Folder Structure](#folder-structure)
    * [`/archetypes`](#archetypes)
    * [`/content`](#content)
      * [Front Matter](#front-matter)
      * [Markdown](#markdown)
    * [`/layouts`](#layouts)
    * [`/static`](#layouts)
  * [Dynamic Content](#dynamic-content)
    * [Accounts](#accounts)
    * [Video Gallery](#video-gallery)
  * [Forestry](#forestry)
  * [Netlify](#netlify)
* [Common Tasks](#common-tasks)
  * [Editing the homepage](#editing-the-homepage)
  * [Changing menu items](#changing-menu-items)
  * [Editing static/index.scss](#editing-static-index-scss)
  * [Redirects](#redirects)
  * [Dev/Prod Parity](#devprod-parity)
  * [Windows 7/8](#windows-78)

## Getting Started

Install [Homebrew](https://brew.sh/) if you don't have it already:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install [Hugo](https://gohugo.io/):

```
brew install hugo
```

To build the site, simply run `hugo` in the repository root directory. The built site will be in a folder called `public` at the root project level.

To run a server for local development, run `hugo serve -p 8080 --watch`. You can then open [http://localhost:8080](http://localhost:8080) to view the site. Local changes will be tracked in the filesystem, causing an immediate rebuild and hot reload in the browser.

For convenience there is a script for each of these actions: You can run `./scripts/build` or `./scripts/serve` to build or serve respectively.

Pushing to the `master` branch on GitHub will automatically make the changes viewable on the live site at https://borisfx.com/ which is hosted on the [Netlify](https://netlify.com/) CDN. You should usually see your changes live in under 20 seconds for a change that affects a single page, or less than a minute for a change that affects a large number of pages. An example of a change that will affect a large number of pages is adding a header menu item, which changes the markup on every single page.

The [`#website`](https://app.slack.com/client/T04UP3A5J/C3NA59L66) channel in Slack receives notifications for all pushes to GitHub, and notifications when new builds are started, completed, or failed on Netlify.

Currently the site requires version 0.18 or 0.18.1 to build correctly. [Netlify](#Netlify) and [Forestry](#Forestry) are both configured to use the correct version.

## Architecture

### Hugo

This repository contains a static site designed to be compiled with the [Hugo](https://gohugo.io/) static site generator. For an introduction to Hugo, [click here](https://gohugo.io/overview/introduction/).

Hugo was compared with [Jekyll](https://jekyllrb.com/), [Middelman](https://middlemanapp.com/), and [Nanoc](https://nanoc.ws/). Hugo was chosen for its performance. This project was originally built for [Jekyll](https://jekyllrb.com/), but as the amount of content increased to around 2000 pages, the build time slowed down to over 30 seconds. Hugo is written in Go, whereas Jekyll is written in Ruby. After converting the site from Jekyll to Hugo, builds take only about 500ms on a recent Mac laptop. Hugo also has the advantage of being distributed as a single binary, so there are no Ruby and Gem versions to manage and no plugins.

### Folder Structure

#### `/archetypes`

The `/archetypes` folder contains templates specifying the fields for each of content type, identified by the file name. These files are used by Hugo to generate new content files with the fields pre-populated by running, for example, `hugo new -f json -k videos content/videos/new.md` to create a new video called `new`. Forestry will also use the archetype files to determine the fields to pre-populate when creating new content in their editor.

#### `/content`

The `/content` folder contains all the content for the site in either Markdown or HTML format, denoted by the file extension `.md` or `.html`. Each top level folder within the `/content` folder is a called a "section". The sections in this site include "downloads", "videos", etc. The section a piece of content belongs to determines which template will be chosen to render it. See [`/layouts`](#layouts) for more information on this.

##### Front Matter

All content files have metafields specified as a JSON object just above the content in the file. Hugo and most static site generators call this the "front matter".

##### Markdown

Markdown is a standard for writing formatted text in an easy to write/read/understand format which is automatically converted to HTML. To learn Markdown, which should only take a few minutes, see the links below.

* [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Markdown Interactive Tutorial](http://www.markdowntutorial.com/)

This document is written in Markdown! If you are viewing this document on GitHub, you can view the source for this file by clicking "README.md" in the file list above, then the "Raw" button on the right.

#### `/layouts`

The `/layouts` folder contains the templates that specify how the content in the `/content` folder should be rendered. The templates are written in the Go template language. For Hugo's introduction to writing Go templates, [click here](https://gohugo.io/templates/go-templates/). Hugo follows a set of rules to determine which template to render for a given piece of content. The root template is `/layouts/_default/baseof.html`. All templates that define a block "content" will inherit from it. For individual content files, Hugo will choose which template to use based on the section the content is in, as described in [`/content`](#content). For a single piece of content, it will look first in `/layouts/SECTION/single.html`, then fall back on `/layouts/_default/single.html`. For a list of content, for example `/videos/`, it will look first in `/layouts/section/SECTION.html`, then fall back on `/layouts/_default/list.html`. For Hugo's full documentation on templates, [click here](https://gohugo.io/templates/overview/).

#### `/static`

The `/static` folder contains files to be copied verbatim to the output site, rooted at the top level. For example, the favicon at `/static/favicon.ico` will be accessible in the built site at the path `/favicon.ico`.

### Dynamic Content

Dynamic parts of the site, such as the `/account` pages and the video gallery are built with a combination of [jQuery](https://jquery.com/), for easy AJAX requests, and with [Vue.js](https://vuejs.org/) for easy reactive client-side templating. The dynamic components communicate with the backend at https://backend.borisfx.com/, whose source is in the repo [boris-fx/backend](https://github.com/boris-fx/backend).

#### Account

The login pages are in `/content/account`. The pages make calls to https://backend.borisfx.com/ to perform tasks such as signup, login, email verification, and password reset. Authentication information (email/password) is stored as a cookie with the key `bfx-user` using the [js-cookie](https://github.com/js-cookie/js-cookie) library.

The `/account` page is not in the content directory, it is found at `/layouts/section/account.html` because of Hugo's rules for "list" vs "single" content.

#### Video Gallery

The video gallery, which is used on the videos page and for the effects gallery on each product page, is defined in `/layouts/partials/video-gallery.html`. It expects a JavaScript global variable `videos` to be set to an array of video objects with a schema as constructed in `/layouts/section/videos.html`.

### Forestry

This repository can be edited directly on GitHub, but for a more intuitive WYSIWYG experience developers and content editors can use [Forestry](https://forestry.io). Forestry provides a UI in the style of WordPress that links directly to GitHub, so all changes appear as Git commits attributable to the user who created them. For a guide on how to use Forestry to edit content, see the documentation for content editors [here](../editors/).

The Forestry project `borisfx` is owned by an account under the email _itmanager@borisfx.com_. Forestry is connected to this repository through the _itmanager@borisfx.com_ GitHub account.

### Netlify

The production site is hosted by the Netlify CDN. Netlify was chosen because it hooks into GitHub and automatically runs a Hugo build and deploys the result to the CDN. The Netlify project is called `borisfx` and there is an _itmanager@borisfx.com_ account that owns it. In AWS Route 53 there is a CNAME from `borisfx.com` to `borisfx.netlify.com`. Netlify automatically generates SSL certificates for any domains pointing to it using [Let's Encrypt](https://letsencrypt.org/).

As of this writing, the Netlify project is configured to use Hugo 0.18 in the `netlify/build` container by running the command `hugo_0.18` within it.

## Common Tasks

Below are instructions on how to perform a number of common tasks.

### Editing the homepage

The homepage is not found in the `/content` folder, it is built from a template found at `/layouts/index.html`. It defines a block "content" so it inherits from the `/layouts/_default/baseof.html` template.

### Changing menu items

The menu items are defined in `/data/menus.yaml`. Menu names `header` and `footer` are at the top level, containing an array of menu items with keys `title`, `url`, and `subitems`. Each subitem follows the same schema. The `/layouts/_default/baseof.html` template reads in the menu data via the Go template call `$.Site.Data.menus` and builds the HTML for the header and footer menus accordingly.

### Editing `static/index.scss`

All styles for the site are in the file `static/index.scss`, which is written in [Sass](http://sass-lang.com/). When you make changes, you need to manually recompile the Sass into CSS to the file `static/index.css`. I recommend doing this with the Sass compiler [Wellington](https://github.com/wellington/wellington). First, install it with Homebrew (if on macOS): `brew install wellington`. Then, to compile:

```
wt compile static/index.scss > static/index.css
```

If you want to run Wellington in the background as you make multiple edits locally, you can run:

```
wt watch static/index.scss -b static/
```

The CSS file `static/index.css` is checked into Git, not generated automatically at build time. If you push changes to `static/index.scss` but leave `static/index.css` unmodified you won't see your changes.

### Redirects

Netlify supports redirects specified in the file `/static/_redirects`. For example, we use the line `/blogs/* /:splat` to redirect all sections from the former Shopify site to the current site. For more documentation on Netlify redirects, [click here](https://www.netlify.com/docs/redirects/).

Hugo also has support for generating aliases, but we do not currently use this feature. For information, [click here](https://gohugo.io/extras/aliases/).

### Dev/Prod Parity

Netlify's builds of the site are done in the Docker container `netlify/build` which is available publicly for testing. To run it on your local machine, make sure you have Docker installed, then run:

```
docker pull netlify/build
docker run --rm -it -v $PWD:/opt/repo netlify/build /bin/bash -c 'build hugo_0.18'
```

This will build to `/public` in your project directory, and you can inspect the contents as it will be built by Netlify.

You can also have the container run a development server like so:

```
docker run --rm -it -v $PWD:/opt/repo -p 8080:8080 netlify/build /bin/bash -c 'build hugo_0.18 server -p 8080 --watch'
```

### Windows 7/8

1. Install the latest Oracle VirtualBox, don't create any VMs.
2. Install the latest Docker Toolbox (don't forget to untick VirtualBox installation; Kitematic GUI is not needed either).
3. Create a virtual machine to run Docker containers (assuming that "I:\do\web" is the site sources root directory):
   ```
   docker-machine.exe create --virtualbox-memory "8192" --virtualbox-cpu-count "-1" --virtualbox-share-folder "I:\do\web":/home/docker/web -- default
   ```
   You might wish to use more conservative values but giving the VM only 1024 MiB of RAM (the default value) will definitely cause Hugo dying with exit code 137 when building the site.
4. Prepare a `Docker client` CMD/PowerShell shortcut with settings outlined by output of `docker-machine.exe env default` (or use the `Docker Quickstart Terminal` Start Menu shortcut to `bash` but beware it has some paths conversion issues).
5. Run `docker build -t web-master:latest "I:\do\web"` -- it should succeed after consuming up to 3 GiB in `%USERPROFILE%\.docker\machine\machines\default\`.
6. Start Hugo in a container (2323 is the arbitrary port number used when building the Docker image, see `I:\do\web\Dockerfile`, you may choose a different local port):
   ```
   docker run --interactive --tty --name "web-master" --volume /home/docker/web:/app --workdir /app --publish 2323:2323 -- "web-master:latest"
   ```
   If all web site content is ok, it displays `Building sites` for a couple of minutes, then starts serving the content available at e.g. `http://192.168.99.100:2323`. The IP address might differ, you can determine yours by running
   ```
   docker-machine.exe inspect default | find.exe "IPAddress"
   ```
7. Stop the server (and the container) by `Ctrl+C`, make your changes to templates/scripts/..., start the container again by
   ```
   docker container start --interactive web-master
   ```
8. If not satisfied, go to item 7.

#### Known issues:
* For unknown reasons, when requesting by HTTPS the SSL connection fails.
* Some template-driven content is served incorrectly, e.g. http://192.168.99.100:2323/api/1/downloads gives 13-byte empty page:
  ```
  <pre>
  </pre>
  ```
