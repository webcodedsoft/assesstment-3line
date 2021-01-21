import React, { Component } from 'react'
import NationChart from './NationChart'
import RecentReportChart from './RecentReportChart'
import { Rotate } from './Util'
import StateChart from './StateChart'


export default class Index extends Component {

    state = {
        randomNumber: 0,
        randomNumbers: [],
        rotationNumber: 0,
        error: '',
        results: [],
    }

    handleArrayElement = () => {
        var { randomNumbers, randomNumber } = this.state
        randomNumbers.push(randomNumber)
        this.setState({ randomNumbers, randomNumber: 0 })
    }

    handleChange = ({ currentTarget: input }) => {
        const { name, value } = input
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { randomNumbers, rotationNumber } = this.state
        if (rotationNumber > 0) {
            var results = Rotate(randomNumbers, rotationNumber)
            console.log(results)
            this.setState({ results, randomNumbers: [], rotationNumber: 0, randomNumber: 0, error: ''})
        } else {
            this.setState({ error: "Rotation Number is Required"})
        }
    }

   

    render() {
        const { randomNumber, rotationNumber, results, error } = this.state

        return (
            <div>
                <div className="nk-content ">
                    <div className="container wide-xl">
                        <div className="nk-content-inner">
                            <div className="nk-content-body">
                                <div className="nk-content-wrap">
                                    <div className="nk-block-head nk-block-head-sm">
                                        <div className="nk-block-between">
                                            <div className="nk-block-head-content margin-top-20">
                                                <h3 className="nk-block-title page-title">Nigeria Convid-19 Analytics Dashboard.</h3>
                                            </div>{/* .nk-block-head-content */}
                                        </div>{/* .nk-block-between */}
                                    </div>{/* .nk-block-head */}
                                    <div className="nk-block">
                                        <div className="row g-gs">
                                            
                                            <div className="col-md-6">
                                                <NationChart />
                                            </div>{/* .col */}
                                            
                                            <div className="col-lg-6">
                                                <StateChart />
                                            </div>
                                            <div className="col-md-12">
                                                <RecentReportChart />
                                            </div>{/* .col */}
                                            <div className="col-lg-6">
                                                <div className="card card-preview">
                                                    <div className="card-inner">
                                                        <div className="card-head">
                                                            <h5 className="card-title">Number Rotation</h5>
                                                        </div>
                                                        <div className="row gy-4">
                                                            <div className="col-sm-6">
                                                                {results.length > 0 &&
                                                                    <div className="text-center text-success">Rotated Number: {results && JSON.stringify(results)}</div>
                                                                }
                                                            </div>
                                                        </div>
                                                        <p className="text-center text-danger">{error && error}</p>
                                                        <div className="row gy-4">
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <label className="form-label" htmlFor="randomNumber">Enter Random Number</label>
                                                                    <div className="form-control-wrap">
                                                                        <div className="form-text-hint">
                                                                            <span className="overline-titles btn-sm btn btn-primary" onClick={this.handleArrayElement}>Add</span>
                                                                        </div>
                                                                        <input type="number" className="form-control" id="randomNumber" onChange={this.handleChange} name="randomNumber" value={randomNumber} placeholder="Enter Array Element" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <label className="form-label">Enter Rotation Number </label>
                                                                    <div className="form-control-wrap has-timepicker">
                                                                        <input type="number" className="form-control time-picker" id="rotationNumber" onChange={this.handleChange} name="rotationNumber" value={rotationNumber} placeholder="Enter Rotation Number" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 nk-cov-newswg-meta center">
                                                                <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Add</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                
                                            </div>
                                            <div className="col-lg-6">
                                               
                                            </div>
                                        </div>{/* .row */}
                                    </div>{/* .nk-block */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
