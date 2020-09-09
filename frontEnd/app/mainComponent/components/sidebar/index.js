import { connect } from 'react-redux';
import Component from './sidebar.jsx';
import * as actions from './actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    toggleChatModule: () => dispatch(actions.toggleChatModule()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
