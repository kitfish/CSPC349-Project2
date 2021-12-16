//This is the map object that shows up first on the website

import React, { Component } from "react";

import * as echarts from "echarts/lib/echarts";


// 引入提示框和标题组件
import '../../../node_modules/echarts/lib/component/tooltip';
import '../../../node_modules/echarts/lib/component/title';

import '../../../node_modules/echarts/lib/component/grid';
import '../../../node_modules/echarts/lib/component/dataZoom';
// 引入柱状图
import  '../../../node_modules/echarts/lib/chart/bar';

import array from "../../data/countries.js"; 

import './Ec.css';
import './bootstrap.min.css';


class Ec extends Component {
  componentDidMount() {
    
    let cases = [];
    let active = [];
    let mortality = [];

    let country = [
        "USA",
        "UK",
        "Germany",
        "India",
        "Japan",
        "S. Korea",
        "China",
        "Iceland",
        "Thailand",
        "Vietnam",
        "Mexico",
        "Canada",
        "Australia",
        "Egypt",
        "South Africa",
        "Brazil",
        "Peru",
        "Russia",
        "Libyan Arab Jamahiriya",
        "Iran",
        "Cases",
        "Active",
        "Death/Cases",
    ];

    country.forEach(function (item) {
        let findIndex = array.findIndex(function (currentValue) {
            return currentValue["country"] === item;
        });
        if (findIndex !== -1) {
            cases.push(array[findIndex]["cases"]);
            active.push(array[findIndex]["active"]);
            let point =
                (parseInt(array[findIndex]["deaths"]) /
                    parseInt(array[findIndex]["cases"])) *
                100;
            mortality.push(point.toFixed());
        } else {
            cases.push(0);
            active.push(0);
            mortality.push(0);
        }
    });

    var myChart = echarts.init(document.getElementById("main"));
    var myChart2 = echarts.init(document.getElementById("main2"));
    var myChart3 = echarts.init(document.getElementById("main3"));
    myChart.setOption(casesFun(cases, "cases", "Cases"));
    myChart2.setOption(casesFun(active, "active", "Active"));
    myChart3.setOption(casesFun(mortality, "mortality", "Mortality"));

    // table information
    var str = "";
    str += "<table  class='table table-bordered'>";
    str += "<thead><tr>";
    str += " <th>Country</th>";
    str += " <th>Cases</th>";
    str += " <th>Deaths</th>";
    str += " <th>Recovered</th>";
    str += " <th>Active</th>";
    str += " <th>Cases/Million</th>";
    str += " <th>Deaths/Million</th>";
    str += " <th>Tests</th>";
    str += " <th>Population</th>";
    str += " <th>Death/PerPeople</th>";
    str += "</tr></thead><tbody>";

    for (var i = 0; i < array.length; i++) {
        str += "<tr>";
        str += " <td>" + array[i]["country"] + "</td>";
        str += " <td>" + array[i]["cases"] + "</td>";
        str += " <td>" + array[i]["deaths"] + "</td>";
        str += " <td>" + array[i]["recovered"] + "</td>";
        str += " <td>" + array[i]["active"] + "</td>";
        str += " <td>" + array[i]["casesPerOneMillion"] + "</td>";
        str += " <td>" + array[i]["deathsPerOneMillion"] + "</td>";
        str += " <td>" + array[i]["tests"] + "</td>";
        str += " <td>" + array[i]["population"] + "</td>";
        str += " <td>" + array[i]["oneDeathPerPeople"] + "</td>";
        str += "</tr>";
    }
    str += "</tbody></table>";
    document.getElementById("info").innerHTML = str;

    function casesFun(cases, seriesTitle, title) {
        // specific setting for chart
        var option = {
            title: {
                text: title,
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
                formatter: function (params) {
                    let firstParams = params[0];
                    if (seriesTitle === "mortality") {
                        return title + "：" + firstParams.value + "%";
                    } else {
                        return title + "：" + firstParams.value;
                    }
                },
            },
            xAxis: {
                data: country,
            },
            yAxis: {
                type: "value",
            },
            dataZoom: [
                {
                    id: "dataZoomX",
                    type: "inside",
                    xAxisIndex: [0],
                    filterMode: "none",
                    start: 0,
                    end: 15,
                },
            ],
            series: [
                {
                    name: seriesTitle,
                    type: "bar",
                    data: cases,
                },
            ],
        };
        return option;
    }
  }
  render() {
    return (
      <div className="container">

        <div id="main"></div>
        <div id="main2"></div>
        <div id="main3"></div>
        <h2>Reported Statistics Of Cases And Deaths By Country</h2>
        <div id="info"></div>
  
      </div>
    );
  }
}
// const Ec = () => {
  

//   return (
//     <div className="container">

//     <div id="main" style="width: 100%; height: 400px; display: inline-block"></div>
//     <div id="main2" style="width: 100%; height: 400px; display: inline-block"></div>
//     <div id="main3" style="width: 100%; height: 400px; display: inline-block"></div>
//     <div id="info"></div>

//     </div>
//   );
// };
export default Ec;
