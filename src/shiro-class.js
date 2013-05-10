(function() {

    // Shared empty constructor for parent class creation
    var ctor = function() {};

    // a function that adds attributes to a newly created instance 
    // of our class, it is called before the init method
    // so that the attributes will be accessible in the object's constructor
    var addAttributes = function(attrs) {
        this.attrs = {};
        _.extend(this.attrs, attrs || {} );
    };

    // this function takes the this object which is a function
    // creates a new instance of it and then extending it with
    // the things in the classDefinition
    // essentialy mimicking the classical inheritance model from languages
    // like Java, Python, C++, ...
    function extend( classDefinition ) {
        var parent = this;

        var r = function(attrs) {
            addAttributes.apply(this, [attrs]);
            this.init();
        };

        ctor.prototype = parent.prototype;
        r.prototype = new ctor();

        _.extend( r.prototype, classDefinition );
        r.prototype.__super__ = parent.prototype;

        return r;
    }

    // this function takes the class object and creates
    // aliases for some of it's methods
    // 
    // var Animal = Object.extend({ 
    //    speak: function() {...} 
    // });
    //
    // Animal.alias('speak', ['bark', 'annoy', 'doSomething'] );
    //
    function alias(name, aliases ) {
        if( !this.prototype[name] ) return;

        aliases.forEach( function(alias) {
            this.prototype[alias] = this.prototype[name];
        }, this);

        return this;
    }

    // adding the above functions to the Function prototype
    Function.prototype.extend = extend;
    Function.prototype.alias = alias;
    Function.prototype.init = function() {};
}());