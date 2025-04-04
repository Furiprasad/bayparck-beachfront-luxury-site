
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries and bookings"
        showCta={false}
      />

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle 
            title="Get in Touch" 
            subtitle="We're here to answer any questions you may have about SVN Bay Parck."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Call Us</h3>
              <p className="text-gray-600 mb-2">Our sales team is available to assist you</p>
              <a href="tel:+918599924242" className="text-secondary font-semibold hover:underline">
                +91 85999 24242
              </a>
              <span className="text-gray-500 mx-2">/</span>
              <a href="tel:+918599936363" className="text-secondary font-semibold hover:underline">
                +91 85999 36363
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Email Us</h3>
              <p className="text-gray-600 mb-2">Send us an email for any inquiries</p>
              <a href="mailto:info@svnsjd.com" className="text-secondary font-semibold hover:underline">
                info@svnsjd.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Visit Us</h3>
              <p className="text-gray-600 mb-2">Our office location</p>
              <p className="text-secondary font-semibold">
                SVN Bay Parck, Bhogapuram, Near Vizianagaram, Andhra Pradesh, India
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary mb-6">Inquiry Form</h3>
              <div className="overflow-hidden h-[800px] w-full">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLScX0NxUHedHmKsntor1bqFGWL_AKRCuiPr4o7Ozijm67aKrkg/viewform?embedded=true" 
                  width="100%" 
                  height="1565" 
                  style={{ border: 0 }}
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary mb-6">Our Location</h3>
              <div className="rounded-lg overflow-hidden h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.5078040655417!2d83.7581077!3d18.140506799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c0f0027cff3bb%3A0xeabdd61628bb3c6!2sSVN%20Bay%20Parck!5e0!3m2!1sen!2sin!4v1743673709774!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Book Your Plot?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact our sales team today to learn more about our available plots, villas, and payment plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:+918599924242" 
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <a 
              href="mailto:info@svnsjd.com" 
              className="bg-secondary text-white hover:bg-secondary/90 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
