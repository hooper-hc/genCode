import React, { Component, PropTypes } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

// some magic numbers: 
// the hight of the embeddedNavBar (set via css) + container margin offset
const TRACKER_OFFSET = 38;
// bootstrap adds negative margins of -15
const MARGIN_OFFSET = 15;
const LINK_OFFSET = 30;

export default class EmbeddedGraphAnnotation extends Component {

  render() {
    let { header, text } = this.props.annotation;
    let hasTracker = this.props.hasTracker;
    let { annotationHeight, linkUrl, linkText } = this.props.embedded;
    let hasLink = Boolean(linkUrl && linkText);

    let height = annotationHeight - MARGIN_OFFSET - (hasTracker ? TRACKER_OFFSET : 0) - (hasLink ? LINK_OFFSET : 0);
    
    let divStyle = { 
      marginTop: '10px'
      
    }

    let scrollbarStyle = {
      height: height,
      width: '100%'
    }

    return (
      <div id="oligrapherEmbeddedGraphAnnotation" style={divStyle} >
	  <Scrollbars
	      style={scrollbarStyle}
	      >
	      <h6><strong>{header}</strong></h6>
              <div id="oligrapherEmbeddedGraphAnnotationText"
		   dangerouslySetInnerHTML={{ __html: text }}>
	      </div>
	  </Scrollbars>
      </div>
    );
  }

}

EmbeddedGraphAnnotation.propTypes = {
  annotation: PropTypes.object,
  embedded: PropTypes.object,
  hasTracker: PropTypes.bool
}
