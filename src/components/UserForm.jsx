import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { submitDone, updateFeild } from "../Features/User/UserSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserForm = () => {
  const [touchPassword, setTouchPassword] = useState(false);
  const [touchName, setTouchName] = useState(false);
  const [touchEmail, setTouchEmail] = useState(false);
  const [touchPhone, setTouchPhone] = useState(false);
  const [touchConfirm, setTouchConfirm] = useState(false);
  const [touchGender, setTouchGender] = useState(false);
  const Dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(
      user.password || "",
    );
  const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    user.email || "",
  );
  const isFormValid = () => {
    return Boolean(
      (user.fullName || "").trim() &&
      email &&
      user.terms &&
      user.gender &&
      user.confirmPassword === user.password &&
      (user.phoneNumber || "").trim() &&
      strongPasswordRegex &&
      (user.confirmPassword || "").trim()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (setTouchName(true),
      setTouchPhone(true),
      setTouchConfirm(true),
      setTouchPassword(true),
      setTouchEmail(true),
      setTouchGender(true));

    if (
      (user.fullName || "").trim() !== "" &&
      email &&
      (user.phoneNumber || "").trim() !== "" &&
      strongPasswordRegex &&
      user.confirmPassword === user.password &&
      user.gender &&
      user.terms
    ) {
      Dispatch(submitDone());
      Navigate("/pizza-order");
    } else {
      alert("all fields are required");
    }
  };
  const Navigate = useNavigate();
  return (
    <>
      <div className="bg-[#f8f1ef] min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center h-[80vh]">
          <div className=" w-[80vw] relative mt-16 flex justify-center">
            <div className="bg-white w-[80vw] h-[85vh] rounded-lg shadow-md overflow-hidden flex">
              <div className="w-[600px] relative rounded-l-xl bg-center bg-cover bg-[url('/assets/pizza-bg.jpeg')]">
                <div className="absolute inset-0 bg-black/40 rounded-l-xl" />
                <div className="relative flex flex-col w-full h-full items-start justify-between p-6 z-10">
                  <div className="bg-[#e1e1e14f] gap-3 flex items-center text-center justify-around p-2 border-[#ffffff9c] border-2 w-55  h-20 mt-4 m-5 rounded-xl">
                    <div className="z-1234">
                      <img src="/assets/logo.svg" alt="logo" />
                    </div>
                    <div className="z-1234 ">
                      <h1 className="text-[#f8f1ef] vietnam-font ">
                        Top Rated Pizzeria{" "}
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 z-444 bottom-5 m-6">
                    <div className="text-[#f8f1ef]  vietnam2-font text-lg">
                      The Artisian Heart
                    </div>
                    <div className="w-88 heading-font text-[#AE131A] text-4xl ">
                      Mastering the Art of{" "}
                      <span className=" text-[#f8f1ef]">
                        Slow Fermentation.
                      </span>
                    </div>
                    <div className="text-md vietnam3-font text-[#f8f1ef] w-90">
                      Join our community of dough enthusiasts and get exclusive
                      access to our seasonal hearth releases.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <form
                  onSubmit={handleSubmit}
                  action=""
                  className="w-full max-w-[520px] px-6"
                >
                  <div className="flex flex-col items-center gap-2 justify-center">
                    <h1 className="text-3xl text-[#1B1C1C] heading2-font">
                      Create Your Account
                    </h1>
                    <p className="text-[#5B403D] vietnam2-font">
                      &nbsp;Already a member? order{" "}
                      <span className="text-[#AE131A] underline underline-offset-2">
                        here
                      </span>
                    </p>
                  </div>
                  <div className="mt-12 flex flex-col gap-3 w-full">
                    <div className="relative">
                      <label htmlFor="" className="text-[#5B403D] vietnam-font">
                        Name <span className="text-2xs text-[#AE131A]">*</span>
                      </label>
                      <input
                        value={user.fullName}
                        onBlur={() => setTouchName(true)}
                        onChange={(e) =>
                          Dispatch(
                            updateFeild({
                              feild: "fullName",
                              value: e.target.value,
                            }),
                          )
                        }
                        type="text"
                        placeholder="John Doe"
                        className="outline-[#8f6f6c5f] py-3 px-4 vietnam2-font text-[#8F6F6C]  bg-[#F6F3F2] rounded-2xl w-full  "
                      />
                      {touchName && !user.fullName && (
                        <p className="absolute -bottom-5 left-0 text-xs text-[#AE131A] ">
                          * name is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4 w-full">
                    <div className="flex-1 relative">
                      <label htmlFor="" className="text-[#5B403D] vietnam-font">
                        Email <span className="text-2xs text-[#AE131A]">*</span>
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        onBlur={() => setTouchEmail(true)}
                        onChange={(e) =>
                          Dispatch(
                            updateFeild({
                              feild: "email",
                              value: e.target.value,
                            }),
                          )
                        }
                        placeholder="johndoe@example.com"
                        className="outline-[#8f6f6c5f] py-3 px-4 vietnam2-font text-[#8F6F6C]  bg-[#F6F3F2] rounded-2xl w-full  "
                      />
                      {touchEmail && !user.email && (
                        <p className="absolute -bottom-5 text-xs text-[#AE131A]">
                          * email is required
                        </p>
                      )}

                      {touchEmail && user.email && !email && (
                        <p className="absolute -bottom-5 text-xs text-[#AE131A]">
                          * invalid email format
                        </p>
                      )}
                    </div>
                    <div className="flex-1 relative">
                      <label htmlFor="" className="text-[#5B403D] vietnam-font">
                        Phone <span className="text-2xs text-[#AE131A]">*</span>
                      </label>
                      <input
                        type="tel"
                        onBlur={() => setTouchPhone(true)}
                        value={user.phoneNumber}
                        onChange={(e) =>
                          Dispatch(
                            updateFeild({
                              feild: "phoneNumber",
                              value: e.target.value,
                            }),
                          )
                        }
                        placeholder="(+91) 9999999999"
                        className="outline-[#8f6f6c5f] py-3 px-4 vietnam2-font text-[#8F6F6C]  bg-[#F6F3F2] rounded-2xl w-full  "
                      />
                      {touchPhone && !user.phoneNumber && (
                        <p className="absolute -bottom-5 left-0 text-xs text-[#AE131A] ">
                          * phone no. is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4 w-full">
                    <div className="flex-1 relative">
                      <label htmlFor="" className="text-[#5B403D] vietnam-font">
                        Password{" "}
                        <span className="text-2xs text-[#AE131A]">*</span>
                      </label>
                      <input
                        type="password"
                        onBlur={() => setTouchPassword(true)}
                        value={user.password}
                        onChange={(e) =>
                          Dispatch(
                            updateFeild({
                              feild: "password",
                              value: e.target.value,
                            }),
                          )
                        }
                        placeholder="••••••••"
                        className="outline-[#8f6f6c5f] py-3 px-4 vietnam2-font text-[#8F6F6C]  bg-[#F6F3F2] rounded-2xl w-full  "
                      />
                      {touchPassword && !user.password && (
                        <p className="absolute -bottom-5 left-0 text-xs text-[#AE131A] ">
                          * password is required
                        </p>
                      )}
                      {touchPassword &&
                        user.password &&
                        !strongPasswordRegex && (
                          <p className="absolute -bottom-5 text-xs text-[#AE131A] whitespace-nowrap">
                            * 8+ chars, upper, lower, num, special
                          </p>
                        )}
                    </div>
                    <div className="flex-1 relative">
                      <label htmlFor="" className="text-[#5B403D] vietnam-font">
                        Confirm Password{" "}
                        <span className="text-2xs text-[#AE131A]">*</span>
                      </label>
                      <input
                        type="password"
                        value={user.confirmPassword}
                        onBlur={() => setTouchConfirm(true)}
                        onChange={(e) =>
                          Dispatch(
                            updateFeild({
                              feild: "confirmPassword",
                              value: e.target.value,
                            }),
                          )
                        }
                        placeholder="••••••••"
                        className="outline-[#8f6f6c5f] py-3 px-4 vietnam2-font text-[#8F6F6C]  bg-[#F6F3F2] rounded-2xl w-full  "
                      />
                      {touchConfirm && !user.confirmPassword && (
                        <p className="absolute -bottom-5 left-0 text-xs text-[#AE131A] ">
                          * Confirm Password is required
                        </p>
                      )}
                      {touchConfirm &&
                        user.confirmPassword &&
                        user.password !== user.confirmPassword && (
                          <p className="absolute -bottom-5 text-xs text-[#AE131A]">
                            * passwords do not match
                          </p>
                        )}
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4 w-full items-center">
                    <div className="text-[#5B403D] vietnam-font">Gender</div>
                    <label htmlFor="">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      onBlur={() => setTouchGender(true)}
                      checked={user.gender === "male"}
                      onChange={() =>
                        Dispatch(
                          updateFeild({ feild: "gender", value: "male" }),
                        )
                      }
                    />
                    <label htmlFor="">Female</label>
                    <input
                      type="radio"
                      onBlur={() => setTouchGender(true)}
                      name="gender"
                      checked={user.gender === "female"}
                      onChange={() =>
                        Dispatch(
                          updateFeild({ feild: "gender", value: "female" }),
                        )
                      }
                    />
                    <label htmlFor="">Binary</label>
                    <input
                      type="radio"
                      name="gender"
                      onBlur={() => setTouchGender(true)}
                      checked={user.gender === "binary"}
                      onChange={() =>
                        Dispatch(
                          updateFeild({ feild: "gender", value: "binary" }),
                        )
                      }
                    />
                    {touchGender && !user.gender && (
                      <p className="absolute -bottom-5 left-0 text-xs text-[#AE131A] ">
                        * Gender is required
                      </p>
                    )}
                  </div>
                  <div className="mt-3 flex gap-3 text-md vietnam-font">
                    <input
                      type="checkbox"
                      checked={user.terms}
                      onChange={(e) =>
                        Dispatch(
                          updateFeild({
                            feild: "terms",
                            value: e.target.checked,
                          }),
                        )
                      }
                    />
                    <p className="text-[#5B403D]">
                      I accept the{" "}
                      <span className="font-bold">Terms of Service</span> and{" "}
                      <span className="font-bold">Privacy Policy</span>.
                    </p>
                  </div>
                  <div className="mt-3 w-full m-4 justify-center flex gap-3 text-md vietnam-font">
                    <button
                      disabled={!isFormValid()}
                      type="submit"
                      className={`text-md py-3 text-[#F6F3F2] rounded-3xl px-24 ${
                        isFormValid()
                          ? "bg-[#AE131A]"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Begin Your Journey
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
