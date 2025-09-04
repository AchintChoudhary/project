import React, { useState } from 'react';
import { Mail, MessageSquare, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail('');
    setPhone('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected with Waah Indore
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Get the latest updates about events, food recommendations, and hidden gems 
            delivered straight to your inbox and WhatsApp.
          </p>

          {subscribed ? (
            <div className="bg-green-500/20 border border-green-400 rounded-lg p-6 max-w-md mx-auto">
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Welcome aboard!</h3>
              <p className="text-green-200">
                Thanks for subscribing. You'll receive our next update soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {/* Email Subscription */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-orange-300" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                    required
                  />
                </div>

                {/* WhatsApp Subscription */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-orange-300" />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="WhatsApp number (optional)"
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  type="submit"
                  className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Subscribe to Newsletter
                </button>
                <button
                  type="button"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Join WhatsApp Updates
                </button>
              </div>

              <p className="text-orange-100 text-sm">
                Join 10,000+ Indore enthusiasts who stay updated with our weekly digest
              </p>
            </form>
          )}
        </div>

        {/* Feature Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: 'Weekly Digest', description: 'Curated content every Friday' },
            { title: 'Event Alerts', description: 'Never miss exciting happenings' },
            { title: 'Exclusive Content', description: 'Subscriber-only guides and tips' },
          ].map((benefit, index) => (
            <div key={benefit.title} className="text-center space-y-2">
              <h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
              <p className="text-orange-200 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;