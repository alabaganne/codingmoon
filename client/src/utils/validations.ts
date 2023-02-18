import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().email("email must be valid").required(),
    password: yup.string().min(8).required("Please Enter your password"),
  })
  .required();
