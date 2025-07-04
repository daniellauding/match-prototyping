import React from 'react';
import Card from '../../components/ui/Card';

// Cat icon for create profile card
const CatIcon = () => (
  <svg width="64" height="48" viewBox="0 0 64 48" fill="none" className="mx-auto">
    <path d="M20 24C20 16 24 12 32 12C40 12 44 16 44 24C44 32 40 36 32 36C24 36 20 32 20 24Z" fill="#322721"/>
    <path d="M16 8L20 16L12 16L16 8Z" fill="#322721"/>
    <path d="M48 8L52 16L44 16L48 8Z" fill="#322721"/>
    <circle cx="28" cy="22" r="2" fill="#f19ec1"/>
    <circle cx="36" cy="22" r="2" fill="#f19ec1"/>
    <path d="M32 26L30 28L34 28L32 26Z" fill="#f19ec1"/>
  </svg>
);

export default {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

// Dummy data
const dummyTenant = {
  name: 'Emilie',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b05a?w=150&h=150&fit=crop&crop=face',
  description: 'Gift par som söker lägenhet i Jonsered eller Partille.',
  people: '2',
  rooms: '2 rooms, 70 m²',
  maxRent: 'SEK 15,000',
  furnished: 'Unfurnished',
  moveDate: '2025-09-01 → Until further notice',
};

const dummyProperty = {
  images: [
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
  ],
  location: 'Södergatan, Jönköping',
  type: 'Apartment',
  details: '1 room / 45 m²',
  price: 'SEK 6,194',
  dateRange: '2025-08-01 → Until further notice',
};

const dummyLandlord = {
  name: 'Ulf Fredrik',
  initials: 'UF',
  role: 'Landlord',
};

const dummyContactProperty = {
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=100&h=100&fit=crop',
  location: 'Gambrinusgatan, Stockholm',
  details: 'Apartment / 1.5 rooms / 23 m²',
  price: 'SEK 12,000',
};

export const Default = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Default Card</h3>
        <p className="text-gray-600">This is a basic card with default styling.</p>
      </div>
    ),
  },
};

export const TenantCards = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      <Card.TenantCard
        user={dummyTenant}
        verified
        onCardClick={() => alert('Tenant card clicked!')}
      />
      
      <Card.TenantCard
        user={{
          ...dummyTenant,
          name: 'Anna',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
          description: 'Student couple looking for a cozy apartment in Stockholm',
          people: '2',
          rooms: '1 room, 20 m²',
          maxRent: 'SEK 18,000',
          furnished: 'Furnished',
          moveDate: '2025-08-01 → Until further notice',
        }}
        matchPercentage={43}
        onCardClick={() => alert('Tenant card clicked!')}
      />

      <Card.TenantCard
        user={{
          ...dummyTenant,
          name: 'Marcus',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          description: 'Young professional seeking modern apartment',
          people: '1',
          rooms: '2 rooms, 55 m²',
          maxRent: 'SEK 22,000',
          furnished: 'Partially furnished',
          moveDate: '2025-07-15 → Until further notice',
        }}
        verified
        matchPercentage={78}
        onCardClick={() => alert('Tenant card clicked!')}
      />
    </div>
  ),
};

export const CreateProfileCards = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <Card.CreateProfileCard
        title="Want landlords to find you?"
        description="Publish your profile here and let your future home come to you."
        buttonText="Create profile"
        icon={<CatIcon />}
        onButtonClick={() => alert('Create profile clicked!')}
      />
      
      <Card.CreateProfileCard
        title="List your property"
        description="Connect with verified tenants and find the perfect match for your rental."
        buttonText="List property"
        onButtonClick={() => alert('List property clicked!')}
      />
    </div>
  ),
};

export const CreateTenantProfileCard = {
  render: () => (
    <div className="max-w-md">
      <Card.CreateTenantProfileCard
        title="Want landlords to find you?"
        description="Publish your profile here and let your future home come to you."
        buttonText="Create profile"
        onButtonClick={() => alert('Create tenant profile clicked!')}
      />
    </div>
  ),
};

export const PropertyCards = {
  render: () => {
    const [likedStates, setLikedStates] = React.useState({});
    
    const toggleLike = (id) => {
      setLikedStates(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const properties = [
      {
        ...dummyProperty,
        id: 1,
      },
      {
        id: 2,
        images: [
          'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
        ],
        location: 'Östermalm, Stockholm',
        type: 'Apartment',
        details: '2 rooms / 65 m²',
        price: 'SEK 18,500',
        dateRange: '2025-07-15 → Until further notice',
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
        location: 'Södermalm, Stockholm',
        type: 'Apartment',
        details: '3 rooms / 85 m²',
        price: 'SEK 25,000',
        dateRange: '2025-06-01 → Until further notice',
      },
    ];

    return (
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-60 mb-4">
            💡 Hover over cards with multiple images to see navigation arrows
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {properties.map((property) => (
            <Card.PropertyCard
              key={property.id}
              property={property}
              liked={likedStates[property.id]}
              onLikeToggle={() => toggleLike(property.id)}
              onCardClick={() => alert(`Property ${property.location} clicked!`)}
            />
          ))}
        </div>
      </div>
    );
  },
};

export const LandlordCards = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
      <Card.LandlordCard
        landlord={dummyLandlord}
        verified
      />
      
      <Card.LandlordCard
        landlord={{
          name: 'Maria Andersson',
          initials: 'MA',
          role: 'Property Manager',
        }}
      />
      
      <Card.LandlordCard
        landlord={{
          name: 'Erik Johansson',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          role: 'Landlord',
        }}
        verified
      />
    </div>
  ),
};

export const ContactCards = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Card.ContactCard
        property={dummyContactProperty}
        message="You sent a contact request to Simon"
      />
      
      <Card.ContactCard
        property={{
          ...dummyContactProperty,
          location: 'Vasastan, Stockholm',
          details: 'Apartment / 2 rooms / 45 m²',
          price: 'SEK 16,500',
        }}
        message="Simon will answer as fast as they can."
      />
      
      <Card.ContactCard
        property={{
          ...dummyContactProperty,
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100&h=100&fit=crop',
          location: 'Norrmalm, Stockholm',
          details: 'Studio / 35 m²',
          price: 'SEK 14,000',
        }}
      />
    </div>
  ),
};

export const LandlordCTACards = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Card.LandlordCTACard
        onClick={() => alert('Create listing clicked!')}
      />
      
      <Card.LandlordCTACard
        title="Need more tenants?"
        description="Post your property to reach thousands of verified renters."
        onClick={() => alert('Post property clicked!')}
      />
      
      <Card.LandlordCTACard
        title="Premium listing"
        description="Get priority placement and connect with quality tenants faster."
        onClick={() => alert('Upgrade to premium clicked!')}
      />
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Tenant Profile Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card.TenantCard
            user={dummyTenant}
            verified
            matchPercentage={85}
            onCardClick={() => alert('Tenant clicked!')}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Create Profile Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <Card.CreateProfileCard
            title="Want landlords to find you?"
            description="Publish your profile here and let your future home come to you."
            icon={<CatIcon />}
            onButtonClick={() => alert('Create profile!')}
          />
          <Card.CreateTenantProfileCard
            title="Want landlords to find you?"
            description="Publish your profile here and let your future home come to you."
            buttonText="Create profile"
            onButtonClick={() => alert('Create tenant profile!')}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Property Listing Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card.PropertyCard
            property={dummyProperty}
            onLikeToggle={() => alert('Like toggled!')}
            onCardClick={() => alert('Property clicked!')}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Landlord Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card.LandlordCard
            landlord={dummyLandlord}
            verified
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Request Cards</h3>
        <div className="max-w-md">
          <Card.ContactCard
            property={dummyContactProperty}
            message="You sent a contact request to Simon"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Landlord CTA Cards</h3>
        <div className="max-w-md">
          <Card.LandlordCTACard
            onClick={() => alert('Create listing clicked!')}
          />
        </div>
      </div>
    </div>
  ),
};

export const Interactive = {
  render: () => {
    const [tenantClicked, setTenantClicked] = React.useState(false);
    const [liked, setLiked] = React.useState(false);

    return (
      <div className="space-y-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card.TenantCard
            user={dummyTenant}
            verified
            matchPercentage={92}
            onCardClick={() => {
              setTenantClicked(true);
              setTimeout(() => setTenantClicked(false), 2000);
            }}
          />
          
          <Card.PropertyCard
            property={dummyProperty}
            liked={liked}
            onLikeToggle={() => setLiked(!liked)}
            onCardClick={() => alert('View property details')}
          />
        </div>

        {tenantClicked && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800">Tenant profile opened! ✓</p>
          </div>
        )}
      </div>
    );
  },
}; 