import * as yup from "yup";

function App() {
  return <div></div>;
}

export default App;

const LOGIN_SCHEMA = yup.object({
  login: yup.string().trim().email().required(),
  password: yup
    .string()
    .trim()
    .min(8)
    .max(32)
    .matches(/(?=.*[a-z])/, "Password must contain at least 1 a-z")
    .matches(/(?=.*[A-Z])/, "Password must contain at least 1 A-Z")
    .required(),
});

const userLogin = { login: "u@mail", password: "1!qqqqqqq" };

LOGIN_SCHEMA.validate(userLogin)
  .then((data) => console.log(data))
  .catch((err) => console.log(err.errors));

const CAR_SCHEMA = yup.object({
  model: yup.string().trim().min(1).required(),
  productionYear: yup
    .number()
    .positive()
    .integer()
    .max(new Date().getFullYear())
    .required(),
  km: yup.number().positive().integer().required(),
  number: yup
    .string()
    .trim()
    .matches(/^[A-Z]{2}\d{4}[A-Z]{2}$/)
    .required(),
});

const car = {
  model: "Audi A6",
  productionYear: 2033,
  km: 155000,
  number: "CE1111AA",
};

CAR_SCHEMA.validate(car)
  .then((data) => console.log(data))
  .catch((err) => console.log(err.errors));
