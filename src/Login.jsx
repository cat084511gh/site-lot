import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch(
        "https://login-site-lot.cat084511mac.workers.dev/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // ← Cookieを送受信したいとき必須
          body: JSON.stringify({ username, password }),
        },
      );

      if (!res.ok) throw new Error("認証失敗");

      setLoggedIn(true);
      localStorage.setItem("loggedIn", username);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h2 className="text-lg font-bold">ログイン admin:123456</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="ユーザー名"
        className="border p-2 w-full mb-2"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="パスワード"
        type="password"
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        ログイン
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Login;
