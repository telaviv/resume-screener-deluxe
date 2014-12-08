var startGame = function() {
    Crafty.init(640, 400, "crafty-resume-screener-deluxe");
    Crafty.scene('StartScene');
};

Crafty.scene('StartScene', function() {
    Crafty.e('Screen');
});

Crafty.c('Screen', {
    init: function() {
        this.requires('2D, DOM, Image, Stage');
        this.attr({x: 0, y: 0, w: 640, h: 400});
        this.attach(Crafty.e('Resume'));
        this.image('img/background.png');
    }
});

Crafty.c('Window', {
    init: function() {
        this.requires('2D, DOM, Color');
        this.attr({x: 40, y: 40, w: 400, h: 300});
        this.color('white');
    }
});

Crafty.c('Resume', {
    init: function() {
        this.requires('Window');
        this._attach(this._createName(20));
        this._attach(this._createLineRow(40));
        this._attach(this._createEducation(60));
        this._attach(this._createLineRow(80));
        this._attach(this._createExperience(100));
        this._attach(this._createProgrammingLanguages(180));
    },

    _createName: function(yOffset) {
        return this._createText(NAMES[0], yOffset, 18);
    },

    _createEducation: function(yOffset) {
        return this._createText('Education: ' + DEGREE[0] + ', ' + SCHOOLS[0], yOffset);
    },

    _createProgrammingLanguages: function(yOffset) {
        return this._createText('Programming Languages: ' + PROGRAMMING_LANGUAGES[0], yOffset);
    },

    _createExperience: function(yOffset) {
        var text = [];
        text.push(this._createText(POSITION[0], yOffset, 18));
        text.push(this._createText(COMPANY[0], yOffset + 40));
        return text;
    },

    _createLineRow: function(yOffset) {
        return this._createText('_________________________________________', yOffset);
    },

    _createText: function(text, yOffset, size) {
        size = size || 15;
        return Crafty.e("2D, DOM, Text").attr({
            x: this.x + 40, y: this.y + yOffset, w: this.w
        }).text(text).textColor('black').textFont({size: size + 'px'});
    },

    _attach: function(text) {
        if (text instanceof Array) {
            text.forEach(function(textComponent) {
                this.attach(textComponent);
            }.bind(this));
        }
        this.attach(text);
    }
});


var NAMES = ['John Smith'];
var PROGRAMMING_LANGUAGES = ['python'];
var SCHOOLS = ['UC Berkeley'];
var DEGREE = ['B.S. in Computer Science'];
var POSITION = ['Software Engineering Intern'];
var COMPANY = ['bitely INC.'];
