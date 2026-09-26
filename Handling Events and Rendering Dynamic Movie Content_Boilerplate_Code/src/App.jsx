import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import ChatPage from './components/HeroSection';

function AppInner() {
  return (
    <div className="app-root">
      <Navbar />    {/* Lesson 2 — theme toggle + reset */}
      <ChatPage />  {/* Lesson 3 — full onboarding chat */}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}