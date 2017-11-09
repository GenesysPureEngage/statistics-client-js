const url = require('url');
const EventEmitter = require('events');
const CookieJar = require('cookiejar').CookieJar;
const logger = require('winston');

const Notifications = require('./notifications');
const internal = require('./internal');

class Statistics extends EventEmitter {

    constructor(apiKey, baseUrl) {
        super();
        
        const apiUrl = `${baseUrl}/statistics/v3`;

        this.SERVICE_CHANGE_EVENT = "ServiceChange";
        this.UPDATES_EVENT = "Updates";

        this.apiKey = apiKey;
        this.apiUrl = apiUrl;        

        const client = new internal.ApiClient();
        client.enableCookies = true;
        client.basePath = apiUrl;
        this.client = client;
        
        this.api = new internal.StatisticsApi(client);
        this.cookieJar = client.agent.jar;
        this.notifications = new Notifications(apiKey, `${apiUrl}/notifications`);
    }
    
    
    initialize(token) {
        logger.debug(`Initializing: ${token}`);
        
        this.client.defaultHeaders = {
            'x-api-key': this.apiKey,
            Authorization: `Bearer ${token}`
        };
        
        const serviceChannel = "/statistics/v3/service";
        const updatesChannel = "/statistics/v3/updates";
        const channels = [
          serviceChannel,
          updatesChannel
        ];

        // emit events, to subscribe them use events.on(EVENT_NAME, (data) => {});
        this.notifications.on(serviceChannel, data => this.emit(this.SERVICE_CHANGE_EVENT, data));
        this.notifications.on(updatesChannel, data => this.emit(this.UPDATES_EVENT, data));
        
        return this.notifications.initialize(token, channels, this.cookieJar).then(() => this);
    }
    
    deleteSubscription(id) {
        return this.api.deleteSubscription(id);
    }
    
    createSubscription(operationId, descriptors = [], verbose = true) {
        const statistics = {
            operationId: operationId,
            data: {
                statistics: descriptors
            }
        };
        
        const opts = {
            verbose: verbose? 'INFO': 'OFF'
        };
        
        return this.api.createSubscriptionUsingPOST(statistics, opts);
    }
    
    peekSubscriptionStats(id, statisticIds = [], verbose = true) {
        const opts = {
            statisticIds: statisticIds,
            verbose: verbose? 'INFO': 'OFF'
        };
        return this.api.peekSubscriptionStats(id, opts);
    }
    
    getStatValue(name, objectId, objectType) {
        return this.api.getStatValue(name, objectId, objectType);
    }
    
    getStatValues(infos = []) {
        const statistics = {
            data: {
                statistics: infos
            }
        };
        
        return this.api.getStatValues(statistics);
    }
    
    destroy() {
        this.notifications.finalize();
    }
}


module.exports = Statistics;
