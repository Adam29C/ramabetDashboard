import React, { Children, useState } from "react";
import Modal from "react-awesome-modal";
import PagesIndex from "../Pages/PagesIndex";

const ModalComponent = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };
  const formik = PagesIndex.useFormik({
    initialValues: {
      gameName: "",
      gamePrice: "",
    },
    validate: (values) => {},

    onSubmit: async (values) => {},
  });

  const fields = [
    {
      name: "gameName",
      label: "Game Name",
      type: "text",
      label_size: 6,
      col_size: 12,
    },
    {
      name: "gamePrice",
      label: "Game Price",
      type: "text",
      label_size: 6,
      col_size: 12,
    },
    {
      name: "gamePrice",
      label: "Game Price",
      type: "text",
      label_size: 6,
      col_size: 12,
    },
  ];

  return (
    <section>
      <h1>React-Modal Examples</h1>
      <input type="button" value="Open" onClick={openModal} />
      <Modal
        visible={visible}
        width="400"
 
        effect="fadeInDown"
        onClickAway={closeModal}
      >
        <div className="p-4 modal-container">
          <a
            className="d-flex justify-content-end"
            href="#"
            onClick={closeModal}
          >
            X
          </a>
          <h3 className="border-bottom-text">Add Form</h3>

          <PagesIndex.Formikform
            fieldtype={fields.filter((field) => !field.showWhen)}
            formik={formik}
            btn_name={"submit"}
            button_Size={"w-100"}
            show_submit={true}
          />
        </div>
      </Modal>
    </section>
  );
};

export default ModalComponent;
