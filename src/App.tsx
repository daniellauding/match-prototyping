import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/24/outline';
import TenantApplyHome from './prototypes/tenants/apply-home/TenantApplyHome';
import TenantProfilePage from './prototypes/tenants/profile/TenantProfilePage';
import BetIncreaseQuality from './prototypes/tenants/bet-increase-quality/BetIncreaseQuality';
import CreateTenantListingFlow from './prototypes/tenants/create-tenant-listing/CreateTenantListingFlow';
import FindTenant from './prototypes/landlords/find-tenant/FindTenant';
import CreateListingFlow from './prototypes/landlords/create-listing/CreateListingFlow';
import Dashboard from './prototypes/landlords/dashboard/Dashboard';
import EditRent from './prototypes/landlords/edit-rent/EditRent';
import EditListingOverview from './prototypes/landlords/edit-listing/EditListingOverview';
import LandlordProfilePage from './prototypes/landlords/profile/LandlordProfilePage';
import WelcomeToPremiumEmail from './prototypes/mail-templates/WelcomeToPremiumEmail';
import LoginFlow from './prototypes/auth/login/LoginFlow';
import RegisterFlow from './prototypes/auth/register/RegisterFlow';
import HomesPage from './prototypes/homes/HomesPage';
import MessagesPage from './prototypes/messages/MessagesPage';
import DevExperimentsButton from './components/DevExperimentsButton';
import Header from './components/Header';
import DynamicHeader from './components/DynamicHeader';
import Footer from './components/Footer';
import VariantCard from './components/ui/VariantCard';
import VariantSelector from './components/ui/VariantSelector';
import VariantWrapper from './components/VariantWrapper';
import { LanguageProvider } from './utils/translations/LanguageContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { variantRegistry, getAllPrototypesWithVariants, getVariant, parseVariantFromUrl } from './utils/variants';

// Import MessagesPage for the prototypes array
import MessagesPageImport from './prototypes/messages/MessagesPage';

const prototypes = [
  {
    id: 'tenant-profile',
    category: 'tenants',
    name: 'Tenant Profile',
    description: 'Complete tenant profile with edit modals for all sections',
    thumbnail: '/thumbnails/tenant-profile.png',
    path: '/tenants/profile',
    component: TenantProfilePage,
    tags: ['profile', 'edit', 'modals'],
  },
  {
    id: 'tenant-profile-public',
    category: 'tenants',
    name: 'Tenant Profile (Public)',
    description: 'Public view of tenant profile for landlords without edit functionality',
    thumbnail: '/thumbnails/tenant-profile-public.png',
    path: '/tenants/profile?view=public',
    component: TenantProfilePage,
    tags: ['profile', 'public', 'view'],
  },
  {
    id: 'tenant-apply-home',
    category: 'tenants',
    name: 'Apply Home',
    description: 'Tenant application flow for a property',
    thumbnail: '/thumbnails/tenant-apply-home.png',
    path: '/tenants/apply-home',
    component: TenantApplyHome,
  },
  {
    id: 'bet-increase-quality',
    category: 'tenants',
    name: 'BET: Increase Application Quality',
    description: 'Experiment to increase the quality of rental applications through real-time feedback and gamification',
    thumbnail: '/thumbnails/bet-increase-quality.png',
    path: '/tenants/bet-increase-quality',
    component: BetIncreaseQuality,
    tags: ['experiment', 'gamification'],
  },
  {
    id: 'create-tenant-listing',
    category: 'tenants',
    name: 'Create Tenant Listing',
    description: 'Step-by-step flow for tenants to create profile listings to attract landlords with location search and benefits',
    thumbnail: '/thumbnails/create-tenant-listing.png',
    path: '/tenants/create-tenant-listing',
    component: CreateTenantListingFlow,
    tags: ['stepper', 'forms', 'profile'],
  },
  {
    id: 'find-tenant',
    category: 'landlords',
    name: 'Find Tenant',
    description: 'Browse verified tenant profiles and connect with quality renters. Multi-language support included.',
    thumbnail: '/thumbnails/find-tenant.png',
    path: '/landlords/find-tenant',
    component: FindTenant,
    tags: ['multilingual', 'matching'],
  },
  {
    id: 'create-listing',
    category: 'landlords',
    name: 'Create Listing',
    description: 'Step-by-step flow for landlords to create property listings with address details.',
    thumbnail: '/thumbnails/create-listing.png',
    path: '/landlords/create-listing',
    component: CreateListingFlow,
    tags: ['stepper', 'forms'],
  },
  {
    id: 'media-management',
    category: 'landlords',
    name: 'Media Management for Landlords',
    description: 'Advanced image upload, management, and reordering features for property listings.',
    thumbnail: '/thumbnails/media-management.png',
    path: '/landlords/create-listing/step/14',
    component: CreateListingFlow,
    tags: ['media', 'upload', 'management'],
  },
  {
    id: 'dashboard',
    category: 'landlords',
    name: 'Landlord Dashboard',
    description: 'Dashboard overview for landlords to manage their property listings and rental information.',
    thumbnail: '/thumbnails/dashboard.png',
    path: '/landlords/dashboard',
    component: Dashboard,
    tags: ['dashboard', 'management'],
  },
  {
    id: 'edit-listing',
    category: 'landlords',
    name: 'Edit Listing Overview',
    description: 'Overview page for editing property listings with step navigation and quick access to all sections.',
    thumbnail: '/thumbnails/edit-listing.png',
    path: '/landlords/edit-listing',
    component: EditListingOverview,
    tags: ['editing', 'overview'],
  },
  {
    id: 'landlord-profile',
    category: 'landlords',
    name: 'Landlord Profile',
    description: 'Landlord profile page showing personal information, occupation, and published listings.',
    thumbnail: '/thumbnails/landlord-profile.png',
    path: '/landlords/profile',
    component: LandlordProfilePage,
    tags: ['profile', 'listings', 'landlord'],
  },
  {
    id: 'mail-template-welcome-premium',
    category: 'mail-templates',
    name: 'Mail Template: Welcome to Premium',
    description: 'Email template preview for Premium welcome messages with theme support for both Qasa and Blocket',
    thumbnail: '/thumbnails/mail-template-premium.png',
    path: '/mail-templates/welcome-to-premium',
    component: WelcomeToPremiumEmail,
    tags: ['email', 'template', 'premium', 'theme'],
  },
  {
    id: 'login',
    category: 'auth',
    name: 'Login Flow',
    description: 'User authentication and login flow with forgot password functionality.',
    thumbnail: '/thumbnails/login.png',
    path: '/auth/login',
    component: LoginFlow,
    tags: ['authentication', 'login'],
  },
  {
    id: 'register',
    category: 'auth',
    name: 'Register Flow',
    description: 'User registration flow with email verification and profile completion.',
    thumbnail: '/thumbnails/register.png',
    path: '/auth/register',
    component: RegisterFlow,
    tags: ['authentication', 'signup'],
  },
  {
    id: 'messages',
    category: 'communication',
    name: 'Messages Inbox',
    description: 'Inbox interface for managing property conversations with landlords and tenants.',
    thumbnail: '/thumbnails/messages.png',
    path: '/messages',
    component: MessagesPageImport,
    tags: ['messaging', 'conversations'],
  },
];

function PrototypeGrid() {
  // Get prototypes from variant registry and legacy prototypes
  const variantPrototypes = getAllPrototypesWithVariants().map(prototype => {
    const legacyPrototype = prototypes.find(p => p.id === prototype.id);
    return {
      ...prototype,
      path: legacyPrototype?.path || `/${prototype.id}`,
      category: legacyPrototype?.category || 'experiments',
      thumbnail: legacyPrototype?.thumbnail,
      tags: legacyPrototype?.tags || []
    };
  });

  // Debug logging for find-tenant
  const findTenantPrototype = variantPrototypes.find(p => p.id === 'find-tenant');
  if (findTenantPrototype) {
    console.log('🔍 Find Tenant Debug Data:');
    console.log('- hasMultipleVariants:', findTenantPrototype.hasMultipleVariants);
    console.log('- variants count:', findTenantPrototype.variants?.length);
    console.log('- variants:', findTenantPrototype.variants?.map(v => ({ id: v.id, name: v.name })));
  }

  // Legacy prototypes that don't have variants yet
  const legacyPrototypes = prototypes.filter(p => 
    !variantRegistry[p.id]
  );

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Qasa Experiments</h1>
          <p className="text-lg text-gray-600">Explore and test new features for the Qasa platform</p>
          <div className="mt-4 text-sm text-gray-500">
            Create and compare different versions of prototypes. Use variants to test different approaches.
          </div>
        </div>
        
        <div className="space-y-12">
          {/* Prototypes with variants */}
          {variantPrototypes.length > 0 && (
            <div className="pb-32">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Prototypes with Variants 
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({variantPrototypes.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
                {variantPrototypes.map((prototype) => (
                  <VariantCard key={prototype.id} prototype={prototype} />
                ))}
              </div>
            </div>
          )}

          {/* Legacy prototypes */}
          {legacyPrototypes.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Other Prototypes
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({legacyPrototypes.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {legacyPrototypes.map((prototype) => (
                  <Link
                    key={prototype.id}
                    to={prototype.path}
                    className="block group transform hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                        {prototype.thumbnail ? (
                          <img
                            src={prototype.thumbnail}
                            alt={prototype.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
                            <BeakerIcon className="w-16 h-16 text-indigo-300" />
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                            {prototype.category}
                          </div>
                          {prototype.tags?.map(tag => (
                            <span 
                              key={tag} 
                              className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                          {prototype.name}
                        </h2>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {prototype.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Redirect component that preserves query params
const RegisterRedirect = () => {
  const location = useLocation();
  return <Navigate to={`/auth/register/step/1${location.search}`} replace />;
};

function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
        <AuthProvider>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Navigate to="/experiments" replace />} />
          
          <Route path="/experiments" element={
            <div className="min-h-screen flex flex-col">
              <DynamicHeader isFluid={true} />
              <main className="flex-grow">
                <PrototypeGrid />
              </main>
              <Footer isFluid={true} />
              <DevExperimentsButton />
            </div>
          } />
          
          <Route path="/landlords/find-tenant" element={
            <div className="min-h-screen flex flex-col">
              <DynamicHeader isFluid={true} />
              <main className="flex-grow">
                <VariantWrapper 
                  prototypeId="find-tenant" 
                  defaultComponent={() => <FindTenant isFluid={true} />}
                />
              </main>
              <Footer isFluid={true} />
              <DevExperimentsButton />
            </div>
          } />
          
          <Route path="/landlords/create-listing" element={
            <VariantWrapper 
              prototypeId="create-listing" 
              defaultComponent={CreateListingFlow}
            />
          } />
          <Route path="/landlords/create-listing/step/:step" element={
            <VariantWrapper 
              prototypeId="create-listing" 
              defaultComponent={CreateListingFlow}
            />
          } />
          <Route path="/landlords/dashboard" element={<Dashboard />} />
          <Route path="/landlords/edit-rent" element={<EditRent />} />
          <Route path="/landlords/edit-listing" element={<EditListingOverview />} />
          <Route path="/landlords/profile" element={<LandlordProfilePage />} />
          
          <Route path="/auth/login" element={<LoginFlow />} />
          <Route path="/auth/login/step/:step" element={<LoginFlow />} />
          
          {/* Register - redirect base URL to step 1 with preserved query params */}
          <Route path="/auth/register" element={<RegisterRedirect />} />
          <Route path="/auth/register/step/:step" element={
            <VariantWrapper 
              prototypeId="register" 
              defaultComponent={RegisterFlow}
            />
          } />
          
          <Route path="/tenants/apply-home" element={
            <div className="min-h-screen flex flex-col">
              <DynamicHeader isFluid={true} />
              <main className="flex-grow">
                <TenantApplyHome isFluid={true} />
              </main>
              <Footer isFluid={true} />
              <DevExperimentsButton />
            </div>
          } />
          
          <Route path="/tenants/profile" element={<TenantProfilePage />} />
          <Route path="/tenants/bet-increase-quality" element={<BetIncreaseQuality />} />
          <Route path="/tenants/create-tenant-listing" element={
            <VariantWrapper 
              prototypeId="create-tenant-listing" 
              defaultComponent={CreateTenantListingFlow}
            />
          } />
          <Route path="/tenants/create-tenant-listing/step/:step" element={
            <VariantWrapper 
              prototypeId="create-tenant-listing" 
              defaultComponent={CreateTenantListingFlow}
            />
          } />
          
          <Route path="/homes" element={
            <VariantWrapper 
              prototypeId="homes" 
              defaultComponent={HomesPage}
            />
          } />
          
          <Route path="/messages" element={<MessagesPage />} />
          
          <Route path="/mail-templates/welcome-to-premium" element={<WelcomeToPremiumEmail />} />
          
          {prototypes.filter(p => p.id !== 'find-tenant' && p.id !== 'create-listing' && p.id !== 'media-management' && p.id !== 'dashboard' && p.id !== 'edit-listing' && p.id !== 'tenant-apply-home' && p.id !== 'login' && p.id !== 'register').map((prototype) => (
            <Route
              key={prototype.id}
              path={prototype.path}
              element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-grow">
                    <prototype.component />
                  </main>
                  <Footer />
                  <DevExperimentsButton />
                </div>
              }
            />
          ))}
        </Routes>
      </Router>
      </AuthProvider>
    </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
