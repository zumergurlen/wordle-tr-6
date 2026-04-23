# TSE Assistant

Denetimde TSE standartları ve fabrikada girdiğin ürün ölçü/tolerans kayıtlarını telefonda aramak için küçük bir web uygulaması. Veriler cihazda saklanır (IndexedDB), istersen JSON ile yedekleyip başka yere taşırsın. PWA ile offline kabuk desteklenir.

## Gerekenler

- **Node.js 18 veya üzeri** (LTS önerilir): [https://nodejs.org/](https://nodejs.org/)  
  Kurulumdan sonra yeni bir terminal aç; `node -v` ve `npm -v` komutlarının çalıştığını kontrol et.

## Kurulum (bilgisayarda geliştirme)

Proje klasöründe sırayla:

```bash
npm install
npm run dev
```

Tarayıcıda açılır: **http://localhost:5173**

Durdurmak için terminalde `Ctrl+C`.

## Üretim sürümü (siteye yakın test)

```bash
npm run build
npm run preview
```

Varsayılan adres: **http://localhost:4173**  
`dist` klasörünün içeriğini herhangi bir statik hostinge (Netlify, Vercel, kendi sunucun) yükleyebilirsin.

## Telefondan erişim

1. **Geliştirme sırasında:** Bilgisayar ve telefon aynı Wi‑Fi’de olsun. `npm run dev` çalışırken Vite çıktısında görünen **Network** adresini kullan (ör. `http://192.168.x.x:5173`). Windows güvenlik duvarı sorarsa izin ver.
2. **Kalıcı kullanım:** `npm run build` ile oluşan `dist` dosyalarını **HTTPS** ile yayınla. iOS’ta PWA için HTTPS genelde şarttır.

## iPhone’da uygulama gibi kullanmak (App Store yok)

Bu proje **yerel bir “app” değil; web uygulaması**. iOS’ta en mantıklı yol **Ana Ekrana Ekle** ile **PWA** kullanmaktır; sadece sen kullanacaksan genelde **App Store’a gerek yoktur**.

### 1) Mutlaka HTTPS’li bir adres

- `npm run build` çıktısını Netlify, Cloudflare Pages, Vercel vb. ücretsiz statik hostinge yükle.  
- Telefonda siteyi **`https://...`** adresinden aç.  
- Sadece `http://` veya sadece bilgisayarın yerel IP’si ile “uygulama” hissi ve önbellek sınırlı kalabilir.

### 2) Safari ile ana ekrana ekle

1. iPhone’da **Safari** ile siteyi aç (mümkünse Safari kullan).  
2. Ortadaki **Paylaş** (kare ve ok) simgesine bas.  
3. Aşağı kaydır → **Ana Ekrana Ekle**.  
4. İsim ver (örn. **TSE Assistant**) → **Ekle**.

Ana ekrandaki ikona bastığında sayfa **Safari çubuğu olmadan**, tam ekrana yakın (**standalone**) açılır; bu, pratikte “kendi uygulamam” hissidir.

### 3) Offline

- En az bir kez **internet varken** uygulamayı açıp tam yüklenmesini bekle (PWA önbelleği için).  
- Sonra bazı ekranlar / son yüklenen kabuk **bağlantı olmadan** da açılabilir; verilerin zaten cihazda (IndexedDB).

### App Store’da gerçek “uygulama” ister misin?

- **Capacitor** veya **Cordova** ile aynı siteyi WebView içine sarabilirsin; Apple **Geliştirici Programı** (ücretli) ve imzalama / TestFlight veya Mağaza süreci gerekir.  
- Sadece kendin için ise çoğu zaman **Ana Ekrana Ekle** yeterlidir.

### Ana ekran ikonu

Projede `public/apple-touch-icon.svg` (180 mantıksal boyut) ve `public/favicon.svg` var; `index.html` bunlara bağlı. Eski iOS sürümlerinde PNG tercih edilirse: **180×180 px** `public/apple-touch-icon.png` ekleyip `index.html` içindeki `apple-touch-icon` satırını bu dosyaya çevir.

### Sürüm

Arayüzde **Sürüm x.y.z** metni `package.json` içindeki `version` ile aynıdır. Yayın öncesi sürümü oradan artırman yeterli; yeniden `npm run build` al.

### PWA kontrol listesi (Ana ekrana ekle)

- [ ] Yayın adresi **HTTPS**
- [ ] `npm run build` çıktısı hostinge yüklü
- [ ] iPhone’da **Safari** ile aç → Paylaş → **Ana Ekrana Ekle**
- [ ] İlk açılışta internet varken bir kez tam yükle (önbellek)

## Veri ve yedek

- Kayıtlar ve eklediğin PDF’ler **telefonun/tarayıcının yerel veritabanında** durur; tarayıcı verisini silersen gider.
- Uygulama içinde **Kayıtlar & PDF ekle → Yedek**: **JSON dışa aktar** ile yedek al; **İçe aktar** ile başka cihazda veya yeni kurulumda geri yükle.

## Sorun giderme

| Sorun | Ne yapmalı |
|--------|------------|
| `npm` tanınmıyor | Node.js’i kur, terminali kapatıp yeniden aç. |
| Telefondan PC’ye bağlanamıyorum | Aynı Wi‑Fi, güvenlik duvarı, doğru IP ve `:5173` portu. |
| PWA / offline tam çalışmıyor | Önce HTTPS’te yayınla; localhost’ta PWA davranışı sınırlı olabilir. |

## Komut özeti

| Komut | Açıklama |
|--------|-----------|
| `npm install` | Bağımlılıkları yükler |
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | `dist` üretir |
| `npm run preview` | `dist`’i yerelde test eder |
