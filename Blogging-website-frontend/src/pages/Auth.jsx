import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useMatch, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../hooks";

function Auth() {
  const isRegister = useMatch("/register");
  // console.log(isRegister)
  const navigate = useNavigate();
  const { login } = useAuth();
  async function onSubmit(values, actions) {
    //console.log("onSubmit", { values, actions });

    try {
      // api request to login or register

      const { data } = await axios.post(
        `https://penflow.onrender.com/api/users${isRegister ? "" : "/login"}`,
        { user: values }
      );


      //navigate the user back to home page
      login(data.user);
      navigate("/");
    } catch (error) {
      console.error("Error while onSubmit: ", error);

      const {status, data} = error.response;

      if(status === 422){
        actions.setErrors(data.errors);
      }
    }
  }
  const loginInitialValues = { email: "", password: "" };
  const registerInitialValues = { username: "", email: "", password:""};

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-center text-4xl font-bold text-[#243635] mb-2 mt-36">Sign {isRegister ? "up" : "in"}</h1>
            <p className="text-xs-center mb-8">
              <Link to={isRegister ? "/login" : "/register"} className="text-[#5e6c6b] hover:text-[#5E6C6B]">
                {isRegister ? "Already have an account?" : "Don't have an account?"}
              </Link>
            </p>

            <Formik
              onSubmit={onSubmit}
              initialValues={isRegister ? registerInitialValues : loginInitialValues}
            >
              {() => (
                <>
                  {/* <FormErrors /> */}
                  <Form>
                    {isRegister && (
                      <fieldset className="form-group mb-2">
                        <Field
                          type="text"
                          name="username"
                          placeholder="Your Name"
                          className="form-control form-control-lg"
                        />
                      </fieldset>
                    )}

                    <fieldset className="form-group mb-2">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control form-control-lg"
                      />
                    </fieldset>
                    <fieldset className="form-group mb-10">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control form-control-lg"
                      />
                    </fieldset>
                    <div style={{ textAlign: "center" }}>
                      <button
                        type="submit"
                        className="btn btn-lg hover:bg-[#475756] bg-[#243635] border-none text-[#FCFBF9] mt-2 rounded-full"
                      >
                        Sign {isRegister ? "up" : "in"}
                      </button>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;