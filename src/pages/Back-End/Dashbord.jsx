import React from 'react'
import Sidebar from '../../Back-End-Component/Sideber'
export default function Dashbord() {
  return (
    <div>
        <div className='container-fluid'>
            <div className='col-md-3'>
                <div><Sidebar /></div>
            </div>
            <div className='col-md-8'>
                <div> <img src="src/assets/it-dashboard-example.png" alt="" /> </div>
            </div>
        </div>
    </div>
  )
}
