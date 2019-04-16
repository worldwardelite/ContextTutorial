import React, { Component } from 'react';
//import { SampleConsumer} from '../context/sample';
import { useSample} from '../context/sample';


class Sends extends Component {
    state = { input: '' }

    componentDidMount(){
        // setting initioal value
        this.setState({
            input: this.props.value,
        })
    }
    handleChange = (e) => {
        this.setState( {input: e.target.value});
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        // call setvalue which receive from props
        this.props.setValue(this.state.input);

    }
    render() { 
        return ( 
            <form onSubmit ={this.handleSubmit}>
                <input value = {this.state.input} onChange = {this.handleChange} />
                <button type = "submit">setting</button>
            </form>
         );
    }
}
//  :: Consumer 를 사용하여 context 값을 전달해준 컨테이너 컴포넌트
// const SendsContainer = () => (
//     <SampleConsumer>
//         {
//             ({state,actions}) => (
//                 <Sends
//                     value = {state.value}
//                     setValue = {actions.setValue} />

//             )
//         }
//     </SampleConsumer>
// )

// export SendsContainer instead of Sends
export default useSample(Sends);