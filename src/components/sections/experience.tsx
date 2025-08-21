'use client';

import { useState, useEffect } from 'react';

const experienceData = [
  {
    title: 'Dạy Anki',
    company: 'hocanki.com',
    period: '2022 - Hiện tại',
    startDate: '2022-01-01',
    current: true,
  },
  {
    title: 'Quản lý nhà hàng & Điều hành Tour',
    company: 'Công ty Hàn Quốc tại Nha Trang',
    period: '03/2024 - 05/2024',
    duration: '3 tháng',
    current: false,
  },
  {
    title: 'Giảng viên',
    company: 'Trường Đại học Đà Lạt',
    period: '12/2023 - 03/2024',
    duration: '4 tháng',
    current: false,
  },
  {
    title: 'Giảng viên',
    company: 'Trường Hàn Ngữ Việt - Hàn Kanata',
    period: '05/2023 - 03/2024',
    duration: '11 tháng',
    current: false,
  },
  {
    title: 'Trợ giảng',
    company: 'Viện King Sejong Đà Lạt',
    period: '09/2022 - 03/2023',
    duration: '7 tháng',
    current: false,
  },
  {
    title: 'Lễ tân',
    company: 'Biệt Thự Khánh Lâm',
    period: '2018 - 2022',
    duration: '5 năm',
    current: false,
  },
].sort((a, b) => (a.current === b.current ? 0 : a.current ? -1 : 1));

function calculateDuration(startDate: string): string {
  const start = new Date(startDate);
  const now = new Date();

  if (now < start) {
    return 'Chưa bắt đầu';
  }

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }
  
  if (years === 0 && months === 0) {
      months = 1;
  }

  if (years > 0 && months > 0) {
    return `${years} năm ${months} tháng`;
  }
  if (years > 0) {
    return `${years} năm`;
  }
  if (months > 0) {
    return `${months} tháng`;
  }
  
  return 'Vừa bắt đầu';
}

export function Experience() {
  const [currentExperienceDurations, setCurrentExperienceDurations] = useState<Record<string, string>>({});

  useEffect(() => {
    const newDurations: Record<string, string> = {};
    experienceData.forEach(item => {
      if (item.current && item.startDate) {
        newDurations[item.title] = calculateDuration(item.startDate);
      }
    });
    setCurrentExperienceDurations(newDurations);
  }, []);


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
                    {item.current ? (
                      <>
                        {item.period.split(' - ')[0]} - <span className="font-bold">Hiện tại</span>
                      </>
                    ) : (
                      item.period
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground/80 mt-1">
                    {item.current ? currentExperienceDurations[item.title] : item.duration}
                  </p>
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
