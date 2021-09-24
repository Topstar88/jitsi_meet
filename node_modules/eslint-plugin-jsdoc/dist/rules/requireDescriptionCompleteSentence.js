'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _iterateJsdoc = require('../iterateJsdoc');

var _iterateJsdoc2 = _interopRequireDefault(_iterateJsdoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extractParagraphs = function extractParagraphs(text) {
  return text.split(/\n\n/);
};

var extractSentences = function extractSentences(text) {
  return text

  // Remove all {} tags.
  .replace(/\{[\s\S]*?\}\s*/g, '').split(/[.?!:](?:\s+|$)/)

  // Ignore sentences with only whitespaces.
  .filter(function (sentence) {
    return !/^\s*$/.test(sentence);
  })

  // Re-add the dot.
  .map(function (sentence) {
    return sentence + '.';
  });
};

var isNewLinePrecededByAPeriod = function isNewLinePrecededByAPeriod(text) {
  var lastLineEndsSentence = void 0;

  var lines = text.split('\n');

  return !_lodash2.default.some(lines, function (line) {
    if (_lodash2.default.isBoolean(lastLineEndsSentence) && !lastLineEndsSentence && /^[A-Z]/.test(line)) {
      return true;
    }

    lastLineEndsSentence = /[.:?!]$/.test(line);

    return false;
  });
};

var isCapitalized = function isCapitalized(str) {
  return str[0] === str[0].toUpperCase();
};

var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var validateDescription = function validateDescription(description, report, jsdocNode, sourceCode, tag) {
  if (!description) {
    return false;
  }

  var paragraphs = extractParagraphs(description);

  return _lodash2.default.some(paragraphs, function (paragraph) {
    var sentences = extractSentences(paragraph);

    var fix = function fix(fixer) {
      var text = sourceCode.getText(jsdocNode);

      if (!/[.:?!]$/.test(paragraph)) {
        var line = _lodash2.default.last(paragraph.split('\n'));

        text = text.replace(new RegExp(_lodash2.default.escapeRegExp(line) + '$', 'm'), line + '.');
      }

      var _loop = function _loop(sentence) {
        var beginning = sentence.split('\n')[0];

        if (tag) {
          var reg = new RegExp('(@' + _lodash2.default.escapeRegExp(tag) + '.*)' + _lodash2.default.escapeRegExp(beginning));

          text = text.replace(reg, function ($0, $1) {
            return $1 + capitalize(beginning);
          });
        } else {
          text = text.replace(beginning, capitalize(beginning));
        }
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = sentences.filter(function (sentence_) {
          return !isCapitalized(sentence_);
        })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var sentence = _step.value;

          _loop(sentence);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return fixer.replaceText(jsdocNode, text);
    };

    if (_lodash2.default.some(sentences, function (sentence) {
      return !isCapitalized(sentence);
    })) {
      report('Sentence should start with an uppercase character.', fix);
    }

    if (!/[.!?]$/.test(paragraph)) {
      report('Sentence must end with a period.', fix);

      return true;
    }

    if (!isNewLinePrecededByAPeriod(paragraph)) {
      report('A line of text is started with an uppercase character, but preceding line does not end the sentence.');

      return true;
    }

    return false;
  });
};

exports.default = (0, _iterateJsdoc2.default)(function (_ref) {
  var sourceCode = _ref.sourceCode,
      jsdoc = _ref.jsdoc,
      report = _ref.report,
      jsdocNode = _ref.jsdocNode;

  if (validateDescription(jsdoc.description, report, jsdocNode, sourceCode)) {
    return;
  }

  var tags = _lodash2.default.filter(jsdoc.tags, function (tag) {
    return _lodash2.default.includes(['param', 'arg', 'argument', 'returns', 'return'], tag.tag);
  });

  _lodash2.default.some(tags, function (tag) {
    var description = _lodash2.default.trimStart(tag.description, '- ');

    return validateDescription(description, report, jsdocNode, sourceCode, tag.tag);
  });
});
module.exports = exports['default'];
//# sourceMappingURL=requireDescriptionCompleteSentence.js.map