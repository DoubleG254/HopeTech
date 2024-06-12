import React from 'react';

const Contact = () => {
  return (
    <div className=" text-blue-900 py-12 pt-20 mx-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="bg-gray-400 p-6 rounded-lg space-y-4">
              <div>
                <label className="block text-sm text-blue-700 font-medium mb-1" htmlFor="name">Name</label>
                <input className="w-full p-2 bg-gray-100 text-white rounded" type="text" id="name" />
              </div>
              <div>
                <label className="block text-sm text-blue-700 font-medium mb-1" htmlFor="email">Email</label>
                <input className="w-full p-2 bg-gray-100 text-white rounded" type="email" id="email" />
              </div>
              <div>
                <label className="block text-sm text-blue-700 font-medium mb-1" htmlFor="message">Message</label>
                <textarea className="w-full p-2 bg-gray-100 text-white rounded" id="message" rows="4"></textarea>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Send Message</button>
            </form>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="mb-4">You can reach us at:</p>
            <p className="mb-2"><strong>Email:</strong> contact@hopetech.com</p>
            <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="mb-4"><strong>Address:</strong> 123 Hope Street, Tech City, TX 12345</p>
            <h3 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <details className="bg-gray-300 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">What services do you offer?</summary>
                <p className="mt-2">We offer a comprehensive range of web design and development services, including custom website design, responsive design, e-commerce solutions, custom web applications, UI/UX design, website maintenance, SEO services, content creation, and PPC advertising.</p>
              </details>
              <details className="bg-gray-300 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">How long does it take to build a website?</summary>
                <p className="mt-2">The timeline for building a website depends on the scope and complexity of the project. On average, a custom website can take anywhere from 6 to 12 weeks to complete. This includes the discovery, planning, design, development, and testing phases. We will provide a detailed timeline for your specific project during the planning phase.</p>
              </details>
              <details className="bg-gray-300 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">What is the cost of a custom website?</summary>
                <p className="mt-2">The cost of a custom website varies based on the scope and complexity of the project. We offer competitive pricing and flexible packages to suit different budgets and needs. During the discovery phase, we will provide a detailed quote based on your specific requirements.</p>
              </details>
              <details className="bg-gray-300 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">Do you offer ongoing support?</summary>
                <p className="mt-2">Yes, we offer ongoing maintenance and support services to ensure that your website remains in top condition. Our maintenance plans include regular updates, security patches, performance optimization, and more. We are committed to providing long-term support to help you succeed.</p>
              </details>
              <details className="bg-gray-300 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">How do you handle SEO?</summary>
                <p className="mt-2">Our SEO services include a comprehensive approach to improving your site’s visibility on search engines. This includes keyword research, on-page optimization, link building, and more. We use proven strategies and best practices to help you achieve higher rankings and drive more traffic to your site.</p>
              </details>
              <details className="bg-gray-300 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">Can you help with content creation?</summary>
                <p className="mt-2">Yes, we offer content creation services, including copywriting, blog writing, video production, and more. Our team of skilled writers and content creators can help you create high-quality, engaging content that resonates with your audience and supports your marketing goals.</p>
              </details>
              <details className="bg-gray-300 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">What is PPC advertising, and how can it help my business?</summary>
                <p className="mt-2">PPC (pay-per-click) advertising is a form of online advertising where you pay each time someone clicks on your ad. It’s a powerful tool for driving targeted traffic to your site and increasing conversions. Our PPC services include campaign setup, management, and optimization to help you maximize your ROI.</p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
