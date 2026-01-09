# 🚀 Vercel'de Hızlı Yayınlama Rehberi

## ⚠️ ÖNEMLİ UYARI

**Rocket framework Vercel'de sorunlu olabilir!** Ama deneyebilirsiniz. Sorun yaşarsanız Railway kullanın (çok daha kolay).

---

## 📋 ADIM ADIM YAYINLAMA (Hiçbir Şey Kurmadan)

### Adım 1: GitHub'a Push Yapın

1. Kodunuzu GitHub'a push edin (eğer yapmadıysanız)
2. Repository'nizin public veya private olduğundan emin olun

### Adım 2: Vercel Hesabı Oluşturun

1. https://vercel.com adresine gidin
2. "Sign Up" tıklayın
3. GitHub ile giriş yapın (en kolay yol)

### Adım 3: Yeni Proje Oluşturun

1. Vercel Dashboard'da "Add New..." > "Project" tıklayın
2. GitHub repository'nizi seçin
3. "Import" tıklayın

### Adım 4: Build Ayarları (Otomatik)

Vercel otomatik olarak `vercel.json` dosyanızı kullanacak. **Hiçbir şey değiştirmenize gerek yok!**

Eğer manuel ayar gerekirse:
- **Framework Preset:** Other (veya boş bırakın)
- **Root Directory:** . (nokta)
- **Build Command:** (otomatik algılanacak)
- **Output Directory:** target/release
- **Install Command:** (boş bırakın)

### Adım 5: Environment Variables

**Settings > Environment Variables** bölümüne gidin ve şunları ekleyin:

#### Zorunlu:
```
DATABASE_URL=postgresql://user:password@host:port/database
```

**PostgreSQL Nasıl Alınır:**
- **Seçenek 1:** Vercel Postgres (Önerilir)
  1. Vercel Dashboard > Storage
  2. "Create Database" > "Postgres"
  3. Database oluşturun
  4. "Connect" tıklayın
  5. Connection string'i kopyalayın
  6. `DATABASE_URL` olarak ekleyin

- **Seçenek 2:** Ücretsiz PostgreSQL Servisleri
  - **Supabase:** https://supabase.com (ücretsiz)
  - **Neon:** https://neon.tech (ücretsiz)
  - **Railway:** https://railway.app (ücretsiz tier)

#### Opsiyonel (Varsayılan Değerler Var):
```
ROCKET_ADDRESS=0.0.0.0
ROCKET_PORT=8080
LIST_SIZE=50
EXTENDED_LIST_SIZE=100
```

### Adım 6: Secret File (ÖNEMLİ!)

Vercel'de `.secret` dosyası oluşturamazsınız. **Çözüm:**

1. **Güvenli bir secret oluşturun:**
   - Online: https://randomkeygen.com (64 karakter seçin)
   - Veya: `openssl rand -base64 64` (terminal'de)

2. **Environment Variable olarak ekleyin:**
   ```
   SECRET=your-64-character-random-string-here
   ```

3. **Kodda değişiklik gerekebilir** (ama şimdilik deneyin, belki çalışır)

### Adım 7: Database Migration

**ÖNEMLİ:** Migration'ları Vercel'de çalıştıramazsınız!

**Çözüm - Local'de çalıştırın (5 dakika):**

1. **PostgreSQL connection string'inizi alın** (Vercel'den veya Supabase'den)

2. **Terminal'de (PowerShell veya CMD):**
   ```powershell
   # Rust yüklü değilse, önce yükleyin (sadece bir kere):
   # https://rustup.rs adresinden indirin ve kurun
   
   # sqlx-cli yükleyin:
   cargo install sqlx-cli --no-default-features --features native-tls,postgres
   
   # DATABASE_URL'i ayarlayın:
   $env:DATABASE_URL="postgresql://user:password@host:port/database"
   
   # Migration çalıştırın:
   cargo sqlx migrate run
   ```

**Veya:** Migration'ları Vercel deploy sonrası manuel çalıştırabilirsiniz (karmaşık).

### Adım 8: Deploy!

1. "Deploy" butonuna tıklayın
2. Build başlar (10-30 dakika sürebilir - Rust build uzun sürer)
3. Bekleyin...
4. Başarılı olursa URL alırsınız! 🎉

---

## ⚠️ BEKLENEN SORUNLAR

### Sorun 1: Build Timeout
**Hata:** "Build exceeded maximum duration"

**Çözüm:**
- Vercel Pro plan gerekebilir (ücretsiz plan 45 dakika limit)
- Veya Railway kullanın (önerilir)

### Sorun 2: Handler Bulunamadı
**Hata:** "Function not found" veya sayfa açılmıyor

**Neden:** Rocket serverless için uygun değil

**Çözüm:**
- Railway kullanın (çok daha kolay ve sorunsuz)
- Veya Vercel'in Docker desteğini kullanın (Enterprise plan)

### Sorun 3: Secret File Hatası
**Hata:** "Unable to open secret file"

**Çözüm:**
- Secret'ı environment variable olarak kullanın
- Kodda değişiklik gerekebilir (ama şimdilik deneyin)

### Sorun 4: Database Connection
**Hata:** "Connection refused"

**Çözüm:**
- `DATABASE_URL` doğru mu kontrol edin
- PostgreSQL'in public access açık mı kontrol edin
- Vercel Postgres kullanıyorsanız, connection string'i doğru kopyaladığınızdan emin olun

---

## 🎯 ALTERNATİF: Railway (ÇOK DAHA KOLAY!)

Vercel'de sorun yaşarsanız, **Railway** kullanın:

### Railway Avantajları:
- ✅ Rocket için optimize edilmiş
- ✅ PostgreSQL otomatik kurulur
- ✅ Hiçbir şey kurmaya gerek yok
- ✅ Çok daha kolay
- ✅ Ücretsiz tier var

### Railway ile Deploy (5 Dakika):

1. **https://railway.app** adresine gidin
2. GitHub ile giriş yapın
3. "New Project" > "Deploy from GitHub repo"
4. Repository'nizi seçin
5. Railway otomatik olarak:
   - Rust projesini algılar
   - Build eder
   - Deploy eder
6. "New" > "Database" > "PostgreSQL" tıklayın
7. Otomatik olarak `DATABASE_URL` ayarlanır!
8. Migration için Railway CLI:
   ```bash
   npm i -g @railway/cli
   railway login
   railway link
   railway run cargo sqlx migrate run
   ```
9. Bitti! 🎉

**Railway çok daha kolay ve sorunsuz!**

---

## 📊 Karşılaştırma

| Özellik | Vercel | Railway |
|--------|--------|---------|
| Kurulum | ⚠️ Karmaşık | ✅ Otomatik |
| Rocket Desteği | ❌ Sorunlu | ✅ Mükemmel |
| PostgreSQL | ⚠️ Manuel | ✅ Otomatik |
| Build Süresi | ⚠️ Uzun | ✅ Normal |
| Sorun Riski | ⚠️ Yüksek | ✅ Düşük |
| Ücretsiz | ✅ Var | ✅ Var |

---

## 🎯 SONUÇ

**Vercel'de yayınlamak:**
- ⚠️ Deneyebilirsiniz ama sorunlar olabilir
- ⚠️ Rocket serverless için uygun değil
- ⚠️ Build timeout riski var

**Railway'de yayınlamak:**
- ✅ Çok daha kolay
- ✅ Sorunsuz çalışır
- ✅ Otomatik kurulum
- ✅ **ÖNERİLEN!**

**ÖNERİM:** Önce Vercel'de deneyin, sorun yaşarsanız Railway'ye geçin! 🚀

---

## 🆘 Yardım

Sorun yaşarsanız:
1. Vercel logs'larına bakın (Dashboard > Deployments > Logs)
2. Build hatalarını kontrol edin
3. Environment variables'ları kontrol edin
4. Railway'yi deneyin (çok daha kolay!)

