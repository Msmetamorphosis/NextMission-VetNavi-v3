'use client';

import { useEffect, createElement } from 'react';

const SCRIPT = 'https://unpkg.com/@elevenlabs/convai-widget-embed';

export default function ElevenLabsWidget() {
  const agentId =
    process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ||
    'agent_01jysdpp5wehx800c3a7jtfwz3';

  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT}"]`)) return;
    const s = document.createElement('script');
    s.src = SCRIPT;
    s.async = true;
    s.type = 'text/javascript';
    document.head.appendChild(s);
  }, []);

  return (
    <div className="elevenlabs-widget-container">
      {createElement('elevenlabs-convai', { 'agent-id': agentId })}
    </div>
  );
}
