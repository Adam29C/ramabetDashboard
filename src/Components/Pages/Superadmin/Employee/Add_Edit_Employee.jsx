import React from "react";
import FormWizardComponent from "../../../Helpers/MultiStepForm";
import Main_Containt from "../../../Layout/Main/Main_Containt";
import PagesIndex from "../../../Pages/PagesIndex";
import { makePermissions } from "./permissions";

function AddEmployee() {
  const userId = localStorage.getItem("userId");

  const navigate = PagesIndex.useNavigate();
  const location = PagesIndex.useLocation();
  const userData = location.state;

  // console.log("location" ,location.state);
  const formik = PagesIndex.useFormik({
    initialValues: {
      employeeName: userData?.employeeName || "",
      username: userData?.username || "",
      password: userData?.password || "",
      designation: userData?.designation || "",
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
      disable: userData ? true : "",
    },
    {
      name: "password",
      label: "Password",
      type: "text",
      label_size: 12,
      col_size: 6,
      disable: userData ? true : "",
    },
    {
      name: "designation",
      label: "Designation",
      type: "text",
      label_size: 12,
      col_size: 6,
      disable: userData ? true : "",
    },
    {
      name: "loginPermission",
      label: "Dashboard/App Permission",
      type: "select",
      label_size: 12,
      col_size: 6,
      options: [
        { label: "Both", values: 0 },
        { label: "Dashboard", values: 1 },
        { label: "Application", values: 2 },
      ],
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
  function updateCheckedStatus(array1, array2) {
    const permissions = array2[0];

    const keyMap = {
      Dashboard: "isDashboard",
      Users: "isUsers",
      Games: "isGames",
      "Games Provider": "isGamesProvider",
      "Games Setting": "isGamesSetting",
      "Games Rates": "isGamesRates",
      "Games Result": "isGamesResult",
      "Games Revert": "isGamesRevert",
      "Games Refund": "isGamesRefund",
      Starline: "isStarline",
      "Starline Provider": "isStarlineProvider",
      "Starline Setting": "isStarlineSetting",
      "Starline Rates": "isStarlineRates",
      "Starline Result": "isStarlineResult",
      "Starline Revert": "isStarlineRevert",
      "Starline Refund": "isStarlineRefund",
      "Andar Bahar": "isAndarBahar",
      "Andar Bahar Provider": "isAndarBaharProvider",
      "Andar Bahar Setting": "isAndarBaharSetting",
      "Andar Bahar Rates": "isAndarBaharRates",
      "Andar Bahar Result": "isAndarBaharResult",
      "Andar Bahar Revert": "isAndarBaharRevert",
      "Andar Bahar Refund": "isAndarBaharRefund",
      "Cutting Group": "isCuttingGroup",
      "Bookie Corner": "isBookieCorner",
      "OC Cutting Group": "isOCCuttingGroup",
      "Final Cutting Group": "isFinalCuttingGroup",
      Wallet: "isWallet",
      "Fund Request": "isFundRequest",
      ExportDebitReport: "isExportDebitReport",
      "View Wallet": "isViewWallet",
      "Request ON/OFF": "isRequestON/OFF",
      "Credit Request": "isCreditRequest",
      "Approved Debit Page": "isApprovedDebitPage",
      "Paytm Request": "isPaytmRequest",
      "Bank Account Request": "isBankAccountRequest",
      "Pending Debit Request": "isPendingDebitRequest",
      "Pending Bank Request": "isPendingBankRequest",
      "Pending Paytm Request": "isPendingPaytmRequest",
      "Declined Request": "isDeclinedRequest",
      Notification: "isNotification",
      News: "isNews",
      "Delete User": "isDeleteUser",
      "App Settings": "isAppSettings",
      "How To Play": "isHowToPlay",
      "Withdraw Screen": "isWithdrawScreen",
      "Notice Board": "isNoticeBoard",
      "Wallet Contact": "isWalletContact",
      "App Version": "isAppVersion",
      Masters: "isMasters",
      "Upi Id": "isUpiId",
      "Add Fund Mode": "isAddFundMode",
      "Manage Employee": "isManageEmployee",
      "Create Employee": "isCreateEmployee",
      Reports: "isReports",
      "Jodi All": "isJodiAll",
      "Sales Report": "isSalesReport",
      "Andar Bahar Sales Report": "isAndarBaharSalesReport",
      "Andar Bahar Total Bids": "isAndarBaharTotalBids",
      "Starline Sales Report": "isStarlineSalesReport",
      "Fund Report": "isFundReport",
      "Total Bids": "isTotalBids",
      "Ajay Sir Report": "isAjaySirReport",
      "Credit Debit Report": "isCreditDebitReport",
      "Daily Report": "isDailyReport",
      "Bidding Report": "isBiddingReport",
      "Customer Balance": "isCustomerBalance",
      "All User Bids": "isAllUserBids",
      "Deleted Users": "isDeletedUsers",
      "Upi Fund Report": "isUpiFundReport",
    };

    function updateNested(array, parentKey) {
      array.forEach((item) => {
        const key = keyMap[item.name];
        if (key !== undefined && permissions[key] !== undefined) {
          item.checked = permissions[key];
        }
        if (item.Nasted && item.Nasted.length > 0) {
          updateNested(item.Nasted);
        }
      });
    }

    updateNested(array1);
    return array1;
  }

  var updatedArray1 = PagesIndex.useEffect(() => {
    if (location?.state?.permission) {
      updatedArray1 = updateCheckedStatus(makePermissions, [
        location?.state?.permission,
      ]);
    }
  }, []);

  const fields1 = [
    {
      name: "permission",
      label: "Create Strategy",
      type: "checkbox",
      label_size: 12,
      title_size: 12,
      col_size: 4,
      options: updatedArray1 || makePermissions,
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
      username: formik.values.username,
      // password: formik.values.password,
      // designation: formik.values.designation,
      loginPermission: formik.values.loginPermission,
      permission: updatedABC,
      ...(location?.state ? { empId: location?.state?._id } : ""),
    };
    let res;
    if (location?.state) {
      res = await PagesIndex.admin_services.UPDATE_EMPLOYEE(req);
    } else {
      const req = {
        adminId: userId,
        employeeName: formik.values.employeeName,
        username: formik.values.username,
        password: formik.values.password,
        designation: formik.values.designation,
        loginPermission: formik.values.loginPermission,

        loginPermission: 1,
        permission: updatedABC,
      };
      res = await PagesIndex.admin_services.CREATE_EMPLOYEE(req);
    }

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

/**
 * 0-for both,
 * 1-for dashboad
 * 2-for chat panel
 */
