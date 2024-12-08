# React-native-reels-layout-App 🎥

**react-native-reels-layout** is a React Native application built with Expo, focusing on delivering a seamless, feature-rich experience. This app incorporates modern tools, libraries, and UI/UX patterns to provide a highly interactive and efficient reel-based user experience.

---

## 📱 Demo

### iOS
[Watch iOS Demo](https://drive.google.com/file/d/1mk6o6ceG3BYWOkQ4dvJmyAIsuvMFy7kb/view?usp=sharing)


### Android
[Watch Android Demo](https://drive.google.com/file/d/12hhXa_cGlUUftBHlkxdO5o56qjhaOh18/view?usp=sharing)


## 🛠️ Features

- **Dynamic Reels**: Display reels with infinite scrolling using `react-native-reanimated-carousel` and `@shopify/flash-list`.
- **Interactive UI**: Features action buttons for like, comment, share, and follow actions.
- **Optimized Data Fetching**: Powered by `@tanstack/react-query` and `react-query-kit` for server state management.
- **Reusable Icon Components**: Icons powered by `lucide-react-native` for flexible and lightweight design.
- **Cross-Platform Ready**: Designed to work seamlessly across Android, iOS, and the web.

---

## 🏗️ Technologies Used

### Core Dependencies
- **React Native**: A robust framework for building cross-platform mobile applications.
- **Expo**: Simplifies development with powerful tools and workflows.
- **Expo Router**: Simplified routing using a file-based approach.

### UI and Navigation
- **@react-navigation/native**: Industry-standard navigation for React Native apps.
- **@shopify/flash-list**: High-performance list rendering for optimal scrolling.
- **react-native-reanimated-carousel**: Smooth and responsive carousel animations.
- **lucide-react-native**: Lightweight and customizable icons for modern designs.

### Data Fetching and State Management
- **@tanstack/react-query**: Handles server state and caching effectively.
- **react-query-kit**: Enhances React Query with a type-safe and modular API abstraction.
- **axios**: Simplifies HTTP requests, with retry support using `axios-retry`.

---

## 📂 File Structure

```plaintext  
src/  
├── api/                  # API modules for handling backend integration  
├── app/                  # expo pages and main app content (tabs) , screens, etc 
├── components/           # Reusable UI components  
├── constants/              # Screens for different app views  
├── utils/                # Utility functions and helpers  
```  

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** and **npm** installed.
- **Expo CLI** globally installed:
  ```bash  
  npm install -g expo-cli  
  ```  

### Installation
1. Clone the repository:
   ```bash  
   git clone https://github.com/ajitpatel28/react-native-reels-layout.git
   cd react-native-reels-layout  
   ```  
2. Install dependencies:
   ```bash  
   npm install  
   ```  
3. Run the app:
    - Android:
      ```bash  
      npm run android  
      ```  
    - iOS:
      ```bash  
      npm run ios  
      ```  
    - Web:
      ```bash  
      npm run web  
      ```  

---