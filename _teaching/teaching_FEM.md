---
layout: page
title: Finite Element Method (FEM)
description: Fundamentals and Applications 🧩
img: assets/img/FEM.jpg
importance: 2
category: 
giscus_comments: false
---


## 1. Introduction

The **Finite Element Method (FEM)** is a numerical technique for obtaining approximate solutions to engineering and mathematical problems governed by **partial differential equations (PDEs)**.

FEM is especially useful when a problem involves:

- Complex geometries
- Nonlinear material behavior
- Complicated boundary conditions
- Large deformations
- Contact between multiple bodies
- Coupled physical phenomena

The central idea of FEM is to divide a continuous body into a finite number of smaller, simpler regions called **finite elements**. The collection of these elements is referred to as the **finite element mesh**.

---


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Elmer-pump.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/FEM_beam.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>



## 2. Historical Origin of FEM 📜

The development of FEM originated from the need to analyze complex structural systems that could not be solved conveniently using classical analytical methods.

### 2.1 Early Mathematical Foundations

The mathematical foundations of FEM can be traced to variational and approximation methods developed during the nineteenth and early twentieth centuries.

Important early contributions include:

- The **Rayleigh method**
- The **Ritz method**
- The **Galerkin method**
- Variational principles in elasticity
- Piecewise polynomial approximation

These methods approximate an unknown field, such as displacement, using a finite number of parameters.

### 2.2 Emergence in Structural Engineering

Modern FEM began to emerge in the 1940s and 1950s, primarily in the aerospace and structural engineering communities. Engineers needed reliable methods to analyze aircraft structures with complex geometries and loading conditions.

The term **finite element method** became widely recognized after the work of **Ray Clough** in the 1960s. Initially, FEM was applied mainly to:

- Truss structures
- Beam and frame systems
- Aircraft wings
- Thin plates and shells

With the development of digital computers, FEM rapidly expanded into continuum mechanics, heat transfer, fluid mechanics, electromagnetism, biomechanics, and multiphysics simulations.

### 2.3 Major Stages of Development

| Period | Major development |
|---|---|
| 1850s–1930s | Development of energy and variational methods |
| 1940s | Matrix-based analysis of structural systems |
| 1950s | Introduction of triangular and quadrilateral elements |
| 1960s | Formalization and widespread adoption of FEM |
| 1970s–1980s | Nonlinear, dynamic, and contact formulations |
| 1990s–2000s | Advanced commercial software and multiphysics analysis |
| Present | Isogeometric analysis, adaptive FEM, GPU computing, machine learning, and digital twins |

---

## 3. Fundamental Concept of FEM

Consider a continuous solid occupying the domain

$$
\Omega \subset \mathbb{R}^{3}.
$$

Instead of solving the governing differential equations directly over the entire domain, FEM divides the body into smaller subdomains:

$$
\Omega \approx \bigcup_{e=1}^{N_e}\Omega_e,
$$

where:

- $\Omega_e$ is the domain of element $e$.
- $N_e$ is the total number of elements.
- Adjacent elements are connected at nodes or along element boundaries.

Within each element, the unknown displacement field is approximated using interpolation or **shape functions**.

For an element, the displacement approximation is written as

$$
\mathbf{u}^{h}(\mathbf{X})
=
\sum_{a=1}^{n_e}
N_a(\mathbf{X})\mathbf{d}_a,
$$

or, in matrix notation,

$$
\mathbf{u}^{h}
=
\mathbf{N}\mathbf{d}_e,
$$

where:

| Symbol | Meaning |
|---|---|
| $\mathbf{u}^{h}$ | Approximate displacement field |
| $N_a$ | Shape function associated with node $a$ |
| $\mathbf{d}_a$ | Nodal displacement vector |
| $\mathbf{N}$ | Shape-function matrix |
| $\mathbf{d}_e$ | Element nodal displacement vector |
| $n_e$ | Number of nodes in the element |

The superscript $h$ indicates that the solution is associated with a discretized domain characterized by a representative element size $h$.

---

## 4. Why FEM Is Necessary

Analytical solutions are available only for relatively simple problems. For example, closed-form solutions generally require:

- Simple geometry
- Homogeneous materials
- Idealized loading
- Linear constitutive behavior
- Simple boundary conditions

Real engineering structures rarely satisfy all these conditions.

FEM provides an approximate solution by converting a continuous boundary-value problem into a finite system of algebraic equations.

### Analytical and Finite Element Approaches

| Feature | Analytical method | Finite element method |
|---|---|---|
| Geometry | Usually simple | Can be highly complex |
| Materials | Often homogeneous and linear | Linear, nonlinear, anisotropic, or heterogeneous |
| Boundary conditions | Usually idealized | Can be spatially complex |
| Contact | Difficult to model | Systematically incorporated |
| Output | Exact under stated assumptions | Approximate numerical solution |
| Computational cost | Usually low | Can be substantial |
| Local field information | Limited to solvable cases | Available throughout the mesh |

---

# 5. Governing Equations in Solid Mechanics

## 5.1 Strong Form

For a solid body under quasi-static conditions, the balance of linear momentum is

$$
\nabla\cdot\boldsymbol{\sigma}
+
\mathbf{b}
=
\mathbf{0}
\qquad
\text{in } \Omega,
$$

where:

- $\boldsymbol{\sigma}$ is the Cauchy stress tensor.
- $\mathbf{b}$ is the body force per unit current volume.
- $\Omega$ is the domain occupied by the body.

The boundary is commonly divided into a displacement boundary and a traction boundary:

$$
\partial\Omega
=
\Gamma_u
\cup
\Gamma_t,
$$

with

$$
\Gamma_u
\cap
\Gamma_t
=
\varnothing.
$$

The corresponding boundary conditions are

$$
\mathbf{u}
=
\bar{\mathbf{u}}
\qquad
\text{on } \Gamma_u,
$$

and

$$
\boldsymbol{\sigma}\mathbf{n}
=
\bar{\mathbf{t}}
\qquad
\text{on } \Gamma_t,
$$

where:

| Symbol | Meaning |
|---|---|
| $\mathbf{u}$ | Displacement field |
| $\bar{\mathbf{u}}$ | Prescribed displacement |
| $\mathbf{n}$ | Outward unit normal vector |
| $\bar{\mathbf{t}}$ | Prescribed surface traction |

These differential equations and boundary conditions form the **strong form** of the solid-mechanics problem.

---

## 5.2 Weak Form

FEM is generally constructed from the **weak form** rather than directly from the strong form.

The equilibrium equation is multiplied by an admissible virtual displacement $\delta\mathbf{u}$ and integrated over the domain. After applying integration by parts, the weak form becomes

$$
\int_{\Omega}
\boldsymbol{\sigma}
:
\delta\boldsymbol{\varepsilon}
\,\mathrm{d}V
=
\int_{\Omega}
\mathbf{b}\cdot\delta\mathbf{u}
\,\mathrm{d}V
+
\int_{\Gamma_t}
\bar{\mathbf{t}}\cdot\delta\mathbf{u}
\,\mathrm{d}A.
$$

The left-hand side represents the **internal virtual work**, whereas the right-hand side represents the **external virtual work**.

Therefore,

$$
\delta W_{\mathrm{int}}
=
\delta W_{\mathrm{ext}}.
$$

The weak form is advantageous because it:

1. Reduces the differentiability requirements of the unknown field.
2. Naturally includes traction boundary conditions.
3. provides a systematic foundation for spatial discretization.
4. Can be extended to nonlinear and multiphysics problems.

---

# 6. Finite Element Discretization

## 6.1 Strain–Displacement Relation

For infinitesimal deformations, the strain tensor is

$$
\boldsymbol{\varepsilon}
=
\frac{1}{2}
\left(
\nabla\mathbf{u}
+
\nabla\mathbf{u}^{\mathrm{T}}
\right).
$$

After introducing the finite element approximation, the strain field can be expressed in matrix form as

$$
\boldsymbol{\varepsilon}^{h}
=
\mathbf{B}\mathbf{d}_e,
$$

where $\mathbf{B}$ is the **strain–displacement matrix**.

> In this equation, $\mathbf{B}$ denotes the finite element strain–displacement matrix. It should not be confused with the left Cauchy–Green deformation tensor, which is also commonly denoted by $\mathbf{B}$ in finite-deformation mechanics.

---

## 6.2 Constitutive Relation

For a linear elastic material, the stress–strain relationship is

$$
\boldsymbol{\sigma}
=
\mathbb{C}
:
\boldsymbol{\varepsilon},
$$

or, in matrix notation,

$$
\boldsymbol{\sigma}
=
\mathbf{D}\boldsymbol{\varepsilon},
$$

where $\mathbb{C}$, or its matrix representation $\mathbf{D}$, is the fourth-order elasticity tensor.

For an isotropic material, its response is characterized by two independent elastic constants, such as:

- Young’s modulus $E$
- Poisson’s ratio $\nu$

---

## 6.3 Element Stiffness Matrix

Substituting the finite element approximations into the weak form produces the element-level equilibrium equation:

$$
\mathbf{K}_e\mathbf{d}_e
=
\mathbf{f}_e.
$$

For linear elasticity, the element stiffness matrix is

$$
\mathbf{K}_e
=
\int_{\Omega_e}
\mathbf{B}^{\mathrm{T}}
\mathbf{D}
\mathbf{B}
\,\mathrm{d}V.
$$

The element force vector can contain body-force and surface-traction contributions:

$$
\mathbf{f}_e
=
\int_{\Omega_e}
\mathbf{N}^{\mathrm{T}}\mathbf{b}
\,\mathrm{d}V
+
\int_{\Gamma_t^e}
\mathbf{N}^{\mathrm{T}}\bar{\mathbf{t}}
\,\mathrm{d}A.
$$

---

## 6.4 Global Assembly

The element equations are assembled into a global system:

$$
\mathbf{K}\mathbf{d}
=
\mathbf{f},
$$

where:

| Quantity | Description |
|---|---|
| $\mathbf{K}$ | Global stiffness matrix |
| $\mathbf{d}$ | Global vector of nodal unknowns |
| $\mathbf{f}$ | Global external force vector |

After applying the prescribed boundary conditions, the global system is solved for the unknown nodal displacements.

Strains and stresses are then computed from the displacement solution during the **post-processing** stage.

---

# 7. Standard FEM Workflow 🔧

A typical finite element analysis consists of three major stages.

## 7.1 Pre-Processing

During pre-processing, the physical problem is converted into a numerical model.

Main tasks include:

1. Creating or importing the geometry
2. Defining material properties
3. Selecting element types
4. Generating the finite element mesh
5. Applying loads
6. Applying boundary conditions
7. Defining contact and interactions
8. Selecting an appropriate analysis procedure

## 7.2 Solution Stage

The finite element solver performs the following operations:

1. Computes element matrices and vectors.
2. Assembles the global system.
3. Applies boundary conditions.
4. Solves for the unknown nodal variables.
5. Updates the solution for nonlinear or transient problems.
6. Checks convergence criteria.

## 7.3 Post-Processing

Common output quantities include:

- Displacements
- Strains
- Stresses
- Reaction forces
- Contact pressure
- Strain energy
- Natural frequencies
- Buckling modes
- Temperature fields
- Damage variables

### Summary of the Workflow

| Stage | Typical operations | Main output |
|---|---|---|
| Pre-processing | Geometry, materials, mesh, loads, constraints | Numerical model |
| Solution | Assembly and equation solving | Nodal unknowns |
| Post-processing | Stress recovery and visualization | Engineering results |
| Verification | Mesh refinement and numerical checks | Numerical confidence |
| Validation | Comparison with experiments | Physical confidence |

---

# 8. Practicality of FEM in Engineering

## 8.1 Why FEM Is Practical

FEM is widely used because it provides a flexible framework for analyzing realistic engineering systems.

Its primary practical advantages are:

- Accommodation of irregular geometries
- Support for different material models
- Straightforward application of complex boundary conditions
- Local refinement in regions of interest
- Prediction of quantities that may be difficult to measure experimentally
- Reduction in the number of costly physical prototypes
- Integration with computer-aided design and optimization tools

FEM does not necessarily replace experiments. Instead, simulation and experimentation usually complement one another.

Experiments can be used to:

- Calibrate material parameters
- Define realistic boundary conditions
- Validate numerical predictions
- Identify failure mechanisms

FEM can then be used to explore a much larger design space than would be practical through experiments alone.

---

## 8.2 Common Element Types

Different elements are suitable for different geometries and mechanical assumptions.

| Element type | Typical application | Main advantage |
|---|---|---|
| Truss | Slender members under axial loading | Computational simplicity |
| Beam | Slender structures with bending | Efficient structural representation |
| Shell | Thin-walled structures | Low cost compared with solid elements |
| 2D continuum | Plane stress, plane strain, and axisymmetry | Reduced computational cost |
| Tetrahedral solid | Complex three-dimensional geometries | Convenient automatic meshing |
| Hexahedral solid | Three-dimensional solid mechanics | Often accurate and efficient |
| Cohesive element | Delamination and fracture | Represents interface separation |
| Contact element | Interacting surfaces | Models sliding and separation |
| User-defined element | Specialized physics or formulations | High modeling flexibility |

---

# 9. FEM in Solid Mechanics 🏗️

Solid mechanics is one of the most important application areas of FEM. The method can predict how solid bodies deform, carry loads, become unstable, and fail.

## 9.1 Linear Elastic Analysis

Linear elastic analysis assumes:

- Small strains
- Small rotations
- Linear stress–strain behavior
- Unchanging contact conditions
- Loads that do not depend strongly on deformation

The governing system is

$$
\mathbf{K}\mathbf{d}
=
\mathbf{f}.
$$

Typical applications include:

- Machine components
- Building structures
- Bridges
- Frames
- Pressure-vessel components
- Components operating below their elastic limits

---

# 12. Accuracy, Verification, and Validation ✅

A finite element solution is not automatically correct merely because the software produces a result.

## 12.1 Verification

Verification asks:

> **Was the mathematical model solved correctly?**

Important verification procedures include:

- Mesh-convergence studies
- Time-step convergence studies
- Comparison with analytical benchmark problems
- Checking force and moment equilibrium
- Monitoring nonlinear convergence
- Examining element distortion
- Confirming unit consistency
- Checking sensitivity to solver parameters

A mesh-convergence study may monitor an output quantity $Q_h$ as the characteristic element size $h$ decreases:

$$
Q_h
\rightarrow
Q_{\mathrm{converged}}
\qquad
\text{as }
h
\rightarrow
0.
$$

A visually smooth contour plot does not guarantee a physically meaningful result. Engineering judgment is required throughout model development and result interpretation.

---

# 14. Emerging Directions 🚀

Modern developments are extending classical FEM through:

- Adaptive mesh refinement
- Extended FEM
- Isogeometric analysis
- Meshfree methods
- Multiscale modeling
- GPU-accelerated simulation
- Digital twins
- Automatic constitutive-model calibration
- Physics-informed neural networks
- Graph neural networks
- Surrogate and reduced-order models
- Uncertainty quantification

Machine-learning methods can complement FEM by accelerating repeated evaluations. For example, a trained surrogate may approximate the mapping

$$
\mathcal{G}:
\left(
\text{geometry},
\text{material},
\text{loading}
\right)
\longmapsto
\left(
\text{displacement},
\text{stress},
\text{failure metric}
\right).
$$

However, data-driven predictions should still satisfy physical constraints and be evaluated against reliable finite element or experimental results.


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