import React from 'react';

class Error extends React.PureComponent{
    render(){
        const {text} = this.props
        
        return(
            <div className='error'>{text}</div>
        )
    }
}

export default Error;