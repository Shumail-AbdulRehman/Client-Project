import { useState } from "react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { contactDetails } from "../../data/siteContent";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message: "Please fill in your name, email, and project details.",
      });
      return;
    }

    const subject = encodeURIComponent(`Spectrazex inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`,
    );

    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;

    setStatus({
      type: "success",
      message: "Your email app should open with the message filled in.",
    });
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          kicker="Contact"
          title="Start a conversation"
          description="The contact area is kept simple on purpose: a clear trust panel, a clean form, and no unnecessary motion."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal as="aside" className="glass-panel rounded-[28px] p-6 sm:p-8">
            <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-sky-700 uppercase">
              Contact
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">Let’s build safer digital habits.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {contactDetails.intro}
            </p>

            <div className="mt-8 rounded-[24px] border border-sky-100 bg-sky-50/80 p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky-700">
                Quick Contact
              </p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900">
                {contactDetails.quickContactTitle}
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {contactDetails.quickContactText}
              </p>
              <a
                href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Contact us at {contactDetails.phone}
              </a>
            </div>

            <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">LinkedIn</p>
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-base font-semibold text-sky-700 transition hover:text-sky-800"
                >
                  linkedin.com/in/saadjanjua
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Email</p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-2 inline-block text-base font-semibold text-slate-900 transition hover:text-sky-700"
                >
                  {contactDetails.email}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Phone</p>
                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                  className="mt-2 inline-block text-base font-semibold text-slate-900 transition hover:text-sky-700"
                >
                  {contactDetails.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="glass-panel rounded-[28px] p-6 sm:p-8">
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm font-medium uppercase tracking-[0.08em] text-slate-700">
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-700/40"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium uppercase tracking-[0.08em] text-slate-700">
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-700/40"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium uppercase tracking-[0.08em] text-slate-700">
                Project Details
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Tell us what kind of awareness session, workshop, or cyber security support you need"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-700/40"
                />
              </label>

              {status.message ? (
                <p
                  className={`text-sm ${
                    status.type === "error" ? "text-rose-600" : "text-sky-700"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}

              <div className="pt-2">
                <Button type="submit">Send Inquiry</Button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
