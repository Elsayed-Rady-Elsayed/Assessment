'use client';

import { Providers } from "./provider";
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./componants/navbar/navbar";
import Form from "./form/page";
import Table from "./users/page";
import Map from "./componants/map/map";
import TextEditor from "./componants/texteditor/texteditor";
import i18next from "i18next";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


i18next.init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        "home": "Home",
        "categories": "Categories",
        "contactus": "Contact Us",
        "about": "About",
        "part1": "Part 1",
        "part1Desc": "Utilize the provided Strapi Api from the assessment to post user data into your redux store you are required to add one user into users collection and display this data in a table using a get request ensure the implementation of redux for state management including both post request for adding a user and get requests for displaying the data in the table",
        "firstName": "First Name",
        "lastName": "Last Name",
        "phone": "Mobile Number",
        "Email": "Email",
        "send": "Send",
        "part2": "Part 2",
        "part2Desc": "implement a map using any library of your choice (leafflet is recommended).Search for coordinates of digifly company on google maps then place a tooltip at these coordinates ensure the tooltip styling matches the provided design below",
        "mapToolTip": "Digi Fly Company Welcomes You",
        "part3": "Part 3",
        "part3Desc": "implement a text editor that precisely replicates the UI styles provided. it's essential to create the undo and redo function from scratch, along with two additional features of your choice you may use any package but creating these functionalities from scratch will be an advantage ensure that all text editor functions are operational",
        "footer":"all copyright reserved"
      },
    },
    ar: {
      translation: {
        "home": "الصفحة الرئيسية",
        "categories": "الفئات",
        "contactus": "اتصل بنا",
        "about": "عن الموقع",
        "part1": "الجزء 1",
        "part1Desc": "استخدم واجهة برمجة التطبيقات المقدمة من Strapi من التقييم لنشر بيانات المستخدم في متجر Redux الخاص بك. يجب عليك إضافة مستخدم واحد إلى مجموعة المستخدمين وعرض هذه البيانات في جدول باستخدام طلب GET. تأكد من تنفيذ Redux لإدارة الحالة، بما في ذلك طلب POST لإضافة مستخدم وطلبات GET لعرض البيانات في الجدول.",
        "firstName": "الاسم الأول",
        "lastName": "الاسم الأخير",
        "phone": "رقم الجوال",
        "Email": "البريد الإلكتروني",
        "send": "إرسال",
        "part2": "الجزء 2",
        "part2Desc": "نفذ خريطة باستخدام أي مكتبة من اختيارك (يُوصى بـ Leaflet). ابحث عن إحداثيات شركة DigiFly على خرائط جوجل ثم ضع أداة التلميح عند هذه الإحداثيات. تأكد من أن تصميم التلميح يتطابق مع التصميم المطلوب أدناه.",
        "mapToolTip": "شركة Digi Fly ترحب بكم",
        "part3": "الجزء 3",
        "part3Desc": "نفذ محرر نصوص يكرر بدقة الأنماط المرئية المقدمة. من الضروري إنشاء وظائف التراجع والإعادة من البداية، مع ميزتين إضافيتين تختارها. يمكنك استخدام أي حزمة ولكن إنشاء هذه الوظائف من البداية سيكون ميزة. تأكد من أن جميع وظائف محرر النصوص تعمل بشكل صحيح.",
        "footer":"كل الحقوق محفوظه"
      }
      
    },
  },
});

function RootLayout({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState(i18next.language);
  const changeLang = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    i18next.changeLanguage(newLang);
  };
  return (
    <html>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`} dir={language === "en" ? "ltr" : "rtl"}>
    <Providers>
    <Navbar language={language} changeLang={changeLang} />
    <div className={`part1 mb-24 mt-[5%] container m-auto w-full`}>
      <div className={`header p-2 md:p-0`}>
      <div 
        className={`flex items-center gap-2 ${language === "en" ? "justify-start" : "justify-end"} ${language === "ar" ? "flex-row-reverse" : "flex-row"}`} 
        dir={language === "en" ? "ltr" : "rtl"} 
        >
          {language=="en"?<span className="block w-10 h-1 bg-violet-900 rounded mt-1"></span>:""}
          <span className="text-[30px] font-bold">{i18next.t("part1")}</span>
          {language=="ar"?<span className="block w-10 h-1 bg-violet-900 rounded mt-1"></span>:""}
        </div>
        <p className="text-sm md:w-3/4 mt-5 mb-10 text-neutral-500">
          {i18next.t("part1Desc")}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <Form language={language}/>
        <Table />
      </div>
    </div>

    <div className="part2 mb-24 mt-[5%]">
      <div className="header p-2 md:p-0 container m-auto">
      <div 
        className={`flex items-center gap-2 ${language === "en" ? "justify-start" : "justify-end"} ${language === "ar" ? "flex-row-reverse" : "flex-row"}`} 
        dir={language === "en" ? "ltr" : "rtl"} 
        >
          {language=="en"?<span className="block w-10 h-1 bg-violet-900 rounded mt-1"></span>:""}
          <span className="text-[30px] font-bold">{i18next.t("part2")}</span>
          {language=="ar"?<span className="block w-10 h-1 bg-violet-900 rounded mt-1"></span>:""}
        </div>
        <p className="text-sm md:w-3/4 mt-5 mb-10 text-neutral-500">
          {i18next.t("part2Desc")}
        </p>
      </div>
      <div>
        <Map />
      </div>
    </div>
    <div className="part3 mb-24 mt-[5%] container m-auto">
      <div className="header p-2 md:p-0">
      <div 
        className={`flex items-center gap-2 ${language === "en" ? "justify-start" : "justify-end"} ${language === "ar" ? "flex-row-reverse" : "flex-row"}`} 
        dir={language === "en" ? "ltr" : "rtl"} 
        >
          {language=="en"?<span className="block w-10 h-1 bg-violet-900 rounded mt-1"></span>:""}
          <span className="text-[30px] font-bold">{i18next.t("part3")}</span>
          {language=="ar"?<span className="block w-10 h-1 bg-violet-900 rounded mt-1"></span>:""}
        </div>
          <p className="text-sm md:w-3/4 mt-5 mb-10 text-neutral-500">
            {i18next.t("part3Desc")}
          </p>
        </div>
        <div className="w-full">
          <TextEditor />
        </div>
      </div>  
    </Providers>
    <footer className="bg-violet-900 text-white p-4 w-full relative text-center">
    {i18next.t("footer")}
    </footer>
    </body>
    </html>
  );
}

export default RootLayout;
