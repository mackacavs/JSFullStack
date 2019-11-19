What is Node?
=================

* Node allows us to run JS on the server
* One of the major advantages of JS is that it using a non-blocking IO model-
  * This means that you don't have to wait for one thing to start until the other thing has finished

How do you install Node?
=================

* Download **node** from nodejs.org
* Confirm that node has been installed by running **node -v** and **npm -v** to confirm you have node and node package manager
  * Node package manager manages the different packages(bundles) you can download to help run you javascript programs

How do you create a node.js project?
=================

* Run **npm init** in your terminal - in the relevant directory
* Go through the options entering in the relevant information as and when it's needed
* A package.json file should have been added to your directory

How do you install a node package?
=================

* Run **npm install --save 'nameOfModule'** in your terminal 
* This will create a node_modules file that will contain all your relevant dependencies

How do you use a node package?
=================

* In your application write the following code (using express as an example)-
  * **const express = require('express)**


