import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie } from 'victory';

export default class Pie extends React.Component {
  render() {

      let testExpenses = JSON.parse(localStorage.getItem("expenses"));
      let filler = ""
      console.log(testExpenses)

    let flattened = function reduce(array) {
        var out = [];
        var indexByCat = {};
        for (var i = array.length; i--;) {
            if (!indexByCat[array[i].category]) {
                indexByCat[array[i].category] = out.length;
                out.push(array[i]);
            } else {
                out[indexByCat[array[i].category]].amount -= -array[i].amount;
            }
        }
        return out;
    }

    let expense =flattened(testExpenses)

    return (
      <div className="pie">
       <VictoryPie style={{
         labels: {
           fontSize: 20
         },
    data: {
      stroke:"tomato",
      strokeWidth:1
    }
  }}
    data={expense}  x={"category"} y={(data) => data.amount}  />
    </div>
    )
  }
}
