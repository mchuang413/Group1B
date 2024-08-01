"use client"
import React, { useState } from 'react';

const Page = () => {
  const [locations, setLocations] = useState(['']);
  const [symptoms, setSymptoms] = useState(['']);

  const addSymptom = () => {
    setSymptoms([...symptoms, '']);
  };

  const handleSymptomChange = (index, value) => {
    const newSymptoms = [...symptoms];
    newSymptoms[index] = value;
    setSymptoms(newSymptoms);
};

  const addLocation = () => {
    setLocations([...locations, '']);
  };

  const handleLocationChange = (index, value) => {
    const newLocations = [...locations];
    newLocations[index] = value;
    setLocations(newLocations);
  };



  return (
    <section className="max-container padding-container flex flex-row justify-center gap-20 py-10 pb-32 md:gap-28 bg-blue-950 lg:py-20 xl:flex-row">
      {/*LEFT*/}
      <div>
        <h1 className="text-white text-4xl text-center lg:text-6xl font-bold">
          Health Survey
        </h1>
        <h2 className="text-base mt-2 text-white ml-28 text-center xl:max-w-[520px]">
          Answer the questions below.
        </h2>
        <div className="flex flex-wrap gap-16 pt-10 text-blue-70">
          {/* Survey Card 1 */}
          <div className="relative flex flex-1 items-start">
            <div className="relative z-20 w-50 h-auto lg:h-auto flex-col gap-11 rounded-3xl bg-white px-5 py-8 shadow-xl">
              <div className="flex flex-col gap-y-8">
                {/* Question 1 */}
                <div>
                  <p className="pb-3">
                    1. Please select your age.
                  </p>
                  <div className="flex gap-4 px-2 regular-16">
                    <span>1-17</span><input type="radio" name="radio-1" className="radio" defaultChecked />
                    <span>17-50</span><input type="radio" name="radio-1" className="radio" defaultChecked />
                    <span>50+</span><input type="radio" name="radio-1" className="radio" defaultChecked />
                  </div>
                </div>
                {/* Question 2 */}
                <div>
                  <p className="pb-3">
                    2. What are your main physical symptoms? (Type N/A if box not needed)
                  </p>
                  {symptoms.map((symptoms, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                      <input
                        type="text"
                        placeholder={`Symptom ${index + 1}`}
                        className="input input-bordered w-full max-w-xs"
                        value={symptoms}
                        onChange={(e) => handleSymptomChange(index, e.target.value)}
                      />
                      {index === symptoms.length - 1 && (
                        <button className="btn btn-primary" onClick={addSymptom}>
                          Add
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {/* Question 3 */}
                <div>
                  <p className="pb-3">
                    3. What is the general location in your body affected by your illness? (Type N/A if box not needed)
                  </p>
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                      <input
                        type="text"
                        placeholder={`Affected Location ${index + 1}`}
                        className="input input-bordered w-full max-w-xs"
                        value={location}
                        onChange={(e) => handleLocationChange(index, e.target.value)}
                      />
                      {index === locations.length - 1 && (
                        <button className="btn btn-primary" onClick={addLocation}>
                          Add
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {/* Question 4 */}
                <div>
                  <p className="pb-3">
                    4. On a scale of 1-10, how would you rate your pain/discomfort?
                  </p>
                  <input type="range" min={0} max="10" defaultValue="0" className="range" step="1" />
                  <div className="flex w-full justify-between px-2 text-xs">
                    {[...Array(10).keys()].map(i => (
                      <span key={i + 1}>{i + 1}</span>
                    ))}
                  </div>
                </div>
                {/* Question 5 */}
                <div>
                  <p className="pb-3">
                    5. What are some previous illnesses you've had?
                  </p>
                  <input type="text" placeholder="Previous Illnesses" className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Question 6 */}
                <div>
                  <p className="pb-3">
                    6. Have you taken any medications to treat these illnesses?
                  </p>
                  <input type="text" placeholder="Medications Taken" className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Question 7 */}
                <div>
                  <p className="pb-3">
                    7. For about how long did you take these medications in years?
                  </p>
                  <input type="number" placeholder="Medication Duration" className="input input-bordered w-full max-w-xs" />
                </div>
                {/* Question 8 */}
                <div>
                  <p className="pb-3">
                    8. Has this illness been affected by stimulation to any organs in your body?
                  </p>
                  <div className="flex gap-4 px-2 regular-16">
                    <span>Yes</span><input type="radio" name="radio-1" className="radio" defaultChecked />
                    <span>No</span><input type="radio" name="radio-1" className="radio" defaultChecked />
                  </div>
                </div>
                {/* Question 9 */}
                <div>
                  <p className="pb-3">
                    9. What are the incidence rates for your illness for each demographic?
                  </p>
                    <div className="flex flex-col gap-3">
                      <input type="text" placeholder="Ages 1-17, Male" className="input input-bordered w-full max-w-xs" />
                      <input type="text" placeholder="Ages 1-17, Female" className="input input-bordered w-full max-w-xs" />
                      <input type="text" placeholder="Ages 17-50, Male" className="input input-bordered w-full max-w-xs" />
                      <input type="text" placeholder="Ages 17-50, Female" className="input input-bordered w-full max-w-xs" />
                      <input type="text" placeholder="Ages 50+, Male" className="input input-bordered w-full max-w-xs" />
                      <input type="text" placeholder="Ages 50+, Female" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
