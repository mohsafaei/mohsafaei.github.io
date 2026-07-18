---
layout: page
title: Non-linear Solid Mechanics
description: Advanced Mechanics for Real-world Problems 🌟
img: assets/img/NLSM.jpg
importance: 1
related_publications: false
---

***



## 📜 **1. Introduction**

Non-linear solid mechanics is a branch of **continuum mechanics** that deals with solids under conditions where **linear assumptions fail**. It is essential for modeling:

*   **Large deformations** (geometric non-linearity),
*   **Non-linear material behavior** (plasticity, hyperelasticity),
*   **Complex boundary conditions** (contact, friction).

***


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/abaqus-rubber.gif" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rubber-compression.gif" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        <a href="https://www.goengineer.com/blog/understanding-abaqus-material-behavior">
          Hyperelastic Rubber Simulation using Non-linea solid mechanics theorem.
        </a>  
    </div>
</div>


***


## 🏗 **2. Origins of Non-linearity**

| 🔍 **Type**                 | 📖 **Origin & Cause**                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------ |
| **Geometric Non-linearity** | Large displacements and rotations → strain measures must account for updated geometry.           |
| **Material Non-linearity**  | Stress-strain relation deviates from Hooke’s law → plasticity, viscoelasticity, hyperelasticity. |
| **Boundary Non-linearity**  | Contact, friction, and changing constraints → non-linear boundary conditions.                    |

***


### ✅ **3.1 Geometric Non-linearity**

Geometric nonlinearity becomes important when a structure experiences:

- Large displacements
- Large rotations
- Large strains
- Significant changes in geometry
- Load directions that evolve with deformation

*   **Tools:** Green-Lagrange strain tensor, updated geometry.
*   **Examples:** Buckling of beams, shell deformation.


For finite deformation, the deformation gradient is

$$
\mathbf{F}
=
\frac{\partial\mathbf{x}}
{\partial\mathbf{X}},
$$

where $\mathbf{X}$ and $\mathbf{x}$ denote the reference and current positions, respectively.

The right Cauchy–Green deformation tensor is

$$
\mathbf{C}
=
\mathbf{F}^{\mathrm{T}}\mathbf{F},
$$

whereas the left Cauchy–Green deformation tensor is

$$
\mathbf{B}
=
\mathbf{F}\mathbf{F}^{\mathrm{T}}.
$$

The Green–Lagrange strain tensor is

$$
\mathbf{E}
=
\frac{1}{2}
\left(
\mathbf{C}
-
\mathbf{I}
\right).
$$

These quantities are commonly used in nonlinear finite element formulations for rubber, soft biological tissues, elastomers, and liquid crystal elastomers.

---



### ✅ **3.2 Material Non-linearity**

Material nonlinearity occurs when stress is not linearly proportional to strain.

Examples include:

- Plasticity
- Hyperelasticity
- Viscoelasticity
- Creep
- Damage
- Fracture
- Mullins effect
- Pseudoelasticity


The constitutive response may generally be written as

$$
\boldsymbol{\sigma}
=
\boldsymbol{\sigma}
\left(
\boldsymbol{\varepsilon},
\dot{\boldsymbol{\varepsilon}},
\boldsymbol{\alpha},
T
\right),
$$

where $\boldsymbol{\alpha}$ represents internal state variables and $T$ denotes temperature.


***

### ✅ **3.3 Boundary Non-linearity**


*   **Examples:** Bearings, crash analysis.


Contact analysis determines whether two surfaces:

- Remain separated
- Establish contact
- Slide relative to one another
- Stick due to friction
- Separate after contact

Contact introduces inequalities into the governing problem. For frictionless normal contact, the conditions may be expressed as

$$
g_n \geq 0,
$$

$$
t_n \leq 0,
$$

and

$$
g_n t_n = 0.
$$


where $g_n$ is the normal gap and $t_n$ is the normal contact traction under a sign convention in which compression is negative.

Contact is encountered in:

- Bolted joints
- Tire–road interaction
- Metal forming
- Biological joints
- Sealing systems
- Indentation tests
- Self-contacting soft structures

---


***

### ✅ **3.4 Instability & Bifurcation**

*   **Phenomenon:** Multiple equilibrium states → sudden configuration changes.
*   **Examples:** Snap-through buckling, shear bands.

***

### ✅ **3.5 Computational Non-linear Mechanics**

*   **Challenge:** Non-linear PDEs require iterative solvers.
*   **Methods:** Newton-Raphson, incremental-iterative schemes.
*   **Tool:** Finite Element Analysis (FEA).

***

## 📊 **4. Flowchart for Solving a Non-linear Solid Mechanics Problem**

    Start
      ↓
    Define Geometry & Material Properties
      ↓
    Identify Non-linear Sources
       - Geometric?
       - Material?
       - Boundary?
      ↓
    Formulate Governing Equations
       - Balance laws
       - Constitutive relations
      ↓
    Discretize (Finite Element Method)
      ↓
    Apply Boundary Conditions & Loads
      ↓
    Solve Iteratively
       - Newton-Raphson
       - Convergence check
      ↓
    Post-process Results
       - Stress, strain, deformation
    End

***

## 🌐 **5. Applications**

*   Biomechanics 🧬
*   Structural Engineering 🏗
*   Energy Systems ⚡


***

# 11. FEM for Hyperelastic Materials

Hyperelastic materials are described using a strain-energy density function

$$
W
=
W(\mathbf{F}),
$$

or, for isotropic materials,

$$
W
=
W(I_1,I_2,J).
$$

The strain invariants are commonly defined as

$$
I_1
=
\operatorname{tr}(\mathbf{C}),
$$

$$
I_2
=
\frac{1}{2}
\left[
\left(
\operatorname{tr}\mathbf{C}
\right)^2
-
\operatorname{tr}
\left(
\mathbf{C}^2
\right)
\right],
$$

and

$$
J
=
\det(\mathbf{F}).
$$

For an incompressible isotropic hyperelastic material, the second Piola–Kirchhoff stress can be expressed as

$$
\mathbf{S}
=
2
\frac{\partial W}
{\partial\mathbf{C}}
-
p\mathbf{C}^{-1},
$$

where $p$ is a Lagrange multiplier associated with incompressibility.

Using the chain rule,

$$
\mathbf{S}
=
2
\left(
\frac{\partial W}{\partial I_1}
\frac{\partial I_1}{\partial\mathbf{C}}
+
\frac{\partial W}{\partial I_2}
\frac{\partial I_2}{\partial\mathbf{C}}
\right)
-
p\mathbf{C}^{-1}.
$$

This formulation is frequently used for:

- Rubber-like materials
- Soft polymers
- Biological tissues
- Liquid crystal elastomers
- Soft robotic actuators
- Inflatable membranes and balloons

---


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