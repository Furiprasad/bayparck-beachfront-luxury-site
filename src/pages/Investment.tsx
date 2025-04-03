
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Landmark, TrendingUp, BadgePercent, LineChart } from "lucide-react";

const Investment = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero 
        title="Investment Potential" 
        subtitle="Discover why SVN Bay Parck is not just a lifestyle choice but a smart investment"
        showCta={false}
      />

      {/* Why Invest Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle 
            title="Why Invest in SVN Bay Parck?" 
            subtitle="Secure your financial future with a property investment that offers both lifestyle benefits and strong returns."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Landmark className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Outstanding Location</h3>
              <p className="text-gray-600">
                Located near Bhogapuram Airport and Vizianagaram City, the property is 
                strategically positioned for future appreciation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">High ROI</h3>
              <p className="text-gray-600">
                Exceptional returns and significant capital growth forecasts in an 
                area undergoing rapid development and infrastructure improvements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BadgePercent className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Flexible Payment Plans</h3>
              <p className="text-gray-600">
                Convenient payment options tailored to suit your financial needs, 
                making investment accessible to a wider range of investors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <LineChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Wallet-Friendly Plots</h3>
              <p className="text-gray-600">
                A range of affordable plot sizes without compromising on quality, 
                allowing investors to choose based on their budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Potential */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="ROI Potential" 
            subtitle="Understand the investment growth potential of SVN Bay Parck properties."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/1aed6b55-0252-41ab-b7c5-22bc8c442514.png" 
                alt="Investment Growth" 
                className="rounded-lg shadow-xl" 
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Capital Appreciation</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-medium text-secondary mb-3">Short-Term (1-3 years)</h4>
                  <div className="flex items-center mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <span className="ml-3 font-semibold">12-15%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Initial appreciation due to infrastructure development and increasing demand.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-medium text-secondary mb-3">Mid-Term (3-5 years)</h4>
                  <div className="flex items-center mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <span className="ml-3 font-semibold">25-30%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Growth from completion of nearby Bhogapuram Airport and other developments.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-medium text-secondary mb-3">Long-Term (5-10 years)</h4>
                  <div className="flex items-center mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="ml-3 font-semibold">50-60%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Substantial appreciation as the area transforms into a major tourist and residential hub.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Flexible Payment Plans" 
            subtitle="Choose from a variety of payment options designed to suit your financial needs."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-6">Down Payment Plan</h3>
              <div className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">30%</span>
              </div>
              <p className="mb-6">
                Pay 30% down payment and the remainder in flexible installments.
              </p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>30% initial payment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Balance in 18 monthly installments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>No hidden fees</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-md font-medium inline-block transition-colors"
              >
                Get Details
              </a>
            </div>

            <div className="bg-secondary p-8 rounded-lg text-center transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange text-primary px-4 py-1 rounded-full font-medium text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold mb-6">Balanced Plan</h3>
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">50%</span>
              </div>
              <p className="mb-6">
                Pay 50% upfront and the remainder in convenient installments.
              </p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span>50% initial payment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span>Balance in 12 monthly installments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span>Special discount available</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="bg-white text-secondary hover:bg-gray-100 px-6 py-2 rounded-md font-medium inline-block transition-colors"
              >
                Get Details
              </a>
            </div>

            <div className="bg-white/10 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-6">Full Payment Plan</h3>
              <div className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">100%</span>
              </div>
              <p className="mb-6">
                Pay the full amount upfront and enjoy substantial discounts.
              </p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>100% upfront payment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Significant discount on total price</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Priority plot selection</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-md font-medium inline-block transition-colors"
              >
                Get Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle 
            title="Development Timeline" 
            subtitle="Stay informed about the project development schedule and milestones."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-16 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-primary mb-2">Phase 1: Infrastructure Development</h3>
                  <p className="text-gray-600">
                    Roads, underground utilities, and basic infrastructure to be completed.
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10 my-4 md:my-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="text-secondary font-semibold">Completed</div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="text-secondary font-semibold">In Progress</div>
                </div>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center z-10 my-4 md:my-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-semibold text-primary mb-2">Phase 2: Plot Development</h3>
                  <p className="text-gray-600">
                    Plot demarcation, landscaping, and common areas development.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-primary mb-2">Phase 3: Villa Construction</h3>
                  <p className="text-gray-600">
                    Construction of luxury villas and resort facilities.
                  </p>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center z-10 my-4 md:my-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="text-gray-500 font-semibold">Starting Q3 2023</div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="text-gray-500 font-semibold">Starting Q1 2024</div>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center z-10 my-4 md:my-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-semibold text-primary mb-2">Phase 4: Resort Completion</h3>
                  <p className="text-gray-600">
                    Final touches to resort amenities and services, ready for full operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Investment;
