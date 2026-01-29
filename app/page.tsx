import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">Cloudlink</div>
          <a
            href="#waitlist"
            className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white/40"
          >
            Join early access
          </a>
        </div>

        {/* Hero */}
        <section className="mt-14">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Detect AWS cost regressions caused by deploys.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Cloudlink ties cost changes directly to deployments so engineering teams can catch
            expensive changes early and quantify the monthly impact.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-black hover:bg-white/90"
            >
              Join early access
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-semibold hover:border-white/40"
            >
              How it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/60">
            <span className="rounded-full border border-white/15 px-3 py-1">
              Read-only AWS access
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1">
              Per-service tracking
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1">
              Monthly impact estimates
            </span>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-16">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Connect AWS safely",
                desc: "You create a scoped, read-only role. No agents. No credentials shared.",
              },
              {
                title: "We monitor deploys + cost",
                desc: "Cloudlink watches request volume and cost signals and builds a baseline per service.",
              },
              {
                title: "Get actionable alerts",
                desc: "When a deploy increases cost, we alert with percent change and estimated monthly impact.",
              },
            ].map((x) => (
              <div key={x.title} className="rounded-xl border border-white/10 p-6 bg-white/5">
                <div className="text-lg font-semibold">{x.title}</div>
                <p className="mt-2 text-sm text-white/70">{x.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Built for engineering teams on AWS</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Best fit for teams deploying weekly or daily who want to catch cost regressions early.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3 text-sm">
            {["Platform / Infrastructure", "DevOps / SRE", "Engineering Leaders"].map((t) => (
              <div key={t} className="rounded-xl border border-white/10 p-4 bg-white/5">
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* Trust */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Security-first by design</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Read-only permissions",
                desc: "No write access. No infrastructure changes possible.",
              },
              {
                title: "No logs or PII",
                desc: "We do not need application logs or customer data.",
              },
              {
                title: "Auditable access",
                desc: "All access is visible in your AWS CloudTrail.",
              },
              {
                title: "Revocable anytime",
                desc: "Remove the role to immediately disable access.",
              },
            ].map((x) => (
              <div key={x.title} className="rounded-xl border border-white/10 p-6 bg-white/5">
                <div className="font-semibold">{x.title}</div>
                <p className="mt-2 text-sm text-white/70">{x.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Waitlist */}
        <section
          id="waitlist"
          className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <h2 className="text-2xl font-semibold">Join early access</h2>
          <p className="mt-2 text-white/70">
            Get notified when Cloudlink opens onboarding for early customers.
          </p>

          {/* ✅ Use the client-side component (prevents Formspree thanks page) */}
          <WaitlistForm />
        </section>

        {/* Footer */}
        <footer className="mt-16 text-xs text-white/50">
          © {new Date().getFullYear()} Cloudlink. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
