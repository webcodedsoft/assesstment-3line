import React, { Component } from 'react'

export default class RecentReportChart extends Component {

    componentDidMount = () => {

    }

    render() {
        return (
            <div>
                <div className="card card-bordered h-100">
                    <div className="card-inner">
                        <div className="card-title-group">
                            <div className="card-title card-title-sm">
                                <h6 className="title">Recent Cases</h6>
                            </div>
                        </div>
                        <div className="traffic-channel">
                            <center><p>No Recent Data in the api</p></center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
