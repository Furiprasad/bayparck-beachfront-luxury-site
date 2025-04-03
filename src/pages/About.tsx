
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero 
        title="About SVN Bay Parck" 
        subtitle="Discover the story behind our exclusive beachfront development"
        showCta={false}
      />

      {/* About Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/lovable-uploads/1aed6b55-0252-41ab-b7c5-22bc8c442514.png" 
                alt="About SVN Bay Parck" 
                className="rounded-lg shadow-xl" 
              />
            </div>
            <div>
              <SectionTitle 
                title="A World Away" 
                subtitle="Set on the pristine shores of Bay of Bengal, this project is an unprecedented concept, centered on celebrating contemporary lifestyle."
                center={false}
              />
              <p className="mb-6 text-gray-700">
                This 40-acre gated community development with stunning view of the sea shore comprises 
                of world-class resort with Beachfront Serviced Villas replete with all kinds of leisure 
                amenities and 206 premium beach plots.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange p-6 rounded-lg text-center text-primary">
                  <h3 className="text-3xl font-bold mb-2">25</h3>
                  <p className="font-medium">acres of Beachfront Plots</p>
                </div>
                <div className="bg-orange p-6 rounded-lg text-center text-primary">
                  <h3 className="text-3xl font-bold mb-2">15</h3>
                  <p className="font-medium">acres of Luxury Resort, Premium Cottages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Project Highlights" 
            subtitle="SVN Bay Parck offers a unique blend of luxury, comfort, and investment potential."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">SUDA-Approved Layout</h3>
              <p className="text-gray-600">
                Our development is fully approved by SUDA (Special Urban Development Authority), 
                ensuring adherence to all regulatory requirements and standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Beachfront Serviced Villas</h3>
              <p className="text-gray-600">
                Exclusive villas with premium services and amenities, designed to provide 
                the ultimate luxury living experience with stunning beach views.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Future Development Plans</h3>
              <p className="text-gray-600">
                We have ambitious plans to develop SVN Bay Parck into a full-fledged resort 
                with additional amenities and services for residents and guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Exclusive Membership Benefits" 
            subtitle="Enjoy special privileges and perks as an owner at SVN Bay Parck."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-lg hover-scale">
              <h3 className="text-xl font-semibold mb-4">Resort Privileges</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Free stays at the resort (conditions apply)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Special discounts on food and beverages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Priority booking for resort facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Exclusive access to member-only events</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-8 rounded-lg hover-scale">
              <h3 className="text-xl font-semibold mb-4">Complimentary Amenities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Access to swimming pool and fitness facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Spa discounts and wellness services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Beach access with complimentary loungers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Recreational activities and entertainment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle 
            title="Location Advantage" 
            subtitle="Strategically located for convenience, connectivity, and future growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover-scale">
              <h3 className="text-primary text-5xl font-bold mb-4">10</h3>
              <p className="text-gray-700">km from Chennai-Kolkata Highway</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover-scale">
              <h3 className="text-primary text-5xl font-bold mb-4">35</h3>
              <p className="text-gray-700">km from Bhogapuram Airport</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover-scale">
              <h3 className="text-primary text-5xl font-bold mb-4">40</h3>
              <p className="text-gray-700">km from Vizianagaram City</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover-scale">
              <h3 className="text-primary text-5xl font-bold mb-4">80</h3>
              <p className="text-gray-700">km from Visakhapatnam City</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
