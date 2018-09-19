/**
 * Statistics Service
 * Statistics Service
 *
 * OpenAPI spec version: 9.0.000.17.504
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    root.StatisticsService.PeekedStatistic = factory(root.StatisticsService.ApiClient, root.StatisticsService.PeekedStatisticValue);
  }
}(this, function(ApiClient, PeekedStatisticValue) {
  'use strict';




  /**
   * The PeekedStatistic model module.
   * @module model/PeekedStatistic
   * @version 9.0.000.17.504
   */

  /**
   * Constructs a new <code>PeekedStatistic</code>.
   * @alias module:model/PeekedStatistic
   * @class
   * @param statistic {module:model/PeekedStatisticValue} 
   */
  var exports = function(statistic) {
    var _this = this;

    _this['statistic'] = statistic;
  };

  /**
   * Constructs a <code>PeekedStatistic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeekedStatistic} obj Optional instance to populate.
   * @return {module:model/PeekedStatistic} The populated <code>PeekedStatistic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('statistic')) {
        obj['statistic'] = PeekedStatisticValue.constructFromObject(data['statistic']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PeekedStatisticValue} statistic
   */
  exports.prototype['statistic'] = undefined;



  return exports;
}));


