import PagesIndex from "../../PagesIndex";

const CuttingGroup = () => {
  const userId = localStorage.getItem("userId");
  const navigate = PagesIndex.useNavigate();

  const data = "testing";
  const formik = PagesIndex.useFormik({
    initialValues:{
        password: "",
        confirmPassword: "",
    },
    validate:(values)=>{
const errors = {}
      if(!values.password){
        errors.password = PagesIndex.valid_err.PASSWORD_ERROR
      }else if(!PagesIndex.Password_Rejex(values.password)){
        errors.password = PagesIndex.valid_err.PASSWORD__LENGTH_ERROR

      }

      if(!values.confirmPassword){
        errors.confirmPassword = PagesIndex.valid_err.CONFIRM_ERROR
      }else if(values.confirmPassword !== values.password){
        errors.confirmPassword = PagesIndex.valid_err.CONFIRM_AND_NEW_PASSWORD_ERROR
      }


return errors
    },

    onSubmit:async(values)=>{
   

        try {
               
        let data = {
          id : userId,
          password:values.password
      }
            const res = await PagesIndex.admin_services.ADMIN_CHANGE_PASSWORD_API(data)

            if(res?.status === 200){
              PagesIndex.toast.success(res?.message)
              setTimeout(() => {
                navigate("/admin/dashboard")
              }, 1000);
            }else{
              PagesIndex.toast.error(res.message)
            }
        } catch (error) {
            PagesIndex.toast.error(error);
        }

   
    }
  })



const fields = [
    {
        name:"password",
        label:"Password",
        type:"password",
        label_size:12,
        col_size:4
    },


    {
      name: "providername",
      label: "Provider Name",
      type: "select",
      label_size:12,
      col_size: 4,
      options: [
        {
          label: "Active",
          value: true,
        },
        {
          label: "In-Active",
          value: false,
        },
      ],
    },
    
    {
      name: "gamesession",
      label: "Game Session",
      type: "select",
      label_size:12,
      col_size: 4,
      options: [
        {
          label: "Active",
          value: true,
        },
        {
          label: "In-Active",
          value: false,
        },
      ],
    },
]

  return (
    <>
      <div className="content-body">
        {/* <div className="row page-titles mx-0">
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
    </div> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
         
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-2 text-center">Search Panel</h3>
                  <PagesIndex.Formikform
                    fieldtype={fields.filter((field) => !field.showWhen)}
                    formik={formik}
                    //   btn_name={loding ? <PagesIndex.Loader text="Submit"/> : "Login"}
                    btn_name={"Submit"}
                    button_Size={"w-25"}
                    show_submit={true}
                  />
                </div>
              </div>{" "}
            </div>
            <div className="col-lg-4 col-xl-4">
          
            <div className="card">
                <div className="card-body">
                  <h3 className="mb-2 text-center">table</h3>
                 
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <PagesIndex.Toast />
      </div>
    </>
  );
};

export default CuttingGroup;
