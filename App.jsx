import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const [char, setChar] = useState("");

  const [student, setStudent] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setStudent({
      name,
      email,
      phone,
      city,
      course,
      pass,
    });
  }

  function handleReset() {
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setCourse("");
    setPass("");
    setChar("");
    setShow(false);
    setStudent(null);
  }

  return (
    <div className="container">
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>City</label>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <label>Course</label>
        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />

        <label>Password</label>
        <div className="password-box">
          <input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        <label>Message</label>
        <textarea
          rows="5"
          placeholder="Type here..."
          value={char}
          onChange={(e) => setChar(e.target.value)}
        ></textarea>

        <p>Character Count: {char.length}</p>

        <div className="buttons">
          <button
            type="submit"
            disabled={
              !name || !email || !phone || !city || !course || !pass
            }
          >
            Submit
          </button>

          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {student && (
        <div className="card">
          <h2>Student Information</h2>

          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p><strong>City:</strong> {student.city}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Password:</strong> {student.pass}</p>
        </div>
      )}
    </div>
  );
}

export default App;