# ![GM-Com](./img/logo.png) @gd-com/utils

Binary serialization helper godot and nodejs !

Written with this [api](http://docs.godotengine.org/en/latest/tutorials/misc/binary_serialization_api.html)

## How to install

`npm install --save @gd-com/utils`


### encode and decode

```javascript
var gdCom = require('gd-com')
var wanted = 'test'

gdCom.encode(wanted).then((encoded) => {
  gdCom.decode(encoded,(decoded) => {
    console.log(decoded)
  })
})
```

## Test

```
git clone git@github.com:gd-com/utils.git gd-com-utils
cd gd-com-utils
npm install or yarn install
npm run lint && npm run test
```

## Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## TODO & CHANGELOG
[CHANGELOG](CHANGELOG.md)

[TODO](TODO.md)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Thanks
* Godot
* Godot France
* GDQuest
* IG-Dev
* **Salsa2k** for the [initial work](https://github.com/salsa2k/godotserver)
