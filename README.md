# 📄 LiveDocs – Real-Time Collaborative Document Editor

![LiveDocs Banner](assets/livedocs-login.png)

## 📌 Introduction
LiveDocs is a **real-time collaborative document editing platform** inspired by Google Docs and Notion.  
It enables multiple users to **co-edit documents simultaneously**, add contextual comments, react with emojis, and embed media — all in a secure and responsive environment.

---

## 🚀 Features
- **Real-Time Editing** – Multiple users can co-edit documents without conflicts.  
- **Role-Based Access Control** – Manage collaborators with `edit` or `view` permissions.  
- **Interactive Communication** – Inline comments, threaded discussions, and emoji reactions.  
- **Image Uploading** – Upload and embed media directly into documents.  
- **Responsive UI** – Works across devices and browsers.  

---

## 🛠️ Tech Stack
- **Frontend:** React.js, HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Real-time Communication:** Socket.IO  
- **Media Handling:** Cloudinary / FileStack  
- **Deployment:** Vercel / Render  

---

## ⚙️ Installation & Setup
Clone the repository:

```bash
git clone <your-repo-link>
cd livedocs
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to access the app.

---

## 📂 Project Structure
```
├── backend/          # Express.js APIs + Socket.IO server
├── frontend/         # React.js client
├── models/           # MongoDB collections
│   ├── users.js
│   ├── documents.js
│   ├── permissions.js
│   ├── comments.js
│   └── reactions.js
└── README.md
```

---

## 🖼️ Example Screenshots

### 🔹 Real-Time Editing  
![Real-Time Editing](assets/realtime-edit.png)

### 🔹 Commenting & Emoji Reactions  
![Comments & Emojis](assets/comments-reactions.png)

### 🔹 Image Upload Support  
![Image Upload](assets/image-upload.png)

### 🔹 Role-Based Permissions  
![Access Control](assets/permissions.png)

---

## 📊 Results & Insights
- Real-time synchronization **enhances collaborative workflows**.  
- **Threaded comments and emoji reactions** boost team communication.  
- Socket.IO provides **low-latency updates**, even with multiple users.  
- MongoDB schema ensures **scalability and modularity**.  

---

## ⚠️ Limitations
- Performance may degrade with **very large documents**.  
- Lacks **offline support** and **version history tracking**.  
- Mobile experience needs further optimization.  
- Advanced security (e.g., encryption) yet to be added.  

---

## 🔮 Future Enhancements
- 📌 Version control with edit history.  
- 📌 AI-powered grammar suggestions & summarization.  
- 📌 Audio/Video calls inside the editor.  
- 📌 Markdown, code snippet & chart embedding.  
- 📌 Google Drive/Dropbox integration.  

---

## 📌 Conclusion
LiveDocs demonstrates the power of **full-stack development** combined with **real-time communication**.  
It is a scalable and functional collaborative platform that lays the foundation for **future AI-driven, plugin-extensible, and mobile-ready solutions**.

---

✨ *Developed as part of an academic full-stack web development project.*
