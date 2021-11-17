import { Container, Section, AnimationWrapper } from "components";
import React, { FC, useCallback, useState } from "react";
import axios from "axios";
import { Console, ServerResponse } from "./props";

export const PublicServantConsole: FC = () => {
  const [consoleState, setConsoleState] = useState<Console>(Console.ADD);
  const [email, setEmail] = useState("");
  const [cname, setCname] = useState("");
  const [diseaseCode, setDiseaseCode] = useState("");
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalPatients, setTotalPatients] = useState(0);
  const [serverResponse, setServerResponse] =
    useState<ServerResponse>(undefined);

  const onEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );
  const onCnameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCname(e.target.value);
    },
    []
  );
  const onDiseaseCodeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDiseaseCode(e.target.value);
    },
    []
  );
  const onDeathsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTotalDeaths(Number(e.target.value));
    },
    []
  );
  const onPatientsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTotalPatients(Number(e.target.value));
    },
    []
  );

  const addRecord = useCallback(() => {
    setConsoleState(Console.ADD);
    setServerResponse(undefined);
  }, []);
  const updateRecord = useCallback(() => {
    setConsoleState(Console.UPDATE);
    setServerResponse(undefined);
  }, []);
  const deleteRecord = useCallback(() => {
    setConsoleState(Console.DELETE);
    setServerResponse(undefined);
  }, []);

  const submitForm = useCallback(
    (
        email,
        cname,
        diseaseCode,
        totalDeaths,
        totalPatients,
        consoleStateCurrent
      ) =>
      () => {
        console.log(email, cname, diseaseCode, totalDeaths, totalPatients);

        let url_endpoint = "";
        switch (consoleStateCurrent) {
          case Console.ADD:
            url_endpoint = "add";
            break;
          case Console.UPDATE:
            url_endpoint = "update";
            break;
          case Console.DELETE:
            url_endpoint = "delete";
            break;
        }

        if (consoleStateCurrent === Console.ADD) {
          axios({
            method: "post",
            url: `https://pandemic-bonus-app.herokuapp.com/api/records/${url_endpoint}`,
            headers: {},
            data: {
              email: email,
              cname: cname,
              disease_code: diseaseCode,
              total_deaths: totalDeaths,
              total_patients: totalPatients,
            },
          })
            .then((response) => {
              setServerResponse(response.data);
            })
            .catch((error) => {
              console.log("error", error);
            });
        } else if (consoleStateCurrent === Console.UPDATE) {
          axios({
            method: "put",
            url: `https://pandemic-bonus-app.herokuapp.com/api/records/${url_endpoint}`,
            headers: {},
            data: {
              email: email,
              cname: cname,
              disease_code: diseaseCode,
              total_deaths: totalDeaths,
              total_patients: totalPatients,
            },
          })
            .then((response) => {
              setServerResponse(response.data);
            })
            .catch((error) => {
              console.log("error", error);
            });
        } else {
          axios({
            method: "delete",
            url: `https://pandemic-bonus-app.herokuapp.com/api/records/${url_endpoint}`,
            headers: {},
            data: {
              email,
              cname,
              disease_code: diseaseCode,
            },
          })
            .then((response) => {
              setServerResponse(response.data);
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
      },
    []
  );

  return (
    <Container style={{ backgroundColor: "#28282C" }}>
      <AnimationWrapper time={2}>
        <Section
          title="Public Servant Console"
          description="Manipulating and tracking global pandemic situation made easy!"
        >
          <div className="row">
            <div className="col-md-3 pr-4">
              <button
                type="button"
                className="btn btn-outline-success w-100 tw-mb-8"
                onClick={addRecord}
              >
                Add Record
              </button>
              <button
                type="button"
                className="btn btn-outline-light w-100 tw-mb-8"
                onClick={updateRecord}
              >
                Update Record
              </button>
              <button
                type="button"
                className="btn btn-outline-danger w-100 tw-mb-8"
                onClick={deleteRecord}
              >
                Delete Record
              </button>
            </div>
            <div className="col-md-9 tw-pl-16 text-2xl">
              {consoleState === Console.ADD && (
                <h3 className="text-white text-2xl">
                  ADD records to promote global pandemic tracking.
                </h3>
              )}
              {consoleState === Console.UPDATE && (
                <h3 className="text-white text-2xl">
                  UPDATE records to keep people up to date with the disease
                  data.
                </h3>
              )}
              {consoleState === Console.DELETE && (
                <h3 className="text-white text-2xl">
                  DELETE records that are out of date or falsy.
                </h3>
              )}
              <input
                type="text"
                className="form-control tw-mt-6"
                style={{
                  background: "transparent",
                  color: "white",
                  width: "450px",
                }}
                placeholder="Email"
                value={email}
                onChange={onEmailChange}
              />
              <input
                type="text"
                className="form-control tw-mt-6"
                style={{
                  background: "transparent",
                  color: "white",
                  width: "450px",
                }}
                placeholder="Country"
                value={cname}
                onChange={onCnameChange}
              />
              <input
                type="text"
                className="form-control tw-mt-6"
                style={{
                  background: "transparent",
                  color: "white",
                  width: "450px",
                }}
                placeholder="Disease code"
                value={diseaseCode}
                onChange={onDiseaseCodeChange}
              />
              {(consoleState === Console.ADD ||
                consoleState === Console.UPDATE) && (
                <div className="row tw-mt-6">
                  <div className="col-md-3 col-12">
                    <input
                      type="numeric"
                      className="form-control"
                      style={{
                        background: "transparent",
                        color: "white",
                      }}
                      placeholder="Recorded mortal cases"
                      value={totalDeaths}
                      onChange={onDeathsChange}
                    />
                  </div>
                  <div className="col-md-3 col-12">
                    <input
                      type="numeric"
                      className="form-control"
                      style={{
                        background: "transparent",
                        color: "white",
                      }}
                      placeholder="Recorded disease cases"
                      value={totalPatients}
                      onChange={onPatientsChange}
                    />
                  </div>
                </div>
              )}
              <div className="col-md-6">
                <button
                  className="btn btn-outline-light w-100 tw-mt-6"
                  onClick={submitForm(
                    email,
                    cname,
                    diseaseCode,
                    totalDeaths,
                    totalPatients,
                    consoleState
                  )}
                >
                  Submit
                </button>
              </div>
              <div className="tw-mt-16">
                <p className="text-white">
                  {serverResponse && "Status: " + serverResponse.message}
                </p>
              </div>
            </div>
          </div>
        </Section>
      </AnimationWrapper>
    </Container>
  );
};
