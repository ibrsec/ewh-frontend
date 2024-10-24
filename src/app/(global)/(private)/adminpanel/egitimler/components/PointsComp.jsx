import { useState } from "react";

const PointsComp = ({ points, setPoints }) => {
  // Yeni madde eklemek için
  const addPoint = () => {
    setPoints([...points, ""]);
  };
  // Bos ınputları sıl
  const removeEmptyPoints = () => {
    points.length > 1 && setPoints(points.filter((point) => point.length > 0));
  };

  // Input değerlerini yönetmek için
  const handlePointChange = (index, value) => {
    const updatedPoints = [...points];
    updatedPoints[index] = value;
    setPoints(updatedPoints);
  };

  return (
    <div className="mb-5">
      <div className="">Maddeler:</div>
      {points.map((point, index) => (
        <div className="mb-2" 
        key={index}>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5  "
            placeholder={`Madde ${index + 1}* - max 100 char`}
            value={point}
            onChange={(e) => handlePointChange(index, e.target.value)}
            maxLength="100"
            required
          />
          {point.length > 100 && (
            <div className="text-red-500 text-sm ">Madde uzunlugu 100 u gecemez!</div>
          )} 
        </div>
      ))}

      <button type="button" onClick={addPoint} className="primary-button">
        Madde ekle
      </button>
      <button
        type="button"
        onClick={removeEmptyPoints}
        className="primary-button"
      >
        Boşları sil
      </button>

      {points.length < 1 && (
        <span className="px-2 text-xs text-red-500">
          En az 1 madde eklenmelidir!
        </span>
      )}
    </div>
  );
};

export default PointsComp;
