# jest-project

## 📌 Overview
This project demonstrates the use of **JavaScript utility functions** and **Jest** unit testing to handle real-world problems.  
Each function includes:

- A **long (manual logic) version** for learning  
- A **short (optimized) version** used in production  
- A dedicated set of **Jest tests** to validate correctness  
- A **real-world scenario** explaining why the function matters

This project shows full understanding of writing logic, handling edge cases, and building reliable test suites.

---

## 🧪 Technologies Used
- **JavaScript (Node.js)**
- **Jest** – testing framework
- **Regex** – for pattern validation
- **Array / String manipulation**

---

## 📂 Project Structure
├── utils.js ← All functions (long + short versions)
├── index.test.js ← Entire Jest test suite
├── package.json ← Contains test script ("npm test")
└── README.md ← Project documentation

---

## 🧰 Functions Included

1. **isValidUsername(username)**  
   Validates user-created usernames based on strict security rules.

2. **getCardType(cardNumber)**  
   Determines whether a credit card number is Visa, Mastercard, or Amex.

3. **dupNumRaff(arr)**  
   Removes duplicate raffle entries to ensure fairness.

4. **bestSalesDay(arr)**  
   Returns the highest sales value in a week.

5. **easyWrd(word)**  
   Counts vowels to help identify words easier to pronounce for dyslexic users.

6. **nameCap(name)**  
   Corrects capitalization in names imported from messy university data.

---

# 🎯 Function Descriptions & Real-World Usage

## 1. **isValidUsername(username)**  
Validates usernames using the following requirements:

- At least **10 characters**
- Must include:
  - Uppercase letter
  - Lowercase letter
  - Number
  - Symbol: `! @ # $ % &`
- Cannot include invalid symbols (e.g., `+ - _ / \ =`)

### **Real-world usage:**  
Used in **account creation systems**, ensuring password-like complexity for usernames in strict authentication environments.

---

## 2. **getCardType(cardNumber)**  
Determines credit card type based on:

- **Visa** → starts with `4`, length 16  
- **Mastercard** → starts with `51–55` or `22–27`, length 16  
- **Amex** → starts with `34` or `37`, length 15  
- Anything else → “Invalid”

### **Real-world usage:**  
Used in **checkout forms**, card scanners, and online payment validation.

---

## 3. **dupNumRaff(arr)**  
Removes all duplicate numbers from a raffle entry list.

### **Real-world usage:**  
Fixes system glitches where users submit multiple raffle entries using the same number, ensuring a **fair** drawing with only one unique entry per person.

---

## 4. **bestSalesDay(arr)**  
Returns the largest number from an array.

### **Real-world usage:**  
Used by managers or POS systems to find the **peak sales day** of a given week.

---

## 5. **easyWrd(word)**  
Counts the number of vowels in a word.

### **Real-world usage:**  
Used in **assistive learning tools** to help people with dyslexia identify which words may be easier or harder to pronounce.

---

## 6. **nameCap(name)**  
Corrects improper capitalization in names imported from student records.

Example:  
`"joHn doE"` → `"John Doe"`

### **Real-world usage:**  
University systems often import inconsistent data, and this function ensures names are formatted professionally and clearly for:

- class rosters  
- attendance sheets  
- ID card printing  

---

# 🧪 Testing with Jest

Each function has 2–4 test cases covering:

- Valid inputs  
- Invalid inputs  
- Edge cases  
- Real-world scenarios  

### Run all tests:

```bash
npm test

