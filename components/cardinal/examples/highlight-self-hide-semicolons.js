 /*
  * This file will highlight itself using a custom theme when run via: "node highlight-self-hide-semicolons"
  * The custom theme highlights semicolons as 'black', thus hiding them.
  */
'use strict'

var cardinal = require('..')
var hideSemicolonsTheme = require('../themes/hide-semicolons')

function highlight() {
  // Using the synchronous highlightFileSync()
  // For asynchronous highlighting use: highlightFile() - see highlight-self.js

  try {
    var highlighted = cardinal.highlightFileSync(__filename, {theme: hideSemicolonsTheme})
    console.log(highlighted)
  } catch (err) {
    console.error(err)
  }
}

highlight()
