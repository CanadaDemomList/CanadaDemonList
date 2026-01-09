# 🚂 Railway'de Hızlı Yayınlama (ÖNERİLEN!)

Railway, Rocket uygulamaları için **Vercel'den çok daha iyi**! Hiçbir şey kurmaya gerek yok.

## 🎯 Neden Railway?

- ✅ Rocket için optimize edilmiş
- ✅ PostgreSQL otomatik kurulur
- ✅ Hiçbir şey kurmaya gerek yok
- ✅ Çok daha kolay
- ✅ Ücretsiz tier var (500 saat/ay)
- ✅ Sorunsuz çalışır

---

## 📋 ADIM ADIM YAYINLAMA (5 Dakika!)

### Adım 1: GitHub'a Push Yapın

1. Kodunuzu GitHub'a push edin (eğer yapmadıysanız)
2. Repository'nizin public veya private olduğundan emin olun

### Adım 2: Railway Hesabı Oluşturun

1. **https://railway.app** adresine gidin
2. "Start a New Project" tıklayın
3. GitHub ile giriş yapın
4. Railway'e GitHub erişimi verin

### Adım 3: Proje Oluşturun

1. "New Project" tıklayın
2. "Deploy from GitHub repo" seçin
3. Repository'nizi seçin
4. Railway otomatik olarak:
   - Rust projesini algılar
   - Build eder
   - Deploy eder

### Adım 4: PostgreSQL Ekle (Otomatik!)

1. Railway Dashboard'da "New" butonuna tıklayın
2. "Database" > "PostgreSQL" seçin
3. Railway otomatik olarak:
   - PostgreSQL kurar
   - `DATABASE_URL` environment variable'ını ayarlar
   - Connection string'i hazırlar

**Hiçbir şey yapmanıza gerek yok!** Otomatik! 🎉

### Adım 5: Environment Variables (Opsiyonel)

Railway Dashboard > Variables bölümünden ekleyin:

```
LIST_SIZE=50
EXTENDED_LIST_SIZE=100
DISCORD_WEBHOOK=https://discord.com/api/webhooks/... (opsiyonel)
```

**Not:** `DATABASE_URL` zaten otomatik ayarlanmış!

### Adım 6: Secret File (ÖNEMLİ!)

Railway'de `.secret` dosyası oluşturamazsınız. **Çözüm:**

1. **Güvenli bir secret oluşturun:**
   - Online: https://randomkeygen.com (64 karakter)
   - Veya terminal: `openssl rand -base64 64`

2. **Railway Dashboard > Variables:**
   ```
   SECRET=your-64-character-random-string-here
   ```

3. **Veya:** Railway'de "Generate" butonu ile otomatik oluşturun

### Adım 7: Database Migration

**Railway CLI ile (kolay):**

1. **Railway CLI yükleyin:**
   ```bash
   npm i -g @railway/cli
   ```

2. **Railway'ye bağlanın:**
   ```bash
   railway login
   ```

3. **Projeyi link edin:**
   ```bash
   railway link
   ```
   (Proje adını seçin)

4. **Migration çalıştırın:**
   ```bash
   railway run cargo sqlx migrate run
   ```

**Bitti!** 🎉

### Adım 8: Domain Ayarlama (Opsiyonel)

1. Railway Dashboard > Settings > Domains
2. "Generate Domain" tıklayın
3. Veya kendi domain'inizi ekleyin

---

## ✅ BİTTİ!

Artık siteniz yayında! Railway otomatik olarak:
- ✅ Build eder
- ✅ Deploy eder
- ✅ PostgreSQL kurar
- ✅ Environment variables ayarlar
- ✅ Domain verir

**Hiçbir şey kurmaya gerek yoktu!** 🚀

---

## 🆘 Sorun Giderme

### Build Hatası
- Railway logs'larına bakın (Dashboard > Deployments > Logs)
- Rust toolchain doğru yüklendi mi kontrol edin

### Database Connection Hatası
- `DATABASE_URL` otomatik ayarlanmış mı kontrol edin
- PostgreSQL servisi çalışıyor mu kontrol edin

### Secret File Hatası
- `SECRET` environment variable'ı ayarlı mı kontrol edin
- 64 karakter uzunluğunda mı kontrol edin

---

## 📊 Railway vs Vercel

| Özellik | Vercel | Railway |
|--------|--------|---------|
| Kurulum | ⚠️ Karmaşık | ✅ Otomatik |
| Rocket | ❌ Sorunlu | ✅ Mükemmel |
| PostgreSQL | ⚠️ Manuel | ✅ Otomatik |
| Build | ⚠️ Uzun | ✅ Normal |
| Sorun Riski | ⚠️ Yüksek | ✅ Düşük |
| Kolaylık | ⚠️ Zor | ✅ Çok Kolay |

**Railway kazanır!** 🏆

---

## 🎯 SONUÇ

**Railway kullanın!** Çok daha kolay, sorunsuz ve Rocket için optimize edilmiş! 🚂

