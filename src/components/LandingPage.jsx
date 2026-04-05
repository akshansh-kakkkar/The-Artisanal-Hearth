import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative ">
      <div className="h-[100vh]  w-full bg-cover opacity-98 bg-[url('/assets/pizza-bg.jpeg')]">
        <div className=" w-full bg-white shadow-md shadow-[#5b403d2e] px-8 py-6 flex items-center justify-between">
         <div>
          <img src="/assets/logo.svg" alt="" />
         </div>
          <div className="logo-font text-2xl text-[#AE131A]">
            The Artisanal Hearth
          </div>
        </div>
        <div className="h-[89.26vh] w-full bg-black/60 flex justify-center ">
          <div className="flex gap-12 flex-col items-center text-center">
            <div className="logo-font text-5xl flex text-[#FCF9F8] mt-12">
              The Artisanal Hearth
            </div>
            <div>
              <img
                src="/assets/arrow.svg"
                className="animate-bounce duration-300"
                width={80}
                alt="arrow"
              />
            </div>
            <div className="flex gap-80 justify-center items-center">
              <div className="w-[400px] h-[400px] justify-center flex flex-col gap-4 items-center rounded-2xl bg-[#fcf9f8] cursor-pointer hover:scale-[105%] transition-all duration-300">
                <lord-icon
                  src="https://cdn.lordicon.com/fqbvgezn.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#AE131A,secondary:#AE131A"
                  style={{ width: 250, height: 250 }}
                ></lord-icon>
                <div className="text-2xl  vietnam-font  text-[#AE131A]">
                  Registeration
                </div>
              </div>
              <div className="w-[400px] h-[400px] justify-center cursor-pointer hover:scale-[105%] transition-all duration-300 flex flex-col gap-4 items-center rounded-2xl bg-[#fcf9f8]">
                <lord-icon
    src="https://cdn.lordicon.com/urdbeoyx.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#AE131A,secondary:#AE131A"
                  style={{ width: 250, height: 250 }}
                ></lord-icon>
                <div className="text-2xl  vietnam-font  text-[#AE131A]">
                  Registeration
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
