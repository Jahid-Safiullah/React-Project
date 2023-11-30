import React from 'react'
import Dashbord from '../Back-End/Dashbord/Dashbord'
import Launch from '../../Back-End-Component/Launch/Launch'
export default function LaunchManagment() {
  return (
    <div>
      <div className='continer-fluid d-flex'>
        <div className='col-md-3'>
          <div>
            <Sidebar />
            </div>
        </div>
        <div className='col-md-9'>
          <div>
            <Launch />
          </div>
        </div>
      </div>
    </div>
  )
}
