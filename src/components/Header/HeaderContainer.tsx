import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { auth } from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';

type MapPropsType={
    isFetching: boolean,
    isAuth: boolean,
    login: string
}
type MapDispatchType={
    auth:()=>void
}
class HeaderContainer extends React.Component<MapPropsType&MapDispatchType>{
    componentDidMount() {
        this.props.auth()
    }
    render() {
        return (
            <Header  {...this.props} />
        )
    }
}
let mapStateToProps = (state:AppStateType)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    isFetching: state.auth.isFetching
} as MapPropsType);

export default connect<MapPropsType,MapDispatchType,{},AppStateType>(mapStateToProps, { auth })(HeaderContainer);