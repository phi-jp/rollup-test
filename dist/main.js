'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var riot = _interopDefault(require('riot'));

riot.tag2('app', '<h1>Hi Riot!</h1> <md content="{content}"></md>', 'app,[data-is="app"]{ --riot-color: #f04; display: block; } app h1,[data-is="app"] h1{ color: var(--riot-color); border-bottom: 1px solid var(--riot-color); }', '', function(opts) {
    const name = 'Rollup';
    this.content = `Hello **${ name }**!`;
});

riot.mount('app');
