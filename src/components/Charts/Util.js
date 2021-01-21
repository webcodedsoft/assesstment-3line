import React from 'react'
import ReactDatatable from '@ashvin27/react-datatable';

export function Table({ tableHeader, config, datas }) {
    return (
        <div style={{ margin: 5, paddingTop: 10 }} className="table-responsive">
            <ReactDatatable
                config={config}
                records={datas}
                columns={tableHeader} />
        </div>
    )
}
export function Rotate(array, count) {
    count -= array.length * Math.floor(count / array.length);
    array.push.apply(array, array.splice(0, count));
    return array;
}

export default { Table, Rotate }