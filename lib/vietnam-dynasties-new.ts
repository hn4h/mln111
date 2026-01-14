import type { Dynasty, Card } from "./types"

// Các triều đại Việt Nam - Dựa trên JSON chuẩn
export const vietnamDynasties: Dynasty[] = [
  {
    id: "ly",
    name: "Nhà Lý",
    period: "1009 - 1225",
    description: "Triều đại đầu tiên độc lập lâu dài, phát triển văn hóa Phật giáo và xây dựng đất nước",
    icon: "🏛️",
    startingStats: { finance: 50, people: 50, military: 50, religion: 50 },
    cards: [
      // Câu 1: Ban chiếu đại xá - 1009
      {
        id: "ly_1",
        character: "Lý Thái Tổ - Năm 1009",
        situation:
          "Lý Công Uẩn vừa lên ngôi, triều chính chưa ổn định, lòng dân còn dao động. Bạn cần hành động để củng cố vị thế.",
        philosophicalContext: "Đức trị vs Lực trị",
        dialecticLaw: "Xã hội cần sự ổn định và đồng thuận",
        yearContext: "1009",
        historicalQuote: "Mới lên ngôi phải xá tội cho thiên hạ, lấy lòng nhân từ mà cảm hóa muôn dân. (Đại Việt sử ký toàn thư)",
        leftChoice: {
          text: "Giữ luật cũ, tránh xáo trộn",
          effects: { finance: 5, people: -5, military: 0, religion: 0 },
        },
        rightChoice: {
          text: "Ban chiếu đại xá, xoa dịu lòng dân (lịch sử thật)",
          effects: { finance: -5, people: 15, military: 0, religion: 5 },
        },
        multipleChoices: [
          {
            id: "ly1_a",
            text: "Ban chiếu đại xá, xoa dịu lòng dân",
            description: "Nhân từ và đúng đắn (lịch sử thật)",
            effects: { finance: -5, people: 15, military: 0, religion: 5 },
            historicalNote: "Lý Thái Tổ đã ban chiếu đại xá ngay sau khi lên ngôi, giúp ổn định xã hội và lòng dân."
          },
          {
            id: "ly1_b",
            text: "Giữ nguyên luật cũ, tránh xáo trộn",
            description: "An toàn nhưng thiếu cảm hóa",
            effects: { finance: 5, people: -5, military: 0, religion: 0 },
            historicalNote: "Không có hành động mới sẽ không tạo được niềm tin với nhân dân."
          },
          {
            id: "ly1_c",
            text: "Trấn áp tàn dư nhà Lê",
            description: "Mạnh tay nhưng mất lòng dân",
            effects: { finance: 5, people: -15, military: 15, religion: 0 },
            historicalNote: "Dùng vũ lực sẽ gây bất ổn và làm mất lòng dân trong thời kỳ chuyển giao."
          },
          {
            id: "ly1_d",
            text: "Dựa vào giới tăng lữ để ổn định xã hội",
            description: "Tâm linh nhưng chưa đủ",
            effects: { finance: -5, people: 5, military: -5, religion: 15 },
            historicalNote: "Chỉ dựa vào tôn giáo chưa đủ, cần có chính sách cụ thể cho dân."
          }
        ],
      },
      // Câu 2: Dời đô về Thăng Long - 1010
      {
        id: "ly_2",
        character: "Lý Thái Tổ - Năm 1010",
        situation:
          "Hoa Lư hiểm trở nhưng chật hẹp, Đại La thuận lợi phát triển lâu dài. Bạn phải quyết định vấn đề kinh đô.",
        philosophicalContext: "Bảo thủ vs Tiến bộ",
        dialecticLaw: "Quy luật phủ định của phủ định - Từ bỏ cái cũ để phát triển cái mới",
        yearContext: "1010",
        historicalQuote: "Đất Đại La, thuộc trấn Bắc Thành, rồng cuộn, hổ ngồi, nơi tứ thời tụ hội, là chốn đất vương khí. (Chiếu dời đô)",
        leftChoice: {
          text: "Giữ đô ở Hoa Lư",
          effects: { finance: 5, people: -10, military: -5, religion: 0 },
        },
        rightChoice: {
          text: "Dời đô ra Thăng Long (lịch sử thật)",
          effects: { finance: -10, people: 15, military: 10, religion: 5 },
        },
        multipleChoices: [
          {
            id: "ly2_a",
            text: "Dời đô ra Thăng Long",
            description: "Quyết đoán và đúng đắn (lịch sử thật)",
            effects: { finance: -10, people: 15, military: 10, religion: 5 },
            historicalNote: "Lý Thái Tổ dời đô năm 1010, tạo nền tảng cho sự phát triển lâu dài của đất nước."
          },
          {
            id: "ly2_b",
            text: "Giữ đô ở Hoa Lư",
            description: "Bảo thủ, hạn chế phát triển",
            effects: { finance: 5, people: -10, military: -5, religion: 0 },
            historicalNote: "Hoa Lư địa thế hiểm trở nhưng hẹp, không có điều kiện phát triển kinh tế văn hóa."
          },
          {
            id: "ly2_c",
            text: "Dời đô nhưng giữ Hoa Lư làm căn cứ quân sự",
            description: "Thận trọng nhưng tốn kém",
            effects: { finance: -15, people: 10, military: 15, religion: 0 },
            historicalNote: "Duy trì hai hệ thống tốn kém nguồn lực, chia nhỏ sức mạnh quốc gia."
          },
          {
            id: "ly2_d",
            text: "Trì hoãn dời đô để củng cố triều chính",
            description: "Dè dặt, bỏ lỡ thời cơ",
            effects: { finance: 10, people: -5, military: 0, religion: -5 },
            historicalNote: "Chờ đợi quá lâu sẽ bỏ lỡ thời cơ phát triển và mất đi khí thế."
          }
        ],
      },
      // Câu 3: Phật giáo trong triều đình - Thế kỷ XI
      {
        id: "ly_3",
        character: "Nhà Lý - Thế kỷ XI",
        situation:
          "Phật giáo phát triển mạnh, ảnh hưởng sâu vào triều đình. Bạn phải quyết định vai trò của tăng lữ trong chính sự.",
        philosophicalContext: "Tâm linh vs Hành chính",
        dialecticLaw: "Đời sống tinh thần ảnh hưởng đến xã hội",
        yearContext: "Thế kỷ XI",
        historicalQuote: "Phật pháp rộng lớn, giúp nước giúp dân, nhưng phải biết cân bằng. (Thiền sư Vạn Hạnh)",
        leftChoice: {
          text: "Hạn chế vai trò Phật giáo",
          effects: { finance: 5, people: -5, military: 5, religion: -15 },
        },
        rightChoice: {
          text: "Trọng dụng sư tăng trong triều (lịch sử thật)",
          effects: { finance: -10, people: 5, military: -5, religion: 20 },
        },
        multipleChoices: [
          {
            id: "ly3_a",
            text: "Trọng dụng sư tăng trong triều",
            description: "Theo lịch sử thật",
            effects: { finance: -10, people: 5, military: -5, religion: 20 },
            historicalNote: "Nhà Lý trọng dụng các cao tăng như Vạn Hạnh, Thường Chiếu làm cố vấn triều đình."
          },
          {
            id: "ly3_b",
            text: "Giữ cân bằng giữa tăng lữ và quan lại",
            description: "Trung dung, cân bằng",
            effects: { finance: -5, people: 5, military: 0, religion: 10 },
            historicalNote: "Cân bằng giúp tránh xung đột nhưng không phát huy được vai trò của Phật giáo."
          },
          {
            id: "ly3_c",
            text: "Hạn chế vai trò Phật giáo",
            description: "Thực dụng nhưng mất hỗ trợ tinh thần",
            effects: { finance: 5, people: -5, military: 5, religion: -15 },
            historicalNote: "Hạn chế Phật giáo sẽ mất đi nguồn lực tinh thần to lớn của xã hội."
          },
          {
            id: "ly3_d",
            text: "Loại bỏ tăng lữ khỏi chính sự",
            description: "Cực đoan, gây mất ổn định",
            effects: { finance: 10, people: -15, military: 5, religion: -25 },
            historicalNote: "Loại bỏ hoàn toàn sẽ gây xung đột với niềm tin của nhân dân."
          }
        ],
      },
      // Câu 4: Xây dựng chùa lớn - Thế kỷ XI
      {
        id: "ly_4",
        character: "Nhà Lý - Thế kỷ XI",
        situation:
          "Triều đình đề xuất xây dựng nhiều chùa lớn để phát triển Phật giáo và văn hóa. Ngân khố cần phân bổ hợp lý.",
        philosophicalContext: "Tâm linh vs Vật chất",
        dialecticLaw: "Đời sống vật chất và tinh thần phải hài hòa",
        yearContext: "Thế kỷ XI",
        historicalQuote: "Xây chùa xây tháp, để lại công đức muôn đời, dân được sống trong bóng Phật. (Sử ký)",
        leftChoice: {
          text: "Cấm xây chùa mới",
          effects: { finance: 15, people: -15, military: 5, religion: -20 },
        },
        rightChoice: {
          text: "Xây dựng chùa quy mô lớn (lịch sử thật)",
          effects: { finance: -15, people: 10, military: -5, religion: 20 },
        },
        multipleChoices: [
          {
            id: "ly4_a",
            text: "Xây dựng chùa quy mô lớn",
            description: "Theo lịch sử thật, phát triển văn hóa",
            effects: { finance: -15, people: 10, military: -5, religion: 20 },
            historicalNote: "Nhà Lý xây dựng nhiều chùa lớn như Diên Hựu, Bảo Thiên, tạo nền văn hóa Phật giáo phát triển."
          },
          {
            id: "ly4_b",
            text: "Chỉ xây chùa vừa và nhỏ",
            description: "Tiết kiệm, cân bằng",
            effects: { finance: -5, people: 5, military: 0, religion: 10 },
            historicalNote: "Xây chùa nhỏ tiết kiệm nhưng không tạo được tác động lớn đến văn hóa xã hội."
          },
          {
            id: "ly4_c",
            text: "Tạm dừng xây chùa, ưu tiên kho lương",
            description: "Thực dụng nhưng mất cơ hội văn hóa",
            effects: { finance: 10, people: -5, military: 5, religion: -10 },
            historicalNote: "Chỉ chú trọng vật chất mà bỏ qua tinh thần sẽ làm mất đi bản sắc văn hóa."
          },
          {
            id: "ly4_d",
            text: "Cấm xây chùa mới",
            description: "Cực đoan, gây phản ứng",
            effects: { finance: 15, people: -15, military: 5, religion: -20 },
            historicalNote: "Cấm hoàn toàn sẽ đi ngược lại xu hướng xã hội và gây bất bình."
          }
        ],
      },
      // Câu 5: Chiến tranh với Tống - 1075
      {
        id: "ly_5",
        character: "Lý Thường Kiệt - Năm 1075",
        situation:
          "Nhà Tống chuẩn bị xâm lược Đại Việt. Bạn phải quyết định chiến lược.",
        philosophicalContext: "Phòng thủ vs Chủ động",
        dialecticLaw: "Hành động quyết liệt có thể tạo bước ngoặt",
        yearContext: "1075",
        historicalQuote: "Nam quốc sơn hà Nam đế cư, tiệt nhiên định phận tại thiên thư. (Lý Thường Kiệt)",
        leftChoice: {
          text: "Lập phòng tuyến chờ giặc",
          effects: { finance: -10, people: -5, military: 15, religion: 0 },
        },
        rightChoice: {
          text: "Đánh trước sang đất Tống (lịch sử thật)",
          effects: { finance: -15, people: -10, military: 25, religion: 0 },
        },
        multipleChoices: [
          {
            id: "ly5_a",
            text: "Đánh trước sang đất Tống",
            description: "Chủ động và đúng đắn (lịch sử thật)",
            effects: { finance: -15, people: -10, military: 25, religion: 0 },
            historicalNote: "Lý Thường Kiệt tấn công phủ đầu năm 1075, giành thắng lợi tại Như Nguyệt."
          },
          {
            id: "ly5_b",
            text: "Lập phòng tuyến chờ giặc",
            description: "Thận trọng nhưng thụ động",
            effects: { finance: -10, people: -5, military: 15, religion: 0 },
            historicalNote: "Phòng thủ giúp giảm tổn thất nhưng mất quyền chủ động trong chiến tranh."
          },
          {
            id: "ly5_c",
            text: "Cầu hòa, dâng cống",
            description: "Tránh chiến nhưng mất độc lập",
            effects: { finance: -5, people: -10, military: -10, religion: 0 },
            historicalNote: "Chấp nhận làm phụ thuộc sẽ mất độc lập và tinh thần dân tộc."
          },
          {
            id: "ly5_d",
            text: "Tăng cường tuyển quân, chưa giao chiến",
            description: "Bị động, mất thời cơ",
            effects: { finance: -10, people: -5, military: 10, religion: 0 },
            historicalNote: "Chuẩn bị lâu sẽ để địch chủ động tấn công."
          }
        ],
      },
      // Câu 6: Chiến sự tại sông Như Nguyệt - 1076
      {
        id: "ly_6",
        character: "Lý Thường Kiệt - Năm 1076",
        situation:
          "Quân Tống tiến sâu, chiến sự căng thẳng tại sông Như Nguyệt. Bạn phải lựa chọn chiến thuật.",
        philosophicalContext: "Quyết đoán vs Dè dặt",
        dialecticLaw: "Chiến thuật quyết định thắng bại",
        yearContext: "1076",
        historicalQuote: "Giữ vững thành trì, không để giặc vượt qua, đó là chiến thắng. (Lý Thường Kiệt)",
        leftChoice: {
          text: "Rút quân bảo toàn lực lượng",
          effects: { finance: -5, people: -10, military: -10, religion: 0 },
        },
        rightChoice: {
          text: "Lập phòng tuyến cố thủ (lịch sử thật)",
          effects: { finance: -10, people: -5, military: 20, religion: 5 },
        },
        multipleChoices: [
          {
            id: "ly6_a",
            text: "Lập phòng tuyến cố thủ",
            description: "Chiến thuật đúng đắn (lịch sử thật)",
            effects: { finance: -10, people: -5, military: 20, religion: 5 },
            historicalNote: "Lý Thường Kiệt lập phòng tuyến vững chắc tại Như Nguyệt, giành thắng lợi quyết định."
          },
          {
            id: "ly6_b",
            text: "Chủ động phản công mạnh",
            description: "Tích cực nhưng rủi ro cao",
            effects: { finance: -15, people: -10, military: 25, religion: 0 },
            historicalNote: "Phản công mạnh có thể thắng lớn nhưng cũng dễ bị tổn thất nặng."
          },
          {
            id: "ly6_c",
            text: "Rút quân bảo toàn lực lượng",
            description: "Bảo thủ, mất lợi thế",
            effects: { finance: -5, people: -10, military: -10, religion: 0 },
            historicalNote: "Rút quân sẽ để địch tiến sâu và mất lợi thế chiến trường."
          },
          {
            id: "ly6_d",
            text: "Cầu viện tinh thần tôn giáo",
            description: "Tinh thần nhưng thiếu chiến thuật",
            effects: { finance: 0, people: 5, military: 5, religion: 10 },
            historicalNote: "Tinh thần quan trọng nhưng phải kết hợp với chiến thuật hợp lý."
          }
        ],
      },
      // Câu 7: Khích lệ tinh thần quân sĩ - 1076
      {
        id: "ly_7",
        character: "Lý Thường Kiệt - Năm 1076",
        situation:
          "Tinh thần quân sĩ dao động trước thế giặc. Bạn cần khích lệ quân lính.",
        philosophicalContext: "Tinh thần vs Vật chất",
        dialecticLaw: "Tinh thần là sức mạnh quan trọng nhất",
        yearContext: "1076",
        historicalQuote: "Nam quốc sơn hà Nam đế cư, tiệt nhiên định phận tại thiên thư. (Lý Thường Kiệt)",
        leftChoice: {
          text: "Siết chặt quân luật",
          effects: { finance: 0, people: -5, military: 15, religion: 0 },
        },
        rightChoice: {
          text: "Đọc 'Nam quốc sơn hà' khích lệ tinh thần (lịch sử thật)",
          effects: { finance: 0, people: 10, military: 10, religion: 5 },
        },
        multipleChoices: [
          {
            id: "ly7_a",
            text: "Đọc 'Nam quốc sơn hà' khích lệ tinh thần",
            description: "Tinh thần mạnh mẽ (lịch sử thật)",
            effects: { finance: 0, people: 10, military: 10, religion: 5 },
            historicalNote: "Lý Thường Kiệt đọc bài thơ 'Nam quốc sơn hà' để khích lệ tinh thần quân sĩ, tạo sự đoàn kết mạnh mẽ."
          },
          {
            id: "ly7_b",
            text: "Tăng thưởng vật chất cho quân lính",
            description: "Thực dụng nhưng tốn kém",
            effects: { finance: -10, people: 5, military: 10, religion: 0 },
            historicalNote: "Vật chất quan trọng nhưng không bằng sức mạnh tinh thần trong lúc khó khăn."
          },
          {
            id: "ly7_c",
            text: "Siết chặt quân luật",
            description: "Cứng rắn nhưng thiếu cảm hóa",
            effects: { finance: 0, people: -5, military: 15, religion: 0 },
            historicalNote: "Quân luật nghiêm khắc cần thiết nhưng phải kết hợp với cảm hóa tinh thần."
          },
          {
            id: "ly7_d",
            text: "Rút bớt quân để tránh tổn thất",
            description: "Bảo thủ quá mức, suy yếu quân lực",
            effects: { finance: 5, people: -5, military: -15, religion: 0 },
            historicalNote: "Rút quân khi tinh thần xuống thấp sẽ làm mất hẳn lòng chiến đấu."
          }
        ],
      },
      // Câu 8: Sau chiến thắng - Sau 1077
      {
        id: "ly_8",
        character: "Lý Thánh Tông - Sau 1077",
        situation:
          "Đại Việt giành ưu thế trước nhà Tống. Bạn cần quyết định bước tiếp theo.",
        philosophicalContext: "Chiến tranh vs Hòa bình",
        dialecticLaw: "Chiến thắng cần biết dừng đúng lúc",
        yearContext: "Sau 1077",
        historicalQuote: "Thắng nhưng biết dừng, đó là đại trí. (Sử ký)",
        leftChoice: {
          text: "Tiếp tục truy kích",
          effects: { finance: -10, people: -5, military: 15, religion: 0 },
        },
        rightChoice: {
          text: "Chủ động giảng hòa (lịch sử thật)",
          effects: { finance: 10, people: 10, military: -5, religion: 0 },
        },
        multipleChoices: [
          {
            id: "ly8_a",
            text: "Chủ động giảng hòa",
            description: "Khôn ngoan và đúng đắn (lịch sử thật)",
            effects: { finance: 10, people: 10, military: -5, religion: 0 },
            historicalNote: "Lý Thánh Tông chủ động giảng hòa sau chiến thắng, thể hiện sự khôn ngoan trong ngoại giao."
          },
          {
            id: "ly8_b",
            text: "Tiếp tục truy kích",
            description: "Tích cực nhưng rủi ro cao",
            effects: { finance: -10, people: -5, military: 15, religion: 0 },
            historicalNote: "Truy kích có thể thắng lớn hơn nhưng cũng dễ gây chiến tranh kéo dài."
          },
          {
            id: "ly8_c",
            text: "Rút quân phòng thủ biên giới",
            description: "An toàn, giữ vững thành quả",
            effects: { finance: 5, people: 5, military: 0, religion: 0 },
            historicalNote: "Phòng thủ biên giới là lựa chọn an toàn nhưng bỏ lỡ cơ hội ngoại giao."
          },
          {
            id: "ly8_d",
            text: "Cắt giảm quân đội để tiết kiệm",
            description: "Tiết kiệm nhưng suy yếu phòng thủ",
            effects: { finance: 10, people: -5, military: -15, religion: 0 },
            historicalNote: "Cắt giảm quân đội quá nhanh có thể làm suy yếu khả năng phòng thủ."
          }
        ],
      },
    ],
  },
]
