import React, { useEffect, useState } from 'react'
import apiService from '../servicesApi/apiService';


const APP_BASE_URL = import.meta.env.BACKEND_URL;
const DashboardCom = () => {
  const [data, setData] = useState([]);
  const handleLogut = async () => {
    try {
      const response = await apiService.post('auth/logout', {});

      window.location.href = "/";
      if (response.status === 200) {
        window.location.href = "/";
      } else {
        console.log("logout failed");
      }
    } catch (error) {
      console.log("error", error);
    }
  };


  useEffect(() => {
    const getPropery = async () => {
      const response = await apiService.get("get-property");
      setData(response.data);
    };
    getPropery();
  }, [])


  console.log("data", data);
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {data && (
          <>
            {data.map((item) => (
              <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
                <img
                  className="w-full"
                  src={`http://127.0.0.1:8000/fileupload/property/${item.picture}`}

                  alt="Product"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.name}</div>
                  <p className="text-gray-700 text-base">
                    {item.description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </>
        )}

      </div>
      <button onClick={handleLogut}>Logout</button>
    </div>
  )
}

export default DashboardCom
