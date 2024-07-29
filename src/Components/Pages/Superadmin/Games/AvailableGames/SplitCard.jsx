import React,{useState} from "react";
import Split_Main_Containt from "../../../../Layout/Main/Split_Main_Content";
import PagesIndex from "../../../PagesIndex";
import { today } from "../../../../Utils/Common_Date";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ExamplePage = () => {
  const userId = localStorage.getItem("userId");
  const [startDate, setStartDate] = useState(new Date());
  const [Data, setData] = PagesIndex.useState([]);

  const dispatch = PagesIndex.useDispatch();
  const data = PagesIndex.useSelector((state) => {
    return state.CommonSlice.gameProviders;
  });

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
      date: today(),
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
      type: "select",
      options:
        data?.map((item) => ({
          label: item.providerName,
          value: item._id,
        })) || [],
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
      name: "date",
      label: "Result Date",
      type: "date",
      label_size: 12,
      col_size: 12,
    },
  ];


  const GetResult = async () => {
    const req = "07/11/2024";
    const res = await PagesIndex.admin_services.GAME_RESULT(req);
    console.log("setData", res);

    if (res.status === 200) {
      setData(res.data);
    }
  };

  PagesIndex.useEffect(() => {
    GetResult();
  }, []);

  const columns = [
    {
      name: "Game Name",
      selector: (row) => row?.providerName,
    },
    {
      name: "Game Session",
      selector: (row) => row?.session,
    },
    {
      name: "Result Date",
      selector: (row) => row?.resultDate,
    },
    {
      name: "winning Digit",
      selector: (row) => row?.winningDigit,
    },

    {
      name: "actions",
      selector: (cell, row) => (
        <div style={{ width: "120px" }}>
          <div>
            <PagesIndex.Link to={"/admin/employee/edit"} state={cell}>
              <span data-toggle="tooltip" data-placement="top" title="Winners List">
              <i class="icon-user-follow icon-size"></i>
              </span>
            </PagesIndex.Link>

            <PagesIndex.Link
              href="#"
              onClick={() =>
                DeleteSweetAlert(
                  PagesIndex.admin_services.DELETE_USER,
                  cell?._id,
                  getList
                )
              }
            >
              <span data-toggle="tooltip" data-placement="top" title="Delete">
                <i class="ti-trash fs-5 mx-1 "></i>
                {/* <PagesIndex.Icon icon="line-md:account-delete" width="24" height="24" /> */}
              </span>
            </PagesIndex.Link>
          </div>
        </div>
      ),
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
    {
      size: 12,
      body: (
        <div>
          <PagesIndex.Data_Table
            // isLoading={loading}
            columns={columns}
            data={Data.gameResult}
          />
     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

        </div>
      ),
    },
  ];

  console.log("Data", Data);
  return (
    <>
    <Split_Main_Containt
      title="Game Results"
      add_button={false}
      btnTitle="Add"
      route="/add"
      cardLayouts={cardLayouts}
    />

    </>

  );
};

export default ExamplePage;
