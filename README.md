# Parse Artists

If an artist is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-artists

## Usage

Example:

```javascript
await parse('Johann Heinrich Füssli was born in Zürich, Switzerland.')
```

Output:

```json
[
  {
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
  }
]
```