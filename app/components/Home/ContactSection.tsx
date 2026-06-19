"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Music Production",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hubungkan ke endpoint/API pengiriman pesan
    console.log("Form submitted:", form);
  };

  return (
    <section className="py-[120px] max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
        {/* Form */}
        <div className="md:col-span-6">
          <h2 className="font-serif text-[32px] font-semibold text-[#191c1d] mb-8">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-[13px] font-semibold text-[#191c1d] mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#757682]/30 rounded font-sans text-[14px] text-[#191c1d] placeholder:text-[#757682] focus:outline-none focus:ring-2 focus:ring-[#00236f]/40"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-[13px] font-semibold text-[#191c1d] mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#757682]/30 rounded font-sans text-[14px] text-[#191c1d] placeholder:text-[#757682] focus:outline-none focus:ring-2 focus:ring-[#00236f]/40"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="service"
                className="block font-sans text-[13px] font-semibold text-[#191c1d] mb-2"
              >
                Interested Service
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#757682]/30 rounded font-sans text-[14px] text-[#191c1d] focus:outline-none focus:ring-2 focus:ring-[#00236f]/40"
              >
                <option>Music Production</option>
                <option>Audio Recording</option>
                <option>Arrangement</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-sans text-[13px] font-semibold text-[#191c1d] mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can we assist you?"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#757682]/30 rounded font-sans text-[14px] text-[#191c1d] placeholder:text-[#757682] focus:outline-none focus:ring-2 focus:ring-[#00236f]/40 resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-[#00236f] text-white font-sans text-[14px] font-semibold tracking-wide rounded hover:bg-[#00236f]/90 transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="md:col-span-5 md:col-start-8 mt-12 md:mt-0 space-y-8">
          <div className="flex gap-4">
            <span
              className="material-symbols-outlined text-[#00236f] flex-shrink-0"
              style={{ fontSize: "24px" }}
            >
              location_on
            </span>
            <div>
              <h4 className="font-sans text-[14px] font-semibold text-[#191c1d] mb-1">
                Our Studio
              </h4>
              <p className="font-sans text-[14px] font-normal text-[#444651] leading-relaxed">
                Jl. Heritage No. 88, Samosir Island
                <br />
                North Sumatra, Indonesia
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span
              className="material-symbols-outlined text-[#00236f] flex-shrink-0"
              style={{ fontSize: "24px" }}
            >
              call
            </span>
            <div>
              <h4 className="font-sans text-[14px] font-semibold text-[#191c1d] mb-1">
                Phone
              </h4>
              <p className="font-sans text-[14px] font-normal text-[#444651] leading-relaxed">
                +62 61 455 7890
                <br />
                +62 811 6789 000
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span
              className="material-symbols-outlined text-[#00236f] flex-shrink-0"
              style={{ fontSize: "24px" }}
            >
              mail
            </span>
            <div>
              <h4 className="font-sans text-[14px] font-semibold text-[#191c1d] mb-1">
                Email
              </h4>
              <p className="font-sans text-[14px] font-normal text-[#444651] leading-relaxed">
                contact@stgenterprise.com
                <br />
                production@stgenterprise.com
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[14px] font-semibold text-[#191c1d] mb-3">
              Social Connection
            </h4>
            <div className="flex gap-3">
              {["share", "podcasts", "music_note", "photo_camera"].map(
                (icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-[#e1e3e4] rounded-full text-[#444651] hover:bg-[#00236f] hover:text-white transition-colors"
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "18px" }}
                    >
                      {icon}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
