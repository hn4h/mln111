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
        dialecticLaw: "Quy luật thống nhất và đấu tranh của các mặt đối lập: Trong giai đoạn chuyển giao quyền lực, sự ổn định xã hội cần được xây dựng trên nền tảng đồng thuận chứ không phải áp đặt bằng vũ lực. Đức trị (nhân từ) và lực trị (cứng rắn) là hai mặt đối lập nhưng thống nhất, cần biết vận dụng linh hoạt.",
        yearContext: "1009",
        historicalQuote: "Mới lên ngôi phải xá tội cho thiên hạ, lấy lòng nhân từ mà cảm hóa muôn dân. Người xưa dạy: 'Lòng dân là nền nước, lòng dân hướng về đâu, thiên hạ về đó'. Vậy nên trẫm ban ân xá rộng khắp, để người trong nước đều được an sinh lạc nghiệp. (Chiếu dụ của Lý Thái Tổ - Đại Việt sử ký toàn thư)",
        leftChoice: {
          text: "Giữ luật cũ, tránh xáo trộn",
          effects: { finance: 5, people: -5, military: 0, religion: 0 },
        },
        rightChoice: {
          text: "Ban chiếu đại xá, xoa dịu lòng dân",
          effects: { finance: -2, people: 12, military: 0, religion: 3 },
        },
        multipleChoices: [
          {
            id: "ly1_a",
            text: "Ban chiếu đại xá, xoa dịu lòng dân",
            description: "Nhân từ và đúng đắn",
            effects: { finance: -2, people: 12, military: 0, religion: 3 },
            historicalNote: "Lý Thái Tổ đã ban chiếu đại xá ngay sau khi lên ngôi, giúp ổn định xã hội và lòng dân.",
            isCorrect: true
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
        dialecticLaw: "Quy luật phủ định của phủ định: Sự phát triển là quá trình không ngừng từ bỏ cái cũ lạc hậu để xây dựng cái mới tiến bộ. Hoa Lư đại diện cho quá khứ cũ kỹ, Thăng Long là tương lai phát triển. Dời đô không phải chỉ là thay đổi vị trí địa lý mà là bước chuyển từ tư duy bảo thủ sang tư duy tiến bộ, mở ra kỷ nguyên mới.",
        yearContext: "1010",
        historicalQuote: "Đất Đại La, thuộc trấn Bắc Thành, phía đông giáp biển Đông, phía tây dựa núi Tản Viên, phía nam có sông Đáy làm hào, phía bắc có núi Tam Đảo làm chắn. Rồng cuộn hổ ngồi, địa thế nguy nga, tứ phương tụ hội, là nơi có vương khí. Nếu dựng đô ở đây, truyền nghìn đời còn vững bền. (Chiếu dời đô của Lý Thái Tổ năm 1010)",
        leftChoice: {
          text: "Giữ đô ở Hoa Lư",
          effects: { finance: 5, people: -10, military: -5, religion: 0 },
        },
        rightChoice: {
          text: "Dời đô ra Thăng Long",
          effects: { finance: -6, people: 11, military: 8, religion: 3 },
        },
        multipleChoices: [
          {
            id: "ly2_a",
            text: "Giữ đô ở Hoa Lư",
            description: "Bảo thủ, hạn chế phát triển",
            effects: { finance: 5, people: -10, military: -5, religion: 0 },
            historicalNote: "Hoa Lư địa thế hiểm trở nhưng hẹp, không có điều kiện phát triển kinh tế văn hóa."
          },
          {
            id: "ly2_b",
            text: "Trì hoãn dời đô để củng cố triều chính",
            description: "Dè dặt, bỏ lỡ thời cơ",
            effects: { finance: 10, people: -5, military: 0, religion: -5 },
            historicalNote: "Chờ đợi quá lâu sẽ bỏ lỡ thời cơ phát triển và mất đi khí thế."
          },
          {
            id: "ly2_c",
            text: "Dời đô ra Thăng Long",
            description: "Quyết đoán và đúng đắn",
            effects: { finance: -6, people: 11, military: 8, religion: 3 },
            historicalNote: "Lý Thái Tổ dời đô năm 1010, tạo nền tảng cho sự phát triển lâu dài của đất nước.",
            isCorrect: true
          },
          {
            id: "ly2_d",
            text: "Dời đô nhưng giữ Hoa Lư làm căn cứ quân sự",
            description: "Thận trọng nhưng tốn kém",
            effects: { finance: -15, people: 10, military: 15, religion: 0 },
            historicalNote: "Duy trì hai hệ thống tốn kém nguồn lực, chia nhỏ sức mạnh quốc gia."
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
        dialecticLaw: "Quy luật về mối quan hệ giữa cơ sở hạ tầng và thượng tầng kiến trúc: Đời sống tinh thần (tôn giáo, văn hóa) không tách rời mà có tác động qua lại với đời sống vật chất và tổ chức xã hội. Phật giáo thời Lý không chỉ là tín ngưỡng mà còn là công cụ giáo hóa, là nền tảng văn hóa dân tộc, là sợi dây kết nối giữa triều đình và nhân dân.",
        yearContext: "Thế kỷ XI",
        historicalQuote: "Phật pháp rộng lớn như biển cả, bao la như hư không, có thể độ người qua bể khổ. Nhưng phải biết rằng, giúp nước giúp dân mới thật là công đức. Tu hành nơi núi rừng dễ, nhưng cứu dân ra khỏi đói khổ mới thật khó. Vì vậy ta dùng sư tăng có đức hạnh làm cố vấn, vừa gìn giữ đạo pháp, vừa giúp nước an dân. (Lời của Thiền sư Vạn Hạnh - cố vấn triều Lý)",
        leftChoice: {
          text: "Hạn chế vai trò Phật giáo",
          effects: { finance: 5, people: -5, military: 5, religion: -15 },
        },
        rightChoice: {
          text: "Trọng dụng sư tăng trong triều",
          effects: { finance: -6, people: 5, military: -3, religion: 10 },
        },
        multipleChoices: [
          {
            id: "ly3_a",
            text: "Hạn chế vai trò Phật giáo",
            description: "Thực dụng nhưng mất hỗ trợ tinh thần",
            effects: { finance: 5, people: -5, military: 5, religion: -15 },
            historicalNote: "Hạn chế Phật giáo sẽ mất đi nguồn lực tinh thần to lớn của xã hội."
          },
          {
            id: "ly3_b",
            text: "Trọng dụng sư tăng trong triều",
            description: "Phát huy vai trò tinh thần",
            effects: { finance: -6, people: 5, military: -3, religion: 10 },
            historicalNote: "Nhà Lý trọng dụng các cao tăng như Vạn Hạnh, Thường Chiếu làm cố vấn triều đình.",
            isCorrect: true
          },
          {
            id: "ly3_c",
            text: "Giữ cân bằng giữa tăng lữ và quan lại",
            description: "Trung dung, cân bằng",
            effects: { finance: -5, people: 5, military: 0, religion: 10 },
            historicalNote: "Cân bằng giúp tránh xung đột nhưng không phát huy được vai trò của Phật giáo."
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
        dialecticLaw: "Quy luật về sự thống nhất giữa đời sống vật chất và tinh thần: Một quốc gia phát triển bền vững cần cả hai yếu tố này hài hòa. Kinh tế vật chất tạo nền tảng cho văn hóa tinh thần, trong khi văn hóa tinh thần định hướng và thúc đẩy phát triển kinh tế. Xây dựng công trình tôn giáo không chỉ thỏa mãn nhu cầu tâm linh mà còn là biểu tượng của sức mạnh quốc gia, là trung tâm văn hóa giáo dục.",
        yearContext: "Thế kỷ XI",
        historicalQuote: "Xây chùa xây tháp là để ghi công đức, lưu lại cho muôn đời sau. Chùa chiền là nơi thờ Phật, là trường dạy chữ, là chốn tu dưỡng tâm hồn cho dân. Đất nước có chùa tháng nghĩa là có văn hóa, có học vấn. Một cột chống trời, mái che đại địa, đó là biểu tượng của lòng biết ơn, của sự ghi nhớ công ơn tổ tiên và trời phật. (Ký sự về việc xây dựng các ngôi chùa lớn thời Lý)",
        leftChoice: {
          text: "Cấm xây chùa mới",
          effects: { finance: 15, people: -15, military: 5, religion: -20 },
        },
        rightChoice: {
          text: "Xây dựng chùa quy mô lớn",
          effects: { finance: -8, people: 8, military: -3, religion: 8 },
        },
        multipleChoices: [
          {
            id: "ly4_a",
            text: "Xây dựng chùa quy mô lớn",
            description: "Phát triển văn hóa và tinh thần",
            effects: { finance: -8, people: 8, military: -3, religion: 8 },
            historicalNote: "Nhà Lý xây dựng nhiều chùa lớn như Diên Hựu, Bảo Thiên, tạo nền văn hóa Phật giáo phát triển.",
            isCorrect: true
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
        dialecticLaw: "Quy luật chuyển hóa từ lượng sang chất: Khi mâu thuẫn tích lũy đến mức nguy kịch, cần có hành động quyết liệt để tạo bước ngoặt chất lượng. Chiến tranh phòng thủ và tấn công là hai chiến lược đối lập nhưng có thể chuyển hóa lẫn nhau. Trong điều kiện cụ thể năm 1075, tấn công phủ đầu chính là cách phòng thủ tốt nhất, biến thụ động thành chủ động, tạo thế trận có lợi.",
        yearContext: "1075",
        historicalQuote: "Nam quốc sơn hà Nam đế cư, tiệt nhiên định phận tại thiên thư. Như hà nghịch lỗ lai xâm phạm, nhữ đẳng hành khan thủ bại hư! (Sông núi nước Nam vua Nam ở, rành rành định phận tại sách trời. Cớ sao bọn giặc sang xâm phạm, chúng bay hãy thấy khéo vào chịu thua!) - Lời thề của tướng Lý Thường Kiệt trước khi xuất chinh năm 1075, thể hiện tinh thần quyết chiến, quyết thắng bảo vệ giang san Tổ quốc",
        leftChoice: {
          text: "Lập phòng tuyến chờ giặc",
          effects: { finance: -10, people: -5, military: 15, religion: 0 },
        },
        rightChoice: {
          text: "Đánh trước sang đất Tống",
          effects: { finance: -8, people: -8, military: 16, religion: 0 },
        },
        multipleChoices: [
          {
            id: "ly5_a",
            text: "Cầu hòa, dâng cống",
            description: "Tránh chiến nhưng mất độc lập",
            effects: { finance: -5, people: -10, military: -10, religion: 0 },
            historicalNote: "Chấp nhận làm phụ thuộc sẽ mất độc lập và tinh thần dân tộc."
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
            text: "Tăng cường tuyển quân, chưa giao chiến",
            description: "Bị động, mất thời cơ",
            effects: { finance: -10, people: -5, military: 10, religion: 0 },
            historicalNote: "Chuẩn bị lâu sẽ để địch chủ động tấn công."
          },
          {
            id: "ly5_d",
            text: "Đánh trước sang đất Tống",
            description: "Chủ động và quyết đoán",
            effects: { finance: -8, people: -8, military: 16, religion: 0 },
            historicalNote: "Lý Thường Kiệt tấn công phủ đầu năm 1075, giành thắng lợi tại Như Nguyệt.",
            isCorrect: true
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
        dialecticLaw: "Quy luật về vai trò của chiến thuật trong chiến tranh: Chiến lược quyết định phương hướng tổng thể, chiến thuật quyết định thắng bại từng trận. Sự lựa chọn chiến thuật phù hợp với địa hình, thời cơ và lực lượng là yếu tố then chốt. Cố thủ hay phản công, thụ động hay chủ động đều phải xuất phát từ điều kiện thực tế chứ không phải quan điểm chủ quan.",
        yearContext: "1076",
        historicalQuote: "Quân ta tuy ít nhưng đang ở thế có lợi, sông Như Nguyệt chảy xiết, cầu cống hẹp, giặc đông nhưng khó triển khai. Ta giữ vững bờ sông này, không để giặc vượt qua, đó chính là chiến thắng. Binh pháp có câu: 'Thủ như núi, công như sấm', biết giữ vững thành trì mới có thể chờ cơ hội phản công. (Lời của Lý Thường Kiệt tại chiến trường Như Nguyệt - theo ghi chép sử sách)",
        leftChoice: {
          text: "Rút quân bảo toàn lực lượng",
          effects: { finance: -5, people: -10, military: -10, religion: 0 },
        },
        rightChoice: {
          text: "Lập phòng tuyến cố thủ",
          effects: { finance: -6, people: -4, military: 14, religion: 2 },
        },
        multipleChoices: [
          {
            id: "ly6_a",
            text: "Rút quân bảo toàn lực lượng",
            description: "Bảo thủ, mất lợi thế",
            effects: { finance: -5, people: -10, military: -10, religion: 0 },
            historicalNote: "Rút quân sẽ để địch tiến sâu và mất lợi thế chiến trường."
          },
          {
            id: "ly6_b",
            text: "Cầu viện tinh thần tôn giáo",
            description: "Tinh thần nhưng thiếu chiến thuật",
            effects: { finance: 0, people: 5, military: 5, religion: 10 },
            historicalNote: "Tinh thần quan trọng nhưng phải kết hợp với chiến thuật hợp lý."
          },
          {
            id: "ly6_c",
            text: "Lập phòng tuyến cố thủ",
            description: "Chiến thuật vững chắc",
            effects: { finance: -6, people: -4, military: 14, religion: 2 },
            historicalNote: "Lý Thường Kiệt lập phòng tuyến vững chắc tại Như Nguyệt, giành thắng lợi quyết định.",
            isCorrect: true
          },
          {
            id: "ly6_d",
            text: "Chủ động phản công mạnh",
            description: "Tích cực nhưng rủi ro cao",
            effects: { finance: -15, people: -10, military: 25, religion: 0 },
            historicalNote: "Phản công mạnh có thể thắng lớn nhưng cũng dễ bị tổn thất nặng."
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
        dialecticLaw: "Quy luật về vai trò quyết định của yếu tố con người trong chiến tranh: Vũ khí, quân số chỉ là yếu tố vật chất, tinh thần ý chí mới là yếu tố quyết định. Ý thức hệ, niềm tin vào sự nghiệp chính nghĩa có sức mạnh to lớn, biến con người yếu thế về vật chất thành vô địch về tinh thần. Văn học, nghệ thuật, tuyên truyền là những công cụ quan trọng để nâng cao tinh thần chiến đấu.",
        yearContext: "1076",
        historicalQuote: "Nam quốc sơn hà Nam đế cư, tiệt nhiên định phận tại thiên thư. Như hà nghịch lỗ lai xâm phạm, nhữ đẳng hành khan thủ bại hư! (Sông núi nước Nam vua Nam ở, rành rành định phận tại sách trời. Cớ sao bọn giặc sang xâm phạm, chúng bay hãy thấy khéo vào chịu thua!) - Bài thơ bất hủ này của Lý Thường Kiệt đã thắp lên ngọn lửa yêu nước trong lòng mỗi người lính, khẳng định chủ quyền thiêng liêng của Tổ quốc, biến mỗi chiến sĩ thành người hùng bảo vệ non sông.",
        leftChoice: {
          text: "Siết chặt quân luật",
          effects: { finance: 0, people: -5, military: 15, religion: 0 },
        },
        rightChoice: {
          text: "Đọc 'Nam quốc sơn hà' khích lệ tinh thần",
          effects: { finance: 0, people: 7, military: 8, religion: 2 },
        },
        multipleChoices: [
          {
            id: "ly7_a",
            text: "Siết chặt quân luật",
            description: "Cứng rắn nhưng thiếu cảm hóa",
            effects: { finance: 0, people: -5, military: 15, religion: 0 },
            historicalNote: "Quân luật nghiêm khắc cần thiết nhưng phải kết hợp với cảm hóa tinh thần."
          },
          {
            id: "ly7_b",
            text: "Đọc 'Nam quốc sơn hà' khích lệ tinh thần",
            description: "Tinh thần mạnh mẽ và đoàn kết",
            effects: { finance: 0, people: 7, military: 8, religion: 2 },
            historicalNote: "Lý Thường Kiệt đọc bài thơ 'Nam quốc sơn hà' để khích lệ tinh thần quân sĩ, tạo sự đoàn kết mạnh mẽ.",
            isCorrect: true
          },
          {
            id: "ly7_c",
            text: "Tăng thưởng vật chất cho quân lính",
            description: "Thực dụng nhưng tốn kém",
            effects: { finance: -10, people: 5, military: 10, religion: 0 },
            historicalNote: "Vật chất quan trọng nhưng không bằng sức mạnh tinh thần trong lúc khó khăn."
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
        dialecticLaw: "Quy luật về mục đích và phương tiện: Chiến tranh chỉ là phương tiện, hòa bình mới là mục đích. Biết thắng còn phải biết dừng đúng lúc, đó là trí tuệ của người lãnh đạo. Sau chiến thắng, nếu cứ tiếp tục chiến tranh sẽ biến thắng lợi thành thất bại, làm tổn hại lợi ích dân tộc. Ngoại giao khôn ngoan là kéo dài thành quả chiến tranh bằng hòa bình.",
        yearContext: "Sau 1077",
        historicalQuote: "Chiến tranh là việc lớn của quốc gia, là nơi sinh tử của dân, không thể không thận trọng. Đã thắng rồi, mà cứ ham đánh tiếp, sẽ làm quân mệt dân đói, của cải tiêu hao. Người khôn ngoan biết dừng lại đúng lúc, lấy thắng lợi quân sự để đổi lấy hòa bình lâu dài. Đó mới thật là 'đại trí'. (Theo lời bàn của các mưu thần triều Lý sau chiến thắng chống Tống - Sử ký ghi chép)",
        leftChoice: {
          text: "Tiếp tục truy kích",
          effects: { finance: -10, people: -5, military: 15, religion: 0 },
        },
        rightChoice: {
          text: "Chủ động giảng hòa",
          effects: { finance: 10, people: 7, military: -4, religion: 0 },
        },
        multipleChoices: [
          {
            id: "ly8_a",
            text: "Tiếp tục truy kích",
            description: "Tích cực nhưng rủi ro cao",
            effects: { finance: -10, people: -5, military: 15, religion: 0 },
            historicalNote: "Truy kích có thể thắng lớn hơn nhưng cũng dễ gây chiến tranh kéo dài."
          },
          {
            id: "ly8_b",
            text: "Rút quân phòng thủ biên giới",
            description: "An toàn, giữ vững thành quả",
            effects: { finance: 5, people: 5, military: 0, religion: 0 },
            historicalNote: "Phòng thủ biên giới là lựa chọn an toàn nhưng bỏ lỡ cơ hội ngoại giao."
          },
          {
            id: "ly8_c",
            text: "Cắt giảm quân đội để tiết kiệm",
            description: "Tiết kiệm nhưng suy yếu phòng thủ",
            effects: { finance: 10, people: -5, military: -15, religion: 0 },
            historicalNote: "Cắt giảm quân đội quá nhanh có thể làm suy yếu khả năng phòng thủ."
          },
          {
            id: "ly8_d",
            text: "Chủ động giảng hòa",
            description: "Khôn ngoan và có tầm nhìn",
            effects: { finance: 10, people: 7, military: -4, religion: 0 },
            historicalNote: "Lý Thánh Tông chủ động giảng hòa sau chiến thắng, thể hiện sự khôn ngoan trong ngoại giao.",
            isCorrect: true
          }
        ],
      },
      // Câu 9: Đắp đê khai hoang - Thế kỷ XI
      {
        id: "ly_9",
        character: "Nhà Lý - Thế kỷ XI",
        situation:
          "Triều đình xem xét việc đắp đê, khai khẩn ruộng đất để ổn định sản xuất nông nghiệp.",
        philosophicalContext: "Phát triển vs Bảo thủ",
        dialecticLaw: "Quy luật về nông nghiệp là nền tảng kinh tế: Trong xã hội nông nghiệp, ruộng đất và thủy lợi quyết định sự sống còn của quốc gia. Đầu tư vào hạ tầng thủy lợi là đầu tư lâu dài, tạo điều kiện cho sản xuất phát triển bền vững. Quan điểm chỉ lo ngắn hạn, không dám đầu tư sẽ dẫn đến trì trệ và lạc hậu. Phát triển kinh tế phải xuất phát từ điều kiện cụ thể của đất nước.",
        yearContext: "Thế kỷ XI",
        historicalQuote: "Đê cao thì nước không tràn, ruộng rộng thì thóc đầy kho. Dân no ấm thì nước yên, nước yên thì giặc không dám xâm phạm. Xưa nay các bậc minh quân đều coi trọng thủy lợi nông nghiệp như vậy. Trẫm nghe lời này, quyết tâm huy động dân chúng đắp đê khai hoang, để thiên hạ đều được ấm no. (Chiếu dụ của vua Lý về việc phát triển thủy lợi)",
        leftChoice: {
          text: "Trì hoãn để tiết kiệm ngân khố",
          effects: { finance: 10, people: -10, military: 0, religion: 0 },
        },
        rightChoice: {
          text: "Huy động dân đắp đê, khai hoang quy mô lớn",
          effects: { finance: -6, people: 8, military: -3, religion: 0 },
        },
        multipleChoices: [
          {
            id: "ly9_a",
            text: "Trì hoãn để tiết kiệm ngân khố",
            description: "Ngắn hạn nhưng bỏ lỡ cơ hội",
            effects: { finance: 10, people: -10, military: 0, religion: 0 },
            historicalNote: "Không đầu tư vào nông nghiệp sẽ làm dân nghèo và đất nước suy yếu lâu dài."
          },
          {
            id: "ly9_b",
            text: "Giao việc cho địa phương tự lo",
            description: "Phân quyền nhưng thiếu quy hoạch",
            effects: { finance: -5, people: 5, military: 0, religion: 0 },
            historicalNote: "Địa phương tự làm thiếu sự phối hợp, hiệu quả không cao."
          },
          {
            id: "ly9_c",
            text: "Huy động dân đắp đê, khai hoang quy mô lớn",
            description: "Đầu tư dài hạn, phát triển bền vững",
            effects: { finance: -6, people: 8, military: -3, religion: 0 },
            historicalNote: "Nhà Lý đã tổ chức đắp đê, khai hoang quy mô lớn, tạo nền tảng phát triển nông nghiệp.",
            isCorrect: true
          },
          {
            id: "ly9_d",
            text: "Ưu tiên ngân sách cho quân đội",
            description: "Mất cân bằng phát triển",
            effects: { finance: -5, people: -10, military: 10, religion: 0 },
            historicalNote: "Chỉ chú trọng quân sự mà bỏ qua nông nghiệp sẽ làm kinh tế suy yếu."
          }
        ],
      },
      // Câu 10: Thu hồi ruộng công - Thế kỷ XI
      {
        id: "ly_10",
        character: "Nhà Lý - Thế kỷ XI",
        situation:
          "Nhiều quý tộc và quan lại chiếm ruộng công, gây bất bình trong dân. Bạn cần quyết định xử lý.",
        philosophicalContext: "Công bằng vs Quyền lực",
        dialecticLaw: "Quy luật về công lý xã hội: Xã hội chỉ ổn định khi có công bằng. Khi quyền lực bóc lột quá đáng, mâu thuẫn xã hội sẽ bùng nổ. Nhà nước phải là người bảo vệ quyền lợi của đại đa số nhân dân, chứ không phải bảo vệ đặc quyền của thiểu số quý tộc. Cải cách ruộng đất không chỉ là vấn đề kinh tế mà còn là vấn đề chính trị, quyết định sự ủng hộ của nhân dân đối với triều đình.",
        yearContext: "Thế kỷ XI",
        historicalQuote: "Ruộng công là của công quốc gia, là ruộng của dân, không phải của riêng một cá nhân nào. Quan quý tộc cậy thế lực mà chiếm đoạt ruộng công, khiến dân không có đất cày cấy, đó là tội lớn. Trẫm ra lệnh thu hồi tất cả ruộng công bị chiếm đoạt, trả lại cho dân nghèo canh tác, để họ có cơm no áo ấm, sống yên ổn. Ai không tuân sẽ bị tru truất chức vị. (Sắc lệnh về thu hồi ruộng công thời Lý)",
        leftChoice: {
          text: "Giữ nguyên hiện trạng để tránh xung đột",
          effects: { finance: 5, people: -10, military: 0, religion: 0 },
        },
        rightChoice: {
          text: "Thu hồi ruộng công, trả lại cho dân",
          effects: { finance: -3, people: 7, military: -2, religion: 0 },
        },
        multipleChoices: [
          {
            id: "ly10_a",
            text: "Đàn áp dân khiếu kiện",
            description: "Cực đoan, gây mất lòng dân",
            effects: { finance: 5, people: -15, military: 10, religion: 0 },
            historicalNote: "Dùng vũ lực chống lại dân sẽ gây bất ổn và làm mất uy tín triều đình."
          },
          {
            id: "ly10_b",
            text: "Thu hồi ruộng công, trả lại cho dân",
            description: "Công bằng và đúng đắn",
            effects: { finance: -3, people: 7, military: -2, religion: 0 },
            historicalNote: "Nhà Lý đã thu hồi ruộng công bị chiếm đoạt, trả lại cho dân canh tác.",
            isCorrect: true
          },
          {
            id: "ly10_c",
            text: "Chỉ xử lý những trường hợp quá đáng",
            description: "Ôn hòa nhưng chưa triệt để",
            effects: { finance: 0, people: 5, military: 0, religion: 0 },
            historicalNote: "Xử lý nhẹ nhàng giúp giảm xung đột nhưng không giải quyết căn bản."
          },
          {
            id: "ly10_d",
            text: "Giữ nguyên hiện trạng để tránh xung đột",
            description: "Nhượng bộ, mất lòng dân",
            effects: { finance: 5, people: -10, military: 0, religion: 0 },
            historicalNote: "Không can thiệp sẽ để tình trạng càng nghiêm trọng và gây bất bình lớn."
          }
        ],
      },
      // Câu 11: Mở khoa thi - 1104
      {
        id: "ly_11",
        character: "Nhà Lý - Năm 1104",
        situation:
          "Nhà Lý mở các kỳ thi để tuyển chọn nhân tài, từng bước xây dựng bộ máy quan lại.",
        philosophicalContext: "Hiền tài vs Thế tập",
        dialecticLaw: "Quy luật về vai trò của nhân tài trong phát triển xã hội: Nhân tài là nguồn lực quý giá nhất của quốc gia. Chế độ thế tập (truyền ngôi cha con) tuy đảm bảo ổn định nhưng dễ bỏ sót nhân tài. Khoa cử thi tuyển mở rộng cơ hội cho mọi tầng lớp, tạo động lực phấn đấu, đồng thời làm tăng tính hợp pháp của chính quyền. Đây là bước tiến bộ quan trọng trong lịch sử phát triển thể chế chính trị.",
        yearContext: "1104",
        historicalQuote: "Người tài đức là nền tảng của quốc gia, là cội nguồn trị nước. Không phân quý tiện cao thấp, chỉ lấy tài năng làm trọng. Nay trẫm mở khoa thi, cho phép sĩ tử khắp nước đến dự, ai có tài thì được dùng, không hỏi xuất thân. Đó là đạo công bằng, cũng là đạo trị nước của thánh hiền xưa để lại. (Chiếu mở khoa thi của Lý Nhân Tông năm 1104 - đây là lần mở khoa thi đầu tiên có hệ thống ở Việt Nam)",
        leftChoice: {
          text: "Chỉ bổ nhiệm con cháu quý tộc",
          effects: { finance: 5, people: -10, military: 5, religion: 0 },
        },
        rightChoice: {
          text: "Tổ chức khoa thi tuyển chọn nhân tài",
          effects: { finance: -5, people: 6, military: 0, religion: -2 },
        },
        multipleChoices: [
          {
            id: "ly11_a",
            text: "Chưa tổ chức thi, ưu tiên ổn định triều đình",
            description: "Thận trọng nhưng bỏ lỡ nhân tài",
            effects: { finance: 5, people: -5, military: 0, religion: 0 },
            historicalNote: "Trì hoãn cải cách sẽ làm mất cơ hội phát hiện và dùng người tài."
          },
          {
            id: "ly11_b",
            text: "Kết hợp thi cử và tiến cử",
            description: "Cân bằng, linh hoạt",
            effects: { finance: -5, people: 5, military: 0, religion: 0 },
            historicalNote: "Kết hợp hai phương thức giúp tuyển chọn rộng rãi hơn."
          },
          {
            id: "ly11_c",
            text: "Chỉ bổ nhiệm con cháu quý tộc",
            description: "Bảo thủ, mất công bằng",
            effects: { finance: 5, people: -10, military: 5, religion: 0 },
            historicalNote: "Chỉ dùng người nhà sẽ bỏ qua nhiều nhân tài và gây bất bình xã hội."
          },
          {
            id: "ly11_d",
            text: "Tổ chức khoa thi tuyển chọn nhân tài",
            description: "Tiến bộ và công bằng",
            effects: { finance: -5, people: 6, military: 0, religion: -2 },
            historicalNote: "Lý Nhân Tông mở khoa thi năm 1104, tạo cơ hội cho người tài đức.",
            isCorrect: true
          }
        ],
      },
      // Câu 12: Dẹp loạn biên giới - Thế kỷ XII
      {
        id: "ly_12",
        character: "Nhà Lý - Thế kỷ XII",
        situation:
          "Nhiều vùng miền núi và biên giới nổi dậy, chống lại triều đình. Cần có giải pháp hợp lý.",
        philosophicalContext: "Sức mạnh vs Khoan dung",
        dialecticLaw: "Quy luật về kết hợp sức mạnh và nhân từ trong quản lý: Đàn áp thuần túy chỉ tạo ra thù hận và kháng cự lâu dài, khoan dung thuần túy lại dễ bị lợi dụng và xem thường. Chính sách đúng đắn là vừa đánh vừa dỗ, vừa cứng vừa mềm. Với kẻ cầm đầu nổi loạn phải trấn áp quyết liệt, với quần chúng bị lôi kéo phải khoan hồng giáo hóa. Đây là nghệ thuật cai trị cao cấp.",
        yearContext: "Thế kỷ XII",
        historicalQuote: "Đối với kẻ nổi loạn, nếu chỉ dùng vũ lực đàn áp thì giết hết không xuể, lại càng gây thù hận. Nếu chỉ dùng lời khuyên dỗ dành thì chúng coi thường, càng nổi loạn thêm. Phải dùng cả hai: trước hết dùng quân đội trấn áp những kẻ cầm đầu để răn đe, sau đó chiêu an những người bị lôi kéo, cho họ đất đai và miễn thuế. Như vậy mới bền lâu. (Binh thư thời Lý về phương pháp bình định biên giới)",
        leftChoice: {
          text: "Đàn áp quân sự toàn diện",
          effects: { finance: -10, people: -15, military: 20, religion: 0 },
        },
        rightChoice: {
          text: "Vừa đàn áp vừa chiêu an",
          effects: { finance: -5, people: 3, military: 8, religion: 0 },
        },
        multipleChoices: [
          {
            id: "ly12_a",
            text: "Bỏ qua, để địa phương tự xử lý",
            description: "Yếu đuối, mất uy quyền",
            effects: { finance: 5, people: -10, military: -10, religion: 0 },
            historicalNote: "Không can thiệp sẽ để tình hình mất kiểm soát và lan rộng."
          },
          {
            id: "ly12_b",
            text: "Vừa đàn áp vừa chiêu an",
            description: "Cân bằng và khôn ngoan",
            effects: { finance: -5, people: 3, military: 8, religion: 0 },
            historicalNote: "Nhà Lý dùng chính sách vừa đánh vừa dỗ, bình định biên giới hiệu quả.",
            isCorrect: true
          },
          {
            id: "ly12_c",
            text: "Đàn áp quân sự toàn diện",
            description: "Quyết liệt nhưng tốn kém",
            effects: { finance: -10, people: -15, military: 20, religion: 0 },
            historicalNote: "Chỉ dùng vũ lực sẽ gây thương vong lớn và tốn kém, khó bình định lâu dài."
          },
          {
            id: "ly12_d",
            text: "Chỉ dùng biện pháp chiêu an",
            description: "Nhân từ nhưng thiếu uy lực",
            effects: { finance: -5, people: 10, military: -5, religion: 0 },
            historicalNote: "Chỉ dỗ dành mà không răn đe sẽ khó khống chế các thế lực nổi loạn."
          }
        ],
      },
      // Câu 13: Cơ chế quân đội - Thế kỷ XII
      {
        id: "ly_13",
        character: "Nhà Lý - Thế kỷ XII",
        situation:
          "Quân đội thời bình tiêu tốn ngân khố nhưng vẫn cần duy trì sức mạnh để bảo vệ đất nước.",
        philosophicalContext: "An ninh vs Kinh tế",
        dialecticLaw: "Quy luật về cân bằng giữa chi phí an ninh và hiệu quả kinh tế: Quốc phòng là cần thiết nhưng không thể vì quốc phòng mà làm kinh tế kiệt quệ. Trong thời bình, cần tìm mô hình quân đội tối ưu: vừa đảm bảo sức mạnh phòng thủ, vừa không gây gánh nặng tài chính. Chế độ nông binh (dân vừa là nông dân vừa là lính) là giải pháp phù hợp với điều kiện nước ta: tiết kiệm chi phí, duy trì sẵn sàng chiến đấu.",
        yearContext: "Thế kỷ XII",
        historicalQuote: "Quân đội là để bảo vệ nước, nhưng nếu nuôi quân quá đông thì dân phải nộp thuế nhiều, kho tàng cạn kiệt. Xưa kia thánh vương có dạy: 'Quân ít mà tinh thắng hơn quân đông mà yếu'. Vậy nên ta áp dụng chế độ nông binh: thời bình thì cày cấy, có giặc thì cầm vũ khí chiến đấu. Vừa sản xuất được lương thực, vừa sẵn sàng bảo vệ đất nước. Đó mới là đạo dùng quân khôn ngoan. (Chế độ quân Lý - ghi trong Đại Việt sử ký toàn thư)",
        leftChoice: {
          text: "Mở rộng quân đội quy mô lớn",
          effects: { finance: -15, people: -5, military: 20, religion: 0 },
        },
        rightChoice: {
          text: "Duy trì quân đội vừa đủ, kết hợp nông binh",
          effects: { finance: 3, people: 3, military: 3, religion: 0 },
        },
        multipleChoices: [
          {
            id: "ly13_a",
            text: "Cắt giảm mạnh quân đội",
            description: "Tiết kiệm nhưng mất an ninh",
            effects: { finance: 15, people: -5, military: -15, religion: 0 },
            historicalNote: "Cắt giảm quá nhiều sẽ làm suy yếu khả năng phòng thủ đất nước."
          },
          {
            id: "ly13_b",
            text: "Duy trì quân đội vừa đủ, kết hợp nông binh",
            description: "Cân bằng và hiệu quả",
            effects: { finance: 3, people: 3, military: 3, religion: 0 },
            historicalNote: "Nhà Lý áp dụng chế độ nông binh, vừa sản xuất vừa sẵn sàng chiến đấu.",
            isCorrect: true
          },
          {
            id: "ly13_c",
            text: "Mở rộng quân đội quy mô lớn",
            description: "Mạnh nhưng tốn kém",
            effects: { finance: -15, people: -5, military: 20, religion: 0 },
            historicalNote: "Quân đội quá lớn trong thời bình sẽ gây gánh nặng tài chính."
          },
          {
            id: "ly13_d",
            text: "Chỉ giữ quân canh gác kinh đô",
            description: "Tập trung nhưng yếu biên giới",
            effects: { finance: 10, people: 0, military: -10, religion: 0 },
            historicalNote: "Bỏ trống biên giới sẽ dễ bị xâm nhập từ bên ngoài."
          }
        ],
      },
      // Câu 14: Phát triển thủ công nghiệp - Thế kỷ XII
      {
        id: "ly_14",
        character: "Nhà Lý - Thế kỷ XII",
        situation:
          "Thủ công nghiệp phát triển, xuất hiện nhiều nghề thủ công. Triều đình cần chính sách quản lý.",
        philosophicalContext: "Nông nghiệp vs Thủ công",
        dialecticLaw: "Quy luật về đa dạng hóa cấu trúc kinh tế: Một nền kinh tế chỉ dựa vào một ngành duy nhất sẽ thiếu tính ổn định và khả năng phát triển. Nông nghiệp cung cấp lương thực, thủ công nghiệp cung cấp công cụ lao động và hàng tiêu dùng, thương nghiệp lưu thông hàng hóa - ba ngành bổ sung cho nhau tạo nên nền kinh tế toàn diện. Khuyến khích thủ công phát triển không có nghĩa bỏ rơi nông nghiệp, mà là tạo thêm động lực mới cho nền kinh tế.",
        yearContext: "Thế kỷ XII",
        historicalQuote: "Nông nghiệp là gốc, nuôi sống con người. Thủ công nghiệp là ngọn, làm ra công cụ và vật dụng. Cả hai đều quan trọng, không thể thiếu một trong hai. Nước ta có thợ rèn, thợ gốm, thợ dệt, thợ mộc... tài hoa, làm ra nhiều đồ dùng tinh xảo. Nhà nước nên khuyến khích họ, không nên ngăn cấm hay đánh thuế nặng, để nghề thủ công phát triển, làm giàu cho đất nước. (Ghi chép về kinh tế thời Lý - sách Lĩnh Nam chích quái có đề cập)",
        leftChoice: {
          text: "Hạn chế thủ công, ưu tiên nông nghiệp",
          effects: { finance: -5, people: -5, military: 0, religion: 0 },
        },
        rightChoice: {
          text: "Khuyến khích thủ công nghiệp phát triển",
          effects: { finance: 4, people: 4, military: 0, religion: 0 },
        },
        multipleChoices: [
          {
            id: "ly14_a",
            text: "Khuyến khích thủ công nghiệp phát triển",
            description: "Tiến bộ và thịnh vượng",
            effects: { finance: 4, people: 4, military: 0, religion: 0 },
            historicalNote: "Nhà Lý khuyến khích nghề thủ công, tạo ra nhiều sản phẩm chất lượng cao.",
            isCorrect: true
          },
          {
            id: "ly14_b",
            text: "Hạn chế thủ công, ưu tiên nông nghiệp",
            description: "Bảo thủ, hạn chế phát triển",
            effects: { finance: -5, people: -5, military: 0, religion: 0 },
            historicalNote: "Chỉ chú trọng nông nghiệp sẽ bỏ qua tiềm năng phát triển kinh tế đa dạng."
          },
          {
            id: "ly14_c",
            text: "Đánh thuế nặng nghề thủ công",
            description: "Ngắn hạn có lợi, dài hạn nguy hại",
            effects: { finance: 10, people: -10, military: 0, religion: 0 },
            historicalNote: "Thuế nặng sẽ kìm hãm sự phát triển của thủ công nghiệp."
          },
          {
            id: "ly14_d",
            text: "Nhà nước độc quyền các nghề quan trọng",
            description: "Kiểm soát chặt nhưng kém hiệu quả",
            effects: { finance: 5, people: -5, military: 5, religion: 0 },
            historicalNote: "Độc quyền nhà nước thường kém linh hoạt và thiếu sáng tạo."
          }
        ],
      },
      // Câu 15: Kế thừa ngôi vua - Cuối thế kỷ XII
      {
        id: "ly_15",
        character: "Nhà Lý - Cuối thế kỷ XII",
        situation:
          "Vua già yếu, cần chọn người kế vị. Con trưởng thông minh nhưng còn trẻ, con thứ trung bình nhưng được quý tộc ủng hộ.",
        philosophicalContext: "Tài năng vs Ổn định",
        dialecticLaw: "Quy luật về kế thừa quyền lực: Lựa chọn người kế vị là quyết định quan trọng nhất quyết định vận mệnh triều đại. Chọn người tài năng là đầu tư cho tương lai, chọn người trung bình chỉ vì ổn định trước mắt là đánh mất tương lai. Lịch sử chứng minh: những triều đại hưng thịnh đều có những vị vua tài giỏi, những triều đại suy vong thường bắt đầu từ những vị vua nhu nhược. Dũng khí chọn người tài dù phải đối mặt với áp lực chính là phẩm chất của nhà lãnh đạo sáng suốt.",
        yearContext: "Cuối thế kỷ XII",
        historicalQuote: "Chọn người kế nghiệp là việc trọng đại, quyết định hưng vong của quốc gia. Không thể vì sợ xung đột trước mắt mà chọn người trung bình, làm hại cho thiên hạ đời sau. Người xưa dạy: 'Lập hiền lập trưởng', nghĩa là chọn người hiền tài và người trưởng thứ hợp lý. Trẫm suy nghĩ kỹ, quyết chọn người có tài đức nhất, dù còn trẻ, vì đất nước cần người có năng lực lãnh đạo, chứ không cần người chỉ biết giữ gìn bình yên mà không dám làm gì. (Di huấn của các vua Lý về vấn đề kế vị - trích từ sử sách)",
        leftChoice: {
          text: "Chọn con thứ để tránh xung đột",
          effects: { finance: 5, people: -8, military: 5, religion: 5 },
        },
        rightChoice: {
          text: "Chọn con trưởng tài giỏi làm thái tử",
          effects: { finance: 2, people: 5, military: 2, religion: -2 },
        },
        multipleChoices: [
          {
            id: "ly15_a",
            text: "Chọn con trưởng tài giỏi làm thái tử",
            description: "Tài năng và tầm nhìn xa",
            effects: { finance: 2, people: 5, military: 2, religion: -2 },
            historicalNote: "Chọn người tài năng nhất sẽ đảm bảo sự phát triển lâu dài của đất nước.",
            isCorrect: true
          },
          {
            id: "ly15_b",
            text: "Chọn con thứ để tránh xung đột",
            description: "Ổn định ngắn hạn, nguy hiểm dài hạn",
            effects: { finance: 5, people: -8, military: 5, religion: 5 },
            historicalNote: "Chọn người trung bình chỉ vì ổn định có thể dẫn đến suy thoái sau này."
          },
          {
            id: "ly15_c",
            text: "Để quý tộc quyết định",
            description: "Yếu đuối, mất quyền lực",
            effects: { finance: 0, people: -10, military: 0, religion: 10 },
            historicalNote: "Để quyền lực vào tay quý tộc sẽ làm suy yếu triều đình."
          },
          {
            id: "ly15_d",
            text: "Chọn hoàng tử được dân yêu mến nhất",
            description: "Dân chủ nhưng chưa chắc tài giỏi",
            effects: { finance: 0, people: 10, military: 0, religion: 0 },
            historicalNote: "Được dân yêu mến chưa đủ, cần cả tài năng lãnh đạo."
          }
        ],
      },
    ],
  },
  {
    id: "tran",
  name: "Nhà Trần",
  period: "1225 - 1400",
  description:
    "Triều đại quân sự – chính trị tiêu biểu, ba lần đánh bại quân Nguyên – Mông, xây dựng kỷ cương quốc gia, kết hợp Phật giáo, Nho giáo và tinh thần thượng võ.",
  icon: "⚔️",
    startingStats: { finance: 50, people: 50, military: 50, religion: 50 },
    cards: [
      {
  id: "tran_1",
  character: "Trần Thái Tông - Năm 1225",
  situation:
    "Triều Lý suy yếu, quyền lực thực tế nằm trong tay họ Trần. Một quyết định chuyển giao quyền lực sẽ định đoạt vận mệnh quốc gia.",
  philosophicalContext: "Hòa bình vs Xung đột",
  dialecticLaw:
    "Quy luật chuyển hóa từ lượng thành chất: Khi quyền lực thực tế đã tích tụ đủ lớn, sự thay đổi triều đại là tất yếu. Nhường ngôi hòa bình giúp tránh bước nhảy bạo lực, bảo toàn xã hội.",
  yearContext: "1225",
  historicalQuote:
    "Nhà Lý đã suy, lòng người không theo nữa. Nếu cưỡng lại tất sinh binh đao, chi bằng thuận theo thời thế để yên xã tắc. (Đại Việt sử ký toàn thư)",
  leftChoice: {
    text: "Duy trì nhà Lý bằng vũ lực",
    effects: { finance: -10, people: -15, military: 10, religion: 0 }
  },
  rightChoice: {
    text: "Nhường ngôi cho nhà Trần",
    effects: { finance: 0, people: 10, military: -5, religion: 5 }
  },
  multipleChoices: [
    {
      id: "tran1_a",
      text: "Duy trì nhà Lý bằng vũ lực",
      description: "Bảo vệ danh nghĩa nhưng gây loạn",
      effects: { finance: -10, people: -15, military: 10, religion: 0 },
      historicalNote:
        "Nếu chống lại họ Trần, đất nước có nguy cơ nội chiến kéo dài."
    },
    {
      id: "tran1_b",
      text: "Thỏa hiệp chia quyền với họ Trần",
      description: "Nửa vời, thiếu dứt khoát",
      effects: { finance: -5, people: -5, military: 0, religion: 0 },
      historicalNote:
        "Chia quyền dễ dẫn đến xung đột ngầm và mất ổn định lâu dài."
    },
    {
      id: "tran1_c",
      text: "Nhường ngôi cho nhà Trần",
      description: "Chuyển giao hòa bình, đúng lịch sử",
      effects: { finance: 0, people: 10, military: -5, religion: 5 },
      historicalNote:
        "Năm 1225, Lý Chiêu Hoàng nhường ngôi cho Trần Cảnh, mở ra triều Trần."
    },
    {
      id: "tran1_d",
      text: "Kêu gọi tăng lữ can thiệp",
      description: "Dựa vào Phật giáo để ổn định",
      effects: { finance: 0, people: 0, military: -5, religion: 10 },
      historicalNote:
        "Phật giáo có ảnh hưởng lớn nhưng không thể thay thế quyền lực chính trị."
    }
  ]
},{
  id: "tran_2",
  character: "Trần Nhân Tông - Năm 1284",
  situation:
    "Quân Nguyên – Mông chuẩn bị xâm lược lần thứ hai. Triều đình phải quyết định chiến hay hòa.",
  philosophicalContext: "Độc lập dân tộc vs Sinh tồn ngắn hạn",
  dialecticLaw:
    "Quy luật mâu thuẫn: Hòa bình giả tạo với ngoại bang chỉ làm mâu thuẫn tích tụ, trong khi kháng chiến tuy đau đớn nhưng giải quyết tận gốc xung đột.",
  yearContext: "1284",
  historicalQuote:
    "Nên hòa hay nên đánh? – Đánh! (Hội nghị Diên Hồng, Đại Việt sử ký toàn thư)",
  leftChoice: {
    text: "Chấp nhận hòa với quân Nguyên",
    effects: { finance: -5, people: -15, military: -10, religion: 0 }
  },
  rightChoice: {
    text: "Toàn dân quyết tâm kháng chiến",
    effects: { finance: -10, people: 15, military: 20, religion: 0 }
  },
  multipleChoices: [
    {
      id: "tran2_a",
      text: "Chấp nhận hòa để tránh tổn thất",
      description: "Ngắn hạn yên ổn nhưng mất độc lập",
      effects: { finance: -5, people: -15, military: -10, religion: 0 },
      historicalNote:
        "Nhà Nguyên nhiều lần ép Đại Việt làm chư hầu, đòi cống nạp nặng nề."
    },
    {
      id: "tran2_b",
      text: "Đánh nhưng chỉ dựa vào quân đội triều đình",
      description: "Thiếu sức mạnh toàn dân",
      effects: { finance: -10, people: -5, military: 10, religion: 0 },
      historicalNote:
        "Chiến tranh chống Nguyên cần huy động sức dân trên toàn quốc."
    },
    {
      id: "tran2_c",
      text: "Họp Diên Hồng, toàn dân kháng chiến",
      description: "Quyết sách lịch sử",
      effects: { finance: -10, people: 15, military: 20, religion: 0 },
      historicalNote:
        "Hội nghị Diên Hồng thể hiện ý chí toàn dân tộc thời Trần."
    },
    {
      id: "tran2_d",
      text: "Rút vua lui về tu hành, giao quyền cho tướng lĩnh",
      description: "Tinh thần cao nhưng rủi ro chính trị",
      effects: { finance: 0, people: 5, military: 5, religion: 10 },
      historicalNote:
        "Nhà Trần kết hợp vai trò vua – tướng – dân, không tách rời quyền lực."
    }
  ]
},{
  id: "tran_3",
  character: "Trần Hưng Đạo - Năm 1285",
  situation:
    "Quân Nguyên mạnh về kỵ binh và số lượng. Đại Việt phải chọn chiến lược phù hợp để đối đầu.",
  philosophicalContext: "Sức mạnh tuyệt đối vs Trí tuệ chiến lược",
  dialecticLaw:
    "Quy luật phủ định biện chứng: Không đối đầu trực diện với cái mạnh hơn, mà phủ định nó bằng phương thức chiến tranh linh hoạt, du kích và tiêu hao.",
  yearContext: "1285",
  historicalQuote:
    "Lấy đoản binh chống trường trận, lấy yếu chống mạnh, đó là điều cốt yếu trong binh pháp. (Hịch tướng sĩ)",
  leftChoice: {
    text: "Đối đầu trực diện với quân Nguyên",
    effects: { finance: -15, people: -10, military: -10, religion: 0 }
  },
  rightChoice: {
    text: "Áp dụng chiến tranh tiêu hao, du kích",
    effects: { finance: -5, people: 5, military: 15, religion: 0 }
  },
  multipleChoices: [
    {
      id: "tran3_a",
      text: "Đối đầu trực diện",
      description: "Danh dự cao nhưng rủi ro lớn",
      effects: { finance: -15, people: -10, military: -10, religion: 0 },
      historicalNote:
        "Quân Nguyên vượt trội về kỵ binh và trang bị."
    },
    {
      id: "tran3_b",
      text: "Rút lui chiến lược để bảo toàn lực lượng",
      description: "Nhẫn nhịn để phản công",
      effects: { finance: -5, people: 0, military: 10, religion: 0 },
      historicalNote:
        "Nhà Trần nhiều lần chủ động bỏ kinh thành để phản công sau."
    },
    {
      id: "tran3_c",
      text: "Chiến tranh du kích, tiêu hao",
      description: "Chiến lược thiên tài",
      effects: { finance: -5, people: 5, military: 15, religion: 0 },
      historicalNote:
        "Chiến lược này dẫn đến các thắng lợi lớn như Bạch Đằng."
    },
    {
      id: "tran3_d",
      text: "Cầu viện các nước láng giềng",
      description: "Hy vọng bên ngoài",
      effects: { finance: -5, people: -5, military: 0, religion: 0 },
      historicalNote:
        "Đại Việt thời Trần chủ yếu tự lực kháng chiến."
    }
  ]
},{
  id: "tran_4",
  character: "Trần Thái Tông - Năm 1236",
  situation:
    "Vua Trần Thái Tông chán nản triều chính, lên núi Yên Tử tìm con đường giải thoát.",
  philosophicalContext: "Trách nhiệm vs Giải thoát cá nhân",
  dialecticLaw:
    "Mâu thuẫn giữa cá nhân và xã hội: Giải thoát cá nhân chỉ có ý nghĩa khi gắn với trách nhiệm lịch sử.",
  yearContext: "1236",
  historicalQuote:
    "Trẫm làm vua là vì thiên hạ, nếu bỏ thiên hạ mà cầu đạo thì đạo nào dung chứa được? (Đại Việt sử ký toàn thư)",
  leftChoice: {
    text: "Ở lại Yên Tử, rời bỏ triều chính",
    effects: { finance: 0, people: -15, military: -10, religion: 15 }
  },
  rightChoice: {
    text: "Quay về triều tiếp tục trị vì",
    effects: { finance: 5, people: 10, military: 5, religion: -5 }
  },
  multipleChoices: [
    {
      id: "tran4_a",
      text: "Rời bỏ triều chính để tu hành",
      description: "Giải thoát cá nhân",
      effects: { finance: 0, people: -15, military: -10, religion: 15 },
      historicalNote:
        "Nếu vua bỏ nước, triều đình dễ rơi vào rối loạn."
    },
    {
      id: "tran4_b",
      text: "Tu hành nhưng vẫn giữ quyền lực",
      description: "Nửa vời",
      effects: { finance: 0, people: -5, military: -5, religion: 5 },
      historicalNote:
        "Không dứt khoát sẽ làm suy yếu uy tín hoàng quyền."
    },
    {
      id: "tran4_c",
      text: "Quay về triều, lấy đạo giúp đời",
      description: "Quyết định lịch sử",
      effects: { finance: 5, people: 10, military: 5, religion: -5 },
      historicalNote:
        "Trần Thái Tông trở lại triều, mở đầu tư tưởng nhập thế."
    },
    {
      id: "tran4_d",
      text: "Trao quyền cho tướng lĩnh",
      description: "Giảm gánh nặng cá nhân",
      effects: { finance: 5, people: -5, military: 10, religion: 0 },
      historicalNote:
        "Quyền lực phân tán dễ gây mất kiểm soát."
    }
  ]
},{
  id: "tran_5",
  character: "Triều đình nhà Trần",
  situation:
    "Triều Trần cần duy trì quân đội mạnh nhưng không thể nuôi quân thường trực quá lớn.",
  philosophicalContext: "Kinh tế vs Quân sự",
  dialecticLaw:
    "Chuyển hóa mâu thuẫn: Kết hợp sản xuất và chiến đấu để dung hòa hai cực đối lập.",
  yearContext: "Thế kỷ XIII",
  historicalQuote:
    "Lúc bình thời làm ruộng, khi có giặc thì cầm binh. (Chế độ ngụ binh ư nông)",
  leftChoice: {
    text: "Duy trì quân đội thường trực lớn",
    effects: { finance: -15, people: -5, military: 15, religion: 0 }
  },
  rightChoice: {
    text: "Áp dụng ngụ binh ư nông",
    effects: { finance: 10, people: 5, military: 5, religion: 0 }
  },
  multipleChoices: [
    {
      id: "tran5_a",
      text: "Quân đội thường trực",
      description: "Mạnh nhưng tốn kém",
      effects: { finance: -15, people: -5, military: 15, religion: 0 },
      historicalNote:
        "Ngân khố không đủ nuôi quân lâu dài."
    },
    {
      id: "tran5_b",
      text: "Ngụ binh ư nông",
      description: "Cân bằng và hiệu quả",
      effects: { finance: 10, people: 5, military: 5, religion: 0 },
      historicalNote:
        "Đây là chính sách quân sự đặc trưng của nhà Trần."
    },
    {
      id: "tran5_c",
      text: "Giảm mạnh quân đội",
      description: "Tiết kiệm nhưng nguy hiểm",
      effects: { finance: 15, people: 0, military: -15, religion: 0 },
      historicalNote:
        "Đại Việt luôn đối mặt nguy cơ xâm lược."
    },
    {
      id: "tran5_d",
      text: "Dựa vào tăng binh",
      description: "Tinh thần cao nhưng yếu thực lực",
      effects: { finance: 0, people: 0, military: -10, religion: 10 },
      historicalNote:
        "Tăng lữ không thể thay thế quân đội chính quy."
    }
  ]
}
,{
  id: "tran_6",
  character: "Trần Hưng Đạo",
  situation:
    "Quân Nguyên tiến sâu vào Đại Việt với lực lượng áp đảo.",
  philosophicalContext: "Hy sinh ngắn hạn vs Thắng lợi lâu dài",
  dialecticLaw:
    "Phủ định biện chứng: Từ bỏ cái trước mắt để giành thắng lợi bản chất.",
  yearContext: "1285",
  historicalQuote:
    "Giặc đến thì bỏ thành, giữ dân, giữ lực lượng. (Chiến lược nhà Trần)",
  leftChoice: {
    text: "Giữ thành, quyết chiến",
    effects: { finance: -10, people: -15, military: -10, religion: 0 }
  },
  rightChoice: {
    text: "Vườn không nhà trống",
    effects: { finance: -5, people: 5, military: 15, religion: 0 }
  },
  multipleChoices: [
    {
      id: "tran6_a",
      text: "Quyết tử giữ thành",
      description: "Tinh thần cao nhưng nguy hiểm",
      effects: { finance: -10, people: -15, military: -10, religion: 0 },
      historicalNote:
        "Đối đầu trực diện dễ thất bại trước quân Nguyên."
    },
    {
      id: "tran6_b",
      text: "Rút lui chiến lược",
      description: "Bảo toàn lực lượng",
      effects: { finance: -5, people: 0, military: 10, religion: 0 },
      historicalNote:
        "Nhà Trần nhiều lần bỏ kinh thành để phản công."
    },
    {
      id: "tran6_c",
      text: "Vườn không nhà trống",
      description: "Chiến lược quyết định",
      effects: { finance: -5, people: 5, military: 15, religion: 0 },
      historicalNote:
        "Chiến thuật làm quân Nguyên thiếu lương nghiêm trọng."
    },
    {
      id: "tran6_d",
      text: "Cầu hòa để giữ dân",
      description: "Yên ngắn hạn",
      effects: { finance: 0, people: -10, military: -10, religion: 0 },
      historicalNote:
        "Hòa với Nguyên đồng nghĩa mất chủ quyền."
    }
  ]
}
, {
  id: "tran_6",
  character: "Trần Hưng Đạo",
  situation:
    "Quân Nguyên tiến sâu vào Đại Việt với lực lượng áp đảo.",
  philosophicalContext: "Hy sinh ngắn hạn vs Thắng lợi lâu dài",
  dialecticLaw:
    "Phủ định biện chứng: Từ bỏ cái trước mắt để giành thắng lợi bản chất.",
  yearContext: "1285",
  historicalQuote:
    "Giặc đến thì bỏ thành, giữ dân, giữ lực lượng. (Chiến lược nhà Trần)",
  leftChoice: {
    text: "Giữ thành, quyết chiến",
    effects: { finance: -10, people: -15, military: -10, religion: 0 }
  },
  rightChoice: {
    text: "Vườn không nhà trống",
    effects: { finance: -5, people: 5, military: 15, religion: 0 }
  },
  multipleChoices: [
    {
      id: "tran6_a",
      text: "Quyết tử giữ thành",
      description: "Tinh thần cao nhưng nguy hiểm",
      effects: { finance: -10, people: -15, military: -10, religion: 0 },
      historicalNote:
        "Đối đầu trực diện dễ thất bại trước quân Nguyên."
    },
    {
      id: "tran6_b",
      text: "Rút lui chiến lược",
      description: "Bảo toàn lực lượng",
      effects: { finance: -5, people: 0, military: 10, religion: 0 },
      historicalNote:
        "Nhà Trần nhiều lần bỏ kinh thành để phản công."
    },
    {
      id: "tran6_c",
      text: "Vườn không nhà trống",
      description: "Chiến lược quyết định",
      effects: { finance: -5, people: 5, military: 15, religion: 0 },
      historicalNote:
        "Chiến thuật làm quân Nguyên thiếu lương nghiêm trọng."
    },
    {
      id: "tran6_d",
      text: "Cầu hòa để giữ dân",
      description: "Yên ngắn hạn",
      effects: { finance: 0, people: -10, military: -10, religion: 0 },
      historicalNote:
        "Hòa với Nguyên đồng nghĩa mất chủ quyền."
    }
  ]
}
, {
  id: "tran_7",
  character: "Trần Hưng Đạo - Năm 1288",
  situation:
    "Thủy quân Nguyên rút lui qua sông Bạch Đằng.",
  philosophicalContext: "Thiên thời – Địa lợi – Nhân hòa",
  dialecticLaw:
    "Tổng hợp biện chứng: Thắng lợi chỉ xuất hiện khi hội đủ nhiều yếu tố.",
  yearContext: "1288",
  historicalQuote:
    "Sông núi nước Nam vua Nam ở. (Tinh thần độc lập dân tộc)",
  leftChoice: {
    text: "Đánh đuổi từng phần",
    effects: { finance: -5, people: 0, military: 5, religion: 0 }
  },
  rightChoice: {
    text: "Bố trí cọc ngầm, tiêu diệt toàn bộ",
    effects: { finance: -5, people: 10, military: 20, religion: 0 }
  },
  multipleChoices: [
    {
      id: "tran7_c",
      text: "Bẫy cọc Bạch Đằng",
      description: "Đỉnh cao quân sự",
      effects: { finance: -5, people: 10, military: 20, religion: 0 },
      historicalNote:
        "Chiến thắng Bạch Đằng 1288 kết thúc mộng xâm lược Nguyên."
    }
  ]
}
,{
  id: "tran_8",
  character: "Trần Hưng Đạo",
  situation:
    "Tinh thần quân sĩ suy giảm trước sức mạnh quân Nguyên.",
  philosophicalContext: "Danh dự vs Sợ hãi",
  dialecticLaw:
    "Ý thức xã hội tác động ngược trở lại tồn tại xã hội.",
  yearContext: "1284",
  historicalQuote:
    "Nếu bệ hạ muốn hàng, xin trước hãy chém đầu thần rồi hãy hàng. (Hịch tướng sĩ)",
  leftChoice: {
    text: "Dùng thưởng vật để khích lệ",
    effects: { finance: -10, people: 0, military: 5, religion: 0 }
  },
  rightChoice: {
    text: "Kêu gọi danh dự và lòng yêu nước",
    effects: { finance: 0, people: 10, military: 15, religion: 0 }
  },
  multipleChoices: []
}
,{
  id: "tran_9",
  character: "Triều đình nhà Trần - Sau năm 1288",
  situation:
    "Ba lần kháng chiến thắng lợi nhưng quốc gia kiệt quệ, ruộng đất bỏ hoang, ngân khố suy giảm.",
  philosophicalContext: "Chiến thắng vs Cái giá phải trả",
  dialecticLaw:
    "Quy luật hai mặt của thắng lợi: Mỗi chiến thắng quân sự đều mang theo tổn thất kinh tế – xã hội cần được giải quyết.",
  yearContext: "Cuối thế kỷ XIII",
  historicalQuote:
    "Dân mệt, của kiệt, nhưng chí chưa nguôi. (Tinh thần hậu chiến thời Trần)",
  leftChoice: {
    text: "Tiếp tục ưu tiên quân sự",
    effects: { finance: -10, people: -10, military: 10, religion: 0 }
  },
  rightChoice: {
    text: "Khôi phục kinh tế, giảm quân bị",
    effects: { finance: 10, people: 10, military: -10, religion: 0 }
  },
  multipleChoices: [
    {
      id: "tran9_a",
      text: "Duy trì quân đội lớn",
      description: "Phòng xa nhưng hao kiệt",
      effects: { finance: -10, people: -10, military: 10, religion: 0 },
      historicalNote:
        "Thời bình kéo dài khiến quân đội lớn trở thành gánh nặng."
    },
    {
      id: "tran9_b",
      text: "Khôi phục sản xuất nông nghiệp",
      description: "Củng cố gốc rễ quốc gia",
      effects: { finance: 10, people: 10, military: -10, religion: 0 },
      historicalNote:
        "Nhà Trần từng chú trọng khai khẩn ruộng đất sau chiến tranh."
    },
    {
      id: "tran9_c",
      text: "Tăng thuế để bù ngân khố",
      description: "Giải pháp ngắn hạn",
      effects: { finance: 15, people: -15, military: 0, religion: 0 },
      historicalNote:
        "Thuế nặng dễ gây bất ổn xã hội."
    },
    {
      id: "tran9_d",
      text: "Dựa vào Phật giáo an dân",
      description: "Ổn định tinh thần",
      effects: { finance: 0, people: 5, military: -5, religion: 10 },
      historicalNote:
        "Tôn giáo giúp trấn an nhưng không giải quyết kinh tế."
    }
  ]
}
, {
  id: "tran_10",
  character: "Trần Nhân Tông - Năm 1299",
  situation:
    "Sau khi hoàn thành sứ mệnh lịch sử, Trần Nhân Tông quyết định xuất gia, lập Thiền phái Trúc Lâm.",
  philosophicalContext: "Quyền lực vs Giác ngộ",
  dialecticLaw:
    "Phủ định của phủ định: Từ quyền lực thế tục quay về tinh thần, nhưng tinh thần lại tác động ngược trở lại xã hội.",
  yearContext: "1299",
  historicalQuote:
    "Ở đời vui đạo hãy tùy duyên. (Trần Nhân Tông)",
  leftChoice: {
    text: "Tiếp tục can thiệp sâu vào triều chính",
    effects: { finance: 5, people: -5, military: 0, religion: -5 }
  },
  rightChoice: {
    text: "Xuất gia, dẫn dắt tinh thần quốc gia",
    effects: { finance: 0, people: 10, military: -5, religion: 15 }
  },
  multipleChoices: [
    {
      id: "tran10_a",
      text: "Giữ quyền lực thực tế",
      description: "Ổn định ngắn hạn",
      effects: { finance: 5, people: -5, military: 0, religion: -5 },
      historicalNote:
        "Can thiệp quá sâu làm suy yếu quyền vua kế vị."
    },
    {
      id: "tran10_b",
      text: "Xuất gia lập Trúc Lâm",
      description: "Quyết định lịch sử",
      effects: { finance: 0, people: 10, military: -5, religion: 15 },
      historicalNote:
        "Thiền phái Trúc Lâm mang bản sắc Phật giáo Việt."
    },
    {
      id: "tran10_c",
      text: "Thoái vị nhưng vẫn nắm quân đội",
      description: "Quyền lực kép",
      effects: { finance: 0, people: -5, military: 10, religion: 0 },
      historicalNote:
        "Quyền lực chồng chéo dễ gây rối loạn."
    },
    {
      id: "tran10_d",
      text: "Rút hoàn toàn khỏi chính sự",
      description: "Buông bỏ triệt để",
      effects: { finance: 0, people: 5, military: -10, religion: 10 },
      historicalNote:
        "Triều đình mất đi chỗ dựa tinh thần."
    }
  ]
}
, {
  id: "tran_11",
  character: "Triều đình nhà Trần",
  situation:
    "Phật giáo dần suy yếu, Nho giáo được trọng dụng để xây dựng kỷ cương quan lại.",
  philosophicalContext: "Từ bi vs Kỷ luật",
  dialecticLaw:
    "Chuyển hóa ý thức hệ: Khi xã hội phức tạp hơn, nhu cầu kỷ luật thay thế cảm hóa tinh thần.",
  yearContext: "Thế kỷ XIV",
  historicalQuote:
    "Muốn trị nước lâu dài, phải lấy lễ nghĩa làm gốc. (Tinh thần Nho giáo)",
  leftChoice: {
    text: "Tiếp tục đề cao Phật giáo",
    effects: { finance: 0, people: 5, military: -5, religion: 10 }
  },
  rightChoice: {
    text: "Ưu tiên Nho giáo và pháp luật",
    effects: { finance: 5, people: -5, military: 5, religion: -10 }
  },
  multipleChoices: [
    {
      id: "tran11_b",
      text: "Đẩy mạnh Nho giáo",
      description: "Kỷ cương nhưng khô cứng",
      effects: { finance: 5, people: -5, military: 5, religion: -10 },
      historicalNote:
        "Cuối Trần, Nho giáo dần chiếm vị trí chủ đạo."
    }
  ]
}
, {
  id: "tran_12",
  character: "Triều đình nhà Trần - Cuối thế kỷ XIV",
  situation:
    "Các vương hầu họ Trần nắm nhiều đất đai và binh quyền, làm suy yếu trung ương.",
  philosophicalContext: "Phân quyền vs Tập quyền",
  dialecticLaw:
    "Mâu thuẫn nội tại của giai cấp thống trị dẫn đến suy vong.",
  yearContext: "Cuối thế kỷ XIV",
  historicalQuote:
    "Quyền chia quá rộng, triều cương tất loạn. (Sử luận)",
  leftChoice: {
    text: "Siết chặt quyền lực trung ương",
    effects: { finance: 5, people: 0, military: -10, religion: 0 }
  },
  rightChoice: {
    text: "Nhượng bộ quý tộc",
    effects: { finance: -5, people: -5, military: 5, religion: 0 }
  },
  multipleChoices: []
}, {
  id: "tran_13",
  character: "Hồ Quý Ly - Cuối thế kỷ XIV",
  situation:
    "Hồ Quý Ly từng bước thao túng triều đình, đề xuất cải cách mạnh mẽ.",
  philosophicalContext: "Cải cách vs Ổn định",
  dialecticLaw:
    "Khi cái cũ không còn đáp ứng thực tiễn, cái mới tất yếu xuất hiện – dù gây chấn động.",
  yearContext: "1390 - 1400",
  historicalQuote:
    "Thời thế đã khác, không đổi ắt vong. (Tinh thần cải cách Hồ Quý Ly)",
  leftChoice: {
    text: "Giữ nguyên trật tự cũ",
    effects: { finance: -5, people: -10, military: -5, religion: 0 }
  },
  rightChoice: {
    text: "Ủng hộ cải cách của Hồ Quý Ly",
    effects: { finance: 10, people: -5, military: 5, religion: -5 }
  },
  multipleChoices: [
    {
      id: "tran13_b",
      text: "Cải cách mạnh tay",
      description: "Tiến bộ nhưng gây phản kháng",
      effects: { finance: 10, people: -5, military: 5, religion: -5 },
      historicalNote:
        "Cải cách giúp hiện đại hóa nhưng làm mất lòng nhiều tầng lớp."
    }
  ]
}


    ]
  }
  ,
  {
    id: "le_so",
    name: "Nhà Lê Sơ",
    period: "1428 - 1527",
    description:
    "Triều đại được thành lập sau chiến thắng Lam Sơn, bản lĩnh dân tộc, hưng thịnh về văn hóa, kinh tế và quân sự, thời kỳ Lê Thánh Tông được coi là thời đại hoàng kim.",
    icon: "🏛️",
    startingStats: { finance: 50, people: 50, military: 50, religion: 50 },
    cards: [
{
  id: "le_1",
  character: "Lê Lợi – Năm 1428",
  situation:
    "Cuộc khởi nghĩa Lam Sơn thắng lợi, nhà Minh bị đánh đuổi. Một triều đại mới cần được xác lập.",
  philosophicalContext: "Khởi nghĩa vs Chính thống",
  dialecticLaw:
    "Quy luật phủ định của phủ định: Ách đô hộ bị phủ định bằng khởi nghĩa, từ đó hình thành một chính quyền chính thống mới.",
  yearContext: "1428",
  historicalQuote:
    "Việc nhân nghĩa cốt ở yên dân. (Bình Ngô đại cáo – Nguyễn Trãi)",
  leftChoice: {
    text: "Lập triều đại mới – Nhà Lê",
    effects: { finance: -5, people: 15, military: 10, religion: 0 }
  },
  rightChoice: {
    text: "Tiếp tục cai trị bằng quân sự",
    effects: { finance: -10, people: -5, military: 15, religion: 0 }
  },
  multipleChoices: [
    {
      id: "le1_a",
      text: "Lập triều đại mới – Nhà Lê",
      description: "Chính thống, hợp lòng dân",
      effects: { finance: -5, people: 15, military: 10, religion: 0 },
      historicalNote:
        "Năm 1428, Lê Lợi lên ngôi, mở đầu nhà Lê sơ."
    },
    {
      id: "le1_b",
      text: "Tiếp tục cai trị bằng quân sự",
      description: "Ổn định nhanh nhưng dễ phản kháng",
      effects: { finance: -10, people: -5, military: 15, religion: 0 },
      historicalNote:
        "Quân sự không thể thay thế chính danh lâu dài."
    },
    {
      id: "le1_c",
      text: "Trao quyền cho công thần",
      description: "Giữ lòng tướng lĩnh",
      effects: { finance: -10, people: 5, military: 5, religion: 0 },
      historicalNote:
        "Công thần Lam Sơn có ảnh hưởng lớn đầu triều."
    },
    {
      id: "le1_d",
      text: "Dựa vào Nho giáo xây dựng triều chính",
      description: "Định hình tư tưởng cai trị",
      effects: { finance: 0, people: 5, military: 0, religion: 10 },
      historicalNote:
        "Nhà Lê đề cao Nho giáo hơn Phật giáo."
    }
  ]
},
{
  id: "le_2",
  character: "Lê Thái Tổ – Năm 1429",
  situation:
    "Công thần Lam Sơn ngày càng chuyên quyền, đe dọa quyền lực trung ương.",
  philosophicalContext: "Công lao vs Pháp luật",
  dialecticLaw:
    "Quy luật mâu thuẫn: Công lao nếu không bị kiểm soát sẽ biến thành thế lực đối lập.",
  yearContext: "1429",
  historicalQuote:
    "Dựng nước khó, giữ nước càng khó.",
  leftChoice: {
    text: "Trấn áp công thần",
    effects: { finance: 0, people: -10, military: 5, religion: 0 }
  },
  rightChoice: {
    text: "Dung hòa và kiểm soát",
    effects: { finance: -5, people: 10, military: -5, religion: 0 }
  },
  multipleChoices: [
    {
      id: "le2_a",
      text: "Trấn áp công thần",
      description: "Củng cố quyền lực vua",
      effects: { finance: 0, people: -10, military: 5, religion: 0 },
      historicalNote:
        "Nhiều công thần Lam Sơn bị xử lý."
    },
    {
      id: "le2_b",
      text: "Dung hòa và kiểm soát",
      description: "Ổn định lâu dài",
      effects: { finance: -5, people: 10, military: -5, religion: 0 },
      historicalNote:
        "Cần cân bằng công – pháp."
    },
    {
      id: "le2_c",
      text: "Giao quyền quân sự cho công thần",
      description: "Nguy cơ quân phiệt",
      effects: { finance: 0, people: -5, military: 10, religion: 0 },
      historicalNote:
        "Quân quyền tập trung dễ gây loạn."
    },
    {
      id: "le2_d",
      text: "Nhờ Nho sĩ điều hòa triều chính",
      description: "Tư tưởng trị quốc",
      effects: { finance: 0, people: 5, military: -5, religion: 10 },
      historicalNote:
        "Nho sĩ ngày càng có vai trò lớn."
    }
  ]
},
{
  id: "le_3",
  character: "Lê Nhân Tông – Năm 1442",
  situation:
    "Triều đình còn non trẻ, quyền lực tập trung vào hoàng hậu và đại thần.",
  philosophicalContext: "Ổn định vs Cải cách",
  dialecticLaw:
    "Quy luật lượng – chất: Tích tụ quyền lực sai lệch sẽ dẫn tới biến loạn.",
  yearContext: "1442",
  historicalQuote:
    "Triều chính không minh, ắt sinh biến.",
  leftChoice: {
    text: "Duy trì trật tự hiện tại",
    effects: { finance: 5, people: -10, military: 0, religion: 0 }
  },
  rightChoice: {
    text: "Cải tổ triều chính",
    effects: { finance: -5, people: 10, military: -5, religion: 0 }
  },
  multipleChoices: [
    {
      id: "le3_a",
      text: "Duy trì trật tự hiện tại",
      description: "Ngắn hạn ổn định",
      effects: { finance: 5, people: -10, military: 0, religion: 0 },
      historicalNote:
        "Triều đình thiếu cải cách dễ suy yếu."
    },
    {
      id: "le3_b",
      text: "Cải tổ triều chính",
      description: "Lấy lại quyền lực trung ương",
      effects: { finance: -5, people: 10, military: -5, religion: 0 },
      historicalNote:
        "Cải tổ là tiền đề cho thời thịnh trị."
    },
    {
      id: "le3_c",
      text: "Trao thêm quyền cho ngoại thích",
      description: "Nguy hiểm",
      effects: { finance: 0, people: -15, military: 5, religion: 0 },
      historicalNote:
        "Ngoại thích thường gây loạn triều đình."
    },
    {
      id: "le3_d",
      text: "Dựa vào Nho giáo ổn định xã hội",
      description: "Ổn định tư tưởng",
      effects: { finance: 0, people: 5, military: -5, religion: 10 },
      historicalNote:
        "Nho giáo là trụ cột tư tưởng thời Lê."
    }
  ]
},
{
  id: "le_4",
  character: "Lê Thánh Tông – Năm 1460",
  situation:
    "Triều đình cần một cuộc cải cách toàn diện để củng cố quốc gia.",
  philosophicalContext: "Pháp trị vs Nhân trị",
  dialecticLaw:
    "Quy luật tổ chức xã hội: Pháp luật mạnh tạo nên trật tự bền vững.",
  yearContext: "1460",
  historicalQuote:
    "Pháp luật là phép công của thiên hạ.",
  leftChoice: {
    text: "Cải cách mạnh tay",
    effects: { finance: -5, people: 10, military: 10, religion: 0 }
  },
  rightChoice: {
    text: "Giữ mô hình cũ",
    effects: { finance: 5, people: -10, military: -5, religion: 0 }
  },
  multipleChoices: [
    {
      id: "le4_a",
      text: "Cải cách mạnh tay",
      description: "Mở ra thời Hồng Đức",
      effects: { finance: -5, people: 10, military: 10, religion: 0 },
      historicalNote:
        "Lê Thánh Tông đưa nhà Lê lên đỉnh cao."
    },
    {
      id: "le4_b",
      text: "Giữ mô hình cũ",
      description: "Bảo thủ",
      effects: { finance: 5, people: -10, military: -5, religion: 0 },
      historicalNote:
        "Không cải cách sẽ trì trệ."
    },
    {
      id: "le4_c",
      text: "Chỉ cải cách quân sự",
      description: "Thiếu toàn diện",
      effects: { finance: -5, people: 0, military: 10, religion: 0 },
      historicalNote:
        "Quân sự mạnh nhưng xã hội yếu."
    },
    {
      id: "le4_d",
      text: "Cải cách giáo dục Nho học",
      description: "Đào tạo quan lại",
      effects: { finance: -5, people: 5, military: 0, religion: 10 },
      historicalNote:
        "Khoa cử phát triển mạnh thời Hồng Đức."
    }
  ]
},
{
  id: "le_5",
  character: "Luật Hồng Đức – Năm 1483",
  situation:
    "Nhà nước cần một bộ luật thống nhất để quản lý xã hội.",
  philosophicalContext: "Pháp luật vs Tập quán",
  dialecticLaw:
    "Quy luật thể chế hóa: Ý chí nhà nước phải được pháp luật hóa.",
  yearContext: "1483",
  historicalQuote:
    "Phép nước là thước đo của xã hội.",
  leftChoice: {
    text: "Ban hành Luật Hồng Đức",
    effects: { finance: 5, people: 10, military: 0, religion: 0 }
  },
  rightChoice: {
    text: "Dựa vào lệ làng",
    effects: { finance: 0, people: -5, military: 0, religion: 5 }
  },
  multipleChoices: [
    {
      id: "le5_a",
      text: "Ban hành Luật Hồng Đức",
      description: "Pháp trị tiến bộ",
      effects: { finance: 5, people: 10, military: 0, religion: 0 },
      historicalNote:
        "Luật Hồng Đức bảo vệ cả dân và quốc gia."
    },
    {
      id: "le5_b",
      text: "Dựa vào lệ làng",
      description: "Thiếu thống nhất",
      effects: { finance: 0, people: -5, military: 0, religion: 5 },
      historicalNote:
        "Lệ làng không đủ quản lý quốc gia."
    },
    {
      id: "le5_c",
      text: "Trao quyền xét xử cho địa phương",
      description: "Phân quyền pháp lý",
      effects: { finance: 0, people: 0, military: -5, religion: 0 },
      historicalNote:
        "Dễ sinh lạm quyền."
    },
    {
      id: "le5_d",
      text: "Ưu tiên luật hình sự",
      description: "Răn đe mạnh",
      effects: { finance: 0, people: -10, military: 5, religion: 0 },
      historicalNote:
        "Pháp trị cần cân bằng nhân đạo."
    }
  ]
},
{
  id: "le_6",
  character: "Lê Thánh Tông – Năm 1471",
  situation:
    "Đại Việt tiến hành chiến dịch đánh Chiêm Thành.",
  philosophicalContext: "Mở rộng vs Ổn định",
  dialecticLaw:
    "Quy luật không gian lịch sử: Mở rộng lãnh thổ là xu thế phát triển nhà nước.",
  yearContext: "1471",
  historicalQuote:
    "Bờ cõi mở rộng, xã tắc vững bền.",
  leftChoice: {
    text: "Tiến công Chiêm Thành",
    effects: { finance: -10, people: 5, military: 15, religion: 0 }
  },
  rightChoice: {
    text: "Giữ nguyên biên giới",
    effects: { finance: 5, people: 0, military: -5, religion: 0 }
  },
  multipleChoices: [
    {
      id: "le6_a",
      text: "Tiến công Chiêm Thành",
      description: "Mở rộng lãnh thổ",
      effects: { finance: -10, people: 5, military: 15, religion: 0 },
      historicalNote:
        "Năm 1471, Chiêm Thành suy vong."
    },
    {
      id: "le6_b",
      text: "Giữ nguyên biên giới",
      description: "An toàn ngắn hạn",
      effects: { finance: 5, people: 0, military: -5, religion: 0 },
      historicalNote:
        "Không tận dụng thời cơ lịch sử."
    },
    {
      id: "le6_c",
      text: "Đánh phòng thủ",
      description: "Không triệt để",
      effects: { finance: -5, people: 0, military: 5, religion: 0 },
      historicalNote:
        "Chiêm Thành vẫn là mối đe dọa."
    },
    {
      id: "le6_d",
      text: "Cầu hòa lâu dài",
      description: "Không bền vững",
      effects: { finance: 0, people: -5, military: -10, religion: 0 },
      historicalNote:
        "Chiêm Thành thường xuyên xung đột."
    }
  ]
},
{
  id: "le_7",
  character: "Hậu Lê – Đầu thế kỷ XVI",
  situation:
    "Triều đình bắt đầu suy yếu, quan lại tham nhũng.",
  philosophicalContext: "Cải cách vs Thoái hóa",
  dialecticLaw:
    "Quy luật suy thoái: Khi mâu thuẫn tích tụ mà không giải quyết, hệ thống sẽ sụp đổ.",
  yearContext: "1500",
  historicalQuote:
    "Quan tham thì dân khổ.",
  leftChoice: {
    text: "Chấn chỉnh triều chính",
    effects: { finance: -5, people: 10, military: 5, religion: 0 }
  },
  rightChoice: {
    text: "Làm ngơ",
    effects: { finance: 5, people: -15, military: -5, religion: 0 }
  },
  multipleChoices: [
    {
      id: "le7_a",
      text: "Chấn chỉnh triều chính",
      description: "Cứu vãn triều đại",
      effects: { finance: -5, people: 10, military: 5, religion: 0 },
      historicalNote:
        "Thiếu cải cách khiến nhà Lê suy yếu."
    },
    {
      id: "le7_b",
      text: "Làm ngơ",
      description: "Thoái hóa",
      effects: { finance: 5, people: -15, military: -5, religion: 0 },
      historicalNote:
        "Tham nhũng lan rộng cuối Lê sơ."
    },
    {
      id: "le7_c",
      text: "Dựa vào quân đội",
      description: "Nguy cơ quân phiệt",
      effects: { finance: -5, people: -5, military: 10, religion: 0 },
      historicalNote:
        "Quân đội không giải quyết gốc rễ."
    },
    {
      id: "le7_d",
      text: "Dựa vào Nho giáo răn đe",
      description: "Ổn định tư tưởng",
      effects: { finance: 0, people: 5, military: -5, religion: 10 },
      historicalNote:
        "Đạo đức không đủ nếu thiếu pháp luật."
    }
  ]
},
{
  id: "le_8",
  character: "Lê Tương Dực – Năm 1510",
  situation:
    "Vua ăn chơi xa xỉ, xây dựng cung điện tốn kém.",
  philosophicalContext: "Hưởng lạc vs Trách nhiệm",
  dialecticLaw:
    "Quy luật phản tác dụng: Xa hoa của vua làm gia tăng bất mãn xã hội.",
  yearContext: "1510",
  historicalQuote:
    "Vua sa đọa thì nước nguy.",
  leftChoice: {
    text: "Tiết chế chi tiêu",
    effects: { finance: 10, people: 5, military: 0, religion: 0 }
  },
  rightChoice: {
    text: "Tiếp tục xây dựng xa hoa",
    effects: { finance: -15, people: -15, military: 0, religion: 0 }
  },
  multipleChoices: [
    {
      id: "le8_a",
      text: "Tiết chế chi tiêu",
      description: "Giảm bất mãn",
      effects: { finance: 10, people: 5, military: 0, religion: 0 },
      historicalNote:
        "Xa xỉ là nguyên nhân khiến triều đình suy yếu."
    },
    {
      id: "le8_b",
      text: "Tiếp tục xây dựng xa hoa",
      description: "Tự hủy triều đại",
      effects: { finance: -15, people: -15, military: 0, religion: 0 },
      historicalNote:
        "Lê Tương Dực bị gọi là Quỷ vương."
    },
    {
      id: "le8_c",
      text: "Tăng thuế bù chi",
      description: "Đè nặng dân",
      effects: { finance: 5, people: -20, military: 0, religion: 0 },
      historicalNote:
        "Thuế nặng làm bùng nổ khởi nghĩa."
    },
    {
      id: "le8_d",
      text: "Giao xây dựng cho quan lại",
      description: "Mất kiểm soát",
      effects: { finance: -10, people: -5, military: 0, religion: 0 },
      historicalNote:
        "Tham nhũng gia tăng."
    }
  ]
},
{
  id: "le_9",
  character: "Khởi nghĩa nông dân – Năm 1516",
  situation:
    "Khởi nghĩa Trần Cảo bùng nổ, đe dọa triều đình.",
  philosophicalContext: "Đàn áp vs Cải cách",
  dialecticLaw:
    "Quy luật đấu tranh giai cấp: Áp bức kéo dài tất yếu sinh phản kháng.",
  yearContext: "1516",
  historicalQuote:
    "Dân đói thì loạn.",
  leftChoice: {
    text: "Đàn áp khởi nghĩa",
    effects: { finance: -10, people: -15, military: 10, religion: 0 }
  },
  rightChoice: {
    text: "Giảm thuế, an dân",
    effects: { finance: -10, people: 15, military: -5, religion: 0 }
  },
  multipleChoices: [
    {
      id: "le9_a",
      text: "Đàn áp khởi nghĩa",
      description: "Ổn định ngắn hạn",
      effects: { finance: -10, people: -15, military: 10, religion: 0 },
      historicalNote:
        "Đàn áp không giải quyết gốc rễ."
    },
    {
      id: "le9_b",
      text: "Giảm thuế, an dân",
      description: "Giảm mâu thuẫn xã hội",
      effects: { finance: -10, people: 15, military: -5, religion: 0 },
      historicalNote:
        "An dân là giải pháp bền vững."
    },
    {
      id: "le9_c",
      text: "Chia quyền cho địa phương",
      description: "Mất kiểm soát",
      effects: { finance: 0, people: 0, military: -10, religion: 0 },
      historicalNote:
        "Phân quyền dễ sinh cát cứ."
    },
    {
      id: "le9_d",
      text: "Dựa vào tôn giáo xoa dịu",
      description: "Không triệt để",
      effects: { finance: 0, people: 5, military: -5, religion: 10 },
      historicalNote:
        "Không giải quyết nguyên nhân kinh tế."
    }
  ]
},
{
  id: "le_10",
  character: "Kết thúc Lê Sơ – Năm 1527",
  situation:
    "Triều đình suy kiệt, Mạc Đăng Dung chuẩn bị đoạt ngôi.",
  philosophicalContext: "Suy vong vs Tất yếu lịch sử",
  dialecticLaw:
    "Quy luật phủ định: Một triều đại không còn khả năng tự cải cách sẽ bị thay thế.",
  yearContext: "1527",
  historicalQuote:
    "Thế cùng thì biến.",
  leftChoice: {
    text: "Cải cách khẩn cấp",
    effects: { finance: -10, people: 10, military: 5, religion: 0 }
  },
  rightChoice: {
    text: "Buông xuôi",
    effects: { finance: 0, people: -20, military: -10, religion: 0 }
  },
  multipleChoices: [
    {
      id: "le10_a",
      text: "Cải cách khẩn cấp",
      description: "Nỗ lực cuối cùng",
      effects: { finance: -10, people: 10, military: 5, religion: 0 },
      historicalNote:
        "Cải cách muộn không cứu được triều đại."
    },
    {
      id: "le10_b",
      text: "Buông xuôi",
      description: "Sụp đổ tất yếu",
      effects: { finance: 0, people: -20, military: -10, religion: 0 },
      historicalNote:
        "Năm 1527, Mạc Đăng Dung lập nhà Mạc."
    },
    {
      id: "le10_c",
      text: "Trao quyền cho tướng lĩnh",
      description: "Quân phiệt hóa",
      effects: { finance: 0, people: -5, military: 10, religion: 0 },
      historicalNote:
        "Quân đội không thể cứu triều đình mục nát."
    },
    {
      id: "le10_d",
      text: "Cầu viện ngoại bang",
      description: "Mất chủ quyền",
      effects: { finance: 0, people: -15, military: -5, religion: 0 },
      historicalNote:
        "Đi ngược lợi ích dân tộc."
    }
  ]
}
]

  }
]
