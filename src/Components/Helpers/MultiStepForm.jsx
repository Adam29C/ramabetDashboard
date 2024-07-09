import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import Main_Containt from "../Layout/Main/Main_Containt";
import Formikform from "../Helpers/FormikForm/Form";
// import * as valid_err from "../Utils/Common_Messages";
import { useFormik } from "formik";
import { makePermissions } from "../Pages/Superadmin/Employee/permissions";
import PagesIndex from "../Pages/PagesIndex";
import { CREATE_EMPLOYEE } from "../Services/SuperAdminServices";
import { useState } from "react";
function App() {
  const userId = localStorage.getItem("userId");

  const [setUserData, setsetUserData] = useState({});

  const tabChanged = ({ prevIndex, nextIndex, currentIndex }) => {};

  const formik = useFormik({
    initialValues: {
      employeeName: "",
      username: "",
      password: "",
      designation: "",
    },

    validate: (values) => {
      const errors = {};

      // if (!values.employeeName) {
      //   errors.domain = valid_err.DOMAIN_ERROR;
      // }

      // if (!values.username) {
      //   errors.port = valid_err.PORT_ERROR;
      // }

      // if (!values.password) {
      //   errors.key = valid_err.KEY_ERROR;
      // }

      // if (!values.designation) {
      //   errors.db_url = valid_err.DBURL_ERROR;
      // }

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

  const formik1 = useFormik({
    initialValues: {
      "Dashboard": false,
      "Users": false,
      "Games": false,
      "Games Provider": false,
      "Games Setting": false,
      "Games Rates": false,
      "Games Result": false,
      "Games Revert": false,
      "Games Refund": false,
      "Starline": false,
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
      "Wallet": false,
      "Fund Request": false,
      "ExportDebitReport": false,
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
      "Notification": false,
      "News": false,
      "Delete User": false,
      "App Settings": false,
      "How To Play": false,
      "Withdraw Screen": false,
      "Notice Board": false,
      "Profile Note": false,
      "Wallet Contact": false,
      "App Version": false,
      // Masters: false,
      "Upi Id": false,
      "Add Fund Mode": false,
      "Manage Employee": false,
      "Create Employee": false,
      // Reports: false,
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
    },

    validate: (values) => {
      const errors = {};

      // if (!values.panel_name && formik.touched.panel_name) {
      //   errors.panel_name = valid_err.PANEL_NAME_ERROR;
      // }

      // if (!values.domain) {
      //   errors.domain = valid_err.DOMAIN_ERROR;
      // }

      // if (!values.port) {
      //   errors.port = valid_err.PORT_ERROR;
      // }

      // if (!values.key) {
      //   errors.key = valid_err.KEY_ERROR;
      // }

      // if (!values.db_url) {
      //   errors.db_url = valid_err.DBURL_ERROR;
      // }

      // if (!values.db_name) {
      //   errors.db_name = valid_err.DBNAME_ERROR;
      // }

      // if (!values.backend_rul) {
      //   errors.backend_rul = valid_err.DBNAME_ERROR;
      // }

      return errors;
    },
    onSubmit: async (values) => {
      return;
      const res = await CREATE_EMPLOYEE({ req: req, token: user_token });
    },
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

    // {
    //   name: "Create_Strategy",
    //   label: "Create Strategy",
    //   type: "checkbox",
    //   label_size: 12,
    //   title_size: 6,
    //   col_size: 3,
    //   options: [
    //     {
    //       id: 1,
    //       label: "check1",
    //       checked: true,
    //       nsted_call_size: 12,
    //       Nasted: [
    //         {
    //           id: 1,
    //           label: "Nasted",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted",
    //           checked: true,
    //         },
    //       ],
    //     },
    //     {
    //       id: 1,
    //       label: "check1",
    //       checked: true,
    //       Nasted: [
    //         {
    //           id: 1,
    //           label: "Nasted2",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted2",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted2",
    //           checked: true,
    //         },
    //       ],
    //     },
    //     {
    //       id: 1,
    //       label: "check1",
    //       checked: true,
    //       Nasted: [
    //         {
    //           id: 1,
    //           label: "Nasted3",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted3",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted3",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted3",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted3",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted3",
    //           checked: true,
    //         },
    //       ],
    //     },
    //     {
    //       id: 1,
    //       label: "check1",
    //       checked: true,
    //       Nasted: [
    //         {
    //           id: 1,
    //           label: "Nasted3",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted3",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted3",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted3",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted3",
    //           checked: true,
    //         },
    //         {
    //           id: 1,
    //           label: "Nasted3",
    //           checked: true,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];

  const handleComplete = () => {
    console.log("forrrr", formik1.values);

    const req = {
      adminId: userId,
      employeeName: formik.values.employeeName,
      username: formik.values.username,
      password: formik.values.password,
      designation: formik.values.designation,
      loginPermission: 1,
      permission: { isDashboard: true },
    };

    console.log("dasdsa", req);
  };

  return (
    <>
      <FormWizard
        shape="circle"
        color="#e74c3c"
        stepSize="sm"
        onComplete={handleComplete}
        onTabChange={tabChanged}
      >
        <FormWizard.TabContent title="Personal details" icon="ti-user">
          <Formikform
            fieldtype={fields.filter((field) => !field.showWhen)}
            formik={formik}
            btn_name="Next"
            show_submit={false}
          />
        </FormWizard.TabContent>

        <FormWizard.TabContent title="Permissions" icon="ti-check">
          <Formikform
            fieldtype={fields1.filter((field) => !field.showWhen)}
            formik={formik1}
            btn_name="Add Panel"
          />
        </FormWizard.TabContent>
      </FormWizard>
    </>
  );
}

export default App;
