import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie } from 'victory';

export default class Pie extends React.Component {
  render() {

    let testExpenses = [{cat:'food',cost:16,},{cat:'food',cost:33,},{cat:'bills',cost:4,},{cat:'shopping',cost:12,}]

    let flattened = function reduce(array) {
        var out = [];
        var indexByCat = {};
        for (var i = array.length; i--;) {
            if (!indexByCat[array[i].cat]) {
                indexByCat[array[i].cat] = out.length;
                out.push(array[i]);
            } else {
                out[indexByCat[array[i].cat]].cost -= -array[i].cost;
            }
        }
        return out;
    }

    let testData = {user:{username:'bob', expenses:flattened(testExpenses)}}

    return (
      <div className="pie">
       <VictoryPie style={{
    data: {
      stroke: (data) => data.y > 12 ?
        "tomato" : "black",
      strokeWidth: (data) => data.y > 12 ?
        3 : 1
    }
  }}
    data={testData.user.expenses}  x={"cat"} y={(data) => data.cost}  />
    </div>
    )
  }
}
