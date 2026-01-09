# Vercel Environment Variables

Vercel dashboard'unda şu environment variables'ları ayarlamanız gerekiyor:

## Zorunlu Variables

```
DATABASE_URL=postgresql://user:password@host:port/database
```

## Opsiyonel Variables (Varsayılan Değerler Var)

```
ROCKET_ADDRESS=0.0.0.0
ROCKET_PORT=8080
LIST_SIZE=50
EXTENDED_LIST_SIZE=100
```

## Opsiyonel Variables (Özellikler İçin)

```
# Discord Webhook (Record submission bildirimleri için)
DISCORD_WEBHOOK=https://discord.com/api/webhooks/...

# GD Connector Endpoint
GD_CONNECTOR_ENDPOINT=https://...

# Google OAuth (oauth2 feature kullanıyorsanız)
GOOGLE_CLIENT_ID=your-google-client-id

# Secret File (Token imzalama için)
# Vercel'de secret'ı environment variable olarak ekleyebilirsiniz
SECRET_FILE=.secret
```

## Vercel'de Ayarlama

1. Vercel dashboard'a gidin
2. Projenizi seçin
3. Settings > Environment Variables bölümüne gidin
4. Yukarıdaki variables'ları ekleyin
5. Production, Preview ve Development için uygun değerleri ayarlayın

## Not

- `DATABASE_URL` mutlaka ayarlanmalıdır
- Vercel Postgres kullanıyorsanız, connection string'i Vercel dashboard'dan alabilirsiniz
- Secret için güvenli bir değer kullanın (64 byte random string önerilir)

