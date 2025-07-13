import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await fetch("https://login-site-lot.cat084511mac.workers.dev/logout", {
          method: "POST",
          credentials: "include",
        });

        localStorage.removeItem("loggedIn");
        setLoggedIn(false);
        navigate("/login");
      } catch (e) {
        console.error("ログアウトに失敗しました:", e);
        navigate("/login"); // 失敗してもログインページへ
      }
    };
    logout();
  }, [navigate, setLoggedIn]);

  return (
    <div className="max-w-sm mx-auto mt-10">
      <p>ログアウトしました</p>
      <a href="/"></a>
    </div>
  );
};

export default Logout;
