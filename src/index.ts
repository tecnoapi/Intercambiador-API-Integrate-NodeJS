

class ApiIntercambiador {

    APP_URL_SANDBOX = "sandbox.apiplataforma.online";
    APP_URL_PRO = "intercam.apiplataforma.online";
    token = '';
    url = 'http://localhost:3000';

    constructor(token, sandbox = null){
        this.token = token;
        if(sandbox){
            this.url = this.APP_URL_SANDBOX;
        } else {
            this.url = this.APP_URL_PRO;
        }
    }
    getProperties() {
        const that = this;
        var request = require('request');
        const options = {
            'method': 'GET',
            'url': this.url+'/api-intercambiador',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.token
            }
        }

        return new Promise(function(resolve) { 
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                //console.log(response.body);
                resolve(response.body);
            });
        });
    }
    addProperty(array_data) {
        const that = this;
        var request = require('request');
        var options = {
          'method': 'POST',
          'url': this.url+'/properties',
          'headers': {
            'Content-Type': 'application/json',
            'x-access-token': this.token
          },
          body: JSON.stringify(array_data)
        
        };
        return new Promise(function(resolve) { 
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                //console.log(response.body);
                resolve(response.body);
            });
        });
    }
    updateProperty(array_data) {
        const that = this;
        var request = require('request');
        var options = {
          'method': 'PUT',
          'url': this.url+'/properties',
          'headers': {
            'Content-Type': 'application/json',
            'x-access-token': this.token
          },
          body: JSON.stringify(array_data)
        
        };
        return new Promise(function(resolve) { 
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                //console.log(response.body);
                resolve(response.body);
            });
        });
    }
    removeProperty(array_data) {
        const that = this;
        var request = require('request');
        var options = {
          'method': 'DELETE',
          'url': this.url+'/properties',
          'headers': {
            'Content-Type': 'application/json',
            'x-access-token': this.token
          },
          body: JSON.stringify(array_data)
        
        };
        return new Promise(function(resolve) { 
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                //console.log(response.body);
                resolve(response.body);
            });
        });
    }
}

export default ApiIntercambiador;
function reject(err: any) {
    throw new Error("Function not implemented.");
}

