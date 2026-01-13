export interface StatEffects {
  finance: number
  people: number
  military: number
  religion: number
}

export interface Choice {
  text: string
  effects: StatEffects
  cost?: StatEffects // Giá phải trả TRƯỚC khi thực hiện lựa chọn
  description?: string // Mô tả thêm về lựa chọn
  historicalNote?: string // Triếch dẫn lịch sử về quyết định này
  historicalQuote?: string // Triếch dẫn nguyên văn từ sử sách
  philosophicalExplanation?: string // Giải thích quy luật triết học
}

export interface Card {
  id: string
  character: string
  situation: string
  philosophicalContext?: string
  dialecticLaw?: string // Quy luật biện chứng liên quan
  yearContext?: string
  leftChoice: Choice
  rightChoice: Choice
  multipleChoices?: Array<{ 
    id: string; 
    text: string; 
    effects: StatEffects; 
    cost?: StatEffects; 
    description?: string;
    historicalNote?: string;
    historicalQuote?: string;
    philosophicalExplanation?: string;
  }> // Support 3+ choices
}

export interface Dynasty {
  id: string
  name: string
  period: string
  description: string
  icon: string
  cards: Card[]
  startingStats?: StatEffects // Điểm khởi đầu đặc trưng mỗi triều đại
}

export interface GameState {
  finance: number
  people: number
  military: number
  religion: number
  yearsReigned: number
  isGameOver: boolean
  gameOverReason: string | null
  currentCardIndex: number
  decision: "left" | "right" | string | null
  hasStarted: boolean
  selectedDynasty: string | null
}
