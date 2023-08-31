// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function BookingForm() {
  return (
    <div>
        <div className="form-group  flex-fill bd-highlight ms-5 text-start fw-bold" style={{ marginTop: "10px" }}> 
            <div className='h1'>Bus Booking Form</div>
          <label htmlFor="dest_from">To reserve seats please complete and submit the booking form.</label>
          <hr />
          <br />
          <label htmlFor="dest_to">From</label>
          <input type="text" className="form-control " id="dest_from" name="dest_from" placeholder="Enter City" maxLength="15" value="" autoComplete="off"></input>

          <label htmlFor="dest_to">To</label>
          
          <input type="text" className="form-control " id="dest_to" name="dest_to" placeholder="Enter City" maxLength="15" value="" autoComplete="off"></input>

          <div className=' form-group '>
            <label htmlFor="doj">Date of Journey</label><br />
            <input type="date" className=" form-control " id="doj" name="doj" data-date-format="dd/mm/yyyy" value="" ></input>

            <label htmlFor="doj">Date of Return<span> (Optional)</span></label>
            <input type="date" className=" form-control " id="dor" name="dor" data-date-format="dd/mm/yyyy"  value=""></input>
          </div>

          <button type="submit" className=" mt-3  btn btn-success"><span className=""><i className="fa-solid fa-magnifying-glass"></i> Search Buses</span>
          </button>
        </div>
    </div>
  )
}
