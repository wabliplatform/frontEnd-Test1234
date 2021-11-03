/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TempApi);
  }
}(this, function(expect, TempApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TempApi.FormApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FormApi', function() {
    describe('createform', function() {
      it('should call createform successfully', function(done) {
        //uncomment below and update the code to test createform
        //instance.createform(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteform', function() {
      it('should call deleteform successfully', function(done) {
        //uncomment below and update the code to test deleteform
        //instance.deleteform(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllform', function() {
      it('should call getAllform successfully', function(done) {
        //uncomment below and update the code to test getAllform
        //instance.getAllform(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getform', function() {
      it('should call getform successfully', function(done) {
        //uncomment below and update the code to test getform
        //instance.getform(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateform', function() {
      it('should call updateform successfully', function(done) {
        //uncomment below and update the code to test updateform
        //instance.updateform(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
