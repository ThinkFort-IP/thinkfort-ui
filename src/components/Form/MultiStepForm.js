"use client";
import { useEffect, useState, useCallback } from "react";

const TOTAL_STEPS = 6;
const STORAGE_KEY = "ip_enquiry_draft";

export default function MultiStepForm() {
  const [step, setStep] = useState(() => {
    if (typeof window === "undefined") return 1;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return 1;

    try {
      return JSON.parse(saved).step ?? 1;
    } catch {
      return 1;
    }
  });

  const [data, setData] = useState(() => {
    if (typeof window === "undefined") return {};

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return {};

    try {
      return JSON.parse(saved).data ?? {};
    } catch {
      return {};
    }
  });

  const [errors, setErrors] = useState({});

  /* -------------------- Draft Save -------------------- */
  useEffect(() => {
    const payload = {
      step,
      data,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [step, data]);

  /* -------------------- Helpers -------------------- */
  const updateField = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const toggleCheckbox = (name, value) => {
    const current = data[name] || [];
    updateField(
      name,
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    );
  };

  const buildPayload = (data) => ({
    basicInformation: {
      fullName: data.fullName,
      email: data.email,
      contactNumber: data.phone,
      organization: data.org || null,
      clientCategory: data.clientCategory,
    },

    serviceRequirement: {
      servicesInterested: data.services,
      enquiryPurpose: data.enquiryPurpose,
    },

    inventionOverview: {
      currentStage: data.stage,
      confidentialityNoticeAccepted: true,
    },

    jurisdictionTimeline: {
      jurisdictions: data.jurisdiction,
      expectedTimeline: data.timeline,
    },

    backgroundCommunication: {
      previousIpFiled: data.previousIp,
      preferredCommunicationModes: data.communication,
      leadSource: data.leadSource || null,
    },

    consent: {
      noConfidentialInfoShared: true,
      noProfessionalRelationship: true,
      contactConsent: true,
    },

    metadata: {
      submissionSource: "website",
      formVersion: "v1.0",
      submittedAt: new Date().toISOString(),
    },
  });

  /* -------------------- Validation -------------------- */
  const validateStep = useCallback(() => {
    const e = {};

    if (step === 1) {
      if (!data.fullName) e.fullName = "Required";
      if (!data.email || !/\S+@\S+\.\S+/.test(data.email))
        e.email = "Valid email required";
      if (!data.phone || !/^[0-9+\-() ]{8,}$/.test(data.phone))
        e.phone = "Valid contact number required";
      if (!data.clientCategory) e.clientCategory = "Required";
    }

    if (step === 2 && (!data.services || data.services.length === 0)) {
      e.services = "Select at least one service";
    }

    if (step === 3 && !data.stage) {
      e.stage = "Required";
    }

    if (step === 4) {
      if (!data.jurisdiction || data.jurisdiction.length === 0)
        e.jurisdiction = "Required";
      if (!data.timeline) e.timeline = "Required";
    }

    if (step === 5) {
      if (!data.previousIp) e.previousIp = "Required";
      if (!data.communication || data.communication.length === 0)
        e.communication = "Required";
    }

    if (step === 6) {
      if (!data.declaration || data.declaration.length !== 3)
        e.declaration = "All consents are mandatory";
      console.log(data.declaration);
      
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }, [step, data]);

  /* -------------------- Navigation -------------------- */
  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  /* -------------------- Submit -------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step !== TOTAL_STEPS) return; // 🔒 guard
    if (!validateStep()) return;

    const payload = buildPayload(data);

    try {
      console.log(payload);

      // const res = await fetch("/api/ip-enquiry", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });

      localStorage.removeItem(STORAGE_KEY);
      alert("Thank you! We’ll get back to you shortly.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  const progressWidth = `${(step / TOTAL_STEPS) * 100}%`;

  /* ==================== UI ==================== */
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">
            IP Enquiry Form
          </h1>

          <p className="text-sm text-gray-600 text-center mb-8">
            Please avoid sharing confidential technical details at this stage.
          </p>

          {/* Progress */}
          <div className="mb-8">
            <div className="overflow-hidden h-2 rounded bg-green-200">
              <div
                className="h-full bg-green-500 transition-all duration-500"
                style={{ width: progressWidth }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-right">
              Step {step} of {TOTAL_STEPS}
            </p>
          </div>

          <form>
            {/* ---------- STEP 1 ---------- */}
            {step === 1 && (
              <>
                <Input
                  label="Full Name"
                  required
                  error={errors.fullName}
                  onChange={(v) => updateField("fullName", v)}
                />

                <Input
                  label="Email Address"
                  required
                  error={errors.email}
                  onChange={(v) => updateField("email", v)}
                />

                <Input
                  label="Contact Number"
                  required
                  error={errors.phone}
                  onChange={(v) => updateField("phone", v)}
                />

                <Input
                  label="Organization / Institution"
                  onChange={(v) => updateField("org", v)}
                />

                <RadioGroup
                  label="Client Category"
                  required
                  error={errors.clientCategory}
                  options={[
                    "Startup",
                    "MSME",
                    "University / Research Institution",
                    "Individual Inventor",
                    "Other",
                  ]}
                  onChange={(v) => updateField("clientCategory", v)}
                />
              </>
            )}

            {/* ---------- STEP 2 ---------- */}
            {step === 2 && (
              <CheckboxGroup
                label="Services Interested In"
                required
                error={errors.services}
                options={[
                  "Patentability Search",
                  "Patent Drafting & Filing",
                  "Trademark Registration",
                  "Design Registration",
                  "Copyright Registration",
                  "IP Strategy / Advisory",
                  "International Filing",
                  "Other",
                ]}
                onChange={(v) => toggleCheckbox("services", v)}
              />
            )}

            {/* ---------- STEP 3 ---------- */}
            {step === 3 && (
              <RadioGroup
                label="Current Stage"
                required
                error={errors.stage}
                options={[
                  "Idea stage",
                  "Prototype developed",
                  "Product launched",
                  "Research completed",
                  "Not applicable",
                ]}
                onChange={(v) => updateField("stage", v)}
              />
            )}

            {/* ---------- STEP 4 ---------- */}
            {step === 4 && (
              <>
                <CheckboxGroup
                  label="Jurisdiction"
                  required
                  error={errors.jurisdiction}
                  options={["India", "International", "Not sure"]}
                  onChange={(v) => toggleCheckbox("jurisdiction", v)}
                />

                <RadioGroup
                  label="Timeline"
                  required
                  error={errors.timeline}
                  options={[
                    "Immediately",
                    "Within 1 month",
                    "Within 3 months",
                    "Just exploring",
                  ]}
                  onChange={(v) => updateField("timeline", v)}
                />
              </>
            )}

            {/* ---------- STEP 5 ---------- */}
            {step === 5 && (
              <>
                <RadioGroup
                  label="Filed IP Earlier?"
                  required
                  error={errors.previousIp}
                  options={["Yes", "No"]}
                  onChange={(v) => updateField("previousIp", v)}
                />

                <CheckboxGroup
                  label="Preferred Communication"
                  required
                  error={errors.communication}
                  options={["Email", "Phone call", "Online meeting"]}
                  onChange={(v) => toggleCheckbox("communication", v)}
                />
              </>
            )}

            {/* ---------- STEP 6 ---------- */}
            {step === 6 && (
              <CheckboxGroup
                label="Declaration & Consent"
                required
                error={errors.declaration}
                options={[
                  "No confidential info shared",
                  "No professional relationship created",
                  "Consent to be contacted",
                ]}
                onChange={(v) => toggleCheckbox("declaration", v)}
              />
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prev}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Previous
                </button>
              )}

              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={next}
                  className="ml-auto px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="cursor-pointer ml-auto px-4 py-2 bg-green-600 text-white rounded-lg"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ==================== Small Reusable Components ==================== */

const Input = ({ label, required, error, onChange }) => (
  <div className="mb-6">
    <label className="block mb-1 text-sm font-medium">
      {label}
      {required && "*"}
    </label>
    <input
      onChange={(e) => onChange(e.target.value)}
      className={`w-full p-2.5 rounded-lg border ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const RadioGroup = ({ label, options, required, error, onChange }) => (
  <div className="mb-6">
    <p className="font-medium mb-2">
      {label}
      {required && "*"}
    </p>
    {options.map((o) => (
      <label key={o} className="block text-sm">
        <input
          type="radio"
          name={label}
          className="mr-2"
          onChange={() => onChange(o)}
        />
        {o}
      </label>
    ))}
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const CheckboxGroup = ({ label, options, required, error, onChange }) => (
  <div className="mb-6">
    <p className="font-medium mb-2">
      {label}
      {required && "*"}
    </p>
    {options.map((o) => (
      <label key={o} className="block text-sm">
        <input type="checkbox" className="mr-2" onChange={() => onChange(o)} />
        {o}
      </label>
    ))}
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);
