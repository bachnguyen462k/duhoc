import { CountryRoadmapData } from '../types';

export const COUNTRY_ROADMAPS_DATA: CountryRoadmapData[] = [
  {
    id: 'japan',
    countryName: 'Nhật Bản (Japan)',
    flag: '🇯🇵',
    heroBadge: 'Lương 35 - 55 Tr/Tháng • Tokutei 1 & 2 • MEXT 100%',
    tagline: 'Lộ trình đào tạo toàn diện từ học tiếng tại Việt Nam đến xuất cảnh, việc làm thu nhập cao và cơ hội định cư vĩnh trú',
    bannerImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=80',
    avgTimeline: '3.5 - 5.5 Tháng Xuất Cảnh',
    avgIncomeOrScholarship: '35 - 55 Triệu / Tháng (Sau thuế)',
    visaSuccessRate: '99.4%',
    primaryPrograms: [
      {
        name: 'Lao Động Kỹ Năng Đặc Định (Tokutei Ginou 1 & 2)',
        type: 'Xuất Khẩu Lao Động',
        highlight: 'Lương 35 - 55 Tr/tháng • Hợp đồng 5 năm • Thi Tokutei 2 bảo lãnh vợ con vĩnh trú',
        requirement: 'Tuổi 18 - 38, tốt nghiệp THPT trở lên, đạt bài thi kỹ năng nghề & JLPT N4 / JFT-Basic'
      },
      {
        name: 'Kỹ Sư Công Nghệ Thông Tin & Cơ Khí Chế Tạo',
        type: 'Kỹ Sư Chuyên Ngành',
        highlight: 'Lương 45 - 65 Tr/tháng • Tuyển thẳng • Doanh nghiệp đài thọ vé máy bay & nhà ở',
        requirement: 'Tốt nghiệp Cao đẳng / Đại học ngành CNTT, Cơ khí, Điện tử; Tiếng Nhật từ N3 - N2'
      },
      {
        name: 'Du Học Nhật Ngữ & Học Bổng Toàn Phần MEXT',
        type: 'Du Học Học Bổng',
        highlight: 'Miễn 100% học phí • Trợ cấp 145,000 Yên/tháng • Được làm thêm 28h/tuần',
        requirement: 'GPA cấp 3 từ 7.0 trở lên, tiếng Nhật N5 trở lên, có nguyện vọng học lên Đại học'
      }
    ],
    costBreakdown: [
      { item: 'Khóa học tiếng Nhật N5 - N4 cấp tốc & Kỹ năng nghề', amount: 'Được hỗ trợ trả chậm 0%', note: 'Học tại trung tâm EduGlobal, bao gồm giáo trình và ký túc xá' },
      { item: 'Khám sức khỏe xuất khẩu lao động & Lý lịch tư pháp', amount: '1,200,000 - 1,500,000 đ', note: 'Bệnh viện được chỉ định theo tiêu chuẩn Bộ Y tế' },
      { item: 'Phí dịch thuật công chứng hồ sơ & Xin tư cách lưu trú COE', amount: 'Bao trọn gói trong hợp đồng', note: 'Do luật sư pháp lý EduGlobal đại diện giải trình với Cục Xuất Nhập Cảnh' },
      { item: 'Lệ phí visa Đại sứ quán Nhật Bản & Vé máy bay', amount: 'Có đơn hàng doanh nghiệp tài trợ 100%', note: 'Không thu tiền cọc trái phép, cam kết minh bạch tài chính' }
    ],
    phases: [
      {
        phaseNumber: '01',
        title: 'Thẩm Định Hồ Sơ & Lựa Chọn Đơn Hàng Phù Hợp',
        duration: 'Tuần 1 - 2',
        badge: 'Khởi Đầu Chuẩn Xác',
        summary: 'Chuyên gia EduGlobal đánh giá thể lực, trình độ học vấn, nguyện vọng ngành nghề và tư vấn danh sách đơn hàng có mức thu nhập cao nhất.',
        tasks: [
          'Khám sức khỏe tổng quát tại bệnh viện chỉ định (không mắc viêm gan B lây nhiễm, bệnh truyền nhiễm)',
          'Đối soát bằng cấp, lý lịch tư pháp số 2 và xác thực hồ sơ gia đình',
          'Lựa chọn 2 - 3 đơn hàng Tokutei (Cơ khí, Ô tô, Chế biến thực phẩm, Điều dưỡng) hoặc trường tiếng',
          'Ký hợp đồng tư vấn đào tạo theo đúng quy định pháp luật của Bộ LĐ-TB&XH'
        ],
        documentsNeeded: [
          'Căn cước công dân gắn chip (bản sao công chứng)',
          'Bằng tốt nghiệp THPT / Trung cấp / Cao đẳng / Đại học gốc',
          'Sơ yếu lý lịch có xác nhận UBND xã/phường',
          'Giấy khám sức khỏe đạt tiêu chuẩn đi Nhật Bản'
        ],
        eduglobalSupport: [
          'Tư vấn trực tiếp 1:1 cùng Trưởng ban JITCO EduGlobal',
          'Miễn phí tư vấn gói hỗ trợ vay vốn ngân hàng chính sách nếu gia đình có nhu cầu',
          'Cung cấp bảng mô tả công việc (Job Description) và phiếu lương thực tế của thực tập sinh đang làm việc'
        ],
        milestone: 'Chính thức gia nhập lớp học định hướng và giữ chỉ tiêu đơn hàng mong muốn'
      },
      {
        phaseNumber: '02',
        title: 'Đào Tạo Tiếng Nhật Cấp Tốc & Rèn Luyện Tác Phong Doanh Nghiệp',
        duration: 'Tháng 1 - 3',
        badge: 'Đào Tạo Chuẩn Nhật',
        summary: 'Tham gia khóa học tập trung tại trung tâm đào tạo EduGlobal, chinh phục chứng chỉ tiếng Nhật N4/JFT-Basic và kỹ năng văn hóa doanh nghiệp Nhật.',
        tasks: [
          'Hoàn thành 50 bài Minna no Nihongo (trình độ N4) kết hợp luyện giao tiếp hàng ngày',
          'Rèn luyện tác phong Ojigi (cúi chào), Aisatsu (chào hỏi lễ nghi) và phong cách làm việc 5S',
          'Luyện đề thi kỹ năng đặc định Tokutei chuyên ngành với ngân hàng câu hỏi sát thực tế',
          'Tham gia các buổi Mock Interview (phỏng vấn giả lập) bằng tiếng Nhật 1:1 với giáo viên bản xứ'
        ],
        documentsNeeded: [
          'Phiếu đăng ký dự thi chứng chỉ JFT-Basic hoặc kỳ thi JLPT gần nhất',
          'Ảnh thẻ 4x6 và 3x4 phông nền trắng chuẩn ICAO'
        ],
        eduglobalSupport: [
          'Giáo viên bản xứ Nhật Bản trực tiếp chỉnh sửa phát âm và phản xạ phỏng vấn',
          'Hỗ trợ chỗ ở ký túc xá hiện đại, an ninh, có căng tin phục vụ học viên',
          'Tổ chức thi thử hàng tuần để đảm bảo tỷ lệ thi đỗ chứng chỉ trên 98%'
        ],
        milestone: 'Đạt chứng chỉ tiếng Nhật N4/JFT và vượt qua kỳ thi sát hạch tay nghề'
      },
      {
        phaseNumber: '03',
        title: 'Phỏng Vấn Nghiệp Đoàn & Ký Hợp Đồng Lao Động Trực Tiếp',
        duration: 'Tháng 3 - 4',
        badge: 'Cam Kết Bao Đỗ',
        summary: 'Tham gia kỳ phỏng vấn trực tiếp hoặc online cùng Giám đốc nghiệp đoàn & Xí nghiệp tiếp nhận Nhật Bản. Chốt mức lương và điều kiện làm việc.',
        tasks: [
          'Gặp gỡ trực tiếp đoàn tuyển dụng Nhật Bản tại văn phòng EduGlobal hoặc qua phòng họp Zoom chuyên nghiệp',
          'Thực hiện bài kiểm tra kỹ năng tay nghề (gắp đỗ, thể lực, thao tác cơ khí hoặc nấu ăn)',
          'Ký kết Hợp đồng tuyển dụng (Nội định - Naitei) song ngữ Việt - Nhật',
          'Nhận bảng phân tích thu nhập: Lương cơ bản, phụ cấp ca kíp, tiền bảo hiểm và tiền thuê nhà'
        ],
        documentsNeeded: [
          'Hồ sơ trích ngang ứng viên bằng tiếng Nhật (Rirekisho)',
          'Chứng chỉ tay nghề Tokutei & Chứng chỉ tiếng Nhật đạt chuẩn'
        ],
        eduglobalSupport: [
          'Cán bộ phiên dịch chuyên nghiệp đồng hành hỗ trợ học viên trong suốt buổi phỏng vấn',
          'Đại diện học viên đàm phán mức lương và quyền lợi làm thêm giờ tốt nhất',
          'Bảo lãnh pháp lý hợp đồng 100% tuân thủ luật pháp lao động Nhật Bản'
        ],
        milestone: 'Nhận Thông báo Trúng Tuyển (Naitei) chính thức từ chủ xí nghiệp Nhật'
      },
      {
        phaseNumber: '04',
        title: 'Xin Giấy Chứng Nhận Tư Cách Lưu Trú (COE) & Visa Đại Sứ Quán',
        duration: 'Tháng 4 - 5',
        badge: 'Pháp Lý Chuẩn Xác',
        summary: 'EduGlobal đại diện nộp hồ sơ lên Cục Quản lý Xuất Nhập Cảnh Nhật Bản (Immigration Bureau) để xin cấp tư cách lưu trú COE và dán visa.',
        tasks: [
          'Hoàn thiện toàn bộ hồ sơ giải trình thân nhân và hồ sơ xí nghiệp tiếp nhận',
          'Cục Xuất Nhập Cảnh Nhật Bản tiến hành thẩm định và cấp mã số COE gốc',
          'Nộp hồ sơ xin visa lên Đại sứ quán / Tổng lãnh sự quán Nhật Bản tại Việt Nam',
          'Tiếp tục tham gia lớp bồi dưỡng tiếng Nhật chuyên sâu và tiếng Nhật giao tiếp đời sống'
        ],
        documentsNeeded: [
          'Hộ chiếu gốc còn hạn trên 18 tháng',
          'Giấy chứng nhận tư cách lưu trú COE gốc do Cục Xuất Nhập Cảnh Nhật Bản cấp',
          'Tờ khai xin cấp thị thực Nhật Bản có dán ảnh'
        ],
        eduglobalSupport: [
          'Đội ngũ chuyên viên pháp chế kỳ cựu xử lý hồ sơ, tỷ lệ đỗ visa đạt 99.4%',
          'Theo dõi tiến độ xét duyệt trực tuyến và thông báo kết quả ngay khi có',
          'Hỗ trợ thủ tục tạm hoãn nghĩa vụ quân sự hợp pháp cho nam học viên'
        ],
        milestone: 'Nhận Hộ chiếu dán Visa lao động Tokutei / Visa du học chính thức'
      },
      {
        phaseNumber: '05',
        title: 'Xuất Cảnh, Đón Sân Bay & Bắt Đầu Cuộc Sống Tại Nhật Bản',
        duration: 'Tháng 5.5 - 6',
        badge: 'Đồng Hành Trọn Đời',
        summary: 'Tập huấn kỹ năng trước khi bay, xuất cảnh và được cán bộ văn phòng EduGlobal tại Tokyo/Osaka đón tận nơi, đưa về ký túc xá và ổn định công việc.',
        tasks: [
          'Tham dự lễ chia tay, nhận vé máy bay và hướng dẫn sắp xếp hành lý, tiền mặt',
          'Bay đến sân bay Narita, Haneda hoặc Kansai; Làm thủ tục nhận Thẻ cư trú (Zairyu Card) tại quầy thủ tục',
          'Cán bộ đại diện EduGlobal đưa về xí nghiệp, nhận phòng ký túc xá đầy đủ điều hòa, tủ lạnh, bếp gas',
          'Đăng ký địa chỉ tạm trú tại Tòa thị chính (Kuyakusho), mở tài khoản ngân hàng Yucho và kích hoạt sim'
        ],
        documentsNeeded: [
          'Vé máy bay quốc tế khứ hồi / một chiều',
          'Thẻ cư trú Zairyu Card được cấp tại cửa khẩu sân bay',
          'Hồ sơ bàn giao xí nghiệp tiếp nhận'
        ],
        eduglobalSupport: [
          'Xe đưa đón tại sân bay Nhật Bản về tận nơi ở của người lao động / du học sinh',
          'Cán bộ thường trực tại Nhật Bản hỗ trợ xử lý mọi khó khăn trong sinh hoạt, ngôn ngữ và công việc',
          'Hỗ trợ pháp lý gia hạn hợp đồng sau 3 - 5 năm hoặc làm thủ tục chuyển đổi sang Tokutei 2 để bảo lãnh gia đình'
        ],
        milestone: 'Nhận tháng lương đầu tiên và bắt đầu tích lũy từ 25 - 40 triệu đồng gửi về gia đình mỗi tháng'
      }
    ],
    jobOrMajors: [
      'Gia công cơ khí, Tiện phay CNC & Đúc kim loại',
      'Lắp ráp ô tô, Linh kiện điện tử & Bán dẫn',
      'Chế biến thực phẩm, Đồ hộp & Đóng gói cơm hộp Bento',
      'Điều dưỡng, Hộ lý chăm sóc bệnh nhân & Người già',
      'Nông nghiệp nhà kính công nghệ cao & Chăn nuôi bò sữa',
      'Kỹ sư Công nghệ thông tin & Lập trình ứng dụng (Java, Python)',
      'Nhà hàng, Dịch vụ khách sạn & Quản lý tòa nhà'
    ],
    faq: [
      {
        question: 'Chưa biết một chữ tiếng Nhật nào thì bao lâu có thể xuất cảnh?',
        answer: 'Trung bình học viên học tập trung tại EduGlobal từ 3.5 đến 5 tháng là đạt trình độ N4 và hoàn thiện kỳ thi tay nghề để bay.'
      },
      {
        question: 'Gia đình khó khăn có được nợ phí hoặc vay vốn ngân hàng không?',
        answer: 'EduGlobal có chính sách hỗ trợ nợ phí đối với các đơn hàng đặc biệt và cung cấp toàn bộ hồ sơ công chứng giúp phụ huynh vay vốn 100% chi phí tại Ngân hàng Chính sách Xã hội hoặc Agribank với lãi suất ưu đãi.'
      },
      {
        question: 'Sau khi làm việc 5 năm diện Tokutei 1 có được ở lại Nhật tiếp không?',
        answer: 'Hoàn toàn được! Bạn sẽ được EduGlobal hướng dẫn thi nâng hạng lên Tokutei 2 để lưu trú không giới hạn thời gian, có quyền bảo lãnh vợ/chồng và con cái sang sinh sống, đồng thời nộp đơn xin Visa Vĩnh Trú tại Nhật.'
      }
    ]
  },
  {
    id: 'korea',
    countryName: 'Hàn Quốc (South Korea)',
    flag: '🇰🇷',
    heroBadge: 'Lương 45 - 65 Tr/Tháng • Visa Kỹ Sư E-7 • Học Bổng GKS',
    tagline: 'Lộ trình tuyển dụng trực tiếp kỹ sư đóng tàu, cơ khí vào các tập đoàn lớn tại Ulsan, Busan và du học trường Top đầu Seoul',
    bannerImage: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1400&q=80',
    avgTimeline: '2.5 - 4.5 Tháng Xuất Cảnh',
    avgIncomeOrScholarship: '45 - 65 Triệu / Tháng Thực Lĩnh',
    visaSuccessRate: '99.1%',
    primaryPrograms: [
      {
        name: 'Visa Kỹ Sư Chuyên Ngành E-7-3 & E-7-1',
        type: 'Kỹ Sư Công Nghệ',
        highlight: 'Lương 45 - 65 Tr/tháng • Ký hợp đồng 3-5 năm • Bảo lãnh vợ con sang sau 6-12 tháng',
        requirement: 'Tốt nghiệp Cao đẳng (2 năm BHXH) hoặc Đại học đúng chuyên ngành kỹ thuật; Tiếng Hàn Topik 1-2'
      },
      {
        name: 'Du Học Tiếng Visa D-4-1 (Trường Top 1% Visa Thẳng)',
        type: 'Du Học Tiếng Hàn',
        highlight: 'Ra code visa nhanh • Được đi làm thêm 25h/tuần • Chuyển tiếp lên chuyên ngành D-2',
        requirement: 'Tốt nghiệp THPT/Đại học không quá 3 năm, GPA từ 6.8 trở lên, tài chính minh bạch'
      },
      {
        name: 'Học Bổng Chính Phủ Toàn Phần Global Korea (GKS)',
        type: 'Học Bổng Chính Phủ',
        highlight: 'Miễn 100% học phí • Vé máy bay khứ hồi • Trợ cấp 1,000,000 Won/tháng',
        requirement: 'GPA đại học từ 8.2 trở lên, chứng chỉ TOPIK 4 trở lên hoặc IELTS 6.5+'
      }
    ],
    costBreakdown: [
      { item: 'Phí đào tạo tiếng Hàn chuyên ngành & Ôn luyện phỏng vấn', amount: 'Ưu đãi trọn gói', note: 'Gồm đào tạo phản xạ giao tiếp công xưởng và từ vựng kỹ thuật' },
      { item: 'Thẩm định hồ sơ bằng cấp & Xác thực bảo hiểm xã hội', amount: 'Đã bao gồm', note: 'Hợp pháp hóa lãnh sự Bộ Ngoại Giao và Đại sứ quán Hàn Quốc' },
      { item: 'Lệ phí cấp mã Code Visa Bộ Tư Pháp Hàn Quốc', amount: 'Theo biểu phí niêm yết', note: 'Mã số chứng nhận cấp phép visa từ Cục Quản lý Xuất nhập cảnh Hàn Quốc' },
      { item: 'Vé máy bay quốc tế Vietnam Airlines / Korean Air', amount: 'Doanh nghiệp đài thọ (tùy đơn)', note: 'Đơn hàng kỹ sư đóng tàu tài trợ vé máy bay 1 chiều' }
    ],
    phases: [
      {
        phaseNumber: '01',
        title: 'Thẩm Định Bằng Cấp Kỹ Thuật & Khảo Sát Năng Lực',
        duration: 'Tuần 1 - 2',
        badge: 'Thẩm Định Nghiêm Ngặt',
        summary: 'Kiểm tra hồ sơ bằng Cao đẳng/Đại học, thâm niên đóng bảo hiểm xã hội thực tế và phân loại vào các đơn hàng phù hợp nhất.',
        tasks: [
          'Thẩm định bảng điểm, bằng cấp kỹ sư chuyên ngành (Cơ khí, Ô tô, Điện, Tàu thủy, Xây dựng)',
          'Tra cứu sổ bảo hiểm xã hội chứng minh kinh nghiệm làm việc theo tiêu chuẩn Bộ Tư pháp Hàn Quốc',
          'Khám sức khỏe xuất cảnh tại bệnh viện chỉ định (Bệnh viện Lao phổi Trung ương, Chợ Rẫy)',
          'Ký hợp đồng tư vấn pháp lý minh bạch'
        ],
        documentsNeeded: [
          'Bằng tốt nghiệp Cao đẳng / Đại học chính quy và bảng điểm gốc',
          'Sổ bảo hiểm xã hội và xác nhận quá trình đóng BHXH từ cơ quan bảo hiểm',
          'Hộ chiếu còn hạn trên 2 năm, CCCD gắn chip'
        ],
        eduglobalSupport: [
          'Chuyên gia cố vấn visa E-7 trực tiếp rà soát độ khớp giữa ngành học và vị trí tuyển dụng',
          'Tư vấn hoàn thiện hồ sơ nếu có sai lệch thông tin bảo hiểm xã hội',
          'Giới thiệu trực tiếp vào danh sách phỏng vấn các tập đoàn đóng tàu HD Hyundai, Hanwha Ocean'
        ],
        milestone: 'Hồ sơ được xác nhận hợp lệ 100% để trình doanh nghiệp Hàn Quốc'
      },
      {
        phaseNumber: '02',
        title: 'Đào Tạo Tiếng Hàn Chuyên Ngành & Luyện Phỏng Vấn Doanh Nghiệp',
        duration: 'Tháng 1 - 2.5',
        badge: 'Phản Xạ Thực Chiến',
        summary: 'Tập trung học tiếng Hàn từ vựng kỹ thuật nhà máy, rèn luyện kỹ năng phỏng vấn cùng chuyên gia Hàn Quốc.',
        tasks: [
          'Chinh phục chứng chỉ tiếng Hàn TOPIK 1 - 2 hoặc chứng chỉ kiểm tra năng lực tiếng Hàn nội bộ',
          'Học 500 thuật ngữ chuyên ngành kỹ thuật đóng tàu, hàn công nghệ cao, cơ khí chính xác',
          'Tập luyện tác phong phỏng vấn trực tiếp với đại diện nhân sự doanh nghiệp Hàn Quốc'
        ],
        documentsNeeded: [
          'Chứng chỉ TOPIK (nếu có) hoặc bài test đánh giá năng lực tại EduGlobal'
        ],
        eduglobalSupport: [
          'Giảng viên người Hàn phụ trách luyện phỏng vấn 1:1, sửa từng ngữ điệu',
          'Hỗ trợ quay video giới thiệu bản thân (Self-introduction) chuyên nghiệp gửi nhà máy',
          'Bố trí chỗ ở tập trung tại trung tâm đào tạo'
        ],
        milestone: 'Vượt qua vòng phỏng vấn kiểm tra tay nghề và tiếng Hàn của doanh nghiệp'
      },
      {
        phaseNumber: '03',
        title: 'Nhận Thư Tuyển Dụng & Xin Cấp Mã Code Visa Tại Hàn Quốc',
        duration: 'Tháng 2.5 - 3.5',
        badge: 'Cấp Mã Code Visa',
        summary: 'Doanh nghiệp Hàn Quốc nộp hồ sơ xin cấp mã Code Visa tại Cục Xuất nhập cảnh Hàn Quốc thuộc Bộ Tư pháp.',
        tasks: [
          'Doanh nghiệp Hàn Quốc nộp hồ sơ xin thư xác nhận cấp phép thị thực (Visa Code)',
          'Chuyên viên pháp lý EduGlobal phối hợp với luật sư tại Hàn Quốc theo dõi hồ sơ',
          'Nhận mã Code Visa điện tử chính thức từ cơ quan xuất nhập cảnh Hàn Quốc'
        ],
        documentsNeeded: [
          'Bản hợp pháp hóa lãnh sự bằng cấp và lý lịch tư pháp số 2',
          'Hợp đồng lao động tiêu chuẩn Hàn Quốc có chữ ký và đóng dấu của chủ doanh nghiệp'
        ],
        eduglobalSupport: [
          'Liên hệ trực tiếp với cơ quan quản lý lao động Hàn Quốc giải quyết các yêu cầu bổ sung',
          'Cam kết hoàn 100% phí nếu không ra được mã Code vì lý do từ phía đơn vị tuyển dụng'
        ],
        milestone: 'Nhận mã số Visa Code chính thức từ Bộ Tư pháp Hàn Quốc'
      },
      {
        phaseNumber: '04',
        title: 'Dán Visa Tại Lãnh Sự Quán Hàn Quốc & Nhận Vé Máy Bay',
        duration: 'Tháng 3.5 - 4',
        badge: 'Dán Visa Nhanh Chóng',
        summary: 'Nộp mã Code lên Trung tâm tiếp nhận thị thực Hàn Quốc (KVAC) tại Hà Nội / TP.HCM để dán tem visa vào hộ chiếu.',
        tasks: [
          'Nộp hồ sơ xin dán visa tại KVAC (thời gian xét duyệt chỉ từ 7 - 14 ngày làm việc)',
          'Nhận lại hộ chiếu đã dán Visa E-7 hoặc Visa du học D-4-1',
          'Tham gia buổi giáo dục định hướng pháp luật và văn hóa Hàn Quốc trước khi bay',
          'Đặt vé máy bay theo lịch nhập cảnh của công ty tiếp nhận'
        ],
        documentsNeeded: [
          'Mã Code Visa điện tử',
          'Hộ chiếu gốc',
          'Phiếu hẹn lấy kết quả của trung tâm KVAC'
        ],
        eduglobalSupport: [
          'Đại diện EduGlobal trực tiếp hướng dẫn nộp và nhận kết quả tại KVAC',
          'Hỗ trợ thủ tục đổi tiền Won và tư vấn chuẩn bị hành lý phù hợp thời tiết Hàn Quốc'
        ],
        milestone: 'Cầm trên tay tấm Visa Hàn Quốc và vé máy bay chính thức'
      },
      {
        phaseNumber: '05',
        title: 'Nhập Cảnh Hàn Quốc, Đón Sân Bay Incheon & Bắt Đầu Công Việc',
        duration: 'Tháng thứ 4 - 4.5',
        badge: 'Định Cư & Bảo Lãnh',
        summary: 'Hạ cánh sân bay Quốc tế Incheon hoặc Gimhae (Busan), cán bộ EduGlobal đón về công ty, làm thẻ người nước ngoài và ký hợp đồng chính thức.',
        tasks: [
          'Nhập cảnh Hàn Quốc, được xe của công ty và cán bộ EduGlobal đón về ký túc xá',
          'Khám sức khỏe kiểm tra lại tại bệnh viện Hàn Quốc và nhận bảo hiểm tai nạn lao động',
          'Làm thủ tục cấp Thẻ đăng ký người nước ngoài (Alien Registration Card - ARC)',
          'Mở tài khoản ngân hàng Hana Bank / Woori Bank nhận lương hàng tháng'
        ],
        documentsNeeded: [
          'Hộ chiếu dán Visa',
          'Giấy chứng nhận việc làm tại Hàn Quốc'
        ],
        eduglobalSupport: [
          'Văn phòng EduGlobal tại Hàn Quốc hỗ trợ giải quyết các vấn đề phát sinh trong năm đầu',
          'Hỗ trợ thủ tục làm hồ sơ bảo lãnh vợ/chồng và con cái sang Hàn Quốc sau 6-12 tháng làm việc',
          'Tư vấn chuyển đổi sang visa định cư F-2 (cư trú dài hạn) hoặc visa thường trú F-5'
        ],
        milestone: 'Mức lương thực lĩnh từ 45 - 65 triệu VNĐ/tháng và cơ hội đón người thân sang đoàn tụ'
      }
    ],
    jobOrMajors: [
      'Kỹ sư sơn vỏ tàu thủy & Chống ăn mòn kim loại (HD Hyundai, Hanwha)',
      'Thợ hàn công nghệ cao (Hàn CO2, MIG, TIG, hàn tự động)',
      'Kỹ sư cơ khí chế tạo, Gia công kết cấu thân tàu hàng hải',
      'Kỹ sư điện - điện tử & Lắp đặt hệ thống điều khiển tự động',
      'Du học Thạc sĩ / Tiến sĩ các ngành STEM và Quản trị kinh doanh',
      'Du học tiếng Hàn D-4-1 (Làm thêm 25-30h/tuần tại nhà hàng, siêu thị)'
    ],
    faq: [
      {
        question: 'Tốt nghiệp Cao đẳng nghề có đi được visa Kỹ sư E-7 Hàn Quốc không?',
        answer: 'Có! Theo quy định mới của Bộ Tư pháp Hàn Quốc, cử nhân Cao đẳng chính quy có tối thiểu 2 năm đóng bảo hiểm xã hội đúng chuyên ngành là hoàn toàn đủ điều kiện cấp visa E-7-3.'
      },
      {
        question: 'Sau bao lâu thì kỹ sư E-7 được bảo lãnh vợ con sang sinh sống?',
        answer: 'Sau khoảng 6 tháng đến 1 năm làm việc ổn định và có bảng lương xác nhận đóng thuế đầy đủ, người lao động có quyền nộp đơn xin cấp visa F-3 để bảo lãnh vợ/chồng và con cái sang sinh sống cùng.'
      },
      {
        question: 'Chi phí sinh hoạt và mức tiền tích lũy mỗi tháng khoảng bao nhiêu?',
        answer: 'Hầu hết các tập đoàn đóng tàu đài thọ chỗ ở ký túc xá và phụ cấp ăn 2-3 bữa. Chi phí cá nhân chỉ khoảng 400,000 - 600,000 Won (~7 - 11 triệu VNĐ), người lao động có thể tiết kiệm gửi về từ 35 - 50 triệu VNĐ mỗi tháng.'
      }
    ]
  },
  {
    id: 'taiwan',
    countryName: 'Đài Loan (Taiwan)',
    flag: '🇹🇼',
    heroBadge: 'Lương 23 - 35 Tr/Tháng • Bán Dẫn TSMC • Xuất Cảnh 1-2 Tháng',
    tagline: 'Thị trường có chi phí hợp lý nhất, thủ tục nhanh gọn và cơ hội học bổng doanh nghiệp bán dẫn toàn phần',
    bannerImage: 'https://images.unsplash.com/photo-1508247967583-7d982ea01526?auto=format&fit=crop&w=1400&q=80',
    avgTimeline: '1.0 - 2.0 Tháng Xuất Cảnh',
    avgIncomeOrScholarship: '24 - 35 Triệu / Tháng',
    visaSuccessRate: '99.7%',
    primaryPrograms: [
      {
        name: 'Kỹ Thuật Viên Công Xưởng Điện Tử & Cơ Khí',
        type: 'Xuất Khẩu Lao Động',
        highlight: 'Lương 24 - 35 Tr/tháng • Bay cực nhanh sau 30-45 ngày • Tăng ca nhiều',
        requirement: 'Tuổi 18 - 42, tốt nghiệp THCS/THPT trở lên, thị lực tốt, không yêu cầu bằng cấp cao'
      },
      {
        name: 'Học Bổng Bán Dẫn TSMC & Vi Mạch Điện Tử',
        type: 'Học Bổng Doanh Nghiệp',
        highlight: 'Miễn 100% học phí • Trợ cấp 15,000 - 30,000 TWD/tháng • Cam kết việc làm 3 năm',
        requirement: 'GPA cấp 3 từ 7.5 trở lên, có tiếng Trung TOCFL 2 hoặc tiếng Anh TOEIC 550+'
      },
      {
        name: 'Du Học Hệ Tân Hướng Nam Vừa Học Vừa Làm',
        type: 'Du Học Vừa Làm',
        highlight: 'Thực tập có lương ngay từ năm nhất • Nhà trường bố trí việc làm doanh nghiệp đối tác',
        requirement: 'Tuổi 18 - 28, tốt nghiệp THPT, có chứng chỉ TOCFL 1 cấp tốc'
      }
    ],
    costBreakdown: [
      { item: 'Chi phí đào tạo tiếng Trung cấp tốc & Làm hồ sơ', amount: 'Thấp nhất trong các thị trường', note: 'Chỉ mất 2-4 tuần học tiếng Trung giao tiếp cơ bản' },
      { item: 'Khám sức khỏe Form Đài Loan tại bệnh viện chỉ định', amount: '1,000,000 - 1,200,000 đ', note: 'Bệnh viện Bạch Mai, Saint Paul, Thống Nhất' },
      { item: 'Lệ phí visa Văn phòng Kinh tế Văn hóa Đài Bắc (TECO)', amount: 'Theo biểu phí lãnh sự', note: 'Thời gian xét duyệt visa nhanh chỉ từ 5 - 7 ngày' },
      { item: 'Vé máy bay Vietjet / Vietnam Airlines / Eva Air', amount: 'Bao gồm trong hợp đồng', note: 'Bay thẳng Hà Nội / TP.HCM tới Đài Bắc, Đài Trung, Cao Hùng' }
    ],
    phases: [
      {
        phaseNumber: '01',
        title: 'Đăng Ký Đơn Hàng & Khám Sức Khỏe Form Đài Loan',
        duration: 'Tuần 1',
        badge: 'Thủ Tục Siêu Nhanh',
        summary: 'Lựa chọn đơn hàng công xưởng điện tử, cơ khí hoặc nộp hồ sơ học bổng bán dẫn; khám sức khỏe theo form chuyên biệt.',
        tasks: [
          'Khám sức khỏe Form Đài Loan (xét nghiệm máu, chụp X-quang phổi, tiêm phòng sởi - rubella)',
          'Lựa chọn xí nghiệp tiếp nhận tại Đài Bắc, Tân Trúc, Đài Trung hoặc Cao Hùng',
          'Làm thủ tục lý lịch tư pháp số 2 tại Sở Tư Pháp'
        ],
        documentsNeeded: [
          'Hộ chiếu gốc',
          'Căn cước công dân gắn chip',
          'Giấy khám sức khỏe Form Đài Loan có dấu giáp lai',
          'Ảnh thẻ 4x6 nền trắng chụp mới nhất'
        ],
        eduglobalSupport: [
          'Danh sách hàng trăm đơn hàng công xưởng uy tín, tăng ca đều đặn 2-4h/ngày',
          'Hỗ trợ đưa đón khám sức khỏe tại bệnh viện đạt chuẩn'
        ],
        milestone: 'Đạt sức khỏe xuất cảnh và chốt danh sách đơn hàng thi tuyển'
      },
      {
        phaseNumber: '02',
        title: 'Thi Tuyển / Phỏng Vấn Trực Tuyến & Học Tiếng Cấp Tốc',
        duration: 'Tuần 2 - 3',
        badge: 'Tỷ Lệ Đỗ Tuyệt Đối',
        summary: 'Tham gia buổi phỏng vấn trực tiếp cùng chủ nhà máy Đài Loan hoặc phỏng vấn online qua mạng. Học tiếng Trung giao tiếp công xưởng.',
        tasks: [
          'Phỏng vấn đơn hàng kiểm tra phản xạ, kiểm tra thị lực và độ khéo léo của bàn tay',
          'Ký hợp đồng dịch vụ và nhận thông báo trúng tuyển chính thức từ nhà máy',
          'Học tiếng Trung giao tiếp sinh hoạt và các hiệu lệnh an toàn lao động cơ bản'
        ],
        documentsNeeded: [
          'Hợp đồng lao động Đài Loan có xác nhận của Cục Lao động Đài Loan'
        ],
        eduglobalSupport: [
          'Cam kết bao đỗ đơn hàng phù hợp với sức khỏe và độ tuổi',
          'Lớp học tiếng Trung cấp tốc miễn phí do giáo viên Đài Loan giảng dạy'
        ],
        milestone: 'Chính thức trúng tuyển đơn hàng và ký hợp đồng ngoại'
      },
      {
        phaseNumber: '03',
        title: 'Xin Visa Tại Văn Phòng Kinh Tế Văn Hóa Đài Bắc (TECO)',
        duration: 'Tuần 3 - 4',
        badge: 'Cấp Visa Cấp Tốc',
        summary: 'EduGlobal nộp hồ sơ và hộ chiếu lên Văn phòng TECO tại Hà Nội hoặc TP.HCM để xin visa xuất cảnh.',
        tasks: [
          'Hoàn thiện hồ sơ công chứng và xác nhận của Cục Quản lý Lao động Ngoài nước (DOLAB)',
          'Nộp hồ sơ xin visa lên Văn phòng Đài Bắc (TECO)',
          'Nhận visa lao động hoặc visa du học chính thức'
        ],
        documentsNeeded: [
          'Hộ chiếu gốc',
          'Giấy phép chiêu mộ do Bộ Lao động Đài Loan cấp',
          'Hồ sơ trúng tuyển có xác thực của Văn phòng TECO'
        ],
        eduglobalSupport: [
          'Thủ tục trọn gói, học viên không cần trực tiếp xếp hàng nộp hồ sơ',
          'Thời gian ra visa chỉ từ 5 đến 7 ngày làm việc'
        ],
        milestone: 'Nhận Visa Đài Loan thành công 100%'
      },
      {
        phaseNumber: '04',
        title: 'Tập Huấn Xuất Cảnh & Đặt Vé Máy Bay',
        duration: 'Tuần 4 - 5',
        badge: 'Chuẩn Bị Lên Đường',
        summary: 'Tham gia buổi giáo dục định hướng, nhận vé máy bay và chuẩn bị hành lý trước ngày bay.',
        tasks: [
          'Tập huấn các quy định về an toàn lao động, quyền lợi bảo hiểm y tế tại Đài Loan',
          'Nhận vé máy bay, bảo hiểm du lịch quốc tế và thông tin người đón tại sân bay Đào Viên',
          'Hướng dẫn cài đặt ứng dụng liên lạc và phương thức chuyển tiền về Việt Nam'
        ],
        documentsNeeded: [
          'Vé máy bay, visa và giấy xét nghiệm theo yêu cầu'
        ],
        eduglobalSupport: [
          'Xe ô tô đưa đón đoàn học viên từ trung tâm EduGlobal ra sân bay Nội Bài / Tân Sơn Nhất',
          'Cán bộ phụ trách làm thủ tục check-in và tiễn học viên qua cửa khẩu an ninh'
        ],
        milestone: 'Lên máy bay cất cánh sang Đài Loan'
      },
      {
        phaseNumber: '05',
        title: 'Nhập Cảnh Sân Bay Đào Viên & Bắt Đầu Đi Làm Có Lương',
        duration: 'Ngay khi hạ cánh',
        badge: 'Thu Nhập Ổn Định',
        summary: 'Được nghiệp đoàn Đài Loan đón tại sân bay, đưa về nhà máy, nhận phòng ký túc xá và khám sức khỏe nhập cảnh.',
        tasks: [
          'Đến sân bay Quốc tế Đào Viên (Taipei) hoặc Cao Hùng, cán bộ môi giới đón tận nơi',
          'Làm thủ tục cấp Thẻ cư trú (ARC Đài Loan) và thẻ bảo hiểm y tế toàn dân (NHI)',
          'Nhận phòng ký túc xá xí nghiệp (có điều hòa, wifi, máy giặt, căn tin)',
          'Bắt đầu làm việc có lương ngay từ ngày đầu tiên'
        ],
        documentsNeeded: [
          'Hộ chiếu dán Visa',
          'Thẻ cư trú ARC được cấp trong vòng 15 ngày nhập cảnh'
        ],
        eduglobalSupport: [
          'Đại diện EduGlobal tại Đài Bắc thường xuyên thăm hỏi và bảo vệ quyền lợi người lao động',
          'Hỗ trợ gia hạn hợp đồng lên tới 12 năm hoặc học liên thông lên đại học'
        ],
        milestone: 'Lương thực nhận hàng tháng từ 24 - 35 triệu VNĐ, tích lũy từ 500 - 800 triệu sau 3 năm'
      }
    ],
    jobOrMajors: [
      'Công nhân thao tác máy lắp ráp linh kiện điện tử (Foxconn, Pegatron, ASUS)',
      'Kỹ thuật viên phòng sạch bán dẫn TSMC, ASE Group, MediaTek',
      'Cơ khí tiện phay CNC, Đột dập kim loại, Hàn kết cấu',
      'Chế biến thực phẩm đóng hộp, Bánh kẹo & Nông sản',
      'Hộ lý bệnh viện, Trung tâm dưỡng lão chăm sóc người cao tuổi',
      'Du học hệ Vừa học vừa làm chuyên ngành Quản trị kinh doanh & Công nghệ thông tin'
    ],
    faq: [
      {
        question: 'Đi Đài Loan từ lúc nộp hồ sơ đến khi bay mất bao lâu?',
        answer: 'Thị trường Đài Loan có thời gian bay nhanh nhất hiện nay, trung bình chỉ từ 30 đến 45 ngày là học viên đã có visa và bay sang làm việc.'
      },
      {
        question: 'Lương cơ bản tại Đài Loan hiện nay là bao nhiêu?',
        answer: 'Lương cơ bản theo luật lao động Đài Loan năm 2024 - 2025 là 27,470 Đài tệ/tháng (~22 triệu VNĐ). Tính cả tiền làm thêm tăng ca từ 2-4 giờ mỗi ngày, thu nhập thực nhận đạt từ 24 - 35 triệu VNĐ/tháng.'
      }
    ]
  },
  {
    id: 'usa',
    countryName: 'Hợp Chủng Quốc Hoa Kỳ (USA)',
    flag: '🇺🇸',
    heroBadge: 'Top 100 Thế Giới • Học Bổng 50% - 100% • Visa STEM OPT 3 Năm',
    tagline: 'Chiến lược cá nhân hóa hồ sơ chinh phục Đại học Mỹ, Ivy League và chính sách ở lại làm việc 3 năm ngành STEM',
    bannerImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80',
    avgTimeline: '6 - 9 Tháng Chuẩn Bị',
    avgIncomeOrScholarship: 'Học Bổng $25,000 - $80,000 / Năm',
    visaSuccessRate: '98.5%',
    primaryPrograms: [
      {
        name: 'Học Bổng Học Thuật & Tài Trợ Tài Chính (Financial Aid)',
        type: 'Du Học Đại Học & Thạc Sĩ',
        highlight: 'Học bổng Merit-based & Need-based từ 50% đến 100% học phí',
        requirement: 'GPA cấp 3 từ 8.0 trở lên, IELTS 6.5+ hoặc Duolingo 115+, SAT (ưu thế)'
      },
      {
        name: 'Chương Trình Khối Ngành Khoa Học Công Nghệ STEM',
        type: 'STEM & OPT',
        highlight: 'Visa làm việc sau tốt nghiệp lên đến 36 tháng (3 năm OPT) tại Thung lũng Silicon',
        requirement: 'Theo học các ngành Khoa học máy tính, Trí tuệ nhân tạo AI, Kỹ thuật dữ liệu'
      }
    ],
    costBreakdown: [
      { item: 'Phí tư vấn chiến lược hồ sơ & Sửa bài luận luận cá nhân (SOP)', amount: 'Trọn gói theo lộ trình', note: 'Được cố vấn trực tiếp bởi cựu du học sinh Harvard, Cornell' },
      { item: 'Lệ phí nộp hồ sơ các trường (Application Fee)', amount: '$50 - $100 / trường', note: 'Có mã giảm phí (Fee Waiver) từ EduGlobal' },
      { item: 'Phí an ninh nội địa Mỹ SEVIS I-901 & Lệ phí visa DS-160', amount: '$350 + $185', note: 'Nộp trực tiếp cho Bộ An ninh Nội địa Mỹ & Đại sứ quán' }
    ],
    phases: [
      {
        phaseNumber: '01',
        title: 'Đánh Giá Hồ Sơ 360° & Xây Dựng Danh Sách Trường (School List)',
        duration: 'Tháng 1 - 2',
        badge: 'Chiến Lược Chọn Trường',
        summary: 'Phân tích học bạ, hoạt động ngoại khóa và xây dựng danh sách trường phân tầng (Reach - Match - Safety) tối ưu học bổng.',
        tasks: [
          'Đánh giá điểm số GPA, chuẩn hóa bài thi SAT / ACT / IELTS / TOEFL',
          'Định vị ngành học mũi nhọn phù hợp với xu hướng tuyển dụng toàn cầu',
          'Lập kế hoạch hoạt động ngoại khóa và dự án cộng đồng tạo dấu ấn khác biệt'
        ],
        documentsNeeded: [
          'Học bạ THPT hoặc bảng điểm đại học',
          'Chứng chỉ tiếng Anh và bài thi chuẩn hóa',
          'Bản sơ yếu lý lịch hoạt động ngoại khóa (CV / Activity List)'
        ],
        eduglobalSupport: [
          'Thuật toán độc quyền đối sánh dữ liệu trúng tuyển của 500+ trường Mỹ',
          'Mentor tốt nghiệp Ivy League tư vấn trực tiếp 1:1'
        ],
        milestone: 'Chốt danh sách 8 - 12 trường đại học mục tiêu có quỹ học bổng cao nhất'
      },
      {
        phaseNumber: '02',
        title: 'Mài Giũa Bài Luận Cá Nhân (Personal Essay) & Thư Giới Thiệu',
        duration: 'Tháng 3 - 4',
        badge: 'Đột Phá Bài Luận',
        summary: 'Khai phá câu chuyện truyền cảm hứng của bản thân để viết nên bài luận chạm đến cảm xúc của Hội đồng tuyển sinh.',
        tasks: [
          'Viết bài luận chính Common App Essay (650 từ) thể hiện bản sắc độc đáo',
          'Hoàn thiện các bài luận phụ (Supplemental Essays) cho từng trường đại học',
          'Xin thư giới thiệu (LOR) từ thầy cô giáo và chuyên gia hướng dẫn'
        ],
        documentsNeeded: [
          'Bản thảo bài luận',
          'Thư giới thiệu từ 2-3 thầy cô giáo'
        ],
        eduglobalSupport: [
          'Chỉnh sửa bài luận câu chữ bởi chuyên gia biên tập bản xứ tốt nghiệp Oxford/Columbia',
          'Hướng dẫn kỹ năng kể chuyện (Storytelling) tạo ấn tượng sâu sắc'
        ],
        milestone: 'Hoàn thiện toàn bộ bài luận và thư giới thiệu xuất sắc'
      },
      {
        phaseNumber: '03',
        title: 'Nộp Hồ Sơ Tuyển Sinh & Đơn Xin Hỗ Trợ Tài Chính (CSS / ISFAA)',
        duration: 'Tháng 5',
        badge: 'Săn Học Bổng',
        summary: 'Gửi hồ sơ qua hệ thống Common App, nộp đơn hỗ trợ tài chính để nhận gói tài trợ tối đa.',
        tasks: [
          'Nộp hồ sơ kỳ Early Decision (ED), Early Action (EA) hoặc Regular Decision (RD)',
          'Điền hồ sơ tài chính CSS Profile hoặc bảng khai ISFAA chính xác',
          'Theo dõi cổng thông tin sinh viên (Applicant Portal) của từng trường'
        ],
        documentsNeeded: [
          'Giấy tờ xác nhận thu nhập và tài sản của phụ huynh',
          'Bảng kê khai tài chính có xác nhận ngân hàng'
        ],
        eduglobalSupport: [
          'Tối ưu hóa bảng khai tài chính để đạt mức học bổng cao nhất có thể',
          'Liên hệ trực tiếp với Phòng Tuyển sinh quốc tế của các trường đại học Mỹ'
        ],
        milestone: 'Nhận thư chúc mừng trúng tuyển (Acceptance Letter) và mẫu I-20 chính thức'
      },
      {
        phaseNumber: '04',
        title: 'Luyện Phỏng Vấn Visa F-1 Đại Sứ Quán Mỹ Cùng Cựu Viên Chức Lãnh Sự',
        duration: 'Tháng 6',
        badge: 'Vượt Ải Phỏng Vấn F-1',
        summary: 'Chuẩn bị hồ sơ chứng minh tài chính vững chắc và luyện tập 100 câu hỏi phỏng vấn thường gặp với Đại sứ quán Mỹ.',
        tasks: [
          'Đóng phí SEVIS I-901 và điền đơn xin thị thực không định cư DS-160',
          'Đặt lịch hẹn phỏng vấn tại Đại sứ quán Mỹ tại Hà Nội hoặc Tổng lãnh sự quán tại TP.HCM',
          'Tham gia khóa huấn luyện trả lời phỏng vấn tự tin, súc tích trong 3-5 phút'
        ],
        documentsNeeded: [
          'Mẫu I-20 gốc do trường Mỹ cấp',
          'Xác nhận đóng phí SEVIS',
          'Hồ sơ tài chính và học tập hoàn chỉnh'
        ],
        eduglobalSupport: [
          'Luyện Mock Interview 1:1 sát với thực tế, xử lý các câu hỏi bẫy về ý định định cư',
          'Tỷ lệ đỗ visa Mỹ tại EduGlobal đạt 98.5%'
        ],
        milestone: 'Nhận tờ giấy hồng chúc mừng và visa F-1 dán vào hộ chiếu'
      },
      {
        phaseNumber: '05',
        title: 'Lên Đường Nhập Học, Bố Trí Nhà Ở & Hướng Dẫn Việc Làm On-Campus',
        duration: 'Tháng 7 - 8',
        badge: 'Hiện Thực Ước Mơ',
        summary: 'Tham dự hội thảo tiền xuất cảnh (Pre-departure briefing), đặt vé máy bay và kết nối mạng lưới du học sinh EduGlobal tại Mỹ.',
        tasks: [
          'Đăng ký ký túc xá trong trường hoặc căn hộ sinh viên gần khuôn viên',
          'Bay đến Mỹ, tham gia tuần lễ định hướng tân sinh viên (Orientation Week)',
          'Đăng ký số An sinh xã hội (SSN) và xin việc làm thêm trong trường 20 giờ/tuần'
        ],
        documentsNeeded: [
          'Hộ chiếu, I-20, hồ sơ tiêm chủng theo yêu cầu của bang'
        ],
        eduglobalSupport: [
          'Mạng lưới hội cựu du học sinh EduGlobal Alumni đón tại sân bay Mỹ',
          'Đồng hành hỗ trợ học tập, chuyển trường hoặc xin việc làm STEM OPT sau tốt nghiệp'
        ],
        milestone: 'Bắt đầu hành trình học tập tại các trường đại học hàng đầu thế giới'
      }
    ],
    jobOrMajors: [
      'Khoa học Máy tính (Computer Science) & Trí tuệ Nhân tạo (AI)',
      'Tài chính, Công nghệ Tài chính (FinTech) & Kinh tế học',
      'Kỹ thuật Dữ liệu (Data Engineering) & Phân tích Kinh doanh',
      'Khoa học Y sinh (Biomedical Science) & Công nghệ Sinh học',
      'Kỹ thuật Cơ điện tử & Thiết kế Hệ thống Tự động hóa'
    ],
    faq: [
      {
        question: 'Sinh viên tốt nghiệp khối ngành STEM tại Mỹ được ở lại làm việc bao lâu?',
        answer: 'Sinh viên theo học các ngành STEM được hưởng chính sách gia hạn OPT thêm 24 tháng, tổng cộng được ở lại làm việc tại các công ty Mỹ lên đến 36 tháng (3 năm) sau khi tốt nghiệp.'
      },
      {
        question: 'Không thi SAT có xin được học bổng đại học Mỹ không?',
        answer: 'Hoàn toàn được! Hiện nay nhiều trường đại học Mỹ áp dụng chính sách Test-optional (không bắt buộc SAT). Điểm GPA cao kết hợp bài luận cá nhân xuất sắc và phỏng vấn tốt vẫn có thể nhận học bổng 50-80%.'
      }
    ]
  },
  {
    id: 'uk',
    countryName: 'Vương Quốc Anh (United Kingdom)',
    flag: '🇬🇧',
    heroBadge: 'Russell Group • Thạc Sĩ 1 Năm • Visa Graduate Route 2 Năm',
    tagline: 'Chương trình đào tạo danh giá, tiết kiệm 1 năm chi phí sinh hoạt và cơ hội trải nghiệm thị trường tài chính quốc tế',
    bannerImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80',
    avgTimeline: '4 - 6 Tháng Chuẩn Bị',
    avgIncomeOrScholarship: 'Học Bổng £3,000 - £10,000',
    visaSuccessRate: '99.4%',
    primaryPrograms: [
      {
        name: 'Chương Trình Thạc Sĩ 1 Năm (Master of Science / Arts)',
        type: 'Thạc Sĩ Tinh Hoa',
        highlight: 'Chỉ học đúng 1 năm • Tiết kiệm 1 năm chi phí • Visa ở lại 2 năm',
        requirement: 'Tốt nghiệp Đại học, GPA từ 7.0 trở lên, IELTS UKVI từ 6.5 trở lên'
      },
      {
        name: 'Cử Nhân 3 Năm Đại Học Russell Group',
        type: 'Đại Học Danh Giá',
        highlight: 'Top 1% trường đại học thế giới (Oxford, Cambridge, UCL, Imperial, Edinburgh)',
        requirement: 'Học bạ xuất sắc hoặc chứng chỉ A-Levels / IB / Foundation'
      }
    ],
    costBreakdown: [
      { item: 'Phí chuẩn bị hồ sơ UCAS và xin thư mời CAS', amount: 'Miễn phí với các trường đối tác', note: 'EduGlobal là đại diện tuyển sinh chính thức' },
      { item: 'Bảo hiểm y tế quốc gia Anh (IHS) & Lệ phí visa sinh viên', amount: 'Theo quy định của UKVI', note: 'Hưởng chế độ chăm sóc y tế toàn diện NHS của Anh' },
      { item: 'Học phí sau học bổng', amount: '£12,000 - £22,000 / năm', note: 'Tùy ngành học và trường đào tạo' }
    ],
    phases: [
      {
        phaseNumber: '01',
        title: 'Tư Vấn Chọn Trường & Kiểm Tra Năng Lực Tiếng Anh UKVI',
        duration: 'Tháng 1',
        badge: 'Định Hướng',
        summary: 'Lựa chọn các trường thuộc Russell Group và chuẩn bị chứng chỉ IELTS UKVI đạt chuẩn.',
        tasks: ['Chọn 5 trường đại học phù hợp', 'Ôn luyện và thi chứng chỉ IELTS UKVI', 'Tổng hợp bảng điểm đại học / THPT'],
        documentsNeeded: ['Bảng điểm, bằng tốt nghiệp, chứng chỉ tiếng Anh'],
        eduglobalSupport: ['Kiểm tra tiếng Anh đầu vào và miễn phí dịch thuật hồ sơ'],
        milestone: 'Chốt danh sách trường và nộp hồ sơ xin thư mời'
      },
      {
        phaseNumber: '02',
        title: 'Hoàn Thiện Bài Luận Cá Nhân (SOP) & Nhận Thư Mời (Offer)',
        duration: 'Tháng 2 - 3',
        badge: 'Nhận Thư Mời',
        summary: 'Viết bài luận thể hiện mục tiêu học thuật và nhận thư mời nhập học có điều kiện (Conditional Offer).',
        tasks: ['Chỉnh sửa bài luận cá nhân', 'Nộp hồ sơ trực tuyến qua hệ thống', 'Nhận thư mời trúng tuyển'],
        documentsNeeded: ['Bài luận SOP, thư giới thiệu từ giảng viên'],
        eduglobalSupport: ['Biên tập bài luận tiếng Anh chuẩn giọng văn học thuật Anh'],
        milestone: 'Nhận thư mời nhập học chính thức từ các trường hàng đầu Anh'
      },
      {
        phaseNumber: '03',
        title: 'Xin Học Bổng & Nhận Giấy Chứng Nhận CAS',
        duration: 'Tháng 4',
        badge: 'Cấp Thư CAS',
        summary: 'Nộp đơn xin học bổng trường và đặt cọc học phí để trường cấp thư xác nhận nhập học CAS.',
        tasks: ['Nộp bài luận xin học bổng Vice-Chancellor', 'Đặt cọc học phí (Deposit)', 'Nhận thư CAS điện tử'],
        documentsNeeded: ['Chứng nhận tài chính và thư chấp thuận CAS'],
        eduglobalSupport: ['Hỗ trợ xin học bổng từ £3,000 đến £10,000'],
        milestone: 'Nhận thư CAS chính thức để nộp visa'
      },
      {
        phaseNumber: '04',
        title: 'Nộp Hồ Sơ Visa Sinh Viên UK (Student Route)',
        duration: 'Tháng 5',
        badge: 'Visa Du Học Anh',
        summary: 'Nộp hồ sơ xin visa sinh viên tại trung tâm VFS Global và đóng phí bảo hiểm y tế IHS.',
        tasks: ['Điền đơn xin visa trực tuyến UKVI', 'Lấy sinh trắc học tại VFS Global Hà Nội / TP.HCM', 'Nhận kết quả visa'],
        documentsNeeded: ['Hộ chiếu, CAS, chứng chỉ IELTS, hồ sơ tài chính'],
        eduglobalSupport: ['Tỷ lệ đỗ visa Anh tại EduGlobal đạt 99.4%'],
        milestone: 'Cầm visa sinh viên UK trên tay'
      },
      {
        phaseNumber: '05',
        title: 'Xuất Cảnh Tới London & Kích Hoạt Quyền Làm Việc Sau Tốt Nghiệp',
        duration: 'Tháng 8 - 9',
        badge: 'Trải Nghiệm Toàn Cầu',
        summary: 'Bay sang Anh, nhận thẻ cư trú sinh viên BRP và chuẩn bị lộ trình xin visa Graduate Route 2 năm.',
        tasks: ['Bay đến London Heathrow, di chuyển về trường', 'Nhận thẻ BRP tại bưu điện hoặc tại trường', 'Làm việc thêm 20h/tuần'],
        documentsNeeded: ['Hộ chiếu dán visa vignette, thư xác nhận nhập học'],
        eduglobalSupport: ['Hỗ trợ đặt vé máy bay, sim thẻ và hướng dẫn chuyển tiền du học'],
        milestone: 'Tốt nghiệp và nhận visa Graduate Route 2 năm làm việc tự do tại Anh'
      }
    ],
    jobOrMajors: [
      'Tài chính Quốc tế (International Finance) & Ngân hàng',
      'Khoa học Dữ liệu & Trí tuệ Nhân tạo',
      'Luật Kinh tế & Thương mại Quốc tế',
      'Quản trị Khách sạn & Du lịch Sang trọng',
      'Thiết kế Thời trang & Kiến trúc Đô thị'
    ],
    faq: [
      {
        question: 'Chương trình Thạc sĩ tại Anh có thời gian học là bao lâu?',
        answer: 'Phần lớn các chương trình Thạc sĩ tại Vương Quốc Anh chỉ kéo dài 12 tháng (1 năm), giúp sinh viên tiết kiệm được 1 năm chi phí sinh hoạt và gia nhập thị trường lao động sớm hơn bạn bè đồng trang lứa.'
      }
    ]
  },
  {
    id: 'aus',
    countryName: 'Úc (Australia)',
    flag: '🇦🇺',
    heroBadge: 'Group of Eight • Visa Làm Việc 2-4 Năm • Lương Cao ~23.23 AUD/h',
    tagline: 'Môi trường sống lý tưởng, quyền làm việc bán thời gian 48h/2 tuần và cơ hội định cư tay nghề rộng mở',
    bannerImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1400&q=80',
    avgTimeline: '4 - 7 Tháng Chuẩn Bị',
    avgIncomeOrScholarship: 'Học Bổng 20% - 50% Học Phí',
    visaSuccessRate: '99.1%',
    primaryPrograms: [
      {
        name: 'Đại Học & Thạc Sĩ Nhóm G8 (Go8 Universities)',
        type: 'Đại Học Top Đầu',
        highlight: 'Top 50 thế giới (Melbourne, Sydney, ANU, UNSW, Queensland, Monash)',
        requirement: 'GPA từ 7.5 trở lên, IELTS từ 6.5 trở lên (không band nào dưới 6.0)'
      },
      {
        name: 'Du Học Nghề VET & Cao Đẳng Thực Hành',
        type: 'Du Học Nghề Định Cư',
        highlight: 'Chi phí tiết kiệm • Thực hành nhiều • Dễ xin việc làm và định cư tay nghề PR',
        requirement: 'Tốt nghiệp THPT, IELTS từ 5.5 trở lên, tuổi từ 18 - 32'
      }
    ],
    costBreakdown: [
      { item: 'Phí xét duyệt hồ sơ trường đại học Úc', amount: 'Miễn phí với đại diện EduGlobal', note: 'EduGlobal là đối tác chính thức của các trường G8' },
      { item: 'Bảo hiểm y tế du học sinh bắt buộc (OSHC)', amount: '$550 - $650 AUD / năm', note: 'Bảo vệ toàn diện sức khỏe và quyền lợi khám chữa bệnh tại Úc' },
      { item: 'Lệ phí xét duyệt thị thực du học sinh Subclass 500', amount: '$710 AUD', note: 'Nộp trực tiếp cho Bộ Nội vụ Úc (Home Affairs)' }
    ],
    phases: [
      {
        phaseNumber: '01',
        title: 'Thẩm Định Hồ Sơ Học Tập & Định Hướng Định Cư PR',
        duration: 'Tháng 1 - 2',
        badge: 'Định Hướng Chiến Lược',
        summary: 'Kiểm tra điểm GPA, khả năng tiếng Anh và lựa chọn ngành học thuộc Danh mục Nghề nghiệp Định cư Tay nghề cao của Úc.',
        tasks: ['Chọn trường tại các vùng Regional ưu đãi cộng điểm định cư (Adelaide, Perth, Gold Coast)', 'Thi chứng chỉ IELTS hoặc PTE Academic'],
        documentsNeeded: ['Học bạ, bằng tốt nghiệp, chứng chỉ tiếng Anh'],
        eduglobalSupport: ['Chuyên gia tư vấn định cư Úc hỗ trợ định hướng ngành học triển vọng'],
        milestone: 'Chốt ngành học và nộp hồ sơ xin thư mời'
      },
      {
        phaseNumber: '02',
        title: 'Nhận Thư Mời Nhập Học & Đáp Ứng Điều Kiện GTE / GS',
        duration: 'Tháng 3',
        badge: 'Thư Nhập Học CoE',
        summary: 'Đáp ứng tiêu chuẩn Genuine Student (GS) của Bộ Nội Vụ Úc và nhận giấy xác nhận nhập học CoE.',
        tasks: ['Viết bản giải trình ý định du học GS chân thực', 'Đóng học phí kỳ đầu cho trường', 'Nhận giấy xác nhận CoE điện tử'],
        documentsNeeded: ['Bản giải trình Genuine Student, sao kê tài chính gia đình'],
        eduglobalSupport: ['Luật sư rà soát kỹ bản giải trình để hạn chế tối đa rủi ro visa'],
        milestone: 'Có trong tay giấy chứng nhận nhập học CoE chính thức'
      },
      {
        phaseNumber: '03',
        title: 'Nộp Hồ Sơ Visa Du Học Subclass 500',
        duration: 'Tháng 4 - 5',
        badge: 'Cấp Visa 500',
        summary: 'Nộp hồ sơ trực tuyến qua hệ thống ImmiAccount và khám sức khỏe tại trung tâm IOM.',
        tasks: ['Khám sức khỏe tại IOM và lấy sinh trắc học tại VFS', 'Theo dõi hồ sơ xét duyệt trên hệ thống Bộ Nội Vụ Úc', 'Nhận visa Subclass 500'],
        documentsNeeded: ['Hộ chiếu, CoE, OSHC, chứng minh tài chính'],
        eduglobalSupport: ['Tỷ lệ cấp visa đạt 99.1%'],
        milestone: 'Nhận Visa du học Úc chính thức'
      },
      {
        phaseNumber: '04',
        title: 'Hạ Cánh Tại Sydney/Melbourne & Ổn Định Cuộc Sống',
        duration: 'Tháng 6 - 7',
        badge: 'Bắt Đầu Học Tập',
        summary: 'Bay sang Úc, làm mã số thuế TFN và bắt đầu làm thêm 48h/2 tuần với mức lương cơ bản cao hàng đầu thế giới.',
        tasks: ['Bay sang Úc, nhận phòng trọ hoặc ký túc xá', 'Đăng ký mã số thuế TFN và tài khoản Commonwealth Bank', 'Đi làm thêm kiếm thu nhập'],
        documentsNeeded: ['Visa, CoE, hộ chiếu'],
        eduglobalSupport: ['Mạng lưới sinh viên EduGlobal hỗ trợ tìm chỗ ở và việc làm thêm'],
        milestone: 'Thu nhập làm thêm từ $1,800 - $2,800 AUD/tháng'
      },
      {
        phaseNumber: '05',
        title: 'Tốt Nghiệp & Chuyển Đổi Sang Visa Tốt Nghiệp 485 Để Định Cư',
        duration: 'Sau khi tốt nghiệp',
        badge: 'Định Cư Lâu Dài',
        summary: 'Sau khi hoàn thành khóa học từ 2 năm trở lên, sinh viên được cấp Visa 485 ở lại làm việc từ 2 đến 4 năm và chuẩn bị nộp hồ sơ PR.',
        tasks: ['Nộp visa Graduate Subclass 485', 'Làm thẩm định tay nghề (Skill Assessment)', 'Nộp đơn bày tỏ nguyện vọng EOI xin thẻ thường trú nhân PR'],
        documentsNeeded: ['Bằng tốt nghiệp tại Úc, bảng điểm, chứng chỉ tiếng Anh'],
        eduglobalSupport: ['Hỗ trợ pháp lý chuyển đổi visa và định cư tay nghề dài hạn'],
        milestone: 'Nhận Thường Trú Nhân Úc (Permanent Resident) thành công'
      }
    ],
    jobOrMajors: [
      'Điều dưỡng & Chăm sóc Sức khỏe (Nursing & Healthcare)',
      'Công nghệ Thông tin, An ninh Mạng & Lập trình Web',
      'Kỹ sư Xây dựng, Cầu đường & Khai khoáng',
      'Giáo dục Mầm non & Tiểu học',
      'Kế toán, Kiểm toán & Tài chính Ứng dụng'
    ],
    faq: [
      {
        question: 'Sinh viên du học Úc được phép đi làm thêm bao nhiêu giờ một tuần?',
        answer: 'Sinh viên quốc tế tại Úc được phép làm việc bán thời gian lên tới 48 giờ mỗi 2 tuần trong thời gian học, và không giới hạn giờ làm việc trong các kỳ nghỉ lễ. Mức lương tối thiểu theo luật là ~23.23 AUD/giờ (~380,000 VNĐ/h).'
      }
    ]
  }
];
