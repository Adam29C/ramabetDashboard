// import { useDispatch } from "react-redux"
import { useState,useEffect } from "react"
import {useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { Remove_Special_Character,Password_Rejex } from "../Utils/Valid_Rejex";
import { LOGIN_API } from "../Services/AuthServices";
import Logo from "../Layout/Logo/Logo_png";
import { useFormik } from "formik";
import Auth_Containt from "../Layout/Main/Auth_content";
import Main_Containt from "../Layout/Main/Main_Containt";
import Formikform from "../Helpers/FormikForm/Form";
import Toast from "../Helpers/Toast";
// import { getGenerateToken } from "../Redux/slice/CommonSlice";
import { Link } from "react-router-dom";
import *as valid_err from '../Utils/Common_Msg'

import { Get_Year_Only } from "../Utils/Common_Date";
import * as apiService from "../Services/Services";
import * as apiCommonService from "../Services/CommonServices";
import Data_Table from "../Helpers/Datatable";
import Toggle_Button from "../Helpers/Toggle";
import { getGenerateToken } from "../Redux/slice/CommonSlice";
// import { Image_Regexp } from "../Utils/Valid_Rejex";
import * as validRejex from "../Utils/Valid_Rejex";

import Loader from "../Helpers/Loader";

const PagesIndex = {
    useDispatch,
    useState,
    useSelector,
    useNavigate,
    toast,
    v4,
    Remove_Special_Character,
    LOGIN_API,
    Logo,
    useFormik,
    Main_Containt,
    Formikform,
    Toast,
    getGenerateToken,
    useEffect,
    Link,
    valid_err,
    Password_Rejex,
    Get_Year_Only,
    apiService,
    Data_Table,
    Toggle_Button,
    validRejex,
    Auth_Containt,
    Loader,
    apiCommonService
}

export default PagesIndex