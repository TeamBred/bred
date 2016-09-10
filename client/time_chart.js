import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryStack,VictoryChart,VictoryAxis,VictoryBar } from 'victory';


export default class TimeChart extends React.Component {


  render() {
      let cats =[];
      let dataPoints = []
        let testExpenses = JSON.parse(localStorage.getItem("expenses"));
        let filler = ""

        for (let i = 0; i< testExpenses.length;i++) {
          let costTime ={}
          if (i % 2 === 0 || i === 0) {
            filler="blue"
          } else {
            filler="tomato"
          }
          cats.push(testExpenses[i].category);
          costTime = {x:new Date(testExpenses[i].createdAt).getSeconds(), y:parseInt(testExpenses[i].amount), fill: filler}
          dataPoints.push(costTime);
        }

    return (
      <div className="time">
      <VictoryChart
  height={500}
  domainPadding={{x: 150}}>
  <VictoryStack
    labels={cats}
    colorScale={"qualitative"}
  >
    <VictoryBar
      data={dataPoints}
    />
  </VictoryStack>
</VictoryChart>
</div>
    )
  }
}
