---
layout: page
title: Deep Learning
description: 
img: assets/img/DL.jpg
importance: 2
giscus_comments: false
---

**Deep Learning** is a subset of machine learning that utilizes artificial neural networks with multiple layers to model and process complex patterns in data. Inspired by the structure and function of biological neural networks, these architectures mimic the way neurons communicate and adapt, enabling deep learning algorithms to excel in tasks such as image recognition, natural language processing, and autonomous decision-making.

--- 

## Why Deep Learning?
Deep learning is a subset of machine learning that employs artificial neural networks to model complex patterns in data. It has numerous advantages, including:
- **Automatic Feature Extraction**: Unlike traditional machine learning, deep learning models can automatically learn relevant features from raw data.
- **High Accuracy**: Deep neural networks achieve state-of-the-art performance in tasks such as image recognition, natural language processing, and speech recognition.
- **Scalability**: Deep learning models can handle large-scale datasets effectively.
- **Versatility**: They are applicable across various domains, including healthcare, finance, autonomous systems, and more.

--- 

## **Real-World Challenges and Applications of Deep Learning**

Deep learning has been successfully implemented to solve a wide range of real-world challenges across various domains. Some notable examples include:

- **Healthcare**: Deep learning algorithms are used for medical image analysis, disease diagnosis, and drug discovery. For instance, CNNs are utilized to detect tumors in radiology images, improving diagnostic accuracy.
- **Autonomous Vehicles**: Self-driving cars leverage deep learning for real-time image recognition, obstacle detection, and decision-making. Convolutional Neural Networks (CNNs)

--- 

## Architectures

### 1. Multilayer Perceptron (MLP)

A **Multilayer Perceptron (MLP)** is a type of artificial neural network with an *input layer, one or more hidden layers, and an output layer*, used for *pattern recognition* and *function approximation*. Originating from early neural network research, MLPs gained practical significance in 1986 with the introduction of **backpropagation** by *Rumelhart, Hinton, and Williams*.  
The network learns by adjusting *weights and biases* through **gradient descent** while applying *activation functions* (e.g., *ReLU, Sigmoid*) to introduce non-linearity.  
MLPs serve as the foundation for **modern deep learning architectures**, enabling *complex data transformations and predictive modeling*. However, unlike more complex architectures like **CNNs (Convolutional Neural Networks)** and **RNNs (Recurrent Neural Networks)**, MLPs treat inputs as *simple vectors* and lack built-in mechanisms for capturing *spatial hierarchies* or *temporal dependencies*.  


<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/synapse.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/MLP.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        Illustration of a Multilayer Perceptron (MLP) network architecture and how its design is inspired by biological synapse networks and their communication mechanisms.
    </div>
</div>


### 2. Convolutional Neural Network (CNN)

A **Convolutional Neural Network (CNN)** is a specialized deep learning architecture primarily used in **computer vision**. Inspired by the **human visual system**, CNNs were first introduced by *Yann LeCun* in the late **1980s** and gained prominence with the development of **LeNet-5** in **1998**. 

Unlike traditional neural networks, CNNs **automatically learn spatial hierarchies of features** through **convolutional filters**, significantly reducing the need for manual feature extraction. Their main advantage lies in their ability to **capture local patterns and spatial relationships**, making them highly effective for tasks such as **image classification, object detection, and facial recognition**. 

Unlike fully connected networks like **MLPs (Multilayer Perceptrons)**, which treat input data as **simple vectors**, CNNs use:
- **Convolutional layers** to extract important spatial features,  
- **Pooling layers** to reduce dimensionality and retain essential information, and  
- **Weight sharing** to improve computational efficiency.  

These features allow CNNs to efficiently process **high-dimensional structured data like images**, reducing computational complexity while enhancing generalization.

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/CNN_demo.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        A typical Convolutional Neural Network (CNN) architecture.
    </div>
</div>

## **Deep Learning Workflow: Step-by-Step Guide**

Deep learning involves several crucial steps to ensure an effective and optimized model. Below is a structured breakdown of these steps:

---

### **1. Data Preprocessing**

Before training a neural network, the dataset must be cleaned and prepared:
- **Splitting the Data**: The dataset is divided into:
  - **80% for training** – used to train the model.
  - **20% for testing** – used to evaluate model performance.
- **Feature Normalization**:  
  - To ensure all features contribute equally, values are scaled using **MinMaxScaler**.  
  - This transformation maps the data to a range of **[0,1]**, preventing large numerical values from dominating learning.

---

### **2. Data Exploration & Correlation Analysis**

Before model training, an **Exploratory Data Analysis (EDA)** phase is conducted:
- **Identify Missing Values**: Handling NaN values (e.g., by imputation or removal).
- **Detect Outliers**: Using visualization tools like **box plots**.
- **Feature Correlation Matrix**:  
  - Displays relationships between features.  
  - Helps in **feature selection** by removing highly correlated features that introduce redundancy.

---

### **3. Neural Network Architecture**

A well-defined neural network structure is critical for learning complex patterns:

- **Layers & Neurons**:
  - Input Layer: Takes preprocessed features.
  - Two Hidden Layers:
    - Activation Function: ReLU (Rectified Linear Unit) — Helps in handling non-linearity.
  - Output Layer:
    - Uses softmax for classification problems.
    - Uses linear activation for regression tasks.

- **Optimization Algorithm**:  
  - Stochastic Gradient Descent (SGD) is used for weight updates.

---

### **4. Hyperparameter Tuning**

Hyperparameters significantly influence training efficiency and final accuracy.

- **Learning Rate Optimization**:  
  - Two values tested: 0.1 and 0.001.
  - Higher learning rate → faster training but risk of overshooting.
  - Lower learning rate → slower convergence but better precision.

- **Epoch Selection**:  
  - Two different epoch values (20 and 4000) tested.
  - More epochs → longer training but better optimization.
  - Early stopping can be used to prevent overfitting.

---

## Required Libraries for Deep Learning 
To run the provided examples, ensure you have the following libraries installed:

[![numpy](https://img.shields.io/badge/NumPy-013243.svg?style=for-the-badge&logo=NumPy&logoColor=white)](https://numpy.org/doc/stable/user/index.html)
[![pandas](https://img.shields.io/badge/pandas-150458.svg?style=for-the-badge&logo=pandas&logoColor=white)](https://pandas.pydata.org/docs/getting_started/index.html)
[![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black)](https://matplotlib.org/3.5.3/users/index.html)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=black)](https://www.tensorflow.org/)
[![scikit-learn](https://img.shields.io/badge/scikitlearn-F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=black)](https://scikit-learn.org/stable/user_guide.html)

--- 

## Further Reading

For a deeper understanding of deep learning, refer to: 

- [Deep Learning: A Comprehensive Overview](https://link.springer.com/article/10.1007/s42979-021-00815-1)
- [CNNS: Introduction 2](https://www.analyticsvidhya.com/blog/2021/05/convolutional-neural-networks-cnn/) 
- [Deep Learning: A Comprehensive Overview](https://link.springer.com/article/10.1007/s42979-021-00815-1)
- [Convolutional Neural Networks (CNNs) 3](https://developersbreach.com/convolution-neural-network-deep-learning/)














