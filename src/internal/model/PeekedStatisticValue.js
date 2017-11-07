/**
 * Statistics Service
 * Statistics Service
 *
 * OpenAPI spec version: 9.0.000.00.dev
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.StatisticsService) {
      root.StatisticsService = {};
    }
    root.StatisticsService.PeekedStatisticValue = factory(root.StatisticsService.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PeekedStatisticValue model module.
   * @module model/PeekedStatisticValue
   * @version 9.0.000.00.dev
   */

  /**
   * Constructs a new <code>PeekedStatisticValue</code>.
   * @alias module:model/PeekedStatisticValue
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>PeekedStatisticValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeekedStatisticValue} obj Optional instance to populate.
   * @return {module:model/PeekedStatisticValue} The populated <code>PeekedStatisticValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('objectId')) {
        obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
      }
      if (data.hasOwnProperty('objectType')) {
        obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
      }
    }
    return obj;
  }

  /**
   * name of statistic
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Id (in StatServer's terms) of object
   * @member {String} objectId
   */
  exports.prototype['objectId'] = undefined;
  /**
   * Stat type of object
   * @member {String} objectType
   */
  exports.prototype['objectType'] = undefined;
  /**
   * Timestamp when statistic was generated on StatServer
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * The value of statistic. Structure reflects the structure of StatServer message
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));

