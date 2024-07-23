import React from "react";
import Split_Main_Containt from "../../../../Layout/Main/Split_Main_Content";
import PagesIndex from "../../../PagesIndex";

const ExamplePage = () => {
  const formik = PagesIndex.useFormik({
    initialValues: {
      panel_name: "",
      domain: "",
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
      const req = {
        // panel_name: values.panel_name,
        // domain: values.domain,
        // port: values.port,
        // key: values.key,
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

  const formik1 = PagesIndex.useFormik({
    initialValues: {
      panel_name: "",
      domain: "",
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
      const req = {
        // panel_name: values.panel_name,
        // domain: values.domain,
        // port: values.port,
        // key: values.key,
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
      name: "providerId",
      label: "Provider Name",
      type: "text",
      label_size: 12,
      col_size: 3,
    },

    {
      name: "session",
      label: "Session",
      type: "select",
      options: [
        { label: "Open", values: 1 },
        { label: "Close", values: 0 },
      ],
      label_size: 12,
      col_size: 3,
    },
    {
      name: "resultDate",
      label: "Result Date",
      type: "date",
      label_size: 12,
      col_size: 3,
    },
    {
      name: "winningDigit",
      label: "Winning Digit",
      type: "text",
      label_size: 12,
      col_size: 3,
    },
  ];

  const fields1 = [
    {
      name: "resultDate",
      label: "Result Date",
      type: "date",
      label_size: 12,
      col_size: 12,
    },
  ];

  const cardLayouts = [
    {
      size: 9,
      body: (
        <div>
          <PagesIndex.Formikform
            fieldtype={fields.filter((field) => !field.showWhen)}
            formik={formik}
            btn_name="Add Panel"
          />
        </div>
      ),
    },
    {
      size: 3,
      body: (
        <div>
          <div>
            <PagesIndex.Formikform
              fieldtype={fields1.filter((field) => !field.showWhen)}
              formik={formik1}
              btn_name="Add Panel"
            />
          </div>
          <button className="btn-primary">click</button>
        </div>
      ),
    },
  ];

  return (
    <Split_Main_Containt
      title="Game Results"
      add_button={false}
      btnTitle="Add"
      route="/add"
      cardLayouts={cardLayouts}
    />
  );
};

export default ExamplePage;
