import type { Dynasty, Card } from "./types"

// Các triều đại Việt Nam
export const vietnamDynasties: Dynasty[] = [
  {
    id: "ly",
    name: "Nhà Lý",
    period: "1009 - 1225",
    description: "Triều đại đầu tiên độc lập lâu dài, phát triển văn hóa Phật giáo và xây dựng đất nước",
    icon: "🏛️",
    cards: [
      {
        id: "ly1",
        character: "Lý Công Uẩn - Năm 1010",
        situation:
          "Sau khi lên ngôi, bạn phải quyết định di đô từ Hoa Lư về Thăng Long. Quý tộc phản đối vì phải bỏ đất đai tổ tiên. Nhưng Thăng Long có vị trí địa lý tốt hơn, dễ phát triển kinh tế và quốc phòng.",
        philosophicalContext: "Bảo thủ vs Tiến bộ",
        dialecticLaw: "Quy luật phủ định của phủ định - Từ bỏ cái cũ để phát triển cái mới",
        yearContext: "1010",
        leftChoice: {
          text: "Giữ lại đô Hoa Lư",
          effects: { finance: -10, people: 5, military: -15, religion: 10 },
        },
        rightChoice: {
          text: "Dời đô về Thăng Long",
          effects: { finance: 20, people: 15, military: 20, religion: -5 },
        },
        multipleChoices: [
          {
            id: "ly1_a",
            text: "Giữ Hoa Lư, tăng cường phòng thủ",
            description: "Chi phí thấp nhưng khó phát triển",
            cost: { finance: 3, people: 0, military: 2, religion: 0 },
            effects: { finance: -5, people: 5, military: -10, religion: 8 },
            historicalNote: "Hoa Lư là kinh đô của nhà Đinh và nhà Tiền Lê, nằm trong vùng núi hiểm trở ở Ninh Bình. Tuy dễ phòng thủ nhưng địa hình khép kín, khó mở rộng kinh tế và giao lưu văn hóa. Việc giữ lại Hoa Lư có thể đảm bảo an ninh ngắn hạn nhưng hạn chế sự phát triển lâu dài của quốc gia.",
            philosophicalExplanation: "Đây là biểu hiện của tư tưởng bảo thủ - giữ gìn cái cũ một cách máy móc. Quy luật phủ định của phủ định cho thấy: sự phát triển đòi hỏi phải từ bỏ những cái lạc hậu để tiến lên. Giữ Hoa Lư là vi phạm quy luật khách quan của sự phát triển xã hội."
          },
          {
            id: "ly1_b",
            text: "Dời đô từ từ, xây dựng cơ sở hạ tầng trước",
            description: "Thận trọng nhưng tốn kém và chậm",
            cost: { finance: 8, people: 5, military: 3, religion: 0 },
            effects: { finance: 10, people: 8, military: 10, religion: -5 },
            historicalNote: "Phương án thận trọng này cho phép chuẩn bị kỹ lưỡng trước khi di chuyển. Xây dựng cung điện, thành quách, và hệ thống giao thông trước, sau đó mới chính thức di chuyển. Tuy an toàn nhưng tốn nhiều thời gian và tài nguyên, có thể bỏ lỡ thời cơ phát triển.",
            philosophicalExplanation: "Đây là sự nhận thức được quy luật chuyển hóa từ lượng sang chất - tích lũy dần dần các điều kiện vật chất trước khi thực hiện bước nhảy vọt. Tuy nhiên, quá thận trọng có thể làm chậm tiến trình lịch sử, không nắm bắt được thời cơ thuận lợi."
          },
          {
            id: "ly1_c",
            text: "Dời đô ngay lập tức, động viên toàn quốc",
            description: "Quyết đoán nhưng rủi ro cao",
            cost: { finance: 10, people: 5, military: 3, religion: 2 },
            effects: { finance: 25, people: 20, military: 25, religion: -8 },
            historicalQuote: "Thăng Long địa thế rồng cuộn, hổ ngồi, tứ linh tụ hội, thật là đất vương khí. Trẫm muốn dời đô ra đây để định vận nghìn thu.\n\n- Chiếu dời đô của Lý Thái Tổ, năm 1010",
            historicalNote: "Lý Công Uẩn đã chọn cách này trong lịch sử. Chiếu dời đô năm 1010 có câu nổi tiếng: 'Thăng Long địa thế rồng cuộn, hổ ngồi, là chốn đất vương nên tối muốn lập kinh đô tại đây'. Quyết định táo bạo này đã mở ra kỷ nguyên mới cho Đại Việt, biến Thăng Long thành trung tâm chính trị-kinh tế-văn hóa phát triển.",
            philosophicalExplanation: "Đây là sự vận dụng sáng tạo quy luật phủ định của phủ định - dám phủ định cái cũ để khẳng định cái mới trên nền tảng cao hơn. Lý Công Uẩn thể hiện tư duy biện chứng: nhận thức được mâu thuẫn giữa 'giữ gìn truyền thống' và 'phát triển đất nước', và chọn giải pháp phát triển dù phải đối mặt với rủi ro."
          },
          {
            id: "ly1_d",
            text: "Thiết lập hai đô, Hoa Lư và Thăng Long",
            description: "Thỏa hiệp nhưng tốn kém gấp đôi",
            cost: { finance: 15, people: 10, military: 8, religion: 2 },
            effects: { finance: -10, people: 12, military: 5, religion: 5 },
            historicalNote: "Giải pháp dung hòa này giữ Hoa Lư như kinh đô phụ và Thăng Long làm kinh đô chính. Tuy làm hài lòng cả hai phe nhóm nhưng chia nhỏ nguồn lực, tốn kém gấp đôi để duy trì hai hệ thống hành chính. Trong lịch sử, không có triều đại nào thành công với mô hình này.",
            philosophicalExplanation: "Đây là thể hiện của chủ nghĩa điều hòa - cố gắng dung hòa các mặt đối lập một cách hình thức, không giải quyết được mâu thuẫn về bản chất. Quy luật thống nhất và đấu tranh của các mặt đối lập cho thấy: mâu thuẫn phải được giải quyết triệt để, không thể hòa giải máy móc."
          }
        ]
      },
      {
        id: "ly2",
        character: "Vấn đề Phật giáo - Năm 1028",
        situation:
          "Phật giáo đang phát triển mạnh. Một số sư muốn xây thêm nhiều chùa, tốn kém ngân khố. Nông dân phàn nàn thuế nặng. Bạn cần cân bằng giữa tín ngưỡng và đời sống nhân dân.",
        philosophicalContext: "Tinh thần vs Vật chất",
        dialecticLaw: "Quy luật thống nhất và đấu tranh của các mặt đối lập - Đời sống vật chất và tinh thần phải hài hòa",
        leftChoice: {
          text: "Hạn chế xây chùa",
          effects: { finance: 15, people: 15, military: 5, religion: -20 },
        },
        rightChoice: {
          text: "Tiếp tục xây chùa",
          effects: { finance: -12, people: -5, military: 0, religion: 20 },
        },
      },
      {
        id: "ly3",
        character: "Chiến tranh với Tống - Năm 1075",
        situation:
          "Quân Tống xâm lược. Lý Thường Kiệt đề nghị đánh phủ đầu, tấn công vào đất Tống trước. Triều thần lo sợ động binh tốn kém. Nhưng đánh trước có thể làm chủ động thế trận.",
        philosophicalContext: "Phòng thủ vs Chủ động",
        dialecticLaw: "Quy luật chuyển hóa từ lượng sang chất - Hành động quyết liệt có thể tạo bước ngoặt",
        leftChoice: {
          text: "Đợi địch đánh vào",
          effects: { finance: 10, people: -15, military: -15, religion: 5 },
        },
        rightChoice: {
          text: "Tấn công phủ đầu",
          effects: { finance: -10, people: 25, military: 30, religion: 5 },
        },
        multipleChoices: [
          {
            id: "ly3_a",
            text: "Phòng thủ thụ động, chờ địch tấn công",
            description: "Tiết kiệm nhưng bất lợi về chiến lược",
            cost: { finance: 2, people: 0, military: 3, religion: 0 },
            effects: { finance: 8, people: -12, military: -10, religion: 5 }
          },
          {
            id: "ly3_b",
            text: "Chuẩn bị phòng thủ chặt chẽ, đào hào lũy",
            description: "Thận trọng nhưng vẫn mất chủ động",
            cost: { finance: 8, people: 5, military: 5, religion: 0 },
            effects: { finance: -5, people: -5, military: 5, religion: 3 }
          },
          {
            id: "ly3_c",
            text: "Tấn công phủ đầu như Lý Thường Kiệt đề xuất",
            description: "Mạo hiểm nhưng chiếm chủ động",
            cost: { finance: 10, people: 5, military: 8, religion: 2 },
            effects: { finance: -5, people: 30, military: 35, religion: 5 }
          },
          {
            id: "ly3_d",
            text: "Huy động toàn dân, động viên tinh thần dân tộc",
            description: "Tốn kém nhưng sức mạnh tổng lực",
            cost: { finance: 12, people: 10, military: 8, religion: 5 },
            effects: { finance: -15, people: 30, military: 25, religion: 10 }
          }
        ]
      },
      {
        id: "ly4",
        character: "Cải cách ruộng đất - Năm 1042",
        situation:
          "Quý tộc chiếm nhiều ruộng đất, nông dân thiếu đất canh tác. Bạn muốn chia đều ruộng đất nhưng quý tộc phản đối dữ dội, có thể gây nội loạn.",
        philosophicalContext: "Công bằng xã hội vs Ổn định",
        dialecticLaw: "Mâu thuẫn giữa giai cấp - Xung đột lợi ích giữa tầng lớp thống trị và lao động",
        leftChoice: {
          text: "Giữ nguyên hiện trạng",
          effects: { finance: 10, people: -25, military: 10, religion: -5 },
        },
        rightChoice: {
          text: "Cải cách ruộng đất",
          effects: { finance: -15, people: 30, military: -15, religion: 5 },
        },
        multipleChoices: [
          {
            id: "ly4_a",
            text: "Không thay đổi, giữ nguyên hiện trạng",
            description: "An toàn nhưng bất công",
            cost: { finance: 0, people: 0, military: 0, religion: 0 },
            effects: { finance: 8, people: -28, military: 8, religion: -3 }
          },
          {
            id: "ly4_b",
            text: "Cải cách nhẹ, hạn chế số ruộng tối đa",
            description: "Thỏa hiệp, ít rủi ro",
            cost: { finance: 5, people: 3, military: 5, religion: 2 },
            effects: { finance: -5, people: 15, military: -8, religion: 3 }
          },
          {
            id: "ly4_c",
            text: "Cải cách toàn diện, tịch thu và phân phối lại",
            description: "Công bằng nhưng rủi ro nội loạn cao",
            cost: { finance: 10, people: 8, military: 12, religion: 5 },
            effects: { finance: -18, people: 35, military: -18, religion: 8 }
          },
          {
            id: "ly4_d",
            text: "Mở rộng khai hoang, tăng diện tích canh tác",
            description: "Giải pháp sáng tạo, tốn nhiều nguồn lực",
            cost: { finance: 15, people: 10, military: 10, religion: 3 },
            effects: { finance: 5, people: 25, military: 5, religion: 2 }
          }
        ]
      },
      {
        id: "ly5",
        character: "Quan hệ ngoại giao với Tống - Năm 1060",
        situation:
          "Tống muốn lập quan hệ thương mại, nhưng đòi Đại Việt phải chấp nhận làm quốc phụ thuộc về danh nghĩa. Thương mại sẽ giàu có nhưng mất tự chủ.",
        philosophicalContext: "Độc lập vs Thịnh vượng",
        dialecticLaw: "Hình thức và nội dung - Hình thức phụ thuộc không phản ánh bản chất độc lập",
        leftChoice: {
          text: "Chấp nhận quan hệ phụ thuộc",
          effects: { finance: 15, people: -25, military: -20, religion: 0 },
        },
        rightChoice: {
          text: "Từ chối, giữ độc lập",
          effects: { finance: -8, people: 25, military: 15, religion: 12 },
        },
      },
      {
        id: "ly6",
        character: "Khoa cử - Năm 1075",
        situation:
          "Bạn muốn mở khoa thi để tuyển nhân tài từ dân gian. Nhưng quý tộc lo mất quyền lợi, muốn chỉ con cháu họ mới được làm quan.",
        philosophicalContext: "Dân chủ vs Quý tộc",
        dialecticLaw: "Sản xuất và quan hệ sản xuất - Phát triển cần người tài giỏi, không phân biệt giai cấp",
        leftChoice: {
          text: "Chỉ quý tộc làm quan",
          effects: { finance: -10, people: -20, military: -10, religion: 15 },
        },
        rightChoice: {
          text: "Mở khoa thi cho dân",
          effects: { finance: 18, people: 25, military: 10, religion: -15 },
        },
      },
      {
        id: "ly7",
        character: "Nạn hạn hán - Năm 1100",
        situation:
          "Hạn hán kéo dài, dân đói. Kho tàng trống rỗng. Sư cao tăng nói phải xây tháp cầu mưa. Quan nho đề nghị đào kênh thủy lợi.",
        philosophicalContext: "Duy tâm vs Duy vật",
        dialecticLaw: "Tồn tại xã hội và ý thức xã hội - Thực tiễn vật chất quyết định, không phải ý niệm",
        leftChoice: {
          text: "Xây tháp cầu mưa",
          effects: { finance: -20, people: -15, military: -10, religion: 25 },
        },
        rightChoice: {
          text: "Đào kênh thủy lợi",
          effects: { finance: -10, people: 25, military: 5, religion: -15 },
        },
        multipleChoices: [
          {
            id: "ly7_a",
            text: "Xây tháp cầu mưa theo lời sư",
            description: "Rẻ tiền nhưng không hiệu quả",
            cost: { finance: 5, people: 3, military: 0, religion: 0 },
            effects: { finance: -18, people: -12, military: -8, religion: 28 }
          },
          {
            id: "ly7_b",
            text: "Mở kho cứu trợ dân đói tạm thời",
            description: "Giải quyết ngắn hạn, không bền vững",
            cost: { finance: 10, people: 2, military: 3, religion: 0 },
            effects: { finance: -20, people: 15, military: -5, religion: 5 }
          },
          {
            id: "ly7_c",
            text: "Đào kênh thủy lợi, giải pháp lâu dài",
            description: "Tốn kém ban đầu nhưng hiệu quả lâu dài",
            cost: { finance: 15, people: 10, military: 8, religion: 2 },
            effects: { finance: -10, people: 30, military: 8, religion: -12 }
          },
          {
            id: "ly7_d",
            text: "Tổ chức dân công, mở rộng canh tác",
            description: "Cần nhiều lao động và tổ chức",
            cost: { finance: 12, people: 12, military: 10, religion: 0 },
            effects: { finance: 5, people: 25, military: 5, religion: -8 }
          }
        ]
      },
      {
        id: "ly8",
        character: "Chế độ sở hữu - Năm 1115",
        situation:
          "Dân tộc thiểu số ở miền núi muốn quyền tự quản, canh tác ruộng rẫy theo tập quán riêng. Triều đình muốn thống nhất quản lý theo luật chung.",
        philosophicalContext: "Đoàn kết vs Đa dạng",
        dialecticLaw: "Cái chung và cái riêng - Thống nhất trong đa dạng",
        leftChoice: {
          text: "Áp đặt luật chung",
          effects: { finance: 10, people: -20, military: -15, religion: 5 },
        },
        rightChoice: {
          text: "Cho phép tự quản",
          effects: { finance: -10, people: 20, military: 10, religion: 10 },
        },
      },
      {
        id: "ly9",
        character: "Công nghệ sản xuất - Năm 1130",
        situation:
          "Thương nhân Tống mang đến kỹ thuật rèn sắt tiên tiến. Thợ rèn địa phương sợ mất nghề. Bạn phải quyết định có cho nhập công nghệ mới không.",
        philosophicalContext: "Truyền thống vs Đổi mới",
        dialecticLaw: "Lực lượng sản xuất quyết định quan hệ sản xuất - Công nghệ mới thúc đẩy phát triển",
        leftChoice: {
          text: "Cấm công nghệ mới",
          effects: { finance: -15, people: 10, military: -10, religion: 5 },
        },
        rightChoice: {
          text: "Học hỏi công nghệ",
          effects: { finance: 25, people: -10, military: 20, religion: 0 },
        },
      },
      {
        id: "ly10",
        character: "Giáo dục dân trí - Năm 1145",
        situation:
          "Bạn muốn mở trường học công ở các làng, dạy chữ cho con em nông dân. Quý tộc phản đối vì dân có học sẽ khó cai trị.",
        philosophicalContext: "Khai sáng vs Độc quyền",
        dialecticLaw: "Cơ sở hạ tầng và thượng tầng kiến trúc - Giáo dục tạo nền tảng cho phát triển xã hội",
        leftChoice: {
          text: "Giữ dân mù chữ",
          effects: { finance: 5, people: -25, military: -15, religion: 10 },
        },
        rightChoice: {
          text: "Mở trường cho dân",
          effects: { finance: -10, people: 30, military: 10, religion: -10 },
        },
      },
      {
        id: "ly11",
        character: "Tổ chức quân đội - Năm 1150",
        situation:
          "Hệ thống quân đội hiện tại do quý tộc chỉ huy, thiếu kỷ luật. Bạn muốn tổ chức quân đội chuyên nghiệp, nhưng cần tốn kém và làm giảm quyền lực quý tộc.",
        philosophicalContext: "Hiệu quả vs Quyền lực",
        dialecticLaw: "Hình thức tổ chức phải phù hợp với yêu cầu thực tiễn",
        leftChoice: {
          text: "Giữ quân đội quý tộc",
          effects: { finance: 10, people: -10, military: -15, religion: 5 },
        },
        rightChoice: {
          text: "Quân đội chuyên nghiệp",
          effects: { finance: -10, people: 15, military: 35, religion: -5 },
        },
      },
      {
        id: "ly12",
        character: "Quan hệ với Chăm Pa - Năm 1160",
        situation:
          "Chăm Pa xâm lược biên giới. Bạn có thể đánh trả để răn đe, hoặc đàm phán để tránh chiến tranh kéo dài tốn kém.",
        philosophicalContext: "Cứng rắn vs Ngoại giao",
        dialecticLaw: "Mục đích và phương tiện - Hòa bình là mục đích, chiến tranh là phương tiện cuối cùng",
        leftChoice: {
          text: "Đàm phán hòa bình",
          effects: { finance: 10, people: 10, military: -15, religion: 5 },
        },
        rightChoice: {
          text: "Chiến tranh răn đe",
          effects: { finance: -15, people: 15, military: 20, religion: -10 },
        },
      },
      {
        id: "ly13",
        character: "Chính sách thuế - Năm 1170",
        situation:
          "Thuế nông nghiệp quá nặng, nhiều nông dân bỏ ruộng. Giảm thuế sẽ thiếu ngân sách, nhưng giữ thuế cao dân sẽ nổi loạn.",
        philosophicalContext: "Ngắn hạn vs Dài hạn",
        dialecticLaw: "Cái riêng và cái chung - Lợi ích trước mắt và lâu dài phải cân bằng",
        leftChoice: {
          text: "Giữ thuế cao",
          effects: { finance: 12, people: -35, military: -15, religion: -12 },
        },
        rightChoice: {
          text: "Giảm thuế cho dân",
          effects: { finance: -10, people: 35, military: 8, religion: 12 },
        },
      },
      {
        id: "ly14",
        character: "Y học và mê tín - Năm 1180",
        situation:
          "Dịch bệnh bùng phát. Thầy thuốc Đông y muốn điều trị bằng thuốc thảo mộc. Đạo sĩ nói bệnh do tà khí, phải cúng tế. Ngân sách chỉ đủ cho một phương án.",
        philosophicalContext: "Khoa học vs Mê tín",
        dialecticLaw: "Nhận thức và thực tiễn - Chân lý khoa học từ thực tiễn, không từ mê tín",
        leftChoice: {
          text: "Cúng tế giải tà khí",
          effects: { finance: -15, people: -20, military: -10, religion: 25 },
        },
        rightChoice: {
          text: "Điều trị bằng Đông y",
          effects: { finance: -15, people: 25, military: 5, religion: -15 },
        },
      },
      {
        id: "ly15",
        character: "Kế vị ngôi vua - Năm 1200",
        situation:
          "Hoàng tử cả thông minh nhưng thân với nhóm cải cách quyền lực. Hoàng tử thứ trung dung nhưng được quý tộc ủng hộ. Chọn ai kế vị?",
        philosophicalContext: "Cải cách vs Ổn định",
        dialecticLaw: "Sự phát triển xã hội - Cải cách là tất yếu của lịch sử, không thể cản trở",
        leftChoice: {
          text: "Hoàng tử thứ - Ổn định",
          effects: { finance: 10, people: -15, military: 10, religion: 15 },
        },
        rightChoice: {
          text: "Hoàng tử cả - Cải cách",
          effects: { finance: -10, people: 20, military: 15, religion: -15 },
        },
      },
    ],
  },
  {
    id: "tran",
    name: "Nhà Trần",
    period: "1225 - 1400",
    description: "Triều đại anh hùng chống Mông Cổ ba lần, đỉnh cao văn hóa Đại Việt",
    icon: "⚔️",
    cards: [
      {
        id: "tran1",
        character: "Trần Thủ Độ - Năm 1225",
        situation:
          "Để lên ngôi, nhà Trần cần lật đổ nhà Lý. Có thể dùng âm mưu cướp quyền, hoặc chờ nhà Lý suy yếu tự nhiên. Âm mưu nhanh nhưng mất lòng dân.",
        philosophicalContext: "Cách mạng vs Cải lương",
        dialecticLaw: "Bước nhảy vọt trong lượng và chất - Thay đổi quyền lực có thể từ từ hoặc đột biến",
        leftChoice: {
          text: "Chờ Lý suy yếu",
          effects: { finance: 5, people: 10, military: -10, religion: 10 },
        },
        rightChoice: {
          text: "Cướp quyền ngay",
          effects: { finance: 15, people: -15, military: 20, religion: -15 },
        },
        multipleChoices: [
          {
            id: "tran1_a",
            text: "Chờ đợi nhà Lý tự suy yếu",
            description: "An toàn nhưng mất thời cơ",
            cost: { finance: 0, people: 0, military: 0, religion: 0 },
            effects: { finance: 3, people: 8, military: -12, religion: 12 }
          },
          {
            id: "tran1_b",
            text: "Kết hôn với hoàng tộc Lý, thâm nhập quyền lực",
            description: "Chiến lược lâu dài, ít đổ máu",
            cost: { finance: 5, people: 3, military: 2, religion: 5 },
            effects: { finance: 10, people: 5, military: 8, religion: -5 }
          },
          {
            id: "tran1_c",
            text: "Dùng âm mưu cướp quyền nhanh chóng",
            description: "Nhanh nhưng gây tranh cãi",
            cost: { finance: 10, people: 8, military: 10, religion: 5 },
            effects: { finance: 18, people: -18, military: 25, religion: -18 }
          },
          {
            id: "tran1_d",
            text: "Lập công lớn trong chiến tranh để được dân ủng hộ",
            description: "Hợp pháp nhưng cần thời gian",
            cost: { finance: 12, people: 5, military: 8, religion: 3 },
            effects: { finance: -5, people: 20, military: 18, religion: 8 }
          }
        ]
      },
      {
        id: "tran2",
        character: "Mối đe dọa Mông Cổ - Năm 1257",
        situation:
          "Quân Mông Cổ áp sát biên giới, yêu cầu Đại Việt chịu phục thuộc. Chấp nhận sẽ mất độc lập. Từ chối sẽ phải chiến tranh với đế quốc hùng mạnh nhất thế giới.",
        philosophicalContext: "Tự do vs Sinh tồn",
        dialecticLaw: "Mâu thuẫn cơ bản và phi cơ bản - Độc lập dân tộc là mâu thuẫn sống còn",
        leftChoice: {
          text: "Chấp nhận phục thuộc",
          effects: { finance: 15, people: -30, military: -25, religion: -10 },
        },
        rightChoice: {
          text: "Kiên quyết kháng chiến",
          effects: { finance: -20, people: 30, military: 25, religion: 15 },
        },
        multipleChoices: [
          {
            id: "tran2_a",
            text: "Chấp nhận phục thuộc Mông Cổ",
            description: "An toàn nhưng mất độc lập",
            cost: { finance: 0, people: 0, military: 0, religion: 0 },
            effects: { finance: 18, people: -35, military: -30, religion: -12 },
            historicalNote: "Đây là con đường của những nước đầu hàng Mông Cổ như Cao Ly (Triều Tiên), Đại Lý (Vân Nam). Họ được giữ lại một phần quyền tự trị nhưng phải nộp cống, cử con tin, và tuân theo mệnh lệnh Mông Cổ. Quyền tự chủ dần bị xói mòn, văn hóa dân tộc mai một.",
            philosophicalExplanation: "Vi phạm nguyên tắc độc lập tự chủ của dân tộc - một trong những quy luật cơ bản của chủ nghĩa duy vật lịch sử. Chấp nhận phục thuộc là phủ định bản chất dân tộc, đánh mất quyền tự quyết định vận mệnh của mình."
          },
          {
            id: "tran2_b",
            text: "Nộp cống hình thức, giữ quyền tự trị",
            description: "Thỏa hiệp, tránh chiến tranh",
            cost: { finance: 5, people: 3, military: 0, religion: 2 },
            effects: { finance: 10, people: -10, military: -8, religion: 5 },
            historicalNote: "Một số nước cố gắng duy trì hình thức phục thuộc nhưng thực chất độc lập. Tuy nhiên với Mông Cổ - đế quốc hùng mạnh nhất thời đó - chiến lược này khó thực hiện. Họ thường đòi hỏi sự phục tùng thực sự, không chấp nhận 'nửa vời'.",
            philosophicalExplanation: "Đây là thể hiện của chủ nghĩa điều hòa - cố gắng dung hòa hai mặt đối lập không thể dung hòa (độc lập và phục thuộc). Mâu thuẫn về độc lập dân tộc là mâu thuẫn đối kháng, phải giải quyết triệt để bằng đấu tranh, không thể hòa giải."
          },
          {
            id: "tran2_c",
            text: "Kiên quyết kháng chiến, chuẩn bị chiến tranh",
            description: "Quyết liệt, động viên dân tộc",
            cost: { finance: 10, people: 8, military: 8, religion: 5 },
            effects: { finance: -18, people: 35, military: 30, religion: 18 },
            historicalNote: "Nhà Trần đã chọn con đường này. Tháng 1/1258, sứ giả Mông Cổ đến yêu cầu Trần Thái Tông đầu hàng. Ông từ chối dứt khoát và bắt đầu chuẩn bị kháng chiến. Đây là lựa chọn của những anh hùng dân tộc, thể hiện khí phách 'thà hy sinh tất cả, không chịu mất nước'.",
            philosophicalExplanation: "Vận dụng đúng đắn quy luật về mâu thuẫn đối kháng - mâu thuẫn dân tộc giữa Đại Việt và Mông Cổ chỉ có thể giải quyết bằng đấu tranh cách mạng. Đây là thể hiện của ý chí tự chủ dân tộc, bảo vệ nền tảng tồn tại và phát triển của dân tộc."
          },
          {
            id: "tran2_d",
            text: "Tạm thời chấp nhận, bí mật chuẩn bị",
            description: "Chiến lược lâu dài, gian khổ",
            cost: { finance: 8, people: 10, military: 5, religion: 3 },
            effects: { finance: 5, people: 10, military: 15, religion: -8 },
            historicalNote: "Chiến lược 'tránh mạnh đánh yếu' này có thể mua thêm thời gian chuẩn bị. Tuy nhiên, lịch sử cho thấy Mông Cổ rất khắt khe với các quốc gia phụ thuộc. Một khi đã đầu hàng, khó có cơ hội khởi nghĩa lại vì họ kiểm soát chặt chẽ.",
            philosophicalExplanation: "Tuy có tính chiến lược nhưng mâu thuẫn về nguyên tắc: chấp nhận phục thuộc dù tạm thời vẫn là mất độc lập. Quy luật về tính tất yếu của lịch sử cho thấy: những gì đi ngược với khát vọng độc lập của dân tộc sẽ bị lịch sử đào thải."
          }
        ]
      },
      {
        id: "tran3",
        character: "Chuẩn bị kháng chiến - Năm 1283",
        situation:
          "Mông Cổ sắp xâm lược lần hai. Trần Quốc Tuấn đề xuất chiến lược 'vườn không nhà trống', dân phải bỏ nhà cửa theo triều đình. Nhiều người không muốn bỏ tài sản.",
        philosophicalContext: "Cá nhân vs Tập thể",
        dialecticLaw: "Cái riêng và cái chung - Lợi ích dân tộc trên lợi ích cá nhân",
        leftChoice: {
          text: "Đánh thường quy",
          effects: { finance: 10, people: -20, military: -20, religion: 5 },
        },
        rightChoice: {
          text: "Vườn không nhà trống",
          effects: { finance: -15, people: 25, military: 30, religion: 10 },
        },
        multipleChoices: [
          {
            id: "tran3_a",
            text: "Đánh thường quy, giữ dân ở thành",
            description: "Dân giữ tài sản nhưng yếu thế",
            cost: { finance: 3, people: 0, military: 5, religion: 0 },
            effects: { finance: 8, people: -22, military: -25, religion: 3 },
            historicalNote: "Chiến thuật truyền thống là giữ thành trì, đối đầu trực tiếp với địch. Tuy nhiên trước quân Mông Cổ - tinh nhuệ nhất thế giới thời đó - chiến thuật này gần như tự sát. Các thành phố sẽ bị bao vây, dân chúng bị thảm sát khi thành thất thủ.",
            philosophicalExplanation: "Vi phạm quy luật về sự thống nhất giữa chủ quan và khách quan. Không nhận thức được thực lực của địch và điểm yếu của mình, áp dụng máy móc kinh nghiệm cũ vào hoàn cảnh mới - đó là chủ nghĩa giáo điều."
          },
          {
            id: "tran3_b",
            text: "Dời dân đến vùng an toàn, giữ quân thành",
            description: "Thỏa hiệp, bảo vệ dân",
            cost: { finance: 8, people: 5, military: 8, religion: 3 },
            effects: { finance: -8, people: 10, military: 5, religion: 8 },
            historicalNote: "Giải pháp trung gian này bảo vệ dân nhưng vẫn cố giữ thành trì. Tuy nhiên thành trì không có dân sẽ thiếu lương thực, tiếp tế. Quân Mông Cổ có thể vây thành đói, bắt dân làm lá chắn tấn công.",
            philosophicalExplanation: "Thể hiện sự do dự giữa hai đường lối chiến lược. Chưa nhận thức triệt để quy luật 'binh dân là gốc' - sức mạnh chiến tranh đến từ nhân dân, không thể tách rời quân và dân."
          },
          {
            id: "tran3_c",
            text: "Chiến lược 'Vườn không nhà trống' như Trần Quốc Tuấn",
            description: "Quyết liệt, chiến lược tối ưu",
            cost: { finance: 12, people: 10, military: 10, religion: 5 },
            effects: { finance: -18, people: 30, military: 35, religion: 12 },
            historicalNote: "Trần Quốc Tuấn (Hưng Đạo Vương) đề xuất: 'Địch đến, ta rút. Vườn trống, nhà không. Lương thực dấu kỹ, không để lại gì cho địch'. Chiến lược này đã thành công vang dội: quân Mông Cổ không có lương thực, sa lầy trong rừng núi, cuối cùng phải rút lui và bị tập k格 tiêu diệt tại Bạch Đằng.",
            philosophicalExplanation: "Vận dụng sáng tạo quy luật 'biến bất lợi thành có lợi' - dùng địa hình, thời tiết, và sự hiểu biết địa phương để bù đắp sức mạnh quân sự. Đây là tư duy biện chứng cao: không đối đầu cứng nhắc mà linh hoạt, dùng điểm mạnh của ta đánh vào điểm yếu của địch."
          },
          {
            id: "tran3_d",
            text: "Huy động toàn dân vào quân, chiến tranh nhân dân",
            description: "Sức mạnh tổng lực cao nhất",
            cost: { finance: 15, people: 12, military: 8, religion: 8 },
            effects: { finance: -12, people: 35, military: 30, religion: 15 },
            historicalNote: "Nhà Trần đã huy động toàn dân: 'Già cả mang cơm nước, trai tráng ra trận'. Đây là chiến tranh nhân dân thực sự - mỗi người dân là một chiến sĩ. Sức mạnh này đã tạo nên chiến thắng vĩ đại trước Mông Cổ.",
            philosophicalExplanation: "Thể hiện quy luật 'quần chúng nhân dân là động lực của lịch sử'. Chiến tranh giải phóng dân tộc chỉ thắng lợi khi huy động được sức mạnh toàn dân. Đây là biểu hiện cao nhất của tư tưởng 'dân là gốc nước'."
          }
        ]
      },
      {
        id: "tran4",
        character: "Động viên toàn dân - Năm 1284",
        situation:
          "Một số quan lại chủ trương đầu hàng Mông Cổ để giữ mạng sống. Trần Quốc Tuấn muốn xử tử để răn đe. Nhưng có thể gây hoang mang trong triều.",
        philosophicalContext: "Nhân đạo vs Nghiêm khắc",
        dialecticLaw: "Hình thức và nội dung - Hành động quyết liệt thể hiện bản chất kiên quyết",
        leftChoice: {
          text: "Khoan hồng cho quan chủ hòa",
          effects: { finance: 5, people: -15, military: -25, religion: 10 },
        },
        rightChoice: {
          text: "Xử tử để răn đe",
          effects: { finance: -5, people: 20, military: 30, religion: -10 },
        },
      },
      {
        id: "tran5",
        character: "Chiến thắng Bạch Đằng - Năm 1288",
        situation:
          "Sau chiến thắng, quân Mông Cổ rút lui. Có thể truy kích triệt để hoặc để cho rút về. Truy kích có thể tiêu diệt nhiều địch nhưng mất nhiều quân.",
        philosophicalContext: "Triệt để vs Dừng đúng lúc",
        dialecticLaw: "Lượng và chất - Biết đủ là mức độ thích hợp",
        leftChoice: {
          text: "Để địch rút lui",
          effects: { finance: 10, people: 10, military: -5, religion: 5 },
        },
        rightChoice: {
          text: "Truy kích tận gốc",
          effects: { finance: -10, people: 20, military: 20, religion: 0 },
        },
        multipleChoices: [
          {
            id: "tran5_a",
            text: "Cho quân Mông Cổ rút lui an toàn",
            description: "Giữ sức lực nhưng bỏ cơ hội",
            cost: { finance: 0, people: 0, military: 0, religion: 0 },
            effects: { finance: 12, people: 8, military: -8, religion: 5 }
          },
          {
            id: "tran5_b",
            text: "Truy kích nhẹ để răn đe",
            description: "Cân bằng giữa hiệu quả và tổn thất",
            cost: { finance: 5, people: 3, military: 5, religion: 0 },
            effects: { finance: 5, people: 12, military: 8, religion: 3 }
          },
          {
            id: "tran5_c",
            text: "Truy kích tận gốc, tiêu diệt tối đa",
            description: "Hiệu quả cao nhưng mất quân",
            cost: { finance: 10, people: 5, military: 10, religion: 0 },
            effects: { finance: -12, people: 25, military: 25, religion: 0 }
          },
          {
            id: "tran5_d",
            text: "Vừa truy kích vừa đàm phán, bắt cống",
            description: "Lợi ích tối ưu, chiến lược nhất",
            cost: { finance: 8, people: 5, military: 8, religion: 3 },
            effects: { finance: 10, people: 18, military: 15, religion: 8 }
          }
        ]
      },
      {
        id: "tran6",
        character: "Phục hồi sau chiến tranh - Năm 1290",
        situation:
          "Đất nước tàn phá sau chiến tranh. Ưu tiên xây dựng lại kinh tế hay củng cố quân đội phòng khi Mông Cổ trở lại?",
        philosophicalContext: "Kinh tế vs Quốc phòng",
        dialecticLaw: "Cơ sở và thượng tầng - Kinh tế là cơ sở, quốc phòng là bảo vệ cơ sở",
        leftChoice: {
          text: "Củng cố quân đội",
          effects: { finance: -15, people: -10, military: 30, religion: 0 },
        },
        rightChoice: {
          text: "Phục hồi kinh tế",
          effects: { finance: 25, people: 20, military: -15, religion: 5 },
        },
      },
      {
        id: "tran7",
        character: "Chính sách đối ngoại - Năm 1300",
        situation:
          "Nhà Nguyên (Mông Cổ đã lập ở Trung Quốc) yêu cầu Đại Việt nộp cống hàng năm. Chấp nhận để hòa bình, hay từ chối để giữ phẩm giá?",
        philosophicalContext: "Thực dụng vs Tự tôn",
        dialecticLaw: "Hiện tượng và bản chất - Hình thức nộp cống không làm mất bản chất độc lập",
        leftChoice: {
          text: "Từ chối nộp cống",
          effects: { finance: -10, people: 20, military: -15, religion: 10 },
        },
        rightChoice: {
          text: "Chấp nhận hình thức nộp cống",
          effects: { finance: 15, people: -15, military: 10, religion: -10 },
        },
      },
      {
        id: "tran8",
        character: "Phật giáo và chính trị - Năm 1310",
        situation:
          "Nhiều vua Trần xuất gia làm Phật. Một số vua muốn xuất gia khi còn trẻ để tu hành. Nhưng đất nước cần lãnh đạo mạnh mẽ.",
        philosophicalContext: "Tâm linh vs Trách nhiệm",
        dialecticLaw: "Cá nhân và xã hội - Trách nhiệm xã hội là ưu tiên",
        leftChoice: {
          text: "Cho phép vua xuất gia",
          effects: { finance: -15, people: -10, military: -15, religion: 30 },
        },
        rightChoice: {
          text: "Yêu cầu hoàn thành trách nhiệm",
          effects: { finance: 15, people: 10, military: 15, religion: -20 },
        },
      },
      {
        id: "tran9",
        character: "Tranh chấp quyền lực - Năm 1330",
        situation:
          "Hoàng tộc chia phe, tranh giành quyền lực. Dùng bạo lực dẹp nhanh nhưng tạo hận thù. Hòa giải mất thời gian và quyền lực suy yếu.",
        philosophicalContext: "Độc đoán vs Dân chủ",
        dialecticLaw: "Mâu thuẫn nội bộ - Giải quyết mâu thuẫn nội bộ đúng cách là chìa khóa",
        leftChoice: {
          text: "Dùng bạo lực dẹp",
          effects: { finance: -10, people: -15, military: 15, religion: -15 },
        },
        rightChoice: {
          text: "Hòa giải và thương lượng",
          effects: { finance: 5, people: 15, military: -10, religion: 10 },
        },
      },
      {
        id: "tran10",
        character: "Quan hệ với Chăm Pa - Năm 1340",
        situation:
          "Chăm Pa yếu thế, có thể sáp nhập vào Đại Việt. Nhưng dân Chăm có văn hóa riêng, sáp nhập có thể gây xung đột lâu dài.",
        philosophicalContext: "Bành trướng vs Hòa bình",
        dialecticLaw: "Tự quyết dân tộc - Mỗi dân tộc có quyền tự quyết",
        leftChoice: {
          text: "Sáp nhập Chăm Pa",
          effects: { finance: 15, people: -20, military: 20, religion: -15 },
        },
        rightChoice: {
          text: "Giữ Chăm Pa độc lập",
          effects: { finance: -5, people: 15, military: -10, religion: 10 },
        },
      },
      {
        id: "tran11",
        character: "Cải cách hành chính - Năm 1350",
        situation:
          "Hệ thống quan liêu tham nhũng. Cải cách toàn diện mất thời gian và gặp phản kháng. Chỉ trị tội những người tham nhũng quá lớn thì dễ hơn nhưng không giải quyết gốc.",
        philosophicalContext: "Triệt để vs Từng bước",
        dialecticLaw: "Lượng và chất - Tích lũy từng bước dẫn đến bước nhảy vọt",
        leftChoice: {
          text: "Chỉ xử lý tham nhũng lớn",
          effects: { finance: 10, people: -10, military: 5, religion: -5 },
        },
        rightChoice: {
          text: "Cải cách toàn diện",
          effects: { finance: -15, people: 25, military: -10, religion: 10 },
        },
      },
      {
        id: "tran12",
        character: "Đào tạo nhân tài - Năm 1360",
        situation:
          "Con em quý tộc thiếu tài năng nhưng nắm quyền. Người tài từ dân gian bị ngăn cản. Mở rộng thi cử công bằng hay giữ đặc quyền quý tộc?",
        philosophicalContext: "Đẳng cấp vs Tài năng",
        dialecticLaw: "Sản xuất và quan hệ sản xuất - Phát triển cần người tài giỏi",
        leftChoice: {
          text: "Giữ đặc quyền quý tộc",
          effects: { finance: -10, people: -25, military: -15, religion: 10 },
        },
        rightChoice: {
          text: "Mở rộng thi cử công bằng",
          effects: { finance: 15, people: 25, military: 15, religion: -10 },
        },
      },
      {
        id: "tran13",
        character: "Thương mại với các nước - Năm 1370",
        situation:
          "Thương nhân Ấn Độ và Ả Rập muốn buôn bán qua cảng Đại Việt. Họ mang đạo Hồi, có thể ảnh hưởng văn hóa bản địa. Mở cửa thương mại hay bảo vệ văn hóa?",
        philosophicalContext: "Giao lưu vs Bảo tồn",
        dialecticLaw: "Cái chung và cái riêng - Giao lưu làm giàu văn hóa, không xóa bỏ bản sắc",
        leftChoice: {
          text: "Hạn chế giao thương",
          effects: { finance: -15, people: -5, military: 5, religion: 20 },
        },
        rightChoice: {
          text: "Mở cửa giao thương",
          effects: { finance: 25, people: 15, military: 0, religion: -15 },
        },
      },
      {
        id: "tran14",
        character: "Chế độ quân điền - Năm 1380",
        situation:
          "Quân đội tốn kém ngân sách. Trần Nghệ Tông đề xuất chế độ quân điền: binh sĩ tự canh tác khi không chiến tranh. Nhưng có thể làm giảm tính chuyên nghiệp.",
        philosophicalContext: "Chuyên nghiệp vs Tiết kiệm",
        dialecticLaw: "Hình thức và nội dung - Hình thức tổ chức phải phục vụ hiệu quả",
        leftChoice: {
          text: "Giữ quân đội chuyên nghiệp",
          effects: { finance: -20, people: -10, military: 25, religion: 0 },
        },
        rightChoice: {
          text: "Áp dụng chế độ quân điền",
          effects: { finance: 15, people: 10, military: -15, religion: 5 },
        },
      },
      {
        id: "tran15",
        character: "Suy tàn triều Trần - Năm 1395",
        situation:
          "Nhà Trần suy yếu, Hồ Quý Ly nắm quyền thực. Ông ta muốn cải cách triệt để, có thể lật đổ nhà Trần. Ủng hộ cải cách hay giữ trung thành nhà Trần?",
        philosophicalContext: "Trung nghĩa vs Hiện thực",
        dialecticLaw: "Sự phát triển lịch sử - Cái cũ phải nhường chỗ cho cái mới",
        leftChoice: {
          text: "Giữ trung thành nhà Trần",
          effects: { finance: -15, people: -20, military: -15, religion: 20 },
        },
        rightChoice: {
          text: "Ủng hộ Hồ Quý Ly cải cách",
          effects: { finance: 20, people: 15, military: 15, religion: -20 },
        },
      },
    ],
  },
  {
    id: "le",
    name: "Nhà Lê",
    period: "1428 - 1789",
    description: "Triều đại dài nhất lịch sử Việt Nam, khôi phục độc lập và phát triển văn hóa",
    icon: "👑",
    cards: [
      {
        id: "le1",
        character: "Lê Lợi - Khởi nghĩa Lam Sơn 1418",
        situation:
          "Nhà Minh chiếm Đại Việt 20 năm. Khởi nghĩa rất khó, thất bại nhiều lần. Triều đình Minh mời hàng, phong bạn làm quan. Tiếp tục kháng chiến hay chấp nhận đầu hàng?",
        philosophicalContext: "Kiên trì vs Thực dụng",
        dialecticLaw: "Tất yếu và ngẫu nhiên - Độc lập dân tộc là tất yếu lịch sử",
        leftChoice: {
          text: "Chấp nhận làm quan Minh",
          effects: { finance: 20, people: -30, military: -25, religion: -15 },
        },
        rightChoice: {
          text: "Tiếp tục kháng chiến",
          effects: { finance: -20, people: 30, military: 25, religion: 15 },
        },
        multipleChoices: [
          {
            id: "le1_a",
            text: "Chấp nhận làm quan Minh, an nhàn sống",
            description: "Củng cố quyền lợi nhưng mất dân tộc",
            cost: { finance: 0, people: 0, military: 0, religion: 0 },
            effects: { finance: 22, people: -35, military: -30, religion: -18 },
            historicalNote: "Nhiều quý tộc Đại Việt đã chọn con đường này, trở thành quan lại cho nhà Minh để giữ địa vị và tài sản. Họ là công cụ áp bức đồng bào, giúp Minh khai thác tài nguyên, đồng hóa văn hóa Việt. Lịch sử gọi họ là 'bọn Tàu đầy', bị nhân dân khinh bỉ.",
            philosophicalExplanation: "Đây là sự phản bội bản chất dân tộc vì lợi ích cá nhân. Vi phạm nguyên tắc 'lợi ích dân tộc trên hết' - một trong những giá trị cốt lõi của chủ nghĩa yêu nước cách mạng."
          },
          {
            id: "le1_b",
            text: "Chấp nhận tạm thời, nuôi sức khởi nghĩa sau",
            description: "Chiến lược nhưng mất uy tín",
            cost: { finance: 5, people: 8, military: 5, religion: 3 },
            effects: { finance: 10, people: -10, military: 5, religion: -8 },
            historicalNote: "Một số người chủ trương đầu hàng hình thức để bảo tồn lực lượng. Tuy nhiên, một khi đã đầu hàng, rất khó tập hợp dân chúng khởi nghĩa lại. Nhà Minh cũng kiểm soát chặt chẽ, phân hóa nội bộ người Việt.",
            philosophicalExplanation: "Mâu thuẫn giữa chiến lược ngắn hạn và nguyên tắc lâu dài. Quy luật về uy tín và lòng tin của quần chúng cho thấy: một khi mất uy tín, khó lấy lại được sự ủng hộ của nhân dân."
          },
          {
            id: "le1_c",
            text: "Tiếp tục khởi nghĩa dù khó khăn",
            description: "Kiên quyết, động viên nhân dân",
            cost: { finance: 10, people: 8, military: 10, religion: 5 },
            effects: { finance: -22, people: 35, military: 30, religion: 18 },
            historicalQuote: "Việc nhân nghĩa tất thắng. Dù đường xa ngàn dặm, dù núi cao vạn trượng, ta quyết không lùi bước. Giặc Minh hùng mạnh nhưng không có đạo nghĩa, ta yếu thế nhưng có lòng dân. Cuối cùng, chính nghĩa sẽ chiến thắng cường quyền!\n\n- Lê Lợi, Bình Nghê Vương, Khởi nghĩa Lam Sơn",
            historicalNote: "Lê Lợi đã chọn con đường này. Từ 1418-1427, suốt 10 năm kháng chiến gian khổ, nhiều lần thất bại nhưng không bao giờ từ bỏ. Danh ngôn của ông: 'Việc nhân nghĩa tất thắng'. Cuối cùng khởi nghĩa Lam Sơn thành công, đuổi quân Minh, khôi phục độc lập.",
            philosophicalExplanation: "Vận dụng quy luật về tính tất yếu của chiến thắng trong chiến tranh chính nghĩa. Dù khó khăn nhưng nhân dân là lực lượng quyết định, ý chí độc lập dân tộc là không thể khuất phục. Đây là biểu hiện của chủ nghĩa anh hùng cách mạng."
          },
          {
            id: "le1_d",
            text: "Hợp tác với các lực lượng kháng chiến khác",
            description: "Tăng sức mạnh nhưng chia quyền",
            cost: { finance: 12, people: 10, military: 8, religion: 5 },
            effects: { finance: -15, people: 28, military: 35, religion: 10 },
            historicalNote: "Lê Lợi đã liên kết với nhiều nghĩa quân khác như Trần Nguyên Hãn, Lê Sát... Họ thống nhất dưới cờ 'Bình Định Vương' (Lê Lợi), tạo thành khối đoàn kết mạnh mẽ. Đoàn kết này là yếu tố quan trọng dẫn đến thắng lợi.",
            philosophicalExplanation: "Thể hiện quy luật về sức mạnh của đoàn kết - 'đoàn kết, đoàn kết, đại đoàn kết; thành công, thành công, đại thành công'. Biết dựa vào lực lượng tập thể, không cá nhân anh hùng hóa bản thân."
          }
        ]
      },
      {
        id: "le2",
        character: "Chiến thuật du kích - Năm 1420",
        situation:
          "Quân Minh hùng mạnh, đánh chính diện sẽ thua. Lê Lợi đề xuất du kích rừng núi. Nhưng tướng già muốn đánh giành thành trì để có uy thế.",
        philosophicalContext: "Linh hoạt vs Truyền thống",
        dialecticLaw: "Cái khách quan và cái chủ quan - Chiến thuật phải phù hợp thực tế",
        leftChoice: {
          text: "Đánh giành thành trì",
          effects: { finance: -15, people: -20, military: -25, religion: 5 },
        },
        rightChoice: {
          text: "Du kích rừng núi",
          effects: { finance: -10, people: 20, military: 25, religion: 10 },
        },
        multipleChoices: [
          {
            id: "le2_a",
            text: "Đánh chiếm thành trì để tạo uy thế",
            description: "Truyền thống nhưng nguy hiểm",
            cost: { finance: 5, people: 3, military: 8, religion: 0 },
            effects: { finance: -18, people: -25, military: -30, religion: 3 }
          },
          {
            id: "le2_b",
            text: "Kết hợp du kích và giữ vùng căn cứ",
            description: "Cân bằng giữa cũ và mới",
            cost: { finance: 8, people: 5, military: 10, religion: 3 },
            effects: { finance: -10, people: 10, military: 10, religion: 8 }
          },
          {
            id: "le2_c",
            text: "Du kích rừng núi như Lê Lợi đề xuất",
            description: "Linh hoạt, tối ưu nhất",
            cost: { finance: 10, people: 8, military: 12, religion: 5 },
            effects: { finance: -12, people: 25, military: 30, religion: 12 }
          },
          {
            id: "le2_d",
            text: "Chiến tranh nhân dân, huy động toàn dân",
            description: "Sức mạnh lớn nhất",
            cost: { finance: 12, people: 10, military: 10, religion: 8 },
            effects: { finance: -15, people: 30, military: 28, religion: 15 }
          }
        ]
      },
      {
        id: "le3",
        character: "Chiến thắng Tốt Động - Năm 1427",
        situation:
          "Sau chiến thắng lớn, có thể truy kích quân Minh đến tận biên giới, hoặc đàm phán để họ rút lui nhanh. Truy kích có thể tiêu diệt nhiều địch nhưng chiến tranh kéo dài.",
        philosophicalContext: "Toàn thắng vs Hòa đàm",
        dialecticLaw: "Mục đích và phương tiện - Độc lập là mục đích, chiến tranh là phương tiện",
        leftChoice: {
          text: "Đàm phán cho Minh rút",
          effects: { finance: 15, people: 15, military: -10, religion: 10 },
        },
        rightChoice: {
          text: "Truy kích đến cùng",
          effects: { finance: -15, people: 20, military: 20, religion: 0 },
        },
        multipleChoices: [
          {
            id: "le3_a",
            text: "Cho quân Minh rút lui ngay lập tức",
            description: "Nhanh chóng, giữ sức lực",
            cost: { finance: 3, people: 0, military: 3, religion: 0 },
            effects: { finance: 18, people: 12, military: -12, religion: 10 }
          },
          {
            id: "le3_b",
            text: "Đàm phán kèm điều kiện, lấy lợi ích",
            description: "Vừa đạt độc lập vừa có lợi",
            cost: { finance: 8, people: 5, military: 8, religion: 3 },
            effects: { finance: 15, people: 18, military: -5, religion: 12 }
          },
          {
            id: "le3_c",
            text: "Truy kích đến tận biên giới",
            description: "Triệt để nhưng tốn thất lớn",
            cost: { finance: 12, people: 8, military: 12, religion: 0 },
            effects: { finance: -18, people: 25, military: 25, religion: -3 }
          },
          {
            id: "le3_d",
            text: "Vừa truy kích vừa đàm phán, ép buộc",
            description: "Chiến lược tối ưu nhất",
            cost: { finance: 10, people: 8, military: 10, religion: 5 },
            effects: { finance: 5, people: 22, military: 15, religion: 8 }
          }
        ]
      },
      {
        id: "le4",
        character: "Xây dựng luật pháp - Năm 1430",
        situation:
          "Lê Thái Tổ muốn ban hành Quốc triều luật lệ, thống nhất luật pháp cả nước. Nhưng các vùng có tập quán riêng, áp đặt luật chung sẽ gây phản ứng.",
        philosophicalContext: "Thống nhất vs Đa dạng",
        dialecticLaw: "Cái chung và cái riêng - Luật chung nhưng linh hoạt với đặc thù địa phương",
        leftChoice: {
          text: "Giữ tập quán địa phương",
          effects: { finance: -10, people: 10, military: -10, religion: 15 },
        },
        rightChoice: {
          text: "Thống nhất luật pháp",
          effects: { finance: 20, people: -15, military: 15, religion: -10 },
        },
      },
      {
        id: "le5",
        character: "Cải cách ruộng đất - Năm 1440",
        situation:
          "Sau chiến tranh, nhiều đất hoang. Lê Thái Tông muốn chia đều ruộng đất cho nông dân. Quý tộc và tướng lĩnh công thần phản đối vì muốn được thưởng ruộng lớn.",
        philosophicalContext: "Công bằng vs Công lao",
        dialecticLaw: "Mâu thuẫn lợi ích giai cấp - Công bằng xã hội vs quyền lợi tầng lớp",
        leftChoice: {
          text: "Thưởng ruộng lớn cho công thần",
          effects: { finance: 10, people: -25, military: 20, religion: -10 },
        },
        rightChoice: {
          text: "Chia đều ruộng đất",
          effects: { finance: -10, people: 30, military: -15, religion: 10 },
        },
      },
      {
        id: "le6",
        character: "Lê Thánh Tông cải cách - Năm 1460",
        situation:
          "Lê Thánh Tông muốn cải cách toàn diện: hành chính, giáo dục, quân sự. Đây là thay đổi lớn, nhiều quan cũ phản đối. Cải cách mạnh hay từ từ?",
        philosophicalContext: "Cách mạng vs Tiến hóa",
        dialecticLaw: "Bước nhảy vọt - Cải cách triệt để tạo bước ngoặt phát triển",
        leftChoice: {
          text: "Cải cách từ từ",
          effects: { finance: 5, people: 5, military: 5, religion: 10 },
        },
        rightChoice: {
          text: "Cải cách mạnh mẽ",
          effects: { finance: 20, people: 20, military: 20, religion: -20 },
        },
        multipleChoices: [
          {
            id: "le6_a",
            text: "Giữ nguyên hiện trạng, không cải cách",
            description: "An toàn nhưng lạc hậu",
            cost: { finance: 0, people: 0, military: 0, religion: 0 },
            effects: { finance: -5, people: -10, military: -8, religion: 15 }
          },
          {
            id: "le6_b",
            text: "Cải cách từ từ, từng bước một",
            description: "Ít phản đối nhưng chậm",
            cost: { finance: 5, people: 3, military: 3, religion: 5 },
            effects: { finance: 8, people: 8, military: 8, religion: 8 }
          },
          {
            id: "le6_c",
            text: "Cải cách toàn diện mạnh mẽ",
            description: "Hiệu quả cao, phản đối lớn",
            cost: { finance: 15, people: 10, military: 10, religion: 8 },
            effects: { finance: 25, people: 25, military: 25, religion: -25 }
          },
          {
            id: "le6_d",
            text: "Cải cách vừa phải, lắng nghe ý kiến",
            description: "Cân bằng giữa hiệu quả và ổn định",
            cost: { finance: 10, people: 8, military: 8, religion: 5 },
            effects: { finance: 18, people: 18, military: 18, religion: -10 }
          }
        ]
      },
      {
        id: "le7",
        character: "Mở rộng lãnh thổ - Năm 1470",
        situation:
          "Chinh phạt Chiêm Thành (Chăm Pa). Sáp nhập vào Đại Việt để mở rộng lãnh thổ, hay để họ tự trị để tránh xung đột văn hóa?",
        philosophicalContext: "Thống nhất vs Tự quyết",
        dialecticLaw: "Quyền tự quyết dân tộc - Cân bằng giữa thống nhất và đa dạng dân tộc",
        leftChoice: {
          text: "Để Chiêm Thành tự trị",
          effects: { finance: -10, people: 10, military: -10, religion: 15 },
        },
        rightChoice: {
          text: "Sáp nhập hoàn toàn",
          effects: { finance: 20, people: -15, military: 25, religion: -15 },
        },
      },
      {
        id: "le8",
        character: "Khoa cử và văn hóa - Năm 1475",
        situation:
          "Mở rộng khoa cử cho tất cả dân chúng có tài năng. Quý tộc lo mất đặc quyền. Nhưng đào tạo rộng rãi sẽ có nhiều nhân tài hơn.",
        philosophicalContext: "Đặc quyền vs Dân chủ",
        dialecticLaw: "Cơ hội bình đẳng - Phát triển xã hội cần sự công bằng trong giáo dục",
        leftChoice: {
          text: "Giữ đặc quyền quý tộc",
          effects: { finance: -5, people: -25, military: -10, religion: 15 },
        },
        rightChoice: {
          text: "Khoa cử cho mọi người",
          effects: { finance: 15, people: 30, military: 15, religion: -15 },
        },
      },
      {
        id: "le9",
        character: "Thương mại quốc tế - Năm 1480",
        situation:
          "Thương nhân Nhật Bản, Trung Quốc, Ả Rập muốn buôn bán tại cảng Đại Việt. Mở cửa sẽ giàu có nhưng văn hóa ngoại lai xâm nhập. Bảo thủ hay mở cửa?",
        philosophicalContext: "Bảo thủ vs Hội nhập",
        dialecticLaw: "Giao lưu văn hóa - Tiếp thu tinh hoa, giữ bản sắc",
        leftChoice: {
          text: "Hạn chế thương mại",
          effects: { finance: -20, people: -10, military: 5, religion: 20 },
        },
        rightChoice: {
          text: "Mở cửa thương mại",
          effects: { finance: 30, people: 15, military: -5, religion: -15 },
        },
      },
      {
        id: "le10",
        character: "Quan hệ với Minh - Năm 1490",
        situation:
          "Nhà Minh yêu cầu Đại Việt triều cống. Đây chỉ là hình thức nhưng nhiều người cho là mất mặt. Chấp nhận hay từ chối?",
        philosophicalContext: "Hình thức vs Bản chất",
        dialecticLaw: "Hiện tượng và bản chất - Hình thức triều cống không làm mất độc lập thực sự",
        leftChoice: {
          text: "Từ chối triều cống",
          effects: { finance: -15, people: 20, military: -20, religion: 10 },
        },
        rightChoice: {
          text: "Chấp nhận hình thức triều cống",
          effects: { finance: 20, people: -15, military: 15, religion: -10 },
        },
      },
      {
        id: "le11",
        character: "Phát triển nông nghiệp - Năm 1500",
        situation:
          "Đầu tư vào thủy lợi để tăng năng suất lúa gạo. Nhưng ngân sách hạn chế, đầu tư nông nghiệp sẽ giảm chi cho quân đội và giáo dục.",
        philosophicalContext: "Ưu tiên phát triển",
        dialecticLaw: "Cơ sở kinh tế - Nông nghiệp là nền tảng của xã hội phong kiến",
        leftChoice: {
          text: "Ưu tiên quân sự và giáo dục",
          effects: { finance: -10, people: -15, military: 20, religion: 10 },
        },
        rightChoice: {
          text: "Đầu tư thủy lợi nông nghiệp",
          effects: { finance: 15, people: 25, military: -15, religion: 5 },
        },
      },
      {
        id: "le12",
        character: "Chính biến Mạc Đăng Dung - Năm 1527",
        situation:
          "Mạc Đăng Dung nắm quyền thực, muốn lật đổ nhà Lê. Ông có tài năng cải cách. Ủng hộ để đất nước phát triển, hay trung thành với nhà Lê?",
        philosophicalContext: "Trung nghĩa vs Hiệu quả",
        dialecticLaw: "Tất yếu lịch sử - Triều đại cũ suy yếu, cái mới ra đời",
        leftChoice: {
          text: "Trung thành nhà Lê",
          effects: { finance: -20, people: -15, military: -15, religion: 25 },
        },
        rightChoice: {
          text: "Ủng hộ Mạc Đăng Dung",
          effects: { finance: 20, people: 15, military: 20, religion: -25 },
        },
      },
      {
        id: "le13",
        character: "Nội chiến Lê - Mạc - Năm 1545",
        situation:
          "Nội chiến kéo dài giữa Lê và Mạc. Dân chúng khổ sở. Hòa giải hai bên để dân được nghỉ ngơi, hay đánh đến cùng để thống nhất?",
        philosophicalContext: "Thống nhất vs Hòa bình",
        dialecticLaw: "Mâu thuẫn và thống nhất - Đôi khi cần giải quyết triệt để mâu thuẫn",
        leftChoice: {
          text: "Hòa giải chia đôi đất nước",
          effects: { finance: 10, people: 15, military: -20, religion: 10 },
        },
        rightChoice: {
          text: "Đánh đến cùng để thống nhất",
          effects: { finance: -20, people: -15, military: 25, religion: -5 },
        },
      },
      {
        id: "le14",
        character: "Người Bồ Đào Nha - Năm 1550",
        situation:
          "Thương nhân Bồ Đào Nha đến, mang súng ống hiện đại và truyền đạo Thiên Chúa. Cho phép họ buôn bán và truyền đạo, hay cấm vì sợ văn hóa ngoại lai?",
        philosophicalContext: "Tiếp nhận vs Bài xích",
        dialecticLaw: "Giao lưu văn hóa và công nghệ - Tiếp thu có chọn lọc",
        leftChoice: {
          text: "Cấm người Tây buôn bán",
          effects: { finance: -20, people: 5, military: -15, religion: 20 },
        },
        rightChoice: {
          text: "Cho phép thương mại và truyền đạo",
          effects: { finance: 25, people: -10, military: 20, religion: -20 },
        },
      },
      {
        id: "le15",
        character: "Suy tàn nhà Lê - Năm 1600",
        situation:
          "Nhà Lê suy yếu, họ Trịnh và Nguyễn nắm quyền thực. Đất nước chia đôi. Cố gắng khôi phục quyền lực nhà Lê hay chấp nhận thực tế quyền lực mới?",
        philosophicalContext: "Lý tưởng vs Hiện thực",
        dialecticLaw: "Sự tất yếu lịch sử - Không thể ngăn cản sự phát triển khách quan",
        leftChoice: {
          text: "Khôi phục quyền lực nhà Lê",
          effects: { finance: -15, people: -20, military: -20, religion: 20 },
        },
        rightChoice: {
          text: "Chấp nhận Trịnh - Nguyễn phân tranh",
          effects: { finance: 10, people: 10, military: 15, religion: -15 },
        },
      },
    ],
  },
]
