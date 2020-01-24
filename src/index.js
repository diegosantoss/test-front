import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';

import InitialConfig from './initialConfig';

const Strict = () => (
  <StrictMode>
    <InitialConfig />
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
