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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        , {
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
        , {
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