const faqs = [
    {
      question: "1. What is the maximum occupancy for the house?",
      answer: (
        <>
          Tesla House comfortably accommodates:
          <p>6 guests for long stays (minimum 30 days)</p>
          <p>8 guests for short stays (minimum 2 days)</p>
          <br />
          Each bedroom features a queen-size bed, while the living room contains two sofas, which, although not convertible to beds, come with bedding provided for additional guests.
        </>
      ),
    },
    {
      question: "2. What amenities are included?",
      answer: "All amenities are listed on the property tab, under “Amenities”.",
    },
    {
      question: "3. Do any of the amenities require an additional fee charge?",
      answer: (
        <>
          Yes. The Hot Tub and Car Charger are available upon request for an additional charge.
            <br />
          <ul>
            <li>The Hot Tub requires routine maintenance to ensure that the quality of the water and balance of chemicals is professionally managed. Upon request, the Hot Tub can be filled and maintained during your stay for an additional charge of $200 per month.</li>
            <br />
            <li>The Car Charger can be used upon request during your booking for an additional charge of $25 per week or $100 per month.</li>
          </ul>
        </>
      ),
    },
    {
      question: "4. What type of car charger is available?",
      answer: "Equipped with Gen 3 Tesla wall charger & a J1772 compatible charging adapter for other electric vehicles.",
    },
    {
      question: "5. Are pets allowed?",
      answer: "Unfortunately, pets are not allowed to stay at the property.",
    },
    {
      question: "6. Is the house accessible to persons with disabilities?",
      answer: "This home is not ADA accessible. It is elevated on a pier and beam foundation and has a small flight of stairs at the front entrance and at the rear patio. The path from the driveway to the front of the house has a stone path.",
    },
    {
      question: "7. Does the property offer on-site parking?",
      answer: "Yes. The private, gated driveway is suitable for up to (3) cars parked in a single line. There is plenty of curb-side parking available in front of the property.",
    },
    {
      question: "8. Does the property have fencing?",
      answer: "Yes, there is a shorter fence in the front of the property with a pair of gates for vehicular access to the driveway and a separate gate for pedestrian access. At the rear of the property is an 8-foot-tall wood picket privacy fence.",
    },
    {
      question: "9. How far is Downtown and other attractions from the house?",
      answer: "Refer to the 'Property' tab within the 'Where you'll be' section for a map displaying approximate distances to nearby attractions.",
    },
    {
      question: "10. What is your cancellation policy?",
      answer: "You are eligible for a complete refund if you cancel your reservation at least 7 days before your check-in date.",
    },
    {
      question: "11. Are parties allowed?",
      answer: "For the comfort and security of all guests, parties are not permitted in the house.",
    },
    {
      question: "12. What are the quiet hours?",
      answer: "Per the City of San Antonio noise ordinance, quiet hours are to be respected between the hours of 10pm to 7am during the workweek and on weekends.",
    },
    {
      question: "13. Are children and infants allowed?",
      answer: "Of course. Please bring all the gear you require for infants and toddlers. The house is not child-proofed, and we do not provide cribs, high-chairs, or other accessories small children may require.",
    },
  ];
  




const faqMetal = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold  mb-6">
        Frequently Asked Questions (FAQs)
      </h2>
      <dl className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <dt className="font-semibold text-lg">{faq.question}</dt>
            <dd className="mt-2 text-gray-700">{faq.answer}</dd>
          </div>
        ))}
      </dl>
      <p>
        <br /> <hr />
      <strong> NOTE: </strong>  If you have any questions that aren't answered in the FAQ section,
please click the "Contact" button on the main page's top and send us a
message.
      </p>
    </div>
  );
};

export default faqMetal;
