# 🌿 Leaf Scan - AI Powered Leaf Disease Detection

Leaf Scan is a deep learning-based web application that detects plant leaf diseases using Artificial Intelligence. Users can upload an image of a plant leaf or capture one using their webcam, and the application predicts the disease along with its confidence score.

---

## 📌 Features

- 🌱 Detects diseases from plant leaf images
- 📷 Live camera prediction
- 📁 Image upload support
- 🤖 Deep Learning model (EfficientNetB0)
- ⚡ Fast predictions using TensorFlow
- 🌐 User-friendly web interface built with Flask
- 📱 Responsive design for desktop and mobile

---

## 🖼️ Supported Crops

The model supports diseases from multiple crops including:

- 🍅 Tomato
- 🥔 Potato
- 🌽 Corn (Maize)
- 🍎 Apple
- 🍇 Grape
- 🌾 Rice
- 🍊 Orange
- 🌶️ Bell Pepper
- 🍑 Peach
- 🍓 Strawberry
- 🍒 Cherry
- 🌿 Cassava
- 🎃 Squash

**Total Classes:** 44

---

## 🛠️ Technologies Used

### Backend
- Python
- Flask
- TensorFlow / Keras
- OpenCV
- NumPy

### Frontend
- HTML5
- CSS3
- JavaScript

### Deep Learning
- EfficientNetB0
- Transfer Learning

---

## 📂 Project Structure

```
leaf_scan/
│
├── app.py
├── requirements.txt
├── leaf_disease_model_final.h5
│
├── static/
│   ├── style.css
│   ├── script.js
│   └── logo1.jpeg
│
├── templates/
│   ├── index.html
│   ├── about.html
│   └── learn.html
│
└── README.md
```

---

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/Rishisaxena17/leaf-scan.git
cd leaf-scan
```

### 2. Create Virtual Environment

```bash
python3.11 -m venv venv
```

### 3. Activate Virtual Environment

Mac/Linux

```bash
source venv/bin/activate
```

Windows

```bash
venv\Scripts\activate
```

---

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 5. Run Application

```bash
python app.py
```

Open your browser and visit

```
http://127.0.0.1:5000
```

---

## 🔍 How It Works

1. Upload or capture a leaf image.
2. Flask receives the image.
3. OpenCV preprocesses the image.
4. The image is resized to **256 × 256** pixels.
5. EfficientNet preprocessing is applied.
6. The trained TensorFlow model predicts the disease.
7. The disease name and confidence score are displayed.

---

## 📊 Model Information

- Model: EfficientNetB0
- Framework: TensorFlow / Keras
- Input Size: 256 × 256
- Dataset: PlantVillage
- Number of Classes: 44

---

## 📈 Workflow

```
Leaf Image
     │
     ▼
Image Upload / Camera
     │
     ▼
OpenCV Preprocessing
     │
     ▼
TensorFlow EfficientNet Model
     │
     ▼
Disease Prediction
     │
     ▼
Confidence Score
     │
     ▼
Display Result
```

---

## 🎯 Future Improvements

- Disease treatment recommendations
- Fertilizer suggestions
- Multi-language support
- Prediction history
- Cloud deployment
- Mobile application
- Weather-based disease alerts

---

## 👨‍💻 Developer

**Rishi Saxena**

B.Tech CSE Student

AI & Machine Learning Enthusiast

GitHub: https://github.com/Rishisaxena17

---

## 📜 License

This project is developed for educational and research purposes.
