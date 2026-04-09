import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActivePath(location.pathname);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const showLoader = activePath !== location.pathname;

  if (!isLoading && !showLoader) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-[#FFF8EF] items-center">
      <lord-icon
        src="https://cdn.lordicon.com/pkyxcgiq.json"
        trigger="loop"
        colors="primary:#000000,secondary:#c71f16,tertiary:#e83a30,quaternary:#4bb3fd"
        style={{ width: 250, height: 250 }}
      ></lord-icon>
    </div>
  );
};

export default Loading;
