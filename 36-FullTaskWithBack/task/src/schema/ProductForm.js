import * as yup from "yup";
export const productFormSchema = yup.object().shape({
    title:yup.string().required(),
    price:yup.number().required(),
    src:yup.string().required()
  });