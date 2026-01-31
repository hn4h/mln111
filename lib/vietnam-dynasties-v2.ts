cards: [
  // Câu 1: Lý Thái Tổ lên ngôi - 1009
  {
    id: "ly_1",
    character: "Lý Thái Tổ - Năm 1009",
    situation: "Triều Tiền Lê sụp đổ, bạn được triều thần và các bậc cao tăng suy tôn lên ngôi. Tuy nhiên, các thế lực cũ vẫn còn đó, lòng dân sau bao năm biến động vẫn chưa thực sự an lòng; bạn sẽ đối phó thế nào để vừa giữ vững vương quyền, vừa ổn định đại cuộc trong buổi đầu lập quốc?",
    philosophicalContext: "Quy luật mâu thuẫn",
    dialecticLaw: "Sự thống nhất và đấu tranh giữa các mặt đối lập: Mâu thuẫn giữa triều đại cũ và mới cần được giải quyết bằng sự cảm hóa (thống nhất) thay vì tiêu diệt cực đoan (đấu tranh một chiều) để tạo ra sự ổn định cho quốc gia.",
    yearContext: "1009",
    historicalQuote: "Lấy đức phục người, thiên hạ thái bình. Ban chiếu đại xá để lòng dân quy thuận, mở ra thời kỳ mới. (Đại Việt Sử Ký Toàn Thư)",
    leftChoice: {
      text: "Truy quét tàn dư nhà Lê",
      effects: { finance: 5, people: -15, military: 10, religion: 0 },
    },
    rightChoice: {
      text: "Ban chiếu đại xá, trọng dụng hiền tài cũ",
      effects: { finance: -2, people: 15, military: 5, religion: 10 },
    },
    multipleChoices: [
      {
        id: "ly1_a",
        text: "Ban chiếu đại xá, xoa dịu lòng dân",
        description: "Dùng đức trị để giải quyết mâu thuẫn nội bộ.",
        effects: { finance: -2, people: 15, military: 5, religion: 10 },
        historicalNote: "Lý Thái Tổ đã ban chiếu đại xá ngay khi lên ngôi, giúp ổn định xã hội và thu phục lòng người.",
        isCorrect: true
      },
      {
        id: "ly1_b",
        text: "Dùng vũ lực trấn áp các quan cũ",
        description: "Giải quyết mâu thuẫn bằng bạo lực.",
        effects: { finance: 5, people: -20, military: 15, religion: -5 },
        historicalNote: "Hành động này thường dẫn đến nội chiến và suy yếu tiềm lực quốc gia."
      },
      {
        id: "ly1_c",
        text: "Thoái vị, nhường ngôi cho người khác",
        description: "Trốn tránh mâu thuẫn.",
        effects: { finance: 0, people: -10, military: -10, religion: 0 },
        historicalNote: "Sẽ gây ra khoảng trống quyền lực và hỗn loạn lịch sử."
      },
      {
        id: "ly1_d",
        text: "Chỉ dựa vào tăng lữ để trị quốc",
        description: "Coi nhẹ các mặt mâu thuẫn thực tế.",
        effects: { finance: -5, people: 5, military: -10, religion: 20 },
        historicalNote: "Phật giáo quan trọng nhưng không thể thay thế bộ máy hành chính."
      }
    ],
  },

  // Câu 2: Dời đô về Thăng Long - 1010
  {
    id: "ly_2",
    character: "Lý Thái Tổ - Năm 1010",
    situation: "Hoa Lư hiểm trở nhưng chật hẹp, vốn chỉ phù hợp làm căn cứ phòng thủ, khó lòng mở mang bờ cõi và phát triển kinh tế. Bạn muốn dời đô về thành Đại La – nơi có thế "rồng cuộn hổ ngồi" để tính kế lâu dài, nhưng quần thần lo sợ việc di dời sẽ gây tốn kém và làm xáo trộn vận mệnh quốc gia.",
    philosophicalContext: "Quy luật phủ định của phủ định",
    dialecticLaw: "Sự phát triển là một chuỗi các sự phủ định biện chứng: Việc rời bỏ Hoa Lư (cái cũ đã hoàn thành sứ mệnh) để đến Thăng Long (cái mới) là bước tiến tất yếu để nâng tầm đất nước lên một nấc thang phát triển cao hơn.",
    yearContext: "1010",
    historicalQuote: "Thăng Long là nơi rồng cuộn hổ ngồi, địa thế vững bền muôn đời. (Chiếu dời đô)",
    leftChoice: {
      text: "Ở lại Hoa Lư để tiết kiệm",
      effects: { finance: 15, people: -10, military: -5, religion: 0 },
    },
    rightChoice: {
      text: "Viết Chiếu dời đô về Thăng Long",
      effects: { finance: -20, people: 12, military: 10, religion: 5 },
    },
    multipleChoices: [
      {
        id: "ly2_a",
        text: "Giữ đô ở Hoa Lư để phòng thủ",
        description: "Bảo thủ, phủ định sự phát triển.",
        effects: { finance: 10, people: -10, military: -5, religion: 0 },
        historicalNote: "Hoa Lư không đủ không gian cho một quốc gia đang lớn mạnh."
      },
      {
        id: "ly2_b",
        text: "Dời đô về Thăng Long",
        description: "Phủ định biện chứng, mở ra kỷ nguyên mới.",
        effects: { finance: -20, people: 12, military: 10, religion: 5 },
        historicalNote: "Năm 1010, Lý Thái Tổ dời đô về Thăng Long, đặt nền móng cho kinh đô nghìn năm văn hiến.",
        isCorrect: true
      },
      {
        id: "ly2_c",
        text: "Dời đô về vùng miền núi phía Bắc",
        description: "Đi ngược lại quy luật phát triển kinh tế.",
        effects: { finance: -15, people: -10, military: 5, religion: 0 },
        historicalNote: "Kinh đô cần ở nơi giao thương thuận lợi như đồng bằng."
      },
      {
        id: "ly2_d",
        text: "Dời đô mỗi đời vua một lần",
        description: "Gây bất ổn định cho hệ thống.",
        effects: { finance: -50, people: -30, military: -20, religion: 0 },
        historicalNote: "Hành động này sẽ làm kiệt quệ quốc gia."
      }
    ],
  },

  // Câu 3: Xây dựng chùa Một Cột - 1049
  {
    id: "ly_3",
    character: "Lý Thái Tông - Năm 1049",
    situation: "Bạn nằm mộng thấy Phật Bà Quan Âm ngồi trên tòa sen dắt bạn lên tòa. Bạn muốn hiện thực hóa linh cảm này bằng một công trình kiến trúc độc đáo để cầu phúc cho dân và tỏ lòng thành kính, nhưng một số quần thần cho rằng việc dùng ngân khố cho điềm báo mộng là chưa thực sự thuyết phục.",
    philosophicalContext: "Mối quan hệ giữa Ý thức và Vật chất ",
    dialecticLaw: "Mối quan hệ biện chứng giữa vật chất và ý thức: Vật chất quyết định ý thức, nhưng ý thức có tính độc lập tương đối và tác động trở lại vật chất thông qua hoạt động thực tiễn. Giấc mộng là một hình tượng của ý thức, tuy mang tính chủ quan nhưng có nguồn gốc sâu xa từ thực tại vật chất và tâm lý xã hội. Khi ý thức (ý tưởng xây chùa) được hiện thực hóa thông qua hoạt động thực tiễn, nó biến cái quan niệm thành cái thực tại, tạo ra một thực thể vật chất - văn hóa để chỉ đạo hành động và tác động ngược trở lại làm ổn định tâm lý, niềm tin của quần chúng nhân dân. Điều này minh chứng rằng khi tư tưởng thâm nhập vào quần chúng, nó sẽ trở thành sức mạnh vật chất để cải tạo xã hội và thúc đẩy lịch sử phát triển.",
    yearContext: "1049",
    historicalQuote: "Dựng cột đá giữa hồ, làm tòa sen của Phật Bà ở trên như đã thấy trong mộng.",
    leftChoice: {
      text: "Bỏ qua giấc mộng, lo việc quân",
      effects: { finance: 10, people: -5, military: 10, religion: -15 },
    },
    rightChoice: {
      text: "Xây chùa Diên Hựu (Một Cột)",
      effects: { finance: -12, people: 10, military: 0, religion: 25 },
    },
    multipleChoices: [
      {
        id: "ly3_a",
        text: "Xây chùa Diên Hựu (Một Cột)",
        description: "Hiện thực hóa ý thức (niềm tin) vào đời sống thực tiễn.",
        effects: { finance: -12, people: 10, military: 0, religion: 25 },
        historicalNote: "Chùa Một Cột được xây năm 1049, trở thành biểu tượng kiến trúc và tâm linh độc đáo.",
        isCorrect: true
      },
      {
        id: "ly3_b",
        text: "Chỉ vẽ tranh về giấc mộng",
        description: "Ý thức chưa được hiện thực hóa thành hành động vật chất cụ thể.",
        effects: { finance: -2, people: 2, military: 0, religion: 5 },
        historicalNote: "Không tạo được tác động tâm linh sâu rộng trong quần chúng."
      },
      {
        id: "ly3_c",
        text: "Cấm dân tin vào điềm mộng",
        description: "Phủ nhận vai trò tác động trở lại của ý thức đối với đời sống.",
        effects: { finance: 0, people: -20, military: 0, religion: -30 },
        historicalNote: "Gây mâu thuẫn lớn với niềm tin Phật giáo đương thời."
      },
      {
        id: "ly3_d",
        text: "Xây hàng ngàn ngôi chùa nhỏ",
        description: "Dàn trải nguồn lực vật chất, không tạo được biểu tượng tinh thần tập trung.",
        effects: { finance: -30, people: 5, military: -10, religion: 15 },
        historicalNote: "Gây lãng phí ngân khố mà không có công trình điểm nhấn."
      }
    ],
  },

  // Câu 4: Ban bố bộ luật Hình thư - 1042
  {
    id: "ly_4",
    character: "Lý Thái Tông - Năm 1042",
    situation: "Việc xử án trong nước trước nay chỉ dựa vào các chiếu chỉ rời rạc của nhà vua và tập quán địa phương, dẫn đến tình trạng xử án tùy tiện, gây khó khăn cho quan lại và bất công cho dân chúng. Bạn định liệu sao để tạo ra một thước đo chuẩn mực, giúp công lý được thực thi thống nhất trong toàn quốc?",
    philosophicalContext: "Nội dung và Hình thức",
    dialecticLaw: "Sự thống nhất giữa nội dung và hình thức: Nội dung là việc quản lý xã hội ngày càng phức tạp của nhà Lý, còn Hình thức là hệ thống luật pháp. Khi nội dung đã phát triển đến mức độ nhất định, những chiếu chỉ rời rạc (hình thức cũ) không còn phù hợp; việc ban hành bộ Hình thư là tạo ra một hình thức pháp lý mới, chặt chẽ để thúc đẩy sự ổn định và công bằng của xã hội.",
    yearContext: "1042",
    historicalQuote: "Trước kia việc kiện tụng phiền nhiễu, quan giữ pháp luật câu nệ tờ văn... Trẫm lấy làm thương xót, sai trung thư san định luật lệnh. (Đại Việt Sử Ký Toàn Thư)",
    leftChoice: {
      text: "Giữ lệ cũ để dễ thay đổi",
      effects: { finance: 5, people: -10, military: 0, religion: 0 },
    },
    rightChoice: {
      text: "Ban hành bộ luật Hình thư",
      effects: { finance: -5, people: 15, military: 5, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly4_a",
        text: "Tiếp tục dùng lệnh miệng của vua",
        description: "Thiếu hình thức pháp lý ổn định.",
        effects: { finance: 5, people: -15, military: -5, religion: 0 },
        historicalNote: "Dẫn đến sự tùy tiện trong xử án và bất công xã hội."
      },
      {
        id: "ly4_b",
        text: "Soạn thảo và ban hành luật Hình thư",
        description: "Hoàn thiện hình thức để quản lý nội dung xã hội.",
        effects: { finance: -5, people: 15, military: 5, religion: 0 },
        historicalNote: "Hình thư (1042) là bộ luật thành văn đầu tiên của Việt Nam.",
        isCorrect: true
      },
      {
        id: "ly4_c",
        text: "Vay mượn hoàn toàn luật từ phương Bắc",
        description: "Hình thức không phù hợp với nội dung thực tế đất nước.",
        effects: { finance: -5, people: -10, military: 0, religion: 0 },
        historicalNote: "Luật pháp cần phù hợp với phong tục tập quán bản địa."
      },
      {
        id: "ly4_d",
        text: "Bãi bỏ mọi luật lệ để dân tự xử",
        description: "Xóa bỏ hình thức dẫn đến hỗn loạn nội dung.",
        effects: { finance: -20, people: -40, military: -20, religion: 0 },
        historicalNote: "Sẽ dẫn đến tình trạng vô chính phủ."
      }
    ],
  },

  // Câu 5: Chính sách Ngụ binh ư nông
  {
    id: "ly_5",
    character: "Nhà Lý - Thế kỷ XI",
    situation: "Lực lượng sản xuất nông nghiệp đang thiếu người cày cấy trầm trọng, trong khi quân đội thường trực quá đông lại gây tốn kém ngân khố và lãng phí sức lao động. Bạn sẽ giải quyết mâu thuẫn này thế nào để vừa đảm bảo an ninh quốc phòng, vừa không làm suy kiệt nền kinh tế vốn dựa vào đồng ruộng?",
    philosophicalContext: "Lực lượng sản xuất và Quan hệ sản xuất",
    dialecticLaw: "Quy luật sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất: Việc tổ chức quân đội (QHSX) phải gắn liền với hoạt động sản xuất nông nghiệp (LLSX) để tối ưu hóa nguồn lực quốc gia.",
    yearContext: "Thế kỷ XI",
    historicalQuote: "Tĩnh vi nông, động vi binh (Lúc yên là dân cày, lúc có biến là người lính).",
    leftChoice: {
      text: "Bắt dân đi lính quanh năm",
      effects: { finance: -15, people: -20, military: 20, religion: 0 },
    },
    rightChoice: {
      text: "Thực hiện 'Ngụ binh ư nông'",
      effects: { finance: 15, people: 12, military: 10, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly5_a",
        text: "Duy trì quân đội chuyên nghiệp tách rời sản xuất",
        description: "Lãng phí lực lượng sản xuất.",
        effects: { finance: -20, people: -10, military: 15, religion: 0 },
        historicalNote: "Làm cạn kiệt ngân khố và thiếu hụt lao động nông nghiệp."
      },
      {
        id: "ly5_b",
        text: "Áp dụng chính sách Ngụ binh ư nông - quân sĩ luân phiên về quê làm ruộng",
        description: "Kết hợp hài hòa LLSX và tổ chức quân sự.",
        effects: { finance: 15, people: 12, military: 10, religion: 0 },
        historicalNote: "Quân sĩ luân phiên về quê làm ruộng, giúp nhà nước không tốn chi phí nuôi quân mà vẫn có lực lượng dự bị hùng hậu.",
        isCorrect: true
      },
      {
        id: "ly5_c",
        text: "Giải tán quân đội để tập trung cày cấy",
        description: "Coi nhẹ quốc phòng, đe dọa sự tồn vong.",
        effects: { finance: 20, people: 10, military: -50, religion: 0 },
        historicalNote: "Khiến quốc gia dễ bị xâm lược."
      },
      {
        id: "ly5_d",
        text: "Thuê lính nước ngoài để dân yên tâm sản xuất",
        description: "Hành động nguy hiểm cho chủ quyền.",
        effects: { finance: -20, people: 0, military: 5, religion: 0 },
        historicalNote: "Dễ dẫn đến họa phản gián và mất quyền kiểm soát quân sự."
      }
    ],
  },

  // Câu 6: Đặt tên nước là Đại Việt - 1054
  {
    id: "ly_6",
    character: "Lý Thánh Tông - Năm 1054",
    situation: "Sau nhiều năm củng cố nội lực, thế nước đã mạnh, lòng dân đã đồng. Bạn muốn khẳng định vị thế một quốc gia độc lập, có nền văn hiến riêng và ngang hàng với phương Bắc thay vì sử dụng tên gọi Đại Cồ Việt vốn mang âm hưởng từ thời lập quốc sơ khai.",
    philosophicalContext: "Bản chất và Hiện tượng",
    dialecticLaw: "Mối quan hệ giữa bản chất và hiện tượng: Việc thay đổi quốc hiệu (hiện tượng) là sự phản ánh bản chất mới của quốc gia - một cường quốc độc lập, có cương vực và văn hiến riêng.",
    yearContext: "1054",
    historicalQuote: "Đổi tên nước là Đại Việt, xưng Hoàng đế để khẳng định chủ quyền.",
    leftChoice: {
      text: "Giữ tên cũ cho khiêm nhường",
      effects: { finance: 0, people: -5, military: -5, religion: 0 },
    },
    rightChoice: {
      text: "Đổi quốc hiệu thành Đại Việt",
      effects: { finance: -5, people: 10, military: 15, religion: 5 },
    },
    multipleChoices: [
      {
        id: "ly6_a",
        text: "Tiếp tục dùng tên Đại Cồ Việt",
        description: "Hiện tượng chưa theo kịp bản chất mới.",
        effects: { finance: 0, people: -5, military: -5, religion: 0 },
        historicalNote: "Tên cũ mang tính chất của thời kỳ mới lập quốc, chưa thể hiện hết tầm vóc mới."
      },
      {
        id: "ly6_b",
        text: "Đặt tên nước là Đại Việt",
        description: "Hiện tượng phản ánh đúng bản chất độc lập, tự cường.",
        effects: { finance: -5, people: 10, military: 15, religion: 5 },
        historicalNote: "Cái tên Đại Việt tồn tại lâu dài nhất trong lịch sử phong kiến Việt Nam.",
        isCorrect: true
      },
      {
        id: "ly6_c",
        text: "Xin triều đình phương Bắc đặt tên cho",
        description: "Phụ thuộc, mất bản chất độc lập.",
        effects: { finance: -10, people: -20, military: -20, religion: 0 },
        historicalNote: "Hành động này là sự đầu hàng về mặt chính trị."
      },
      {
        id: "ly6_d",
        text: "Đặt tên theo niên hiệu của vua",
        description: "Nhầm lẫn giữa cái riêng và cái chung.",
        effects: { finance: -2, people: -5, military: 0, religion: 0 },
        historicalNote: "Tên nước cần mang tính biểu tượng dân tộc lâu dài."
      }
    ],
  },

  // Câu 7: Cấm giết mổ trâu bò - Thế kỷ XI
  {
    id: "ly_7",
    character: "Nhà Lý - Thế kỷ XI",
    situation: "Để phát triển sản xuất nông nghiệp, bạn nhận thấy sức kéo của trâu bò là yếu tố sống còn, quyết định sự ấm no của cả quốc gia. Tuy nhiên, dân chúng và binh lính lại thường xuyên giết mổ trâu bò để ăn thịt hoặc cúng tế bừa bãi, khiến đồng ruộng bị bỏ hoang vì thiếu sức kéo. Bạn sẽ hành động ra sao để bảo vệ "đầu cơ nghiệp" của nhà nông?",
    philosophicalContext: "Sản xuất vật chất",
    dialecticLaw: "Sản xuất vật chất là nền tảng của đời sống xã hội: Bảo vệ công cụ lao động (trâu bò) chính là bảo vệ điều kiện tiên quyết để duy trì và phát triển sản xuất nông nghiệp - nguồn sống của cả quốc gia.",
    yearContext: "Thế kỷ XI",
    historicalQuote: "Trâu là đầu cơ nghiệp. Kẻ nào giết trâu trái phép sẽ bị xử phạt nặng. (Luật pháp thời Lý)",
    leftChoice: {
      text: "Cho dân tự do mổ thịt",
      effects: { finance: 5, people: 5, military: 0, religion: -5 },
    },
    rightChoice: {
      text: "Ban lệnh cấm giết mổ trâu bò",
      effects: { finance: 10, people: -5, military: 0, religion: 5 },
    },
    multipleChoices: [
      {
        id: "ly7_a",
        text: "Khuyến khích mổ thịt trâu để dân có sức làm ăn",
        description: "Hủy hoại tư liệu sản xuất vật chất.",
        effects: { finance: -10, people: 10, military: 5, religion: 0 },
        historicalNote: "Sẽ dẫn đến tình trạng thiếu sức kéo và mất mùa nghiêm trọng."
      },
      {
        id: "ly7_b",
        text: "Ban lệnh nghiêm cấm giết mổ trâu bò bừa bãi",
        description: "Bảo vệ tư liệu sản xuất quan trọng nhất.",
        effects: { finance: 10, people: -5, military: 0, religion: 5 },
        historicalNote: "Chính sách này giúp nông nghiệp nhà Lý phát triển ổn định, đảm bảo an ninh lương thực.",
        isCorrect: true
      },
      {
        id: "ly7_c",
        text: "Chỉ cho phép quý tộc được ăn thịt trâu",
        description: "Gây bất công trong sản xuất.",
        effects: { finance: 5, people: -15, military: 0, religion: 0 },
        historicalNote: "Tạo ra mâu thuẫn giai cấp mà không giải quyết được gốc rễ vấn đề sản xuất."
      },
      {
        id: "ly7_d",
        text: "Nhập khẩu trâu từ nước ngoài thay vì bảo vệ",
        description: "Lãng phí ngân khố, không dựa vào nội lực.",
        effects: { finance: -20, people: 0, military: 0, religion: 0 },
        historicalNote: "Không bền vững và làm phụ thuộc kinh tế."
      }
    ],
  },

  // Câu 8: Đắp đê Cơ Xá - 1108
  {
    id: "ly_8",
    character: "Lý Nhân Tông - Năm 1108",
    situation: "Sông Hồng mùa lũ thường dâng cao gây ngập lụt kinh đô Thăng Long, cuốn trôi ruộng vườn và nhà cửa của dân chúng. Bạn muốn huy động dân phu đắp đê ngăn lũ để bảo vệ sự ổn định lâu dài, nhưng quan lại lo sợ việc cưỡng bách lao dịch nặng nề sẽ khiến dân chúng oán thán và nảy sinh bất ổn.",
    philosophicalContext: "Nguyên lý về mối liên hệ phổ biến và sự phát triển",
    dialecticLaw: "Nguyên lý về sự phát triển: Phát triển là quá trình vận động từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện hơn. Việc đắp đê không đơn thuần là hoạt động xây dựng mà là sự giải quyết mâu thuẫn giữa con người và tự nhiên thông qua hoạt động thực tiễn có mục đích. Quá trình này thúc đẩy xã hội chuyển từ trạng thái bị động, lệ thuộc vào thiên tai (cái cũ, lỗi thời) sang trạng thái chủ động kiểm soát nguồn nước, bảo vệ sản xuất vật chất (cái mới, tiến bộ hơn), tạo ra 'giới tự nhiên thứ hai' phục vụ cho sự sinh tồn và phát triển bền vững của quốc gia.",
    yearContext: "1108",
    historicalQuote: "Đắp đê ở phường Cơ Xá để ngăn nước lụt cho Thăng Long. (Đại Việt Sử Ký Toàn Thư)",
    leftChoice: {
      text: "Để thuận theo tự nhiên",
      effects: { finance: 5, people: -20, military: -5, religion: 0 },
    },
    rightChoice: {
      text: "Huy động dân đắp đê quy mô lớn",
      effects: { finance: -15, people: -5, military: 5, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly8_a",
        text: "Chỉ làm lễ cầu cúng thần sông",
        description: "Duy tâm, không giải quyết được thực tế phát triển.",
        effects: { finance: -5, people: 0, military: 0, religion: 15 },
        historicalNote: "Lũ lụt vẫn sẽ xảy ra và gây thiệt hại như cũ."
      },
      {
        id: "ly8_b",
        text: "Dời dân đi nơi khác mỗi khi mùa lũ về",
        description: "Trốn tránh sự phát triển, gây bất ổn định.",
        effects: { finance: -10, people: -20, military: -5, religion: 0 },
        historicalNote: "Làm xáo trộn đời sống và lãng phí đất đai canh tác."
      },
      {
        id: "ly8_c",
        text: "Huy động sức dân đắp đê ngăn lũ (đê Cơ Xá)",
        description: "Chủ động cải tạo tự nhiên để phát triển.",
        effects: { finance: -15, people: -5, military: 5, religion: 0 },
        historicalNote: "Đây là lần đầu tiên sử sách ghi chép về việc đắp đê quy mô lớn ở Việt Nam.",
        isCorrect: true
      },
      {
        id: "ly8_d",
        text: "Lấp luôn sông Hồng để lấy đất",
        description: "Hành động phi thực tế, trái quy luật tự nhiên.",
        effects: { finance: -40, people: -40, military: -10, religion: 0 },
        historicalNote: "Gây ra thảm họa sinh thái và lụt lội nghiêm trọng hơn."
      }
    ],
  },

  // Câu 9: Xây dựng Văn Miếu - 1070
  {
    id: "ly_9",
    character: "Lý Thánh Tông - Năm 1070",
    situation: "Đất nước đã ổn định, bộ máy hành chính đang ngày càng mở rộng và đòi hỏi những người tài giỏi, có kiến thức bài bản để quản lý thay vì chỉ dựa vào tầng lớp võ quan hay tăng lữ. Bạn định hướng giáo dục thế nào để tạo ra một tầng lớp trí thức trung thành, đủ năng lực gánh vác việc nước và xây dựng một nền văn hiến lâu đời?",
    philosophicalContext: "Cơ sở hạ tầng và Kiến trúc thượng tầng",
    dialecticLaw: "Mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng: Kiến trúc thượng tầng (bao gồm hệ thống tư tưởng Nho giáo, giáo dục và thiết chế nhà nước) được hình thành trên một cơ sở hạ tầng nhất định nhưng có tính độc lập tương đối và tác động trở lại mạnh mẽ đối với cơ sở hạ tầng đó. Việc xây dựng Văn Miếu để đào tạo tầng lớp trí thức là hoạt động củng cố kiến trúc thượng tầng nhằm đáp ứng đòi hỏi khách quan của sự phát triển kinh tế - xã hội. Khi kiến trúc thượng tầng (hệ thống quản lý và giáo dục) phù hợp và phản ánh đúng nhu cầu của cơ sở hạ tầng, nó sẽ trở thành lực lượng thúc đẩy kinh tế phát triển và duy trì trật tự xã hội bền vững.",
    yearContext: "1070",
    historicalQuote: "Xây Văn Miếu thờ Chu Công, Khổng Tử để dạy dỗ học trò, làm rạng danh đạo học nước nhà.",
    leftChoice: {
      text: "Chỉ dạy kinh Phật trong chùa",
      effects: { finance: 0, people: 5, military: -5, religion: 15 },
    },
    rightChoice: {
      text: "Xây Văn Miếu, khuyến khích Nho học",
      effects: { finance: -10, people: 8, military: 0, religion: -5 },
    },
    multipleChoices: [
      {
        id: "ly9_a",
        text: "Xây dựng Văn Miếu để thờ Khổng Tử và dạy học",
        description: "Xây dựng KTTT phù hợp với yêu cầu quản lý nhà nước.",
        effects: { finance: -10, people: 8, military: 0, religion: -5 },
        historicalNote: "Văn Miếu được xây năm 1070, mở đầu cho nền giáo dục chính quy tại Việt Nam.",
        isCorrect: true
      },
      {
        id: "ly9_b",
        text: "Cấm mọi hình thức giáo dục ngoài Phật giáo",
        description: "KTTT phiến diện, không đáp ứng nhu cầu quản trị.",
        effects: { finance: -5, people: -10, military: -5, religion: 20 },
        historicalNote: "Dẫn đến thiếu hụt nhân sự có kỹ năng hành chính pháp luật."
      },
      {
        id: "ly9_c",
        text: "Chỉ cho con em quý tộc được học tập",
        description: "Hạn chế sự phát triển của KTTT.",
        effects: { finance: 5, people: -15, military: 5, religion: 0 },
        historicalNote: "Gây lãng phí nhân tài trong nhân dân."
      },
      {
        id: "ly9_d",
        text: "Bãi bỏ việc học, chỉ chú trọng rèn luyện võ nghệ",
        description: "KTTT què quặt, xã hội thiếu văn hóa.",
        effects: { finance: -5, people: -10, military: 20, religion: -10 },
        historicalNote: "Sẽ làm sụp đổ bộ máy quản lý hành chính quốc gia."
      }
    ],
  },

  // Câu 10: Mở khoa thi đầu tiên - 1075
  {
    id: "ly_10",
    character: "Lý Nhân Tông - Năm 1075",
    situation: "Văn Miếu đã có, nhưng làm sao để chọn được người thực tài vào bộ máy nhà nước thay vì chỉ dựa vào con ông cháu cha hay nguồn gốc dòng tộc? Bạn cần một cơ chế công bằng để tìm kiếm những "viên ngọc quý" trong thiên hạ, giúp triều đình có đội ngũ quan lại tinh nhuệ nhằm vận hành đất nước hiệu quả hơn.",
    philosophicalContext: "Quy luật lượng – chất",
    dialecticLaw: "Sự tích lũy về lượng dẫn đến sự thay đổi về chất: Việc tổ chức thi cử định kỳ giúp tích lũy đội ngũ trí thức đông đảo (lượng), từ đó tạo nên bước chuyển đổi chất lượng cho bộ máy cai trị chuyên nghiệp.",
    yearContext: "1075",
    historicalQuote: "Mở khoa thi Minh kinh bác học và thi Nho học tam trường để chọn người tài. (Đại Việt Sử Ký Toàn Thư)",
    leftChoice: {
      text: "Chỉ bổ nhiệm theo dòng dõi",
      effects: { finance: 5, people: -15, military: 5, religion: 0 },
    },
    rightChoice: {
      text: "Mở khoa thi tuyển chọn nhân tài",
      effects: { finance: -8, people: 12, military: 0, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly10_a",
        text: "Tổ chức khoa thi đầu tiên (Minh kinh bác học)",
        description: "Tạo bước nhảy vọt về chất lượng quan lại.",
        effects: { finance: -8, people: 12, military: 0, religion: 0 },
        historicalNote: "Năm 1075, khoa thi đầu tiên được tổ chức, Lê Văn Thịnh đỗ trạng nguyên.",
        isCorrect: true
      },
      {
        id: "ly10_b",
        text: "Bán chức tước để thu ngân khố",
        description: "Gây thoái hóa chất lượng bộ máy.",
        effects: { finance: 30, people: -30, military: -15, religion: 0 },
        historicalNote: "Dẫn đến tham nhũng và sụp đổ triều đại nhanh chóng."
      },
      {
        id: "ly10_c",
        text: "Ai cao tuổi nhất thì được làm quan",
        description: "Tiêu chuẩn lượng không phản ánh chất lượng tài năng.",
        effects: { finance: 0, people: -10, military: -10, religion: 0 },
        historicalNote: "Làm trì trệ bộ máy hành chính."
      },
      {
        id: "ly10_d",
        text: "Chọn quan lại bằng cách tung đồng xu",
        description: "Phủ nhận mọi quy luật vận động có tính hệ thống.",
        effects: { finance: -10, people: -30, military: -20, religion: 0 },
        historicalNote: "Hành động điên rồ sẽ kết thúc triều đại ngay lập tức."
      }
    ],
  },
]
cards: [
  // Câu 11: Tiên phát chế nhân (Lý Thường Kiệt đánh Tống) - 1075
  {
    id: "ly_11",
    character: "Lý Thường Kiệt - Năm 1075",
    situation: "Nhà Tống đang ráo riết chuẩn bị quân lương và khí giới ở Ung Châu, Khâm Châu để làm bàn đạp xâm lược nước ta. Đứng trước nguy cơ bị tấn công từ nhiều phía, bạn sẽ ngồi yên chờ giặc đến rồi mới tìm cách chống đỡ, hay chủ động ra quân trước để triệt hạ nguồn tiếp tế và làm suy yếu ý chí của đối phương ngay trên đất của họ?",
    philosophicalContext: "Nguyên nhân và Kết quả",
    dialecticLaw: "Cặp phạm trù nguyên nhân và kết quả: Mối liên hệ nhân quả mang tính khách quan, phổ biến và tất yếu. Trong hoạt động thực tiễn, hành động 'Tiên phát chế nhân' thể hiện sự vận dụng đúng đắn nguyên tắc: muốn loại bỏ một kết quả (nguy cơ bị xâm lược, thất bại) thì phải triệt tiêu những nguyên nhân sinh ra nó (sự chuẩn bị quân lương, khí giới và tập trung lực lượng của kẻ thù). Việc chủ động tấn công trước là cách con người tác động vào chuỗi nhân quả, tạo ra những biến đổi mới (phá hủy nguồn lực địch) để ngăn chặn một kết quả xấu và chủ động tạo ra kết quả có lợi cho đại cuộc kháng chiến.",
    yearContext: "1075",
    historicalQuote: "Ngồi yên đợi giặc không bằng đem quân đánh trước để chặn mũi nhọn của chúng.",
    leftChoice: {
      text: "Phòng thủ tại biên giới",
      effects: { finance: 5, people: -10, military: -15, religion: 0 },
    },
    rightChoice: {
      text: "Chủ động tấn công Ung Châu",
      effects: { finance: -20, people: 10, military: 25, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly11_a",
        text: "Chủ động tấn công các căn cứ hậu cần Tống",
        description: "Tiên phát chế nhân để thay đổi kết quả cuộc chiến.",
        effects: { finance: -20, people: 10, military: 25, religion: 0 },
        historicalNote: "Năm 1075, Lý Thường Kiệt chỉ huy quân đánh sang đất Tống, phá hủy kho lương của giặc, làm chậm kế hoạch xâm lược của chúng.",
        isCorrect: true
      },
      {
        id: "ly11_b",
        text: "Cầu hòa bằng cách cắt đất",
        description: "Tạo ra kết quả nhục nhã từ nguyên nhân hèn nhát.",
        effects: { finance: -10, people: -30, military: -20, religion: 0 },
        historicalNote: "Hành động này sẽ làm mất nước nhanh chóng."
      },
      {
        id: "ly11_c",
        text: "Chờ giặc sang mới đánh",
        description: "Bị động về mặt nhân quả, dễ dẫn đến thất bại.",
        effects: { finance: 5, people: -15, military: -10, religion: 0 },
        historicalNote: "Nếu để giặc tập trung đủ lực lượng, tổn thất của ta sẽ cực lớn."
      },
      {
        id: "ly11_d",
        text: "Chỉ gửi thư cảnh cáo",
        description: "Hành động không đủ mạnh để tạo ra kết quả thực tế.",
        effects: { finance: 0, people: -5, military: -5, religion: 0 },
        historicalNote: "Lời nói ngoại giao không ngăn được tham vọng xâm lược của nhà Tống."
      }
    ],
  },

  // Câu 12: Bài thơ Nam Quốc Sơn Hà - 1077
  {
    id: "ly_12",
    character: "Lý Thường Kiệt - Năm 1077",
    situation: "Quân Tống đang vây hãm gắt gao trên dòng sông Như Nguyệt, thế trận giằng co kéo dài khiến tinh thần quân sĩ bắt đầu nao núng và mệt mỏi. Trong bóng tối của cuộc chiến sinh tử, bạn cần một "vũ khí tâm linh" mạnh mẽ để khẳng định chính nghĩa của dân tộc, khơi dậy ý chí quyết chiến của binh sĩ và làm lung lay tinh thần xâm lược của kẻ thù.",
    philosophicalContext: "Tồn tại xã hội và Ý thức xã hội",
    dialecticLaw: "Mối quan hệ biện chứng giữa tồn tại xã hội và ý thức xã hội: Tồn tại xã hội (cuộc kháng chiến chống ngoại xâm và những điều kiện lịch sử cụ thể trên sông Như Nguyệt) quyết định sự ra đời, nội dung và hình thức của ý thức xã hội (bài thơ Nam Quốc Sơn Hà). Tuy nhiên, ý thức xã hội có tính độc lập tương đối và tác động trở lại mạnh mẽ đối với tồn tại xã hội. Khi tư tưởng về chính nghĩa và chủ quyền dân tộc (ý thức xã hội tiến bộ) thâm nhập vào quần chúng, nó trở thành sức mạnh vật chất khổng lồ, chuyển hóa niềm tin thành động lực thực tiễn để xoay chuyển cục diện chiến tranh và thúc đẩy lịch sử phát triển.",
    yearContext: "1077",
    historicalQuote: "Nam quốc sơn hà Nam đế cư/ Tiệt nhiên định phận tại thiên thư.",
    leftChoice: {
      text: "Chỉ tập trung đốc thúc binh sĩ",
      effects: { finance: 0, people: 5, military: 5, religion: 0 },
    },
    rightChoice: {
      text: "Đọc tuyên ngôn độc lập tại đền thờ",
      effects: { finance: 0, people: 20, military: 25, religion: 10 },
    },
    multipleChoices: [
      {
        id: "ly12_a",
        text: "Sáng tác bài thơ khẳng định chủ quyền",
        description: "Nâng ý thức độc lập lên tầm lý luận (hệ tư tưởng chính nghĩa).",
        effects: { finance: 0, people: 20, military: 25, religion: 10 },
        historicalNote: "Bài thơ thần 'Nam Quốc Sơn Hà' vang lên trên sông Như Nguyệt đã làm nhụt chí quân Tống và khích lệ quân ta thắng trận.",
        isCorrect: true
      },
      {
        id: "ly12_b",
        text: "Hứa ban thật nhiều vàng cho lính",
        description: "Chỉ tác động vào tâm lý lợi ích vật chất ngắn hạn.",
        effects: { finance: -30, people: 5, military: 10, religion: 0 },
        historicalNote: "Tiền bạc không thể thay thế lòng yêu nước và ý chí chiến đấu bền bỉ."
      },
      {
        id: "ly12_c",
        text: "Mời thầy bói xem ngày đánh trận",
        description: "Ý thức sai lạc, xa rời quy luật thực tiễn khách quan.",
        effects: { finance: -5, people: 0, military: -10, religion: 20 },
        historicalNote: "Dựa vào mê tín thay vì binh pháp khách quan sẽ dẫn đến thảm bại."
      },
      {
        id: "ly12_d",
        text: "Im lặng để giữ bí mật quân sự",
        description: "Xem nhẹ vai trò năng động của tư tưởng trong chiến tranh.",
        effects: { finance: 0, people: -10, military: -5, religion: 0 },
        historicalNote: "Khi sĩ khí xuống thấp, sự im lặng vô tình triệt tiêu sức mạnh tinh thần của quân đội."
      }],
  },

  // Câu 13: Chiến thuật trên sông Như Nguyệt - 1077
  {
    id: "ly_13",
    character: "Lý Thường Kiệt - Năm 1077",
    situation: "Quân Tống vốn có thế mạnh về kỵ binh tinh nhuệ trên cạn nhưng lại tỏ ra lúng túng và yếu kém trong thủy chiến. Đứng trước một đội quân viễn chinh đông đảo, bạn sẽ áp dụng binh pháp thế nào để tận dụng địa hình sông ngòi chằng chịt của Đại Việt nhằm khắc chế sức mạnh của địch, biến ưu thế của chúng thành tử huyệt?",
    philosophicalContext: "Cái chung – cái riêng",
    dialecticLaw: "Mối liên hệ giữa cái chung (binh pháp phổ biến) và cái riêng (địa hình, sở trường của ta): Vận dụng nguyên lý quân sự chung vào hoàn cảnh cụ thể của sông Như Nguyệt để đánh vào điểm yếu của giặc.",
    yearContext: "1077",
    historicalQuote: "Lấy cái ngắn của ta chống cái dài của giặc, tận dụng sông ngòi để chia cắt chúng.",
    leftChoice: {
      text: "Giáp chiến trực diện trên đồng bằng",
      effects: { finance: -5, people: -10, military: -30, religion: 0 },
    },
    rightChoice: {
      text: "Xây tuyến phòng thủ dọc bờ sông",
      effects: { finance: -10, people: 10, military: 20, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly13_a",
        text: "Xây phòng tuyến sông Như Nguyệt",
        description: "Kết hợp cái chung (binh pháp) với cái riêng (địa thế sông).",
        effects: { finance: -10, people: 10, military: 20, religion: 0 },
        historicalNote: "Phòng tuyến sông Như Nguyệt tận dụng lợi thế sông nước để chặn đứng kỵ binh Tống.",
        isCorrect: true
      },
      {
        id: "ly13_b",
        text: "Dàn trận đánh hổ lao như ở Trung Nguyên",
        description: "Chỉ áp dụng cái chung một cách máy móc.",
        effects: { finance: -5, people: -10, military: -25, religion: 0 },
        historicalNote: "Đánh trực diện với kỵ binh Tống trên đất bằng là tự sát."
      },
      {
        id: "ly13_c",
        text: "Bỏ thành chạy lên núi",
        description: "Phủ định cái riêng một cách tiêu cực.",
        effects: { finance: -10, people: -20, military: -10, religion: 0 },
        historicalNote: "Rút chạy không kế hoạch sẽ làm mất sự ủng hộ của dân đồng bằng."
      },
      {
        id: "ly13_d",
        text: "Chỉ dùng bộ binh đấu kỵ binh",
        description: "Không tận dụng được cái riêng của địa hình thủy chiến.",
        effects: { finance: 0, people: -5, military: -20, religion: 0 },
        historicalNote: "Sẽ gây ra thiệt hại cực lớn về quân số."
      }
    ],
  },

  // Câu 14: Giảng hòa để kết thúc chiến tranh - 1077
  {
    id: "ly_14",
    character: "Lý Thường Kiệt - Năm 1077",
    situation: "Sau thất bại tại phòng tuyến sông Như Nguyệt, quân Tống đã mệt mỏi, tiến thoái lưỡng nan nhưng nước ta cũng đang dần kiệt quệ về sức người và sức của. Nếu tiếp tục đánh đến cùng để tiêu diệt toàn bộ địch, chúng ta sẽ rơi vào cảnh "lưỡng bại câu thương", thậm chí khiến nhà Tống liều chết phản công. Bạn có chấp nhận đề nghị giảng hòa, mở lối thoát cho đối phương để bảo toàn lực lượng dân tộc?",
    philosophicalContext: "Nguyên lý mối liên hệ phổ biến",
    dialecticLaw: "Nguyên lý về mối liên hệ phổ biến: Các sự vật, hiện tượng trong thế giới tồn tại trong mối liên hệ qua lại, quy định và thâm nhập lẫn nhau. Vận dụng nguyên tắc toàn diện, việc xem xét cuộc chiến không thể tách rời khỏi các mối liên hệ mật thiết giữa quân sự, kinh tế (sức dân kiệt quệ) và ngoại giao lâu dài (quan hệ với phương Bắc). Quyết định giảng hòa thể hiện tư duy biện chứng khi đặt đối tượng trong chỉnh thể thống nhất, nhận diện đúng mối liên hệ tất yếu giữa việc kết thúc chiến tranh với mục tiêu cao nhất là bảo toàn lực lượng dân tộc và tạo điều kiện phục hồi đất nước, tránh cái nhìn phiến diện, một chiều chỉ thấy thắng lợi quân sự trước mắt mà bỏ qua hậu quả lâu dài.",
    yearContext: "1077",
    historicalQuote: "Dùng lời lẽ mềm dẻo để kết thúc chiến tranh, giữ vững chủ quyền mà không hao tổn xương máu.",
    leftChoice: {
      text: "Đánh đến người cuối cùng",
      effects: { finance: -40, people: -40, military: -20, religion: 0 },
    },
    rightChoice: {
      text: "Mở đường cho giặc rút quân",
      effects: { finance: 5, people: 15, military: 10, religion: 5 },
    },
    multipleChoices: [
      {
        id: "ly14_a",
        text: "Đuổi cùng diệt tận quân giặc",
        description: "Cái nhìn phiến diện, không thấy hậu quả ngoại giao lâu dài.",
        effects: { finance: -20, people: -10, military: -5, religion: 0 },
        historicalNote: "Diệt hết quân Tống sẽ khiến nhà Tống liều chết báo thù, chiến tranh sẽ kéo dài mãi mãi."
      },
      {
        id: "ly14_b",
        text: "Chấp nhận giảng hòa, để giặc về nước",
        description: "Xử lý mối liên hệ giữa chiến tranh và hòa bình một cách khôn ngoan.",
        effects: { finance: 5, people: 15, military: 10, religion: 5 },
        historicalNote: "Lý Thường Kiệt chủ động đề nghị hòa nghị để quân Tống rút về, giữ hòa khí hai nước.",
        isCorrect: true
      },
      {
        id: "ly14_c",
        text: "Đầu hàng hoàn toàn",
        description: "Cắt đứt mối liên hệ độc lập của dân tộc.",
        effects: { finance: -10, people: -50, military: -30, religion: 0 },
        historicalNote: "Mất nước và bị lịch sử lên án."
      },
      {
        id: "ly14_d",
        text: "Cấm mọi liên hệ với phương Bắc",
        description: "Cô lập đất nước, đi ngược nguyên lý liên hệ.",
        effects: { finance: -20, people: -5, military: 0, religion: 0 },
        historicalNote: "Sẽ làm kiệt quệ kinh tế và cô lập quốc gia."
      }
    ],
  },

  // Câu 15: Thái hậu Ỷ Lan nhiếp chính - 1072
  {
    id: "ly_15",
    character: "Thái hậu Ỷ Lan - Năm 1072",
    situation: "Vua còn nhỏ, đất nước lại vừa trải qua những cuộc chiến tranh tiêu hao sức người sức của. Ruộng đất nhiều nơi bỏ hoang, dân chúng đói khổ vì mất mùa và lao dịch. Là người nhiếp chính nắm quyền điều hành trăm họ, bạn sẽ ưu tiên thực hiện chính sách gì để ổn định lòng dân và vực dậy nền tảng quốc gia?",
    philosophicalContext: "Sản xuất vật chất",
    dialecticLaw: "Vai trò quyết định của sản xuất vật chất: Sản xuất vật chất là cơ sở của sự tồn tại và phát triển xã hội, là tiền đề trực tiếp tạo ra các tư liệu sinh hoạt nhằm duy trì đời sống con người. Việc ưu tiên thực hiện các chính sách khuyến nông và ổn định đời sống dân nghèo là hoạt động củng cố nền tảng kinh tế - vật chất (tồn tại xã hội), từ đó quyết định sự ổn định và sức mạnh của bộ máy triều đình (kiến trúc thượng tầng). Khi các điều kiện sinh hoạt vật chất được đảm bảo, nó sẽ tạo ra cơ sở thực tế để thực hiện các nhiệm vụ chính trị và tinh thần, giúp quốc gia vượt qua khủng hoảng sau chiến tranh và phát triển bền vững.",
    yearContext: "1072",
    historicalQuote: "Đói bụng thì không thể nghe đạo đức. Phải lo cho cái ăn của dân trước nhất.",
    leftChoice: {
      text: "Xây dựng cung điện nguy nga",
      effects: { finance: -30, people: -20, military: 0, religion: 10 },
    },
    rightChoice: {
      text: "Khuyến nông, cấm giết trâu bò",
      effects: { finance: 10, people: 20, military: 5, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly15_a",
        text: "Đẩy mạnh sản xuất nông nghiệp, chuộc người nghèo",
        description: "Tập trung vào sản xuất vật chất để ổn định xã hội.",
        effects: { finance: -5, people: 20, military: 5, religion: 0 },
        historicalNote: "Thái hậu Ỷ Lan nổi tiếng với việc lấy tiền kho chuộc những cô gái nghèo bị bán thân và khuyến khích nông nghiệp.",
        isCorrect: true
      },
      {
        id: "ly15_b",
        text: "Dùng toàn bộ ngân khố đi đánh Chiêm Thành",
        description: "Coi nhẹ sản xuất, lãng phí nguồn lực vật chất.",
        effects: { finance: -40, people: -20, military: 10, religion: 0 },
        historicalNote: "Gây thêm đói kém và bất ổn nội bộ."
      },
      {
        id: "ly15_c",
        text: "Chỉ lo củng cố quyền lực tại triều đình",
        description: "Tách rời kiến trúc thượng tầng khỏi cơ sở kinh tế.",
        effects: { finance: 5, people: -10, military: 0, religion: 0 },
        historicalNote: "Lòng dân không yên, quyền lực sẽ sớm bị lật đổ."
      },
      {
        id: "ly15_d",
        text: "Ép dân nộp thuế thật nhiều để bù đắp chiến tranh",
        description: "Hủy hoại lực lượng sản xuất.",
        effects: { finance: 20, people: -30, military: -5, religion: 0 },
        historicalNote: "Dân sẽ nổi dậy vì quá khổ cực."
      }
    ],
  },

  // Câu 16: Xây dựng Quốc Tử Giám - 1076
  {
    id: "ly_16",
    character: "Lý Nhân Tông - Năm 1076",
    situation: "Văn Miếu đã được xây dựng để thờ tự và khẳng định tinh thần hiếu học, nhưng đó mới chỉ là biểu tượng. Để thực sự có một đội ngũ quan lại tinh hoa, am tường kinh chữ và luật lệ, đất nước cần một trung tâm giáo dục chính quy, nơi đào tạo bài bản cho các thái tử và con em quan lại. Bạn có quyết định xây dựng ngôi trường đại học đầu tiên này không?",
    philosophicalContext: "Cơ sở hạ tầng và Kiến trúc thượng tầng",
    dialecticLaw: "Mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng: Kiến trúc thượng tầng (bao gồm hệ thống giáo dục, tư tưởng Nho giáo và thiết chế nhà nước) được hình thành trên nền tảng của một cơ sở hạ tầng nhất định nhưng có tính độc lập tương đối và tác động trở lại mạnh mẽ đối với cơ sở hạ tầng đó. Việc xây dựng Quốc Tử Giám để đào tạo đội ngũ quản lý tinh hoa là hoạt động củng cố kiến trúc thượng tầng nhằm đáp ứng đòi hỏi khách quan của sự phát triển kinh tế - xã hội. Khi kiến trúc thượng tầng (hệ thống đào tạo và bộ máy hành chính) phù hợp và tác động cùng chiều với sự vận động của cơ sở hạ tầng, nó sẽ trở thành động lực mạnh mẽ thúc đẩy sản xuất phát triển, nâng cao hiệu quả quản lý kinh tế và duy trì trật tự xã hội bền vững.",
    yearContext: "1076",
    historicalQuote: "Nhân tài là nguyên khí quốc gia, giáo dục là gốc của trị bình.",
    leftChoice: {
      text: "Dùng tiền xây thêm kho vũ khí",
      effects: { finance: -10, people: -5, military: 15, religion: 0 },
    },
    rightChoice: {
      text: "Xây Quốc Tử Giám sau Văn Miếu",
      effects: { finance: -15, people: 10, military: 0, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly16_a",
        text: "Lập Quốc Tử Giám đào tạo nhân tài",
        description: "Củng cố KTTT để phục vụ quản lý quốc gia.",
        effects: { finance: -15, people: 10, military: 0, religion: 0 },
        historicalNote: "Quốc Tử Giám (1076) được coi là trường đại học đầu tiên của Việt Nam.",
        isCorrect: true
      },
      {
        id: "ly16_b",
        text: "Để dân tự học, nhà nước không lo",
        description: "Coi nhẹ vai trò của KTTT.",
        effects: { finance: 5, people: -10, military: -5, religion: 0 },
        historicalNote: "Làm suy yếu chất lượng đội ngũ quan lại."
      },
      {
        id: "ly16_c",
        text: "Chỉ dạy về quân sự, bỏ qua kinh văn",
        description: "Xây dựng KTTT phiến diện.",
        effects: { finance: -10, people: 0, military: 10, religion: -5 },
        historicalNote: "Xã hội sẽ thiếu đi các nhà quản trị hành chính giỏi."
      },
      {
        id: "ly16_d",
        text: "Học tập để đi làm thuê cho nước ngoài",
        description: "Sai lệch mục đích xây dựng KTTT.",
        effects: { finance: -5, people: -5, military: -5, religion: 0 },
        historicalNote: "Mất đi nguồn nhân lực chất lượng cho đất nước."
      }
    ],
  },

  // Câu 17: Lễ Tịch điền - Nhà Lý
  {
    id: "ly_17",
    character: "Các vua nhà Lý",
    situation: "Đến vụ mùa xuân, theo lệ xưa vua phải đích thân xuống ruộng cày những luống đầu tiên để khởi đầu mùa vụ. Tuy nhiên, một số quan lại chịu ảnh hưởng của tư tưởng giáo điều cho rằng việc thiên tử lấm lem bùn đất là làm mất đi uy nghiêm và sự cao quý của bậc quân chủ. Bạn sẽ giữ vững truyền thống hay bãi bỏ để bảo vệ oai nghiêm?",
    philosophicalContext: "Thực tiễn và chân lý là gì?",
    dialecticLaw: "Thực tiễn là tiêu chuẩn của chân lý: Thực tiễn là toàn bộ những hoạt động vật chất - cảm tính có tính mục đích nhằm cải tạo tự nhiên và xã hội. Việc nhà vua đích thân xuống ruộng cày (hình thức thực tiễn sản xuất vật chất cơ bản nhất) đóng vai trò là tiêu chuẩn khách quan duy nhất để kiểm nghiệm và khẳng định tính đúng đắn của chân lý 'Nông nghiệp là gốc'. Thông qua hoạt động thực tiễn này, những chủ trương lý luận của triều đình được 'vật chất hóa', giúp nhân dân tin tưởng vào tính chân thực của chính sách, đồng thời bác bỏ những quan niệm giáo điều, xa rời đời sống thực tế của tầng lớp quan lại.",
    yearContext: "Thế kỷ XI",
    historicalQuote: "Vua tự tay cầm cày là để làm gương cho thiên hạ, nhắc nhở dân không quên việc nông.",
    leftChoice: {
      text: "Ngồi trên lầu cao xem dân cày",
      effects: { finance: 0, people: -10, military: 0, religion: 5 },
    },
    rightChoice: {
      text: "Trực tiếp xuống ruộng làm Lễ Tịch điền",
      effects: { finance: -2, people: 15, military: 0, religion: 5 },
    },
    multipleChoices: [
      {
        id: "ly17_a",
        text: "Tổ chức Lễ Tịch điền, vua xuống cày ruộng",
        description: "Dùng thực tiễn để khẳng định chân lý 'Dĩ nông vi bản'.",
        effects: { finance: -2, people: 15, military: 0, religion: 5 },
        historicalNote: "Các vua nhà Lý rất coi trọng lễ Tịch điền để khuyến khích nhân dân sản xuất.",
        isCorrect: true
      },
      {
        id: "ly17_b",
        text: "Chỉ ban chiếu khuyến khích suông",
        description: "Nhận thức tách rời thực tiễn.",
        effects: { finance: 0, people: 5, military: 0, religion: 0 },
        historicalNote: "Lòng dân sẽ không thực sự tin tưởng và hào hứng."
      },
      {
        id: "ly17_c",
        text: "Bãi bỏ lễ cày ruộng vì tốn kém",
        description: "Phủ nhận vai trò thúc đẩy thực tiễn của nghi lễ.",
        effects: { finance: 5, people: -10, military: 0, religion: -5 },
        historicalNote: "Tạo ra khoảng cách giữa triều đình và đời sống nông dân."
      },
      {
        id: "ly17_d",
        text: "Bắt nô tỳ cày thay vua",
        description: "Hành động mang tính hiện tượng, thiếu bản chất làm gương.",
        effects: { finance: 0, people: -5, military: 0, religion: 0 },
        historicalNote: "Làm mất đi ý nghĩa chính trị của buổi lễ."
      }
    ],
  },

  // Câu 18: Chính sách với miền núi (Liên minh dân tộc)
  {
    id: "ly_18",
    character: "Nhà Lý - Thế kỷ XI",
    situation: "Các bộ tộc vùng biên viễn thường xuyên bị phương Bắc dùng lợi lộc và chức tước để mua chuộc, lôi kéo nhằm làm suy yếu biên cương nước ta. Nếu dùng vũ lực trấn áp sẽ gây ra hận thù, nếu để mặc thì mất đất. Bạn sẽ làm gì để biến các tù trưởng vùng biên thành những "bờ dậu" vững chắc, trung thành tuyệt đối với triều đình?",
    philosophicalContext: "Nguyên lý mối liên hệ phổ biến",
    dialecticLaw: "Mối liên hệ giữa trung ương và địa phương: Quốc gia là một chỉnh thể thống nhất, sự ổn định của vùng biên (cái bộ phận) liên quan trực tiếp đến sự tồn vong của kinh đô (cái toàn thể).",
    yearContext: "Thế kỷ XI",
    historicalQuote: "Gả công chúa cho tù trưởng, ban tước lộc để họ là phên dậu vững chắc cho ta.",
    leftChoice: {
      text: "Đem quân lên trấn áp liên tục",
      effects: { finance: -20, people: -10, military: 10, religion: 0 },
    },
    rightChoice: {
      text: "Chính sách 'Nhu viễn', gả công chúa",
      effects: { finance: -5, people: 10, military: 15, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly18_a",
        text: "Áp dụng chính sách 'Nhu viễn', liên kết hôn nhân",
        description: "Xây dựng mối liên hệ gắn bó giữa triều đình và biên giới.",
        effects: { finance: -5, people: 10, military: 15, religion: 0 },
        historicalNote: "Nhà Lý thường gả công chúa cho các tù trưởng dân tộc miền núi để biến họ thành thân quyến bảo vệ biên cương.",
        isCorrect: true
      },
      {
        id: "ly18_b",
        text: "Xây tường thành ngăn cách miền xuôi - miền ngược",
        description: "Cắt đứt mối liên hệ phổ biến, tạo sự chia rẽ.",
        effects: { finance: -30, people: -15, military: 5, religion: 0 },
        historicalNote: "Sẽ khiến các bộ tộc miền núi cảm thấy bị bỏ rơi và dễ quay sang theo địch."
      },
      {
        id: "ly18_c",
        text: "Chỉ chú trọng phát triển kinh đô Thăng Long",
        description: "Cái nhìn phiến diện, bỏ qua mối liên hệ bộ phận.",
        effects: { finance: 10, people: -5, military: -20, religion: 0 },
        historicalNote: "Biên cương bất ổn thì Thăng Long sớm muộn cũng lâm nguy."
      },
      {
        id: "ly18_d",
        text: "Bắt các tù trưởng làm nô lệ",
        description: "Hành động phá hoại mối liên hệ đoàn kết dân tộc.",
        effects: { finance: 5, people: -20, military: -15, religion: 0 },
        historicalNote: "Gây ra các cuộc nổi dậy liên miên ở vùng cao."
      }
    ],
  },

  // Câu 19: Vụ án Hồ Dâm Đàm (Lê Văn Thịnh) - 1096
  {
    id: "ly_19",
    character: "Lý Nhân Tông - Năm 1096",
    situation: "Thái sư Lê Văn Thịnh, vị Thủ khoa khai khoa của đất nước, bị cáo buộc dùng pháp thuật "hóa hổ" để giết bạn trên hồ Dâm Đàm nhằm cướp ngôi. Các quan lại trong triều tin vào chuyện dị đoan và phẫn nộ đòi tử hình ông ngay lập tức. Đứng trước một cáo buộc mang màu sắc mê tín nhưng lại nhắm vào vị đại thần đầu triều, bạn sẽ xử trí ra sao?",
    philosophicalContext: "Bản chất và hiện tượng",
    dialecticLaw: "Mối quan hệ bản chất và hiện tượng: Hiện tượng là "hóa hổ" (một sự việc kỳ quái, phi lý), nhưng bản chất có thể là một âm mưu chính trị hoặc một sự hiểu lầm trong lúc sương mù dày đặc. Triết học đòi hỏi phải đi xuyên qua hiện tượng ly kỳ để tìm ra bản chất thực tế. Việc không tử hình mà chỉ đày đi xa thể hiện một bước lùi trong nhận thức để bảo vệ nhân tài khi bản chất sự việc chưa được làm sáng tỏ bằng lý tính.",
    yearContext: "1096",
    historicalQuote: "Việc biến thành hổ là chuyện hoang đường, nhưng án đã thành, khó lòng dung thứ hoàn toàn.",
    leftChoice: {
      text: "Tử hình ngay kẻ phản nghịch",
      effects: { finance: 0, people: -10, military: -5, religion: 0 },
    },
    rightChoice: {
      text: "Tha chết, đày đi phương xa",
      effects: { finance: 0, people: 5, military: 0, religion: 5 },
    },
    multipleChoices: [
      {
        id: "ly19_a",
        text: "Tin vào việc hóa hổ và tử hình Thái sư",
        description: "Bị hiện tượng đánh lừa, bỏ qua bản chất thực tế.",
        effects: { finance: 0, people: -15, military: -5, religion: 0 },
        historicalNote: "Làm mất đi một trạng nguyên, một vị đại thần có tài cho đất nước."
      },
      {
        id: "ly19_b",
        text: "Tha chết, giảm án xuống đi đày",
        description: "Sự phân vân giữa hiện tượng kỳ quái và bản chất con người.",
        effects: { finance: 0, people: 5, military: 0, religion: 5 },
        historicalNote: "Lý Nhân Tông đã không giết Lê Văn Thịnh mà chỉ đày ông đi Thao Giang, thể hiện sự nương tay trước một vụ án đầy uẩn khúc.",
        isCorrect: true
      },
      {
        id: "ly19_c",
        text: "Phong thánh cho Lê Văn Thịnh",
        description: "Cực đoan hóa hiện tượng theo hướng ngược lại.",
        effects: { finance: -5, people: -5, military: 0, religion: 10 },
        historicalNote: "Sẽ làm đảo lộn kỷ cương phép nước lúc bấy giờ."
      },
      {
        id: "ly19_d",
        text: "Cấm dân chúng nhắc đến vụ án",
        description: "Che giấu hiện tượng để trốn tránh tìm hiểu bản chất.",
        effects: { finance: 0, people: -10, military: 0, religion: 0 },
        historicalNote: "Càng cấm dân càng nghi ngờ và thêu dệt nhiều chuyện sai sự thật."
      }
    ],
  },

  // Câu 20: Thái úy Tô Hiến Thành phò chúa trẻ - 1175
  {
    id: "ly_20",
    character: "Tô Hiến Thành - Năm 1175",
    situation: "Vua Lý Anh Tông băng hà, di chiếu để lại giao cho bạn (Thái úy Tô Hiến Thành) phò tá Thái tử Long Cán lên ngôi. Tuy nhiên, Thái hậu Chiêu Linh muốn phế Long Cán để đưa con mình là Long Xưởng lên thay, bà đã mang rất nhiều vàng bạc đến hối lộ và dùng quyền lực để uy hiếp bạn. Đứng trước sức nặng của đồng tiền và áp lực từ hậu cung, bạn sẽ chọn trung thành với di chiếu hay thỏa hiệp để đổi lấy vinh hoa?",
    philosophicalContext: "Cái chung – cái riêng",
    dialecticLaw: "Cặp phạm trù cái chung và cái riêng: Cái chung (phép nước, sự ổn định của vương triều) là phạm trù phản ánh những thuộc tính, những mặt lặp lại trong nhiều sự vật, hiện tượng cá biệt, đóng vai trò là cái phổ biến quy định bản chất của hệ thống. Cái riêng (hành động cụ thể của Tô Hiến Thành) là cái toàn bộ, chứa đựng cả cái chung (đạo đức quân thần, luật lệ) lẫn cái đơn nhất (lợi ích, cám dỗ cá nhân). Theo phép biện chứng, cái riêng chỉ tồn tại trong mối liên hệ đưa đến cái chung; do đó, mọi hành động cá nhân (cái riêng) phải dựa trên việc quán triệt phép nước và lợi ích dân tộc (cái chung) để đảm bảo sự tồn tại bền vững của chỉnh thể quốc gia. Việc từ chối tư lợi để bảo vệ di chiếu là sự khẳng định tính quyết định của cái chung bản chất đối với sự ổn định lịch sử.",
    yearContext: "1175",
    historicalQuote: "Ta là người nhận mệnh tiên đế, làm việc công thì không thể vì vàng mà đổi lòng.",
    leftChoice: {
      text: "Nhận vàng và phò tá con Thái hậu",
      effects: { finance: 20, people: -20, military: -10, religion: 0 },
    },
    rightChoice: {
      text: "Từ chối vàng bạc, giữ đúng di chiếu",
      effects: { finance: -5, people: 20, military: 10, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly20_a",
        text: "Kiên quyết phò tá Thái tử Long Cán theo di chiếu",
        description: "Đặt lợi ích cái chung lên trên tư lợi cái riêng.",
        effects: { finance: -5, people: 20, military: 10, religion: 0 },
        historicalNote: "Tô Hiến Thành là tấm gương sáng về sự chính trực, từ chối mọi cám dỗ để bảo vệ phép nước.",
        isCorrect: true
      },
      {
        id: "ly20_b",
        text: "Nhận vàng nhưng vẫn phò tá Thái tử cũ",
        description: "Sống nước đôi, không giải quyết triệt để mâu thuẫn.",
        effects: { finance: 20, people: -5, military: -5, religion: 0 },
        historicalNote: "Sẽ bị cả hai bên nghi ngờ và làm mất uy tín cá nhân."
      },
      {
        id: "ly20_c",
        text: "Thoái chức để khỏi phải chọn lựa",
        description: "Trốn tránh trách nhiệm của cá nhân đối với cái chung.",
        effects: { finance: 0, people: -10, military: -15, religion: 0 },
        historicalNote: "Sẽ dẫn đến loạn lạc và tranh giành quyền lực đẫm máu."
      },
      {
        id: "ly20_d",
        text: "Dùng vàng đó chia cho quân lính để theo mình",
        description: "Biến lợi ích riêng thành âm mưu chiếm đoạt cái chung.",
        effects: { finance: 0, people: -15, military: 15, religion: 0 },
        historicalNote: "Biến mình thành một kẻ quyền thần soán ngôi."
      }
    ],
  },
]
cards: [
  // Câu 21: Lý Thần Tông và bệnh 'hóa hổ' - 1136
  {
    id: "ly_21",
    character: "Lý Thần Tông - Năm 1136",
    situation: "Vua Lý Thần Tông bỗng mắc bệnh lạ, lông lá mọc khắp người, tâm thần hoảng loạn, gầm thét như hổ rừng. Các phù thủy và pháp sư trong triều đều bó tay, cho rằng vua bị trúng tà thuật cao thâm và đòi lập đàn cúng tế tốn kém. Trong bối cảnh mê tín bao trùm, bạn sẽ tiếp tục tin vào các phương pháp pháp thuật huyền bí hay quyết tâm tìm kiếm một vị thầy thuốc am hiểu y lý thực tiễn để cứu vua?",
    philosophicalContext: "Bản chất và hiện tượng",
    dialecticLaw: "Phân biệt bản chất và hiện tượng: Hiện tượng 'hóa hổ' có vẻ huyền bí (do nhận thức hạn chế thời đó), nhưng bản chất là một căn bệnh y khoa cần được giải quyết bằng thực tiễn khoa học thay vì mê tín.",
    yearContext: "1136",
    historicalQuote: "Bản chất của vạn vật không nằm ở hình hài bên ngoài mà ở quy luật vận động bên trong.",
    leftChoice: {
      text: "Mời thêm pháp sư cúng bái",
      effects: { finance: -10, people: -5, military: 0, religion: 15 },
    },
    rightChoice: {
      text: "Tìm danh y chữa bệnh (Nguyễn Minh Không)",
      effects: { finance: -5, people: 10, military: 0, religion: 5 },
    },
    multipleChoices: [
      {
        id: "ly21_a",
        text: "Tìm danh y Nguyễn Minh Không chữa bệnh",
        description: "Dùng thực tiễn y học để giải quyết hiện tượng lạ.",
        effects: { finance: -5, people: 10, military: 0, religion: 5 },
        historicalNote: "Thiền sư Nguyễn Minh Không đã chữa khỏi bệnh cho vua, được phong là Quốc sư.",
        isCorrect: true
      },
      {
        id: "ly21_b",
        text: "Xây thêm đền miếu để xua đuổi tà ma",
        description: "Nhầm lẫn giữa hiện tượng và niềm tin duy tâm.",
        effects: { finance: -20, people: -5, military: 0, religion: 20 },
        historicalNote: "Lãng phí ngân khố mà không giải quyết được gốc rễ bệnh tật."
      },
      {
        id: "ly21_c",
        text: "Sống cách ly hoàn toàn với thế giới",
        description: "Trốn tránh thực tế, bỏ mặc triều chính.",
        effects: { finance: 0, people: -15, military: -15, religion: 0 },
        historicalNote: "Gây hoang mang trong nhân dân và làm suy yếu vương quyền."
      },
      {
        id: "ly21_d",
        text: "Truy tìm và sát hại kẻ bị nghi làm bùa chú",
        description: "Hành động cực đoan dựa trên nhận thức sai lầm.",
        effects: { finance: 0, people: -20, military: 5, religion: -10 },
        historicalNote: "Gây ra oan sai và làm mất lòng tin của thần dân."
      }
    ],
  },

  // Câu 22: Mở rộng thương cảng Vân Đồn - Thế kỷ XII
  {
    id: "ly_22",
    character: "Nhà Lý - Giai đoạn hưng thịnh",
    situation: "Thương nhân từ các nước phương Nam (Java, Lộ Lạc, Xiêm La) vượt biển đến xin được vào nước ta cư trú và buôn bán các loại sản vật quý hiếm. Triều đình đang đứng trước hai luồng ý kiến: một bên lo sợ sự thâm nhập của người ngoài sẽ làm mất ổn định an ninh và văn hóa (bế quan tỏa cảng), bên kia lại muốn khai thác nguồn lợi từ đại dương. Bạn chọn sự yên bình tĩnh tại hay chấp nhận thử thách để phát triển?",
    philosophicalContext: "Quy luật về sự liên hệ phổ biến",
    dialecticLaw: "Mọi sự vật, hiện tượng không tồn tại cô lập mà luôn nằm trong mối liên hệ, tác động qua lại với nhau. Một quốc gia muốn phát triển không thể tự tách rời khỏi dòng chảy kinh tế khu vực. Việc mở cửa thương cảng không chỉ là hoạt động kinh tế, mà là sự chủ động thiết lập các mối liên hệ mới để thúc đẩy lực lượng sản xuất trong nước phát triển, chuyển từ kinh tế tự cung tự cấp sang kinh tế hàng hóa.",
    yearContext: "1149",
    historicalQuote: "Thuyền bè các nước họp ở đây, hàng hóa phong phú, quốc gia nhờ đó mà giàu mạnh.",
    leftChoice: {
      text: "Bế quan tỏa cảng để giữ an toàn",
      effects: { finance: -20, people: -10, military: 10, religion: 0 },
    },
    rightChoice: {
      text: "Lập trang Vân Đồn làm nơi buôn bán",
      effects: { finance: 30, people: 15, military: -5, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly22_a",
        text: "Chính thức thành lập thương cảng Vân Đồn",
        description: "Chủ động thúc đẩy sự phát triển kinh tế.",
        effects: { finance: 30, people: 15, military: -5, religion: 0 },
        historicalNote: "Vân Đồn trở thành thương cảng quốc tế đầu tiên và sầm uất nhất của Đại Việt thời bấy giờ.",
        isCorrect: true
      },
      {
        id: "ly22_b",
        text: "Chỉ cho phép buôn bán tại kinh đô",
        description: "Hạn chế quy mô phát triển.",
        effects: { finance: 10, people: 5, military: 0, religion: 0 },
        historicalNote: "Không tận dụng được lợi thế sông biển và khó quản lý an ninh."
      },
      {
        id: "ly22_c",
        text: "Cấm dân trong nước giao thương với bên ngoài",
        description: "Đi ngược lại quy luật phát triển và liên hệ phổ biến.",
        effects: { finance: -30, people: -20, military: 0, religion: 0 },
        historicalNote: "Làm kiệt quệ nền kinh tế và tụt hậu so với khu vực."
      },
      {
        id: "ly22_d",
        text: "Thu thuế thật cao để ngăn chặn ngoại thương",
        description: "Kìm hãm các nhân tố phát triển mới.",
        effects: { finance: -5, people: -10, military: 0, religion: 0 },
        historicalNote: "Khiến thương nhân chán nản và tìm đến các quốc gia khác."
      }
    ],
  },

  // Câu 23: Sự hưởng lạc của Lý Cao Tông - Cuối thế kỷ XII
  {
    id: "ly_23",
    character: "Lý Cao Tông - Năm 1200",
    situation: "Sau thời kỳ hưng thịnh, đất nước bắt đầu gặp khó khăn, thiên tai liên miên khiến mùa màng thất bát. Tuy nhiên, với tư cách là người đứng đầu, bạn lại muốn xây dựng thêm nhiều cung điện nguy nga và thực hiện những chuyến du ngoạn tốn kém khắp nơi để hưởng lạc. Bạn sẽ chọn thỏa mãn ham muốn cá nhân hay thắt lưng buộc bụng cùng trăm họ?",
    philosophicalContext: "Mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng",
    dialecticLaw: "Mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng: Kiến trúc thượng tầng (nhà nước và lối sống của giai cấp thống trị) có tính độc lập tương đối và tác động trở lại mạnh mẽ đối với cơ sở hạ tầng. Khi kiến trúc thượng tầng (sự hưởng lạc, xây dựng cung điện xa hoa) tác động ngược chiều với nhu cầu khách quan của cơ sở hạ tầng (nền kinh tế đang suy kiệt do thiên tai, đói kém), nó sẽ trở thành lực lượng kìm hãm, tàn phá nền tảng kinh tế và gây ra sự bất ổn cho toàn bộ đời sống xã hội.",
    yearContext: "1200",
    historicalQuote: "Vua ham chơi vô độ, xây dựng không ngớt, lòng dân oán hận khôn cùng.",
    leftChoice: {
      text: "Cắt giảm chi tiêu, lo cho dân",
      effects: { finance: 10, people: 15, military: 0, religion: 0 },
    },
    rightChoice: {
      text: "Tiếp tục xây dựng cung điện nguy nga",
      effects: { finance: -30, people: -30, military: -10, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly23_a",
        text: "Dừng các công trình xa hoa để cứu đói dân",
        description: "Điều chỉnh KTTT để bảo vệ CSHT.",
        effects: { finance: 10, people: 15, military: 0, religion: 0 },
        historicalNote: "Lý Cao Tông đã không làm điều này, khiến nhà Lý bắt đầu trượt dài vào suy vong.",
        isCorrect: true
      },
      {
        id: "ly23_b",
        text: "Xây thêm hành cung để khẳng định uy quyền",
        description: "Làm trầm trọng thêm mâu thuẫn giữa KTTT và CSHT.",
        effects: { finance: -30, people: -30, military: -10, religion: 0 },
        historicalNote: "Việc xây dựng quá mức làm kiệt quệ sức dân và ngân khố quốc gia."
      },
      {
        id: "ly23_c",
        text: "Bán chức tước để lấy tiền xây dựng",
        description: "Hủy hoại chất lượng bộ máy cai trị.",
        effects: { finance: 30, people: -40, military: -20, religion: 0 },
        historicalNote: "Khiến triều chính nhiễu nhương, kỷ cương lỏng lẻo."
      },
      {
        id: "ly23_d",
        text: "Đổ lỗi cho thiên tai và không hành động",
        description: "Thái độ duy tâm, thiếu trách nhiệm thực tiễn.",
        effects: { finance: 0, people: -20, military: -5, religion: -5 },
        historicalNote: "Làm mất đi cơ hội cứu vãn sự sụp đổ của vương triều."
      }
    ],
  },

  // Câu 24: Nạn đói và quan hệ sản xuất - 1208
  {
    id: "ly_24",
    character: "Nhà Lý - Năm 1208",
    situation: "Nạn đói hoành hành khắp nơi, ruộng vườn xơ xác, nhưng tầng lớp địa chủ và quan lại địa phương vẫn dựa vào luật cũ để ép dân nộp tô thuế nặng nề, thậm chí dùng vũ lực để tước đoạt chút lương thực cuối cùng của người nghèo. Đứng trước cảnh lầm than, bạn sẽ chọn bảo vệ đặc quyền của bộ máy cai trị hay can thiệp để thay đổi quy định, cứu lấy mạng sống của nhân dân?",
    philosophicalContext: "Lực lượng sản xuất và Quan hệ sản xuất",
    dialecticLaw: "Sự kìm hãm của quan hệ sản xuất lỗi thời: Khi quan hệ sở hữu và phân phối (QHSX) quá khắc nghiệt, nó sẽ triệt tiêu động lực và sức sống của người nông dân (LLSX).",
    yearContext: "1208",
    historicalQuote: "Người chết đói nằm đầy đường, nhân dân phải ăn cả rễ cây.",
    leftChoice: {
      text: "Giữ mức thuế để nuôi quân",
      effects: { finance: 15, people: -40, military: 5, religion: 0 },
    },
    rightChoice: {
      text: "Giảm thuế, mở kho lương cứu đói",
      effects: { finance: -25, people: 30, military: -5, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly24_a",
        text: "Giảm tô thuế và chia lại ruộng đất tạm thời",
        description: "Điều chỉnh QHSX để bảo vệ LLSX.",
        effects: { finance: -25, people: 30, military: -5, religion: 0 },
        historicalNote: "Sự chậm trễ trong cứu trợ của nhà Lý đã dẫn đến các cuộc khởi nghĩa nông dân bùng nổ.",
        isCorrect: true
      },
      {
        id: "ly24_b",
        text: "Ép dân nộp thuế bằng bạo lực",
        description: "Dùng quyền lực để duy trì QHSX bóc lột.",
        effects: { finance: 20, people: -50, military: 10, religion: -10 },
        historicalNote: "Dẫn đến loạn Quách Bốc và sự sụp đổ của kỷ cương xã hội."
      },
      {
        id: "ly24_c",
        text: "Bỏ mặc cho dân tự xoay xở",
        description: "Phớt lờ quy luật vận động của xã hội.",
        effects: { finance: 0, people: -30, military: -10, religion: 0 },
        historicalNote: "Làm mất hoàn toàn vai trò của nhà nước đối với dân tộc."
      },
      {
        id: "ly24_d",
        text: "Cầu xin thần linh ban mưa thuận gió hòa",
        description: "Giải pháp duy tâm cho vấn đề vật chất.",
        effects: { finance: -5, people: -10, military: 0, religion: 20 },
        historicalNote: "Không thể cứu đói bằng những lời cầu nguyện suông."
      }
    ],
  },

  // Câu 25: Loạn Quách Bốc - 1209
  {
    id: "ly_25",
    character: "Lý Cao Tông - Năm 1209",
    situation: "Quách Bốc, một tướng dưới quyền của Phạm Bỉnh Di, vì phẫn nộ trước việc chủ mình bị vua Lý Cao Tông giết oan đã đem quân đánh thẳng vào kinh thành Thăng Long để trả thù. Quân đội triều đình rệu rã không thể chống cự, khiến bạn (vua và hoàng tộc) phải bỏ chạy khỏi kinh thành, sống cảnh lưu vong. Đứng trước đống đổ nát của hoàng cung, bạn nhận ra đây không phải là tai họa bất ngờ, bạn sẽ làm gì?",
    philosophicalContext: "Nguyên nhân và Kết quả",
    dialecticLaw: "Mối liên hệ nhân quả tất yếu: Sự thối nát, bất công của triều đình (nguyên nhân) tất yếu dẫn đến sự nổi dậy và sụp đổ (kết quả).",
    yearContext: "1209",
    historicalQuote: "Gieo gió thì gặt bão, triều chính đổ nát thì giặc giã nổi lên.",
    leftChoice: {
      text: "Đầu hàng giặc",
      effects: { finance: -10, people: -20, military: -30, religion: 0 },
    },
    rightChoice: {
      text: "Cầu viện các thế lực địa phương (họ Trần)",
      effects: { finance: -15, people: -10, military: 10, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly25_a",
        text: "Dựa vào thế lực họ Trần để dẹp loạn",
        description: "Giải quyết kết quả bằng một nguyên nhân mới (liên minh).",
        effects: { finance: -15, people: -10, military: 10, religion: 0 },
        historicalNote: "Việc nhờ họ Trần dẹp loạn đã tạo điều kiện cho họ bước vào sân khấu chính trị.",
        isCorrect: true
      },
      {
        id: "ly25_b",
        text: "Chạy trốn và không bao giờ quay lại",
        description: "Trốn tránh kết quả do mình tạo ra.",
        effects: { finance: -50, people: -50, military: -50, religion: 0 },
        historicalNote: "Sẽ kết thúc triều đại sớm hơn trong sự nhục nhã."
      },
      {
        id: "ly25_c",
        text: "Tự mình ra trận mà không có quân",
        description: "Hành động liều lĩnh, bỏ qua quy luật tương quan lực lượng.",
        effects: { finance: 0, people: -10, military: -40, religion: 0 },
        historicalNote: "Cầm chắc cái chết và sự hỗn loạn cho đất nước."
      },
      {
        id: "ly25_d",
        text: "Thương lượng chia đôi đất nước với giặc",
        description: "Chấp nhận một kết quả tạm thời đầy rủi ro.",
        effects: { finance: -20, people: -30, military: -20, religion: 0 },
        historicalNote: "Dẫn đến cục diện cát cứ, đất nước bị chia cắt."
      }
    ],
  },

  // Câu 26: Lý Huệ Tông và quyền lực họ Trần - 1211
  {
    id: "ly_26",
    character: "Lý Huệ Tông - Năm 1211",
    situation: "Sau loạn Quách Bốc, họ Trần (với thế lực kinh tế và quân sự mạnh mẽ tại vùng Hải Ấp) đã có công lớn trong việc phò tá bạn (vua Lý) trở lại ngai vàng. Tuy nhiên, "cái giá" của sự giúp đỡ này là quyền lực của họ ngày càng phình to, lấn át cả thiên tử, biến triều đình nhà Lý dần trở thành một bộ máy hữu danh vô thực. Đứng trước một thế lực đang lên như diều gặp gió, bạn sẽ xử trí ra sao để giữ vững cơ nghiệp tổ tiên?",
    philosophicalContext: "Quy luật về sự thay thế cái cũ bằng cái mới (Phủ định của phủ định)",
    dialecticLaw: "Trong sự vận động của lịch sử, khi một hình thái cũ (nhà Lý) đã trở nên lỗi thời, kiệt quệ và không còn khả năng quản lý xã hội, thì sự xuất hiện của một hình thái mới, năng động hơn (họ Trần) là một tất yếu khách quan. Việc họ Trần lấn át quyền lực không chỉ là tham vọng cá nhân, mà là sự phản ánh tương quan lực lượng thực tế: cái mới đang tích lũy đủ về "lượng" để thực hiện bước nhảy vọt về "chất".",
    yearContext: "1211",
    historicalQuote: "Nhà Lý dựa vào nhà Trần như dựa vào tường, nhưng tường ấy đang dần đè sập nhà.",
    leftChoice: {
      text: "Tìm cách tiêu diệt họ Trần",
      effects: { finance: -10, people: -10, military: -20, religion: 0 },
    },
    rightChoice: {
      text: "Dựa hẳn vào họ Trần để giữ ngôi",
      effects: { finance: 5, people: -5, military: 20, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly26_a",
        text: "Trao quyền cho Trần Tự Khánh cai quản binh quyền",
        description: "Chấp nhận sự chuyển hóa quyền lực để giữ ổn định.",
        effects: { finance: 5, people: -5, military: 20, religion: 0 },
        historicalNote: "Lý Huệ Tông buộc phải dựa vào sức mạnh quân sự của họ Trần để tồn tại.",
        isCorrect: true
      },
      {
        id: "ly26_b",
        text: "Ra mật chiếu ám sát các tướng họ Trần",
        description: "Cố gắng cắt đứt mối liên hệ lực lượng một cách cực đoan.",
        effects: { finance: -5, people: -15, military: -30, religion: 0 },
        historicalNote: "Sẽ dẫn đến cuộc thanh trừng ngược lại và mất ngôi nhanh hơn."
      },
      {
        id: "ly26_c",
        text: "Bỏ kinh đô đi làm sư ngay lập tức",
        description: "Phủ nhận mọi mối liên hệ xã hội để tìm sự giải thoát cá nhân.",
        effects: { finance: 0, people: -20, military: -20, religion: 30 },
        historicalNote: "Gây ra khoảng trống quyền lực nguy hiểm."
      },
      {
        id: "ly26_d",
        text: "Cầu viện quân nước ngoài để đánh họ Trần",
        description: "Tạo ra mối liên hệ nguy hiểm, đe dọa chủ quyền dân tộc.",
        effects: { finance: -30, people: -40, military: 5, religion: 0 },
        historicalNote: "Hành động cõng rắn cắn gà nhà sẽ bị lịch sử nguyền rủa."
      }
    ],
  },

  // Câu 27: Lý Huệ Tông đi tu - 1224
  {
    id: "ly_27",
    character: "Lý Huệ Tông - Năm 1224",
    situation: "Bạn (Vua Lý Huệ Tông) đang ở trong một tình cảnh bi đát: không có con trai để nối dõi, sức khỏe ngày càng cạn kiệt, tinh thần suy sụp trước sự thao túng của các thế lực. Nhận thấy mình không còn đủ khả năng lèo lái con thuyền quốc gia, bạn muốn rời xa bụi trần để tìm sự thanh thản nơi cửa Phật và quyết định nhường ngôi lại cho con gái nhỏ mới 6 tuổi là công chúa Phật Kim (Lý Chiêu Hoàng).",
    philosophicalContext: "Quy luật mâu thuẫn",
    dialecticLaw: "Sự giải quyết mâu thuẫn nội tại: Mâu thuẫn giữa trách nhiệm quân vương và khát vọng tự do cá nhân được giải quyết bằng việc rời bỏ quyền lực, đánh dấu sự kết thúc của một chu kỳ phát triển.",
    yearContext: "1224",
    historicalQuote: "Cảnh đời phù du như giấc mộng, chi bằng gửi thân nơi cửa Phật.",
    leftChoice: {
      text: "Tiếp tục tại vị đến hơi thở cuối",
      effects: { finance: 0, people: -15, military: -10, religion: -10 },
    },
    rightChoice: {
      text: "Nhường ngôi cho con gái, vào chùa đi tu",
      effects: { finance: 0, people: 5, military: -10, religion: 25 },
    },
    multipleChoices: [
      {
        id: "ly27_a",
        text: "Nhường ngôi cho công chúa Chiêu Thánh (Lý Chiêu Hoàng)",
        description: "Giải quyết mâu thuẫn bằng cách chuyển giao hình thức quyền lực.",
        effects: { finance: 0, people: 5, military: -10, religion: 25 },
        historicalNote: "Vua đi tu ở chùa Chân Giáo, lấy pháp danh Huệ Quang thiền sư.",
        isCorrect: true
      },
      {
        id: "ly27_b",
        text: "Ép một người họ hàng xa lên ngôi",
        description: "Cố duy trì mặt đối lập đã suy yếu.",
        effects: { finance: -5, people: -10, military: -5, religion: 0 },
        historicalNote: "Sẽ không đủ uy tín để chống lại sự lớn mạnh của họ Trần."
      },
      {
        id: "ly27_c",
        text: "Tự sát để kết thúc mọi chuyện",
        description: "Sự phủ định sạch trơn, tiêu cực.",
        effects: { finance: 0, people: -30, military: -20, religion: -10 },
        historicalNote: "Gây ra sự hỗn loạn và sụp đổ đẫm máu cho triều đại."
      },
      {
        id: "ly27_d",
        text: "Ra lệnh giải tán toàn bộ triều đình",
        description: "Hành động phi thực tế, bỏ qua quy luật tổ chức xã hội.",
        effects: { finance: -50, people: -50, military: -50, religion: 0 },
        historicalNote: "Sẽ dẫn đến thảm họa chiến tranh dân sự."
      }
    ],
  },

  // Câu 28: Lý Chiêu Hoàng lên ngôi - 1224
  {
    id: "ly_28",
    character: "Lý Chiêu Hoàng - Năm 1224",
    situation: "Bạn là nữ hoàng đầu tiên và duy nhất trong lịch sử Đại Việt, lên ngôi khi mới 6 tuổi. Xung quanh bạn, mọi thứ từ việc ăn ở đến quan lại chầu chực đều do một tay Thái sư Trần Thủ Độ sắp đặt. Ngay cả những bạn chơi cùng trong cung cũng là người họ Trần. Giữa những bức tường thành lộng lẫy, bạn cảm nhận được mình chỉ là một quân cờ trong một ván cờ chính trị khổng lồ đang dần khép lại.",
    philosophicalContext: "Nội dung và Hình thức",
    dialecticLaw: "Sự không phù hợp giữa hình thức và nội dung: Hình thức vương quyền (vua nữ nhỏ tuổi) không còn phản ánh đúng nội dung sức mạnh thực tế (họ Trần nắm giữ mọi quyền hành).",
    yearContext: "1224",
    historicalQuote: "Dưới bóng chiếc hoàng bào là một đứa trẻ, đằng sau chiếc ngai vàng là một bàn tay thép.",
    leftChoice: {
      text: "Chống lại Trần Thủ Độ",
      effects: { finance: 0, people: -10, military: -20, religion: 0 },
    },
    rightChoice: {
      text: "Làm theo sự sắp đặt của họ Trần",
      effects: { finance: 10, people: 5, military: 15, religion: 0 },
    },
    multipleChoices: [
      {
        id: "ly28_a",
        text: "Chấp nhận sự bảo hộ của Trần Thủ Độ",
        description: "Thừa nhận sự thay đổi về nội dung quyền lực thực tế.",
        effects: { finance: 10, people: 5, military: 15, religion: 0 },
        historicalNote: "Mọi việc lớn nhỏ trong triều lúc này đều do Điện tiền chỉ huy sứ Trần Thủ Độ quyết định.",
        isCorrect: true
      },
      {
        id: "ly28_b",
        text: "Tìm cách bỏ trốn khỏi cung",
        description: "Phủ nhận hình thức quyền lực một cách trẻ con.",
        effects: { finance: -5, people: -10, military: -5, religion: 0 },
        historicalNote: "Không thể thoát khỏi mạng lưới kiểm soát chặt chẽ của họ Trần."
      },
      {
        id: "ly28_c",
        text: "Ra lệnh xử tử Trần Thủ Độ",
        description: "Cố gắng dùng hình thức để đè bẹp nội dung mạnh hơn.",
        effects: { finance: 0, people: -20, military: -40, religion: 0 },
        historicalNote: "Hành động này chỉ dẫn đến sự sụp đổ nhanh chóng hơn của cá nhân vua."
      },
      {
        id: "ly28_d",
        text: "Chỉ lo chơi đùa, không quan tâm triều chính",
        description: "Phó mặc sự vận động của lịch sử.",
        effects: { finance: 0, people: -5, military: 0, religion: 0 },
        historicalNote: "Đúng với tâm lý của một đứa trẻ, nhưng làm tăng tốc quá trình mất ngôi."
      }
    ],
  },

  // Câu 29: Cuộc hôn nhân giữa Chiêu Hoàng và Trần Cảnh - 1225
  {
    id: "ly_29",
    character: "Trần Thủ Độ - Năm 1225",
    situation: "Bạn là Thái sư Trần Thủ Độ, người đang nắm giữ vận mệnh của cả hai dòng họ Lý - Trần. Để chuyển giao quyền lực một cách êm thấm, tránh một cuộc nội chiến đẫm máu làm kiệt quệ quốc gia, bạn sắp xếp cho cháu mình là Trần Cảnh (8 tuổi) vào cung làm hầu cận và kết thân với Nữ vương Lý Chiêu Hoàng. Đây không đơn thuần là sự hồn nhiên của trẻ thơ, mà là một phần trong kế hoạch chính trị vĩ đại. Mục đích tối thượng của bạn là gì?",
    philosophicalContext: "Quy luật lượng – chất",
    dialecticLaw: "Sự tích lũy về lượng dẫn đến thay đổi về chất: Việc kết hôn và nhường ngôi là bước nhảy vọt, kết thúc quá trình tích lũy quyền lực lâu dài của họ Trần (lượng) để xác lập một triều đại mới (chất).",
    yearContext: "1225",
    historicalQuote: "Trời cho họ Trần ta nắm lấy thiên hạ, phải làm sao cho danh chính ngôn thuận.",
    leftChoice: {
      text: "Cướp ngôi bằng vũ lực",
      effects: { finance: -10, people: -30, military: 20, religion: -10 },
    },
    rightChoice: {
      text: "Tổ chức đại hôn, chuẩn bị nhường ngôi",
      effects: { finance: -5, people: 10, military: 10, religion: 5 },
    },
    multipleChoices: [
      {
        id: "ly29_a",
        text: "Tác hợp cho Chiêu Hoàng và Trần Cảnh",
        description: "Tạo ra bước nhảy vọt về chất thông qua con đường hòa bình.",
        effects: { finance: -5, people: 10, military: 10, religion: 5 },
        historicalNote: "Đây là một mưu đồ chính trị thiên tài của Trần Thủ Độ để chuyển giao vương triều không đổ máu.",
        isCorrect: true
      },
      {
        id: "ly29_b",
        text: "Giết chết Chiêu Hoàng để lên ngôi",
        description: "Bước nhảy vọt bằng bạo lực tiêu cực.",
        effects: { finance: 0, people: -50, military: 10, religion: -20 },
        historicalNote: "Sẽ gây phẫn nộ trong dân chúng và các trung thần nhà Lý."
      },
      {
        id: "ly29_c",
        text: "Để họ Trần tiếp tục làm quan dưới quyền nhà Lý",
        description: "Duy trì sự tích lũy lượng mà không dám thực hiện bước nhảy.",
        effects: { finance: 10, people: 0, military: 5, religion: 0 },
        historicalNote: "Bỏ lỡ thời cơ lịch sử để đổi mới đất nước."
      },
      {
        id: "ly29_d",
        text: "Cho Trần Cảnh làm con nuôi nhà Lý",
        description: "Hành động chưa đủ mạnh để thay đổi chất lượng vương triều.",
        effects: { finance: 0, people: 5, military: 0, religion: 0 },
        historicalNote: "Sẽ làm kéo dài sự bất ổn và tranh giành quyền lực."
      }
    ],
  },

  // Câu 30: Nhà Lý nhường ngôi cho nhà Trần - 1225
  {
    id: "ly_30",
    character: "Lý Chiêu Hoàng - Năm 1225",
    situation: "Ngày mùng 1 tháng 12 năm Ất Dậu, tại điện Thiên An, bạn (Lý Chiêu Hoàng) trút bỏ áo ngự, mời Trần Cảnh lên ngôi hoàng đế. Tiếng tung hô 'vạn tuế' vang lên, chính thức khép lại 216 năm rực rỡ của nhà Lý để mở ra kỷ nguyên nhà Trần. Đứng giữa ranh giới của hai triều đại, bạn nhìn nhận thế nào về hành động nhường ngôi này?",
    philosophicalContext: "Quy luật phủ định của phủ định",
    dialecticLaw: "Sự phủ định biện chứng: Nhà Trần thay thế nhà Lý không phải là sự tiêu diệt sạch trơn, mà là sự kế thừa những tinh hoa văn hiến và phát triển đất nước lên một tầm cao mới để chuẩn bị cho họa xâm lăng sắp tới.",
    yearContext: "1225",
    historicalQuote: "Cái cũ đi qua để cái mới bắt đầu, đó là lẽ tự nhiên của trời đất.",
    leftChoice: {
      text: "Đau xót vì mất cơ nghiệp tiền nhân",
      effects: { finance: 0, people: -10, military: -10, religion: -5 },
    },
    rightChoice: {
      text: "Tin tưởng vào sự chuyển giao lịch sử",
      effects: { finance: 0, people: 15, military: 15, religion: 10 },
    },
    multipleChoices: [
      {
        id: "ly30_a",
        text: "Chủ động nhường ngôi để bảo toàn đại cuộc",
        description: "Thực hiện phủ định biện chứng: Cái cũ tự phủ định để cái mới tiến bộ hơn ra đời.",
        effects: { finance: 0, people: 15, military: 15, religion: 10 },
        historicalNote: "Sự chuyển giao hòa bình giúp quốc gia giữ vững thực lực, chuẩn bị cho sức mạnh của Hào khí Đông A.",
        isCorrect: true
      },
      {
        id: "ly30_b",
        text: "Cố chấp giữ ngôi dù không còn thực lực",
        description: "Chống lại quy luật khách quan khi điều kiện tồn tại đã hết.",
        effects: { finance: -30, people: -40, military: -30, religion: 0 },
        historicalNote: "Hành động này thường dẫn đến đảo chính đẫm máu hoặc nội chiến làm suy yếu quốc gia."
      },
      {
        id: "ly30_c",
        text: "Phó mặc cho sự sắp đặt của họ Trần",
        description: "Thụ động trước sự vận động lịch sử, thiếu đi ý chí của chủ thể.",
        effects: { finance: 0, people: -10, military: 0, religion: -10 },
        historicalNote: "Khiến vị thế của dòng tộc cũ bị hạ thấp hơn nữa trong mắt dân chúng và lịch sử."
      },
      {
        id: "ly30_d",
        text: "Tìm cách phá hủy ấn tín, giấy tờ của vương triều",
        description: "Phủ định sạch trơn: Hủy hoại các giá trị kế thừa từ quá khứ.",
        effects: { finance: -40, people: -30, military: -20, religion: -30 },
        historicalNote: "Làm đứt gãy mạch quản lý hành chính và văn hóa quốc gia, gây khó khăn cho việc phục hồi kinh tế."
      }
    ],
  }
];
