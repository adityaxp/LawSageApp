import axios from "axios";
import React, { useState, useEffect } from "react";
import hostAddress from "../utils/Hosts";

const RAGResponseSevice = ({ prompt }) => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRAGResponse();
  }, []);

  const getRAGResponse = async () => {
    const endpoint = `http://${hostAddress}/RAG`;

    setLoader(true);
    try {
      const response = await axios.post(endpoint, {
        timeout: 5000,
        auth_token: "ISAUodiuIAU21",
        prompt: prompt,
      });
      setResponseData(response.data);
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
  return { responseData, loading, error };
};

export default RAGResponseSevice;
