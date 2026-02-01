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
            Detect AWS cost regressions caused by deploys — automatically.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Cloudlink ties AWS cost changes directly to deployments so engineering teams
            can catch expensive changes early and understand their monthly impact.
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
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/60">
            <span className="rounded-full border border-white/15 px-3 py-1">
              Read-only AWS access
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1">
              No agents or credentials
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1">
              Monthly impact estimates
            </span>
          </div>
        </section>

        {/* Who it's for / Not for */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Who Cloudlink is for</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Built for engineering teams on AWS who deploy frequently and want to catch cost
            regressions early.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/80">Best fit</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Teams deploying weekly or daily on AWS</li>
                <li>• ECS, EKS, Lambda, RDS, ALB-heavy workloads</li>
                <li>• Infra costs that spike after releases</li>
                <li>• Platform, DevOps, SRE, Engineering leaders</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/80">Not a great fit</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Static sites or tiny AWS footprints</li>
                <li>• Teams deploying monthly or less</li>
                <li>• If you only want spend dashboards</li>
                <li>• One-off hobby projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <p className="max-w-2xl text-white/70">
              Connect read-only access, we learn your normal cost patterns, and we alert when a
              deploy causes a regression.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect AWS safely",
                desc: "Create a scoped, read-only IAM role. No agents. No credentials shared.",
              },
              {
                step: "02",
                title: "We track deploys + cost signals",
                desc: "Cloudlink builds a baseline per service and watches for changes after deploys.",
              },
              {
                step: "03",
                title: "Get actionable alerts",
                desc: "See percent change and estimated monthly impact, linked to the deploy window.",
              },
            ].map((x) => (
              <div
                key={x.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold tracking-widest text-white/50">
                    STEP {x.step}
                  </div>

                  {/* simple icon bubble */}
                  <div className="h-9 w-9 rounded-full border border-white/10 bg-black/30" />
                </div>

                <div className="mt-4 text-lg font-semibold">{x.title}</div>
                <p className="mt-2 text-sm text-white/70">{x.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/60">
            <span className="rounded-full border border-white/15 px-3 py-1">
              Service-level baselines
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1">
              Deploy-linked detection
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1">
              Monthly impact estimates
            </span>
          </div>
        </section>

        {/* Sample output */}
        <section className="mt-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">What you get</h2>
            <p className="max-w-2xl text-white/70">
              When a deploy changes cost behavior, Cloudlink surfaces a clear regression summary
              with estimated monthly impact.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {/* Sample alert card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">Deploy detected → Cost regression</div>
                  <div className="mt-1 text-xs text-white/50">
                    Detected 2h after deploy • Confidence: High
                  </div>
                </div>
                <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/70">
                  ALERT
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                  <span className="text-sm text-white/70">Service</span>
                  <span className="text-sm font-semibold">ECS · api-service</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                  <span className="text-sm text-white/70">Deploy</span>
                  <span className="text-sm font-semibold">api@1.14.2</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                  <span className="text-sm text-white/70">Hourly cost change</span>
                  <span className="text-sm font-semibold text-red-200">+18%</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                  <span className="text-sm text-white/70">Est. monthly impact</span>
                  <span className="text-sm font-semibold">+$4,200</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
                <span className="rounded-full border border-white/15 px-3 py-1">Deploy-linked</span>
                <span className="rounded-full border border-white/15 px-3 py-1">Service baseline</span>
                <span className="rounded-full border border-white/15 px-3 py-1">Impact estimate</span>
              </div>
            </div>

            {/* Why it matters / bullets */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Why this is better than cost dashboards</div>
              <p className="mt-2 text-sm text-white/70">
                Cost dashboards tell you what changed. Cloudlink tells you what caused it, so you
                can fix regressions before the bill compounds.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/70">
                <li>• Link regressions to deploy windows</li>
                <li>• See the expected monthly impact</li>
                <li>• Catch expensive changes early</li>
                <li>• Keep access read-only and auditable</li>
              </ul>

              <div className="mt-6">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-black hover:bg-white/90"
                >
                  Join early access
                </a>
              </div>
            </div>
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
              <div
                key={x.title}
                className="rounded-xl border border-white/10 p-6 bg-white/5"
              >
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
