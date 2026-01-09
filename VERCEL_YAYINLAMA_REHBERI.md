# 🚀 Vercel'de Yayınlama Rehberi

## ⚠️ ÖNEMLİ UYARI: Sorunlar Olabilir!

**Rocket framework'ü serverless için tasarlanmamıştır!** Vercel'de yayınlarken şu sorunlarla karşılaşabilirsiniz:

### 🔴 Potansiyel Sorunlar:

1. **Serverless Uyumsuzluğu**
   - Rocket, sürekli çalışan bir web sunucusu bekler
   - Vercel serverless (her request'te yeni instance)
   - Bu uyumsuzluk sorunlara yol açabilir

2. **Cold Start Sorunları**
   - Her request'te uygulama başlatılabilir
   - İlk request çok yavaş olabilir (10-30 saniye)
   - Database connection pool sorunları

3. **Build Süresi**
   - Rust projeleri büyük ve build süresi uzun
   - Vercel'in build timeout limiti (max 45 dakika)
   - Workspace yapısı build'i daha da uzatabilir

4. **Static Files**
   - Static dosyaların doğru servis edilmesi sorunlu olabilir
   - FileServer mount'ları çalışmayabilir

5. **Database Connection**
   - Connection pool'lar serverless'da sorunlu
   - Her request'te yeni connection gerekebilir

## ✅ Alternatif Çözüm: Railway (ÖNERİLEN)

Rocket uygulamaları için **Railway** çok daha uygun:
- ✅ Rust için optimize edilmiş
- ✅ Sürekli çalışan sunucu
- ✅ PostgreSQL entegrasyonu
- ✅ Otomatik deploy
- ✅ Ücretsiz tier mevcut

**Railway ile deploy:**
1. https://railway.app hesabı oluştur
2. Yeni proje > GitHub repo seç
3. PostgreSQL servisi ekle
4. Environment variables ayarla
5. Otomatik deploy!

---

## 📋 Vercel'de Yayınlama Adımları (Deneysel)

Eğer yine de Vercel'de denemek istiyorsanız:

### Adım 1: Vercel Hesabı ve Proje

1. [Vercel](https://vercel.com) hesabı oluşturun
2. Dashboard'a gidin
3. "Add New Project" tıklayın
4. GitHub repository'nizi bağlayın
5. Projeyi seçin

### Adım 2: Build Ayarları

Vercel otomatik olarak `vercel.json` dosyasını kullanacak, ama manuel ayar gerekebilir:

**Framework Preset:** Other (veya boş bırakın)

**Build Command:**
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && source $HOME/.cargo/env && cargo build --release --package pointercrate-example
```

**Output Directory:** `target/release`

**Install Command:** (boş bırakabilirsiniz)

### Adım 3: Environment Variables

Vercel Dashboard > Settings > Environment Variables:

**Zorunlu:**
```
DATABASE_URL=postgresql://user:password@host:port/database
```

**Opsiyonel:**
```
ROCKET_ADDRESS=0.0.0.0
ROCKET_PORT=8080
LIST_SIZE=50
EXTENDED_LIST_SIZE=100
DISCORD_WEBHOOK=https://discord.com/api/webhooks/...
SECRET_FILE=.secret
```

### Adım 4: PostgreSQL Veritabanı

**Seçenek 1: Vercel Postgres (Önerilir)**
1. Vercel Dashboard > Storage
2. "Create Database" > "Postgres"
3. Connection string'i kopyalayın
4. `DATABASE_URL` olarak ayarlayın

**Seçenek 2: Harici PostgreSQL**
- Supabase (ücretsiz tier)
- Neon (ücretsiz tier)
- Railway Postgres
- Connection string'i `DATABASE_URL` olarak ayarlayın

### Adım 5: Database Migration

**ÖNEMLİ:** Migration'ları Vercel'de çalıştıramazsınız! 

**Çözüm:**
1. Local'de migration çalıştırın:
```bash
cargo install sqlx-cli --no-default-features --features native-tls,postgres
export DATABASE_URL="your-vercel-postgres-url"
cargo sqlx migrate run
```

2. Veya migration script'i Vercel'de çalıştırın (karmaşık)

### Adım 6: Secret File

Vercel'de `.secret` dosyası oluşturamazsınız!

**Çözüm:**
1. Secret'ı environment variable olarak ekleyin:
```
SECRET=your-64-byte-random-string-here
```

2. Veya `SECRET_FILE` environment variable'ını kullanın (ama dosya yok)

**Not:** Kodda `.secret` dosyası okunuyor, bu Vercel'de çalışmayabilir!

### Adım 7: Deploy

1. "Deploy" butonuna tıklayın
2. Build süreci başlar (uzun sürebilir - 10-30 dakika)
3. Build başarılı olursa URL alırsınız
4. Build başarısız olursa logs'a bakın

---

## 🔧 Beklenen Sorunlar ve Çözümleri

### Sorun 1: Build Timeout

**Hata:** "Build exceeded maximum duration"

**Çözüm:**
- Vercel Pro plan gerekebilir (daha uzun timeout)
- Veya build'i optimize edin
- Veya Railway kullanın (önerilir)

### Sorun 2: Handler Bulunamadı

**Hata:** "Function not found" veya "404"

**Çözüm:**
- `api/handler.rs` dosyası çalışır durumda değil
- Rocket'i serverless'a adapte etmek gerekiyor
- Bu çok karmaşık, Railway kullanın (önerilir)

### Sorun 3: Database Connection Hatası

**Hata:** "Connection refused" veya "Connection timeout"

**Çözüm:**
- `DATABASE_URL` doğru mu kontrol edin
- Vercel Postgres'in public access açık mı kontrol edin
- Connection pool ayarlarını kontrol edin

### Sorun 4: Static Files Çalışmıyor

**Hata:** CSS/JS dosyaları yüklenmiyor

**Çözüm:**
- `vercel.json`'daki routes'ları kontrol edin
- Static dosyaların path'lerini kontrol edin
- CDN ayarlarını kontrol edin

### Sorun 5: Secret File Hatası

**Hata:** "Unable to open secret file"

**Çözüm:**
- Secret'ı environment variable olarak kullanın
- Veya kodda secret okuma kısmını değiştirin

---

## 🎯 ÖNERİLEN YOL: Railway Kullanın!

Vercel yerine **Railway** kullanmanızı şiddetle öneririm:

### Railway Avantajları:
- ✅ Rocket için optimize edilmiş
- ✅ Sürekli çalışan sunucu (serverless değil)
- ✅ PostgreSQL entegrasyonu
- ✅ Otomatik deploy
- ✅ Ücretsiz tier (500 saat/ay)
- ✅ Daha hızlı build
- ✅ Daha az sorun

### Railway ile Deploy:

1. **Hesap Oluştur:**
   - https://railway.app
   - GitHub ile giriş yap

2. **Yeni Proje:**
   - "New Project" > "Deploy from GitHub repo"
   - Repository'nizi seçin

3. **PostgreSQL Ekle:**
   - "New" > "Database" > "PostgreSQL"
   - Otomatik olarak `DATABASE_URL` ayarlanır

4. **Environment Variables:**
   - Railway otomatik olarak Rust projesini algılar
   - Sadece ekstra variables ekleyin:
     - `LIST_SIZE=50`
     - `EXTENDED_LIST_SIZE=100`
     - `DISCORD_WEBHOOK=...` (opsiyonel)

5. **Deploy:**
   - Railway otomatik olarak deploy eder
   - Build başarılı olursa URL alırsınız

6. **Migration:**
   - Railway CLI ile:
   ```bash
   npm i -g @railway/cli
   railway login
   railway link
   railway run cargo sqlx migrate run
   ```

**Railway çok daha kolay ve sorunsuz!** 🚀

---

## 📊 Karşılaştırma

| Özellik | Vercel | Railway |
|--------|--------|---------|
| Rocket Desteği | ❌ Sorunlu | ✅ Mükemmel |
| Build Süresi | ⚠️ Uzun (timeout riski) | ✅ Normal |
| Cold Start | ❌ Var (yavaş) | ✅ Yok |
| Database | ⚠️ Manuel kurulum | ✅ Otomatik |
| Static Files | ⚠️ Sorunlu | ✅ Çalışıyor |
| Ücretsiz Tier | ✅ Var | ✅ Var |
| Kolaylık | ❌ Zor | ✅ Kolay |

---

## 🎯 SONUÇ

**Vercel'de yayınlamak:**
- ⚠️ Sorunlu olabilir
- ⚠️ Çok fazla manuel ayar gerekiyor
- ⚠️ Rocket serverless için uygun değil
- ⚠️ Build timeout riski var

**Railway'de yayınlamak:**
- ✅ Çok daha kolay
- ✅ Sorunsuz çalışır
- ✅ Rocket için optimize edilmiş
- ✅ Otomatik deploy

**ÖNERİM: Railway kullanın!** 🚀

Eğer yine de Vercel'de denemek istiyorsanız, yukarıdaki adımları takip edin ama sorun yaşarsanız Railway'ye geçin.

