import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryStack,VictoryBar } from 'victory';


export default class ProgressBar extends React.Component {
  render() {
    return (
       <div className="progress">
       <VictoryStack horizontal
         height={200}
         padding={35}
         style={{
           data: {width: 30},
           labels: {fontSize: 24}
         }}
         labels={["Expenses"]}
       >
         <VictoryBar
           style={{data: {fill: "tomato"}}}
           data={[
             {x: 1, y: 1}
           ]}
         />
         <VictoryBar
           style={{data: {fill: "gold"}}}
           data={[
             {x: 1, y: 3}
           ]}
         />
       </VictoryStack>
        </div>
    )
  }
}
