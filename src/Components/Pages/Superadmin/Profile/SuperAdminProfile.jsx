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
        <div className="col-lg-4 col-xl-5">
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
        </div>
        <div className="col-lg-8 col-xl-7">
    <PagesIndex.SuperAdminChangePassword/>
          <div className="card">
            <div className="card-body">
              
              <div className="media media-reply">
                <img
                  className="mr-3 circle-rounded"
                  src="images/avatar/2.jpg"
                  width={50}
                  height={50}
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <div className="d-sm-flex justify-content-between mb-2">
                    <h5 className="mb-sm-0">
                      Milan Gbah{" "}
                      <small className="text-muted ml-3">about 3 days ago</small>
                    </h5>
                    <div className="media-reply__link">
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-thumbs-up" />
                      </button>
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-thumbs-down" />
                      </button>
                      <button className="btn btn-transparent p-0 ml-3 font-weight-bold">
                        Reply
                      </button>
                    </div>
                  </div>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                    vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                    nisi vulputate fringilla. Donec lacinia congue felis in
                    faucibus.
                  </p>
                </div>
              </div>
              <div className="media media-reply">
                <img
                  className="mr-3 circle-rounded"
                  src="images/avatar/2.jpg"
                  width={50}
                  height={50}
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <div className="d-sm-flex justify-content-between mb-2">
                    <h5 className="mb-sm-0">
                      Milan Gbah{" "}
                      <small className="text-muted ml-3">about 3 days ago</small>
                    </h5>
                    <div className="media-reply__link">
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-thumbs-up" />
                      </button>
                      <button className="btn btn-transparent p-0 mr-3">
                        <i className="fa fa-thumbs-down" />
                      </button>
                      <button className="btn btn-transparent p-0 ml-3 font-weight-bold">
                        Reply
                      </button>
                    </div>
                  </div>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                    vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                    nisi vulputate fringilla. Donec lacinia congue felis in
                    faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PagesIndex.Toast/>
  </div>
  
  )
}

export default SuperAdminProfile