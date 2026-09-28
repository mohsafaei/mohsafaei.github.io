---
layout: page
title: Autoencoders and Variational Autoencoders
description: 
img: /assets/img/VAE.png
importance: 1
related_publications: true
toc:
  sidebar: right
---



#### **I. The Foundation: Standard Autoencoders (AEs)**
An Autoencoder is an unsupervised deep learning model designed to **compress data into a lower-dimensional representation and then reconstruct the original data from that representation.**

In the context of continuum mechanics, think of it as a non-linear generalization of **Proper Orthogonal Decomposition (POD)** or **Principal Component Analysis (PCA)**.

**1. Architecture: The Two-Part System**
The network consists of two sub-networks joined by a bottleneck:
$$\mathbf{x} \xrightarrow{\quad\text{Encoder } f_\theta\quad} \mathbf{z} \xrightarrow{\quad\text{Decoder } g_\phi\quad} \mathbf{\hat{x}}$$

*   **The Encoder ($f_\theta$):** Maps high-dimensional input $\mathbf{x} \in \mathbb{R}^D$ (e.g., a $128^3$ voxel grid or $10^5$ nodal displacements) to a low-dimensional latent vector $\mathbf{z} \in \mathbb{R}^d$ ($d \ll D$).
*   **The Bottleneck (Latent Space):** The most critical part. It forces the network to discard noise and prioritize only the most dominant mechanical features (e.g., stiffness modes, topological connectivity).
*   **The Decoder ($g_\phi$):** Maps $\mathbf{z}$ back to the high-dimensional physical space, aiming for a reconstruction $\mathbf{\hat{x}} \approx \mathbf{x}$.

**2. The "Gap" Problem: Why AEs Fail at Generative Design**
Standard AEs are excellent for compression but fail in design optimization because the latent space is **discrete and patchy**.
*   **The Gap Problem:** If Design A and Design B are valid points in $\mathbf{z}$, the space between them is often "uncharted." Picking a point $z_{mid}$ often decodes to physically nonsensical results (disconnected meshes or noisy artifacts).
*   **No Sampling:** There is no defined distribution for $\mathbf{z}$, making it impossible to "sample" new, novel designs.

---


#### **II. The Generative Bridge: Variational Autoencoders (VAEs)**
VAEs act as the bridge between raw data and efficient optimization by imposing a **probabilistic structure** on the latent space.

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/VAE.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        A variational encoder (VAE) architecture.
    </div>
</div>

**1. The Conceptual Framework**
Unlike the deterministic mapping of AEs, a VAE encoder maps the input to a **probability distribution** (usually Gaussian) defined by parameters $\mu$ (mean) and $\sigma$ (standard deviation). The decoder then reconstructs the input by sampling from this distribution.

**2. The Mathematical Objective (ELBO)**
The model optimizes the Evidence Lower Bound (ELBO):
$$\mathcal{L} = \mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)] - \beta \cdot D_{KL}(q_\phi(z|x) || p(z))$$

*   **Reconstruction Loss:** Ensures the output matches the input (physical accuracy).
*   **KL Divergence ($D_{KL}$):** Acts as a regularizer, forcing the latent distribution to look like a standard normal distribution. This creates a **smooth, continuous latent space.**
*   **The Reparameterization Trick:** Since sampling is non-differentiable, we use $z = \mu + \sigma \odot \epsilon$ (where $\epsilon \sim \mathcal{N}(0, I)$) to allow backpropagation.

---

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/AE_VAE.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        Comparison between autoencoder and VAE latens spaces.
    </div>
</div>

#### **III. Deep Dive: Interpreting the Latent Space**
**1. Geometric View: The Manifold Hypothesis**
Mechanical data concentrates on a lower-dimensional, non-linear sub-manifold $\mathcal{M}$ embedded in high-dimensional space.
*   **Manifold:** $\mathcal{M} \subset \mathbb{R}^D, \quad \dim(\mathcal{M}) = d \ll D$.
*   The Latent Space $\mathcal{Z}$ is essentially a "flattened" coordinate system for this complex mechanical manifold.

**2. Mechanical Interpretation: Data-Driven Parameters**
Without manual labels, the VAE discovers its own internal variables ($z_i$):
*   **Geometrical Modes:** $z_1$ might control porosity; $z_2$ might govern the transition from Primitive to Gyroid surfaces.
*   **Internal State Variables:** In non-linear mechanics, $\mathbf{z}$ can capture hidden variables like plastic back-stress or nematic order parameters.

**3. VAE Solution to Topology**
*   **Continuity:** Points close in $\mathcal{Z}$ decode to geometrically similar shapes.
*   **Compactness:** Every point in the Gaussian-mapped region decodes to a valid physical structure.

---

#### **IV. Practical Applications in Solid Mechanics**
**1. Functionally Graded Materials (FGMs):** Smooth interpolation between two latent vectors ($\mathbf{z}_1 \to \mathbf{z}_2$) allows for seamless geometric transitions across a structure without stress concentrations.
**2. Vector Arithmetic:** Performing operations like $\mathbf{z}_{new} = \mathbf{z}_{base} + \mathbf{v}_{auxetic}$ to "add" mechanical properties to an existing design.
**3. Low-Dimensional Optimization:** Replacing a 50,000-variable topology optimization problem with a 10-variable latent space optimization.
**4. Surrogate Modeling:** Mapping boundary conditions directly to a latent vector $\mathbf{z}$ to instantly predict full stress-strain fields, bypassing expensive FEA iterations.

---

#### **V. Visualizing the Unseen: Dimensionality Reduction**
Since the latent space $\mathbf{z}$ is often high-dimensional (e.g., $d=64$), we must project it to 2D/3D to understand the model's learning.

**1. Primary Methods:**
*   **PCA (Linear):** Fast and deterministic; captures global variance but fails on curved, non-linear manifolds.
*   **t-SNE (Probabilistic):** Excellent for finding local **clusters** (e.g., separating stiff vs. compliant designs), but distances between clusters are non-physical.
*   **UMAP (Topological):** The "Goldilocks" method. Preserves both local and global structure; ideal for mapping the **continuous manifold** of metastructures.

**2. Diagnostic Value:**
*   **Latent Collapse:** If UMAP shows a single blob, the model has failed to learn features.
*   **Disentanglement Check:** Coloring the UMAP plot by physical properties (e.g., Modulus) should reveal smooth gradients, indicating the model has successfully "encoded" physics into the latent geometry.
*   **Outlier Detection:** Identifying isolated points that represent failed simulations or unstable designs.


<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/tSNE.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        A 2D t-SNE visualization of VAE latent space.
    </div>
</div>