---
layout: page
title: Machine Learning
description: 
img: assets/img/ML.jpg
importance: 3
---

Here is a comprehensive and improved markdown guide on Machine Learning, expanding on its foundational concepts and incorporating the new sections on advanced models and applications in solid mechanics.

***

## 1. What is Machine Learning?
Machine Learning (ML) is a subfield of artificial intelligence (AI) focused on building systems that learn from data rather than being explicitly programmed. At its core, ML algorithms build mathematical models based on sample data, known as "training data," to make predictions or decisions without human intervention. 

In mathematical terms, if we have a set of inputs $X$ and desired outputs $Y$, traditional programming requires a human to define the function $f$ such that $Y = f(X)$. Machine learning, conversely, uses the data pairs $(X, Y)$ to approximate the underlying function $f$ automatically.


<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/ML_tmln.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        Evolution of Machine Learning through time.
    </div>
</div>


## 2. Origin and Evolution
The concept of machines learning from data dates back to the mid-20th century. 
*   **The 1950s:** Arthur Samuel, an IBM researcher, coined the term "machine learning" in 1959 while developing a program to play checkers that could learn from its past games. Around the same time, Frank Rosenblatt invented the "Perceptron," an early artificial neural network modeled after the human brain.
*   **The 1990s:** The field shifted its focus from symbolic, logic-based AI to data-driven, statistical approaches. This era saw the rise of Support Vector Machines (SVMs) and advanced clustering algorithms.
*   **The 2010s to Present:** The explosion of available data ("Big Data") and exponential growth in computational power (GPUs) led to the deep learning revolution, allowing neural networks with many layers to achieve unprecedented accuracy.

## 3. Advantages of Machine Learning
*   **Automation of Complex Tasks:** ML models can automate decision-making processes in environments too complex for traditional rule-based algorithms.
*   **Continuous Improvement:** Many ML models are designed to learn continuously; as they are exposed to more data over time, their predictive accuracy improves.
*   **Handling Multi-dimensional Data:** ML algorithms are exceptionally adept at identifying patterns and trends in massive datasets with thousands of variables, which is practically impossible for humans.
*   **Adaptability:** Models can adapt to changing environments without needing a complete rewrite of their underlying code.

## 4. Disadvantages and Challenges
*   **Data Dependency:** ML models require massive amounts of high-quality, labeled data. If the input data is flawed or biased ("garbage in, garbage out"), the model's predictions will be too.
*   **The "Black Box" Problem:** Many highly accurate models, particularly deep neural networks, are difficult to interpret. It is often unclear *why* the model made a specific decision, which is problematic in high-stakes fields like medicine or law.
*   **Computational Expense:** Training sophisticated models requires immense computational power and energy, making it expensive and environmentally costly.
*   **Overfitting:** A model might learn the training data too well, memorizing the noise rather than the underlying pattern, resulting in poor performance on new, unseen data.


---

## Machine Learning Methods: Supervised vs. Unsupervised

Machine learning mmethods divides into **Supervised** and **Unsupervised** learning methods:


### 1) Supervised Learning
**Idea:** Learn a mapping $(f(\mathbf{x}) \rightarrow y )$ from **labeled** examples ($(\mathbf{x}, y)$).  
Used when you have input data and a known target output.

#### A) Classification
- **What it does:** Predicts **discrete/categorical labels** (e.g., class A vs. class B).
- **Typical outputs:** class ID, probabilities over classes.
- **Example applications:**
  - Image classification
  - Fraud detection
  - Customer retention (churn classification)
  - Diagnostics (disease / condition classes)

#### B) Regression
- **What it does:** Predicts **continuous numeric values**.
- **Typical outputs:** real-valued quantity (e.g., temperature, demand).
- **Example applications:**
  - Weather forecasting
  - Market forecasting
  - Advertising popularity prediction
  - Estimating life expectancy
  - Population growth prediction

---

### 2) Unsupervised Learning
**Idea:** Discover structure in **unlabeled** data $(\mathbf{x})$ (no explicit target $(y)$).  
Used for pattern discovery, compression, or exploratory analysis.

#### A) Clustering
- **What it does:** Groups data into **clusters** so that similar items fall together.
- **Typical outputs:** cluster assignments, cluster centers, similarity structure.
- **Example applications:**
  - Customer segmentation
  - Targeted marketing
  - Recommender systems (often as a component, e.g., grouping users/items)

#### B) Dimensionality Reduction
- **What it does:** Maps high-dimensional data $(\mathbf{x}\in\mathbb{R}^d)$ into a lower-dimensional representation $(\mathbf{z}\in\mathbb{R}^k)$, $(k \ll d)$, while preserving useful structure.
- **Typical outputs:** reduced features/embeddings, compressed representations.
- **Example applications:**
  - Big data visualization
  - Meaningful compression
  - Structure discovery
  - Feature “simplification/selection” (the figure labels this as *Feature Biclactication*, which is commonly interpreted as feature extraction/selection depending on context)


<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/Clustering.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        A comparison on different Clustering aloghriths as an unsupervised learning method. 
    </div>
</div>
---

## Quick Summary Table

| Paradigm | Method | Target type | Main goal |
|---|---|---|---|
| Supervised | Classification | Categorical | Assign a class/label |
| Supervised | Regression | Continuous | Predict a numeric value |
| Unsupervised | Clustering | None | Find natural groups |
| Unsupervised | Dimensionality Reduction | None | Compress/visualize/denoise |

---



<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/ML_type.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
       Types of Machine Learning—This diagram depicts the three main categories: supervised, unsupervised, and reinforcement learning.
    </div>
</div>


## 6. Real-World Applications

Machine learning is deeply integrated into modern society:
*   **Healthcare:** Predicting patient outcomes, discovering new pharmaceutical drugs, and diagnosing diseases from medical imagery (like X-rays and MRIs).
*   **Finance:** Algorithmic trading, credit scoring, and real-time fraud detection.
*   **Autonomous Systems:** Self-driving cars use computer vision (powered by Convolutional Neural Networks) to detect pedestrians, lanes, and traffic signs in real-time.

### Applications in Solid Mechanics Research
In recent years, ML has revolutionized computational mechanics, materials science, and solid mechanics research by accelerating simulations and discovering new physics:

*   **Data-Driven Constitutive Modeling:** Traditionally, material behavior is described by empirical constitutive equations (e.g., Hooke's Law: $\boldsymbol{\sigma} = \mathbb{C} : \boldsymbol{\epsilon}$, where $\boldsymbol{\sigma}$ is stress and $\boldsymbol{\epsilon}$ is strain). ML models can replace these empirical laws by learning complex, non-linear stress-strain relationships directly from experimental or micro-scale simulation data, capturing behaviors that are too complex for traditional math formulations.
*   **Physics-Informed Neural Networks (PINNs):** PINNs integrate the governing equations of solid mechanics (like the conservation of momentum and energy) directly into the neural network's loss function. This allows the model to predict stress and displacement fields while strictly obeying physical laws, often faster than traditional Finite Element Analysis (FEA). The loss function typically looks like:
    $$Loss = Loss_{data} + Loss_{physics} + Loss_{boundary\_conditions}$$
*   **Fracture Mechanics and Defect Detection:** ML algorithms are used to predict the initiation and propagation of cracks in complex microstructures. By analyzing acoustic emissions or microscopic images, ML models can predict material failure long before it occurs.
*   **Topology Optimization:** ML is used to design lighter, stronger components by predicting optimal material distribution. Instead of running thousands of slow iterative FEA simulations, a trained ML surrogate model can predict the optimal shape of a mechanical component almost instantly.
*   **Multiscale Modeling:** Bridging the gap between atomic-level behavior and macroscopic material properties is computationally exhausting. ML serves as a "bridge," taking data from molecular dynamics (MD) simulations and feeding it accurately into macroscopic continuum models.



## Required Libraries to Start Machine Learning 

[![numpy](https://img.shields.io/badge/NumPy-013243.svg?style=for-the-badge&logo=NumPy&logoColor=white)](https://numpy.org/doc/stable/user/index.html)
[![pandas](https://img.shields.io/badge/pandas-150458.svg?style=for-the-badge&logo=pandas&logoColor=white)](https://pandas.pydata.org/docs/getting_started/index.html)
[![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black)](https://matplotlib.org/3.5.3/users/index.html)
[![scikit-learn](https://img.shields.io/badge/scikitlearn-F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=black)](https://scikit-learn.org/stable/user_guide.html)



## Further Reading

For a deeper understanding of Machine Learning, refer to: 
- [Deep Learning: A Comprehensive Overview](https://link.springer.com/article/10.1007/s42979-021-00815-1)
- [Machine Learning - tutorial](https://github.com/mohsafaei/Machine_Learning)




