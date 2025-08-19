export function Experience() {
  const experienceData = [
    {
      title: 'Dạy Anki',
      company: 'hocanki.com',
      period: '2022 - Hiện tại',
      duration: '',
      current: true,
    },
    {
      title: 'Quản lý nhà hàng & Điều hành Tour',
      company: 'Công ty Hàn Quốc tại Nha Trang',
      period: '03/2024 - 05/2024',
      duration: '3 tháng',
    },
    {
      title: 'Giảng viên',
      company: 'Trường Đại học Đà Lạt',
      period: '12/2023 - 03/2024',
      duration: '4 tháng',
    },
    {
      title: 'Giảng viên',
      company: 'Trường Hàn Ngữ Kanata',
      period: '05/2023 - 03/2024',
      duration: '11 tháng',
    },
    {
      title: 'Trợ giảng',
      company: 'Viện King Sejong Đà Lạt',
      period: '09/2022 - 03/2023',
      duration: '7 tháng',
    },
    {
      title: 'Lễ tân',
      company: 'Biệt Thự Khánh Lâm',
      period: '2018 - 2022',
      duration: '4 năm',
    },
  ].sort((a, b) => (a.current === b.current ? 0 : a.current ? -1 : 1));


  return (
    <section>
      <h2 className="text-3xl font-bold font-heading mb-12 text-center">Kinh nghiệm làm việc</h2>
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true"></div>
        <div className="space-y-10">
          {experienceData.map((item, index) => (
             <div key={index} className="relative flex items-start w-full group">
                {/* Time */}
                <div className="w-1/2 pr-20 text-right">
                  <p className="text-lg text-primary">
                    {item.period.includes('Hiện tại') ? (
                      <>
                        {item.period.split(' - ')[0]} - <span className="font-bold">Hiện tại</span>
                      </>
                    ) : (
                      item.period
                    )}
                  </p>
                  {item.duration && <p className="text-sm text-muted-foreground/80 mt-1">{item.duration}</p>}
                </div>
                
                <div className="absolute left-1/2 top-2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background z-10"></div>

                {/* Content */}
                <div className="w-1/2 relative pl-20 text-left">
                  <div className="absolute top-3 left-10 h-px w-10 bg-border"></div>
                  <h3 className="text-xl font-medium font-heading text-primary">{item.title}</h3>
                  <p className="text-muted-foreground mt-1 ml-4">{item.company}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
