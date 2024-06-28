import { replace } from "formik";
import PagesIndex from "../PagesIndex";

const Users = () => {
  const dispatch = PagesIndex.useDispatch();
  const navigate = PagesIndex.useNavigate();
  const [loding,setLoading] = PagesIndex.useState(false)
  const { getGenrateTokenState } = PagesIndex.useSelector(
    (state) => state.CommonSlice
  );

  const generateToken = async () => {
    const val = PagesIndex.Remove_Special_Character(PagesIndex.v4());
    const res = await dispatch(PagesIndex.getGenerateToken(val)).unwrap();
    const res1 = await PagesIndex.LIST_SYSTEM_INFO_API(res?.data?.token)
    let image = res1?.data?.details?.[0]?.backgroundImage
    let logo = res1?.data?.details?.[0]?.logo
    let favIcon = res1?.data?.details?.[0]?.favIcon
  
   $("#dynamic-background").css("background-image", `url(${image && image})`);
   $('#company-logo').attr('src', logo);
   $('#favicon').attr('href', favIcon);

  };

  PagesIndex.useEffect(() => {
    generateToken();
 
  }, []);

  const formik = PagesIndex.useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = PagesIndex.valid_err.USERNAME_ERROR;
      }
      if (!values.password) {
        errors.password = PagesIndex.valid_err.PASSWORD_ERROR;
      } else if (!PagesIndex.Password_Rejex(values.password)) {
        errors.password = PagesIndex.valid_err.PASSWORD__LENGTH_ERROR;
      }
      console.log("errors", errors);
      return errors;
    },
    onSubmit: async (values) => {``
      
      try {
        const req = {
          username: values.username,
          password: values.password,
        };

        const res = await PagesIndex.LOGIN_API(req, getGenrateTokenState);

        if (res?.status === 200) {
          PagesIndex.toast.success(res?.message);
         localStorage.setItem("token", res?.data?.token);
          localStorage.setItem("role",res?.data?.roles)
          localStorage.setItem("userId",res?.data?.id)
          setTimeout(() => {
            navigate("/admin/dashboard");
          }, 1000);
        } else {
          PagesIndex.toast.error(res.message);
        }
      } catch (error) {
        PagesIndex.toast.error(error);
      } finally{
        setLoading(false)
      }
    },
  });

  const fields = [
    {
      name: "username",
      label: "User Name",
      type: "text",
      label_size: 12,
      col_size: 12,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      label_size: 12,
      col_size: 12,
    },
  ];

  return (
    <>
      <PagesIndex.Auth_Containt title="" col_size={"col-md-6"}>
        <PagesIndex.Logo />
        <PagesIndex.Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name={loding ? <PagesIndex.Loader text="Login"/> : "Login"}
          button_Size={"w-100"}
        />
      
      </PagesIndex.Auth_Containt>
      <PagesIndex.Toast />
    </>
  );
};

export default Users;
