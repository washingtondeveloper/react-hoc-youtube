import React from 'react'

import Loading from '../components/Loading';

function LoadingHOC(WrappedComponent) {
    return class extends React.Component {
        render() {
           return this.props.users.length === 0
            ? <Loading />
            : <WrappedComponent {...this.props}/>
        }
    }
}

export default LoadingHOC;