import type { Dynasty, Card } from "./types"

// Các triều đại Việt Nam - Dựa trên sự kiện lịch sử có thật
export const vietnamDynasties: Dynasty[] = [
  {
    id: "ly",
    name: "Nhà Lý",
    period: "1009 - 1225",
    description: "Triều đại đầu tiên độc lập lâu dài, phát triển văn hóa Phật giáo và xây dựng đất nước",
    icon: "🏛️",
    startingStats: { finance: 50, people: 50, military: 50, religion: 50 },
    cards: [
      // Câu 1: Ban chiếu đại xá - 1009 (LỄ)
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
          "Sau khi lên ngôi, bạn phải quyết định di đô từ Hoa Lư về Đại La (Thăng Long). Đất đai phì nhiêu, giao thông thuận lợi, nhưng việc di dời tốn kém và gây xáo trộn.",
        philosophicalContext: "Bảo thủ vs Tiến bộ",
        dialecticLaw: "Quy luật phủ định của phủ định - Từ bỏ cái cũ để phát triển cái mới",
        yearContext: "1010",
        historicalQuote: "Đất Đại La, thuộc trấn Bắc Thành, rồng cuộn, hổ ngồi, nơi tứ thời tụ hội, là chốn đất vương khí. Trẫm tối muốn lập kinh đô tại đây. (Chiếu dời đô của Lý Thái Tổ)",
        leftChoice: {
          text: "Giữ nguyên Hoa Lư, củng cố phòng thủ",
          effects: { finance: 10, people: -45, military: -25, religion: -20 },
        },
        rightChoice: {
          text: "Dời đô về Thăng Long (lịch sử thật)",
          effects: { finance: 3, people: 2, military: 3, religion: 2 },
        },
        multipleChoices: [
          {
            id: "ly1_a",
            text: "Giữ nguyên Hoa Lư, tăng cường phòng thủ",
            description: "An toàn nhưng khó phát triển",
            effects: { finance: 10, people: -45, military: -25, religion: -20 },
            historicalNote: "Hoa Lư là kinh đô cũ, địa thế hiểm trở nhưng hẹp, không có điều kiện phát triển kinh tế và văn hóa."
          },
          {
            id: "ly1_b",
            text: "Dời đô từ từ, xây dựng trước khi di chuyển",
            description: "Thận trọng nhưng tốn kém",
            effects: { finance: -15, people: -10, military: 0, religion: 0 },
            historicalNote: "Chuẩn bị kỹ càng nhưng tốn thời gian và nguồn lực, có thể bỏ lỡ thời cơ phát triển."
          },
          {
            id: "ly1_c",
            text: "Dời đô ngay về Thăng Long",
            description: "Quyết đoán và đúng đắn (lịch sử thật)",
            effects: { finance: 3, people: 2, military: 3, religion: 2 },
            historicalNote: "Đây là quyết định lịch sử của Lý Thái Tổ năm 1010. Chiếu dời đô nổi tiếng: 'Thăng Long địa thế rồng cuộn, hổ ngồi, tứ phương tụ hội'."
          },
          {
            id: "ly1_d",
            text: "Lập hai kinh đô song song",
            description: "Thỏa hiệp nhưng chia nhỏ nguồn lực",
            effects: { finance: -25, people: -15, military: -10, religion: -5 },
            historicalNote: "Duy trì hai hệ thống hành chính tốn kém gấp đôi, không có triều đại nào thành công với mô hình này."
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

      // Câu 5: Chiến tranh với Tống - Đánh phủ đầu
      {
        id: "ly_5",
        character: "Lý Thường Kiệt - Năm 1075",
        situation:
          "Quân Tống chuẩn bị xâm lược. Lý Thường Kiệt đề xuất đánh phủ đầu, tấn công vào đất Tống trước. Triều thần lo sợ động binh tốn kém và kích động Tống.",
        philosophicalContext: "Phòng thủ vs Chủ động",
        dialecticLaw: "Hành động quyết liệt có thể tạo bước ngoặt",
        yearContext: "1075",
        historicalQuote: "Nam quốc sơn hà Nam đế cư, tiệt nhiên định phận tại thiên thư. Như hà nghịch lỗ lai xâm phạm, nhữ đẳng hành khan thủ bại hư! (Lý Thường Kiệt)",
        leftChoice: {
          text: "Chờ địch đến, phòng thủ thụ động",
          effects: { finance: 10, people: -60, military: -55, religion: -15 },
        },
        rightChoice: {
          text: "Tấn công phủ đầu vào Tống (lịch sử thật)",
          effects: { finance: 2, people: 3, military: 5, religion: 3 },
        },
        multipleChoices: [
          {
            id: "ly5_a",
            text: "Chờ địch đến, phòng thủ thụ động",
            description: "An toàn nhưng mất chủ động",
            effects: { finance: 10, people: -60, military: -55, religion: -15 },
            historicalNote: "Để địch chủ động tấn công sẽ làm mất tinh thần quân dân, dễ bị áp đảo về số lượng."
          },
          {
            id: "ly5_b",
            text: "Tấn công phủ đầu như Lý Thường Kiệt",
            description: "Chủ động và đúng đắn (lịch sử thật)",
            effects: { finance: 2, people: 3, military: 5, religion: 3 },
            historicalNote: "Lý Thường Kiệt đã tấn công phủ đầu năm 1075, giành thắng lợi tại Như Nguyệt, làm chủ thế trận."
          },
          {
            id: "ly5_c",
            text: "Cầu hòa với Tống bằng cống nạp",
            description: "Tránh chiến tranh nhưng mất danh dự",
            effects: { finance: 5, people: -50, military: -45, religion: -20 },
            historicalNote: "Chấp nhận làm nước phụ thuộc sẽ mất độc lập và làm suy yếu tinh thần dân tộc."
          }
        ],
      },
      // Câu 6: Chiến thắng Như Nguyệt - Rút quân
      {
        id: "ly_6",
        character: "Lý Thường Kiệt - Năm 1077",
        situation:
          "Sau chiến thắng Như Nguyệt, tướng Lý Thường Kiệt muốn tiến quân sâu vào đất Tống. Quân đã mệt mỏi, ngân khố cạn kiệt nhưng sĩ khí cao.",
        philosophicalContext: "Trả thù vs Khôn ngoan",
        dialecticLaw: "Biết đủ là đủ - Dừng đúng lúc tránh chuyển thắng thành bại",
        yearContext: "1077",
        historicalQuote: "Chiến tranh là phương tiện, hòa bình là mục đích. Biết thắng, biết dừng, đó là đại trí. (Binh thư yếu lược)",
        leftChoice: {
          text: "Tiến quân sâu, tận diệt Tống",
          effects: { finance: -65, people: -55, military: -45, religion: -25 },
        },
        rightChoice: {
          text: "Rút quân, ký hòa ước (lịch sử thật)",
          effects: { finance: 6, people: 3, military: 4, religion: 3 },
        },
        multipleChoices: [
          {
            id: "ly6_a",
            text: "Tiến quân sâu, tận diệt quân Tống",
            description: "Tham chiến công, mất cả chiến lược",
            effects: { finance: -65, people: -55, military: -45, religion: -25 },
            historicalNote: "Quân đã kiệt sức, tiến sâu vào đất Tống sẽ gặp quân viện và có thể bị bao vây tiêu diệt."
          },
          {
            id: "ly6_b",
            text: "Giữ vùng chiếm đóng, đặt đồn biên",
            description: "Chiếm lãnh thổ nhưng tốn kém duy trì",
            effects: { finance: -30, people: -25, military: -15, religion: -10 },
            historicalNote: "Duy trì quân đội ở đất địch tốn kém lớn, dễ bị tập kích và thiếu tiếp tế."
          },
          {
            id: "ly6_c",
            text: "Rút quân về, ký hòa ước",
            description: "Khôn ngoan và đúng đắn (lịch sử thật)",
            effects: { finance: 6, people: 3, military: 4, religion: 3 },
            historicalNote: "Lý Thánh Tông và Lý Thường Kiệt đã rút quân sau chiến thắng, ký hiệp ước hòa bình với Tống."
          },
          {
            id: "ly6_d",
            text: "Đòi Tống bồi thường chiến phí lớn",
            description: "Tham lợi, có thể gây chiến tranh kéo dài",
            effects: { finance: -20, people: -30, military: -20, religion: -15 },
            historicalNote: "Đòi hỏi quá đáng có thể khiến Tống tức giận, gửi quân đánh trả và chiến tranh kéo dài."
          }
        ],
      },
      // Câu 7: Cải cách ruộng đất
      {
        id: "ly_7",
        character: "Lý Nhân Tông - Năm 1089",
        situation:
          "Quý tộc chiếm nhiều ruộng đất, nông dân thiếu đất canh tác. Vua muốn hạn chế số ruộng quý tộc được giữ, chia cho dân nghèo. Quý tộc phản đối kịch liệt.",
        philosophicalContext: "Công bằng vs Ổn định",
        dialecticLaw: "Mâu thuẫn lợi ích giai cấp - Công bằng xã hội cần thiết",
        yearContext: "1089",
        historicalQuote: "Dân là gốc nước, gốc vững nước bền. Cho dân có đất, đất có người cày, đó là đạo an dân. (Lời vua Lý)",
        leftChoice: {
          text: "Giữ nguyên hiện trạng, không cải cách",
          effects: { finance: 15, people: -75, military: 25, religion: -15 },
        },
        rightChoice: {
          text: "Cải cách ruộng đất (lịch sử thật)",
          effects: { finance: 2, people: 4, military: -2, religion: 3 },
        },
        multipleChoices: [
          {
            id: "ly7_a",
            text: "Giữ nguyên, không can thiệp",
            description: "Tránh xung đột nhưng bất công",
            effects: { finance: 15, people: -75, military: 25, religion: -15 },
            historicalNote: "Để quý tộc chiếm đoạt ruộng đất sẽ gây bất bình trong dân, dễ dẫn đến nội loạn."
          },
          {
            id: "ly7_b",
            text: "Cải cách từ từ, hạn chế diện tích",
            description: "Trung dung, ít rủi ro",
            effects: { finance: 5, people: -15, military: 5, religion: -5 },
            historicalNote: "Cải cách nhẹ nhàng giúp giảm xung đột nhưng không giải quyết được vấn đề căn bản."
          },
          {
            id: "ly7_c",
            text: "Cải cách mạnh, chia đều ruộng đất",
            description: "Công bằng và đúng đắn (lịch sử thật)",
            effects: { finance: 2, people: 4, military: -2, religion: 3 },
            historicalNote: "Nhà Lý đã thực hiện cải cách ruộng đất, hạn chế số ruộng quý tộc được giữ, chia cho nông dân."
          }
        ],
      },
      // Câu 8: Xây đê điều thủy lợi
      {
        id: "ly_8",
        character: "Lý Thánh Tông - Năm 1108",
        situation:
          "Hạn hán kéo dài, mùa màng thất bát. Quan nho đề xuất đào kênh, xây đê điều. Quan Phật giáo nói nên xây tháp cầu mưa. Ngân sách chỉ đủ cho một phương án.",
        philosophicalContext: "Khoa học vs Mê tín",
        dialecticLaw: "Thực tiễn vật chất quyết định, không phải ý niệm",
        yearContext: "1108",
        historicalQuote: "Nước đến đâu lúa đến đó, có đê có kênh, dân no ấm. Đó là việc thật, không phải lời cầu xin trời Phật. (Đại Việt sử lược)",
        leftChoice: {
          text: "Xây tháp cầu mưa theo lời sư",
          effects: { finance: -15, people: -55, military: -25, religion: 60 },
        },
        rightChoice: {
          text: "Xây đê đào kênh thủy lợi (lịch sử thật)",
          effects: { finance: 2, people: 4, military: 3, religion: -3 },
        },
      },
      // Câu 9: Quan hệ với Tống - Giữ độc lập
      {
        id: "ly_9",
        character: "Lý Nhân Tông - Năm 1095",
        situation:
          "Tống đề nghị mở thương mại nhưng yêu cầu Đại Việt phải thừa nhận mình là 'nước phụ thuộc'. Thương mại có lợi nhưng mất danh nghĩa độc lập.",
        philosophicalContext: "Lợi ích vs Danh dự",
        dialecticLaw: "Độc lập dân tộc là giá trị tối cao",
        yearContext: "1095",
        historicalQuote: "Thà hy sinh tất cả, chứ không chịu làm nô lệ. Danh nghĩa quốc gia quan trọng hơn vàng bạc châu báu. (Lý triều quốc sử)",
        leftChoice: {
          text: "Chấp nhận danh nghĩa 'phụ thuộc' để buôn bán",
          effects: { finance: 45, people: -75, military: -60, religion: -25 },
        },
        rightChoice: {
          text: "Từ chối, giữ độc lập hoàn toàn (lịch sử thật)",
          effects: { finance: 2, people: 3, military: 5, religion: 4 },
        },
      },
      // Câu 10: Mở trường học công
      {
        id: "ly_10",
        character: "Lý Anh Tông - Năm 1145",
        situation:
          "Vua muốn mở trường học ở các làng, dạy chữ cho con em nông dân. Quý tộc phản đối vì lo dân có học sẽ khó cai trị, đòi đặc quyền.",
        philosophicalContext: "Khai sáng vs Độc quyền",
        dialecticLaw: "Giáo dục tạo nền tảng cho phát triển xã hội",
        yearContext: "1145",
        historicalQuote: "Học rộng mới hiểu lẽ, hiểu lẽ mới biết nghĩa. Dân có học là nước văn minh. (Hồng Đức quốc âm thi tập)",
        leftChoice: {
          text: "Chỉ quý tộc được học chữ",
          effects: { finance: -10, people: -75, military: -30, religion: 35 },
        },
        rightChoice: {
          text: "Mở trường cho tất cả dân (lịch sử thật)",
          effects: { finance: 2, people: 4, military: 3, religion: -2 },
        },
      },
      // Câu 11: Chiến tranh với Chăm Pa
      {
        id: "ly_11",
        character: "Lý Thánh Tông - Năm 1069",
        situation:
          "Chăm Pa xâm lược biên giới, cướp phá. Có thể đánh trả để răn đe, hoặc đàm phán để tránh chiến tranh kéo dài tốn kém.",
        philosophicalContext: "Ngoại giao vs Quân sự",
        dialecticLaw: "Hòa bình là mục đích, chiến tranh là phương tiện cuối cùng",
        yearContext: "1069",
        historicalQuote: "Với kẻ xâm lược, không có lựa chọn nào khác ngoài đánh trả kiên quyết. Chỉ khi địch nhận lỗi, ta mới bàn hòa. (Đại Việt sử ký toàn thư)",
        leftChoice: {
          text: "Đàm phán hòa bình ngay",
          effects: { finance: 10, people: -40, military: -60, religion: -10 },
        },
        rightChoice: {
          text: "Chiến tranh răn đe (lịch sử thật)",
          effects: { finance: 2, people: 3, military: 5, religion: 2 },
        },
      },
      // Câu 12: Chính sách thuế
      {
        id: "ly_12",
        character: "Lý Cao Tông - Năm 1175",
        situation:
          "Thuế nông nghiệp quá nặng, nhiều nông dân bỏ ruộng. Quan tài chính lo giảm thuế sẽ thiếu ngân sách. Nhưng giữ thuế cao dân có thể nổi loạn.",
        philosophicalContext: "Ngắn hạn vs Dài hạn",
        dialecticLaw: "Lợi ích trước mắt và lâu dài phải cân bằng",
        yearContext: "1175",
        historicalQuote: "Thuế nhẹ dân vui, dân vui nước yên, nước yên thu thuế lâu dài. Thuế nặng dân khổ, dân khổ bỏ ruộng, cuối cùng không còn thuế thu. (Lời vua Lý Cao Tông)",
        leftChoice: {
          text: "Giữ thuế cao để đủ ngân sách",
          effects: { finance: 35, people: -90, military: -35, religion: -30 },
        },
        rightChoice: {
          text: "Giảm thuế cho dân (lịch sử thật)",
          effects: { finance: 2, people: 4, military: 3, religion: 4 },
        },
        multipleChoices: [
          {
            id: "ly12_a",
            text: "Giữ thuế cao để đủ ngân sách",
            description: "Ngắn hạn có lợi, dài hạn nguy hiểm",
            effects: { finance: 35, people: -90, military: -35, religion: -30 },
            historicalNote: "Thuế nặng làm dân bỏ ruộng, cuối cùng không còn thuế thu, dẫn đến khủng hoảng."
          },
          {
            id: "ly12_b",
            text: "Giảm thuế nhẹ, vừa đủ cân bằng",
            description: "Cân bằng nhưng chưa đủ mạnh",
            effects: { finance: -5, people: 10, military: 5, religion: 5 },
            historicalNote: "Giảm nhẹ giúp cải thiện nhưng chưa giải quyết triệt để vấn đề gánh nặng thuế."
          },
          {
            id: "ly12_c",
            text: "Giảm thuế mạnh cho nông dân",
            description: "Đúng đắn lâu dài (lịch sử thật)",
            effects: { finance: 2, people: 4, military: 3, religion: 4 },
            historicalNote: "Lý Cao Tông đã giảm thuế cho dân: 'Thuế nhẹ dân vui, dân vui nước yên, nước yên thu thuế lâu dài'."
          }
        ],
      },
      // Câu 13: Dịch bệnh - Y học vs mê tín
      {
        id: "ly_13",
        character: "Lý Anh Tông - Năm 1150",
        situation:
          "Dịch bệnh bùng phát. Thầy thuốc muốn điều trị bằng thuốc thảo mộc và cách ly. Đạo sĩ nói bệnh do tà khí, phải làm pháp cúng. Ngân sách chỉ đủ cho một phương án.",
        philosophicalContext: "Khoa học vs Mê tín",
        dialecticLaw: "Chân lý khoa học từ thực tiễn, không từ mê tín",
        yearContext: "1150",
        historicalQuote: "Bệnh có căn do, thuốc có tác dụng. Chữa bệnh bằng thuốc và cách ly, đó là đạo y đức. (Y học cổ truyền Việt Nam)",
        leftChoice: {
          text: "Làm pháp cúng giải tà khí",
          effects: { finance: -25, people: -85, military: -35, religion: 65 },
        },
        rightChoice: {
          text: "Điều trị bằng y học (lịch sử thật)",
          effects: { finance: 2, people: 4, military: 3, religion: -3 },
        },
      },
      // Câu 14: Tổ chức quân đội chuyên nghiệp
      {
        id: "ly_14",
        character: "Lý Thánh Tông - Năm 1086",
        situation:
          "Quân đội hiện tại do quý tộc chỉ huy, thiếu kỷ luật. Vua muốn tổ chức quân đội chuyên nghiệp với tướng tài. Quý tộc lo mất quyền lực quân sự.",
        philosophicalContext: "Hiệu quả vs Quyền lực",
        dialecticLaw: "Hình thức tổ chức phải phù hợp yêu cầu thực tiễn",
        yearContext: "1086",
        historicalQuote: "Quân có kỷ luật, tướng có tài năng, đó là quân tinh nhuệ. Không phân quý tiện, chỉ lấy tài làm trọng. (Binh thư của Lý Thường Kiệt)",
        leftChoice: {
          text: "Giữ quân đội do quý tộc lãnh đạo",
          effects: { finance: 10, people: -35, military: -65, religion: 25 },
        },
        rightChoice: {
          text: "Tổ chức quân đội chuyên nghiệp (lịch sử thật)",
          effects: { finance: 2, people: 3, military: 5, religion: -2 },
        },
      },
      // Câu 15: Kế vị - Chọn người tài
      {
        id: "ly_15",
        character: "Lý Anh Tông - Năm 1175",
        situation:
          "Hoàng tử cả thông minh, muốn cải cách nhưng quý tộc không ưa. Hoàng tử thứ trung dung, dễ kiểm soát, được quý tộc ủng hộ. Chọn ai kế vị?",
        philosophicalContext: "Cải cách vs Ổn định",
        dialecticLaw: "Cải cách là tất yếu của lịch sử, không thể cản trở",
        yearContext: "1175",
        historicalQuote: "Nước cần người tài trị, không cần người giữ ngôi. Cải cách là sống, bảo thủ là chết. (Đại Việt sử ký)",
        leftChoice: {
          text: "Hoàng tử thứ - An toàn cho quý tộc",
          effects: { finance: 10, people: -65, military: -35, religion: 35 },
        },
        rightChoice: {
          text: "Hoàng tử cả - Người tài (lịch sử thật)",
          effects: { finance: 2, people: 4, military: 4, religion: -2 },
        },
      },
    ],
  },
]
