import React  from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import { SampleProvider} from './context/sample';
import { AnotherProvider} from './context/another';
import Counter from './components/Counter';



//배열의 내장함수 reduce 와 리액트 컴포넌트의 createElement 를 활용하여 다음 코드를 작성해보세요
const AppProvider = ( {contexts, children}) => contexts.reduce(
  (prev,context) => React.createElement(context, {
    children: prev
  }), 
  children
);

const App = () => {
  return(
    <AppProvider
      contexts = { [SampleProvider, AnotherProvider]}  
    >
    <div className = 'panes'>
      <LeftPane />
      <RightPane />
    </div>
    <Counter />
    </AppProvider>
  )
}

export default App;
