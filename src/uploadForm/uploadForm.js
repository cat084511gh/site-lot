import React, { useState } from "react";

const UploadForm = () => {
  const [url, setUrl] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchImages = async () => {
    setLoading(true);
    setError("");
    setImages([]);

    try {
      const apiUrl = `https://site-lot.cat084511mac.workers.dev/?url=${encodeURIComponent(url)}`;
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error("画像の取得に失敗しました");
      const data = await res.json();
      if (!Array.isArray(data)) {
        throw new Error("正しい配列データが返されませんでした");
      }
      setImages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const saveUrlAndImage = (imageSrc) => {
    console.log(url);
    console.log(imageSrc);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        URLアップロード & カードサムネイル選択
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-grow border px-3 py-2 rounded"
        />
        <button
          onClick={fetchImages}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "取得中..." : "取得"}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`img-${i}`}
              className="w-full border rounded"
              onClick={() => saveUrlAndImage(src)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadForm;
