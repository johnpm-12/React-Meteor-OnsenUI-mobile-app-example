# React-Meteor-OnsenUI-mobile-app-example

barebones mobile app built with ReactJS, Meteor, and OnsenUI

it was created with the following commands:

```bash
meteor create --minimal appname
cd appname
rm client/main.css
rm -rf tests
rm -rf server
meteor remove server-render
meteor npm i react react-dom onsenui react-onsenui
meteor add minimongo react-meteor-data frozeman:persistent-minimongo2
meteor install-sdk android
meteor add-platform android
meteor add cordova:cordova-plugin-splashscreen@5.0.2 cordova:cordova-plugin-statusbar@2.4.2 cordova:cordova-plugin-whitelist@1.3.3
```

then edit package.json to remove references to tests and server and create the app starting from client/main.html and client/main.js

the app uses minimongo (without server-side mongo) for easy built-in persistent app storage with full reactivity (tracker and reactjs)
