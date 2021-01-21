import React, { Component } from 'react'
import { getTotalCase } from '../services';
import {Table} from './Util';


const columns = [
    {
        key: "state", text: "States", sortable: true, cell: (state, index) => {
            return (
                <span>{state.state}</span>
            );
        }
    },
    {
        key: "casesOnAdmission", text: "Tested", sortable: true, cell: (state, index) => {
            return (
                <span>{state.casesOnAdmission}</span>
            );
        }
    },
    {
        key: "confirmedCases", text: "Confirm", sortable: true, cell: (state, index) => {
            return (
                <span>{state.confirmedCases}</span>
            );
        }
    },
    {
        key: "death", text: "Death", sortable: true, cell: (state, index) => {
            return (
                <span>{state.death}</span>
            );
        }
    },
    {
        key: "discharged", text: "Discharged", sortable: true, cell: (state, index) => {
            return (
                <span>{state.discharged}</span>
            );
        }
    },
]

const config = {
    page_size: 7,
    show_filter: true,
    show_pagination: true,
    pagination: 'advance',
}

export default class StateChart extends Component {

    state = {
        stateNames: [],
        states: []
    }


    componentDidMount = () => {
        this.getTotalCase()
    }

    getTotalCase = () => {
        getTotalCase(res => {
            var stateNames = []
            if ("data" in res) {
                const { data } = res
                const { states } = data
                states.forEach(data => {
                    const { state } = data;
                    stateNames.push({ ["state"]: state })
                });
                this.setState({ stateNames, states, datas: states })
            }
        })
    }

    SortData = ({ currentTarget: input }) => {
        const { value } = input
        const { datas } = this.state
        var stateReport = datas.filter(function (option) {
            return option.state === value;
        });
        this.setState({ states: stateReport })
       
    }

    render() {
        const { stateNames, states } = this.state

        return (
            <div>
                <div className="card card-bordered h-100">
                    <div className="card-inner">
                        <div className="card-title-group">
                            <div className="card-title card-title-sm">
                                <h6 className="title">State Cases</h6>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Filter by State</label>
                                <div class="form-control-wrap">
                                    <select class="form-select form-control form-control-lg" onChange={this.SortData}>
                                        <option disabled selected>Select States</option>
                                        {stateNames && stateNames.map((state, index) => {
                                            return <option key={index} value={state.state}>{state.state}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="traffic-channel">
                            <Table tableHeader={columns} config={config} datas={states} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
