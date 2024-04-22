---
title: SsangYong Website Documentation
---

# 1. Car Module

## a. Custom Blocks

### Car Price Blocks

* Extended Elemental content class 
  * Accessible through CMS block types
  * Lets you select min and max price for the selected Car model year
  * Not currently used 

### Feature Slider

* Extended Elemental content class 
  * Accessible through CMS block types
  * Not only use for feature but use for accessories and safety

![](</Screen Shot 2024-04-10 at 7.22.28 pm.png>)

Cars tab lets you select a year and model from the car module

![](/image21.png)

Cars tab also lets you order the feature related to the previously selected model/year car. To see this you need to save first. This ordering is for Sliders only.

![](/image20.png)

### Model Walk

* Extended Elemental content class
* Accessible through CMS block types

![](/image10.png)

* Cars tab lets you select car model/year model walk data should be displaying on front end.

![](/image21.png)

* Show customise bar shows a floating bar at the bottom. This data is connected to the selected model/year car.

![](/image12.png)

![](/image8.png)

### Specs Guide

* Extended Elemental content class
* Accessible through CMS block types

![](/image30.png)

* Disregard “Connect data to form.” This is not used currently
* This block acts automatically, there is no need to set up anything
* There is one option to select a default car year to start with but this is not used currently

![](/SsangYong/image26.png)

### Menu Models

* Extended Elemental content class
* Accessible through CMS block types

![](/SsangYong/image17.png)

* This block doesn’t need a setup. It acts automatically.
* It’s currently used in the menu, but it can be put anywhere on the site.

![](/SsangYong/image33.png)

* The cars that are shown in the front end are the active cars in the car module.

![](/SsangYong/image7.png)

## b. Module Tiers

* Core of the car module. Here is a list of classes/templates that make the core of the car module in detail.

### b.1 Low Tier

* Colours

Classes:

* CarColours extends DataObject
* Let’s you add colours per model.
* Fields:

![](/SsangYong/image31.png)

* Accessories

Classes:

* CarsAccessories extends DataObject
* Let’s you add accessories per model.

<!---->

* AccessoriesImages extends DataObject
* Children of CarsAccessories.
* Let’s you add one to many images per accessory

<!---->

* Features

Classes:

* ModelFeatures extends DataObject
* Lets you add normal features per model.

<!---->

* CarsFeatures extends DataObject
* Lets you add variation features per model. (not use for normal features)
* This is only the category i.e. XLV

<!---->

* FeatureVariationFields extends DataObject
* Lets you add variation features per model. (not use for normal features)
* Children of CarsFeatures

<!---->

* FeaturesVariantImages extends DataObject
* Lets you add images per feature variants.

<!---->

* FeaturesVariantionImages extends DataObject
* Let’s you add images per feature.

<!---->

* Safety

Classes:

* CarsSafety extends DataObject
* Lets you add safety features per model.

<!---->

* SafetyImages extends DataObject
* Lets you add images per safety.
* This is only the category i.e. XLV

<!---->

* Variants

Classes:

* CarsVariants extends DataObject
* Not use currently.

### b.2 Middle Tier

* Model

Classes:

* CarsModel extends DataObject
* Lets you add models per year.
* Children of Carsyear class

<!---->

* Year

Classes:

* CarsYear extends DataObject
* Lets you add years per car.
* Children of Cars class.

### b.3 Top Tier

* Accessories Categories

Classes:

* AccessoriesSection extends DataObject
* Lets you categories of accessories. This can be selected in the accessory class itself.

<!---->

* Features Categories

Classes:

* FeaturesSection extends DataObject
* Lets you categories of features. This can be selected in the feature class itself.

<!---->

* Cars

Classes:

* Cars extends DataObject
* Lets you Cars
* Children of Cars Admin class.

<!---->

* Cars Admin

Classes:

* CarsAdmin extends ModelAdmin
* Main Class for the car module
* This is mainly use for the CMS.

## c. Utils

Classes:

* Car Utils
* Main Utils class
* Contains many functions that are called by class in the Car Configurator and the Car module.

# 2. Car Configurator

## a. Configurator

Classes:  

* CarConfigurator extends ElementContent
* Main Class for the car configurator
* It can be used from the CMS.

<!---->

* CarConfig\_SaveData tab shows all the car configurator PDF that has been saved in the database in table view.

<!---->

* Disregard Car Tab (not used at the moment)
* This blocks display the entire car configurator which is a mix of model walk used on Car Module and new configurations.

Functions:

* GetCarData(): Use for the build view in the car configurator, it displays the active cars.
* AccessoriesForm() : Creates the “accessories” button in the grade view
* SaveConfigData() : Creates the “Save Ssangyong” button in the summary view
* GetAccessoriesLiveImages() - ask Stephen
* GetCarsImageViews() - ask Stephen

## b. Save Data - Configurator

Classes:  

* CarConfig\_SaveData extends ElementContent
* Use to store the information of the car config when users save the ssangyong build in the car configurator. Also creates a PDF
* Children of CarConfigurator class

# 3. Dynamic Landing pages

Classes:  

* DynamicParameters extends Base Element
* Accessible through the CMS

<!---->

* Creates a block that can handle url variables through Dynamic Parameters (children)
* I.e. Car and Enquiry are just the categories, not URL parameters

<!---->

* DynamicValues extends DataObject
* Children of DynamicParameters
* This handles each of the URL parameters and display content differently.

<!---->

* DynamicVirtualPages extends ElementVirtual
* Children of DynamicValues
* This handles already existing blocks in the site.

# 4. Sessions

Classes:  

* UniqueSession
* Utils sort of class. This will create a token for the form submission,
* This token is a cookie and is also a counter.
* It stars at 0 and increments every time the same IP sends a for submission
* If the counter is 2 or more than 2, then the new submission is not saved or sent.
* This class was created to help minimize spams

# 5. Landing pages (TB)

Not currently in use.

These are a series of classes that build an entire page.

# 6. Location

This Location finder uses a mix between the Google Maps API and the dealers lat and long located in the Dealers section on the CMS.

Google Maps API details:

```json
Geocoding: 1, 000 requests - $5
Geolocation: 1, 000 requests - $5

```

Each page on the CMS has been set up so it can handle if it should look for the user’s location. “Add Google Maps Script” checkbox does this job.

The location finder is mainly use on Javascript, custom.js under app/js

Here are some functions for reference:

```javascript
function initMap()
```

This starts the map in the dealers page. If the maps are not present then ask the user for the location and save the lat and long in a cookie to visit later. If the location has already been asked in the past, then it just visits the cookie for the lat and long to locate where the user is.

```javascript
function GetCookie() 
```

Get the UserPosition cookie. If exists then it should have the lat and long of the user.

```javascript
function GetDealersLocations(position)
```

Creates the HTML to be inserted in the maps , infowindow, marker, etc.

```javascript
function getDistances(UserLat, UserLong)
```

Get 6 nearest dealers to the position of the user

```javascript
function GetStaticUserLocation()
```

Pop up the box to ask user for the postcode manually, this is called if the user blocks the google maps location.

```javascript
function codeAddress()
```

Using the postcode entered manually by the user, find the dealers near it.

```javascript
function ConfigGeocodeResults(results)
```

Use for the car configurator only. This will parse the postcode in the build view field.

```javascript
function ConfigSetManualPostcode(postalCode, validPostcode)
```

Process when the postcode was entered manually. This just handles messages and alerts on front end.

# 7. Dealers

Classes:  

* Dealers extends Blog
* Main core for the dealers. This is just handle by the CMS.

<!---->

* Dealer extends BlogPost
* Handles each of the dealers, stores information of each dealer.
* Important: Lat and Long must be recorded otherwise the script will fail.

# 8. Tags (dealer reports)

Tags for dealer reports are pushed using Datalayers

The JS function that handles this functionality is

```javascript
function SendFormDataLayer(
  formtype,
  carconfigurator,
  dealer,
  colour,
  model,
  car,
  accessories,
  optionalExtras,
  year,
  names
)

```

Each of the variables that are passed to this function need to have a value. Otherwise it won’t work. If you don’t have a value for a variable you must pass an empty string at least.

Inside the function and in the data layer there are three variables that need to be the same as in Google tag manager.

These are:

```json
'event': 'Forms - dealer reports',
'category': 'Form Submit - dealer reports',
'action': "Submission",

```

As said before, they need to be the same in Google Tag Manager:

If they are not the same, Google tag manager will not recognize this data layer as a tag.

If the above is successful, Google tag manager will send this data to Google analytics to be later processed by Zoho Analytics or any other integration.

For the dealer reports we are also using Zoho CRM. The website form sends data to Zoho CRM to the lead module. This is done in (latest update is in the dev site ssangyong.net.au)

```javascript
class UserDefinedFormController extends PageController
```

The summary for the integrations, tags and dealer reports are as follow:

# 9. Make LIVE

Follow the next steps to make the website live.

## 9.1. Download current live and new live databases in your local computer.

This just to restore data bases if something goes wrong.

## 9.2 Make sure the branch you are working on is “master” and all branches have been merged already to master.

## 9.3 Move directories.

I.e. If the new live is in the dev site. Move all files from /ssangyong.net.au/ to /public\_html/ and vice versa. Make sure you move files without overwriting, this could cause issues. You can achieve this on the Files options in CPanel or you could use FTP. DO NOT move .htaccess and .env

## 9.4 Change all traces of ssangyong.net.au or other to the live site ssangyong.com.au.

Change this in PHP files and Javascript. You can achieve this by searching in VScode for traces of ssangyong.net.au, localhost:8888, staging.ssanyong.com.au. These should be changed to ssangyong.com.au (live domain). For instance:

$site\_url variable should be changed to [https://www.ssanyong.com.au](https://www.google.com/url?q=https://www.ssanyong.com.au\&sa=D\&source=editors\&ust=1712744609019541\&usg=AOvVaw1_pb9iepTLtNfoab6wzLUD).

Make sure these changes are made in the server as well (not just your localhost)

## 9.5 Test all pages and integrations.

Go to each page and make sure nothing has moved. Things to test:

* Pages
* Car configurator / Car module
* Model pages form
* Contact page model forms
* Contact page feedback form
* Footer links
* Menu links
* Nidasu / Zoho / Hubspot integrations
* Desktop/Mobile

# 10. Others

## a. XLV automatic/manual logic

The XLV automatic/manual logic is hardcoded, here is where you should add the new variations if there is a new car model in the future (usually work with Musso ELX)

app/js/ModelWalk.js

function ClickModelWalkExtraFeat(element)

Create the new variation as follows for this functions:

```javascript
if ($(element).attr("id") == "variant-200") {
  manualTransmission = "199";
  manualXLV = "201";
  automaticXLV = "202";
}

```

## b. Special features

Sunroof for Musso 21/22 is a special feature as it should show only if the variation is checked.

app/js/ModelWalk.js

```javascript
function ModelWalk()

  // HARD CODE FOR SUNROOF WHEN MUSSO 2021/2022
  if (document.getElementById("variant-159") != null) {
    if (document.getElementById("variant-159").checked) {
      $("li.secondary-features-moved[featuretitle='Sunroof']").css("display", "block");
    }
  }

```

You must add similar for the new model/car
