import PagesIndex from "../../Pages/PagesIndex";

const CuttingGroup = () => {
  const userId = localStorage.getItem("userId");
  const navigate = PagesIndex.useNavigate();


  const formik = PagesIndex.useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
 

    },

    onSubmit: async (values) => {
  
    },
  });

  const fields = [
    {
      name: "date",
      label: "Start Date",
      type: "date",
      label_size: 12,
      col_size: 4,
    },

    {
      name: "providername",
      label: "Provider Name",
      type: "select",
      label_size: 12,
      col_size: 4,
      options: [
        {
          label: "Shridevi",
          value: "Shridevi",
        },
        {
          label: "Time Bazar",
          value: "timebazar",
        },
      ],
    },

    {
      name: "gamesession",
      label: "Game Session",
      type: "select",
      label_size: 12,
      col_size: 4,
      options: [
        {
          label: "Open",
          value: "open",
        },
        {
          label: "Close",
          value: "close",
        },
      ],
    },
  ];

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Year',
      selector: row => row.year,
    },
  ];
  
  const data = [
      {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]
  return (
    <>
      <div className="content-body">
   
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <PagesIndex.Formikform
                    fieldtype={fields.filter((field) => !field.showWhen)}
                    formik={formik}
                    btn_name={"Submit"}
                    button_Size={"w-25"}
                    show_submit={true}
                  />
                </div>
              </div>{" "}
            </div>
            <div className="col-lg-4 col-xl-4">
              <div className="card ">
                <div className="card-body p-0">
                  <table class="table ">
                    <thead>
                      <tr className="table-active">
                        <th scope="col">Type</th>
                        <th scope="col">Bids</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Pana</th>
                        <td>274</td>
                        <td>274</td>
                      </tr>
                      <tr>
                        <th scope="row">Single Digit</th>
                        <td>274</td>
                        <td>274</td>
                      </tr>
                      <tr>
                        <th scope="row">Grand Total</th>
                        <td>924000</td>
                        <td>92480</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>{" "}
            </div>
            <div className="col-lg-12 col-xl-12">
              <div className="card ">
                <div className="card-body p-0">
                <PagesIndex.Data_Table columns={columns} data={data} />
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <PagesIndex.Toast />
      </div>
    </>
  );
};

export default CuttingGroup;
