'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Api = _interopDefault(require('musement_api'));
var _ = _interopDefault(require('lodash'));

//import Api from 'imports-loader?define=>false!musement_api'
const api = new Api.EventApi();
console.log(_.sum([1,2,3]));
