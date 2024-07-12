import React from "react";
import PagesIndex from "../../Pages/PagesIndex";

const GameProviderAdd = () => {
  const userId = localStorage.getItem("userId");
  const navigate = PagesIndex.useNavigate();
  const location = PagesIndex.useLocation();
  const formik = PagesIndex.useFormik({
    initialValues: {
      // game: location?.state ? location?.state?.game : "",
      providerName: location?.state ? location?.state?.providerName : "",
      providerResult: location?.state ? location?.state?.providerResult : "",
      resultStatus: 0,
      mobile: location?.state ? location?.state?.mobile : "",
      activeStatus: location?.state.activeStatus
       
    },
    validate: (values) => {
      const errors = {};
      // if (!values.game) {
      //   errors.game = PagesIndex.valid_err.GAME_NAME_ERROR;
      // }

      if (!values.providerName) {
        errors.providerName = PagesIndex.valid_err.PROVIDER_NAME_ERROR;
      }

      if (!values.providerResult) {
        errors.providerResult = PagesIndex.valid_err.PROVIDER_RESULT_ERROR;
      }

      if (!values.mobile) {
        errors.mobile = PagesIndex.valid_err.CONTACT_ERROR;
      }

      return errors;
    },

    onSubmit: async (values) => {
      try {
        let data = {
          adminId: userId,
          // game: values.game,
          providerName: values.providerName,
          providerResult: values.providerResult,

          activeStatus: values.activeStatus,
          mobile: values.mobile.toString(),
          activeStatus: values.activeStatus,
          ...(location?.state?._id
            ? { gameProviderId: location?.state?._id }
            : ""),
        };
        if (!location?.state?._id) {
          data.resultStatus = values.resultStatus;
        }

        const res = location?.state?._id
          ? await PagesIndex.admin_services.GAME_PROVIDER_UPDATE_API(data)
          : await PagesIndex.admin_services.GAME_PROVIDER_ADD_API(data);

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

  const fields = [
    // {
    //   name: "game",
    //   label: "Game",
    //   type: "text",
    //   label_size: 6,
    //   col_size: 6,
    // },
    {
      name: "providerName",
      label: "Provider Name",
      type: "text",
      label_size: 6,
      col_size: 6,
    },
    {
      name: "providerResult",
      label: "Provider Result",
      type: "text",
      label_size: 6,
      col_size: 6,
    },
    {
      name: "mobile",
      label: "Mobile",
      type: "number",
      label_size: 6,
      col_size: 6,
    },

    {
      name: "activeStatus",
      label: "Disable Provider",
      type: "select",
      title_size: 6,
      col_size: 6,
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
  ];

  console.log("fields", fields);
  console.log("formik", formik.initialValues);

  console.log("formik.values.activeStatus", formik.values.activeStatus);

  return (
    <PagesIndex.Main_Containt add_button={false} route="">
      <PagesIndex.Formikform
        fieldtype={fields.filter((field) => !field.showWhen)}
        formik={formik}
        //   btn_name={loding ? <PagesIndex.Loader text="Submit"/> : "Login"}
        btn_name={"Add"}
        button_Size={"w-10"}
        show_submit={true}
      />
      <PagesIndex.Toast />
    </PagesIndex.Main_Containt>
  );
};

export default GameProviderAdd;
