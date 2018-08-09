import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { API_BASE_URL } from '../../config/config';
import { ideaFetchNew, sortByField } from '../../actions/ideas';


class Header extends React.PureComponent {
    render() {
        const { isAddMode, showAddPanel, sortBy } = this.props;
        return (
            <div className="header">
                <div className="row">
                    <div className="col-8">
                        <h1 className="display-4">
                            Welcome to Ideas app!
                        </h1>
                    </div>
                    <div className="col-2">
                        {!isAddMode
                        && (
                            <button type="button" className="btn btn-dark" onClick={() => showAddPanel()}>
                                Add new
                            </button>
                        )
                        }
                    </div>
                    <div className="col-2">
                        Order by
                        <select onChange={evt => sortBy(evt)}>
                            <option value="id">
id
                            </option>
                            <option value="title">
title
                            </option>
                            <option value="created_date">
created date
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAddMode: state.isAddMode
});

const mapDispatchToProps = dispatch => ({
    showAddPanel: () => {
        dispatch(ideaFetchNew(API_BASE_URL));
    },
    sortBy: (event) => {
        dispatch(sortByField(event.target.value));
    }
});


Header.propTypes = {
    isAddMode: PropTypes.bool.isRequired,
    showAddPanel: PropTypes.func.isRequired,
    sortBy: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
