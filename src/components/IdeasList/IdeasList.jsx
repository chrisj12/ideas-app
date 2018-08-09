import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Idea from '../Idea/Idea';
import { API_BASE_URL } from '../../config/config';
import AddIdeaNew from '../AddIdeaNew/AddIdeaNew';
import { ideasFetchData } from '../../actions/ideas';

class IdeasList extends Component {
    componentDidMount() {
        const { fetchData } = this.props;
        fetchData(API_BASE_URL);
    }

    render() {
        const { ideas } = this.props;


        return (
            <div className="card-deck">
                {ideas.length > 0 ? (ideas.map(idea => (
                    <Idea key={idea.id} idea={idea} />
                ))) : 'No ideas'}
                <AddIdeaNew />
            </div>

        );
    }
}

const mapStateToProps = state => ({
    ideas: state.ideas,
    hasErrored: state.ideasHasErrored,
    isLoading: state.ideasIsLoading
});

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(ideasFetchData(url))
});

IdeasList.propTypes = {
    ideas: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })).isRequired,
    fetchData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeasList);
