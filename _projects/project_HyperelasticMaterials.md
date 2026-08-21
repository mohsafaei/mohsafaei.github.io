---
layout: page
title: Constitutive Modeling - Hyperelastic Materials
description: 
img: /assets/img/Hyperelastic_Materials.png
importance: 1
related_publications: true
toc:
  sidebar: right
---


<p style="text-align: justify;" markdown="1">

To model the mechanical behavior of soft materials, such as liquid crystal elastomers (LCEs) and biological tissues, we utilize non-linear solid mechanics theories. Hyperelasticity is defined by a **strain energy density function**, $W$, which accounts for the material's changing stiffness and near-total incompressibility during finite deformation.

</p>

```mermaid
flowchart TD
    A[Define problem & geometry] --> B[Choose kinematic description]
    B --> C[Compute deformation measures]
    C --> D[Choose hyperelastic constitutive model]
    D --> E[Define strain-energy function W]
    E --> F[Derive stress tensors from W]
    F --> G[Apply balance laws & boundary conditions]
    G --> H[Obtain governing equations]
    H --> I[Specialize to loading cases<br/>(extension–torsion, inflation, etc.)]
    I --> J[Compute stress response & performance metrics]
```



**Legend:**

*   **A–C:** Kinematics
*   **D–E:** Constitutive modeling
*   **F–H:** Governing equations
*   **I–J:** Application to specific loadings and performance metrics

---

## 1. Kinematic Description

<p style="text-align: justify;" markdown="1">

The kinematic description maps material points from their reference configuration $\mathbf{X}$ to their current configuration $\mathbf{x}$.

</p>

### 1.1. Deformation Mapping and Gradient

<p style="text-align: justify;" markdown="1">

Let the reference position be $\mathbf{X} = (X_1, X_2, X_3)$ and the current position be $\mathbf{x} = (x_1, x_2, x_3)$. The deformation mapping is expressed as:

</p>

\begin{equation}
\mathbf{x} = \boldsymbol{\chi}(\mathbf{X}, t)
\end{equation}

The **deformation gradient** $\mathbf{F}$ is the spatial gradient of the mapping:

\begin{equation}
\mathbf{F} = \frac{\partial \boldsymbol{\chi}}{\partial \mathbf{X}}
\end{equation}


For the cylindrical combined extension-torsion case, expressing $\mathbf{F}$ in local orthonormal bases yields:

\begin{equation}
\mathbf{F} = \begin{bmatrix} \frac{dr}{dR} & 0 & 0 \\ 0 & \frac{r}{R} & r \phi \\ 0 & 0 & \lambda_z \end{bmatrix}.
\end{equation}


Here, $\mathbf{F}$ simultaneously captures axial stretch, circumferential expansion, and shear strain due to torsion, serving as the kinematic foundation.

### 1.2. Invariants and Strain Measures

To construct frame-indifferent constitutive equations, we introduce the symmetric **Right Cauchy–Green deformation tensor** $\mathbf{C}$:

$$\mathbf{C} = \mathbf{F}^\mathrm{T} \mathbf{F}$$

For isotropic materials, the strain energy density is formulated using the three principal invariants of $\mathbf{C}$:

\begin{equation}
I_1 = \text{tr}\,\mathbf{C}, \quad I_2 = \frac{1}{2}\left[ (\text{tr}\,\mathbf{C})^2 - \text{tr}(\mathbf{C}^2) \right], \quad I_3 = \det \mathbf{C}.
\end{equation}


*   **Frame Indifference:** $\mathbf{C}$ is objective under rigid-body rotations since $(\mathbf{Q}\mathbf{F})^\mathrm{T}(\mathbf{Q}\mathbf{F}) = \mathbf{F}^\mathrm{T}\mathbf{Q}^\mathrm{T}\mathbf{Q}\mathbf{F} = \mathbf{F}^\mathrm{T}\mathbf{F} = \mathbf{C}$.
*   **Incompressibility:** Enforced by setting the volume ratio $J = \det \mathbf{F} = 1$, which simplifies the third invariant to $I_3 = \det \mathbf{C} = 1$.

---
## 2. Kinetics Relations

### 2.1. Constitutive Model (Strain-Energy Function)

<p style="text-align: justify;" markdown="1">

A hyperelastic material is characterized by a strain-energy function $W = W(I_1, I_2)$ per unit reference volume. We compare three widely used models:

</p>

**Neo-Hookean Model:**

\begin{equation}
W = \frac{\mu}{2} (I_1 - 3).
\end{equation}

*Explanation:* Derived from the statistical mechanics of Gaussian polymer chains. It works well for small to moderate strains but fails to capture large strain stiffening.

**Mooney–Rivlin Model:**

\begin{equation}
W = C_1 (I_1 - 3) + C_2 (I_2 - 3).
\end{equation}


*Explanation:* Incorporates the second invariant $I_2$, providing a phenomenological description that significantly improves accuracy for rubber-like materials in shear and biaxial states.

**Yeoh Model:**

\begin{equation}
W = \sum_{i=1}^{3} C_i (I_1 - 3)^i.
\end{equation}

*Explanation:* A highly robust, first-invariant-based model. It effectively captures the characteristic "S-shaped" stress-strain curves and abrupt strain-hardening at large stretches.

> Key Modeling Recommendation: For complex loading states, using a multi-invariant strain-energy function $W(I_1, I_2)$ is highly recommended.

---

### 2.2. Derive Stress from the Strain-Energy Function

Assuming incompressibility with a Lagrange multiplier $p$ (representing hydrostatic pressure), the **Second Piola–Kirchhoff stress tensor** $\mathbf{S}$ is:

\begin{equation}
\mathbf{S} = 2 \frac{\partial W}{\partial \mathbf{C}} - p \mathbf{C}^{-1}
\end{equation}

The **Cauchy stress tensor** $\boldsymbol{\sigma}$ is obtained by push-forward transformation:

\begin{equation}
\boldsymbol{\sigma} = \mathbf{F} \mathbf{S} \mathbf{F}^\mathrm{T} = -p\mathbf{I} + 2\frac{\partial W}{\partial I_1}\mathbf{B} - 2\frac{\partial W}{\partial I_2}\mathbf{B}^{-1}
\end{equation}

where $\mathbf{B} = \mathbf{F}\mathbf{F}^\mathrm{T}$ is the Left Cauchy–Green deformation tensor.
Using the chain rule, we can express $\mathbf{S}$ analytically in terms of the invariants:

\begin{equation}
\mathbf{S} = 2 \left( \frac{\partial W}{\partial I_1} \frac{\partial I_1}{\partial \mathbf{C}} + \frac{\partial W}{\partial I_2} \frac{\partial I_2}{\partial \mathbf{C}} \right) - p \mathbf{C}^{-1}
\end{equation}

where:

\begin{equation}
\frac{\partial I_1}{\partial \mathbf{C}} = \mathbf{I}, \quad \frac{\partial I_2}{\partial \mathbf{C}} = I_1 \mathbf{I} - \mathbf{C}.
\end{equation}

These stress expressions allow us to calculate axial force, torque, and membrane stresses, which are critical for characterizing soft actuators and balloons.

---
| Stress measure | Symbol | Configuration / area used | Definition | Relation to Cauchy stress \(\boldsymbol{\sigma}\) |
|:---|:---:|:---:|:---:|:---:|
| **Cauchy (true) stress** | \(\boldsymbol{\sigma}\) | Current (deformed) configuration | \(\displaystyle \boldsymbol{\sigma}=\frac{\mathrm{d}\mathbf{f}}{\mathrm{d}a}\) | — |
| **First Piola–Kirchhoff stress** | \(\mathbf{P}\) | Force in current configuration / area in reference configuration | $(\displaystyle \mathbf{P}=J\boldsymbol{\sigma}\mathbf{F}^{-T})$ | $(\displaystyle \mathbf{P}=J\boldsymbol{\sigma}\mathbf{F}^{-T})$ |
| **Second Piola–Kirchhoff stress** | $(\mathbf{S})$ | Entirely referred to reference configuration | $(\displaystyle \mathbf{S}=\mathbf{F}^{-1}\mathbf{P})$ | \(\displaystyle \mathbf{S}=J\mathbf{F}^{-1}\boldsymbol{\sigma}\mathbf{F}^{-T}\) | 
| **Kirchhoff stress** | $(\boldsymbol{\tau})$ | Current configuration, volume-scaled | $(\displaystyle \boldsymbol{\tau}=J\boldsymbol{\sigma})$ | $(\displaystyle \boldsymbol{\tau}=J\boldsymbol{\sigma})$ |
| **Mandel stress** | $(\mathbf{M})$ | Mixed/material configuration | $(\displaystyle \mathbf{M}=\mathbf{C}\mathbf{S}=\mathbf{F}^{T}\mathbf{P})$ | $(\displaystyle \mathbf{M}=J\mathbf{F}^{T}\boldsymbol{\sigma}\mathbf{F}^{-T})$ | 
| **Biot stress** | $(\mathbf{T}_B)$ | Reference configuration | Defined through work conjugacy with Biot strain | Depends on the constitutive formulation |
| **Engineering (nominal) stress** | $(\boldsymbol{\sigma}_{\text{eng}})$ | Original cross-sectional area | $(\displaystyle \sigma_{\text{eng}}=\frac{F}{A_0})$ in uniaxial loading | In uniaxial loading: $(\displaystyle P_{11}=\sigma_{\text{eng}})$ |




## 3. Governing Equations

\begin{equation}
\nabla\cdot\boldsymbol{\sigma}+\rho\mathbf{b}
=
\rho\mathbf{a},
\end{equation}


where $(\boldsymbol{\sigma})$ is the Cauchy stress tensor, $(\rho)$ is density, $(\mathbf{b})$ is body force per unit mass, and $(\mathbf{a})$ is acceleration.

---

 - 1. Cartesian coordinates $((x,y,z))$

\begin{equation}
\mathbf{x}=x\,\mathbf{e}_x+y\,\mathbf{e}_y+z\,\mathbf{e}_z
\end{equation}

\begin{equation}
\begin{aligned}
\frac{\partial \sigma_{xx}}{\partial x}
+\frac{\partial \sigma_{xy}}{\partial y}
+\frac{\partial \sigma_{xz}}{\partial z}
+\rho b_x
&=\rho a_x,\\[6pt]
\frac{\partial \sigma_{yx}}{\partial x}
+\frac{\partial \sigma_{yy}}{\partial y}
+\frac{\partial \sigma_{yz}}{\partial z}
+\rho b_y
&=\rho a_y,\\[6pt]
\frac{\partial \sigma_{zx}}{\partial x}
+\frac{\partial \sigma_{zy}}{\partial y}
+\frac{\partial \sigma_{zz}}{\partial z}
+\rho b_z
&=\rho a_z.
\end{aligned}
\end{equation}

For a classical continuum without body couples,

\begin{equation}
\sigma_{ij}=\sigma_{ji}.
\end{equation}


---

- 2. Cylindrical coordinates $((r,\theta,z))$

\begin{equation}
\mathbf{x}=r\,\mathbf{e}_r+z\,\mathbf{e}_z.
\end{equation}

\begin{equation}
\begin{aligned}
\frac{\partial \sigma_{rr}}{\partial r}
+\frac{1}{r}\frac{\partial \sigma_{r\theta}}{\partial \theta}
+\frac{\partial \sigma_{rz}}{\partial z}
+\frac{\sigma_{rr}-\sigma_{\theta\theta}}{r}
+\rho b_r
&=\rho a_r,\\[6pt]
\frac{\partial \sigma_{r\theta}}{\partial r}
+\frac{1}{r}\frac{\partial \sigma_{\theta\theta}}{\partial \theta}
+\frac{\partial \sigma_{\theta z}}{\partial z}
+\frac{2\sigma_{r\theta}}{r}
+\rho b_\theta
&=\rho a_\theta,\\[6pt]
\frac{\partial \sigma_{rz}}{\partial r}
+\frac{1}{r}\frac{\partial \sigma_{\theta z}}{\partial \theta}
+\frac{\partial \sigma_{zz}}{\partial z}
+\frac{\sigma_{rz}}{r}
+\rho b_z
&=\rho a_z.
\end{aligned}
\end{equation}


---

- 3. Spherical coordinates \((r,\theta,\phi)\)

Here, $(\theta)$ is the polar angle measured from the positive $(z$)-axis, and $(\phi)$ is the azimuthal angle in the $(x)-\(y)$ plane.

\begin{equation}
\mathbf{x}=r\,\mathbf{e}_r.
\end{equation}

### Radial direction

\begin{equation}
\begin{aligned}
\frac{\partial \sigma_{rr}}{\partial r}
+\frac{1}{r}\frac{\partial \sigma_{r\theta}}{\partial \theta}
+\frac{1}{r\sin\theta}\frac{\partial \sigma_{r\phi}}{\partial \phi}
+\frac{2\sigma_{rr}-\sigma_{\theta\theta}-\sigma_{\phi\phi}}{r}
+\frac{\sigma_{r\theta}\cot\theta}{r}
+\rho b_r
=
\rho a_r.
\end{aligned}
\end{equation}

### Polar (\(\theta\)) direction

\begin{equation}
\begin{aligned}
\frac{\partial \sigma_{r\theta}}{\partial r}
+\frac{1}{r}\frac{\partial \sigma_{\theta\theta}}{\partial \theta}
+\frac{1}{r\sin\theta}\frac{\partial \sigma_{\theta\phi}}{\partial \phi}
+\frac{3\sigma_{r\theta}}{r}
+\frac{(\sigma_{\theta\theta}-\sigma_{\phi\phi})\cot\theta}{r}
+\rho b_\theta
=
\rho a_\theta.
\end{aligned}
\end{equation}

### Azimuthal (\(\phi\)) direction

\begin{equation}
\begin{aligned}
\frac{\partial \sigma_{r\phi}}{\partial r}
+\frac{1}{r}\frac{\partial \sigma_{\theta\phi}}{\partial \theta}
+\frac{1}{r\sin\theta}\frac{\partial \sigma_{\phi\phi}}{\partial \phi}
+\frac{3\sigma_{r\phi}}{r}
+\frac{2\sigma_{\theta\phi}\cot\theta}{r}
+\rho b_\phi
=
\rho a_\phi.
\end{aligned}
\end{equation}


---


so far, mechanical part of the problem is modeled. to include other physics in the problem you can use one of the following options:

| Coupling | Governing balance | Constitutive relations | Flux/field relations |
|---|---|---|---|
| **Electro-mechanical loading** | **Gauss’s law:**<br>$[\operatorname{Div}\mathbf{D}_0=\rho_{f0}]$ | $[\mathbf{P}=\frac{\partial H(\mathbf{F},\mathbf{E}_0)}{\partial \mathbf{F}}\]$<br>$[\mathbf{D}_0=-\frac{\partial H(\mathbf{F},\mathbf{E}_0)}{\partial \mathbf{E}_0}\]$ | $[\mathbf{E}_0=-\nabla_X\phi\]$ |
| **Chemo-mechanical loading** | **Species balance:**<br>$[\dot{c}+\operatorname{Div}\mathbf{J}=s]$ | $[\mathbf{P}=\frac{\partial \Psi(\mathbf{F},c)}{\partial \mathbf{F}}\]$<br>$[\mu=\frac{\partial \Psi(\mathbf{F},c)}{\partial c}]$ | **Diffusive flux:**<br>$[\mathbf{J}=-M\nabla_X\mu\]$ |
| **Thermo-mechanical loading** | **Energy balance:**<br>$[\rho_0c\,\dot{T}=-\operatorname{Div}\mathbf{Q}+R+Q_{\mathrm{mech}}+Q_{\mathrm{coupling}}]$ | $[\mathbf{P}=\frac{\partial \Psi(\mathbf{F},T)}{\partial \mathbf{F}}]$<br>$[\eta=-\frac{\partial \Psi(\mathbf{F},T)}{\partial T}]$ | **Heat flux:**<br>$[\mathbf{Q}=-K\nabla_XT]$ |

Here, $(\mathbf{P})$ is the first Piola–Kirchhoff stress, $(\mathbf{F})$ is the deformation gradient, $(\mathbf{D}_0)$ and $(\mathbf{E}_0)$ are referential electric displacement and electric field, $(c)$ is concentration, \$(\mu)$ is chemical potential, $(\mathbf{J})$ is mass/species flux, $(\eta)$ is entropy, and $(\mathbf{Q})$ is heat flux.

<p style="text-align: justify;" markdown="1">

By coupling kinematics, constitutive laws, and momentum balance, a **semi-analytical framework** is established. This allows one to express invariants and stresses analytically, reducing the complex non-linear boundary-value problem to a set of algebraic or ordinary differential equations. These equations are then solved numerically via Finite Element Analysis for specific loading commditions.

</p>

---

### Example: SymPy 

<p style="text-align: justify;" markdown="1">

Below is a complete, educational Python script using **SymPy** to automate the symbolic derivation of Cauchy stress under uniaxial tension for an incompressible Neo-Hookean material.

</p>

```python
import sympy as sp
# 1. Define Kinematics and Deformation Gradient (F)
# Using principal stretches for an incompressible material
lam1, lam2, lam3 = sp.symbols('lambda1 lambda2 lambda3', real=True, positive=True)
p = sp.symbols('p', real=True) # Lagrange multiplier (hydrostatic pressure)
# Diagonal deformation gradient tensor F
F = sp.Matrix([[lam1, 0, 0],
               [0, lam2, 0],
               [0, 0, lam3]])
# 2. Right Cauchy-Green Deformation Tensor (C = F.T * F)
C = F.T * F
# 3. Principal Invariants
I1 = sp.trace(C)
I2 = 0.5 * (sp.trace(C)**2 - sp.trace(C**2))
I3 = C.det() # Must be 1 for incompressibility
# 4. Define Strain Energy Density Function (psi)
# Example: Neo-Hookean Model psi = (mu/2) * (I1 - 3)
mu = sp.symbols('mu', real=True, positive=True)
psi = (mu / 2) * (I1 - 3)
# 5. Second Piola-Kirchhoff Stress (S = 2 * d(psi)/dC)
# For diagonal tensors, we differentiate with respect to components C_ii
S = sp.diag(2 * sp.diff(psi, C[0,0]),
            2 * sp.diff(psi, C[1,1]),
            2 * sp.diff(psi, C[2,2]))
# 6. Cauchy Stress Tensor (sigma = -p*I + F * S * F.T)
I = sp.eye(3)
sigma = -p * I + F * S * F.T
# Simplified Principal Stress Components
sigma_11 = sp.simplify(sigma[0,0])
print(f"Cauchy Stress sigma_11: {sigma_11}")
# Example for Uniaxial Tension: lam1 = lam, lam2 = lam3 = 1/sqrt(lam)
lam = sp.symbols('lambda', real=True, positive=True)
sigma_uniaxial = sigma_11.subs({lam1: lam, lam2: 1/sp.sqrt(lam), lam3: 1/sp.sqrt(lam)})
# Solve for p using the boundary condition sigma_22 = 0
sigma_22 = sigma[1,1].subs({lam1: lam, lam2: 1/sp.sqrt(lam), lam3: 1/sp.sqrt(lam)})
p_sol = sp.solve(sigma_22, p)[0]
final_sigma = sp.simplify(sigma_uniaxial.subs(p, p_sol))
print(f"Uniaxial Cauchy Stress (sigma): {final_sigma}")

```
<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/Hyperelastic_Materials.png" title="Continuum mechanics flowchart" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        Illustration of a continuum mechanics flowchart for soft materials.
    </div>
</div>

***


## Further Reading

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">
    <a href="https://mohsafaei.github.io/books/Continuum_Mechanics/">
        {% include figure.liquid path="assets/img/book_covers/ConM.jpg" title="example image" class="img-fluid rounded-lg z-depth-3" %}
    </a>
  </div>

  <div class="col-sm-4 mt-3 mt-md-0">
    <a href="https://mohsafaei.github.io/books/FEM/">
        {% include figure.liquid path="assets/img/book_covers/FEM.jpg" title="example image" class="img-fluid rounded-lg z-depth-3" %}
    </a>
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    <a href="https://mohsafaei.github.io/books/Nonlinear_Solid_Mechanics/">
        {% include figure.liquid path="assets/img/book_covers/NLSM.jpg" title="example image" class="img-fluid rounded-lg z-depth-3" %}
    </a>
  </div>
</div>

{% include repository/repo.liquid repository="mohsafaei/Hyperelastic-Materials" %}
