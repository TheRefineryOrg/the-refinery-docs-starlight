---
title: MBIB Website Documentation
---

MBIB Website Documentation

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

Henry Salas

[henry@therefinery.com.au](mailto:henry@therefinery.com.au)

Initial set up

29/04/2022

Henry Salas

henry\@therefinery.com.au

Update esurety new classes

29/09/2022

Henry Salas

henry\@therefinery.com.au

Update formatting and temporary storage

30/09/2022

Stephen David

stephen\@therefinery.com.au

Update documentation

11/05/2023

#

# 1. Custom Content

The custom content module controls the way the site displays data in the front end based on the user’s state.

A few classes in the framework have been modify to make this happen. Usually work with grids.

See below:

## a. States locator

Each of the classes listed above have the following script within:

$state = "";

       if (isset($GLOBALS\['state'])) {

           $state = $GLOBALS\['state'];

       } else if(isset($\_GET\['state'])) {

           $state = $\_GET\['state'];

           GetCookiesCustom::SetCookies($state);

       } else if (isset($\_COOKIE\['state'])) {

           $state = $\_COOKIE\['state'];

       } else {

           $state = (new IP)->get\_client\_state();

           if (!isset($state)) {

               $state = "VIC";

           }

       }

This will get the state based on the user’s location.

## b. Points System

The points system will find the data that should be shown in the front end based on the state.

For instance:

This grid should display only 1 column 

If the user is in VIC then it will go through all the columns and give 2 points to the ones that match the same state. At the end of the loop the ones that have more points will be display on the screen,

The code for this looks similar to this in grid classes or its extensions.

if ($row2\[$state] == 1) {

                           $points = $points + 2;

                       } else {

                           $points = $points - 10;

                       }

# 2. IP location

The IP Location uses a third party script called [https://pro.ip-api.com](https://www.google.com/url?q=https://pro.ip-api.com\&sa=D\&source=editors\&ust=1712745658012666\&usg=AOvVaw0-homP_7PKnAJZ-K6SvHm4) The API key is located in the back end of the website under settings.

The class responsible for this is called IP.php located under mysite/code

This third party library is the most accurate as per 2019. It locates accurately the state per IP of the user.

This class is used in conjunction with the custom content.

# 3. Get a quote

The Get a quote page is a module of its own for its complexity in the back end and front end.

It has been built using Javascript and PHP/CMS config.

These are all the classes PHP responsable for the get a quote. Each of this classes are a section of the get a quote module. This is located in mysite/code

In the CMS the get a quote is located here:

Each of these blocks represent a part of the get a quote module and matches with the classes listed above.

## a. Quote form select:

This is the selector for the type of user. The template that matches this is QuoteFormSelect.ss

        

## b. General Quote:

This form is the default form. Only the details are being created for the front end.

Class GeneralQuote.php is responsible for this under mysite/code

## c. Legal expenses Quote:

Legal expenses insurance form.

Responsable class:

## d. Contract works Quote:

Contract works form, add extra fields.

Responsable class:

## e. Workers Quote:

Workers form, add extra fields.

Responsable class:

## f. Tradies insurance Quote:

Workers form, add extra fields.

Responsable class:

## g. Sender:

The sender sub-module is the one responsible of sending the get a quote form to the right mbib email based on the state. This is located in ContactBlock.php class under module-ss-framework/code

The function responsible for this is:

public function GetAQuoteForm($state) {

If there is an error, it sends to admin for future checks. No error has been sent so far.

# 4. eSurety

[https://esurety.therefinerydesign.com](https://www.google.com/url?q=https://esurety.therefinerydesign.com\&sa=D\&source=editors\&ust=1712745658020537\&usg=AOvVaw3TXBoTS7FHzmY4uxr7v0gP) login: [Resun.Ahmed@gmail.com](mailto:Resun.Ahmed@gmail.com) password: test

eSurety is a complex module that relies on Zoho API. [https://crmsandbox.zoho.com.au/](https://www.google.com/url?q=https://crmsandbox.zoho.com.au/\&sa=D\&source=editors\&ust=1712745658021359\&usg=AOvVaw2zyJ4kUv9Kk4V5J1NU33F8) (login in web hosting spreadsheet)

The eSurety module lives in mysite/code/eSurety\_API

Each of them have been commented to know what they do.

The templates for the front end are organized under mysite/templates/includes as below:

## a. Class eSurety\_API

Core of the eSurety APi, it uses tokens stored in the cms and send to Zoho API to retrieve data

Variables sent to Zoho:

        

$client\_ID = "1000.NQWSQTF4U5HV0SZM18GZJP80IA611C";

       $grant\_type = "refresh\_token";

       $client\_secret = "e53069972de4ada2ce8202182b2de64eeff8bfaa80";

       $refresh\_token = "1000.ce7036a20d20e03a4836d66c395df7c8.5e855ffe839c4115d6b76da6704b3b44";

Data receive from Zoho:

access\_token

The access\_token is needed to get other data such as account details, bond details, contacts, logo, underwriters.

## b. Class eSurety\_Account\_Managers

The account managers class is the first one to be called after successful login. This class will retrieve important tokens of the companies/users.

## c. Class eSurety\_Account

Retrieves basic details of the user and its companies. Edit and save functions are set up here as well.

## d. Class eSurety\_Bonds

Retrieves data for the bonds.

## e. Class eSurety\_Contacts

Retrieves data for the companies.

## f. Class eSurety\_Logo

Retrieves data for the upper bar, logos images specifically. This is no longer needed as ZoHo does not have any logos anymore.

## f. Class eSurety\_Underwriters

Retrieves data of the underwriters for the view bonds view.

## g. Class BondStatus (utils)

Retrieves bond status and matches with front end bond status labels. Some of them are different.

## h. Class GroupedBonds (utils)

Functionality for the eSurety page.

## i. Class Applications

class eSurety\_Applications

In charge of handling all calls to the Zoho Applications module.

## j. Class Billing

class eSurety\_Billing {

In charge of handling all calls to the Zoho Policy module.

This class should receive data from Policy Module and display on the front end - notifications on dashboard.

## k. Class Permissions

class eSurety\_Permission

This class gets the role of the user from ZOHO module and filter the permissions

## k. Class Page Controller

class Page\_Controller

Page Controller is in charged of handling actions in Silverstripe, in other words this class will administer the AJAX calls from JS.

The actions used for eSurety are:

'SaveProfile\_eSurety',

       'SaveCompany\_eSurety',

       'SaveBondApplication\_eSurety',

       'ChangeStatus\_ByBond',

       'Post\_CompanyLogo',

       'SaveCompanyLogo\_eSurety',

       'ChangeStatus\_ExtendBond',

       'ChangeStatus\_Accepted',

       'GetViewBondsApps',

       'GetDataCSV',

Most of them post data to Zoho and get a response to be displayed in the front end.

## n. Create eSurety user

The eSurety user is created by a link created by Ardento. The link has the following syntax:

[https://esurety.therefinerydesign.com/portal?em=henry@therefinery.com.au\&pao=24687000000133001\&u=24687000000985025\&dt=29072022102820](https://www.google.com/url?q=https://esurety.therefinerydesign.com/portal?em%3Dhenry@therefinery.com.au%26pao%3D24687000000133001%26u%3D24687000000985025%26dt%3D29072022102820\&sa=D\&source=editors\&ust=1712745658031132\&usg=AOvVaw3FoVXuTvqTqWiqKKKF3txE)

em: esurety user email

pao: esurety portal access id

u: esurety user id

dt: esurety link expiry date (dd/mm/yyy/hh:mm:ss)

This link will be handled by MemberLoginForm class

class MemberLoginForm extends LoginForm

## l. Temporary storage

class eSuretyTempStorage {

In charge of storing API calls that have been unsuccessful due to Zoho API receiving too many requests.

The unsuccessful API calls will be put in an internal queue created by this class.

They will be released one by one from the queue and sent to Zoho API as soon as possible.

Testing this is extremely difficult but there are a couple of instances you can see how this should work. Please refer to class eSurety\_Billing function Get\_Billing()and class eSurety\_Bonds function Get\_Bonds\_Company(

if (isset($response\["error-code"]))

           {

               if ($response\["error-code"] == 506) // max limit api calls per second exceeded

               {

                   $queue = new eSuretyTempStorage();

                   $queue->post($this->API\_URL."((Company.id:equals:".$this->eSurety\_Company\_Selected\_ID."))");

               }

           }

if (isset($response\["error-code"]))

           {

               if ($response\["error-code"] == 506) // max limit api calls per second exceeded

               {

                   $queue = new eSuretyTempStorage();

                   $queue->post($this->API\_URL."/search?criteria=(".$criteria.")");

               }

           }

 

## o. Wordrive

Refer to class WorkDrive\_Access\_Token

This class manages the creation of the access token, this access token must be different than the esurety access token and is used to communicate with GET/POST APIs for workdrive API

class WorkDrive\_Operations

This class managesall the operations GET/POST for workdrive API

# 5. Others

## a. Repositories.

The main branches for this site are basically two:

* Master (live site)
* eSurety (esruety dev site)

Other branches that are still floating around should merge with master.

The eSurety branch is quite complex as the DOCKER virtual machine has been added here. This is to make PHP5.3 builds work on localhosts (make dev life easier). The structure of the site has changed for this branch and when ready to make live it should be merged carefully.

# 6. Make Live

eSurety platform depends mostly on back end code PHP and front end templates and JavaScript. There are already items created in the CMS of the live MBIB.com.au.

To make live follow the next steps:

Step 1: Make sure the cms blocks are the same in the live and in the dev.

Step 2: Compare esurety branch and master to know what files have changed and if possible copy one by one to avoid mistakes. Some of the files you must copy are:

* JS / CSS files
* eSurety folder in mysite/
* PageController.php
* PortalNotificationsColumn.php
* PortalNavBlock.php
* templates/includes/esurety

Step 3: dev/build?flush=all

Step 4: Test
