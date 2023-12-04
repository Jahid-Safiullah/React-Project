import React from 'react'

import { RouterProvider } from "react-router-dom";
import Dashbord from '../Dashbord/Dashbord';




export default function AddBus() {
  const fruits = ['aam', 'jam', 'kola', 'lichu', 'kathal'];
  const customFunction = (fruit, index) => {
    // Perform some logic (check if the length is greater than 5)
    const isLongFruit = fruit.length > 5;

    // Display different messages based on the logic
    if (isLongFruit) {
      return `The fruit name is long: ${fruit}`;
    } else {
      return `The fruit name is not long: ${fruit}`;
    }
  };
  const Math=39;
  const English=42;
  const Result=30;
  return (
    <>
      <div className='container-fluid d-flex' >
        <div className='col-md-3'>
          <Dashbord />
        </div>

        <div className='bg-white col-md-9' style={{ marginTop: "88px" }} >

          <div className="text-end p-3">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Add Bus</button>
          </div>

          <div className='p-4 table-responsive-lg card' >
            <table class="table table-hover">
              <thead class="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Math</th>
                  <th scope="col">English</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <th scope="row">
                  <ul>
                    {fruits.map((fruit, index) => (
                      <li key={index.toString()}>
                        {/* Invoke the function and display the result */}
                        {customFunction(fruit, index)}
                      </li>
                    ))}
                  </ul>
                  </th>
                  <td>
                    <select>
                      {fruits.map((item, index) => {
                        return <option key={index.toString()}> Item at index{index}: {item}</option>
                      })}
                    </select>
                  </td>
                  <td>
                    {
                      Math>=40? <h1>Pass</h1> : <h1>Fail</h1>
                    }
                  </td>
                  <td>
                    {
                     (()=>{
                      if(Result >=80 && Result<=100){
                        return <h1>A+</h1>
                      }
                      else if(Result >=60 && Result<80){
                        return <h1>B</h1>
                      }
                      else if(Result >=40 && Result<60){
                        return <h1>D</h1>
                      }
                      else{
                        return <h1>F</h1>
                      }

                     })()
                    }

                  </td>
                  <td>
                    <a href="">Edit</a>
                    <a href="">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>



        {/* Modal */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Message:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
