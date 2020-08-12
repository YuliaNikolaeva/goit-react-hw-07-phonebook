import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

import {contactActions, contactSelectors} from '../../redux/contacts';

const {getFilter} = contactSelectors;

const Filter = ({ value, onChange }) => {
    return (
        <label className={s.label}>
            <div className={s.head__field}>Фильтр по имени</div>
            <input
                className={s.input}
                type="text"
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

const mapStateToProps = state => ({
    value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Filter);