HookedAZ
===========

This repository holds the source files for the [Cronkite News HookedAZ: Tracking Heroin’s Hold on Arizona][hooked] project, which launched Jan. 13, 2015.

It has been changed from the original site to use the free Classic [Galleria][galleria] theme instead of the premium Twelve theme.

###License
Licensed under [Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/).

###Purpose of open sourcing this project
Having the source files out in the open will allow other people or organizations that want to produce journalism to get a head-start on their own sites and see some practices and methods that have worked well for Cronkite News.

###Reasons for using Jekyll (or any other static site generator)
This project creates static HTML files using [Jekyll][jekyll]. There are four reasons for using a static site generator for a site like this:

1. The site will hold up to high load without requiring any special caching techniques. It's just HTML.
2. Since the site is just static files without a CMS it can sit for years without needing any software updates or security patches, which is important for sites like this that will sit and be useful without content changes for a long time.
3. Since it's all text files controlled by a Git repository, collaboration is made easy.
4. Perhaps most important for a project like this is that stories can be produced extremely quickly. There's no going through a Web interface to produce the stories, just text files. For people comfortable with hand-editing HTML this produces a huge speed-up. Jekyll allows for include files, which allows separation between content and presentation and allows for changing already placed elements—like side images, interactives, etc.—without changing the story page. Huge speed-up during crunch time.

##Technical requirements
This project is built on [Jekyll][jekyll]. If you're not familiar with Jekyll, there will be a learning curve.

To produce the site, run either

```jekyll build --watch```

or

```jekyll serve``` (which will create a Web server on port 4000).

###Installing Jekyll
To work locally or on another server, you'll have to [install Jekyll][install]. This is easiest done with [RVM][rvm] or RBENV, whichever you're most comfortable with.

Once you have RVM installed, get Jekyll with ```gem install jekyll```.

**Note:** Jekyll requires nodejs to be installed, but doesn't require the proper gem. If you get an error about not finding a JavaScript environment when starting Jekyll, you can either install nodejs or ```gem install therubyracer```. Either will work.

##Building pages
The ```_includes``` folder holds HTML fragments for multimedia elements called in from individual stories.

###Galleries
To include a gallery, create a folder for the gallery images in the ```slideshows``` folder. Inside that folder, generate a normal size, thumbnail size and large size of the image.

Thumbnail: 85w
Default: 900w
Full: 1920w

To maintain your sanity, use a good naming scheme. 

In that same folder, create a JSON file with the same name as the folder and put in the specifics for the images.

**NOTE:** JSON is wicked finicky about syntax. If your file doesn't work, visit [jsonlint.com](http://jsonlint.com) and find out what is broken.

Then, still in the same folder, create an ```index.html``` file. Modify an existing file, only changing the name of your folder in the file.

To call in the slideshow from the story, insert this line in the story:

```{% include e-gallery.html uniqueid="heroin-love" %}```

The ```uniqueid``` must be the same name as the folder and the json file.

**NOTE:** The include iframes in the ```index.html``` file you create on the story page. This is to get around a bug in Galleria where captions will repeat if you put more than one slideshow on a single page.

###Other includes
The other existing includes are all in ```_includes``` and their filenames start with "e-". Comments at the top explain how to use them.

###Notes for improvements
The site was created under deadline pressure, so there are many places where the code could/should be refactored and cleaned up.

It also underuses the power of Jekyll's ```_config.yml``` file. For a new site, we highly recommend abstracting out any repeated content into the config file. Any content that repeats on the site, like the project title, should live in ```_config.yml```.

###Image sizes
The site expects certain sizes for images.

Navbar logo: 153 × 28
Hero logo: 547 × 100


Phototron/Jumbotron:
filename-768w
filename-1200w
filename-1600w
filename-2560w

Large Image: 900w

Snowfall video specs:
H.264, 768*432
FPS: 29.97
Data rate: 1.33 Mbits/s

Snowfall image: 750w

Also export to WebM

###Current color scheme
Color template:
maroon: #640527
cream: #e4d4c4
white: #fefefe
grey: #969a9d
orange: #ac4d23

###Have fun!
If you have any questions please feel free to contact <a href="mailto:newsroom@asu.edu">newsroom@asu.edu</a>.

[install]:http://jekyllrb.com/docs/installation/
[rvm]:http://rvm.io/rvm/install
[jekyll]:http://jekyllrb.com/
[hooked]:http://hookedaz.cronkitenewsonline.com
[galleria]:http://galleria.io/