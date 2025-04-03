
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import FeatureItem from "../components/FeatureItem";
import { Swimming, Dumbbell, Users, Landmark, MapPin, PiggyBank, Calendar, CreditCard } from "lucide-react";

const Home = () => {
  return (
    <main className="pt-0">
      {/* Hero Section */}
      <Hero 
        title="Welcome to SVN Bay Parck – Luxury Beachfront Living" 
        subtitle="Experience the epitome of luxury living with our exclusive beachfront plots and villas on the pristine shores of Bay of Bengal."
      />

      {/* About Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <h2 className="heading-lg text-primary mb-4">A World Away</h2>
                <div className="w-20 h-1 bg-secondary mb-6"></div>
              </div>
              <p className="mb-6 text-gray-700">
                Set on the pristine shores of Bay of Bengal, this project is an unprecedented concept, 
                centered on celebrating contemporary lifestyle.
              </p>
              <p className="mb-6 text-gray-700">
                This 40-acre gated community development with stunning view of the sea shore comprises 
                of world-class resort with Beachfront Serviced Villas replete with all kinds of leisure 
                amenities and 206 premium beach plots.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange p-6 rounded-lg text-center text-primary">
                  <h3 className="text-3xl font-bold mb-2">25</h3>
                  <p className="font-medium">acres of Beachfront Plots</p>
                </div>
                <div className="bg-orange p-6 rounded-lg text-center text-primary">
                  <h3 className="text-3xl font-bold mb-2">15</h3>
                  <p className="font-medium">acres of Luxury Resort, Premium Cottages</p>
                </div>
              </div>
              <Link 
                to="/about" 
                className="btn-primary inline-block"
              >
                Discover More
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/1aed6b55-0252-41ab-b7c5-22bc8c442514.png" 
                alt="SVN Bay Parck Beachfront" 
                className="rounded-lg shadow-xl hover-scale" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plots & Villas Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Plots & Luxury Villas" 
            subtitle="Explore our exclusive plots and luxury villas designed for the discerning few who appreciate the finer things in life."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card hover-scale">
              <div className="bg-primary text-white p-6">
                <h3 className="heading-md mb-2">Premium Plots</h3>
                <p className="text-white/80">Carefully designed beachfront plots with stunning views</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Plot sizes ranging from 200-267 sq yds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>SUDA-approved layout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Robust infrastructure with 40ft & 30ft roads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Fully developed with underground utilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Pristine surroundings with sea views</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card hover-scale">
              <div className="bg-secondary text-white p-6">
                <h3 className="heading-md mb-2">Luxury Villas</h3>
                <p className="text-white/80">Elegantly designed villas for comfort and luxury</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>2 BHK & 4 BHK configurations available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Beachfront serviced villas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Modern architecture with premium finishes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Resort-style amenities and services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Panoramic sea views from select villas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link 
              to="/plots-villas" 
              className="btn-primary inline-block"
            >
              Explore Plot Sizes
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="World-Class Amenities" 
            subtitle="Indulge in a lifestyle of luxury with our extensive range of premium amenities."
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 p-6 rounded-lg hover-scale">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Swimming className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Swimming Pool</h3>
            </div>
            
            <div className="text-center bg-white/10 p-6 rounded-lg hover-scale">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Outdoor Gym</h3>
            </div>
            
            <div className="text-center bg-white/10 p-6 rounded-lg hover-scale">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Children's Play Area</h3>
            </div>
            
            <div className="text-center bg-white/10 p-6 rounded-lg hover-scale">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Landmark className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Banquet Hall</h3>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link 
              to="/amenities" 
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium inline-block transition-colors"
            >
              View All Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Potential Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle 
            title="Investment Potential" 
            subtitle="Discover why SVN Bay Parck is not just a lifestyle choice but a smart investment for the future."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureItem 
              icon={<MapPin className="h-8 w-8" />}
              title="Prime Location"
              description="Outstanding location near Bhogapuram Airport and Vizianagaram City."
            />
            
            <FeatureItem 
              icon={<PiggyBank className="h-8 w-8" />}
              title="High ROI"
              description="Exceptional returns and capital growth forecasts in a developing area."
            />
            
            <FeatureItem 
              icon={<Calendar className="h-8 w-8" />}
              title="Flexible Plans"
              description="Convenient payment plans tailored to suit your financial needs."
            />
            
            <FeatureItem 
              icon={<CreditCard className="h-8 w-8" />}
              title="Affordable Luxury"
              description="Wallet-friendly plot sizes without compromising on luxury."
            />
          </div>

          <div className="mt-10 text-center">
            <Link 
              to="/investment" 
              className="btn-primary inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/lovable-uploads/f28e4b0b-d6aa-426f-beda-8859140dc824.png')" }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="heading-lg mb-6">Ready to Secure Your Piece of Paradise?</h2>
            <p className="text-lg mb-8">
              Don't miss the opportunity to own an exclusive beachfront property in one of India's most promising locations.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md font-medium inline-block transition-colors"
            >
              Book Your Plot Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
