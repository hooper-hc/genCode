import React, { Component } from 'react';

var headings = {
	universe: 'Search for people, events, organizations, things or ideas.',
	constellation: 'Search for the name of a constellation.',
	galaxy: 'Search for the name of a galaxy.'
};

class Title extends React.Component {
  render() {
    const {direction} = this.props;
    const heading = headings[direction];
    return (
      <div>
        <h2>
        </h2>
      </div>
    );
  }
}

export default Title;
