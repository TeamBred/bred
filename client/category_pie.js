import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie } from 'victory';

export default class Pie extends React.Component {
  render() {
    
      let testExpenses = JSON.parse(localStorage.getItem("expenses"));
      let filler = ""

    let flattened = function reduce(array) {
        var out = [];
        var indexByCat = {};
        for (var i = array.length; i--;) {
            if (!indexByCat[array[i].category]) {
                indexByCat[array[i].category] = out.length;
                out.push(array[i]);
            } else {
                out[indexByCat[array[i].cat]].amount -= -array[i].amount;
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
