import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
import LessonPage from './pages/LessonPage';
import ProgressPage from './pages/ProgressPage';
import AboutPage from './pages/AboutPage';
import PracticePage from './pages/PracticePage';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProgressProvider } from './contexts/ProgressContext';
import Testimonials from './components/home/Testimonials';



// Add Raavi and English fonts
const fontStyle = `
  @font-face {
    font-family: 'Raavi';
    src: url('https://fonts.cdnfonts.com/css/raavi') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  .font-raavi {
    font-family: 'Raavi', 'Arial Unicode MS', sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <Router>
          <style>{fontStyle}</style>
          <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                 <Route path="/" element={<HomePage />} />
                <Route path="/lessons" element={<LessonsPage />} />
                <Route path="/lesson/:lessonId" element={<LessonPage />} />
                <Route path="/practice" element={<PracticePage />} />
                <Route path="/progress" element={<ProgressPage />} />
                <Route path="/about" element={<AboutPage />} />
                 <Route path="/testimonials" element={<Testimonials />} />
                
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;