import React from "react";
import Main_Containt from "../../../Layout/Main/Main_Containt";
import Formikform from "../../../Helpers/FormikForm/Form";
// import * as valid_err from "../../../Utils/Common_Messages";
import { useFormik } from "formik";
const System = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      logo: "",
      fav_icon: "",
      login_background: "",
    },
    validate: (values) => {
      const errors = {};
      return errors;
    },
    onSubmit: async (values) => {
     
    },
  });

  const fields = [
    {
      name: "title",
      label: "Title",
      type: "text",
      label_size: 12,
      col_size: 12,
    },
    {
      name: "logo",
      label: "Logo",
      type: "file",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "fav_icon",
      label: "Fav Icon",
      type: "file",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "login_background",
      label: "Login Background",
      type: "file",
      label_size: 12,
      col_size: 6,
    },
  ];
  return (
    <Main_Containt title="Add Users" col_size={12}>
      <Formikform
        fieldtype={fields.filter((field) => !field.showWhen)}
        formik={formik}
        btn_name="Add Panel"
        additional_field={
          <>
            {formik.errors.title && (
              <div style={{ color: "red" }}>{formik.errors.title}</div>
            )}
          </>
        }
      />
    </Main_Containt>
  );
};

export default System;
