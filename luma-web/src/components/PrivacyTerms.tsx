"use client";

type PrivacyTermsProps = {
  onClose: () => void;
};

export default function PrivacyTerms({ onClose }: PrivacyTermsProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0  bg-opacity-40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative max-w-3xl mx-4 p-6 bg-white rounded-lg shadow-lg z-10 overflow-y-auto max-h-[80vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl cursor-pointer"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold mb-4 text-center">
          ლუმას დონორების კონფიდენციალურობის პოლიტიკა და წესები
        </h1>

        <div className="space-y-4 text-gray-700">
          <p>
            ლუმას პლატფორმაზე დონორად რეგისტრაციით, თქვენ ეთანხმებით პირადი
            ინფორმაციის შეგროვებას, გამოყენებას და დაცვას შემდეგი წესებით:
          </p>
          <p>
            <strong>1. უფლებამოსილება :</strong> თქვენ ადასტურებთ, რომ თქვენი
            ასაკი მინიმუმ 18 წელია.
          </p>
          <p>
            <strong>2. პირადი ინფორმაციის შეგროვება და გამოყენება:</strong>{" "}
            რეგისტრაციის დონორის რეგისტრაციის ფორმის შევსებით, თქვენ ეთანხმებით
            თქვენი ინფორმაციის, მათ შორის, თქვენი სახელის, ასაკის, სამედიცინო
            ისტორიისა და ფოტოების შეგროვებასა და გამოყენებას, იმისათვის, რომ
            თქვენი პროფილი იყოს ნაჩვენები პოტენციურ მსურველზე, რომლებსაც
            შესაძლოა ჰქონდეს თქვენი კვერცხუჯრედის ან სპერმის შეძენის ინტერესი.
          </p>
          <p>
            <strong>3. ინფორმაციის გამოყენება:</strong> თქვენი ინფორმაცია
            გამოიყენება მხოლოდ პროფილის შექმნისა და მიმღებებთან შესაბამისობის
            უზრუნველსაყოფად.
          </p>
          <p>
            <strong>4. კონფიდენციალურობა და უსაფრთხოება:</strong> თქვენი
            მონაცემები დაცულია და მესამე მხარეს არასდროს მიეწოდება თქვენი
            თანხმობის გარეშე.
          </p>

          <p>
            <strong>5. ფოტოების გამოყენებაზე თანხმობა:</strong> თქვენი სურათების
            ატვირთვით, ადასტურებთ, რომ სურათებზე უფლებები თქვენ გეკუთვნით და
            თანხმობას გვაძლევთ მათი გამოყენებისთვის, რათა თქვენი პროფილი
            გამოჩნდეს კლიენტებისთვის ხილვად პლატფორმაზე.
          </p>
          <p>
            <strong>6. მიღება:</strong> რეგისტრაციის დასრულებით, თქვენ
            ადასტურებთ, რომ ხართ მინიმუმ 18 წლის და ეთანხმებით ამ წესებს.
          </p>
        </div>
      </div>
    </div>
  );
}

// ლუმას დონორების კონფიდენციალურობის პოლიტიკა და წესები

// ლუმას პლატფორმაზე დონორად რეგისტრაციით, თქვენ ეთანხმებით პირადი ინფორმაციის შეგროვებას, გამოყენებას და დაცვას შემდეგი წესებით:

// 1. უფლებამოსილება
// თქვენ ადასტურებთ, რომ თქვენი ასაკი მინიმუმ 18 წელია. დონორად რეგისტრაცია და მონაწილეობის მიღება დაუშვებელია პირებისთვის, რომლებიც ვერ აკმაყოფილებენ ამ ასაკობრივ მოთხოვნას.

// 2. პირადი ინფორმაციის შეგროვება
// რეგისტრაციის პროცესში შეგვიძლია შეგროვდეს პირადი ინფორმაცია, მათ შორის თქვენი სახელი, ასაკი, სამედიცინო ისტორია და ფოტოები. ეს ინფორმაცია გამოიყენება მხოლოდ დონორების პოტენციურ მიმღებებთან შესახვედრად.

// 3. ინფორმაციის გამოყენება
// თქვენი ინფორმაცია გამოიყენება მხოლოდ შემდეგი მიზნებისთვის:

// თქვენი დონორის პროფილის შექმნა პლატფორმაზე.

// რეგისტრირებული კლიენტებისა და მიმღებებისთვის თქვენი პროფილის ჩვენება.

// საჭიროების შემთხვევაში დონორებსა და მიმღებებს შორის კომუნიკაციის უზრუნველყოფა.

// 4. კონფიდენციალურობა და უსაფრთხოება
// ლუმა მკაცრად იცავს თქვენს მონაცემებს. თქვენი ინფორმაცია მესამე მხარეს არასდროს მიეწოდება თქვენი თანხმობის გარეშე, გარდა იმ შემთხვევისა, როდესაც ეს ნებადართულია კანონით. მონაცემების დაცვისთვის ჩვენ ვიყენებთ ტექნიკურ და ადმინისტრაციულ ზომებს.

// 5. პროფილის ხილვადობა
// თქვენი პროფილი, მათ შორის პირადი ინფორმაცია და ფოტოსურათები, ხელმისაწვდომია მხოლოდ რეგისტრირებული კლიენტებისთვის, რომლებიც დონორებს ეძებენ. თქვენი ინფორმაცია პლატფორმის გარეთ საჯაროდ არ გამოჩნდება.

// 6. თანხმობის მოხსნა
// თქვენ შეგიძლიათ ნებისმიერ დროს მოიხსნათ თანხმობა პლატფორმასთან დაკავშირებით. თანხმობის მოხსნის შემდეგ, თქვენი პროფილი გაუქმდება და მონაცემები აღარ იქნება ხილვადი პოტენციური მიმღებლებისთვის.

// 7. ფოტოების გამოყენებაზე თანხმობა
// ფოტოების ატვირთვით, თქვენ ადასტურებთ, რომ ფლობთ მათზე უფლებას და ეთანხმებით ლუმას გამოყენებას მათ პროფილის ჩვენების მიზნით.

// 8. მიღება
// რეგისტრაციის დასრულებით და ველის „მოვიხსენი პირადი ინფორმაციისა და წესების მიღება“ მონიშვნისას, თქვენ ადასტურებთ, რომ ხართ მინიმუმ 18 წლის და ეთანხმებით ამ კონფიდენციალურობის პოლიტიკასა და წესებს.

// Privacy Policy and Terms for Luma Donors

// By registering as a donor on the Luma platform, you agree to the following terms regarding the collection, use, and protection of your personal information:

// 1. Eligibility
// You confirm that you are at least 18 years old. Only individuals meeting this age requirement can register and participate as donors.

// 2. Personal Data Collection
// During registration, we may collect personal information, including your name, age, medical history, and photographs. This information is used solely for the purpose of matching donors with potential recipients.

// 3. How We Use Your Information
// Your information is used exclusively to:

// Create your donor profile on our platform.

// Allow registered clients or recipients to view and evaluate potential donors.

// Facilitate communication between donors and recipients, when necessary.

// 4. Confidentiality and Security
// Luma treats your data with strict confidentiality. Your personal information is never shared with third parties outside the platform without your explicit consent, except when required by law. We use technical and administrative measures to protect your data from unauthorized access.

// 5. Profile Visibility
// Only registered clients seeking donors can view your profile, which includes your personal details and submitted images. Your data will not be publicly accessible beyond the platform.

// 6. Right to Withdraw
// You can withdraw your consent at any time by contacting us. Upon withdrawal, your profile will be deactivated, and your data will no longer be visible to potential recipients.

// 7. Consent to Use Images
// By submitting images, you confirm that you own the rights to them and allow Luma to display them on your profile for matching purposes.

// 8. Acceptance
// By completing registration and checking the “Accept Terms and Privacy Policy” checkbox, you confirm that you are at least 18 years old and agree to this privacy policy and terms.
