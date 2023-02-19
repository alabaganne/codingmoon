import React from "react";
import logo from "../assets/icons/logo.svg";
import { loginSchema } from "../utils/validations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../components/shared/ErrorMessage";

interface IFormInputs {
  email: string;
  password: string;
}
const schema = loginSchema;
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => console.log("fskdjfhs");

  return (
    <div className=" flex min-h-screen w-full bg-[#1C1E1F] justify-center items-center ">
      <div className=" bg-[#28272A] w-[40%] p-16 py-24 rounded shadow-login">
        <img src={logo} className=" m-auto mb-8" />
        <form className=" w-full p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className=" mb-4">
            <label className=" text-white text-base ml-3">Email</label>
            <br />
            <input
              {...register("email")}
              type={"email"}
              className=" bg-white outline-none rounded mt-2 w-full px-4 py-2"
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </div>
          <div>
            <label className=" text-white text-base ml-3 font-normal">
              Password
            </label>
            <br />
            <input
              {...register("password")}
              type={"password"}
              className=" bg-white outline-none rounded mt-2 w-full px-4 py-2"
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </div>
          <button
            type="submit"
            className=" btn-primary px-12 py-3 m-auto text-white mt-8"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
