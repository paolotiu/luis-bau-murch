import * as Yup from "yup";
import "yup-phone";

export const formSchema = Yup.object().shape({
  name: Yup.string().min(1).max(75).required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .phone("PH", false, "Valid Philippine phone number must be used")
    .required("Phone number is required"),
  description: Yup.string().min(1).max(150),
});
