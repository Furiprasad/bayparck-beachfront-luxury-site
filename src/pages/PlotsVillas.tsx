
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Check } from "lucide-react";

const PlotsVillas = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero 
        title="Plots & Villas" 
        subtitle="Explore our premium beachfront plots and luxury villas"
        showCta={false}
      />

      {/* Plots Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle 
            title="Premium Beachfront Plots" 
            subtitle="Own a piece of paradise with our exclusive beachfront plots offering unparalleled views and lifestyle."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/02413078-948a-48e5-8952-385d0ccc1617.png" 
                alt="Premium Cottage" 
                className="rounded-lg shadow-xl" 
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Plot Features</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-medium text-secondary mb-4">Plot Sizes</h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <span className="block text-xl font-bold text-primary">200</span>
                    <span className="text-sm text-gray-600">Square Yards</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <span className="block text-xl font-bold text-primary">222</span>
                    <span className="text-sm text-gray-600">Square Yards</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <span className="block text-xl font-bold text-primary">244</span>
                    <span className="text-sm text-gray-600">Square Yards</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <span className="block text-xl font-bold text-primary">267</span>
                    <span className="text-sm text-gray-600">Square Yards</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-secondary mb-4">Infrastructure</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>SUDA-approved layout with clear titles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>40ft & 30ft wide well-laid roads</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Underground electricity and water lines</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Streetlights and landscaped common areas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>24/7 security with gated community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villas Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Luxury Beachfront Villas" 
            subtitle="Experience the pinnacle of beachfront living with our exquisitely designed luxury villas."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold text-primary mb-6">Villa Configurations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-primary mb-4">2 BHK Villas</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Area: 1200-1500 sq.ft.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>2 Bedrooms with ensuite bathrooms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Modern kitchen with premium appliances</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Private garden and parking space</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-primary mb-4">4 BHK Villas</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Area: 2500-3000 sq.ft.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>4 Bedrooms with ensuite bathrooms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Spacious living and dining areas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Private pool option available</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-secondary mb-4">Features & Finishes</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Premium Italian marble flooring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Modular kitchen with high-end fittings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Energy-efficient appliances and fixtures</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Smart home automation options</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Resort-style amenities and services</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/9a91ead9-a154-4502-870d-c1471cf58bde.png" 
                alt="Luxury Cottage" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Own Your Dream Property?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact our sales team today to learn more about plot availability, pricing, 
            and payment plans for our exclusive beachfront properties.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md font-medium inline-block transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
};

export default PlotsVillas;
