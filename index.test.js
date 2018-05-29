const parse = require('./index')

const testData = [{
  input: "Johann Heinrich Füssli was born in Zürich, Switzerland.",
  expected: [{
    "ngram": "Johann Heinrich Füssli",
    "value": {
      "id": "John Henry Fuseli",
      "label": {
        "en": "John Henry Fuseli"
      },
      "nationality": [
        "Swiss",
        "British"
      ],
      "technique": [
        "Painter"
      ],
      "aliases": {
        "de": [
          "Johann Heinrich Füssli",
          "Heinrich Füssli",
        ],
        "en": [
          "John Henry Fuseli",
          "Henry Fuseli",
        ]
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 0,
      "begin": 0,
      "end": 22
    }
  }]
}, {
  input: "Marco Bagnoli is an Italian installation artist.",
  expected: [{
    "ngram": "Marco Bagnoli",
    "value": {
      "id": "Marco Bagnoli",
      "label": {
        "en": "Marco Bagnoli"
      },
      "nationality": [
        "Italian"
      ],
      "technique": [
        "Installation"
      ],
      "aliases":  {
        "en": [ "Marco Bagnoli" ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 0,
      "begin": 0,
      "end": 13
    }
  }]
}]

test('extract artists', () => Promise.all(
  testData.map(async ({ input, expected }) => expect(await parse(input)).toEqual(expected))
))