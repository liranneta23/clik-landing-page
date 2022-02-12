import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { appData } from "../../variables/data";
import axios from "axios";

const OurForm = ({ wait = true }) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState({ isExist: false, message: "" });
  const [error, setError] = useState({ isExist: false, message: "" });
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${wait ? "/api/email" : "/api/beta"}`,
        { email },
        {
          config: { "Content-Type": "application/json" },
        }
      );
      setLoading(false);
      setSuccess({ isExist: true, message: data.message });
      setError({ isExist: false });
      setEmail("");
    } catch (error) {
      setLoading(false);
      setSuccess({ isExist: false, message: "" });

      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      setError({ isExist: true, message: err });
    }
  };

  return (
    <div>
      {loading && <Alert variant="info">Loading......</Alert>}
      {error.isExist && <Alert variant="danger">{error.message}</Alert>}
      {success.isExist && <Alert variant="success">{success.message}</Alert>}

      <form onSubmit={handleForm} id="get-in-touch">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
          // autoComplete="false"
          value={email}
        />

        <button type="submit" className="hide-xs">
          {wait ? "Join Wait List" : "Join Beta List"}
        </button>

        <Button type="submit" className="hide-md">
          {wait ? "Join Wait List" : "Join Beta List"}
        </Button>
      </form>
    </div>
  );
};

export default OurForm;
