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

// Legal Pages
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsOfService } from './pages/legal/TermsOfService';
import { RefundPolicy } from './pages/legal/RefundPolicy';
import { License } from './pages/legal/License';

// Resource Pages
import { Documentation } from './pages/resources/Documentation';
import { DocViewer } from './pages/resources/DocViewer';
import { Changelog } from './pages/resources/Changelog';
import { Community } from './pages/resources/Community';

// Payment Pages
import { PaymentSuccess } from './pages/payment/PaymentSuccess';

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
              
              {/* Legal Routes */}
              <Route path="/legal/privacy" element={<PrivacyPolicy />} />
              <Route path="/legal/terms" element={<TermsOfService />} />
              <Route path="/legal/refund" element={<RefundPolicy />} />
              <Route path="/legal/license" element={<License />} />

              {/* Resource Routes */}
              <Route path="/resources/docs" element={<Documentation />} />
              <Route path="/resources/docs/:docId" element={<DocViewer />} />
              <Route path="/resources/changelog" element={<Changelog />} />
              <Route path="/resources/community" element={<Community />} />

              {/* Payment Routes */}
              <Route path="/payment-success" element={<PaymentSuccess />} />
              
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
