import { useEffect, useState } from "react";
export default function Form() {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Address: "",
    Phone: "",
    Salary: "",
    Doj: "",
    Working: "working",
    Designation: "",
    Remark: ""
  });
  const [error, setError] = useState([]);
  function addForm() {
    var e = [];
    const regex = /^[A-Za-z]+$/;

    if (
      formData.FullName == "" ||
      formData.Email == "" ||
      formData.Phone == "" ||
      formData.Doj == "" ||
      formData.Remark == ""
    ) {
      e.push("Please enter the required field");
    }
    if (formData.Phone.length >= 13) {
      e.push("Phone number should be less than 13 digit");
    }
    if (formData.Salary >= 500000) {
      e.push("Salary should not be greater than 5 lakh");
    }
    if (formData.Salary == 0) {
      e.push("Salary should not 0");
    }
    if (new Date(formData.Doj).getDate() > new Date()) {
      e.push("Date of joining should not be greater than todays date");
    }
    if (regex.test(formData.FullName)) {
      e.push("There Cannot be number in first name");
    }
    console.log(e);
    if (e.length == 0) {
      localStorage.setItem("object", JSON.stringify([formData]));
      e = [];
      setError(e);
    } else {
      setError(e);
      return;
    }
  }
  return (
    <div>
      {error.length != 0 ? (
        <div class="alert alert-dismissible alert-danger">
          
          <button
            class="btn-close"
            data-bs-dismiss="alert"
          ></button>
          <h4 class="alert-heading">Error!</h4>
          {error.map((msg, i) => {
            return (
              <p class="mb-0" key={i}>
                {msg}
              </p>
            );
          })}
        </div>
      ) : null}

      <main style={{ margin: "auto" }}>
        
        <h2 style={{ textAlign: "center" }}>Validation Form</h2>
        <form
          name="form"
          className="border border-dark p-5"
          style={{ width: 500, margin: "auto" }}
        >
          <fieldset>
            <div className="form-group">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="fullName"
                  className={
                    formData.FullName == ""
                      ? "form-control auto"
                      : "form-control auto is-valid"
                  }
                  id="full-name"
                  pattern="[a-zA-Z]+"
                  value={formData.FullName}
                  onChange={(e) => {
                    setFormData({ ...formData, FullName: e.target.value });
                  }}
                  required=""
                />
                <label htmlFor="floatingInput1">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="email"
                  type="email"
                  value={formData.Email}
                  className={
                    formData.Email == ""
                      ? "form-control"
                      : "form-control is-valid"
                  }
                  onChange={(e) => {
                    setFormData({ ...formData, Email: e.target.value });
                  }}
                  id="floatingInput3"
                  required=""
                />
                <label htmlFor="floatingInput3">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  name="address"
                  type="text"
                  value={formData.Address}
                  onChange={(e) => {
                    setFormData({ ...formData, Address: e.target.value });
                  }}
                  className={
                    formData.Address == ""
                      ? "form-control"
                      : "form-control is-valid"
                  }
                  id="floatingInput4"
                  pattern="[a-zA-Z]+"
                  required=""
                />
                <label htmlFor="floatingInput4">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="phone"
                  type="tel"
                  value={formData.Phone}
                  onChange={(e) => {
                    setFormData({ ...formData, Phone: e.target.value });
                  }}
                  className={
                    formData.Phone == ""
                      ? "form-control"
                      : "form-control is-valid"
                  }
                  id="floatingInput5"
                  pattern="^(?:(?:\+|0{0,2})977(\s*[\-]\s*)?|[0]?)?[789]\d{9}$"
                  required=""
                />
                <label htmlFor="floatingInput5">Phone No.</label>
              </div>
            </div>
            <select
              name="designtion"
              className="form-select"
              value={formData.Designation}
              onChange={(e) => {
                setFormData({ ...formData, Designation: e.target.value });
              }}
              aria-label="Default select example"
              required=""
            >
              <option selected="">Designation</option>
              <option value="Chief Executive Officer">
                Chief Executive Officer
              </option>
              <option value="Chief Operating Officer">
                Chief Operating Officer
              </option>
              <option
                value="Chief Financial Officer
              "
              >
                Chief Financial Officer
              </option>
              <option
                value="Chief Technology Officer
              "
              >
                Chief Technology Officer
              </option>
              <option
                value="Chief Marketing Officer
              "
              >
                Chief Marketing Officer
              </option>
              <option
                value="Chief Legal Officer
              "
              >
                Chief Legal Officer
              </option>
            </select>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                defaultValue="Working"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Working
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefaultOne"
                id="flexRadioDefault2"
                defaultValue="Not Working"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Not Working
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Remark</label>
              <textarea
                className={
                  formData.Address == ""
                    ? "form-control"
                    : "form-control is-valid"
                }
                id="exampleFormControlTextarea1"
                value={formData.Remark}
                onChange={(e) => {
                  setFormData({ ...formData, Remark: e.target.value });
                }}
                rows={3}
                name="remark"
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <label className="form-label mt-4">Salary</label>
              <div className="form-group">
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input
                    name="salary"
                    type="number"
                    className={
                      formData.Salary == ""
                        ? "form-control"
                        : "form-control is-valid"
                    }
                    aria-label="Amount (to the nearest dollar)"
                    required=""
                    value={formData.Salary}
                    onChange={(e) => {
                      setFormData({ ...formData, Salary: e.target.value });
                    }}
                  />
                  <span className="input-group-text">.00</span>
                </div>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                name="dob"
                type="date"
                className="form-control"
                id="floatingInput6"
                className={
                  formData.Doj == "" ? "form-control" : "form-control is-valid"
                }
                value={formData.Doj}
                onChange={(e) => {
                  setFormData({ ...formData, Doj: e.target.value });
                }}
              />
              <label htmlFor="floatingInput6">Date of Join</label>
            </div>
            <button type="button" onClick={addForm} className="btn btn-success">
              Submit
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  );
}
