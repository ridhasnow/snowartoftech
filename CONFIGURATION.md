# 📋 دليل التكوين - Configuration Guide

## مرحبا بك في Snow Art Of Tech! 🎮

هذا الملف يحتوي على جميع التعليمات اللازمة لتخصيص وتعديل الموقع حسب احتياجاتك.

---

## 1️⃣ إضافة صور البانر

### متطلبات الصور:
- **الحجم الموصى به**: 1920 × 400 بكسل
- **الصيغ المدعومة**: PNG, JPG
- **أسماء الملفات**: banner1.png, banner2.png, banner3.png

### الخطوات:
1. انسخ صورك إلى مجلد `/assets/`
2. تأكد من تسميتها بنفس الأسماء المقررة
3. الصور ستتغير تلقائياً كل ثانيتين

### إضافة صور بانر إضافية:
في ملف `js/script.js`، ابحث عن:
```javascript
const bannerImages = ['assets/banner1.png', 'assets/banner2.png', 'assets/banner3.png'];
```
أضف اسم صورتك الجديدة:
```javascript
const bannerImages = ['assets/banner1.png', 'assets/banner2.png', 'assets/banner3.png', 'assets/banner4.png'];
```

---

## 2️⃣ إضافة منتجات جديدة

### للمنتج الأول (Freefire):
- ✅ **مكتمل بالفعل** - لا تحتاج لأي تعديل

### للمنتجات 2-6:

#### الخطوة 1: إضافة صورة المنتج
1. ضع صورة المنتج في `/assets/`
2. مثال: `pubg.png`

#### الخطوة 2: تحديث HTML
في `index.html`، ابحث عن المنتج الثاني:
```html
<!-- Product 2 -->
<div class="product-card" onclick="openModal('modal-product2')">
    <div class="product-image placeholder">
        <span><!-- PLACEHOLDER: ADD IMAGE HERE --></span>
    </div>
    <div class="product-info">
        <h3><!-- PLACEHOLDER: ADD PRODUCT NAME --></h3>
    </div>
</div>
```

غيّره إلى:
```html
<!-- Product 2: PUBG Mobile -->
<div class="product-card" onclick="openModal('modal-product2')">
    <div class="product-image">
        <img src="assets/pubg.png" alt="PUBG Mobile">
    </div>
    <div class="product-info">
        <h3>PUBG Mobile UC</h3>
    </div>
</div>
```

#### الخطوة 3: تحديث Modal (نافذة المنتج)
في `index.html`، ابحث عن:
```html
<!-- MODAL: PRODUCT 2 -->
<div id="modal-product2" class="modal">
    ...
    <h2><!-- PLACEHOLDER: PRODUCT NAME --></h2>
    <div class="pricing-table">
        <!-- PLACEHOLDER: ADD PRICING HERE -->
    </div>
```

غيّره إلى:
```html
<!-- MODAL: PRODUCT 2 -->
<div id="modal-product2" class="modal">
    ...
    <h2>PUBG Mobile UC</h2>
    <div class="pricing-table">
        <div class="price-item">
            <span class="amount">60 UC</span>
            <span class="price">=</span>
            <span class="cost">3 د</span>
        </div>
        <div class="price-item">
            <span class="amount">300 UC</span>
            <span class="price">=</span>
            <span class="cost">15 د</span>
        </div>
        <div class="price-item">
            <span class="amount">600 UC</span>
            <span class="price">=</span>
            <span class="cost">30 د</span>
        </div>
        <div class="price-item">
            <span class="amount">3000 UC</span>
            <span class="price">=</span>
            <span class="cost">150 د</span>
        </div>
    </div>
```

**كرر نفس العملية للمنتجات 3-6**

---

## 3️⃣ إضافة أيقونات التواصل

### الأيقونات المطلوبة:
1. **whatsapp.png** - ✅ متضمن
2. **facebook.png** - ✅ متضمن
3. **youtube.png** - ✅ متضمن
4. **youtube2.png** - ✅ متضمن
5. **facebook2.png** - ✅ متضمن
6. **d17.png** - ✅ متضمن

### متطلبات الأيقونات:
- **الحجم**: 200 × 200 بكسل (أو مربع)
- **الصيغة**: PNG (خلفية شفافة مفضلة)
- **المجلد**: `/assets/`

---

## 4️⃣ إضافة أخبار

### طريقة سهلة:
في `js/script.js`، في نهاية الملف، أضف:
```javascript
addNewsArticle('عنوان الخبر', 'assets/news-image.png', 'محتوى الخبر الكامل هنا');
```

### مثال:
```javascript
addNewsArticle(
    'بدء بطولة Freefire العالمية',
    'assets/news1.png',
    'ستبدأ بطولة Freefire العالمية يوم الأحد القادم. المشاركة مفتوحة للجميع!'
);
```

---

## 5️⃣ تغيير الألوان

### الألوان الرئيسية موجودة في `css/style.css`:

```css
/* خلفية الموقع */
body { background-color: #DDDDDD; }

/* لون شريط العنوان */
.store-header { background-color: #686868; }

/* لون النص الأساسي */
.store-header h2 { color: #0B0A0A; }

/* لون زر التواصل */
.contact-btn { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); }
```

---

## 6️⃣ تعديل روابط التواصل

### روابط WhatsApp:
ابحث عن في `index.html` و `js/script.js`:
```
https://wa.me/+21628351884
```
استبدل الرقم برقمك الخاص.

### روابط التواصل الأخرى:
في `index.html`، قسم Contact Section:
```html
<a href="https://wa.me/YOUR_NUMBER" target="_blank">...</a>
```

---

## 7️⃣ نصائح لتحسين الأداء

### تحسين الصور:
1. اضغط حجم الصور قبل الرفع
2. استخدم أداة مثل TinyPNG أو Compressor
3. احفظ الصور بصيغة ويب للأداء الأفضل

### تحسين السرعة:
1. قلل عدد الصور في البانر إذا أمكن
2. استخدم صور WebP بدلاً من PNG
3. قلل حجم CSS و JavaScript

---

## 8️⃣ نشر الموقع

### على Render:
1. ادخل إلى https://render.com
2. اختر "New Site"
3. اختر "Static Site"
4. اربط مستودعك على GitHub
5. اضبط Build Settings:
   - **Build Command**: (اتركه فارغاً)
   - **Publish Directory**: ./
6. انقر "Create Web Service"

### على Netlify:
1. ادخل إلى https://netlify.com
2. انقر "Add New Site"
3. اختر "Import an existing project"
4. اختر GitHub
5. اختر المستودع
6. انقر "Deploy Site"

---

## 9️⃣ حل المشاكل الشائعة

### المشكلة: الصور لا تظهر
**الحل**: تأكد من:
- اسم الملف صحيح بالضبط (حروف كبيرة وصغيرة مهمة)
- الصورة موجودة في مجلد `/assets/`
- الامتداد صحيح (.png أو .jpg)

### المشكلة: الموقع بطيء
**الحل**:
- اضغط حجم الصور
- استخدم صيغ مضغوطة
- تحقق من سرعة الإنترنت

### المشكلة: التصميم غير متناسق على الهاتف
**الحل**: 
- استخدم أدوات تطوير المتصفح (F12)
- اختر "Toggle Device Toolbar"
- اختبر على أحجام مختلفة

---

## 🔟 الدعم والمساعدة

إذا واجهت أي مشاكل:
1. تحقق من ملف README.md
2. تحقق من أسماء الملفات والمسارات
3. تحقق من أن جميع الأقواس والفواصل صحيحة في الكود

---

**استمتع بموقعك الاحترافي!** 🎉