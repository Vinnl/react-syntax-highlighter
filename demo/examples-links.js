import React from 'react';

const h1Style = {
  fontSize: 42,
  color: 'aliceblue'
};

export default () => (
  <div>
    <h1 style={h1Style}>Other examples: </h1>
    <ul>
      <li><a href="./index.html">Default with HighlightJS</a></li>
      <li><a href="./prism.html">Default With Prism</a></li>
      <li><a href="./diff.html">Diff</a></li>
      <li><a href="./virtualized.html">Virtualized</a></li>
            <li><a href="./prism-async-light.html">Prism async light</a></li>
    </ul>
  </div>
);
