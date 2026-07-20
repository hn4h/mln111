import type { Dynasty } from "./types";

// Các mốc lịch sử quan trọng của Đảng Cộng sản Việt Nam - Tích hợp triết học Mác - Lênin
export const vietnamDynasties: Dynasty[] = [
  {
    id: "dang",
    name: "Đảng Cộng sản Việt Nam",
    period: "1930 - Nay",
    description:
      "Khám phá các quyết định lịch sử quan trọng của Đảng trong đấu tranh giành độc lập, kháng chiến chống ngoại xâm và đổi mới phát triển đất nước, gắn liền với các quy luật triết học Mác-Lênin.",
    icon: "⭐",
    startingStats: { finance: 50, people: 50, military: 50, religion: 50 },
    cards: [
      // Câu 1: Hội nghị thành lập Đảng - 1930
      {
        id: "dang_1",
        character: "Nguyễn Ái Quốc - Năm 1930",
        situation:
          "Ba tổ chức cộng sản ở Việt Nam đang hoạt động biệt lập, tranh giành ảnh hưởng và bài xích lẫn nhau. Bạn cần làm thế nào để thống nhất lực lượng, chấm dứt sự chia rẽ và thành lập một chính đảng duy nhất dẫn dắt phong trào cách mạng?",
        philosophicalContext: "Quy luật mâu thuẫn",
        dialecticLaw:
          "Sự thống nhất và đấu tranh giữa các mặt đối lập: Mâu thuẫn nội bộ giữa các tổ chức cộng sản cần được giải quyết bằng sự thương lượng, thuyết phục (thống nhất biện chứng) thay vì bài xích, cô lập lẫn nhau để tạo nên sức mạnh tổng hợp của phong trào vô sản.",
        yearContext: "1930",
        historicalQuote:
          "Từ nay về sau, các đồng chí phải đoàn kết nhất trí, cùng nhau phấn đấu vì sự nghiệp chung. (Hồ Chí Minh Toàn Tập)",
        leftChoice: {
          text: "Tiếp tục để các tổ chức hoạt động độc lập",
          effects: { finance: -5, people: -10, military: -15, religion: -10 },
        },
        rightChoice: {
          text: "Thống nhất thành một chính đảng duy nhất",
          effects: { finance: 5, people: 15, military: 15, religion: 25 },
        },
        multipleChoices: [
          {
            id: "dang1_a",
            text: "Chủ trì Hội nghị hợp nhất, thành lập Đảng Cộng sản Việt Nam",
            description: "Thống nhất hành động để giải quyết mâu thuẫn.",
            effects: { finance: 5, people: 15, military: 15, religion: 25 },
            historicalNote:
              "Hội nghị hợp nhất đầu năm 1930 tại Hương Cảng đã thống nhất ba tổ chức thành Đảng Cộng sản Việt Nam dưới sự chủ trì của Nguyễn Ái Quốc.",
            isCorrect: true,
          },
          {
            id: "dang1_b",
            text: "Tiếp tục để các tổ chức hoạt động độc lập nhằm đa dạng hóa",
            description: "Bảo thủ trước mâu thuẫn, làm phân tán lực lượng cách mạng.",
            effects: { finance: -5, people: -10, military: -15, religion: -15 },
            historicalNote:
              "Sự chia rẽ kéo dài sẽ khiến thực dân Pháp dễ dàng cô lập và bẻ gãy từng phong trào riêng lẻ.",
          },
          {
            id: "dang1_c",
            text: "Chỉ chọn tổ chức mạnh nhất và giải tán hai tổ chức còn lại",
            description: "Giải quyết mâu thuẫn một chiều bằng cách loại bỏ cơ học.",
            effects: { finance: 0, people: -5, military: -10, religion: -10 },
            historicalNote:
              "Điều này gây chia rẽ sâu sắc trong nội bộ những người cộng sản và làm suy yếu thực lực cách mạng.",
          },
          {
            id: "dang1_d",
            text: "Giải tán toàn bộ để chờ chỉ thị trực tiếp từ Quốc tế Cộng sản",
            description: "Thụ động trước mâu thuẫn thực tiễn khách quan.",
            effects: { finance: 0, people: -15, military: -15, religion: -20 },
            historicalNote:
              "Hành động này bỏ lỡ thời cơ lịch sử và tự triệt tiêu phong trào yêu nước đang lên.",
          },
        ],
      },

      // Câu 2: Luận cương chính trị tháng 10/1930
      {
        id: "dang_2",
        character: "Trần Phú - Tháng 10/1930",
        situation:
          "Hội nghị lần thứ nhất họp để thông qua Luận cương chính trị. Bạn sẽ xác định mối quan hệ giữa nhiệm vụ giải phóng dân tộc (chống đế quốc) và giải phóng giai cấp (chống phong kiến, chia ruộng đất cho dân nghèo) như thế nào để đi đúng quỹ đạo của chủ nghĩa Mác-Lênin?",
        philosophicalContext: "Cái riêng và Cái chung",
        dialecticLaw:
          "Cái chung là quy luật cách mạng vô sản thế giới, cái riêng là đặc thù cách mạng thuộc địa Việt Nam. Việc giải quyết đúng đắn mối quan hệ giữa chống đế quốc và chống phong kiến phải dựa trên sự vận dụng lý luận chung vào thực tiễn riêng biệt của một nước nửa phong kiến thuộc địa.",
        yearContext: "1930",
        historicalQuote:
          "Cách mạng Đông Dương lúc đầu là cách mạng tư sản dân quyền, có tính chất thổ địa và phản đế... sau đó phát triển thẳng lên cách mạng xã hội chủ nghĩa. (Luận cương chính trị 1930)",
        leftChoice: {
          text: "Đặt nặng nhiệm vụ chống phong kiến trước",
          effects: { finance: -10, people: 10, military: 5, religion: -10 },
        },
        rightChoice: {
          text: "Kết hợp hài hòa hai nhiệm vụ phản đế và phản phong kiến",
          effects: { finance: 0, people: 15, military: 10, religion: 15 },
        },
        multipleChoices: [
          {
            id: "dang2_a",
            text: "Đồng thời thực hiện phản đế và phản phong kiến",
            description: "Kết hợp nhiệm vụ dân tộc và giai cấp.",
            effects: { finance: -5, people: 15, military: 10, religion: 15 },
            historicalNote:
              "Luận cương chính trị tháng 10/1930 do Trần Phú soạn thảo đã xác định hai nhiệm vụ này có mối quan hệ khăng khít với nhau, dù sau này Đảng đã điều chỉnh linh hoạt hơn.",
            isCorrect: true,
          },
          {
            id: "dang2_b",
            text: "Chỉ tập trung chống phong kiến để chia ruộng đất trước",
            description: "Coi nhẹ nhiệm vụ giải phóng dân tộc (phản đế).",
            effects: { finance: -10, people: 10, military: 5, religion: -10 },
            historicalNote:
              "Tập trung chống địa chủ phong kiến quá sớm khi chưa đuổi được thực dân Pháp sẽ làm thu hẹp khối đại đoàn kết dân tộc.",
          },
          {
            id: "dang2_c",
            text: "Chỉ chống đế quốc Pháp, bỏ qua cải cách ruộng đất hoàn toàn",
            description: "Bỏ qua động lực cách mạng đông đảo nhất là nông dân.",
            effects: { finance: 5, people: -15, military: -5, religion: -5 },
            historicalNote:
              "Nông dân chiếm 90% dân số, không giải quyết vấn đề ruộng đất sẽ không thể huy động được sức dân tham gia kháng chiến.",
          },
          {
            id: "dang2_d",
            text: "Trì hoãn cả hai nhiệm vụ để tập trung hoạt động kinh tế",
            description: "Xa rời bản chất của cách mạng giải phóng dân tộc.",
            effects: { finance: 15, people: -10, military: -15, religion: -15 },
            historicalNote:
              "Kinh tế dưới ách cai trị của thực dân Pháp không thể tự do phát triển nếu không giành được độc lập chính trị.",
          },
        ],
      },

      // Câu 3: Phong trào Xô viết Nghệ Tĩnh - 1930-1931
      {
        id: "dang_3",
        character: "Ban Chấp hành Trung ương - Năm 1930",
        situation:
          "Chính quyền thực dân bị tê liệt ở một số huyện thuộc Nghệ An và Hà Tĩnh. Quần chúng tự phát lập ra các Xô viết để tự quản lý xã hội, chia lại ruộng đất. Đứng trước sự phát triển tự phát mạnh mẽ này, bạn định hướng phong trào cách mạng thế nào?",
        philosophicalContext: "Lực lượng sản xuất và Quan hệ sản xuất",
        dialecticLaw:
          "Mối quan hệ giữa lực lượng sản xuất (người nông dân lao động) và quan hệ sản xuất (chế độ sở hữu ruộng đất thực dân phong kiến). Việc thành lập các Xô viết là bước đi nhằm phá vỡ quan hệ sản xuất cũ lỗi thời để giải phóng lực lượng sản xuất, dù trình độ chung của phong trào còn non trẻ.",
        yearContext: "1930-1931",
        historicalQuote:
          "Bảo vệ Xô viết là bảo vệ mầm mống của chính quyền cách mạng mới của nhân dân lao động.",
        leftChoice: {
          text: "Giải tán Xô viết để tránh bị đàn áp",
          effects: { finance: 5, people: -20, military: -15, religion: -10 },
        },
        rightChoice: {
          text: "Lãnh đạo xây dựng chính quyền tự quản kiểu mới",
          effects: { finance: -10, people: 20, military: 10, religion: 20 },
        },
        multipleChoices: [
          {
            id: "dang3_a",
            text: "Lãnh đạo quần chúng xây dựng chính quyền Xô viết tự quản",
            description: "Chủ động phá vỡ QHSX lỗi thời để giải phóng LLSX.",
            effects: { finance: -10, people: 20, military: 10, religion: 20 },
            historicalNote:
              "Chính quyền Xô viết Nghệ Tĩnh đã thực hiện nhiều chính sách tiến bộ như chia ruộng đất, xóa mù chữ trước khi bị thực dân Pháp khủng bố trắng dã man.",
            isCorrect: true,
          },
          {
            id: "dang3_b",
            text: "Giải tán các Xô viết để tránh bị thực dân Pháp khủng bố",
            description: "Rút lui tiêu cực, dập tắt ngọn lửa cách mạng của quần chúng.",
            effects: { finance: 5, people: -20, military: -15, religion: -15 },
            historicalNote:
              "Điều này sẽ làm mất đi niềm tin sắt đá của quần chúng vào sự lãnh đạo cách mạng của Đảng.",
          },
          {
            id: "dang3_c",
            text: "Tuyên bố khởi nghĩa vũ trang trên toàn quốc ngay lập tức",
            description: "Chủ quan duy ý chí, hành động khi chưa tích lũy đủ về lượng.",
            effects: { finance: -20, people: -25, military: -30, religion: 0 },
            historicalNote:
              "Cách mạng sẽ rơi vào tình trạng manh động và bị tiêu diệt hoàn toàn vì lực lượng vũ trang cả nước chưa sẵn sàng.",
          },
          {
            id: "dang3_d",
            text: "Hợp tác thương lượng với Pháp để xin cải cách ruộng đất nhỏ giọt",
            description: "Ảo tưởng cải lương, đi ngược lại quy luật đấu tranh.",
            effects: { finance: 10, people: -10, military: -5, religion: -20 },
            historicalNote:
              "Thực dân Pháp không bao giờ tự nguyện từ bỏ quyền lợi ruộng đất và cai trị thuộc địa.",
          },
        ],
      },

      // Câu 4: Hội nghị Trung ương 8 - 1941
      {
        id: "dang_4",
        character: "Nguyễn Ái Quốc - Năm 1941",
        situation:
          "Chiến tranh thế giới thứ hai bùng nổ đe dọa trực tiếp đến vận mệnh các dân tộc Đông Dương. Bạn vừa về nước chủ trì Hội nghị Trung ương 8 tại Pác Bó. Đứng trước biến động lớn của thời đại, bạn quyết định điều chỉnh chiến lược cách mạng của Đảng như thế nào để tập trung toàn lực?",
        philosophicalContext: "Quy luật Lượng - Chất",
        dialecticLaw:
          "Bước chuyển đổi về chất của đường lối cách mạng: Khi điều kiện khách quan thay đổi, cần có sự tích lũy và chuyển dịch chiến lược phù hợp, đặt quyền lợi dân tộc lên trên hết. Việc thay đổi này chuẩn bị đầy đủ về lượng (lực lượng chính trị, vũ trang) để tạo nên bước nhảy vọt về chất (Cách mạng Tháng Tám).",
        yearContext: "1941",
        historicalQuote:
          "Trong lúc này quyền lợi của bộ phận, của giai cấp phải đặt dưới quyền lợi giải phóng của toàn thể dân tộc. (Nghị quyết Hội nghị TW 8)",
        leftChoice: {
          text: "Tiếp tục đặt nặng đấu tranh giai cấp",
          effects: { finance: -5, people: -10, military: 10, religion: -15 },
        },
        rightChoice: {
          text: "Đặt giải phóng dân tộc lên hàng đầu, lập Việt Minh",
          effects: { finance: 5, people: 20, military: 15, religion: 25 },
        },
        multipleChoices: [
          {
            id: "dang4_a",
            text: "Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, lập Mặt trận Việt Minh",
            description: "Chuyển hướng chiến lược toàn diện để chuẩn bị biến đổi về chất.",
            effects: { finance: 5, people: 20, military: 15, religion: 25 },
            historicalNote:
              "Hội nghị TW 8 (5/1941) đã hoàn thành đường lối chuyển hướng cách mạng, thành lập Mặt trận Việt Minh nhằm đoàn kết mọi tầng lớp yêu nước.",
            isCorrect: true,
          },
          {
            id: "dang4_b",
            text: "Tiếp tục ưu tiên đấu tranh giai cấp và tịch thu ruộng đất ngay lập tức",
            description: "Cơ cấu lượng không phù hợp, làm thu hẹp mặt trận đoàn kết.",
            effects: { finance: -10, people: -5, military: 5, religion: -10 },
            historicalNote:
              "Khiến các tầng lớp trung nông, tiểu tư sản, địa chủ yêu nước xa lánh cách mạng vào thời điểm nguy nan.",
          },
          {
            id: "dang4_c",
            text: "Hạn chế đấu tranh quân sự, chuyển sang đấu tranh nghị trường cải cách",
            description: "Thỏa hiệp cơ hội, ảo tưởng cải lương.",
            effects: { finance: 10, people: -15, military: -20, religion: -15 },
            historicalNote:
              "Làm tiêu tan khí thế đấu tranh cách mạng vũ trang của quần chúng nhân dân dưới ách Nhật - Pháp.",
          },
          {
            id: "dang4_d",
            text: "Chờ quân Đồng minh vào đánh đuổi phát xít rồi mới hành động",
            description: "Ỷ lại ngoại lực, bỏ qua nhân tố tự lực cách mạng.",
            effects: { finance: 0, people: -10, military: -15, religion: -20 },
            historicalNote:
              "Bỏ lỡ thế chủ động chuẩn bị lực lượng giành độc lập trước khi các thế lực ngoại bang tràn vào Đông Dương.",
          },
        ],
      },

      // Câu 5: Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân - 1944
      {
        id: "dang_5",
        character: "Võ Nguyên Giáp - Năm 1944",
        situation:
          "Phong trào cách mạng đang phát triển nhưng thiếu một lực lượng vũ trang tập trung để làm nòng cốt. Bạn được giao nhiệm vụ thành lập đội quân chủ lực đầu tiên. Chỉ với 34 chiến sĩ và vũ khí thô sơ, bạn định hướng hoạt động quân sự thế nào để khích lệ tinh thần cả nước?",
        philosophicalContext: "Bản chất và Hiện tượng",
        dialecticLaw:
          "Mối quan hệ biện chứng giữa bản chất và hiện tượng: Hiện tượng bên ngoài là một đội quân nhỏ bé (34 người), vũ khí thô sơ, nhưng bản chất là một quân đội cách mạng từ nhân dân mà ra, có chí khí chiến đấu phi thường và sự ủng hộ tuyệt đối của nhân dân - nguồn sức mạnh vô địch quyết định thắng lợi lâu dài.",
        yearContext: "1944",
        historicalQuote:
          "Tên của nó là Đội Việt Nam Tuyên truyền Giải phóng quân, nghĩa là chính trị trọng hơn quân sự. (Chỉ thị thành lập của Hồ Chí Minh)",
        leftChoice: {
          text: "Giữ kín lực lượng lánh đánh trận",
          effects: { finance: 5, people: -5, military: -10, religion: -10 },
        },
        rightChoice: {
          text: "Tuyên truyền vũ trang, đánh thắng hai trận đầu",
          effects: { finance: -5, people: 15, military: 25, religion: 15 },
        },
        multipleChoices: [
          {
            id: "dang5_a",
            text: "Tuyên truyền vũ trang, đánh thắng Phai Khắt - Nà Ngần",
            description: "Dùng hành động thực tiễn để khẳng định bản chất cách mạng anh hùng.",
            effects: { finance: -5, people: 15, military: 25, religion: 15 },
            historicalNote:
              "Đội đã ra quân thắng lợi rực rỡ ở Phai Khắt và Nà Ngần (12/1944), mở đầu cho truyền thống đánh thắng trận đầu của quân đội ta.",
            isCorrect: true,
          },
          {
            id: "dang5_b",
            text: "Giữ lực lượng ẩn nấp trong rừng sâu để bảo toàn lực lượng",
            description: "Chỉ thấy hiện tượng yếu kém hiện tại, đánh mất bản chất cách mạng tiến công.",
            effects: { finance: 5, people: -10, military: -15, religion: -10 },
            historicalNote:
              "Không tạo được sự cổ vũ phong trào yêu nước và không thể phát triển mở rộng lực lượng.",
          },
          {
            id: "dang5_c",
            text: "Đem 34 chiến sĩ tấn công ngay vào đô thị lớn để gây chấn động",
            description: "Chủ quan duy ý chí, lao quân vào chỗ chết.",
            effects: { finance: -10, people: -15, military: -30, religion: 0 },
            historicalNote:
              "Sức mạnh chênh lệch quá lớn ở đô thị sẽ khiến đội quân non trẻ bị tiêu diệt hoàn toàn ngay lập tức.",
          },
          {
            id: "dang5_d",
            text: "Chỉ tuyên truyền miệng bằng văn bản mà không tổ chức đánh trận",
            description: "Tách rời lý luận tuyên truyền khỏi thực tiễn đấu tranh vũ trang.",
            effects: { finance: 0, people: 5, military: -10, religion: -5 },
            historicalNote:
              "Không có thắng lợi quân sự cụ thể sẽ không thể khẳng định vai trò bảo vệ dân của lực lượng vũ trang.",
          },
        ],
      },

      // Câu 6: Cách mạng Tháng Tám - 1945
      {
        id: "dang_6",
        character: "Hồ Chí Minh - Năm 1945",
        situation:
          "Nhật đầu hàng Đồng minh, phát xít sụp đổ. Chính phủ bù nhìn Trần Trọng Kim hoang mang, quân Đồng minh chưa kịp vào giải giáp. Đây là thời cơ cách mạng ngàn năm có một nhưng sức khỏe của bạn tại lán Nà Nưa đang suy kiệt. Bạn sẽ quyết định hành động ra sao?",
        philosophicalContext: "Thời cơ cách mạng (Khách quan và Chủ quan)",
        dialecticLaw:
          "Mối liên hệ biện chứng giữa điều kiện khách quan (Nhật đầu hàng, Đồng minh chưa vào) và nhân tố chủ quan (sự chuẩn bị lực lượng và ý chí của Đảng, nhân dân). Khi thời cơ cách mạng chín muồi, nhân tố chủ quan phải hành động nhanh chóng để giải phóng dân tộc.",
        yearContext: "1945",
        historicalQuote:
          "Dù hy sinh tới đâu, dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập! (Hồ Chí Minh)",
        leftChoice: {
          text: "Chờ quân Đồng minh vào rồi đàm phán",
          effects: { finance: 10, people: -25, military: -20, religion: -20 },
        },
        rightChoice: {
          text: "Phát động Tổng khởi nghĩa giành chính quyền",
          effects: { finance: -10, people: 30, military: 25, religion: 30 },
        },
        multipleChoices: [
          {
            id: "dang6_a",
            text: "Phát động Tổng khởi nghĩa giành chính quyền trên toàn quốc",
            description: "Chủ động tận dụng thời cơ cách mạng khách quan bằng sức mạnh chủ quan.",
            effects: { finance: -10, people: 30, military: 25, religion: 30 },
            historicalNote:
              "Tổng khởi nghĩa tháng Tám đã giành thắng lợi nhanh chóng trên cả nước, dẫn đến sự ra đời của nước Việt Nam Dân chủ Cộng hòa ngày 2/9/1945.",
            isCorrect: true,
          },
          {
            id: "dang6_b",
            text: "Chờ quân Đồng minh vào tiếp quản rồi đàm phán bàn giao",
            description: "Thụ động chờ đợi, đánh mất thời cơ độc lập tự chủ tự lực.",
            effects: { finance: 10, people: -20, military: -15, religion: -25 },
            historicalNote:
              "Quân Tưởng và quân Pháp sẽ tràn vào thiết lập ách đô hộ mới, cách mạng sẽ mất đi thế chủ động pháp lý quốc tế.",
          },
          {
            id: "dang6_c",
            text: "Chỉ khởi nghĩa giành chính quyền ở vùng rừng núi, tránh các thành phố lớn",
            description: "Nhút nhát phiến diện, không dám giành chính quyền ở đầu não.",
            effects: { finance: -5, people: -10, military: 5, religion: -10 },
            historicalNote:
              "Không chiếm giữ các trung tâm đô thị lớn sẽ khiến chính quyền non trẻ thiếu đi cơ sở pháp lý và quyền kiểm soát thực tế đất nước.",
          },
          {
            id: "dang6_d",
            text: "Thương lượng xin Nhật tự nguyện trao trả độc lập hòa bình",
            description: "Ảo tưởng vào sự nhân từ của kẻ thù bại trận.",
            effects: { finance: 5, people: -15, military: -10, religion: -20 },
            historicalNote:
              "Nhật lúc này không còn quyền quyết định và quân Đồng minh sẽ coi chính quyền ta là bù nhìn do Nhật lập ra.",
          },
        ],
      },

      // Câu 7: Ký Hiệp định Sơ bộ 6/3/1946
      {
        id: "dang_7",
        character: "Hồ Chí Minh - Năm 1946",
        situation:
          "Chính quyền non trẻ đứng trước thế 'ngàn cân treo sợi tóc': 20 vạn quân Tưởng ở phía Bắc âm mưu lật đổ ta, quân Pháp ở phía Nam muốn tiến quân ra Bắc tái chiếm Đông Dương. Bạn chọn sách lược ngoại giao nào để giải quyết khủng hoảng?",
        philosophicalContext: "Mâu thuẫn chủ yếu và Mâu thuẫn thứ yếu",
        dialecticLaw:
          "Nhận diện mâu thuẫn chủ yếu và mâu thuẫn thứ yếu trong từng giai đoạn. Pháp là kẻ thù nguy hiểm nhất trực tiếp đe dọa chủ quyền cách mạng, còn Tưởng là mâu thuẫn thứ yếu tạm thời. Ký Hiệp định Sơ bộ với Pháp để đuổi quân Tưởng về nước là quyết sách giải quyết mâu thuẫn khôn ngoan.",
        yearContext: "1946",
        historicalQuote:
          "Hòa hoãn với Pháp để đuổi quân Tưởng ra khỏi bờ cõi, giành lấy thời gian chuẩn bị cho cuộc chiến đấu không thể tránh khỏi. (Hồ Chí Minh)",
        leftChoice: {
          text: "Tuyên chiến đồng thời với cả Pháp và Tưởng",
          effects: { finance: -25, people: -20, military: -30, religion: 5 },
        },
        rightChoice: {
          text: "Hòa với Pháp để đuổi quân Tưởng về nước",
          effects: { finance: 5, people: 15, military: 20, religion: 15 },
        },
        multipleChoices: [
          {
            id: "dang7_a",
            text: "Ký Hiệp định Sơ bộ 6/3 hòa hoãn với Pháp để đuổi nhanh quân Tưởng",
            description: "Tập trung giải quyết mâu thuẫn chủ yếu, tránh đối đầu hai thế lực lớn.",
            effects: { finance: 5, people: 15, military: 20, religion: 15 },
            historicalNote:
              "Việc ký Hiệp định Sơ bộ giúp đẩy 20 vạn quân Tưởng về nước và tranh thủ thời gian hòa hoãn chuẩn bị kháng chiến lâu dài.",
            isCorrect: true,
          },
          {
            id: "dang7_b",
            text: "Kiên quyết tuyên chiến với cả quân Pháp và quân Tưởng cùng lúc",
            description: "Chủ quan duy ý chí, đẩy cách mạng vào hiểm cảnh thù trong giặc ngoài.",
            effects: { finance: -30, people: -25, military: -35, religion: 10 },
            historicalNote:
              "Thực lực non trẻ của ta lúc này không thể chống cự nổi sự phối hợp tấn công của cả hai quân đội lớn.",
          },
          {
            id: "dang7_c",
            text: "Liên minh với quân Tưởng để đánh đuổi quân Pháp ở miền Nam",
            description: "Bỏ qua bản chất phản động lật đổ của quân Tưởng Giới Thạch.",
            effects: { finance: -10, people: -15, military: -15, religion: -20 },
            historicalNote:
              "Bọn tay sai của Tưởng sẽ thừa cơ lật đổ chính quyền cách mạng của ta ngay từ bên trong.",
          },
          {
            id: "dang7_d",
            text: "Chấp nhận đầu hàng Pháp để làm bang tự trị bình yên",
            description: "Đầu hàng tiêu cực, đánh mất bản chất đấu tranh giành chủ quyền cách mạng.",
            effects: { finance: -10, people: -30, military: -25, religion: -30 },
            historicalNote:
              "Đánh mất hoàn toàn độc lập dân tộc vừa giành được bằng xương máu cách mạng tháng Tám.",
          },
        ],
      },

      // Câu 8: Lời kêu gọi Toàn quốc kháng chiến - 12/1946
      {
        id: "dang_8",
        character: "Hồ Chí Minh - Tháng 12/1946",
        situation:
          "Thực dân Pháp liên tục bội ước, gửi tối hậu thư đòi ta giải tán lực lượng tự vệ và giao quyền kiểm soát an ninh Thủ đô Hà Nội cho chúng. Mọi nỗ lực cứu vãn hòa bình đã cạn kiệt. Bạn quyết định nhượng bộ thêm hay đứng lên kháng chiến?",
        philosophicalContext: "Nguyên nhân và Kết quả",
        dialecticLaw:
          "Mối liên hệ nhân quả: Sự xâm lược trắng trợn của thực dân Pháp (nguyên nhân) tất yếu dẫn đến kết quả là cuộc kháng chiến tự vệ chính nghĩa của nhân dân Việt Nam. Muốn có kết quả tự do, độc lập thực sự, dân tộc phải chấp nhận trải qua cuộc kháng chiến gian khổ, trường kỳ.",
        yearContext: "1946",
        historicalQuote:
          "Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ. (Lời kêu gọi toàn quốc kháng chiến)",
        leftChoice: {
          text: "Tiếp tục chấp nhận tối hậu thư của Pháp",
          effects: { finance: -10, people: -25, military: -20, religion: -25 },
        },
        rightChoice: {
          text: "Phát động Toàn quốc kháng chiến trường kỳ",
          effects: { finance: -15, people: 20, military: 25, religion: 30 },
        },
        multipleChoices: [
          {
            id: "dang8_a",
            text: "Phát động Toàn quốc kháng chiến, tự động nổ súng đánh địch trước",
            description: "Nhận thức rõ mối quan hệ nhân quả tất yếu để chủ động phản công.",
            effects: { finance: -15, people: 20, military: 25, religion: 30 },
            historicalNote:
              "Đêm 19/12/1946, Lời kêu gọi toàn quốc kháng chiến ban bố, mở màn cuộc kháng chiến 9 năm chống thực dân Pháp oanh liệt.",
            isCorrect: true,
          },
          {
            id: "dang8_b",
            text: "Chấp nhận tối hậu thư, giải tán lực lượng tự vệ Thủ đô",
            description: "Thoái lui nhu nhược trước nguyên nhân xâm lược của Pháp.",
            effects: { finance: -5, people: -20, military: -25, religion: -25 },
            historicalNote:
              "Pháp sẽ dễ dàng tước vũ khí của ta, bắt giữ các lãnh đạo và xóa bỏ hoàn toàn chính quyền Việt Nam Dân chủ Cộng hòa.",
          },
          {
            id: "dang8_c",
            text: "Không nổ súng kháng chiến quân sự, chỉ gửi đơn cầu cứu Liên Hợp Quốc",
            description: "Tách rời đấu tranh ngoại giao khỏi thực tiễn thực lực chiến trường.",
            effects: { finance: 5, people: -15, military: -15, religion: -10 },
            historicalNote:
              "Liên Hợp Quốc lúc đó bị các nước lớn thao túng và sẽ không can thiệp để bảo vệ chủ quyền cách mạng của ta.",
          },
          {
            id: "dang8_d",
            text: "Rút chạy toàn bộ lực lượng lên căn cứ Việt Bắc ngay lập tức không chiến đấu tại Hà Nội",
            description: "Xem nhẹ vai trò giam chân địch trong đô thị để chuẩn bị hậu phương.",
            effects: { finance: -10, people: -10, military: 10, religion: -5 },
            historicalNote:
              "Không giam chân địch ở Hà Nội và các đô thị sẽ khiến Pháp rảnh tay truy quét nhanh lên Việt Bắc, gây nguy hiểm cho trung ương.",
          },
        ],
      },

      // Câu 9: Chiến dịch Biên giới Thu Đông - 1950
      {
        id: "dang_9",
        character: "Ban Thường vụ Trung ương - Năm 1950",
        situation:
          "Pháp cô lập căn cứ địa Việt Bắc bằng hệ thống Đường số 4 rất vững chắc. Bạn muốn mở chiến dịch Biên giới nhằm khai thông liên lạc với phe Xã hội chủ nghĩa. Trước hệ thống đồn bốt phòng thủ của địch, bạn lựa chọn điểm đột phá ở đâu?",
        philosophicalContext: "Cái riêng và Cái chung",
        dialecticLaw:
          "Vận dụng quy luật chiến thuật: Chọn điểm đột phá mang tính then chốt (cái riêng) để làm sụp đổ toàn bộ hệ thống phòng thủ Biên giới của Pháp (cái chung). Tiêu diệt cứ điểm Đông Khê là khâu đột phá tạo nên phản ứng dây chuyền rút lui của địch.",
        yearContext: "1950",
        historicalQuote:
          "Trận Đông Khê là trận mở màn, đánh thắng trận này sẽ làm rung chuyển toàn bộ phòng tuyến biên giới của địch. (Đại tướng Võ Nguyên Giáp)",
        leftChoice: {
          text: "Đánh thẳng vào Cao Bằng cực mạnh",
          effects: { finance: -10, people: -5, military: -20, religion: 5 },
        },
        rightChoice: {
          text: "Đột phá Đông Khê để cô lập Cao Bằng",
          effects: { finance: -5, people: 15, military: 25, religion: 15 },
        },
        multipleChoices: [
          {
            id: "dang9_a",
            text: "Chọn cứ điểm Đông Khê làm điểm đột phá mở màn chiến dịch",
            description: "Tìm điểm yếu then chốt của hệ thống (cái riêng) để làm sụp đổ hệ thống (cái chung).",
            effects: { finance: -5, people: 15, military: 25, religion: 15 },
            historicalNote:
              "Trận đánh Đông Khê (9/1950) thắng lợi đã cắt đứt phòng tuyến Đường số 4, cô lập Cao Bằng và khiến Pháp hoảng loạn rút chạy.",
            isCorrect: true,
          },
          {
            id: "dang9_b",
            text: "Tấn công trực diện vào thị xã Cao Bằng - nơi địch mạnh nhất",
            description: "Chủ quan đánh vào chỗ mạnh của địch, hao tổn lực lượng.",
            effects: { finance: -15, people: -10, military: -25, religion: 0 },
            historicalNote:
              "Cao Bằng là nơi Pháp tập trung phòng ngự kiên cố nhất, đánh thẳng vào đó ta sẽ gánh chịu tổn thất cực lớn về sinh lực.",
          },
          {
            id: "dang9_c",
            text: "Chia nhỏ quân đội tấn công đồng loạt tất cả các đồn bốt dọc biên giới",
            description: "Dàn trải lực lượng, vi phạm quy luật tập trung binh lực.",
            effects: { finance: -20, people: -10, military: -20, religion: 5 },
            historicalNote:
              "Dàn trải quân làm mất ưu thế tuyệt đối tại các điểm xung yếu, dễ bị quân cơ động Pháp bẻ gãy từng mũi tiến công.",
          },
          {
            id: "dang9_d",
            text: "Rút toàn bộ quân về phòng thủ an toàn khu Việt Bắc",
            description: "Không dám chủ động tiến công cải tạo thế trận khách quan.",
            effects: { finance: 5, people: -15, military: -15, religion: -10 },
            historicalNote:
              "Bỏ lỡ thời cơ liên lạc quốc tế, căn cứ Việt Bắc sẽ mãi bị Pháp siết chặt bao vây và kinh tế cách mạng suy kiệt dần.",
          },
        ],
      },

      // Câu 10: Phương châm tác chiến Điện Biên Phủ - 1954
      {
        id: "dang_10",
        character: "Võ Nguyên Giáp - Năm 1954",
        situation:
          "Chiến dịch Điện Biên Phủ sắp bắt đầu. Ban đầu kế hoạch là 'Đánh nhanh thắng nhanh' trong 3 ngày 2 đêm khi địch chưa củng cố công sự. Nhưng thực tế khảo sát cho thấy Pháp đã xây hệ thống tập đoàn cứ điểm rất mạnh. Bạn quyết định thế nào?",
        philosophicalContext: "Thực tiễn là tiêu chuẩn của chân lý",
        dialecticLaw:
          "Thực tiễn là thước đo cuối cùng của chân lý. Nhận thức chủ quan (kế hoạch đánh nhanh) phải thay đổi để phù hợp với thực tiễn khách quan biến đổi (địch đã phòng thủ kiên cố). Quyết định thay đổi phương châm tác chiến là sự tôn trọng quy luật khách quan.",
        yearContext: "1954",
        historicalQuote:
          "Đồng chí Vi Quốc Thanh đề nghị đánh nhanh, nhưng tôi nghĩ đánh nhanh không bảo đảm thắng lợi... Phải chuyển sang đánh chắc tiến chắc. (Võ Nguyên Giáp)",
        leftChoice: {
          text: "Giữ nguyên kế hoạch Đánh nhanh thắng nhanh",
          effects: { finance: -10, people: -20, military: -40, religion: 5 },
        },
        rightChoice: {
          text: "Chuyển sang phương châm Đánh chắc tiến chắc",
          effects: { finance: -15, people: 15, military: 30, religion: 25 },
        },
        multipleChoices: [
          {
            id: "dang10_a",
            text: "Chuyển phương châm tác chiến sang 'Đánh chắc tiến chắc'",
            description: "Điều chỉnh nhận thức để phù hợp với biến đổi khách quan của thực tiễn.",
            effects: { finance: -15, people: 15, military: 30, religion: 25 },
            historicalNote:
              "Quyết định đổi sang 'Đánh chắc tiến chắc', vây lấn tấn diệt trong 56 ngày đêm đã làm nên chiến thắng Điện Biên Phủ lừng lẫy năm châu.",
            isCorrect: true,
          },
          {
            id: "dang10_b",
            text: "Kiên quyết thực hiện kế hoạch 'Đánh nhanh thắng nhanh' để giữ tính bất ngờ",
            description: "Chủ quan duy ý chí, phiêu lưu quân sự xa rời thực tiễn phòng ngự của địch.",
            effects: { finance: -10, people: -25, military: -45, religion: 0 },
            historicalNote:
              "Nếu đánh nhanh, pháo binh ta chưa vào kịp vị trí vững chắc sẽ bị pháo binh Pháp phản pháo hủy diệt, dẫn đến thảm bại.",
          },
          {
            id: "dang10_c",
            text: "Hủy bỏ hoàn toàn chiến dịch Điện Biên Phủ, rút quân về đồng bằng",
            description: "Dao động rút lui tiêu cực khi gặp khó khăn thực tiễn.",
            effects: { finance: 10, people: -20, military: -15, religion: -20 },
            historicalNote:
              "Bỏ lỡ cơ hội tiêu diệt tập đoàn cứ điểm mạnh nhất của Pháp, kéo dài cuộc chiến tranh Đông Dương vô hạn định.",
          },
          {
            id: "dang10_d",
            text: "Chỉ sử dụng bộ binh tấn công biển người không cần kéo pháo vào",
            description: "Thiếu nhận thức khoa học về vai trò công nghệ quân sự và thực tế hỏa lực địch.",
            effects: { finance: -5, people: -30, military: -40, religion: 0 },
            historicalNote:
              "Bị hỏa lực không quân và pháo binh tập trung của Pháp tàn sát, quân ta sẽ chịu tổn thất vô ích cực lớn.",
          },
        ],
      },

      // Câu 11: Mở Đường Trường Sơn chi viện miền Nam - 1959
      {
        id: "dang_11",
        character: "Trung ương Đảng - Năm 1959",
        situation:
          "Cách mạng miền Nam đang đứng trước yêu cầu chi viện gấp vũ khí và nhân lực từ miền Bắc xã hội chủ nghĩa. Tuy nhiên, các tuyến đường vận tải hiện thời đều bị phong tỏa ngặt nghèo. Bạn thiết lập tuyến đường vận tải chiến lược này thế nào?",
        philosophicalContext: "Nguyên lý mối liên hệ phổ biến",
        dialecticLaw:
          "Mối liên hệ phổ biến giữa tiền tuyến (miền Nam) và hậu phương (miền Bắc). Sự thắng lợi của miền Nam (cái bộ phận) liên quan mật thiết và quyết định bởi năng lực tiếp tế, chi viện của miền Bắc (cái toàn thể). Việc mở đường Trường Sơn là cụ thể hóa mối liên hệ khách quan này.",
        yearContext: "1959",
        historicalQuote:
          "Xẻ dọc Trường Sơn đi cứu nước/ Mà lòng phơi phới dậy tương lai. (Tố Hữu)",
        leftChoice: {
          text: "Yêu cầu miền Nam tự lực cánh sinh hoàn toàn",
          effects: { finance: 15, people: -20, military: -25, religion: -20 },
        },
        rightChoice: {
          text: "Mở đường Trường Sơn đi xuyên rừng núi",
          effects: { finance: -20, people: 15, military: 30, religion: 25 },
        },
        multipleChoices: [
          {
            id: "dang11_a",
            text: "Mở đường Trường Sơn (Đoàn 559) vận tải thô sơ xuyên rừng núi",
            description: "Hiện thực hóa mối liên hệ phổ biến chi viện giữa hai miền Nam - Bắc.",
            effects: { finance: -20, people: 15, military: 30, religion: 25 },
            historicalNote:
              "Đoàn 559 được thành lập năm 1959 mở đường Trường Sơn huyền thoại, vận chuyển hàng triệu tấn vũ khí chi viện cho miền Nam đánh Mỹ.",
            isCorrect: true,
          },
          {
            id: "dang11_b",
            text: "Yêu cầu miền Nam tự lực cánh sinh hoàn toàn để bảo vệ miền Bắc",
            description: "Cắt đứt mối liên hệ phổ biến bộ phận - toàn thể, cô lập tiền tuyến.",
            effects: { finance: 15, people: -20, military: -25, religion: -20 },
            historicalNote:
              "Thiếu sự chi viện từ miền Bắc, cách mạng miền Nam sẽ bị chính quyền Ngô Đình Diệm dập tắt hoàn toàn bằng bạo lực.",
          },
          {
            id: "dang11_c",
            text: "Xây đường lớn hiện đại công khai xuyên biên giới ngay từ đầu",
            description: "Chủ quan duy ý chí, phơi bày lực lượng trước công nghệ do thám Mỹ.",
            effects: { finance: -35, people: -10, military: -15, religion: 5 },
            historicalNote:
              "Không quân Mỹ sẽ dễ dàng phát hiện và ném bom hủy diệt hoàn toàn các tuyến vận tải khi ta chưa có phòng không đủ mạnh.",
          },
          {
            id: "dang11_d",
            text: "Chỉ vận chuyển bằng máy bay thả dù hàng hóa vào Nam",
            description: "Ảo tưởng phi thực tế vượt quá trình độ công nghệ vận tải của ta bấy giờ.",
            effects: { finance: -30, people: 0, military: -20, religion: 0 },
            historicalNote:
              "Mỹ kiểm soát hoàn toàn bầu trời miền Nam, máy bay vận tải của ta sẽ bị bắn rơi ngay lập tức.",
          },
        ],
      },

      // Câu 12: Đấu tranh cách mạng miền Nam - Nghị quyết 15 - 1959
      {
        id: "dang_12",
        character: "Trung ương Đảng - Năm 1959",
        situation:
          "Chính quyền Ngô Đình Diệm ban hành luật 10/59 lê máy chém tàn sát đảng viên và nhân dân miền Nam. Ta vẫn giữ chủ trương đấu tranh chính trị hòa bình khiến lực lượng bị tổn thất nặng nề. Bạn sẽ chỉ đạo điều chỉnh con đường cách mạng thế nào?",
        philosophicalContext: "Quy luật phủ định của phủ định",
        dialecticLaw:
          "Sự phủ định biện chứng: Con đường đấu tranh chính trị hòa bình đơn thuần (cái cũ) đã bị thực tiễn phủ định; cách mạng miền Nam cần tiến lên giai đoạn mới bằng cách kết hợp đấu tranh chính trị với đấu tranh vũ trang tự vệ (cái mới tiến bộ hơn) để phát triển.",
        yearContext: "1959",
        historicalQuote:
          "Con đường phát triển cơ bản của cách mạng Việt Nam ở miền Nam là khởi nghĩa giành chính quyền về tay nhân dân... dùng bạo lực cách mạng. (Nghị quyết 15)",
        leftChoice: {
          text: "Nghiêm cấm vũ trang để giữ hòa bình",
          effects: { finance: 5, people: -25, military: -30, religion: -20 },
        },
        rightChoice: {
          text: "Cho phép dùng bạo lực cách mạng kết hợp vũ trang",
          effects: { finance: -10, people: 20, military: 25, religion: 25 },
        },
        multipleChoices: [
          {
            id: "dang12_a",
            text: "Ban hành Nghị quyết 15 cho phép dùng bạo lực cách mạng vũ trang",
            description: "Thực hiện phủ định biện chứng, chuyển từ đấu tranh hòa bình sang đấu tranh vũ trang tự vệ.",
            effects: { finance: -10, people: 20, military: 25, religion: 25 },
            historicalNote:
              "Nghị quyết 15 (1959) đã thổi bùng lên ngọn lửa Đồng khởi trên toàn miền Nam, tiêu biểu là phong trào Đồng khởi Bến Tre (1960).",
            isCorrect: true,
          },
          {
            id: "dang12_b",
            text: "Tiếp tục cấm hoàn toàn vũ trang, chỉ đấu tranh hòa bình theo Hiệp định",
            description: "Bảo thủ giữ lại cái cũ đã bị thực tiễn phủ định, làm hao mòn lực lượng cách mạng.",
            effects: { finance: 5, people: -30, military: -35, religion: -25 },
            historicalNote:
              "Sẽ khiến các cơ sở cách mạng ở miền Nam bị tiêu diệt sạch dưới các chiến dịch tố cộng diệt cộng của Mỹ - Diệm.",
          },
          {
            id: "dang12_c",
            text: "Kêu gọi toàn bộ đảng viên rút chạy ra Bắc lánh nạn",
            description: "Rút lui đầu hàng thực tế đấu tranh giai cấp dân tộc.",
            effects: { finance: -10, people: -20, military: -15, religion: -20 },
            historicalNote:
              "Đánh mất hoàn toàn chỗ đứng trong quần chúng miền Nam, nhường địa bàn cho địch kiểm soát vĩnh viễn.",
          },
          {
            id: "dang12_d",
            text: "Đề nghị ký hiệp ước liên bang với chính quyền Ngô Đình Diệm",
            description: "Ảo tưởng chính trị thỏa hiệp với thế lực phản cách mạng.",
            effects: { finance: -5, people: -20, military: -20, religion: -30 },
            historicalNote:
              "Ngô Đình Diệm được Mỹ hậu thuẫn chắc chắn sẽ khước từ và lợi dụng cơ hội để tiêu diệt tận gốc lực lượng thương lượng.",
          },
        ],
      },

      // Câu 13: Đàm phán Hiệp định Paris - 1973
      {
        id: "dang_13",
        character: "Đoàn đàm phán Việt Nam - Năm 1973",
        situation:
          "Sau thất bại của chiến tranh phá hoại bằng B-52 cuối năm 1972, Mỹ buộc phải đàm phán tại Paris. Mỹ yêu cầu cả quân Mỹ và quân đội miền Bắc cùng rút khỏi miền Nam Việt Nam. Bạn xử lý yêu sách này thế nào để giữ vững thế trận cách mạng?",
        philosophicalContext: "Đấu tranh và Thống nhất giữa các mặt đối lập",
        dialecticLaw:
          "Biện chứng giữa đấu tranh quân sự và đấu tranh ngoại giao. Kiên quyết không chấp nhận yêu cầu vô lý rút quân miền Bắc, buộc Mỹ rút quân hoàn toàn trong khi quân ta vẫn ở lại miền Nam - bước đi giải quyết mâu thuẫn từng phần (đánh cho Mỹ cút rồi tiến tới đánh cho Ngụy nhào).",
        yearContext: "1973",
        historicalQuote:
          "Đánh cho Mỹ cút, đánh cho Ngụy nhào. (Di chúc của Chủ tịch Hồ Chí Minh)",
        leftChoice: {
          text: "Chấp nhận rút quân miền Bắc để đổi lấy hòa bình",
          effects: { finance: 10, people: -20, military: -30, religion: -20 },
        },
        rightChoice: {
          text: "Buộc Mỹ rút quân, ta giữ nguyên lực lượng tại miền Nam",
          effects: { finance: -5, people: 20, military: 30, religion: 25 },
        },
        multipleChoices: [
          {
            id: "dang13_a",
            text: "Kiên quyết buộc Mỹ rút quân hoàn toàn, quân ta ở lại miền Nam",
            description: "Giải quyết mâu thuẫn từng bước bằng thế chủ động thực tế chiến trường.",
            effects: { finance: -5, people: 20, military: 30, religion: 25 },
            historicalNote:
              "Hiệp định Paris ký ngày 27/1/1973 quy định Mỹ phải rút hết quân, trong khi lực lượng vũ trang giải phóng vẫn được giữ nguyên vị trí ở miền Nam.",
            isCorrect: true,
          },
          {
            id: "dang13_b",
            text: "Chấp nhận rút quân miền Bắc để đẩy nhanh ký kết hiệp định",
            description: "Thỏa hiệp nguyên tắc, làm suy yếu nghiêm trọng thực lực cách mạng miền Nam.",
            effects: { finance: 10, people: -20, military: -35, religion: -20 },
            historicalNote:
              "Không còn quân đội chủ lực chi viện, chính quyền Sài Gòn sẽ dễ dàng truy quét và lấn chiếm các vùng giải phóng.",
          },
          {
            id: "dang13_c",
            text: "Từ chối ký hiệp định, tiếp tục đánh quân sự thuần túy",
            description: "Cái nhìn một chiều phiến diện, coi nhẹ vai trò đấu tranh ngoại giao phối hợp.",
            effects: { finance: -25, people: -15, military: 5, religion: 5 },
            historicalNote:
              "Chiến tranh sẽ kéo dài gây tổn thất xương máu to lớn cho nhân dân mà không tạo ra lối thoát chính trị cho Mỹ rút lui.",
          },
          {
            id: "dang13_d",
            text: "Chấp nhận chia đôi đất nước vĩnh viễn lấy sông Bến Hải làm biên giới mới",
            description: "Đầu hàng về mục tiêu thống nhất quốc gia.",
            effects: { finance: 15, people: -35, military: -30, religion: -35 },
            historicalNote:
              "Đi ngược lại khát vọng thống nhất độc lập dân tộc muôn đời của toàn thể nhân dân Việt Nam.",
          },
        ],
      },

      // Câu 14: Quyết sách Đổi mới tại Đại hội VI - 1986
      {
        id: "dang_14",
        character: "Nguyễn Văn Linh - Năm 1986",
        situation:
          "Đất nước lâm vào khủng hoảng kinh tế trầm trọng do cơ chế tập trung quan liêu bao cấp lỗi thời, lạm phát phi mã vượt mức 700%. Bạn đứng trước đòi hỏi phải đổi mới đất nước, nhưng nội bộ lo ngại việc mở cửa thị trường sẽ làm chệch hướng XHCN. Bạn quyết định thế nào?",
        philosophicalContext: "Lực lượng sản xuất và Quan hệ sản xuất",
        dialecticLaw:
          "Quy luật sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất: Cơ chế bao cấp (QHSX lỗi thời) kìm hãm lực lượng sản xuất xã hội. Cần thiết đổi mới sang nền kinh tế nhiều thành phần định hướng XHCN (QHSX mới) để giải phóng sức sản xuất.",
        yearContext: "1986",
        historicalQuote:
          "Đàng ta phải nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật... Đổi mới là đòi hỏi bức thiết của cuộc sống. (Nguyễn Văn Linh)",
        leftChoice: {
          text: "Tiếp tục duy trì bao cấp để giữ định hướng",
          effects: { finance: -30, people: -35, military: -15, religion: -20 },
        },
        rightChoice: {
          text: "Quyết định Đổi mới toàn diện kinh tế đất nước",
          effects: { finance: 25, people: 30, military: 10, religion: 25 },
        },
        multipleChoices: [
          {
            id: "dang14_a",
            text: "Quyết định Đổi mới toàn diện, xóa bỏ bao cấp, phát triển kinh tế thị trường định hướng XHCN",
            description: "Thay đổi QHSX cho phù hợp với trình độ phát triển của LLSX thực tế.",
            effects: { finance: 25, people: 30, military: 10, religion: 25 },
            historicalNote:
              "Đại hội VI (12/1986) đã đề xướng đường lối Đổi mới toàn diện, đưa đất nước thoát khỏi khủng hoảng kinh tế và phát triển vượt bậc.",
            isCorrect: true,
          },
          {
            id: "dang14_b",
            text: "Tiếp tục siết chặt cơ chế bao cấp để bảo đảm tuyệt đối tính bao cấp",
            description: "Duy trì QHSX lỗi thời kìm hãm triệt để LLSX của đất nước.",
            effects: { finance: -35, people: -40, military: -20, religion: -25 },
            historicalNote:
              "Sẽ khiến nền kinh tế sụp đổ hoàn toàn, người dân lâm vào cảnh thiếu đói nghiêm trọng và gây bất ổn chính trị xã hội.",
          },
          {
            id: "dang14_c",
            text: "Tư nhân hóa hoàn toàn nền kinh tế, từ bỏ vai trò chủ đạo của Nhà nước",
            description: "Phủ định sạch trơn, đi vào con đường chủ nghĩa tư bản vô tổ chức.",
            effects: { finance: 15, people: -20, military: -10, religion: -30 },
            historicalNote:
              "Đất nước sẽ mất đi công cụ điều tiết kinh tế vĩ mô của Nhà nước pháp quyền xã hội chủ nghĩa, gây phân hóa giàu nghèo sâu sắc.",
          },
          {
            id: "dang14_d",
            text: "Đóng cửa biên giới hoàn toàn tự cung tự cấp để tự giải quyết khủng hoảng",
            description: "Tách biệt đất nước khỏi mối liên hệ phát triển của thế giới.",
            effects: { finance: -30, people: -30, military: -10, religion: -20 },
            historicalNote:
              "Tự cô lập kinh tế quốc gia trong bối cảnh thế giới đang toàn cầu hóa sẽ đẩy đất nước vào cảnh nghèo đói cùng cực.",
          },
        ],
      },

      // Câu 15: Gia nhập Tổ chức Thương mại Thế giới WTO - 2007
      {
        id: "dang_15",
        character: "Ban Chấp hành Trung ương - Năm 2007",
        situation:
          "Xu thế toàn cầu hóa đang diễn ra mạnh mẽ. Việt Nam đứng trước cơ hội lớn gia nhập Tổ chức Thương mại Thế giới (WTO). Điều này giúp thu hút đầu tư lớn nhưng cũng tăng sức ép cạnh tranh khốc liệt lên nền sản xuất trong nước. Bạn quyết sách thế nào?",
        philosophicalContext: "Đấu tranh và Thống nhất giữa các mặt đối lập",
        dialecticLaw:
          "Sự thống nhất và đấu tranh giữa nội lực (kinh tế trong nước) và ngoại lực (hội nhập quốc tế). Hội nhập mở ra cơ hội phát triển (thống nhất) nhưng đồng thời tạo ra sự cạnh tranh khốc liệt (đấu tranh). Giải quyết bằng cách nâng cao sức cạnh tranh trong nước để chuyển hóa mâu thuẫn.",
        yearContext: "2007",
        historicalQuote:
          "Hội nhập quốc tế là sự nghiệp của toàn dân; kết hợp sức mạnh dân tộc với sức mạnh thời đại để xây dựng đất nước. (Nghị quyết Trung ương)",
        leftChoice: {
          text: "Từ chối gia nhập WTO để bảo hộ doanh nghiệp",
          effects: { finance: -15, people: -10, military: 0, religion: -15 },
        },
        rightChoice: {
          text: "Gia nhập WTO, chủ động hội nhập kinh tế",
          effects: { finance: 30, people: 20, military: 10, religion: 25 },
        },
        multipleChoices: [
          {
            id: "dang15_a",
            text: "Gia nhập WTO, chủ động hội nhập kinh tế quốc tế gắn liền củng cố nội lực",
            description: "Giải quyết biện chứng mâu thuẫn giữa hội nhập ngoại lực và bảo vệ nội lực.",
            effects: { finance: 30, people: 20, military: 10, religion: 25 },
            historicalNote:
              "Việt Nam chính thức gia nhập WTO vào ngày 11/1/2007, mở ra thời kỳ hội nhập sâu rộng, kinh tế đối ngoại phát triển mạnh mẽ.",
            isCorrect: true,
          },
          {
            id: "dang15_b",
            text: "Từ chối gia nhập WTO để bảo hộ tuyệt đối các doanh nghiệp nội địa",
            description: "Trốn tránh mâu thuẫn hội nhập quốc tế, rơi vào bảo thủ khép kín.",
            effects: { finance: -20, people: -15, military: 0, religion: -20 },
            historicalNote:
              "Bỏ lỡ cơ hội tiếp cận dòng vốn đầu tư nước ngoài FDI và thị trường xuất khẩu toàn cầu rộng lớn.",
          },
          {
            id: "dang15_c",
            text: "Mở cửa hoàn toàn nền kinh tế mà không có bất kỳ rào cản hay chuẩn bị pháp lý bảo vệ nào",
            description: "Thống nhất một chiều phiến diện, bỏ qua mặt đấu tranh bảo vệ lợi ích nội bộ.",
            effects: { finance: 5, people: -20, military: -5, religion: -15 },
            historicalNote:
              "Hàng hóa giá rẻ nước ngoài tràn ngập sẽ bóp nghẹt toàn bộ các ngành sản xuất non trẻ trong nước và tăng tỷ lệ thất nghiệp.",
          },
          {
            id: "dang15_d",
            text: "Chỉ giao thương với các nước đồng minh kinh tế cũ, đóng cửa với phương Tây",
            description: "Hạn chế mối liên hệ phát triển đa phương hóa, đa dạng hóa.",
            effects: { finance: -10, people: -10, military: 5, religion: -10 },
            historicalNote:
              "Thu hẹp cơ hội phát triển kinh tế khi bỏ qua các thị trường tiêu thụ phát triển lớn của thế giới.",
          },
        ],
      },
    ],
  },
];
