/**
 * Statistics Service
 * Statistics Service
 *
 * OpenAPI spec version: 9.0.000.37.638
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
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
    root.StatisticsService.NotificationsApi = factory(root.StatisticsService.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Notifications service.
   * @module api/NotificationsApi
   * @version 9.0.000.37.638
   */

  /**
   * Constructs a new NotificationsApi. 
   * @alias module:api/NotificationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * CometD connect
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_connect) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.connectWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/connect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * CometD connect
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_connect) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.connect = function() {
      return this.connectWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * CometD disconnect
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_disconnect) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.disconnectWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/disconnect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * CometD disconnect
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_disconnect) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.disconnect = function() {
      return this.disconnectWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * CometD handshake
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_handshake) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.handshakeWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/handshake', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * CometD handshake
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_handshake) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.handshake = function() {
      return this.handshakeWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * CometD endpoint
     * CometD endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.notificationsWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * CometD endpoint
     * CometD endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.notifications = function() {
      return this.notificationsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Subscribe to CometD channel notification
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_subscribe) for details.Current channels:  &lt;b&gt;/statistics/v3/service&lt;/b&gt; - information about service state  &lt;b&gt;/statistics/v3/updates&lt;/b&gt; - statistics updates  
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.subscribeWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/subscribe', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Subscribe to CometD channel notification
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_subscribe) for details.Current channels:  &lt;b&gt;/statistics/v3/service&lt;/b&gt; - information about service state  &lt;b&gt;/statistics/v3/updates&lt;/b&gt; - statistics updates  
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.subscribe = function() {
      return this.subscribeWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unsubscribe from CometD channel notification
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_unsubscribe) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.unsubscribeWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/unsubscribe', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Unsubscribe from CometD channel notification
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_unsubscribe) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.unsubscribe = function() {
      return this.unsubscribeWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
