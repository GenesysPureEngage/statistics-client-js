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
    define(['ApiClient', 'model/PeekedStatisticValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PeekedStatisticValue'));
  } else {
    // Browser globals (root is window)
    if (!root.StatisticsService) {
      root.StatisticsService = {};
    }
    root.StatisticsService.PeekedStatistics = factory(root.StatisticsService.ApiClient, root.StatisticsService.PeekedStatisticValue);
  }
}(this, function(ApiClient, PeekedStatisticValue) {
  'use strict';




  /**
   * The PeekedStatistics model module.
   * @module model/PeekedStatistics
   * @version 9.0.000.00.dev
   */

  /**
   * Constructs a new <code>PeekedStatistics</code>.
   * @alias module:model/PeekedStatistics
   * @class
   * @param statistics {Array.<module:model/PeekedStatisticValue>} 
   */
  var exports = function(statistics) {
    var _this = this;

    _this['statistics'] = statistics;
  };

  /**
   * Constructs a <code>PeekedStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeekedStatistics} obj Optional instance to populate.
   * @return {module:model/PeekedStatistics} The populated <code>PeekedStatistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = ApiClient.convertToType(data['statistics'], [PeekedStatisticValue]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PeekedStatisticValue>} statistics
   */
  exports.prototype['statistics'] = undefined;



  return exports;
}));


