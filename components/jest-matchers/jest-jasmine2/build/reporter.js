/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */
'use strict';











const jasmineRequire = require('../vendor/jasmine-2.5.2.js');
const jasmine = jasmineRequire.core(jasmineRequire);var _require =
require('jest-util');const formatResultsErrors = _require.formatResultsErrors,JasmineFormatter = _require.JasmineFormatter;
















class Jasmine2Reporter {









  constructor(config, environment, testPath) {
    this._formatter = new JasmineFormatter(jasmine, environment, config);
    this._config = config;
    this._testPath = testPath;
    this._testResults = [];
    this._currentSuites = [];
    this._resolve = null;
    this._resultsPromise = new Promise(resolve => this._resolve = resolve);
    this._startTimes = new Map();
  }

  specStarted(spec) {
    this._startTimes.set(spec.id, Date.now());
  }

  specDone(result) {
    this._testResults.push(
    this._extractSpecResults(result, this._currentSuites.slice(0)));

  }

  suiteStarted(suite) {
    this._currentSuites.push(suite.description);
  }

  suiteDone() {
    this._currentSuites.pop();
  }

  jasmineDone() {
    let numFailingTests = 0;
    let numPassingTests = 0;
    let numPendingTests = 0;
    const testResults = this._testResults;
    testResults.forEach(testResult => {
      if (testResult.status === 'failed') {
        numFailingTests++;
      } else if (testResult.status === 'pending') {
        numPendingTests++;
      } else {
        numPassingTests++;
      }
    });

    const testResult = {
      console: null,
      failureMessage: formatResultsErrors(
      testResults,
      this._config,
      this._testPath),

      numFailingTests,
      numPassingTests,
      numPendingTests,
      perfStats: {
        end: 0,
        start: 0 },

      snapshot: {
        added: 0,
        fileDeleted: false,
        matched: 0,
        unchecked: 0,
        unmatched: 0,
        updated: 0 },

      testFilePath: this._testPath,
      testResults };


    this._resolve(testResult);
  }

  getFormatter() {
    return this._formatter;
  }

  getResults() {
    return this._resultsPromise;
  }

  _extractSpecResults(
  specResult,
  ancestorTitles)
  {
    const start = this._startTimes.get(specResult.id);
    const duration = start ? Date.now() - start : undefined;
    const status =
    specResult.status === 'disabled' ? 'pending' : specResult.status;
    const results = {
      ancestorTitles,
      duration,
      failureMessages: [],
      fullName: specResult.fullName,
      numPassingAsserts: 0, // Jasmine2 only returns an array of failed asserts.
      status,
      title: specResult.description };


    specResult.failedExpectations.forEach(failed => {
      let message;
      if (!failed.matcherName && failed.stack) {
        message = failed.stack;
      } else {
        message = this._formatter.formatMatchFailure(failed);
      }
      results.failureMessages.push(message);
    });

    return results;
  }}


module.exports = Jasmine2Reporter;