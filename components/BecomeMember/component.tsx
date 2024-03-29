import { Container, Section, AnimationWrapper } from "components";
import React, { FC, useState } from "react";
import axios from "axios";
import { ServerResponse } from "./props";

export const BecomeMember: FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [country, setCountry] = useState("");
  const [field, setField] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);
  const [serverResponse, setServerResponse] =
    useState<ServerResponse>(undefined);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const onSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(e.target.value);
  };
  const onCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setField(e.target.value);
  };
  const onPublicServantRadioClicked = () => {
    setIsDoctor(false);
  };
  const onDoctorRadioClicked = () => {
    setIsDoctor(true);
  };

  const submitForm = () => {
    axios({
      method: "post",
      url: "https://pandemic-bonus-app.herokuapp.com/api/users",
      headers: {},
      data: {
        name,
        surname,
        email,
        phone,
        salary,
        cname: country,
        isDoctor,
        field,
      },
    })
      .then((response) => {
        setServerResponse(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Container style={{ backgroundColor: "#28282C" }}>
      <AnimationWrapper time={2}>
        <Section
          id="apply"
          title="Join hero community"
          description="Become either a doctor or a public servant"
        >
          <div className="row col-6 tw-mx-auto">
            <div className="mb-4 col-md-6 col-12">
              <input
                type="text"
                className="form-control"
                style={{ background: "transparent", color: "white" }}
                placeholder="Name"
                value={name}
                onChange={onNameChange}
              />
            </div>
            <div className="mb-4 col-md-6 col-12">
              <input
                type="text"
                className="form-control"
                style={{ background: "transparent", color: "white" }}
                placeholder="Surname"
                value={surname}
                onChange={onSurnameChange}
              />
            </div>
            <div className="mb-4 col-12">
              <input
                type="text"
                className="form-control"
                style={{ background: "transparent", color: "white" }}
                placeholder="Email"
                value={email}
                onChange={onEmailChange}
              />
            </div>
            <div className="mb-4 col-12">
              <input
                type="text"
                className="form-control"
                style={{ background: "transparent", color: "white" }}
                placeholder="Phone"
                value={phone}
                onChange={onPhoneChange}
              />
            </div>
            <div className="mb-4 col-12">
              <input
                type="text"
                className="form-control"
                style={{ background: "transparent", color: "white" }}
                placeholder="Salary"
                value={salary}
                onChange={onSalaryChange}
              />
            </div>
            <div className="mb-4 col-12">
              <input
                type="text"
                className="form-control"
                style={{ background: "transparent", color: "white" }}
                placeholder="Country"
                value={country}
                onChange={onCountryChange}
              />
            </div>
            <div className="row mb-4 tw-ml-4">
              <div className="col-6 form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={onPublicServantRadioClicked}
                  checked
                />
                <label
                  className="form-check-label text-white"
                  htmlFor="flexRadioDefault1"
                >
                  Public Servant
                </label>
              </div>
              <div className="col-6 form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  onChange={onDoctorRadioClicked}
                  id="flexRadioDefault2"
                />
                <label
                  className="form-check-label text-white"
                  htmlFor="flexRadioDefault2"
                >
                  Doctor
                </label>
              </div>
            </div>
            <div className="mb-4 col-12">
              <input
                type="text"
                className="form-control"
                style={{ background: "transparent", color: "white" }}
                placeholder="Department for servant / Degree for doctor"
                value={field}
                onChange={onFieldChange}
              />
            </div>
            <div>
              <button className="btn btn-success w-100" onClick={submitForm}>
                Become a member
              </button>
            </div>
            <div className="tw-mt-16">
              <p className="text-white">
                {serverResponse && "Status: " + serverResponse.message}
              </p>
            </div>
          </div>
        </Section>
      </AnimationWrapper>
    </Container>
  );
};
