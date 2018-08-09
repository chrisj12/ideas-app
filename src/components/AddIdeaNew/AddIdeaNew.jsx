import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { API_BASE_URL } from '../../config/config';
import { ideaUpdate } from '../../actions/ideas';

class AddEditIdea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    handleTitle(event) {
        this.setState({ title: event.target.value });
    }

    handleBody(event) {
        this.setState({ body: event.target.value });
    }

    handleBlur() {
        const { title, body } = this.state;
        const { updateIdea, selectedIdea } = this.props;

        if (title !== '' && body !== '') {
            updateIdea({ id: selectedIdea.id, title, body });
            this.setState({ body: '', title: '' });
        }
    }


    render() {
        const { isAddMode } = this.props;
        if (isAddMode) {
            return (
                <div className="card">
                    <div className="card-body">
                        <input
                            className="form-control"
                            id="title"
                            autoComplete="off"
                            maxLength="20"
                            onChange={evt => this.handleTitle(evt)}
                            onBlur={evt => this.handleBlur(evt)}
                            autoFocus
                            placeholder="Enter title"
                        />
                        <textarea
                            className="form-control"
                            onChange={evt => this.handleBody(evt)}
                            onBlur={evt => this.handleBlur(evt)}
                            maxLength="140"
                            placeholder="Enter body"
                        />
                    </div>
                </div>


            );
        }
        return null;
    }
}


const mapStateToProps = state => ({
    isAddMode: state.isAddMode,
    selectedIdea: state.ideaBeingEditied
});

const mapDispatchToProps = dispatch => ({
    updateIdea: (idea) => {
        dispatch(ideaUpdate(`${API_BASE_URL}/${idea.id}`, idea));
    }
});

AddEditIdea.propTypes = {
    isAddMode: PropTypes.bool.isRequired,
    selectedIdea: PropTypes.shape({
        id: PropTypes.string
    }).isRequired,
    updateIdea: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditIdea);
