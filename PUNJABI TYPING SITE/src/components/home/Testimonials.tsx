import React from 'react';

const testimonials = [
  {
    quote: "ਮੈਂ ਕਦੇ ਨਹੀਂ ਸੋਚਿਆ ਸੀ ਕਿ ਪੰਜਾਬੀ ਟਾਈਪ ਕਰਨਾ ਇੰਨਾ ਆਸਾਨ ਹੋ ਸਕਦਾ ਹੈ। ਇਹ ਵੈੱਬਸਾਈਟ ਨਾਲ ਹਰ ਲੈਸਨ ਬਾਅਦ ਮੇਰੀ ਗਤੀ ਤੇ ਸ਼ੁੱਧਤਾ ਵਧੀ ਹੈ।",
    author: "Gurpreet Singh",
    role: "Language Student"
  },
  {
    quote: "ਇਸ ਸਾਈਟ ਦੇ ਇੰਟਰਐਕਟਿਵ ਕੀਬੋਰਡ ਅਤੇ ਅਸਲੀ ਟਾਈਮ ਫੀਡਬੈਕ ਨਾਲ ਮੈਂ 30 ਦਿਨਾਂ ਵਿੱਚ ਪੰਜਾਬੀ ਵਿਚ ਫਲੂਐਂਟ ਟਾਈਪ ਕਰਨਾ ਸਿੱਖ ਲਿਆ!",
    author: "Harleen Kaur",
    role: "Content Creator"
  },
  {
    quote: "ਪਹਿਲੀ ਵਾਰ ਕਿਸੇ ਵੈੱਬਸਾਈਟ ਨੇ ਮੇਰੀ ਪ੍ਰਗਤੀ ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਟ੍ਰੈਕ ਕੀਤੀ। ਹੁਣ ਮੈਂ ਆਪਣੇ ਕੰਮ ਲਈ ਬਿਨਾਂ ਰੁਕਾਵਟ ਪੰਜਾਬੀ ਟਾਈਪ ਕਰਦਾ ਹਾਂ।",
    author: "Dr. Manpreet Dhillon",
    role: "Punjabi Professor"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Students Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Join thousands of learners who have improved their Punjabi typing skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <svg
                className="h-8 w-8 text-blue-500 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;