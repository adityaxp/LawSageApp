import axios from "axios";
import React, { useState, useEffect } from "react";
import hostAddress from "../env/Hosts";

const checkupLLMService = () => {
  const [connectionData, setConnectionData] = useState(null);
  const [loading, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoader(true);
    setError(null);
    console.log("refetch");
    fetchData();
  };

  const fetchData = async () => {
    const endpoint = `http://${hostAddress}/CHECK`;

    setLoader(true);
    try {
      const response = await axios.get(endpoint, {
        timeout: 5000,
      });
      setConnectionData(response.data);
      setLoader(false);
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        setError("Request timed out");
      }
      setError(error.message);
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };
  return { connectionData, loading, error, refetch };
};

export default checkupLLMService;
