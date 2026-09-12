import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { EMAIL } from "@/data/projects";

const TYPES = [
  "Business Website",
  "Landing Page",
  "E-Commerce Website",
  "Web Application",
  "Website Redesign",
  "Custom Web Solution",
  "Not sure yet",
];

const GOALS = [
  "Look more professional",
  "Get more enquiries",
  "Sell products online",
  "Take bookings",
  "Showcase my work",
  "Replace an old website",
];

const TIMELINES = ["As soon as possible", "In the next month", "In 2–3 months", "Just exploring"];

const STEPS = ["Project", "Goals", "Timeline", "Details"];

type Form = {
  type: string;
  goals: string[];
  timeline: string;
  name: string;
  email: string;
  business: string;
  notes: string;
};

const EMPTY: Form = {
  type: "",
  goals: [],
  timeline: "",
  name: "",
  email: "",
  business: "",
  notes: "",
};

/** A calm, multi-step project brief that opens a prefilled email. */
export function ProjectInquiry() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(EMPTY);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));

  const toggleGoal = (g: string) =>
    setForm((f) => ({
      ...f,
      goals: f.goals.includes(g) ? f.goals.filter((x) => x !== g) : [...f.goals, g],
    }));

  const next = () => {
    if (step === 0 && !form.type) return setError("Pick the type of project you have in mind.");
    if (step === 1 && form.goals.length === 0) return setError("Choose at least one goal.");
    if (step === 2 && !form.timeline) return setError("Let me know roughly when you'd like to start.");
    setError("");
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const submit = () => {
    const name = form.name.trim();
    const email = form.email.trim();
    if (!name) return setError("Please add your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setError("Please enter a valid email address.");
    setError("");
    const body = [
      `Project type: ${form.type}`,
      `Goals: ${form.goals.join(", ")}`,
      `Timeline: ${form.timeline}`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${form.business.trim() || "—"}`,
      "",
      "Notes:",
      form.notes.trim() || "—",
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Project brief — ${form.type}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="hairline rounded-2xl bg-surface/40 px-8 py-16 text-center">
        <Check className="mx-auto h-7 w-7 text-primary" />
        <h3 className="font-display mt-6 text-2xl font-semibold tracking-tight">
          Your brief is ready
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your email app should have opened with everything filled in. If nothing opened, send the
          details to {EMAIL} and I&apos;ll reply with the next steps.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(EMPTY);
            setStep(0);
            setSent(false);
          }}
          className="focus-ring mt-8 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Start another brief
        </button>
      </div>
    );
  }

  return (
    <div className="hairline overflow-hidden rounded-2xl bg-surface/40">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border px-6 py-4 md:px-9">
        {STEPS.map((s, i) => (
          <span
            key={s}
            className={cn(
              "flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase transition-colors",
              i === step ? "text-primary" : i < step ? "text-foreground" : "text-muted-foreground/60",
            )}
          >
            <span
              className={cn(
                "grid h-5 w-5 place-items-center rounded-full border text-[9px]",
                i <= step ? "border-primary" : "border-border",
              )}
            >
              {i < step ? <Check className="h-3 w-3" /> : i + 1}
            </span>
            {s}
          </span>
        ))}
      </div>

      <div className="px-6 py-9 md:px-9">
        {step === 0 && (
          <Choice
            question="What kind of project do you need?"
            options={TYPES}
            selected={[form.type]}
            onSelect={(v) => set("type", v)}
          />
        )}

        {step === 1 && (
          <Choice
            question="What should the website help you do?"
            hint="Select everything that applies."
            options={GOALS}
            selected={form.goals}
            onSelect={toggleGoal}
          />
        )}

        {step === 2 && (
          <Choice
            question="When would you like to start?"
            options={TIMELINES}
            selected={[form.timeline]}
            onSelect={(v) => set("timeline", v)}
          />
        )}

        {step === 3 && (
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight">
              How can I reach you?
            </h3>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Input label="Name *" value={form.name} onChange={(v) => set("name", v)} />
              <Input
                label="Email *"
                type="email"
                value={form.email}
                onChange={(v) => set("email", v)}
              />
              <div className="sm:col-span-2">
                <Input
                  label="Business / Company"
                  value={form.business}
                  onChange={(v) => set("business", v)}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="brief-notes"
                  className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase"
                >
                  Anything else I should know?
                </label>
                <textarea
                  id="brief-notes"
                  rows={4}
                  maxLength={2000}
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  className="hairline focus-ring mt-2 w-full rounded-lg bg-background px-4 py-3 text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {error ? (
          <p role="alert" className="mt-6 text-sm text-destructive">
            {error}
          </p>
        ) : null}

        <div className="mt-9 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              setError("");
              setStep((s) => Math.max(0, s - 1));
            }}
            disabled={step === 0}
            className="focus-ring inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-0"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Continue
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send Project Brief
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Choice({
  question,
  hint,
  options,
  selected,
  onSelect,
}: {
  question: string;
  hint?: string;
  options: string[];
  selected: string[];
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold tracking-tight">{question}</h3>
      {hint ? <p className="mt-2 text-sm text-muted-foreground">{hint}</p> : null}
      <div className="mt-7 flex flex-wrap gap-3">
        {options.map((o) => {
          const on = selected.includes(o);
          return (
            <button
              key={o}
              type="button"
              aria-pressed={on}
              onClick={() => onSelect(o)}
              className={cn(
                "focus-ring rounded-full px-5 py-3 text-sm transition-all duration-300",
                on
                  ? "bg-primary text-primary-foreground"
                  : "hairline text-muted-foreground hover:-translate-y-0.5 hover:text-foreground",
              )}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  const id = `brief-${label.replace(/\W+/g, "-").toLowerCase()}`;
  return (
    <div>
      <label htmlFor={id} className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        maxLength={200}
        onChange={(e) => onChange(e.target.value)}
        className="hairline focus-ring mt-2 w-full rounded-lg bg-background px-4 py-3 text-sm"
      />
    </div>
  );
}
