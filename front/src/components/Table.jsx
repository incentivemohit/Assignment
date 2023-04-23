import React from "react";

function Table(props) {
  return (
    <>
      <div className="flex justify-center ">
        <div className=" m-3">
          <table className="table-auto bg-white shadow-md mx-2 ">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-3 text-center">ID</th>
                <th className="p-3 text-center">First Name</th>
                <th className="p-3 text-center">Last Name</th>
                <th className="p-3 text-center">Email</th>
                <th className="p-3 text-center">Gender</th>
                <th className="p-3 text-center">Income</th>
                <th className="p-3 text-center">City</th>
                <th className="p-3 text-center">Car</th>
                <th className="p-3 text-center">Quote</th>
                <th className="p-3 text-center">Phone Price</th>
              </tr>
            </thead>
            <tbody className="overflow-auto">
              {props.dataSet.length
                ? props.dataSet.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td className="p-3 text-center">{data.id}</td>
                        <td className="p-3 text-center">{data.first_name}</td>
                        <td className="p-3 text-center">{data.last_name}</td>
                        <td className="p-3 text-center">{data.email}</td>
                        <td className="p-3 text-center">{data.gender}</td>
                        <td className="p-3 text-center">{data.income}</td>
                        <td className="p-3 text-center">{data.city}</td>
                        <td className="p-3 text-center">{data.car}</td>
                        <td className="p-3 text-center">{data.quote}</td>
                        <td className="p-3 text-center">{data.phone_price}</td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
          {props.dataSet.length < 1 ? (
            <p className="text-center text-3xl p-3">Data not found</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Table;
