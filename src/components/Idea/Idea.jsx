import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { API_BASE_URL } from '../../config/config';
import { ideaDelete } from '../../actions/ideas';

class Idea extends React.PureComponent {
    render() {
        const {
            idea: {
                id, title, body
            },
            removeIdea
        } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <div className="card-text" title={body}>
                        {body}
                    </div>
                </div>
                <a className="close" onClick={() => removeIdea(id)}>
                    Delete
                </a>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    removeIdea: id => dispatch(ideaDelete(`${API_BASE_URL}/${id}`))
});

Idea.propTypes = {
    idea: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }).isRequired,
    removeIdea: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Idea);
