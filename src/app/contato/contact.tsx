"use client";

import Footer from "../footer/footer";
import EmailComponent from "./Components/emailComponent";
import SocialLinksComponent from "@/components/ui/socialLinksComponent";

const ContactPage = () => {
  return (
    <section
      id="contato"
      className="flex flex-col justify-between lg:pt-10 md:pt-4"
    >
      <h1 className="text-2xl font-semibold mt-2 p-2 flex items-center justify-center">
        Entre em contato comigo!
      </h1>
      <div className="lg:grid lg:grid-cols-2 ">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-2 ">Me envie um email</h2>
          <EmailComponent />
        </div>
        <div className="gap-4 items-center justify-center flex flex-col mt-2">
          <h2 className="text-lg font-semibold lg:mb-2 ">Vamos conectar?</h2>
          <SocialLinksComponent />
        </div>
      </div>

      <div className="mt-2">
        <Footer />
      </div>
    </section>
  );
};

export default ContactPage;
