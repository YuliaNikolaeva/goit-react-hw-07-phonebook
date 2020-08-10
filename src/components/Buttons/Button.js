import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick, contactId }) => {
    return (
        <button
            className={s.btn}
            type="button"
            onClick={() => onClick(contactId)}
        >
            Delete
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    contactId: PropTypes.string,
};

export default Button;
