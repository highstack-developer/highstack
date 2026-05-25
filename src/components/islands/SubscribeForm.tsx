import { useState } from "react";

interface Props {
  formspreeId?: string;
}

export default function SubscribeForm({ formspreeId }: Props) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError(null);

    if (!formspreeId) {
      // No formspree wired yet — local-only "success" so the UI is testable.
      setState("submitted");
      return;
    }

    setState("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setState("submitted");
      } else {
        setState("error");
        setError("Something went wrong. Try again in a moment.");
      }
    } catch {
      setState("error");
      setError("Network error. Try again in a moment.");
    }
  };

  if (state === "submitted") {
    return (
      <div className="subscribe-form__success">
        <span className="t-label" style={{ color: "var(--hs-positive)" }}>
          Subscribed
        </span>
        <p className="t-body" style={{ marginTop: "var(--s-3)" }}>
          Check your inbox to confirm. The next note arrives the first week of the new quarter.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="subscribe-form" noValidate>
      <label className="t-label" htmlFor="subscribe-email" style={{ color: "var(--fg-secondary)" }}>
        Email
      </label>
      <input
        id="subscribe-email"
        type="email"
        className="input"
        placeholder="you@firm.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? "subscribe-error" : undefined}
        required
      />
      {error && (
        <span
          id="subscribe-error"
          className="t-caption"
          role="alert"
          style={{ color: "var(--hs-negative)" }}
        >
          {error}
        </span>
      )}
      <div className="subscribe-form__row">
        <button type="submit" className="btn btn--primary" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending…" : "Subscribe"}
        </button>
        <span className="t-caption" style={{ color: "var(--fg-tertiary)" }}>
          Four notes a year. Unsubscribe at any time.
        </span>
      </div>
    </form>
  );
}
