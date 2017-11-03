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
        
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;        

        const client = new internal.ApiClient();
        client.enableCookies = true;
        client.basePath = apiUrl;
        this.client = client;
        
        this.api = new internal.StatisticsApi(client);
        this.cookieStore = client.agent.jar;
        this.notifications = new Notifications(apiKey, `${apiUrl}/notifications`);
    }
    
    
    initialize(token) {
        logger.debug(`Initializing: ${token}`);
        
        this.client.defaultHeaders = {
            'x-api-key': this.apiKey,
            Authorization: `Bearer ${token}`
        };
        
        const serviceChannel = '/statistics/v3/service';
        const valuesChannel = '/statistics/v3/values';
        const channels = [
          serviceChannel,
          valuesChannel
        ];

        this.notifications.on(serviceChannel, data => this.emit('ServiceChange', data));
        this.notifications.on(valuesChannel, data => this.emit('Values', data));
        
        return this.notifications.initialize(token, channels, this.cookieStore).then(() => this);
    }
    
    deleteSubsciption(id) {
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
