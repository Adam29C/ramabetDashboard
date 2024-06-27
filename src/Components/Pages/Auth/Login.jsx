import React from "react";
import Main_Containt from "../../Layout/Main/Auth_content";
import Formikform from "../../Helpers/FormikForm/Form";
import * as valid_err from "../../Utils/Common_Msg";
import { useFormik } from "formik";
import Logo from "../../Layout/Logo/Logo_png";
import { Name_regex , Password_Rejex } from "../../Utils/Valid_Rejex";
// import { USERNAME_ERROR } from "../../Utils/Common_Msg";

const Users = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.username ) {
        errors.username = valid_err.USERNAME_ERROR;
      }

      if (!values.password) {
        errors.password = valid_err.DOMAIN_ERROR;
      } else if (!Password_Rejex(values.password)) {
        errors.password = valid_err.PASSWORD__LENGTH_ERROR;
      }


      console.log("errors" ,errors);
      return errors;
    },
    onSubmit: async (values) => {
      const req = {
        // username: values.panel_name,
        // password: values.domain,
      };

      // await dispatch(Add_Panel_data({ req: req, token: user_token }))
      //   .unwrap()
      //   .then((response) => {
      //     if (response.status === 409) {
      //       toast.error(response.data.msg);
      //     } else if (response.status) {
      //       toast.success(response.msg);

      //       setTimeout(() => {
      //         navigate("/super/alladmins");
      //       }, 1000);
      //     } else if (!response.status) {
      //       toast.error(response.msg);
      //     }
      //   });
    },
  });

  const fields = [
    {
      name: "name",
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
      <Main_Containt title="" col_size={"col-md-6"}>
        <Logo />
        <Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name="Add Panel"
        />
      </Main_Containt>
    </>
  );
};

export default Users;
