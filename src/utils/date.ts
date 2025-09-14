// Utility functions cho xử lý ngày tháng
// Hỗ trợ tiếng Việt và format phù hợp

/**
 * Format ngày tháng theo định dạng tiếng Việt
 * @param date - Ngày cần format
 * @param options - Tùy chọn format
 * @returns Chuỗi ngày tháng đã format
 */
export const formatDate = (
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  };

  return new Intl.DateTimeFormat('vi-VN', defaultOptions).format(dateObj);
};

/**
 * Format ngày tháng ngắn gọn (dd/mm/yyyy)
 * @param date - Ngày cần format
 * @returns Chuỗi ngày tháng ngắn
 */
export const formatDateShort = (date: Date | string): string => {
  return formatDate(date, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

/**
 * Tính thời gian đọc ước tính
 * @param content - Nội dung bài viết
 * @param wordsPerMinute - Số từ đọc mỗi phút (mặc định 200)
 * @returns Số phút đọc ước tính
 */
export const calculateReadingTime = (
  content: string,
  wordsPerMinute: number = 200
): number => {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

/**
 * Kiểm tra ngày có phải hôm nay không
 * @param date - Ngày cần kiểm tra
 * @returns true nếu là hôm nay
 */
export const isToday = (date: Date | string): boolean => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  
  return (
    dateObj.getDate() === today.getDate() &&
    dateObj.getMonth() === today.getMonth() &&
    dateObj.getFullYear() === today.getFullYear()
  );
};

/**
 * Tính số ngày từ ngày hiện tại
 * @param date - Ngày cần tính
 * @returns Số ngày (âm nếu trong tương lai)
 */
export const daysFromNow = (date: Date | string): number => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  const diffTime = dateObj.getTime() - today.getTime();
  
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
