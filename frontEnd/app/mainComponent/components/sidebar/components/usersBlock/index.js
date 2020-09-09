import UserBlock from './userBlock.jsx';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return state.users;
};

export default connect(mapStateToProps)(UserBlock);

