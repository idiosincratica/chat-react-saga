import { connect } from 'react-redux';
import Component from './header.jsx';
import * as actions from "./actions";

const mapStateToProps = state => ({
    host: state.config.host
});

const mapDispatchToProps = dispatch => ({
    toggleSettingsModule: () => dispatch(actions.toggleSettingsModule()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
