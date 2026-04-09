import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen">
      <div className="min-h-screen w-full bg-[url('/assets/pizza-bg.jpeg')] bg-cover bg-center">
        <Navbar child="The Artisanal Hearth" />
        <div className="flex min-h-[calc(100vh-88px)] w-full items-center justify-center bg-black/60 px-4 py-8 sm:px-6 lg:px-10">
          <div className="flex w-full max-w-6xl flex-col items-center text-center">
            <div className="logo-font mt-4 text-3xl text-[#FCF9F8] sm:mt-6 sm:text-4xl lg:text-5xl">
              The Artisanal Hearth
            </div>
            <div className="mt-4 sm:mt-5">
              <img
                src="/assets/arrow.svg"
                className="mx-auto w-12 animate-bounce duration-300 sm:w-16 lg:w-20"
                alt="arrow"
              />
            </div>
            <div className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 md:gap-8 lg:gap-10">
              <div
                onClick={() => navigate("/registrationform")}
                className="flex min-h-[260px] w-full flex-col items-center justify-center gap-4 rounded-2xl bg-[#fcf9f8] px-6 py-8 cursor-pointer transition-all duration-300 hover:scale-[102%] sm:min-h-[320px] sm:rounded-[28px] lg:min-h-[400px]"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/fqbvgezn.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#AE131A,secondary:#AE131A"
                  style={{ width: 160, height: 160 }}
                  className="sm:[width:200px] sm:[height:200px] lg:[width:250px] lg:[height:250px]"
                ></lord-icon>
                <div className="text-xl vietnam-font text-[#AE131A] sm:text-2xl">
                  Registeration
                </div>
              </div>
              <div
                onClick={() => navigate("/pizza-menu")}
                className="flex min-h-[260px] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl bg-[#fcf9f8] px-6 py-8 transition-all duration-300 hover:scale-[102%] sm:min-h-[320px] sm:rounded-[28px] lg:min-h-[400px]"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/urdbeoyx.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#AE131A,secondary:#AE131A"
                  style={{ width: 160, height: 160 }}
                  className="sm:[width:200px] sm:[height:200px] lg:[width:250px] lg:[height:250px]"
                ></lord-icon>
                <div className="text-xl vietnam-font text-[#AE131A] sm:text-2xl">
                  Customize
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
