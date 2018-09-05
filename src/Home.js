import React, { Component } from 'react';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

class Home extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <strong>Oh man</strong>
        <br />
        Have you met this guy?! He looks so friendly! :)
      </Tooltip>
    );

    return (
      <div>
        <h1>Welcome!</h1>
        <h2>Prepare for some <em>unbelievable</em> service with...</h2>
        <OverlayTrigger placement="right" overlay={tooltip}>
          <img src="http://www.myfconline.com/character_avatars/12227_177849.gif" />
        </OverlayTrigger>
        <h1>THIS GUY!!!</h1>
        <Button bsStyle="success">This is the best button</Button>
      </div>
      );
  }
}

export default Home;
