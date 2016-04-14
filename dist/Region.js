/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","./region/Selector","./region/Area","./region/helper","./InputComponent","./common/util/cxBuilder","./babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("./region/Selector"),require("./region/Area"),require("./region/helper"),require("./InputComponent"),require("./common/util/cxBuilder"),require("./babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.Selector,e.Area,e.helper,e.InputComponent,e.cxBuilder,e.babelHelpers),e.Region=r.exports}}(this,function(exports,e,t,r,i,o,n,a){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var s=a.interopRequireDefault(e),l=a.interopRequireDefault(t),p=a.interopRequireDefault(r),u=a.interopRequireWildcard(i),d=a.interopRequireDefault(o),c=n.create("Region"),f=function(e){function t(r,i){a.classCallCheck(this,t);var o=a.possibleConstructorReturn(this,e.call(this,r,i));return o.state=a["extends"]({},o.state,{datasource:o.props.datasource}),o.onChange=o.onChange.bind(o),o.onSelectorChange=o.onSelectorChange.bind(o),o}return a.inherits(t,e),t.prototype.onChange=function(t){e.prototype.onChange.call(this,{type:"change",target:this,value:this.stringifyValue(t)})},t.prototype.onAreaChange=function(e,t,r){var i=r.data,o=this.state.datasource;u.isAllSelected(i),o[t].children[e]=i,u.isAllSelected(o[t]),this.setState({datasource:o},function(){this.onChange(o)})},t.prototype.onSelectorChange=function(e,t){var r=t.value,i=this.state.datasource;u[r?"selectAll":"cancelAll"](i[e]),this.setState({datasource:i},function(){this.onChange(i)})},t.prototype.parseValue=function(e){return e=e.split(","),this.props.datasource.map(u.parse.bind(this,e))},t.prototype.stringifyValue=function(e){var t=this;return e?e.reduce(function(){return t.format.apply(t,arguments)},[]).join(","):""},t.prototype.format=function(e,t,r){var i=this;if(t.selected)e.push(t.id);return t.children?t.children.reduce(function(){return i.format.apply(i,arguments)},e):e},t.prototype.renderCountry=function(e,t){var r=this;return s["default"].createElement("div",{className:c().part("country").build(),key:t},s["default"].createElement("h1",null,s["default"].createElement(l["default"],{label:e.text,id:e.id,index:t,checked:e.selected,onChange:function(e){r.onSelectorChange(t,e)}})),this.renderArea(e.children,t))},t.prototype.renderArea=function(e,t){var r=this;return Array.isArray(e)&&e.length>0?s["default"].createElement("ul",null,e.map(function(e,i){return s["default"].createElement(p["default"],{key:i,variants:i%2?["even"]:[],datasource:e,onChange:function(e){r.onAreaChange(i,t,e)}})})):null},t.prototype.render=function(){var e=this,t=this.state.datasource;return s["default"].createElement("div",{className:c(this.props).build()},t.map(function(){return e.renderCountry.apply(e,arguments)}))},t}(d["default"]);exports["default"]=f,f.defaultProps=a["extends"]({},d["default"].defaultProps,{datasource:[]}),f.propTypes=a["extends"]({},d["default"].propTypes,{selected:e.PropTypes.bool,datasource:e.PropTypes.arrayOf(e.PropTypes.object)})});