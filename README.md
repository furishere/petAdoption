# 🐶 Pet Adoption Form – React Project

This is a simple **React-based Pet Adoption Form** application that allows users to submit details about a pet and adopter, and then view all submitted entries inside a table. It uses **React Router** for navigation between the form page and the table page.

---

## 🚀 Features

* 📄 **Pet Adoption Form** with the following inputs:

  * Pet Name
  * Pet Type (Dog, Cat, Bird, Fish)
  * Breed
  * Adopter Name
  * Email
  * Phone Number

* 📊 **Table Page** to display submitted form data.

* 🔄 **State Management** using `useState`.

* 🛣️ **Navigation** using `react-router-dom`.

* 🖼️ Background image included.

---

## 📁 Project Structure

```
src/
│── App.jsx
│── images/
│     └── dog.png
└── index.js
```

---

## 🧠 How It Works

### **1. Form State Handling**

Each form input uses `useState` to track values:

```js
const [petName, setPetName] = useState("");
const [petType, setPetType] = useState("Dog");
```

### **2. Submitting the Form**

When the user submits the form:

* Data is collected into an object.
* Added to the `tableData` array using:

```js
setTableData([...tableData, data]);
```

* All input fields reset to empty.

### **3. Navigating Between Pages**

The project uses:

```js
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Form ... />} />
    <Route path="/table" element={<Table tableData={tableData} />} />
  </Routes>
</BrowserRouter>
```

The form navigates to the table using:

```js
navigate("/table");
```

And the table has a button to go back to the homepage.

---

## 🧩 Components

### **1. Header**

Displays the title "Pet Adoption Form".

### **2. Form**

* Takes props from `App`.
* Renders input fields.
* Uses `onSubmit` for submitting.
* Navigates to the table page after submitting.

### **3. Table**

* Receives `tableData` as props.
* Renders a clean table using `.map()`.
* Has a "Go Back" button to return to the form.

---

## 📦 Installation & Setup

### **Step 1: Clone the repository**

```
git clone <your-repo-link>
```

### **Step 2: Navigate to the project**

```
cd pet-adoption-form
```

### **Step 3: Install dependencies**

```
npm install
```

### **Step 4: Start the React app**

```
npm start
```

---

## 🖼️ Background Image

This project uses a dog image stored at:

```
src/images/dog.png
```

Used as:

```js
backgroundImage: `url(${cat})`
```

---

## 🧪 Technologies Used

* **React**
* **React Router DOM**
* **JavaScript (ES6)**
* **HTML & Inline CSS**
* **useState Hook**

---

## 🎯 Purpose

This project is made for learning:

* Handling forms in React
* Lifting state upward
* Passing props
* React Router navigation
* Rendering dynamic tables

---


