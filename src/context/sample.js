import React, { Component, createContext } from 'react';

const Context = createContext();  // create context

// provider and consumer exits in Context
// these are needs to use the context
// Consumer is defined  as SampleConsumer to comfortalbe of use later

const { Provider, Consumer: SampleConsumer} = Context;

// 
class SampleProvider extends Component {
    state = { 
        value : 'this is default value.'
     }
    // 여기서 actions 라는 객체는 우리가 임의로 설정하는 객체입니다.
    // 나중에 변화를 일으키는 함수들을 전달해줄때, 함수 하나하나 일일히 전달하는 것이 아니라,
    // 객체 하나로 한꺼번에 전달하기 위함입니다.
    actions = {
        setValue: (value) => {
            this.state( {value});

        }
    }


      render() { 
          const {state, actions} = this

        // Provider 내에서 사용할 값은, "value" 라고 부릅니다.
        // 현재 컴포넌트의 state 와 actions 객체를 넣은 객체를 만들어서,
        // Provider 의 value 값으로 사용하겠습니다.
        const value = { state, actions}

        return (  
            <Provider value = {value}>
                {this.props.children}
            </Provider>
        );
    }
}
 

export {SampleProvider, SampleConsumer};


