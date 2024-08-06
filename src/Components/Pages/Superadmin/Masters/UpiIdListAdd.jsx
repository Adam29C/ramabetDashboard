import React from "react";
import PagesIndex from "../../../Pages/PagesIndex";

const UpiIdListAdd = () => {
  const userId = localStorage.getItem("userId");
  const navigate = PagesIndex.useNavigate();

  const formik = PagesIndex.useFormik({
    initialValues: {
      upiName: "",
    },
    validate: (values) => {
        const errors = {};
        if (!values.upiName) {
          errors.upiName = PagesIndex.valid_err.EMPTY_UPI_ERROR;
        }
        return errors;
    },

    onSubmit: async (values) => {
      try {
        let apidata = {
          adminId: userId,
          upiName: values.upiName,
        };

        const res = await PagesIndex.admin_services.ADD_UPI_LIST_API(apidata);
        console.log(res, 100);
        if (res?.status === 200) {
          PagesIndex.toast.success(res?.message);
          setTimeout(() => {
            navigate("/admin/masters/UPI");
          }, 1000);
        } else {
          PagesIndex.toast.error(res.response.data.message);
        }
      } catch (error) {
        PagesIndex.toast.error(error);
      }
    },
  });

  const fields = [
    {
      name: "upiName",
      label: "Upi Id",
      type: "text",
      label_size: 6,
      col_size: 6,
    },
  ];

  return (
    <PagesIndex.Main_Containt
      add_button={true}
      route="/admin/masters/UPI"
      title={"Add Upi Id"}
      btnTitle="Back"
    >
      <PagesIndex.Formikform
        fieldtype={fields.filter((field) => !field.showWhen)}
        formik={formik}
        btn_name={"Add"}
        button_Size={"w-25"}
        show_submit={true}
      />

      <PagesIndex.Toast />
    </PagesIndex.Main_Containt>
  );
};

export default UpiIdListAdd;
