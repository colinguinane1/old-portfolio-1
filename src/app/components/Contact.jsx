import React, { useState } from "react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true when form is being submitted
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "1e2e32a1-7b64-4030-a532-7d2515ebe939",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setIsSubmitted(true);
    }
    setIsSubmitting(false); // Reset submitting state after form submission
  }

  return (
    <main className="flex flex-col items-center mx-5">
      <div className="w-full max-w-[64rem] mt-10 ">
        <div className="dark:bg-[#31363F] bg-white dark:border-[#31363F] border-gray shadow-lg p-3 rounded-md">
          <div className="px-5 py-3">
            <h1 className="font-extrabold text-3xl text-blue-500">Contact</h1>
            <form onSubmit={handleSubmit} className="">
              <div className="">
                <input
                  type="text"
                  name="name"
                  className="border dark:bg-[#31363F] dark:border-[#272b32] shadow-lg rounded-lg px-2 py-2 my-4 w-full dark:placeholder:text-white"
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <input
                  className="border dark:bg-[#31363F] dark:border-[#272b32] shadow-lg rounded-lg px-2 py-2 my-4 w-full dark:placeholder:text-white dark:text-white"
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <textarea
                  className="border dark:bg-[#31363F] dark:border-[#272b32] shadow-lg rounded-lg px-2 py-2 my-4 w-full dark:placeholder:text-white"
                  name="message"
                  required
                  rows="3"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div className="flex items-center">
                <button
                  className="button_blue_gradient group"
                  type="submit"
                  disabled={isSubmitting} // Disable button while submitting
                >
                  Submit Form
                </button>
                {isSubmitting && !isSubmitted && ( // Conditionally render loading SVG if submitting and not yet submitted
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-spin h-5 w-5 text-blue-500 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#2c3e50"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12h1m1.28-5.903l.719.718m3.841.765l.836-.836M12 3v1m5.903 1.28l-.718.719m-.765 3.841l.836.836M21 12h-1m-1.28 5.903l-.719-.718m-3.841-.765l-.836.836M12 21v-1m-5.903-1.28l.718-.719m.765-3.841l-.836-.836"
                    ></path>
                  </svg>
                )}
                {isSubmitted && ( // Conditionally render check SVG if form is successfully submitted
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check stroke-green-500 -mt-[1px] ml-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
