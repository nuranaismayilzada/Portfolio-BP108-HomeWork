import * as yup from "yup";

export const productFormSchema = yup.object().shape({
    // id: yup.number().min(3).max(10).required("Id formati duzgun deyil"),
    companyName: yup.string().trim().required("Company name formati duzgun deyil."),
    contactName: yup.string().required("Contact name formati duzgun deyil"),
    Region: yup.string().required("Region formati duzgun deyil"),
    City: yup.number ().required("City formati duzgun deyil"),
  });