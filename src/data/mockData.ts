import { Destination, StudentStory, ScholarshipItem, RoadmapStep, Mentor, NewsArticle } from '../types';

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'japan',
    name: 'Nhật Bản (Japan)',
    region: 'Đông Á',
    flag: '🇯🇵',
    tag: 'XKLĐ Tokutei & MEXT',
    highlightBadge: 'Lương 35 - 55 Tr/Tháng • Tokutei 1 & 2',
    badgeType: 'gold',
    title: 'Du Học & Xuất Khẩu Lao Động Nhật Bản: Tokutei Ginou & Học Bổng MEXT',
    description: 'Chương trình tư vấn trọn gói từ Việt Nam: Xuất khẩu lao động diện Kỹ năng đặc định Tokutei Ginou 1 & 2 (lương 35 - 55 triệu/tháng, cơ hội bảo lãnh vợ/chồng con), Kỹ sư CNTT/Cơ khí, cùng các trường tiếng và đại học Hoàng gia với học bổng MEXT danh giá.',
    maxScholarship: 'Lương 35-55 Tr / MEXT 100%',
    postStudyWork: 'Tokutei 5 Năm & Vĩnh Trú',
    avgCost: 'Tối ưu - Hỗ trợ nợ phí',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    visaRate: '99.4%',
    topUniversities: ['Kỹ năng đặc định Tokutei (Aichi, Tokyo)', 'Kỹ sư IT & Cơ khí chế tạo', 'University of Tokyo', 'Kyoto University', 'Học viện Nhật ngữ Quốc tế Tokyo'],
    popularMajors: ['Cơ khí chế tạo & Lắp ráp ô tô', 'Kỹ thuật Điện tử & Bán dẫn', 'Điều dưỡng - Hộ lý Nhật Bản', 'Kỹ sư Công nghệ thông tin', 'Chế biến thực phẩm'],
    keyBenefits: [
      'Đơn hàng Tokutei Ginou 1 & 2 lương từ 180,000 - 270,000 Yên/tháng (~30-48 triệu VNĐ thực lĩnh sau thuế)',
      'Quyền thi nâng hạng Tokutei 2 để bảo lãnh vợ/chồng, con cái sang Nhật sinh sống và làm việc không giới hạn thời gian',
      'Học bổng MEXT và Học bổng Báo Asahi/Yomiuri tài trợ 100% học phí + ký túc xá cho du học sinh trường tiếng',
      'Được trung tâm EduGlobal đào tạo tiếng Nhật N4/N3 và rèn luyện kỹ năng phỏng vấn bao đỗ đơn hàng'
    ]
  },
  {
    id: 'korea',
    name: 'Hàn Quốc (South Korea)',
    region: 'Đông Á',
    flag: '🇰🇷',
    tag: 'Visa Kỹ Sư E-7 & GKS',
    highlightBadge: 'Lương 40 - 65 Tr/Tháng • Visa E-7 & EPS',
    badgeType: 'gold',
    title: 'Du Học & Xuất Khẩu Lao Động Hàn Quốc: Visa Kỹ Sư E-7, EPS & Du Học SKY',
    description: 'Đầu mối tư vấn uy tín kết nối doanh nghiệp Hàn Quốc: Diện Visa Kỹ Sư E-7 cho cử nhân/kỹ sư Việt Nam (lương 40 - 65 triệu/tháng, đóng bảo hiểm đầy đủ), ôn luyện thi tiếng Hàn diện EPS Bộ LĐ-TB&XH, cùng lộ trình Du học tiếng D-4-1 và Thạc sĩ D-2 học bổng GKS.',
    maxScholarship: 'Lương 40-65 Tr / GKS Toàn Phần',
    postStudyWork: 'Visa E-7 Dài Hạn & D-10',
    avgCost: '$3,500 - $6,500 / Năm',
    imageUrl: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80',
    visaRate: '99.1%',
    topUniversities: ['Visa Kỹ Sư E-7 (Hyundai, Samsung C&T)', 'Chương trình EPS E-9 Bộ LĐ-TB&XH', 'Seoul National University (SNU)', 'KAIST', 'Korea University', 'Yonsei University'],
    popularMajors: ['Kỹ sư Cơ khí & Đóng tàu (E-7)', 'Công nghệ Sơn & Hàn kỹ thuật', 'Du học chuyên ngành D-2 Top SKY', 'Du học tiếng Hàn D-4-1 (Làm thêm 25h/tuần)', 'Quản trị Kinh doanh'],
    keyBenefits: [
      'Visa Kỹ Sư E-7 ký hợp đồng trực tiếp với các nhà máy, tập đoàn công nghiệp lớn tại Ulsan, Busan, Gyeonggi',
      'Chế độ đãi ngộ cao với mức lương 2.3 - 3.8 triệu Won/tháng, được bảo lãnh vợ con sau 1 năm làm việc',
      'Học bổng Chính phủ Hàn Quốc Global Korea Scholarship (GKS) tài trợ 100% học phí, sinh hoạt phí và vé máy bay',
      'Sau khi tốt nghiệp đại học tại Hàn Quốc được chuyển thẳng sang Visa D-10 tìm việc 2 năm và cấp visa E-7 định cư'
    ]
  },
  {
    id: 'taiwan',
    name: 'Đài Loan (Taiwan)',
    region: 'Đông Á',
    flag: '🇹🇼',
    tag: 'Xuất Cảnh 1-2 Tháng',
    highlightBadge: 'Lương 23 - 35 Tr/Tháng • Bán Dẫn TSMC',
    badgeType: 'cyan',
    title: 'Du Học & Xuất Khẩu Lao Động Đài Loan: Bán Dẫn TSMC & Công Xưởng Kỹ Thuật',
    description: 'Thị trường có chi phí xuất cảnh hợp lý và tiến độ bay nhanh nhất (1-2 tháng): Đơn hàng công xưởng điện tử, cơ khí, thao tác máy với mức thu nhập 23 - 35 triệu/tháng; Du học hệ Tân Hướng Nam vừa học vừa làm và Chương trình đào tạo nhân lực bán dẫn liên kết tập đoàn TSMC.',
    maxScholarship: 'Lương 23-35 Tr / Học Bổng MOE',
    postStudyWork: 'Làm Việc 3 - 12 Năm',
    avgCost: 'Chi phí thấp - Bay nhanh',
    imageUrl: 'https://images.unsplash.com/photo-1508247967583-7d982ea01526?auto=format&fit=crop&w=1200&q=80',
    visaRate: '99.7%',
    topUniversities: ['Công xưởng Điện tử Foxconn / Pegatron', 'Học bổng Bán dẫn TSMC & NTHU', 'Đại học Quốc gia Đài Loan (NTU)', 'ĐH Thanh Hoa (NTHU)', 'ĐH Giao Thông Dương Minh (NYCU)'],
    popularMajors: ['Công nhân Điện tử & Thao tác máy CNC', 'Vi mạch & Bán dẫn (Semiconductor)', 'Du học Vừa học vừa làm Tân Hướng Nam', 'Hộ lý Dưỡng lão & Bệnh viện', 'Cơ khí chính xác'],
    keyBenefits: [
      'Thời gian hoàn thiện hồ sơ và xuất cảnh nhanh chóng chỉ trong vòng 30 - 60 ngày',
      'Lương cơ bản theo quy định luật lao động Đài Loan 27,470 Đài tệ/tháng + tiền làm thêm tăng ca đạt 24-35 triệu VNĐ',
      'Học bổng chính phủ Đài Loan (MOE) và trợ cấp doanh nghiệp miễn 100% học phí cho du học sinh',
      'Chương trình vừa học vừa làm được nhà trường liên kết doanh nghiệp bố trí việc làm ngay từ năm thứ nhất'
    ]
  },
  {
    id: 'usa',
    name: 'Hợp Chủng Quốc Hoa Kỳ',
    region: 'Bắc Mỹ',
    flag: '🇺🇸',
    tag: 'Top 50 Toàn Cầu',
    highlightBadge: 'Lựa Chọn Số 1 Về Học Bổng',
    badgeType: 'cyan',
    title: 'Du Học Mỹ: Đỉnh Cao Ivy League & Thị Trường STEM',
    description: 'Hệ thống hơn 4,000 trường đại học với quỹ học bổng và hỗ trợ tài chính (Financial Aid) hào phóng nhất hành tinh. Chính sách visa OPT kéo dài đến 3 năm cho khối ngành khoa học công nghệ STEM.',
    maxScholarship: '100% Học Phí',
    postStudyWork: 'Tới 3 Năm',
    avgCost: '$25,000 - $65,000',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJzNBvHV0tXkUTGIKPQ7u0S7UUMLwrqXPNzIP8k2kM4MZy0APmvEeXqNAiD1s83pJ6qi64s92MIKrqXRpSP4d8ze2D6WGmV1bZyK2ON35pNebnien1PULFZElNw7ON-6_Q47dIeh88N3chd26r4FKvjwJT3Rb6JFRTqwLm3bqtgTy4BFAxCf0WcCSRkWALeThHdZZMchv3aNdYOYRLLZN-On3ZP-iEEXt3Rj5T3oTjerJrmkD9kqdo',
    visaRate: '98.5%',
    topUniversities: ['Harvard University', 'MIT', 'Stanford University', 'Cornell University', 'Columbia University', 'UPenn'],
    popularMajors: ['Computer Science & AI', 'Finance & FinTech', 'Biomedical Science', 'Data Analytics'],
    keyBenefits: [
      'Gói hỗ trợ tài chính Need-based Aid cho sinh viên quốc tế tại Ivy League',
      'Thời gian gia hạn OPT 36 tháng đối với bằng cấp nhóm ngành STEM',
      'Mạng lưới cựu sinh viên toàn cầu với mức thu nhập khởi điểm trung bình $85,000/năm'
    ]
  },
  {
    id: 'uk',
    name: 'Vương Quốc Anh',
    region: 'Châu Âu',
    flag: '🇬🇧',
    tag: 'Thời Gian Tối Ưu',
    highlightBadge: 'Russell Group',
    badgeType: 'cyan',
    title: 'Du Học Anh: 3 Năm Cử Nhân, 1 Năm Thạc Sĩ',
    description: 'Tiết kiệm 1 năm chi phí sinh hoạt so với các nước khác. Visa sau tốt nghiệp (PSW) ở lại 2 năm trải nghiệm thị trường tài chính quốc tế London.',
    maxScholarship: '£5,000 - 100%',
    postStudyWork: '3 Năm (Đại Học)',
    avgCost: '£18,000 - £35,000',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7WpYo5lsMxsft_88Yka2iR7-F3OSINQqJHu7klAUqugKZ0QtRqTeuWCspVcaXhBKBdAwTFOAl2YD880SMChsJVLvMXzH5ehro9caiNOcnMayJrDLP45ONE4l2iHLJlqbORsOnfEIwoIa8dYPAEnfR_Qd_dvgkfiiev0Z_D6Mg8yPPzXIoYn0MvkCC-2mPHWT5irKvKjb60rb3WPxHBhwHvpLCcJSC1KR7vaDDf3CV7fNTO8OPtvqD',
    visaRate: '99.4%',
    topUniversities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'UCL', 'LSE', 'University of Edinburgh'],
    popularMajors: ['Economics & Management', 'Law', 'Artificial Intelligence', 'Architecture'],
    keyBenefits: [
      'Chương trình thạc sĩ chỉ 1 năm giúp tiết kiệm thời gian và chi phí sinh hoạt',
      'Chính sách Graduate Route cho phép ở lại làm việc tự do 2 năm',
      'Các học bổng danh giá: Chevening, GREAT Scholarship, Vice-Chancellor Award'
    ]
  },
  {
    id: 'aus',
    name: 'Úc (Australia)',
    region: 'Châu Đại Dương',
    flag: '🇦🇺',
    tag: 'Định Cư Rộng Mở',
    highlightBadge: 'Group of Eight (Go8)',
    badgeType: 'cyan',
    title: 'Du Học Úc: Chính Sách Visa Làm Việc 4-6 Năm',
    description: 'Chất lượng sống hàng đầu thế giới tại Melbourne, Sydney. Quyền làm việc 48 giờ/2 tuần và cơ hội định cư theo diện tay nghề cao được bảo trợ.',
    maxScholarship: '20% - 50%',
    postStudyWork: '~23.23 AUD/h',
    avgCost: '$30,000 - $48,000 AUD',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQZrDqxQkAFvGPxsDaNS4iItNNWi6qJu5fadT7EDWMe7ky5Tvi4Axk9kDdi8xKEhtDOMw87eiTKGaKT6OBjEwon3mXqCkj7W6WGkjKCN8Kuhuxzox1om6tPf6Gsk824NuAU6etooVcYSHBo_sI_NPZYyAhSWA7KkCbEgZGouWXcA4PB_qOb-OtZL9pzYwq_pyWwxv9OK0i7cBVO2Plguvaogx_EDZbfogXyvEp300WmDNmrcDOV2uX',
    visaRate: '99.1%',
    topUniversities: ['Univ. of Melbourne', 'Univ. of Sydney', 'Australian National University', 'UNSW Sydney', 'Univ. of Queensland', 'Monash'],
    popularMajors: ['Healthcare & Nursing', 'Information Technology', 'Civil Engineering', 'Accounting & Business'],
    keyBenefits: [
      'Được phép làm việc bán thời gian 48h/2 tuần với mức lương cơ bản cao hàng đầu thế giới',
      'Visa làm việc sau tốt nghiệp từ 2 - 4 năm tùy vùng (Regional area ưu đãi cộng điểm PR)',
      'Học bổng xét tự động theo điểm GPA từ 20% đến 50%'
    ]
  }
];

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: 's1',
    name: 'Nguyễn Văn An',
    previousSchool: 'Cựu SV ĐH Bách Khoa Hà Nội',
    targetUniversity: 'Tập đoàn Công nghiệp Toyota (Aichi, Nhật Bản)',
    country: 'Nhật Bản',
    term: 'Xuất Cảnh Kỳ Tháng 08/2024',
    scholarshipAmount: 'Lương 42 Triệu / Tháng',
    scholarshipDetail: 'Visa Kỹ Năng Đặc Định Tokutei Ginou 1 (5 Năm)',
    badgeType: 'gold',
    quote: 'EduGlobal đã đào tạo tiếng Nhật cấp tốc N3 và luyện tay nghề phỏng vấn đỗ ngay lần đầu. Hiện tại thu nhập thực nhận của mình rất ổn định, chỗ ở tiện nghi và chuẩn bị thi Tokutei 2 để bảo lãnh vợ sang.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    satScore: 'JLPT N3',
    gpa: '8.4/10',
    ielts: 'Tokutei Đạt',
    major: 'Kỹ sư Cơ khí Chế tạo & Lắp ráp Ô tô'
  },
  {
    id: 's2',
    name: 'Trần Thị Kim Ngân',
    previousSchool: 'Cựu SV ĐH Khoa Học Xã Hội & Nhân Văn',
    targetUniversity: 'Seoul National University (SNU, Hàn Quốc)',
    country: 'Hàn Quốc',
    term: 'Kỳ Mùa Thu 2024',
    scholarshipAmount: '100% Học Phí + 1,000,000 Won/Tháng',
    scholarshipDetail: 'Học bổng Chính phủ Hàn Quốc Global Korea (GKS)',
    badgeType: 'cyan',
    quote: 'Hồ sơ nghiên cứu và bài luận của em được thầy cô EduGlobal sửa từng câu chữ, hướng dẫn phỏng vấn visa đại sứ quán Hàn Quốc chu đáo nên em đã nhận visa D-2 chỉ sau 2 tuần.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    satScore: 'TOPIK 5',
    gpa: '9.2/10',
    ielts: '7.5',
    major: 'Thạc sĩ Truyền thông & Văn hóa Hallyu'
  },
  {
    id: 's3',
    name: 'Phạm Văn Hải',
    previousSchool: 'Kỹ sư Cơ khí ĐH Giao Thông Vận Tải',
    targetUniversity: 'Tập đoàn Đóng tàu Hyundai Heavy Industries (Ulsan, Hàn Quốc)',
    country: 'Hàn Quốc',
    term: 'Xuất Cảnh Tháng 06/2024',
    scholarshipAmount: 'Lương 56 Triệu / Tháng',
    scholarshipDetail: 'Visa Kỹ Sư Chuyên Ngành E-7-3 Ký Dài Hạn',
    badgeType: 'gold',
    quote: 'Hồ sơ visa E-7 đòi hỏi chứng minh kinh nghiệm và bằng cấp rất gắt gao. Nhờ sự thẩm định chuẩn chỉ của EduGlobal, tôi đã nhận mã code visa nhanh chóng và được doanh nghiệp đài thọ vé máy bay.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    satScore: 'TOPIK 2',
    gpa: '8.1/10',
    ielts: 'Kỹ sư E-7',
    major: 'Kỹ sư Sơn vỏ tàu & Thiết kế cơ điện tàu thủy'
  },
  {
    id: 's4',
    name: 'Đặng Thùy Dương',
    previousSchool: 'Cựu HS THPT Chuyên Lê Hồng Phong TP.HCM',
    targetUniversity: 'National Tsing Hua University (NTHU, Đài Loan)',
    country: 'Đài Loan',
    term: 'Kỳ Mùa Thu 2024',
    scholarshipAmount: '100% Học Phí + Trợ Cấp TSMC',
    scholarshipDetail: 'Học bổng Nhân lực Vi mạch Bán dẫn Doanh nghiệp',
    badgeType: 'blue',
    quote: 'Chương trình liên kết doanh nghiệp bán dẫn tại Đài Loan do EduGlobal kết nối đã giúp em vừa có học bổng toàn phần, vừa có hợp đồng thực tập có lương tại công viên khoa học Tân Trúc.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    satScore: 'TOCFL B2',
    gpa: '9.3/10',
    ielts: '7.0',
    major: 'Kỹ thuật Vi điện tử & Bán dẫn (Semiconductor)'
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    step: '01',
    title: 'Định Hướng & Chọn Chương Trình',
    subtitle: 'Đánh giá năng lực, tay nghề & mục tiêu thu nhập',
    description: 'Khảo sát nguyện vọng: Du học học bổng hay Xuất khẩu lao động tay nghề cao tại Nhật Bản, Hàn Quốc hoặc Đài Loan. Đánh giá trình độ ngoại ngữ, bằng cấp chuyên môn và khả năng tài chính của bạn.',
    tag: 'Tư Vấn Miễn Phí 1:1',
    iconName: 'psychology',
    deliverables: [
      'Phân tích năng lực ứng viên và lựa chọn thị trường phù hợp nhất (Nhật - Hàn - Đài)',
      'Danh sách đơn hàng XKLĐ (Tokutei, E-7, EPS) hoặc trường Đại học/Học viện liên kết',
      'Lập lộ trình chuẩn bị tài chính minh bạch, rõ ràng, không phát sinh chi phí phụ'
    ],
    timeline: 'Tuần 1 - 2'
  },
  {
    step: '02',
    title: 'Đào Tạo Ngôn Ngữ & Rèn Luyện Tay Nghề',
    subtitle: 'Tiếng Nhật, Tiếng Hàn, Tiếng Trung & Kỹ năng phỏng vấn',
    description: 'Chương trình đào tạo tập trung tại cơ sở EduGlobal: Tiếng Nhật cấp tốc N5-N3, Tiếng Hàn Topik 1-3, Tiếng Trung TOCFL; rèn luyện tay nghề thực tế và phong thái phỏng vấn doanh nghiệp bản xứ.',
    tag: 'Trung Tâm Đào Tạo Chuẩn',
    iconName: 'school',
    deliverables: [
      'Khóa học ngôn ngữ giao tiếp và luyện thi chứng chỉ năng lực theo chuẩn quốc tế',
      'Đào tạo kỹ năng nghề chuyên sâu: Cơ khí, Điện tử, Đóng tàu, Điều dưỡng, v.v.',
      'Rèn luyện tác phong văn hóa làm việc và kỹ năng ứng xử chuẩn phong cách Nhật/Hàn/Đài'
    ],
    timeline: 'Tháng 1 - 3'
  },
  {
    step: '03',
    title: 'Phỏng Vấn Doanh Nghiệp & Tiếp Nhận Đơn Hàng',
    subtitle: 'Thi tuyển trực tiếp cùng nghiệp đoàn / đại diện trường',
    description: 'Tham gia thi tuyển trực tiếp hoặc phỏng vấn online 1-1 với các tập đoàn, nghiệp đoàn tuyển dụng và hội đồng trường. Tỷ lệ đỗ phỏng vấn lần 1 tại EduGlobal đạt trên 96%.',
    tag: 'Bao Đỗ Đơn Hàng Uy Tín',
    iconName: 'record_voice_over',
    deliverables: [
      'Luyện phỏng vấn thử nghiệm (Mock Interview) với chuyên gia bản xứ',
      'Ký kết hợp đồng ngoại và xác nhận chế độ lương thưởng, bảo hiểm minh bạch',
      'Nhận thư mời nhập học hoặc giấy báo trúng tuyển đơn hàng xuất cảnh chính thức'
    ],
    timeline: 'Tháng 3 - 4'
  },
  {
    step: '04',
    title: 'Thẩm Định Hồ Sơ & Cấp Visa Xuất Cảnh',
    subtitle: 'Xin tư cách lưu trú (COE/CCVI) & Visa Đại Sứ Quán',
    description: 'Bộ phận pháp lý của EduGlobal trực tiếp xử lý trọn gói giấy chứng nhận tư cách lưu trú (COE/CCVI), công chứng dịch thuật và nộp hồ sơ xin visa tại Đại sứ quán / Lãnh sự quán.',
    tag: 'Tỷ Lệ Đậu Visa 99.4%',
    iconName: 'verified',
    deliverables: [
      'Hồ sơ tư cách lưu trú và bảo lãnh hợp pháp 100% được cấp phép bởi Bộ Tư pháp',
      'Luyện phản xạ phỏng vấn visa trực tiếp nếu có yêu cầu từ Đại sứ quán',
      'Nhận visa chính thức và hướng dẫn chuẩn bị hành lý đầy đủ trước giờ bay'
    ],
    timeline: 'Tháng 4 - 6'
  },
  {
    step: '05',
    title: 'Xuất Cảnh, Đón Sân Bay & Bảo Trợ Quyền Lợi',
    subtitle: 'Đồng hành hỗ trợ trọn đời tại nước sở tại',
    description: 'Cán bộ văn phòng đại diện EduGlobal tại Tokyo, Seoul, Đài Bắc trực tiếp đón tại sân bay, đưa về nơi ở/ký túc xá, làm thủ tục đăng ký cư trú, thẻ ngân hàng và hỗ trợ bảo vệ quyền lợi người lao động/du học sinh suốt hợp đồng.',
    tag: 'Văn Phòng Tại Nước Sở Tại',
    iconName: 'connecting_airports',
    deliverables: [
      'Đón tiễn hai đầu sân bay Việt Nam và sân bay quốc tế Nhật/Hàn/Đài Loan',
      'Bố trí chỗ ở ký túc xá sạch sẽ, đầy đủ tiện nghi, hướng dẫn đi lại phương tiện công cộng',
      'Bảo hộ pháp lý, hỗ trợ chuyển việc/gia hạn visa hoặc thi nâng hạng Tokutei 2, E-7'
    ],
    timeline: 'Ngày xuất cảnh & Suốt hợp đồng'
  }
];

export const SCHOLARSHIPS_DATA: ScholarshipItem[] = [
  {
    id: 'sch-1',
    title: 'Chương Trình Kỹ Năng Đặc Định Tokutei Ginou Nhật Bản',
    university: 'Nghiệp đoàn & Doanh nghiệp Tiếp nhận Tokyo, Aichi, Osaka',
    country: 'Nhật Bản',
    level: 'Xuất Khẩu Lao Động',
    coverage: 'Lương 35 - 55 Triệu / Tháng',
    value: 'Lương thực lĩnh + Thưởng + Bảo hiểm đầy đủ',
    deadline: 'Tuyển liên tục hàng tháng',
    eligibility: ['Nam/Nữ độ tuổi 18 - 38', 'Đỗ kỳ thi Tokutei và JLPT N4/JFT-Basic', 'Sức khỏe tốt, không tiền án tiền sự'],
    description: 'Chương trình lao động kỹ năng đặc định thời hạn 5 năm, được hưởng mức lương bình đẳng như người Nhật, hỗ trợ nhà ở và cơ hội thi Tokutei 2 để bảo lãnh gia đình sang định cư.',
    isPopular: true
  },
  {
    id: 'sch-2',
    title: 'Học Bổng Toàn Phần MEXT - Bộ Giáo Dục & Khoa Học Nhật Bản',
    university: 'Các Đại học Quốc lập & Hoàng Gia Nhật Bản (ĐH Tokyo, Kyoto, Osaka)',
    country: 'Nhật Bản',
    level: 'Đại Học & Thạc Sĩ',
    coverage: '100% Học Phí & Vé Máy Bay',
    value: 'Trợ cấp 143,000 - 145,000 Yên/tháng (~25-27 triệu VNĐ)',
    deadline: 'Tháng 5 và Tháng 10 hàng năm',
    eligibility: ['GPA THPT hoặc Đại học từ 8.5/10', 'Trình độ tiếng Anh IELTS 6.5+ hoặc tiếng Nhật N2+', 'Vượt qua bài thi viết và phỏng vấn Đại sứ quán'],
    description: 'Học bổng danh giá nhất của chính phủ Nhật Bản chi trả toàn bộ học phí 4-5 năm, tiền vé máy bay khứ hồi và sinh hoạt phí hàng tháng không phải hoàn lại.',
    isPopular: true
  },
  {
    id: 'sch-3',
    title: 'Học Bổng Báo Nhật Bản (Asahi / Yomiuri Shimbun)',
    university: 'Các Trường Nhật Ngữ Hàng Đầu Khu Vực Tokyo & Osaka',
    country: 'Nhật Bản',
    level: 'Du Học Vừa Học Vừa Làm',
    coverage: 'Tài Trợ 100% Học Phí & Nhà Ở Miễn Phí',
    value: 'Miễn học phí + Lương làm thêm ~22 - 28 triệu/tháng',
    deadline: 'Kỳ tháng 4 và tháng 10 hàng năm',
    eligibility: ['Nam/Nữ tốt nghiệp THPT trở lên, tuổi 18-28', 'Có bằng lái xe máy tại Việt Nam', 'Sức khỏe tốt, chịu khó'],
    description: 'Chương trình du học không cần chứng minh tài chính lớn: Tòa soạn báo tài trợ toàn bộ tiền học phí và phòng ở riêng, đồng thời trả lương phát báo cố định mỗi tháng.',
    isPopular: true
  },
  {
    id: 'sch-4',
    title: 'Visa Kỹ Sư E-7 Đóng Tàu & Cơ Khí Chế Tạo Hàn Quốc',
    university: 'Các Tập đoàn Hyundai Heavy Industries, Hanwha Ocean, Samsung C&T',
    country: 'Hàn Quốc',
    level: 'Kỹ Sư Xuất Khẩu Lao Động',
    coverage: 'Lương 45 - 65 Triệu / Tháng',
    value: 'Hợp đồng dài hạn 3-5 năm, gia hạn không giới hạn',
    deadline: 'Xét tuyển đợt 1 và đợt 2 trong năm',
    eligibility: ['Tốt nghiệp Cao đẳng/Đại học chuyên ngành Cơ khí, Đóng tàu, Điện tử', 'Tối thiểu 1-2 năm kinh nghiệm bảo hiểm', 'Tiếng Hàn giao tiếp cơ bản (được đào tạo)'],
    description: 'Chương trình visa chuyên nghiệp diện E-7 được bảo lãnh vợ con sang Hàn Quốc cùng sinh sống, hưởng chế độ bảo hiểm phúc lợi tương đương kỹ sư người Hàn.',
    isPopular: true
  },
  {
    id: 'sch-5',
    title: 'Học Bổng Chính Phủ Hàn Quốc Global Korea Scholarship (GKS)',
    university: 'Hệ thống Trường Top SKY (SNU, Korea Univ, Yonsei) & KAIST',
    country: 'Hàn Quốc',
    level: 'Đại Học & Sau Đại Học',
    coverage: '100% Học Phí + Sinh Hoạt Phí',
    value: 'Toàn bộ học phí + 1,000,000 Won/tháng + Vé máy bay',
    deadline: 'Tháng 2 (Đại học) & Tháng 9 (Thạc sĩ)',
    eligibility: ['GPA THPT / Đại học tối thiểu 8.0/10', 'TOPIK cấp 3 trở lên hoặc IELTS 6.5+', 'Bài luận kế hoạch học tập xuất sắc'],
    description: 'Học bổng toàn diện bậc nhất của Viện Giáo dục Quốc tế Hàn Quốc (NIIED) bao gồm 1 năm học tiếng Hàn và 4 năm chuyên ngành.'
  },
  {
    id: 'sch-6',
    title: 'Học Bổng Doanh Nghiệp Vi Mạch Bán Dẫn TSMC & MOE Đài Loan',
    university: 'Đại học Quốc gia Đài Loan (NTU) & ĐH Thanh Hoa (NTHU)',
    country: 'Đài Loan',
    level: 'Cử Nhân & Thạc Sĩ Kỹ Thuật',
    coverage: '100% Học Phí & Trợ Cấp Thực Tập Lương Cao',
    value: 'Miễn 100% học phí + Trợ cấp 20,000 - 35,000 TWD/tháng',
    deadline: 'Tháng 3 và Tháng 9 hàng năm',
    eligibility: ['Tốt nghiệp THPT chuyên hoặc sinh viên khối ngành STEM', 'TOCFL B1 hoặc IELTS 6.0+', 'Cam kết thực tập tại công viên khoa học'],
    description: 'Chương trình đào tạo kỹ sư bán dẫn do chính phủ Đài Loan và tập đoàn TSMC tài trợ, cam kết cơ hội việc làm kỹ sư chính thức sau khi tốt nghiệp.'
  }
];

export const MENTORS_DATA: Mentor[] = [
  {
    id: 'm1',
    name: 'ThS. Nguyễn Đình Hùng',
    role: 'Trưởng Cố Vấn XKLĐ Tokutei & Kỹ Sư Nhật Bản',
    university: 'Cựu Nghiên Cứu Sinh ĐH Nagoya • 12 Năm Kinh Nghiệm Nghiệp Đoàn',
    country: 'Nhật Bản',
    scholarshipGranted: 'Chứng chỉ Thẩm định Nghiệp đoàn JITCO Nhật Bản',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    expertise: ['Đơn hàng Tokutei Ginou 1 & 2', 'Visa Kỹ sư CNTT & Cơ khí Nhật', 'Thẩm định hồ sơ COE và tư cách lưu trú'],
    bio: 'Hơn 12 năm làm việc trực tiếp với các nghiệp đoàn và tập đoàn chế tạo tại Tokyo, Aichi, Osaka. Đã tư vấn và đưa hơn 3,200 kỹ sư và lao động xuất cảnh thành công.'
  },
  {
    id: 'm2',
    name: 'TS. Park Min Joon & Cố vấn Kim Hye Jin',
    role: 'Chuyên Gia Visa Kỹ Sư E-7 & Du Học Hàn Quốc',
    university: 'Seoul National University (SNU) • Cựu Cán Bộ Tuyển Dụng Nhân Lực',
    country: 'Hàn Quốc',
    scholarshipGranted: 'Học bổng Toàn phần Chính phủ GKS & Chứng chỉ E-7 Specialist',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    expertise: ['Visa Kỹ sư E-7 Đóng tàu & Cơ khí', 'Luyện thi tiếng Hàn EPS E-9', 'Hồ sơ học bổng GKS Top SKY Hàn Quốc'],
    bio: 'Đại diện kết nối nhân lực trực tiếp với các tập đoàn công nghiệp nặng Hàn Quốc tại Ulsan và Gyeonggi. Đảm bảo tỷ lệ ra mã visa E-7 đạt 98.8%.'
  },
  {
    id: 'm3',
    name: 'Chuyên gia Trần Quang Huy',
    role: 'Giám Đốc Thẩm Định Hồ Sơ & Đơn Hàng Đài Loan',
    university: 'National Taiwan University (NTU Alumnus) • Chuyên Gia Hợp Tác Lao Động',
    country: 'Đài Loan',
    scholarshipGranted: 'Học bổng MOE Đài Loan & Giấy phép Tư vấn Xuất cảnh',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    expertise: ['Đơn hàng Công xưởng Điện tử Foxconn / Pegatron', 'Hệ du học Tân Hướng Nam Vừa học Vừa làm', 'Học bổng Bán dẫn TSMC & NTHU'],
    bio: 'Hơn 10 năm kinh nghiệm xử lý đơn hàng xuất cảnh nhanh 1-2 tháng và các chương trình vừa học vừa làm tại Đài Bắc, Tân Trúc, Đài Trung.'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Chính Sách Mới Visa Tokutei 2 Nhật Bản: Mở Rộng 11 Ngành Nghề & Cơ Hội Bảo Lãnh Gia Đình Vĩnh Trú',
    category: 'XKLĐ Kỹ Năng Nhật Bản',
    date: '18/08/2024',
    readTime: '5 phút đọc',
    summary: 'Chính phủ Nhật Bản chính thức nới lỏng quy định cho kỳ thi Kỹ năng đặc định Tokutei 2, cho phép lao động Việt Nam ở lại vô thời hạn, đưa vợ con sang sinh sống và hưởng bảo hiểm y tế toàn diện.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    tags: ['Tokutei 2', 'Nhật Bản', 'Bảo Lãnh Gia Đình', 'Vĩnh Trú', 'XKLĐ 2025'],
    author: {
      name: 'ThS. Nguyễn Đình Hùng',
      role: 'Trưởng Ban Cố Vấn JITCO & XKLĐ Nhật Bản',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    keyStats: [
      { label: 'Ngành nghề mở rộng', value: '11 Ngành' },
      { label: 'Thời gian lưu trú', value: 'Vô thời hạn' },
      { label: 'Quyền bảo lãnh', value: 'Vợ/chồng & Con' },
      { label: 'Thu nhập bình quân', value: '45 - 65 Tr/tháng' }
    ],
    relatedProgramTitle: 'Chương Trình Tokutei Ginou Nhật Bản',
    sections: [
      {
        heading: '1. Bối cảnh mở rộng chính sách Tokutei 2 tại Nhật Bản',
        paragraphs: [
          'Nhật Bản đang đối mặt với tình trạng già hóa dân số và thiếu hụt trầm trọng nhân lực có tay nghề trong các ngành sản xuất cốt lõi. Để giữ chân nhân lực chất lượng cao từ Việt Nam, Nội các Nhật Bản đã thông qua quyết định mang tính bước ngoặt: mở rộng diện cấp tư cách Tokutei 2 (Kỹ năng đặc định loại 2) từ 2 ngành ban đầu lên 11 ngành nghề.',
          'Khác với diện Tokutei 1 có thời hạn tối đa 5 năm và không được bảo lãnh người thân, Tokutei 2 được coi là bước đệm trực tiếp để người lao động xin vĩnh trú (định cư lâu dài) tại xứ sở mặt trời mọc.'
        ],
        calloutBox: 'Điểm đột phá: Người lao động đạt tư cách Tokutei 2 được gia hạn hợp đồng không giới hạn số lần và có quyền đưa vợ/chồng cùng con cái sang sinh sống tại Nhật Bản.'
      },
      {
        heading: '2. Danh sách 11 ngành nghề chính thức được áp dụng',
        paragraphs: [
          'Các nghiệp đoàn và xí nghiệp tiếp nhận tại Tokyo, Osaka, Aichi, Kanagawa hiện đã bắt đầu tổ chức kỳ thi nâng hạng cho lao động:',
        ],
        bulletPoints: [
          'Xây dựng công trình & vận hành máy xây dựng',
          'Đóng tàu và sản xuất máy móc hàng hải',
          'Bảo dưỡng và sửa chữa ô tô tiêu chuẩn cao',
          'Nghiệp vụ dịch vụ mặt đất sân bay & bảo dưỡng hàng không',
          'Vệ sinh quản lý tòa nhà chuyên nghiệp',
          'Nông nghiệp trồng trọt & chăn nuôi công nghệ cao',
          'Ngư nghiệp và nuôi trồng thủy sản biển',
          'Chế biến thực phẩm và đồ uống tiêu chuẩn HACCP',
          'Dịch vụ ăn uống, nhà hàng và khách sạn lưu trú',
          'Chế tạo máy móc, đúc kim loại và cơ khí chính xác',
          'Điện - điện tử công nghiệp và vật liệu bán dẫn'
        ]
      },
      {
        heading: '3. Điều kiện thi đỗ và chuyển đổi từ Tokutei 1 sang Tokutei 2',
        paragraphs: [
          'Để chuyển sang Tokutei 2, ứng viên cần thỏa mãn 2 điều kiện cốt lõi: vượt qua kỳ thi đánh giá kỹ năng chuyên môn cấp độ 2 do Bộ chuyên ngành Nhật Bản tổ chức, và có kinh nghiệm thực tế từ 2-3 năm với vai trò trưởng nhóm/quản lý tổ sản xuất tại nhà máy.',
          'Về trình độ tiếng Nhật: Không bắt buộc chứng chỉ N1 hay N2, nhưng yêu cầu khả năng giao tiếp nghiệp vụ thực tế trôi chảy để chỉ đạo công việc cho các thực tập sinh mới.'
        ],
        bulletPoints: [
          'Hồ sơ không có vi phạm pháp luật hoặc vi phạm thuế thu nhập cá nhân tại Nhật Bản',
          'Có thư tiến cử và xác nhận năng lực tay nghề từ giám đốc xí nghiệp tiếp nhận',
          'Chứng chỉ bài thi Kỹ năng đặc định loại 2 còn hiệu lực'
        ]
      },
      {
        heading: '4. Lời khuyên chiến lược từ Chuyên gia EduGlobal',
        paragraphs: [
          'Thực tập sinh hoặc lao động Tokutei 1 đang làm việc tại Nhật Bản nên chủ động liên hệ EduGlobal để được cung cấp đề thi mẫu, tài liệu ôn tập tiếng Nhật chuyên ngành và hướng dẫn pháp lý khi nộp hồ sơ xin bảo lãnh người thân sang cư trú.'
        ]
      }
    ]
  },
  {
    id: 'n2',
    title: 'Hàn Quốc Tăng Mạnh Hạn Ngạch Tiếp Nhận Kỹ Sư E-7 Ngành Đóng Tàu & Cơ Khí Năm 2025',
    category: 'Kỹ Sư & Lao Động Hàn Quốc',
    date: '12/08/2024',
    readTime: '6 phút đọc',
    summary: 'Bộ Tư pháp Hàn Quốc chính thức nâng hạn ngạch tiếp nhận kỹ sư nước ngoài theo diện visa E-7-3 và E-7-1, mang lại mức lương thực lĩnh từ 45 - 65 triệu đồng/tháng cho kỹ sư Việt Nam.',
    imageUrl: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80',
    tags: ['Visa E-7', 'Hàn Quốc', 'Đóng Tàu Hyundai', 'Cơ Khí', 'Kỹ Sư'],
    author: {
      name: 'TS. Park Min Joon',
      role: 'Cố Vấn Tuyển Dụng Doanh Nghiệp Hàn Quốc',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    keyStats: [
      { label: 'Lương thực lĩnh', value: '45 - 65 Triệu/tháng' },
      { label: 'Thời hạn hợp đồng', value: 'Ký 3-5 năm' },
      { label: 'Visa bảo lãnh', value: 'Cấp cho vợ/chồng & con' },
      { label: 'Thời gian xét duyệt', value: '1.5 - 2.5 Tháng' }
    ],
    relatedProgramTitle: 'Visa Kỹ Sư E-7 Đóng Tàu & Cơ Khí Hàn Quốc',
    sections: [
      {
        heading: '1. Nhu cầu bùng nổ từ các tập đoàn đóng tàu hàng đầu Hàn Quốc',
        paragraphs: [
          'Các siêu tập đoàn đóng tàu lớn nhất thế giới như HD Hyundai Heavy Industries, Hanwha Ocean (trước đây là Daewoo Shipbuilding) và Samsung Heavy Industries liên tục thắng lớn các hợp đồng đóng tàu chở khí hóa lỏng LNG và container xanh trị giá hàng chục tỷ USD.',
          'Để giải quyết bài toán thiếu hụt nhân lực kỹ thuật, chính phủ Hàn Quốc đã ban hành chính sách ưu tiên xét cấp mã code visa E-7 nhanh chóng cho lao động kỹ thuật tay nghề cao đến từ Việt Nam.'
        ],
        calloutBox: 'Mức lương cơ bản cho kỹ sư E-7 ngành đóng tàu được quy định tối thiểu bằng 70-80% thu nhập bình quân đầu người của Hàn Quốc (tương đương 2.68 - 3.8 triệu Won/tháng, chưa tính làm thêm giờ).'
      },
      {
        heading: '2. Các vị trí tuyển dụng trọng điểm',
        paragraphs: [
          'Các đơn hàng phỏng vấn trực tiếp hàng tháng với chế độ đài thọ vé máy bay và ký túc xá:',
        ],
        bulletPoints: [
          'Thợ hàn công nghệ cao (Hàn CO2, TIG, MIG, hàn đáy tàu ngầm)',
          'Kỹ sư sơn vỏ tàu & xử lý chống ăn mòn bề mặt kim loại',
          'Kỹ sư thiết kế kết cấu thân tàu, hệ thống đường ống hàng hải',
          'Kỹ thuật viên điện - tự động hóa động cơ tàu thủy',
          'Kỹ sư gia công cơ khí chính xác, tiện phay CNC'
        ]
      },
      {
        heading: '3. Tiêu chuẩn ứng tuyển và quy trình thẩm định hồ sơ',
        paragraphs: [
          'So với visa lao động phổ thông EPS (E-9), visa E-7 là visa kỹ sư chuyên môn cao đòi hỏi chứng minh bằng cấp và thâm niên công tác thực tế:',
        ],
        bulletPoints: [
          'Bằng cấp: Tốt nghiệp từ Cao đẳng chính quy hoặc Đại học chuyên ngành kỹ thuật liên quan',
          'Kinh nghiệm: Có sổ bảo hiểm xã hội tối thiểu 1 năm (đối với bằng Đại học) hoặc 2-3 năm (đối với bằng Cao đẳng)',
          'Ngoại ngữ: Có chứng chỉ tiếng Hàn TOPIK 1-2 hoặc vượt qua bài kiểm tra phản xạ của nghiệp đoàn tiếp nhận'
        ]
      }
    ]
  },
  {
    id: 'n3',
    title: 'Đài Loan Đẩy Mạnh Học Bổng Tân Hướng Nam & Tuyển Dụng Kỹ Thuật Viên Ngành Chip Bán Dẫn TSMC',
    category: 'Du Học & Việc Làm Đài Loan',
    date: '05/08/2024',
    readTime: '4 phút đọc',
    summary: 'Nhu cầu nhân lực vi mạch bùng nổ, các trường đại học công nghệ hàng đầu Đài Loan cùng các tập đoàn bán dẫn công bố quỹ học bổng miễn 100% học phí và trợ cấp sinh hoạt cho học sinh Việt.',
    imageUrl: 'https://images.unsplash.com/photo-1508247967583-7d982ea01526?auto=format&fit=crop&w=800&q=80',
    tags: ['Đài Loan', 'Bán Dẫn TSMC', 'Học Bổng 100%', 'Tân Hướng Nam', 'STEM'],
    author: {
      name: 'Chuyên gia Trần Quang Huy',
      role: 'Giám Đốc Hợp Tác Nhân Lực Đài Loan',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    keyStats: [
      { label: 'Tài trợ học phí', value: '100% Suốt Khóa' },
      { label: 'Trợ cấp hàng tháng', value: '15,000 - 30,000 TWD' },
      { label: 'Cam kết việc làm', value: 'Hợp đồng 3 năm' },
      { label: 'Thời gian bay', value: 'Tháng 2 & Tháng 9' }
    ],
    relatedProgramTitle: 'Học Bổng Doanh Nghiệp Bán Dẫn TSMC & MOE Đài Loan',
    sections: [
      {
        heading: '1. Vị thế thủ phủ bán dẫn thế giới và cơn khát nhân tài',
        paragraphs: [
          'Đài Loan sản xuất hơn 60% tổng lượng vi mạch bán dẫn toàn cầu và hơn 90% các loại chip tiên tiến nhất thế giới. Các công viên khoa học Tân Trúc, Đài Trung và Đài Nam đang mở rộng gấp đôi công suất với sự hiện diện của TSMC, MediaTek, ASE Group và Foxconn.',
          'Để bổ sung hàng nghìn kỹ sư vi điện tử mỗi năm, Viện Hành Chính Đài Loan triển khai chương trình "Tân Hướng Nam Chuyên Ngành STEM" với nguồn ngân sách khổng lồ dành riêng cho sinh viên Việt Nam.'
        ]
      },
      {
        heading: '2. Quyền lợi học bổng độc quyền liên kết EduGlobal',
        paragraphs: [
          'Chương trình vừa học vừa làm có lương tại các trường đối tác như ĐH Thanh Hoa (NTHU), ĐH Giao Thông Dương Minh (NYCU) và ĐH Quốc Gia Khoa Học Công Nghệ Đài Loan (Taiwan Tech):',
        ],
        bulletPoints: [
          'Miễn 100% học phí và ký túc xá cho toàn bộ chương trình Cử nhân (4 năm) hoặc Thạc sĩ (2 năm)',
          'Trợ cấp sinh hoạt phí hàng tháng từ 15,000 đến 30,000 Đài tệ (~12 - 24 triệu VNĐ)',
          'Thực tập có lương chính thức tại phòng Lab Cleanroom của tập đoàn từ năm thứ 2',
          'Ký hợp đồng làm việc chính thức tối thiểu 3 năm sau khi tốt nghiệp với mức lương khởi điểm từ 50,000 TWD/tháng (~40 triệu VNĐ)'
        ]
      }
    ]
  },
  {
    id: 'n4',
    title: 'Học Bổng Toàn Phần MEXT Nhật Bản 2025: Cẩm Nang Hồ Sơ & Chiến Lược Phỏng Vấn Đỗ Kỳ Đầu',
    category: 'XKLĐ Kỹ Năng Nhật Bản',
    date: '28/07/2024',
    readTime: '7 phút đọc',
    summary: 'Chi tiết hướng dẫn chuẩn bị đề cương nghiên cứu, bí quyết phỏng vấn trực tiếp tại Đại sứ quán Nhật Bản và lộ trình 100% học phí kèm vé máy bay khứ hồi miễn phí.',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=800&q=80',
    tags: ['MEXT', 'Nhật Bản', 'Học Bổng Toàn Phần', 'Đại Học Quốc Lập'],
    author: {
      name: 'ThS. Nguyễn Đình Hùng',
      role: 'Cựu Nghiên Cứu Sinh ĐH Nagoya • Cố Vấn MEXT',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    keyStats: [
      { label: 'Giá trị học bổng', value: '100% + Vé máy bay' },
      { label: 'Trợ cấp mỗi tháng', value: '145,000 Yên/tháng' },
      { label: 'Tỷ lệ cạnh tranh', value: 'Top 5% hồ sơ' },
      { label: 'Hạn nộp hồ sơ', value: 'Tháng 5 & Tháng 10' }
    ],
    relatedProgramTitle: 'Học Bổng Toàn Phần MEXT Nhật Bản',
    sections: [
      {
        heading: '1. Học bổng MEXT (Monbukagakusho) là gì?',
        paragraphs: [
          'Học bổng MEXT do Bộ Giáo dục, Văn hóa, Thể thao, Khoa học và Công nghệ Nhật Bản tài trợ là học bổng chính phủ danh giá nhất dành cho sinh viên quốc tế. Toàn bộ tiền học phí, tiền vé máy bay khứ hồi và sinh hoạt phí đều do chính phủ Nhật chi trả không hoàn lại.',
          'Có 2 con đường chính để ứng tuyển: Tiến cử của Đại sứ quán (Embassy Track) và Tiến cử của Trường Đại học (University Track).'
        ]
      },
      {
        heading: '2. Điều kiện then chốt để lọt vào vòng phỏng vấn',
        paragraphs: [
          'Hội đồng tuyển sinh MEXT đánh giá toàn diện năng lực học thuật và sự cam kết cống hiến cho mối quan hệ hữu nghị song phương Việt - Nhật:',
        ],
        bulletPoints: [
          'Điểm trung bình tích lũy GPA từ 8.2/10 trở lên',
          'Ngoại ngữ: IELTS 6.5+ hoặc chứng chỉ tiếng Nhật JLPT N2 trở lên',
          'Đề cương nghiên cứu (Research Proposal) rõ ràng, mang tính ứng dụng thực tiễn cao'
        ]
      }
    ]
  },
  {
    id: 'n5',
    title: 'Quy Định Mới Về Chứng Minh Tài Chính & Bảo Lãnh Chi Phí Xuất Cảnh Đông Á 2025',
    category: 'Cẩm Nang & Pháp Lý',
    date: '20/07/2024',
    readTime: '5 phút đọc',
    summary: 'Tổng hợp tất cả quy định mới nhất từ Cục Quản lý Lao động Ngoài nước (DOLAB) về minh bạch phí xuất cảnh, xóa bỏ nạn tiền môi giới bất hợp pháp và gói vay vốn ưu đãi.',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    tags: ['Pháp Lý', 'Chi Phí Xuất Cảnh', 'DOLAB', 'Minh Bạch', 'Vay Vốn'],
    author: {
      name: 'Chuyên gia Trần Quang Huy',
      role: 'Trưởng Ban Pháp Chế & Minh Bạch Chi Phí EduGlobal',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    keyStats: [
      { label: 'Bảo lãnh tài chính', value: 'Chính sách nợ phí 0đ' },
      { label: 'Ngân hàng hỗ trợ', value: 'Agribank / CSXH' },
      { label: 'Hạn mức vay vốn', value: 'Đến 100% Chi phí' },
      { label: 'Lãi suất ưu đãi', value: 'Chỉ 0.5% / tháng' }
    ],
    sections: [
      {
        heading: '1. Triệt tiêu tình trạng phát sinh phụ phí xuất cảnh',
        paragraphs: [
          'Theo chỉ đạo mới nhất từ Bộ Lao động - Thương binh và Xã hội cùng cơ quan phái cử các nước Nhật Bản, Hàn Quốc, Đài Loan, tất cả chi phí hợp đồng đào tạo, khám sức khỏe, hồ sơ visa và vé máy bay phải được niêm yết công khai trên hợp đồng ký kết ba bên.',
          'Tại EduGlobal, chúng tôi thực hiện cam kết "3 Không": Không thu tiền cọc bất minh, Không giữ giấy tờ tùy thân gốc, và Không phát sinh chi phí sau khi trúng tuyển đơn hàng.'
        ]
      },
      {
        heading: '2. Gói hỗ trợ vay vốn ngân hàng chính sách cho người lao động',
        paragraphs: [
          'Đối với người lao động có hoàn cảnh khó khăn hoặc sinh viên nghèo vượt khó, EduGlobal cung cấp đầy đủ bộ hồ sơ pháp lý được công chứng để làm thủ tục vay vốn tại Ngân hàng Chính sách Xã hội hoặc Ngân hàng Nông nghiệp (Agribank) với lãi suất thấp nhất.'
        ]
      }
    ]
  },
  {
    id: 'n6',
    title: 'So Sánh Thu Nhập Thực Lĩnh 2025: XKLĐ Nhật Bản vs. Kỹ Sư Hàn Quốc vs. Công Xưởng Đài Loan',
    category: 'Cẩm Nang & Pháp Lý',
    date: '10/07/2024',
    readTime: '6 phút đọc',
    summary: 'Bảng phân tích chi tiết chi phí sinh hoạt, tiền thuế, bảo hiểm và số tiền tích lũy ròng sau 3 năm làm việc tại 3 thị trường lao động hàng đầu Châu Á.',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    tags: ['So Sánh Thu Nhập', 'Nhật Bản', 'Hàn Quốc', 'Đài Loan', 'Tích Lũy'],
    author: {
      name: 'TS. Park Min Joon',
      role: 'Chuyên Gia Phân Tích Thị Trường Nhân Lực',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    keyStats: [
      { label: 'Tích lũy Nhật Bản', value: '700 Tr - 1.1 Tỷ / 3 năm' },
      { label: 'Tích lũy Hàn Quốc', value: '1.2 Tỷ - 1.8 Tỷ / 3 năm' },
      { label: 'Tích lũy Đài Loan', value: '550 Tr - 800 Tr / 3 năm' },
      { label: 'Thời gian hoàn vốn', value: '4 - 7 Tháng' }
    ],
    sections: [
      {
        heading: '1. Bảng so sánh mức lương cơ bản và thực lĩnh',
        paragraphs: [
          'Khi lựa chọn thị trường xuất khẩu lao động hay du học nghề, người lao động cần phân biệt rõ giữa "Lương cơ bản trên hợp đồng" và "Lương thực lĩnh về tay" sau khi đã trừ tiền thuế thu nhập, bảo hiểm xã hội, bảo hiểm y tế và tiền thuê ký túc xá.'
        ],
        bulletPoints: [
          'Hàn Quốc (Visa E-7 Kỹ sư): Lương thực lĩnh 45 - 65 triệu VNĐ/tháng. Sau khi trừ chi phí ăn ở, có thể tiết kiệm 35 - 50 triệu/tháng.',
          'Nhật Bản (Tokutei Ginou): Lương thực lĩnh 32 - 48 triệu VNĐ/tháng. Tiền tích lũy gửi về gia đình đạt từ 22 - 35 triệu/tháng.',
          'Đài Loan (Công xưởng kỹ thuật): Lương thực lĩnh 24 - 35 triệu VNĐ/tháng, chi phí sinh hoạt tại Đài Loan rất rẻ nên có thể tiết kiệm 18 - 26 triệu/tháng.'
        ]
      }
    ]
  }
];
