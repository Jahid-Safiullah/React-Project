import React from 'react'
import Dashbord from '../Dashbord/Dashbord';
import Launch from './Launch/Launch'
export default function AddLaunch() {
  return (
    <div>
      <div className='continer-fluid d-flex ' style={{marginTop:"100px"}}>
        <div className='col-md-3'>
          <div>
            <Dashbord />
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
