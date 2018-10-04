import React from 'react';
import ReactDOM from 'react-dom';

function createRender(Layout) {
    return function() {
        ReactDOM.render(<Layout />, document.getElementById('root'));
    }
}

export const configure = createRender;
