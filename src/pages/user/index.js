import { useState } from "react";

function FinanceTracker() {  
  const [formValues, setFormValues] = useState({
    transDate: "",
    month: "",
    transType: "",
    frmAcc: "",
    toAcc: "",
    amount: "",
    filename: "",
    notes: "",
    id: "",
  });
  const [formError, setFormErrors] = useState({
    transDate: "",
    month: "",
    transType: "",
    frmAcc: "",
    toAcc: "",
    amount: "",
    Receipt: "",
    filename: "",
    notes: "",
    id: "",
  })

  const date = new Date();
  let year = date.getFullYear();


  function submitHandle(e) {
    e.preventDefault();
    let sendErrors = {...setFormErrors};
    let errorExist = {...formError};
    const validate = {...formValues};
   Object.keys(validate).map((key,index)=>{
    if(validate[key]===""){
sendErrors = {...sendErrors,[key]:"This is a required field"}
    }
    else if(validate['frmAcc']===validate['toAcc']){
sendErrors = {...sendErrors,'frmAcc':"To and From Accounts cannot be same"}
sendErrors = {...sendErrors,'toAcc':"To and From Accounts cannot be same"}
    }else {
      sendErrors = { ...sendErrors, [key]: "" };
    }
   });
setFormErrors(sendErrors);
const checkError = Object.values(errorExist).filter((item)=>item !=="");
console.log(checkError,"checkerror");
  }
  function handleChange(e) {
    const getFormValues = { ...formValues, [e.target.name]: e.target.value, };
    setFormValues(getFormValues);
    switch (e.target.name) {
      case "transDate":
        if (e.target.value) {
          setFormErrors({ ...formError, transDate: "", })
        }
        break;
      case "month":
        if (e.target.value) {
          setFormErrors({ ...formError, month: "", })
        }
        break;
      default:
        break;

      case "transType":
        if (e.target.value) {
          setFormErrors({ ...formError, transType: "", })
        }
        break;

      case "frmAcc":
        if (e.target.value) {
          setFormErrors({ ...formError, frmAcc: "", })
        }
        break;
      case "toAcc":
        if (e.target.value) {
          setFormErrors({ ...formError, toAcc: "", })
        }
        break;

      case "amount":
        if (e.target.value < 0) {
          setFormErrors({ ...formError, amount: "The amount must be greater than 0", })
        } else {
          setFormErrors({ ...formError, amount: "", })
        }
        break;

      case "notes":
        if (e.target.value.length < 240) {
          setFormErrors({ ...formError, notes: "", })
        } else {
          setFormErrors({
            ...formError,
            notes: "The length of your notes must be less then 240",
          });
        }
        break;
    }

  };



return (
  <div className="App">
    <div className="container">
      <h1>Finance Tracker</h1>
      <form className="form-control" onSubmit={submitHandle}>
        <div className="container">
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Transaction Date :</label>
                </td>
                <td>
                  <input
                    type="date"
                    name="transDate"
                    // value={formValues.transDate}
                    onChange={handleChange}
                  ></input>
                  <tr>
                    <td>
                      <div className="errorStyle">{formError.transDate}</div>
                    </td>
                  </tr>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Month Year</label>
                </td>
                <td>
                  <select id="getmonth" name="month" onChange={handleChange}>
                    <option value="0">--Select Month--</option>
                    <option value={`Janaury ${year}`}>Janaury {year}</option>
                    <option value={`February ${year}`}>
                      February {year}
                    </option>
                    <option value={`March ${year}`}>March {year}</option>
                    <option value={`April ${year}`}>April {year}</option>
                    <option value={`May ${year}`}>May {year}</option>
                    <option value={`June ${year}`}>June {year}</option>
                    <option value={`July ${year}`}>July {year}</option>
                    <option value={`August ${year}`}>August {year}</option>
                    <option value={`September ${year}`}>
                      September {year}
                    </option>
                    <option value={`October ${year}`}>October {year}</option>
                    <option value={`November ${year}`}>
                      November {year}
                    </option>
                    <option value={`December ${year}`}>
                      December {year}
                    </option>
                  </select>
                  <div className="errorStyle">{formError.month}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Transaction Type</label>
                </td>
                <td>
                  <select
                    id="transactionType"
                    name="transType"
                    onChange={handleChange}
                  >
                    <option value="">--Select Transaction-</option>
                    <option value="Home">Home</option>
                    <option value="Personal Expense">Personal Expense</option>
                    <option value="Income">Income</option>
                  </select>
                  <div className="errorStyle">{formError.transType}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>From Account</label>
                </td>
                <td>
                  <select id="frmAcc" name="frmAcc" onChange={handleChange}>
                    <option value="">--Select From Account--</option>
                    <option value="Personal Account">Personal Account</option>
                    <option value="Real Living">Real Living</option>
                    <option value="My Dream House">My Dream House</option>
                    <option value="Full Circle">Full Circle</option>
                    <option value="Core Realtors">Core Realtors</option>
                    <option value="Big Block">Big Block</option>
                  </select>
                  <div className="errorStyle">{formError.frmAcc}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>To Account</label>
                </td>
                <td>
                  <select id="toAcc" name="toAcc" onChange={handleChange}>
                    <option value="">--Select To Account--</option>
                    <option value="Personal Account">Personal Account</option>
                    <option value="Real Living">Real Living</option>
                    <option value="My Dream House">My Dream House</option>
                    <option value="Full Circle">Full Circle</option>
                    <option value="Core Realtors">Core Realtors</option>
                    <option value="Big Block">Big Block</option>
                  </select>
                  <div className="errorStyle">{formError.toAcc}</div>
                </td>
              </tr>

              <tr>
                <td>
                  <label>Amount</label>
                </td>
                <td>
                  <input
                    type="number"
                    name="amount"
                    value={formValues.amount}
                    onChange={handleChange}
                  ></input>
                  <div className="errorStyle">{formError.amount}</div>
                </td>
              </tr>

              <tr>
                <td>
                  <label>Receipt</label>
                </td>
                <td>
                  <input
                    type="file"
                    id="myFile"
                    name="filename"
                    onChange={(e) => { handleChange(e); }}
                  ></input>
                  <div className="errorStyle">{formError.filename}</div>
                </td>
                <tr><td>
                  {/* <img src={formValues.filename} alt="alt"></img> */}
                </td></tr>
              </tr>
              <tr>
                <td>
                  <label>Notes</label>
                </td>
                <td>
                  <textarea
                    rows="5"
                    cols="20"
                    name="notes"
                    onChange={handleChange}
                  ></textarea>
                  <div className="errorStyle">{formError.notes}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" value="Submit" className='btn btn-primary' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
      {/* <Link to={'/showTable'} className="btn btn-secondary">View Transaction</Link> */}
    </div>
  </div>
)
}
export default FinanceTracker;