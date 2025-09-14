# Tiếng Hàn Phúc Lee

Blog học tiếng Hàn từ cơ bản đến nâng cao, khám phá văn hóa Hàn Quốc.

## 🚀 Công nghệ sử dụng

- **Astro** - Static site generator
- **React** - UI components
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **Netlify** - Hosting & deployment

## 📁 Cấu trúc dự án

```
src/
├── components/
│   ├── common/          # Component tái sử dụng
│   │   ├── Layout.astro
│   │   ├── PostCard.tsx
│   │   └── PostCard.module.css
│   └── Home/            # Component cho trang chủ
│       ├── Hero.astro
│       └── FeatureGrid.astro
├── pages/               # Astro pages
├── types/               # TypeScript definitions
├── utils/               # Utility functions
└── assets/
    └── styles/
        └── tokens.css   # Design tokens
```

## 🎨 Design System

- **Phong cách**: Minimalist, không gradient
- **Typography**: Hỗ trợ tiếng Việt
- **Colors**: Token hóa trong `tokens.css`
- **Spacing**: 8px base unit system
- **Components**: CSS Modules cho scoped styling

## 🛠️ Development

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

## 📝 Quy tắc coding

- **Component**: Nhỏ, tuân thủ SRP
- **Comments**: Tiếng Việt súc tích
- **CSS**: Modules hoặc file riêng
- **Types**: TypeScript với props rõ ràng
- **Commit**: Conventional commits

## 🚀 Deployment

Dự án được cấu hình auto-deploy trên Netlify:

```bash
netlify deploy --prod
```

## 📋 TODO

- [ ] Thêm CMS integration (Contentful/Strapi)
- [ ] Tạo blog post pages với markdown
- [ ] Thêm search functionality
- [ ] SEO optimization
- [ ] Dark mode support
- [ ] PWA features

## 📄 License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.