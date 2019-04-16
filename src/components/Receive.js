import React from 'react';
import { useSample } from '../context/sample';

const Receive =( {value}) =>{
    return (
                    <div>
                        The current Value: {value}
                    </div>
        // <SampleConsumer>
        //     {
        //         // 여기서 JSX 내부에서 { (sample) => ... } 이런식으로 작성해주었는데, 이것은 Render Props 라는 패턴입니다.
        //         (sample1) => (
        //             <div>
        //                 The current Value: {sample1.state.value}
        //             </div>
        //         )
                
        //     }
            
        // </SampleConsumer>
        //    우리가 방금 작성한 코드는 비구조화 할당 문법을 사용하면 다음과 같이 작성 할 수도 있답니다

        //   {
        //     ({state}) => (
        //       <div>
        //         현재 설정된 값: { state.value }
        //       </div>
        //     )
        //   }
    )
}

export default useSample(Receive);