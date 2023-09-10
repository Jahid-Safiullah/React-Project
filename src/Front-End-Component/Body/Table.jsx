import React from 'react'

 {/* data come from form component */}

 function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
        <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact Num.</th>
          <th>Date of Journey</th>
          <th>Date of Journey</th>
          <th>Bus Name</th>
          <th>Bus Type</th>
          <th>Starting Point</th>
          <th>Ending Point</th>
          <th>Seat </th>
          <th>Fare</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.pass_name}</td>
              <td>{data.pass_email}</td>
              <td>{data.pass_contact}</td>
              <td>{data.doj}</td>
              <td>{data.dor}</td>
              <td>{data.select_bus}</td>
              <td>{data.bus_type}</td>
              <td>{data.starting_point}</td>
              <td>{data.ending_point}</td>
              <td>{data.Seat}</td>
              <td>{data.fare}</td>
              
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;



// function Table({ tableData }) {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Profile</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tableData.map((data, index) => {
//           return (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{data.name}</td>
//               <td>{data.email}</td>
//               <td>{data.profile}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }
// export default Table;