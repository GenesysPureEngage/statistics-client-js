/**
 * Statistics Service
 * Statistics Service
 *
 * OpenAPI spec version: 9.0.000.06.459
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
    define(['ApiClient', 'model/ErrorResponse', 'model/ResponseStatus', 'model/StatisticData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorResponse'), require('./ResponseStatus'), require('./StatisticData'));
  } else {
    // Browser globals (root is window)
    if (!root.StatisticsService) {
      root.StatisticsService = {};
    }
    root.StatisticsService.StatisticDataResponse = factory(root.StatisticsService.ApiClient, root.StatisticsService.ErrorResponse, root.StatisticsService.ResponseStatus, root.StatisticsService.StatisticData);
  }
}(this, function(ApiClient, ErrorResponse, ResponseStatus, StatisticData) {
  'use strict';




  /**
   * The StatisticDataResponse model module.
   * @module model/StatisticDataResponse
   * @version 9.0.000.06.459
   */

  /**
   * Constructs a new <code>StatisticDataResponse</code>.
   * @alias module:model/StatisticDataResponse
   * @class
   * @param status {module:model/ResponseStatus} 
   */
  var exports = function(status) {
    var _this = this;




    _this['status'] = status;
  };

  /**
   * Constructs a <code>StatisticDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatisticDataResponse} obj Optional instance to populate.
   * @return {module:model/StatisticDataResponse} The populated <code>StatisticDataResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = StatisticData.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorResponse]);
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ResponseStatus.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/StatisticData} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Array.<module:model/ErrorResponse>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {module:model/ResponseStatus} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


