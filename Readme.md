Here's an updated **README.md** that incorporates the dependencies, features, and key tools used in your app:

---

# React-native-reels-layout-App 🎥

**react-native-reels-layout** is a cutting-edge React Native application built with Expo, focusing on delivering a seamless, feature-rich experience. This app incorporates modern tools, libraries, and UI/UX patterns to provide a highly interactive and efficient reel-based user experience.

---

### iOS
[Watch iOS Demo](example/ios_rn_reels.mov)
### Android
[Watch Android Demo](example/android_rn_reels.mov)


## 🛠️ Features

- **Dynamic Reels**: Display reels with infinite scrolling using `react-native-reanimated-carousel` and `@shopify/flash-list`.
- **Interactive UI**: Features action buttons for like, comment, share, and follow actions.
- **Optimized Data Fetching**: Powered by `@tanstack/react-query` and `react-query-kit` for server state management.
- **Reusable Icon Components**: Icons powered by `lucide-react-native` for flexible and lightweight design.
- **Global State Management**: Utilize `react-native-mmkv` for fast and efficient key-value storage.
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

### Utilities
- **react-native-mmkv**: Efficient storage for persisting data securely.
- **expo-linking**: Deep linking support for seamless navigation.
- **expo-system-ui**: Enhances system-level UI features.
- **expo-web-browser**: Opens web pages within the app context.

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
   git clone https://github.com/ajitpatel29/react-native-reels-layout.git  
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

## 📄 License

This project is licensed under the **0BSD License**.

---