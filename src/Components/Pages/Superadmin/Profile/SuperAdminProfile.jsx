import React from 'react'
import PagesIndex from '../../PagesIndex'
const SuperAdminProfile = () => {
  const userId = localStorage.getItem("userId")
  const [data, setData] = PagesIndex.useState("")

  const getProfile = async()=>{
    const res = await PagesIndex.admin_services.ADMIN_PROFILE_GET_API(userId)
    setData(res?.data?.details)
  }

PagesIndex.useEffect(()=>{
  getProfile()
},[])
  
  return (

    <div className="content-body" >
    
    <div className="row page-titles mx-0">
      <div className="col p-md-0">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="javascript:void(0)">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="javascript:void(0)">Home</a>
          </li>
        </ol>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="media align-items-center mb-4">
                <img
                  className=""
                  src={PagesIndex.profileLogo}
                  width={100}
                  height={100}
                  alt=""
                />
             
              </div>
       
                 <div className="media-body">
                  <h3 className="mb-2 ">{data?.username}</h3>
                  <h4 className='about-title-text'>About Me</h4>
              <p className="text-muted">
              Hi I'm admin <br/>
              News Coming Soon Stay Tuned
              </p>
              <ul className="card-profile__info">
                <li className="mb-1">
                  <strong className="text-dark mr-2">Mobile : </strong>{" "}
                  <span>{data?.mobile}</span>
                </li>
        
              </ul>
                </div>
             
            
            </div>
          </div>
          <PagesIndex.SuperAdminChangePassword/>
        </div>
        <div className="col-lg-6 col-xl-6">
        <PagesIndex.TeamMets/>

   
        </div>
      </div>
    </div>
    <PagesIndex.Toast/>
  </div>
  
  )
}

export default SuperAdminProfile