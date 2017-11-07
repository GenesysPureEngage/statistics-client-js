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
    define(['ApiClient', 'model/ApiResponse', 'model/PeekedStatisticResponse', 'model/PeekedStatisticsResponse', 'model/StatisticDataResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/PeekedStatisticResponse'), require('../model/PeekedStatisticsResponse'), require('../model/StatisticDataResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.StatisticsService) {
      root.StatisticsService = {};
    }
    root.StatisticsService.StatisticsApi = factory(root.StatisticsService.ApiClient, root.StatisticsService.ApiResponse, root.StatisticsService.PeekedStatisticResponse, root.StatisticsService.PeekedStatisticsResponse, root.StatisticsService.StatisticDataResponse);
  }
}(this, function(ApiClient, ApiResponse, PeekedStatisticResponse, PeekedStatisticsResponse, StatisticDataResponse) {
  'use strict';

  /**
   * Statistics service.
   * @module api/StatisticsApi
   * @version 9.0.000.00.dev
   */

  /**
   * Constructs a new StatisticsApi. 
   * @alias module:api/StatisticsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Opens the subscription for the specified set of statistics.
     * @param {Object} statistics Definitions of statistics to be monitored
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.verbose Verbose level for response (default to INFO)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StatisticDataResponse} and HTTP response
     */
    this.createSubscriptionUsingPOSTWithHttpInfo = function(statistics, opts) {
      opts = opts || {};
      var postBody = statistics;

      // verify the required parameter 'statistics' is set
      if (statistics === undefined || statistics === null) {
        throw new Error("Missing the required parameter 'statistics' when calling createSubscriptionUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
        'verbose': opts['verbose'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StatisticDataResponse;

      return this.apiClient.callApi(
        '/subscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Opens the subscription for the specified set of statistics.
     * @param {Object} statistics Definitions of statistics to be monitored
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.verbose Verbose level for response (default to INFO)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StatisticDataResponse}
     */
    this.createSubscriptionUsingPOST = function(statistics, opts) {
      return this.createSubscriptionUsingPOSTWithHttpInfo(statistics, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes the specified statistic subscription
     * @param {String} id The id of the subscription to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponse} and HTTP response
     */
    this.deleteSubscriptionWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSubscription");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiResponse;

      return this.apiClient.callApi(
        '/subscriptions/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes the specified statistic subscription
     * @param {String} id The id of the subscription to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponse}
     */
    this.deleteSubscription = function(id) {
      return this.deleteSubscriptionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Peeks the value of specified statistic
     * @param {String} statisticName name of statistic to be peeked
     * @param {String} objectId id of object for which statistic to be peeked
     * @param {String} objectType type of object for which statistic to be peeked
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PeekedStatisticResponse} and HTTP response
     */
    this.getStatValueWithHttpInfo = function(statisticName, objectId, objectType) {
      var postBody = null;

      // verify the required parameter 'statisticName' is set
      if (statisticName === undefined || statisticName === null) {
        throw new Error("Missing the required parameter 'statisticName' when calling getStatValue");
      }

      // verify the required parameter 'objectId' is set
      if (objectId === undefined || objectId === null) {
        throw new Error("Missing the required parameter 'objectId' when calling getStatValue");
      }

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling getStatValue");
      }


      var pathParams = {
        'statisticName': statisticName
      };
      var queryParams = {
        'objectId': objectId,
        'objectType': objectType,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PeekedStatisticResponse;

      return this.apiClient.callApi(
        '/statistic-values/{statisticName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Peeks the value of specified statistic
     * @param {String} statisticName name of statistic to be peeked
     * @param {String} objectId id of object for which statistic to be peeked
     * @param {String} objectType type of object for which statistic to be peeked
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PeekedStatisticResponse}
     */
    this.getStatValue = function(statisticName, objectId, objectType) {
      return this.getStatValueWithHttpInfo(statisticName, objectId, objectType)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Peeks the values of specified statistics
     * @param {Object} statistics A set of definitions for statistics to be peeked
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PeekedStatisticsResponse} and HTTP response
     */
    this.getStatValuesWithHttpInfo = function(statistics) {
      var postBody = statistics;

      // verify the required parameter 'statistics' is set
      if (statistics === undefined || statistics === null) {
        throw new Error("Missing the required parameter 'statistics' when calling getStatValues");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PeekedStatisticsResponse;

      return this.apiClient.callApi(
        '/operations/get-statistic-ex', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Peeks the values of specified statistics
     * @param {Object} statistics A set of definitions for statistics to be peeked
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PeekedStatisticsResponse}
     */
    this.getStatValues = function(statistics) {
      return this.getStatValuesWithHttpInfo(statistics)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Peeks the values of statistics opened inside the specified subscription
     * @param {String} id The id of the subscription to peek
     * @param {Object} opts Optional parameters
     * @param {String} opts.statisticIds The ids of the statistics to peek
     * @param {module:model/String} opts.verbose Verbose level for response (default to INFO)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StatisticDataResponse} and HTTP response
     */
    this.peekSubscriptionStatsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling peekSubscriptionStats");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'statisticIds': opts['statisticIds'],
        'verbose': opts['verbose'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StatisticDataResponse;

      return this.apiClient.callApi(
        '/subscriptions/{id}/statistic-values', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Peeks the values of statistics opened inside the specified subscription
     * @param {String} id The id of the subscription to peek
     * @param {Object} opts Optional parameters
     * @param {String} opts.statisticIds The ids of the statistics to peek
     * @param {module:model/String} opts.verbose Verbose level for response (default to INFO)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StatisticDataResponse}
     */
    this.peekSubscriptionStats = function(id, opts) {
      return this.peekSubscriptionStatsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));