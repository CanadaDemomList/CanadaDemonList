# Vercel Deployment Guide

## Önemli Not

Bu proje **Rocket** framework'ü kullanıyor, bu da geleneksel bir web sunucusu framework'üdür. Vercel ise serverless (sunucusuz) bir platformdur. Rocket uygulamaları Vercel'de çalıştırmak için özel yapılandırma gereklidir ve bazı sınırlamalar olabilir.

## Alternatif Platformlar

Rocket uygulamaları için daha uygun platformlar:
- **Railway** (https://railway.app) - Rust uygulamaları için mükemmel destek
- **Fly.io** (https://fly.io) - Rust için optimize edilmiş
- **Render** (https://render.com) - Docker desteği ile
- **DigitalOcean App Platform** - Rust desteği var

## Vercel'de Deploy Etmek İçin

### 1. Gereksinimler

- Vercel hesabı
- PostgreSQL veritabanı (Vercel Postgres veya harici bir servis)
- Environment variables yapılandırması

### 2. Environment Variables

Vercel dashboard'unda şu environment variables'ları ayarlayın:

```
DATABASE_URL=postgresql://user:password@host:port/database
ROCKET_ADDRESS=0.0.0.0
ROCKET_PORT=8080
# Diğer gerekli environment variables (.env dosyasından)
```

### 3. Build Ayarları

Vercel otomatik olarak Rust projelerini algılayabilir, ancak workspace yapısı nedeniyle manuel build komutu gerekebilir:

**Build Command:**
```bash
cargo build --release --package pointercrate-example
```

**Output Directory:**
```
target/release
```

### 4. Database Migrations

Vercel'de deploy edilmeden önce veritabanı migration'larını çalıştırmanız gerekir:

```bash
cargo install sqlx-cli --no-default-features --features native-tls,postgres
cargo sqlx migrate run
```

### 5. Static Files

Static dosyalar (`/static/` route'ları) Vercel'in CDN'i üzerinden servis edilebilir. `vercel.json` dosyasında bu yapılandırılmıştır.

## Sınırlamalar

1. **Serverless Model**: Rocket, sürekli çalışan bir sunucu bekler. Vercel'in serverless modeli ile tam uyumlu değildir.

2. **Cold Starts**: Her request'te yeni bir instance başlatılabilir, bu da yavaşlığa neden olabilir.

3. **WebSocket**: Rocket'in WebSocket desteği Vercel'de çalışmayabilir.

4. **Long-running Connections**: Vercel'in timeout limitleri nedeniyle uzun süren işlemler sorun çıkarabilir.

## Önerilen Çözüm

Bu uygulama için **Railway** veya **Fly.io** gibi platformlar kullanmanız önerilir. Bu platformlar:
- Rust uygulamaları için optimize edilmiştir
- PostgreSQL desteği vardır
- Geleneksel web sunucuları için tasarlanmıştır
- Daha iyi performans sağlar

## Railway ile Deploy (Önerilen)

1. Railway hesabı oluşturun: https://railway.app
2. Yeni proje oluşturun
3. GitHub repo'nuzu bağlayın
4. PostgreSQL servisi ekleyin
5. Environment variables'ları ayarlayın
6. Deploy!

Railway otomatik olarak Rust projelerini algılar ve deploy eder.

