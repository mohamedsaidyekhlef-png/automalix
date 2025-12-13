import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Vault } from './pages/Vault';
import { Marketplace } from './pages/Marketplace';
import { WhiteLabel } from './pages/WhiteLabel';
import { Academy } from './pages/Academy';
import { AuditReadyPage } from './pages/categories/AuditReadyPage';
import { ApiCheckerPage } from './pages/resources/ApiCheckerPage';
import { WorkflowGenerator } from './pages/WorkflowGenerator';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { AuthProvider } from './context/AuthContext';
import { NewsletterPopup } from './components/marketing/NewsletterPopup';
import { SupportBot } from './components/support/SupportBot';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-tech-darker font-sans selection:bg-tech-primary/30 selection:text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Marketplace />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/vault" element={<Vault />} />
              <Route path="/white-label" element={<WhiteLabel />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/audit-ready" element={<AuditReadyPage />} />
              <Route path="/resources/api-checker" element={<ApiCheckerPage />} />
              <Route path="/generator" element={<WorkflowGenerator />} />
              
              {/* Blog Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Global Overlays */}
          <NewsletterPopup />
          <SupportBot />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
