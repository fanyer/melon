/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","../Icon","./Column","../babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("../Icon"),require("./Column"),require("../babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.Icon,e.Column,e.babelHelpers),e.SelectorColumn=r.exports}}(this,function(exports,e,t,r,n){"use strict";function i(e){return null}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=i;var o=n.interopRequireDefault(e),a=n.interopRequireDefault(t),s=n.interopRequireDefault(r);i.displayName="TableSelectorColumn",i.icons={radio:{checked:"radio-button-checked",unchecked:"radio-button-unchecked"},checkbox:{checked:"check-box",unchecked:"check-box-outline-blank"}},i.getIcon=function(e,t){var r=i.icons[e?"checkbox":"radio"];return r[t?"checked":"unchecked"]},i.cellRenderer=function(e){var t=e.part,r=e.columnData,n=e.rowIndex,s=r.multiple;if(!s&&"body"!==t)return null;var l="body"===t?r.isSelected(n):r.isAllSelected();return o["default"].createElement(a["default"],{onClick:i.onCellClick.bind(null,e),icon:i.getIcon(s,l),states:{selected:l},variants:["table-selector"]})},i.onCellClick=function(e){var t=e.part,r=e.rowIndex,n=e.columnData,i=n["body"===t?"onSelect":"onSelectAll"];if("function"==typeof i)i(r)},i.propTypes=n["extends"]({},s["default"].propTypes,{isSelected:e.PropTypes.func.isRequired,isAllSelected:e.PropTypes.func.isRequired,onSelect:e.PropTypes.func,onSelectAll:e.PropTypes.func,name:e.PropTypes.string}),i.defaultProps=n["extends"]({},s["default"].defaultProps,{width:66,cellRenderer:i.cellRenderer,headerRenderer:i.headerRenderer,footerRenderer:i.footerRenderer,align:"center",dataKey:"",multiple:!1}),i._TABLE_COMPONENT_="COLUMN"});