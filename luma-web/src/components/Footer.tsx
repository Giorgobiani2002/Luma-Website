"use client";

import React from "react";

export default function Footer() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-3">ჩვენ შესახებ</h2>
        <p className="text-lg leading-relaxed">
          ჩვენი მიზანია უნაყოფო წყვილებს მივცეთ შანსი, გახდნენ მშობლები.
          ჩვენი კლინიკა მუშაობს უმაღლესი სტანდარტებით, პროფესიონალი ექიმების
          ზედამხედველობით. დონორებისთვის ვუზრუნველყოფთ უსაფრთხოებას,
          კონფიდენციალურობას და ღირსეულ ანაზღაურებას.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">როგორ მუშაობს </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>რეგისტრაცია – შეავსე მარტივი ფორმა.</li>
          <li>სამედიცინო შემოწმება – ანალიზები და კონსულტაცია.</li>
          <li>სტიმულაცია – მოკლე პერიოდი ჰორმონალური პრეპარატებით.</li>
          <li>დონაცია – მცირე და უმტკივნეულო პროცედურა ანესთეზიით.</li>
          <li>ანაზღაურება – მიღე 3000–5000$ დაუყოვნებლივ.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">ვისთვის არის ეს?</h2>
        <p className="text-lg">
          თუ ხარ 18–35 წლის, ჯანმრთელი და გაქვს სურვილი დაეხმარო უნაყოფო
          წყვილებს, მაშინ ეს პროგრამა შენთვისაა.
        </p>{" "}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">
          უსაფრთხოება და კონფიდენციალურობა
        </h2>
        <p className="text-lg">
          ყველა პროცესი ტარდება საერთაშორისო სტანდარტებით. შენი მონაცემები
          დაცულია და არასოდეს გაიცემა მესამე პირზე. შენ ხარ ჩვენი მთავარი
          პრიორიტეტი.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">კონტაქტი</h2>
        <p className="text-lg">ტელეფონი: +995 XXX XX XX XX</p>
        <p className="text-lg">ელფოსტა: clinic@example.com</p>
        <div className="flex space-x-4 mt-3">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            WhatsApp
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">
            Viber
          </button>
        </div>
      </section>
    </div>
  );
}
