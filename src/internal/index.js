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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponse', 'model/ApiResponseStatus', 'model/PeekedStatistic', 'model/PeekedStatisticResponse', 'model/PeekedStatisticValue', 'model/PeekedStatistics', 'model/PeekedStatisticsResponse', 'model/StatisticData', 'model/StatisticDataResponse', 'model/StatisticValue', 'api/NotificationsApi', 'api/StatisticsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ApiResponse'), require('./model/ApiResponseStatus'), require('./model/PeekedStatistic'), require('./model/PeekedStatisticResponse'), require('./model/PeekedStatisticValue'), require('./model/PeekedStatistics'), require('./model/PeekedStatisticsResponse'), require('./model/StatisticData'), require('./model/StatisticDataResponse'), require('./model/StatisticValue'), require('./api/NotificationsApi'), require('./api/StatisticsApi'));
  }
}(function(ApiClient, ApiResponse, ApiResponseStatus, PeekedStatistic, PeekedStatisticResponse, PeekedStatisticValue, PeekedStatistics, PeekedStatisticsResponse, StatisticData, StatisticDataResponse, StatisticValue, NotificationsApi, StatisticsApi) {
  'use strict';

  /**
   * Statistics_Service.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var StatisticsService = require('index'); // See note below*.
   * var xxxSvc = new StatisticsService.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new StatisticsService.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new StatisticsService.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new StatisticsService.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 9.0.000.00.dev
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ApiResponse model constructor.
     * @property {module:model/ApiResponse}
     */
    ApiResponse: ApiResponse,
    /**
     * The ApiResponseStatus model constructor.
     * @property {module:model/ApiResponseStatus}
     */
    ApiResponseStatus: ApiResponseStatus,
    /**
     * The PeekedStatistic model constructor.
     * @property {module:model/PeekedStatistic}
     */
    PeekedStatistic: PeekedStatistic,
    /**
     * The PeekedStatisticResponse model constructor.
     * @property {module:model/PeekedStatisticResponse}
     */
    PeekedStatisticResponse: PeekedStatisticResponse,
    /**
     * The PeekedStatisticValue model constructor.
     * @property {module:model/PeekedStatisticValue}
     */
    PeekedStatisticValue: PeekedStatisticValue,
    /**
     * The PeekedStatistics model constructor.
     * @property {module:model/PeekedStatistics}
     */
    PeekedStatistics: PeekedStatistics,
    /**
     * The PeekedStatisticsResponse model constructor.
     * @property {module:model/PeekedStatisticsResponse}
     */
    PeekedStatisticsResponse: PeekedStatisticsResponse,
    /**
     * The StatisticData model constructor.
     * @property {module:model/StatisticData}
     */
    StatisticData: StatisticData,
    /**
     * The StatisticDataResponse model constructor.
     * @property {module:model/StatisticDataResponse}
     */
    StatisticDataResponse: StatisticDataResponse,
    /**
     * The StatisticValue model constructor.
     * @property {module:model/StatisticValue}
     */
    StatisticValue: StatisticValue,
    /**
     * The NotificationsApi service constructor.
     * @property {module:api/NotificationsApi}
     */
    NotificationsApi: NotificationsApi,
    /**
     * The StatisticsApi service constructor.
     * @property {module:api/StatisticsApi}
     */
    StatisticsApi: StatisticsApi
  };

  return exports;
}));
