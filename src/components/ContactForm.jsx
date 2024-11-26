
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_kyfzref', 
      'template_u6ors1o', 
      e.target, 
      'jNqUvADVsur53EAzG'
    ).then(
      () => alert('Message sent!'),
      (error) => console.error(error.text)
    );
    e.target.reset();
  };

  return (
    <section id="contact" className="py-16 bg-secondary text-primary">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold mb-8 text-teal-500 text-center">Contact</h2>
        <form 
          onSubmit={sendEmail} 
          className="space-y-6 mx-auto bg-teal-600 p-8 rounded-lg shadow-lg"
          style={{ maxWidth: '600px' }}
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            defaultValue="iamvk473@example.com" 
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400" 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            className="w-full p-3 border rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-teal-400" 
            required
          ></textarea>
          <button 
            type="submit" 
            className="bg-blue-400 text-white py-3 px-8 rounded-md hover:bg-orange-600 transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
