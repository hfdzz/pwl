import { 
    Link,
} from "react-router-dom";
import { useState } from "react";

export default function Kontak() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState({
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
      console.log(event.target.name + ' ' + event.target.value);
      event.preventDefault();
      setMessages([
          ...messages,
          {
              email: input.email,
              message: input.message,
          },
      ]);
      setInput({
          email: "",
          message: "",
      });
    }

    return (
      <>
         <div className="container p-3">
            <div className="row">
              <h1>Kontak Kami</h1>
            </div>
            <div className="row">
              <h1>Message</h1>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" name="email" onChange={handleChange} value={input.email}/>
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Pesan..." name="message" onChange={handleChange} value={input.message}></textarea>
                  <button className="btn btn-primary" onClick={handleSubmit}>Kirim</button>
                </div>
              </div>
              <div className="col-6">
                <h2>Pesan Terikirim: <span>{messages.length}</span></h2>
                <div className="row">
                    {messages.map((message, i) => (
                      <div key={i} className="col-6">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Email:</h5>
                            <p className="card-text">{message.email}</p>
                            <h5 className="card-title">Message:</h5>
                            <p className="card-text">{message.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
      </>
    );
  }