import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Master Punjabi Typing?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Start your journey today and improve your Raavi typing skills with our structured lessons and real-time feedback.
        </p>
        <Link to="/lessons">
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 font-medium"
          >
            Begin Free Lessons <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;