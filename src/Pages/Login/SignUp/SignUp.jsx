import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import Fade from "react-reveal/Fade";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import auth from "../../../Firebase/Firebase.config";
import Loading from "../../../Components/Loading/Loading";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithGithub, giUser, giLoading, giError] =
    useSignInWithGithub(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating || giLoading) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError || giError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (user || gUser || giUser) {
    navigate("/dashboard", { replace: true });
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast.success(`Welcome ${data.name}! You are now registered.`);
  };
  return (
    <section className="bg-base-300 h-screen">
      <div className="hero bg-base-300">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <Fade left distance="30px">
            <div className="lg:w-1/2">
              <div className="flex flex-col justify-center items-center lg:px-12 my-12">
                <div className="pb-6 lg:pb-16">
                  <h1 className="text-xl lg:text-2xl text-center font-bold pb-6">
                    Easiest Recruitment Solution - Attract, Manage & Hire Right
                    Talent.
                  </h1>
                  <p className="text-center">
                    Advanced Recruiting Solution With Everything You Need To
                    Accelerate The Hiring Process.
                  </p>
                </div>
                <div className="card w-full max-w-lg bg-base-100 shadow-sm">
                  <div className="card-body w-full">
                    <h2 className="text-center text-xl lg:text-2xl font-bold">
                      Please Sign Up
                    </h2>
                    <p className="text-center font-semibold">
                      Already have an account?{" "}
                      <Link className="text-primary" to="/login">
                        Login
                      </Link>
                    </p>
                    <div className="block lg:flex justify-center items-center gap-2 py-2 lg:py-6 mx-auto">
                      <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline border-primary flex items-center content-center rounded hover:btn-primary mb-2 lg:mb-0"
                      >
                        <FcGoogle className="text-2xl mr-2"></FcGoogle>Login
                        with Google
                      </button>
                      <button
                        onClick={() => signInWithGithub()}
                        className="btn btn-outline border-primary flex items-center content-center rounded hover:btn-primary"
                      >
                        <FaGithub className="text-2xl mr-2"></FaGithub>Login
                        with GitHub
                      </button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-control w-full max-w-md">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="input input-bordered w-full max-w-md"
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Name is Required",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.name.message}
                            </span>
                          )}
                        </label>
                      </div>

                      <div className="form-control w-full max-w-md">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="input input-bordered w-full max-w-md"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Email is Required",
                            },
                            pattern: {
                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                              message: "Provide a valid Email",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.email?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.email.message}
                            </span>
                          )}
                          {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-red-500">
                              {errors.email.message}
                            </span>
                          )}
                        </label>
                      </div>
                      <div className="form-control w-full max-w-md">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="input input-bordered w-full max-w-md"
                          {...register("password", {
                            required: {
                              value: true,
                              message: "Password is Required",
                            },
                            minLength: {
                              value: 6,
                              message: "Must be 6 characters or longer",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.password?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.password.message}
                            </span>
                          )}
                          {errors.password?.type === "minLength" && (
                            <span className="label-text-alt text-red-500">
                              {errors.password.message}
                            </span>
                          )}
                        </label>
                      </div>

                      {signInError}
                      <input
                        className="btn w-full max-w-md text-white btn-primary"
                        type="submit"
                        value="Sign Up"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right distance="20px">
            <div className="w-full lg:w-1/2 rounded overflow-hidden lg:ml-6 hidden lg:block">
              <div className="outline-none h-full">
                <img
                  src="https://app.easy.jobs/app-easy-jobs/img/Repeat%20Grid%203.png"
                  className=" md:rounded-lg h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
