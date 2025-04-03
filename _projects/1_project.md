---
layout: page
title: Reinforcement Learning
description: 
img: /assets/img/RL.jpg
importance: 1
related_publications: true
---

Reinforcement Learning (RL) is a branch of machine learning where an agent learns to make decisions by interacting with an environment. Through trial and error, the agent refines its strategies by receiving rewards for good actions and penalties for undesirable ones. The objective is to maximize cumulative rewards over time, leading to intelligent and adaptive behavior. RL has numerous applications, including robotics, game playing, autonomous systems, and optimization problems, making it a powerful tool for developing self-learning models.

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/cartpole_cmp.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>



## RL Approach and Advantages


Reinforcement learning differs from supervised and unsupervised learning in its approach to training models. Instead of relying on labeled datasets, RL enables agents to learn by direct interaction with the environment, improving decision-making capabilities autonomously.

The diagram below illustrates the core RL framework, where an **agent** interacts with its **environment** by taking **actions** in different **states**, receiving **rewards** as feedback. Through repeated interactions, the agent refines its strategy to maximize cumulative rewards.



<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/Agent.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        Reinforcement Learning framework: an agent interacts with the environment, takes actions, and learns from rewards.
    </div>
</div>



### Key Advantages of RL Over Other Learning Methods

- **Exploration and Exploitation Balance:** RL effectively balances learning from known strategies (exploitation) while discovering new strategies (exploration).
- **No Need for Labeled Data:** Unlike supervised learning, RL does not require manually labeled datasets, reducing the cost and effort of data annotation.
- **Adaptability:** RL agents continuously adapt to changing environments, making them suitable for dynamic real-world applications.
- **Long-Term Reward Optimization:** RL focuses on long-term gains rather than immediate results, ensuring better decision-making in sequential tasks.
- **Model-Free Learning:** Many RL algorithms, such as Q-learning, do not require prior knowledge of the environment, making them flexible for different applications.



## Taxi Problem

The Taxi Problem is a well-known example of reinforcement learning, designed to illustrate how an RL agent learns to navigate and optimize decision-making in a grid-based environment. The goal is to train a taxi agent to:

1. Pick up passengers from specific locations.
2. Transport them to their desired destinations.
3. Avoid obstacles and minimize unnecessary movements.
4. Maximize the reward by taking the most efficient route.

At each step, the agent receives rewards for successful pickups and drop-offs and penalties for illegal moves or inefficient navigation. Over multiple episodes, the agent learns an optimal policy for completing the task efficiently.


<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/taxi.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        The agent training process for the taxi problem. 
    </div>
</div>


## Implemented RL Algorithms

This project addresses the Taxi Problem using two fundamental RL algorithms: Monte Carlo and Q-Learning.

### 1. Monte Carlo Method

Monte Carlo RL estimates the value of an action or state by averaging returns from multiple episodes. The key characteristics of this method are:

- It requires complete episodes before updating values.
- It is particularly useful when the model of the environment is unknown.
- It may struggle in environments where episodes are too long or do not reach terminal states frequently.

### 2. Q-Learning

Q-Learning is an off-policy RL algorithm that iteratively updates Q-values to learn an optimal policy. Key advantages include:

- The agent learns the best actions to take in each state without requiring prior knowledge of the environment.
- It efficiently finds optimal policies even in complex environments.
- Unlike Monte Carlo methods, Q-learning updates values at each step, making it more sample-efficient.

## Project Dependencies

To run the code, ensure you have the following Python modules installed:

- `numpy`
- `pandas`
- `matplotlib.pyplot`
- `gymnasium`
- `IPython`
- `os`
- `time`

You can install missing dependencies using:

```bash
pip install numpy pandas matplotlib gymnasium IPython
```


## Useful References

**[First Reinforcement Learning Program](https://opendilab.github.io/DI-engine/01_quickstart/first_rl_program.html)**

**[Visual Imitation with Reinforcement Learning](https://www-labs.iro.umontreal.ca/~gberseth/visual-imitation-with-reinforcement-learning-using-recurrent-siamese-networks.html)**
