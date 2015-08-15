# Dead simple currency formatter

```
var curr = require('curr');

curr(15000.447, {
  symbol: 'руб.',
  decimalSeparator: ',',
  groupingSeparator: ' ',
  decimalPlaces: 2,
  format: '%v %s'
}).val     // '15 000,45 руб.'
```

## License

Boris Okunskiy / ISC

