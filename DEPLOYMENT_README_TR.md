# Vercel Deployment Kurulumu

Bu proje Vercel'de yayınlanmak için yapılandırılmıştır. Ancak **önemli sınırlamalar** vardır.

## ⚠️ Önemli Uyarı

Bu proje **Rocket** framework'ü kullanıyor. Rocket, geleneksel bir web sunucusu framework'üdür ve Vercel'in serverless (sunucusuz) modeli ile tam uyumlu değildir.

### Sınırlamalar:
- Rocket, sürekli çalışan bir sunucu bekler
- Vercel'in serverless modeli her request'te yeni bir instance başlatabilir
- Cold start süreleri performansı etkileyebilir
- WebSocket desteği çalışmayabilir

## 📋 Kurulum Adımları

### 1. Vercel Hesabı ve Proje Oluşturma

1. [Vercel](https://vercel.com) hesabı oluşturun
2. Yeni proje oluşturun
3. GitHub repository'nizi bağlayın

### 2. Environment Variables Ayarlama

Vercel dashboard'unda **Settings > Environment Variables** bölümünden şu değişkenleri ekleyin:

**Zorunlu:**
- `DATABASE_URL`: PostgreSQL connection string

**Opsiyonel:**
- `ROCKET_ADDRESS`: `0.0.0.0` (varsayılan)
- `ROCKET_PORT`: `8080` (varsayılan)
- `LIST_SIZE`: `50` (varsayılan)
- `EXTENDED_LIST_SIZE`: `100` (varsayılan)

Detaylı liste için `vercel-env-variables.md` dosyasına bakın.

### 3. Database Kurulumu

1. **Vercel Postgres** kullanabilirsiniz (önerilir)
   - Vercel dashboard'da Postgres ekleyin
   - Connection string'i `DATABASE_URL` olarak ayarlayın

2. **Harici PostgreSQL** kullanabilirsiniz
   - Supabase, Neon, Railway gibi servisler
   - Connection string'i `DATABASE_URL` olarak ayarlayın

3. **Migration'ları çalıştırın:**
   ```bash
   cargo install sqlx-cli --no-default-features --features native-tls,postgres
   cargo sqlx migrate run
   ```

### 4. Build Ayarları

Vercel otomatik olarak `vercel.json` dosyasını kullanacaktır. Manuel ayar gerekirse:

**Build Command:**
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && source $HOME/.cargo/env && cargo build --release --package pointercrate-example
```

**Output Directory:**
```
target/release
```

### 5. Deploy

1. Git repository'nize push yapın
2. Vercel otomatik olarak deploy edecektir
3. Veya manuel olarak Vercel CLI ile:
   ```bash
   npm i -g vercel
   vercel
   ```

## 🔧 Alternatif Platformlar (Önerilen)

Rocket uygulamaları için daha uygun platformlar:

### Railway (Önerilen)
- ✅ Rust için mükemmel destek
- ✅ PostgreSQL entegrasyonu
- ✅ Otomatik deploy
- ✅ Ücretsiz tier mevcut

**Kurulum:**
1. [Railway](https://railway.app) hesabı oluşturun
2. Yeni proje > GitHub repo seçin
3. PostgreSQL servisi ekleyin
4. Environment variables ayarlayın
5. Deploy!

### Fly.io
- ✅ Rust için optimize edilmiş
- ✅ Global edge network
- ✅ Ücretsiz tier mevcut

### Render
- ✅ Docker desteği
- ✅ PostgreSQL desteği
- ✅ Ücretsiz tier mevcut

## 📁 Oluşturulan Dosyalar

- `vercel.json`: Vercel yapılandırma dosyası
- `vercel-env-variables.md`: Environment variables listesi
- `VERCEL_DEPLOYMENT.md`: Detaylı deployment rehberi (İngilizce)
- `build.sh`: Build script (opsiyonel)
- `.vercelignore`: Vercel'de ignore edilecek dosyalar
- `api/handler.rs`: Serverless function handler (örnek - çalışır durumda değil)

## 🐛 Sorun Giderme

### Build Hataları
- Rust toolchain'in doğru yüklendiğinden emin olun
- `DATABASE_URL` environment variable'ının ayarlandığından emin olun
- Workspace yapısı nedeniyle build komutunun doğru olduğundan emin olun

### Runtime Hataları
- Database connection'ı kontrol edin
- Environment variables'ların doğru ayarlandığından emin olun
- Logs'u Vercel dashboard'dan kontrol edin

### Performance Sorunları
- Cold start'lar normaldir (serverless model)
- Daha iyi performans için Railway veya Fly.io kullanın

## 📞 Destek

Sorun yaşarsanız:
1. Vercel logs'ları kontrol edin
2. Environment variables'ları doğrulayın
3. Database connection'ı test edin
4. Alternatif platformları deneyin (Railway önerilir)

## ✅ Sonuç

Vercel'de deploy edebilirsiniz, ancak **Railway, Fly.io veya Render** gibi platformlar Rocket uygulamaları için daha uygundur ve daha iyi performans sağlar.

