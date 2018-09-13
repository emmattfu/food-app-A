// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    apiKey: "AIzaSyDcCeQsiLsZrbE_5mDlpxKYr4jw9gPBQIU",
    authDomain: "food2fork-ff1fa.firebaseapp.com",
    databaseURL: "https://food2fork-ff1fa.firebaseio.com",
    projectId: "food2fork-ff1fa",
    storageBucket: "food2fork-ff1fa.appspot.com",
    messagingSenderId: "32831381100"
  },
  apiUrlFood2Fork: "http://food2fork.com/api",
  apiKeyFood2Fork: "56c114c9ee24fd0e851e676502796410",
  proxy: 'https://cors.io/?'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
