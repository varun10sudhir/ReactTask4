import { useState, useEffect } from "react"
import Axios from "axios"
import "./DataTable.css"

export function DataTable() {
  const [data, setData] = useState([])
  const DataTableStyle = {
    width: "100%",
  }
  const RowStyle = {
    width: "100%",
    height: "30px",
  }
  const imageStyle = {
    width: "auto",
    height: "100%",
  }
  const SnoStyle = {
    width: "2%",
    height: "100%",
  }
  const Profile_PicStyle = {
    width: "5%",
    height: "100%",
  }
  const firstNameStyle = {
    width: "8%",
    height: "100%",
  }
  const lastNameStyle = {
    width: "8%",
    height: "100%",
  }
  const genderStyle = {
    width: "5%",
    height: "100%",
  }
  const emailStyle = {
    width: "16%",
    height: "100%",
  }
  const usernameStyle = {
    width: "8%",
    height: "100%",
  }
  const domainStyle = {
    width: "10%",
    height: "100%",
  }
  const IPStyle = {
    width: "10%",
    height: "100%",
  }
  const universityStyle = {
    width: "28%",
    height: "100%",
  }
  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.users)
        } else {
          Promise.reject(res.status)
        }
      })
      .catch((err) => {
        alert(err)
      })
  }, [])
  return (
    <div className="border-light rounded" style={DataTableStyle}>
      <div className="d-flex text-center" style={RowStyle}>
        <div className="border-light-bottom p-1" style={SnoStyle}>
          Sno
        </div>
        <div className="border-light-bottom p-1" style={Profile_PicStyle}>
          Profile_Pic
        </div>
        <div className="border-light-bottom p-1" style={firstNameStyle}>
          First Name
        </div>
        <div className="border-light-bottom p-1" style={lastNameStyle}>
          Last Name
        </div>
        <div className="border-light-bottom p-1" style={genderStyle}>
          Gender
        </div>
        <div className="border-light-bottom p-1" style={emailStyle}>
          E-mail
        </div>
        <div className="border-light-bottom p-1" style={usernameStyle}>
          Username
        </div>
        <div className="border-light-bottom p-1" style={domainStyle}>
          Domain
        </div>
        <div className="border-light-bottom p-1" style={IPStyle}>
          IP
        </div>
        <div className="border-light-bottom p-1" style={universityStyle}>
          University
        </div>
      </div>
      {data.map((val) => {
        return (
          <div className="d-flex" style={RowStyle} key={val.id}>
            <div className="p-1" style={SnoStyle}>
              {val.id}
            </div>
            <div className="p-1" style={Profile_PicStyle}>
              <img src={val.image} style={imageStyle} alt="profile_pic"></img>
            </div>
            <div className="p-1" style={firstNameStyle}>
              {val.firstName}
            </div>
            <div className="p-1" style={lastNameStyle}>
              {val.lastName}
            </div>
            <div className="p-1" style={genderStyle}>
              {val.gender}
            </div>
            <div className="p-1" style={emailStyle}>
              {val.email}
            </div>
            <div className="p-1" style={usernameStyle}>
              {val.username}
            </div>
            <div className="p-1" style={domainStyle}>
              {val.domain}
            </div>
            <div className="p-1" style={IPStyle}>
              {val.ip}
            </div>
            <div className="p-1" style={universityStyle}>
              {val.university}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DataTable
