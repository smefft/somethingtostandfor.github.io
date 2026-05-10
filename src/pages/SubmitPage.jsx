import { useState } from "react";

const STEPS = ["guidelines", "submission", "about"];

export default function SubmitPage() {
  const [step, setStep] = useState("guidelines");
  const [activeGuideline, setActiveGuideline] = useState("tone");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: "",
    body: "",
    link: "",
    name: "",
    email: "",
    bio: "",
  });
  const [submitMode, setSubmitMode] = useState("typed"); // "typed" | "link"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="submit-page">
        <div className="submitted-message">
          <h2>Thank you!</h2>
          <p>
            Your submission has been received. We'll be in touch if it's
            selected for publication.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="submit-page">
      <div className="submit-intro">
        <p>
          Thank you for wanting to contribute! Please consider these guidelines
          before submitting your work.
        </p>
        <div className="guideline-jumps">
          <button
            className={`guideline-jump ${activeGuideline === "tone" ? "active" : ""}`}
            onClick={() => {
              setActiveGuideline("tone");
              setStep("guidelines");
            }}
          >
            Topic &amp; Tone
          </button>
          <button
            className={`guideline-jump ${activeGuideline === "formatting" ? "active" : ""}`}
            onClick={() => {
              setActiveGuideline("formatting");
              setStep("guidelines");
            }}
          >
            Formatting Info
          </button>
          <button
            className="guideline-jump"
            onClick={() => setStep("submission")}
          >
            Skip to Submission ↓
          </button>
        </div>
      </div>

      {step === "guidelines" && (
        <div className="guidelines-section">
          {activeGuideline === "tone" && (
            <div className="guideline-block">
              <h2>Topic and Tone</h2>
              <div className="yes-no-grid">
                <div className="yes-col">
                  <h3>YES</h3>
                  <ul>
                    <li>Your own original work (poems, essays, lyrics, etc.)</li>
                    <li>
                      Reflective / positive / angry / political / personal /
                      persuasive / informative / etc.
                    </li>
                    <li>Personal and opinionated commentary on current events</li>
                    <li>
                      Developing opinions (changing your mind mid-sentence is
                      totally allowed)
                    </li>
                  </ul>
                </div>
                <div className="no-col">
                  <h3>NO</h3>
                  <ul>
                    <li>Plagiarism or simply copying a post</li>
                    <li>
                      Misogyny / racism / homophobia / transphobia / eugenics /
                      etc.
                    </li>
                    <li>Bullying / name-calling / mocking</li>
                    <li>Simply recapping major events</li>
                  </ul>
                </div>
              </div>
              <div className="guideline-detail">
                <p>
                  The topic has to be something you are <strong>FOR</strong>.
                  It does not have to be positive or happy. But be careful not
                  to spend too much time talking about what others get wrong,
                  what you hate about a different viewpoint, what makes you mad.
                  Rage is okay, but please rage <em>for</em> things here.
                </p>
                <p>
                  There is not really a topic restriction. This is a website
                  with adults in mind, so you do NOT have to keep it PG.
                </p>
                <p>
                  We accept works completely at our discretion, and we reserve
                  the right to not give a reason for denial. We will not promote
                  racism, homophobia, transphobia, eugenics, or misogyny — those
                  topics are all AGAINST something/someone anyway.
                </p>
              </div>
              <div className="guideline-nav">
                <button
                  className="btn-secondary"
                  onClick={() => setActiveGuideline("formatting")}
                >
                  Next: Formatting →
                </button>
              </div>
            </div>
          )}

          {activeGuideline === "formatting" && (
            <div className="guideline-block">
              <h2>Formatting, etc.</h2>
              <div className="yes-no-grid">
                <div className="yes-col">
                  <h3>YES</h3>
                  <ul>
                    <li>Correct spelling and punctuation for essays</li>
                    <li>Provide sources for evidence</li>
                  </ul>
                </div>
                <div className="no-col">
                  <h3>NO</h3>
                  <ul>
                    <li>
                      No AI generated text. We love individuality and
                      independent thinking.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="guideline-detail">
                <p>
                  Please use correct grammar, spelling, and punctuation.
                  Mistakes happen, but if we're having to fight through
                  spelling and capitalization errors, we won't read it.
                  However brief or long, it is still a piece of writing, not a
                  text message to your friend.
                </p>
                <p>
                  There is technically no length restriction, but we will not
                  read a book. One-liners, poems, paragraphs, essays, and song
                  lyrics are all okay.
                </p>
                <p>
                  If you claim things, please source them. Any statistics or
                  public events should have a valid source attached.
                </p>
              </div>
              <div className="guideline-nav">
                <button
                  className="btn-secondary"
                  onClick={() => setActiveGuideline("tone")}
                >
                  ← Topic &amp; Tone
                </button>
                <button
                  className="btn-primary"
                  onClick={() => setStep("submission")}
                >
                  Continue to Submission →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {step === "submission" && (
        <div className="form-section">
          <h2>Submission:</h2>
          <div className="form-box">
            <p className="form-desc">
              You can submit your work either through the text box or send a link
              (e.g. a Google Drive link).
            </p>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Typed Submission</label>
              <textarea
                id="body"
                name="body"
                rows={6}
                placeholder="Typed Submission"
                value={form.body}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="link">Link Submission</label>
              <input
                id="link"
                name="link"
                type="url"
                placeholder="https://www.mysite.com/link"
                value={form.link}
                onChange={handleChange}
              />
            </div>
            <div className="form-nav">
              <button className="btn-primary" onClick={() => setStep("about")}>
                Next &gt; About you
              </button>
            </div>
          </div>
        </div>
      )}

      {step === "about" && (
        <div className="form-section">
          <h2>About You</h2>
          <div className="form-box">
            <div className="form-group">
              <label htmlFor="name">Name (or pen name)</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="How you'd like to be credited"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="So we can reach you"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Short bio (optional)</label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                placeholder="A sentence or two about yourself..."
                value={form.bio}
                onChange={handleChange}
              />
            </div>
            <div className="form-nav">
              <button
                className="btn-secondary"
                onClick={() => setStep("submission")}
              >
                ← Back
              </button>
              <button className="btn-primary" onClick={handleSubmit}>
                Submit ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
