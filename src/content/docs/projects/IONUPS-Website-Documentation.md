---
title: IONUPS Website Documentation
---

IONUPS Website Documentation

1. Custom content
2. IP location
3. Get a quote
4. eSurety
5. Others
6. Make Live

Changelog

Name

Email

Comments

Date

Stephen David

stephen\@therefinery.com.au

Start Documentation

17/05/2023

# 1. Custom Content

The custom content in IONUPS are mainly the products, runtime calculator, and UPS selector. Please see the comments on the JavaScript files to see what each function does.

See below:

### ContactUsLocation and DistributorList

* Uses the GoogleMapsAPI to check the nearest distributor/reseller. It mainly composes of the php, js, and SilverStripe bootstrap template

### ProductConfigurator and prod\_configurator.js

* The JS file is mainly used here for conditions and checks to see which items are connected as well as which items can be clicked

### Products

* This is where all the products for ION UPS lies

### RuntimeCalculator

* The RuntimeCalculator is the graph for each UPS selector. The JS file in it stores the Graph.js files for each one.
* The UPSSelector is the element where customers can check the load of every UPS altogether. They can also print them in a pdf format.

Most of the function description will be in the comments section of each JavaScript function describing what it does and what it should spit out.

# 2. Others

## a. Repositories.

* Master (live site)
* Dev (dev site)

# 3. Make Live

To make live follow the next steps:

Step 1: Make sure the cms blocks are the same in the live and in the dev.

Step 1.1: To do this, best is to make sure the database are properly imported from the dev site ot the live site

Step 2: Compare dev branch and master to know what files have changed and if possible copy one by one to avoid mistakes. Some of the files you must copy are:

* JS / CSS files
* eSurety folder in mysite/
* PageController.php
* PortalNotificationsColumn.php
* PortalNavBlock.php
* templates/includes/esurety

Step 3: dev/build?flush=all

Step 4: Test
