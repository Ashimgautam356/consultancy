// Mock data for chats, messages, documents, videos, and blog posts

export interface Document {
    id: string
    name: string
    status: "verified" | "pending" | "action_required" | "not_started"
    date?: string
    message?: string
  }
  
  export const mockChats = [
    // Country group chats
    {
      id: "country_australia",
      name: "Australia Study Group",
      isPrivate: false,
      lastMessage: "Has anyone applied to University of Melbourne?",
      lastMessageTime: "10:45 AM",
      unreadCount: 3,
      memberCount: 124,
      online: true,
    },
    {
      id: "country_usa",
      name: "USA Study Group",
      isPrivate: false,
      lastMessage: "I need help with my F-1 visa application",
      lastMessageTime: "Yesterday",
      unreadCount: 0,
      memberCount: 156,
      online: true,
    },
    {
      id: "country_uk",
      name: "UK Study Group",
      isPrivate: false,
      lastMessage: "Oxford application deadline is next week!",
      lastMessageTime: "2 days ago",
      unreadCount: 0,
      memberCount: 98,
      online: true,
    },
    {
      id: "country_canada",
      name: "Canada Study Group",
      isPrivate: false,
      lastMessage: "Anyone got their study permit recently?",
      lastMessageTime: "3 days ago",
      unreadCount: 0,
      memberCount: 87,
      online: true,
    },
  
    // Private chats with instructors and document managers
    {
      id: "instructor_john",
      name: "John Davis",
      isPrivate: true,
      avatar: "/placeholder.svg?height=48&width=48",
      lastMessage: "Your application looks good, just a few changes needed",
      lastMessageTime: "2:30 PM",
      unreadCount: 1,
      role: "University Selection Specialist",
      online: true,
    },
    {
      id: "doc_manager_sarah",
      name: "Sarah Wilson",
      isPrivate: true,
      avatar: "/placeholder.svg?height=48&width=48",
      lastMessage: "I've uploaded your recommendation letter",
      lastMessageTime: "Yesterday",
      unreadCount: 0,
      role: "Document Manager",
      online: false,
    },
    {
      id: "instructor_michael",
      name: "Michael Brown",
      isPrivate: true,
      avatar: "/placeholder.svg?height=48&width=48",
      lastMessage: "Let's schedule a call to discuss your options",
      lastMessageTime: "3 days ago",
      unreadCount: 0,
      role: "Visa Counselor",
      online: false,
    },
  ]
  
  export const mockMessages: Record<string, any[]> = {
    country_australia: [
      {
        id: "msg_1",
        senderId: "user_emma",
        text: "Hi everyone! I'm planning to apply to University of Melbourne. Has anyone here gone through their application process?",
        timestamp: "2023-06-15T10:30:00Z",
        status: "read",
      },
      {
        id: "msg_2",
        senderId: "user_james",
        text: "Yes, I applied last year. Their process is pretty straightforward but make sure you have all your documents ready.",
        timestamp: "2023-06-15T10:35:00Z",
        status: "read",
      },
      {
        id: "msg_3",
        senderId: "current_user",
        text: "I'm also interested in Melbourne. What IELTS score did you need?",
        timestamp: "2023-06-15T10:40:00Z",
        status: "read",
      },
      {
        id: "msg_4",
        senderId: "user_james",
        text: "For most programs, they require at least 6.5 overall with no band less than 6.0. But competitive programs might need 7.0 or higher.",
        timestamp: "2023-06-15T10:45:00Z",
        status: "read",
      },
    ],
  
    instructor_john: [
      {
        id: "msg_1",
        senderId: "instructor_john",
        text: "Hello! I've reviewed your university preferences and I think you have a strong chance at your top choices.",
        timestamp: "2023-06-15T14:00:00Z",
        status: "read",
      },
      {
        id: "msg_2",
        senderId: "current_user",
        text: "That's great to hear! Do you think I should add any safety schools to my list?",
        timestamp: "2023-06-15T14:10:00Z",
        status: "read",
      },
      {
        id: "msg_3",
        senderId: "instructor_john",
        text: "Yes, I would recommend adding at least two more universities where your profile exceeds their average requirements. How about University of Adelaide and Macquarie University?",
        timestamp: "2023-06-15T14:20:00Z",
        status: "read",
      },
      {
        id: "msg_4",
        senderId: "current_user",
        text: "Those sound like good options. I'll look into them. When do you think I should start my applications?",
        timestamp: "2023-06-15T14:25:00Z",
        status: "read",
      },
      {
        id: "msg_5",
        senderId: "instructor_john",
        text: "Your application looks good, just a few changes needed. I recommend starting your applications at least 3 months before the deadline to ensure you have time for any unexpected issues.",
        timestamp: "2023-06-15T14:30:00Z",
        status: "read",
      },
    ],
  
    doc_manager_sarah: [
      {
        id: "msg_1",
        senderId: "doc_manager_sarah",
        text: "Hi there! I wanted to let you know that I've received your academic transcripts and they look good.",
        timestamp: "2023-06-14T09:00:00Z",
        status: "read",
      },
      {
        id: "msg_2",
        senderId: "current_user",
        text: "Great! What about my recommendation letters? Have those been processed yet?",
        timestamp: "2023-06-14T09:15:00Z",
        status: "read",
      },
      {
        id: "msg_3",
        senderId: "doc_manager_sarah",
        text: "I've received one from your professor, but we're still waiting on the second one. I'll follow up with them today.",
        timestamp: "2023-06-14T09:20:00Z",
        status: "read",
      },
      {
        id: "msg_4",
        senderId: "current_user",
        text: "Thank you! Please let me know when you receive it.",
        timestamp: "2023-06-14T09:25:00Z",
        status: "read",
      },
      {
        id: "msg_5",
        senderId: "doc_manager_sarah",
        text: "I've uploaded your recommendation letter. Both letters are now in the system and ready for your applications.",
        timestamp: "2023-06-14T16:30:00Z",
        status: "read",
      },
    ],
  }
  
  export const mockDocuments: Document[] = [
    {
      id: "doc_1",
      name: "Passport",
      status: "verified",
      date: "Feb 15, 2025",
    },
    {
      id: "doc_2",
      name: "Academic Transcripts",
      status: "verified",
      date: "Feb 18, 2025",
    },
    {
      id: "doc_3",
      name: "Statement of Purpose",
      status: "pending",
      date: "Feb 20, 2025",
    },
    {
      id: "doc_4",
      name: "Recommendation Letters",
      status: "action_required",
      date: "Feb 22, 2025",
      message: "Need one more letter from academic advisor",
    },
    {
      id: "doc_5",
      name: "English Proficiency Test",
      status: "not_started",
    },
    {
      id: "doc_6",
      name: "Financial Documents",
      status: "not_started",
    },
    {
      id: "doc_7",
      name: "Resume/CV",
      status: "verified",
      date: "Feb 10, 2025",
    },
    {
      id: "doc_8",
      name: "Portfolio (if applicable)",
      status: "not_started",
    },
  ]
  
  export const mockVideos = [
    {
      id: "video_1",
      title: "How to Write a Winning Statement of Purpose",
      description:
        "Learn the key elements of a compelling statement of purpose that will make your application stand out from the crowd.",
      thumbnail: "/placeholder.svg?height=192&width=384",
      duration: "15:24",
      uploadDate: "2 days ago",
      category: "university",
      instructor: "John Davis",
      views: 245,
    },
    {
      id: "video_2",
      title: "UK Student Visa Process Explained",
      description:
        "A step-by-step guide to the UK student visa application process, including required documents and common pitfalls to avoid.",
      thumbnail: "/placeholder.svg?height=192&width=384",
      duration: "22:15",
      uploadDate: "5 days ago",
      category: "visa",
      instructor: "Emma Wilson",
      views: 312,
    },
    {
      id: "video_3",
      title: "Preparing for Your Study Abroad Journey",
      description:
        "Essential tips for preparing for your international education experience, from packing to cultural adaptation.",
      thumbnail: "/placeholder.svg?height=192&width=384",
      duration: "18:42",
      uploadDate: "1 week ago",
      category: "preparation",
      instructor: "Michael Brown",
      views: 189,
    },
    {
      id: "video_4",
      title: "Top Universities in Australia for International Students",
      description:
        "An overview of the best universities in Australia for international students, including admission requirements and specialties.",
      thumbnail: "/placeholder.svg?height=192&width=384",
      duration: "25:10",
      uploadDate: "2 weeks ago",
      category: "university",
      instructor: "Sarah Johnson",
      views: 421,
    },
    {
      id: "video_5",
      title: "F-1 Visa Interview Tips for US Study",
      description:
        "Practical advice for acing your F-1 visa interview, including common questions and how to prepare your responses.",
      thumbnail: "/placeholder.svg?height=192&width=384",
      duration: "16:35",
      uploadDate: "3 weeks ago",
      category: "visa",
      instructor: "David Lee",
      views: 378,
    },
    {
      id: "video_6",
      title: "Scholarship Application Strategies",
      description: "Learn effective strategies for finding and applying to scholarships for international education.",
      thumbnail: "/placeholder.svg?height=192&width=384",
      duration: "20:18",
      uploadDate: "1 month ago",
      category: "preparation",
      instructor: "Jennifer Smith",
      views: 265,
    },
  ]
  
  export const mockBlogPosts = [
    {
      id: "blog_1",
      title: "How to Choose the Right University",
      excerpt: "Factors to consider when selecting your ideal institution abroad for your academic journey.",
      content:
        "Choosing the right university is one of the most important decisions you'll make in your academic journey. Start by considering your academic goals and the specific programs offered. Research the faculty, their expertise, and the resources available for your field of study. Consider the location, campus culture, and student life. Financial aspects are also crucial – look at tuition fees, living costs, and scholarship opportunities. Finally, check the university's reputation, accreditation, and alumni network. Remember, the \"best\" university is the one that aligns with your personal and professional goals.",
      image: "/placeholder.svg?height=192&width=384",
      date: "March 10, 2025",
      category: "university",
      author: "John Davis",
      authorRole: "University Selection Specialist",
      authorAvatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "blog_2",
      title: "Complete Guide to Student Visa Applications",
      excerpt: "Step-by-step process to ensure a successful visa application for your study abroad journey.",
      content:
        "Navigating the student visa application process can be daunting, but with proper preparation, you can increase your chances of success. First, understand the specific visa requirements for your destination country. Gather all required documents, including acceptance letters, financial proof, and passport. Complete the application form accurately and pay attention to details. Prepare for your visa interview by practicing common questions and having clear answers about your study plans and intentions to return to your home country. Submit your application well in advance of your planned departure date to allow time for processing and any potential delays.",
      image: "/placeholder.svg?height=192&width=384",
      date: "March 5, 2025",
      category: "visa",
      author: "Emma Wilson",
      authorRole: "Visa Counselor",
      authorAvatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "blog_3",
      title: "Top Scholarships for International Students",
      excerpt: "Comprehensive list of scholarships available for study abroad opportunities.",
      content:
        "Financing your international education can be made easier with scholarships. This guide covers major global scholarships like the Fulbright Program, Chevening Scholarships, and Commonwealth Scholarships. We also explore country-specific opportunities in the US, UK, Australia, Canada, and Germany. University-specific scholarships often provide substantial funding, so research your target institutions thoroughly. Don't overlook subject-specific scholarships in fields like STEM, business, and humanities. Start your scholarship search early, as many have deadlines 6-12 months before the academic year begins. Prepare strong applications with compelling personal statements, outstanding recommendation letters, and a demonstrated commitment to your field of study.",
      image: "/placeholder.svg?height=192&width=384",
      date: "February 28, 2025",
      category: "scholarship",
      author: "Michael Brown",
      authorRole: "Scholarship Advisor",
      authorAvatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "blog_4",
      title: "Cultural Adaptation: Thriving in a New Country",
      excerpt: "Tips and strategies for adapting to a new culture during your study abroad experience.",
      content:
        "Moving to a new country for education involves more than academic challenges – it requires cultural adaptation. Begin by researching your host country's customs, social norms, and etiquette before arrival. Expect to experience culture shock, which typically progresses through stages of honeymoon, frustration, adjustment, and acceptance. Develop language skills, even basic phrases, to connect with locals. Build a support network of both international and local students. Participate in cultural events and traditions to deepen your understanding. Maintain connections to your home culture while embracing new experiences. Remember that adaptation takes time, and it's normal to feel homesick or frustrated. With patience and an open mind, you'll develop valuable cross-cultural skills that benefit you long after your studies.",
      image: "/placeholder.svg?height=192&width=384",
      date: "February 20, 2025",
      category: "preparation",
      author: "Sarah Johnson",
      authorRole: "Cultural Integration Specialist",
      authorAvatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "blog_5",
      title: "Preparing Your Application Portfolio",
      excerpt: "Essential components of a strong application portfolio for competitive universities.",
      content:
        "A compelling application portfolio can significantly increase your chances of admission to top universities. Start with strong academic transcripts and standardized test scores that meet or exceed the institution's requirements. Craft a personal statement that tells your unique story and connects your experiences to your academic goals. Secure quality recommendation letters from professors or employers who know you well. Highlight extracurricular activities, leadership roles, and community service that demonstrate your well-roundedness. For certain programs, include samples of your work or research. Tailor each application to the specific university and program, showing why you're a perfect fit for their community. Finally, review everything carefully for errors and submit well before deadlines.",
      image: "/placeholder.svg?height=192&width=384",
      date: "February 15, 2025",
      category: "university",
      author: "David Lee",
      authorRole: "Admissions Consultant",
      authorAvatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "blog_6",
      title: "Managing Finances as an International Student",
      excerpt: "Practical advice for budgeting and managing finances while studying abroad.",
      content:
        "Financial management is crucial for international students. Before departure, research the cost of living in your destination city and create a comprehensive budget covering tuition, accommodation, food, transportation, books, health insurance, and personal expenses. Explore banking options in your host country and understand foreign exchange rates and transfer fees. Look for student discounts on transportation, entertainment, and software. Consider part-time work opportunities if your visa allows, but ensure they don't interfere with your studies. Track your expenses using budgeting apps and adjust your spending habits as needed. Build an emergency fund for unexpected costs. Remember that financial discipline now will reduce stress and allow you to focus on your academic and cultural experience.",
      image: "/placeholder.svg?height=192&width=384",
      date: "February 10, 2025",
      category: "preparation",
      author: "Jennifer Smith",
      authorRole: "Financial Advisor",
      authorAvatar: "/placeholder.svg?height=40&width=40",
    },
  ]
  
  