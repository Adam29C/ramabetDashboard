import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../Loader";
// import Loader from "./Loader";
// col-form-label this class for input alignment apply on label
const ReusableForm = ({
  fromDate,
  fieldtype,
  formik,
  btn_name,
  title,
  VerifyMobileN,
  button_Size,
  Disable_Button,
  after_password_field,
  after_submit_button,
  after_text_field,
  btn_design,
  disabledSubmit,
  isLoading,
  show_submit,
}) => {
  const location = useLocation();

  const [passwordVisible, setPasswordVisible] = useState({});

  const [previews, setPreviews] = useState([]);
  const handleFileChange = (event, index, name) => {
    const file = event.target.files[0];
    if (file) {
      const newPreviews = [...previews];
      newPreviews[index] = URL.createObjectURL(file);
      setPreviews(newPreviews);

      const reader = new FileReader();
      reader.onload = () => {
        formik.setFieldValue(`${name}_base64`, reader.result);
      };
      reader.readAsDataURL(file);

      formik.setFieldValue(name, file);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className="row"
        style={{
          height: `${title === "addgroup" ? "65vh" : ""}`,
          overflowY: `${title === "addgroup" ? "scroll" : ""}`,
        }}
      >
        <div className={`row`}>
          {fieldtype.map((field, index) => (
            <>
              {field.type === "select" ? (
                <>
                  <div className={`col-lg-${field.col_size}`}>
                    <div className="mb-1 row">
                      <label
                        className={`custom-label  col-lg-${field.col_size}`}
                        htmlFor={field.name}
                      >
                        {field.label}
                        <span className="text-danger">*</span>
                      </label>
                      <div
                        className={`col-lg-${title === "addgroup" ? 12 : 12}`}
                      >
                        <select
                          className="default-select wide form-control"
                          id={field.name}
                          {...formik.getFieldProps(field.name)}
                          disabled={field.disable}
                        >
                          <option value="" selected disable={field.disable}>
                            Please Select {field.label}
                          </option>
                          {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {formik.errors[field.name] && (
                          <div className="error-text">
                            {formik.errors[field.name]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : field.type === "checkbox" ? (
                <>
                  {field.options &&
                    field.options.map((option) => (
                      <div
                        className={`col-lg-${field.col_size}`}
                        key={option.id}
                      >
                        {/* <label
                          className={`custom-label col-lg-12`}
                          htmlFor={field.name}
                        >
                          {field.label}
                          <span className="text-danger">*</span>
                        </label> */}
                        <div className="form-check custom-checkbox mb-2 ">
                          <input
                            type={field.type}
                            className="form-check-input"
                            id={option.name}
                            {...formik.getFieldProps(option.name)}
                            defaultChecked={option.checked}
                          />
                          <label
                            className="form-check-label fw-bolder "
                            htmlFor={option.name}
                          >
                            {option.name}
                          </label>
                        </div>
                        {/* Nested checkboxes */}
                        {option.Nasted &&
                          option.Nasted.map((subOption) => (
                            <div className="row d-flex" key={subOption.id}>
                              <div className={`col-lg-12`}>
                                <div className="form-check custom-checkbox mb-2 ml-3">
                                  <input
                                    type={field.type}
                                    className="form-check-input"
                                    id={subOption.name}
                                    {...formik.getFieldProps(subOption.name)}
                                    defaultChecked={subOption.checked}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={subOption.name}
                                  >
                                    {subOption.name}
                                  </label>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}

                  {formik.errors[field.name] && (
                    <div className="error-text">
                      {formik.errors[field.name]}
                    </div>
                  )}
                </>
              ) : field.type === "radio" ? (
                <>
                  <div className={`col-lg-${field.title_size}`}>
                    {" "}
                    <h5>permission</h5>
                    <div className="row">
                      {field.options &&
                        field.options.map((option, index) => (
                          <>
                            <div
                              className={`col-lg-${field.col_size}`}
                              key={option.id}
                            >
                              <div className="row d-flex">
                                <div className={`col-lg-${field.col_size}`}>
                                  <div class="form-check custom-checkbox mb-2">
                                    <input
                                      type={field.type}
                                      className="form-check-input"
                                      id={option.label}
                                      {...formik.getFieldProps(option.name)}
                                      defaultChecked={option.checked}
                                    />
                                    <label
                                      className="form-check-label"
                                      for={option.label}
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                  {formik.errors[field.name] && (
                                    <div className="error-text">
                                      {formik.errors[field.name]}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                    </div>
                  </div>
                </>
              ) : field.type === "password" ? (
                <>
                  {after_password_field}
                  <div className={`col-lg-${field.col_size}`}>
                    <div className="mb-3 row">
                      <label
                        className={`custom-label col-lg-${field.label_size} col-form-label `}
                        htmlFor={field.name}
                      >
                        {field.label}
                        <span className="text-danger">*</span>
                      </label>
                      <div
                        // className={`col-lg-${field.col_size}`}
                        style={{ position: "relative" }}
                      >
                        <input
                          id={field.name}
                          disabled={field.disable}
                          type={
                            passwordVisible[field.name] ? "text" : field.type
                          }
                          placeholder={field.label}
                          {...formik.getFieldProps(field.name)}
                          className={` form-control`}
                        />
                        <i
                          class={`fa-solid ${
                            !passwordVisible[field.name]
                              ? "fa-eye-slash"
                              : "fa-eye"
                          }`}
                          style={{
                            position: "absolute",
                            top: "1.5px",
                            right: "20px",
                            padding: "12.4px 6.6px",
                            borderRadius: "3px",
                          }}
                          onClick={() =>
                            setPasswordVisible((prevState) => ({
                              ...prevState,
                              [field.name]: !prevState[field.name],
                            }))
                          }
                        ></i>{" "}
                        {formik.errors[field.name] && (
                          <div className="error-text" style={{ color: "red" }}>
                            {formik.errors[field.name]}
                          </div>
                        )}{" "}
                      </div>
                    </div>
                  </div>
                </>
              ) : field.type === "date" ? (
                <>
                  <div className={`col-lg-${field.col_size}`}>
                    <div className=" row flex-column">
                      <label
                        className={`custom-label col-lg-${field.label_size}`}
                        htmlFor={field.name}
                      >
                        {field.label}
                        <span className="text-danger">*</span>
                      </label>
                      <div className={`d-flex`}>
                        <input
                          type={field.type}
                          name={field.name}
                          className="form-control"
                          id={field.name}
                          {...formik.getFieldProps(field.name)}
                          min={
                            field.name === "todate"
                              ? fromDate
                              : getCurrentDate()
                          }
                        />
                        {field.showButton ? (
                          <button
                            style={{ background: "#4e3897", width: "100px" }}
                            className="btn border-0 btn-primary ms-3 col-4"
                            onClick={(e) => {
                              e.preventDefault();
                              VerifyMobileN();
                            }}
                            disabled={Disable_Button}
                          >
                            Send OTP
                          </button>
                        ) : (
                          ""
                        )}
                        <div className="invalid-feedback">
                          Please enter {field.label}
                        </div>
                      </div>
                      {formik.errors[field.name] && (
                        <div className="error-text">
                          {formik.errors[field.name]}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* <div className={`col-lg-${field.col_size}`}>
                    <div className="row d-flex">
                      <div className="col-lg-12 ">
                        <div class="form-check custom-checkbox">
                          <label className="col-lg-6 " for={field.name}>
                            {field.name}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            className="form-control"
                            id={field.name}
                            {...formik.getFieldProps(field.name)}
                            min={
                              field.name === "todate"
                                ? fromDate
                                : getCurrentDate()
                            }
                          />
                        </div>{" "}
                        {formik.errors[field.name] && (
                          <div className="error-text" style={{ color: "red" }}>
                            {formik.errors[field.name]}
                          </div>
                        )}{" "}
                      </div>
                    </div>
                  </div> */}
                </>
              ) : field.type === "msgbox" ? (
                <>
                  <div className={`col-lg-${field.col_size}`}>
                    <div className="row d-flex">
                      <div
                      // className={`col-lg-${field.col_size}`}
                      >
                        <div class="mb-3">
                          <label
                            className={`custom-label col-lg-${field.label_size}`}
                            for={field.name}
                          >
                            {field.label}
                          </label>
                          <textarea
                            class="form-control"
                            rows={field.row_size}
                            id={field.name}
                            name={field.name}
                            {...formik.getFieldProps(field.name)}
                            placeholder={field.label}
                          ></textarea>
                          {formik.errors[field.name] && (
                            <div className="error-text">
                              {formik.errors[field.name]}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : field.type === "file" ? (
                <>
                  <div className={`col-lg-${field.col_size}`}>
                    <div className="row d-flex">
                      <div
                        className={`col-lg-${title === "addgroup" ? 6 : 12}`}
                      >
                        <div className="mb-3">
                          <label
                            className={`custom-label col-form-label`}
                            htmlFor={field.name}
                          >
                            {field.label}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="file"
                            id={field.name}
                            onChange={(e) =>
                              handleFileChange(e, index, field.name)
                            } // Pass the index to the handler
                            className={`form-control`}
                          />
                        </div>
                      </div>
                      {formik.errors[field.name] && (
                        <div className="error-text">
                          {formik.errors[field.name]}
                        </div>
                      )}
                      {formik.getFieldProps(`${field?.name}_base64`)?.value ||
                      formik.getFieldProps(field?.name)?.value ? (
                        <img
                          src={
                            formik.getFieldProps(`${field.name}_base64`)
                              .value || formik.getFieldProps(field.name).value
                          }
                          name={field.name}
                          id={field.name}
                          alt={`Preview ${index}`}
                          className="superadmin-preview-img"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={`col-lg-${field.col_size}`}>
                    <div className="mb-3 row flex-column">
                      <label
                        className={`custom-label col-lg-${field.label_size}`}
                        htmlFor={field.name}
                      >
                        {field.label}
                        <span className="text-danger">*</span>
                      </label>
                      <div className={`d-flex`}>
                        <input
                          type="text"
                          autocomplete="off"
                          className="form-control"
                          style={{ background: field.disable ? "#eeeeee" : "" }}
                          id={field.name}
                          placeholder={`Enter ${field.label}`}
                          {...formik.getFieldProps(field.name)}
                          // required=""
                          readOnly={field.disable}
                        />
                        {field.showButton ? (
                          <button
                            style={{ background: "#4e3897", width: "100px" }}
                            className="btn border-0 btn-primary ms-3 col-4"
                            onClick={(e) => {
                              e.preventDefault();
                              VerifyMobileN();
                            }}
                            disabled={Disable_Button}
                          >
                            Send OTP
                          </button>
                        ) : (
                          ""
                        )}
                        <div className="invalid-feedback">
                          Please enter {field.label}
                        </div>
                      </div>
                      {formik.errors[field.name] && (
                        <div className="error-text">
                          {formik.errors[field.name]}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
              {field.showButton && after_text_field}
            </>
          ))}

          <div className="form-group mb-0 button-main">
            {show_submit ? (
              <>
                <button
                  style={{ background: "#4e3897" }}
                  className={`btn btn-primary mt-2 ${button_Size} ${
                    location.pathname === "resetpassword" ? "col-md-11" : ""
                  } ${btn_design && "btn_design"}`}
                  type="submit"
                  disabled={
                    disabledSubmit ? disabledSubmit : isLoading ? isLoading : ""
                  }
                >
                  {/* <Loader/> */}
                  {btn_name}
                </button>
              </>
            ) : (
              ""
            )}
          </div>
          {after_submit_button}
        </div>
      </div>
    </form>
  );
};

export default ReusableForm;
