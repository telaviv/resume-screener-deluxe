var startGame = function() {
    Crafty.init(640, 400, "crafty-resume-screener-deluxe");
    Crafty.scene('StartScene');
};

Crafty.scene('StartScene', function() {
    Crafty.e('Screen');
});

Crafty.c('Screen', {
    init: function() {
        this.requires('2D, DOM, Color');
        this.attr({x: 0, y: 0, w: 640, h: 400});
        this.color('red');
        this.attach(Crafty.e('Window'));
    }
});

Crafty.c('Window', {
    init: function() {
        this.requires('2D, DOM, Color');
        this.attr({x: 15, y: 15, w: 400, h: 300});
        this.color('white');
    }
});

var NAMES = ['John Smith'];
var PROGRAMMING_LANGUAGES = ['python'];
var SCHOOLS = ['UC Berkeley'];
