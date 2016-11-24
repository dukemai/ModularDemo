'use strict';

var app = {
    setup() {
        var div = document.createElement(div);
        div.appendChild(document.createTextNode('Content appended from app.js'));
        document.body.appendChild(div);
    }
};

app.setup();
