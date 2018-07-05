/**
 * Statistics Service
 * Statistics Service
 *
 * OpenAPI spec version: 9.0.000.06.459
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorResponse', 'model/PeekedStatistic', 'model/ResponseStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorResponse'), require('./PeekedStatistic'), require('./ResponseStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.StatisticsService) {
      root.StatisticsService = {};
    }
    root.StatisticsService.PeekedStatisticResponse = factory(root.StatisticsService.ApiClient, root.StatisticsService.ErrorResponse, root.StatisticsService.PeekedStatistic, root.StatisticsService.ResponseStatus);
  }
}(this, function(ApiClient, ErrorResponse, PeekedStatistic, ResponseStatus) {
  'use strict';




  /**
   * The PeekedStatisticResponse model module.
   * @module model/PeekedStatisticResponse
   * @version 9.0.000.06.459
   */

  /**
   * Constructs a new <code>PeekedStatisticResponse</code>.
   * @alias module:model/PeekedStatisticResponse
   * @class
   * @param status {module:model/ResponseStatus} 
   */
  var exports = function(status) {
    var _this = this;




    _this['status'] = status;
  };

  /**
   * Constructs a <code>PeekedStatisticResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeekedStatisticResponse} obj Optional instance to populate.
   * @return {module:model/PeekedStatisticResponse} The populated <code>PeekedStatisticResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = PeekedStatistic.constructFromObject(data['data']);
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
   * @member {module:model/PeekedStatistic} data
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


