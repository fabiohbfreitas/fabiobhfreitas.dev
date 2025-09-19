import type { Project } from "@/components/project-card";

export const projects: Project[] = [
  {
    slug: "lumi",
    title: "Lumi - Digital Prenatal Care Platform",
    image: "/lumi.jpg",
    description:
      "Lumi is a digital health application for iOS that modernizes the traditional prenatal care booklet. The app provides a secure, centralized platform for pregnant women to access their health data, such as consultation notes and exam results, updated by their healthcare providers. The entire application is built natively in SwiftUI and integrates with a custom-built REST API to ensure secure and real-time data synchronization.",
    highlights: [
      "Apple Developer Academy Project",
      "Team: Fabio Freitas, Daniel Ishida, Kauã Miguel, Gabriel Eirado and Fernanda Farias",
      "UI: Developed a clean, accessible, and native user interface using SwiftUI, focusing on the clear presentation of sensitive medical data",
      "Custom API Integration: Engineered the networking layer to communicate with a custom REST API, responsible for fetching and displaying all prenatal health records.",
      "Security & Data Handling: Implemented secure data transmission protocols (e.g., HTTPS) and client-side logic to manage sensitive patient information, ensuring user privacy and data integrity.",
      "Real-Time Updates: Created a system for patients to view up-to-date health information entered by their doctors, providing a seamless link between consultations and the user's records.",
    ],
    year: "2024",
  },
  {
    slug: "feel-t",
    title: "Feel it - iOS Mood & Emotion Tracker",
    image: "/feel-it.jpg",
    description:
      "Feel it is a native iOS application for emotional wellness, focused on mood tracking and journaling. The core functionality includes an AI-driven chat that performs text-based emotion analysis and an integration with the iTunes API for personalized media recommendations. The app is built entirely on a modern Swift technology stack, utilizing SwiftUI for the UI, SwiftData for local persistence, and SwiftCharts for user data visualization.",
    highlights: [
      "Apple Developer Academy Project",
      "Team: Fabio Freitas, Giovanni Favorin, Mateus Pires, Samuel Lima and Julia Matos",
      "UI: Developed a fully native, responsive UI using SwiftUI.",
      "Data Persistence: Implemented SwiftData for robust on-device storage of user logs and entries.",
      "Data Visualization: Leveraged SwiftCharts to create dynamic, interactive charts of emotional patterns.",
      "API Integration: Connected to the iTunes API to deliver personalized media recommendations based on mood.",
      "On-Device AI: Implemented a Core ML model for on-device text classification, enabling real-time, private emotion analysis from user journal entries.",
    ],
    year: "2024",
  },
  {
    slug: "magibook",
    title: "Magibook - AI Storybook Creator for iPad",
    image: "/magibook.jpg",
    description:
      "Magibook is an interactive storybook creator for iPad designed to stimulate children's imagination. The application dynamically generates unique fairy tales by combining user-selected elements, leveraging a REST API connected to OpenAI for text generation. The app is a native iOS build using SwiftUI, featuring local story persistence with Core Data, creative drawing capabilities with PencilKit, and full localization support.",
    highlights: [
      "Apple Developer Academy Project",
      "Team: Fabio Freitas, Gabriel Cardoso, Bruno Teodoro, Letícia Malagutti and Fernanda Farias",
      "Platform & UI: Developed an iPad-first, responsive user interface with SwiftUI, optimizing for a larger touch-screen experience.",
      "AI Integration: Built a networking layer to communicate with a REST API, processing requests and responses from OpenAI to generate dynamic story content.",
      "AI Audio Narration: Integrated Google Cloud's Text-to-Speech API to convert the generated stories into spoken audio, creating an immersive read-aloud experience.",
      "Data Persistence: Utilized Core Data to save user-created stories, characters, and drawings locally on the device.",
      "Creative Tools: Integrated PencilKit to provide a feature-rich drawing and coloring canvas, allowing users to illustrate their own stories.",
      "Localization: Engineered the app to support multiple languages (en-us, pt-br), managing localized strings and assets for a global audience.",
    ],
    year: "2023",
  },
  {
    slug: "strikepulse",
    title: "StrikePulse - watchOS Baseball Game",
    image: "strikepulse.jpg",
    description:
      "StrikePulse is an interactive baseball game developed exclusively for watchOS. The game uses audio and haptic cues to prompt the player to swing, then leverages an on-device Core ML model to analyze motion sensor data and classify the swing in real-time. The entire experience is built with SwiftUI and designed as a fun, physical game that tracks workout activity using HealthKit.",
    highlights: [
      "Apple Developer Academy Project",
      "Team: Fabio Freitas, Jairo Pereira, Gabriel Eduardo, Felipe Zica , Christian Carvalho",
      "Platform (watchOS): Developed a standalone Apple Watch application, designing the UI and game logic specifically for the wrist-based interface.",
      "On-Device Machine Learning: Implemented a Core ML model for activity classification, processing real-time data from the accelerometer and gyroscope to accurately detect a baseball swing.",
      "UI & State Management: Built the game's interface and managed its state using a SwiftUI architecture optimized for watchOS.",
      "Haptic & Audio Feedback: Integrated the Core Haptics framework to provide responsive, tactile feedback that is central to the gameplay loop and user experience.",
    ],
    year: "2024",
  },
];
