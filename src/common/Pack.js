const Pack = ({ name }) => {
  return (
    <div className="w-[300px] h-[500px] bg-blue-500 rounded-xl shadow-lg cursor-pointer">
      <h2>Pack {name}</h2>
      <p>これは Pack {name} の内容です。</p>
    </div>
  );
};

export default Pack;
