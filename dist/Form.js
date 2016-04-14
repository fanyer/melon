/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","./Validator","./babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("./Validator"),require("./babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.Validator,e.babelHelpers),e.Form=r.exports}}(this,function(exports,e,t,r){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var i=r.interopRequireDefault(e),o=r.interopRequireDefault(t),n=function(e){function t(i){r.classCallCheck(this,t);var o=r.possibleConstructorReturn(this,e.call(this,i));return o.fields=[],o.state={},o.addField=o.addField.bind(o),o.removeField=o.removeField.bind(o),o}return r.inherits(t,e),t.prototype.getChildContext=function(){return{pointer:"/",attachForm:this.addField,detachForm:this.removeField,validator:this.props.validator}},t.prototype.componentWillUnmount=function(){this.fields.length=0,this.fields=null},t.prototype.addField=function(e){this.fields.push(e)},t.prototype.removeField=function(e){var t=this.fields;if(t)this.fields=this.fields.filter(function(t){return t!==e})},t.prototype.isValidFormField=function(e){var t=e.getValue(),r=e.pointer,i=e.props,o=i.name,n=i.disabled;return o&&!n&&null!=t&&r&&0===r.lastIndexOf("/")},t.prototype.getData=function(){var e=this;return this.fields.reduce(function(t,r){if(e.isValidFormField(r))t[r.props.name]=r.getValue();return t},{})},t.prototype.validate=function(){return this.checkValidity().isValid},t.prototype.checkValidity=function(){var e=this;return this.fields.reduce(function(t,r){if(!e.isValidFormField(r))return t;var i=r.getValue(),o=r.validate(i);return{isValid:t.isValid&&o.isValid(),errors:[].concat(t.errors,o.states.filter(function(e){return!e.isValid}))}},{isValid:!0,errors:[]})},t.prototype.render=function(){var e=this,t=this.props,o=t.noValidate,n=t.onSubmit,a=r.objectWithoutProperties(t,["noValidate","onSubmit"]);return i["default"].createElement("form",r["extends"]({},a,{onSubmit:function(t){if(!o)if(!e.validate())return void t.preventDefault();if(n)t.data=e.getData(),n(t)}}))},t}(e.Component);exports["default"]=n,n.displayName="Form",n.propTypes={onSumbit:e.PropTypes.func,target:e.PropTypes.string,action:e.PropTypes.string,method:e.PropTypes.oneOf(["POST","GET"]),validator:e.PropTypes.shape({validate:e.PropTypes.func.isRequired})},n.defaultProps={validator:o["default"]},n.childContextTypes={attachForm:e.PropTypes.func,detachForm:e.PropTypes.func,validator:e.PropTypes.shape({validate:e.PropTypes.func.isRequired}),pointer:e.PropTypes.string.isRequired}});