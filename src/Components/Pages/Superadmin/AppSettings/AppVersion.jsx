import React from "react";
import PagesIndex from "../../PagesIndex";

const AppVersion = () => {
  const userId = localStorage.getItem("userId");

  //all states
  const [versionData, setVersionData] = PagesIndex.useState();
  const [loading, setLoading] = PagesIndex.useState(true);
  const [isMaintanance, setIsMaintanance] = PagesIndex.useState();
  const [isForceUpdate, setIsForceUpdate] = PagesIndex.useState();

  //get version list api
  const getVersionData = async () => {
    const res = await PagesIndex.admin_services.GET_VERSION_API(userId);

    if (res?.status === 200) {
      setVersionData(res?.data?.[0]);
      setLoading(false);
    }
  };

  //function call with useeffect
  PagesIndex.useEffect(() => {
    getVersionData();
  }, []);

  PagesIndex.useEffect(() => {
    if (versionData) {
      formik.setValues({
        showType: 3,
        version: versionData.appVersion,
        apkfile: versionData?.apkFileName || "",
      });
      setIsMaintanance(versionData.maintainence ? "On" : "Off");
      setIsForceUpdate(versionData.forceUpdate ? "On" : "Off");
    }
  }, [versionData]);


  //validation regex for apkfile
  const apkValidation = (value) => {
    return PagesIndex.validApkFile(value);
  };


  
  //formik form submit
  const formik = PagesIndex.useFormik({
    initialValues: {
      showType: 3,
      version: "",
      apkfile: versionData?.apkFileName || "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.version) {
        errors.version = PagesIndex.valid_err.PLEASER_ENTER_VERSION;
      } else if (values.version < versionData.appVersion) {
        errors.version = PagesIndex.valid_err.VERSION_VALIDATION;
      }

      if (!values.apkfile) {
        errors.apkfile = PagesIndex.valid_err.PLEASE_ENTER_APK_FILE;
      } else if (!apkValidation(values.apkfile)) {
        errors.apkfile = PagesIndex.valid_err.APK_FILE_VALID;
      }

      return errors;
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("appVer", values.version);
      formData.append("type", values.showType);
      formData.append("adminId", userId);
      formData.append("versionId", versionData?._id);
      formData.append("apk", values.apkfile);
     const res = await PagesIndex.admin_services.UPDATE_VERSION_API(formData);
      if (res.status === 200) {
        PagesIndex.toast.success(res.message);
        getVersionData();
      }
    },
  });

  const fields = [
    {
      name: "version",
      label: "App Version",
      type: "number",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "apkfile",
      label: "Upload File",
      type: "file",
      label_size: 12,
      col_size: 6,
      show_preview: true,
    },
  ];

  const toggleMaintenance = async () => {
    setIsMaintanance((prev) => (prev === "On" ? "Off" : "On"));
    const formData = new FormData();
    formData.append("adminId", userId);
    formData.append("versionId", versionData?._id);
    formData.append("type", 2);
    formData.append("status", isMaintanance === "On" ? "false" : "true");
    const res = await PagesIndex.admin_services.UPDATE_VERSION_API(formData);
    if (res.status === 200) {
      PagesIndex.toast.success(res.message);
      getVersionData();
    }
  };

  const toggleForceUpdate = async () => {
    setIsForceUpdate((prev) => (prev === "On" ? "Off" : "On"));
    const formData = new FormData();
    formData.append("adminId", userId);
    formData.append("versionId", versionData?._id);
    formData.append("type", 1);
    formData.append("status", isForceUpdate === "On" ? "false" : "true");
    const res = await PagesIndex.admin_services.UPDATE_VERSION_API(formData);
    if (res.status === 200) {
      PagesIndex.toast.success(res.message);
      getVersionData();
    }
  };
  return (
    <PagesIndex.Main_Containt
      title="Application Version & Other Settings"
      col_size={12}
    >
      {loading ? (
        <PagesIndex.Loader lodersize={20} />
      ) : (
        <PagesIndex.Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          show_submit={true}
          show_preview={true}
          btn_name="Update Version"
          after_submit_button={
            <>
              <div className="col-md-6 mt-4">
                <h4>App Is Not Under Maintanance</h4>
                <button onClick={toggleMaintenance} className="btn btn-primary">
                  Turn {isMaintanance} Maintanance
                </button>
              </div>
              <div className="col-md-6 mt-4">
                <h4>Force Update Is Disabled</h4>
                <button onClick={toggleForceUpdate} className="btn btn-primary">
                  Turn {isForceUpdate} Force Update
                </button>
              </div>
            </>
          }
        />
      )}
      <PagesIndex.Toast />
    </PagesIndex.Main_Containt>
  );
};

export default AppVersion;
