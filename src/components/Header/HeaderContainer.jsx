import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { auth } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
this.props.auth()
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    isFetching: state.auth.isFetching
});

export default connect(mapStateToProps, { auth })(HeaderContainer);