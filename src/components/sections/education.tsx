'use client';

import { useState, useEffect } from 'react';

// Data for the education section
const educationData = [
  {
    institution: 'Trường Đại học Kangwon, Chuncheon',
    degree: 'Thạc sĩ',
    years: '03/2025 - Hiện tại',
    startDate: '2025-03-01',
    isCurrent: true,
  },
  {
    institution: 'Trường Đại học Đà Lạt, Lâm Đồng',
    degree: 'Cử nhân',
    years: '2019 - 06/2024',
    duration: '5 năm',
    isCurrent: false,
  },
  {
    institution: 'Trường Đại học Wonkwang, Iksan',
    degree: 'Sinh viên trao đổi',
    years: '03/2023 - 12/2023',
    duration: '10 tháng',
    isCurrent: false,
  },
  {
    institution: 'Trường THPT Bùi Thị Xuân, Đà Lạt',
    degree: 'Tốt nghiệp',
    years: '2016 - 2019',
    duration: '3 năm',
    isCurrent: false,
  },
];

// Helper function to calculate the duration
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
  
  // To make it simple, if it just started, show 1 month
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


export function Education() {
  const [currentStudyDuration, setCurrentStudyDuration] = useState('');

  useEffect(() => {
    const currentItem = educationData.find(item => item.isCurrent);
    if (currentItem) {
      setCurrentStudyDuration(calculateDuration(currentItem.startDate));
      
      // Update the duration every so often if needed, but for months/years, once is enough.
      // For a "live" feel, you could set an interval, but it's overkill.
    }
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold font-heading mb-12 text-center">Học vấn</h2>
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true"></div>
        <div className="space-y-10">
          {educationData.map((item, index) => (
            <div key={index} className="relative flex items-start w-full group">
              {/* Time */}
              <div className="w-1/2 pr-8 text-right">
                 <p className="text-lg text-primary">
                  {item.isCurrent ? (
                    <>
                      {item.years.split(' - ')[0]} - <span className="font-bold">Hiện tại</span>
                    </>
                  ) : (
                    item.years
                  )}
                </p>
                <p className="text-sm text-muted-foreground/80 mt-1">
                  {item.isCurrent ? currentStudyDuration : item.duration}
                </p>
              </div>

              <div className="absolute left-1/2 top-2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background z-10"></div>
              
              {/* Content */}
              <div className="w-1/2 relative pl-8">
                  <div className="absolute top-3 -left-1 h-px w-10 bg-border"></div>
                  <h3 className="text-xl font-medium font-heading text-primary">{item.institution}</h3>
                  <p className="text-muted-foreground mt-1 ml-4">{item.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
