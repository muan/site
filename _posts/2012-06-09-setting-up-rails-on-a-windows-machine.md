---
layout: post
title: Installing Ruby on Rails on Windows (+ notes for Heroku)
---

For some reason I can’t find a straightforward and up-to-date version of this, so I just wrote this as I go.

1. [Download and install the latest ruby](http://rubyforge.org/frs/?group_id=167&release_id=5246).
During installation, make sure you tick the option to associate .rb files.

2. [Download and install Rubygems](http://rubyforge.org/frs/?group_id=126&release_id=2471).
Click setup.rb and let it run. Close the window when it says it is successfully installed.

3. [Download DevKit](http://rubyinstaller.org/downloads/). Follow [steps on github](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit) to install it. (Scroll down to installation instructions.)
Steps simplified as following:
    1. Open the compressed file, extract the file to a directory with no spaces, eg: C:\DevKit . (Bad example: C:\Users\Bob\My Documents\)

    2. Open your command prompt, go to the directory you just extracted the files to, eg: C:> cd DevKit, run
    <pre>shell||$ ruby dk.rb init</pre>
    
    3. Go to the DevKit directory from your explorer and open file ‘config.yml’ with a text editor, check if the ruby path is correct. Correct as in, the path exists and it is the correct version of Ruby that you want to use. If you just installed it, there should be only one path so you don’t really need to worry about it. If everything’s good, close the file and carry on. If you changed the path, save, close, and carry on.
    
    4. Now do the actual installation by running 
    <pre>shell||$ ruby dk.rb install</pre>
    
    5. After all has been run, you can now test your installation by installing a gem:
      <pre>shell||$ gem install rdiscount —platform=ruby</pre>
      RDiscount should install correctly and you should see with native extensions in the screen messages. 
      Next run, 
      <pre>shell||$ ruby -rubygems -e “require ‘rdiscount’; puts RDiscount.new(‘**Hello RubyInstaller**’).to_html”</pre>
      to confirm rdiscount is working. 
      Some basic html code should appear on your screen. Something like 
      <pre>
      html||
      &lt;p&gt;&lt;strong&gt;Hello RubyInstaller&lt;/strong&gt;&lt;/p&gt;
      </pre>

4. Use the same command prompt or open the command prompt again(right click to open as administrator if errored) and run 
    <pre>shell||$ gem install rails</pre>
    it will install a bunch of gems (rails and all its dependencies) and might take a while.

5. Install bundler buy running 
    <pre>shell||$ gem install bundler</pre> 
    It’d again install stuff for a while, but there’s nothing to worry about. 

**And you're all set!**

Just go from your command prompt to an ideal directory and run 
<pre>shell||$ rails new [appName]</pre>
change [appName] to a name of your choice to start your very first app on Windows!

This is really not as painful as I’ve heard, and the whole process might not take longer than an hour. (I have done only 2 installation on 2 laptops, the first time did take me a while, but the second time, following my own instruction, it was painless and fast)

---

And with Heroku, it is actually quite easy with [their documentation](https://devcenter.heroku.com/articles/quickstart). Don’t think I need to explain more, just go ahead and follow the instructions.

However, there are a lot of errors for you to find along the path. Here's some of them:

1. Push failed with Heroku: Heroku ignores Windows Gemfile.lock. Go ahead and [delete these lines](http://stackoverflow.com/a/6811013/1388427) to fix it.

2. To set up postgreSQL on heroku, run ([refer to](https://postgres.heroku.com/blog/past/2012/4/26/heroku_postgres_development_plan/)):
    <pre>shell||$ heroku addons:add heroku-postgresql:dev</pre>

3. 500 Internal Server error with Heroku: Could not find a JavaScript runtime. Added these lines to your Gemfile:
    <pre>ruby||group :production do
      gem ‘therubyracer’
    end</pre>
  As I run sqlite on development and PG on production, I put gem ‘pg’ in the group as well. Push, and remember to restart the server.

  * Note that the Ruby Racer DOES NOT run on Windows.

---

Side note: If you run into problems with not being able to run either git/heroku on cmd,
[Here’s the fix for git](http://stackoverflow.com/questions/4492979/git-is-not-recognized-as-an-internal-or-external-command)
For Heroku, shell says “The system cannot find the path specified,” the problem was that I installed Ruby in a unusual path, so I just went into “program files\Heroku\bin\heroku.bat” and edit the ruby path, and it was fixed.

---

**Update: 28 Jan 2013**

Just installed Rails again on my friend’s Windows machine, so I re-wrote some of the instructions, hope it’s a lot clearer now.

I got a new Mac a few month back, life is now a lot easier as a developer. But I cannot say it was painless the first time I set up rails on Mac, perhaps even more painful. The thing that made the difference was that a lot of the gems do not work on Windows, but they do on Mac. So if you’re installing Rails on Windows, you would still run into a lot of problems down the line with gems, it would be a good idea to at least start planning for a Mac. :)