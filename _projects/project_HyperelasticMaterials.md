---
layout: page
title: Constitutive Modeling
description: 
img: /assets/img/Hyperelastic_Materials.png
importance: 1
related_publications: true
---


# Continuum Mechanics and Constitutive Modeling of Hyperelastic Materials
To model the mechanical behavior of soft materials, such as liquid crystal elastomers (LCEs) and biological tissues, we utilize non-linear solid mechanics theories. Hyperelasticity is defined by a **strain energy density function** $W$, which accounts for the material's changing stiffness and near-total incompressibility during finite deformation.
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


<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/Hyperelastic_Materials2.png" title="Soft materials in biomedical applications" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="text-center">
        <div class="caption">
            Soft materials in biomedical applications.
        </div>
</div>

**Legend:**

*   **A–C:** Kinematics
*   **D–E:** Constitutive modeling
*   **F–H:** Governing equations
*   **I–J:** Application to specific loadings and performance metrics

---

## 2. Step-by-Step Explanation
### 2.1. Define the Problem and Geometry
To demonstrate these concepts, we consider two classical deformation states:
1.  **Equi-biaxial Deformation (Cartesian):** Under an in-plane stretch ratio $\lambda$, the deformation mapping is given by:
    $$
    x_1 = \lambda X_1, \quad x_2 = \lambda X_2, \quad x_3 = \lambda_3 X_3.
    $$
    Enforcing incompressibility ($J = \lambda_1\lambda_2\lambda_3 = 1$) yields the out-of-plane stretch:
    
    $$
    \lambda_3 = \frac{1}{\lambda^2}
    $$

2.  **Combined Extension-Torsion of a Cylinder (Curvilinear):** For cylindrical LCE actuators, we map reference coordinates $(R, \Theta, Z)$ to current coordinates $(r, \theta, z)$ via:
    
    $$
    R \to r(R), \quad \Theta \to \theta = \Theta + \phi Z, \quad Z \to z = \lambda_z Z 
    $$

    where $\lambda_z$ represents the axial stretch and $\phi$ is the twist per unit reference length.

---

### 2.2. Kinematic Description

The kinematic description maps material points from their reference configuration $\mathbf{X}$ to their current configuration $\mathbf{x}$.

#### 2.2.1. Deformation Mapping and Gradient

Let the reference position be $\mathbf{X} = (X_1, X_2, X_3)$ and the current position be $\mathbf{x} = (x_1, x_2, x_3)$. The deformation mapping is expressed as:

$$\mathbf{x} = \boldsymbol{\chi}(\mathbf{X}, t)$$

The **deformation gradient** $\mathbf{F}$ is the spatial gradient of the mapping:

$$\mathbf{F} = \frac{\partial \boldsymbol{\chi}}{\partial \mathbf{X}}$$

For the cylindrical combined extension-torsion case, expressing $\mathbf{F}$ in local orthonormal bases yields:

$$
\mathbf{F} = \begin{bmatrix} \frac{dr}{dR} & 0 & 0 \\ 0 & \frac{r}{R} & r \phi \\ 0 & 0 & \lambda_z \end{bmatrix}.
$$

Here, $\mathbf{F}$ simultaneously captures axial stretch, circumferential expansion, and shear strain due to torsion, serving as the kinematic foundation.

#### 2.2.2. Invariants and Strain Measures

To construct frame-indifferent constitutive equations, we introduce the symmetric **Right Cauchy–Green deformation tensor** $\mathbf{C}$:

$$\mathbf{C} = \mathbf{F}^\mathrm{T} \mathbf{F}$$

For isotropic materials, the strain energy density is formulated using the three principal invariants of $\mathbf{C}$:

$$
I_1 = \text{tr}\,\mathbf{C}, \quad I_2 = \frac{1}{2}\left[ (\text{tr}\,\mathbf{C})^2 - \text{tr}(\mathbf{C}^2) \right], \quad I_3 = \det \mathbf{C}.
$$

*   **Frame Indifference:** $\mathbf{C}$ is objective under rigid-body rotations since $(\mathbf{Q}\mathbf{F})^\mathrm{T}(\mathbf{Q}\mathbf{F}) = \mathbf{F}^\mathrm{T}\mathbf{Q}^\mathrm{T}\mathbf{Q}\mathbf{F} = \mathbf{F}^\mathrm{T}\mathbf{F} = \mathbf{C}$.
*   **Incompressibility:** Enforced by setting the volume ratio $J = \det \mathbf{F} = 1$, which simplifies the third invariant to $I_3 = \det \mathbf{C} = 1$.

---

### 2.3. Choose the Constitutive Model (Strain-Energy Function)
A hyperelastic material is characterized by a strain-energy function $W = W(I_1, I_2)$ per unit reference volume. We compare three widely used models:
**Neo-Hookean Model:**

$$
W = \frac{\mu}{2} (I_1 - 3).
$$

*Explanation:* Derived from the statistical mechanics of Gaussian polymer chains. It works well for small to moderate strains but fails to capture large strain stiffening.

**Mooney–Rivlin Model:**

$$
W = C_1 (I_1 - 3) + C_2 (I_2 - 3).
$$

*Explanation:* Incorporates the second invariant $I_2$, providing a phenomenological description that significantly improves accuracy for rubber-like materials in shear and biaxial states.

**Yeoh Model:**

$$
W = \sum_{i=1}^{3} C_i (I_1 - 3)^i.
$$

*Explanation:* A highly robust, first-invariant-based model. It effectively captures the characteristic "S-shaped" stress-strain curves and abrupt strain-hardening at large stretches.

> Key Modeling Recommendation: For complex loading states, using a multi-invariant strain-energy function $W(I_1, I_2)$ is highly recommended.

---

### 2.4. Derive Stress from the Strain-Energy Function

Assuming incompressibility with a Lagrange multiplier $p$ (representing hydrostatic pressure), the **Second Piola–Kirchhoff stress tensor** $\mathbf{S}$ is:

$$
\mathbf{S} = 2 \frac{\partial W}{\partial \mathbf{C}} - p \mathbf{C}^{-1}
$$

The **Cauchy stress tensor** $\boldsymbol{\sigma}$ is obtained by push-forward transformation:

$$
\boldsymbol{\sigma} = \mathbf{F} \mathbf{S} \mathbf{F}^\mathrm{T} = -p\mathbf{I} + 2\frac{\partial W}{\partial I_1}\mathbf{B} - 2\frac{\partial W}{\partial I_2}\mathbf{B}^{-1}
$$

where $\mathbf{B} = \mathbf{F}\mathbf{F}^\mathrm{T}$ is the Left Cauchy–Green deformation tensor.
Using the chain rule, we can express $\mathbf{S}$ analytically in terms of the invariants:

$$
\mathbf{S} = 2 \left( \frac{\partial W}{\partial I_1} \frac{\partial I_1}{\partial \mathbf{C}} + \frac{\partial W}{\partial I_2} \frac{\partial I_2}{\partial \mathbf{C}} \right) - p \mathbf{C}^{-1}
$$

where:

$$
\frac{\partial I_1}{\partial \mathbf{C}} = \mathbf{I}, \quad \frac{\partial I_2}{\partial \mathbf{C}} = I_1 \mathbf{I} - \mathbf{C}.
$$

These stress expressions allow us to calculate axial force, torque, and membrane stresses, which are critical for characterizing soft actuators and balloons.

---

### 2.5. Apply Balance Laws and Boundary Conditions
Under quasi-static conditions, the Cauchy stress must satisfy the **local balance of linear momentum**:

$$
\nabla \cdot \boldsymbol{\sigma} = \mathbf{0}
$$

**Cylindrical Equilibrium:** For a pressurized cylindrical tube, the radial component of the equilibrium equation simplifies to:

$$
\frac{d\sigma_{rr}}{dr} + \frac{\sigma_{rr} - \sigma_{\theta\theta}}{r} = 0.
$$

**Boundary Conditions:** These equations are completed by prescribing traction boundary conditions (such as inner pressure $P_i$ on $r = r_i$ and zero outer pressure on $r = r_o$), or kinematic constraints at the boundaries.

---

### 2.6. Obtain Governing Equations (Semi-Analytical Framework)

By coupling kinematics, constitutive laws, and momentum balance, a **semi-analytical framework** is established. This allows one to express invariants and stresses analytically, reducing the complex non-linear boundary-value problem to a set of algebraic or ordinary differential equations. These equations are then solved numerically via Finite Element Analysis for specific loading commditions.

---

### SymPy Implementation
Below is a complete, educational Python script using **SymPy** to automate the symbolic derivation of Cauchy stress under uniaxial tension for an incompressible Neo-Hookean material.

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
        {% include figure.liquid path="assets/img/book_covers/ConM.jpg" title="example image" class="img-fluid rounded-lg z-depth-3" zoomable=true %}
    </a>
  </div>

  <div class="col-sm-4 mt-3 mt-md-0">
    <a href="https://mohsafaei.github.io/books/FEM/">
        {% include figure.liquid path="assets/img/book_covers/FEM.jpg" title="example image" class="img-fluid rounded-lg z-depth-3" zoomable=true %}
    </a>
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    <a href="https://mohsafaei.github.io/books/Nonlinear_Solid_Mechanics/">
        {% include figure.liquid path="assets/img/book_covers/NLSM.jpg" title="example image" class="img-fluid rounded-lg z-depth-3" zoomable=true %}
    </a>
  </div>
</div>