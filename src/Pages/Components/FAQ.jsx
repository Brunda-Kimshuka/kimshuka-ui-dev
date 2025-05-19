import React, { useState } from "react";
import style from './udg-style.module.css'

const faqData = [
  {
    id: 1,
    question: "1. What industries do you serve?",
    answer:
      "We serve industries including technology, finance, healthcare, manufacturing, and retail, offering tailored solutions across API management, IoT, UX design, web and app development, product consulting, and recruitment services.",
  },
  {
    id: 2,
    question: "2. How do you ensure the security of our data?",
    answer:
      "We prioritize data security by implementing best practices such as end-to-end encryption, secure API management, and regular security audits. Our team follows industry standards to ensure your data is protected at every stage.",
  },
  {
    id: 3,
    question: "3. How do i get started?",
    answer:
      "Our process begins with an in-depth consultation to understand your needs. After that, we develop a tailored solution and present a roadmap for implementation. Throughout the project, we maintain open communication and ensure timely delivery.",
  },
  {
    id: 4,
    question: "4. Are your solutions scalable?",
    answer:
      "We design our solutions with flexibility and scalability in mind, ensuring that they can adapt to your business as it grows. Our use of cloud technologies, modular systems, and regular updates ensures your systems remain relevant and efficient in the long term.",
  },
  {
    id: 5,
    question: "5. Do you offer post-launch support?",
    answer:
      "To join, you need to request a unique invitation code from an existing user. Once you have the code, use it to sign up and create your profile.",
  },
];
const FAQ = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const email = "info@kimshuka.com";
  const handleToggleAnswer = (itemId) => {
    setVisibleAnswer((prevId) => (prevId === itemId ? null : itemId));
  };

  return (
    <div className="flex gap-20 py-[5%] w-[100%] items-start justify-center h-[60vh]">
      <div>
        <h1 className={`${style['PrimaryFont']} text-[40px] text-[#0A0A0A] font-bold `}>
          Frequent <br /> Questions and Answer
        </h1>
        <h4 className={`${style['SecondaryFont']} text-[16px] text-[#667085] font-normal`}>
          Have another questions? Email us at{" "}
          <a href={`mailto:${email}`} className="text-[#F27F0C]">
            {email}
          </a>
        </h4>
      </div>
      <div className="w-[50%]">
        <ul>
          {faqData.map((faqItem)=>(
            <FAQItem 
              key={faqItem.id} 
              faqItem={faqItem}
              isVisible={visibleAnswer === faqItem.id}
              onToggle={handleToggleAnswer}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

function FAQItem({ faqItem, isVisible, onToggle }) {
  const { id, question, answer } = faqItem;

  return (
    <li key={id}>
      <div className="flex gap-4 items-center justify-between">
        <h2 className={`${style['PrimaryFont']} text-[24px] text-[#0A0A0A] font-medium `}>{question}</h2>
        <button
          onClick={()=>onToggle(id)}
          className="h-6 w-6 bg-[#F27F0C] rounded-full text-white "
        >
          {isVisible ? (
            <img src="src/assets/minus-sign.svg" alt="minus" />
          ) : (
            <img src="src/assets/plus-sign.svg" alt="plus" />
          )}
        </button>
      </div>
      
        <p className={`${style['SecondaryFont']} ${isVisible ? "max-h-auto opacity-100" : "max-h-0 opacity-0"} transition-all ease-in-out duration-300 text-[18px] text-[#667085] font-normal`}>{answer}</p>
      
      <hr className="border-[#D0D5DD] my-4" />
    </li>
  );
}


export default FAQ;
