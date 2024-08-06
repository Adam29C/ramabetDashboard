
import React from "react";
import PagesIndex from "../../PagesIndex";

const HowToPlay = () => {
  const userId = localStorage.getItem("userId");

  //all states
  const [loading, setLoading] = PagesIndex.useState(true);
  const [noticeData, setNoticeData] = PagesIndex.useState();
  
console.log(noticeData)
  //get wallet api
  const getNoticeData = async () => {
    const res = await PagesIndex.admin_services.GET_NOTICE_BOARD_API(userId);

    if (res?.status === 200) {
        setNoticeData(res?.data?.[0]);
      setLoading(false);
    }
  };

  //function call with useeffect
  PagesIndex.useEffect(() => {
    getNoticeData();
  }, []);

//   PagesIndex.useEffect(() => {
//     if (noticeData) {
//         formik.setFieldValue("title1", noticeData?.title1);
        
//     }
//   }, [noticeData]);

  //contact number validation regex
const contactRegex = (numbervalue) => {
  return  PagesIndex.Mobile_regex(numbervalue);
  };


  //formik form submit
  const formik = PagesIndex.useFormik({
    initialValues: {
        groupFields: [{ title: '', videoUrl: '' }], 

      
    },

    validate: (values) => {

 
    },
    onSubmit: async (values) => {
      console.log("submit",values)

     
 
    },
  });

  const fields = [
    {
      name: "groupFields",
      label: "Section 1 Title",
      type: "fieldarray",
      label_size: 12,
      col_size: 6,
    },

  
 
  ];

  return (
    <PagesIndex.Main_Containt title="Update How To Play" col_size={12}>
      {loading ? (
        <PagesIndex.Loader lodersize={20} />
      ) : (
        <PagesIndex.Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          show_submit={true}
        
          btn_name="Submit"
        />
      )}
      <PagesIndex.Toast />
    </PagesIndex.Main_Containt>
  );
};

export default HowToPlay;
