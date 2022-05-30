"use strict";
exports.__esModule = true;
var ApiIntercambiador = /** @class */ (function () {
    function ApiIntercambiador(token, sandbox) {
        if (sandbox === void 0) { sandbox = null; }
        this.APP_URL_SANDBOX = "sandbox.apiplataforma.online";
        this.APP_URL_PRO = "intercam.apiplataforma.online";
        this.token = '';
        this.url = 'http://localhost:3000';
        this.token = token;
        if (sandbox) {
            this.url = this.APP_URL_SANDBOX;
        }
        else {
            this.url = this.APP_URL_PRO;
        }
    }
    ApiIntercambiador.prototype.getProperties = function () {
        var that = this;
        var request = require('request');
        var options = {
            'method': 'GET',
            'url': this.url + '/api-intercambiador',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.token
            }
        };
        return new Promise(function (resolve) {
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                //console.log(response.body);
                resolve(response.body);
            });
        });
    };
    ApiIntercambiador.prototype.addProperty = function (array_data) {
        var that = this;
        var request = require('request');
        var options = {
            'method': 'POST',
            'url': this.url + '/properties',
            'headers': {
                'Content-Type': 'application/json',
                'x-access-token': this.token
            },
            body: JSON.stringify(array_data)
        };
        return new Promise(function (resolve) {
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                //console.log(response.body);
                resolve(response.body);
            });
        });
    };
    ApiIntercambiador.prototype.updateProperty = function (array_data) {
        var that = this;
        var request = require('request');
        var options = {
            'method': 'PUT',
            'url': this.url + '/properties',
            'headers': {
                'Content-Type': 'application/json',
                'x-access-token': this.token
            },
            body: JSON.stringify(array_data)
        };
        return new Promise(function (resolve) {
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                //console.log(response.body);
                resolve(response.body);
            });
        });
    };
    ApiIntercambiador.prototype.removeProperty = function (array_data) {
        var that = this;
        var request = require('request');
        var options = {
            'method': 'DELETE',
            'url': this.url + '/properties',
            'headers': {
                'Content-Type': 'application/json',
                'x-access-token': this.token
            },
            body: JSON.stringify(array_data)
        };
        return new Promise(function (resolve) {
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                //console.log(response.body);
                resolve(response.body);
            });
        });
    };
    return ApiIntercambiador;
}());
exports["default"] = ApiIntercambiador;
function reject(err) {
    throw new Error("Function not implemented.");
}
