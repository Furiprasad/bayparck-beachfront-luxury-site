import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import FeatureItem from "../components/FeatureItem";
import { Waves, Dumbbell, Users, Tent, Bike, Landmark, Home, Shirt } from "lucide-react";

const Amenities = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero 
        title="World-Class Amenities" 
        subtitle="Indulge in luxury with our extensive range of premium amenities"
        showCta={false}
      />

      {/* Main Amenities */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle 
            title="Resort Amenities" 
            subtitle="Experience the finest lifestyle amenities designed for comfort, leisure, and recreation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureItem 
              icon={<Waves className="h-8 w-8" />}
              title="Swimming Pool"
              description="Luxurious infinity pool with ocean views, perfect for relaxation and exercise."
            />
            
            <FeatureItem 
              icon={<Dumbbell className="h-8 w-8" />}
              title="Outdoor Gym"
              description="State-of-the-art fitness equipment in a scenic outdoor setting for health enthusiasts."
            />
            
            <FeatureItem 
              icon={<Users className="h-8 w-8" />}
              title="Children's Play Area"
              description="Safe and engaging play zones designed specifically for younger residents and guests."
            />
            
            <FeatureItem 
              icon={<Tent className="h-8 w-8" />}
              title="Sports Courts"
              description="Multiple sports facilities including tennis, badminton, and basketball courts."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <FeatureItem 
              icon={<Bike className="h-8 w-8" />}
              title="Jogging/Cycling Tracks"
              description="Dedicated paths for jogging and cycling amid beautiful landscaped surroundings."
            />
            
            <FeatureItem 
              icon={<Landmark className="h-8 w-8" />}
              title="Banquet Hall"
              description="Elegant space for hosting private events, celebrations, and gatherings."
            />
            
            <FeatureItem 
              icon={<Home className="h-8 w-8" />}
              title="Resort Cottages"
              description="Luxurious cottages for guests and visitors with premium services and amenities."
            />
            
            <FeatureItem 
              icon={<Shirt className="h-8 w-8" />}
              title="Club House"
              description="Exclusive members-only club with recreational facilities and dining options."
            />
          </div>
        </div>
      </section>

      {/* Amenities Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Amenities Gallery" 
            subtitle="Take a visual tour of our exquisite amenities and facilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/f28e4b0b-d6aa-426f-beda-8859140dc824.png" 
                alt="Swimming Pool" 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" 
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-primary">Swimming Pool</h3>
                <p className="text-sm text-gray-600">Infinity pool with panoramic ocean views</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/f28e4b0b-d6aa-426f-beda-8859140dc824.png" 
                alt="Outdoor Gym" 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" 
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-primary">Outdoor Gym</h3>
                <p className="text-sm text-gray-600">Premium fitness equipment in a scenic setting</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/f28e4b0b-d6aa-426f-beda-8859140dc824.png" 
                alt="Children's Play Area" 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" 
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-primary">Children's Play Area</h3>
                <p className="text-sm text-gray-600">Safe and engaging play zones for children</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/f28e4b0b-d6aa-426f-beda-8859140dc824.png" 
                alt="Sports Courts" 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" 
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-primary">Sports Courts</h3>
                <p className="text-sm text-gray-600">Multi-purpose courts for various sports</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/f28e4b0b-d6aa-426f-beda-8859140dc824.png" 
                alt="Jogging Tracks" 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" 
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-primary">Jogging Tracks</h3>
                <p className="text-sm text-gray-600">Scenic paths for jogging and cycling</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/f28e4b0b-d6aa-426f-beda-8859140dc824.png" 
                alt="Banquet Hall" 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" 
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-primary">Banquet Hall</h3>
                <p className="text-sm text-gray-600">Elegant space for private events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Premium Services" 
            subtitle="Enjoy a host of exclusive services designed to enhance your lifestyle experience."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Resort Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <div>
                    <span className="font-medium">Concierge Services</span>
                    <p className="text-sm text-white/80 mt-1">Dedicated concierge to assist with all your needs and requests.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <div>
                    <span className="font-medium">Housekeeping</span>
                    <p className="text-sm text-white/80 mt-1">Regular housekeeping services to maintain your villa in perfect condition.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <div>
                    <span className="font-medium">Dining Options</span>
                    <p className="text-sm text-white/80 mt-1">Multiple dining venues offering a variety of cuisines and experiences.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <div>
                    <span className="font-medium">Wellness Services</span>
                    <p className="text-sm text-white/80 mt-1">Spa, yoga, and wellness programs for a rejuvenating experience.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Recreation Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <div>
                    <span className="font-medium">Beach Activities</span>
                    <p className="text-sm text-white/80 mt-1">Organized beach activities, water sports, and equipment rentals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <div>
                    <span className="font-medium">Community Events</span>
                    <p className="text-sm text-white/80 mt-1">Regular community gatherings, cultural events, and celebrations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <div>
                    <span className="font-medium">Children's Programs</span>
                    <p className="text-sm text-white/80 mt-1">Supervised activities and programs for children of different age groups.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <div>
                    <span className="font-medium">Excursion Planning</span>
                    <p className="text-sm text-white/80 mt-1">Assistance with planning and booking local excursions and tours.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Amenities;
