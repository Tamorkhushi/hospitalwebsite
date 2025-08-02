const ThankYou = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 via-white to-green-200">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 text-lg mb-6">
          We will get back to you shortly.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
};

export default ThankYou;
