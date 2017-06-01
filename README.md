This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/driftyco/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/driftyco/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic platform add ios
$ ionic run ios
```

Substitute ios for android if not on a Mac.


## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/driftyco/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/driftyco/ionic2-app-base). 
### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic platform add ios
$ ionic run ios
```

Substitute ios for android if not on a Mac.


# Ionic - KarmaJob

## Installation Guide
*Note : Ionic targets iOS and android devices. However, as there's many version, yours mays not works as well. Please refer to the [Offical Github](https://github.com/ionic-team/ionic) for more informations.*

### Requirements
*Important: All the requirements listed bellow need to be installed only once. You don't need to install it if you have already done some android or ios development.*
* [Node.JS](https://nodejs.org/en/)  
For Android :
* [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) (JDK) 8 or Later
* [Android SDK](https://developer.android.com/studio/index.html) 
Please refer to the [Cordova documentation](http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html) in case of trouble.  
For iOS : 
* [XCode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
Then run `xcode-select --install`
* The [deploy tools](https://www.npmjs.com/package/ios-deploy) with the command `npm install -g ios-deploy`  

### Ionic installation  
Simply run `sudo npm install -g ionic`.    

To enable the platform, use the following commands  
`ionic platform add ios`  
or/and  
`ionic platform add android`  

And for testing, use 
`ionic build ios` then `ionic emulate ios`  
and/or  
`ionic build android` then `ionic emulate android`  

If you want to test it as a native app, use  
`ionic run ios`  
and/or  
`ionic run android`  

You can also have access to the app in your browser direcly by using  
`ionic serve`  

If you have any trouble at this point, please refer to the [official documentation](http://ionicframework.com/docs/v1/guide/installation.html)

!!!This documentation has not been tested yet.