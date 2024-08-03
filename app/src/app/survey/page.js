"use client";
import React, { useState } from "react";

const Page = () => {
  const [locations, setLocations] = useState([""]);
  const [symptoms, setSymptoms] = useState([""]);
  const [formData, setFormData] = useState({
    ageGroup: "",
    painLevel: 0,
    previousIllnesses: "",
    medications: "",
    medicationDuration: "",
    organStimulation: "",
    incidenceRates: {
      "1-17 Male": "",
      "1-17 Female": "",
      "17-50 Male": "",
      "17-50 Female": "",
      "50+ Male": "",
      "50+ Female": "",
    },
  });

  const addSymptom = () => {
    setSymptoms([...symptoms, ""]);
  };

  const handleSymptomChange = (index, value) => {
    const newSymptoms = [...symptoms];
    newSymptoms[index] = value;
    setSymptoms(newSymptoms);
  };

  const addLocation = () => {
    setLocations([...locations, ""]);
  };

  const handleLocationChange = (index, value) => {
    const newLocations = [...locations];
    newLocations[index] = value;
    setLocations(newLocations);
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIncidenceRateChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      incidenceRates: {
        ...prevData.incidenceRates,
        [key]: value,
      },
    }));
  };

  const handleSubmit = () => {
    const dataToSave = {
      ...formData,
      symptoms,
      locations,
    };
    const jsonString = JSON.stringify(dataToSave, null, 2);
    const textString = Object.entries(dataToSave)
      .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
      .join("\n");

    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "survey_data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const txtBlob = new Blob([textString], { type: "text/plain" });
    const txtUrl = URL.createObjectURL(txtBlob);
    const txtLink = document.createElement("a");
    txtLink.href = txtUrl;
    txtLink.download = "survey_data.txt";
    document.body.appendChild(txtLink);
    txtLink.click();
    document.body.removeChild(txtLink);

    alert("Survey data saved successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="navbar bg-base-200 shadow-lg">
        <div className="flex-1 px-2 lg:flex-none">
          <a href="/">
            <img
              src="/medvice.png"
              alt="Logo"
              className="h-16 w-auto rounded-md"
            />
          </a>
        </div>
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch space-x-4">
            <a className="btn btn-ghost btn-sm rounded-btn" href="/">
              Home
            </a>
            <a className="btn btn-ghost btn-sm rounded-btn" href="/survey">
              Survey
            </a>
          </div>
        </div>
      </nav>
      <section className="max-container padding-container flex flex-row justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        {/*LEFT*/}
        <div>
          <h1 className="text-blue-950 text-4xl text-center lg:text-6xl font-bold">
            Health Survey
          </h1>
          <h2 className="text-base mt-2 text-blue-950 ml-28 text-center xl:max-w-[520px]">
            Answer the questions below.
          </h2>
          <div className="flex flex-wrap gap-16 pt-10 text-blue-70">
            {/* Survey Card 1 */}
            <div className="relative flex flex-1 items-start">
              <div className="relative z-20 w-50 h-auto lg:h-auto flex-col gap-11 rounded-3xl bg-white px-5 py-8 shadow-xl">
                <div className="flex flex-col gap-y-8">
                  {/* Question 1 */}
                  <div>
                    <p className="pb-3">1. Please select your age.</p>
                    <div className="flex flex-col px-2 regular-16"> {/* Changed from flex-row to flex-col for vertical alignment */}
                      <label className="flex items-center gap-2 mb-2">
                        <input
                          type="radio"
                          name="ageGroup"
                          className="radio"
                          value="1-17"
                          checked={formData.ageGroup === "1-17"}
                          onChange={(e) =>
                            handleInputChange("ageGroup", e.target.value)
                          }
                        />
                        <span>1-17</span>
                      </label>
                      <label className="flex items-center gap-2 mb-2">
                        <input
                          type="radio"
                          name="ageGroup"
                          className="radio"
                          value="17-50"
                          checked={formData.ageGroup === "17-50"}
                          onChange={(e) =>
                            handleInputChange("ageGroup", e.target.value)
                          }
                        />
                        <span>17-50</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="ageGroup"
                          className="radio"
                          value="50+"
                          checked={formData.ageGroup === "50+"}
                          onChange={(e) =>
                            handleInputChange("ageGroup", e.target.value)
                          }
                        />
                        <span>50+</span>
                      </label>
                    </div>
                  </div>
                  {/* Question 2 */}
                  <div>
                    <p className="pb-3">
                      2. What are your main physical symptoms? (Type N/A if box
                      not needed)
                    </p>
                    {symptoms.map((symptom, index) => (
                      <div key={index} className="flex items-center gap-2 mb-2">
                        <input
                          type="text"
                          placeholder={`Symptom ${index + 1}`}
                          className="input input-bordered w-full max-w-xs"
                          value={symptom}
                          onChange={(e) =>
                            handleSymptomChange(index, e.target.value)
                          }
                        />
                        {index === symptoms.length - 1 && (
                          <button
                            className="btn btn-primary"
                            onClick={addSymptom}
                          >
                            Add
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Question 3 */}
                  <div>
                    <p className="pb-3">
                      3. What is the general location in your body affected by
                      your illness? (Type N/A if box not needed)
                    </p>
                    {locations.map((location, index) => (
                      <div key={index} className="flex items-center gap-2 mb-2">
                        <input
                          type="text"
                          placeholder={`Affected Location ${index + 1}`}
                          className="input input-bordered w-full max-w-xs"
                          value={location}
                          onChange={(e) =>
                            handleLocationChange(index, e.target.value)
                          }
                        />
                        {index === locations.length - 1 && (
                          <button
                            className="btn btn-primary"
                            onClick={addLocation}
                          >
                            Add
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Question 4 */}
                  <div>
                    <p className="pb-3">
                      4. On a scale of 1-10, how would you rate your
                      pain/discomfort?
                    </p>
                    <input
                      type="range"
                      min={0}
                      max="10"
                      value={formData.painLevel}
                      className="range"
                      step="1"
                      onChange={(e) =>
                        handleInputChange("painLevel", e.target.value)
                      }
                    />
                    <div className="flex w-full justify-between px-2 text-xs">
                      {[...Array(10).keys()].map((i) => (
                        <span key={i + 1}>{i + 1}</span>
                      ))}
                    </div>
                  </div>
                  {/* Question 5 */}
                  <div>
                    <p className="pb-3">
                      5. What are some previous illnesses you've had?
                    </p>
                    <input
                      type="text"
                      placeholder="Previous Illnesses"
                      className="input input-bordered w-full max-w-xs"
                      value={formData.previousIllnesses}
                      onChange={(e) =>
                        handleInputChange("previousIllnesses", e.target.value)
                      }
                    />
                  </div>
                  {/* Question 6 */}
                  <div>
                    <p className="pb-3">
                      6. Have you taken any medications to treat these illnesses?
                    </p>
                    <input
                      type="text"
                      placeholder="Medications Taken"
                      className="input input-bordered w-full max-w-xs"
                      value={formData.medications}
                      onChange={(e) =>
                        handleInputChange("medications", e.target.value)
                      }
                    />
                  </div>
                  {/* Question 7 */}
                  <div>
                    <p className="pb-3">
                      7. For about how long did you take these medications in
                      years?
                    </p>
                    <input
                      type="number"
                      placeholder="Medication Duration"
                      className="input input-bordered w-full max-w-xs"
                      value={formData.medicationDuration}
                      onChange={(e) =>
                        handleInputChange("medicationDuration", e.target.value)
                      }
                    />
                  </div>
                  {/* Question 8 */}
                  <div>
                    <p className="pb-3">
                      8. Has this illness been affected by stimulation to any
                      organs in your body?
                    </p>
                    <div className="flex gap-4 px-2 regular-16">
                      <span>Yes</span>
                      <input
                        type="radio"
                        name="organStimulation"
                        className="radio"
                        value="Yes"
                        checked={formData.organStimulation === "Yes"}
                        onChange={(e) =>
                          handleInputChange("organStimulation", e.target.value)
                        }
                      />
                      <span>No</span>
                      <input
                        type="radio"
                        name="organStimulation"
                        className="radio"
                        value="No"
                        checked={formData.organStimulation === "No"}
                        onChange={(e) =>
                          handleInputChange("organStimulation", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  {/* Question 9 */}
                  <div>
                    <p className="pb-3">
                      9. What are the incidence rates for your illness for each
                      demographic?
                    </p>
                    <div className="flex flex-col gap-3">
                      {Object.keys(formData.incidenceRates).map((key) => (
                        <input
                          key={key}
                          type="text"
                          placeholder={key}
                          className="input input-bordered w-full max-w-xs"
                          value={formData.incidenceRates[key]}
                          onChange={(e) =>
                            handleIncidenceRateChange(key, e.target.value)
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    className="btn btn-primary w-full"
                    onClick={handleSubmit}
                  >
                    Submit Survey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
