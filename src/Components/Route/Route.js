import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

const routes = (
  // your routes
);

function hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== '') {
        // Push onto callback queue so it runs after the DOM is updated,
        // this is required when navigating from a different page so that
        // the element is rendered on the page before trying to getElementById.
        setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) element.scrollIntoView();
        }, 0);
    }
}

render(
    <Router
        history={browserHistory}
        routes={routes}
        onUpdate={hashLinkScroll}
    />,
    document.getElementById('root')
)