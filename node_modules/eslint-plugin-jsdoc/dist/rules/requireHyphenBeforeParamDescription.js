'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _iterateJsdoc = require('../iterateJsdoc');

var _iterateJsdoc2 = _interopRequireDefault(_iterateJsdoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _iterateJsdoc2.default)(function (_ref) {
  var sourceCode = _ref.sourceCode,
      jsdoc = _ref.jsdoc,
      report = _ref.report,
      jsdocNode = _ref.jsdocNode;

  var jsdocTags = _lodash2.default.filter(jsdoc.tags, {
    tag: 'param'
  });

  _lodash2.default.forEach(jsdocTags, function (jsdocTag) {
    if (jsdocTag.description && !_lodash2.default.startsWith(jsdocTag.description, '-')) {
      report('There must be a hyphen before @param description.', function (fixer) {
        var replacement = sourceCode.getText(jsdocNode).replace(jsdocTag.description, '- ' + jsdocTag.description);

        return fixer.replaceText(jsdocNode, replacement);
      });
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=requireHyphenBeforeParamDescription.js.map