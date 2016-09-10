import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryStack,VictoryChart,VictoryAxis,VictoryBar } from 'victory';



let testExpenses = [{cat:'food',cost:16, createdAt: 1},{cat:'food',cost:33,createdAt: 2},{cat:'bills',cost:4,createdAt: 7},{cat:'shopping',cost:12,createdAt: 3}]

let cats =[];
let dataPoints = []
let filler = ""

for (let i = 0; i< testExpenses.length;i++) {
  let costTime ={}
  if (i % 2 === 0 || i === 0) {
    filler="gold"
  } else {
    filler="tomato"
  }
  cats.push(testExpenses[i].cat);
  costTime = {x:testExpenses[i].createdAt, y:testExpenses[i].cost, fill: filler}
  dataPoints.push(costTime);
}


export default class TimeChart extends React.Component {
  render() {
    return (
      <div className="time">
      <VictoryChart
  height={500}
  domainPadding={{x: 100}}>
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
