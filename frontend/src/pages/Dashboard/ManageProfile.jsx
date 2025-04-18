import { FaChevronDown } from "react-icons/fa";
import CountrySelect from "react-select-country-list";
import { useTimezoneSelect, allTimezones } from "react-timezone-select";
import { Formik } from "formik";
import * as Yup from "yup";

const ManageProfile = () => {
  const countryList = CountrySelect();
  const { options } = useTimezoneSelect({
    allTimezones,
    labelStyle: "original",
  });

  const languageOptions = [
    { label: "English", code: "en" },
    { label: "Spanish", code: "es" },
    { label: "French", code: "fr" },
    { label: "German", code: "de" },
    { label: "Chinese (Simplified)", code: "zh-CN" },
    { label: "Chinese (Traditional)", code: "zh-TW" },
    { label: "Arabic", code: "ar" },
    { label: "Hindi", code: "hi" },
    { label: "Portuguese", code: "pt" },
    { label: "Russian", code: "ru" },
    { label: "Japanese", code: "ja" },
    { label: "Korean", code: "ko" },
    { label: "Italian", code: "it" },
    { label: "Dutch", code: "nl" },
    { label: "Turkish", code: "tr" },
    { label: "Vietnamese", code: "vi" },
    { label: "Polish", code: "pl" },
    { label: "Swedish", code: "sv" },
    { label: "Thai", code: "th" },
    { label: "Hebrew", code: "he" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Full name must be 2-100 characters")
      .max(100, "Full name must be 2-100 characters")
      .required("Full name is required"),
    phoneNumber: Yup.string()
      .matches(
        /^\(\d{3}\) \d{3}-\d{4}$/,
        "Phone number must be in the format (xxx) xxx-xxxx"
      )
      .required("Phone number is required"),
    gender: Yup.string()
      .notOneOf([""], "Please select a valid option")
      .required("Please select a valid option"),
    country: Yup.string()
      .notOneOf([""], "Please select a valid option")
      .required("Please select a valid option"),
    language: Yup.string()
      .notOneOf([""], "Please select a valid option")
      .required("Please select a valid option"),
    timeZone: Yup.string()
      .notOneOf([""], "Please select a valid option")
      .required("Please select a valid option"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    defaultPayment: Yup.string()
      .notOneOf([""], "Please select a valid option")
      .required("Please select a valid option"),
  });

  const mockData = {
    fullName: "John Doe",
    phoneNumber: "(123) 456-7890",
    gender: "female",
    country: "US",
    timeZone: "America/Detroit",
    language: "en",
    email: "john.doe123@gmail.com",
    paymentMethods: [
      {
        name: "Visa",
        lastFourDigits: "1234",
        expirationDate: "12/25",
      },
      {
        name: "MasterCard",
        lastFourDigits: "5678",
        expirationDate: "11/24",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen !p-4">
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-44 w-44 rounded-full object-contain object-center"
          src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
          alt="Profile picture"
        />
        <p className="text-blue-600 hover:underline text-xs cursor-pointer">
          Change profile picture
        </p>
        <h1 className="text-4xl font-bold">Hello, John Doe</h1>
        <h2 className="text-gray-800">Here, you can edit your profile</h2>
      </div>
      <Formik
        initialValues={{
          fullName: mockData.fullName,
          phoneNumber: mockData.phoneNumber,
          gender: mockData.gender,
          country: mockData.country,
          timeZone: mockData.timeZone,
          email: mockData.email,
          defaultPayment: mockData.paymentMethods[0].lastFourDigits,
          language: mockData.language,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          setFieldValue,
          values,
          errors,
          touched,
        }) => {
          const handlePhoneNumberChange = (e) => {
            const { value } = e.target;
            let numbers = value.replace(/\D/g, ""); // Remove non-numeric characters
            if (numbers.length > 10) numbers = numbers.slice(0, 10); // Limit to 10 digits

            let formattedNumber = numbers;
            if (numbers.length >= 4)
              formattedNumber = `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
            if (numbers.length >= 7)
              formattedNumber = `(${numbers.slice(0, 3)}) ${numbers.slice(
                3,
                6
              )}-${numbers.slice(6)}`;

            setFieldValue("phoneNumber", formattedNumber);
          };

          return (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 !space-y-5 !mt-10 !ml-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className={`w-full !px-5 !py-3 rounded-lg shadow-xl border ${
                      touched.fullName && errors.fullName
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                    placeholder="Ex: John Doe"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.fullName && errors.fullName && (
                    <div className="text-red-500 text-sm">
                      {errors.fullName}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className={`w-full !px-5 !py-3 rounded-lg shadow-xl border ${
                      touched.phoneNumber && errors.phoneNumber
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                    placeholder="(xxx) xxx-xxxx"
                    value={values.phoneNumber}
                    onChange={handlePhoneNumberChange}
                    onBlur={handleBlur}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <div className="text-red-500 text-sm">
                      {errors.phoneNumber}
                    </div>
                  )}
                </div>
                <div className="flex flex-col relative w-full gap-2">
                  <label htmlFor="gender">Gender</label>
                  <select
                    name="gender"
                    id="gender"
                    className={`w-full appearance-none !pr-10 !pl-5 !py-3 rounded-lg shadow-xl border ${
                      touched.gender && errors.gender
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" className="text-gray-500">
                      -- Select gender --
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>

                  <div className="pointer-events-none absolute right-3 top-1/2 transform -!translate-y-1/2">
                    <FaChevronDown className="text-gray-500" size={20} />
                  </div>
                  {touched.gender && errors.gender && (
                    <div className="text-red-500 text-sm">{errors.gender}</div>
                  )}
                </div>
                <div className="flex flex-col relative w-full gap-2">
                  <label htmlFor="country">Country</label>
                  <select
                    name="country"
                    id="country"
                    className={`w-full appearance-none !pr-10 !pl-5 !py-3 rounded-lg shadow-xl border ${
                      touched.country && errors.country
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" className="text-gray-500">
                      -- Select country of residence --
                    </option>
                    {countryList.getData().map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute right-3 top-1/2 transform -!translate-y-1/2">
                    <FaChevronDown className="text-gray-500" size={20} />
                  </div>
                  {touched.country && errors.country && (
                    <div className="text-red-500 text-sm">{errors.country}</div>
                  )}
                </div>
                <div className="flex flex-col relative w-full gap-2">
                  <label htmlFor="language">Language</label>
                  <select
                    name="language"
                    id="language"
                    className={`w-full appearance-none !pr-10 !pl-5 !py-3 rounded-lg shadow-xl border ${
                      touched.language && errors.language
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                    value={values.language}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" className="text-gray-500">
                      -- Preferred Language --
                    </option>
                    {languageOptions.map((language, i) => (
                      <option key={i} value={language.code}>
                        {language.label}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute right-3 top-1/2 transform -!translate-y-1/2">
                    <FaChevronDown className="text-gray-500" size={20} />
                  </div>
                  {touched.language && errors.language && (
                    <div className="text-red-500 text-sm">
                      {errors.language}
                    </div>
                  )}
                </div>
                <div className="flex flex-col relative w-full gap-2">
                  <label htmlFor="timeZone">Time Zone</label>
                  <select
                    name="timeZone"
                    id="timeZone"
                    className={`w-full appearance-none !pr-10 !pl-5 !py-3 rounded-lg shadow-xl border ${
                      touched.timeZone && errors.timeZone
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                    value={values.timeZone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" className="text-gray-500">
                      -- Choose Time Zone --
                    </option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute right-3 top-1/2 transform -!translate-y-1/2">
                    <FaChevronDown className="text-gray-500" size={20} />
                  </div>
                  {touched.timeZone && errors.timeZone && (
                    <div className="text-red-500 text-sm">
                      {errors.timeZone}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`w-full !px-5 !py-3 rounded-lg shadow-xl border ${
                      touched.email && errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                    placeholder="example@example.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                  )}
                </div>
                <div className="flex flex-col relative w-full gap-2">
                  <label htmlFor="defaultPayment">Default Payment Method</label>
                  <select
                    name="defaultPayment"
                    id="defaultPayment"
                    className={`w-full appearance-none !pr-10 !pl-5 !py-3 rounded-lg shadow-xl border ${
                      touched.defaultPayment && errors.defaultPayment
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                    value={values.defaultPayment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" className="text-gray-500">
                      -- Choose default payment method --
                    </option>
                    {mockData.paymentMethods.map((card, i) => (
                      <option key={i} value={card.lastFourDigits}>
                        {card.name} ending in {card.lastFourDigits} (exp.{" "}
                        {card.expirationDate})
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute right-3 top-1/2 transform -!translate-y-1/2">
                    <FaChevronDown className="text-gray-500" size={20} />
                  </div>
                  {touched.defaultPayment && errors.defaultPayment && (
                    <div className="text-red-500 text-sm">
                      {errors.defaultPayment}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full items-center justify-center !mt-5">
                <button
                  type="submit"
                  className="text-white !bg-[#0d6efd] !hover:bg-[#0b5ed7] !py-3 !px-20 cursor-pointer"
                >
                  Submit
                </button>
                <span className="font-bold italic text-xs">
                  Changes must be submitted to be saved
                </span>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ManageProfile;
