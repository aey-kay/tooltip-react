import React from 'react';

const Tooltip = (props) => {
  const { onMouseIn, onMouseOut, hover, direction } = props;

  // giving position to tooltip according to direction
  let position = "";
  if (direction === 'top') {
    position = styles.top;
  } else if (direction === 'bottom') {
    position = styles.bottom;
  } else if (direction === 'left') {
    position = styles.left;
  } else if (direction === 'right') {
    position = styles.right;
  }

  return (
    <div
      className="tooltip"
      onMouseOver={() => onMouseIn()}
      onMouseOut={() => onMouseOut()}
    >
      Hover over me
      {hover && (
        <div>
          <span className="tooltiptext" style={position.toolTipText}>
            Tooltip on {direction}
          </span>
          <div className="tootltiparrow" style={position.toolTipArrow}></div>
        </div>
      )}
    </div>
  );
};

// Inline styles for tooltip on hovering
const styles = {
  top: {
    toolTipText: {
      visibility: 'visible',
      bottom: '130%',
      left: '40%',
      marginLeft: '-60px',
    },
    toolTipArrow: {
      position: "absolute",
      top:"-30%",
      left: "50%",
      marginLeft: "-5px",
      borderWidth: "5px",
      borderStyle: "solid",
      borderTopColor:"black",
      borderRightColor:"transparent",
      borderBottomColor:"transparent",
      borderLeftColor:"transparent"
    }
  },

  bottom: {
    toolTipText: {
      visibility: 'visible',
      top: '130%',
      left: '40%',
      marginLeft: '-60px',
    },
    toolTipArrow: {
      position: "absolute",
      bottom:"-30%",
      left: "50%",
      marginLeft: "-5px",
      borderWidth: "5px",
      borderStyle: "solid",
      borderTopColor:"transparent",
      borderRightColor:"transparent",
      borderBottomColor:"black",
      borderLeftColor:"transparent"
    }
  },

  left: {
    toolTipText: {
      visibility: 'visible',
      top: '3px',
      right: '106%',
    },
    toolTipArrow: {
      position: "absolute",
      top:"35%",
      right:"99.6%",
      marginLeft: "-5px",
      borderWidth: "5px",
      borderStyle: "solid",
      borderTopColor:"transparent",
      borderRightColor:"transparent",
      borderBottomColor:"transparent",
      borderLeftColor:"black"
    }
  },

  right: {
    toolTipText: {
      visibility: 'visible',
      top: '3px',
      left: '106%',
    },
    toolTipArrow: {
      position: "absolute",
      top:"35%",
      left: "102.6%",
      marginLeft: "-5px",
      borderWidth: "5px",
      borderStyle: "solid",
      borderTopColor:"transparent",
      borderRightColor:"black",
      borderBottomColor:"transparent",
      borderLeftColor:"transparent"
    }
  },
};

export default Tooltip;
