import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Notification extends React.PureComponent {
    render() {
        const { hasErrored, isLoading } = this.props;
        if (hasErrored) {
            return (
                <div className="alert alert-danger" role="alert">
                    Sorry! There was an error loading the ideas.
                </div>
            );
        }

        if (isLoading) {
            return (
                <div className="alert alert-info" role="alert">
                    Loading....
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = state => ({
    hasErrored: state.ideasHasErrored,
    isLoading: state.ideasIsLoading
});

Notification.propTypes = {
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Notification);
