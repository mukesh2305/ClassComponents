import React, { useState } from 'react'

const ReactContact = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
    });
    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault();
        let { name, email, phone, address, message } = user;
        let url = "https://formsubmissionusingreact-dabeb-default-rtdb.firebaseio.com/youtubeReactForm.json";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                contentType: "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                address: address,
                message: message,
            })
        });
        if (response) {
            setUser({
                name: "",
                email: "",
                phone: "",
                address: "",
                message: "",
            })
            alert("data store successfully");
        }
    }
    return (
        <div className="contianer-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form" method="POST">
                    <span className="contact100-form-title">Contact Us</span>
                    <div className="wrap-input100 rs1-wrap-input100">
                        <span className="label-input100">Your name</span>
                        <input
                            className="input100"
                            name="name"
                            placeholder="Enter your name"
                            value={user.name}
                            onChange={getUserData}
                            autoComplete="off"
                            required
                            type="text"
                        />

                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 rs1-wrap-input100">
                        <span className="label-input100">Email</span>
                        <input
                            className="input100"
                            name="email"
                            placeholder="Enter Your email address"
                            value={user.email}
                            onChange={getUserData}
                            autoComplete="off"
                            required
                            type="text" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 rs1-wrap-input100">
                        <span className="label-input100">phone</span>
                        <input
                            className="input100"
                            name="phone"
                            placeholder="Enter Your phone Number "
                            value={user.phone}
                            onChange={getUserData}
                            autoComplete="off"
                            required
                            type="text" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 rs1-wrap-input100">
                        <span className="label-input100">Address</span>
                        <input
                            className="input100"
                            name="address"
                            placeholder="Enter Your address"
                            value={user.address}
                            onChange={getUserData}
                            autoComplete="off"
                            required
                            type="text" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 rs1-wrap-input100">
                        <span className="label-input100">Message</span>
                        <textarea
                            className="input100"
                            name="message"
                            placeholder="Your message here..."
                            value={user.message}
                            onChange={getUserData}
                        ></textarea>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn" onClick={postData}>
                            <span>
                                Submit
                                <i className="fa fa-long-arrow-right m-l-7"
                                    araia-hidden="true"></i>
                            </span>

                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default ReactContact
