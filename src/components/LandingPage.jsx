import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate()
  return (
    <div className="h-screen w-full bg-[#FCF9F8]">
      <div className="w-full bg-white shadow-md shadow-[#5b403d2e] px-8 py-4 flex items-center justify-between">
        <div className="logo-font text-2xl text-[#AE131A]">The Artisanal Hearth</div>
        <div>
            <p onClick={()=>navigate('/')}>Register</p>
            <p>Customizer</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
