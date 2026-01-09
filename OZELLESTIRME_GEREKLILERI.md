# 🎯 Özelleştirmeniz Gerekenler

Bu dosya, sizin özelleştirmeniz gereken tüm kısımları içerir. Ben yapabildiğim değişiklikleri yaptım, şimdi sizin yapmanız gerekenler:

## ✅ Benim Yaptığım Değişiklikler

- ✅ Website adı: `"pointercrate"` olarak ayarlandı
- ✅ Author: `"stadust"` olarak ayarlandı  
- ✅ Keywords: `"geometry dash, demonlist, extreme demons, pointercrate"` olarak ayarlandı
- ✅ Footer metinleri: pointercrate.com'a uygun hale getirildi
- ✅ Logo path: `/static/core/images/logo.png` olarak ayarlandı
- ✅ Discord linki: `https://discord.gg/pointercrate` olarak ayarlandı
- ✅ Hardcoded URL'ler: Tüm `pointercrate.com` URL'leri zaten doğru

## 🔧 SİZİN ÖZELLEŞTİRMENİZ GEREKENLER

### 1. ⚠️ LOGO DOSYASI (ZORUNLU)

**Dosya:** Logo dosyası eksik!

**Yapmanız Gerekenler:**
1. Logo dosyanızı şu konuma ekleyin:
   ```
   pointercrate-core-pages/static/images/logo.png
   ```
2. Veya logo path'ini değiştirin:
   - Dosya: `pointercrate-example/src/main.rs` (satır 196)
   - Şu anki: `/static/core/images/logo.png`
   - Kendi logo path'inize göre değiştirin

**Not:** Logo olmadan navigation bar'da logo görünmeyecek!

---

### 2. 🌐 DOMAIN ADI (ÖNEMLİ - Eğer kendi domain'inizi kullanacaksanız)

**Dosyalar:**
- `pointercrate-demonlist-pages/src/overview.rs` (satır 55, 63, 71, 82)
- `pointercrate-demonlist-pages/src/demon_page.rs` (satır 85, 92, 99, 106, 245)
- `pointercrate-demonlist-pages/static/js/modules/demonlist.js` (satır 33)

**Şu anki durum:** Tüm URL'ler `https://pointercrate.com` olarak ayarlı

**Eğer kendi domain'inizi kullanacaksanız:**
- Tüm `https://pointercrate.com` referanslarını kendi domain'inizle değiştirin
- Örnek: `https://canadademonlist.com` gibi

**Eğer pointercrate.com gibi görünmesini istiyorsanız:**
- Hiçbir şey yapmanıza gerek yok, zaten doğru ayarlı ✅

---

### 3. 📱 SOCIAL MEDIA LİNKLERİ (Opsiyonel)

**Dosya:** `pointercrate-example/src/main.rs` (satır 249)

**Şu anki:**
```rust
.with_link("https://twitter.com/stadust1971", tr("footer-tweet.developer"));
```

**Değiştirmek isterseniz:**
- Twitter linkinizi değiştirin
- Discord, GitHub, vb. ek linkler ekleyebilirsiniz

---

### 4. 🔐 ENVIRONMENT VARIABLES (ZORUNLU)

**Dosya:** `.env` dosyası oluşturmanız gerekiyor

**Zorunlu:**
- `DATABASE_URL`: PostgreSQL connection string
- `SECRET_FILE`: Token imzalama için secret (veya `.secret` dosyası oluşturun)

**Opsiyonel:**
- `LIST_SIZE`: Varsayılan 50
- `EXTENDED_LIST_SIZE`: Varsayılan 100
- `DISCORD_WEBHOOK`: Record submission bildirimleri için
- `GD_CONNECTOR_ENDPOINT`: GD connector için
- `GOOGLE_CLIENT_ID`: OAuth2 için (eğer kullanacaksanız)

**Detaylar için:** `vercel-env-variables.md` dosyasına bakın

---

### 5. 🗄️ DATABASE MIGRATION (ZORUNLU)

**Yapmanız Gerekenler:**
```bash
# sqlx-cli'yi yükleyin
cargo install sqlx-cli --no-default-features --features native-tls,postgres

# Migration'ları çalıştırın
cargo sqlx migrate run
```

**Not:** `DATABASE_URL` environment variable'ının ayarlı olması gerekiyor!

---

### 6. 🏠 ANA SAYFA (Home Page) - EKSİK!

**Durum:** Ana sayfa kodu repository'de yok (açık kaynak değil)

**Yapmanız Gerekenler:**
1. Kendi ana sayfanızı oluşturun
2. Veya şu anki gibi `/` route'u `/demonlist/`'e yönlendiriyor (satır 56-58)

**Örnek ana sayfa eklemek için:**
- `pointercrate-example/src/main.rs` dosyasına yeni route ekleyin
- HTML template oluşturun

---

### 7. 📚 API DOKÜMANTASYONU - EKSİK!

**Durum:** API dokümantasyonu repository'de yok (açık kaynak değil)

**Yapmanız Gerekenler:**
- Kendi API dokümantasyonunuzu oluşturun
- Veya mevcut API endpoint'lerini dokümante edin

---

### 8. 📋 DEMONLIST GUIDELINES - EKSİK!

**Durum:** Demonlist kuralları/guidelines repository'de yok (açık kaynak değil)

**Yapmanız Gerekenler:**
- Kendi demonlist kurallarınızı oluşturun
- `/guidelines/` route'una sayfa ekleyin

**Not:** `pointercrate-demonlist-pages/src/lib.rs` dosyasında `rules_panel()` fonksiyonu var (satır 101-115), bu `/guidelines/` linkine yönlendiriyor ama sayfa yok!

---

### 9. 🎨 CSS ÖZELLEŞTİRMELERİ (Opsiyonel)

**Dosyalar:**
- `pointercrate-core-pages/static/css/`
- `pointercrate-demonlist-pages/static/css/`
- `pointercrate-user-pages/static/css/`

**Yapmanız Gerekenler:**
- Renkleri değiştirmek isterseniz CSS dosyalarını düzenleyin
- Kendi branding'inize uygun hale getirin

---

### 10. 🌍 ÇEVİRİLER (Opsiyonel)

**Dosyalar:**
- `pointercrate-core-pages/static/ftl/`
- `pointercrate-demonlist-pages/static/ftl/`
- `pointercrate-user-pages/static/ftl/`

**Yapmanız Gerekenler:**
- Türkçe çeviri eklemek için `tr-tr/` klasörü oluşturun
- Veya mevcut çevirileri düzenleyin

---

### 11. 🔧 GEOLOCATION PROVIDER (Production için)

**Dosya:** `pointercrate-example/src/main.rs` (satır 70-89)

**Şu anki durum:** `ipwho.is` kullanıyor (ücretsiz ama limitli: 1000 request/ay)

**Production için:**
- Daha profesyonel bir geolocation servisi kullanın
- Rate limiting ekleyin
- Veya kendi geolocation servisinizi implement edin

---

### 12. 🛡️ SECRET FILE (ZORUNLU - Production için)

**Dosya:** `.secret` dosyası oluşturun

**Yapmanız Gerekenler:**
```bash
# Güvenli bir secret oluşturun (64 byte random string)
openssl rand -base64 64 > .secret
```

**Veya environment variable olarak:**
- `SECRET_FILE` environment variable'ını ayarlayın

**⚠️ ÖNEMLİ:** Production'da güvenli bir secret kullanın! Debug için `insecure-do-not-use-in-prod` kullanmayın!

---

### 13. 🔒 MAINTENANCE MODE (Opsiyonel)

**Dosya:** `pointercrate-example/src/main.rs` (satır 165)

**Şu anki:**
```rust
MaintenanceFairing::new(false)  // Maintenance mode kapalı
```

**Açmak için:**
```rust
MaintenanceFairing::new(true)  // Maintenance mode açık
```

---

### 14. 📊 LIST SIZE AYARLARI (Opsiyonel)

**Environment Variables:**
- `LIST_SIZE`: Varsayılan 50
- `EXTENDED_LIST_SIZE`: Varsayılan 100

**Değiştirmek için:**
- Environment variables'da ayarlayın
- Veya `pointercrate-demonlist/src/config.rs` dosyasını düzenleyin

---

## 📝 ÖNCELİK SIRASI

### 🔴 YÜKSEK ÖNCELİK (Zorunlu):
1. ✅ Logo dosyası ekleyin
2. ✅ Environment variables ayarlayın (özellikle `DATABASE_URL`)
3. ✅ Secret file oluşturun
4. ✅ Database migration çalıştırın

### 🟡 ORTA ÖNCELİK (Önerilen):
5. ✅ Domain adını değiştirin (eğer kendi domain'inizi kullanacaksanız)
6. ✅ Ana sayfa oluşturun
7. ✅ Demonlist guidelines sayfası oluşturun

### 🟢 DÜŞÜK ÖNCELİK (Opsiyonel):
8. ✅ Social media linklerini özelleştirin
9. ✅ CSS özelleştirmeleri yapın
10. ✅ Çeviriler ekleyin
11. ✅ Geolocation provider'ı değiştirin

---

## 🚀 Hızlı Başlangıç Checklist

- [ ] Logo dosyasını ekle (`pointercrate-core-pages/static/images/logo.png`)
- [ ] `.env` dosyası oluştur ve `DATABASE_URL` ayarla
- [ ] `.secret` dosyası oluştur (güvenli bir değer ile)
- [ ] Database migration çalıştır (`cargo sqlx migrate run`)
- [ ] Domain adını değiştir (eğer kendi domain'inizi kullanacaksanız)
- [ ] Ana sayfa oluştur (opsiyonel ama önerilir)
- [ ] Demonlist guidelines sayfası oluştur (opsiyonel ama önerilir)
- [ ] Social media linklerini özelleştir (opsiyonel)
- [ ] Test et ve deploy et!

---

## 📞 Yardım

Sorun yaşarsanız:
- `CUSTOMIZATION_GUIDE_TR.md` dosyasına bakın
- `DEPLOYMENT_README_TR.md` dosyasına bakın
- Repository'nin issue'larına bakın

