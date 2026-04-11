'use client';

import { useState } from 'react';
import {
  Send,
  Loader2,
  CheckCircle,
  MapPin,
  Clock,
  User,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { generateActionPlan } from '@/lib/api-client';

function parseMarkdownLink(text) {
  if (!text) return null;
  const md = /\[([^\]]+)\]\(([^)]+)\)/.exec(text);
  if (md) return { text: md[1], url: md[2] };
  const url = /(https?:\/\/[^\s]+)/.exec(text);
  if (url) return { text: 'Open link', url: url[1] };
  return null;
}

export default function ActionPlanGenerator() {
  const [goal, setGoal] = useState('');
  const [busy, setBusy] = useState(false);
  const [plan, setPlan] = useState(null);
  const [followUp, setFollowUp] = useState('');
  const [ctx, setCtx] = useState({
    militaryBranch: '',
    yearsOfService: '',
    currentLocation: '',
    targetIndustry: '',
  });

  const run = async (g, c) => {
    if (!g.trim()) return;
    setBusy(true);
    try {
      const data = await generateActionPlan(g, c);
      setPlan(data);
    } catch {
      setPlan({
        why_this_plan:
          'We could not reach the AI service. You can still use the resource directory or try again.',
        categories: [
          {
            name: 'Next steps',
            steps: [
              {
                title: 'Retry or browse resources',
                description:
                  'Submit your goal again in a moment, or open the Resources page for direct links.',
                link: '[Resources](/resources)',
                timeframe: 'Today',
                priority: 'high',
              },
            ],
          },
        ],
        follow_up: 'What state are you in, and is this about housing, career, school, health, or disability?',
      });
    } finally {
      setBusy(false);
    }
  };

  const onGenerate = () => run(goal, ctx);

  const onRefine = () => {
    if (!followUp.trim()) return;
    const merged = `${goal.trim()} — More detail: ${followUp.trim()}`;
    run(merged, ctx);
    setFollowUp('');
  };

  const examples = [
    'Buy a home with a VA loan in Texas',
    'File for PTSD-related disability compensation',
    'Move from military IT to civilian cybersecurity',
    'Use the GI Bill for a computer science degree',
    'Get VA mental health support for anxiety',
  ];

  return (
    <section id="action-plan-section" className="py-20 gradient-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Action plan generator</h2>
          <p className="text-xl text-white/90 mb-2">
            Describe one concrete goal. We return steps, trusted links, and a short &ldquo;why this
            plan&rdquo; summary.
          </p>
        </div>

        <div className="gradient-olive rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-white">Examples (tap to load)</h3>
            <div className="flex flex-wrap gap-2">
              {examples.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => setGoal(ex)}
                  className="text-sm bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <label className="block text-sm font-semibold text-white">
              <span className="flex items-center gap-1 mb-2">
                <User className="h-4 w-4" /> Branch
              </span>
              <select
                value={ctx.militaryBranch}
                onChange={(e) => setCtx((p) => ({ ...p, militaryBranch: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-900"
              >
                <option value="">Select</option>
                <option value="army">Army</option>
                <option value="navy">Navy</option>
                <option value="air-force">Air Force</option>
                <option value="marines">Marines</option>
                <option value="coast-guard">Coast Guard</option>
                <option value="space-force">Space Force</option>
                <option value="national-guard">National Guard</option>
                <option value="reserves">Reserves</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-white">
              <span className="flex items-center gap-1 mb-2">
                <Clock className="h-4 w-4" /> Time in service
              </span>
              <input
                value={ctx.yearsOfService}
                onChange={(e) => setCtx((p) => ({ ...p, yearsOfService: e.target.value }))}
                placeholder="e.g. 8 years"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-900"
              />
            </label>
            <label className="block text-sm font-semibold text-white">
              <span className="flex items-center gap-1 mb-2">
                <MapPin className="h-4 w-4" /> Location
              </span>
              <input
                value={ctx.currentLocation}
                onChange={(e) => setCtx((p) => ({ ...p, currentLocation: e.target.value }))}
                placeholder="City, state (helps regional links)"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-900"
              />
            </label>
            <label className="block text-sm font-semibold text-white">
              <span className="block mb-2">Target industry</span>
              <input
                value={ctx.targetIndustry}
                onChange={(e) => setCtx((p) => ({ ...p, targetIndustry: e.target.value }))}
                placeholder="e.g. technology"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-900"
              />
            </label>
          </div>

          <label htmlFor="goal" className="block text-lg font-semibold mb-2 text-white">
            Your goal
          </label>
          <textarea
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            rows={5}
            className="w-full p-4 border border-gray-300 rounded-lg resize-none text-gray-900"
            placeholder="One clear outcome you want (include timing or location if it matters)."
          />

          <div className="text-center mt-8">
            <button
              type="button"
              onClick={onGenerate}
              disabled={!goal.trim() || busy}
              className="bg-[var(--navy)] hover:bg-[var(--charcoal)] text-white font-semibold py-4 px-8 rounded-lg inline-flex items-center text-lg disabled:opacity-50"
            >
              {busy ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Working…
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" /> Generate plan
                </>
              )}
            </button>
          </div>

          {plan && (
            <div className="border-t border-white/20 pt-8 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-400 shrink-0" />
                <h3 className="text-2xl font-bold text-white">Your plan</h3>
              </div>

              {plan.why_this_plan && (
                <div className="mb-8 p-5 bg-white/10 rounded-lg border border-white/20">
                  <h4 className="text-white font-semibold mb-2">Why this plan</h4>
                  <p className="text-white/90 text-sm leading-relaxed whitespace-pre-wrap">
                    {plan.why_this_plan}
                  </p>
                </div>
              )}

              {plan.categories?.map((cat, ci) => (
                <div key={ci} className="mb-8">
                  <h4 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
                    <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm">
                      {ci + 1}
                    </span>
                    {cat.name}
                  </h4>
                  <div className="space-y-4">
                    {cat.steps?.map((step, si) => {
                      const link = parseMarkdownLink(step.link);
                      return (
                        <div
                          key={si}
                          className="flex gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-white text-[var(--olive-green)] shrink-0">
                            {si + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                              <h5 className="font-bold text-white text-lg">{step.title}</h5>
                              {step.priority && (
                                <span
                                  className={`text-xs px-3 py-1 rounded-full font-semibold ${
                                    step.priority === 'high'
                                      ? 'bg-red-500 text-white'
                                      : step.priority === 'medium'
                                        ? 'bg-yellow-400 text-black'
                                        : 'bg-green-600 text-white'
                                  }`}
                                >
                                  {String(step.priority).toUpperCase()}
                                </span>
                              )}
                            </div>
                            <p className="text-white/90 mb-3 leading-relaxed">{step.description}</p>
                            {step.timeframe && (
                              <p className="text-white/80 text-sm flex items-center gap-2 mb-2">
                                <Clock className="h-4 w-4 shrink-0" />
                                <span className="font-semibold">Timeframe:</span> {step.timeframe}
                              </p>
                            )}
                            {link && !link.url.startsWith('http') ? (
                              <a
                                href={link.url}
                                className="inline-flex items-center gap-2 text-white underline font-semibold"
                              >
                                <ExternalLink className="h-4 w-4" />
                                {link.text}
                              </a>
                            ) : link ? (
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg border border-white/30"
                              >
                                <ExternalLink className="h-4 w-4" />
                                {link.text}
                              </a>
                            ) : null}
                            {step.additionalInfo && (
                              <p className="mt-3 text-sm text-white/80 border-l-4 border-white/30 pl-3 whitespace-pre-wrap">
                                {step.additionalInfo}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {plan.follow_up && (
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                    <MessageCircle className="h-5 w-5" />
                    Follow-up
                  </h4>
                  <p className="text-white/90 mb-4">{plan.follow_up}</p>
                  <div className="flex gap-3">
                    <input
                      value={followUp}
                      onChange={(e) => setFollowUp(e.target.value)}
                      className="flex-1 p-3 border border-gray-300 rounded-lg text-gray-900"
                      placeholder="Add detail…"
                    />
                    <button
                      type="button"
                      onClick={onRefine}
                      disabled={busy || !followUp.trim()}
                      className="bg-[var(--navy)] text-white px-4 rounded-lg disabled:opacity-50"
                    >
                      {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
