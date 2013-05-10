# Shiro Class #

This is a simple implementation of classical style inheritance in javascript, based upon backbone inheritance model and John Resig simple inheritance model. It supports extending basic javascript types like Object, Array, String... In addition it supports automatic attribute linking with the instance object.

It is aimed to be lightweight and independent of big libraries. The only dependicy it requires is **underscore.js**, but it is planned to be removed in future versions.

## Method reference ##
...

## Some Examples ##

```javascript
// creating an Animal class
var Animal = Object.extend({
    run: function() {
        console.log('running with speed', this.speed, 'km/h' );
    }
});

// creating a Dog class that extends the class Animal
var Dog = Animal.extend({
    init: function() {
        console.log('creating a new dog named', this.name );
    },
    
    speak: function() {
        console.log('wuf wuf');
    }
});

// example of aliasing
Dog.alias('speak', ['bark', 'beFunny'] );


var mike = new Dog({speed: 5, name: 'mike'})

mike.speak(); // prints out 'wuf wuf'
mike.bark();  // is the same thing as the above call, prints out 'wuf wuf'
