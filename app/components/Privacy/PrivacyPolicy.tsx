

const colors = {
  customGreen: '#2E5339',
  customLightGreen: '#E6ECDE',
  customBeige: '#F8EBC6',
  customGold: '#C7A041',
  customGray: '#787878',
  customDarkGray: '#393939',
  customLightGray: '#E7E7E7',
  customSilver: '#D9D9D9',
}

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-16">
      <section>
        <h1 className="text-[#2d523f] text-5xl font-bold text-center mb-16" style={{ color: colors.customGreen }}>
          Information We Collect
        </h1>
        <p className="mb-6" style={{ color: colors.customGold }}>
          To plan and provide exceptional travel experiences, we may collect certain personal details, including:
        </p>
        <ul className="space-y-4">
          {[
            'Your name, email address, phone number, and postal address.',
            'Travel preferences, dietary requirements, and special requests.',
            'Passport and payment details (when booking a trip).',
            'Information about minors (with parental or guardian consent).',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-2 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: colors.customGreen }} />
              <span style={{ color: colors.customDarkGray }}>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6" style={{ color: colors.customGold }}>
          We gather this information through our website, phone calls, emails, and other communication methods.
        </p>
      </section>

      <section>
        <h2 className="text-[#2d523f] text-5xl font-bold text-center mb-16" style={{ color: colors.customGreen }}>
          Why We Collect Your Information
        </h2>
        <p className="mb-6" style={{ color: colors.customGold }}>
          We collect your information to:
        </p>
        <ul className="space-y-4">
          {[
            'Provide personalized travel services and support.',
            'Communicate with you effectively.',
            'Plan and execute trips tailored to your needs.',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-2 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: colors.customGreen }} />
              <span style={{ color: colors.customDarkGray }}>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-[#2d523f] text-5xl font-bold text-center mb-16" style={{ color: colors.customGreen }}>
          How We Use and Share Your Information
        </h2>
        <p className="mb-6" style={{ color: colors.customGold }}>
          Your information is used solely for providing travel services and planning your trip. When necessary, we may share your
          information with:
        </p>
        <ul className="space-y-4">
          {[
            'Partner companies (e.g., hotels, transport providers, guides).',
            'Governmental agencies as required.',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-2 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: colors.customGreen }} />
              <span style={{ color: colors.customDarkGray }}>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6" style={{ color: colors.customGold }}>
          We do not share your information with third parties for marketing purposes.
        </p>
      </section>
      <section>
        <h2 className="text-[#2d523f] text-5xl font-bold text-center mb-16">
          Protecting Your Information
        </h2>
        <p className="text-customGold mb-8">
          We take your data security seriously. Your personal information is protected using technical, administrative, and physical security
          measures. We retain your data only for as long as necessary to provide services and comply with legal requirements.
        </p>
        <p className="text-customGold">
          You can unsubscribe from our marketing communications at any time by clicking unsubscribe in our emails or contacting us
          directly.
        </p>
      </section>

      <section>
        <h2 className="text-[#2d523f] text-5xl font-bold text-center mb-16">
          Contact Us
        </h2>
        <p className="text-customGold mb-6">
          If you have any questions about our Privacy Policy or the way we handle your personal information, please reach out to us:
        </p>
        <ul className="space-y-4">
          {[
            'Phone: +94 773 938 932',
            'Email: info@paradisegolftours.com',
            'Location: Colombo/Sri Lanka',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-2 w-2 h-2 rounded-full shrink-0 bg-customGreen" />
              <span className="text-customDarkGray">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-[#2d523f] text-5xl font-bold text-center mb-16">
          Contact Us
        </h2>
        <p className="text-customGold">
          We may update this Privacy Policy periodically to reflect changes in legal or operational requirements. The latest version will
          always be available on our website.
        </p>
      </section>
    </div>
  )
}

