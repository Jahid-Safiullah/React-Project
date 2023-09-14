function Form({ onValChange, formObject, onFormSubmit }) {
    return (
        <div className="border border-success my-5 mx-3"> 
      <div className="row mb-4  my-3 mx-4">
           < div ><h2 className="bg-success rounded text-light p-2">Bus Booking Form</h2>  </div>
        <div className="col">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Name"
            onChange={onValChange}
            value={formObject.pass_name}
            name="pass_name"
          />
        </div>
        <div className="mb-3">
          <input
            type="Email"
            className="form-control"
            placeholder="Enter your Email"
            onChange={onValChange}
            value={formObject.pass_email}
            name="pass_email"
          />
        </div>
        <div className="mb-3">
          <input
            type="Number"
            className="form-control"
            placeholder="Enter your Contact Numebr"
            maxLength="11"
            onChange={onValChange}
            value={formObject.pass_contact}
            name="pass_contact"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Date of Journey"
            onChange={onValChange}
            value={formObject.doj}
            name="doj"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Date of Return"
            onChange={onValChange}
            value={formObject.dor}
            name="dor"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Select Bus"
            onChange={onValChange}
            value={formObject.select_bus}
            name="select_bus"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Select your Bus Type"
            onChange={onValChange}
            value={formObject.bus_type}
            name="bus_type"
          />
        </div>
        </div>
        <div className="col">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your starting point"
            onChange={onValChange}
            value={formObject.starting_point}
            name="starting_point"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your destinaton"
            onChange={onValChange}
            value={formObject.ending_point}
            name="ending_point"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="How many seat do you want"
            onChange={onValChange}
            value={formObject.Seat}
            name="Seat"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="fare"
            onChange={onValChange}
            value={formObject.fare}
            name="fare"
          />
        </div>
        </div>
        <div className="d-grid">
          <input
            type="submit"
            onClick={onFormSubmit}
            className="btn btn-success"
          />
        </div>
      </div>
      </div>
    );
  }
  export default Form;