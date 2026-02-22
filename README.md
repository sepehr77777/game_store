# پروژه نمایش بازی‌ها - Next.js + RAWG API

این پروژه یک وب‌سایت ساده با **Next.js 13** است که بازی‌ها را از **RAWG API** می‌گیرد و نمایش می‌دهد.

---

## امکانات

- نمایش لیست بازی‌ها از RAWG API
- نمایش تصویر، نام، ژانر، پلتفرم و تاریخ انتشار بازی‌ها
- صفحه جزئیات بازی
- امکان جستجو و مرتب‌سازی (اختیاری)
- طراحی ساده و قابل توسعه

---

## پیش‌نیازها

- Node.js نسخه پایدار (>=18)
- npm یا yarn
- Next.js 13+

---

## نصب و اجرای پروژه

۱. کلون کردن ریپو:

```bash
git clone https://github.com/<username>/<repo-name>.git
cd <repo-name>

۲. نصب پکیج‌ها:

npm install
# یا
yarn

۳. اضافه کردن API Key در فایل .env.local:

NEXT_PUBLIC_RAWG_API_KEY=کلید_API_شما

توجه: .env.local در .gitignore قرار دارد و نباید روی GitHub گذاشته شود.

۴. اجرای پروژه:

npm run dev
# یا
yarn dev

۵. باز کردن مرورگر:

http://localhost:3000/games
ساختار پروژه
src/
 ├─ app/
 │   ├─ layout.tsx         # لایه اصلی پروژه
 │   ├─ page.tsx           # صفحه اصلی
 │   ├─ games/page.tsx     # صفحه لیست بازی‌ها
 │   ├─ games/[id]/page.tsx # صفحه جزئیات بازی
 ├─ lib/
 │   └─ api.ts             # فایل کمکی برای fetch از RAWG
 └─ ...
نکات مهم

برای استفاده از RAWG API نیاز به API Key دارید.

Fetch داده‌ها با getServerSideProps یا fetch در Next.js انجام می‌شود.

پروژه آماده توسعه و اضافه کردن قابلیت‌های جدید مثل فیلتر و مرتب‌سازی است.

نویسنده

Sepehr Rahimi

ایمیل: 3pehrrahimi77@gmail.com


---

اگر بخوای می‌تونم یه **نسخه حرفه‌ای با Badge و لینک API و تصویر پروژه** هم بسازم تا GitHub خیلی حرفه‌ای به نظر بیاد و برای پرتفولیو هم مناسب باشه.  

میخوای بسازم؟
