import React from "react";
import FormWizardComponent from "../../../Helpers/MultiStepForm";
import Main_Containt from "../../../Layout/Main/Main_Containt";
import PagesIndex from "../../../Pages/PagesIndex";
import { makePermissions } from "./permissions";

function AddEmployee() {
  const userId = localStorage.getItem("userId");

  const navigate = PagesIndex.useNavigate();

  const formik = PagesIndex.useFormik({
    initialValues: {
      employeeName: "",
      username: "",
      password: "",
      designation: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.employeeName) {
        errors.domain = PagesIndex.valid_err.FULLNAME_ERROR;
      }

      if (!values.username) {
        errors.username = PagesIndex.valid_err.USERNAME_ERROR;
      }
      if (!values.password) {
        errors.password = PagesIndex.valid_err.PASSWORD_ERROR;
      }
      if (!values.designation) {
        errors.designation = PagesIndex.valid_err.DESIGNATION_ERROR;
      }

      return errors;
    },
    onSubmit: async (values) => {},
  });

  const fields = [
    {
      name: "employeeName",
      label: "name",
      type: "text",
      label_size: 12,
      col_size: 6,
    },

    {
      name: "username",
      label: "User Name",
      type: "text",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "password",
      label: "Password",
      type: "text",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "designation",
      label: "Designation",
      type: "text",
      label_size: 12,
      col_size: 6,
    },
  ];

  const formik1 = PagesIndex.useFormik({
    initialValues: InitialValues,
    validate: (values) => {
      const errors = {};
      return errors;
    },
    onSubmit: async (values) => {},
  });

  const fields1 = [
    {
      name: "permission",
      label: "Create Strategy",
      type: "checkbox",
      label_size: 12,
      title_size: 12,
      col_size: 4,
      options: makePermissions,
    },
  ];

  const handleComplete = async () => {
    let updatedABC = {};
    for (let key in formik1.values) {
      let newKey = "is" + key.replace(/\s+/g, "");
      updatedABC[newKey] = formik1.values[key];
    }

    const req = {
      adminId: userId,
      employeeName: formik.values.employeeName,
      username: formik.values.username,
      password: formik.values.password,
      designation: formik.values.designation,
      loginPermission: 1,
      permission: updatedABC,
    };

    const res = await PagesIndex.admin_services.CREATE_EMPLOYEE(req);

    if (res.status == 200) {
      toast.success(res.message);
      setTimeout(() => {
        navigate("/admin/employees");
      }, 1500);
    } else {
      toast.error(res.message);
    }
  };

  const tabs = [
    {
      title: "Personal details",
      icon: "ti-user",
      content: (
        <PagesIndex.Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name="Next"
          show_submit={false}
        />
      ),
    },
    {
      title: "Manage Permissions",
      icon: "ti-check",
      content: (
        <PagesIndex.Formikform
          fieldtype={fields1.filter((field) => !field.showWhen)}
          formik={formik1}
          btn_name="Add Panel"
        />
      ),
    },
  ];


  return (
    <Main_Containt title="Add Users" col_size={12}>
      <FormWizardComponent
        shape="circle"
        color="green"
         stepSize="sm"
        onComplete={handleComplete}
        tabs={tabs}
      />
    </Main_Containt>
  );
}

export default AddEmployee;

export const InitialValues = {
  Dashboard: false,
  Users: false,
  Games: false,
  "Games Provider": false,
  "Games Setting": false,
  "Games Rates": false,
  "Games Result": false,
  "Games Revert": false,
  "Games Refund": false,
  Starline: false,
  "Starline Provider": false,
  "Starline Setting": false,
  "Starline Rates": false,
  "Starline Result": false,
  "Starline Revert": false,
  "Starline Refund": false,
  "Starline Profit Loss": false,
  "Andar Bahar": false,
  "Andar Bahar Provider": false,
  "Andar Bahar Setting": false,
  "Andar Bahar Rates": false,
  "Andar Bahar Result": false,
  "Andar Bahar Revert": false,
  "Andar Bahar Refund": false,
  "AB Provider": false,
  "AB Setting": false,
  "AB Rates": false,
  "AB Profit Loss": false,
  "AB Result": false,
  "AB Revert": false,
  "AB Refund": false,
  "Cutting Group": false,
  "Bookie Corner": false,
  "OC Cutting Group": false,
  "Final Cutting Group": false,
  Wallet: false,
  "Fund Request": false,
  ExportDebitReport: false,
  "View Wallet": false,
  "Request ON/OFF": false,
  "Credit Request": false,
  "Approved Debit Page": false,
  "Paytm Request": false,
  "Bank Account Request": false,
  "Pending Debit Request": false,
  "Pending Bank Request": false,
  "Pending Paytm Request": false,
  "Declined Request": false,
  Notification: false,
  News: false,
  "Delete User": false,
  "App Settings": false,
  "How To Play": false,
  "Withdraw Screen": false,
  "Notice Board": false,
  "Profile Note": false,
  "Wallet Contact": false,
  "App Version": false,
  Masters: false,
  "Upi Id": false,
  "Add Fund Mode": false,
  "Manage Employee": false,
  "Create Employee": false,
  Reports: false,
  "Jodi All": false,
  "Sales Report": false,
  "Andar Bahar Sales Report": false,
  "Andar Bahar Total Bids": false,
  "Starline Sales Report": false,
  "Fund Report": false,
  "Total Bids": false,
  "Ajay Sir Report": false,
  "Credit Debit Report": false,
  "Daily Report": false,
  "Bidding Report": false,
  "Customer Balance": false,
  "All User Bids": false,
  "Deleted Users": false,
  "Upi Fund Report": false,
  Invoices: false,
};
