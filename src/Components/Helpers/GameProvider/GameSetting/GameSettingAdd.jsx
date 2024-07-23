import React from "react";
import PagesIndex from "../../../Pages/PagesIndex";

const GameProviderAdd = () => {
  const userId = localStorage.getItem("userId");
  const navigate = PagesIndex.useNavigate();
  const location = PagesIndex.useLocation();
  const dispatch = PagesIndex.useDispatch();

  




  const getGameRatesList = async () => {
    const res = await dispatch(
      PagesIndex.commonSlice.Games_Provider_List(userId)
    );
  };

  PagesIndex.useEffect(() => {
    getGameRatesList();
  }, []);



  
  const formik = PagesIndex.useFormik({
    initialValues: {
      providerName: location?.state?.row ? location?.state?.row.providerName : "",
      gameDay: location?.state?.rowData ? location?.state?.rowData.gameDay : "",
      OBT: location?.state?.rowData ? location?.state?.rowData.OBT : "",
      CBT: location?.state?.rowData ? location?.state?.rowData.CBT : "",
      OBRT: location?.state?.rowData ? location?.state?.rowData.OBRT : "",
      CBRT: location?.state?.rowData ? location?.state?.rowData.CBRT : "",
      isClosed: location?.state?.rowData
        ? location?.state?.rowData.isClosed
        : "1",
    },
    validate: (values) => {
      const errors = {};

      // if (!values.providerName) {
      //   errors.providerName = PagesIndex.valid_err.PROVIDER_NAME_ERROR;
      // }

      // if (!values.providerResult) {
      //   errors.providerResult = PagesIndex.valid_err.PROVIDER_RESULT_ERROR;
      // }

      return errors;
    },

    onSubmit: async (values) => {
      try {
        let data = {
          adminId: userId,
          providerName: values.providerName,
          providerResult: values.providerResult,

          activeStatus: values.activeStatus,
          mobile: values.mobile.toString(),
          activeStatus: values.activeStatus,
          ...(location?.state?._id
            ? { gameProviderId: location?.state?._id }
            : ""),
        };
        // if (!location?.state?._id) {
        //   data.resultStatus = values.resultStatus;
        // }

        // const res = location?.state?._id
        //   ? await PagesIndex.admin_services.GAME_PROVIDER_UPDATE_API(data)
        //   :
        await PagesIndex.admin_services.GAME_SETTING_ADD(data);

        if (res?.status === 200) {
          PagesIndex.toast.success(res?.message);
          setTimeout(() => {
            navigate("/admin/games");
          }, 1000);
        } else {
          PagesIndex.toast.error(res.response.data.message);
        }
      } catch (error) {
        PagesIndex.toast.error(error);
      }
    },
  });


  console.log("location?.state?.row" ,formik.values);

  const fields = [
    {
      name: "providerName",
      label: "Game Name",
      type: "text",
      label_size: 6,
      col_size: 6,
    },
    {
      name: "gameDay",
      label: "Game Day",
      type: "select",
      label_size: 6,
      col_size: 6,
      options: [
        { label: "Full Week", value: "all" },
        { label: "Sunday", value: "Sunday" },
        { label: "Monday", value: "Monday" },
        { label: "Tuesday", value: "Tuesday" },
        { label: "Wednesday", value: "Wednesday" },
        { label: "Thursday", value: "Thursday" },
        { label: "Friday", value: "Friday" },
        { label: "Seturday", value: "Seturday" },
      ],
    },
    {
      name: "OBT",
      label: "Open Bid Time",
      type: "time",
      label_size: 6,
      col_size: 6,
    },

    {
      name: "CBT",
      label: "Close Bid Time",
      type: "time",
      title_size: 6,
      col_size: 6,
    },
    {
      name: "OBRT",
      label: "Open Bid Result Time",
      type: "time",
      label_size: 6,
      col_size: 6,
    },

    {
      name: "CBRT",
      label: "Close Bid Result Time",
      type: "time",
      title_size: 6,
      col_size: 6,
    },
    {
      name: "isClosed",
      label: "Is Closed",
      type: "select",
      label_size: 6,
      col_size: 6,
      options: [
        { label: "Open", value: "1" },
        { label: "Close", value: "0" },
      ],
    },
  ];

  return (
    <PagesIndex.Main_Containt
      add_button={true}
      route="/admin/game/settings"
      title="Game Setting Add"
    >
      <PagesIndex.Formikform
        fieldtype={fields.filter((field) => !field.showWhen)}
        formik={formik}
        //   btn_name={loding ? <PagesIndex.Loader text="Submit"/> : "Login"}
        btn_name={location?.state ? "Update" : "Add"}
        button_Size={"w-10"}
        show_submit={true}
      />
      <PagesIndex.Toast />
    </PagesIndex.Main_Containt>
  );
};

export default GameProviderAdd;
