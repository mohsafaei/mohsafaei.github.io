---
layout: page
title: Deep Learning
description: 
img: assets/img/DL.jpg
importance: 2
category: 
giscus_comments: false
---

**Deep Learning** is a subset of machine learning that utilizes artificial neural networks with multiple layers to model and process complex patterns in data. Inspired by the structure and function of biological neural networks, these architectures mimic the way neurons communicate and adapt, enabling deep learning algorithms to excel in tasks such as image recognition, natural language processing, and autonomous decision-making.


## Why Deep Learning?
Deep learning is a subset of machine learning that employs artificial neural networks to model complex patterns in data. It has numerous advantages, including:
- **Automatic Feature Extraction**: Unlike traditional machine learning, deep learning models can automatically learn relevant features from raw data.
- **High Accuracy**: Deep neural networks achieve state-of-the-art performance in tasks such as image recognition, natural language processing, and speech recognition.
- **Scalability**: Deep learning models can handle large-scale datasets effectively.
- **Versatility**: They are applicable across various domains, including healthcare, finance, autonomous systems, and more.


## Required Libraries for Deep Learning 
To run the provided examples, ensure you have the following libraries installed:

[![numpy](https://img.shields.io/badge/NumPy-013243.svg?style=for-the-badge&logo=NumPy&logoColor=white)](https://numpy.org/doc/stable/user/index.html)
[![pandas](https://img.shields.io/badge/pandas-150458.svg?style=for-the-badge&logo=pandas&logoColor=white)](https://pandas.pydata.org/docs/getting_started/index.html)
[![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black)](https://matplotlib.org/3.5.3/users/index.html)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=black)](https://www.tensorflow.org/)
[![scikit-learn](https://img.shields.io/badge/scikitlearn-F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=black)](https://scikit-learn.org/stable/user_guide.html)


## Implemented Architectures

### Multilayer Perceptron (MLP)

A **Multilayer Perceptron (MLP)** is a type of artificial neural network with an *input layer, one or more hidden layers, and an output layer*, used for *pattern recognition* and *function approximation*. Originating from early neural network research, MLPs gained practical significance in 1986 with the introduction of **backpropagation** by *Rumelhart, Hinton, and Williams*.  
The network learns by adjusting *weights and biases* through **gradient descent** while applying *activation functions* (e.g., *ReLU, Sigmoid*) to introduce non-linearity.  
MLPs serve as the foundation for **modern deep learning architectures**, enabling *complex data transformations and predictive modeling*. However, unlike more complex architectures like **CNNs (Convolutional Neural Networks)** and **RNNs (Recurrent Neural Networks)**, MLPs treat inputs as *simple vectors* and lack built-in mechanisms for capturing *spatial hierarchies* or *temporal dependencies*.  



<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/MLP.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/synapse.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        Illustration of a Multilayer Perceptron (MLP) network architecture and how its design is inspired by biological synapse networks and their communication mechanisms.
    </div>
</div>


## MLP Example: Housing Prices Prediction
### Problem Description
Housing price prediction is a crucial application of deep learning in the real estate market. By leveraging historical data, an MLP model can predict house prices based on features such as square footage, number of bedrooms, and location.

### Implementation
A practical example of housing price prediction using an MLP is included in this repository. This example is valuable for students and researchers exploring deep learning for regression tasks.

**Steps Involved:**
- **Data Preprocessing:** The dataset is split into 80% training and 20% testing, and features are normalized using MinMaxScaler.
- **Exploration & Correlation Matrix:** Data exploration helps identify missing values, outliers, and correlations between features.
- **Neural Network Architecture:** The model consists of two hidden layers with ReLU activation and is optimized using Stochastic Gradient Descent (SGD).
- **Hyperparameter Tuning:** Two learning rates (0.1 and 0.001) and two different epoch values (20 and 4000) are tested to optimize performance.
- **Toolset:** The model is implemented using Keras and TensorFlow, with additional support from NumPy, Pandas, Matplotlib, and Seaborn for data handling and visualization.

### Dataset & Resources
This example demonstrates essential steps in predicting housing prices, showing how MLPs can be applied to real-world regression problems.


### Convolutional Neural Network (CNN)

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


## CNN Example: Traffic Sign Recognition
### Problem Description
AI-driven self-driving cars enhance road safety by reducing human error, adapting to changing environments, and predicting traffic patterns. Traffic sign recognition plays a crucial role in intelligent navigation, ensuring seamless interaction with surroundings and improving the safety and efficiency of autonomous vehicles.

### Implementation
A practical example of traffic sign recognition using CNNs is included in this repository. This example serves as a valuable exercise for undergraduates and researchers working on applied AI projects.



## Further Reading

For a deeper understanding of deep learning, refer to: 

- [Deep Learning: A Comprehensive Overview](https://link.springer.com/article/10.1007/s42979-021-00815-1)
- [CNNS: Introduction 2](https://www.analyticsvidhya.com/blog/2021/05/convolutional-neural-networks-cnn/) 
- [Deep Learning: A Comprehensive Overview](https://link.springer.com/article/10.1007/s42979-021-00815-1)
- [Convolutional Neural Networks (CNNs) 3](https://developersbreach.com/convolution-neural-network-deep-learning/)
