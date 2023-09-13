import React from 'react'

export default function Buy_bus_tickets_in_3_easy_steps() {
  return (
    <div className='row m-3 py-4 border'>
      <div className='col-md-12'>
        <div className=' p-2'style={{padding:" 10px 0", borderBottom: "1px solid #dddddd"}}>
          <h3 style={{ fontWeight: " bold", color: "#079d49", margin: " 0" }}>Buy bus tickets in 3 easy steps</h3>
        </div>
        <div className='row col-md-12 p-2 pt-5'>
          <div className='col-md-4 d-flex '>
            <div className='col-md-3 ' style={{ backgroundColor: "#F1F1F1", height: "75px", textAlign: "center", marginBottom: " 10px" }}>
              <i className='fa fa-search' style={{ fontSize: "3em", paddingTop: "18px", color: "#079d49" }}></i>
            </div>
            <div className='col-md-9 text-start px-3 '>
              <h3 style={{ fontWeight: " bold", color: "#079d49", marginTop: " 0" }}>Search</h3>
              <p style={{fontSize:"13px"}}> Choose your origin, destination, journey dates and search for buses </p>
            </div>

          </div>
          <div className='col-4 d-flex'>
            <div className='col-md-3' style={{ backgroundColor: "#F1F1F1", height: "75px", textAlign: "center", marginBottom: " 10px" }}>
              <i className='fa fa-bus' style={{ fontSize: "3em", paddingTop: "18px", color: "#079d49" }}></i>
            </div>
            <div className='col-md-9 text-start  px-3'>
              <h3 style={{ fontWeight: " bold", color: "#079d49", marginTop: " 0" }}>Search</h3>
              <p style={{fontSize:"13px"}}> Choose your origin, destination, journey dates and search for buses </p>
            </div>

          </div>
          <div className='col-4 d-flex'>
            <div className='col-md-3' style={{ backgroundColor: "#F1F1F1", height: "75px", textAlign: "center", marginBottom: " 10px" }}>
              <i className='fa fa-money' style={{ fontSize: "3em", paddingTop: "18px", color: "#079d49" }}></i>
            </div>
            <div className='col-md-9 text-start  px-3'>
              <h3 style={{ fontWeight: " bold", color: "#079d49", marginTop: " 0" }}>Search</h3>
              <p style={{fontSize:"13px"}}> Choose your origin, destination, journey dates and search for buses </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
