export function Education() {
  const educationData = [
    {
      institution: 'Trường Đại học Kangwon, Chuncheon',
      degree: 'Thạc sĩ',
      years: '2025 - Hiện tại',
    },
    {
      institution: 'Trường Đại học Đà Lạt, Lâm Đồng',
      degree: 'Cử nhân',
      years: '2019 - 2024',
    },
    {
      institution: 'Trường Đại học Wonkwang, Iksan',
      degree: 'Sinh viên trao đổi',
      years: '03/2023 - 12/2023',
    },
    {
      institution: 'Trường THPT Bùi Thị Xuân, Đà Lạt',
      degree: 'Tốt nghiệp',
      years: '2019',
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold font-heading mb-12 text-center">Học vấn</h2>
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true"></div>
        <div className="space-y-10">
          {educationData.map((item, index) => (
            <div key={index} className="relative flex items-center w-full">
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'order-1 pl-8 text-left'}`}>
                <p className="font-bold text-lg text-primary">{item.years.split(' - ')[0]}</p>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background z-10"></div>
              
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-left' : 'order-first pr-8 text-right'}`}>
                  <h3 className="text-xl font-medium font-heading text-primary">{item.institution}</h3>
                  <p className="text-muted-foreground mt-1">{item.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
