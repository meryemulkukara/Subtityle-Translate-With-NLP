import React, { useState } from 'react';
import { VideoPlayer } from './components/video/VideoPlayer';
import { Tooltip } from './components/ui/Tooltip';
import { Modal } from './components/ui/Modal';
import { checkHealth, translateSubtitle } from './utils/api';

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [apiResponse, setApiResponse] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleHealthCheck = async () => {
    setLoading(true);
    setApiResponse('');
    try {
      const result = await checkHealth();
      setApiResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setApiResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleTranslate = async () => {
    setLoading(true);
    setApiResponse('');
    try {
      const result = await translateSubtitle();
      setApiResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setApiResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-full bg-indigo-500 text-white w-8 h-8 text-sm font-bold">
              ST
            </span>
            <div>
              <h1 className="text-lg font-semibold text-slate-50">
                Subtitle Translate
              </h1>
              <p className="text-xs text-slate-400">
                NLP powered subtitle translation tool
              </p>
            </div>
          </div>

          <Tooltip label="Short information about the project">
            <button
              onClick={() => setOpenModal(true)}
              className="px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-xs font-medium text-white transition-colors"
            >
              Info
            </button>
          </Tooltip>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-[2fr,1.2fr]">
          <section className="space-y-4">
            <h2 className="text-base font-semibold text-slate-50">
              Video Preview
            </h2>
            <VideoPlayer src="/sample.mp4" />
            <p className="text-xs text-slate-400">
              Your video file will be played here. The subtitle and translation
              interface will be designed around this section.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-semibold text-slate-50">
              Subtitle Translation
            </h2>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-3 text-sm">
              <p className="text-slate-300">
                We will connect to the FastAPI backend&apos;s <code>/api/translate</code>{' '}
                endpoint to translate subtitle files here.
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-1">
                <li>Upload subtitle file</li>
                <li>Select target language</li>
                <li>Preview and download translated subtitles</li>
              </ul>
              
              {/* API Test Buttons */}
              <div className="pt-3 border-t border-slate-700 space-y-2">
                <p className="text-xs text-slate-400 font-medium">API Test:</p>
                <div className="flex gap-2">
                  <button
                    onClick={handleHealthCheck}
                    disabled={loading}
                    className="px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-700 disabled:opacity-50 text-xs font-medium text-white transition-colors"
                  >
                    Test /health
                  </button>
                  <button
                    onClick={handleTranslate}
                    disabled={loading}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-xs font-medium text-white transition-colors"
                  >
                    Test /translate
                  </button>
                </div>
                {apiResponse && (
                  <pre className="mt-2 p-2 rounded bg-slate-800 text-xs text-slate-200 overflow-auto max-h-32">
                    {apiResponse}
                  </pre>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="About the Project"
      >
        <p>
          This project is a boilerplate prepared to build an NLP-based subtitle
          translation tool using a FastAPI backend and a React + TailwindCSS
          frontend.
        </p>
      </Modal>
    </div>
  );
};

export default App;

