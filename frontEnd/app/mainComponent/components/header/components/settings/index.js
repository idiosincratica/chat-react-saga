import Settings from './settings';
import { connect } from 'react-redux';
import * as actions from "./actions";
import {toggleSettingsModule} from '../../actions';


const mapStateToProps = state => ({
    serviceMsg: state.config.serviceMsg,
    blackList: state.config.blackList,
    blackListEnabled: state.config.blackListEnabled
});

const mapDispatchToProps = dispatch => ({
    toggleServiceMsg: () => dispatch(actions.toggleServiceMsg()),
    toggleSettingsModule: () => dispatch(toggleSettingsModule()),
    setBlackList: (data) => dispatch(actions.setBlackList(data)),
    toggleBlackList: () => dispatch(actions.toggleBlackList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

