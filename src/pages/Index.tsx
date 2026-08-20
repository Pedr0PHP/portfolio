import { useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';
import VideoLightbox from '@/components/VideoLightbox';
import { I18nProvider } from '@/i18n';

const Index = () => {
  const [videoId, setVideoId] = useState<string | null>(null);

  return (
    <I18nProvider>
      <div className="relative min-h-screen bg-background text-foreground font-body">
        <Nav />
        <main>
          <Hero />
          <Work onOpen={setVideoId} />
          <About />
        </main>
        <Contact />
        <VideoLightbox videoId={videoId} onClose={() => setVideoId(null)} />
      </div>
    </I18nProvider>
  );
};

export default Index;
