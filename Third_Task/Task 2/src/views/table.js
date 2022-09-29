export default function Table({ dd }) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Full Name</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Phone</th>
          <th scope="col">Salary</th>
          <th scope="col">Date Of Joining</th>
          <th scope="col">Working Status</th>
          <th scope="col">Designation</th>
          <th scope="col">Remark</th>
        </tr>
      </thead>
      <tbody id="tabCont">
        {dd.map((d) => {
          return (
            <tr>
              <td id="t1">{d["FullName"]}</td>
              <td id="t2">{d["Email"]}</td>
              <td id="t3">{d["Address"]}</td>
              <td id="t4">{d["Phone"]}</td>
              <td id="t5">{d["Salary"]}</td>
              <td id="t6">{d["Doj"]}</td>
              <td id="t7">{d["Working"]}</td>
              <td id="t8">{d["Designation"]}</td>
              <td id="t9">{d["Remark"]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
