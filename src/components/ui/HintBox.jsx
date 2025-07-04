import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';

const HintBox = ({
  title,
  children,
  className = '',
  showButton = false,
  buttonText = '',
  onButtonClick = () => {},
}) => {
  return (
    <div className={`bg-gray-50 rounded-lg p-4 ${className}`}>
      {title && (
        <Typography variant="body-sm" className="text-gray-900 font-medium mb-2">
          {title}
        </Typography>
      )}
      <div className="text-gray-600">
        {children}
      </div>
      {showButton && (
        <button
          onClick={onButtonClick}
          className="inline-flex items-center justify-center font-medium transition-all duration-150 ease-in-out focus:outline-none focus:ring-0 disabled:cursor-not-allowed active:scale-95 h-10 px-5 text-sm rounded-full mt-2 hover:bg-gray-100"
        >
          <span className="truncate">{buttonText}</span>
        </button>
      )}
    </div>
  );
};

HintBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showButton: PropTypes.bool,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default HintBox; 