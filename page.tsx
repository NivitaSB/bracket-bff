export default function BracketBFFPrototype() {
  const seedHelp = "1 seeds are strongest in each region; 16 seeds are weakest. Lower number = stronger team, but upsets happen all the time.";

  const matchup = {
    id: "east-r64-1",
    round: "Round of 64",
    teamA: {
      name: "UConn",
      seed: 1,
      record: "31-3",
      star: "Donovan Clingan",
      stats: ["Elite defense", "Strong rebounding", "Experienced coach"],
      whyWin: "More complete team with tournament experience.",
      funFact: "Won multiple national titles in the modern era.",
      heartFact: "Fans love them because they feel like a big-stage team every March.",
    },
    teamB: {
      name: "Drake",
      seed: 12,
      record: "27-6",
      star: "Tucker DeVries",
      stats: ["Underdog energy", "Can score in bursts", "Dangerous if hot early"],
      whyWin: "Has upset potential if the threes are falling.",
      funFact: "A classic bracket-popper type team.",
      heartFact: "Easy Cinderella pick if you love a story.",
    },
  };

  function SeedBadge({ seed }: { seed: number }) {
    const tone = seed <= 4 ? "bg-green-100 text-green-800" : seed >= 11 ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-800";
    const note = seed === 1 ? "top seed" : seed >= 11 ? "underdog" : "mid seed";
    return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>Seed {seed} · {note}</span>;
  }

  function TeamCard({ team, side }: { team: typeof matchup.teamA; side: "left" | "right" }) {
    return (
      <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-pink-600">{side === "left" ? "Safer side?" : "Spicier side?"}</p>
            <h3 className="mt-1 text-2xl font-bold text-slate-900">{team.name}</h3>
            <p className="text-sm text-slate-600">Record: {team.record}</p>
          </div>
          <SeedBadge seed={team.seed} />
        </div>

        <div className="mt-4 rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Star player</p>
          <p className="mt-1 text-base font-semibold text-slate-900">{team.star}</p>
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Quick read</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            {team.stats.map((item) => (
              <li key={item} className="rounded-xl bg-slate-50 px-3 py-2">{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4 grid gap-3">
          <div className="rounded-2xl bg-blue-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Why they could win</p>
            <p className="mt-1 text-sm text-slate-800">{team.whyWin}</p>
          </div>
          <div className="rounded-2xl bg-rose-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">Heart fact</p>
            <p className="mt-1 text-sm text-slate-800">{team.heartFact}</p>
          </div>
          <div className="rounded-2xl bg-violet-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Fun fact</p>
            <p className="mt-1 text-sm text-slate-800">{team.funFact}</p>
          </div>
        </div>
      </div>
    );
  }

  function PickButton({ label, hint }: { label: string; hint: string }) {
    return (
      <button className="rounded-2xl bg-slate-900 px-4 py-4 text-left text-white shadow-sm transition hover:translate-y-[-1px]">
        <div className="text-sm font-semibold">{label}</div>
        <div className="mt-1 text-xs text-slate-300">{hint}</div>
      </button>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-white/80 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-lg font-black uppercase tracking-[0.24em] text-pink-600 sm:text-xl">Bracket BFF</p>
              <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                A bracketology companion by a March Madness Mom
              </h1>
              <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
                For moms, friends, coworkers, and non-sports people who want to make smarter bracket picks in a fun, fast, non-intimidating way.
              </p>
            </div>
            <div className="rounded-2xl bg-pink-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-pink-100 lg:max-w-sm">
              <span className="font-semibold text-pink-700">What does seed mean?</span>
              <div className="mt-1">{seedHelp}</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
          <TeamCard team={matchup.teamA} side="left" />

          <div className="flex flex-col items-center justify-center gap-3 py-2 lg:pt-16">
            <div className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">{matchup.round}</div>
            <div className="text-sm font-medium text-slate-500">matchup</div>
            <div className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">{matchup.teamA.name} vs {matchup.teamB.name}</div>
          </div>

          <TeamCard team={matchup.teamB} side="right" />
        </div>

        <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Pick by vibe</h2>
              <p className="mt-1 text-sm text-slate-600">Perfect for people who do not want to overthink stats.</p>
            </div>
            <p className="text-sm text-slate-500">Bracket BFF translation: safer pick, heart pick, or chaos pick.</p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <PickButton label="Safe Pick" hint="Usually the stronger seed and steadier résumé." />
            <PickButton label="Heart Pick" hint="Choose the story, mascot, school vibe, or fan favorite." />
            <PickButton label="Chaos Pick" hint="Choose upset energy and let the bracket get weird." />
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {[
              ["Mascot Battle", "Which team name or mascot is more iconic?"],
              ["Underdog Energy", "Who feels like the Cinderella story?"],
              ["Coach Story", "Who has the more memorable coach or team story?"],
              ["Campus Vibes", "Which school would you rather root for based on vibe alone?"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{title}</p>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[28px] bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">How the real version will work</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {[
              ["1. Tournament feed", "SportsDataIO loads the real March bracket and seeds."],
              ["2. Team cards", "Stats and player leaders are generated for each team."],
              ["3. Story layer", "Wikipedia or official team pages add fun facts and heart facts."],
              ["4. Shareable link", "Publish on Vercel so friends can use it on their phones."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <p className="font-semibold">{title}</p>
                <p className="mt-1 text-sm text-slate-200">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
