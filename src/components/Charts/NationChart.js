import React, { Component } from 'react'
import { Chart } from "react-google-charts";
import { getTotalCase } from '../services';


export default class NationChart extends Component {

    state = {
        chartData: []
    }


    componentDidMount =  () => {
        getTotalCase(res => {
            if ("data" in res) {
                const { data } = res
                var chartData = [['Type', 'Total']]
                const { death, discharged, totalActiveCases, totalConfirmedCases, totalSamplesTested } = data;
                const results = { ["Death"]: death, ["Discharged"]: discharged, ["Active Case"]: totalActiveCases, ["Confirmed Case"]: totalConfirmedCases, ["Tested Case"]: parseInt(totalSamplesTested.replace(",", "")) }

                const objectNames = Object.keys(results)
                const objectValues = Object.values(results)
                for (let i = 0; i < objectNames.length; i += 1) {
                    chartData.push([objectNames[i], objectValues[i]])
                }
                this.setState({ chartData })
            }
        })
    }

    render() {
        const { chartData } = this.state

        return (
            <div>
                <div className="card card-bordered h-100">
                    <div className="card-inner">
                        <div className="card-title-group">
                            <div className="card-title card-title-sm">
                                <h6 className="title">Total Cases</h6>
                            </div>
                        </div>
                        <div className="traffic-channel">
                            <center>
                                <Chart
                                    width={'500px'}
                                    height={'400px'}
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={chartData}
                                    options={{
                                        sliceVisibilityThreshold: 0, // 20%
                                    }}
                                    rootProps={{ 'data-testid': '5' }}
                                />
                            </center>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
