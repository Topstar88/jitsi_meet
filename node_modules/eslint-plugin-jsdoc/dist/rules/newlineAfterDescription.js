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
  var jsdoc = _ref.jsdoc,
      report = _ref.report,
      context = _ref.context,
      jsdocNode = _ref.jsdocNode,
      sourceCode = _ref.sourceCode,
      indent = _ref.indent;

  var always = void 0;

  if (!jsdoc.description || !jsdoc.tags.length) {
    return;
  }

  if (_lodash2.default.has(context.options, 0)) {
    always = context.options[0] === 'always';
  } else {
    always = true;
  }

  // The contents of the jsdoc.source and of jsdoc.description is left trimmed.
  // The contents of the jsdoc.description is right trimmed.
  // This gets the text following the description.
  var descriptionEndsWithANewline = _lodash2.default.startsWith(jsdoc.source.slice(jsdoc.description.length), '\n\n');

  if (always) {
    if (!descriptionEndsWithANewline) {
      report('There must be a newline after the description of the JSDoc block.', function (fixer) {
        var sourceLines = sourceCode.getText(jsdocNode).split('\n');
        var lastDescriptionLine = _lodash2.default.findLastIndex(sourceLines, function (line) {
          return _lodash2.default.includes(line, _lodash2.default.last(jsdoc.description.split('\n')));
        });

        // Add the new line
        sourceLines.splice(lastDescriptionLine + 1, 0, indent + ' * ');

        return fixer.replaceText(jsdocNode, sourceLines.join('\n'));
      });
    }
  } else if (descriptionEndsWithANewline) {
    report('There must be no newline after the description of the JSDoc block.', function (fixer) {
      var sourceLines = sourceCode.getText(jsdocNode).split('\n');
      var lastDescriptionLine = _lodash2.default.findLastIndex(sourceLines, function (line) {
        return _lodash2.default.includes(line, _lodash2.default.last(jsdoc.description.split('\n')));
      });

      // Remove the extra line
      sourceLines.splice(lastDescriptionLine + 1, 1);

      return fixer.replaceText(jsdocNode, sourceLines.join('\n'));
    });
  }
});
module.exports = exports['default'];
//# sourceMappingURL=newlineAfterDescription.js.map