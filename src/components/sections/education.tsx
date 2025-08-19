export function Education() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-heading mb-12 text-center">Học vấn</h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border" aria-hidden="true"></div>
        <div className="space-y-10">
          <div className="relative pl-12">
            <div className="absolute left-4 top-2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>
            <h3 className="text-xl font-medium font-heading text-primary">Trường Đại học Kangwon, Chuncheon</h3>
            <p className="text-muted-foreground mt-1">Thạc sĩ (2025 - Hiện tại)</p>
          </div>
          <div className="relative pl-12">
            <div className="absolute left-4 top-2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>
            <h3 className="text-xl font-medium font-heading text-primary">Trường Đại học Wonkwang, Iksan</h3>
            <p className="text-muted-foreground mt-1">Sinh viên trao đổi (2023)</p>
          </div>
          <div className="relative pl-12">
            <div className="absolute left-4 top-2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>
            <h3 className="text-xl font-medium font-heading text-primary">Trường Đại học Đà Lạt, Lâm Đồng</h3>
            <p className="text-muted-foreground mt-1">Cử nhân (2019 - 2024)</p>
          </div>
          <div className="relative pl-12">
            <div className="absolute left-4 top-2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>
            <h3 className="text-xl font-medium font-heading text-primary">Trường THPT Bùi Thị Xuân, Đà Lạt</h3>
            <p className="text-muted-foreground mt-1">Tốt nghiệp (2019)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
