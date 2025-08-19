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
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true"></div>
        <div className="space-y-10">
          {educationData.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute left-1/2 top-2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>
              <div className="grid md:grid-cols-2 gap-x-8 items-center">
                {/* Timeline Line */}
                <div
                  className={`absolute left-1/2 top-[1.10rem] h-0.5 w-1/2 bg-border ${
                    index % 2 === 0 ? ' -translate-x-full' : ''
                  }`}
                  aria-hidden="true"
                ></div>

                {/* Year Display */}
                <div
                  className={
                    index % 2 === 0
                      ? 'md:col-start-1 text-right pr-8'
                      : 'md:col-start-2 text-left pl-8'
                  }
                >
                  <p className="font-bold text-lg text-primary">{item.years.split(' - ')[0]}</p>
                </div>

                {/* Empty div for spacing */}
                <div
                  className={
                    index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'
                  }
                ></div>

                {/* Content */}
                <div
                  className={
                    index % 2 === 0
                      ? 'md:col-start-1 md:row-start-1 pr-8 text-right'
                      : 'md:col-start-2 pl-8 text-left'
                  }
                >
                  <div className="w-full">
                    <h3 className="text-xl font-medium font-heading text-primary">{item.institution}</h3>
                    <p className="text-muted-foreground mt-1">{item.degree}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
