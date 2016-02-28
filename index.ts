import testConnection = require("promise-test-connection");
import waitfor = require("waitfor-promise");

import * as Promise from "bluebird";

interface Ioptiontryconnect {
    
            time?: number;
            timeout?: number;
            verbose?: boolean;
        
}

export = function(options?:Ioptiontryconnect) {

    return new Promise(function(resolve, reject) {

        let opt;
        let def:Ioptiontryconnect = {
            time: 5000,
            timeout: 40000,
            verbose: true
        }
        if (!options) {
            opt = def

        } else {
            opt = options

            if (!opt.time) {
                opt.time = def.time;
            }
            if (!opt.timeout) {
                opt.timeout = def.timeout;
            }
            if (!opt.verbose) {
                opt.verbose = def.verbose;
            }
        }


        waitfor.pre(testConnection, opt).then(function(answer) {
            resolve(answer)
        }).catch(function(err) {
            reject('timeout? ' + err)
        })


    })


}